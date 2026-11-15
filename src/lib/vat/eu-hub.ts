import {
  EU_VAT_RATES,
  type EuVatRateEntry,
  getEuVatRate,
} from '../../rules/eu/vat-rates';

export { EU_VAT_RATES, type EuVatRateEntry, getEuVatRate };

export interface EuCountryVatCalculation {
  code: string;
  countryName: string;
  rate: number;
  rateTier: 'standard' | 'reduced';
  netAmount: number;
  vatAmount: number;
  grossAmount: number;
  rank: number; // 1 = lowest VAT amount
}

export interface EuVatHubStats {
  averageStandardRate: number;
  medianStandardRate: number;
  minStandardRate: number;
  maxStandardRate: number;
  lowestVatCountry: { code: string; countryName: string; rate: number };
  highestVatCountry: { code: string; countryName: string; rate: number };
  totalCountriesCount: number;
}

export interface EuVatComparisonResult {
  inputAmount: number;
  calculationType: 'add' | 'remove';
  rateTier: 'standard' | 'reduced';
  rankings: EuCountryVatCalculation[];
  stats: EuVatHubStats;
}

export type ParityMode = 'fixedNet' | 'fixedGross';

export interface CountryPairComparisonInput {
  amount: number;
  originCountry: string;
  destinationCountry: string;
  parityMode?: ParityMode;
  originRateTier?: 'standard' | 'reduced';
  destRateTier?: 'standard' | 'reduced';
}

export interface CountryPairComparisonResult {
  origin: {
    entry: EuVatRateEntry;
    rate: number;
    netAmount: number;
    vatAmount: number;
    grossAmount: number;
  };
  destination: {
    entry: EuVatRateEntry;
    rate: number;
    netAmount: number;
    vatAmount: number;
    grossAmount: number;
  };
  parityMode: ParityMode;
  vatRateDelta: number; // destinationRate - originRate
  vatAmountDelta: number; // destinationVat - originVat
  grossAmountDelta: number; // destinationGross - originGross
  netAmountDelta: number; // destinationNet - originNet
  sellerMarginImpactPercentage: number;
}

function round2(val: number): number {
  return Math.round((val + Number.EPSILON) * 100) / 100;
}

/**
 * Calculates VAT across all 27 EU Member States plus UK, ranking them by VAT liability.
 */
export function compareAllEuVat(
  amount: number,
  calculationType: 'add' | 'remove' = 'add',
  rateTier: 'standard' | 'reduced' = 'standard',
): EuVatComparisonResult {
  const safeAmount = Math.max(0, amount || 0);
  const countries = Object.values(EU_VAT_RATES);

  const calculations: Omit<EuCountryVatCalculation, 'rank'>[] = countries.map((c) => {
    let rate = c.standardRate;
    if (rateTier === 'reduced' && c.reducedRates.length > 0) {
      rate = c.reducedRates[0];
    }

    if (calculationType === 'add') {
      const netAmount = round2(safeAmount);
      const vatAmount = round2(netAmount * (rate / 100));
      const grossAmount = round2(netAmount + vatAmount);
      return {
        code: c.code,
        countryName: c.countryName,
        rate,
        rateTier,
        netAmount,
        vatAmount,
        grossAmount,
      };
    } else {
      const grossAmount = round2(safeAmount);
      const divisor = 1 + rate / 100;
      const netAmount = rate > 0 ? round2(grossAmount / divisor) : grossAmount;
      const vatAmount = round2(grossAmount - netAmount);
      return {
        code: c.code,
        countryName: c.countryName,
        rate,
        rateTier,
        netAmount,
        vatAmount,
        grossAmount,
      };
    }
  });

  // Sort ascending by VAT amount (lowest tax first)
  calculations.sort((a, b) => a.vatAmount - b.vatAmount || a.countryName.localeCompare(b.countryName));

  const rankings: EuCountryVatCalculation[] = calculations.map((calc, idx) => ({
    ...calc,
    rank: idx + 1,
  }));

  // Calculate statistics across standard rates
  const standardRates = countries.map((c) => c.standardRate).sort((a, b) => a - b);
  const sum = standardRates.reduce((acc, r) => acc + r, 0);
  const averageStandardRate = round2(sum / standardRates.length);

  const mid = Math.floor(standardRates.length / 2);
  const medianStandardRate =
    standardRates.length % 2 !== 0
      ? standardRates[mid]
      : round2((standardRates[mid - 1] + standardRates[mid]) / 2);

  const minRate = standardRates[0];
  const maxRate = standardRates[standardRates.length - 1];

  const lowestCountry = countries.find((c) => c.standardRate === minRate) || countries[0];
  const highestCountry = countries.find((c) => c.standardRate === maxRate) || countries[0];

  const stats: EuVatHubStats = {
    averageStandardRate,
    medianStandardRate,
    minStandardRate: minRate,
    maxStandardRate: maxRate,
    lowestVatCountry: {
      code: lowestCountry.code,
      countryName: lowestCountry.countryName,
      rate: lowestCountry.standardRate,
    },
    highestVatCountry: {
      code: highestCountry.code,
      countryName: highestCountry.countryName,
      rate: highestCountry.standardRate,
    },
    totalCountriesCount: countries.length,
  };

  return {
    inputAmount: safeAmount,
    calculationType,
    rateTier,
    rankings,
    stats,
  };
}

