/**
 * Romanian Salary & Tax Statutory Rules for 2026
 *
 * Primary Sources:
 * - Legea nr. 227/2015 privind Codul Fiscal cu modificările ulterioare (Art. 77, 137, 156, 220)
 * - Hotărârea Guvernului nr. 141/2025 / HG 1506/2024 pentru stabilirea salariului de bază minim brut pe țară garantat în plată (4.050 lei)
 * - OUG nr. 115/2023 privind unele măsuri fiscal-bugetare (facilitatea de 300 lei sumă netaxabilă la salariul minim)
 * - Legea nr. 296/2023 privind unele măsuri fiscal-bugetare pentru asigurarea sustenabilității financiare a României pe termen lung
 */

export interface RomanianSalaryRules {
  minimumWageGross: number;
  minimumWageNet: number;
  taxFreeAmountMinWage: number;
  casRate: number; // Pensii 25%
  cassRate: number; // Sănătate 10%
  incomeTaxRate: number; // Impozit pe venit 10%
  camRate: number; // Contribuția asiguratorie pentru muncă 2.25% (angajator)
  personalDeductionThresholdUpper: number; // Salariul minim + 2.000 lei (6.050 lei)
  pfaCasThresholds: {
    tier1MinWages: number; // 12 salarii minime
    tier2MinWages: number; // 24 salarii minime
  };
  pfaCassThresholds: {
    minWages: number; // 6 salarii minime (plafon minim)
    maxWages: number; // 60 salarii minime (plafon maxim)
  };
  srlMicroRates: {
    under60kEurRate: number; // 1%
    over60kEurRate: number; // 3%
    thresholdEur: number; // 60.000 EUR
    thresholdMaxEur: number; // 500.000 EUR
    eurRonRate: number; // Curs estimat BNR
  };
  dividendTaxRate: number; // 8%
  dividendCassThresholds: {
    tier1MinWages: number; // 6 salarii minime
    tier2MinWages: number; // 12 salarii minime
    tier3MinWages: number; // 24 salarii minime
  };
  validFrom: string;
  officialSource: string;
}

export const ROMANIA_SALARY_RULES_2026: RomanianSalaryRules = {
  minimumWageGross: 4050.0,
  minimumWageNet: 2574.0,
  taxFreeAmountMinWage: 300.0,
  casRate: 0.25,
  cassRate: 0.1,
  incomeTaxRate: 0.1,
  camRate: 0.0225,
  personalDeductionThresholdUpper: 6050.0,
  pfaCasThresholds: {
    tier1MinWages: 12,
    tier2MinWages: 24,
  },
  pfaCassThresholds: {
    minWages: 6,
    maxWages: 60,
  },
  srlMicroRates: {
    under60kEurRate: 0.01,
    over60kEurRate: 0.03,
    thresholdEur: 60000,
    thresholdMaxEur: 500000,
    eurRonRate: 4.975,
  },
  dividendTaxRate: 0.08,
  dividendCassThresholds: {
    tier1MinWages: 6,
    tier2MinWages: 12,
    tier3MinWages: 24,
  },
  validFrom: '2026-01-01',
  officialSource:
    'Monitorul Oficial al României / HG 141/2025, Legea 227/2015 Codul Fiscal, OUG 115/2023',
};

/**
 * 34 statutory programmatic amounts:
 * Minimum wage 4,050 RON, and 4,000 to 20,000 in steps of 500 RON.
 */
export const ROMANIA_PROGRAMMATIC_SALARY_AMOUNTS: number[] = [
  4000, 4050, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000, 10500,
  11000, 11500, 12000, 12500, 13000, 13500, 14000, 14500, 15000, 15500, 16000, 16500, 17000,
  17500, 18000, 18500, 19000, 19500, 20000,
];
