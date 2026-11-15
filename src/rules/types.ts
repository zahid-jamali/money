export interface RuleValue<T = number | string | boolean | string[]> {
  value: T;
  validFrom: string; // ISO Date YYYY-MM-DD
  validTo?: string; // ISO Date YYYY-MM-DD
  source: string; // Primary official URL
  verifiedOn: string | null; // YYYY-MM-DD or null if unverified
}

export type RegionCode = 'uk' | 'de' | 'pl' | 'tr' | 'ro' | 'au' | 'ca' | 'eu';

export interface VatRates {
  standard: RuleValue<number>;
  reduced: RuleValue<number>;
  superReduced?: RuleValue<number>;
  parking?: RuleValue<number>;
  zero: RuleValue<number>;
}

export interface RegionRules {
  vat: VatRates;
  currency: {
    code: RuleValue<string>;
    symbol: RuleValue<string>;
  };
  energy?: {
    electricityUnitCapPenceOrCent?: RuleValue<number>;
    standingChargePenceOrCent?: RuleValue<number>;
  };
  salary?: {
    minimumWageHourlyOrMonthly?: RuleValue<number>;
    severanceCeilingMonthly?: RuleValue<number>;
  };
}
