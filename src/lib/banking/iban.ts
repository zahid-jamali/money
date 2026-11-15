import { getIbanCountrySpec } from '@/data/iban-registry';
import deBanksData from '@/data/banks/de.json';

export interface IbanValidationResult {
  isValid: boolean;
  errorReason?: string;
  formattedIban?: string;
  countryCode?: string;
  countryName?: string;
  isSepa?: boolean;
  currency?: string;
  bankCode?: string;
  branchCode?: string;
  accountNumber?: string;
  nationalCheckDigits?: string;
  bankName?: string;
  bic?: string;
  city?: string;
}

/**
 * Normalizes a raw IBAN string:
 * - Strips whitespace, dashes, dots, slashes
 * - Converts to uppercase
 */
export function normalizeIban(raw: string): string {
  if (!raw) return '';
  return raw.replace(/[\s.\-_/]/g, '').toUpperCase();
}

/**
 * Formats an IBAN string into 4-character blocks separated by spaces
 */
export function formatIban(iban: string): string {
  const clean = normalizeIban(iban);
  if (!clean) return '';
  const chunks = clean.match(/.{1,4}/g);
  return chunks ? chunks.join(' ') : clean;
}

/**
 * French RIB letter conversion table:
 * Letters A..Z mapped to single digits 1..9
 */
const FR_LETTER_MAP: Record<string, string> = {
  A: '1', J: '1',
  B: '2', K: '2', S: '2',
  C: '3', L: '3', T: '3',
  D: '4', M: '4', U: '4',
  E: '5', N: '5', V: '5',
  F: '6', O: '6', W: '6',
  G: '7', P: '7', X: '7',
  H: '8', Q: '8', Y: '8',
  I: '9', R: '9', Z: '9',
};

/**
 * Italian CIN character lookup tables
 * 1-based odd/even position values mod 26
 */
const IT_CIN_ODD_MAP: Record<string, number> = {
  '0': 1, '1': 0, '2': 5, '3': 7, '4': 9, '5': 13, '6': 15, '7': 17, '8': 19, '9': 21,
  A: 1, B: 0, C: 5, D: 7, E: 9, F: 13, G: 15, H: 17, I: 19, J: 21,
  K: 2, L: 4, M: 18, N: 20, O: 11, P: 3, Q: 6, R: 8, S: 12, T: 14,
  U: 16, V: 10, W: 22, X: 25, Y: 24, Z: 23,
};

const IT_CIN_EVEN_MAP: Record<string, number> = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
  A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9,
  K: 10, L: 11, M: 12, N: 13, O: 14, P: 15, Q: 16, R: 17, S: 18, T: 19,
  U: 20, V: 21, W: 22, X: 23, Y: 24, Z: 25,
};

/**
 * Performs ISO 13616 Mod-97 checksum calculation:
 * - Move first 4 characters (country + check digits) to end
 * - Convert letters A=10..Z=35
 * - Compute modulo 97 using BigInt. Result must equal 1.
 */
export function calculateIso13616Mod97(iban: string): number {
  if (iban.length < 5) return -1;
  const rearranged = iban.slice(4) + iban.slice(0, 4);
  let numericStr = '';
  for (let i = 0; i < rearranged.length; i++) {
    const code = rearranged.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      numericStr += (code - 55).toString();
    } else if (code >= 48 && code <= 57) {
      numericStr += rearranged[i];
    } else {
      return -1; // invalid character
    }
  }
  try {
    return Number(BigInt(numericStr) % 97n);
  } catch {
    return -1;
  }
}

/**
 * Validates Belgium national check digits:
 * 12-digit BBAN (positions 4..16):
 * last 2 digits === (first 10 digits % 97 || 97)
 */
