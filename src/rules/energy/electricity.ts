import { RuleValue } from '../types';

export interface UkQuarterlyPriceCap {
  quarter: string;
  quarterLabel: string;
  validFrom: string; // YYYY-MM-DD
  validTo: string; // YYYY-MM-DD
  unitRatePence: number; // pence per kWh (direct debit, standard electricity)
  standingChargePencePerDay: number; // pence per day
  paymentMethod: 'direct_debit';
  source: string;
  verifiedOn: string;
}

export interface AustraliaStateElectricityRate {
  stateCode: string;
  stateName: string;
  unitRateCents: number; // c/kWh
  dailySupplyChargeCents: number; // c/day
  source: string;
  regulatoryFramework: 'DMO' | 'VDO' | 'StateRegulated';
  effectivePeriod: string;
}

export interface GermanyElectricityRate {
  year: number;
  unitRateCent: number; // ct/kWh
  monthlyBaseChargeEur: number; // €/month
  dailyBaseChargeCent: number; // ct/day
  source: string;
  effectivePeriod: string;
}

/**
 * UK Ofgem Energy Price Cap historical and current quarterly data
 * Figures for standard credit/direct debit electricity customers (GB national average).
 * Source: Ofgem (ofgem.gov.uk/energy-price-cap)
 */
export const OFGEM_PRICE_CAPS: UkQuarterlyPriceCap[] = [
  {
    quarter: '2026-Q1',
    quarterLabel: '1 January 2026 – 31 March 2026',
    validFrom: '2026-01-01',
    validTo: '2026-03-31',
    unitRatePence: 24.50,
    standingChargePencePerDay: 60.10,
    paymentMethod: 'direct_debit',
    source: 'https://www.ofgem.gov.uk/energy-price-cap',
    verifiedOn: '2026-01-01',
  },
  {
    quarter: '2025-Q4',
    quarterLabel: '1 October 2025 – 31 December 2025',
    validFrom: '2025-10-01',
    validTo: '2025-12-31',
    unitRatePence: 24.50,
    standingChargePencePerDay: 60.99,
    paymentMethod: 'direct_debit',
    source: 'https://www.ofgem.gov.uk/energy-price-cap',
    verifiedOn: '2025-10-01',
  },
  {
    quarter: '2025-Q3',
    quarterLabel: '1 July 2025 – 30 September 2025',
    validFrom: '2025-07-01',
    validTo: '2025-09-30',
    unitRatePence: 22.36,
    standingChargePencePerDay: 60.12,
    paymentMethod: 'direct_debit',
    source: 'https://www.ofgem.gov.uk/energy-price-cap',
    verifiedOn: '2025-07-01',
  },
  {
    quarter: '2025-Q2',
    quarterLabel: '1 April 2025 – 30 June 2025',
    validFrom: '2025-04-01',
    validTo: '2025-06-30',
    unitRatePence: 24.50,
    standingChargePencePerDay: 60.10,
    paymentMethod: 'direct_debit',
    source: 'https://www.ofgem.gov.uk/energy-price-cap',
    verifiedOn: '2025-04-01',
  },
  {
    quarter: '2025-Q1',
    quarterLabel: '1 January 2025 – 31 March 2025',
    validFrom: '2025-01-01',
    validTo: '2025-03-31',
    unitRatePence: 24.86,
    standingChargePencePerDay: 60.97,
    paymentMethod: 'direct_debit',
    source: 'https://www.ofgem.gov.uk/energy-price-cap',
    verifiedOn: '2025-01-01',
  },
  {
    quarter: '2024-Q4',
    quarterLabel: '1 October 2024 – 31 December 2024',
    validFrom: '2024-10-01',
    validTo: '2024-12-31',
    unitRatePence: 24.50,
    standingChargePencePerDay: 60.99,
    paymentMethod: 'direct_debit',
    source: 'https://www.ofgem.gov.uk/energy-price-cap',
    verifiedOn: '2024-10-01',
  },
];

/**
 * Australia State electricity averages from Australian Energy Regulator (AER)
 * Default Market Offer (DMO 2025-26) / Essential Services Commission Victorian Default Offer (VDO)
 * Source: AER (aer.gov.au)
 */
