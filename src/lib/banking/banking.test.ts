import { describe, it, expect } from 'vitest';
import { normalizeIban, formatIban, calculateIso13616Mod97, validateIban } from './iban';
import { germanIbanFromAccount } from './german-iban';
import { validateBic, normalizeBic } from './bic';

describe('IBAN Validation & Formatting Engine', () => {
  describe('normalizeIban', () => {
    it('strips spaces, dashes, dots, slashes and transforms to uppercase', () => {
      expect(normalizeIban('de89-3704.0044 0532/0130 00')).toBe('DE89370400440532013000');
      expect(normalizeIban('  gb29 nwbk 6016 1331 9268 19  ')).toBe('GB29NWBK60161331926819');
    });

    it('handles empty input gracefully', () => {
      expect(normalizeIban('')).toBe('');
    });
  });

  describe('formatIban', () => {
    it('formats normalized IBAN into 4-character blocks', () => {
      expect(formatIban('DE89370400440532013000')).toBe('DE89 3704 0044 0532 0130 00');
      expect(formatIban('BE68539007547034')).toBe('BE68 5390 0754 7034');
    });
  });

  describe('calculateIso13616Mod97', () => {
    it('returns 1 for valid ISO 13616 IBANs', () => {
      expect(calculateIso13616Mod97('DE89370400440532013000')).toBe(1);
      expect(calculateIso13616Mod97('GB29NWBK60161331926819')).toBe(1);
    });

    it('returns non-1 for corrupted IBANs', () => {
      expect(calculateIso13616Mod97('DE89370400440532013001')).not.toBe(1);
    });
  });

  describe('Comprehensive Country & Checksum Test Suite (30+ IBANs)', () => {
    const testCases: Array<{
      description: string;
      iban: string;
      expectedValid: boolean;
      expectedCountry?: string;
      expectedBankName?: string;
      expectedSepa?: boolean;
      errorSubstring?: string;
    }> = [
      // 1. Germany (DE) - Valid Sparkasse KölnBonn with Bundesbank bank lookup
      {
        description: 'DE valid (Sparkasse KölnBonn with Bundesbank lookup)',
        iban: 'DE15370501980001234567',
        expectedValid: true,
        expectedCountry: 'DE',
        expectedBankName: 'Sparkasse KölnBonn',
        expectedSepa: true,
      },
      // 2. Germany (DE) - Valid Commerzbank
      {
        description: 'DE valid (Commerzbank Berlin)',
        iban: 'DE89370400440532013000',
        expectedValid: true,
        expectedCountry: 'DE',
        expectedSepa: true,
      },
      // 3. Germany (DE) - Invalid Mod-97 checksum
      {
        description: 'DE invalid checksum',
        iban: 'DE89370400440532013001',
        expectedValid: false,
        errorSubstring: 'mod-97',
      },
      // 4. Germany (DE) - Invalid length (21 chars instead of 22)
      {
        description: 'DE invalid length',
        iban: 'DE8937040044053201300',
        expectedValid: false,
        errorSubstring: 'expected 22',
      },
      // 5. United Kingdom (GB) - Valid NatWest
      {
        description: 'GB valid (NatWest)',
        iban: 'GB29NWBK60161331926819',
        expectedValid: true,
        expectedCountry: 'GB',
        expectedSepa: true,
      },
      // 6. United Kingdom (GB) - Invalid checksum
      {
        description: 'GB invalid checksum',
        iban: 'GB29NWBK60161331926818',
        expectedValid: false,
        errorSubstring: 'mod-97',
      },
      // 7. Belgium (BE) - Valid national check digits (5390075470 % 97 = 34)
      {
        description: 'BE valid with national check digits',
        iban: 'BE68539007547034',
        expectedValid: true,
        expectedCountry: 'BE',
        expectedSepa: true,
      },
      // 8. Belgium (BE) - Invalid national check digits (ends with 35 instead of 34, mod-97 check 41 is valid)
      {
        description: 'BE invalid national check digits',
        iban: 'BE41539007547035',
        expectedValid: false,
        errorSubstring: 'Invalid Belgian national check digits',
      },
      // 9. France (FR) - Valid French RIB key with alphanumeric account (letter M)
      {
        description: 'FR valid with alphanumeric account & valid RIB key',
        iban: 'FR1420041010050500013M02606',
        expectedValid: true,
        expectedCountry: 'FR',
        expectedSepa: true,
      },
      // 10. France (FR) - Invalid French RIB key (ends with 07 instead of 06, mod-97 check 84 is valid)
      {
        description: 'FR invalid national RIB key',
        iban: 'FR8420041010050500013M02607',
        expectedValid: false,
        errorSubstring: 'Invalid French RIB check key',
      },
      // 11. Spain (ES) - Valid Spanish control digits (DC 45)
      {
        description: 'ES valid with national control digits (DC 45)',
        iban: 'ES9121000418450200051332',
        expectedValid: true,
        expectedCountry: 'ES',
        expectedSepa: true,
      },
      // 12. Spain (ES) - Invalid Spanish control digits (DC 99 instead of 45, mod-97 check 41 is valid)
      {
        description: 'ES invalid national control digits (DC 99)',
        iban: 'ES4121000418990200051332',
        expectedValid: false,
        errorSubstring: 'Invalid Spanish national control digits',
      },
      // 13. Italy (IT) - Valid Italian CIN check character ('X')
      {
        description: 'IT valid with CIN check character',
        iban: 'IT60X0542811101000000123456',
        expectedValid: true,
        expectedCountry: 'IT',
        expectedSepa: true,
      },
      // 14. Italy (IT) - Invalid Italian CIN check character ('Y' instead of 'X', mod-97 check 64 is valid)
      {
        description: 'IT invalid CIN check character',
        iban: 'IT64Y0542811101000000123456',
        expectedValid: false,
        errorSubstring: 'Invalid Italian CIN check character',
      },
      // 15. Netherlands (NL) - Valid ABN AMRO
      {
        description: 'NL valid (ABN AMRO)',
        iban: 'NL91ABNA0417164300',
        expectedValid: true,
        expectedCountry: 'NL',
        expectedSepa: true,
      },
      // 16. Netherlands (NL) - Invalid checksum
      {
        description: 'NL invalid checksum',
        iban: 'NL91ABNA0417164301',
        expectedValid: false,
        errorSubstring: 'mod-97',
      },
      // 17. Poland (PL) - Valid Santander Bank Polska
      {
        description: 'PL valid (Santander Bank Polska)',
        iban: 'PL61109010140000071219812874',
        expectedValid: true,
        expectedCountry: 'PL',
        expectedSepa: true,
      },
      // 18. Poland (PL) - Invalid checksum
      {
        description: 'PL invalid checksum',
        iban: 'PL61109010140000071219812870',
        expectedValid: false,
        errorSubstring: 'mod-97',
      },
      // 19. Turkey (TR) - Valid Turkish IBAN
      {
        description: 'TR valid',
        iban: 'TR980006100512345678901234',
        expectedValid: true,
        expectedCountry: 'TR',
        expectedSepa: false,
      },
      // 20. Turkey (TR) - Invalid checksum
      {
        description: 'TR invalid checksum',
        iban: 'TR330006100512345678901239',
        expectedValid: false,
        errorSubstring: 'mod-97',
      },
      // 21. Romania (RO) - Valid Romanian IBAN
      {
        description: 'RO valid',
        iban: 'RO49AAAA1B31007593840000',
        expectedValid: true,
        expectedCountry: 'RO',
        expectedSepa: true,
      },
      // 22. Romania (RO) - Invalid checksum
      {
        description: 'RO invalid checksum',
        iban: 'RO49AAAA1B31007593840001',
        expectedValid: false,
        errorSubstring: 'mod-97',
      },
      // 23. United Arab Emirates (AE) - Valid UAE IBAN (23 chars)
      {
        description: 'AE valid (Emirates NBD)',
        iban: 'AE070331234567890123456',
        expectedValid: true,
        expectedCountry: 'AE',
        expectedSepa: false,
      },
      // 24. Saudi Arabia (SA) - Valid Saudi IBAN (24 chars)
      {
        description: 'SA valid (Al Rajhi Bank)',
        iban: 'SA0380000000608010167519',
        expectedValid: true,
        expectedCountry: 'SA',
        expectedSepa: false,
      },
      // 25. Switzerland (CH) - Valid Swiss IBAN
      {
        description: 'CH valid',
        iban: 'CH9300762011623852957',
        expectedValid: true,
        expectedCountry: 'CH',
        expectedSepa: true,
      },
      // 26. Austria (AT) - Valid Austrian IBAN
      {
        description: 'AT valid',
        iban: 'AT611904300234573201',
        expectedValid: true,
        expectedCountry: 'AT',
        expectedSepa: true,
      },
      // 27. Portugal (PT) - Valid Portuguese IBAN
      {
        description: 'PT valid',
        iban: 'PT55000700000001234567824',
        expectedValid: true,
        expectedCountry: 'PT',
        expectedSepa: true,
      },
      // 28. Sweden (SE) - Valid Swedish IBAN
      {
        description: 'SE valid',
        iban: 'SE4550000000058398257466',
        expectedValid: true,
        expectedCountry: 'SE',
        expectedSepa: true,
      },
      // 29. Norway (NO) - Valid Norwegian IBAN
      {
        description: 'NO valid',
        iban: 'NO9386011117947',
        expectedValid: true,
        expectedCountry: 'NO',
        expectedSepa: true,
      },
      // 30. Denmark (DK) - Valid Danish IBAN
      {
        description: 'DK valid',
        iban: 'DK1030001234567890',
        expectedValid: true,
        expectedCountry: 'DK',
        expectedSepa: true,
      },
      // 31. Finland (FI) - Valid Finnish IBAN
      {
        description: 'FI valid',
        iban: 'FI2112345600000785',
        expectedValid: true,
        expectedCountry: 'FI',
        expectedSepa: true,
      },
      // 32. Greece (GR) - Valid Greek IBAN
      {
        description: 'GR valid',
        iban: 'GR7601101250000000012345690',
        expectedValid: true,
        expectedCountry: 'GR',
        expectedSepa: true,
      },
      // 33. Invalid - Unknown country code
      {
        description: 'Invalid unknown country code (ZZ)',
        iban: 'ZZ9912345678901234567890',
        expectedValid: false,
        errorSubstring: 'Unknown or unsupported country code',
      },
      // 34. Invalid - Too short input
      {
        description: 'Invalid too short (under 2 chars)',
        iban: 'D',
        expectedValid: false,
        errorSubstring: 'too short',
      },
      // 35. Invalid - Invalid characters (special symbols)
      {
        description: 'Invalid characters',
        iban: 'DE8937040044053201300!',
        expectedValid: false,
        errorSubstring: 'invalid characters',
      },
      // 36. Invalid - Non-numeric check digits
      {
        description: 'Invalid non-numeric check digits',
        iban: 'DEXY370400440532013000',
        expectedValid: false,
        errorSubstring: 'check digits',
      },
      // 37. Invalid - Empty input
      {
        description: 'Invalid empty string',
        iban: '',
        expectedValid: false,
        errorSubstring: 'empty',
      },
    ];

    testCases.forEach((tc, idx) => {
      it(`Case #${idx + 1}: ${tc.description}`, () => {
        const result = validateIban(tc.iban);
        expect(result.isValid).toBe(tc.expectedValid);
        if (tc.expectedValid) {
          expect(result.countryCode).toBe(tc.expectedCountry);
          if (tc.expectedSepa !== undefined) {
            expect(result.isSepa).toBe(tc.expectedSepa);
          }
          if (tc.expectedBankName) {
            expect(result.bankName).toBe(tc.expectedBankName);
          }
          expect(result.formattedIban).toBeDefined();
        } else {
          expect(result.errorReason).toBeDefined();
          if (tc.errorSubstring) {
            expect(result.errorReason?.toLowerCase()).toContain(tc.errorSubstring.toLowerCase());
          }
        }
      });
    });
  });

  describe('German IBAN Calculator (germanIbanFromAccount)', () => {
    it('calculates a valid German IBAN from BLZ and Kontonummer with Bundesbank lookup', () => {
      // Sparkasse KölnBonn BLZ 37050198, Account 1234567
      const res = germanIbanFromAccount('37050198', '1234567');
      expect(res.isValid).toBe(true);
      expect(res.iban).toBe('DE15370501980001234567');
      expect(res.formattedIban).toBe('DE15 3705 0198 0001 2345 67');
      expect(res.blz).toBe('37050198');
      expect(res.kontonummer).toBe('1234567');
      expect(res.bankName).toBe('Sparkasse KölnBonn');
      expect(res.city).toBe('Köln');
      expect(res.bic).toBe('COLSDE33XXX');
      expect(res.notice).toContain('Bundesbank-Ausnahmeregeln');

      // Cross-verify with validateIban
      const validation = validateIban(res.iban!);
      expect(validation.isValid).toBe(true);
      expect(validation.bankName).toBe('Sparkasse KölnBonn');
    });

    it('handles Deutsche Bundesbank BLZ 10000000 and 10-digit account', () => {
      const res = germanIbanFromAccount('10000000', '1234567890');
      expect(res.isValid).toBe(true);
      expect(res.bankName).toBe('Bundesbank');
      expect(res.city).toBe('Berlin');
      expect(res.bic).toBe('MARKDEF1100');

      // Verify checksum with validateIban
      expect(validateIban(res.iban!).isValid).toBe(true);
    });

    it('rejects an invalid BLZ length or format', () => {
      const res = germanIbanFromAccount('12345', '123456');
      expect(res.isValid).toBe(false);
      expect(res.errorReason).toContain('8 Ziffern');
    });

    it('rejects an unknown BLZ not present in the Bundesbank registry', () => {
      const res = germanIbanFromAccount('99999999', '123456');
      expect(res.isValid).toBe(false);
      expect(res.errorReason).toContain('nicht in der offiziellen Bundesbank-Datenbank gefunden');
    });

    it('rejects an invalid account number', () => {
      const res = germanIbanFromAccount('37050198', '12345678901234');
      expect(res.isValid).toBe(false);
      expect(res.errorReason).toContain('1 bis 10 Ziffern');
    });
  });

  describe('BIC Validation Engine (validateBic)', () => {
    it('validates and details an 8-character BIC for a German bank', () => {
      const res = validateBic('COLSDE33');
      expect(res.isValid).toBe(true);
      expect(res.bankCode).toBe('COLS');
      expect(res.countryCode).toBe('DE');
      expect(res.locationCode).toBe('33');
      expect(res.branchCode).toBeUndefined();
      expect(res.isHeadOffice).toBe(true);
      expect(res.bankName).toBe('Sparkasse KölnBonn');
      expect(res.city).toBe('Köln');
    });

    it('validates and details an 11-character BIC with XXX head office', () => {
      const res = validateBic('MARKDEF1100');
      expect(res.isValid).toBe(true);
      expect(res.bankCode).toBe('MARK');
      expect(res.countryCode).toBe('DE');
      expect(res.locationCode).toBe('F1');
      expect(res.branchCode).toBe('100');
      expect(res.isHeadOffice).toBe(false);
      expect(res.bankName).toBe('Bundesbank');
    });

    it('validates an international BIC (e.g. BNP Paribas France)', () => {
      const res = validateBic('BNPAFRPPXXX');
      expect(res.isValid).toBe(true);
      expect(res.bankCode).toBe('BNPA');
      expect(res.countryCode).toBe('FR');
      expect(res.locationCode).toBe('PP');
      expect(res.branchCode).toBe('XXX');
      expect(res.isHeadOffice).toBe(true);
    });

    it('normalizes input with spaces and lowercase', () => {
      const res = validateBic('  cols-de.33  ');
      expect(res.isValid).toBe(true);
      expect(res.bic).toBe('COLSDE33');
    });

    it('rejects invalid BIC lengths', () => {
      expect(validateBic('ABC').isValid).toBe(false);
      expect(validateBic('ABCDEFGH1234').isValid).toBe(false);
    });

    it('rejects non-letter characters in bank or country code', () => {
      expect(validateBic('1234DE33').isValid).toBe(false);
      expect(validateBic('COL12E33').isValid).toBe(false);
    });

    it('rejects empty input', () => {
      expect(validateBic('').isValid).toBe(false);
    });
  });
});