/**
 * Cross-border pair conversion and price parity engine.
 * Compares tax burden and net seller margins when expanding or selling between two EU countries.
 */
export function compareCountryPair(
  input: CountryPairComparisonInput,
): CountryPairComparisonResult {
  const {
    amount,
    originCountry,
    destinationCountry,
    parityMode = 'fixedNet',
    originRateTier = 'standard',
    destRateTier = 'standard',
  } = input;

  const originEntry = getEuVatRate(originCountry);
  const destEntry = getEuVatRate(destinationCountry);

  if (!originEntry) {
    throw new Error(`Invalid or unsupported origin country code: ${originCountry}`);
  }
  if (!destEntry) {
    throw new Error(`Invalid or unsupported destination country code: ${destinationCountry}`);
  }

  const originRate =
    originRateTier === 'reduced' && originEntry.reducedRates.length > 0
      ? originEntry.reducedRates[0]
      : originEntry.standardRate;

  const destRate =
    destRateTier === 'reduced' && destEntry.reducedRates.length > 0
      ? destEntry.reducedRates[0]
      : destEntry.standardRate;

  const safeAmount = Math.max(0, amount || 0);

  let originNet: number;
  let originVat: number;
  let originGross: number;

  let destNet: number;
  let destVat: number;
  let destGross: number;

  if (parityMode === 'fixedNet') {
    // Seller fixes the net price (B2B price parity)
    originNet = round2(safeAmount);
    originVat = round2(originNet * (originRate / 100));
    originGross = round2(originNet + originVat);

    destNet = round2(safeAmount);
    destVat = round2(destNet * (destRate / 100));
    destGross = round2(destNet + destVat);
  } else {
    // Seller fixes the gross consumer price (B2C price parity, e.g. €99.99 across all stores)
    originGross = round2(safeAmount);
    const originDivisor = 1 + originRate / 100;
    originNet = originRate > 0 ? round2(originGross / originDivisor) : originGross;
    originVat = round2(originGross - originNet);

    destGross = round2(safeAmount);
    const destDivisor = 1 + destRate / 100;
    destNet = destRate > 0 ? round2(destGross / destDivisor) : destGross;
    destVat = round2(destGross - destNet);
  }

  const vatRateDelta = round2(destRate - originRate);
  const vatAmountDelta = round2(destVat - originVat);
  const grossAmountDelta = round2(destGross - originGross);
  const netAmountDelta = round2(destNet - originNet);

  // Percentage impact on seller net margin
  const sellerMarginImpactPercentage =
    originNet > 0 ? round2((netAmountDelta / originNet) * 100) : 0;

  return {
    origin: {
      entry: originEntry,
      rate: originRate,
      netAmount: originNet,
      vatAmount: originVat,
      grossAmount: originGross,
    },
    destination: {
      entry: destEntry,
      rate: destRate,
      netAmount: destNet,
      vatAmount: destVat,
      grossAmount: destGross,
    },
    parityMode,
    vatRateDelta,
    vatAmountDelta,
    grossAmountDelta,
    netAmountDelta,
    sellerMarginImpactPercentage,
  };
}

/**
 * Alias for compareCountryPair to support calculateCountryPairComparison
 */
export const calculateCountryPairComparison = compareCountryPair;

/**
 * Returns overall statistical summary of VAT across EU member states.
 */
export function getEuVatSummary(): EuVatHubStats {
  const comparison = compareAllEuVat(100, 'add', 'standard');
  return comparison.stats;
}
