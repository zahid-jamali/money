export interface EuVatRateEntry {
  countryName: string;
  code: string;
  standardRate: number;
  reducedRates: number[];
  superReducedRate?: number;
  parkingRate?: number;
  source: string;
  verifiedOn: string;
}

/**
 * Official European Commission VAT rates for all 27 EU Member States plus UK.
 * Sources: European Commission (Taxation and Customs Union) & National Tax Authorities.
 */
export const EU_VAT_RATES: Record<string, EuVatRateEntry> = {
  AT: {
    countryName: 'Austria',
    code: 'AT',
    standardRate: 20,
    reducedRates: [10, 13],
    parkingRate: 13,
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  BE: {
    countryName: 'Belgium',
    code: 'BE',
    standardRate: 21,
    reducedRates: [6, 12],
    parkingRate: 12,
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  BG: {
    countryName: 'Bulgaria',
    code: 'BG',
    standardRate: 20,
    reducedRates: [9],
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  CY: {
    countryName: 'Cyprus',
    code: 'CY',
    standardRate: 19,
    reducedRates: [5, 9],
    superReducedRate: 3,
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  CZ: {
    countryName: 'Czech Republic',
    code: 'CZ',
    standardRate: 21,
    reducedRates: [12],
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  DE: {
    countryName: 'Germany',
    code: 'DE',
    standardRate: 19,
    reducedRates: [7],
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  DK: {
    countryName: 'Denmark',
    code: 'DK',
    standardRate: 25,
    reducedRates: [],
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  EE: {
    countryName: 'Estonia',
    code: 'EE',
    standardRate: 22,
    reducedRates: [9],
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  ES: {
    countryName: 'Spain',
    code: 'ES',
    standardRate: 21,
    reducedRates: [10],
    superReducedRate: 4,
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  FI: {
    countryName: 'Finland',
    code: 'FI',
    standardRate: 25.5,
    reducedRates: [10, 14],
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  FR: {
    countryName: 'France',
    code: 'FR',
    standardRate: 20,
    reducedRates: [5.5, 10],
    superReducedRate: 2.1,
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  GR: {
    countryName: 'Greece',
    code: 'GR',
    standardRate: 24,
    reducedRates: [6, 13],
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  HR: {
    countryName: 'Croatia',
    code: 'HR',
    standardRate: 25,
    reducedRates: [5, 13],
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  HU: {
    countryName: 'Hungary',
    code: 'HU',
    standardRate: 27,
    reducedRates: [5, 18],
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  IE: {
    countryName: 'Ireland',
    code: 'IE',
    standardRate: 23,
    reducedRates: [9, 13.5],
    superReducedRate: 4.8,
    parkingRate: 13.5,
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  IT: {
    countryName: 'Italy',
    code: 'IT',
    standardRate: 22,
    reducedRates: [5, 10],
    superReducedRate: 4,
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  LT: {
    countryName: 'Lithuania',
    code: 'LT',
    standardRate: 21,
    reducedRates: [5, 9],
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  LU: {
    countryName: 'Luxembourg',
    code: 'LU',
    standardRate: 17,
    reducedRates: [8],
    superReducedRate: 3,
    parkingRate: 14,
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  LV: {
    countryName: 'Latvia',
    code: 'LV',
    standardRate: 21,
    reducedRates: [5, 12],
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  MT: {
    countryName: 'Malta',
    code: 'MT',
    standardRate: 18,
    reducedRates: [5, 7],
    parkingRate: 12,
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  NL: {
    countryName: 'Netherlands',
    code: 'NL',
    standardRate: 21,
    reducedRates: [9],
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  PL: {
    countryName: 'Poland',
    code: 'PL',
    standardRate: 23,
    reducedRates: [5, 8],
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  PT: {
    countryName: 'Portugal',
    code: 'PT',
    standardRate: 23,
    reducedRates: [6, 13],
    parkingRate: 13,
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  RO: {
    countryName: 'Romania',
    code: 'RO',
    standardRate: 19,
    reducedRates: [5, 9],
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  SE: {
    countryName: 'Sweden',
    code: 'SE',
    standardRate: 25,
    reducedRates: [6, 12],
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  SI: {
    countryName: 'Slovenia',
    code: 'SI',
    standardRate: 22,
    reducedRates: [5, 9.5],
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  SK: {
    countryName: 'Slovakia',
    code: 'SK',
    standardRate: 20,
    reducedRates: [5, 10],
    source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    verifiedOn: '2026-01-01',
  },
  UK: {
    countryName: 'United Kingdom',
    code: 'UK',
    standardRate: 20,
    reducedRates: [5],
    source: 'https://www.gov.uk/vat-rates',
    verifiedOn: '2026-01-01',
  },
};

/**
 * Case-insensitive country rate lookup, also aliases 'EL' to 'GR' (Greece).
 */
export function getEuVatRate(countryCode: string): EuVatRateEntry | undefined {
  if (!countryCode) return undefined;
  let normalized = countryCode.trim().toUpperCase();
  if (normalized === 'EL') {
    normalized = 'GR';
  }
  return EU_VAT_RATES[normalized];
}
