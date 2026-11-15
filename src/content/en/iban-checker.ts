import { PageContent } from '../types';

export const ibanCheckerEn: PageContent = {
  metaTitle: 'IBAN Checker & Validator 2026 | Check Any IBAN Online',
  metaDescription:
    'Verify any IBAN instantly with ISO 13616 Mod-97 checksum, length, and national check digits. Check bank name, BIC/SWIFT, and SEPA status for free.',
  h1: 'IBAN Checker & Validator 2026',
  quickAnswer:
    'An IBAN (International Bank Account Number) is validated in three stages: checking the country-specific total character length, rearranging the code by moving the initial four characters to the end, converting letters into digits (A=10 through Z=35), and calculating the modulo-97 remainder according to ISO 13616. A valid IBAN always produces a remainder of exactly 1.',
  howItWorks: [
    {
      label: 'Country Format & Length Check',
      formula: 'Length(IBAN) == ExpectedCountryLength && Regex(CountryFormat)',
      ruleCitation: 'ISO 13616-1:2020 / SWIFT IBAN Registry',
      effectiveDate: 'Standardized internationally and updated quarterly in 2026',
    },
    {
      label: 'Character Transposition',
      formula: 'Transposed = BBAN + CountryCode + CheckDigits',
      ruleCitation: 'ISO 13616-1 Clause 5.2 (Transformation algorithm)',
      effectiveDate: 'Enforced across all cross-border banking rails',
    },
    {
      label: 'ISO 7064 Mod-97-10 Checksum Calculation',
      formula: 'NumericString(Transposed) mod 97 == 1',
      ruleCitation: 'ISO/IEC 7064:2003 (MOD 97-10 check character system)',
      effectiveDate: 'Permanent mathematical rule for IBAN verification',
    },
    {
      label: 'National BBAN & Routing Validation',
      formula: 'BankCode Lookup + NationalCheckDigitAlgorithm(BBAN)',
      ruleCitation: 'National central bank rules (Bundesbank, Vocalink, Banque de France)',
      effectiveDate: 'Maintained by national payment clearing authorities',
    },
  ],
  articleSections: [
    {
      id: 'what-is-an-iban',
      title: 'What Is an International Bank Account Number (IBAN)?',
      level: 2,
      content:
        'The International Bank Account Number (IBAN) is an internationally agreed standard created by the International Organization for Standardization (ISO) and the European Committee for Banking Standards (ECBS) to identify individual bank accounts across national borders. Originally conceived to facilitate seamless cross-border transactions within the European Union, the IBAN format has expanded to over 85 countries across Europe, the Middle East, North Africa, the Caribbean, and Central Asia.\n\nPrior to the adoption of IBAN, international wire transfers suffered from high failure rates. Different nations maintained wildly inconsistent domestic account formatting: some used 8-digit numbers, others used alphanumeric codes with embedded branch indicators, and clerical errors during transcription routinely caused delays, manual investigations, and costly return fees. The IBAN solves this by prefixing every national account with a two-letter ISO country code and two mathematical checksum digits. This architecture ensures that invalid account strings are intercepted and rejected immediately at the point of data entry, long before any interbank payment rails or correspondent clearing networks are engaged.',
    },
    {
      id: 'how-mod-97-checksum-works',
      title: 'How the ISO 13616 Mod-97 Checksum Algorithm Works Step-by-Step',
      level: 2,
      content:
        'The core security mechanism that protects IBANs against typographical mistakes, misplaced digits, and transposition errors is the ISO 7064 Modulo 97-10 checksum algorithm. The mathematical process follows four precise operational phases:\n\n1. **Length and Structure Inspection**: The validator first checks whether the IBAN matches the precise character count mandated for its origin country. For example, a German IBAN must contain exactly 22 alphanumeric characters, a French IBAN 27, a British IBAN 22, and a Polish IBAN 28. If the character count is incorrect or contains forbidden symbols (such as punctuation or non-Latin glyphs), validation fails immediately.\n\n2. **Front-to-Back Rearrangement**: The first four characters of the IBAN—consisting of the two-letter ISO 3166-1 country code and the two-digit check characters—are moved to the absolute end of the string. For example, the German IBAN `DE89 3704 0044 0532 0130 00` becomes `370400440532013000DE89`.\n\n3. **Alphanumeric to Integer Expansion**: Every letter in the rearranged string is replaced with two decimal digits based on its ordinal position in the Latin alphabet: A equals 10, B equals 11, C equals 12, progressing sequentially through Z which equals 35. In our German example, `D` converts to `13` and `E` converts to `14`, yielding a massive integer: `370400440532013000131489`.\n\n4. **Modular Arithmetic Evaluation**: Because numbers with up to 34 digits exceed standard 32-bit and 64-bit machine integer capacities, the validator applies piece-wise modular division by 97. If and only if the final mathematical remainder of this massive integer divided by 97 is equal to 1, the IBAN is mathematically verified as authentic and error-free.',
    },
    {
      id: 'iban-anatomy-structure',
      title: 'Anatomy of an IBAN: Country Code, Check Digits, and the BBAN',
      level: 2,
      content:
        'Every IBAN is divided into two distinct components: the international prefix and the Basic Bank Account Number (BBAN).\n\n- **ISO Country Code (Positions 1–2)**: Two uppercase Latin letters denoting the issuing sovereign jurisdiction according to ISO 3166-1 alpha-2 (e.g., DE for Germany, FR for France, GB for the United Kingdom, RO for Romania).\n- **Check Digits (Positions 3–4)**: Two numerical digits computed via the Mod-97 algorithm. These digits represent the exact redundant checksum calculated when the account was first created by the originating banking institution.\n- **Basic Bank Account Number (BBAN) (Positions 5 to End)**: The BBAN format is defined independently by each national banking authority. It typically contains a bank routing code (such as the Bankleitzahl in Germany, the sort code in the UK, or the code banque in France), an optional branch identifier, the individual customer account number, and frequently a secondary national checksum (such as the French Clé RIB or the Spanish Dígitos de Control).\n\nBecause the BBAN format differs from nation to nation, an IBAN checker must maintain granular knowledge of national routing registers. For instance, in Germany, positions 5 to 12 represent the 8-digit Bankleitzahl (BLZ), which maps directly to the official directory maintained by the Deutsche Bundesbank. In the United Kingdom, positions 5 to 8 contain a 4-character alphabetical bank identifier (such as `NWBK` for NatWest or `LOYD` for Lloyds), followed by a 6-digit sort code and an 8-digit account number.',
    },
    {
      id: 'sepa-vs-international-transfers',
      title: 'SEPA Payments vs. Non-SEPA International Wire Transfers',
      level: 2,
      content:
        'Understanding how your IBAN is utilized depends heavily on whether your transaction travels within the Single Euro Payments Area (SEPA) or across traditional international banking routes like SWIFT.\n\nWithin the 36 European nations comprising the SEPA network, the IBAN acts as the sole identifier necessary for cross-border credit transfers, instant payments (SEPA Instant), and direct debits (SEPA Direct Debit Core and B2B). Under European Regulation (EU) No 260/2012, banks operating within the SEPA zone are legally prohibited from demanding a Bank Identifier Code (BIC/SWIFT) for intra-SEPA euro transfers—a principle known as the "IBAN Only" rule.\n\nConversely, when transmitting funds outside the SEPA perimeter—such as sending a wire from London to New York, Zurich to Singapore, or Frankfurt to Istanbul—both an IBAN and a corresponding SWIFT/BIC code are usually required. The SWIFT code identifies the exact participating financial institution and branch, while the IBAN or account string identifies the recipient ledger within that institution.',
    },
    {
      id: 'preventing-transfer-mistakes',
      title: 'Common IBAN Errors and Practical Verification Guidelines',
      level: 2,
      content:
        'Even with automated checksum validation, financial professionals and individuals must remain vigilant against operational pitfalls:\n\n- **Confusing Character Equivalents**: Optical character recognition (OCR) scanning and manual data entry often confuse the digit 0 with the uppercase letter O, the digit 1 with the uppercase letter I or lowercase l, and the digit 8 with the uppercase letter B. High-quality IBAN checkers automatically strip accidental whitespace and normalize casing.\n- **Truncation and Padding Omissions**: Many banking systems require customer account numbers to be left-padded with zeroes up to a fixed length (e.g., 10 digits in Germany). If a sender enters an 8-digit account number without the two leading zeroes, the resulting IBAN will fail the mandatory length check.\n- **Mathematical Validity vs. Active Account Status**: It is critical to recognize that a successful Mod-97 checksum confirms that an IBAN is structurally and algorithmically valid. However, an algorithm cannot determine whether the account is currently open, in good standing, or authorized to receive wire transfers. To prevent invoice fraud and authorized push payment (APP) scams, businesses should combine algorithmic validation with Confirmation of Payee (CoP) services where available.',
    },
  ],
  examples: [
    {
      title: 'Example 1: Validating a German Deutsche Bank IBAN',
      scenario:
        'A business receives an invoice from a supplier in Frankfurt with the IBAN DE89 3704 0044 0532 0130 00 and needs to verify its mathematical validity and issuing institution.',
      calculationType: 'custom',
      customFields: [
        { label: 'Input IBAN', value: 'DE89 3704 0044 0532 0130 00' },
        { label: 'Country & Length', value: 'Germany (DE) — 22 characters' },
        { label: 'Bankleitzahl (BLZ)', value: '37040044 (Deutsche Bank AG)' },
        { label: 'Account Number', value: '0532013000' },
        { label: 'Rearranged String', value: '370400440532013000DE89' },
        { label: 'Numeric Expansion', value: '370400440532013000131489' },
        { label: 'Modulo 97 Remainder', value: '1 (Valid ISO 7064 Checksum)', highlight: true },
        { label: 'SEPA Status', value: 'Eligible for SEPA Core & Instant' },
      ],
      explanation:
        'The validator moves DE89 to the end, replaces D with 13 and E with 14, and calculates 370400440532013000131489 mod 97. Because the result equals 1, the IBAN is verified as authentic and matches Deutsche Bank AG in the Bundesbank directory.',
    },
    {
      title: 'Example 2: Validating a UK NatWest Bank IBAN',
      scenario:
        'An international client prepares a wire transfer to a London consultancy using the IBAN GB29 NWBK 6016 1331 9268 19.',
      calculationType: 'custom',
      customFields: [
        { label: 'Input IBAN', value: 'GB29 NWBK 6016 1331 9268 19' },
        { label: 'Country & Length', value: 'United Kingdom (GB) — 22 characters' },
        { label: 'Bank Identifier', value: 'NWBK (National Westminster Bank)' },
        { label: 'Sort Code', value: '60-16-13' },
        { label: 'Account Number', value: '31926819' },
        { label: 'Rearranged String', value: 'NWBK60161331926819GB29' },
        { label: 'Modulo 97 Remainder', value: '1 (Valid ISO 7064 Checksum)', highlight: true },
        { label: 'BIC / SWIFT', value: 'NWBKGB2L' },
      ],
      explanation:
        'The validator checks that the UK length is exactly 22 characters, decodes the bank code NWBK to NatWest, isolates sort code 60-16-13, and confirms that the ISO Mod-97 check characters 29 produce an exact remainder of 1.',
    },
  ],
  faqs: [
    {
      q: 'What is an IBAN and what does it stand for?',
      a: 'IBAN stands for International Bank Account Number. It is a globally standardized code of up to 34 alphanumeric characters designed to identify individual bank accounts across international borders and reduce transcription errors in wire payments.',
    },
    {
      q: 'How does the IBAN validation algorithm work?',
      a: 'IBAN validation relies on the ISO 7064 Mod-97-10 algorithm: the first four characters are shifted to the end, letters are converted to two-digit numbers (A=10 to Z=35), and the resulting large number is divided by 97. If the remainder equals 1, the IBAN is valid.',
    },
    {
      q: 'Is it safe to check my IBAN on this website?',
      a: 'Yes, 100% safe. This tool executes all validation logic strictly inside your web browser using client-side JavaScript. Your IBAN is never transmitted across the network, never logged on any server, and never stored in any database.',
    },
    {
      q: 'What is the difference between an IBAN and a BIC / SWIFT code?',
      a: 'An IBAN identifies a specific individual bank account at a financial institution. A BIC (Bank Identifier Code) or SWIFT code identifies the financial institution itself and its operational branch in international clearing networks.',
    },
    {
      q: 'Can a valid IBAN still bounce or be rejected?',
      a: 'Yes. An IBAN validator confirms that the number is structurally and mathematically authentic according to official standards. However, it cannot verify whether the account is currently active, frozen, closed, or permitted to receive international wires.',
    },
    {
      q: 'Do banks in the United States use IBAN?',
      a: 'No. Financial institutions in the United States do not issue IBANs for domestic accounts. Instead, US banks use 9-digit ABA routing transit numbers and domestic account numbers. For inbound wires from abroad, US banks utilize SWIFT/BIC codes.',
    },
    {
      q: 'How many characters are in an IBAN?',
      a: 'The length of an IBAN varies by country but can never exceed 34 alphanumeric characters. For example, Norway has one of the shortest IBANs at 15 characters, Germany has 22, France has 27, and Malta has one of the longest at 31 characters.',
    },
    {
      q: 'What are the two digits after the country code in an IBAN?',
      a: 'Those two digits are the ISO 7064 check characters. They are calculated dynamically using the Mod-97 algorithm when the account is generated to provide built-in error detection against typing mistakes.',
    },
    {
      q: 'What is the "IBAN Only" rule in the SEPA zone?',
      a: 'Under EU Regulation No 260/2012, payment service providers within the Single Euro Payments Area (SEPA) are prohibited from requiring customers to provide a BIC/SWIFT code for intra-SEPA euro transfers. The IBAN alone is sufficient.',
    },
    {
      q: 'Can I check multiple IBANs at the same time?',
      a: 'Yes. Our tool supports bulk validation for up to 50 IBANs simultaneously. Paste a list of IBANs separated by new lines to view validation badges, bank names, and exportable summaries instantly.',
    },
  ],
  sources: [
    {
      label: 'SWIFT: Official International IBAN Registry',
      url: 'https://www.swift.com/standards/data-standards/iban',
    },
    {
      label: 'International Organization for Standardization: ISO 13616:2020',
      url: 'https://www.iso.org/standard/72570.html',
    },
    {
      label: 'European Central Bank (ECB): SEPA Standards & Regulations',
      url: 'https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html',
    },
    {
      label: 'Deutsche Bundesbank: Bankleitzahlen und Prüfzifferberechnung',
      url: 'https://www.bundesbank.de/de/aufgaben/unbarer-zahlungsverkehr/serviceangebot/bankleitzahlen',
    },
  ],
  relatedTools: [
    {
      title: 'BIC / SWIFT Code Validator',
      slug: 'bic-swift-checker',
      description: 'Validate 8 or 11 character ISO 9362 BIC codes and identify bank headquarters.',
      category: 'Banking',
    },
    {
      title: 'German BLZ Search & Bank Directory',
      slug: 'de/blz-suche',
      description: 'Look up 8-digit German bank routing numbers in the official Bundesbank database.',
      category: 'Banking',
    },
    {
      title: 'UK VAT Calculator',
      slug: 'vat-calculator',
      description: 'Calculate 20% and 5% UK Value Added Tax with itemized invoice breakdowns.',
      category: 'Tax & VAT',
    },
    {
      title: 'German MwSt Rechner',
      slug: 'de/mwst-rechner',
      description: 'Add or remove 19% standard and 7% reduced German sales tax with decimal precision.',
      category: 'Tax & VAT',
    },
  ],
  relatedGuides: [
    {
      title: 'What Is an IBAN? Complete Guide to International Bank Numbers',
      slug: 'guides/what-is-an-iban',
      description: 'Learn the history, structure, and global adoption of the IBAN standard.',
      category: 'Banking',
    },
    {
      title: 'IBAN vs SWIFT / BIC: Key Differences Explained',
      slug: 'guides/iban-vs-swift-bic',
      description: 'Understand when you need an IBAN, a SWIFT code, or both for international wires.',
      category: 'Banking',
    },
    {
      title: 'How to Find Your IBAN and Bank Details Safely',
      slug: 'guides/how-to-find-your-iban',
      description: 'Find your IBAN on paper statements, banking apps, and debit cards.',
      category: 'Banking',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'This IBAN validation tool is provided for informational and preliminary checking purposes only. While it performs comprehensive ISO 13616 and ISO 7064 mathematical verification, it cannot verify account ownership, active account status, or account holder names. Always confirm banking details directly with your financial institution or the intended beneficiary before initiating high-value wire transfers.',
};
