import { PageContent } from '../types';

export const electricityCostAustraliaEn: PageContent = {
  metaTitle: 'Australia Electricity Cost Calculator 2026 | AER DMO & State Appliance Rates',
  metaDescription:
    'Calculate appliance running costs across Australian states (NSW, VIC, QLD, SA, WA). Compare electricity prices using AER Default Market Offer benchmarks.',
  h1: 'Australia Electricity Cost Calculator 2026 (AER DMO & State Rates)',
  quickAnswer:
    'At Australia’s national benchmark electricity tariff of 33.20c per kWh (ranging from 28.7c in Victoria to 41.5c in South Australia under the AER Default Market Offer), running a 2,000W heater or portable air conditioner costs 66.4c per hour, an air fryer costs 28.2c for 30 minutes, and boiling a kettle costs approx. 3.0c.',
  howItWorks: [
    {
      label: '1. Converting Appliance Watts to kWh',
      formula: 'Energy (kWh) = (Power in Watts × Operating Hours) ÷ 1,000',
      ruleCitation: 'National Electricity Market (NEM) Standard Metric',
      effectiveDate: 'SI Metric Energy Standard',
    },
    {
      label: '2. Applying State Electricity Tariff (c/kWh)',
      formula: 'Cost (A$) = (Energy Consumed in kWh × State Rate in Cents) ÷ 100',
      ruleCitation: 'AER Default Market Offer (DMO) / ESC Victorian Default Offer (VDO)',
      effectiveDate: 'Valid for 2025–2026 default standing offers',
    },
    {
      label: '3. Adding Daily Supply Charges',
      formula: 'Total Daily Electricity Cost = Appliance Costs + Daily Supply Charge (approx. 105c–120c/day)',
      ruleCitation: 'National Energy Retail Rules (NERR)',
      effectiveDate: 'Statutory retail grid connection charges',
    },
    {
      label: '4. Standby Energy Draw',
      formula: 'Standby Cost (A$/year) = (Standby Watts × 8,760 hours × Rate) ÷ 100,000',
      ruleCitation: 'Equipment Energy Efficiency (E3) Program Standards',
      effectiveDate: 'AS/NZS standby power benchmarks',
    },
  ],
  articleSections: [
    {
      id: 'understanding-aer-dmo-vdo',
      title: 'How Electricity Pricing Works in Australia (DMO & VDO Explained)',
      level: 2,
      content:
        'In Australia, electricity prices in states connected to the National Electricity Market (NEM)—including New South Wales, South Australia, South East Queensland, and the ACT—are benchmarked by the Australian Energy Regulator (AER) through the Default Market Offer (DMO). In Victoria, an equivalent safety-net price cap known as the Victorian Default Offer (VDO) is determined independently by the Essential Services Commission (ESC).\n\nThe DMO and VDO establish a statutory maximum reference price that energy retailers can charge standing-offer customers on standard flat-rate and time-of-use tariffs. Beyond protecting consumers from unjustified price hikes, the DMO serves as an official reference benchmark against which all competitive retail market offers must be compared (e.g. "15% less than the AER Reference Price").',
    },
    {
      id: 'state-by-state-electricity-rates',
      title: 'State-by-State Electricity Rate Breakdown (2025–2026 Benchmarks)',
      level: 2,
      content:
        'Electricity tariffs vary substantially across Australian states and territories due to state transmission network architectures, generation fuel mixes, and geographic customer density:\n\n- **New South Wales (NSW)**: ~34.5c/kWh | Daily supply charge: ~110.2c/day (Ausgrid, Endeavour, Essential Energy distribution zones)\n- **Victoria (VIC)**: ~28.7c/kWh | Daily supply charge: ~105.5c/day (Citipower, Powercor, Jemena, AusNet, United Energy; regulated by ESC VDO)\n- **South East Queensland (QLD)**: ~31.8c/kWh | Daily supply charge: ~115.2c/day (Energex distribution zone)\n- **South Australia (SA)**: ~41.5c/kWh | Daily supply charge: ~120.0c/day (SA Power Networks; highest proportion of renewables but historically volatile wholesale peaks)\n- **Western Australia (WA)**: ~31.9c/kWh | Daily supply charge: ~113.3c/day (Synergy Home Plan A1 regulated by the WA State Government on the isolated SWIS grid)\n- **Tasmania (TAS)**: ~30.5c/kWh | Daily supply charge: ~118.0c/day (Aurora Energy regulated standing offer backed by hydro generation)\n- **Australian Capital Territory (ACT)**: ~29.2c/kWh | Daily supply charge: ~108.0c/day (Evoenergy network area regulated by ICRC)',
    },
    {
      id: 'australian-heavy-power-appliances',
      title: 'High-Consumption Appliances in Australian Homes',
      level: 2,
      content:
        'Australian domestic energy consumption is shaped heavily by regional climate extremes and outdoor lifestyle equipment:\n\n1. **Air Conditioning & Reverse-Cycle Heating**: Cooling in humid Queensland summers or heating during brisk Melbourne and Canberra winters accounts for approximately 40% of an average Australian household’s energy bill. A 2.5 kW portable AC running 6 hours daily during a heatwave draws 6.6 kWh (costing around A$2.20 per day in NSW or A$2.74 in SA).\n\n2. **Swimming Pool Filtration Pumps**: A standard 1,000W–1,500W single-speed pool pump running 8 hours daily during summer consumes 8 to 12 kWh per day—costing between A$80 and A$150 per month in electricity alone. Upgrading to a multi-speed or variable-speed DC pool pump reduces energy use by up to 70%.\n\n3. **Electric Storage Hot Water Systems**: Resistive electric hot water cylinders (3.6 kW elements) are major consumers. Running an unoptimized electric hot water tank on a continuous tariff can cost upwards of A$900 per year, which is why controlled-load (Off-Peak 1 or Off-Peak 2) or solar heat pump water heaters are widely adopted across Australia.',
    },
    {
      id: 'solar-and-battery-self-consumption',
      title: 'Maximizing Savings with Rooftop Solar & Solar Shifting',
      level: 2,
      content:
        'With over 3.5 million Australian homes equipped with rooftop photovoltaic (PV) solar systems, calculating appliance running costs is increasingly about timing rather than just total wattage. While grid electricity costs 28c–42c per kWh, wholesale feed-in tariffs (FiT) paid by retailers for exported solar power have dwindled to between 3c and 7c per kWh.\n\nBy running heavy appliances during the solar window (10:00 AM to 3:00 PM)—such as dishwashers, washing machines, pool pumps, and electric vehicle chargers—households consume self-generated electricity worth 33c/kWh rather than exporting it for 5c/kWh, saving hundreds of dollars annually.',
    },
  ],
  examples: [
    {
      title: 'Reverse-Cycle Split System Air Conditioner (Summer Cooling)',
      scenario: 'Running a 5.0 kW cooling capacity (1.2 kW electrical input) inverter split system for 6 hours daily during summer.',
      customFields: [
        { label: 'Electrical Power Draw', value: '1,200 Watts (1.2 kW)' },
        { label: 'Daily Runtime', value: '6 hours / day' },
        { label: 'NSW DMO Rate', value: '34.5c / kWh' },
        { label: 'Daily Running Cost', value: 'A$2.48 / day', highlight: true },
        { label: 'Monthly Summer Cost', value: 'A$74.52 / month (30 days)' },
        { label: 'Cost with Rooftop Solar', value: 'A$0.36 / day (opportunity cost of 5c FiT)' },
      ],
      explanation:
        'A modern inverter split system cycles down once the room is cool. Running the unit during peak afternoon sun when solar generation is high cuts the effective running cost from A$75/month to under A$12/month.',
    },
    {
      title: 'Swimming Pool Pump (Single Speed vs Variable Speed)',
      scenario: 'Filtering a residential swimming pool 8 hours per day across a 90-day Australian summer season.',
      customFields: [
        { label: 'Old Single-Speed Pump (1,200W)', value: '9.6 kWh / day | A$3.19 / day' },
        { label: '90-Day Summer Cost (Old)', value: 'A$286.92' },
        { label: 'Variable-Speed Eco Pump (300W on low)', value: '2.4 kWh / day | A$0.80 / day', highlight: true },
        { label: '90-Day Summer Cost (Eco)', value: 'A$71.71' },
        { label: 'Summer Electricity Savings', value: 'A$215.21 saved per summer' },
      ],
      explanation:
        'Water flow resistance drops exponentially at lower speeds. Running a variable-speed pump at low RPM for slightly longer hours keeps pool water sparkling while slashing electrical draw by 75%.',
    },
    {
      title: 'Air Fryer vs Conventional Electric Oven in Brisbane',
      scenario: 'Cooking a family meal 4 times per week using a 1700W air fryer (25 min) versus a 2400W oven (45 min + preheat).',
      customFields: [
        { label: 'Electric Oven (1.8 kWh/use)', value: 'A$0.57 per meal' },
        { label: 'Air Fryer (0.71 kWh/use)', value: 'A$0.23 per meal', highlight: true },
        { label: 'Queensland Rate', value: '31.8c / kWh' },
        { label: 'Annual Savings (4x/week)', value: 'A$71.80 saved per year' },
      ],
      explanation:
        'The air fryer requires no lengthy preheating and does not heat up the kitchen on warm Queensland summer evenings, saving both cooking electricity and air conditioning load.',
    },
  ],
  faqs: [
    {
      q: 'What is the average electricity cost per kWh in Australia in 2026?',
      a: 'The national average residential electricity tariff is approximately 33.20c per kilowatt-hour (c/kWh). By state: Victoria averages ~28.7c, the ACT ~29.2c, Queensland ~31.8c, WA ~31.9c, NSW ~34.5c, and South Australia ~41.5c under AER Default Market Offer benchmarks.',
    },
    {
      q: 'What is the Default Market Offer (DMO)?',
      a: 'The Default Market Offer is a regulated price cap set annually by the Australian Energy Regulator (AER) for residential and small business customers in NSW, SA, and SE Queensland on standard retail contracts. It acts as a safety-net maximum price.',
    },
    {
      q: 'What is the daily supply charge on an Australian electricity bill?',
      a: 'The daily supply charge (or service availability charge) is a fixed fee charged each day (typically between A$1.05 and A$1.25 per day, or ~A$380 to A$450 annually) to maintain the physical poles, wires, substations, and grid infrastructure connected to your home.',
    },
    {
      q: 'Is it cheaper to run appliances during the day if I have solar panels?',
      a: 'Yes, substantially cheaper. Exporting surplus rooftop solar to the grid earns an export feed-in tariff of only 3c to 7c per kWh. Consuming that solar power directly to run dishwashers, washing machines, or pool pumps saves you buying grid power at 30c to 42c per kWh.',
    },
    {
      q: 'How much does it cost to charge an electric vehicle at home in Australia?',
      a: 'Charging a typical 60 kWh electric vehicle battery from empty to full at standard flat-rate grid prices (33.2c/kWh) costs approx. A$19.92 (delivering roughly 350–400 km of range). On an EV time-of-use super-off-peak tariff (e.g. 8c/kWh overnight) or using rooftop solar, a full recharge costs under A$5.00.',
    },
    {
      q: 'What is a controlled load tariff?',
      a: 'A controlled load (often labelled Dedicated Circuit, Tariff 31, Tariff 33, or Off-Peak 1/2) is a separate electricity circuit metered specifically for heavy storage appliances like electric water heaters or underfloor slab heating. Power is supplied only during off-peak hours at a heavily discounted rate (typically 18c–22c/kWh).',
    },
  ],
  sources: [
    { label: 'Australian Energy Regulator (AER Default Market Offer)', url: 'https://www.aer.gov.au/retail-markets/retail-guidelines-reviews/default-market-offer' },
    { label: 'Essential Services Commission Victoria (VDO)', url: 'https://www.esc.vic.gov.au/electricity-and-gas/prices-tariffs-and-benchmarks/victorian-default-offer' },
    { label: 'Energy Made Easy (Australian Government Comparison Tool)', url: 'https://www.energymadeeasy.gov.au' },
  ],
  relatedTools: [
    { title: 'UK Electricity Cost Calculator', slug: 'electricity-cost-calculator/uk', description: 'Calculate home appliance power costs using UK Ofgem price cap benchmarks.', category: 'home-energy' },
    { title: 'Deutscher Stromkostenrechner', slug: 'de/stromkosten-rechner', description: 'Berechnen Sie den Stromverbrauch und die Kosten Ihrer Haushaltsgeräte in Deutschland.', category: 'home-energy' },
    { title: 'Australia Fuel Cost Calculator', slug: 'fuel-cost-calculator/australia', description: 'Calculate Australian road trip fuel costs and compare against public transit.', category: 'travel' },
  ],
  relatedGuides: [
    { title: 'Energy Price Cap Explained', slug: 'guides/energy-price-cap-explained', description: 'Learn how energy market regulators set reference prices, standing charges, and safety net caps.', category: 'home-energy' },
    { title: 'How to Read Your Electricity Bill (UK)', slug: 'guides/how-to-read-your-electricity-bill-uk', description: 'Step-by-step guide to meter reads, standing charges, and kWh tariffs.', category: 'home-energy' },
  ],
  updatedAt: '2026-01-01',
};