export const AUSTRALIA_ELECTRICITY_RATES: Record<string, AustraliaStateElectricityRate> = {
  national: {
    stateCode: 'AUS',
    stateName: 'Australia Average',
    unitRateCents: 33.20,
    dailySupplyChargeCents: 112.50,
    source: 'https://www.aer.gov.au/retail-markets/retail-guidelines-reviews/default-market-offer',
    regulatoryFramework: 'DMO',
    effectivePeriod: '2025-2026',
  },
  nsw: {
    stateCode: 'NSW',
    stateName: 'New South Wales',
    unitRateCents: 34.50,
    dailySupplyChargeCents: 110.20,
    source: 'https://www.aer.gov.au/retail-markets/retail-guidelines-reviews/default-market-offer',
    regulatoryFramework: 'DMO',
    effectivePeriod: '2025-2026',
  },
  vic: {
    stateCode: 'VIC',
    stateName: 'Victoria',
    unitRateCents: 28.70,
    dailySupplyChargeCents: 105.50,
    source: 'https://www.esc.vic.gov.au/electricity-and-gas/prices-tariffs-and-benchmarks/victorian-default-offer',
    regulatoryFramework: 'VDO',
    effectivePeriod: '2025-2026',
  },
  qld: {
    stateCode: 'QLD',
    stateName: 'Queensland (SE)',
    unitRateCents: 31.80,
    dailySupplyChargeCents: 115.20,
    source: 'https://www.aer.gov.au/retail-markets/retail-guidelines-reviews/default-market-offer',
    regulatoryFramework: 'DMO',
    effectivePeriod: '2025-2026',
  },
  sa: {
    stateCode: 'SA',
    stateName: 'South Australia',
    unitRateCents: 41.50,
    dailySupplyChargeCents: 120.00,
    source: 'https://www.aer.gov.au/retail-markets/retail-guidelines-reviews/default-market-offer',
    regulatoryFramework: 'DMO',
    effectivePeriod: '2025-2026',
  },
  wa: {
    stateCode: 'WA',
    stateName: 'Western Australia',
    unitRateCents: 31.90,
    dailySupplyChargeCents: 113.30,
    source: 'https://www.wa.gov.au/organisation/energy-policy-wa',
    regulatoryFramework: 'StateRegulated',
    effectivePeriod: '2025-2026',
  },
  tas: {
    stateCode: 'TAS',
    stateName: 'Tasmania',
    unitRateCents: 30.50,
    dailySupplyChargeCents: 118.00,
    source: 'https://www.economicregulator.tas.gov.au',
    regulatoryFramework: 'StateRegulated',
    effectivePeriod: '2025-2026',
  },
  act: {
    stateCode: 'ACT',
    stateName: 'Australian Capital Territory',
    unitRateCents: 29.20,
    dailySupplyChargeCents: 108.00,
    source: 'https://www.icrc.act.gov.au',
    regulatoryFramework: 'StateRegulated',
    effectivePeriod: '2025-2026',
  },
};

/**
 * Germany Average household electricity prices
 * Source: BDEW Bundesverband der Energie- und Wasserwirtschaft (bdew.de) / Destatis
 */
export const GERMANY_ELECTRICITY_RATES: GermanyElectricityRate[] = [
  {
    year: 2026,
    unitRateCent: 41.35,
    monthlyBaseChargeEur: 12.80,
    dailyBaseChargeCent: 42.08,
    source: 'https://www.bdew.de/service/daten-und-grafiken/bdew-strompreisanalyse/',
    effectivePeriod: '2025/2026',
  },
  {
    year: 2025,
    unitRateCent: 41.35,
    monthlyBaseChargeEur: 12.50,
    dailyBaseChargeCent: 41.10,
    source: 'https://www.bdew.de/service/daten-und-grafiken/bdew-strompreisanalyse/',
    effectivePeriod: '2025',
  },
  {
    year: 2024,
    unitRateCent: 41.80,
    monthlyBaseChargeEur: 12.20,
    dailyBaseChargeCent: 40.11,
    source: 'https://www.bdew.de/service/daten-und-grafiken/bdew-strompreisanalyse/',
    effectivePeriod: '2024',
  },
];

