import { RegionRules } from '../types';

export const rulesDE2026: RegionRules = {
  vat: {
    standard: {
      value: 19,
      validFrom: '2007-01-01',
      source: 'https://www.gesetze-im-internet.de/ustg_1980/__12.html',
      verifiedOn: '2026-01-01',
    },
    reduced: {
      value: 7,
      validFrom: '1983-07-01',
      source: 'https://www.gesetze-im-internet.de/ustg_1980/__12.html',
      verifiedOn: '2026-01-01',
    },
    zero: {
      value: 0,
      validFrom: '1980-01-01',
      source: 'https://www.gesetze-im-internet.de/ustg_1980/__4.html',
      verifiedOn: '2026-01-01',
    },
  },
  currency: {
    code: {
      value: 'EUR',
      validFrom: '2002-01-01',
      source: 'https://www.bundesbank.de',
      verifiedOn: '2026-01-01',
    },
    symbol: {
      value: '€',
      validFrom: '2002-01-01',
      source: 'https://www.bundesbank.de',
      verifiedOn: '2026-01-01',
    },
  },
};
