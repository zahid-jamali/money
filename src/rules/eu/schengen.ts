import { RuleValue } from '../types';

export interface SchengenCountry {
  code: string; // ISO 3166-1 alpha-2
  name: string;
  isEU: boolean;
  joinedDate: string; // YYYY-MM-DD
  notes?: string;
}

export interface NonSchengenNote {
  code: string;
  name: string;
  isEU: boolean;
  status: string;
  officialReason: string;
}

export interface EesFacts {
  name: string;
  fullName: string;
  regulation: string;
  biometricRequirements: string[];
  replacesPassportStamping: boolean;
  targetTravelers: string;
  officialSource: string;
  coreMechanism: string;
}

export interface EtiasFacts {
  name: string;
  fullName: string;
  governingRegulation: string;
  officialPortal: string;
  expectedLaunchYear: number;
  expectedLaunchText: string;
  standardFeeEur: number;
  feeExemptions: string[];
  validityYears: number;
  validityCondition: string;
  transitionPeriod: {
    gracePeriodMonths: number;
    transitionalPeriodMonths: number;
    description: string;
  };
  applicability: string;
}

/**
 * 29 Schengen member countries as of 1 January 2025.
 * Source: European Commission (home-affairs.ec.europa.eu).
 * Explicitly includes Bulgaria and Romania (full land, air, and sea membership from 1 January 2025).
 * Note: Cyprus and Ireland are NOT part of the Schengen Area.
 */
export const SCHENGEN_COUNTRIES: SchengenCountry[] = [
  { code: 'AT', name: 'Austria', isEU: true, joinedDate: '1997-12-01' },
  { code: 'BE', name: 'Belgium', isEU: true, joinedDate: '1995-03-26' },
  {
    code: 'BG',
    name: 'Bulgaria',
    isEU: true,
    joinedDate: '2025-01-01',
    notes: 'Air and sea borders lifted 31 March 2024; full land border controls lifted 1 January 2025.',
  },
  { code: 'HR', name: 'Croatia', isEU: true, joinedDate: '2023-01-01' },
  { code: 'CZ', name: 'Czech Republic', isEU: true, joinedDate: '2007-12-21' },
  { code: 'DK', name: 'Denmark', isEU: true, joinedDate: '2001-03-25' },
  { code: 'EE', name: 'Estonia', isEU: true, joinedDate: '2007-12-21' },
  { code: 'FI', name: 'Finland', isEU: true, joinedDate: '2001-03-25' },
  { code: 'FR', name: 'France', isEU: true, joinedDate: '1995-03-26' },
  { code: 'DE', name: 'Germany', isEU: true, joinedDate: '1995-03-26' },
  { code: 'GR', name: 'Greece', isEU: true, joinedDate: '2000-01-01' },
  { code: 'HU', name: 'Hungary', isEU: true, joinedDate: '2007-12-21' },
  { code: 'IS', name: 'Iceland', isEU: false, joinedDate: '2001-03-25', notes: 'EFTA member associated with Schengen' },
  { code: 'IT', name: 'Italy', isEU: true, joinedDate: '1997-10-26' },
  { code: 'LV', name: 'Latvia', isEU: true, joinedDate: '2007-12-21' },
  { code: 'LI', name: 'Liechtenstein', isEU: false, joinedDate: '2011-12-19', notes: 'EFTA member associated with Schengen' },
  { code: 'LT', name: 'Lithuania', isEU: true, joinedDate: '2007-12-21' },
  { code: 'LU', name: 'Luxembourg', isEU: true, joinedDate: '1995-03-26' },
  { code: 'MT', name: 'Malta', isEU: true, joinedDate: '2007-12-21' },
  { code: 'NL', name: 'Netherlands', isEU: true, joinedDate: '1995-03-26' },
  { code: 'NO', name: 'Norway', isEU: false, joinedDate: '2001-03-25', notes: 'EFTA member associated with Schengen' },
  { code: 'PL', name: 'Poland', isEU: true, joinedDate: '2007-12-21' },
  { code: 'PT', name: 'Portugal', isEU: true, joinedDate: '1995-03-26' },
  {
    code: 'RO',
    name: 'Romania',
    isEU: true,
    joinedDate: '2025-01-01',
    notes: 'Air and sea borders lifted 31 March 2024; full land border controls lifted 1 January 2025.',
  },
  { code: 'SK', name: 'Slovakia', isEU: true, joinedDate: '2007-12-21' },
  { code: 'SI', name: 'Slovenia', isEU: true, joinedDate: '2007-12-21' },
  { code: 'ES', name: 'Spain', isEU: true, joinedDate: '1995-03-26' },
  { code: 'SE', name: 'Sweden', isEU: true, joinedDate: '2001-03-25' },
  { code: 'CH', name: 'Switzerland', isEU: false, joinedDate: '2008-12-12', notes: 'EFTA member associated with Schengen' },
];

