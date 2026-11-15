import { describe, it, expect } from 'vitest';
import {
  calculateRomanianSalary,
  calculatePersonalDeduction,
  calculateNetToGrossRo,
  calculatePfaVsSrlRo,
} from './ro';
import { ROMANIA_SALARY_RULES_2026, ROMANIA_PROGRAMMATIC_SALARY_AMOUNTS } from '@/rules/ro/salary-2026';

describe('Romanian Salary & Tax Calculations (2026)', () => {
  it('calculates statutory minimum wage (4,050 RON) with 300 RON tax-free exemption correctly', () => {
    const result = calculateRomanianSalary({ grossSalary: 4050 });

    // Tax free: 300 RON, base for contributions: 3,750 RON
    expect(result.taxExemptAmount).toBe(300);
    expect(result.casEmployee).toBe(938); // 3,750 * 25% = 937.5 -> 938
    expect(result.cassEmployee).toBe(375); // 3,750 * 10% = 375
    expect(result.basePersonalDeduction).toBe(810); // 20% of 4,050 = 810
    // Taxable base: 3,750 - 938 - 375 - 810 = 1,627 RON -> 10% = 163 RON
    expect(result.incomeTax).toBe(163);
    // Net: 4,050 - 938 - 375 - 163 = 2,574 RON
    expect(result.netSalary).toBe(2574);
    // Employer CAM (2.25% of 4,050): 91 RON
    expect(result.camEmployer).toBe(91);
    expect(result.totalEmployerCost).toBe(4141);
  });

  it('calculates average salary (8,000 RON) above deduction threshold (6,050 RON)', () => {
    const result = calculateRomanianSalary({ grossSalary: 8000 });

    expect(result.taxExemptAmount).toBe(0);
    expect(result.casEmployee).toBe(2000); // 8,000 * 25% = 2,000
    expect(result.cassEmployee).toBe(800); // 8,000 * 10% = 800
    expect(result.personalDeduction).toBe(0); // gross > 6,050 RON
    // Taxable base: 8,000 - 2,000 - 800 = 5,200 RON -> 10% = 520 RON
    expect(result.incomeTax).toBe(520);
    // Net: 8,000 - 2,000 - 800 - 520 = 4,680 RON
    expect(result.netSalary).toBe(4680);
    // CAM 2.25%: 180 RON
    expect(result.camEmployer).toBe(180);
    expect(result.totalEmployerCost).toBe(8180);
  });

  it('calculates personal deductions across dependant tiers (0, 1, 2, 3, 4+) at minimum wage', () => {
    const d0 = calculatePersonalDeduction(4050, 0);
    const d1 = calculatePersonalDeduction(4050, 1);
    const d2 = calculatePersonalDeduction(4050, 2);
    const d3 = calculatePersonalDeduction(4050, 3);
    const d4 = calculatePersonalDeduction(4050, 4);

    expect(d0.baseDeduction).toBe(810); // 20%
    expect(d1.baseDeduction).toBe(1020); // 25% = 1,012.5 -> ceil to 10 is 1020
    expect(d2.baseDeduction).toBe(1220); // 30% = 1,215 -> ceil to 10 is 1220
    expect(d3.baseDeduction).toBe(1420); // 35% = 1,417.5 -> ceil to 10 is 1420
    expect(d4.baseDeduction).toBe(1830); // 45% = 1,822.5 -> ceil to 10 is 1830
  });

  it('calculates personal deductions for employees under 26 and with children in school', () => {
    // 5,000 gross with under 26 and 2 children in school
    const ded = calculatePersonalDeduction(5000, 0, true, 2);

    expect(ded.supplementalDeduction).toBeGreaterThanOrEqual(200); // 2 * 100 children + under 26
    expect(ded.totalDeduction).toBe(ded.baseDeduction + ded.supplementalDeduction);
  });

  it('correctly reduces personal deductions linearly between 4,050 and 6,050 RON', () => {
    const ded4050 = calculatePersonalDeduction(4050, 0);
    const ded5050 = calculatePersonalDeduction(5050, 0);
    const ded6050 = calculatePersonalDeduction(6050, 0);
    const ded7000 = calculatePersonalDeduction(7000, 0);

    expect(ded4050.baseDeduction).toBe(810);
    expect(ded5050.baseDeduction).toBeLessThan(810);
    expect(ded5050.baseDeduction).toBeGreaterThan(0);
    expect(ded6050.baseDeduction).toBe(0);
    expect(ded7000.baseDeduction).toBe(0);
  });

  it('calculates high salary (20,000 RON) without errors and verifies tax wedge', () => {
    const result = calculateRomanianSalary({ grossSalary: 20000 });

    expect(result.casEmployee).toBe(5000); // 25%
    expect(result.cassEmployee).toBe(2000); // 10%
    expect(result.incomeTax).toBe(1300); // 10% of 13,000
    expect(result.netSalary).toBe(11700);
    expect(result.camEmployer).toBe(450); // 2.25%
    expect(result.totalEmployerCost).toBe(20450);
    expect(result.effectiveTaxRate).toBeCloseTo(0.415, 2); // 41.5%
  });

  it('performs reverse calculation from Net to Gross accurately', () => {
    const targetNet = 4680;
    const computedGross = calculateNetToGrossRo(targetNet);
    const verification = calculateRomanianSalary({ grossSalary: computedGross });

    expect(computedGross).toBe(8000);
    expect(verification.netSalary).toBe(targetNet);
  });

  it('performs reverse calculation for minimum wage net (2,574 RON)', () => {
    const computedGross = calculateNetToGrossRo(2574);
    expect(computedGross).toBe(4050);
  });

  it('handles zero or negative gross salaries safely', () => {
    const resZero = calculateRomanianSalary({ grossSalary: 0 });
    const resNeg = calculateRomanianSalary({ grossSalary: -500 });

    expect(resZero.netSalary).toBe(0);
    expect(resZero.totalEmployerCost).toBe(0);
    expect(resNeg.netSalary).toBe(0);
  });

  it('evaluates PFA vs SRL comparison for 150,000 RON annual revenue (under 60,000 EUR)', () => {
    const comparison = calculatePfaVsSrlRo({
      annualRevenue: 150000,
      annualExpenses: 15000,
    });

    expect(comparison.annualRevenue).toBe(150000);
    expect(comparison.pfa.netProfit).toBeGreaterThan(0);
    expect(comparison.srl.netProfit).toBeGreaterThan(0);
    expect(comparison.srl.microTaxRate).toBe(0.01); // 1% micro
    expect(['pfa', 'srl']).toContain(comparison.betterChoice);
  });

  it('evaluates PFA vs SRL comparison for 400,000 RON annual revenue (over 60,000 EUR -> 3% micro)', () => {
    const comparison = calculatePfaVsSrlRo({
      annualRevenue: 400000,
      annualExpenses: 40000,
    });

    expect(comparison.srl.microTaxRate).toBe(0.03); // 3% micro
    expect(comparison.srl.grossRevenue).toBe(400000);
    expect(comparison.pfa.casAmount).toBe(24300); // 24 min wages cap
    expect(comparison.pfa.cassAmount).toBe(24300); // 60 min wages cap: 60 * 4050 * 0.1 = 24,300
  });

  it('verifies that ROMANIA_PROGRAMMATIC_SALARY_AMOUNTS has exactly 34 amounts starting at 4000', () => {
    expect(ROMANIA_PROGRAMMATIC_SALARY_AMOUNTS.length).toBe(34);
    expect(ROMANIA_PROGRAMMATIC_SALARY_AMOUNTS[0]).toBe(4000);
    expect(ROMANIA_PROGRAMMATIC_SALARY_AMOUNTS[1]).toBe(4050);
    expect(ROMANIA_PROGRAMMATIC_SALARY_AMOUNTS[33]).toBe(20000);
  });
});
