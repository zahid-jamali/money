import { GuideContent } from '../../types';

export const guideWhatIsAnIbanEn: GuideContent = {
  metaTitle: 'What is an IBAN? Structure, Format & Validation Guide 2026',
  metaDescription:
    'Comprehensive guide to International Bank Account Numbers (IBAN). Learn ISO 13616 format, MOD-97 check digits, SEPA wire rules, and account safety.',
  h1: 'What is an IBAN? The Complete International Bank Account Number Guide',
  intro:
    'An International Bank Account Number (IBAN) is an internationally agreed ISO 13616 identifier that uniquely routes cross-border payments across more than 80 countries worldwide. Comprising a 2-letter country code, 2 check digits calculated via MOD-97, and up to 30 alphanumeric characters identifying the bank branch and individual account, IBANs prevent routing mistakes and ensure straight-through processing.',
  readTimeMinutes: 9,
  articleSections: [
    {
      id: 'what-is-an-iban-definition',
      title: 'What Exactly is an IBAN and Why Was It Created?',
      level: 2,
      content:
        'The International Bank Account Number (IBAN) is an internationally standardized alphanumeric code designed to identify bank accounts across national boundaries with zero ambiguity. Originally formulated by the European Committee for Banking Standards (ECBS) and subsequently ratified globally as International Standard ISO 13616, the IBAN system transformed international wire transfers from a fragile, error-prone manual process into a fully automated digital workflow.\n\nBefore the adoption of the IBAN, sending money across borders required knowing distinct national banking identifiers that varied wildly by country. The United Kingdom relied on 6-digit sort codes and 8-digit account numbers; Germany utilized 8-digit Bankleitzahlen (BLZ) and 10-digit Kontonummern; France employed 5-digit code banque, 5-digit code guichet, and a 2-digit clé RIB; while the United States used 9-digit ABA routing transit numbers. Cross-border bank clerks frequently misread or mistyped account details, causing international wires to bounce, sit in suspense accounts for weeks, or incur hefty manual repair fees.\n\nTo solve this systemic friction, the IBAN harmonized every domestic account into a unified format that retains national routing data while embedding a mathematical validation checksum at the beginning of the string.',
    },
    {
      id: 'iban-structure-breakdown',
      title: 'The Anatomy and Structure of an IBAN (ISO 13616)',
      level: 2,
      content:
        'An IBAN can contain up to 34 alphanumeric characters (though no country currently uses more than 33). Every valid IBAN follows a strictly defined four-part sequence:\n\n1. **Country Code (Positions 1–2)**: Two uppercase letters representing the ISO 3166-1 alpha-2 country where the account resides (e.g., `GB` for the United Kingdom, `DE` for Germany, `FR` for France, `ES` for Spain, `CH` for Switzerland).\n2. **Check Digits (Positions 3–4)**: Two numerical digits between 02 and 98 generated through the MOD-97 algorithm (ISO 7064). These digits act as a built-in cryptographic safeguard against typographical and transposition errors.\n3. **National Bank Code / Branch Identifier (Positions 5+)**: Identifies the specific commercial bank, building society, or credit union where the account is held (e.g., sort code in the UK, BLZ in Germany, BIC segment in the Netherlands).\n4. **Account Number**: The customer\'s specific account identifier, padded with leading zeroes to ensure fixed string length across all accounts within that country.\n\n### Character Length Varies by Country\nWhile the internal sequence is globally standardized, the total character length is fixed uniquely per country:\n- **Norway (NO)**: 15 characters (the shortest in Europe)\n- **Belgium (BE)**: 16 characters\n- **Netherlands (NL)**: 18 characters\n- **Austria (AT)**: 20 characters\n- **Germany (DE)**: 22 characters\n- **United Kingdom (GB)**: 22 characters\n- **Spain (ES)**: 24 characters\n- **France (FR)**: 27 characters\n- **Italy (IT)**: 27 characters\n- **Poland (PL)**: 28 characters\n- **Malta (MT)**: 31 characters\n- **Saint Lucia (LC)**: 32 characters',
    },
    {
      id: 'how-mod-97-validation-works',
      title: 'How the MOD-97 Checksum Mathematical Algorithm Works',
      level: 2,
      content:
        'The mathematical cornerstone of the IBAN standard is the **MOD-97-10 algorithm** (governed by ISO 7064). Whenever a banking system, mobile app, or payment gateway processes an IBAN, it validates the string before sending funds into clearing networks. If a single digit is transposed or mistyped, the checksum fails with a 99.9% statistical detection rate.\n\n### The 5-Step Mathematical Verification Procedure:\n1. **Format Check**: Verify that the string matches the country\'s official regex pattern (letters and numbers only, no special symbols) and exact statutory length.\n2. **Rearrange Characters**: Move the first four characters (the 2-letter country code and 2 check digits) to the far right end of the string.\n3. **Convert Letters to Numbers**: Replace every letter with its corresponding 2-digit numerical value where $A = 10, B = 11, C = 12, \\dots, Z = 35$.\n4. **Form a Giant Number**: Concatenate all numbers into a single large integer.\n5. **Calculate Remainder**: Compute $\\text{Integer} \\pmod{97}$.\n\nIf and only if the remainder is exactly **1**, the IBAN is mathematically valid! If the remainder is any other number from 0 to 96, the IBAN contains a transcription error and the transfer is automatically stopped before executing.',
    },
    {
      id: 'sepa-integration-and-iban-only-rule',
      title: 'SEPA Integration and the European "IBAN-Only" Regulation',
      level: 2,
      content:
        'The Single Euro Payments Area (SEPA) was introduced by the European Union and the European Payments Council (EPC) to erase the distinction between domestic and cross-border Euro transactions. Covering 36 European countries (all 27 EU member states, plus the UK, Switzerland, Norway, Iceland, Liechtenstein, Monaco, San Marino, Andorra, and Vatican City), SEPA treats every electronic payment identically in terms of cost, speed, and settlement guarantees.\n\nA central milestone of SEPA was **Regulation (EU) No 260/2012**, which established the statutory **"IBAN-Only Rule"**. Under this regulation:\n- Commercial banks are legally prohibited from requiring customers to provide a SWIFT/BIC code for intra-SEPA credit transfers or direct debits.\n- The IBAN alone must be sufficient to execute the transaction, as the recipient bank\'s routing code is embedded directly within positions 5 onwards of the IBAN.\n- Domestic clearing systems (such as Germany\'s DTAUS or the UK\'s legacy BACS account routing) were formally phased out in favor of ISO 20022 XML messaging formats utilizing IBANs.',
    },
    {
      id: 'safety-security-and-privacy',
      title: 'Can Someone Steal Money With Just Your IBAN? Security & Safety',
      level: 2,
      content:
        'A frequent concern among bank customers is whether sharing an IBAN exposes their funds to fraudulent withdrawals or theft.\n\n### The Reality of IBAN Security:\n- **Can someone withdraw funds?**: Generally, no. An IBAN is strictly a financial destination address—similar to an email address or postal mailbox. Knowing your IBAN allows someone to deposit money into your account, but it does not grant them administrative access to withdraw funds or authorize wire payments without cryptographic two-factor authentication (2FA), banking PINs, or biometric signatures.\n- **What about SEPA Direct Debits?**: In Europe, a merchant can technically initiate an unauthorized SEPA Direct Debit if they obtain your IBAN and forge a direct debit mandate. However, consumer protection under European Directive 2015/2366 (PSD2) is exceptionally stringent: consumers have an **unconditional right to a refund within 8 weeks** for any authorized direct debit, and up to **13 months** to reverse completely unauthorized transactions without needing to prove merchant fraud.\n- **Identity Theft Risks**: While an IBAN alone cannot empty an account, fraudsters sometimes combine IBANs with leaked dates of birth, full legal names, and residential addresses to attempt social engineering with utility companies. It is best practice to share your IBAN only with trusted counterparties, employers, and legitimate business invoices.',
    },
    {
      id: 'electronic-vs-paper-representation',
      title: 'Electronic Format vs. Paper Format Conventions',
      level: 2,
      content:
        'International Standard ISO 13616 prescribes two distinct visual representations for IBANs to maximize legibility and prevent manual reading blunders:\n\n- **Electronic Format (Data Processing)**: Written as one continuous unbroken uppercase string without spaces or punctuation marks (e.g., `GB29NWBK60161331926819`). This format is required when copying into banking software, API payloads, and electronic wire instructions.\n- **Paper Format (Human-Readable)**: Broken into 4-character blocks separated by a single space, with the final block consisting of whatever characters remain (e.g., `GB29 NWBK 6016 1331 9268 19` or `DE89 3704 0044 0532 0130 00`). This grouping facilitates visual scanning, verbal dictation over phone calls, and clear printing on formal commercial invoices.',
    },
    {
      id: 'iban-discrimination-and-sepa-compliance',
      title: 'SEPA Regulations and Combating IBAN Discrimination',
      level: 2,
      content:
        'A critical legal foundation of modern European banking is the prohibition of IBAN discrimination under Article 9 of EU Regulation No 260/2012 (the SEPA Regulation). In cross-border European trade, consumers and businesses frequently open multi-currency or digital bank accounts registered in other European jurisdictions—such as an Irish (IE), German (DE), or Lithuanian (LT) IBAN provided by neobanks and international fintech institutions.\n\nUnder European Union law, any employer, telecommunications carrier, public utility, subscription merchant, or tax authority operating within the Single Euro Payments Area that accepts domestic direct debits or wire transfers is legally obligated to accept valid IBANs from any other SEPA member state without surcharge or technical obstruction. Refusing an IBAN simply because it begins with a foreign country prefix constitutes illegal discrimination. Both the European Central Bank and national central banks actively monitor compliance, requiring commercial institutions to maintain automated validation engines capable of routing cross-border clearing files smoothly across all participating banking corridors.',
    },
  ],
  faqs: [
    {
      q: 'Does the United States use IBANs for domestic bank accounts?',
      a: 'No. The United States does not issue IBANs for domestic accounts. US banks utilize 9-digit ABA routing transit numbers and account numbers for domestic Fedwire/ACH, and SWIFT/BIC codes for incoming international wires.',
    },
    {
      q: 'How many characters are in an IBAN?',
      a: 'An IBAN varies between 15 and 33 characters depending on the country. For example, Norway has 15 characters, Germany and the UK have 22 characters, Spain has 24 characters, and France and Italy have 27 characters.',
    },
    {
      q: 'What happens if I type an incorrect IBAN during a transfer?',
      a: 'Due to the MOD-97 check digits (positions 3 and 4), a mistyped IBAN will fail mathematical validation immediately in modern banking apps, stopping the payment before money leaves your account.',
    },
    {
      q: 'Is it safe to share my IBAN on a business invoice?',
      a: 'Yes. An IBAN is designed to be public on invoices so customers and clients can pay you. It does not allow third parties to log into your account or authorize outgoing transfers.',
    },
    {
      q: 'What is the difference between an IBAN and a SWIFT/BIC code?',
      a: 'An IBAN identifies a specific individual customer bank account, whereas a SWIFT/BIC code identifies the financial institution as a whole. You often need both for transfers outside the SEPA zone.',
    },
    {
      q: 'Can I reverse a payment sent to the wrong IBAN?',
      a: 'If the wrong IBAN happens to be a valid account owned by someone else, wire transfers cannot be automatically recalled. You must contact your bank immediately to initiate a formal recall request under SEPA or wire clearing rules.',
    },
    {
      q: 'What is the SEPA "IBAN-Only" rule?',
      a: 'Under EU Regulation 260/2012, banks operating within the Single Euro Payments Area (SEPA) are legally required to process Euro credit transfers and direct debits using only the recipient\'s IBAN, without requiring a BIC code.',
    },
    {
      q: 'Where can I find my IBAN?',
      a: 'Your IBAN is printed on your physical bank statements, visible in your mobile banking app under account details, and often printed on the reverse side of your debit card (in Germany and across Europe).',
    },
  ],
  sources: [
    {
      label: 'International Organization for Standardization: ISO 13616 Standard',
      url: 'https://www.iso.org/standard/81090.html',
    },
    {
      label: 'European Central Bank (ECB): Single Euro Payments Area (SEPA)',
      url: 'https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html',
    },
    {
      label: 'European Payments Council (EPC): SEPA Payment Schemes',
      url: 'https://www.europeanpaymentscouncil.eu',
    },
    {
      label: 'SWIFT: Official IBAN Registry & Country Specifications',
      url: 'https://www.swift.com/standards/data-standards/iban',
    },
  ],
  cta: {
    title: 'Validate Any International IBAN Instantly',
    description:
      'Check format validity, MOD-97 check digits, bank routing details, and SEPA compliance across 80+ countries.',
    buttonText: 'Open IBAN Checker Tool',
    buttonHref: '/iban-checker/',
    badge: 'Free Validation Tool',
  },
  relatedTools: [
    {
      title: 'IBAN Validator & BIC Lookup',
      slug: 'iban-checker',
      description: 'Check domestic and international account numbers with MOD-97 validation.',
      category: 'Banking',
    },
    {
      title: 'SWIFT / BIC Routing Checker',
      slug: 'bic-swift-checker',
      description: 'Verify 8 and 11 character ISO 9362 business identifier codes worldwide.',
      category: 'Banking',
    },
  ],
  relatedGuides: [
    {
      title: 'IBAN vs SWIFT/BIC: What is the Difference?',
      slug: 'guides/iban-vs-swift-bic',
      description: 'Understand account routing versus institution routing for international wire transfers.',
      category: 'Banking Guides',
    },
    {
      title: 'How to Find Your IBAN: UK, DE, FR, ES, IT & NL',
      slug: 'guides/how-to-find-your-iban',
      description: 'Step-by-step instructions for locating your IBAN on statements and banking apps.',
      category: 'Banking Guides',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'This guide is published for educational and financial literacy purposes. Always verify recipient account details directly with your banking institution prior to executing high-value wire transfers.',
};
