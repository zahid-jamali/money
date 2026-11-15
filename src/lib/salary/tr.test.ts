import { describe, it, expect } from 'vitest';
import {
  calculateKidemTazminati,
  calculateIhbarTazminati,
  calculateKidemVeIhbar,
  calculateGrossToNet,
  calculateNetToGross,
  calculateDateDifference,
  round2,
} from './tr';
import {
  ASGARI_UCRET_2026,
  SGK_PEK_2026,
  KIDEM_TAZMINATI_TAVANI_2026_H1,
  getTurkeySalaryRules,
  getKidemTavaniForDate,
} from '@/rules/tr/salary-2026';

describe('Turkey Salary Rules 2026', () => {
  it('provides official 2026 asgari ücret parameters', () => {
    const rules = getTurkeySalaryRules();
    expect(rules.asgariUcret.gross).toBe(26005.50);
    expect(rules.asgariUcret.net).toBe(22104.67);
    expect(rules.asgariUcret.sgkIsci).toBe(3640.77);
    expect(rules.asgariUcret.issizlikIsci).toBe(260.06);
    expect(rules.pek.taban).toBe(26005.50);
    expect(rules.pek.tavan).toBe(195041.25);
    expect(rules.kidemTavani.current).toBe(59250.00);
    expect(rules.damgaVergisiRate).toBe(0.00759);
  });

  it('provides historical kıdem tavanı lookup', () => {
    expect(getKidemTavaniForDate('2024-03-15')).toBe(35058.58);
    expect(getKidemTavaniForDate('2024-09-01')).toBe(41828.42);
    expect(getKidemTavaniForDate('2026-02-01')).toBe(59250.00);
  });
});

describe('1. Kıdem Tazminatı Calculator', () => {
  it('calculates standard employer layoff correctly for 3 full years', () => {
    const res = calculateKidemTazminati({
      startDate: '2023-01-01',
      endDate: '2025-12-31',
      grossMonthlySalary: 30000,
      reason: 'employer_layoff',
    });

    expect(res.eligible).toBe(true);
    expect(res.serviceYears).toBe(3);
    expect(res.totalDays).toBe(1096); // 2024 is leap year (366 days) -> 365 + 366 + 365 = 1096
    expect(res.isCapApplied).toBe(false);
    expect(res.cappedWage).toBe(30000);
    expect(res.grossSeverance).toBeGreaterThan(89000);
    expect(res.damgaVergisi).toBe(round2(res.grossSeverance * 0.00759));
    expect(res.netSeverance).toBe(round2(res.grossSeverance - res.damgaVergisi));
  });

  it('applies the statutory kıdem tazminatı tavanı when wage exceeds cap', () => {
    const res = calculateKidemTazminati({
      startDate: '2025-01-01',
      endDate: '2026-01-01',
      grossMonthlySalary: 120000, // Exceeds 2026 H1 cap of 59,250 TL
      reason: 'employer_layoff',
    });

    expect(res.eligible).toBe(true);
    expect(res.isCapApplied).toBe(true);
    expect(res.cappedWage).toBe(59250.00);
    expect(res.grossSeverance).toBeLessThan(120000 * 2);
    expect(res.grossSeverance).toBeCloseTo((59250 * res.totalDays) / 365, 1);
  });

  it('rejects eligibility when service duration is under 1 year (365 days)', () => {
    const res = calculateKidemTazminati({
      startDate: '2025-01-01',
      endDate: '2025-10-01',
      grossMonthlySalary: 35000,
      reason: 'employer_layoff',
    });

    expect(res.eligible).toBe(false);
    expect(res.grossSeverance).toBe(0);
    expect(res.netSeverance).toBe(0);
    expect(res.ineligibilityReason).toContain('en az 1 tam yıl (365 gün)');
  });

  it('rejects eligibility for voluntary plain resignation', () => {
    const res = calculateKidemTazminati({
      startDate: '2022-01-01',
      endDate: '2026-01-01',
      grossMonthlySalary: 40000,
      reason: 'employee_resignation',
    });

    expect(res.eligible).toBe(false);
    expect(res.grossSeverance).toBe(0);
    expect(res.ineligibilityReason).toContain('kendi isteğiyle istifa eden çalışan kıdem tazminatına hak kazanamaz');
  });

  it('rejects eligibility for termination due to employee misconduct (İş Kanunu 25/II)', () => {
    const res = calculateKidemTazminati({
      startDate: '2020-01-01',
      endDate: '2026-01-01',
      grossMonthlySalary: 50000,
      reason: 'employer_misconduct_25_2',
    });

    expect(res.eligible).toBe(false);
    expect(res.grossSeverance).toBe(0);
    expect(res.ineligibilityReason).toContain('25/II');
  });

  it('approves eligibility for female marriage within 1 year', () => {
    const res = calculateKidemTazminati({
      startDate: '2022-05-15',
      endDate: '2026-02-01',
      grossMonthlySalary: 45000,
      reason: 'marriage_female',
    });

    expect(res.eligible).toBe(true);
    expect(res.grossSeverance).toBeGreaterThan(0);
    expect(res.netSeverance).toBeGreaterThan(0);
  });

  it('approves eligibility for military service resignation', () => {
    const res = calculateKidemTazminati({
      startDate: '2023-03-01',
      endDate: '2026-01-15',
      grossMonthlySalary: 38000,
      reason: 'military_service',
    });

    expect(res.eligible).toBe(true);
    expect(res.grossSeverance).toBeGreaterThan(0);
  });

  it('handles leap year dates and fractional months/days accurately', () => {
    // 2024 is a leap year (February has 29 days)
    const diff = calculateDateDifference('2024-02-01', '2024-03-01');
    expect(diff.totalDays).toBe(30); // 29 days in Feb + 1 in Mar = 30 days inclusive

    const res = calculateKidemTazminati({
      startDate: '2024-01-01',
      endDate: '2025-01-01',
      grossMonthlySalary: 30000,
      regularBonuses: 5000, // giydirilmiş brüt = 35000
      reason: 'employee_just_cause_24',
    });

    expect(res.eligible).toBe(true);
    expect(res.giydirilmisBrut).toBe(35000);
    expect(res.totalDays).toBe(367); // 366 in 2024 + 1
    expect(res.grossSeverance).toBeCloseTo((35000 * 367) / 365, 1);
  });
});

