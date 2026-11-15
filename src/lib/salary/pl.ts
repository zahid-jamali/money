import { POLAND_SALARY_RULES_2026 } from '@/rules/pl/salary-2026';

export type ContractTypePl = 'uop' | 'zlecenie' | 'dzielo';
export type KupTypePl = 'standard' | 'podwyzszone' | 'autorskie_50' | 'none';
export type Pit2OptionPl = 'full' | 'half' | 'third' | 'none';

export interface PolishSalaryInput {
  grossSalary: number;
  contractType?: ContractTypePl;
  kupType?: KupTypePl;
  pit2Option?: Pit2OptionPl;
  isUnder26?: boolean;
  ppkEmployeeRate?: number;
  ppkEmployerRate?: number;
}

export interface PolishSalaryMonthResult {
  monthIndex: number; // 1 to 12
  grossSalary: number;
  
  // ZUS Employee
  zusEmerytalneEmployee: number;
  zusRentoweEmployee: number;
  zusChoroboweEmployee: number;
  totalZusSocialEmployee: number;
  is30xCapReached: boolean;
  
  // PPK
  ppkEmployeeAmount: number;
  ppkEmployerAmount: number;

  // Health
  healthBase: number;
  zdrowotnaAmount: number;

  // Tax
  taxBase: number; // Podstawa opodatkowania (zaokrąglona do pełnych zł)
  kupAmount: number;
  pitCalculated: number;
  pit2Deduction: number;
  pitAdvance: number; // Zaliczka na PIT (zaokrąglona do pełnych zł)
  taxRatePercent: number; // 0, 12, or 32

  // Net Take-Home
  netSalary: number;

  // Employer Costs
  zusEmerytalneEmployer: number;
  zusRentoweEmployer: number;
  zusWypadkoweEmployer: number;
  zusFpEmployer: number;
  zusFgspEmployer: number;
  totalZusSocialEmployer: number;
  totalEmployerCost: number;

  // Cumulative
  cumulativeGross: number;
  cumulativeTaxBase: number;
  isThresholdCrossed: boolean; // Crossing 120,000 PLN
}

export interface PolishSalaryAnnualResult {
  monthlyBreakdown: PolishSalaryMonthResult[];
  annualGross: number;
  annualNet: number;
  annualZusSocialEmployee: number;
  annualZdrowotnaEmployee: number;
  annualPitAdvance: number;
  annualPpkEmployee: number;
  annualPpkEmployer: number;
  annualZusSocialEmployer: number;
  annualTotalEmployerCost: number;
  averageMonthlyNet: number;
  effectiveEmployeeTaxRate: number; // (ZUS + Health + PIT + PPK) / Gross
  thresholdCrossedMonth: number | null; // Month index when 120k threshold is crossed
  cap30xReachedMonth: number | null; // Month index when 260,190 PLN cap is reached
}

export type B2bZusType = 'ulga_na_start' | 'preferencyjny' | 'pelny';
export type B2bTaxRegime = 'skala' | 'liniowy' | 'ryczalt';

export interface B2bVsUopInput {
  grossSalaryOrInvoice: number;
  inputBasis: 'uop_gross' | 'b2b_net_invoice' | 'employer_cost';
  businessExpenses?: number;
  zusType?: B2bZusType;
  hasChorobowe?: boolean;
  taxRegime?: B2bTaxRegime;
  ryczaltRate?: number;
  pit2Option?: Pit2OptionPl;
  isUnder26?: boolean;
}

export interface B2bComparisonResult {
  uop: {
    grossMonthly: number;
    netMonthly: number;
    annualNet: number;
    employeeZusMonthly: number;
    employeeHealthMonthly: number;
    pitMonthly: number;
    employerCostMonthly: number;
    annualEmployerCost: number;
    effectiveTaxRate: number;
  };
  b2b: {
    netInvoicedMonthly: number;
    grossWithVatMonthly: number; // 23% VAT added
    businessExpensesMonthly: number;
    socialZusMonthly: number;
    healthMonthly: number;
    incomeTaxMonthly: number;
    netMonthly: number; // Take home = Invoiced - Expenses - Social - Health - Tax
    annualNet: number;
    effectiveTaxRate: number; // (ZUS + Health + Tax) / Invoiced
  };
  monthlyDifference: number; // B2B net - UoP net
  annualDifference: number;
  recommendedOption: 'uop' | 'b2b' | 'neutral';
  breakevenDescription: string;
}

