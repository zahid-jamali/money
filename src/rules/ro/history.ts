export interface RomanianVatSchedule {
  periodKey: string;
  name: string;
  validFrom: string;
  validTo?: string;
  standardRate: number;
  reducedRates: number[];
  superReducedRate?: number;
  zeroRate: number;
  legalReference: string;
  source: string;
  isPostAug2025: boolean;
}

/**
 * Historical and current Romanian VAT schedules.
 * Key milestones:
 * - Post August 1, 2025: Law 141/2025 standard rate raised to 21%, 5% and 9% consolidated into a unified 11% reduced rate.
 * - Prior to August 1, 2025 (2017-01-01 to 2025-07-31): Standard 19%, reduced 9% and 5%.
 * - 2016: Standard 20%, reduced 9% and 5%.
 * - 2010 to 2015: Standard 24%, reduced 9% and 5%.
 */
export const ROMANIAN_VAT_HISTORY: RomanianVatSchedule[] = [
  {
    periodKey: 'post-2025-08',
    name: 'Post-August 2025 Reform (Law 141/2025)',
    validFrom: '2025-08-01',
    validTo: undefined,
    standardRate: 21,
    reducedRates: [11],
    superReducedRate: undefined,
    zeroRate: 0,
    legalReference: 'Legea nr. 141/2025 privind unele măsuri fiscal-bugetare, M.Of. 725/2025',
    source: 'https://www.anaf.ro',
    isPostAug2025: true,
  },
  {
    periodKey: '2017-to-2025-07',
    name: 'Pre-August 2025 Standard (2017-2025)',
    validFrom: '2017-01-01',
    validTo: '2025-07-31',
    standardRate: 19,
    reducedRates: [9, 5],
    superReducedRate: 5,
    zeroRate: 0,
    legalReference: 'Codul Fiscal (Legea nr. 227/2015 cu modificările ulterioare, art. 291)',
    source: 'https://www.anaf.ro',
    isPostAug2025: false,
  },
  {
    periodKey: '2016',
    name: 'Transitional Period 2016',
    validFrom: '2016-01-01',
    validTo: '2016-12-31',
    standardRate: 20,
    reducedRates: [9, 5],
    superReducedRate: 5,
    zeroRate: 0,
    legalReference: 'Codul Fiscal (Legea nr. 227/2015, versiune inițială)',
    source: 'https://www.anaf.ro',
    isPostAug2025: false,
  },
  {
    periodKey: '2010-to-2015',
    name: 'Crisis Fiscal Consolidation (2010-2015)',
    validFrom: '2010-07-01',
    validTo: '2015-12-31',
    standardRate: 24,
    reducedRates: [9, 5],
    superReducedRate: 5,
    zeroRate: 0,
    legalReference: 'OUG nr. 54/2010 privind unele măsuri fiscale',
    source: 'https://www.anaf.ro',
    isPostAug2025: false,
  },
];

/**
 * Returns the active Romanian VAT rates schedule for a given ISO date string (YYYY-MM-DD).
 * Defaults to the latest active schedule if date is omitted or unparseable.
 */
export function getRomanianVatRates(date?: string): RomanianVatSchedule {
  if (!date) {
    // Return post-August 2025 schedule by default for contemporary/future dates
    return ROMANIAN_VAT_HISTORY[0];
  }

  // Normalize date string (support YYYY-MM-DD or full ISO strings)
  const normalizedDate = date.slice(0, 10);

  // Exact period matching
  for (const schedule of ROMANIAN_VAT_HISTORY) {
    const isAfterStart = normalizedDate >= schedule.validFrom;
    const isBeforeEnd = !schedule.validTo || normalizedDate <= schedule.validTo;

    if (isAfterStart && isBeforeEnd) {
      return schedule;
    }
  }

  // Fallback: If date is post Aug 2025
  if (normalizedDate >= '2025-08-01') {
    return ROMANIAN_VAT_HISTORY[0];
  }

  // Fallback: Default to standard prior to Aug 2025
  return ROMANIAN_VAT_HISTORY[1];
}
