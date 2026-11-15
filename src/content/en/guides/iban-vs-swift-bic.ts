import { GuideContent } from '../../types';

export const guideIbanVsSwiftBicEn: GuideContent = {
  metaTitle: 'IBAN vs SWIFT/BIC: Key Differences & Wire Transfer Guide 2026',
  metaDescription:
    'Understand the critical differences between IBAN and SWIFT/BIC codes. Learn when you need both, ISO standards, SEPA rules, and how to avoid transfer delays.',
  h1: 'IBAN vs. SWIFT/BIC: The Definitive Guide to Banking Routing Codes',
  intro:
    'While both IBAN and SWIFT/BIC codes are indispensable for international money transfers, they serve fundamentally different functions: an IBAN (ISO 13616) identifies a specific customer account within a bank, whereas a SWIFT/BIC code (ISO 9362) identifies the financial institution and branch routing network. Knowing when you need one, both, or neither saves you from costly wire transfer delays and bank repair surcharges.',
  readTimeMinutes: 8,
  articleSections: [
    {
      id: 'core-differences-overview',
      title: 'The Fundamental Distinction: Account vs. Institution',
      level: 2,
      content:
        'When transferring money across international borders, banking systems rely on two distinct layers of identification: where the bank is located globally, and which specific customer account should be credited once the funds arrive.\n\n- **IBAN (International Bank Account Number)**: Identifies the **exact individual or commercial account**. Standardized under ISO 13616, it starts with a country code, followed by mathematical check digits, national bank identifiers, and the recipient\'s unique account number. Think of the IBAN as the complete street address and apartment number of your financial home.\n- **SWIFT / BIC (Business Identifier Code)**: Identifies the **financial institution itself**. Standardized under ISO 9362 and maintained globally by SWIFT (Society for Worldwide Interbank Financial Telecommunication), it routes financial messages between member banks across the global interbank network. Think of the SWIFT/BIC as the international postal code or airport code directing money to the correct sorting hub.',
    },
    {
      id: 'swift-bic-structure-breakdown',
      title: 'Anatomy and Structure of a SWIFT / BIC Code (ISO 9362)',
      level: 2,
      content:
        'A SWIFT code (officially termed a Business Identifier Code or BIC) consists of either **8 or 11 alphanumeric characters** arranged in a strict four-part hierarchy:\n\n1. **Institution / Bank Code (4 letters)**: Uniquely identifies the financial institution (e.g., `BARC` for Barclays, `DEUT` for Deutsche Bank, `BNPA` for BNP Paribas, `CHAS` for JPMorgan Chase).\n2. **Country Code (2 letters)**: The ISO 3166-1 alpha-2 code indicating the country of the bank\'s headquarters (e.g., `GB` for the United Kingdom, `DE` for Germany, `US` for the United States, `FR` for France).\n3. **Location Code (2 letters or numbers)**: Identifies the city or regional operating center (e.g., `22` for London, `FF` for Frankfurt, `33` for Paris).\n4. **Branch Code (3 optional characters)**: Specifies a designated subsidiary branch or operational desk. If an institution uses an 8-character code, or if the 3-character branch code is `XXX`, it denotes the bank\'s primary head office (e.g., `BARCGB22XXX` is equivalent to `BARCGB22`).\n\nUnlike an IBAN, which contains variable customer account numbers, a SWIFT/BIC code never changes from customer to customer within the same bank branch.',
    },
    {
      id: 'side-by-side-comparison',
      title: 'Side-by-Side Comparison: IBAN vs. SWIFT/BIC',
      level: 2,
      content:
        'The operational parameters of both banking identifiers can be contrasted across their primary dimensions:\n\n- **Standardization**: IBAN is governed by ISO 13616; SWIFT/BIC is governed by ISO 9362.\n- **Global Registration Authority**: IBAN format specifications are registered by SWIFT; BIC codes are assigned and maintained exclusively by the SWIFT organization in La Hulpe, Belgium.\n- **Character Length**: IBAN ranges from 15 to 33 alphanumeric characters (fixed length per country); SWIFT/BIC is strictly 8 or 11 uppercase letters and numbers.\n- **Scope of Identification**: IBAN designates individual personal or corporate accounts; SWIFT/BIC designates banks, broker-dealers, clearing houses, and corporate treasuries.\n- **Primary Territory**: IBAN is standard across Europe, the Middle East, parts of North Africa, Central Asia, and Latin America (over 80 countries); SWIFT/BIC is universal and used in over 200 countries and territories worldwide, including the United States, Canada, and Australia.\n- **Error Detection**: IBAN features an embedded MOD-97 mathematical checksum on digits 3 and 4; SWIFT/BIC relies on directory validation against the official SWIFT BIC Directory.',
    },
    {
      id: 'when-you-need-what',
      title: 'When Do You Need an IBAN, a SWIFT/BIC, or Both?',
      level: 2,
      content:
        'The specific details required on an international wire instruction depend entirely on the clearing corridor and currency involved:\n\n### Scenario 1: Intra-SEPA Euro Transfers (IBAN Only)\nUnder European Union Regulation (EU) No 260/2012, banks operating within the Single Euro Payments Area (covering all 27 EU nations plus the UK, Switzerland, and Norway) operate under the **"IBAN-Only" rule**. You only need the recipient\'s IBAN. Banks are legally prohibited from mandating a SWIFT/BIC for SEPA credit transfers, as the routing code is algorithmically extracted from the IBAN string.\n\n### Scenario 2: Traditional International Wires Outside SEPA (Both Needed)\nWhen sending money between non-SEPA territories (e.g., sending British Pounds or Euros from London to a supplier in Dubai or Riyadh), you typically must provide **both the recipient\'s IBAN and the recipient bank\'s SWIFT/BIC** to ensure the wire routes through the SWIFT MT103 messaging network and settles into the exact beneficiary account.\n\n### Scenario 3: Wires to Countries Without IBANs (e.g., USA, Canada, Australia)\nWhen transferring funds to jurisdictions that do not use IBANs for domestic banking:\n- **United States**: You need the bank\'s SWIFT/BIC code plus the recipient\'s domestic account number and the bank\'s 9-digit ABA routing transit number.\n- **Australia**: You need the SWIFT/BIC code plus the 6-digit BSB (Bank State Branch) code and account number.\n- **Canada**: You need the SWIFT/BIC code plus the 3-digit financial institution number, 5-digit transit number, and account number.',
    },
    {
      id: 'intermediary-banks-and-wire-fees',
      title: 'Correspondent Banks and How Missing Codes Trigger Fees',
      level: 2,
      content:
        'When transferring money between two international banks that lack a direct reciprocal bilateral clearing account, the payment must route through one or more **intermediary or correspondent banks** via the SWIFT network.\n\nProviding an incorrect SWIFT/BIC or omitting critical routing data triggers several costly complications:\n1. **Manual Repair Fees**: Clearing banks levy statutory manual intervention surcharges (often ranging from £15 to £40 or $25 to $50) to manually re-key and investigate flawed wire instructions.\n2. **Payment Delays**: Instead of settling within hours or the same business day, wires held for manual exception handling can take 5 to 10 business days to clear.\n3. **Rejection and Liquidity Lockup**: If the intermediary cannot determine the receiving bank branch, the wire is returned minus non-refundable processing charges and unfavorable reciprocal currency conversion spreads.\n\n### SWIFT Fee Charging Instructions: OUR, BEN, and SHA\nWhen initiating a cross-border wire over SWIFT, you must select one of three standardized settlement charging models:\n- **OUR**: The sending party pays all transfer fees. The originating bank charges the sender upfront, and correspondent banks deduct their fees from the sender\'s account, ensuring the beneficiary receives the full, exact payment amount.\n- **BEN (Beneficiary)**: The receiving party pays all costs. Originating, intermediary, and receiving banks deduct their handling fees directly from the principal wire amount along the transfer chain. The recipient receives a net amount reduced by intermediate fees.\n- **SHA (Shared)**: The standard and most common default. The sender pays the origination charges at their own bank, while all correspondent transit deductions and beneficiary receipt charges are absorbed by or deducted from the recipient.',
    },
    {
      id: 'iso-20022-swift-evolution',
      title: 'The ISO 20022 Revolution: Replacing MT Messages with XML',
      level: 2,
      content:
        'The global interbank landscape is undergoing its most radical transformation in fifty years: the migration from legacy SWIFT MT (Message Type) formats (such as MT103 single customer credit transfers) to rich, structured XML messages under **ISO 20022 (MX messages)**, specifically `pacs.008` for customer credit transfers.\n\nUnder legacy MT103 messages, field length restrictions often forced banks to truncate names, street addresses, and payment references. This truncation caused automated Sanctions and Anti-Money Laundering (AML) monitoring systems to generate false positives, freezing harmless transactions for manual compliance review.\n\nWith ISO 20022 and structured IBAN validation:\n- **Granular Party Identifiers**: Legal entity identifiers (LEI), exact ultimate debtor and creditor information, and postal details are compartmentalized in dedicated XML tags.\n- **End-to-End Straight-Through Processing (STP)**: Because the IBAN format algorithmically guarantees the branch and account validity, and ISO 20022 conveys standardized routing data, straight-through processing rates surpass 99%, dramatically reducing settlement times from days to seconds.\n- **SWIFT gpi (Global Payments Innovation)**: Modern cross-border transfers incorporate a Unique End-to-End Transaction Reference (UETR), allowing senders and corporate treasuries to track the exact real-time progress of their funds through intermediary banks, exactly like tracking an international courier parcel.',
    },
    {
      id: 'how-to-verify-before-sending',
      title: 'Best Practices for Verifying Account Codes Before Transferring',
      level: 2,
      content:
        'Before authorizing any international wire transfer of significant value, follow this verification checklist:\n- **Check IBAN Length and Checksum**: Run the recipient\'s IBAN through an automated MOD-97 validator to confirm that character counts and mathematical check digits match the country\'s statutory standard.\n- **Confirm 8 vs. 11 Character BIC**: Verify whether the recipient\'s branch requires an 11-character code or if the 8-character head office code is accepted.\n- **Verify Currency Pairing**: Ensure the recipient account is denominated in the currency you are transmitting, or understand the recipient bank\'s foreign exchange markup to prevent unexpected deductions.\n- **Double-Check Confirmation of Payee (CoP)**: When sending money to the UK or the EU, verify the legal name of the account holder alongside the numerical routing identifiers to thwart authorized push payment (APP) invoice fraud.',
    },
  ],
  faqs: [
    {
      q: 'Is a SWIFT code the same thing as a BIC code?',
      a: 'Yes. The terms SWIFT code and BIC (Business Identifier Code) are used interchangeably throughout the global banking industry. SWIFT is the governing organization; BIC is the technical name under ISO 9362.',
    },
    {
      q: 'Does an IBAN replace a SWIFT code?',
      a: 'Within the European SEPA zone, yes—transfers require only the IBAN under the EU IBAN-only rule. For international transfers outside SEPA (such as to the US, Asia, or between non-SEPA currencies), you still need both.',
    },
    {
      q: 'Does the United States have IBAN numbers?',
      a: 'No. Banks in the United States do not issue IBANs. US banking relies on 9-digit ABA routing transit numbers for domestic transfers and SWIFT/BIC codes for international wires.',
    },
    {
      q: 'Can a SWIFT code have numbers in it?',
      a: 'Yes. Positions 7 and 8 of a SWIFT code (the location code) can contain numbers as well as letters (for example, CHASUS33 or BARCGB22). Positions 1–6 are always letters.',
    },
    {
      q: 'What is the difference between an 8-character and an 11-character BIC?',
      a: 'An 8-character BIC identifies the primary head office of a bank. An 11-character BIC includes an additional 3-character branch code identifying a specific local office or department.',
    },
    {
      q: 'Can I find a bank\'s SWIFT code from the recipient\'s IBAN?',
      a: 'Yes. Because the IBAN embeds the national bank code within positions 5 onwards, modern lookup tools and banking systems can automatically deduce the primary SWIFT/BIC from a valid IBAN.',
    },
    {
      q: 'What happens if I enter the correct IBAN but the wrong SWIFT code?',
      a: 'If the transfer is within SEPA, the payment will typically succeed because SEPA routes by IBAN. In non-SEPA transfers, the wire will be rejected or delayed while intermediary banks resolve the routing conflict.',
    },
    {
      q: 'Where do I find my bank\'s SWIFT/BIC code?',
      a: 'Your bank\'s SWIFT/BIC code is displayed in your mobile banking app under account settings, on your formal monthly bank statements, and on your bank\'s official website.',
    },
  ],
  sources: [
    {
      label: 'SWIFT: Official ISO 9362 BIC Directory and Data Standards',
      url: 'https://www.swift.com/standards/data-standards/bic',
    },
    {
      label: 'International Organization for Standardization: ISO 9362 (BIC)',
      url: 'https://www.iso.org/standard/60390.html',
    },
    {
      label: 'European Payments Council (EPC): SEPA "IBAN-Only" Guidelines',
      url: 'https://www.europeanpaymentscouncil.eu',
    },
    {
      label: 'Bank for International Settlements (BIS): Committee on Payments and Market Infrastructures',
      url: 'https://www.bis.org/cpmi/',
    },
  ],
  cta: {
    title: 'Validate SWIFT / BIC Routing Codes Instantly',
    description:
      'Check 8-character and 11-character BIC codes, institution names, city locations, and ISO 9362 syntax.',
    buttonText: 'Open BIC Checker Tool',
    buttonHref: '/bic-swift-checker/',
    badge: 'Free Routing Tool',
  },
  relatedTools: [
    {
      title: 'SWIFT / BIC Routing Checker',
      slug: 'bic-swift-checker',
      description: 'Look up bank codes, city locations, and active status in the global ISO 9362 directory.',
      category: 'Banking',
    },
    {
      title: 'IBAN Validator & Checksum Tool',
      slug: 'iban-checker',
      description: 'Verify IBAN formats, MOD-97 check digits, and extract bank routing codes.',
      category: 'Banking',
    },
  ],
  relatedGuides: [
    {
      title: 'What is an IBAN? Structure & Validation Guide',
      slug: 'guides/what-is-an-iban',
      description: 'Comprehensive guide to International Bank Account Numbers and SEPA integration.',
      category: 'Banking Guides',
    },
    {
      title: 'How to Find Your IBAN: UK, DE, FR, ES, IT & NL',
      slug: 'guides/how-to-find-your-iban',
      description: 'Locate your IBAN on statements, mobile apps, and debit cards across Europe.',
      category: 'Banking Guides',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'This guide is compiled for informational and financial literacy purposes. Always confirm international payment instructions and routing codes directly with your bank prior to transmitting large funds.',
};
