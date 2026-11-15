import { RegionRules } from '../types';

export const rulesCA2026: RegionRules = {
  vat: {
    standard: {
      value: 5,
      validFrom: '2008-01-01',
      source:
        'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html',
      verifiedOn: '2026-01-01',
    },
    reduced: {
      value: 0,
      validFrom: '2008-01-01',
      source: 'https://www.canada.ca/en/revenue-agency.html',
      verifiedOn: '2026-01-01',
    },
    zero: {
      value: 0,
      validFrom: '2008-01-01',
      source: 'https://www.canada.ca/en/revenue-agency.html',
      verifiedOn: '2026-01-01',
    },
  },
  currency: {
    code: {
      value: 'CAD',
      validFrom: '1871-04-01',
      source: 'https://www.bankofcanada.ca',
      verifiedOn: '2026-01-01',
    },
    symbol: {
      value: 'C$',
      validFrom: '1871-04-01',
      source: 'https://www.bankofcanada.ca',
      verifiedOn: '2026-01-01',
    },
  },
};
