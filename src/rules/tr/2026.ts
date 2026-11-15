import { RegionRules } from '../types';

export const rulesTR2026: RegionRules = {
  vat: {
    standard: {
      value: 20,
      validFrom: '2023-07-10',
      source: 'https://www.gib.gov.tr',
      verifiedOn: '2026-01-01',
    },
    reduced: {
      value: 10,
      validFrom: '2023-07-10',
      source: 'https://www.gib.gov.tr',
      verifiedOn: '2026-01-01',
    },
    superReduced: {
      value: 1,
      validFrom: '2007-12-30',
      source: 'https://www.gib.gov.tr',
      verifiedOn: '2026-01-01',
    },
    zero: {
      value: 0,
      validFrom: '1984-11-02',
      source: 'https://www.gib.gov.tr',
      verifiedOn: '2026-01-01',
    },
  },
  currency: {
    code: {
      value: 'TRY',
      validFrom: '2005-01-01',
      source: 'https://www.tcmb.gov.tr',
      verifiedOn: '2026-01-01',
    },
    symbol: {
      value: '₺',
      validFrom: '2012-03-01',
      source: 'https://www.tcmb.gov.tr',
      verifiedOn: '2026-01-01',
    },
  },
};