function validateBelgianCheckDigits(iban: string): { isValid: boolean; errorReason?: string } {
  const bban = iban.slice(4, 16);
  if (bban.length !== 12 || !/^[0-9]{12}$/.test(bban)) {
    return { isValid: false, errorReason: 'Belgian BBAN must be 12 numeric digits' };
  }
  const first10 = BigInt(bban.slice(0, 10));
  const last2 = Number(bban.slice(10, 12));
  const rem = Number(first10 % 97n);
  const expected = rem === 0 ? 97 : rem;
  if (last2 !== expected) {
    return {
      isValid: false,
      errorReason: `Invalid Belgian national check digits: expected ${expected.toString().padStart(2, '0')}, but found ${last2.toString().padStart(2, '0')}`,
    };
  }
  return { isValid: true };
}

/**
 * Validates France national RIB key:
 * 23-character BBAN (positions 4..27):
 * 5 bank, 5 branch, 11 account, 2 key.
 * Formula: 97 - ((89 * BigInt(bank) + 15 * BigInt(branch) + 3 * BigInt(accountNumeric)) % 97n)
 */
function validateFrenchRibKey(iban: string): { isValid: boolean; errorReason?: string } {
  const bban = iban.slice(4, 27);
  if (bban.length !== 23) {
    return { isValid: false, errorReason: 'French BBAN must be 23 characters' };
  }
  const bank = bban.slice(0, 5);
  const branch = bban.slice(5, 10);
  const account = bban.slice(10, 21);
  const key = bban.slice(21, 23);

  if (!/^[0-9]{5}$/.test(bank) || !/^[0-9]{5}$/.test(branch) || !/^[0-9]{2}$/.test(key)) {
    return { isValid: false, errorReason: 'French bank code, branch code, and RIB key must be numeric' };
  }

  const accountNumeric = account.replace(/[A-Z]/g, (ch) => FR_LETTER_MAP[ch] || '0');
  if (!/^[0-9]{11}$/.test(accountNumeric)) {
    return { isValid: false, errorReason: 'Invalid characters in French account number' };
  }

  const bankNum = BigInt(bank);
  const branchNum = BigInt(branch);
  const accNum = BigInt(accountNumeric);

  const weightedSum = 89n * bankNum + 15n * branchNum + 3n * accNum;
  const rem = weightedSum % 97n;
  const calculatedKey = 97n - rem;
  const expectedKey = (calculatedKey === 0n ? 97n : calculatedKey).toString().padStart(2, '0');

  if (key !== expectedKey) {
    return {
      isValid: false,
      errorReason: `Invalid French RIB check key: expected ${expectedKey}, but found ${key}`,
    };
  }
  return { isValid: true };
}

/**
 * Validates Spain national control digits:
 * 20-digit BBAN (positions 4..24):
 * 4 bank, 4 branch, 2 control digits, 10 account.
 * Check digit 1 verifies bank+branch with weights [4,8,5,10,9,7,3,6].
 * Check digit 2 verifies account with weights [1,2,4,8,5,10,9,7,3,6].
 */
function validateSpanishCheckDigits(iban: string): { isValid: boolean; errorReason?: string } {
  const bban = iban.slice(4, 24);
  if (bban.length !== 20 || !/^[0-9]{20}$/.test(bban)) {
    return { isValid: false, errorReason: 'Spanish BBAN must be 20 numeric digits' };
  }
  const bankBranch = bban.slice(0, 8);
  const dc1 = bban[8];
  const dc2 = bban[9];
  const account = bban.slice(10, 20);

  const w8 = [4, 8, 5, 10, 9, 7, 3, 6];
  const sum1 = bankBranch.split('').reduce((acc, digit, idx) => acc + Number(digit) * w8[idx], 0);
  const rem1 = 11 - (sum1 % 11);
  const expectedDc1 = rem1 === 11 ? '0' : rem1 === 10 ? '1' : rem1.toString();

  const w10 = [1, 2, 4, 8, 5, 10, 9, 7, 3, 6];
  const sum2 = account.split('').reduce((acc, digit, idx) => acc + Number(digit) * w10[idx], 0);
  const rem2 = 11 - (sum2 % 11);
  const expectedDc2 = rem2 === 11 ? '0' : rem2 === 10 ? '1' : rem2.toString();

  if (dc1 !== expectedDc1 || dc2 !== expectedDc2) {
    return {
      isValid: false,
      errorReason: `Invalid Spanish national control digits: expected ${expectedDc1}${expectedDc2}, but found ${dc1}${dc2}`,
    };
  }
  return { isValid: true };
}