/**
 * European countries frequently confused with Schengen membership.
 */
export const NON_SCHENGEN_EU_COUNTRIES: NonSchengenNote[] = [
  {
    code: 'CY',
    name: 'Cyprus',
    isEU: true,
    status: 'Candidate / Legally obliged to join in future',
    officialReason: 'Cyprus has not yet fulfilled all Schengen evaluation criteria (pending resolution of northern division). Days spent in Cyprus do not count toward Schengen 90-day allowance.',
  },
  {
    code: 'IE',
    name: 'Ireland',
    isEU: true,
    status: 'Permanent Opt-out',
    officialReason: 'Ireland maintains a legal opt-out under EU Treaties (Protocol No 19/20) and operates the Common Travel Area (CTA) with the United Kingdom. Days spent in Ireland do NOT count toward the Schengen 90-day allowance.',
  },
];

/**
 * Official EES (Entry/Exit System) facts according to Regulation (EU) 2017/2226.
 */
export const EES_FACTS: EesFacts = {
  name: 'EES',
  fullName: 'Entry/Exit System',
  regulation: 'Regulation (EU) 2017/2226',
  biometricRequirements: [
    'Facial image capture',
    '4 fingerprint scans (right index, middle, ring, little fingers or four fingers)',
  ],
  replacesPassportStamping: true,
  targetTravelers: 'Non-EU nationals traveling for short stays (both visa-required and visa-exempt) when crossing Schengen external borders.',
  officialSource: 'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/smart-borders/entry-exit-system_en',
  coreMechanism: 'Replaces physical manual passport stamping with automated digital logs recording date, time, border crossing point, and biometric identity. Automatically tracks overstays across all 29 member states in real time.',
};

/**
 * Official ETIAS facts according to Regulation (EU) 2018/1240.
 */
export const ETIAS_FACTS: EtiasFacts = {
  name: 'ETIAS',
  fullName: 'European Travel Information and Authorisation System',
  governingRegulation: 'Regulation (EU) 2018/1240',
  officialPortal: 'https://travel-europe.europa.eu/etias_en',
  expectedLaunchYear: 2027,
  expectedLaunchText: 'Expected to enter into operation in 2027 following the stabilization of the Entry/Exit System (EES).',
  standardFeeEur: 7,
  feeExemptions: [
    'Applicants under 18 years of age at time of application',
    'Applicants over 70 years of age at time of application',
    'Family members of EU/EEA citizens exercising freedom of movement rights',
  ],
  validityYears: 3,
  validityCondition: 'Valid for 3 years from issuance or until the associated passport expires, whichever occurs first.',
  transitionPeriod: {
    gracePeriodMonths: 6,
    transitionalPeriodMonths: 6,
    description: 'A 6-month transitional period followed by a 6-month grace period during which travelers without ETIAS will receive warnings and information rather than automatic border refusal, provided they fulfill all other entry requirements.',
  },
  applicability: 'Visa-exempt third-country nationals (including UK, US, Canadian, Australian, and 50+ other nationalities) traveling to 30 European countries for short stays up to 90 days in any 180-day period.',
};

/**
 * Checks whether a given country code belongs to the 29 Schengen member states.
 */
export function isSchengenMember(countryCode: string): boolean {
  if (!countryCode) return false;
  const upper = countryCode.trim().toUpperCase();
  return SCHENGEN_COUNTRIES.some((c) => c.code === upper);
}

/**
 * Returns all 29 Schengen member countries.
 */
export function getSchengenCountries(): SchengenCountry[] {
  return [...SCHENGEN_COUNTRIES];
}

/**
 * Returns official ETIAS facts and parameters.
 */
export function getEtiasFacts(): EtiasFacts {
  return { ...ETIAS_FACTS };
}

/**
 * Returns official EES facts and parameters.
 */
export function getEesFacts(): EesFacts {
  return { ...EES_FACTS };
}
