import deBanksData from '@/data/banks/de.json';
import { formatIban } from './iban';

export interface GermanIbanResult {
  isValid: boolean;
  errorReason?: string;
  iban?: string;
  formattedIban?: string;
  blz: string;
  kontonummer: string;
  bankName?: string;
  bic?: string;
  city?: string;
  notice: string;
}

const GERMAN_IBAN_NOTICE =
  'Hinweis: Einige Kreditinstitute verwenden spezielle Berechnungsregeln (Bundesbank-Ausnahmeregeln). Maßgeblich ist stets die von Ihrer Bank mitgeteilte IBAN.';

/**
 * Calculates a German IBAN from an 8-digit Bankleitzahl (BLZ) and account number (Kontonummer).
 * Validates BLZ against the Deutsche Bundesbank registry.
 */
export function germanIbanFromAccount(rawBlz: string, rawKontonummer: string): GermanIbanResult {
  const blz = (rawBlz || '').trim().replace(/\s+/g, '');
  const kontonummer = (rawKontonummer || '').trim().replace(/\s+/g, '');

  const baseResult = {
    blz,
    kontonummer,
    notice: GERMAN_IBAN_NOTICE,
  };

  if (!blz) {
    return {
      isValid: false,
      errorReason: 'Bankleitzahl (BLZ) darf nicht leer sein',
      ...baseResult,
    };
  }

  if (!/^[0-9]{8}$/.test(blz)) {
    return {
      isValid: false,
      errorReason: 'Bankleitzahl (BLZ) muss aus genau 8 Ziffern bestehen',
      ...baseResult,
    };
  }

  if (!kontonummer) {
    return {
      isValid: false,
      errorReason: 'Kontonummer darf nicht leer sein',
      ...baseResult,
    };
  }

  if (!/^[0-9]{1,10}$/.test(kontonummer)) {
    return {
      isValid: false,
      errorReason: 'Kontonummer muss aus 1 bis 10 Ziffern bestehen',
      ...baseResult,
    };
  }

  // Verify against Bundesbank data
  const blzMap = (deBanksData as { blzMap?: Record<string, { name: string; bic: string; city: string }> })?.blzMap;
  const bankRecord = blzMap?.[blz];

  if (!bankRecord) {
    return {
      isValid: false,
      errorReason: `Bankleitzahl ${blz} wurde nicht in der offiziellen Bundesbank-Datenbank gefunden`,
      ...baseResult,
    };
  }

  // Left-pad account number to 10 digits
  const paddedAccount = kontonummer.padStart(10, '0');

  // Compute ISO 7064 Mod 97-10 check digits:
  // Rearrange: BLZ (8) + Account (10) + D (13) + E (14) + '00' (2)
  const numericString = `${blz}${paddedAccount}131400`;
  const remainder = BigInt(numericString) % 97n;
  const checkDigits = (98n - remainder).toString().padStart(2, '0');

  const iban = `DE${checkDigits}${blz}${paddedAccount}`;
  const formattedIban = formatIban(iban);

  return {
    isValid: true,
    iban,
    formattedIban,
    blz,
    kontonummer,
    bankName: bankRecord.name,
    bic: bankRecord.bic,
    city: bankRecord.city,
    notice: GERMAN_IBAN_NOTICE,
  };
}
