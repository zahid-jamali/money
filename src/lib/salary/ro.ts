import { ROMANIA_SALARY_RULES_2026 } from '@/rules/ro/salary-2026';

export interface RomanianSalaryInput {
  grossSalary: number;
  dependants?: number;
  isUnder26?: boolean;
  schoolChildrenCount?: number;
  applyMinWageExemption?: boolean;
}

export interface RomanianSalaryResult {
  grossSalary: number;
  netSalary: number;
  casEmployee: number; // 25% pensii
  cassEmployee: number; // 10% sănătate
  personalDeduction: number;
  basePersonalDeduction: number;
  supplementalDeduction: number;
  taxableIncome: number;
  incomeTax: number; // 10%
  camEmployer: number; // 2.25%
  totalEmployerCost: number;
  taxExemptAmount: number;
  effectiveTaxRate: number; // (Brut - Net) / Brut
  totalTaxWedge: number; // (Cost Total - Net) / Cost Total
}

export interface PfaVsSrlInput {
  annualRevenue: number;
  annualExpenses?: number;
  hasOtherSalaryContract?: boolean; // affects CAS/CASS thresholds for PFA
  isItOrConsultancy?: boolean; // triggers 3% rate for micro
}

export interface PfaResult {
  grossRevenue: number;
  deductibleExpenses: number;
  netTaxableIncome: number;
  casAmount: number; // 0, 12.150, or 24.300 lei
  cassAmount: number; // 10% capped between 6 and 60 min wages
  incomeTax: number; // 10%
  netProfit: number;
  effectiveTaxRate: number;
}

export interface SrlResult {
  grossRevenue: number;
  deductibleExpenses: number;
  microTaxRate: number; // 1% or 3%
  microTaxAmount: number;
  grossDividends: number;
  dividendTax: number; // 8%
  dividendCass: number; // 0, 2.430, 4.860, or 9.720 lei
  minimumSalaryAnnualCost: number; // cost of 1 mandatory full-time employee
  netProfit: number;
  effectiveTaxRate: number;
}

export interface PfaVsSrlComparisonResult {
  annualRevenue: number;
  pfa: PfaResult;
  srl: SrlResult;
  netDifference: number; // SRL net - PFA net
  betterChoice: 'pfa' | 'srl';
}

/**
 * Calculates statutory personal deduction according to Art. 77 Cod Fiscal.
 */
export function calculatePersonalDeduction(
  grossSalary: number,
  dependants: number = 0,
  isUnder26: boolean = false,
  schoolChildrenCount: number = 0,
): { baseDeduction: number; supplementalDeduction: number; totalDeduction: number } {
  const minWage = ROMANIA_SALARY_RULES_2026.minimumWageGross; // 4.050 lei
  const upperLimit = ROMANIA_SALARY_RULES_2026.personalDeductionThresholdUpper; // 6.050 lei

  let baseDeduction = 0;
  let supplementalDeduction = 0;

  // 1. Children enrolled in school/preschool get 100 RON per child regardless of salary level (Art. 77 alin. 10)
  supplementalDeduction += schoolChildrenCount * 100;

  // Base deduction and under-26 deduction only apply if gross <= upperLimit (6.050 lei)
  if (grossSalary <= upperLimit && grossSalary > 0) {
    // Base percentages at minimum wage level
    const percentages: Record<number, number> = {
      0: 0.2, // 20% = 810 lei
      1: 0.25, // 25% = 1.012,50 lei
      2: 0.3, // 30% = 1.215 lei
      3: 0.35, // 35% = 1.417,50 lei
    };
    const basePct = dependants >= 4 ? 0.45 : percentages[dependants] ?? 0.2;

    // Linear regression coefficient: 1 at 4.050 lei, down to 0 at 6.050 lei
    let coeff = 1;
    if (grossSalary > minWage) {
      coeff = Math.max(0, 1 - (grossSalary - minWage) / 2000);
    }

    // Art. 77 alin. 5: rounded to tens (rotunjire la zeci)
    const rawBase = basePct * minWage * coeff;
    baseDeduction = Math.ceil(rawBase / 10) * 10;

    // Young employees under 26 get 15% of minimum wage deduction if gross <= 6.050
    if (isUnder26) {
      const rawUnder26 = 0.15 * minWage * coeff;
      supplementalDeduction += Math.ceil(rawUnder26 / 10) * 10;
    }
  }

  const totalDeduction = baseDeduction + supplementalDeduction;

  return {
    baseDeduction,
    supplementalDeduction,
    totalDeduction,
  };
}