/**
 * Calculates progressive Polish Personal Income Tax (PIT) on cumulative income.
 */
function calculatePolishPitAdvance(
  taxBase: number,
  cumulativeTaxBaseBeforeMonth: number,
  pit2Monthly: number,
  isUnder26: boolean,
  cumulativeGrossBeforeMonth: number,
  monthlyGross: number,
): { pitAdvance: number; ratePercent: number; isCrossing: boolean } {
  const { pitScale } = POLAND_SALARY_RULES_2026;

  // 1. Ulga dla młodych check (exemption up to 85,528 PLN)
  if (isUnder26) {
    if (cumulativeGrossBeforeMonth + monthlyGross <= pitScale.ulgaDlaMlodychCap) {
      return { pitAdvance: 0, ratePercent: 0, isCrossing: false };
    }
  }

  const cumulativeTaxBaseAfterMonth = cumulativeTaxBaseBeforeMonth + taxBase;
  let rawTax = 0;
  let ratePercent = 12;
  let isCrossing = false;

  if (cumulativeTaxBaseBeforeMonth >= pitScale.threshold) {
    // Entire current base is in the 32% bracket
    rawTax = taxBase * pitScale.higherRate;
    ratePercent = 32;
  } else if (cumulativeTaxBaseAfterMonth > pitScale.threshold) {
    // Crossing bracket in this month
    isCrossing = true;
    const lowerPortion = pitScale.threshold - cumulativeTaxBaseBeforeMonth;
    const higherPortion = taxBase - lowerPortion;
    rawTax = lowerPortion * pitScale.lowerRate + higherPortion * pitScale.higherRate;
    ratePercent = 32;
  } else {
    // Entire current base is in the 12% bracket
    rawTax = taxBase * pitScale.lowerRate;
    ratePercent = 12;
  }

  // Deduct PIT-2 kwota zmniejszająca (only up to 120k threshold or standard)
  const pitMinusKwota = Math.max(0, rawTax - pit2Monthly);
  // Official rounding: round to whole PLN (50 groszy round up)
  const pitAdvance = Math.round(pitMinusKwota);

  return { pitAdvance, ratePercent, isCrossing };
}

/**
 * Calculates 12 months Polish salary schedule for Umowa o Pracę, Zlecenie, or Dzieło.
 */