describe('2. İhbar Tazminatı Calculator', () => {
  it('applies 2 weeks notice for service under 6 months (< 6 months)', () => {
    const res = calculateIhbarTazminati({
      grossMonthlySalary: 30000,
      serviceDurationMonths: 4,
    });

    expect(res.noticeWeeks).toBe(2);
    expect(res.noticeDays).toBe(14);
    expect(res.grossIhbar).toBe(round2((30000 / 30) * 14)); // 14,000 TL
    expect(res.gelirVergisi).toBeGreaterThan(0);
    expect(res.damgaVergisi).toBe(round2(res.grossIhbar * 0.00759));
  });

  it('applies 4 weeks notice for service between 6 and 18 months', () => {
    const res = calculateIhbarTazminati({
      grossMonthlySalary: 30000,
      serviceDurationMonths: 12,
    });

    expect(res.noticeWeeks).toBe(4);
    expect(res.noticeDays).toBe(28);
    expect(res.grossIhbar).toBe(round2((30000 / 30) * 28)); // 28,000 TL
  });

  it('applies 6 weeks notice for service between 18 and 36 months', () => {
    const res = calculateIhbarTazminati({
      grossMonthlySalary: 30000,
      serviceDurationMonths: 24,
    });

    expect(res.noticeWeeks).toBe(6);
    expect(res.noticeDays).toBe(42);
    expect(res.grossIhbar).toBe(round2((30000 / 30) * 42)); // 42,000 TL
  });

  it('applies 8 weeks notice for service over 3 years (> 36 months)', () => {
    const res = calculateIhbarTazminati({
      grossMonthlySalary: 30000,
      serviceDurationMonths: 48,
    });

    expect(res.noticeWeeks).toBe(8);
    expect(res.noticeDays).toBe(56);
    expect(res.grossIhbar).toBe(round2((30000 / 30) * 56)); // 56,000 TL
  });

  it('taxes ihbar at 15% rate when cumulative tax base is low', () => {
    const res = calculateIhbarTazminati({
      grossMonthlySalary: 30000,
      serviceDurationMonths: 4, // 14,000 TL gross
      cumulativeTaxBase: 0,
    });

    // 14,000 * 0.15 = 2,100 TL
    expect(res.gelirVergisi).toBe(2100);
  });

  it('taxes ihbar at 20% bracket when cumulative base starts at 20% boundary', () => {
    const res = calculateIhbarTazminati({
      grossMonthlySalary: 30000,
      serviceDurationMonths: 4, // 14,000 TL gross
      cumulativeTaxBase: 160000, // Starts above 158,000 TL limit (20% bracket)
    });

    // 14,000 * 0.20 = 2,800 TL
    expect(res.gelirVergisi).toBe(2800);
  });

  it('taxes ihbar at 27% bracket when cumulative base is high', () => {
    const res = calculateIhbarTazminati({
      grossMonthlySalary: 30000,
      serviceDurationMonths: 4, // 14,000 TL gross
      cumulativeTaxBase: 350000, // In 27% bracket (330k - 1.2M)
    });

    // 14,000 * 0.27 = 3,780 TL
    expect(res.gelirVergisi).toBe(3780);
  });

  it('includes regular bonuses in giydirilmiş brüt wage for ihbar calculation', () => {
    const res = calculateIhbarTazminati({
      grossMonthlySalary: 25000,
      regularBonuses: 5000, // total giydirilmiş = 30,000 TL
      serviceDurationMonths: 10, // 28 days
    });

    expect(res.giydirilmisBrut).toBe(30000);
    expect(res.grossIhbar).toBe(28000);
  });
});

