import { describe, it, expect } from 'vitest';
import { calculatePolishSalary, calculateB2bVsUop } from './pl';
import { POLAND_SALARY_RULES_2026 } from '@/rules/pl/salary-2026';

describe('Polish Salary & Tax Engine (2026)', () => {
  describe('Umowa o Pracę (UoP) Calculations', () => {
    it('calculates net salary for 2026 minimum wage (4,666 PLN)', () => {
      const result = calculatePolishSalary({
        grossSalary: 4666.0,
        contractType: 'uop',
        kupType: 'standard',
        pit2Option: 'full',
        isUnder26: false,
      });

      const firstMonth = result.monthlyBreakdown[0];
      // Gross: 4,666.00
      // Social ZUS Employee: 13.71% -> 4666 * 0.1371 = 639.71 PLN
      expect(firstMonth.totalZusSocialEmployee).toBeCloseTo(639.71, 1);
      // Health base: 4666 - 639.71 = 4026.29 PLN
      // Zdrowotna 9%: 4026.29 * 0.09 = 362.37 PLN
      expect(firstMonth.zdrowotnaAmount).toBeCloseTo(362.37, 1);
      // Tax base: 4026.29 - 250 (KUP) = 3776.29 -> 3776 PLN
      expect(firstMonth.taxBase).toBe(3776);
      // Tax: 3776 * 12% = 453.12 - 300 (PIT-2) = 153.12 -> 153 PLN
      expect(firstMonth.pitAdvance).toBe(153);
      // Net: 4666 - 639.71 - 362.37 - 153 = 3510.92 PLN
      expect(firstMonth.netSalary).toBeCloseTo(3510.92, 1);
      expect(result.averageMonthlyNet).toBeCloseTo(3510.92, 1);
    });

    it('calculates average salary (8,000 PLN gross)', () => {
      const result = calculatePolishSalary({
        grossSalary: 8000.0,
        contractType: 'uop',
        kupType: 'standard',
        pit2Option: 'full',
        isUnder26: false,
      });

      const firstMonth = result.monthlyBreakdown[0];
      // Social ZUS Employee: 8000 * 0.1371 = 1096.80 PLN
      expect(firstMonth.totalZusSocialEmployee).toBe(1096.80);
      // Health: (8000 - 1096.80) * 0.09 = 6903.20 * 0.09 = 621.29 PLN
      expect(firstMonth.zdrowotnaAmount).toBeCloseTo(621.29, 1);
      // Tax base: 6903.20 - 250 = 6653.20 -> 6653 PLN
      expect(firstMonth.taxBase).toBe(6653);
      // Tax: 6653 * 12% = 798.36 - 300 = 498.36 -> 498 PLN
      expect(firstMonth.pitAdvance).toBe(498);
      // Net: 8000 - 1096.80 - 621.29 - 498 = 5783.91 PLN
      expect(firstMonth.netSalary).toBeCloseTo(5783.91, 1);
      // Employer total cost: 8000 * (1 + 0.2048) = 9638.40 PLN
      expect(firstMonth.totalEmployerCost).toBeCloseTo(9638.40, 1);
    });

    it('applies Ulga dla Młodych (under 26) with 0 PLN PIT advance', () => {
      const result = calculatePolishSalary({
        grossSalary: 6000.0,
        contractType: 'uop',
        isUnder26: true,
      });

      const firstMonth = result.monthlyBreakdown[0];
      expect(firstMonth.pitAdvance).toBe(0);
      // Net without tax deduction: 6000 - ZUS (822.60) - Health (465.97) = 4711.43 PLN
      expect(firstMonth.netSalary).toBeCloseTo(4711.43, 1);
    });

    it('applies podwyższone koszty uzyskania przychodów (300 PLN)', () => {
      const standard = calculatePolishSalary({ grossSalary: 6000, kupType: 'standard' });
      const podwyzszone = calculatePolishSalary({ grossSalary: 6000, kupType: 'podwyzszone' });

      // Podwyższone KUP reduces tax base by 50 PLN, saving 50 * 12% = 6 PLN in tax
      expect(podwyzszone.monthlyBreakdown[0].taxBase).toBe(standard.monthlyBreakdown[0].taxBase - 50);
      expect(podwyzszone.monthlyBreakdown[0].pitAdvance).toBe(standard.monthlyBreakdown[0].pitAdvance - 6);
      expect(podwyzszone.monthlyBreakdown[0].netSalary).toBe(standard.monthlyBreakdown[0].netSalary + 6);
    });

    it('applies 50% autorskie koszty uzyskania przychodów', () => {
      const result = calculatePolishSalary({
        grossSalary: 10000,
        kupType: 'autorskie_50',
      });

      const firstMonth = result.monthlyBreakdown[0];
      // Social ZUS: 10000 * 0.1371 = 1371 PLN
      // Autorskie base: 10000 - 1371 = 8629 PLN -> 50% = 4314.50 PLN KUP
      expect(firstMonth.kupAmount).toBeCloseTo(4314.50, 1);
      // Tax base: 8629 - 4314.50 = 4314.50 -> 4315 PLN
      expect(firstMonth.taxBase).toBe(4315);
      // Tax: 4315 * 12% = 517.80 - 300 = 217.80 -> 218 PLN
      expect(firstMonth.pitAdvance).toBe(218);
    });

    it('handles PIT-2 options correctly (full, half, third, none)', () => {
      const full = calculatePolishSalary({ grossSalary: 6000, pit2Option: 'full' });
      const half = calculatePolishSalary({ grossSalary: 6000, pit2Option: 'half' });
      const third = calculatePolishSalary({ grossSalary: 6000, pit2Option: 'third' });
      const none = calculatePolishSalary({ grossSalary: 6000, pit2Option: 'none' });

      expect(full.monthlyBreakdown[0].pit2Deduction).toBe(300);
      expect(half.monthlyBreakdown[0].pit2Deduction).toBe(150);
      expect(third.monthlyBreakdown[0].pit2Deduction).toBe(100);
      expect(none.monthlyBreakdown[0].pit2Deduction).toBe(0);

      // Tax difference corresponds to PIT-2 deduction differences
      expect(none.monthlyBreakdown[0].pitAdvance - full.monthlyBreakdown[0].pitAdvance).toBe(300);
    });

    it('includes Employee Capital Plans (PPK)', () => {
      const withoutPpk = calculatePolishSalary({ grossSalary: 8000 });
      const withPpk = calculatePolishSalary({
        grossSalary: 8000,
        ppkEmployeeRate: 0.02,
        ppkEmployerRate: 0.015,
      });

      const firstMonth = withPpk.monthlyBreakdown[0];
      // Employee PPK: 8000 * 2% = 160 PLN
      expect(firstMonth.ppkEmployeeAmount).toBe(160);
      // Employer PPK: 8000 * 1.5% = 120 PLN
      expect(firstMonth.ppkEmployerAmount).toBe(120);
      // Employer PPK increases employee tax base by 120 PLN
      expect(firstMonth.taxBase).toBe(withoutPpk.monthlyBreakdown[0].taxBase + 120);
      // Total employer cost includes PPK: 9638.40 + 120 = 9758.40 PLN
      expect(firstMonth.totalEmployerCost).toBeCloseTo(9758.40, 1);
    });

    it('tracks crossing the 120,000 PLN threshold where tax rate jumps to 32%', () => {
      // 20,000 PLN monthly gross -> tax base ~16,979 PLN per month
      // Crosses 120,000 PLN in month 8
      const result = calculatePolishSalary({ grossSalary: 20000 });

      expect(result.thresholdCrossedMonth).toBeDefined();
      expect(result.thresholdCrossedMonth).toBeGreaterThanOrEqual(7);
      expect(result.thresholdCrossedMonth).toBeLessThanOrEqual(8);

      const crossedMonth = result.monthlyBreakdown[(result.thresholdCrossedMonth || 8) - 1];
      expect(crossedMonth.isThresholdCrossed).toBe(true);

      // Month 12 should be taxed at 32%
      const month12 = result.monthlyBreakdown[11];
      expect(month12.taxRatePercent).toBe(32);
      expect(month12.pitAdvance).toBeGreaterThan(result.monthlyBreakdown[0].pitAdvance);
    });

    it('stops emerytalne and rentowe ZUS when 30x average wage cap is reached', () => {
      // Cap is 260,190 PLN. At 35,000 PLN gross/month, reached in month 8
      const result = calculatePolishSalary({ grossSalary: 35000 });

      expect(result.cap30xReachedMonth).toBeDefined();
      expect(result.cap30xReachedMonth).toBe(8);

      // In month 9, employee emerytalne and rentowe should be 0 PLN
      const month9 = result.monthlyBreakdown[8];
      expect(month9.zusEmerytalneEmployee).toBe(0);
      expect(month9.zusRentoweEmployee).toBe(0);
      expect(month9.is30xCapReached).toBe(true);
      // Chorobowe has no cap and continues
      expect(month9.zusChoroboweEmployee).toBeGreaterThan(0);
    });

    it('returns zero for 0 or negative salary input', () => {
      const zeroResult = calculatePolishSalary({ grossSalary: 0 });
      expect(zeroResult.annualGross).toBe(0);
      expect(zeroResult.annualNet).toBe(0);

      const negResult = calculatePolishSalary({ grossSalary: -1000 });
      expect(negResult.annualGross).toBe(0);
      expect(negResult.annualNet).toBe(0);
    });
  });

  describe('Alternative Contracts (Umowa Zlecenie & Dzieło)', () => {
    it('calculates Umowa Zlecenie with 20% KUP', () => {
      const result = calculatePolishSalary({
        grossSalary: 5000,
        contractType: 'zlecenie',
      });

      const firstMonth = result.monthlyBreakdown[0];
      expect(firstMonth.totalZusSocialEmployee).toBeGreaterThan(0);
      expect(firstMonth.kupAmount).toBeGreaterThan(0);
      expect(firstMonth.netSalary).toBeGreaterThan(0);
    });

    it('calculates Umowa o Dzieło without ZUS social or health contributions', () => {
      const result = calculatePolishSalary({
        grossSalary: 5000,
        contractType: 'dzielo',
      });

      const firstMonth = result.monthlyBreakdown[0];
      // Dzieło has 0 ZUS social and 0 health insurance
      expect(firstMonth.totalZusSocialEmployee).toBe(0);
      expect(firstMonth.zdrowotnaAmount).toBe(0);
      // 20% KUP = 1000 PLN
      expect(firstMonth.kupAmount).toBe(1000);
      // Tax base: 5000 - 1000 = 4000 PLN
      expect(firstMonth.taxBase).toBe(4000);
      // Net: 5000 - tax
      expect(firstMonth.netSalary).toBeCloseTo(5000 - firstMonth.pitAdvance, 1);
    });
  });

  describe('B2B vs Umowa o Pracę Comparison', () => {
    it('compares UoP vs B2B with Ryczałt 12% (IT programmer scenario)', () => {
      const comparison = calculateB2bVsUop({
        grossSalaryOrInvoice: 15000,
        inputBasis: 'uop_gross',
        taxRegime: 'ryczalt',
        ryczaltRate: 0.12,
        zusType: 'pelny',
      });

      expect(comparison.uop.grossMonthly).toBe(15000);
      expect(comparison.b2b.netInvoicedMonthly).toBe(15000);
      expect(comparison.b2b.socialZusMonthly).toBeCloseTo(POLAND_SALARY_RULES_2026.b2bZus.pelnyMonthly.totalWithChorobowe, 1);
      // Health in tier 2 (15k/mo = 180k/yr): 780.57 PLN
      expect(comparison.b2b.healthMonthly).toBe(POLAND_SALARY_RULES_2026.b2bZus.zdrowotnaB2b.ryczaltMonthly.tier2);
      // B2B take-home is higher than UoP for 15,000 PLN
      expect(comparison.b2b.netMonthly).toBeGreaterThan(comparison.uop.netMonthly);
      expect(comparison.recommendedOption).toBe('b2b');
    });

    it('compares UoP vs B2B with Podatek Liniowy 19%', () => {
      const comparison = calculateB2bVsUop({
        grossSalaryOrInvoice: 20000,
        inputBasis: 'uop_gross',
        taxRegime: 'liniowy',
        zusType: 'pelny',
        businessExpenses: 2000,
      });

      expect(comparison.b2b.businessExpensesMonthly).toBe(2000);
      expect(comparison.b2b.incomeTaxMonthly).toBeGreaterThan(0);
      expect(comparison.b2b.netMonthly).toBeGreaterThan(0);
    });

    it('compares with Ulga na Start (0 PLN social ZUS)', () => {
      const comparison = calculateB2bVsUop({
        grossSalaryOrInvoice: 10000,
        zusType: 'ulga_na_start',
        taxRegime: 'ryczalt',
        ryczaltRate: 0.12,
      });

      expect(comparison.b2b.socialZusMonthly).toBe(0);
      expect(comparison.monthlyDifference).toBeGreaterThan(0);
    });

    it('compares with Preferencyjny ZUS', () => {
      const comparison = calculateB2bVsUop({
        grossSalaryOrInvoice: 10000,
        zusType: 'preferencyjny',
        hasChorobowe: false,
      });

      expect(comparison.b2b.socialZusMonthly).toBe(POLAND_SALARY_RULES_2026.b2bZus.preferencyjnyMonthly.totalWithoutChorobowe);
    });

    it('handles Skala Podatkowa on B2B', () => {
      const comparison = calculateB2bVsUop({
        grossSalaryOrInvoice: 8000,
        taxRegime: 'skala',
        zusType: 'pelny',
      });

      expect(comparison.b2b.healthMonthly).toBeGreaterThanOrEqual(POLAND_SALARY_RULES_2026.minimalWage.grossMonthly * 0.09);
    });
  });
});
