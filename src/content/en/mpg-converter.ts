import { PageContent } from '../types';

export const mpgConverterEn: PageContent = {
  metaTitle: 'MPG to L/100km Converter | UK MPG, US MPG & km/L Chart',
  metaDescription:
    'Convert UK MPG to L/100km, US MPG, and km/L instantly. Includes exact mathematical conversion formulas, reference comparison charts, and worked examples.',
  h1: 'MPG to Litres per 100km Converter (UK, US & Metric)',
  quickAnswer:
    'To convert UK MPG to Litres per 100km, divide 282.481 by the UK MPG figure. To convert US MPG to L/100km, divide 235.215 by the US MPG figure. For example, 40 UK MPG equals 7.06 L/100km, whereas 40 US MPG equals 5.88 L/100km.',
  howItWorks: [
    {
      label: '1. UK MPG to Litres per 100km',
      formula: 'L/100km = 282.481 ÷ UK MPG',
      ruleCitation: 'Units of Measurement Regulations 1995 (Imperial Gallon = 4.54609 Litres)',
      effectiveDate: 'Statutory constant: (100 ÷ 1.609344) × 4.54609 = 282.4809',
    },
    {
      label: '2. US MPG to Litres per 100km',
      formula: 'L/100km = 235.215 ÷ US MPG',
      ruleCitation: 'NIST Handbook 44 (US Liquid Gallon = 231 cubic inches / 3.78541 Litres)',
      effectiveDate: 'Statutory constant: (100 ÷ 1.609344) × 3.78541178 = 235.2146',
    },
    {
      label: '3. Litres per 100km to km per Litre',
      formula: 'km/L = 100 ÷ L/100km (or L/100km = 100 ÷ km/L)',
      ruleCitation: 'SI Brochure (Bureau International des Poids et Mesures)',
      effectiveDate: 'Direct metric reciprocal relation',
    },
    {
      label: '4. Direct UK MPG to US MPG',
      formula: 'US MPG = UK MPG × (3.78541 ÷ 4.54609) ≈ UK MPG × 0.83267',
      ruleCitation: 'Weights and Measures Metrication Standards',
      effectiveDate: 'Imperial-to-US volumetric conversion ratio',
    },
  ],
  articleSections: [
    {
      id: 'imperial-vs-us-gallon-differences',
      title: 'The Imperial Gallon vs the US Gallon: Why UK MPG is 20% Higher',
      level: 2,
      content:
        'One of the most frequent sources of confusion for motorists reading vehicle reviews and fuel economy ratings from international publications is the fundamental physical difference between a British imperial gallon and an American liquid gallon.\n\nHistorically, the British Empire standardised the imperial gallon under the Weights and Measures Act 1824 as the volume of 10 imperial pounds of distilled water at 62°F, legally codifying it as exactly 4.54609 litres. In contrast, the United States retained the historic Queen Anne wine gallon of 1707, defined as 231 cubic inches, which equals exactly 3.785411784 litres. Because the British imperial gallon is approximately 20.09% larger in volumetric capacity than the US gallon, the exact same vehicle consuming an identical volume of petrol will always record a significantly higher numerical miles-per-gallon figure in the United Kingdom than in the United States.\n\nFor example, an automobile that travels 40 miles on one imperial gallon delivers 40.0 UK MPG. In the United States, that same quantity of fuel corresponds to only 0.8327 US gallons, meaning the car delivers only 33.3 US MPG. Always verify whether an automotive figure references UK or US gallons before comparing transatlantic vehicle specs.',
    },
    {
      id: 'inverse-nature-of-l100km',
      title: 'The Inverse Relationship: Why Higher MPG Means Lower L/100km',
      level: 2,
      content:
        'Another critical distinction between Anglo-American and European metric notation lies in the mathematical orientation of fuel measurement.\n\nIn the UK and US systems, fuel economy is expressed as **distance per fixed unit of fuel** (miles per gallon). Under this convention, a larger number denotes higher efficiency (better economy), because the vehicle travels further on a gallon of fuel. Conversely, in the metric system utilized across Germany, France, Australia, Canada, and the European Union, fuel consumption is expressed as **volume of fuel consumed per fixed unit of distance** (litres per 100 kilometres).\n\nUnder metric L/100km notation, a lower number denotes superior efficiency, because less fuel is required to traverse 100 kilometres of road:\n- An economical supermini requires only 4.2 L/100km (approx. 67.3 UK MPG).\n- A standard family crossover requires 7.0 L/100km (approx. 40.4 UK MPG).\n- A high-powered sports car or heavy commercial vehicle consumes 12.5 L/100km (approx. 22.6 UK MPG).\n\nBecause this relationship is inversely proportional (`L/100km = constant ÷ MPG`), changes in MPG do not reflect linear reductions in fuel volume, leading directly to the cognitive bias known as the MPG Illusion.',
    },
    {
      id: 'the-mpg-illusion-explained',
      title: 'The "MPG Illusion": Why Replacing Gas Guzzlers Matters Most',
      level: 2,
      content:
        'Cognitive psychologists and transport economists have documented a pervasive consumer misunderstanding termed the "MPG Illusion". Because miles per gallon is a non-linear reciprocal measure, people mistakenly assume that improving from 10 MPG to 20 MPG saves the same amount of fuel as improving from 40 MPG to 50 MPG, since both represent a 10 MPG increase.\n\nIn reality, fuel consumption and fuel expenditure scale linearly with **litres per 100 km (or gallons per 100 miles)**, not MPG. Consider an annual driving distance of 10,000 miles:\n\n- **Case A: Replacing a 10 MPG truck with a 20 MPG vehicle**:\n  At 10 MPG, 10,000 miles consumes 1,000 gallons. At 20 MPG, it consumes 500 gallons. The fuel saved is **500 gallons**.\n- **Case B: Replacing a 40 MPG compact car with a 50 MPG hybrid**:\n  At 40 MPG, 10,000 miles consumes 250 gallons. At 50 MPG, it consumes 200 gallons. The fuel saved is only **50 gallons**.\n\nImproving a low-efficiency vehicle from 10 to 20 MPG saves **ten times more fuel** than upgrading an already thrifty car from 40 to 50 MPG. Metric L/100km notation eliminates this cognitive illusion because every 1.0 L/100km reduction represents the exact same physical volume of fuel saved over any given distance.',
    },
    {
      id: 'manual-conversion-formulas-step-by-step',
      title: 'Exact Mathematical Conversion Derivations',
      level: 2,
      content:
        'Understanding how the statutory conversion constants (282.481 and 235.215) are mathematically derived provides complete transparency for engineers, fleet managers, and car enthusiasts.\n\n**Derivation of UK Constant (282.481):**\n1. 1 statute mile = 1.609344 kilometres, so 100 km = (100 ÷ 1.609344) = 62.1371192 miles.\n2. To cover 62.1371 miles at a rate of `M` miles per imperial gallon requires `62.1371192 ÷ M` imperial gallons.\n3. 1 imperial gallon = 4.54609 litres. Therefore, total litres for 100 km = `(62.1371192 × 4.54609) ÷ M`.\n4. Multiplying `62.1371192 × 4.54609` gives exactly **282.480936**.\n5. Therefore: `L/100km = 282.481 ÷ UK MPG` and `UK MPG = 282.481 ÷ L/100km`.\n\n**Derivation of US Constant (235.215):**\n1. 100 km = 62.1371192 miles.\n2. 1 US liquid gallon = 3.785411784 litres.\n3. Multiplying `62.1371192 × 3.785411784` gives exactly **235.214583**.\n4. Therefore: `L/100km = 235.215 ÷ US MPG` and `US MPG = 235.215 ÷ L/100km`.\n\n**Derivation of km/L (Kilometres per Litre):**\nBecause km/L and L/100km both utilize identical metric units, the formula is simply: `km/L = 100 ÷ L/100km`. A car achieving 5.0 L/100km travels 100 ÷ 5.0 = 20 km on a single litre of fuel.',
    },
    {
      id: 'testing-cycles-wltp-epa-nedc',
      title: 'Comparing WLTP, EPA, and Obsolete NEDC Testing Standards',
      level: 2,
      content:
        'When converting fuel economy between international automotive databases, differences in official laboratory test procedures must also be considered alongside unit conversions.\n\n- **Worldwide Harmonised Light Vehicles Test Procedure (WLTP)**: Mandated in the European Union and the United Kingdom since 2018. Features higher speeds, more dynamic acceleration profiles, stricter test temperature controls, and vehicle-specific optional equipment weight penalties. WLTP yields ratings in L/100km and UK MPG.\n- **US Environmental Protection Agency (EPA) 5-Cycle Test**: The American standard incorporates high-speed aggressive driving, air conditioning operation, and sub-zero cold testing. EPA ratings are typically 10% to 15% more conservative than European WLTP ratings for identical cars.\n- **Obsolete New European Driving Cycle (NEDC)**: Phased out due to unrealistic laboratory driving cycles that produced unrealistically optimistic MPG figures that were virtually impossible to replicate on real roads.\n\nWhen comparing an American EPA window sticker to a European WLTP brochure, remember that converting US MPG to L/100km converts the units, but the underlying EPA testing cycle is generally more rigorous.',
    },
  ],
  examples: [
    {
      title: 'Converting a UK Family Car from 45 UK MPG to Metric',
      scenario:
        'A British driver moves to Germany with a car rated at 45 UK MPG and needs to calculate its fuel consumption in Litres/100km and US MPG.',
      calculationType: 'custom',
      inputAmount: 45,
      rate: 282.481,
      resultTotal: 6.28,
      customFields: [
        { label: 'Original Fuel Economy', value: '45.0 UK MPG' },
        { label: 'Formula Used', value: '282.481 ÷ 45.0' },
        { label: 'Metric Equivalent', value: '6.28 L/100km', highlight: true },
        { label: 'US MPG Equivalent', value: '37.47 US MPG', highlight: true },
        { label: 'Kilometres per Litre', value: '15.93 km/L' },
      ],
      explanation:
        'Dividing 282.481 by 45 UK MPG gives 6.277 L/100km. Converting to US MPG: 235.215 ÷ 6.277 = 37.47 US MPG. The car travels 15.93 kilometres per single litre of petrol.',
    },
    {
      title: 'Converting an American SUV from 22 US MPG to UK and Metric',
      scenario:
        'A buyer imports an American pickup truck rated at 22 US MPG to Australia and needs to know its L/100km consumption and imperial UK MPG.',
      calculationType: 'custom',
      inputAmount: 22,
      rate: 235.215,
      resultTotal: 10.69,
      customFields: [
        { label: 'Original EPA Rating', value: '22.0 US MPG' },
        { label: 'Formula Used', value: '235.215 ÷ 22.0' },
        { label: 'Australian Metric Consumption', value: '10.69 L/100km', highlight: true },
        { label: 'UK Imperial Rating', value: '26.42 UK MPG', highlight: true },
        { label: 'Metric Distance per Litre', value: '9.35 km/L' },
      ],
      explanation:
        'Dividing 235.215 by 22 US MPG yields 10.69 L/100km. To convert to UK MPG: 282.481 ÷ 10.69 = 26.42 UK MPG. The truck travels 9.35 km per litre.',
    },
  ],
  faqs: [
    {
      q: 'How do I convert UK MPG to Litres per 100km?',
      a: 'Divide 282.481 by your vehicle’s UK MPG rating. For example, 50 UK MPG converts to 282.481 ÷ 50 = 5.65 L/100km.',
    },
    {
      q: 'How do I convert US MPG to Litres per 100km?',
      a: 'Divide 235.215 by your vehicle’s US MPG rating. For example, 30 US MPG converts to 235.215 ÷ 30 = 7.84 L/100km.',
    },
    {
      q: 'Why is UK MPG different from US MPG?',
      a: 'A British imperial gallon equals 4.54609 litres, while a US gallon equals 3.78541 litres. Because the imperial gallon is approximately 20.1% larger, a vehicle traveling on UK gallons registers higher numerical MPG for the identical fuel consumption.',
    },
    {
      q: 'What is the formula to convert L/100km back into UK MPG?',
      a: 'Divide 282.481 by the L/100km figure. For example, a car consuming 6.0 L/100km achieves 282.481 ÷ 6.0 = 47.08 UK MPG.',
    },
    {
      q: 'How do I convert km/L to L/100km?',
      a: 'Divide 100 by the km/L figure. For example, a car that achieves 16 km per litre consumes 100 ÷ 16 = 6.25 L/100km.',
    },
    {
      q: 'What is the "MPG Illusion"?',
      a: 'The MPG Illusion is the cognitive mistake of assuming fuel savings scale linearly with MPG. In reality, replacing a 10 MPG vehicle with a 20 MPG vehicle saves ten times more fuel over 10,000 miles than replacing a 40 MPG car with a 50 MPG car.',
    },
    {
      q: 'Is a lower or higher number better for L/100km?',
      a: 'In metric L/100km notation, a lower number is better because it represents fewer litres of fuel consumed to travel 100 kilometres. In contrast, higher is better for MPG.',
    },
    {
      q: 'How do I convert UK MPG directly to US MPG?',
      a: 'Multiply the UK MPG figure by 0.832674 (or divide by 1.20095). For example, 48 UK MPG × 0.832674 = 39.97 US MPG.',
    },
    {
      q: 'What is considered good fuel economy in L/100km?',
      a: 'Under 5.0 L/100km is considered excellent (typical of hybrids and small diesel cars). Between 5.0 and 7.5 L/100km is average for family cars and crossovers, while over 9.5 L/100km is typical of large SUVs and pickup trucks.',
    },
  ],
  sources: [
    {
      label: 'UK Units of Measurement Regulations 1995 (Imperial Gallon Standard)',
      url: 'https://www.legislation.gov.uk/uksi/1995/1804/contents/made',
    },
    {
      label: 'NIST Handbook 44 - US Units of Measurement (Liquid Gallon)',
      url: 'https://www.nist.gov/pml/weights-and-measures/publications/nist-handbooks/handbook-44',
    },
    {
      label: 'ISO 80000-3 Quantities and Units - Space and Time',
      url: 'https://www.iso.org/standard/64973.html',
    },
  ],
  relatedTools: [
    {
      title: 'UK Fuel Cost Calculator',
      slug: 'fuel-cost-calculator/uk',
      description: 'Calculate UK journey petrol and diesel costs with official weekly fuel benchmarks.',
      category: 'travel',
    },
    {
      title: 'EV vs Petrol Cost Calculator',
      slug: 'fuel-cost-calculator/ev-vs-petrol',
      description: 'Compare electric car home charging vs petrol vehicle running costs.',
      category: 'travel',
    },
    {
      title: 'Australia Fuel Cost Calculator',
      slug: 'fuel-cost-calculator/australia',
      description: 'Calculate Australian road trip petrol and diesel costs in L/100km.',
      category: 'travel',
    },
  ],
  relatedGuides: [
    {
      title: 'UK Energy Price Cap & Running Costs Explained',
      slug: 'guides/energy-price-cap-explained',
      description: 'Understanding fuel efficiency and energy consumption measurement standards.',
      category: 'travel',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Fuel conversion formulas utilize exact statutory volumetric definitions for imperial gallons (4.54609 L) and US gallons (3.78541 L). Official laboratory ratings may vary depending on test procedure (WLTP vs EPA).',
};

export default mpgConverterEn;