describe('3. Combined Kıdem & İhbar Calculator', () => {
  it('combines kidem and ihbar seamlessly for employer layoff', () => {
    const res = calculateKidemVeIhbar({
      startDate: '2023-01-01',
      endDate: '2026-01-01',
      grossMonthlySalary: 30000,
      reason: 'employer_layoff',
    });

    expect(res.kidem.eligible).toBe(true);
    expect(res.ihbar.grossIhbar).toBeGreaterThan(0);
    expect(res.totalGross).toBe(round2(res.kidem.grossSeverance + res.ihbar.grossIhbar));
    expect(res.totalNet).toBe(round2(res.kidem.netSeverance + res.ihbar.netIhbar));
    expect(res.totalDamgaVergisi).toBe(round2(res.kidem.damgaVergisi + res.ihbar.damgaVergisi));
    expect(res.totalGelirVergisi).toBe(res.ihbar.gelirVergisi); // kidem has 0 income tax
  });
});

describe('4. Brütten Nete Maaş Calculator', () => {
  it('exactly matches the 2026 asgari ücret net salary of 22,104.67 TL', () => {
    const res = calculateGrossToNet({
      grossSalary: ASGARI_UCRET_2026.gross,
      use5PointIncentive: true,
    });

    const m1 = res.months[0];
    expect(m1.gross).toBe(26005.50);
    expect(m1.sgkIsci).toBe(3640.77);
    expect(m1.issizlikIsci).toBe(260.06);
    expect(m1.gelirVergisiMatrahi).toBe(22104.67);
    expect(m1.netIncomeTax).toBe(0); // 100% exempt
    expect(m1.netDamgaVergisi).toBe(0); // 100% exempt
    expect(m1.netSalary).toBe(22104.67);
    expect(m1.sgkIsveren).toBe(4030.85); // 15.5% with incentive
    expect(m1.issizlikIsveren).toBe(520.11); // 2%
    expect(m1.totalEmployerCost).toBe(30556.46);
  });

  it('caps SGK deductions at PEK tavan for high earners', () => {
    const res = calculateGrossToNet({
      grossSalary: 250000, // Above PEK tavan of 195,041.25 TL
      use5PointIncentive: true,
    });

    const m1 = res.months[0];
    const maxSgkIsci = round2(SGK_PEK_2026.tavan * 0.14);
    const maxIssizlikIsci = round2(SGK_PEK_2026.tavan * 0.01);

    expect(m1.sgkIsci).toBe(maxSgkIsci);
    expect(m1.issizlikIsci).toBe(maxIssizlikIsci);
  });

  it('models mid-year bracket crossing from 15% to 20%', () => {
    const res = calculateGrossToNet({
      grossSalary: 45000,
    });

    // Month 1 should have lower net tax than later months
    expect(res.months[0].netIncomeTax).toBeLessThan(res.months[5].netIncomeTax);
    // Net salary drops as tax bracket increases
    expect(res.months[0].netSalary).toBeGreaterThan(res.months[11].netSalary);
  });

  it('crosses into the 27% tax bracket for higher salaries', () => {
    const res = calculateGrossToNet({
      grossSalary: 70000,
    });

    // Total matrah exceeds 330,000 TL mid-year
    expect(res.totals.grossIncomeTax).toBeGreaterThan(100000);
    const lastMonth = res.months[11];
    expect(lastMonth.cumulativeMatrahAfter).toBeGreaterThan(330000);
  });

  it('calculates employer cost with and without 5-point Treasury incentive', () => {
    const resWithIncentive = calculateGrossToNet({
      grossSalary: 50000,
      use5PointIncentive: true,
    });
    const resWithoutIncentive = calculateGrossToNet({
      grossSalary: 50000,
      use5PointIncentive: false,
    });

    // 50,000 * 0.05 = 2,500 TL difference per month
    expect(resWithoutIncentive.months[0].totalEmployerCost - resWithIncentive.months[0].totalEmployerCost).toBe(2500);
  });

  it('handles 12 varying monthly salaries array input', () => {
    const varyingGross = [
      30000, 30000, 35000, 30000, 40000, 30000,
      30000, 45000, 30000, 30000, 50000, 30000,
    ];
    const res = calculateGrossToNet({ grossSalary: varyingGross });

    expect(res.months.length).toBe(12);
    expect(res.months[2].gross).toBe(35000);
    expect(res.months[4].gross).toBe(40000);
    expect(res.totals.gross).toBe(varyingGross.reduce((a, b) => a + b, 0));
  });

  it('computes annual totals and averages accurately', () => {
    const res = calculateGrossToNet({ grossSalary: 40000 });
    expect(res.totals.gross).toBe(480000);
    expect(res.averages.monthlyGross).toBe(40000);
    expect(res.totals.netSalary).toBe(round2(res.months.reduce((acc, m) => acc + m.netSalary, 0)));
  });

  it('correctly applies damga vergisi exemption each month', () => {
    const res = calculateGrossToNet({ grossSalary: 30000 });
    const m1 = res.months[0];
    const rawDamga = round2(30000 * 0.00759); // 227.70 TL
    const exemption = ASGARI_UCRET_2026.damgaVergisiIstisnasi; // 197.38 TL
    expect(m1.netDamgaVergisi).toBe(round2(rawDamga - exemption));
  });
});

