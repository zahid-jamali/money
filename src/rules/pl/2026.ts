import { RegionRules } from '../types';

export const rulesPL2026: RegionRules = {
  vat: {
    standard: {
      value: 23,
      validFrom: '2011-01-01',
      source: 'https://www.podatki.gov.pl/vat/stawki-vat/',
      verifiedOn: '2026-01-01',
    },
    reduced: {
      value: 8,
      validFrom: '2011-01-01',
      source: 'https://www.podatki.gov.pl/vat/stawki-vat/',
      verifiedOn: '2026-01-01',
    },
    superReduced: {
      value: 5,
      validFrom: '2011-01-01',
      source: 'https://www.podatki.gov.pl/vat/stawki-vat/',
      verifiedOn: '2026-01-01',
    },
    zero: {
      value: 0,
      validFrom: '2004-05-01',
      source: 'https://www.podatki.gov.pl/vat/stawki-vat/',
      verifiedOn: '2026-01-01',
    },
  },
  currency: {
    code: {
      value: 'PLN',
      validFrom: '1995-01-01',
      source: 'https://www.nbp.pl',
      verifiedOn: '2026-01-01',
    },
    symbol: {
      value: 'zł',
      validFrom: '1995-01-01',
      source: 'https://www.nbp.pl',
      verifiedOn: '2026-01-01',
    },
  },
};
