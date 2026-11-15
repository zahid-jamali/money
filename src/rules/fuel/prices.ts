import { RuleValue } from '../types';

export type FuelRegionCode = 'uk' | 'australia' | 'canada' | 'de' | 'au' | 'ca';

export interface FuelTypePrice {
  name: string;
  pricePerLitre: RuleValue<number>;
  priceInMainCurrency: number;
  unitLabel: string;
}

export interface ElectricityPrice {
  name: string;
  pricePerKwh: RuleValue<number>;
  priceInMainCurrency: number;
  unitLabel: string;
}

export interface FuelPriceRule {
  region: 'uk' | 'australia' | 'canada' | 'de';
  countryName: string;
  currency: {
    code: string;
    symbol: string;
    subunitName: string;
    subunitsPerUnit: number;
  };
  petrol: FuelTypePrice;
  diesel: FuelTypePrice;
  electricity: ElectricityPrice;
  defaultDistanceUnit: 'miles' | 'km';
  defaultConsumptionUnit: 'uk_mpg' | 'l_100km';
}

export const FUEL_PRICES_UK: FuelPriceRule = {
  region: 'uk',
  countryName: 'United Kingdom',
  currency: {
    code: 'GBP',
    symbol: '£',
    subunitName: 'pence',
    subunitsPerUnit: 100,
  },
  petrol: {
    name: 'Unleaded Petrol (ULSP)',
    pricePerLitre: {
      value: 138.5,
      validFrom: '2026-01-01',
      source: 'https://www.gov.uk/government/collections/road-fuel-and-other-petroleum-product-prices',
      verifiedOn: '2026-01-01',
    },
    priceInMainCurrency: 1.385,
    unitLabel: 'p/L',
  },
  diesel: {
    name: 'Diesel (ULSD)',
    pricePerLitre: {
      value: 143.2,
      validFrom: '2026-01-01',
      source: 'https://www.gov.uk/government/collections/road-fuel-and-other-petroleum-product-prices',
      verifiedOn: '2026-01-01',
    },
    priceInMainCurrency: 1.432,
    unitLabel: 'p/L',
  },
  electricity: {
    name: 'Domestic Electricity (Ofgem Price Cap)',
    pricePerKwh: {
      value: 24.5,
      validFrom: '2026-01-01',
      source: 'https://www.ofgem.gov.uk/energy-price-cap',
      verifiedOn: '2026-01-01',
    },
    priceInMainCurrency: 0.245,
    unitLabel: 'p/kWh',
  },
  defaultDistanceUnit: 'miles',
  defaultConsumptionUnit: 'uk_mpg',
};

export const FUEL_PRICES_AUSTRALIA: FuelPriceRule = {
  region: 'australia',
  countryName: 'Australia',
  currency: {
    code: 'AUD',
    symbol: '$',
    subunitName: 'cents',
    subunitsPerUnit: 100,
  },
  petrol: {
    name: 'Unleaded Petrol (ULP 91)',
    pricePerLitre: {
      value: 182.4,
      validFrom: '2026-01-01',
      source: 'https://www.aip.com.au/pricing/weekly-retail-petrol-prices',
      verifiedOn: '2026-01-01',
    },
    priceInMainCurrency: 1.824,
    unitLabel: 'c/L',
  },
  diesel: {
    name: 'Automotive Diesel',
    pricePerLitre: {
      value: 188.6,
      validFrom: '2026-01-01',
      source: 'https://www.aip.com.au/pricing/weekly-retail-petrol-prices',
      verifiedOn: '2026-01-01',
    },
    priceInMainCurrency: 1.886,
    unitLabel: 'c/L',
  },
  electricity: {
    name: 'Residential Electricity (AER Default Market Offer)',
    pricePerKwh: {
      value: 31.5,
      validFrom: '2026-01-01',
      source: 'https://www.aer.gov.au/retail-markets/default-market-offer',
      verifiedOn: '2026-01-01',
    },
    priceInMainCurrency: 0.315,
    unitLabel: 'c/kWh',
  },
  defaultDistanceUnit: 'km',
  defaultConsumptionUnit: 'l_100km',
};

