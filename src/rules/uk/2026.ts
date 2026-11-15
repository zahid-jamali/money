import { RegionRules } from '../types';

export const rulesUK2026: RegionRules = {
  vat: {
    standard: {
      value: 20,
      validFrom: '2011-01-04',
      source: 'https://www.gov.uk/vat-rates',
      verifiedOn: '2026-01-01',
    },
    reduced: {
      value: 5,
      validFrom: '2011-01-04',
      source: 'https://www.gov.uk/vat-rates',
      verifiedOn: '2026-01-01',
    },
    zero: {
      value: 0,
      validFrom: '1973-04-01',
      source: 'https://www.gov.uk/guidance/rates-of-vat-on-different-goods-and-services',
      verifiedOn: '2026-01-01',
    },
  },
  currency: {
    code: {
      value: 'GBP',
      validFrom: '1971-02-15',
      source: 'https://www.bankofengland.co.uk',
      verifiedOn: '2026-01-01',
    },
    symbol: {
      value: '£',
      validFrom: '1971-02-15',
      source: 'https://www.bankofengland.co.uk',
      verifiedOn: '2026-01-01',
    },
  },
  energy: {
    electricityUnitCapPenceOrCent: {
      value: 24.5,
      validFrom: '2026-01-01',
      validTo: '2026-03-31',
      source: 'https://www.ofgem.gov.uk/energy-price-cap',
      verifiedOn: '2026-01-01',
    },
    standingChargePenceOrCent: {
      value: 60.1,
      validFrom: '2026-01-01',
      validTo: '2026-03-31',
      source: 'https://www.ofgem.gov.uk/energy-price-cap',
      verifiedOn: '2026-01-01',
    },
  },
};
