import { RegionRules } from '../types';

export const rulesEU2026: RegionRules = {
  vat: {
    standard: {
      value: 21,
      validFrom: '2020-01-01',
      source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
      verifiedOn: '2026-01-01',
    },
    reduced: {
      value: 10,
      validFrom: '2020-01-01',
      source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
      verifiedOn: '2026-01-01',
    },
    zero: {
      value: 0,
      validFrom: '2020-01-01',
      source: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
      verifiedOn: '2026-01-01',
    },
  },
  currency: {
    code: {
      value: 'EUR',
      validFrom: '1999-01-01',
      source: 'https://www.ecb.europa.eu',
      verifiedOn: '2026-01-01',
    },
    symbol: {
      value: '€',
      validFrom: '1999-01-01',
      source: 'https://www.ecb.europa.eu',
      verifiedOn: '2026-01-01',
    },
  },
};
