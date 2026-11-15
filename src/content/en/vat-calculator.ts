import { PageContent } from '../types';

export const vatCalculatorEn: PageContent = {
  metaTitle: 'EU VAT Calculator 2026 | Rates for All 27 European Countries',
  metaDescription:
    'Comprehensive European VAT calculator & rates comparison. Calculate standard & reduced rates across all 27 EU member states, One-Stop Shop (OSS), and B2B reverse charge.',
  h1: 'EU VAT Calculator 2026 (All 27 Member States & Cross-Border Rules)',
  quickAnswer:
    'Across the European Union, standard VAT rates range from 17% (Luxembourg) to 27% (Hungary), governed by EU Directive 2006/112/EC with a statutory minimum standard rate of 15%. For cross-border B2B transactions between registered businesses, the Reverse Charge mechanism applies (0% invoice). For cross-border B2C distance selling exceeding the €10,000 EU threshold, businesses charge the VAT rate of the consumer’s country via the One-Stop Shop (OSS).',
  howItWorks: [
    {
      label: 'Standard EU VAT Calculation (Domestic Supply)',
      formula: 'Gross = Net × (1 + Rate / 100) | VAT Amount = Net × (Rate / 100)',
      ruleCitation: 'Council Directive 2006/112/EC, Article 96 & 97',
      effectiveDate: 'Statutory minimum standard rate of 15% across all 27 EU member states',
    },
    {
      label: 'Cross-Border B2B Reverse Charge Mechanism',
      formula: 'Invoice VAT = 0.00 (Customer self-assesses output & input tax on domestic return)',
      ruleCitation: 'Council Directive 2006/112/EC, Article 196 & VIES Validation',
      effectiveDate: 'Applicable to all validated intra-Community supplies between taxable persons',
    },
    {
      label: 'One-Stop Shop (OSS) Cross-Border B2C Sales',
      formula: 'Tax = Destination Country Consumer VAT Rate (Reported quarterly via domestic portal)',
      ruleCitation: 'EU VAT E-Commerce Package (Council Implementing Regulation 2019/2026)',
      effectiveDate: 'Enforced above the unified €10,000 EU-wide micro-business threshold',
    },
    {
      label: 'Removing VAT (Gross to Net Calculation)',
      formula: 'Net = Gross ÷ (1 + Rate / 100) | VAT = Gross - Net',
      ruleCitation: 'EU Standard Invoicing Directive 2010/45/EU',
      effectiveDate: 'Standard algebraic reverse calculation across all member state currencies',
    },
  ],
  articleSections: [
    {
      id: 'european-union-vat-framework',
      title: 'The European Union VAT Directive Framework in 2026',
      level: 2,
      content:
        'Value Added Tax in the European Union operates within the common legislative architecture established by Council Directive 2006/112/EC (the EU VAT Directive). While each of the 27 sovereign member states retains authority to set its own specific national tax rates and administrative compliance procedures, national laws must conform strictly to binding EU harmonization principles.\n\nThe directive stipulates that every EU member state must apply a standard VAT rate of at least **15%**. In addition, countries may establish one or two reduced rates (not lower than **5%**) for designated goods and services listed in Annex III (such as food, water supplies, pharmaceutical products, medical equipment, books, and passenger transport). A limited number of member states maintain super-reduced rates (below 5%) or zero rates under historical grandfathering clauses approved during EU accession treaties.',
    },
    {
      id: 'comparative-rates-table',
      title: 'VAT Rates Across All 27 EU Countries (from Lowest to Highest)',
      level: 2,
      content:
        'Standard rates vary considerably across the European Single Market, reflecting distinct national budgetary priorities and fiscal traditions:\n\n- **17% (Lowest standard rate in EU)**: Luxembourg (LU);\n- **18%**: Malta (MT);\n- **19% (Major economies)**: Germany (DE), Cyprus (CY);\n- **20% (Central benchmark)**: France (FR), Austria (AT), Bulgaria (BG), Estonia (EE), Slovakia (SK);\n- **21%**: Belgium (BE), Netherlands (NL), Spain (ES), Czechia (CZ), Lithuania (LT), Romania (RO - standard rate updated to 21% under Law 141/2025);\n- **22%**: Italy (IT), Slovenia (SI);\n- **23%**: Poland (PL), Portugal (PT), Ireland (IE);\n- **24%**: Greece (EL), Finland (FI);\n- **25% (Nordic model)**: Sweden (SE), Denmark (DK), Croatia (HR);\n- **27% (Highest in EU)**: Hungary (HU).\n\nNon-Eurozone member states collect VAT in their national legal tender (e.g., Polish Złoty PLN, Hungarian Forint HUF, Czech Koruna CZK, Romanian Leu RON, Bulgarian Lev BGN, Danish Krone DKK, Swedish Krona SEK) using official daily European Central Bank (ECB) fixing exchange rates for accounting conversion.',
    },
    {
      id: 'cross-border-b2b-reverse-charge',
      title: 'Cross-Border B2B Supplies and the Reverse Charge Mechanism',
      level: 2,
      content:
        'To facilitate frictionless intra-Community trade without forcing foreign businesses to register for VAT in every customer\'s territory, the EU mandates the **Reverse Charge Mechanism** (Article 196 of Directive 2006/112/EC).\n\nUnder this rule, when a VAT-registered business in one EU member state (e.g., Germany) sells commercial goods or B2B services to a registered entity in another member state (e.g., France):\n1. The supplier does not charge domestic German VAT on the invoice (0% intra-Community supply);\n2. The invoice must clearly specify the supplier\'s VAT ID, the customer\'s valid EU VAT number, and the mandatory legal notation: *"Reverse Charge / Autoliquidation"*; \n3. The supplier must verify the customer\'s tax identification number through the official **VIES (VAT Information Exchange System)** database prior to billing and submit a periodic EC Sales List (Recapitulative Statement);\n4. The customer accounts for both output tax and deductible input tax simultaneously in their domestic French VAT return, resulting in a cash-neutral tax entry for fully taxable businesses.',
    },
    {
      id: 'one-stop-shop-oss-ecommerce',
      title: 'One-Stop Shop (OSS) and Distance Selling Rules for B2C E-Commerce',
      level: 2,
      content:
        'Following the comprehensive EU VAT E-Commerce package, individual national distance selling thresholds (which previously ranged from €35,000 to €100,000 per country) were abolished and replaced by a single, harmonized **EU-wide threshold of €10,000** for cross-border B2C sales of physical goods and telecommunications, broadcasting, and electronic (TBE) services.\n\n- **Below the €10,000 annual threshold**: Micro-enterprises selling across borders may elect to treat sales as domestic transactions and apply their home country\'s VAT rate.\n- **Above the €10,000 annual threshold**: Sellers must charge VAT at the statutory rate of the **consumer\'s destination country** (e.g., a Spanish online retailer shipping running shoes to a Swedish customer must charge Swedish 25% VAT).\n- **The OSS Portal**: To eliminate the crippling burden of registering for VAT in up to 26 foreign member states, retailers register for the **One-Stop Shop (Union OSS)** in their home member state. Sellers file a single consolidated quarterly electronic OSS return, paying the aggregate multi-country tax to their domestic tax authority, which electronically redistributes the funds to the respective recipient countries.',
    },
    {
      id: 'import-one-stop-shop-ioss',
      title: 'Importing Goods into the EU: The Import One-Stop Shop (IOSS)',
      level: 2,
      content:
        'For consignments originating outside the customs territory of the European Union (e.g., items shipped from the UK, United States, or China to EU consumers), the **Import One-Stop Shop (IOSS)** covers commercial consignments with an intrinsic value of up to **€150** (excluding insurance and freight). Sellers registered for IOSS collect the destination country\'s VAT at checkout, allowing items to pass through customs under a fast-track Green Channel without unexpected courier customs clearance fees or cash-on-delivery handling surcharges.',
    },
    {
      id: 'currency-conversion-non-euro',
      title: 'Currency Conversion and ECB Exchange Rate Requirements',
      level: 2,
      content:
        'When issuing invoices in foreign currencies (e.g., invoicing a Danish client in Danish Krone DKK or an American client in US Dollars USD), the VAT amount payable must be expressed in the national legal currency of the member state where the taxable transaction occurs.\n\nUnder Article 230 of the EU VAT Directive, conversion must be executed using either:\n1. The latest exchange rate published by the European Central Bank (ECB) at the time the tax became chargeable; or\n2. The exchange rate published by the commercial banking system or national central bank according to established domestic rules.',
    },
    {
      id: 'special-territorial-exclusions',
      title: 'Special Territorial Statuses and Outermost Regions',
      level: 2,
      content:
        'Certain territories belonging to EU member states are legally excluded from the EU VAT Directive area under Article 6 of Directive 2006/112/EC due to geographic remoteness or historical treaty provisions:\n\n- **Spain**: The Canary Islands (applying local IGIC - Impuesto General Indirecto Canario at 7%), Ceuta, and Melilla.\n- **France**: French Overseas Departments and Regions (Guadeloupe, Martinique, Réunion, Mayotte, and French Guiana) operate under distinct local rules or complete VAT exemptions.\n- **Germany**: The Island of Heligoland and the territory of Büsingen am Hochrhein.\n- **Italy**: Livigno, Campione d’Italia, and the territorial waters of Lake Lugano.\n- **Greece**: Mount Athos (autonomous monastic region).\n\nSupplies of goods delivered to or originating from these excluded territories are treated as third-country exports and imports rather than intra-Community transactions, requiring formal customs documentation.',
    },
    {
      id: 'digital-reporting-and-vida',
      title: 'VAT in the Digital Age (ViDA) and Real-Time Reporting',
      level: 2,
      content:
        'The European Commission\'s landmark **VAT in the Digital Age (ViDA)** package represents the most sweeping modernization of European tax collection since the single market\'s creation in 1993. Phasing in through 2026 and 2028, ViDA transitions the European Union toward:\n\n1. **Standardized Digital Reporting (DRR)**: Mandating real-time, transaction-by-transaction electronic invoicing for all intra-Community B2B sales based on European standard EN 16931, replacing retrospective aggregate EC Sales Lists.\n2. **Updated Platform Economy Rules**: Digital gig and sharing economy platforms (e.g., short-term accommodation rentals and passenger ride services) become the "deemed supplier", responsible for collecting and remitting VAT where underlying individual providers do not charge tax.\n3. **Single VAT Registration (SVR)**: Further expanding the One-Stop Shop (OSS) to encompass all remaining B2C transactions, stock transfers, and domestic sales across borders, virtually eliminating the need for multi-country corporate VAT registrations.',
    },
  ],
  examples: [
    {
      title: 'Example 1: Cross-Border B2B Supply (Germany to France) with Reverse Charge',
      scenario:
        'A cloud software provider in Munich delivers enterprise SaaS licenses valued at €10,000 net to a corporate logistics company headquartered in Paris. Both entities hold active, verified VIES numbers.',
      calculationType: 'add',
      inputAmount: 10000.0,
      rate: 0,
      resultVat: 0.0,
      resultTotal: 10000.0,
      explanation:
        'Under EU Reverse Charge rules, the German supplier bills €10,000 with 0% VAT. The French buyer self-assesses French 20% VAT (€2,000) as both output tax and input tax on its French return, yielding €0 net cash outflow.',
    },
    {
      title: 'Example 2: Cross-Border B2C E-Commerce via One-Stop Shop (Spain to Sweden)',
      scenario:
        'An e-commerce retailer in Barcelona exceeding the €10,000 EU threshold sells high-fidelity headphones to a private consumer in Stockholm for €300.00 net.',
      calculationType: 'add',
      inputAmount: 300.0,
      rate: 25,
      resultVat: 75.0,
      resultTotal: 375.0,
      explanation:
        'Because the buyer is an individual consumer in Sweden, the seller must charge Sweden’s statutory 25% VAT. The Swedish buyer pays €375.00 gross (€300 net + €75 VAT). The Spanish seller reports and remits the €75 via the Spanish OSS portal.',
    },
  ],
  faqs: [
    {
      q: 'Which EU country has the highest VAT rate in 2026?',
      a: 'Hungary has the highest standard VAT rate in the European Union at 27%. Denmark, Sweden, and Croatia follow closely with 25%.',
    },
    {
      q: 'Which EU country has the lowest standard VAT rate?',
      a: 'Luxembourg has the lowest standard VAT rate in the EU at 17%. Malta follows with 18%, and Germany and Cyprus have 19%.',
    },
    {
      q: 'How does the B2B Reverse Charge mechanism work in the EU?',
      a: 'When two VAT-registered companies in different EU member states trade goods or services, the seller invoices at 0% VAT without charging tax, and the buyer accounts for the VAT on their domestic tax return using the Reverse Charge rule.',
    },
    {
      q: 'What is the EU VAT One-Stop Shop (OSS)?',
      a: 'The One-Stop Shop is an electronic portal that enables e-commerce businesses selling B2C goods and services across EU borders to declare and remit all foreign EU VAT through a single quarterly return in their home country.',
    },
    {
      q: 'What is the cross-border threshold for EU distance selling?',
      a: 'The EU-wide threshold for distance sales of goods and B2C digital services is €10,000 per calendar year. Once total sales to consumers across all EU states exceed €10,000, you must charge each customer\'s national VAT rate.',
    },
    {
      q: 'What is VIES and why is it mandatory for cross-border trade?',
      a: 'VIES (VAT Information Exchange System) is the European Commission’s online database that verifies whether a company\'s VAT number is officially registered and valid for intra-Community cross-border trade.',
    },
    {
      q: 'What is the Import One-Stop Shop (IOSS)?',
      a: 'IOSS allows non-EU or EU merchants importing B2C goods valued up to €150 into the EU to collect destination VAT at checkout, facilitating fast-track customs clearance without courier delivery fees.',
    },
    {
      q: 'Do all EU countries use the Euro for VAT purposes?',
      a: 'No. While 20 member states belong to the Eurozone, 7 EU nations (Poland, Hungary, Czechia, Romania, Bulgaria, Denmark, and Sweden) collect and report VAT in their respective national currencies, using ECB conversion rates.',
    },
  ],
  sources: [
    {
      label: 'European Commission (DG TAXUD): VAT Rates in Member States',
      url: 'https://taxation-customs.ec.europa.eu/taxation/vat/vat-rules-and-rates_en',
    },
    {
      label: 'Council Directive 2006/112/EC on the Common System of Value Added Tax',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32006L0112',
    },
    {
      label: 'European Commission: VIES VAT Number Validation Database',
      url: 'https://ec.europa.eu/taxation_customs/vies/',
    },
    {
      label: 'European Central Bank (ECB): Official Foreign Exchange Reference Rates',
      url: 'https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html',
    },
  ],
  relatedTools: [
    {
      title: 'UK VAT Calculator (HMRC Rules)',
      slug: 'vat-calculator/uk',
      description: 'Calculate UK VAT with 20% standard, 5% reduced, £90,000 threshold, and Flat Rate Scheme.',
      category: 'Tax & VAT',
    },
    {
      title: 'German MwSt-Rechner (19% & 7%)',
      slug: 'de/mwst-rechner',
      description: 'Multi-item invoice calculator with German § 14 UStG compliance and validation tools.',
      category: 'Steuern & MwSt.',
    },
    {
      title: 'Polish Kalkulator VAT (23%, 8%, 5%)',
      slug: 'pl/kalkulator-vat',
      description: 'Calculate Polish VAT with Split Payment and White List account checking rules.',
      category: 'Podatki i VAT',
    },
    {
      title: 'IBAN Checker & BIC Lookup',
      slug: 'iban-checker',
      description: 'Validate European bank accounts across all 27 EU member states with MOD-97 checks.',
      category: 'Banking',
    },
  ],
  relatedGuides: [
    {
      title: 'What is an IBAN? International Account Standards',
      slug: 'guides/what-is-an-iban',
      description: 'Comprehensive guide to European banking identifiers and SEPA cross-border wire transfers.',
      category: 'Banking Guides',
    },
    {
      title: 'IBAN vs SWIFT/BIC: When Do You Need Both?',
      slug: 'guides/iban-vs-swift-bic',
      description: 'Understand the exact role of IBAN account addresses and SWIFT bank routing codes.',
      category: 'Banking Guides',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'This EU VAT Hub and calculator is provided for general informational and comparative purposes only. International commercial contracts and OSS filings should be confirmed with a licensed European tax advisor.',
};