export function calculatePolishSalary(input: PolishSalaryInput): PolishSalaryAnnualResult {
  const rules = POLAND_SALARY_RULES_2026;
  const gross = Math.max(0, input.grossSalary || 0);
  const contractType = input.contractType || 'uop';
  const kupType = input.kupType || 'standard';
  const pit2Option = input.pit2Option ?? 'full';
  const isUnder26 = Boolean(input.isUnder26);
  const ppkEmployeeRate = input.ppkEmployeeRate !== undefined ? input.ppkEmployeeRate : 0;
  const ppkEmployerRate = input.ppkEmployerRate !== undefined ? input.ppkEmployerRate : 0;

  // Monthly PIT-2 reduction amount
  let pit2MonthlyAmount = 0;
  if (pit2Option === 'full') pit2MonthlyAmount = rules.pitScale.pit2Monthly.full;
  else if (pit2Option === 'half') pit2MonthlyAmount = rules.pitScale.pit2Monthly.half;
  else if (pit2Option === 'third') pit2MonthlyAmount = rules.pitScale.pit2Monthly.third;

  const monthlyResults: PolishSalaryMonthResult[] = [];

  let cumulativeGross = 0;
  let cumulativeSocialBase = 0;
  let cumulativeTaxBase = 0;
  let thresholdCrossedMonth: number | null = null;
  let cap30xReachedMonth: number | null = null;

  for (let month = 1; month <= 12; month++) {
    const grossThisMonth = gross;

    // --- ZUS SOCIAL CONTRIBUTIONS (Employee & Employer) ---
    let zusEmerytalneEmp = 0;
    let zusRentoweEmp = 0;
    let zusChoroboweEmp = 0;
    let is30xCapReached = false;

    let zusEmerytalneEmpr = 0;
    let zusRentoweEmpr = 0;
    let zusWypadkoweEmpr = 0;
    let zusFpEmpr = 0;
    let zusFgspEmpr = 0;

    if (contractType === 'uop' || contractType === 'zlecenie') {
      // 30x average wage limit check (limit emerytalno-rentowy)
      const capRemaining = Math.max(0, rules.minimalWage.annual30xCap - cumulativeSocialBase);

      if (capRemaining <= 0) {
        // Exceeded in previous months: 0 emerytalne and rentowe
        zusEmerytalneEmp = 0;
        zusRentoweEmp = 0;
        zusEmerytalneEmpr = 0;
        zusRentoweEmpr = 0;
        is30xCapReached = true;
        if (cap30xReachedMonth === null) cap30xReachedMonth = month;
      } else if (grossThisMonth > capRemaining) {
        // Exceeded in this month: partial contribution
        zusEmerytalneEmp = Number((capRemaining * rules.zusRates.employee.emerytalne).toFixed(2));
        zusRentoweEmp = Number((capRemaining * rules.zusRates.employee.rentowe).toFixed(2));
        zusEmerytalneEmpr = Number((capRemaining * rules.zusRates.employer.emerytalne).toFixed(2));
        zusRentoweEmpr = Number((capRemaining * rules.zusRates.employer.rentowe).toFixed(2));
        is30xCapReached = true;
        if (cap30xReachedMonth === null) cap30xReachedMonth = month;
      } else {
        // Below cap: standard full contribution
        zusEmerytalneEmp = Number((grossThisMonth * rules.zusRates.employee.emerytalne).toFixed(2));
        zusRentoweEmp = Number((grossThisMonth * rules.zusRates.employee.rentowe).toFixed(2));
        zusEmerytalneEmpr = Number((grossThisMonth * rules.zusRates.employer.emerytalne).toFixed(2));
        zusRentoweEmpr = Number((grossThisMonth * rules.zusRates.employer.rentowe).toFixed(2));
      }

      // Chorobowe has no 30x limit (mandatory on UoP, voluntary on Zlecenie)
      if (contractType === 'uop') {
        zusChoroboweEmp = Number((grossThisMonth * rules.zusRates.employee.chorobowe).toFixed(2));
      }

      // Employer Wypadkowe, FP, FGSP
      zusWypadkoweEmpr = Number((grossThisMonth * rules.zusRates.employer.wypadkowe).toFixed(2));
      // FP is not paid if gross < minimal wage, but standard UoP pays FP + FGSP
      zusFpEmpr = Number((grossThisMonth * rules.zusRates.employer.fp).toFixed(2));
      zusFgspEmpr = Number((grossThisMonth * rules.zusRates.employer.fgsp).toFixed(2));

      cumulativeSocialBase += grossThisMonth;
    }

    const totalZusSocialEmployee = Number((zusEmerytalneEmp + zusRentoweEmp + zusChoroboweEmp).toFixed(2));
    const totalZusSocialEmployer = Number(
      (zusEmerytalneEmpr + zusRentoweEmpr + zusWypadkoweEmpr + zusFpEmpr + zusFgspEmpr).toFixed(2),
    );

    // --- HEALTH INSURANCE (Składka zdrowotna 9%) ---
    // Podstawa zdrowotna = Gross - Employee Social ZUS
    let healthBase = 0;
    let zdrowotnaAmount = 0;
    if (contractType === 'uop' || contractType === 'zlecenie') {
      healthBase = Math.max(0, grossThisMonth - totalZusSocialEmployee);
      zdrowotnaAmount = Number((healthBase * rules.zusRates.employee.zdrowotna).toFixed(2));
    }

    // --- PPK (Employee & Employer) ---
    let ppkEmployeeAmount = 0;
    let ppkEmployerAmount = 0;
    if (contractType === 'uop' && ppkEmployeeRate > 0) {
      ppkEmployeeAmount = Number((grossThisMonth * ppkEmployeeRate).toFixed(2));
    }
    if (contractType === 'uop' && ppkEmployerRate > 0) {
      ppkEmployerAmount = Number((grossThisMonth * ppkEmployerRate).toFixed(2));
    }

    // --- KOSZTY UZYSKANIA PRZYCHODÓW (KUP) ---
    let kupAmount = 0;
    if (contractType === 'uop') {
      if (kupType === 'standard') kupAmount = rules.pitScale.standardKup;
      else if (kupType === 'podwyzszone') kupAmount = rules.pitScale.podwyzszoneKup;
      else if (kupType === 'autorskie_50') {
        // 50% autorskie: (Gross - Employee Social ZUS) * 50%, capped at 120,000 PLN annually
        const autorskieBase = Math.max(0, grossThisMonth - totalZusSocialEmployee);
        kupAmount = Math.min(rules.pitScale.autorskieKupCap / 12, autorskieBase * rules.pitScale.autorskieKupRate);
      }
    } else if (contractType === 'zlecenie') {
      // 20% KUP after employee social ZUS
      const zlecenieBase = Math.max(0, grossThisMonth - totalZusSocialEmployee);
      kupAmount = Number((zlecenieBase * 0.20).toFixed(2));
    } else if (contractType === 'dzielo') {
      // Dzieło: 20% standard KUP or 50% autorskie
      const dzieloRate = kupType === 'autorskie_50' ? 0.50 : 0.20;
      kupAmount = Number((grossThisMonth * dzieloRate).toFixed(2));
    }

    // KUP cannot exceed revenue after ZUS
    kupAmount = Math.min(kupAmount, Math.max(0, grossThisMonth - totalZusSocialEmployee));

    // --- TAX BASE & PIT ADVANCE ---
    // Note: Employer PPK contribution is treated as taxable income in the following month or same month
    const taxableBaseRaw = Math.max(0, grossThisMonth + ppkEmployerAmount - totalZusSocialEmployee - kupAmount);
    // In Poland, podstawa opodatkowania is rounded to full PLN
    const taxBase = Math.round(taxableBaseRaw);

    const { pitAdvance, ratePercent, isCrossing } = calculatePolishPitAdvance(
      taxBase,
      cumulativeTaxBase,
      pit2MonthlyAmount,
      isUnder26,
      cumulativeGross,
      grossThisMonth,
    );

    if (isCrossing && thresholdCrossedMonth === null) {
      thresholdCrossedMonth = month;
    }

    // --- NET SALARY ---
    // Net = Gross - Employee ZUS - Health - PIT advance - Employee PPK
    const netSalary = Number(
      Math.max(0, grossThisMonth - totalZusSocialEmployee - zdrowotnaAmount - pitAdvance - ppkEmployeeAmount).toFixed(2),
    );

    // --- TOTAL EMPLOYER COST ---
    // Total cost = Gross + Employer ZUS + Employer PPK
    const totalEmployerCost = Number((grossThisMonth + totalZusSocialEmployer + ppkEmployerAmount).toFixed(2));

    cumulativeGross += grossThisMonth;
    cumulativeTaxBase += taxBase;

    monthlyResults.push({
      monthIndex: month,
      grossSalary: grossThisMonth,
      zusEmerytalneEmployee: zusEmerytalneEmp,
      zusRentoweEmployee: zusRentoweEmp,
      zusChoroboweEmployee: zusChoroboweEmp,
      totalZusSocialEmployee,
      is30xCapReached,
      ppkEmployeeAmount,
      ppkEmployerAmount,
      healthBase,
      zdrowotnaAmount,
      taxBase,
      kupAmount,
      pitCalculated: Math.round(taxBase * (ratePercent / 100)),
      pit2Deduction: pit2MonthlyAmount,
      pitAdvance,
      taxRatePercent: ratePercent,
      netSalary,
      zusEmerytalneEmployer: zusEmerytalneEmpr,
      zusRentoweEmployer: zusRentoweEmpr,
      zusWypadkoweEmployer: zusWypadkoweEmpr,
      zusFpEmployer: zusFpEmpr,
      zusFgspEmployer: zusFgspEmpr,
      totalZusSocialEmployer,
      totalEmployerCost,
      cumulativeGross,
      cumulativeTaxBase,
      isThresholdCrossed: isCrossing || cumulativeTaxBase > rules.pitScale.threshold,
    });
  }

  const annualGross = Number(monthlyResults.reduce((acc, m) => acc + m.grossSalary, 0).toFixed(2));
  const annualNet = Number(monthlyResults.reduce((acc, m) => acc + m.netSalary, 0).toFixed(2));
  const annualZusSocialEmployee = Number(
    monthlyResults.reduce((acc, m) => acc + m.totalZusSocialEmployee, 0).toFixed(2),
  );
  const annualZdrowotnaEmployee = Number(
    monthlyResults.reduce((acc, m) => acc + m.zdrowotnaAmount, 0).toFixed(2),
  );
  const annualPitAdvance = Number(monthlyResults.reduce((acc, m) => acc + m.pitAdvance, 0).toFixed(2));
  const annualPpkEmployee = Number(monthlyResults.reduce((acc, m) => acc + m.ppkEmployeeAmount, 0).toFixed(2));
  const annualPpkEmployer = Number(monthlyResults.reduce((acc, m) => acc + m.ppkEmployerAmount, 0).toFixed(2));
  const annualZusSocialEmployer = Number(
    monthlyResults.reduce((acc, m) => acc + m.totalZusSocialEmployer, 0).toFixed(2),
  );
  const annualTotalEmployerCost = Number(
    monthlyResults.reduce((acc, m) => acc + m.totalEmployerCost, 0).toFixed(2),
  );

  const averageMonthlyNet = Number((annualNet / 12).toFixed(2));
  const effectiveEmployeeTaxRate = annualGross > 0 ? Number(((annualGross - annualNet) / annualGross).toFixed(4)) : 0;

  return {
    monthlyBreakdown: monthlyResults,
    annualGross,
    annualNet,
    annualZusSocialEmployee,
    annualZdrowotnaEmployee,
    annualPitAdvance,
    annualPpkEmployee,
    annualPpkEmployer,
    annualZusSocialEmployer,
    annualTotalEmployerCost,
    averageMonthlyNet,
    effectiveEmployeeTaxRate,
    thresholdCrossedMonth,
    cap30xReachedMonth,
  };
}

