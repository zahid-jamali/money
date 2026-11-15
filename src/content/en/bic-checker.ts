import { PageContent } from '../types';

export const bicCheckerEn: PageContent = {
  metaTitle: 'BIC / SWIFT Code Checker 2026 | Validate & Decode SWIFT Codes',
  metaDescription:
    'Free online BIC / SWIFT code validator and decoder. Check 8- and 11-character SWIFT codes instantly with ISO 9362 4-part breakdown and bank verification.',
  h1: 'BIC & SWIFT Code Validator (ISO 9362 Checker)',
  quickAnswer:
    'A BIC (Business Identifier Code), also known as a SWIFT code, is an 8- or 11-character international code defined by ISO 9362 that uniquely identifies a financial institution worldwide. It consists of a 4-letter bank code, 2-letter country code, 2-character location code, and an optional 3-character branch code (or "XXX" for the primary head office).',
  howItWorks: [
    {
      label: '1. Bank Code (Characters 1–4)',
      formula: '4 alphabetical letters uniquely identifying the bank (e.g., "DEUT" for Deutsche Bank, "BNPA" for BNP Paribas)',
      ruleCitation: 'ISO 9362 / SWIFT Registration Authority',
      effectiveDate: 'Global ISO Standard',
    },
    {
      label: '2. Country Code (Characters 5–6)',
      formula: '2 alphabetical letters representing the ISO 3166-1 alpha-2 country (e.g., "DE" for Germany, "GB" for United Kingdom)',
      ruleCitation: 'ISO 3166-1 alpha-2 standard',
      effectiveDate: 'Worldwide identification',
    },
    {
      label: '3. Location Code (Characters 7–8)',
      formula: '2 alphanumeric characters indicating the city or regional operational hub (e.g., "DB" for Frankfurt, "22" for London)',
      ruleCitation: 'ISO 9362 Section 4',
      effectiveDate: 'Routing identifier',
    },
    {
      label: '4. Branch Code (Characters 9–11, Optional)',
      formula: '3 alphanumeric characters identifying a specific branch or department; "XXX" or omitted indicates the main head office',
      ruleCitation: 'ISO 9362 Section 5',
      effectiveDate: 'Optional 11-character format',
    },
  ],
  articleSections: [
    {
      id: 'what-is-a-bic-swift-code',
      title: 'What is a BIC / SWIFT Code? (ISO 9362 Standard)',
      level: 2,
      content:
        'A **BIC (Business Identifier Code)**, historically and colloquially termed a **SWIFT code**, is an international standard format for identifying financial institutions, brokerages, and non-financial institutions participating in global financial messaging. The standard is managed and governed by the **International Organization for Standardization (ISO)** under standard **ISO 9362**, with the Society for Worldwide Interbank Financial Telecommunication (SWIFT) acting as the official designated Registration Authority.\n\n' +
        'Whenever money travels across international borders or between different clearing networks, clearing houses and messaging protocols require an unambiguous address to direct funds. While an IBAN (International Bank Account Number) designates the specific individual account within a bank, the BIC specifies the recipient institution that holds the account.',
    },
    {
      id: 'four-part-structure-breakdown',
      title: 'The 4-Part Structure of an 8- and 11-Character BIC',
      level: 2,
      content:
        'Every valid BIC consists of either 8 characters (designating the institution as a whole) or 11 characters (designating a specific branch or operational department):\n\n' +
        '**1. Institution Code / Bank Code (4 letters)**\n' +
        'The first four characters are always uppercase letters representing the bank’s name or brand abbreviation. For example:\n' +
        '- `DEUT` → Deutsche Bank\n' +
        '- `COBA` → Commerzbank\n' +
        '- `BARC` → Barclays Bank\n' +
        '- `BNPA` → BNP Paribas\n' +
        '- `CHAS` → JPMorgan Chase\n\n' +
        '**2. Country Code (2 letters)**\n' +
        'Characters 5 and 6 consist of the two-letter ISO 3166-1 alpha-2 country code where the institution is legally chartered (e.g., `DE` for Germany, `FR` for France, `GB` for the United Kingdom, `US` for the United States).\n\n' +
        '**3. Location Code (2 alphanumeric characters)**\n' +
        'Characters 7 and 8 pinpoint the geographic city or administrative hub of the institution. If the second character is `0`, it indicates a test BIC; if the second character is `1`, it denotes a passive participant not directly connected to the live SWIFT network.\n\n' +
        '**4. Branch Code (3 alphanumeric characters, Optional)**\n' +
        'Characters 9 through 11 identify an individual branch office or business unit. When an institution operates with a primary head office, this component is either omitted (yielding an 8-character code) or explicitly written as `XXX` (yielding an 11-character code). Both `DEUTDEDB` and `DEUTDEDBXXX` refer to the identical primary institution.',
    },
    {
      id: 'bic-vs-iban-differences',
      title: 'BIC vs. IBAN: Key Differences and When Each is Required',
      level: 2,
      content:
        'Understanding the distinction between an IBAN and a BIC is essential for anyone initiating domestic or international wire transfers:\n\n' +
        '- **IBAN (International Bank Account Number)** identifies an **individual bank account**. It begins with a country code, includes check digits, bank identifiers, and the specific account holder number (up to 34 characters).\n' +
        '- **BIC / SWIFT Code** identifies the **bank or branch entity**, not the customer. It tells the payment network where to deliver the funds.\n\n' +
        'In the European Union and the wider SEPA (Single Euro Payments Area) zone, the **"IBAN-Only" regulation (EU Regulation 260/2012)** eliminated the legal requirement for consumers to provide a BIC for domestic and cross-border Euro transactions. European payment systems derive the correct recipient bank routing automatically from the national bank code embedded inside the IBAN.\n\n' +
        'However, for **international wires outside SEPA** (such as sending money to the United States, United Kingdom, Canada, Australia, Asia, or Latin America) or transfers conducted in **non-Euro currencies** (such as USD, GBP, CHF), providing the full SWIFT/BIC code is mandatory to route messages across the SWIFT interbank network.',
    },
    {
      id: 'swift-network-and-iso-20022',
      title: 'How SWIFT Messaging Operates & The ISO 20022 Migration',
      level: 2,
      content:
        'The SWIFT network does not actually hold or transfer funds itself; instead, it transmits secure, standardized financial instructions (traditionally MT messages such as MT103 for customer credit transfers). When Bank A in Frankfurt sends a wire to Bank B in New York, SWIFT delivers an encrypted MT103 or modern ISO 20022 `pacs.008` message containing sender info, beneficiary account, and intermediary correspondent banks.\n\n' +
        'The global financial industry is undergoing the **ISO 20022 migration**, transitioning legacy MT messaging formats to rich XML-based schemas. In the ISO 20022 framework, BIC codes remain the primary organizational identifier (`AnyBIC`), accompanied by Legal Entity Identifiers (LEIs) and structured address elements for enhanced anti-money laundering (AML) and sanctions screening compliance.',
    },
    {
      id: 'troubleshooting-invalid-bic',
      title: 'Common Validation Errors and How to Prevent Failed Wires',
      level: 2,
      content:
        'A failed or rejected international wire transfer often incurs heavy bank investigation fees ($25 to $50+) and days of delay. Here are the primary reasons a BIC is rejected:\n\n' +
        '- **Incorrect Length**: A BIC must be exactly 8 or 11 characters. Entering 9 or 10 characters indicates an incomplete entry.\n' +
        '- **Confusing Letters and Digits**: Common typographical errors include confusing the digit zero (`0`) with uppercase letter `O`, or digit one (`1`) with uppercase `I` or lowercase `l`.\n' +
        '- **Inactive Branch Codes**: Some regional bank branches close or consolidate, rendering their specific 3-digit branch code inactive on the SWIFT directory. When in doubt, using the head office code ending in `XXX` is the safest course of action, as headquarters automatically route funds to customer accounts.',
    },
  ],
  examples: [
    {
      title: 'Example 1: Deutsche Bank Head Office (Frankfurt)',
      scenario:
        'An international supplier in the United States needs to wire payment to a German corporate account at Deutsche Bank in Frankfurt.',
      calculationType: 'custom',
      customFields: [
        { label: 'SWIFT / BIC Code', value: 'DEUTDEDBXXX', highlight: true },
        { label: 'Bank Code (Chars 1–4)', value: 'DEUT (Deutsche Bank)' },
        { label: 'Country Code (Chars 5–6)', value: 'DE (Germany)' },
        { label: 'Location Code (Chars 7–8)', value: 'DB (Frankfurt am Main)' },
        { label: 'Branch Code (Chars 9–11)', value: 'XXX (Head Office / Primary)' },
        { label: 'Valid ISO 9362', value: 'Yes, 11 Characters', highlight: true },
      ],
      explanation:
        'DEUTDEDBXXX is the 11-character primary head office BIC for Deutsche Bank in Frankfurt am Main, Germany. The "XXX" suffix explicitly indicates the central corporate headquarters.',
    },
    {
      title: 'Example 2: BNP Paribas 8-Character Primary Code (Paris)',
      scenario:
        'A freelancer in the UK needs to verify the recipient bank code for a French client banking with BNP Paribas in Paris.',
      calculationType: 'custom',
      customFields: [
        { label: 'SWIFT / BIC Code', value: 'BNPAPRPP', highlight: true },
        { label: 'Bank Code (Chars 1–4)', value: 'BNPA (BNP Paribas)' },
        { label: 'Country Code (Chars 5–6)', value: 'FR (France)' },
        { label: 'Location Code (Chars 7–8)', value: 'PP (Paris)' },
        { label: 'Branch Code', value: 'Omitted (Implicit Head Office)' },
        { label: 'Valid ISO 9362', value: 'Yes, 8 Characters', highlight: true },
      ],
      explanation:
        'BNPAPRPP is the 8-character format of the primary BIC for BNP Paribas in Paris, France. When characters 9–11 are omitted, payment systems treat it identically to BNPAPRPPXXX.',
    },
  ],
  faqs: [
    {
      q: 'What is the difference between a BIC and a SWIFT code?',
      a: 'There is no practical difference; the two terms are used interchangeably. BIC (Business Identifier Code) is the official ISO 9362 standard name, while SWIFT code refers to the Society for Worldwide Interbank Financial Telecommunication, which administers the registry.',
    },
    {
      q: 'Can a BIC code be 8 characters long?',
      a: 'Yes. A BIC code can be either 8 characters (referring to the primary head office) or 11 characters (referring to a specific branch or department, or ending in XXX for head office). Both formats are valid under ISO 9362.',
    },
    {
      q: 'Do I need a BIC for a SEPA transfer in Euros?',
      a: 'In most cases, no. Under EU Regulation 260/2012 ("IBAN-Only"), European banks automatically derive the recipient institution from the IBAN for Euro payments within the SEPA zone. However, transfers outside SEPA or in foreign currencies still require a BIC.',
    },
    {
      q: 'Where do I find my bank’s BIC / SWIFT code?',
      a: 'You can locate your BIC on your physical bank statements, within your online banking dashboard or mobile app under account details, or by using our free BIC lookup tool.',
    },
    {
      q: 'What happens if I enter the wrong BIC / SWIFT code?',
      a: 'If the entered BIC does not exist, most online banking portals will reject the transfer immediately. If the BIC exists but belongs to the wrong bank, the transfer may be delayed, returned with processing deduction fees, or misrouted.',
    },
    {
      q: 'What do the letters "XXX" at the end of a BIC mean?',
      a: 'The "XXX" suffix in an 11-character BIC explicitly denotes the institution’s primary headquarters or central operations centre, distinguishing it from specific branch codes.',
    },
    {
      q: 'Are BIC codes case-sensitive?',
      a: 'No. While BIC codes are traditionally rendered in uppercase letters, payment processing systems convert lowercase letters to uppercase automatically.',
    },
    {
      q: 'Is this BIC checker tool free and secure?',
      a: 'Yes, this tool is 100% free and client-side secure. No bank details or confidential data are transmitted or stored on external servers.',
    },
  ],
  sources: [
    {
      label: 'SWIFT: The Global Provider of Secure Financial Messaging Services',
      url: 'https://www.swift.com',
    },
    {
      label: 'ISO 9362: Banking — Banking telecommunication messages — Business identifier code (BIC)',
      url: 'https://www.iso.org/standard/60390.html',
    },
    {
      label: 'European Central Bank (ECB): Single Euro Payments Area (SEPA)',
      url: 'https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html',
    },
  ],
  relatedTools: [
    {
      title: 'IBAN Checker & Validator',
      slug: 'iban-checker',
      description:
        'Validate international IBANs across 60+ countries with MOD-97 check digits.',
      category: 'Banking',
    },
    {
      title: 'German BLZ Search & Directory',
      slug: 'de/blz-suche',
      description:
        'Look up German bank codes, BICs, and branches from official Bundesbank data.',
      category: 'Banking',
    },
    {
      title: 'German IBAN Calculator',
      slug: 'de/iban-rechner',
      description:
        'Calculate German IBAN and BIC from account number and 8-digit BLZ.',
      category: 'Banking',
    },
  ],
  relatedGuides: [
    {
      title: 'Guide: What is an IBAN and How Does It Work?',
      slug: 'guides/what-is-an-iban',
      description:
        'Complete breakdown of the International Bank Account Number standard.',
      category: 'Banking',
    },
    {
      title: 'Guide: IBAN vs SWIFT / BIC Explained',
      slug: 'guides/iban-vs-swift-bic',
      description:
        'Learn the structural differences between account routing and institution identifiers.',
      category: 'Banking',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'This BIC / SWIFT validator verifies format compliance according to ISO 9362. Always confirm international payment instructions with the beneficiary before executing large fund transfers.',
};
