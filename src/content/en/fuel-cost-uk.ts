import { PageContent } from '../types';

export const fuelCostUkEn: PageContent = {
  metaTitle: 'UK Fuel Cost Calculator 2026 | Petrol & Diesel Trip Cost',
  metaDescription:
    'Calculate UK petrol and diesel trip fuel costs instantly. Uses official DESNZ fuel prices, MPG to litres conversion, and passenger split calculations.',
  h1: 'UK Fuel Cost Calculator 2026 (Petrol & Diesel)',
  quickAnswer:
    "To calculate fuel cost for a UK trip, divide total journey miles by your car's UK MPG, multiply by 4.54609 to get litres consumed, and multiply by the fuel price per litre. For example, 100 miles at 40 MPG with petrol at £1.385 per litre uses 11.37 litres and costs £15.74.",
  howItWorks: [
    {
      label: '1. Journey Distance Assessment',
      formula: 'Total Distance = One-Way Miles × (2 if Round Trip else 1)',
      ruleCitation: 'Weights and Measures Act 1985 (Road Signage & Distances in Statute Miles)',
      effectiveDate: 'Standard UK statutory distance measure',
    },
    {
      label: '2. Fuel Volume Calculation',
      formula: 'Litres Used = (Total Miles ÷ UK MPG) × 4.54609',
      ruleCitation: 'Units of Measurement Regulations 1995 (Imperial Gallon = 4.54609 Litres)',
      effectiveDate: 'Enacted pursuant to BS 350 / Weights and Measures Act',
    },
    {
      label: '3. Fuel Cost Computation',
      formula: 'Fuel Cost = Litres Used × Fuel Price (£ per Litre)',
      ruleCitation: 'DESNZ Weekly Road Fuel and Petroleum Product Prices',
      effectiveDate: 'Department for Energy Security and Net Zero 2026 Benchmark',
    },
    {
      label: '4. Total Trip & Passenger Split',
      formula: 'Per Person = (Fuel Cost + Tolls + Parking) ÷ Passengers',
      ruleCitation: 'HMRC Advisory Fuel Rates & Commuting Passenger Guidelines',
      effectiveDate: 'Fair cost-sharing principles without profit extraction',
    },
  ],
  articleSections: [
    {
      id: 'uk-road-fuel-taxation-system',
      title: 'How UK Road Fuel Pricing Works: Fuel Duty and VAT Structure',
      level: 2,
      content:
        'When you pull onto a forecourt in England, Scotland, or Wales to fill up with unleaded petrol (ULSP) or diesel (ULSD), retail pump prices reflect a combination of global wholesale crude prices, refining and logistics margins, biofuel blending mandates, and substantial statutory taxation.\n\nUnder HM Revenue and Customs (HMRC) statutory rules, road fuels in the United Kingdom are subject to two distinct taxes. First is Fuel Duty, levied as a fixed statutory levy per physical litre of hydrocarbon fuel. Following temporary 5p relief extensions, fuel duty accounts for a significant baseline fee on every single litre pumped into passenger and commercial vehicles. Second is Value Added Tax (VAT), levied at the standard statutory rate of 20% pursuant to the Value Added Tax Act 1994. Crucially, VAT is applied to the gross sum of the wholesale product, retailer margin, and the fuel duty itself—creating a compound tax structure where motorists pay tax upon tax.\n\nBecause forecourts display retail prices in pence per litre while vehicles sold in the UK express odometer readings in statute miles and fuel economy in miles per imperial gallon (MPG), British motorists face a hybrid measurement challenge when budgeting journeys. Understanding how to link miles, gallons, and pence per litre ensures complete financial transparency for private road trips, self-employed expense claims, and business travel allowances.',
    },
    {
      id: 'converting-uk-mpg-to-litres',
      title: 'Converting Imperial UK MPG into Litres for Journey Planning',
      level: 2,
      content:
        'The United Kingdom occupies a unique position in transport mathematics: speed limits and road distances remain officially signposted in statute miles under the Road Traffic Regulation Act 1984, yet fuel has been dispensed exclusively in metric litres since 1995 under European Units of Measurement Directives.\n\nCar manufacturers advertise fuel economy in UK miles per gallon (MPG). One imperial gallon equals exactly 4.54609 litres, making it approximately 20.1% larger than a United States liquid gallon (3.78541 litres). To determine how many litres a vehicle will consume over a planned journey, use the standard mathematical sequence:\n\n1. Divide total journey distance in miles by the vehicle\'s real-world UK MPG. This yields total imperial gallons.\n2. Multiply the result by 4.54609 to convert imperial gallons into litres.\n3. Multiply total litres by the forecourt pump price expressed in pounds per litre.\n\nAlternatively, if your trip computer reports fuel consumption in European metric notation (litres per 100 kilometres), the statutory conversion constant is 282.481. Dividing 282.481 by your car\'s UK MPG yields its equivalent consumption in L/100km. A family saloon achieving 42 UK MPG consumes approximately 6.73 L/100km on motorway transit.',
    },
    {
      id: 'real-world-fuel-economy-factors',
      title: 'Factors Influencing Real-World MPG Versus Official WLTP Figures',
      level: 2,
      content:
        'New vehicles sold in Great Britain since September 2018 carry official fuel economy ratings determined under the Worldwide Harmonised Light Vehicles Test Procedure (WLTP). While WLTP represents a far more realistic testing cycle than the obsolete New European Driving Cycle (NEDC), real-world fuel economy almost invariably diverges from laboratory ratings.\n\nKey physical variables altering real-world fuel consumption include:\n\n- **Cruising Speed and Aerodynamic Drag**: Aerodynamic drag increases with the square of vehicle speed. Driving at a sustained 70 mph on the M1 or M6 requires up to 15% to 20% more engine power to overcome air resistance compared to cruising at 60 mph.\n- **Driving Style and Anticipation**: Aggressive acceleration and abrupt late braking consume dramatically more fuel than smooth progressive momentum conservation. In stop-start urban congestion, internal combustion engines waste significant chemical energy idling and rebuilding kinetic momentum.\n- **Tyre Pressure and Payload**: Underinflated tyres increase rolling resistance against asphalt surfaces, reducing fuel economy by up to 3% to 5%. Carrying unnecessary roof boxes, cycle racks, or redundant luggage substantially amplifies both dead weight and aerodynamic resistance.\n- **Auxiliary Electrical Loads**: Running high-output air conditioning, heated windscreens, heated seats, and auxiliary electronics places parasitic loads on the engine alternator, marginally elevating fuel consumption, particularly in winter climates.',
    },
    {
      id: 'splitting-costs-fairly-between-passengers',
      title: 'Splitting Fuel Costs Fairly for Road Trips, Commuting, and Holidays',
      level: 2,
      content:
        'Carpooling and shared holiday journeys provide substantial economic savings, particularly during bank holiday getaways and long-distance airport runs. However, disagreements frequently arise over how fuel expenses and road tolls should be divided.\n\nA equitable fuel splitting model operates on total out-of-pocket variable trip expenditures:\n1. Calculate total fuel consumed based on the vehicle\'s verified consumption rate and the actual fuel pump receipts.\n2. Add statutory bridge, tunnel, and motorway toll fees (such as the Dartford Crossing charge, the M6 Toll fee, or the Mersey Gateway toll).\n3. Add destination parking tickets and airport drop-off fees.\n4. Divide the cumulative aggregate expenditure equally by the total headcount of travelling adults.\n\nUnder UK law, drivers who accept voluntary fuel contributions from passengers must adhere to HMRC informal car-sharing exemptions. Passenger contributions must never exceed variable operating running costs or generate an operating commercial profit. When passenger payments remain strictly cost-sharing reimbursements, they do not constitute commercial carriage for hire or reward, ensuring vehicle insurance policies remain fully valid without requiring costly private hire or taxi endorsements.',
    },
    {
      id: 'hmrc-mileage-allowances-and-advisory-rates',
      title: 'HMRC Advisory Fuel Rates (AFR) Versus Actual Cost Accounting',
      level: 2,
      content:
        'For business journeys undertaken in private vehicles, HMRC publishes statutory Mileage Allowance Relief (Approved Mileage Allowance Payments, or AMAP) set at 45 pence per mile for the first 10,000 business miles in a tax year, and 25 pence per mile thereafter. This statutory AMAP rate covers fuel, depreciation, servicing, tyres, road tax, and insurance comprehensively.\n\nConversely, for company cars provided by employers where employees pay for private motoring or claim business fuel reimbursement, HMRC publishes quarterly Advisory Fuel Rates (AFR). AFR figures provide official pence-per-mile benchmarks categorized by engine cubic capacity (such as up to 1,400cc, 1,401cc to 2,000cc, and over 2,000cc) and fuel type (petrol, diesel, LPG, or fully electric Advisory Electricity Rate). Using an accurate trip fuel calculator allows motorists to compare their actual mechanical running expense against HMRC statutory advisory allowances to evaluate tax efficiency.',
    },
  ],
  examples: [
    {
      title: 'London to Manchester Weekend Round Trip (Petrol)',
      scenario:
        'A family of 4 drives from Central London to Manchester and back in a petrol crossover for a holiday weekend, covering 420 miles round trip.',
      calculationType: 'custom',
      inputAmount: 420,
      rate: 38,
      resultTotal: 69.41,
      customFields: [
        { label: 'One-Way Distance', value: '210 miles' },
        { label: 'Total Round Trip Distance', value: '420 miles', highlight: true },
        { label: 'Average Fuel Economy', value: '38.0 UK MPG' },
        { label: 'DESNZ Petrol Price Benchmark', value: '£1.385 / Litre' },
        { label: 'Total Fuel Consumed', value: '50.12 Litres (11.05 imp gal)' },
        { label: 'Total Journey Fuel Cost', value: '£69.41', highlight: true },
        { label: 'Cost Per Passenger (4 People)', value: '£17.35 each', highlight: true },
        { label: 'Running Cost per Mile', value: '16.5p / mile' },
      ],
      explanation:
        'Total mileage of 420 miles divided by 38 UK MPG equals 11.053 imperial gallons. Multiplying by 4.54609 yields 50.12 litres. At £1.385 per litre, the total fuel bill is £69.41. Divided equally among 4 passengers, each person contributes £17.35.',
    },
    {
      title: 'Edinburgh to Aberdeen Business Commute with Tolls (Diesel)',
      scenario:
        'Two colleagues travel from Edinburgh to Aberdeen and return in a diesel saloon with 125 miles each way (250 miles total), achieving 52 MPG with £15 bridge and parking charges.',
      calculationType: 'custom',
      inputAmount: 250,
      rate: 52,
      resultTotal: 46.21,
      customFields: [
        { label: 'Journey Type', value: '250 miles Round Trip' },
        { label: 'Diesel Fuel Economy', value: '52.0 UK MPG' },
        { label: 'Diesel Pump Price', value: '£1.432 / Litre' },
        { label: 'Fuel Consumed', value: '21.86 Litres' },
        { label: 'Base Fuel Cost', value: '£31.21' },
        { label: 'Tolls & City Parking', value: '£15.00' },
        { label: 'Total Trip Cost (Fuel + Extras)', value: '£46.21', highlight: true },
        { label: 'Split Per Person (2 Colleagues)', value: '£23.11 each', highlight: true },
      ],
      explanation:
        '250 miles at 52 MPG requires 4.808 imperial gallons (21.855 litres). At £1.432 per litre for diesel, fuel totals £31.21. Adding £15.00 for parking and toll charges gives a grand total of £46.21, or £23.11 per colleague.',
    },
  ],
  faqs: [
    {
      q: 'How do I calculate fuel cost for a journey manually in the UK?',
      a: "Divide total journey distance in miles by your vehicle's UK MPG to find imperial gallons. Multiply by 4.54609 to convert into litres, then multiply the litres by the pump price in pounds per litre (for instance £1.385). Finally, add any road tolls or parking fees.",
    },
    {
      q: 'What is the official difference between UK MPG and US MPG?',
      a: 'A UK (imperial) gallon is legally defined as 4.54609 litres, whereas a US liquid gallon is 3.78541 litres. Because the imperial gallon is approximately 20.1% larger, a vehicle rated at 40 UK MPG will only register 33.3 US MPG for the identical fuel efficiency.',
    },
    {
      q: 'Where does the official road fuel price benchmark come from?',
      a: 'Our default fuel figures are sourced weekly from the Department for Energy Security and Net Zero (DESNZ) weekly road fuel price dataset, tracking average retail pump prices across UK forecourts for standard unleaded petrol (ULSP) and diesel (ULSD).',
    },
    {
      q: 'How much does fuel cost per mile in the UK on average?',
      a: 'For an average petrol car achieving 40 UK MPG with petrol at £1.385 per litre, fuel costs approximately 15.7p per mile. For a modern diesel car achieving 55 MPG with diesel at £1.432 per litre, running cost drops to approximately 11.8p per mile.',
    },
    {
      q: 'Does turning on the car air conditioner increase fuel consumption?',
      a: 'Yes. Running vehicle air conditioning powers a mechanical compressor driven by the engine belt, which typically increases fuel consumption by 5% to 10% in urban driving and 3% to 5% at motorway speeds.',
    },
    {
      q: 'Can I legally accept petrol money from friends without invalidating car insurance?',
      a: 'Yes, under UK law you may accept contributions towards actual running costs (fuel, oil, and tolls) from passengers. However, you must not make a commercial profit from the journey, as profit transforms the trip into commercial carriage for hire or reward.',
    },
    {
      q: 'How do road tolls and parking get factored into passenger splits?',
      a: 'Tolls and parking are treated as shared non-fuel journey extras. They are added directly to the total fuel cost before dividing by the number of vehicle occupants so everyone bears an equal share of all journey expenses.',
    },
    {
      q: 'What is the formula to convert UK MPG into Litres per 100km?',
      a: 'The formula is: Litres per 100km = 282.481 ÷ UK MPG. For instance, if your vehicle achieves 45 UK MPG: 282.481 ÷ 45 = 6.28 L/100km.',
    },
    {
      q: 'How does vehicle speed affect motorway fuel consumption?',
      a: 'Aerodynamic resistance increases with the square of speed. Driving at a sustained 75 mph consumes approximately 15% to 20% more fuel than cruising at the national 70 mph limit, and up to 30% more than cruising steadily at 60 mph.',
    },
  ],
  sources: [
    {
      label: 'Department for Energy Security and Net Zero (DESNZ) Weekly Road Fuel Prices',
      url: 'https://www.gov.uk/government/collections/road-fuel-and-other-petroleum-product-prices',
    },
    {
      label: 'HMRC Advisory Fuel Rates (AFR) & Travel Expense Guidelines',
      url: 'https://www.gov.uk/guidance/advisory-fuel-rates',
    },
    {
      label: 'Vehicle Certification Agency (VCA) Car Fuel Consumption and CO2 Figures',
      url: 'https://www.vehicle-certification-agency.gov.uk/fcb/',
    },
  ],
  relatedTools: [
    {
      title: 'MPG to Litres per 100km Converter',
      slug: 'mpg-to-litres-per-100km',
      description: 'Convert between UK MPG, US MPG, L/100km, and km/L instantly.',
      category: 'travel',
    },
    {
      title: 'EV vs Petrol Cost Calculator',
      slug: 'fuel-cost-calculator/ev-vs-petrol',
      description: 'Compare electric car home charging expenses against petrol and diesel running costs.',
      category: 'travel',
    },
    {
      title: 'UK VAT Calculator',
      slug: 'vat-calculator/uk',
      description: 'Calculate standard 20% and reduced 5% UK VAT additions and subtractions.',
      category: 'tax-vat',
    },
  ],
  relatedGuides: [
    {
      title: 'UK Energy Price Cap Explained',
      slug: 'guides/energy-price-cap-explained',
      description: 'How wholesale energy market fluctuations impact domestic unit rates and standing charges.',
      category: 'home-energy',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Fuel cost calculations are estimates based on standard physical conversion factors and official weekly DESNZ fuel price benchmarks. Real-world fuel consumption varies based on driving behaviour, vehicle payload, gradient, weather conditions, and forecourt pricing.',
};

export default fuelCostUkEn;