/**
 * Calculates side-by-side comparison between Umowa o Pracę (UoP) and B2B (Działalność Gospodarcza).
 */
export function calculateB2bVsUop(input: B2bVsUopInput): B2bComparisonResult {
  const rules = POLAND_SALARY_RULES_2026;
  const inputAmount = Math.max(0, input.grossSalaryOrInvoice || 0);
  const inputBasis = input.inputBasis || 'uop_gross';
  const expenses = Math.max(0, input.businessExpenses || 0);
  const zusType = input.zusType || 'pelny';
  const hasChorobowe = input.hasChorobowe !== undefined ? input.hasChorobowe : true;
  const taxRegime = input.taxRegime || 'ryczalt';
  const ryczaltRate = input.ryczaltRate || rules.ryczaltRates.itProgramming; // Default 12% for IT

  // Determine equivalent UoP gross and B2B invoiced amount
  let uopGross = 0;
  let b2bInvoiced = 0;

  if (inputBasis === 'uop_gross') {
    uopGross = inputAmount;
    // Common market practice: B2B invoice = UoP employer cost (koszt pracodawcy) or UoP gross + small margin
    // When a developer asks "I earn 10,000 PLN gross UoP, what if I invoice the employer's total cost 12,048 PLN?"
    // We set B2B invoice equal to UoP gross by default or let user toggle. If inputBasis is uop_gross, B2B invoice is uopGross.
    b2bInvoiced = inputAmount;
  } else if (inputBasis === 'employer_cost') {
    // If input is employer cost, derive UoP gross
    // Employer cost ≈ Gross * 1.2048
    uopGross = Number((inputAmount / 1.2048).toFixed(2));
    b2bInvoiced = inputAmount;
  } else {
    // b2b_net_invoice
    b2bInvoiced = inputAmount;
    uopGross = inputAmount;
  }

  // 1. Calculate UoP
  const uopResult = calculatePolishSalary({
    grossSalary: uopGross,
    contractType: 'uop',
    kupType: 'standard',
    pit2Option: input.pit2Option || 'full',
    isUnder26: input.isUnder26 || false,
    ppkEmployeeRate: 0,
    ppkEmployerRate: 0,
  });

  const uopFirstMonth = uopResult.monthlyBreakdown[0] || {
    netSalary: 0,
    totalZusSocialEmployee: 0,
    zdrowotnaAmount: 0,
    pitAdvance: 0,
    totalEmployerCost: 0,
  };

  // 2. Calculate B2B
  // Social ZUS
  let b2bSocialZus = 0;
  if (zusType === 'ulga_na_start') {
    b2bSocialZus = 0;
  } else if (zusType === 'preferencyjny') {
    b2bSocialZus = hasChorobowe
      ? rules.b2bZus.preferencyjnyMonthly.totalWithChorobowe
      : rules.b2bZus.preferencyjnyMonthly.totalWithoutChorobowe;
  } else {
    // pelny
    b2bSocialZus = hasChorobowe
      ? rules.b2bZus.pelnyMonthly.totalWithChorobowe
      : rules.b2bZus.pelnyMonthly.totalWithoutChorobowe;
  }

  // Health insurance (Składka zdrowotna)
  let b2bHealth = 0;
  let b2bTax = 0;

  const b2bIncomeBeforeTaxAndHealth = Math.max(0, b2bInvoiced - expenses - b2bSocialZus);

  if (taxRegime === 'skala') {
    // Skala podatkowa: 9% of income (min 9% of minimal wage = 419.94 PLN)
    const minHealth = rules.minimalWage.grossMonthly * 0.09;
    b2bHealth = Number(Math.max(minHealth, b2bIncomeBeforeTaxAndHealth * rules.b2bZus.zdrowotnaB2b.skalaRate).toFixed(2));

    // Tax: 12% up to 120,000 PLN annual income minus kwota zmniejszająca (300 PLN/mo)
    const taxBase = Math.round(b2bIncomeBeforeTaxAndHealth);
    const rawTax = taxBase * rules.pitScale.lowerRate;
    b2bTax = Math.round(Math.max(0, rawTax - rules.pitScale.pit2Monthly.full));
  } else if (taxRegime === 'liniowy') {
    // Podatek liniowy: 4.9% of income (min 9% of minimal wage = 419.94 PLN)
    const minHealth = rules.minimalWage.grossMonthly * 0.09;
    b2bHealth = Number(Math.max(minHealth, b2bIncomeBeforeTaxAndHealth * rules.b2bZus.zdrowotnaB2b.liniowyRate).toFixed(2));

    // Liniowy tax: 19% of income minus social ZUS and deductible health (up to cap)
    const deductibleHealth = Math.min(b2bHealth, rules.b2bZus.zdrowotnaB2b.liniowyDeductionCapAnnual / 12);
    const taxBase = Math.round(Math.max(0, b2bIncomeBeforeTaxAndHealth - deductibleHealth));
    b2bTax = Math.round(taxBase * rules.liniowyRate);
  } else {
    // Ryczałt od przychodów ewidencjonowanych
    // Health: based on annual revenue tier
    const annualProjectedRevenue = b2bInvoiced * 12;
    if (annualProjectedRevenue <= 60000) {
      b2bHealth = rules.b2bZus.zdrowotnaB2b.ryczaltMonthly.tier1;
    } else if (annualProjectedRevenue <= 300000) {
      b2bHealth = rules.b2bZus.zdrowotnaB2b.ryczaltMonthly.tier2;
    } else {
      b2bHealth = rules.b2bZus.zdrowotnaB2b.ryczaltMonthly.tier3;
    }

    // In ryczałt, 50% of health insurance paid is deductible from revenue
    const taxableRevenue = Math.max(0, b2bInvoiced - b2bSocialZus - (b2bHealth * 0.50));
    b2bTax = Math.round(taxableRevenue * ryczaltRate);
  }

  // B2B Net Take-Home
  const b2bNetMonthly = Number(Math.max(0, b2bInvoiced - expenses - b2bSocialZus - b2bHealth - b2bTax).toFixed(2));
  const b2bAnnualNet = Number((b2bNetMonthly * 12).toFixed(2));
  const b2bEffectiveTaxRate = b2bInvoiced > 0 ? Number(((b2bInvoiced - b2bNetMonthly) / b2bInvoiced).toFixed(4)) : 0;

  const monthlyDifference = Number((b2bNetMonthly - uopFirstMonth.netSalary).toFixed(2));
  const annualDifference = Number((b2bAnnualNet - uopResult.annualNet).toFixed(2));

  let recommendedOption: 'uop' | 'b2b' | 'neutral' = 'neutral';
  let breakevenDescription = '';

  if (monthlyDifference > 500) {
    recommendedOption = 'b2b';
    breakevenDescription = `Na B2B zyskujesz miesięcznie około ${monthlyDifference.toLocaleString('pl-PL')} zł netto więcej niż na umowie o pracę. Pamiętaj jednak o braku płatnego urlopu i ochrony Kodeksu Pracy.`;
  } else if (monthlyDifference < -200) {
    recommendedOption = 'uop';
    breakevenDescription = `Umowa o pracę jest w tym przypadku korzystniejsza finansowo lub różnica jest znikoma, a na UoP przysługuje 26 dni płatnego urlopu, zasiłek chorobowy i okres wypowiedzenia.`;
  } else {
    recommendedOption = 'neutral';
    breakevenDescription = `Różnica netto między UoP a B2B wynosi około ${Math.abs(monthlyDifference).toLocaleString('pl-PL')} zł miesięcznie. Decyzja zależy od preferencji dotyczących stabilności zatrudnienia (UoP) vs elastyczności podatkowej (B2B).`;
  }

  return {
    uop: {
      grossMonthly: uopGross,
      netMonthly: uopFirstMonth.netSalary,
      annualNet: uopResult.annualNet,
      employeeZusMonthly: uopFirstMonth.totalZusSocialEmployee,
      employeeHealthMonthly: uopFirstMonth.zdrowotnaAmount,
      pitMonthly: uopFirstMonth.pitAdvance,
      employerCostMonthly: uopFirstMonth.totalEmployerCost,
      annualEmployerCost: uopResult.annualTotalEmployerCost,
      effectiveTaxRate: uopResult.effectiveEmployeeTaxRate,
    },
    b2b: {
      netInvoicedMonthly: b2bInvoiced,
      grossWithVatMonthly: Number((b2bInvoiced * 1.23).toFixed(2)),
      businessExpensesMonthly: expenses,
      socialZusMonthly: Number(b2bSocialZus.toFixed(2)),
      healthMonthly: Number(b2bHealth.toFixed(2)),
      incomeTaxMonthly: b2bTax,
      netMonthly: b2bNetMonthly,
      annualNet: b2bAnnualNet,
      effectiveTaxRate: b2bEffectiveTaxRate,
    },
    monthlyDifference,
    annualDifference,
    recommendedOption,
    breakevenDescription,
  };
}
