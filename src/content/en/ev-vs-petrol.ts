import { PageContent } from '../types';

export const evVsPetrolEn: PageContent = {
  metaTitle: 'EV vs Petrol Cost Calculator 2026 | Electric Car Savings',
  metaDescription:
    'Compare electric car charging costs against petrol and diesel running expenses. Calculate trip and annual savings, cost per mile, and payback periods.',
  h1: 'EV vs Petrol Cost Calculator 2026 (Electric Car Savings)',
  quickAnswer:
    'An electric vehicle costs between 5p and 8p per mile to run when charged at home on standard tariffs (or under 3p on off-peak EV tariffs), compared to 15p to 18p per mile for a petrol car. Over 10,000 annual miles, an EV typically saves £700 to £1,200 in fuel costs.',
  howItWorks: [
    {
      label: '1. Petrol Running Cost Computation',
      formula: 'Petrol Cost = (Distance in Miles ÷ UK MPG) × 4.54609 × Petrol Price (£/L)',
      ruleCitation: 'Department for Energy Security and Net Zero (DESNZ) Fuel Statistics',
      effectiveDate: 'National standard petrol pump price benchmark',
    },
    {
      label: '2. EV Electricity Running Cost',
      formula: 'EV Cost = (Distance in Miles × kWh/100mi ÷ 100) × Electricity Price (£/kWh)',
      ruleCitation: 'Ofgem Domestic Energy Price Cap & Smart EV Charging Tariffs',
      effectiveDate: 'Statutory standard unit rate benchmark (24.5p/kWh)',
    },
    {
      label: '3. Trip & Per-Unit Savings Delta',
      formula: 'Net Savings = Petrol Trip Cost − EV Trip Cost',
      ruleCitation: 'HM Treasury Transport Energy Transition Cost Guidelines',
      effectiveDate: 'Direct fuel-to-electricity expenditure comparison',
    },
    {
      label: '4. Annualized Financial Benefit',
      formula: 'Annual Savings = (Annual Miles × Savings per Mile)',
      ruleCitation: 'Department for Transport Vehicle Licensing Statistics (10,000 mi baseline)',
      effectiveDate: 'Standard UK annual private motoring distance benchmark',
    },
  ],
  articleSections: [
    {
      id: 'thermodynamic-efficiency-comparison',
      title: 'Physics of Propulsion: Electric Motor Efficiency vs Internal Combustion Thermal Losses',
      level: 2,
      content:
        'The fundamental economic advantage of battery electric vehicles (BEVs) over traditional petrol and diesel internal combustion engine (ICE) vehicles originates in the laws of thermodynamics.\n\nModern internal combustion engines convert liquid fossil fuel into kinetic motion via mechanical pistons and crankshafts with a peak thermal efficiency of only 25% to 35%. The remaining 65% to 75% of the chemical energy contained in every litre of petrol is permanently lost as waste heat radiated through the exhaust pipe, engine radiator, and transmission friction. In contrast, electric powertrains boast an overall "plug-to-wheel" efficiency exceeding 85% to 90%. Electric motors convert electrical energy stored in lithium-ion battery cells into rotational torque directly with minimal electromagnetic resistance and virtually no standby idling losses.\n\nFurthermore, electric vehicles utilize regenerative braking, recapturing kinetic energy when slowing down and recharging the high-voltage traction battery rather than expelling energy as brake dust and friction heat. Consequently, an EV requires only 15 to 22 kWh of electrical energy to travel 100 kilometres—the energy equivalent of less than 2.0 litres of petrol—dramatically lowering per-mile operating costs regardless of short-term energy market volatility.',
    },
    {
      id: 'home-charging-vs-public-rapid-charging',
      title: 'The Critical Cost Factor: Domestic Home Charging vs Public Rapid Chargers',
      level: 2,
      content:
        'When evaluating EV fuel savings, where you recharge your vehicle is the single most critical variable determining real-world financial outcomes.\n\nCharging infrastructure costs fall into two distinct categories:\n\n1. **Domestic Home Charging (Standard Ofgem Cap & Smart Tariffs)**: Home charging represents the most economical method to power an EV. Under the default Ofgem energy price cap, domestic electricity costs approximately 24.5p per kilowatt-hour. At 24.5p/kWh, an EV averaging 3.5 miles per kWh costs approximately 7.0p per mile. Motorists with smart overnight EV tariffs (such as Octopus Go or British Gas Electric Driver) paying off-peak rates of 7p to 9p per kWh achieve sensational running costs under **2.5p per mile**.\n2. **Public High-Power Rapid & En-Route DC Chargers (50kW to 350kW)**: Public motorway service area charging networks (such as Gridserve, Ionity, and Instavolt) incur significant capital expenditure, commercial electrical grid connections, and 20% statutory VAT on public electricity (compared to 5% VAT on domestic home electricity). Commercial rapid chargers typically cost between 65p and 85p per kWh. At 79p/kWh, an EV costs approximately 22p per mile, matching or slightly exceeding the fuel cost of a highly efficient diesel car on long motorway trips.\n\nFor motorists who can charge at home for 80% to 90% of their annual mileage, overall blended running costs remain dramatically lower than any fossil-fuelled alternative.',
    },
    {
      id: 'per-mile-and-per-kilometre-cost-comparison',
      title: 'Calculating Real-World Running Costs per Mile and per Kilometre',
      level: 2,
      content:
        'To establish a transparent head-to-head comparison between petrol and electricity, calculations must be reduced to cost per distance unit.\n\nConsider a typical 100-mile journey in the United Kingdom:\n- **Petrol Vehicle (40 UK MPG at £1.385/L)**: Consumes 2.5 imperial gallons, which equals 11.37 litres. At £1.385 per litre, the journey costs **£15.74**, or **15.74 pence per mile** (9.78p per kilometre).\n- **Electric Vehicle (28 kWh/100mi at £0.245/kWh)**: Consumes 28 kWh of electricity. At standard Ofgem capped electricity (24.5p/kWh), the journey costs **£6.86**, or **6.86 pence per mile** (4.26p per kilometre). The driver saves £8.88 on this single 100-mile trip (a 56.4% cost reduction).\n- **Electric Vehicle on Smart Off-Peak Tariff (28 kWh/100mi at £0.075/kWh)**: Consumes 28 kWh. At overnight off-peak rates (7.5p/kWh), the journey costs **£2.10**, or **2.10 pence per mile** (1.30p per kilometre). The driver saves £13.64 on the identical 100-mile journey (an 86.7% cost reduction).\n\nOver an average annual driving distance of 10,000 miles, home charging an EV saves between £888 and £1,364 in direct fuel expenses alone.',
    },
    {
      id: 'total-cost-of-ownership-beyond-fuel',
      title: 'Total Cost of Ownership (TCO): Maintenance, Brakes, and Road Tax (VED)',
      level: 2,
      content:
        'While direct fuel savings represent the most immediate monthly benefit of transitioning to an electric car, the broader Total Cost of Ownership (TCO) incorporates substantial additional operational advantages:\n\n- **Mechanical Simplicity and Servicing**: An electric drivetrain eliminates hundreds of moving parts subject to mechanical wear in internal combustion engines: spark plugs, fuel injectors, timing belts, alternators, catalytic converters, particulate filters (DPF), complex multispeed transmissions, and engine oil filters. Routine annual servicing for EVs consists primarily of cabin pollen filter replacements, brake fluid inspections, and tyre checks, reducing scheduled garage maintenance expenses by 30% to 50%.\n- **Brake Wear and Regenerative Braking**: Because electric motors handle the vast majority of deceleration via regenerative braking, mechanical brake pads and discs experience minimal wear, frequently lasting beyond 80,000 to 100,000 miles.\n- **Vehicle Excise Duty (VED)**: Under UK legislative reforms, electric cars become subject to standard Vehicle Excise Duty (road tax) from April 2025 onwards. However, Company Car drivers continue to enjoy extraordinarily low Benefit-in-Kind (BiK) tax rates (2% to 3%), saving business motorists thousands of pounds annually in personal income tax.',
    },
    {
      id: 'optimising-ev-range-and-cold-weather-efficiency',
      title: 'Optimising Electric Car Efficiency in Winter and Motorway Driving',
      level: 2,
      content:
        'To maximize your financial savings in an electric vehicle, understanding how operational conditions influence energy consumption is essential:\n\n- **Winter Cabin Heating and Heat Pumps**: Unlike petrol cars where cabin warmth is free byproduct engine heat, an EV must generate warmth electrically. Vehicles equipped with high-efficiency heat pumps consume only one-third of the electrical energy required by traditional resistive heating elements. Preconditioning the vehicle cabin while still plugged into the home wallbox ensures the battery is warm and the interior comfortable without draining onboard range.\n- **Motorway Cruising Speeds**: Sustained high-speed driving at 75 mph causes wind resistance to consume battery charge far more rapidly than urban stop-and-go driving. Cruising steadily at 65 to 68 mph rather than 75 mph can improve energy economy from 2.8 miles/kWh to 3.6 miles/kWh, reducing energy consumption by over 20%.\n- **Tyre Selection and Inflation**: EV-specific low rolling resistance tyres can preserve up to 5% to 8% of driving efficiency. Maintaining correct tyre pressures is vital given the heavier kerb weight of battery packs.',
    },
  ],
  examples: [
    {
      title: 'Annual Commuting Comparison: 10,000 Miles (Standard Home Tariff)',
      scenario:
        'A motorist drives 10,000 miles per year and compares a 42 MPG petrol hatchback with a modern EV averaging 28 kWh/100 miles charged on the standard Ofgem energy price cap.',
      calculationType: 'custom',
      inputAmount: 10000,
      rate: 42,
      resultTotal: 812.07,
      customFields: [
        { label: 'Annual Mileage', value: '10,000 miles' },
        { label: 'Petrol Car Economy', value: '42.0 UK MPG' },
        { label: 'Petrol Pump Price', value: '£1.385 / Litre' },
        { label: 'Annual Petrol Fuel Cost', value: '£1,498.07' },
        { label: 'EV Energy Efficiency', value: '28.0 kWh / 100mi' },
        { label: 'Electricity Price (Ofgem Cap)', value: '24.5p / kWh (£0.245)' },
        { label: 'Annual EV Electricity Cost', value: '£686.00' },
        { label: 'Annual Money Saved with EV', value: '£812.07 saved / year', highlight: true },
        { label: 'Savings Percentage', value: '54.2% cheaper', highlight: true },
      ],
      explanation:
        'The petrol car consumes 238.1 imperial gallons (1,082.4 litres), costing £1,498.07. The EV consumes 2,800 kWh of electricity, costing £686.00. The driver saves £812.07 per year, or 8.12p for every single mile driven.',
    },
    {
      title: 'London to Edinburgh Road Trip: 400 Miles (EV vs Petrol)',
      scenario:
        'A single 400-mile long-distance journey comparing a 38 MPG petrol crossover with an EV averaging 30 kWh/100 miles using blended home and en-route charging.',
      calculationType: 'custom',
      inputAmount: 400,
      rate: 38,
      resultTotal: 34.09,
      customFields: [
        { label: 'Journey Distance', value: '400 miles One-Way' },
        { label: 'Petrol Car Expense (38 MPG)', value: '£66.29 (£1.385/L)' },
        { label: 'EV Energy Consumed', value: '120.0 kWh' },
        { label: 'Blended Electricity Price', value: '£0.268 / kWh' },
        { label: 'EV Journey Electricity Cost', value: '£32.20' },
        { label: 'Single Trip Money Saved', value: '£34.09 saved', highlight: true },
        { label: 'Cost Per Mile Comparison', value: '8.05p (EV) vs 16.57p (Petrol)' },
      ],
      explanation:
        'The petrol car requires 47.85 litres of fuel, totaling £66.29. The EV uses 120 kWh of electricity, costing £32.20 at an average blended price of 26.8p/kWh. The EV saves £34.09 on this single journey alone.',
    },
  ],
  faqs: [
    {
      q: 'How much cheaper is it to charge an EV than fill a petrol car in the UK?',
      a: 'Charging an EV at home on a standard electricity tariff is typically 50% to 60% cheaper than buying petrol. On specialized overnight EV smart tariffs (e.g. 7p/kWh), it is up to 80% to 85% cheaper, reducing fuel running costs from around 16p/mile down to under 2.5p/mile.',
    },
    {
      q: 'How much money does an electric car save per year on fuel?',
      a: 'Over an average annual driving distance of 10,000 miles, an electric vehicle charged at home saves approximately £800 to £1,200 in direct fuel costs compared to an average 40 MPG petrol vehicle.',
    },
    {
      q: 'What is the cost per mile of an electric car versus petrol?',
      a: 'A petrol car averaging 40 UK MPG at £1.385/L costs approximately 15.7p per mile. An EV charged at standard home rates (24.5p/kWh) costs approximately 7.0p per mile, dropping to 2.0p to 2.5p per mile on off-peak overnight tariffs.',
    },
    {
      q: 'Is public rapid charging more expensive than petrol?',
      a: 'Commercial high-power public rapid chargers (50kW to 350kW) priced at 75p to 85p/kWh cost approximately 21p to 24p per mile, which is comparable to or slightly higher than an efficient petrol or diesel car on motorways. However, most EV drivers do 80% of charging cheaply at home.',
    },
    {
      q: 'What is a typical EV energy efficiency rating?',
      a: 'EV energy efficiency is typically between 3.0 and 4.0 miles per kWh (or 25 to 33 kWh per 100 miles / 15 to 20 kWh per 100 km). Highly aerodynamic saloons like the Tesla Model 3 achieve up to 4.2 mi/kWh, while large electric SUVs achieve around 2.8 to 3.2 mi/kWh.',
    },
    {
      q: 'How do smart overnight EV electricity tariffs work?',
      a: 'Smart EV tariffs (such as Octopus Go or OVO Charge Anytime) offer cheap off-peak electricity during overnight windows (typically between midnight and 5:00 AM) for around 7p to 9p per kWh, allowing a 60 kWh EV battery to be fully charged for less than £5.',
    },
    {
      q: 'Does an electric car cost less to service and maintain?',
      a: 'Yes, electric cars have approximately 30% to 50% lower maintenance costs over their lifespan because they eliminate engine oil, oil filters, spark plugs, timing belts, fuel injectors, clutches, exhaust systems, and catalytic converters.',
    },
    {
      q: 'Do electric cars pay road tax (VED) in the UK?',
      a: 'From April 2025 onwards, electric vehicles become subject to standard UK Vehicle Excise Duty (VED). However, Company Car drivers still enjoy low Benefit-in-Kind (BiK) tax rates (2% to 3%), providing substantial annual tax savings.',
    },
    {
      q: 'How does cold winter weather affect EV efficiency and charging costs?',
      a: 'Sub-zero winter temperatures reduce EV efficiency by 15% to 25% due to battery chemical resistance and cabin heating demands. Preheating the cabin while the vehicle is still plugged in at home preserves battery range and minimizes winter running costs.',
    },
  ],
  sources: [
    {
      label: 'Ofgem Domestic Energy Price Cap Information',
      url: 'https://www.ofgem.gov.uk/energy-price-cap',
    },
    {
      label: 'Department for Transport (DfT) Electric Vehicle and Fuel Statistics',
      url: 'https://www.gov.uk/government/organisations/department-for-transport',
    },
    {
      label: 'Energy Saving Trust - Electric Vehicles Guide and Running Costs',
      url: 'https://energysavingtrust.org.uk/advice/electric-vehicles/',
    },
  ],
  relatedTools: [
    {
      title: 'UK Fuel Cost Calculator',
      slug: 'fuel-cost-calculator/uk',
      description: 'Calculate petrol and diesel trip expenses using official DESNZ weekly prices.',
      category: 'travel',
    },
    {
      title: 'MPG to Litres per 100km Converter',
      slug: 'mpg-to-litres-per-100km',
      description: 'Interactive conversion tool for UK MPG, US MPG, and L/100km.',
      category: 'travel',
    },
    {
      title: 'UK Electricity Cost Calculator',
      slug: 'electricity-cost-calculator/uk',
      description: 'Calculate domestic household appliance electricity running costs.',
      category: 'home-energy',
    },
  ],
  relatedGuides: [
    {
      title: 'How to Read Your Electricity Bill (UK Guide)',
      slug: 'guides/how-to-read-your-electricity-bill-uk',
      description: 'Understanding kilowatt-hour unit rates, daily standing charges, and power tariffs.',
      category: 'home-energy',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'EV versus petrol savings calculations are estimates based on standard laboratory consumption ratings, official DESNZ weekly fuel prices, and Ofgem domestic electricity price cap rates. Actual savings depend on driving style, proportion of home vs public charging, and weather conditions.',
};

export default evVsPetrolEn;
