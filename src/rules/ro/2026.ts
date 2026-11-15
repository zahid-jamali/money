import { RegionRules } from '../types';

export const rulesRO2026: RegionRules = {
  vat: {
    standard: {
      value: 19,
      validFrom: '2017-01-01',
      source: 'https://www.anaf.ro',
      verifiedOn: '2026-01-01',
    },
    reduced: {
      value: 9,
      validFrom: '2015-06-01',
      source: 'https://www.anaf.ro',
      verifiedOn: '2026-01-01',
    },
    superReduced: {
      value: 5,
      validFrom: '2008-12-01',
      source: 'https://www.anaf.ro',
      verifiedOn: '2026-01-01',
    },
    zero: {
      value: 0,
      validFrom: '2006-01-01',
      source: 'https://www.anaf.ro',
      verifiedOn: '2026-01-01',
    },
  },
  currency: {
    code: {
      value: 'RON',
      validFrom: '2005-07-01',
      source: 'https://www.bnr.ro',
      verifiedOn: '2026-01-01',
    },
    symbol: {
      value: 'lei',
      validFrom: '2005-07-01',
      source: 'https://www.bnr.ro',
      verifiedOn: '2026-01-01',
    },
  },
};
