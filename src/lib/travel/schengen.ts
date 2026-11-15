/**
 * Schengen 90/180 Rolling Window Travel Calculation Engine.
 * Pure functions without React dependencies.
 *
 * Rule: Third-country nationals may stay in the Schengen Area for up to 90 days
 * in any 180-day rolling window.
 *
 * Key mechanics:
 * 1. Both entry day and exit day count as full days spent in Schengen.
 * 2. For any check date D, the rolling 180-day window is [D - 179, D] (180 days inclusive).
 * 3. As time moves forward, older stays roll off the window day-by-day.
 */

export interface SchengenStay {
  id?: string;
  entry: string; // YYYY-MM-DD
  exit: string;  // YYYY-MM-DD
  label?: string;
}

export interface SchengenCalculationResult {
  checkDate: string;
  daysUsed: number;
  daysRemaining: number;
  isOverstay: boolean;
  overstayDates: string[];
  maxDaysExceeded: number;
  earliestFullResetDate: string;
  windowStart: string;
  windowEnd: string;
}

export interface TripFeasibilityResult {
  isLegal: boolean;
  firstIllegalDate?: string;
  daysRemainingBeforeTrip: number;
  latestExitDate: string | null;
  maxContinuousDays: number;
}

// ==========================================
// Date Helper Utilities (Epoch Day Math)
// ==========================================

/**
 * Converts a YYYY-MM-DD string to epoch day (number of days since 1970-01-01 UTC).
 * Using UTC integer division avoids timezone and daylight saving shifts.
 */
export function dateToEpochDay(dateStr: string): number {
  const parts = dateStr.split('-').map((p) => parseInt(p, 10));
  if (parts.length !== 3 || parts.some(isNaN)) {
    throw new Error(`Invalid date format: "${dateStr}". Expected YYYY-MM-DD.`);
  }
  const [y, m, d] = parts;
  const utcMs = Date.UTC(y, m - 1, d);
  return Math.floor(utcMs / 86400000);
}

/**
 * Converts epoch day integer back to YYYY-MM-DD string.
 */