/**
 * Calculates Romanian salary from Gross to Net (and employer costs) for 2026.
 */
export function calculateRomanianSalary(input: RomanianSalaryInput): RomanianSalaryResult {
  const {
    grossSalary,
    dependants = 0,
    isUnder26 = false,
    schoolChildrenCount = 0,
    applyMinWageExemption = grossSalary === ROMANIA_SALARY_RULES_2026.minimumWageGross,
  } = input;

  if (grossSalary <= 0) {
    return {
      grossSalary: 0,
      netSalary: 0,
      casEmployee: 0,
      cassEmployee: 0,
      personalDeduction: 0,
      basePersonalDeduction: 0,
      supplementalDeduction: 0,
      taxableIncome: 0,
      incomeTax: 0,
      camEmployer: 0,
      totalEmployerCost: 0,
      taxExemptAmount: 0,
      effectiveTaxRate: 0,
      totalTaxWedge: 0,
    };
  }

  // 300 RON non-taxable exemption for exact statutory minimum wage (OUG 115/2023 & extensions)
  const isEligibleForMinWageExemption =
    applyMinWageExemption && grossSalary === ROMANIA_SALARY_RULES_2026.minimumWageGross;
  const taxExemptAmount = isEligibleForMinWageExemption
    ? ROMANIA_SALARY_RULES_2026.taxFreeAmountMinWage
    : 0;

  // Base for social contributions
  const contributionBase = Math.max(0, grossSalary - taxExemptAmount);

  // CAS (25% pensii)
  const casEmployee = Math.round(contributionBase * ROMANIA_SALARY_RULES_2026.casRate);

  // CASS (10% sănătate)
  const cassEmployee = Math.round(contributionBase * ROMANIA_SALARY_RULES_2026.cassRate);

  // Personal deduction
  const { baseDeduction, supplementalDeduction, totalDeduction } = calculatePersonalDeduction(
    grossSalary,
    dependants,
    isUnder26,
    schoolChildrenCount,
  );

  // Taxable base for 10% income tax:
  // Gross minus taxExemptAmount minus CAS minus CASS minus personal deduction
  const rawTaxable = contributionBase - casEmployee - cassEmployee - totalDeduction;
  const taxableIncome = Math.max(0, Math.round(rawTaxable));

  // Income Tax (10%)
  const incomeTax = Math.round(taxableIncome * ROMANIA_SALARY_RULES_2026.incomeTaxRate);

  // Net salary
  const netSalary = grossSalary - casEmployee - cassEmployee - incomeTax;

  // Employer CAM (2.25%) calculated on total gross
  const camEmployer = Math.round(grossSalary * ROMANIA_SALARY_RULES_2026.camRate);
  const totalEmployerCost = grossSalary + camEmployer;

  const effectiveTaxRate = grossSalary > 0 ? (grossSalary - netSalary) / grossSalary : 0;
  const totalTaxWedge =
    totalEmployerCost > 0 ? (totalEmployerCost - netSalary) / totalEmployerCost : 0;

  return {
    grossSalary,
    netSalary,
    casEmployee,
    cassEmployee,
    personalDeduction: totalDeduction,
    basePersonalDeduction: baseDeduction,
    supplementalDeduction,
    taxableIncome,
    incomeTax,
    camEmployer,
    totalEmployerCost,
    taxExemptAmount,
    effectiveTaxRate,
    totalTaxWedge,
  };
}

/**
 * Reverse calculation: Net to Gross for Romania
 */