describe('5. Netten Brüte Maaş Calculator', () => {
  it('inverts 2026 asgari ücret net salary back to 26,005.50 TL gross', () => {
    const res = calculateNetToGross({
      targetNetSalary: 22104.67,
      month: 1,
    });

    expect(res.requiredGrossSalary).toBe(26005.50);
    expect(res.calculatedNetSalary).toBe(22104.67);
    expect(Math.abs(res.difference)).toBeLessThan(0.01);
  });

  it('solves for a 35,000 TL net salary target in Month 1', () => {
    const res = calculateNetToGross({
      targetNetSalary: 35000,
      month: 1,
    });

    expect(res.requiredGrossSalary).toBeGreaterThan(35000);
    expect(Math.abs(res.calculatedNetSalary - 35000)).toBeLessThan(0.05);
  });

  it('solves for higher salary target (60,000 TL net)', () => {
    const res = calculateNetToGross({
      targetNetSalary: 60000,
      month: 1,
    });

    expect(res.requiredGrossSalary).toBeGreaterThan(60000);
    expect(Math.abs(res.calculatedNetSalary - 60000)).toBeLessThan(0.05);
  });

  it('solves for high earner net salary (120,000 TL net)', () => {
    const res = calculateNetToGross({
      targetNetSalary: 120000,
      month: 1,
    });

    expect(res.requiredGrossSalary).toBeGreaterThan(120000);
    expect(Math.abs(res.calculatedNetSalary - 120000)).toBeLessThan(0.1);
  });

  it('requires higher gross in later months due to cumulative tax brackets', () => {
    const resMonth1 = calculateNetToGross({ targetNetSalary: 40000, month: 1 });
    const resMonth10 = calculateNetToGross({ targetNetSalary: 40000, month: 10 });

    expect(resMonth10.requiredGrossSalary).toBeGreaterThan(resMonth1.requiredGrossSalary);
  });

  it('outputs employer cost alongside required gross', () => {
    const res = calculateNetToGross({ targetNetSalary: 30000 });
    expect(res.totalEmployerCost).toBeGreaterThan(res.requiredGrossSalary);
  });

  it('handles edge case of 0 target net gracefully', () => {
    const res = calculateNetToGross({ targetNetSalary: 0 });
    expect(res.requiredGrossSalary).toBe(0);
    expect(res.calculatedNetSalary).toBe(0);
  });

  it('provides detailed deduction breakdown in result', () => {
    const res = calculateNetToGross({ targetNetSalary: 45000 });
    expect(res.sgkIsci).toBeGreaterThan(0);
    expect(res.issizlikIsci).toBeGreaterThan(0);
    expect(res.netIncomeTax).toBeGreaterThan(0);
    expect(res.netDamgaVergisi).toBeGreaterThan(0);
  });
});
