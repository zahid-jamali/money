import { describe, it, expect } from 'vitest';
import {
  calculateSchengenStatus,
  checkTripFeasibility,
  getLatestExitDate,
  getEarliestFullResetDate,
  formatStaysSummary,
  diffDays,
  addDays,
  dateToEpochDay,
  epochDayToDate,
  SchengenStay,
} from './schengen';
import {
  isSchengenMember,
  getSchengenCountries,
  getEtiasFacts,
  getEesFacts,
} from '@/rules/eu/schengen';

describe('Schengen 90/180 Travel Engine', () => {
  // Scenario 1: Empty stays
  it('1. correctly reports 0 used and 90 remaining when no stays exist', () => {
    const result = calculateSchengenStatus([], '2026-06-01');
    expect(result.daysUsed).toBe(0);
    expect(result.daysRemaining).toBe(90);
    expect(result.isOverstay).toBe(false);
    expect(result.overstayDates).toEqual([]);
    expect(result.earliestFullResetDate).toBe('2026-06-01');
  });

  // Scenario 2: Single 1-day trip (entry == exit)
  it('2. counts single-day trip (entry == exit) as exactly 1 full day', () => {
    const stays: SchengenStay[] = [{ entry: '2026-05-10', exit: '2026-05-10' }];
    const result = calculateSchengenStatus(stays, '2026-05-10');
    expect(result.daysUsed).toBe(1);
    expect(result.daysRemaining).toBe(89);
    expect(result.isOverstay).toBe(false);
  });

  // Scenario 3: Single continuous 90-day stay followed by 90 days out
  it('3. handles single 90-day trip followed by 90 days out', () => {
    // 2026-01-01 to 2026-03-31:
    // Jan: 31 days, Feb (non-leap): 28 days, Mar: 31 days = 90 days exactly!
    const stays: SchengenStay[] = [{ entry: '2026-01-01', exit: '2026-03-31' }];
    expect(diffDays('2026-01-01', '2026-03-31') + 1).toBe(90);

    // On 2026-03-31 (the 90th day)
    const resOnExit = calculateSchengenStatus(stays, '2026-03-31');
    expect(resOnExit.daysUsed).toBe(90);
    expect(resOnExit.daysRemaining).toBe(0);
    expect(resOnExit.isOverstay).toBe(false);

    // Exactly 90 days after exit: on 2026-06-29, 90 days have elapsed
    // Check rolling window: 180 days after 2026-01-01 is 2026-06-30
    // On 2026-06-30 (day 181 from Jan 1), 2026-01-01 rolls off!
    const resDay180 = calculateSchengenStatus(stays, '2026-06-29');
    expect(resDay180.daysUsed).toBe(90); // all 90 days still within [2026-01-01, 2026-06-29] (180 days)

    const resDay181 = calculateSchengenStatus(stays, '2026-06-30');
    // Window on 2026-06-30 is [2026-01-02, 2026-06-30]: 2026-01-01 has rolled off, so 89 days used!
    expect(resDay181.daysUsed).toBe(89);
    expect(resDay181.daysRemaining).toBe(1);
  });

  // Scenario 4: Overstay scenario (91 days continuous)
  it('4. detects single continuous 91-day overstay with exact date', () => {
    // Jan 1 to Apr 1 = 91 days
    const stays: SchengenStay[] = [{ entry: '2026-01-01', exit: '2026-04-01' }];
    expect(diffDays('2026-01-01', '2026-04-01') + 1).toBe(91);

    const result = calculateSchengenStatus(stays, '2026-04-01');
    expect(result.isOverstay).toBe(true);
    expect(result.daysUsed).toBe(91);
    expect(result.daysRemaining).toBe(0);
    expect(result.maxDaysExceeded).toBe(1);
    expect(result.overstayDates).toEqual(['2026-04-01']);
  });

  // Scenario 5: Multiple short weekend trips
  it('5. correctly aggregates multiple short weekend trips', () => {
    const stays: SchengenStay[] = [
      { entry: '2026-02-06', exit: '2026-02-08' }, // 3 days (Fri-Sun)
      { entry: '2026-02-20', exit: '2026-02-22' }, // 3 days
      { entry: '2026-03-06', exit: '2026-03-08' }, // 3 days
      { entry: '2026-03-20', exit: '2026-03-22' }, // 3 days
    ]; // 12 days total
    const result = calculateSchengenStatus(stays, '2026-04-01');
    expect(result.daysUsed).toBe(12);
    expect(result.daysRemaining).toBe(78);
    expect(result.isOverstay).toBe(false);
  });

  // Scenario 6: Back-to-back trips with 1 day gap
  it('6. handles back-to-back trips with a 1-day gap outside Schengen', () => {
    const stays: SchengenStay[] = [
      { entry: '2026-01-01', exit: '2026-01-10' }, // 10 days
      // 2026-01-11 outside
      { entry: '2026-01-12', exit: '2026-01-20' }, // 9 days
    ];
    const result = calculateSchengenStatus(stays, '2026-01-20');
    expect(result.daysUsed).toBe(19);
    expect(result.daysRemaining).toBe(71);
    expect(result.isOverstay).toBe(false);
  });

  // Scenario 7: Severe overstay (95 days)
  it('7. detects 95-day trip with 5 days overstay and exact illegal dates', () => {
    // 2026-01-01 + 94 days = 2026-04-05 (95 days total)
    const exitDate = addDays('2026-01-01', 94);
    expect(diffDays('2026-01-01', exitDate) + 1).toBe(95);

    const stays: SchengenStay[] = [{ entry: '2026-01-01', exit: exitDate }];
    const result = calculateSchengenStatus(stays, exitDate);
    expect(result.isOverstay).toBe(true);
    expect(result.daysUsed).toBe(95);
    expect(result.maxDaysExceeded).toBe(5);
    expect(result.overstayDates.length).toBe(5);
    expect(result.overstayDates[0]).toBe('2026-04-01');
    expect(result.overstayDates[4]).toBe('2026-04-05');
  });

  // Scenario 8: Leap year calculation (2024 leap year)
  it('8. accurately accounts for leap year 29 February', () => {
    const stays: SchengenStay[] = [{ entry: '2024-02-28', exit: '2024-03-01' }];
    // Feb 28, Feb 29, Mar 1 = 3 days
    expect(diffDays('2024-02-28', '2024-03-01') + 1).toBe(3);

    const result = calculateSchengenStatus(stays, '2024-03-01');
    expect(result.daysUsed).toBe(3);
    expect(result.daysRemaining).toBe(87);
  });

  // Scenario 9: Boundary 179/180 day rolling window edge case
  it('9. correctly drops old stay day on the 181st day', () => {
    // Day 0: 2026-01-01 (1 day stay)
    const stays: SchengenStay[] = [{ entry: '2026-01-01', exit: '2026-01-01' }];

    // Rolling window is [D - 179, D].
    // If D = 2026-01-01 + 179 days: window start is 2026-01-01 -> stays in window!
    const day180 = addDays('2026-01-01', 179);
    const res180 = calculateSchengenStatus(stays, day180);
    expect(res180.daysUsed).toBe(1);

    // If D = 2026-01-01 + 180 days: window start is 2026-01-02 -> 2026-01-01 drops out!
    const day181 = addDays('2026-01-01', 180);
    const res181 = calculateSchengenStatus(stays, day181);
    expect(res181.daysUsed).toBe(0);
    expect(res181.daysRemaining).toBe(90);
  });

  // Scenario 10: Planner mode - legal trip
  it('10. planner mode approves legal planned trip', () => {
    const existingStays: SchengenStay[] = [
      { entry: '2026-01-01', exit: '2026-01-30' }, // 30 days
    ];
    // Plan 14-day trip in June 2026
    const plan = checkTripFeasibility(existingStays, '2026-06-01', 14);
    expect(plan.isLegal).toBe(true);
    expect(plan.firstIllegalDate).toBeUndefined();
    expect(plan.daysRemainingBeforeTrip).toBe(60); // 90 - 30
  });

  // Scenario 11: Planner mode - overstay rejection with firstIllegalDate
  it('11. planner mode rejects trip causing overstay and identifies first illegal date', () => {
    const existingStays: SchengenStay[] = [
      { entry: '2026-01-01', exit: '2026-03-21' }, // 80 days
    ];
    // Plan 15-day trip starting 2026-04-01 (only 10 days left!)
    const plan = checkTripFeasibility(existingStays, '2026-04-01', 15);
    expect(plan.isLegal).toBe(false);
    // 80 days used. 10 days allowed: Apr 1 to Apr 10.
    // First illegal date is 11th day: 2026-04-11
    expect(plan.firstIllegalDate).toBe('2026-04-11');
  });

  // Scenario 12: Overlapping stays normalization
  it('12. normalizes overlapping stays without double counting days', () => {
    const stays: SchengenStay[] = [
      { entry: '2026-02-01', exit: '2026-02-10' }, // 10 days
      { entry: '2026-02-05', exit: '2026-02-15' }, // Overlaps Feb 5-10
    ];
    // Total unique days: Feb 1 to Feb 15 = 15 days
    const result = calculateSchengenStatus(stays, '2026-02-20');
    expect(result.daysUsed).toBe(15);
  });

  // Scenario 13: Stays out of chronological order
  it('13. correctly evaluates stays provided in reverse order', () => {
    const stays: SchengenStay[] = [
      { entry: '2026-03-01', exit: '2026-03-10' }, // 10 days
      { entry: '2026-01-01', exit: '2026-01-10' }, // 10 days
    ];
    const result = calculateSchengenStatus(stays, '2026-03-15');
    expect(result.daysUsed).toBe(20);
    expect(result.daysRemaining).toBe(70);
  });

  // Scenario 14: Latest legal exit date calculation
  it('14. calculates exact latest legal exit date for a fresh traveler', () => {
    const latestExit = getLatestExitDate([], '2026-01-01');
    // From 2026-01-01, 90 continuous days reaches 2026-03-31
    expect(latestExit).toBe('2026-03-31');
    expect(diffDays('2026-01-01', '2026-03-31') + 1).toBe(90);
  });

  // Scenario 15: Latest legal exit date when past stays roll off during the stay
  it('15. allows extended stay as earlier stays roll off the 180-day window', () => {
    // 30 days used in January: 2026-01-01 to 2026-01-30
    const stays: SchengenStay[] = [{ entry: '2026-01-01', exit: '2026-01-30' }];
    // If arriving on 2026-06-15:
    // On 2026-06-15, window start is [2026-06-15 - 179] = 2026-01-01!
    // As traveler stays forward into late June / July, the January stay days roll off day-by-day!
    const latestExit = getLatestExitDate(stays, '2026-06-15');
    expect(latestExit).not.toBeNull();
    // Verify that on latestExit, rolling window is <= 90
    const testStays: SchengenStay[] = [
      ...stays,
      { entry: '2026-06-15', exit: latestExit! },
    ];
    const testRes = calculateSchengenStatus(testStays, latestExit!);
    expect(testRes.isOverstay).toBe(false);
    expect(testRes.daysUsed).toBeLessThanOrEqual(90);
  });

  // Scenario 16: Earliest full reset date calculation
  it('16. calculates earliest full reset date exactly 180 days after the last exit', () => {
    const stays: SchengenStay[] = [{ entry: '2026-01-01', exit: '2026-01-31' }];
    const resetDate = getEarliestFullResetDate(stays, '2026-02-01');
    // Last stay day is 2026-01-31.
    // 180 days after 2026-01-31 is 2026-07-30
    expect(resetDate).toBe(addDays('2026-01-31', 180));

    // On that reset date, days used should be 0 and days remaining 90!
    const resOnReset = calculateSchengenStatus(stays, resetDate);
    expect(resOnReset.daysUsed).toBe(0);
    expect(resOnReset.daysRemaining).toBe(90);
  });

  // Scenario 17: Overstay from two separate trips accumulating > 90 days
  it('17. detects overstay when two separate trips exceed 90 days in rolling window', () => {
    const stays: SchengenStay[] = [
      { entry: '2026-01-01', exit: '2026-02-19' }, // 50 days
      { entry: '2026-03-01', exit: '2026-04-15' }, // 46 days (total 96 days)
    ];
    const result = calculateSchengenStatus(stays, '2026-04-15');
    expect(result.isOverstay).toBe(true);
    expect(result.maxDaysExceeded).toBe(6);
    // 50 + 46 = 96 days. 91st day is 2026-04-10
    expect(result.overstayDates[0]).toBe('2026-04-10');
  });

  // Scenario 18: Trip spanning year boundary (Dec 2025 to Jan 2026)
  it('18. handles trip spanning year boundaries seamlessly', () => {
    const stays: SchengenStay[] = [
      { entry: '2025-12-20', exit: '2026-01-10' }, // 22 days
    ];
    const result = calculateSchengenStatus(stays, '2026-01-10');
    expect(result.daysUsed).toBe(22);
    expect(result.daysRemaining).toBe(68);
    expect(result.isOverstay).toBe(false);
  });

  // Scenario 19: Inverted entry and exit auto-corrected
  it('19. auto-corrects inverted entry and exit dates', () => {
    const stays: SchengenStay[] = [{ entry: '2026-03-10', exit: '2026-03-01' }];
    const result = calculateSchengenStatus(stays, '2026-03-15');
    expect(result.daysUsed).toBe(10);
  });

  // Scenario 20: Summary report generation
  it('20. generates formatted text summary containing key metrics', () => {
    const stays: SchengenStay[] = [
      { entry: '2026-01-01', exit: '2026-01-15', label: 'Ski trip in Austria' },
    ];
    const summary = formatStaysSummary(stays, '2026-01-20');
    expect(summary).toContain('SCHENGEN 90/180 TRAVEL CALCULATION REPORT');
    expect(summary).toContain('Days Used in Window: 15 / 90 days');
    expect(summary).toContain('Ski trip in Austria');
    expect(summary).toContain('Earliest Full 90-Day Reset Date');
  });

  // Rules test: 29 member countries, Bulgaria & Romania from Jan 1 2025, Cyprus/Ireland excluded
  describe('Schengen Rules & Country Data (Task 1)', () => {
    it('verifies 29 Schengen member countries', () => {
      const countries = getSchengenCountries();
      expect(countries.length).toBe(29);
    });

    it('confirms Bulgaria and Romania full membership from 2025-01-01', () => {
      expect(isSchengenMember('BG')).toBe(true);
      expect(isSchengenMember('RO')).toBe(true);
      const bg = getSchengenCountries().find((c) => c.code === 'BG');
      const ro = getSchengenCountries().find((c) => c.code === 'RO');
      expect(bg?.joinedDate).toBe('2025-01-01');
      expect(ro?.joinedDate).toBe('2025-01-01');
    });

    it('confirms Cyprus and Ireland are NOT Schengen members', () => {
      expect(isSchengenMember('CY')).toBe(false);
      expect(isSchengenMember('IE')).toBe(false);
    });

    it('provides accurate ETIAS facts (launch 2027, €7 fee, 3-year validity)', () => {
      const etias = getEtiasFacts();
      expect(etias.expectedLaunchYear).toBe(2027);
      expect(etias.standardFeeEur).toBe(7);
      expect(etias.validityYears).toBe(3);
      expect(etias.transitionPeriod.gracePeriodMonths).toBe(6);
      expect(etias.governingRegulation).toBe('Regulation (EU) 2018/1240');
      expect(etias.officialPortal).toBe('https://travel-europe.europa.eu/etias_en');
    });

    it('provides accurate EES facts (biometric kiosks, replaces passport stamping)', () => {
      const ees = getEesFacts();
      expect(ees.replacesPassportStamping).toBe(true);
      expect(ees.biometricRequirements.length).toBeGreaterThan(0);
      expect(ees.regulation).toBe('Regulation (EU) 2017/2226');
    });
  });
});