/**
 * Validates Italy CIN character:
 * 23-character BBAN (positions 4..27):
 * 1 CIN letter, 5 ABI, 5 CAB, 12 account.
 * CIN character check using official odd/even position character weight tables mod 26.
 */
function validateItalianCin(iban: string): { isValid: boolean; errorReason?: string } {
  const bban = iban.slice(4, 27);
  if (bban.length !== 23) {
    return { isValid: false, errorReason: 'Italian BBAN must be 23 characters' };
  }
  const cin = bban[0];
  const payload = bban.slice(1); // 22 characters: ABI (5) + CAB (5) + Conto (12)

  let sum = 0;
  for (let i = 0; i < payload.length; i++) {
    const ch = payload[i];
    // 1-based indexing: index 0 is position 1 (odd)
    if ((i + 1) % 2 === 1) {
      const val = IT_CIN_ODD_MAP[ch];
      if (val === undefined) {
        return { isValid: false, errorReason: `Invalid character '${ch}' in Italian BBAN payload` };
      }
      sum += val;
    } else {
      const val = IT_CIN_EVEN_MAP[ch];
      if (val === undefined) {
        return { isValid: false, errorReason: `Invalid character '${ch}' in Italian BBAN payload` };
      }
      sum += val;
    }
  }

  const expectedCin = String.fromCharCode(65 + (sum % 26));
  if (cin !== expectedCin) {
    return {
      isValid: false,
      errorReason: `Invalid Italian CIN check character: expected '${expectedCin}', but found '${cin}'`,
    };
  }
  return { isValid: true };
}

/**
 * Comprehensive IBAN validation engine
 */
