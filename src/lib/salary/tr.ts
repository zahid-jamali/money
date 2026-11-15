/**
 * Turkey Salary & Severance Calculation Engine
 * Pure TypeScript functions without React dependencies.
 */

import {
  ASGARI_UCRET_2026,
  SGK_PEK_2026,
  KIDEM_TAZMINATI_TAVANI_2026_H1,
  INCOME_TAX_BRACKETS_2026_WAGE,
  DAMGA_VERGISI_RATE,
  getKidemTavaniForDate,
  TaxBracket,
} from '@/rules/tr/salary-2026';

export type KidemReason =
  | 'employer_layoff' // İşveren tarafından fesih (haklı fesih 25/2 hariç)
  | 'employer_misconduct_25_2' // İşveren haklı fesih (İş Kanunu 25/II)
  | 'employee_just_cause_24' // İşçi haklı nedenle istifa (İş Kanunu 24)
  | 'employee_resignation' // Düz istifa (kıdem hakkı yok)
  | 'retirement' // Emeklilik veya 15 yıl 3600 gün şartı
  | 'military_service' // Askerlik nedeniyle ayrılma
  | 'marriage_female' // Kadın işçinin evlilik nedeniyle 1 yıl içinde feshi
  | 'death'; // İşçinin vefatı (mirasçılara ödenir)

export interface KidemInput {
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  grossMonthlySalary: number;
  regularBonuses?: number; // yol, yemek, prim, ikramiye vb.
  reason: KidemReason;
}

export interface KidemResult {
  serviceYears: number;
  serviceMonths: number;
  serviceDays: number;
  totalDays: number;
  giydirilmisBrut: number;
  cappedWage: number;
  isCapApplied: boolean;
  tavanApplied: number;
  grossSeverance: number;
  damgaVergisi: number;
  netSeverance: number;
  eligible: boolean;
  ineligibilityReason?: string;
}

export interface IhbarInput {
  grossMonthlySalary: number;
  regularBonuses?: number;
  serviceDurationMonths?: number;
  totalDaysWorked?: number;
  cumulativeTaxBase?: number; // Previous cumulative income tax base (default 0)
}

export interface IhbarResult {
  noticeWeeks: number;
  noticeDays: number;
  giydirilmisBrut: number;
  dailyWage: number;
  grossIhbar: number;
  gelirVergisi: number;
  damgaVergisi: number;
  netIhbar: number;
  effectiveTaxRate: number;
}

export interface CombinedInput {
  startDate: string;
  endDate: string;
  grossMonthlySalary: number;
  regularBonuses?: number;
  reason: KidemReason;
  cumulativeTaxBase?: number;
  includeIhbar?: boolean; // defaults to true if employer_layoff
}

export interface CombinedResult {
  kidem: KidemResult;
  ihbar: IhbarResult;
  totalGross: number;
  totalNet: number;
  totalDamgaVergisi: number;
  totalGelirVergisi: number;
}

export interface GrossToNetInput {
  grossSalary: number | number[]; // Single monthly gross or 12 individual months
  use5PointIncentive?: boolean; // Default true (15.5% vs 20.5%)
  year?: number;
}

export interface MonthlyBreakdown {
  month: number;
  monthName: string;
  gross: number;
  sgkIsci: number;
  issizlikIsci: number;
  gelirVergisiMatrahi: number;
  cumulativeMatrahBefore: number;
  cumulativeMatrahAfter: number;
  grossIncomeTax: number;
  asgariUcretGvIstisnasi: number;
  netIncomeTax: number;
  grossDamgaVergisi: number;
  damgaVergisiIstisnasi: number;
  netDamgaVergisi: number;
  netSalary: number;
  sgkIsveren: number;
  issizlikIsveren: number;
  totalEmployerCost: number;
}

export interface GrossToNetYearResult {
  months: MonthlyBreakdown[];
  totals: {
    gross: number;
    sgkIsci: number;
    issizlikIsci: number;
    grossIncomeTax: number;
    asgariUcretGvIstisnasi: number;
    netIncomeTax: number;
    grossDamgaVergisi: number;
    damgaVergisiIstisnasi: number;
    netDamgaVergisi: number;
    netSalary: number;
    sgkIsveren: number;
    issizlikIsveren: number;
    totalEmployerCost: number;
  };
  averages: {
    monthlyGross: number;
    monthlyNet: number;
    monthlyEmployerCost: number;
  };
}

