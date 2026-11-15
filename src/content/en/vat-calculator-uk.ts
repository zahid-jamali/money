import { PageContent } from '../types';

export const vatCalculatorUkEn: PageContent = {
  metaTitle: 'UK VAT Calculator 2026 | Add or Remove 20% & 5% HMRC VAT',
  metaDescription:
    'Calculate UK Value Added Tax instantly. Add or remove standard 20% or 5% reduced VAT with exact formulas, £90k threshold rules, and Flat Rate Scheme guidance.',
  h1: 'UK VAT Calculator 2026 (Add or Remove 20% & 5%)',
  quickAnswer:
    'To add 20% UK VAT to a net figure, multiply by 1.20 (or by 0.20 to isolate the tax). To remove 20% VAT from a gross amount, divide the total by 1.20 to find the net, or multiply by the VAT fraction 1/6 (0.16667) to extract the tax portion directly.',
  howItWorks: [
    {
      label: 'Adding Standard VAT (20%)',
      formula: 'Gross = Net × 1.20 | VAT Amount = Net × 0.20',
      ruleCitation: 'Value Added Tax Act 1994, Section 2(1)',
      effectiveDate: 'Statutory standard rate in effect since 4 January 2011',
    },
    {
      label: 'Removing Standard VAT (20%)',
      formula: 'Net = Gross ÷ 1.20 | VAT Amount = Gross × (1/6)',
      ruleCitation: 'HMRC Notice 700 (The VAT Guide), Paragraph 7.4',
      effectiveDate: 'Statutory fraction 1/6 (20/120) for standard rate',
    },
    {
      label: 'Adding Reduced VAT (5%)',
      formula: 'Gross = Net × 1.05 | VAT Amount = Net × 0.05',
      ruleCitation: 'Value Added Tax Act 1994, Schedule 7A',
      effectiveDate: 'Domestic fuel, power, and child safety equipment',
    },
    {
      label: 'Removing Reduced VAT (5%)',
      formula: 'Net = Gross ÷ 1.05 | VAT Amount = Gross × (1/21)',
      ruleCitation: 'HMRC Notice 700 (The VAT Guide), Paragraph 7.4',
      effectiveDate: 'Statutory fraction 1/21 (5/105) for reduced rate',
    },
  ],
  articleSections: [
    {
      id: 'understanding-uk-vat-system',
      title: 'How UK Value Added Tax Operates in 2026',
      level: 2,
      content:
        'Value Added Tax (VAT) is the premier consumption tax levied on commercial transactions, consumer goods, and professional services throughout England, Scotland, Wales, and Northern Ireland. Managed and enforced by HM Revenue and Customs (HMRC), VAT is an indirect tax collected incrementally at every step of the commercial production and distribution supply chain.\n\nRegistered businesses charge VAT on taxable supplies made to their customers (known as output tax) and pay VAT on purchases and expenses incurred from their suppliers (known as input tax). At the end of each quarterly accounting period, the taxable person submits a digital VAT return through Making Tax Digital (MTD) software, remitting the net output balance to HMRC or claiming a refund if deductible input tax exceeds output collections.',
    },
    {
      id: 'hmrc-vat-rates-breakdown',
      title: 'Official HMRC VAT Rates: 20%, 5%, and 0%',
      level: 2,
      content:
        'Under the Value Added Tax Act 1994, goods and services supplied within the United Kingdom fall into three statutory rate classifications, alongside an exempt classification:\n\n- **Standard Rate (20%)**: Applies by default to all taxable goods and services unless an explicit statutory relief or exemption exists. Common examples include electronics, adult clothing, fuel, restaurant meals, alcoholic beverages, commercial legal and accounting services, and digital downloads.\n- **Reduced Rate (5%)**: Applied to designated supplies under Schedule 7A of the VAT Act 1994. Primary categories include domestic electricity and gas, home heating oil, children\'s car safety seats, mobility aids for disabled persons, smoking cessation products, and qualifying residential conversions or renovations of dwellings unoccupied for more than two years.\n- **Zero Rate (0%)**: Supplies that are taxable, but where the tax rate is legislatively set at 0%. Businesses supplying zero-rated items charge no tax to buyers, but crucially retain the full right to reclaim input tax on associated commercial purchases. Zero-rated categories encompass most basic groceries and human foods (excluding confectionery and catering), sanitary protection products, children\'s footwear and clothing, physical books, newspapers, magazines, e-books, prescription medications, and public passenger transit.\n- **Exempt and Outside the Scope**: Financial transactions, commercial loans, insurance policies, postal services by the Royal Mail, physical education, health treatments by registered medical practitioners, and residential letting rent are legally exempt. Unregistered small businesses under the threshold make supplies outside the statutory scope of VAT.',
    },
    {
      id: 'statutory-turnover-threshold',
      title: 'The £90,000 Registration Threshold and 12-Month Rolling Test',
      level: 2,
      content:
        'The United Kingdom statutory VAT registration threshold stands at £90,000 of cumulative taxable turnover. Unlike financial accounting years or personal tax years, HMRC assesses VAT registration liability on a strict rolling 12-month period.\n\nA business must register with HMRC if:\n1. Its total taxable turnover exceeded £90,000 over any consecutive 12-month period ending at the close of any calendar month (the historic test); or\n2. It expects its taxable turnover alone to exceed £90,000 in the next 30 days alone (the forward-looking test).\n\nFailure to notify HMRC within 30 days of crossing the threshold triggers statutory late notification penalties under the Finance Act 2008 Schedule 41. Conversely, registered entities whose ongoing rolling turnover recedes below the statutory deregistration threshold of £88,000 may submit an application to cancel their registration and cease charging tax.',
    },
    {
      id: 'reverse-vat-formulas',
      title: 'Manual Calculation Formulas and the Reverse VAT Fraction',
      level: 2,
      content:
        'Calculating VAT forwards from a known net price is mathematically straightforward, but extracting embedded VAT backwards from an inclusive gross figure is a perennial trap for bookkeepers and contractors.\n\n### Adding 20% VAT (Net to Gross)\nTo calculate gross invoice totals from pre-tax amounts:\n$$\\text{VAT Amount} = \\text{Net Amount} \\times 0.20$$\n$$\\text{Gross Amount} = \\text{Net Amount} \\times 1.20$$\nFor example, on a net consultancy fee of £1,500.00, VAT is £300.00 (£1,500 × 0.20), yielding a gross total of £1,800.00.\n\n### Removing 20% VAT (Gross to Net) and the 1/6 Fraction\nA critical mistake is subtracting 20% from the gross figure. Subtracting 20% from £1,800.00 would yield £1,440.00—an error of £60.00. Because the gross amount represents 120% of the original cost base, you must divide by 1.20:\n$$\\text{Net Amount} = \\text{Gross Amount} \\div 1.20$$\n$$\\text{VAT Amount} = \\text{Gross Amount} - \\text{Net Amount}$$\nAlternatively, use HMRC\'s statutory VAT fraction. For the 20% rate, the fraction is $20 / 120 = 1 / 6$ (approximately 0.166667). Multiplying any gross figure by $1/6$ directly produces the exact contained VAT: $\\pounds 1,800.00 \\times (1/6) = \\pounds 300.00$.\n\nFor the 5% reduced rate, the divisor is 1.05 and the VAT fraction is $5 / 105 = 1 / 21$ (approximately 0.047619).',
    },
    {
      id: 'flat-rate-scheme-rules',
      title: 'HMRC Flat Rate Scheme (FRS) and Limited Cost Trader Rules',
      level: 2,
      content:
        'Small businesses with expected taxable turnover up to £150,000 (excluding VAT) can apply for the HMRC Flat Rate Scheme under VAT Notice 733. Under the FRS, the business charges standard 20% or 5% VAT on invoices as normal, but instead of tracking and reclaiming input tax on every individual receipt, it pays HMRC a fixed statutory percentage of its gross turnover.\n\nKey rules of the Flat Rate Scheme include:\n- **Sector Percentages**: HMRC sets fixed percentages ranging from 4% (food retailers) to 14.5% (management consultants) and 16.5% (limited cost businesses).\n- **First Year 1% Discount**: Businesses in their first year of VAT registration receive a 1% reduction in their flat rate percentage (e.g., 14.5% becomes 13.5%).\n- **Limited Cost Business Anti-Avoidance**: To prevent labour-only contractors from retaining excessive VAT windfalls, HMRC mandates a statutory 16.5% flat rate if relevant goods expenditure (excluding capital assets, vehicles, fuel, food, and software) is less than 2% of VAT-inclusive turnover or less than £1,000 per year (£250 per quarter).\n- **Capital Expenditure Relief**: Businesses on the FRS can still separately reclaim input tax on single capital expenditure purchases of goods costing £2,000 or more (inclusive of VAT), such as high-end servers or heavy equipment.',
    },
    {
      id: 'making-tax-digital-compliance',
      title: 'Making Tax Digital (MTD) and Invoicing Standards',
      level: 2,
      content:
        'Since November 2022, all VAT-registered entities in the UK—regardless of turnover level—must comply with Making Tax Digital for VAT. Under MTD regulations, businesses are legally prohibited from manually typing summary totals into HMRC portals. Instead, records must be preserved electronically in functional compatible software with unbroken digital links.\n\nA valid HMRC full VAT invoice must display:\n1. A unique sequential invoice identification number;\n2. The supplier\'s registered business name, address, and 9-digit VAT registration number (prefixed with GB or XI);\n3. The invoice tax point (date of supply) and date of issue;\n4. The customer\'s full name and address;\n5. A clear description specifying the quantity and nature of goods or services provided;\n6. The net price per item, rate of VAT applied, and any applicable trade discount;\n7. The total amount payable excluding VAT;\n8. The total amount of VAT charged in Sterling (GBP).',
    },
  ],
  examples: [
    {
      title: 'Example 1: Adding 20% Standard VAT to an IT Consulting Invoice',
      scenario:
        'A cybersecurity consultant based in London provides an architectural systems audit to a corporate client with an agreed net contract fee of £2,400.00.',
      calculationType: 'add',
      inputAmount: 2400.0,
      rate: 20,
      resultVat: 480.0,
      resultTotal: 2880.0,
      explanation:
        'The consultant multiplies £2,400.00 by 0.20 to calculate £480.00 VAT. The final gross invoice total billed to the client is £2,880.00 (£2,400.00 net + £480.00 output VAT).',
    },
    {
      title: 'Example 2: Extracting 20% VAT from an Office Equipment Receipt',
      scenario:
        'A design agency purchases desktop monitors at a retail store for £719.40 gross (inclusive of 20% VAT) and needs to extract the reclaimable input tax.',
      calculationType: 'remove',
      inputAmount: 719.4,
      rate: 20,
      resultVat: 119.9,
      resultTotal: 599.5,
      explanation:
        'The accountant divides £719.40 by 1.20 to identify the net asset value of £599.50. The reclaimable input VAT is £719.40 - £599.50 = £119.90 (which equals £719.40 × 1/6).',
    },
  ],
  faqs: [
    {
      q: 'What is the standard VAT rate in the UK for 2026?',
      a: 'The UK standard VAT rate is 20%. It applies to the majority of goods and commercial services and has been set at 20% since 4 January 2011.',
    },
    {
      q: 'What is the UK VAT registration threshold in 2026?',
      a: 'The statutory UK VAT registration turnover threshold is £90,000 on a rolling 12-month basis. The deregistration threshold is £88,000.',
    },
    {
      q: 'How do you extract 20% VAT from a gross amount?',
      a: 'To remove 20% VAT from a gross total, divide the gross figure by 1.20 to determine the net price. Alternatively, multiply the gross total by the VAT fraction 1/6 (approx. 0.166667) to calculate the exact VAT amount.',
    },
    {
      q: 'Why cannot I just subtract 20% from a VAT-inclusive total?',
      a: 'Subtracting 20% from a gross total deducts 20% of 120%, which is equivalent to 24% of the original net cost. This creates an accounting deficit. You must divide by 1.20 or multiply by 1/6.',
    },
    {
      q: 'What products qualify for the reduced 5% UK VAT rate?',
      a: 'The 5% reduced rate applies to domestic residential electricity and gas, child car seats, mobility aids for senior citizens, smoking cessation patches, and qualifying residential property renovations.',
    },
    {
      q: 'What is the difference between zero-rated (0%) and exempt items?',
      a: 'Zero-rated items are taxable supplies with a 0% rate (e.g., books, basic groceries, children\'s clothing); businesses can still reclaim input tax on related commercial costs. Exempt supplies (e.g., financial loans, health treatments) charge no VAT but bar input tax recovery.',
    },
    {
      q: 'What is the HMRC Flat Rate Scheme limited cost trader rate?',
      a: 'A limited cost business—defined as spending less than 2% of gross turnover or under £1,000 annually on relevant commercial goods—must pay a flat rate of 16.5% of gross turnover to HMRC.',
    },
    {
      q: 'Can an unregistered trader charge VAT on invoices?',
      a: 'No. It is a criminal offence under UK tax law to charge VAT or issue a VAT invoice without holding a valid, active HMRC VAT registration number.',
    },
    {
      q: 'What is Making Tax Digital (MTD) for VAT?',
      a: 'Making Tax Digital is HMRC\'s statutory requirement that all VAT-registered entities must store transactions electronically and submit quarterly VAT returns via compatible software through an API.',
    },
  ],
  sources: [
    {
      label: 'GOV.UK: Official UK VAT Rates Guide',
      url: 'https://www.gov.uk/vat-rates',
    },
    {
      label: 'HMRC Notice 700: The VAT Guide',
      url: 'https://www.gov.uk/guidance/rates-of-vat-on-different-goods-and-services',
    },
    {
      label: 'HMRC Notice 733: Flat Rate Scheme for Small Businesses',
      url: 'https://www.gov.uk/guidance/vat-notice-733-flat-rate-scheme-for-small-businesses',
    },
    {
      label: 'UK Legislation: Value Added Tax Act 1994',
      url: 'https://www.legislation.gov.uk/ukpga/1994/23/contents',
    },
  ],
  relatedTools: [
    {
      title: 'European VAT Rates Hub',
      slug: 'vat-calculator',
      description: 'Compare VAT rates across all 27 EU member states with cross-border rules.',
      category: 'Tax & VAT',
    },
    {
      title: 'IBAN Validator & BIC Lookup',
      slug: 'iban-checker',
      description: 'Validate UK Sort Code conversions and MOD-97 checksums for GB accounts.',
      category: 'Banking',
    },
    {
      title: 'UK Electricity Cost Calculator',
      slug: 'electricity-cost-calculator/uk',
      description: 'Calculate domestic power costs with Ofgem price cap unit rates and standing charges.',
      category: 'Home & Energy',
    },
  ],
  relatedGuides: [
    {
      title: 'How to Find Your UK IBAN & Sort Code',
      slug: 'guides/how-to-find-your-iban',
      description: 'Step-by-step instructions for converting UK sort codes and accounts into GB IBANs.',
      category: 'Banking Guides',
    },
    {
      title: 'IBAN vs SWIFT/BIC: Key Differences',
      slug: 'guides/iban-vs-swift-bic',
      description: 'Understand account routing standards for domestic and international wire transfers.',
      category: 'Banking Guides',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'This UK VAT calculator is intended solely for general commercial and informational calculations and does not constitute formal tax advice. Consult a chartered accountant for specific HMRC filings.',
};
