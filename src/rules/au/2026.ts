import { RegionRules } from '../types';

export const rulesAU2026: RegionRules = {
  vat: {
    standard: {
      value: 10,
      validFrom: '2000-07-01',
      source: 'https://www.ato.gov.au/business/gst/',
      verifiedOn: '2026-01-01',
    },
    reduced: {
      value: 0,
      validFrom: '2000-07-01',
      source: 'https://www.ato.gov.au/business/gst/',
      verifiedOn: '2026-01-01',
    },
    zero: {
      value: 0,
      validFrom: '2000-07-01',
      source: 'https://www.ato.gov.au/business/gst/',
      verifiedOn: '2026-01-01',
    },
  },
  currency: {
    code: {
      value: 'AUD',
      validFrom: '1966-02-14',
      source: 'https://www.rba.gov.au',
      verifiedOn: '2026-01-01',
    },
    symbol: {
      value: 'A$',
      validFrom: '1966-02-14',
      source: 'https://www.rba.gov.au',
      verifiedOn: '2026-01-01',
    },
  },
};