export interface NetToGrossInput {
  targetNetSalary: number;
  month?: number; // 1 to 12, default 1
  use5PointIncentive?: boolean;
}

export interface NetToGrossResult {
  targetNetSalary: number;
  requiredGrossSalary: number;
  calculatedNetSalary: number;
  difference: number;
  sgkIsci: number;
  issizlikIsci: number;
  netIncomeTax: number;
  netDamgaVergisi: number;
  totalEmployerCost: number;
}

const MONTH_NAMES_TR = [
  'Ocak',
  'Şubat',
  'Mart',
  'Nisan',
  'Mayıs',
  'Haziran',
  'Temmuz',
  'Ağustos',
  'Eylül',
  'Ekim',
  'Kasım',
  'Aralık',
];

/**
 * Utility: round monetary amount to 2 decimal places
 */
export function round2(num: number): number {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

/**
 * Calculate tax on a slice of income [baseBefore, baseBefore + taxableSlice] across brackets
 */
export function calculateTaxForSlice(
  baseBefore: number,
  taxableSlice: number,
  brackets: TaxBracket[] = INCOME_TAX_BRACKETS_2026_WAGE,
): number {
  if (taxableSlice <= 0) return 0;
  const baseAfter = baseBefore + taxableSlice;
  let tax = 0;
  let lowerLimit = 0;

  for (const bracket of brackets) {
    const upperLimit = bracket.limit;
    // Overlap between [baseBefore, baseAfter] and [lowerLimit, upperLimit]
    const sliceStart = Math.max(baseBefore, lowerLimit);
    const sliceEnd = Math.min(baseAfter, upperLimit);

    if (sliceEnd > sliceStart) {
      tax += (sliceEnd - sliceStart) * bracket.rate;
    }

    lowerLimit = upperLimit;
    if (baseAfter <= upperLimit) break;
  }

  return round2(tax);
}

/**
 * Compute difference in years, months, days between two dates
 */
export function calculateDateDifference(
  startDateStr: string,
  endDateStr: string,
): { years: number; months: number; days: number; totalDays: number } {
  const [sY, sM, sD] = startDateStr.split('-').map(Number);
  const [eY, eM, eD] = endDateStr.split('-').map(Number);

  const startUtc = Date.UTC(sY, sM - 1, sD);
  const endUtc = Date.UTC(eY, eM - 1, eD);

  if (endUtc < startUtc) {
    return { years: 0, months: 0, days: 0, totalDays: 0 };
  }

  const totalDays = Math.round((endUtc - startUtc) / (1000 * 60 * 60 * 24)) + 1; // inclusive

  // Use next day after end date for half-open interval [start, nextDay)
  const nextDate = new Date(Date.UTC(eY, eM - 1, eD + 1));
  const nY = nextDate.getUTCFullYear();
  const nM = nextDate.getUTCMonth() + 1;
  const nD = nextDate.getUTCDate();

  let years = nY - sY;
  let months = nM - sM;
  let days = nD - sD;

  if (days < 0) {
    months -= 1;
    // days in month preceding nextDate
    const prevMonthDays = new Date(Date.UTC(nY, nM - 1, 0)).getUTCDate();
    days += prevMonthDays;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days, totalDays };
}

/**
 * 1. Kıdem Tazminatı Hesaplama
 */
export function calculateKidemTazminati(input: KidemInput): KidemResult {
  const { startDate, endDate, grossMonthlySalary, regularBonuses = 0, reason } = input;
  const diff = calculateDateDifference(startDate, endDate);
  const giydirilmisBrut = round2(Math.max(0, grossMonthlySalary) + Math.max(0, regularBonuses));

  // Eligibility check: service duration >= 365 days
  if (diff.totalDays < 365) {
    return {
      serviceYears: diff.years,
      serviceMonths: diff.months,
      serviceDays: diff.days,
      totalDays: diff.totalDays,
      giydirilmisBrut,
      cappedWage: 0,
      isCapApplied: false,
      tavanApplied: 0,
      grossSeverance: 0,
      damgaVergisi: 0,
      netSeverance: 0,
      eligible: false,
      ineligibilityReason: `Kıdem tazminatına hak kazanabilmek için 1475 sayılı İş Kanunu'nun 14. maddesi uyarınca aynı işverene bağlı işyerlerinde en az 1 tam yıl (365 gün) çalışmış olmak şarttır. Hesaplanan toplam çalışma süreniz ${diff.totalDays} gündür.`,
    };
  }

  // Eligibility check: termination reason
  if (reason === 'employer_misconduct_25_2') {
    return {
      serviceYears: diff.years,
      serviceMonths: diff.months,
      serviceDays: diff.days,
      totalDays: diff.totalDays,
      giydirilmisBrut,
      cappedWage: 0,
      isCapApplied: false,
      tavanApplied: 0,
      grossSeverance: 0,
      damgaVergisi: 0,
      netSeverance: 0,
      eligible: false,
      ineligibilityReason: `4857 sayılı İş Kanunu'nun 25/II maddesi (ahlak ve iyi niyet kurallarına uymayan haller) gerekçesiyle iş akdi feshedilen işçiye kıdem tazminatı ödenmez.`,
    };
  }

  if (reason === 'employee_resignation') {
    return {
      serviceYears: diff.years,
      serviceMonths: diff.months,
      serviceDays: diff.days,
      totalDays: diff.totalDays,
      giydirilmisBrut,
      cappedWage: 0,
      isCapApplied: false,
      tavanApplied: 0,
      grossSeverance: 0,
      damgaVergisi: 0,
      netSeverance: 0,
      eligible: false,
      ineligibilityReason: `İş Kanunu uyarınca haklı bir fesih sebebi (madde 24), emeklilik, askerlik veya kadın çalışanlar için evlilik şartı olmaksızın kendi isteğiyle istifa eden çalışan kıdem tazminatına hak kazanamaz.`,
    };
  }

  // Eligible
  const tavan = getKidemTavaniForDate(endDate);
  const isCapApplied = giydirilmisBrut > tavan;
  const cappedWage = isCapApplied ? tavan : giydirilmisBrut;

  // Gross severance = (cappedWage * totalDays) / 365
  const grossSeverance = round2((cappedWage * diff.totalDays) / 365);
  // Kıdem tazminatından SADECE damga vergisi kesilir (GVK m.25/1 gereği gelir vergisinden, 5510 s.K. m.80 gereği SGK'dan muaftır)
  const damgaVergisi = round2(grossSeverance * DAMGA_VERGISI_RATE);
  const netSeverance = round2(grossSeverance - damgaVergisi);

  return {
    serviceYears: diff.years,
    serviceMonths: diff.months,
    serviceDays: diff.days,
    totalDays: diff.totalDays,
    giydirilmisBrut,
    cappedWage,
    isCapApplied,
    tavanApplied: tavan,
    grossSeverance,
    damgaVergisi,
    netSeverance,
    eligible: true,
  };
}

/**
 * 2. İhbar Tazminatı Hesaplama
 */
export function calculateIhbarTazminati(input: IhbarInput): IhbarResult {
  const {
    grossMonthlySalary,
    regularBonuses = 0,
    serviceDurationMonths,
    totalDaysWorked,
    cumulativeTaxBase = 0,
  } = input;

  const giydirilmisBrut = round2(Math.max(0, grossMonthlySalary) + Math.max(0, regularBonuses));
  const dailyWage = round2(giydirilmisBrut / 30);

  // Determine service months
  let months = serviceDurationMonths ?? 0;
  if (serviceDurationMonths === undefined && totalDaysWorked !== undefined) {
    months = totalDaysWorked / 30.416667;
  }

  // Notice period brackets under İş Kanunu m.17:
  // - 6 aydan az: 2 hafta (14 gün)
  // - 6 ay - 1.5 yıl (18 ay): 4 hafta (28 gün)
  // - 1.5 yıl - 3 yıl (36 ay): 6 hafta (42 gün)
  // - 3 yıldan fazla: 8 hafta (56 gün)
  let noticeWeeks = 2;
  let noticeDays = 14;

  if (months >= 36) {
    noticeWeeks = 8;
    noticeDays = 56;
  } else if (months >= 18) {
    noticeWeeks = 6;
    noticeDays = 42;
  } else if (months >= 6) {
    noticeWeeks = 4;
    noticeDays = 28;
  }

  const grossIhbar = round2((giydirilmisBrut / 30) * noticeDays);

  // Deductions:
  // 1. Gelir Vergisi (kümülatif matraha eklenerek tarifeye tabi tutulur)
  const gelirVergisi = calculateTaxForSlice(cumulativeTaxBase, grossIhbar);
  // 2. Damga Vergisi (%0.759)
  const damgaVergisi = round2(grossIhbar * DAMGA_VERGISI_RATE);

  const netIhbar = round2(grossIhbar - gelirVergisi - damgaVergisi);
  const effectiveTaxRate = grossIhbar > 0 ? round2(((gelirVergisi + damgaVergisi) / grossIhbar) * 100) : 0;

  return {
    noticeWeeks,
    noticeDays,
    giydirilmisBrut,
    dailyWage,
    grossIhbar,
    gelirVergisi,
    damgaVergisi,
    netIhbar,
    effectiveTaxRate,
  };
}

/**
 * 3. Kıdem ve İhbar Birlikte Hesaplama
 */
export function calculateKidemVeIhbar(input: CombinedInput): CombinedResult {
  const kidem = calculateKidemTazminati({
    startDate: input.startDate,
    endDate: input.endDate,
    grossMonthlySalary: input.grossMonthlySalary,
    regularBonuses: input.regularBonuses,
    reason: input.reason,
  });

  const ihbar = calculateIhbarTazminati({
    grossMonthlySalary: input.grossMonthlySalary,
    regularBonuses: input.regularBonuses,
    totalDaysWorked: kidem.totalDays,
    cumulativeTaxBase: input.cumulativeTaxBase || 0,
  });

  const shouldIncludeIhbar =
    input.includeIhbar !== false &&
    (input.reason === 'employer_layoff' || input.reason === 'employee_just_cause_24');

  const actualIhbarGross = shouldIncludeIhbar ? ihbar.grossIhbar : 0;
  const actualIhbarNet = shouldIncludeIhbar ? ihbar.netIhbar : 0;
  const actualIhbarDamga = shouldIncludeIhbar ? ihbar.damgaVergisi : 0;
  const actualIhbarGelir = shouldIncludeIhbar ? ihbar.gelirVergisi : 0;

  const totalGross = round2(kidem.grossSeverance + actualIhbarGross);
  const totalNet = round2(kidem.netSeverance + actualIhbarNet);
  const totalDamgaVergisi = round2(kidem.damgaVergisi + actualIhbarDamga);
  const totalGelirVergisi = round2(actualIhbarGelir);

  return {
    kidem,
    ihbar: shouldIncludeIhbar
      ? ihbar
      : {
          ...ihbar,
          grossIhbar: 0,
          gelirVergisi: 0,
          damgaVergisi: 0,
          netIhbar: 0,
        },
    totalGross,
    totalNet,
    totalDamgaVergisi,
    totalGelirVergisi,
  };
}

/**
 * 4. Brütten Nete Maaş Hesaplama (12 Aylık Tam Yıl Simülasyonu)
 */
export function calculateGrossToNet(input: GrossToNetInput): GrossToNetYearResult {
  const { grossSalary, use5PointIncentive = true } = input;
  const pekTavan = SGK_PEK_2026.tavan;
  const asgariGross = ASGARI_UCRET_2026.gross;
  const asgariSgkIsci = ASGARI_UCRET_2026.sgkIsci;
  const asgariIssizlikIsci = ASGARI_UCRET_2026.issizlikIsci;
  const asgariMonthlyMatrah = round2(asgariGross - asgariSgkIsci - asgariIssizlikIsci); // 22,104.67 TL
  const asgariDamgaIstisnasi = ASGARI_UCRET_2026.damgaVergisiIstisnasi; // 197.38 TL

  const isverenSgkRate = use5PointIncentive ? 0.155 : 0.205;
  const isverenIssizlikRate = 0.02;

  let cumulativeTaxBase = 0;
  let cumulativeAsgariTaxBase = 0;
  const months: MonthlyBreakdown[] = [];

  for (let m = 1; m <= 12; m++) {
    const gross = Array.isArray(grossSalary) ? grossSalary[m - 1] ?? 0 : grossSalary;

    // SGK Base capped at PEK tavan
    const sgkBase = Math.min(gross, pekTavan);
    const sgkIsci = round2(sgkBase * 0.14);
    const issizlikIsci = round2(sgkBase * 0.01);

    const gelirVergisiMatrahi = round2(Math.max(0, gross - sgkIsci - issizlikIsci));
    const cumulativeMatrahBefore = cumulativeTaxBase;
    const cumulativeMatrahAfter = round2(cumulativeTaxBase + gelirVergisiMatrahi);

    // Gross Income Tax
    const grossIncomeTax = calculateTaxForSlice(
      cumulativeMatrahBefore,
      gelirVergisiMatrahi,
      INCOME_TAX_BRACKETS_2026_WAGE,
    );

    // Asgari Ücret Gelir Vergisi İstisnası (7349 s.K. / GVK m.23/18)
    const asgariMatrahBefore = cumulativeAsgariTaxBase;
    const asgariMatrahAfter = round2(cumulativeAsgariTaxBase + asgariMonthlyMatrah);
    const asgariUcretGvIstisnasi = calculateTaxForSlice(
      asgariMatrahBefore,
      asgariMonthlyMatrah,
      INCOME_TAX_BRACKETS_2026_WAGE,
    );

    // Net income tax: tax cannot be negative
    const netIncomeTax = round2(Math.max(0, grossIncomeTax - asgariUcretGvIstisnasi));

    // Damga vergisi & istisna
    const grossDamgaVergisi = round2(gross * DAMGA_VERGISI_RATE);
    const netDamgaVergisi = round2(Math.max(0, grossDamgaVergisi - asgariDamgaIstisnasi));

    // Net salary
    const netSalary = round2(gross - sgkIsci - issizlikIsci - netIncomeTax - netDamgaVergisi);

    // Employer cost
    const sgkIsveren = round2(sgkBase * isverenSgkRate);
    const issizlikIsveren = round2(sgkBase * isverenIssizlikRate);
    const totalEmployerCost = round2(gross + sgkIsveren + issizlikIsveren);

    cumulativeTaxBase = cumulativeMatrahAfter;
    cumulativeAsgariTaxBase = asgariMatrahAfter;

    months.push({
      month: m,
      monthName: MONTH_NAMES_TR[m - 1],
      gross,
      sgkIsci,
      issizlikIsci,
      gelirVergisiMatrahi,
      cumulativeMatrahBefore,
      cumulativeMatrahAfter,
      grossIncomeTax,
      asgariUcretGvIstisnasi,
      netIncomeTax,
      grossDamgaVergisi,
      damgaVergisiIstisnasi: asgariDamgaIstisnasi,
      netDamgaVergisi,
      netSalary,
      sgkIsveren,
      issizlikIsveren,
      totalEmployerCost,
    });
  }

  const totals = months.reduce(
    (acc, cur) => ({
      gross: round2(acc.gross + cur.gross),
      sgkIsci: round2(acc.sgkIsci + cur.sgkIsci),
      issizlikIsci: round2(acc.issizlikIsci + cur.issizlikIsci),
      grossIncomeTax: round2(acc.grossIncomeTax + cur.grossIncomeTax),
      asgariUcretGvIstisnasi: round2(acc.asgariUcretGvIstisnasi + cur.asgariUcretGvIstisnasi),
      netIncomeTax: round2(acc.netIncomeTax + cur.netIncomeTax),
      grossDamgaVergisi: round2(acc.grossDamgaVergisi + cur.grossDamgaVergisi),
      damgaVergisiIstisnasi: round2(acc.damgaVergisiIstisnasi + cur.damgaVergisiIstisnasi),
      netDamgaVergisi: round2(acc.netDamgaVergisi + cur.netDamgaVergisi),
      netSalary: round2(acc.netSalary + cur.netSalary),
      sgkIsveren: round2(acc.sgkIsveren + cur.sgkIsveren),
      issizlikIsveren: round2(acc.issizlikIsveren + cur.issizlikIsveren),
      totalEmployerCost: round2(acc.totalEmployerCost + cur.totalEmployerCost),
    }),
    {
      gross: 0,
      sgkIsci: 0,
      issizlikIsci: 0,
      grossIncomeTax: 0,
      asgariUcretGvIstisnasi: 0,
      netIncomeTax: 0,
      grossDamgaVergisi: 0,
      damgaVergisiIstisnasi: 0,
      netDamgaVergisi: 0,
      netSalary: 0,
      sgkIsveren: 0,
      issizlikIsveren: 0,
      totalEmployerCost: 0,
    },
  );

  return {
    months,
    totals,
    averages: {
      monthlyGross: round2(totals.gross / 12),
      monthlyNet: round2(totals.netSalary / 12),
      monthlyEmployerCost: round2(totals.totalEmployerCost / 12),
    },
  };
}

/**
 * 5. Netten Brüte Maaş Hesaplama (Binary Search Precision Solver)
 */
export function calculateNetToGross(input: NetToGrossInput): NetToGrossResult {
  const { targetNetSalary, month = 1, use5PointIncentive = true } = input;

  if (targetNetSalary <= 0) {
    return {
      targetNetSalary: 0,
      requiredGrossSalary: 0,
      calculatedNetSalary: 0,
      difference: 0,
      sgkIsci: 0,
      issizlikIsci: 0,
      netIncomeTax: 0,
      netDamgaVergisi: 0,
      totalEmployerCost: 0,
    };
  }

  // Exact shortcut for standard 2026 Asgari Ücret
  if (Math.abs(targetNetSalary - ASGARI_UCRET_2026.net) < 0.01 && month === 1) {
    const res = calculateGrossToNet({ grossSalary: ASGARI_UCRET_2026.gross, use5PointIncentive });
    const m1 = res.months[0];
    return {
      targetNetSalary,
      requiredGrossSalary: ASGARI_UCRET_2026.gross,
      calculatedNetSalary: m1.netSalary,
      difference: round2(m1.netSalary - targetNetSalary),
      sgkIsci: m1.sgkIsci,
      issizlikIsci: m1.issizlikIsci,
      netIncomeTax: m1.netIncomeTax,
      netDamgaVergisi: m1.netDamgaVergisi,
      totalEmployerCost: m1.totalEmployerCost,
    };
  }

  let low = targetNetSalary;
  let high = Math.max(targetNetSalary * 3, 200000);
  let bestGross = low;

  for (let i = 0; i < 60; i++) {
    const mid = (low + high) / 2;
    const sim = calculateGrossToNet({ grossSalary: mid, use5PointIncentive });
    const netAtMonth = sim.months[month - 1].netSalary;

    if (Math.abs(netAtMonth - targetNetSalary) < 0.005) {
      bestGross = mid;
      break;
    }

    if (netAtMonth < targetNetSalary) {
      low = mid;
    } else {
      high = mid;
    }
    bestGross = mid;
  }

  const roundedGross = round2(bestGross);
  const finalSim = calculateGrossToNet({ grossSalary: roundedGross, use5PointIncentive });
  const finalMonth = finalSim.months[month - 1];

  return {
    targetNetSalary,
    requiredGrossSalary: roundedGross,
    calculatedNetSalary: finalMonth.netSalary,
    difference: round2(finalMonth.netSalary - targetNetSalary),
    sgkIsci: finalMonth.sgkIsci,
    issizlikIsci: finalMonth.issizlikIsci,
    netIncomeTax: finalMonth.netIncomeTax,
    netDamgaVergisi: finalMonth.netDamgaVergisi,
    totalEmployerCost: finalMonth.totalEmployerCost,
  };
}
