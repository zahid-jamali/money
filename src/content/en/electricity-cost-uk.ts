import { PageContent } from '../types';

export const electricityCostUkEn: PageContent = {
  metaTitle: 'UK Electricity Cost Calculator 2026 | Appliance Running Costs & Ofgem Price Cap',
  metaDescription:
    'Calculate exact electricity running costs for UK home appliances using active Ofgem price cap rates (24.5p/kWh). Compare appliances and save on energy bills.',
  h1: 'UK Electricity Cost Calculator 2026 (Ofgem Price Cap)',
  quickAnswer:
    'Under the active UK Ofgem price cap (direct debit average of 24.50p per kWh), running a 2,000W electric heater costs 49.0p per hour, a 1,700W air fryer costs 20.8p for 30 minutes, boiling a 2,200W kettle for 2.5 minutes costs 2.2p, and a 10-minute shower on an 8.5 kW electric shower costs 34.7p.',
  howItWorks: [
    {
      label: '1. Converting Watts to Kilowatt-Hours (kWh)',
      formula: 'kWh = (Power in Watts × Runtime in Hours) ÷ 1,000',
      ruleCitation: 'International System of Units (SI) Energy Formula',
      effectiveDate: 'Standard electrical metric',
    },
    {
      label: '2. Calculating Cost from Ofgem Unit Rate',
      formula: 'Running Cost (p) = Energy Consumed (kWh) × Unit Rate (24.50p/kWh)',
      ruleCitation: 'Ofgem Standard Default Tariff Price Cap Regulations',
      effectiveDate: 'Valid for current direct debit default tariffs',
    },
    {
      label: '3. Calculating Annual Appliance Cost',
      formula: 'Annual Cost (£) = (Daily Active kWh × Days/Week × 52 × 24.50p) ÷ 100',
      ruleCitation: 'Standardised 52-week domestic usage model',
      effectiveDate: 'Annualised consumption benchmark',
    },
    {
      label: '4. Standby Power Consumption',
      formula: 'Standby Cost (£) = (Standby Watts × Standby Hours/Year × 24.50p) ÷ 100,000',
      ruleCitation: 'EU/UK Ecodesign Standby Power Regulations',
      effectiveDate: 'Directive 1275/2008/EC standards',
    },
  ],
  articleSections: [
    {
      id: 'understanding-ofgem-price-cap',
      title: 'How the Ofgem Energy Price Cap Sets Electricity Rates in 2026',
      level: 2,
      content:
        'In Great Britain (England, Scotland, and Wales), domestic electricity prices for households on default standard variable tariffs are governed by the statutory Energy Price Cap administered by Ofgem (the Office of Gas and Electricity Markets). Established under the Domestic Gas and Electricity (Tariff Cap) Act 2018, the cap limits the maximum unit rate (pence per kilowatt-hour) and the daily standing charge that energy suppliers can levy on domestic customers.\n\nOfgem reviews and updates the price cap quarterly (effective 1 January, 1 April, 1 July, and 1 October) to reflect wholesale energy market fluctuations, network distribution costs, policy levies, and operating margins. For direct debit customers in 2026, the electricity unit rate cap is set at 24.50p per kWh, accompanied by a daily standing charge averaging 60.10p per day (£219.37 annually) simply for remaining connected to the grid, regardless of how much electricity is consumed.',
    },
    {
      id: 'top-electricity-consumers',
      title: 'Which Household Appliances Consume the Most Electricity?',
      level: 2,
      content:
        'Domestic electrical appliances fall into three broad thermodynamic categories based on how rapidly they draw power from the grid:\n\n1. **Thermal Heating & Water Elements (Highest Draw)**: Appliances designed to create immediate thermal changes demand immense electrical current. Electric showers (7.5 kW – 10.5 kW) and domestic immersion heaters (3 kW) are the highest instantaneous consumers in any home. A single 10-minute shower draws roughly 1.4 kWh (approx. 35p). Similarly, portable electric fan heaters (2 kW) consume 49p for every single hour of operation.\n\n2. **Kitchen & Laundry Motor/Heat Appliances (Moderate Draw)**: Tumble dryers (especially vented and condenser models drawing 2.2 kW) consume between 3.0 and 3.5 kWh per load (around 75p to 85p per cycle). Washing machines and dishwashers draw between 1.5 kW and 2.0 kW, though over 85% of their electricity is spent heating water rather than turning motors.\n\n3. **Continuous Low-Wattage Electronics (Cumulative Draw)**: Appliances such as fridge-freezers (100W–150W compressor cycling continuously), televisions (100W), desktop PCs (400W), and Wi-Fi routers (10W) operate for thousands of hours each year. While their hourly cost seems low (e.g. 2.5p/hour), their cumulative annual cost often accounts for one-third of a household\'s total annual electricity bill.',
    },
    {
      id: 'appliance-cost-benchmark-table',
      title: 'Appliance Running Cost Benchmark Table (UK 2026)',
      level: 2,
      content:
        'Below is a summary of typical appliance running costs based on the 24.5p/kWh Ofgem direct debit price cap:\n\n- **Electric Shower (8.5 kW)**: 34.7p per 10-minute shower | ~£127/year (1 shower/day)\n- **Electric Fan Heater (2 kW)**: 49.0p per hour | ~£132/winter month (3 hours/day)\n- **Tumble Dryer (Condenser 2.2 kW)**: 80.9p per 90-min cycle | ~£126/year (3 loads/week)\n- **Heat Pump Dryer (900W)**: 33.1p per 90-min cycle | ~£52/year (3 loads/week)\n- **Electric Oven (2.5 kW)**: 36.8p per 45-min cooking session | ~£96/year (5 sessions/week)\n- **Air Fryer (1.7 kW)**: 20.8p per 30-min cooking session | ~£43/year (4 sessions/week)\n- **Washing Machine (40°C)**: 19.6p per 1-hour cycle | ~£41/year (4 loads/week)\n- **Dishwasher (Eco 50°C)**: 20.8p per cycle | ~£76/year (1 cycle/day)\n- **Kettle (2.2 kW)**: 2.2p per 2.5-min boil | ~£32/year (4 boils/day)\n- **Television (55" 4K 110W)**: 10.8p per 4 hours | ~£39/year (4 hours/day)\n- **Gaming PC (450W load)**: 33.1p per 3-hour session | ~£121/year (3 hours/day)\n- **EV Home Charger (7.4 kW)**: £6.13 per 25 kWh charge | ~£956/year (3 charges/week on standard cap)',
    },
    {
      id: 'practical-energy-saving-strategies',
      title: 'Actionable Strategies to Reduce Your Electricity Bills',
      level: 2,
      content:
        'Implementing strategic behavioural and technological adjustments yields substantial annual savings without sacrificing daily comfort:\n\n- **Switch to an Air Fryer for Smaller Meals**: Heating a full 70L oven cavity requires 2.5 kW and takes 15 minutes to preheat. An air fryer reaches 200°C instantly and completes small dinners in half the time, saving £40–£60 annually.\n- **Wash Laundry at 30°C**: Decreasing wash temperatures from 40°C to 30°C cuts washing machine electricity use by 38%, while 20°C cold washes cut consumption by 62%.\n- **Max Spin Before Tumble Drying**: Increasing washing machine spin from 1000 RPM to 1400 or 1600 RPM extracts up to 1 litre of excess water, shortening tumble dryer cycles by 20–25 minutes.\n- **Vanquish Vampire Standby Loads**: Media centres, set-top boxes, games consoles, and older microwave displays draw continuous background current. Fitting smart plugs or master-switch extension cords eliminates £45–£70 of phantom loads per year.\n- **Adopt Smart Time-of-Use Tariffs**: If you drive an electric vehicle or have home battery storage, switching to innovative tariffs like Octopus Go, Octopus Agile, or British Gas Electric Driver provides overnight rates between 7p and 9p/kWh—a 70% discount compared to the standard price cap.',
    },
  ],
  examples: [
    {
      title: 'Portable Electric Fan Heater vs Central Heating',
      scenario: 'A homeowner uses a 2000W fan heater in a home office for 4 hours every weekday during winter.',
      customFields: [
        { label: 'Appliance Power', value: '2,000 Watts (2.0 kW)' },
        { label: 'Daily Runtime', value: '4 hours / day' },
        { label: 'Ofgem Unit Rate', value: '24.50p / kWh' },
        { label: 'Daily Cost', value: '£1.96 / day', highlight: true },
        { label: 'Monthly Working Cost', value: '£39.20 / month (20 working days)' },
        { label: 'Heating Alternative', value: 'Electric heated throw (100W) costs £1.96 per MONTH' },
      ],
      explanation:
        'At 49p per hour, running a fan heater 4 hours daily adds nearly £40 per month to your winter bill. Substituting the fan heater with a 100W heated throw or desk heat pad slashes office heating electricity costs by 95%.',
    },
    {
      title: 'Air Fryer vs Conventional Electric Built-in Oven',
      scenario: 'Preparing a dinner recipe that takes 45 minutes in a 2500W oven versus 25 minutes in a 1700W air fryer.',
      customFields: [
        { label: 'Oven Energy (45 min + 15 min preheat)', value: '2.5 kW × 0.8h duty = 1.6 kWh' },
        { label: 'Oven Cost', value: '39.2p per meal' },
        { label: 'Air Fryer Energy (25 min, no preheat)', value: '1.7 kW × 0.42h = 0.71 kWh' },
        { label: 'Air Fryer Cost', value: '17.4p per meal', highlight: true },
        { label: 'Annual Savings (4 meals/week)', value: '£45.34 / year saved' },
      ],
      explanation:
        'The air fryer requires no preheating and cooks the food faster in a concentrated chamber, delivering identical crispy results while cutting energy use and cost by more than 55%.',
    },
    {
      title: 'Tumble Dryer: Condenser vs Heat Pump Technology',
      scenario: 'A family of four completes 4 laundry drying cycles per week throughout the year (208 cycles/year).',
      customFields: [
        { label: 'Standard Condenser Dryer', value: '3.3 kWh / load | 80.9p per cycle' },
        { label: 'Condenser Annual Cost', value: '£168.27 / year' },
        { label: 'A+++ Heat Pump Dryer', value: '1.4 kWh / load | 34.3p per cycle', highlight: true },
        { label: 'Heat Pump Annual Cost', value: '£71.34 / year' },
        { label: 'Annual Family Savings', value: '£96.93 / year saved' },
      ],
      explanation:
        'A heat pump dryer uses a closed thermodynamic refrigeration loop rather than energy-hungry resistance heaters, saving nearly £100 per year for a busy household and preserving fabric fibres.',
    },
  ],
  faqs: [
    {
      q: 'What is the current UK electricity price cap per kWh in 2026?',
      a: 'Under Ofgem’s energy price cap for standard credit and direct debit electricity customers, the GB national average unit rate is 24.50p per kilowatt-hour (kWh), with a daily standing charge of approximately 60.10p per day.',
    },
    {
      q: 'How do you calculate appliance electricity cost from wattage?',
      a: 'Multiply the appliance’s power in Watts by the hours it runs, divide by 1,000 to get kilowatt-hours (kWh), and then multiply by your electricity unit rate in pence. For example: a 2,000W heater for 3 hours = (2,000 × 3) ÷ 1,000 = 6 kWh. At 24.5p/kWh, 6 × 24.5p = 147p (£1.47).',
    },
    {
      q: 'What is a standing charge on UK electricity bills?',
      a: 'The standing charge is a fixed statutory daily fee (currently around 60.10p/day or ~£219/year) that covers the cost of maintaining the National Grid, local power lines, substations, and emergency response teams. You pay this fee every day even if you consume zero electricity.',
    },
    {
      q: 'Does turning down appliances to "Eco Mode" really save electricity?',
      a: 'Yes. Eco modes on washing machines and dishwashers heat water to lower temperatures (e.g. 30°C or 50°C instead of 60°C or 70°C). Because heating water accounts for over 85% of appliance energy consumption, lower wash temperatures save 30% to 50% of the electricity used.',
    },
    {
      q: 'Are smart meters free to install in the UK?',
      a: 'Yes. Under the UK Government smart meter rollout program, energy suppliers must install smart electricity and gas meters with an in-home display (IHD) at no upfront cost upon request.',
    },
    {
      q: 'How much does standby power (vampire load) cost the average UK household?',
      a: 'According to Energy Saving Trust research, appliances left on standby or plugged in without active use cost the average UK household between £45 and £65 per year on domestic electricity bills.',
    },
  ],
  sources: [
    { label: 'Ofgem (Energy Price Cap Rates & Regulations)', url: 'https://www.ofgem.gov.uk/energy-price-cap' },
    { label: 'Energy Saving Trust (Home Energy & Appliance Efficiency)', url: 'https://energysavingtrust.org.uk' },
    { label: 'Department for Energy Security and Net Zero (DESNZ)', url: 'https://www.gov.uk/government/organisations/department-for-energy-security-and-net-zero' },
  ],
  relatedTools: [
    { title: 'Australia Electricity Cost Calculator', slug: 'electricity-cost-calculator/australia', description: 'Calculate home appliance power costs across Australian states using AER DMO rates.', category: 'home-energy' },
    { title: 'Deutscher Stromkostenrechner', slug: 'de/stromkosten-rechner', description: 'Berechnen Sie den Stromverbrauch und die Kosten Ihrer Haushaltsgeräte in Deutschland.', category: 'home-energy' },
    { title: 'EV vs Petrol Running Cost Calculator', slug: 'fuel-cost-calculator/ev-vs-petrol', description: 'Compare home EV charging costs against petrol and diesel per mile.', category: 'travel' },
  ],
  relatedGuides: [
    { title: 'How to Read Your Electricity Bill (UK Guide)', slug: 'guides/how-to-read-your-electricity-bill-uk', description: 'Complete guide to understanding kWh unit rates, standing charges, MPAN numbers, and meter reads.', category: 'home-energy' },
    { title: 'Energy Price Cap Explained', slug: 'guides/energy-price-cap-explained', description: 'In-depth explanation of how Ofgem calculates price caps, wholesale gas impacts, and default tariffs.', category: 'home-energy' },
  ],
  updatedAt: '2026-01-01',
};