export const FUEL_PRICES_CANADA: FuelPriceRule = {
  region: 'canada',
  countryName: 'Canada',
  currency: {
    code: 'CAD',
    symbol: '$',
    subunitName: 'cents',
    subunitsPerUnit: 100,
  },
  petrol: {
    name: 'Regular Gasoline',
    pricePerLitre: {
      value: 156.2,
      validFrom: '2026-01-01',
      source: 'https://www.nrcan.gc.ca/our-natural-resources/domestic-and-international-markets/transportation-fuels/gasoline-fuel-reporting/weekly-fuel-prices/4593',
      verifiedOn: '2026-01-01',
    },
    priceInMainCurrency: 1.562,
    unitLabel: 'c/L',
  },
  diesel: {
    name: 'Automotive Diesel',
    pricePerLitre: {
      value: 164.8,
      validFrom: '2026-01-01',
      source: 'https://www.nrcan.gc.ca/our-natural-resources/domestic-and-international-markets/transportation-fuels/gasoline-fuel-reporting/weekly-fuel-prices/4593',
      verifiedOn: '2026-01-01',
    },
    priceInMainCurrency: 1.648,
    unitLabel: 'c/L',
  },
  electricity: {
    name: 'Residential Electricity (Statistics Canada Average)',
    pricePerKwh: {
      value: 17.2,
      validFrom: '2026-01-01',
      source: 'https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1810000101',
      verifiedOn: '2026-01-01',
    },
    priceInMainCurrency: 0.172,
    unitLabel: 'c/kWh',
  },
  defaultDistanceUnit: 'km',
  defaultConsumptionUnit: 'l_100km',
};

export const FUEL_PRICES_GERMANY: FuelPriceRule = {
  region: 'de',
  countryName: 'Deutschland',
  currency: {
    code: 'EUR',
    symbol: '€',
    subunitName: 'Cent',
    subunitsPerUnit: 100,
  },
  petrol: {
    name: 'Super E10',
    pricePerLitre: {
      value: 1.72,
      validFrom: '2026-01-01',
      source: 'https://www.adac.de/verkehr/tanken-kraftstoff-antrieb/deutschland/kraftstoffpreisentwicklung/',
      verifiedOn: '2026-01-01',
    },
    priceInMainCurrency: 1.72,
    unitLabel: '€/L',
  },
  diesel: {
    name: 'Dieselkraftstoff',
    pricePerLitre: {
      value: 1.62,
      validFrom: '2026-01-01',
      source: 'https://www.adac.de/verkehr/tanken-kraftstoff-antrieb/deutschland/kraftstoffpreisentwicklung/',
      verifiedOn: '2026-01-01',
    },
    priceInMainCurrency: 1.62,
    unitLabel: '€/L',
  },
  electricity: {
    name: 'Haushaltsstrom (BDEW Bundesdurchschnitt)',
    pricePerKwh: {
      value: 38.5,
      validFrom: '2026-01-01',
      source: 'https://www.bdew.de/service/daten-und-grafiken/bdew-strompreisanalyse/',
      verifiedOn: '2026-01-01',
    },
    priceInMainCurrency: 0.385,
    unitLabel: 'ct/kWh',
  },
  defaultDistanceUnit: 'km',
  defaultConsumptionUnit: 'l_100km',
};

const FUEL_RULES_BY_REGION: Record<string, FuelPriceRule> = {
  uk: FUEL_PRICES_UK,
  australia: FUEL_PRICES_AUSTRALIA,
  au: FUEL_PRICES_AUSTRALIA,
  canada: FUEL_PRICES_CANADA,
  ca: FUEL_PRICES_CANADA,
  de: FUEL_PRICES_GERMANY,
};

/**
 * Returns fuel pricing rules for the specified region and optional date.
 * Fallbacks to UK fuel rules if region is unrecognised.
 */
export function getFuelRules(region: FuelRegionCode | string, _date?: string): FuelPriceRule {
  const normalized = (region || '').toLowerCase();
  return FUEL_RULES_BY_REGION[normalized] || FUEL_PRICES_UK;
}
