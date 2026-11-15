export interface ApplianceCostInput {
  watts: number;
  hoursPerDay: number;
  daysPerWeek?: number;
  pricePerKwh: number; // Unit rate in pence or cents (e.g. 24.5, 33.2, 41.35)
  standbyWatts?: number;
}

export interface ApplianceCostResult {
  watts: number;
  hoursPerDay: number;
  daysPerWeek: number;
  pricePerKwh: number;
  standbyWatts: number;
  kWhPerUse: number;
  kWhPerDay: number;
  kWhPerWeek: number;
  kWhPerMonth: number;
  kWhPerYear: number;
  costPerUse: number;
  costPerDay: number;
  costPerWeek: number;
  costPerMonth: number;
  costPerYear: number;
  standbyKwhPerYear: number;
  standbyCostPerYear: number;
  totalCostPerYearWithStandby: number;
}

export interface ApplianceComparisonInput {
  name?: string;
  watts: number;
  hoursPerDay: number;
  daysPerWeek?: number;
  standbyWatts?: number;
}

export interface ApplianceComparisonResult {
  applianceA: ApplianceCostResult & { name: string };
  applianceB: ApplianceCostResult & { name: string };
  differenceKwhPerYear: number;
  differenceCostPerYear: number;
  cheaperAppliance: 'A' | 'B' | 'equal';
  annualSavings: number;
  percentageSavings: number;
}

/**
 * Calculates energy consumption and running costs for an appliance.
 * All cost outputs are in the same currency unit as pricePerKwh (pence or cents).
 */
export function calculateApplianceCost({
  watts,
  hoursPerDay,
  daysPerWeek = 7,
  pricePerKwh,
  standbyWatts = 0,
}: ApplianceCostInput): ApplianceCostResult {
  const safeWatts = Math.max(0, watts || 0);
  const safeHours = Math.max(0, hoursPerDay || 0);
  const safeDays = Math.min(7, Math.max(0, daysPerWeek ?? 7));
  const safePrice = Math.max(0, pricePerKwh || 0);
  const safeStandby = Math.max(0, standbyWatts || 0);

  // Active kWh calculations
  const kWhPerUse = (safeWatts * safeHours) / 1000;
  const kWhPerDay = kWhPerUse; // Energy consumed on an active day
  const kWhPerWeek = (safeWatts * safeHours * safeDays) / 1000;
  const kWhPerYear = kWhPerWeek * 52;
  const kWhPerMonth = kWhPerYear / 12;

  // Active costs in pence / cents
  const costPerUse = kWhPerUse * safePrice;
  const costPerDay = kWhPerDay * safePrice;
  const costPerWeek = kWhPerWeek * safePrice;
  const costPerMonth = kWhPerMonth * safePrice;
  const costPerYear = kWhPerYear * safePrice;

  // Standby calculation
  let standbyKwhPerYear = 0;
  let standbyCostPerYear = 0;

  if (safeStandby > 0) {
    const activeHoursPerWeek = Math.min(168, safeHours * safeDays);
    const standbyHoursPerWeek = Math.max(0, 168 - activeHoursPerWeek);
    const annualStandbyHours = standbyHoursPerWeek * 52;
    standbyKwhPerYear = (safeStandby * annualStandbyHours) / 1000;
    standbyCostPerYear = standbyKwhPerYear * safePrice;
  }

  const totalCostPerYearWithStandby = costPerYear + standbyCostPerYear;

  return {
    watts: safeWatts,
    hoursPerDay: safeHours,
    daysPerWeek: safeDays,
    pricePerKwh: safePrice,
    standbyWatts: safeStandby,
    kWhPerUse: round(kWhPerUse, 4),
    kWhPerDay: round(kWhPerDay, 4),
    kWhPerWeek: round(kWhPerWeek, 4),
    kWhPerMonth: round(kWhPerMonth, 3),
    kWhPerYear: round(kWhPerYear, 2),
    costPerUse: round(costPerUse, 2),
    costPerDay: round(costPerDay, 2),
    costPerWeek: round(costPerWeek, 2),
    costPerMonth: round(costPerMonth, 2),
    costPerYear: round(costPerYear, 2),
    standbyKwhPerYear: round(standbyKwhPerYear, 2),
    standbyCostPerYear: round(standbyCostPerYear, 2),
    totalCostPerYearWithStandby: round(totalCostPerYearWithStandby, 2),
  };
}

/**
 * Compares two appliances side-by-side to determine annual cost differences and savings.
 */
export function compareAppliances(
  applianceA: ApplianceComparisonInput,
  applianceB: ApplianceComparisonInput,
  pricePerKwh: number,
): ApplianceComparisonResult {
  const resultA = calculateApplianceCost({
    watts: applianceA.watts,
    hoursPerDay: applianceA.hoursPerDay,
    daysPerWeek: applianceA.daysPerWeek ?? 7,
    pricePerKwh,
    standbyWatts: applianceA.standbyWatts ?? 0,
  });

  const resultB = calculateApplianceCost({
    watts: applianceB.watts,
    hoursPerDay: applianceB.hoursPerDay,
    daysPerWeek: applianceB.daysPerWeek ?? 7,
    pricePerKwh,
    standbyWatts: applianceB.standbyWatts ?? 0,
  });

  const costA = resultA.totalCostPerYearWithStandby;
  const costB = resultB.totalCostPerYearWithStandby;
  const diffCost = round(costA - costB, 2);
  const diffKwh = round(
    resultA.kWhPerYear + resultA.standbyKwhPerYear - (resultB.kWhPerYear + resultB.standbyKwhPerYear),
    2,
  );

  let cheaperAppliance: 'A' | 'B' | 'equal' = 'equal';
  let annualSavings = 0;
  let percentageSavings = 0;

  if (Math.abs(diffCost) < 0.001) {
    cheaperAppliance = 'equal';
    annualSavings = 0;
    percentageSavings = 0;
  } else if (costA < costB) {
    cheaperAppliance = 'A';
    annualSavings = round(costB - costA, 2);
    percentageSavings = costB > 0 ? round(((costB - costA) / costB) * 100, 1) : 0;
  } else {
    cheaperAppliance = 'B';
    annualSavings = round(costA - costB, 2);
    percentageSavings = costA > 0 ? round(((costA - costB) / costA) * 100, 1) : 0;
  }

  return {
    applianceA: {
      ...resultA,
      name: applianceA.name || 'Appliance A',
    },
    applianceB: {
      ...resultB,
      name: applianceB.name || 'Appliance B',
    },
    differenceKwhPerYear: diffKwh,
    differenceCostPerYear: diffCost,
    cheaperAppliance,
    annualSavings,
    percentageSavings,
  };
}

/**
 * Formats a cost amount from minor currency units (pence or cents) into a display string.
 * E.g. 49.0 pence -> "49.0p" or "£0.49"
 * E.g. 1540 pence -> "£15.40"
 */
export function formatElectricityCost(
  penceOrCents: number,
  currencySymbol: string = '£',
  currencyCode: 'GBP' | 'AUD' | 'EUR' = 'GBP',
): { minor: string; major: string } {
  const majorValue = (penceOrCents / 100).toFixed(2);
  const minorSymbol = currencyCode === 'GBP' ? 'p' : currencyCode === 'EUR' ? 'ct' : 'c';

  return {
    minor: `${penceOrCents.toFixed(1)}${minorSymbol}`,
    major: `${currencySymbol}${majorValue}`,
  };
}

function round(val: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round(val * factor) / factor;
}
