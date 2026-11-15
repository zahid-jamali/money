import { GuideContent } from '../../types';

export const guideHowToReadElectricityBillUk: GuideContent = {
  metaTitle: 'How to Read Your UK Electricity Bill | 2026 Breakdown & Guide',
  metaDescription:
    'Complete guide to understanding your UK electricity bill. Learn how to decode your MPAN, unit rates, standing charges, estimated readings, and 5% VAT breakdown.',
  h1: 'How to Read Your UK Electricity Bill (Complete 2026 Guide)',
  intro:
    'Deciphering a UK domestic electricity bill can feel like interpreting complex financial jargon. Between cryptic meter point administration numbers (MPAN), fluctuating kilowatt-hour (kWh) unit rates, daily standing charges, and estimated meter readings, millions of British households inadvertently overpay their energy suppliers each year. This comprehensive guide walks you through every section of your electricity bill, explaining exactly what each line item means, how your total charges are calculated under HMRC and Ofgem rules, and how to verify that you are not paying for power you never consumed.',
  readTimeMinutes: 8,
  articleSections: [
    {
      id: 'why-understanding-your-bill-matters',
      title: 'Why Understanding Your Electricity Bill Is Essential in 2026',
      level: 2,
      content:
        'Electricity remains one of the largest ongoing expenses for British households. Following the market turbulence of recent years and the enforcement of quarterly Ofgem price caps, standard variable tariffs (SVTs) and fixed deals adjust on a regular cycle. Understanding how your supplier compiles your statement gives you the leverage to:\n\n1. **Prevent Billing Errors**: Energy suppliers in the UK frequently issue estimated bills based on flawed historic algorithms rather than real consumption. If your actual usage is lower than their estimate, you could be lending your supplier hundreds of pounds in unwarranted credit balance.\n2. **Identify Tariff Traps**: When a competitive fixed-rate contract expires, suppliers automatically roll households onto their default Standard Variable Tariff, which is capped at the maximum statutory ceiling.\n3. **Calculate Return on Investment**: Whether you are considering an air fryer, an induction hob, a heat pump, solar panels, or a home battery system, you must know your baseline unit rate and standing charge to measure real payback periods.\n\nEvery UK electricity bill—whether issued by British Gas, Octopus Energy, E.ON Next, OVO Energy, or EDF—is legally mandated by Ofgem’s Standard Licence Condition 31A to display clear, standardised components.',
    },
    {
      id: 'mpan-meter-point-administration-number',
      title: 'The "Electricity Supply Number" (MPAN): Anatomy of the 21-Digit Code',
      level: 2,
      content:
        'The most crucial administrative identifier on your electricity bill is your **Meter Point Administration Number (MPAN)**, also known as the "Supply Number" or "S-Number". This 21-digit code is entirely unique to your home\'s physical electricity connection point (not your meter box itself, and not your customer account number).\n\nOn your paper or PDF bill, the MPAN is displayed inside a distinctive table with a large capital **"S"** on the left, arranged in two rows:\n\n```\nS | Profile Class | Meter Time Switch | Line Loss Factor\n  | Distributor ID | Unique Meter Point ID | Check Digit\n```\n\n### Breaking Down the MPAN Grid:\n- **Profile Class (Top Left, 2 Digits)**: Indicates the type of electricity customer. Standard domestic households are designated as `01` (standard single rate) or `02` (multi-rate / Economy 7). Non-domestic commercial meters range from `03` to `08`.\n- **Meter Time Switch Code (Top Middle, 3 Digits)**: Specifies the meter configuration, such as how many rate registers it possesses and whether it switches between day and night hours.\n- **Line Loss Factor (Top Right, 3 Digits)**: Reflects the expected electrical energy dissipation along the transmission cables between the power station and your local district.\n- **Distributor ID (Bottom Left, 2 Digits)**: Identifies your regional Distribution Network Operator (DNO). For example, `10` is Eastern England (UK Power Networks), `12` is London, `16` is North East England (Northern Powergrid), and `22` is South Wales (National Grid Electricity Distribution).\n- **Unique Meter Point Identifier (Bottom Middle, 8 Digits)**: The specific serial identification of your physical cable termination.\n- **Check Digit (Bottom Right, 1 Digit)**: A mathematical verification checksum used by national database systems to prevent typographical errors during provider switching.',
    },
    {
      id: 'unit-rates-vs-standing-charges',
      title: 'Unit Rates vs. Standing Charges: The Two Pillars of Your Bill',
      level: 2,
      content:
        'Your total electricity bill is composed of two primary financial charges:\n\n### 1. The Unit Rate (Pence per Kilowatt-Hour / kWh)\nThe unit rate is the variable cost you pay for the actual electrical energy your appliances draw from the grid. One kilowatt-hour (1 kWh) represents 1,000 Watts of electrical power sustained for exactly one hour.\n- Under the 2026 Ofgem direct debit default price cap, the GB national average unit rate is **24.50p per kWh**.\n- If you boil a 2,200W kettle for 6 minutes (0.1 hours), it consumes 0.22 kWh, costing `0.22 × 24.50p = 5.39p`.\n- If you are on an **Economy 7** or **time-of-use tariff**, your bill will display two distinct unit rates: a discounted "Night" or "Off-Peak" rate (e.g. 14p/kWh) and a higher "Day" or "Peak" rate (e.g. 29p/kWh).\n\n### 2. The Daily Standing Charge (Pence per Day)\nThe standing charge is a mandatory fixed cost charged every single calendar day, regardless of whether you consume any electricity at all. Even if you switch off your main fuse board and leave your property vacant for six months, you still accrue the standing charge daily.\n- Under the 2026 price cap, the standing charge averages **60.10p per day** (which totals approx. £219.37 per year).\n- The standing charge covers the capital costs of maintaining national transmission towers, local high-voltage substations, meter reading logistics, and government social and green policy levies.\n- Because standing charges are fixed, low-energy users (such as pensioners or single occupants living in flats) see standing charges make up as much as 35% to 45% of their total monthly statement.',
    },
    {
      id: 'meter-readings-estimated-vs-actual',
      title: 'Meter Readings: "E" (Estimated) vs. "C" (Customer) vs. "A" (Actual/Smart)',
      level: 2,
      content:
        'Next to your opening and closing meter numbers on your statement, you will notice single-letter annotations that indicate how your supplier determined your bill:\n\n- **"A" (Actual)**: A licensed meter reader visited your home and manually recorded the physical dial or digital register.\n- **"C" (Customer)**: You logged into your online account or mobile app and submitted the reading yourself.\n- **"S" (Smart)**: Your first-generation (SMETS1) or second-generation (SMETS2) smart meter communicated your exact half-hourly or daily consumption automatically across the Data Communications Company (DCC) wireless network.\n- **"E" (Estimated)**: The supplier did not receive a meter reading and used an algorithm based on past seasonal trends and weather averages to guess your consumption.\n\n> [!WARNING]\n> If your bill features consecutive "E" (Estimated) readings, verify your physical meter immediately! If the supplier has underestimated your consumption over winter, you face a sudden back-billing shock when an actual reading is eventually taken. Under Ofgem’s **Back-Billing Rule**, suppliers cannot back-bill you for energy consumed more than 12 months ago if the billing error was their fault.',
    },
    {
      id: 'step-by-step-bill-calculation',
      title: 'Step-by-Step Mathematical Calculation of a Monthly Bill',
      level: 2,
      content:
        'To understand how your final invoice figure is produced, consider a typical semi-detached home over a 30-day billing cycle in winter consuming 250 kWh of electricity:\n\n### 1. Calculate Active Electricity Charges:\n$$\\text{Active Cost} = 250 \\text{ kWh} \\times 24.50\\text{p} = 6,125\\text{p} = \\pounds 61.25$$\n\n### 2. Calculate Standing Charges:\n$$\\text{Standing Cost} = 30 \\text{ days} \\times 60.10\\text{p/day} = 1,803\\text{p} = \\pounds 18.03$$\n\n### 3. Subtotal (Net Consumption Charges):\n$$\\text{Subtotal} = \\pounds 61.25 + \\pounds 18.03 = \\pounds 79.28$$\n\n### 4. Value Added Tax (VAT) Calculation:\nDomestic fuel and power in the United Kingdom qualifies for HMRC\'s statutory **Reduced VAT Rate of 5%** under Schedule 7A of the Value Added Tax Act 1994 (unlike commercial business energy, which is taxed at the 20% standard rate):\n$$\\text{VAT Amount} = \\pounds 79.28 \\times 0.05 = \\pounds 3.96$$\n\n### 5. Final Total Charges for the Period:\n$$\\text{Total Invoice Amount} = \\pounds 79.28 + \\pounds 3.96 = \\pounds 83.24$$',
    },
    {
      id: 'direct-debit-smoothing-and-credit-balances',
      title: 'Fixed Monthly Direct Debit vs. Actual Statement Balance',
      level: 2,
      content:
        'A widespread point of consumer confusion is the difference between your **monthly Direct Debit amount** and your **monthly statement charges**.\n\nMost British households pay via "Budget Direct Debit" or "Smoothed Direct Debit". Energy consumption is heavily seasonal: UK homes consume roughly 65% of their annual energy between October and March (heating, lighting, indoor cooking) and only 35% between April and September.\n\nTo prevent crippling winter bills, suppliers calculate your projected annual cost, add standing charges and VAT, and divide the sum by 12 equal monthly instalments. Consequently:\n- **In Summer**: Your monthly payment (e.g. £110) exceeds your actual usage (e.g. £65), building up a positive **Credit Balance** on your account.\n- **In Winter**: Your actual usage (e.g. £165) exceeds your monthly payment (£110), drawing down the accumulated credit buffer into a temporary **Debit Balance**.\n\n> [!IMPORTANT]\n> If you reach May or June and still have a significant credit balance exceeding two months of payments, you have the statutory right under Ofgem rules to request an immediate cash refund from your supplier back to your bank account.',
    },
    {
      id: 'action-steps-if-your-bill-is-wrong',
      title: 'What to Do If You Suspect an Error on Your Electricity Bill',
      level: 2,
      content:
        'If your electricity bill seems extraordinarily high, follow this 4-step dispute resolution protocol:\n\n1. **Conduct a Creep / Creep-Test**: Switch off every circuit breaker in your consumer unit. Look at your electricity meter. If the digital register advances or the red pulse light continues blinking rapidly, contact your supplier immediately to report a faulty meter or wiring cross-connection.\n2. **Submit a Fresh Meter Reading**: Log into your supplier portal and submit a timestamped smartphone photo of your meter dials. If your previous bill was based on an inflated estimate, the supplier must reissue an amended bill within 5 to 10 working days.\n3. **Initiate a Formal Complaint**: If the dispute remains unresolved, lodge a formal complaint citing standard licence conditions. The supplier has a statutory deadline of 8 weeks to resolve the complaint or provide an official "Deadlock Letter".\n4. **Escalate to the Energy Ombudsman**: If 8 weeks have elapsed without resolution, you can refer your case to the Energy Ombudsman (ombudsman-services.org/energy). Their decisions are legally binding on energy suppliers, and they have the authority to order bill corrections and financial compensation.',
    },
  ],
  faqs: [
    {
      q: 'Where do I find my MPAN number on my bill?',
      a: 'Your MPAN (Meter Point Administration Number) is located on the back or second page of your electricity bill inside a distinct box marked with a large letter "S". It is a 21-digit number arranged in two rows.',
    },
    {
      q: 'Why is domestic electricity VAT 5% instead of 20%?',
      a: 'Under the UK Value Added Tax Act 1994, domestic fuel and power is legislated as an essential public good and qualifies for the statutory reduced VAT rate of 5%. The standard 20% VAT rate applies only to business and commercial premises.',
    },
    {
      q: 'Can my energy supplier increase my direct debit without asking?',
      a: 'Suppliers must provide at least 10 working days written notice before changing your direct debit amount. Under the Direct Debit Guarantee, you are entitled to an immediate refund from your bank if an unauthorised debit occurs.',
    },
    {
      q: 'What is the Ofgem Back-Billing Rule?',
      a: 'The Ofgem Back-Billing Rule states that an energy supplier cannot bill you for energy used more than 12 months ago if the supplier failed to accurately bill you during that timeframe.',
    },
    {
      q: 'What does "Personal Projection" mean on my energy bill?',
      a: 'The Personal Projection is an Ofgem-mandated estimate of what your electricity will cost over the next 12 months based on your historic consumption and current tariff rates. It serves as a benchmark for comparing alternative deals.',
    },
  ],
  sources: [
    { label: 'Ofgem (Understanding Your Energy Bill)', url: 'https://www.ofgem.gov.uk/information-consumers/energy-advice-households/check-energy-bill-correct' },
    { label: 'Citizens Advice (Understanding Your Energy Bill)', url: 'https://www.citizensadvice.org.uk/consumer/energy/energy-supply/your-energy-bill/' },
    { label: 'Energy Ombudsman UK', url: 'https://www.ombudsman-services.org/energy' },
  ],
  cta: {
    title: 'Calculate Your Appliance Running Costs Live',
    description: 'Use our interactive calculator to see exactly how much every kettle boil, fan heater session, and tumble dryer load adds to your electricity bill.',
    buttonText: 'Open UK Electricity Calculator',
    buttonHref: '/electricity-cost-calculator/uk/',
    badge: 'Updated for Ofgem 2026',
  },
  relatedTools: [
    { title: 'UK Electricity Cost Calculator', slug: 'electricity-cost-calculator/uk', description: 'Interactive appliance cost calculator using active Ofgem price cap unit rates.', category: 'home-energy' },
    { title: 'EV vs Petrol Running Cost Calculator', slug: 'fuel-cost-calculator/ev-vs-petrol', description: 'Compare home charging costs against petrol and diesel per mile.', category: 'travel' },
  ],
  relatedGuides: [
    { title: 'Energy Price Cap Explained', slug: 'guides/energy-price-cap-explained', description: 'Comprehensive guide to how Ofgem sets price caps, wholesale gas linkages, and default tariffs.', category: 'home-energy' },
  ],
  updatedAt: '2026-01-01',
};
