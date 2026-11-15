import deBanksData from '@/data/banks/de.json';

export interface BicValidationResult {
  isValid: boolean;
  errorReason?: string;
  bic?: string;
  bankCode?: string;
  countryCode?: string;
  locationCode?: string;
  branchCode?: string;
  isHeadOffice?: boolean;
  bankName?: string;
  city?: string;
  blz?: string;
}

interface BankItem {
  blz: string;
  name: string;
  plz: string;
  city: string;
  bic: string;
  shortName: string;
}

// Lazy index of German banks by BIC
let deBicMap: Map<string, BankItem> | null = null;

function getDeBicMap(): Map<string, BankItem> {
  if (!deBicMap) {
    deBicMap = new Map();
    const mainBanks = (deBanksData as { mainBanks?: BankItem[] })?.mainBanks || [];
    for (const bank of mainBanks) {
      if (bank.bic) {
        const clean = bank.bic.trim().toUpperCase();
        if (!deBicMap.has(clean)) {
          deBicMap.set(clean, bank);
        }
        // Also map 8-character prefix if not already mapped
        const prefix8 = clean.slice(0, 8);
        if (!deBicMap.has(prefix8)) {
          deBicMap.set(prefix8, bank);
        }
      }
    }
  }
  return deBicMap;
}

/**
 * Normalizes a raw BIC / SWIFT code string
 */
export function normalizeBic(raw: string): string {
  if (!raw) return '';
  return raw.replace(/[\s.-]/g, '').toUpperCase();
}

/**
 * Validates a BIC / SWIFT code (ISO 9362):
 * - Must be 8 or 11 characters
 * - Characters 1-4: 4 letters (Bank code)
 * - Characters 5-6: 2 letters (ISO country code)
 * - Characters 7-8: 2 alphanumeric characters (Location code)
 * - Characters 9-11 (optional): 3 alphanumeric characters (Branch code)
 * - Head office determination: branch is 'XXX' or omitted (8 chars)
 * - If country === 'DE', looks up bank name and city from Deutsche Bundesbank data
 */
export function validateBic(rawBic: string): BicValidationResult {
  const bic = normalizeBic(rawBic);

  if (!bic) {
    return {
      isValid: false,
      errorReason: 'BIC / SWIFT code is empty',
    };
  }

  if (bic.length !== 8 && bic.length !== 11) {
    return {
      isValid: false,
      bic,
      errorReason: `Invalid BIC length: expected 8 or 11 characters, received ${bic.length}`,
    };
  }

  const bankCode = bic.slice(0, 4);
  const countryCode = bic.slice(4, 6);
  const locationCode = bic.slice(6, 8);
  const branchCode = bic.length === 11 ? bic.slice(8, 11) : undefined;

  // Validate Bank code: 4 letters A-Z
  if (!/^[A-Z]{4}$/.test(bankCode)) {
    return {
      isValid: false,
      bic,
      bankCode,
      countryCode,
      locationCode,
      branchCode,
      errorReason: 'Bank code (first 4 characters) must be letters A-Z',
    };
  }

  // Validate Country code: 2 letters A-Z
  if (!/^[A-Z]{2}$/.test(countryCode)) {
    return {
      isValid: false,
      bic,
      bankCode,
      countryCode,
      locationCode,
      branchCode,
      errorReason: 'Country code (characters 5 and 6) must be 2 letters A-Z',
    };
  }

  // Validate Location code: 2 alphanumeric characters
  if (!/^[A-Z0-9]{2}$/.test(locationCode)) {
    return {
      isValid: false,
      bic,
      bankCode,
      countryCode,
      locationCode,
      branchCode,
      errorReason: 'Location code (characters 7 and 8) must be letters or digits',
    };
  }

  // Validate Branch code if 11 chars: 3 alphanumeric characters
  if (branchCode && !/^[A-Z0-9]{3}$/.test(branchCode)) {
    return {
      isValid: false,
      bic,
      bankCode,
      countryCode,
      locationCode,
      branchCode,
      errorReason: 'Branch code (characters 9 to 11) must be letters or digits',
    };
  }

  const isHeadOffice = !branchCode || branchCode === 'XXX';

  let bankName: string | undefined;
  let city: string | undefined;
  let blz: string | undefined;

  // German bank lookup in Bundesbank data
  if (countryCode === 'DE') {
    const bicIndex = getDeBicMap();
    // Try exact 11-char BIC or 8-char BIC
    const matched =
      bicIndex.get(bic) ||
      bicIndex.get(bic.length === 8 ? `${bic}XXX` : bic.slice(0, 8));

    if (matched) {
      bankName = matched.name;
      city = matched.city;
      blz = matched.blz;
    }
  }

  return {
    isValid: true,
    bic,
    bankCode,
    countryCode,
    locationCode,
    branchCode,
    isHeadOffice,
    bankName,
    city,
    blz,
  };
}