export function epochDayToDate(epochDay: number): string {
  const date = new Date(epochDay * 86400000);
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Adds an integer number of days to a YYYY-MM-DD string.
 */
export function addDays(dateStr: string, days: number): string {
  return epochDayToDate(dateToEpochDay(dateStr) + days);
}

/**
 * Computes difference in days between two YYYY-MM-DD dates (d2 - d1).
 */
export function diffDays(d1: string, d2: string): number {
  return dateToEpochDay(d2) - dateToEpochDay(d1);
}

/**
 * Validates whether a string is a valid YYYY-MM-DD date.
 */
export function isValidDateStr(dateStr: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return false;
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return (
    dt.getUTCFullYear() === y &&
    dt.getUTCMonth() === m - 1 &&
    dt.getUTCDate() === d
  );
}

/**
 * Converts an array of stays into a Set of unique epoch days spent in Schengen.
 * Ensures overlapping stays or duplicate entries are normalized.
 */
export function buildStayDaysSet(stays: SchengenStay[]): Set<number> {
  const set = new Set<number>();

  for (const stay of stays) {
    if (!stay.entry || !stay.exit) continue;
    if (!isValidDateStr(stay.entry) || !isValidDateStr(stay.exit)) continue;

    let start = dateToEpochDay(stay.entry);
    let end = dateToEpochDay(stay.exit);

    if (start > end) {
      // Auto-correct if inverted
      const temp = start;
      start = end;
      end = temp;
    }

    for (let day = start; day <= end; day++) {
      set.add(day);
    }
  }

  return set;
}

/**
 * Counts how many days in the rolling 180-day window [targetDay - 179, targetDay]
 * are present in the provided stay set.
 */
export function countDaysInRollingWindow(targetDay: number, stayDays: Set<number>): number {
  let count = 0;
  const startDay = targetDay - 179;
  for (let d = startDay; d <= targetDay; d++) {
    if (stayDays.has(d)) {
      count++;
    }
  }
  return count;
}

// ==========================================
// Core Schengen Rule Calculations
// ==========================================

/**
 * Evaluates Schengen status on a given check date.
 *
 * @param stays Array of previous and current stays
 * @param checkDate Date on which to calculate status (defaults to today UTC)
 */
export function calculateSchengenStatus(
  stays: SchengenStay[],
  checkDate?: string,
): SchengenCalculationResult {
  const targetDateStr = checkDate || new Date().toISOString().slice(0, 10);
  const targetEpoch = dateToEpochDay(targetDateStr);

  const stayDays = buildStayDaysSet(stays);

  // 1. Rolling 180-day window for target check date: [targetEpoch - 179, targetEpoch]
  const windowStartEpoch = targetEpoch - 179;
  const daysUsed = countDaysInRollingWindow(targetEpoch, stayDays);
  const daysRemaining = Math.max(0, 90 - daysUsed);

  // 2. Overstay evaluation across the entire stay history up to the check date
  // We evaluate every date from the earliest stay day up to max(checkDate, latestStayDay)
  let isOverstay = false;
  const overstayDates: string[] = [];
  let maxDaysExceeded = 0;

  if (stayDays.size > 0) {
    let minDay = Infinity;
    let maxDay = -Infinity;

    for (const d of stayDays) {
      if (d < minDay) minDay = d;
      if (d > maxDay) maxDay = d;
    }

    const evalEndDay = Math.max(targetEpoch, maxDay);

    for (let d = minDay; d <= evalEndDay; d++) {
      const windowCount = countDaysInRollingWindow(d, stayDays);
      if (windowCount > 90) {
        isOverstay = true;
        overstayDates.push(epochDayToDate(d));
        const exceeded = windowCount - 90;
        if (exceeded > maxDaysExceeded) {
          maxDaysExceeded = exceeded;
        }
      }
    }
  }

  // 3. Earliest full reset date:
  // A full 90 days are available once all previous stays fall outside the rolling 180-day window.
  // The rolling window on date D is [D - 179, D].
  // If the last stay day was L, then for D - 179 > L, we need D >= L + 180.
  // On day L + 180, window is [L + 1, L + 180], which contains 0 days of previous stays.
  const earliestFullResetDate = getEarliestFullResetDate(stays, targetDateStr);

  return {
    checkDate: targetDateStr,
    daysUsed,
    daysRemaining,
    isOverstay,
    overstayDates,
    maxDaysExceeded,
    earliestFullResetDate,
    windowStart: epochDayToDate(windowStartEpoch),
    windowEnd: targetDateStr,
  };
}

/**
 * Calculates the earliest future date when the full 90-day allowance is restored.
 */
export function getEarliestFullResetDate(stays: SchengenStay[], checkDate?: string): string {
  const targetDateStr = checkDate || new Date().toISOString().slice(0, 10);
  const targetEpoch = dateToEpochDay(targetDateStr);
  const stayDays = buildStayDaysSet(stays);

  if (stayDays.size === 0) {
    return targetDateStr;
  }

  let maxDay = -Infinity;
  for (const d of stayDays) {
    if (d > maxDay) maxDay = d;
  }

  // Full reset occurs 180 days after the last stay day
  const fullResetEpoch = maxDay + 180;

  if (fullResetEpoch <= targetEpoch) {
    // If last stay was more than 180 days ago, full allowance is already active today
    return targetDateStr;
  }

  return epochDayToDate(fullResetEpoch);
}

/**
 * Planner Mode:
 * Given proposed entry date X and planned length N days:
 * Simulates each day X to X + N - 1.
 * Detects if any day exceeds 90 days in its rolling 180-day window.
 */
export function checkTripFeasibility(
  existingStays: SchengenStay[],
  proposedEntry: string,
  plannedLengthDays: number,
): TripFeasibilityResult {
  if (!isValidDateStr(proposedEntry)) {
    throw new Error(`Invalid proposed entry date: "${proposedEntry}"`);
  }
  if (plannedLengthDays <= 0) {
    throw new Error(`Planned length must be at least 1 day. Received: ${plannedLengthDays}`);
  }

  const existingStayDays = buildStayDaysSet(existingStays);
  const entryEpoch = dateToEpochDay(proposedEntry);

  // Days remaining on entry date BEFORE taking this trip:
  // Evaluates rolling window [entryEpoch - 179, entryEpoch] considering existing stays only.
  const daysUsedBefore = countDaysInRollingWindow(entryEpoch, existingStayDays);
  const daysRemainingBeforeTrip = Math.max(0, 90 - daysUsedBefore);

  // Build simulated stay set including proposed trip
  const simulatedStayDays = new Set<number>(existingStayDays);
  for (let i = 0; i < plannedLengthDays; i++) {
    simulatedStayDays.add(entryEpoch + i);
  }

  let isLegal = true;
  let firstIllegalDate: string | undefined;

  for (let i = 0; i < plannedLengthDays; i++) {
    const currentDay = entryEpoch + i;
    const count = countDaysInRollingWindow(currentDay, simulatedStayDays);
    if (count > 90) {
      isLegal = false;
      if (!firstIllegalDate) {
        firstIllegalDate = epochDayToDate(currentDay);
      }
      break;
    }
  }

  // Calculate maximum continuous stay possible starting from proposedEntry
  const latestExitDate = getLatestExitDate(existingStays, proposedEntry);
  const maxContinuousDays = latestExitDate
    ? diffDays(proposedEntry, latestExitDate) + 1
    : 0;

  return {
    isLegal,
    firstIllegalDate,
    daysRemainingBeforeTrip,
    latestExitDate,
    maxContinuousDays,
  };
}

/**
 * Calculates the latest legal exit date starting on a planned entry date X.
 * Simulates day-by-day forward (X, X+1, X+2, ...) adding 1 day at a time,
 * dynamically rolling off past stays older than 180 days.
 * Returns null if even day X is illegal (0 days remaining).
 */
export function getLatestExitDate(
  existingStays: SchengenStay[],
  plannedEntry: string,
): string | null {
  if (!isValidDateStr(plannedEntry)) return null;

  const existingStayDays = buildStayDaysSet(existingStays);
  const entryEpoch = dateToEpochDay(plannedEntry);

  // Check if entry day itself is legal
  const testSet = new Set<number>(existingStayDays);
  testSet.add(entryEpoch);

  if (countDaysInRollingWindow(entryEpoch, testSet) > 90) {
    return null; // Entry day already exceeds limit
  }

  let currentDay = entryEpoch;
  let lastLegalDay = entryEpoch;

  // Maximum continuous stay in Schengen is theoretically capped by 90 consecutive days,
  // but if past days roll off during the stay, can a continuous stay ever exceed 90 days?
  // By definition: in ANY 180-day window, max days is 90. A single continuous stay of 91 days
  // has a 180-day window [day 91 - 179, day 91] containing exactly 91 days!
  // Therefore, a single continuous stay can NEVER exceed 90 days.
  // We simulate forward up to 100 days just to safely find the boundary.
  while (true) {
    const nextDay = currentDay + 1;
    testSet.add(nextDay);
    const count = countDaysInRollingWindow(nextDay, testSet);

    if (count <= 90) {
      lastLegalDay = nextDay;
      currentDay = nextDay;
    } else {
      break;
    }

    // Safety guard against infinite loops
    if (nextDay - entryEpoch > 120) break;
  }

  return epochDayToDate(lastLegalDay);
}

/**
 * Formats a list of stays into a clean text summary for export/printing.
 */
export function formatStaysSummary(stays: SchengenStay[], checkDate?: string): string {
  const result = calculateSchengenStatus(stays, checkDate);
  const lines: string[] = [];

  lines.push('=== SCHENGEN 90/180 TRAVEL CALCULATION REPORT ===');
  lines.push(`Report Date: ${result.checkDate}`);
  lines.push(`Rolling 180-Day Window: ${result.windowStart} to ${result.windowEnd}`);
  lines.push(`Days Used in Window: ${result.daysUsed} / 90 days`);
  lines.push(`Days Remaining: ${result.daysRemaining} days`);
  lines.push(`Status: ${result.isOverstay ? '⚠️ OVERSTAY DETECTED' : '✅ LEGAL'}`);

  if (result.isOverstay) {
    lines.push(`Max Overstay Days Exceeded: ${result.maxDaysExceeded}`);
    lines.push(`First Overstay Date: ${result.overstayDates[0]}`);
    lines.push(`All Overstay Dates (${result.overstayDates.length}): ${result.overstayDates.join(', ')}`);
  }

  lines.push(`Earliest Full 90-Day Reset Date: ${result.earliestFullResetDate}`);
  lines.push('');
  lines.push('--- RECORDED STAYS ---');

  if (stays.length === 0) {
    lines.push('No stays recorded.');
  } else {
    stays.forEach((s, i) => {
      const dur = diffDays(s.entry, s.exit) + 1;
      const label = s.label ? ` (${s.label})` : '';
      lines.push(`${i + 1}. ${s.entry} -> ${s.exit}: ${dur} days${label}`);
    });
  }

  lines.push('');
  lines.push('Official Reference: Regulation (EU) 2016/399 (Schengen Borders Code)');
  lines.push('European Commission: home-affairs.ec.europa.eu');
  lines.push('Report generated by Zetawala Money Schengen Calculator');

  return lines.join('\n');
}