export function validateIban(rawIban: string): IbanValidationResult {
  const iban = normalizeIban(rawIban);

  if (!iban) {
    return {
      isValid: false,
      errorReason: 'IBAN is empty',
      formattedIban: '',
    };
  }

  const formattedIban = formatIban(iban);

  if (iban.length < 2) {
    return {
      isValid: false,
      errorReason: 'IBAN is too short (must begin with a 2-letter country code)',
      formattedIban,
    };
  }

  const countryCode = iban.slice(0, 2);
  const spec = getIbanCountrySpec(countryCode);

  if (!spec) {
    return {
      isValid: false,
      errorReason: `Unknown or unsupported country code: ${countryCode}`,
      formattedIban,
      countryCode,
    };
  }

  // Length check
  if (iban.length !== spec.ibanLength) {
    return {
      isValid: false,
      errorReason: `Invalid IBAN length for ${spec.countryName} (${countryCode}): expected ${spec.ibanLength} characters, but received ${iban.length}`,
      formattedIban,
      countryCode: spec.countryCode,
      countryName: spec.countryName,
      isSepa: spec.isSepa,
      currency: spec.currency,
    };
  }

  // Character validity check
  if (!/^[A-Z0-9]+$/.test(iban)) {
    return {
      isValid: false,
      errorReason: 'IBAN contains invalid characters (only Latin letters A-Z and digits 0-9 allowed)',
      formattedIban,
      countryCode: spec.countryCode,
      countryName: spec.countryName,
      isSepa: spec.isSepa,
      currency: spec.currency,
    };
  }

  // Check digits position check (characters 2 and 3 must be numeric)
  if (!/^[0-9]{2}$/.test(iban.slice(2, 4))) {
    return {
      isValid: false,
      errorReason: 'IBAN check digits (positions 3 and 4) must be numeric',
      formattedIban,
      countryCode: spec.countryCode,
      countryName: spec.countryName,
      isSepa: spec.isSepa,
      currency: spec.currency,
    };
  }

  // BBAN regex format check
  const bban = iban.slice(4);
  const bbanRegex = new RegExp(spec.bbanRegex);
  if (!bbanRegex.test(bban)) {
    return {
      isValid: false,
      errorReason: `BBAN structure does not match ${spec.countryName} national format rules`,
      formattedIban,
      countryCode: spec.countryCode,
      countryName: spec.countryName,
      isSepa: spec.isSepa,
      currency: spec.currency,
    };
  }

  // ISO 13616 Mod-97 check
  const mod97 = calculateIso13616Mod97(iban);
  if (mod97 !== 1) {
    return {
      isValid: false,
      errorReason: 'Invalid IBAN checksum (ISO 13616 mod-97 check failed)',
      formattedIban,
      countryCode: spec.countryCode,
      countryName: spec.countryName,
      isSepa: spec.isSepa,
      currency: spec.currency,
    };
  }

  // Extract components
  const bankCode = iban.slice(spec.bankCodePos[0], spec.bankCodePos[1]);
  const branchCode = spec.branchCodePos ? iban.slice(spec.branchCodePos[0], spec.branchCodePos[1]) : undefined;
  const accountNumber = iban.slice(spec.accountPos[0], spec.accountPos[1]);
  const nationalCheckDigits = spec.checkDigitsPos
    ? iban.slice(spec.checkDigitsPos[0], spec.checkDigitsPos[1])
    : undefined;

  // National check digit bonus validation (Belgium, France, Spain, Italy)
  if (countryCode === 'BE') {
    const beRes = validateBelgianCheckDigits(iban);
    if (!beRes.isValid) {
      return {
        isValid: false,
        errorReason: beRes.errorReason,
        formattedIban,
        countryCode: spec.countryCode,
        countryName: spec.countryName,
        isSepa: spec.isSepa,
        currency: spec.currency,
        bankCode,
        branchCode,
        accountNumber,
        nationalCheckDigits,
      };
    }
  } else if (countryCode === 'FR') {
    const frRes = validateFrenchRibKey(iban);
    if (!frRes.isValid) {
      return {
        isValid: false,
        errorReason: frRes.errorReason,
        formattedIban,
        countryCode: spec.countryCode,
        countryName: spec.countryName,
        isSepa: spec.isSepa,
        currency: spec.currency,
        bankCode,
        branchCode,
        accountNumber,
        nationalCheckDigits,
      };
    }
  } else if (countryCode === 'ES') {
    const esRes = validateSpanishCheckDigits(iban);
    if (!esRes.isValid) {
      return {
        isValid: false,
        errorReason: esRes.errorReason,
        formattedIban,
        countryCode: spec.countryCode,
        countryName: spec.countryName,
        isSepa: spec.isSepa,
        currency: spec.currency,
        bankCode,
        branchCode,
        accountNumber,
        nationalCheckDigits,
      };
    }
  } else if (countryCode === 'IT') {
    const itRes = validateItalianCin(iban);
    if (!itRes.isValid) {
      return {
        isValid: false,
        errorReason: itRes.errorReason,
        formattedIban,
        countryCode: spec.countryCode,
        countryName: spec.countryName,
        isSepa: spec.isSepa,
        currency: spec.currency,
        bankCode,
        branchCode,
        accountNumber,
        nationalCheckDigits,
      };
    }
  }

  // Lookup bank name, BIC, city if country === 'DE' using Bundesbank file
  let bankName: string | undefined;
  let bic: string | undefined;
  let city: string | undefined;

  if (countryCode === 'DE' && deBanksData) {
    const blzMap = (deBanksData as { blzMap?: Record<string, { name: string; bic: string; city: string }> }).blzMap;
    const bankRecord = blzMap?.[bankCode];
    if (bankRecord) {
      bankName = bankRecord.name;
      bic = bankRecord.bic;
      city = bankRecord.city;
    }
  }

  return {
    isValid: true,
    formattedIban,
    countryCode: spec.countryCode,
    countryName: spec.countryName,
    isSepa: spec.isSepa,
    currency: spec.currency,
    bankCode,
    branchCode,
    accountNumber,
    nationalCheckDigits,
    bankName,
    bic,
    city,
  };
}