export interface ElectricityPriceResult {
  region: string;
  regionLabel: string;
  unitRate: number; // e.g. 24.50, 33.20, 41.35 (in pence/cents)
  unit: 'p/kWh' | 'c/kWh' | 'ct/kWh';
  standingChargePerDay: number; // in pence or cents per day
  standingChargeUnit: 'p/day' | 'c/day' | 'ct/day';
  currency: 'GBP' | 'AUD' | 'EUR';
  currencySymbol: '£' | 'A$' | '€';
  source: string;
  sourceName: string;
  effectivePeriod: string;
  quarter?: string;
}

/**
 * Returns electricity unit rate and standing charge for a given region and optional date.
 * Supports:
 * - 'uk' | 'gb' -> UK Ofgem cap (looks up matching quarter for date or returns active 2026-Q1)
 * - 'australia' | 'au' | state codes ('nsw', 'vic', 'qld', 'sa', 'wa', 'tas', 'act') -> AER DMO/VDO
 * - 'germany' | 'de' -> BDEW Strompreisanalyse
 */
export function getElectricityPrice(
  region: string,
  date?: string | Date,
): ElectricityPriceResult {
  const norm = (region || '').toLowerCase().trim();

  // Germany
  if (norm === 'de' || norm === 'germany' || norm === 'deutschland') {
    const rate = GERMANY_ELECTRICITY_RATES[0];
    return {
      region: 'de',
      regionLabel: 'Deutschland (BDEW Durchschnitt)',
      unitRate: rate.unitRateCent,
      unit: 'ct/kWh',
      standingChargePerDay: rate.dailyBaseChargeCent,
      standingChargeUnit: 'ct/day',
      currency: 'EUR',
      currencySymbol: '€',
      source: rate.source,
      sourceName: 'BDEW (Bundesverband der Energie- und Wasserwirtschaft)',
      effectivePeriod: rate.effectivePeriod,
    };
  }

  // Australia
  if (
    norm === 'au' ||
    norm === 'australia' ||
    ['nsw', 'vic', 'qld', 'sa', 'wa', 'tas', 'act'].includes(norm)
  ) {
    const stateKey = ['nsw', 'vic', 'qld', 'sa', 'wa', 'tas', 'act'].includes(norm)
      ? norm
      : 'national';
    const rate = AUSTRALIA_ELECTRICITY_RATES[stateKey];
    return {
      region: rate.stateCode.toLowerCase(),
      regionLabel: rate.stateName,
      unitRate: rate.unitRateCents,
      unit: 'c/kWh',
      standingChargePerDay: rate.dailySupplyChargeCents,
      standingChargeUnit: 'c/day',
      currency: 'AUD',
      currencySymbol: 'A$',
      source: rate.source,
      sourceName: rate.regulatoryFramework === 'VDO' ? 'ESC Victoria (VDO)' : 'AER (Default Market Offer)',
      effectivePeriod: rate.effectivePeriod,
    };
  }

  // Default: UK / GB Ofgem Price Cap
  let targetDate = '2026-01-15';
  if (date) {
    targetDate = typeof date === 'string' ? date : date.toISOString().slice(0, 10);
  }

  // Find matching quarter by date range
  const matchedCap = OFGEM_PRICE_CAPS.find(
    (cap) => targetDate >= cap.validFrom && targetDate <= cap.validTo,
  );

  const activeCap = matchedCap || OFGEM_PRICE_CAPS[0];

  return {
    region: 'uk',
    regionLabel: 'United Kingdom (Ofgem Direct Debit Cap)',
    unitRate: activeCap.unitRatePence,
    unit: 'p/kWh',
    standingChargePerDay: activeCap.standingChargePencePerDay,
    standingChargeUnit: 'p/day',
    currency: 'GBP',
    currencySymbol: '£',
    source: activeCap.source,
    sourceName: 'Ofgem (Energy Price Cap)',
    effectivePeriod: activeCap.quarterLabel,
    quarter: activeCap.quarter,
  };
}