export function calculateNetToGrossRo(
  targetNet: number,
  options: Omit<RomanianSalaryInput, 'grossSalary'> = {},
): number {
  if (targetNet <= 0) return 0;

  // If target net matches exact minimum wage net
  if (
    Math.abs(targetNet - ROMANIA_SALARY_RULES_2026.minimumWageNet) < 2 &&
    (options.dependants ?? 0) === 0 &&
    !options.isUnder26 &&
    (options.schoolChildrenCount ?? 0) === 0
  ) {
    return ROMANIA_SALARY_RULES_2026.minimumWageGross;
  }

  let low = targetNet;
  let high = targetNet * 2.5;
  let bestGross = high;
  let minDiff = Infinity;

  // Binary search to find gross within 1 RON
  for (let i = 0; i < 40; i++) {
    const mid = Math.round((low + high) / 2);
    const res = calculateRomanianSalary({ ...options, grossSalary: mid });
    const diff = res.netSalary - targetNet;

    if (Math.abs(diff) < minDiff) {
      minDiff = Math.abs(diff);
      bestGross = mid;
    }

    if (Math.abs(diff) <= 0.5) {
      return mid;
    }

    if (diff < 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return bestGross;
}

/**
 * Compares PFA Sistem Real vs SRL Microîntreprindere in 2026.
 */
export function calculatePfaVsSrlRo(input: PfaVsSrlInput): PfaVsSrlComparisonResult {
  const {
    annualRevenue,
    annualExpenses = 0,
    hasOtherSalaryContract = false,
    isItOrConsultancy = false,
  } = input;

  const minWage = ROMANIA_SALARY_RULES_2026.minimumWageGross; // 4.050 lei
  const minWageAnnual = minWage * 12; // 48.600 lei

  // ----------------------------------------------------
  // 1. PFA SISTEM REAL
  // ----------------------------------------------------
  const pfaNetIncome = Math.max(0, annualRevenue - annualExpenses);

  // CAS PFA (25% pensii):
  // Sub 12 salarii minime: opțional (0 lei)
  // Între 12 și 24 salarii: 25% din 12 salarii = 12.150 lei
  // Peste 24 salarii: 25% din 24 salarii = 24.300 lei
  let pfaCas = 0;
  const tier12 = 12 * minWage; // 48.600 lei
  const tier24 = 24 * minWage; // 97.200 lei

  if (pfaNetIncome >= tier24) {
    pfaCas = tier24 * 0.25; // 24.300 lei
  } else if (pfaNetIncome >= tier12) {
    pfaCas = tier12 * 0.25; // 12.150 lei
  }

  // CASS PFA (10% sănătate):
  // Plafonată între 6 salarii (24.300 lei) și 60 de salarii (243.000 lei)
  // Dacă are alt contract de muncă și venitul este sub 6 salarii, CASS este 10% din venitul real
  let pfaCass = 0;
  const minCassCeiling = 6 * minWage; // 24.300 lei -> 2.430 lei
  const maxCassCeiling = 60 * minWage; // 243.000 lei -> 24.300 lei

  if (pfaNetIncome > 0) {
    if (pfaNetIncome >= maxCassCeiling) {
      pfaCass = maxCassCeiling * 0.1; // 24.300 lei
    } else if (pfaNetIncome < minCassCeiling) {
      pfaCass = hasOtherSalaryContract ? pfaNetIncome * 0.1 : minCassCeiling * 0.1;
    } else {
      pfaCass = pfaNetIncome * 0.1;
    }
  }

  // Impozit pe venit PFA (10% din venit net - CAS - CASS)
  const pfaTaxableBase = Math.max(0, pfaNetIncome - pfaCas - pfaCass);
  const pfaIncomeTax = pfaTaxableBase * 0.1;

  const pfaNetProfit = pfaNetIncome - pfaCas - pfaCass - pfaIncomeTax;
  const pfaEffectiveTax = annualRevenue > 0 ? (annualRevenue - pfaNetProfit) / annualRevenue : 0;

  const pfaResult: PfaResult = {
    grossRevenue: annualRevenue,
    deductibleExpenses: annualExpenses,
    netTaxableIncome: pfaNetIncome,
    casAmount: Math.round(pfaCas),
    cassAmount: Math.round(pfaCass),
    incomeTax: Math.round(pfaIncomeTax),
    netProfit: Math.round(pfaNetProfit),
    effectiveTaxRate: pfaEffectiveTax,
  };

  // ----------------------------------------------------
  // 2. SRL MICROÎNTREPRINDERE
  // ----------------------------------------------------
  // Criteriu cotă micro: 1% sub 60.000 EUR (~298.500 lei), 3% peste 60.000 EUR până la 500.000 EUR
  // sau 3% dacă este IT/consultanță conform legii 296/2023
  const threshold60kRon =
    ROMANIA_SALARY_RULES_2026.srlMicroRates.thresholdEur *
    ROMANIA_SALARY_RULES_2026.srlMicroRates.eurRonRate;
  const microRate = annualRevenue > threshold60kRon || isItOrConsultancy ? 0.03 : 0.01;
  const microTax = annualRevenue * microRate;

  // Cost 1 angajat minim obligatoriu (CAM 2.25% inclus)
  // 4.050 lei brut + 2.25% CAM = 4.141,13 lei/lună = 49.693,50 lei/an
  // Din acesta, angajatul primește salariul net (2.574 lei/lună = 30.888 lei/an),
  // iar taxele pe muncă sunt 18.805,50 lei/an
  const minEmployeeCostAnnual = minWage * 1.0225 * 12;
  const employeeNetSalaryAnnual = ROMANIA_SALARY_RULES_2026.minimumWageNet * 12;

  // Profit brut companie după impozit micro, cheltuieli și salariu minim
  const companyGrossProfit = Math.max(
    0,
    annualRevenue - annualExpenses - microTax - minEmployeeCostAnnual,
  );

  // Impozit pe dividende (8%)
  const dividendTax = companyGrossProfit * ROMANIA_SALARY_RULES_2026.dividendTaxRate;
  const netDividendsBeforeCass = companyGrossProfit - dividendTax;

  // CASS dividende pe persoană fizică:
  // Plafoane 6, 12, 24 salarii minime
  let dividendCass = 0;
  if (companyGrossProfit >= 24 * minWage) {
    dividendCass = 24 * minWage * 0.1; // 9.720 lei
  } else if (companyGrossProfit >= 12 * minWage) {
    dividendCass = 12 * minWage * 0.1; // 4.860 lei
  } else if (companyGrossProfit >= 6 * minWage) {
    dividendCass = 6 * minWage * 0.1; // 2.430 lei
  }

  // Venitul total net rămas în buzunarul antreprenorului:
  // Dividende nete minus CASS dividende + salariul net încasat ca angajat
  const srlNetProfit = Math.max(
    0,
    netDividendsBeforeCass - dividendCass + employeeNetSalaryAnnual,
  );
  const srlEffectiveTax = annualRevenue > 0 ? (annualRevenue - srlNetProfit) / annualRevenue : 0;

  const srlResult: SrlResult = {
    grossRevenue: annualRevenue,
    deductibleExpenses: annualExpenses,
    microTaxRate: microRate,
    microTaxAmount: Math.round(microTax),
    grossDividends: Math.round(companyGrossProfit),
    dividendTax: Math.round(dividendTax),
    dividendCass: Math.round(dividendCass),
    minimumSalaryAnnualCost: Math.round(minEmployeeCostAnnual),
    netProfit: Math.round(srlNetProfit),
    effectiveTaxRate: srlEffectiveTax,
  };

  const netDifference = srlResult.netProfit - pfaResult.netProfit;
  const betterChoice: 'pfa' | 'srl' = netDifference >= 0 ? 'srl' : 'pfa';

  return {
    annualRevenue,
    pfa: pfaResult,
    srl: srlResult,
    netDifference,
    betterChoice,
  };
}
