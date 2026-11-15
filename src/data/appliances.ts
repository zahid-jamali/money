export interface WattageRange {
  min: number;
  max: number;
  defaultWatts: number;
  source: string;
}

export interface TypicalUsage {
  hoursPerDay: number;
  usesPerWeek?: number;
  descriptionEn: string;
  descriptionDe: string;
}

export interface ApplianceAlternative {
  slug: string;
  nameEn: string;
  nameDe: string;
  comparisonNoteEn: string;
  comparisonNoteDe: string;
}

export interface ApplianceFaq {
  q: string;
  a: string;
}

export interface ApplianceSpec {
  slug: string;
  deSlug: string;
  enName: string;
  deName: string;
  category: 'kitchen' | 'heating-cooling' | 'laundry-cleaning' | 'entertainment-work' | 'personal-care-lighting' | 'transport';
  wattageRange: WattageRange;
  typicalUsage: TypicalUsage;
  standbyWatts?: number;
  tipsEn: string[];
  tipsDe: string[];
  alternatives: [ApplianceAlternative, ApplianceAlternative];
  faqsEn: [ApplianceFaq, ApplianceFaq, ApplianceFaq, ApplianceFaq, ApplianceFaq];
  faqsDe: [ApplianceFaq, ApplianceFaq, ApplianceFaq, ApplianceFaq, ApplianceFaq];
}

export const APPLIANCES: ApplianceSpec[] = [
  // 1. KETTLE
  {
    slug: 'kettle',
    deSlug: 'wasserkocher',
    enName: 'Electric Kettle',
    deName: 'Wasserkocher',
    category: 'kitchen',
    wattageRange: {
      min: 1500,
      max: 3100,
      defaultWatts: 2200,
      source: 'Bosch & Russell Hobbs 1.7L rapid-boil technical data (2.2 kW standard, 3.0 kW fast boil)',
    },
    typicalUsage: {
      hoursPerDay: 0.17, // ~10 minutes (4 boils of 2.5 min)
      usesPerWeek: 28,
      descriptionEn: '4 boil cycles per day (approx. 2.5 minutes per boil = 10 minutes / 0.17 hours)',
      descriptionDe: '4 Kochvorgänge pro Tag (ca. 2,5 Minuten pro Kochen = 10 Minuten / 0,17 Stunden)',
    },
    standbyWatts: 0.5,
    tipsEn: [
      'Only boil the volume of water you actually need. Boiling a full 1.7-litre kettle for a single mug wastes over 60% of the energy consumed.',
      'Regularly descale your kettle using white vinegar or citric acid; limescale accumulation insulates heating elements and increases boil times by up to 15%.',
      'Use a thermal insulated kettle if you drink tea frequently, keeping boiled water hot for up to 4 hours without reheating.',
      'If you have solar panels, boil water during peak midday generation and store it in an insulated thermos flask for evening teas.',
    ],
    tipsDe: [
      'Kochen Sie immer nur die tatsächlich benötigte Wassermenge auf. Das Erhitzen von 1,5 Litern für eine einzige Tasse verschwendet bis zu 60 % Strom.',
      'Entkalken Sie den Wasserkocher regelmäßig mit Essig oder Zitronensäure; Kalkschichten auf der Heizspirale verlängern die Kochzeit um bis zu 15 %.',
      'Nutzen Sie einen doppelwandigen Thermos-Wasserkocher, der heißes Wasser über Stunden warmhält, ohne erneut Strom zu verbrauchen.',
      'Schalten Sie bei Zubereitung von Filterkaffee oder grünem Tee die Temperatur auf 80–90 °C statt 100 °C, um Energie zu sparen.',
    ],
    alternatives: [
      {
        slug: 'microwave',
        nameEn: 'Microwave Oven',
        nameDe: 'Mikrowelle',
        comparisonNoteEn: 'A kettle is roughly 80% energy-efficient compared to 60% for a microwave, making the kettle faster and cheaper for heating water volumes above 250ml.',
        comparisonNoteDe: 'Der Wasserkocher besitzt einen Wirkungsgrad von ca. 80 %, die Mikrowelle nur ca. 60 %. Ab 250 ml Wasser ist der Wasserkocher sparsamer.',
      },
      {
        slug: 'oven',
        nameEn: 'Electric Hob / Stove',
        nameDe: 'Elektroherd / Kochfeld',
        comparisonNoteEn: 'Electric ceramic hobs take over twice as long to boil water and lose significant heat to the air compared to an enclosed immersion kettle.',
        comparisonNoteDe: 'Ein Ceran-Elektroherd benötigt mehr als die doppelte Zeit zum Wasserkochen und verliert viel Wärme an die Umgebung.',
      },
    ],
    faqsEn: [
      {
        q: 'How much does it cost to boil a kettle once in the UK?',
        a: 'At the current UK energy price cap of 24.5p/kWh, boiling a standard 2.2 kW kettle for 2.5 minutes (0.09 kWh) costs approximately 2.2p. Boiling a full 1.7-litre kettle from cold takes around 3.5 minutes and costs about 3.1p.',
      },
      {
        q: 'Does a 3000W rapid boil kettle use more electricity than a 2000W kettle?',
        a: 'No. While a 3000W kettle draws more electrical power at any given instant, it boils the water proportionately faster. The total kilowatt-hours (kWh) consumed to heat 1 litre of water is virtually identical (approx. 0.11 kWh).',
      },
      {
        q: 'Is it cheaper to boil water in a microwave or a kettle?',
        a: 'An electric kettle is cheaper for boiling more than one mug of water. The immersion heating element transfers approximately 80% to 85% of electrical energy directly into the water, whereas a microwave magnetron is only 55% to 65% efficient.',
      },
      {
        q: 'How much can I save per year by not overfilling my kettle?',
        a: 'According to the Energy Saving Trust, avoiding overfilling your kettle saves the average UK household between £10 and £14 per year on electricity bills, or up to €18 annually in Germany.',
      },
      {
        q: 'Do eco kettles with variable temperature settings save electricity?',
        a: 'Yes. Heating water to 80°C for green teas or instant coffee instead of bringing it to a rolling 100°C boil consumes roughly 20% less electricity per cycle.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet einmal Wasserkocher kochen in Deutschland?',
        a: 'Bei einem durchschnittlichen deutschen Strompreis von 41,35 ct/kWh kostet ein Kochvorgang mit einem 2.200-Watt-Wasserkocher (ca. 2,5 Minuten / 0,09 kWh) rund 3,7 Cent. Bei 4 Tassen täglich summiert sich dies auf rund 54 Euro im Jahr.',
      },
      {
        q: 'Verbraucht ein 3.000-Watt-Wasserkocher mehr Strom als ein 2.000-Watt-Gerät?',
        a: 'Nein. Zwar ist die Leistungsaufnahme höher, doch das Wasser kocht proportional schneller. Die benötigte Energie (kWh) zur Erwärmung von 1 Liter Wasser bleibt mit ca. 0,11 kWh nahezu identisch.',
      },
      {
        q: 'Wasser auf dem Induktionsherd oder im Wasserkocher kochen?',
        a: 'Ein moderner Wasserkocher und ein Induktionskochfeld mit Deckel liegen mit 80–85 % Wirkungsgrad fast gleichauf. Der Wasserkocher ist bei kleinen Wassermengen (unter 1 Liter) jedoch meist etwas sparsamer und schaltet punktgenau ab.',
      },
      {
        q: 'Wie viel Strom spart das regelmäßige Entkalken des Wasserkochers?',
        a: 'Eine Kalkschicht auf dem Heizelement wirkt wie ein Hitzeschild. Regelmäßiges Entkalken verkürzt die Kochzeit um 10 bis 15 % und spart über das Jahr etwa 5 bis 8 Euro Strom.',
      },
      {
        q: 'Lohnt sich ein Wasserkocher mit Temperaturwahl?',
        a: 'Ja. Für Heißgetränke wie grünen Tee oder Babynahrung reichen 70 bis 80 °C aus. Wird das Wasser nicht unnötig zum Kochen (100 °C) gebracht, spart dies ca. 20–25 % Energie pro Tasse.',
      },
    ],
  },

  // 2. ELECTRIC HEATER (Heizlüfter)
  {
    slug: 'electric-heater',
    deSlug: 'heizluefter',
    enName: 'Electric Fan Heater',
    deName: 'Heizlüfter',
    category: 'heating-cooling',
    wattageRange: {
      min: 1000,
      max: 2400,
      defaultWatts: 2000,
      source: 'De\'Longhi & Rowenta ceramic fan heater technical sheets (1000W low, 2000W high setting)',
    },
    typicalUsage: {
      hoursPerDay: 3.0,
      usesPerWeek: 21,
      descriptionEn: '3 hours per cold evening at standard 2 kW setting',
      descriptionDe: '3 Stunden an kühlen Abenden bei 2.000 Watt Heizleistung',
    },
    standbyWatts: 0.5,
    tipsEn: [
      'Only use fan heaters for rapid short-term spot heating of a single occupied room rather than whole-house space heating.',
      'Set the integrated thermostat so the fan automatically shuts off once the room reaches a comfortable 19°C–20°C.',
      'Close doors and draft-proof window edges to retain warm air in the target room.',
      'Consider replacing fan heating with an electric heated throw or heated underblanket, which consumes 95% less electricity.',
    ],
    tipsDe: [
      'Nutzen Sie Heizlüfter nur zur kurzzeitigen Punktbeheizung eines einzelnen kleinen Raums, niemals als Dauerheizung für die ganze Wohnung.',
      'Stellen Sie das integrierte Thermostat so ein, dass sich der Heizlüfter bei Erreichen von 19–20 °C automatisch abschaltet.',
      'Schließen Sie Türen zum geheizten Raum und dichten Sie Fensterfugen ab, damit die teuer erwärmte Luft nicht entweicht.',
      'Prüfen Sie Wärmedecken als Alternative am Schreibtisch oder Sofa: Sie verbrauchen mit 100 Watt rund 95 % weniger Strom.',
    ],
    alternatives: [
      {
        slug: 'oil-filled-radiator',
        nameEn: 'Oil-Filled Radiator',
        nameDe: 'Ölradiator',
        comparisonNoteEn: 'Fan heaters push heat fast but cool down instantly when switched off; oil radiators retain thermal mass and provide gentler, more sustained ambient heat.',
        comparisonNoteDe: 'Heizlüfter erwärmen Räume blitzschnell, kühlen aber sofort ab; Ölradiatoren speichern die Wärme im Öl und geben sie gleichmäßig ab.',
      },
      {
        slug: 'electric-blanket',
        nameEn: 'Electric Blanket',
        nameDe: 'Heizdecke',
        comparisonNoteEn: 'An electric blanket heats the person rather than the room air, using 100W compared to a 2000W heater—saving up to 95% on electricity costs.',
        comparisonNoteDe: 'Eine Heizdecke wärmt gezielt den Körper mit ca. 100 Watt statt 2.000 Watt für die Raumluft und spart so bis zu 95 % Strom.',
      },
    ],
    faqsEn: [
      {
        q: 'How much does a 2000W electric fan heater cost to run per hour?',
        a: 'At a UK rate of 24.5p/kWh, running a 2000W (2 kW) electric heater at full blast costs exactly 49.0p per hour. In Australia (33.2c/kWh) it costs 66.4c per hour, and in Germany (41.35 ct/kWh) it costs 82.7 Cent per hour.',
      },
      {
        q: 'Are fan heaters expensive to run compared to central heating?',
        a: 'Yes. Natural gas heating typically costs around 6p to 7p per kWh of heat, whereas electric resistance fan heating costs 24.5p per kWh in the UK—making electric fan heaters roughly 3 to 4 times more expensive than gas radiators.',
      },
      {
        q: 'Does turning a fan heater down to setting 1 save money?',
        a: 'Yes. Setting 1 usually drops heating power from 2000W to 1000W, cutting the hourly electricity consumption and running cost by exactly half.',
      },
      {
        q: 'Can a fan heater warm a whole house?',
        a: 'No. Portable fan heaters are designed strictly for supplemental directional warmth in small rooms (10–15 m²). Attempting to heat an entire property will result in massive electricity bills exceeding £300 to £400 per month.',
      },
      {
        q: 'Do ceramic fan heaters use less electricity than wire coil heaters?',
        a: 'Both convert 100% of electrical energy into heat (1 kW electricity = 1 kW heat). However, PTC ceramic elements self-regulate and distribute heat more uniformly, feeling warmer at lower fan speeds.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet ein 2.000-Watt-Heizlüfter pro Stunde in Deutschland?',
        a: 'Bei 41,35 ct/kWh verbraucht ein 2.000-Watt-Heizlüfter auf voller Stufe exakt 2 kWh pro Stunde, was 82,7 Cent pro Stunde entspricht. Bei 3 Stunden täglicher Nutzung sind das rund 2,48 Euro am Tag oder ca. 75 Euro im Monat.',
      },
      {
        q: 'Ist Heizen mit Heizlüfter teurer als mit Gas oder Fernwärme?',
        a: 'Ja, deutlich. Gaswärme kostet in Deutschland ca. 8–10 ct/kWh, während Strom aus der Steckdose über 41 ct/kWh kostet. Heizen mit dem Heizlüfter ist daher rund 4- bis 5-mal so teuer wie eine Gas-Zentralheizung.',
      },
      {
        q: 'Spart Stufe 1 am Heizlüfter wirklich Strom?',
        a: 'Ja. Bei Stufe 1 wird meist nur eine der beiden Heizspiralen aktiviert (1.000 Watt statt 2.000 Watt). Das halbiert den Stromverbrauch auf 1 kWh pro Stunde (ca. 41 Cent/Stunde).',
      },
      {
        q: 'Schaltet sich ein Heizlüfter mit Thermostat zwischendurch ab?',
        a: 'Ja, sobald die am Drehregler eingestellte Raumtemperatur erreicht ist, unterbricht das Bimetall-Thermostat die Stromzufuhr. Dadurch sinken die realen Betriebskosten im Dauerbetrieb um 30–50 %.',
      },
      {
        q: 'Welche sparsamen Alternativen gibt es zum Heizlüfter am Schreibtisch?',
        a: 'Elektrische Infrarot-Heizmatten für die Füße (50–100 Watt) oder beheizbare Sitzauflagen (30–60 Watt) bieten sofortige Wärme bei einem Bruchteil der Stromkosten.',
      },
    ],
  },

  // 3. OIL-FILLED RADIATOR (Ölradiator)
  {
    slug: 'oil-filled-radiator',
    deSlug: 'oelradiator',
    enName: 'Oil-Filled Radiator',
    deName: 'Ölradiator',
    category: 'heating-cooling',
    wattageRange: {
      min: 800,
      max: 2500,
      defaultWatts: 1500,
      source: 'Dimplex & De\'Longhi Dragon4 electric oil radiator series (1.5 kW medium model)',
    },
    typicalUsage: {
      hoursPerDay: 4.0,
      usesPerWeek: 28,
      descriptionEn: '4 hours daily during cold spells (cycling via thermostat)',
      descriptionDe: '4 Stunden täglich an kühlen Tagen mit Thermostat-Taktung',
    },
    standbyWatts: 0.5,
    tipsEn: [
      'Position the oil radiator centrally or beneath a window to generate natural thermal convection currents throughout the room.',
      'Use the medium power toggle (e.g. 1000W instead of 2000W) once the room is warm to maintain comfort without high peak demand.',
      'Take advantage of the thermal retention: oil remains hot and radiates heat for 30–45 minutes after switching the unit off.',
      'Fit a 24-hour plug-in mechanical timer so the radiator warms your bedroom 30 minutes before waking without running all night.',
    ],
    tipsDe: [
      'Platzieren Sie den Ölradiator unter dem Fenster oder an einer Innenwand, um eine optimale Konvektionszirkulation im Raum zu erzeugen.',
      'Nutzen Sie die mittlere Leistungsstufe (z. B. 1.000 W statt 2.000 W), sobald der Raum aufgewärmt ist, um sanfte Erhaltungswärme zu sichern.',
      'Nutzen Sie die Nachwärme: Das Thermo-Öl bleibt nach dem Abschalten noch 30–45 Minuten heiß und gibt kostenlose Wärme ab.',
      'Verwenden Sie eine Zeitschaltuhr, damit der Radiator das Zimmer kurz vor dem Aufstehen vorheizt, statt die ganze Nacht durchzulaufen.',
    ],
    alternatives: [
      {
        slug: 'electric-heater',
        nameEn: 'Electric Fan Heater',
        nameDe: 'Heizlüfter',
        comparisonNoteEn: 'Fan heaters are noisier and blow dust, while oil radiators operate in total silence and maintain stable temperatures via oil thermal inertia.',
        comparisonNoteDe: 'Heizlüfter sind laut und wirbeln Staub auf; Ölradiatoren arbeiten völlig geräuschlos und spenden behagliche Strahlungswärme.',
      },
      {
        slug: 'electric-blanket',
        nameEn: 'Electric Blanket',
        nameDe: 'Heizdecke',
        comparisonNoteEn: 'For personal warmth while watching television or sleeping, an electric blanket draws 100W versus 1500W for an oil radiator.',
        comparisonNoteDe: 'Im Bett oder auf der Couch benötigt eine Heizdecke nur 100 Watt gegenüber 1.500 Watt für den Ölradiator.',
      },
    ],
    faqsEn: [
      {
        q: 'How much does it cost to run an oil-filled radiator for 4 hours in the UK?',
        a: 'A 1500W radiator running at an average 60% thermostat duty cycle uses approx. 3.6 kWh over 4 hours. At 24.5p/kWh, that costs about 88p per session or £26.40 per month.',
      },
      {
        q: 'Does an oil-filled radiator use electricity continuously?',
        a: 'No. Once the thermal fluid reaches the set temperature, the thermostat clicks off and stops drawing power. In a sealed room, the heating element is typically active only 50% to 65% of the time.',
      },
      {
        q: 'Do you ever need to refill the oil in an oil-filled radiator?',
        a: 'No. The diathermic thermodynamic oil inside the radiator is permanently sealed at the factory and never degrades, evaporates, or needs replenishment.',
      },
      {
        q: 'Are oil-filled radiators cheaper to run than fan heaters?',
        a: 'Over extended multi-hour sessions, yes. Because oil stores thermal energy and releases it gradually, the thermostat cycles on and off less erratically than a fan heater, providing steadier comfort with lower cumulative consumption.',
      },
      {
        q: 'What size oil-filled radiator do I need for a 15 square metre room?',
        a: 'A standard rule of thumb for UK and European homes is approx. 80W to 100W per square metre. For a 15 m² room with normal ceiling height and insulation, a 1500W model is ideal.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet ein Ölradiator mit 1.500 Watt pro Stunde in Deutschland?',
        a: 'Auf voller Dauerlast verbraucht er 1,5 kWh (ca. 62 Cent/Stunde). Da das Thermostat nach dem Aufheizen taktet (ca. 60 % Einschaltdauer), liegen die realen Kosten bei ca. 37 Cent pro Betriebsstunde.',
      },
      {
        q: 'Muss das Öl im Ölradiator jemals nachgefüllt oder gewechselt werden?',
        a: 'Nein. Das spezielle Thermo-Öl befindet sich in einem hermetisch verschweißten Stahlkörper. Es verbraucht sich nicht und muss niemals nachgefüllt werden.',
      },
      {
        q: 'Ist ein Ölradiator sparsamer als ein Heizlüfter?',
        a: 'Bei mehrstündiger Raumnutzung ja. Durch die thermische Trägheit des Öls schaltet sich das Heizelement seltener ein, und die Wärme wird gleichmäßig und geräuschlos ohne Zugluft abgegeben.',
      },
      {
        q: 'Wie viel Strom verbraucht ein Ölradiator über Nacht (8 Stunden)?',
        a: 'Bei 1.500 Watt und moderater Thermostateinstellung (50 % Taktung) verbraucht er über 8 Stunden rund 6 kWh. In Deutschland entspricht das ca. 2,48 Euro pro Nacht.',
      },
      {
        q: 'Welche Leistung sollte ein Ölradiator für ein 20-qm-Zimmer haben?',
        a: 'Als Faustformel gelten ca. 80 bis 100 Watt Heizleistung pro Quadratmeter Wohnfläche. Für 20 m² empfiehlt sich ein Ölradiator mit 1.800 bis 2.000 Watt Maximalleistung.',
      },
    ],
  },

  // 4. AIR FRYER (Heißluftfritteuse)
  {
    slug: 'air-fryer',
    deSlug: 'heissluftfritteuse',
    enName: 'Air Fryer',
    deName: 'Heißluftfritteuse',
    category: 'kitchen',
    wattageRange: {
      min: 1400,
      max: 2200,
      defaultWatts: 1700,
      source: 'Ninja Foodi Max & Philips Airfryer XXL specification sheets (1700W standard element)',
    },
    typicalUsage: {
      hoursPerDay: 0.5,
      usesPerWeek: 4,
      descriptionEn: '30 minutes cooking cycle, 4 times per week (approx. 0.29h/day average)',
      descriptionDe: '30 Minuten Zubereitung, 4 Mal pro Woche (ca. 0,29 Std./Tag Durchschnitt)',
    },
    standbyWatts: 1.0,
    tipsEn: [
      'Skip preheating unless specifically cooking delicate pastries; air fryers reach 200°C in under 2 minutes.',
      'Avoid overcrowding the basket; leaving space for circulating hot air cooks food 20% faster.',
      'Cook batch meals sequentially while the chamber is already at operating temperature to save reheating power.',
      'Clean the heating element reflector regularly so grease build-up does not impede radiant convection.',
    ],
    tipsDe: [
      'Verzichten Sie auf langes Vorheizen: Die kompakte Garkammer erreicht 200 °C in unter 2 Minuten.',
      'Überfüllen Sie den Garkorb nicht: Zirkuliert die Heißluft ungehindert, gart das Essen ca. 20 % schneller.',
      'Bereiten Sie mehrere Portionen direkt hintereinander zu, um die Resthitze der ersten Runde kostenlos zu nutzen.',
      'Nutzen Sie Backpapier-Einsätze für Heißluftfritteusen, um die Reinigung zu erleichtern und den Hitzefluss sauber zu halten.',
    ],
    alternatives: [
      {
        slug: 'oven',
        nameEn: 'Electric Built-In Oven',
        nameDe: 'Backofen',
        comparisonNoteEn: 'An air fryer cooks typical 1-2 person meals 50% faster and uses up to 70% less electricity than heating an entire 70-litre oven cavity.',
        comparisonNoteDe: 'Eine Heißluftfritteuse gart Mahlzeiten für 1–2 Personen 50 % schneller und verbraucht bis zu 70 % weniger Strom als ein 70-Liter-Backofen.',
      },
      {
        slug: 'microwave',
        nameEn: 'Microwave Oven',
        nameDe: 'Mikrowelle',
        comparisonNoteEn: 'Microwaves are even lower wattage for simple reheating, but air fryers provide crisp browning through convection coils.',
        comparisonNoteDe: 'Die Mikrowelle ist beim reinen Erwärmen sparsamer, doch nur die Heißluftfritteuse liefert knusprige Textur und Röstaromen.',
      },
    ],
    faqsEn: [
      {
        q: 'How much does it cost to run an air fryer for 30 minutes in the UK?',
        a: 'A 1700W air fryer running for 30 minutes consumes 0.85 kWh. At the 24.5p/kWh price cap, that costs approx. 20.8p per cooking session.',
      },
      {
        q: 'Is an air fryer really cheaper to use than an electric oven?',
        a: 'Yes, significantly. A conventional oven draws 2500W to 3000W and requires 15 minutes of preheating plus 40 minutes of cooking (approx. 2.0 kWh = ~49p). An air fryer accomplishes the same dish in 25 minutes without preheat (0.7 kWh = ~17p), saving over 65%.',
      },
      {
        q: 'Do dual-zone air fryers use double the electricity?',
        a: 'Only if both drawers are running simultaneously at maximum heat. If you only activate one drawer, the unit draws only half its rated wattage (typically 850W–1000W).',
      },
      {
        q: 'How much money can a UK family save annually by switching to an air fryer?',
        a: 'Families who substitute their conventional oven 4 times per week with an air fryer typically save between £50 and £85 per year on domestic electricity bills.',
      },
      {
        q: 'Does an air fryer draw power on standby?',
        a: 'Modern digital air fryers draw between 0.5W and 1.5W on standby for the digital clock and LED display, costing less than 30p per year.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet eine halbe Stunde Heißluftfritteuse in Deutschland?',
        a: 'Eine 1.700-Watt-Heißluftfritteuse verbraucht in 30 Minuten 0,85 kWh Strom. Bei einem Strompreis von 41,35 ct/kWh entspricht das rund 35 Cent pro Garvorgang.',
      },
      {
        q: 'Spart eine Heißluftfritteuse wirklich Strom gegenüber dem Backofen?',
        a: 'Ja! Ein Backofen muss ein Volumen von 60 bis 75 Litern aufheizen und verbraucht für 45 Minuten ca. 1,8–2,2 kWh (ca. 80–90 Cent). Die Heißluftfritteuse benötigt dank kleinem Garraum nur ca. 0,6–0,8 kWh (ca. 30 Cent) – eine Ersparnis von über 60 %.',
      },
      {
        q: 'Verbraucht eine Doppelkammer-Heißluftfritteuse doppelt so viel Strom?',
        a: 'Nur wenn beide Kammern gleichzeitig heizen. Wird nur ein Korb genutzt, regelt das Gerät die Leistung automatisch auf die Hälfte herunter (ca. 850–1.000 Watt).',
      },
      {
        q: 'Wie viel Geld spart man im Jahr mit einer Heißluftfritteuse?',
        a: 'Wer an 4 Tagen in der Woche den Backofen durch die Heißluftfritteuse ersetzt, spart in Deutschland jährlich rund 80 bis 110 Euro an Stromkosten ein.',
      },
      {
        q: 'Muss man eine Heißluftfritteuse vorheizen?',
        a: 'In 95 % der Fälle nicht. Da das Gebläse die Hitze sofort über die Heizspirale auf das Gargut leitet, ist Vorheizen meist reine Energieverschwendung.',
      },
    ],
  },

  // 5. TUMBLE DRYER (Wäschetrockner)
  {
    slug: 'tumble-dryer',
    deSlug: 'waeschetrockner',
    enName: 'Tumble Dryer',
    deName: 'Wäschetrockner',
    category: 'laundry-cleaning',
    wattageRange: {
      min: 800,
      max: 2800,
      defaultWatts: 2200,
      source: 'Beko & Bosch condenser dryer (2.2 kW element) vs heat pump dryer (900W compressor) EU fiches',
    },
    typicalUsage: {
      hoursPerDay: 0.65,
      usesPerWeek: 3,
      descriptionEn: '1.5-hour cycle, 3 times per week (~4.5 hours weekly = ~0.65h/day average)',
      descriptionDe: '1,5 Stunden Trockenprogramm, 3 Mal pro Woche (ca. 0,65 Std./Tag)',
    },
    standbyWatts: 0.8,
    tipsEn: [
      'Spin clothes at maximum speed (1400 or 1600 RPM) in your washing machine beforehand; higher spin extraction cuts tumble dry time by 25%.',
      'Clean the lint filter after every single cycle; a clogged lint trap restricts airflow and increases drying time by 15–20 minutes.',
      'Add wool dryer balls to separate tumbling garments and speed up moisture evaporation by up to 20%.',
      'If upgrading, choose an A+++ heat pump dryer; it uses closed-loop refrigerant heat exchange to slash electricity use by 50–60% compared to condenser models.',
    ],
    tipsDe: [
      'Schleudern Sie die Wäsche in der Waschmaschine mit maximaler Drehzahl (1.400–1.600 U/min) vor; das verkürzt die Trocknerzeit um ca. 25 %.',
      'Reinigen Sie das Flusensieb nach jedem Trockengang: Ein verstopftes Sieb behindert den Luftstrom und erhöht die Trocknungsdauer spürbar.',
      'Geben Sie Trocknerbälle aus Wolle mit in die Trommel; sie lockern die Wäsche auf und verkürzen die Laufzeit um bis zu 20 %.',
      'Setzen Sie bei einer Neuanschaffung auf einen A+++ Wärmepumpentrockner; er benötigt 50 bis 60 % weniger Strom als Kondenstrockner.',
    ],
    alternatives: [
      {
        slug: 'dehumidifier',
        nameEn: 'Dehumidifier (Laundry Mode)',
        nameDe: 'Luftentfeuchter (Wäsche-Modus)',
        comparisonNoteEn: 'Drying clothes on a rack with a 300W dehumidifier in a closed room uses roughly 1.5 kWh versus 3.5 kWh for a vented/condenser tumble dryer.',
        comparisonNoteDe: 'Wäsche auf dem Wäscheständer mit einem 300W-Luftentfeuchter zu trocknen verbraucht ca. 1,5 kWh statt 3,5 kWh beim Kondenstrockner.',
      },
      {
        slug: 'washing-machine',
        nameEn: 'Washing Machine (High Spin)',
        nameDe: 'Waschmaschine (Maximaler Schleudergang)',
        comparisonNoteEn: 'An extra 10-minute spin at 1400 RPM consumes only 0.05 kWh but removes up to 1 litre of water before drying.',
        comparisonNoteDe: 'Ein extra 10-minütiger Schleudergang mit 1.400 U/min verbraucht nur 0,05 kWh, entzieht der Wäsche aber bis zu 1 Liter Restwasser.',
      },
    ],
    faqsEn: [
      {
        q: 'How much does it cost to run a tumble dryer per load in the UK?',
        a: 'A standard condenser dryer uses approx. 3.3 kWh per full cycle, costing around 81p at current price caps. A modern heat pump dryer uses only 1.4 kWh per cycle, costing just 34p.',
      },
      {
        q: 'Why are heat pump tumble dryers so much cheaper to run?',
        a: 'Traditional dryers vent hot air and heat fresh air from scratch with resistance elements. Heat pump dryers recycle hot air in a closed thermodynamic loop, operating at lower temperatures (50°C) with 60% less energy.',
      },
      {
        q: 'Does drying a half load use half the electricity?',
        a: 'Sensor dryers reduce cycle time for lighter loads, saving roughly 25% to 35% of energy, but drying full (not overloaded) loads is always the most energy-efficient per kilogram of laundry.',
      },
      {
        q: 'How much can I save per year by line-drying in summer?',
        a: 'Air-drying clothes outdoors or on an indoor rack for 6 months of the year saves the average UK household around £65 to £100 annually in electricity.',
      },
      {
        q: 'Do dryer sheets reduce drying efficiency?',
        a: 'Yes. Chemical residue from single-use dryer sheets coats the electronic moisture sensor strips and lint mesh over time, causing the dryer to run longer than necessary.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet eine Trocknerladung in Deutschland?',
        a: 'Ein herkömmlicher Kondenstrockner verbraucht pro Ladung ca. 3,5 kWh, was bei 41,35 ct/kWh rund 1,45 Euro pro Trockengang kostet. Ein A+++ Wärmepumpentrockner benötigt nur ca. 1,4 kWh (ca. 58 Cent).',
      },
      {
        q: 'Lohnt sich der Mehrpreis für einen Wärmepumpentrockner?',
        a: 'Ja, definitiv. Bei 3 Trockengängen pro Woche spart ein Wärmepumpentrockner gegenüber einem Kondenstrockner jährlich rund 320 kWh bzw. ca. 130 Euro Strom. Der Aufpreis amortisiert sich oft in unter 3 Jahren.',
      },
      {
        q: 'Wie viel Strom spart man, wenn man Wäsche auf der Leine trocknet?',
        a: 'Wer in den Frühlings- und Sommermonaten komplett auf den Wäscheständer setzt, spart bei 100 Trocknerzyklen pro Jahr rund 100 bis 150 Euro Strom.',
      },
      {
        q: 'Warum dauert das Trocknen bei voller Flusensieb-Warnung länger?',
        a: 'Flusen im Sieb behindern die Heißluftzirkulation im Kondensatorkanal. Die Feuchtigkeit kann nicht entweichen, wodurch das Programm bis zu 30 Minuten länger läuft.',
      },
      {
        q: 'Bringt es etwas, Bettwäsche und Handtücher getrennt von Kleidung zu trocknen?',
        a: 'Ja. Schwere Textilien halten Feuchtigkeit viel länger. Werden sie mit leichter Kleidung gemischt, übertrocknet das Gerät die leichte Wäsche, was unnötig Strom verbraucht und Fasern strapaziert.',
      },
    ],
  },

  // 6. WASHING MACHINE (Waschmaschine)
  {
    slug: 'washing-machine',
    deSlug: 'waschmaschine',
    enName: 'Washing Machine',
    deName: 'Waschmaschine',
    category: 'laundry-cleaning',
    wattageRange: {
      min: 400,
      max: 2400,
      defaultWatts: 1800,
      source: 'Miele & Samsung Eco 40-60 cycle rating (water heater element 1800W–2000W, motor 300W)',
    },
    typicalUsage: {
      hoursPerDay: 0.6,
      usesPerWeek: 4,
      descriptionEn: '4 wash cycles per week (~1 hour each = ~0.6h/day average)',
      descriptionDe: '4 Waschgänge pro Woche (~1 Stunde = ca. 0,6 Std./Tag)',
    },
    standbyWatts: 0.5,
    tipsEn: [
      'Wash at 30°C or 20°C instead of 40°C or 60°C; heating the water accounts for up to 90% of a washing machine\'s electricity consumption.',
      'Always run full loads rather than partial loads; two half loads consume 50% more electricity and water than one full wash.',
      'Use the Eco 40-60 cycle; while the program takes longer, it washes at a lower temperature and uses significantly less power.',
      'Clean the drain pump filter and run a monthly 60°C maintenance wash with vinegar to eliminate soap scum and keep the heater efficient.',
    ],
    tipsDe: [
      'Waschen Sie bei 30 °C statt 40 °C oder 60 °C: Bis zu 90 % des Stroms einer Waschmaschine wird ausschließlich für das Aufheizen des Wassers benötigt.',
      'Nutzen Sie stets die volle Trommelkapazität aus. Zwei halbe Waschladungen verbrauchen fast 50 % mehr Strom und Wasser als eine volle Maschine.',
      'Wählen Sie das Eco-Programm: Es dauert zwar länger, benötigt durch niedrigere Waschtemperaturen aber deutlich weniger Kilowattstunden.',
      'Reinigen Sie regelmäßig das Flusensieb und die Einspülkammer, um Rückstände zu verhindern und den Heizstab sauber zu halten.',
    ],
    alternatives: [
      {
        slug: 'tumble-dryer',
        nameEn: 'Tumble Dryer',
        nameDe: 'Wäschetrockner',
        comparisonNoteEn: 'A washing machine uses roughly 0.7 kWh per cycle, whereas an electric tumble dryer uses 2 to 3 times more electricity (1.4–3.5 kWh) to dry the same load.',
        comparisonNoteDe: 'Die Waschmaschine verbraucht ca. 0,7 kWh pro Ladung, der Trockner das Zwei- bis Dreifache (1,4–3,5 kWh).',
      },
      {
        slug: 'dishwasher',
        nameEn: 'Dishwasher',
        nameDe: 'Geschirrspüler',
        comparisonNoteEn: 'Both appliances spend the vast majority of their electricity heating water; eco wash cycles on both drastically reduce domestic utility bills.',
        comparisonNoteDe: 'Beide Großgeräte verbrauchen den Großteil der Energie zum Wassererwärmen; Eco-Programme sparen bei beiden das meiste Geld.',
      },
    ],
    faqsEn: [
      {
        q: 'How much does it cost to do a load of washing in the UK?',
        a: 'An average 40°C cotton cycle consumes around 0.8 kWh, costing approx. 19.6p at current price caps. Running an Eco 30°C cycle drops consumption to 0.45 kWh (approx. 11p per wash).',
      },
      {
        q: 'Why do Eco cycles take 3 to 4 hours if they save energy?',
        a: 'Eco cycles rely on chemical detergent action and mechanical drum agitation over a longer time at cooler water temperatures (approx. 30°C), rather than rapidly boiling water with power-hungry electric elements.',
      },
      {
        q: 'Does washing at 20°C really clean clothes?',
        a: 'Yes. Modern liquid enzymatic detergents are specifically engineered to activate and break down oils and proteins at 20°C and 30°C.',
      },
      {
        q: 'How much does a quick 15-minute wash cost?',
        a: 'While quick cycles run for fewer minutes, they rapidly heat water to target temperature, often consuming around 0.5 to 0.7 kWh—similar to or higher than a longer Eco cycle.',
      },
      {
        q: 'Can connecting a washing machine to hot water supply save electricity?',
        a: 'Only if your home has heat pump or solar thermal hot water. Most modern washing machines are cold-fill only because internal electronics meter temperature precisely.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet ein Waschgang in Deutschland?',
        a: 'Ein regulärer 40-Grad-Waschgang verbraucht ca. 0,85 kWh, was bei 41,35 ct/kWh rund 35 Cent kostet. Bei 60 Grad steigt der Verbrauch auf 1,3 kWh (ca. 54 Cent). Im 30-Grad-Eco-Programm sinken die Kosten auf ca. 18 Cent.',
      },
      {
        q: 'Warum spart das lange Eco-Programm Strom?',
        a: 'Weil das Wasser nicht stark aufgeheizt werden muss. Die Reinigungswirkung entsteht durch längeres Einwirken der Waschmittelenzyme und Trommelbewegung bei niedriger Temperatur.',
      },
      {
        q: 'Wie viel Strom spart man beim Waschen mit 30 °C statt 60 °C?',
        a: 'Das Senken der Temperatur von 60 °C auf 30 °C spart bis zu 60 % der Energie pro Waschgang. Bei 200 Waschgängen im Jahr spart ein Haushalt rund 45 bis 65 Euro.',
      },
      {
        q: 'Sind Kurzprogramme sparsamer als Normalprogramme?',
        a: 'Nein, meist nicht. Um in 20 Minuten sauber zu waschen, muss der Heizstab das Wasser im Eiltempo erhitzen. Kurzprogramme verbrauchen oft mehr Strom als das Eco-Programm.',
      },
      {
        q: 'Was verbraucht eine Waschmaschine im Standby?',
        a: 'Moderne Maschinen verbrauchen im Standby unter 0,5 Watt (weniger als 2 Euro im Jahr). Ältere Geräte mit Digitaluhren können 2 bis 3 Watt ziehen.',
      },
    ],
  },

  // 7. DISHWASHER (Geschirrspüler)
  {
    slug: 'dishwasher',
    deSlug: 'geschirrspueler',
    enName: 'Dishwasher',
    deName: 'Geschirrspüler',
    category: 'kitchen',
    wattageRange: {
      min: 1050,
      max: 2200,
      defaultWatts: 1500,
      source: 'Siemens iQ500 & Bosch Serie 6 dishwasher technical fiches (1500W heating element, 0.75-0.95 kWh/cycle)',
    },
    typicalUsage: {
      hoursPerDay: 1.0,
      usesPerWeek: 7,
      descriptionEn: '1 daily Eco cycle (approx. 2.5–3 hours active runtime, ~0.85 kWh/cycle = 1h eq at 1500W)',
      descriptionDe: '1 Eco-Spülgang täglich (ca. 2,5–3 Stunden Laufzeit, ca. 0,85 kWh pro Spülgang)',
    },
    standbyWatts: 0.5,
    tipsEn: [
      'Always select the Eco 50°C cycle; it consumes up to 30% less electricity than Intensive 70°C or Auto cycles.',
      'Do not rinse dishes under running hot water before loading; scrape food scraps into food waste instead.',
      'Only run the dishwasher when completely full, organizing plates so spray arms rotate freely without obstruction.',
      'Open the dishwasher door slightly at the end of the wash to air dry dishes naturally rather than using heated dry cycles.',
    ],
    tipsDe: [
      'Wählen Sie standardmäßig das Eco-50°C-Programm: Es spart gegenüber dem Automatik- oder Intensivprogramm rund 30 % Strom.',
      'Spülen Sie Teller nicht unter fließendem warmem Wasser vor; einfaches Abkratzen grober Speisereste in den Biomüll genügt völlig.',
      'Starten Sie den Geschirrspüler nur voll beladen. Achten Sie darauf, dass sich die Sprüharme ungehindert drehen können.',
      'Nutzen Sie die automatische Türöffnung nach Programmende zum natürlichen Lufttrocknen statt stromintensiver Heißlufttrocknung.',
    ],
    alternatives: [
      {
        slug: 'washing-machine',
        nameEn: 'Washing Machine',
        nameDe: 'Waschmaschine',
        comparisonNoteEn: 'Like washing machines, 85% of dishwasher electricity is spent heating water; keeping temperatures around 50°C yields maximum efficiency.',
        comparisonNoteDe: 'Wie bei Waschmaschinen fließen 85 % des Stroms ins Wassererwärmen; Eco-Programme bei 50 °C sind am sparsamsten.',
      },
      {
        slug: 'kettle',
        nameEn: 'Kettle / Hand Washing',
        nameDe: 'Handspülen im Spülbecken',
        comparisonNoteEn: 'Washing a full load by hand typically consumes 40–60 litres of hot water, costing more in water and gas/electricity than a modern dishwasher (9–12 litres).',
        comparisonNoteDe: 'Handspülen unter fließendem Wasser verbraucht bis zu 50 Liter Heißwasser und ist deutlich teurer als ein sparsamer Geschirrspüler (ca. 10 Liter).',
      },
    ],
    faqsEn: [
      {
        q: 'How much does a dishwasher cycle cost in the UK?',
        a: 'A modern full-size dishwasher in Eco mode consumes approx. 0.85 kWh per cycle. At 24.5p/kWh, that costs approx. 20.8p per load. An intensive 70°C cycle consumes around 1.4 kWh (approx. 34.3p).',
      },
      {
        q: 'Is it cheaper to wash dishes by hand or use a dishwasher?',
        a: 'A fully loaded modern dishwasher is cheaper and uses roughly one-fourth of the water compared to hand washing under running hot water.',
      },
      {
        q: 'Does the Eco setting on a dishwasher really save electricity?',
        a: 'Yes. Eco cycles heat water to 50°C instead of 65°C or 70°C. Lowering the water temperature cuts energy demand by 25% to 35% despite running longer.',
      },
      {
        q: 'Should I turn off heated drying?',
        a: 'Yes. If your dishwasher has a heated drying element, turning it off and letting dishes air-dry saves around 15% of the total cycle electricity.',
      },
      {
        q: 'Can I run my dishwasher overnight on a cheaper off-peak tariff?',
        a: 'Yes. Many smart UK tariffs (like Octopus Agile or Economy 7) offer electricity as low as 7p–10p/kWh overnight, cutting your dishwasher running cost to under 8p per cycle.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet ein Spülgang im Geschirrspüler in Deutschland?',
        a: 'Ein Spülgang im Eco-Programm (ca. 0,85 kWh) kostet bei 41,35 ct/kWh rund 35 Cent. Ein Intensivprogramm mit 70 °C (ca. 1,4 kWh) kostet rund 58 Cent.',
      },
      {
        q: 'Ist die Spülmaschine sparsamer als Spülen von Hand?',
        a: 'Ja! Studien der Universität Bonn belegen: Ein voll beladener Geschirrspüler verbraucht ca. 50 % weniger Energie und 70–80 % weniger Wasser als das Spülen der gleichen Geschirrmenge von Hand.',
      },
      {
        q: 'Warum dauert das Eco-Programm 3 Stunden?',
        a: 'Weil das Wasser langsamer und nur auf ca. 50 °C erhitzt wird. Die Einweichzeit kompensiert die geringere Hitze, was den Stromverbrauch um bis zu ein Drittel senkt.',
      },
      {
        q: 'Lohnt sich der Anschluss an die Warmwasserleitung?',
        a: 'Wenn Ihr Warmwasser über eine Wärmepumpe oder Solarthermie erzeugt wird, ja. Bei Erwärmung über einen elektrischen Durchlauferhitzer lohnt es sich meist nicht.',
      },
      {
        q: 'Wie viel Strom spart man durch Verzicht auf das Vorspülen?',
        a: 'Wer auf warmes Vorspülen von Hand verzichtet, spart im Jahr bis zu 40 Euro an Warmwasser- und Stromkosten sowie tausende Liter Trinkwasser.',
      },
    ],
  },

  // 8. OVEN (Backofen)
  {
    slug: 'oven',
    deSlug: 'backofen',
    enName: 'Electric Oven',
    deName: 'Backofen',
    category: 'kitchen',
    wattageRange: {
      min: 2000,
      max: 3600,
      defaultWatts: 2500,
      source: 'Neff & AEG built-in electric oven energy fiche (2500W standard element rating, 0.9-1.6 kWh/cycle)',
    },
    typicalUsage: {
      hoursPerDay: 0.7,
      usesPerWeek: 5,
      descriptionEn: '45 minutes per dinner cooking session, 5 days per week (~0.53h/day average)',
      descriptionDe: '45 Minuten Zubereitungszeit, 5 Tage pro Woche (ca. 0,53 Std./Tag)',
    },
    standbyWatts: 1.5,
    tipsEn: [
      'Cook multiple dishes simultaneously across different shelves to make the most of the heated oven space.',
      'Avoid opening the oven door unnecessarily; every opening drops interior temperature by 20°C–25°C, requiring extra power to recover.',
      'Switch the oven off 10 minutes before the end of cooking time; retained thermal energy finishes cooking without drawing electricity.',
      'Use fan-assisted (convection) mode: it distributes heat evenly and allows you to set the temperature 20°C lower than conventional settings.',
    ],
    tipsDe: [
      'Garen Sie mehrere Gerichte oder Beilagen gleichzeitig auf verschiedenen Einschubebenen, um den heißen Garraum optimal zu nutzen.',
      'Öffnen Sie die Backofentür während des Backens so selten wie möglich: Jedes Öffnen senkt die Temperatur um bis zu 25 °C.',
      'Schalten Sie den Ofen 10 Minuten vor Ende der Garzeit aus und nutzen Sie die gespeicherte Nachwärme zum Fertiggaren.',
      'Backen Sie mit Umluft statt Ober-/Unterhitze: Sie können die Temperatur um 20 °C niedriger einstellen und sparen ca. 20 % Strom.',
    ],
    alternatives: [
      {
        slug: 'air-fryer',
        nameEn: 'Air Fryer',
        nameDe: 'Heißluftfritteuse',
        comparisonNoteEn: 'For small dishes or portions for 1 to 2 people, an air fryer uses 65% less electricity than heating an entire 70-litre oven cavity.',
        comparisonNoteDe: 'Für 1–2 Personen verbraucht die Heißluftfritteuse rund 65 % weniger Strom als das Aufheizen des großen Backofens.',
      },
      {
        slug: 'microwave',
        nameEn: 'Microwave Oven',
        nameDe: 'Mikrowelle',
        comparisonNoteEn: 'Reheating leftovers in an oven takes 25 minutes and 1 kWh; a microwave does it in 3 minutes for less than 0.1 kWh.',
        comparisonNoteDe: 'Reste im Backofen aufzuwärmen dauert 25 Minuten und kostet 1 kWh; die Mikrowelle schafft es in 3 Minuten für 0,08 kWh.',
      },
    ],
    faqsEn: [
      {
        q: 'How much does it cost to run an electric oven for an hour in the UK?',
        a: 'A 2500W oven cycling on its thermostat consumes between 1.2 and 1.6 kWh per hour. At the 24.5p/kWh price cap, this costs between 29p and 39p per hour of active cooking.',
      },
      {
        q: 'Does fan oven use less electricity than conventional static heat?',
        a: 'Yes. Convection fan ovens circulate heated air, reducing cooking times by about 10–15% and enabling you to lower cooking temperatures by 20°C, saving roughly 20% in energy.',
      },
      {
        q: 'How much electricity does oven self-cleaning (pyrolytic) consume?',
        a: 'A pyrolytic cleaning cycle heats the oven to 500°C for 2 to 3 hours, consuming between 3.5 and 5.0 kWh (approx. 85p to £1.25 per cleaning session in the UK).',
      },
      {
        q: 'Is preheating always necessary?',
        a: 'Only for yeast breads, soufflés, and delicate pastries. Casseroles, roasted meats, and vegetables cook perfectly when placed in a cold oven as it heats up.',
      },
      {
        q: 'Does ceramic cookware save oven energy?',
        a: 'Yes. Glass and ceramic baking dishes conduct heat better than metal pans, allowing you to turn the temperature down by roughly 10°C to 15°C.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet eine Stunde Backofen in Deutschland?',
        a: 'Ein 2.500-Watt-Backofen verbraucht mit Thermostat-Taktung ca. 1,3–1,6 kWh pro Stunde. Bei 41,35 ct/kWh kostet eine Stunde Backen rund 55 bis 66 Cent.',
      },
      {
        q: 'Ist Umluft sparsamer als Ober- und Unterhitze?',
        a: 'Ja. Bei Umluft verteilt das Gebläse die Heißluft gleichmäßig. Dadurch kann die Temperatur um 20 °C niedriger gewählt werden (z. B. 180 °C statt 200 °C), was ca. 20 % Strom spart.',
      },
      {
        q: 'Was kostet ein Pyrolyse-Reinigungsdurchgang?',
        a: 'Die Pyrolyse heizt den Backofen auf ca. 500 °C auf und läuft 2–3 Stunden. Dabei werden ca. 4–5 kWh Strom verbraucht, was rund 1,65 bis 2,10 Euro pro Reinigung entspricht.',
      },
      {
        q: 'Muss man den Backofen wirklich immer vorheizen?',
        a: 'Nein. Außer bei empfindlichem Biskuitteig oder Soufflés ist Vorheizen meist unnötig. Wer Gerichte in den kalten Ofen schiebt, spart bis zu 20 % Energie.',
      },
      {
        q: 'Wie viel Strom zieht die digitale Backofenuhr im Standby?',
        a: 'Die Digitaluhr verbraucht ca. 1 bis 2 Watt dauerhaft. Das summiert sich im Jahr auf etwa 9 bis 17 kWh bzw. ca. 4 bis 7 Euro Stromkosten.',
      },
    ],
  },

  // 9. MICROWAVE (Mikrowelle)
  {
    slug: 'microwave',
    deSlug: 'mikrowelle',
    enName: 'Microwave Oven',
    deName: 'Mikrowelle',
    category: 'kitchen',
    wattageRange: {
      min: 700,
      max: 1500,
      defaultWatts: 1200,
      source: 'Panasonic & Samsung 800W RF output solo microwave (draws approx. 1200W electrical input)',
    },
    typicalUsage: {
      hoursPerDay: 0.15,
      usesPerWeek: 14,
      descriptionEn: 'approx. 10 minutes total per day across reheating sessions',
      descriptionDe: 'ca. 10 Minuten tägliche Gesamtnutzung für Mahlzeiten & Heißgetränke',
    },
    standbyWatts: 1.5,
    tipsEn: [
      'Cover food with a microwave-safe lid to trap steam; moist heat reheats food twice as fast and prevents drying.',
      'Defrost food in the refrigerator overnight when possible rather than using the microwave defrost setting.',
      'Spread food evenly in a doughnut ring on the plate to allow microwaves to penetrate without cold centre spots.',
      'Unplug or turn off the wall switch if your microwave has a bright clock display you do not use.',
    ],
    tipsDe: [
      'Decken Sie Speisen mit einer Mikrowellenhaube ab: Der Dampf beschleunigt das Erwärmen um bis zu 40 % und verhindert Spritzer.',
      'Tauen Sie Tiefkühlkost über Nacht im Kühlschrank auf; das spart den stromintensiven Auftaudurchgang in der Mikrowelle und kühlt den Kühlschrank gratis.',
      'Verteilen Sie Speisen ringförmig auf dem Teller, damit die elektromagnetischen Wellen das Essen gleichmäßig und schneller durchdringen.',
      'Schalten Sie die Mikrowelle an einer schaltbaren Steckdosenleiste aus, wenn Sie die Zeitanzeige nicht benötigen.',
    ],
    alternatives: [
      {
        slug: 'oven',
        nameEn: 'Electric Oven',
        nameDe: 'Backofen',
        comparisonNoteEn: 'Reheating a single plate in the microwave consumes 0.08 kWh versus 1.2 kWh in an oven—saving over 90% in electricity.',
        comparisonNoteDe: 'Ein Teller Essen in der Mikrowelle aufzuwärmen verbraucht 0,08 kWh gegenüber 1,2 kWh im Backofen – über 90 % Ersparnis.',
      },
      {
        slug: 'kettle',
        nameEn: 'Electric Kettle',
        nameDe: 'Wasserkocher',
        comparisonNoteEn: 'For water above 250ml, an electric kettle heats water faster and with higher thermodynamic efficiency than a microwave.',
        comparisonNoteDe: 'Bei mehr als 250 ml Wasser arbeitet der Wasserkocher deutlich schneller und energieeffizienter als die Mikrowelle.',
      },
    ],
    faqsEn: [
      {
        q: 'How much does it cost to use a microwave for 5 minutes in the UK?',
        a: 'A 1200W electrical input microwave running for 5 minutes consumes 0.10 kWh. At 24.5p/kWh, that costs approx. 2.5p.',
      },
      {
        q: 'What is the difference between microwave power rating and electrical consumption?',
        a: 'An "800W" microwave rating refers to the radio-frequency cooking output. The unit actually draws around 1200W from the wall socket to generate that microwave radiation.',
      },
      {
        q: 'Is a microwave cheaper than an air fryer for reheating?',
        a: 'Yes. For basic reheating of moist foods (soups, stews, pasta), a microwave uses roughly one-third of the electricity of an air fryer.',
      },
      {
        q: 'Does keeping a microwave plugged in use much standby electricity?',
        a: 'A microwave with a digital clock display draws 1.5W to 3W on standby, costing around £3.50 to £6.50 per year in the UK if left on 24/7.',
      },
      {
        q: 'Is steaming vegetables in a microwave energy-efficient?',
        a: 'Extremely efficient. Steaming vegetables in a microwave with 2 tablespoons of water takes 3 minutes and retains more vitamins than boiling on a stove.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet 5 Minuten Mikrowelle in Deutschland?',
        a: 'Bei einer Leistungsaufnahme von 1.200 Watt (für 800 Watt Garleistung) verbraucht die Mikrowelle in 5 Minuten 0,10 kWh. Das kostet bei 41,35 ct/kWh rund 4,1 Cent.',
      },
      {
        q: 'Warum weicht die Wattangabe auf der Packung vom Stromverbrauch ab?',
        a: 'Die beworbene Zahl (z. B. 800 W) ist die reine Mikrowellen-Nutzleistung. Der Stromverbrauch ab Steckdose liegt wegen des Wirkungsgrads des Magnetrons bei ca. 1.150–1.250 Watt.',
      },
      {
        q: 'Ist die Mikrowelle beim Aufwärmen sparsamer als der Herd?',
        a: 'Ja. Für eine einzelne Portion spart die Mikrowelle gegenüber Herd oder Backofen bis zu 70 % Zeit und bis zu 80 % Strom.',
      },
      {
        q: 'Wie viel Strom verbraucht die Digitaluhr der Mikrowelle im Standby?',
        a: 'Im Standby zieht die Anzeige ca. 1,5 bis 2 Watt. Das summiert sich im Jahr auf 13 bis 17 kWh bzw. ca. 5 bis 7 Euro Stromkosten.',
      },
      {
        q: 'Lohnt sich eine Kombi-Mikrowelle mit Heißluft?',
        a: 'Ja, als Backofenersatz für kleine Haushalte. Bei kleinen Pizzen oder Brötchen verbraucht die Heißluft-Mikrowelle deutlich weniger Strom als ein großer Einbaubackofen.',
      },
    ],
  },

  // 10. SLOW COOKER (Schongarer)
  {
    slug: 'slow-cooker',
    deSlug: 'schongarer',
    enName: 'Slow Cooker',
    deName: 'Schongarer / Slow Cooker',
    category: 'kitchen',
    wattageRange: {
      min: 120,
      max: 320,
      defaultWatts: 200,
      source: 'Crock-Pot & Morphy Richards 3.5L to 6.5L oval slow cooker technical specifications (180W–240W)',
    },
    typicalUsage: {
      hoursPerDay: 2.0,
      usesPerWeek: 2,
      descriptionEn: '7 hours runtime on Low/High, twice per week (average 2h daily across week)',
      descriptionDe: '7 Stunden Garzeit auf Stufe Low/High, 2 Mal pro Woche (ca. 2 Std./Tag Schnitt)',
    },
    standbyWatts: 0.5,
    tipsEn: [
      'Keep the glass lid on throughout cooking; removing the lid releases trapped steam and drops chamber temperature, adding 15–20 minutes to cook time.',
      'Fill the ceramic pot between one-half and two-thirds full for optimal thermodynamic heat transfer.',
      'Cook larger batches and freeze individual portions to maximize the output per kilowatt-hour of cooking.',
      'Use the "Low" setting (approx. 150W) for all-day cooking rather than the "High" setting (approx. 250W).',
    ],
    tipsDe: [
      'Lassen Sie den Glasdeckel geschlossen: Jedes Abheben lässt wertvolle Feuchtigkeit und Hitze entweichen und verlängert die Garzeit um bis zu 20 Minuten.',
      'Befüllen Sie den Keramiktopf stets zwischen der Hälfte und zwei Dritteln für eine gleichmäßige Wärmeverteilung.',
      'Kochen Sie größere Mengen auf Vorrat und frieren Sie Portionen ein, um den Stromverbrauch optimal auszunutzen.',
      'Nutzen Sie die Stufe "Low" (ca. 150 Watt) für sanftes Garen über den Tag statt "High" (ca. 250 Watt).',
    ],
    alternatives: [
      {
        slug: 'oven',
        nameEn: 'Electric Oven (Slow Casserole)',
        nameDe: 'Backofen (Schmoren)',
        comparisonNoteEn: 'Simmering a stew in an electric oven for 4 hours consumes around 5 kWh, whereas a slow cooker uses just 1 kWh for 7 hours of cooking.',
        comparisonNoteDe: 'Ein Schmorgericht 4 Stunden im Backofen zuzubereiten verbraucht ca. 5 kWh; der Schongarer benötigt für 7 Stunden nur ca. 1,4 kWh.',
      },
      {
        slug: 'air-fryer',
        nameEn: 'Air Fryer',
        nameDe: 'Heißluftfritteuse',
        comparisonNoteEn: 'Air fryers are ideal for quick crisp roasting, whereas slow cookers excel at tenderizing budget cuts of meat over hours with minimal electricity.',
        comparisonNoteDe: 'Heißluftfritteusen sind perfekt für schnelles Rösten; Schongarer ideal für zarte Eintöpfe mit extrem geringer Wattzahl.',
      },
    ],
    faqsEn: [
      {
        q: 'How much does it cost to run a slow cooker for 8 hours in the UK?',
        a: 'A typical 200W slow cooker consumes around 1.3 to 1.6 kWh over an 8-hour cooking cycle. At the 24.5p/kWh price cap, this costs between 32p and 39p total.',
      },
      {
        q: 'Is a slow cooker cheaper to run than an oven for casseroles?',
        a: 'Yes, dramatically. An oven consumes 2500W and uses roughly 4 to 6 times more electricity to braise a casserole over several hours compared to a well-insulated slow cooker.',
      },
      {
        q: 'Does a slow cooker stay on full power the entire 8 hours?',
        a: 'No. Once the ceramic crock reaches simmering temperature, the heating coil cycles intermittently to hold the temperature steady at around 80°C to 90°C.',
      },
      {
        q: 'Can a slow cooker save money on grocery bills too?',
        a: 'Yes. Slow cooking tenderizes tougher, more affordable cuts of beef and stewing lamb, helping households save on food ingredients as well as electricity.',
      },
      {
        q: 'Is it safe to leave a slow cooker on while at work?',
        a: 'Yes. Slow cookers are engineered specifically with heavy ceramic pots and low wattage elements for safe unattended operation.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet ein Schongarer bei 8 Stunden Laufzeit in Deutschland?',
        a: 'Ein 200-Watt-Slow-Cooker verbraucht in 8 Stunden ca. 1,4 kWh Strom. Bei 41,35 ct/kWh kostet ein komplettes 8-Stunden-Schmorgericht rund 58 Cent.',
      },
      {
        q: 'Ist der Slow Cooker sparsamer als der Backofen beim Schmoren?',
        a: 'Ja, um ein Vielfaches. Ein Backofen verbraucht beim mehrstündigen Schmoren ca. 4–6 kWh (ca. 1,70–2,50 Euro). Der Schongarer spart über 75 % dieser Energiekosten.',
      },
      {
        q: 'Läuft der Schongarer die ganze Zeit auf Höchstleistung?',
        a: 'Nein. Sobald der schwere Keramikeinsatz die Gartemperatur (ca. 85–90 °C) erreicht hat, hält er die Hitze und die Heizung schaltet nur noch intervallweise zu.',
      },
      {
        q: 'Kann man mit dem Slow Cooker auch bei den Lebensmitteln sparen?',
        a: 'Ja. Durch das langsame Schmoren werden auch preisgünstigere, sehnigere Fleischstücke butterzart, was zusätzlich zum Strom die Haushaltskasse schont.',
      },
      {
        q: 'Verbraucht die Warmhaltefunktion viel Strom?',
        a: 'Nein. Auf der Stufe "Warmhalten" zieht das Gerät meist nur 50 bis 70 Watt, was etwa 2 bis 3 Cent pro Stunde entspricht.',
      },
    ],
  },

  // 11. FRIDGE-FREEZER (Kühl-Gefrierkombination)
  {
    slug: 'fridge-freezer',
    deSlug: 'kuehl-gefrierkombination',
    enName: 'Fridge-Freezer',
    deName: 'Kühl-Gefrierkombination',
    category: 'kitchen',
    wattageRange: {
      min: 80,
      max: 300,
      defaultWatts: 150,
      source: 'Liebherr & Samsung 350L combi fridge EU energy fiche (150W compressor cycling at ~35% duty cycle, 180-260 kWh/year)',
    },
    typicalUsage: {
      hoursPerDay: 8.0,
      usesPerWeek: 7,
      descriptionEn: '24 hours plugged in with compressor running approx. 8 hours active cycle per day (33% duty cycle)',
      descriptionDe: '24 Stunden eingesteckt, Kompressor taktet ca. 8 Stunden aktive Laufzeit täglich (ca. 33 % Einschaltdauer)',
    },
    tipsEn: [
      'Set the fridge compartment to 4°C–5°C and the freezer to -18°C; setting temperatures lower than this wastes electricity without improving preservation.',
      'Vacuum the condenser coils on the back or bottom twice a year; dust buildup restricts heat dispersal and increases power consumption by up to 25%.',
      'Check door seals with a sheet of paper; if the paper slides out easily when the door is shut, replace the gasket to prevent cold air leakage.',
      'Defrost frozen food inside the fridge compartment; the thawing food helps cool the fridge interior for free.',
    ],
    tipsDe: [
      'Stellen Sie die Kühlschranktemperatur auf 5 bis 7 °C und den Gefrierbereich auf -18 °C ein; jedes Grad kälter erhöht den Stromverbrauch um ca. 6 %.',
      'Befreien Sie die Lüftungsschlitze und Wärmetauscher-Gitter auf der Rückseite regelmäßig von Staub; verstaubte Gitter treiben den Stromverbrauch um bis zu 20 % nach oben.',
      'Prüfen Sie die Türdichtungen mit einem Blatt Papier: Lässt es sich bei geschlossener Tür leicht herausziehen, entweicht Kälte und die Dichtung sollte gereinigt oder getauscht werden.',
      'Lassen Sie gekochte Speisen vor dem Hineinstellen immer vollständig auf Zimmertemperatur abkühlen.',
    ],
    alternatives: [
      {
        slug: 'chest-freezer',
        nameEn: 'Chest Freezer',
        nameDe: 'Gefriertruhe',
        comparisonNoteEn: 'Chest freezers open from the top, preventing dense cold air from spilling out and using roughly 25% less power than upright freezer drawers.',
        comparisonNoteDe: 'Gefriertruhen öffnen nach oben, sodass die kalte Luft im Korpus bleibt; sie verbrauchen ca. 25 % weniger Strom als Gefrierschränke.',
      },
      {
        slug: 'led-bulb',
        nameEn: 'LED Bulb (Fridge Lighting)',
        nameDe: 'LED-Leuchtmittel',
        comparisonNoteEn: 'Replacing old incandescent interior fridge bulbs with cool-running LEDs saves power and prevents unwanted heat generation inside the cold cavity.',
        comparisonNoteDe: 'LED-Kühlschranklampen verbrauchen nur 1–2 Watt und geben anders als Glühlampen keine Wärme in den Kühlraum ab.',
      },
    ],
    faqsEn: [
      {
        q: 'How much electricity does a fridge-freezer use per year in the UK?',
        a: 'A modern A/B rated 300L fridge-freezer consumes around 160 to 220 kWh annually (£39 to £54/year at 24.5p/kWh). Older 10-year-old models often use 350 to 500 kWh (£86 to £122/year).',
      },
      {
        q: 'Does an empty fridge use more electricity than a full fridge?',
        a: 'Yes. Food and chilled items possess thermal mass, helping retain cold temperatures when the door is opened. If your fridge is sparse, fill empty spaces with jugs of water.',
      },
      {
        q: 'What is the optimal temperature setting for efficiency?',
        a: 'The UK Food Standards Agency recommends 3°C to 5°C for the fresh food compartment and -18°C for the freezer compartment.',
      },
      {
        q: 'How much does frost buildup increase freezer electricity consumption?',
        a: 'Just 5 millimetres (1/4 inch) of ice buildup acts as an insulating barrier on cooling elements, forcing the compressor to work harder and increasing power consumption by 20% to 30%.',
      },
      {
        q: 'Should I replace my 15-year-old fridge-freezer to save money?',
        a: 'Replacing a 15-year-old fridge with a modern C or B energy-rated model typically saves between £50 and £90 per year on electricity, paying for itself over its lifespan.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet eine Kühl-Gefrierkombination im Jahr an Strom in Deutschland?',
        a: 'Ein modernes A- oder B-Klasse-Gerät verbraucht ca. 140 bis 180 kWh im Jahr (ca. 58 bis 74 Euro). Ein 15 Jahre altes Altgerät zieht oft 350 bis 450 kWh (ca. 145 bis 186 Euro jährlich).',
      },
      {
        q: 'Verbraucht ein leerer Kühlschrank mehr Strom als ein voller?',
        a: 'Ja. Lebensmittel wirken als Kältespeicher. Wird die Tür geöffnet, strömt bei einem leeren Kühlschrank viel kalte Luft heraus und warme Luft hinein, die der Kompressor mühsam wieder herunterkühlen muss.',
      },
      {
        q: 'Welche Temperatur ist ideal für den Kühlschrank?',
        a: 'Die ideale Temperatur im mittleren Fach liegt bei 5 bis 7 °C, im Gefrierteil bei -18 °C. Ein Absenken auf 3 °C ist meist unnötig und kostet ca. 15 % mehr Strom.',
      },
      {
        q: 'Wie viel Strom spart das regelmäßige Abtauen des Gefrierfachs?',
        a: 'Eine Eisschicht von nur 5 Millimetern wirkt wie eine Dämmung und erhöht den Stromverbrauch um rund 30 %. Regelmäßiges Abtauen spart jährlich ca. 20 bis 35 Euro.',
      },
      {
        q: 'Wo sollte der Kühlschrank in der Küche stehen?',
        a: 'Möglichst weit entfernt von Wärmequellen wie Backofen, Heizkörpern oder direkter Sonneneinstrahlung. Pro Grad niedrigerer Umgebungstemperatur sinkt der Stromverbrauch um ca. 3 %.',
      },
    ],
  },

  // 12. CHEST FREEZER (Gefriertruhe)
  {
    slug: 'chest-freezer',
    deSlug: 'gefriertruhe',
    enName: 'Chest Freezer',
    deName: 'Gefriertruhe',
    category: 'kitchen',
    wattageRange: {
      min: 60,
      max: 200,
      defaultWatts: 100,
      source: 'Bauknecht & Russell Hobbs 200L chest freezer energy labels (100W compressor, 160-210 kWh/year)',
    },
    typicalUsage: {
      hoursPerDay: 7.0,
      usesPerWeek: 7,
      descriptionEn: 'Compressor cycles on for approx. 7 hours total runtime per 24-hour day (~0.7 kWh/day)',
      descriptionDe: 'Kompressor schaltet sich thermostatgesteuert ca. 7 Stunden pro Tag ein (ca. 0,7 kWh/Tag)',
    },
    tipsEn: [
      'Position the chest freezer in an unheated utility room, dry garage, or basement to lower the temperature delta.',
      'Defrost the chest freezer annually or whenever ice thickness exceeds 5 mm to maintain heat exchanger efficiency.',
      'Organize frozen items in hanging wire baskets to find food quickly without keeping the lid open for prolonged periods.',
      'Keep the freezer well stocked; frozen food retains cold during minor power outages and compressor resting cycles.',
    ],
    tipsDe: [
      'Stellen Sie die Gefriertruhe an einem kühlen, trockenen Ort wie Keller oder Abstellraum auf; eine kühle Umgebungstemperatur senkt den Stromverbrauch drastisch.',
      'Tauen Sie die Truhe mindestens einmal jährlich ab, sobald die Eisschicht an den Innenwänden 5 mm übersteigt.',
      'Nutzen Sie Hängekörbe und Vorratsboxen, um Lebensmittel schnell zu finden, ohne den Deckel lange offen zu halten.',
      'Halten Sie die Truhe stets gut gefüllt; gefrorene Waren wirken als thermischer Puffer.',
    ],
    alternatives: [
      {
        slug: 'fridge-freezer',
        nameEn: 'Upright Fridge-Freezer',
        nameDe: 'Kühl-Gefrierkombination',
        comparisonNoteEn: 'Chest freezers lose almost zero cold air when opened from above, consuming about 20% to 30% less power than upright front-opening freezer drawers.',
        comparisonNoteDe: 'Beim Öffnen der Gefriertruhe bleibt die schwere Kaltluft am Boden stehen, wodurch sie ca. 20–30 % sparsamer ist als ein Gefrierschrank mit Schubladen.',
      },
      {
        slug: 'slow-cooker',
        nameEn: 'Slow Cooker (Batch Cooking)',
        nameDe: 'Schongarer (Vorräte kochen)',
        comparisonNoteEn: 'Chest freezers enable bulk meal preparation with slow cookers, buying ingredients in bulk and preserving them efficiently.',
        comparisonNoteDe: 'Eine Gefriertruhe ermöglicht das energiesparende Vorkochen großer Portionen auf Vorrat.',
      },
    ],
    faqsEn: [
      {
        q: 'How much does it cost to run a chest freezer per year in the UK?',
        a: 'A typical 200L modern chest freezer consumes approx. 180 kWh per year. At 24.5p/kWh, that costs approx. £44.10 per year (or about £3.68 per month).',
      },
      {
        q: 'Why are chest freezers more efficient than upright freezers?',
        a: 'Cold air is denser than warm air and sinks to the bottom. When you open a chest freezer lid, the cold air remains pooled inside, whereas opening an upright freezer door causes cold air to immediately pour onto the floor.',
      },
      {
        q: 'Can I put a chest freezer in an unheated garage in the UK?',
        a: 'Only if it has "Freezer Guard" or "Winter Guard" technology rated to operate in ambient temperatures down to -15°C.',
      },
      {
        q: 'What temperature should a chest freezer be set to?',
        a: '-18°C (0°F) is the international standard for food preservation and electrical efficiency.',
      },
      {
        q: 'Does filling empty space with water bottles save electricity?',
        a: 'Yes. Filling unused volume with plastic bottles of frozen water reduces air volume and helps maintain temperatures without frequent compressor cycling.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet eine Gefriertruhe im Jahr an Strom in Deutschland?',
        a: 'Eine 200-Liter-Gefriertruhe der Effizienzklasse C verbraucht rund 170 kWh im Jahr. Bei 41,35 ct/kWh entspricht das ca. 70 Euro jährlich (rund 5,80 Euro im Monat).',
      },
      {
        q: 'Warum verbraucht eine Gefriertruhe weniger Strom als ein Gefrierschrank?',
        a: 'Da kalte Luft schwerer ist als warme Luft, bleibt sie beim Öffnen der Truhe wie in einer Wanne am Boden liegen. Bei einer Schranktür fällt die Kälte sofort nach unten heraus.',
      },
      {
        q: 'Kann man eine Gefriertruhe in die Garage stellen?',
        a: 'Ja, sofern das Gerät über eine Winterfunktion verfügt (meist für Umgebungstemperaturen bis -15 °C zugelassen). Andernfalls kann das Kältemittel bei Frost zu zähflüssig werden.',
      },
      {
        q: 'Welche Temperatur ist bei der Gefriertruhe optimal?',
        a: '-18 °C ist die ideale Lagertemperatur für Lebensmittel. Jedes Grad kälter (z. B. -21 °C) verbraucht ca. 5 bis 6 % mehr Strom ohne Qualitätsgewinn.',
      },
      {
        q: 'Wie taut man eine Gefriertruhe am schnellsten ab?',
        a: 'Ausräumen, Stecker ziehen und einen Topf mit heißem Wasser hineinstellen. Das geschmolzene Eis mit Handtüchern aufsaugen – auf keinen Fall mit Messern kratzen!',
      },
    ],
  },

  // 13. DEHUMIDIFIER (Luftentfeuchter)
  {
    slug: 'dehumidifier',
    deSlug: 'luftentfeuchter',
    enName: 'Dehumidifier',
    deName: 'Luftentfeuchter',
    category: 'heating-cooling',
    wattageRange: {
      min: 180,
      max: 650,
      defaultWatts: 300,
      source: 'MeacoDry Arete One & Pro Breeze 12L-20L compressor dehumidifiers (250W–350W rated electrical draw)',
    },
    typicalUsage: {
      hoursPerDay: 6.0,
      usesPerWeek: 7,
      descriptionEn: '6 hours daily during laundry drying or damp winter periods (~1.8 kWh/day)',
      descriptionDe: '6 Stunden täglich während der Wäschetrocknung oder feuchten Jahreszeit (~1,8 kWh/Tag)',
    },
    standbyWatts: 1.0,
    tipsEn: [
      'Set the humidistat to 50% relative humidity; drying air below 45% wastes electricity and causes dry skin.',
      'Place clothes on an airer in a small closed room alongside the dehumidifier in "Laundry Mode" to dry clothes for a fraction of tumble dryer costs.',
      'Clean the washable air intake dust filter every two weeks to prevent compressor strain and maintain airflow.',
      'Empty the water tank promptly or use the continuous drainage hose so the auto-shutoff switch does not stop operation.',
    ],
    tipsDe: [
      'Stellen Sie das integrierte Hygrostat auf 50 bis 55 % relative Luftfeuchtigkeit ein; ein Trocknen unter 45 % ist unnötig und kostet mehr Strom.',
      'Trocknen Sie Wäsche in einem geschlossenen kleinen Raum mit dem Entfeuchter im Wäsche-Modus als sparsame Alternative zum Trockner.',
      'Reinigen Sie den Staubfilter alle zwei Wochen; ein verstaubter Filter drosselt den Luftstrom und treibt den Stromverbrauch in die Höhe.',
      'Halten Sie Türen und Fenster im Einsatzraum geschlossen, damit der Entfeuchter nicht vergeblich die Außenluft entfeuchtet.',
    ],
    alternatives: [
      {
        slug: 'tumble-dryer',
        nameEn: 'Tumble Dryer',
        nameDe: 'Wäschetrockner',
        comparisonNoteEn: 'Drying a load of laundry with a 300W dehumidifier over 5 hours uses roughly 1.5 kWh (~37p) compared to 3.5 kWh (~86p) for a condenser tumble dryer.',
        comparisonNoteDe: 'Wäsche mit einem 300W-Luftentfeuchter zu trocknen benötigt ca. 1,5 kWh (ca. 62 Cent) gegenüber 3,5 kWh (ca. 1,45 Euro) beim Kondenstrockner.',
      },
      {
        slug: 'fan',
        nameEn: 'Desk / Standing Fan',
        nameDe: 'Ventilator',
        comparisonNoteEn: 'Pairing a low-wattage fan (30W) with a dehumidifier circulates dry air faster around hanging laundry, reducing drying time by 30%.',
        comparisonNoteDe: 'Die Kombination eines kleinen Ventilators (35 W) mit dem Luftentfeuchter beschleunigt das Trocknen von Wäsche um weitere 30 %.',
      },
    ],
    faqsEn: [
      {
        q: 'How much does it cost to run a dehumidifier for 6 hours in the UK?',
        a: 'A 300W compressor dehumidifier running for 6 hours consumes 1.8 kWh. At 24.5p/kWh, that costs approx. 44.1p per day (or about £13.20 per month).',
      },
      {
        q: 'Is it cheaper to dry clothes with a dehumidifier than a tumble dryer?',
        a: 'Yes, significantly. A tumble dryer uses 3 to 4 kWh per load, whereas hanging laundry on an airer in a small room with a dehumidifier consumes only about 1.2 to 1.8 kWh.',
      },
      {
        q: 'Does a dehumidifier heat the room as it runs?',
        a: 'Yes. Compressor dehumidifiers discharge air that is roughly 1°C to 2°C warmer than the ambient room air, providing subtle supplementary heat.',
      },
      {
        q: 'What is the difference between compressor and desiccant dehumidifiers?',
        a: 'Compressor models draw 200W to 350W and work best above 15°C. Desiccant models draw 500W to 650W but excel in unheated spaces below 10°C (like garages).',
      },
      {
        q: 'Can a dehumidifier lower heating bills?',
        a: 'Yes. Moist air requires substantially more energy to heat than dry air. Maintaining humidity between 45% and 55% makes rooms feel warmer and reduces central heating demand.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet ein Luftentfeuchter pro Tag in Deutschland?',
        a: 'Ein 300-Watt-Kompressor-Entfeuchter verbraucht bei 6 Stunden Laufzeit ca. 1,8 kWh. Bei 41,35 ct/kWh kostet das rund 74 Cent am Tag (ca. 22 Euro im Monat).',
      },
      {
        q: 'Ist Wäschetrocknen mit dem Luftentfeuchter günstiger als der Trockner?',
        a: 'Ja! Das Trocknen einer Wäscheladung auf dem Wäscheständer mit einem Luftentfeuchter benötigt ca. 1,5 kWh (ca. 62 Cent) gegenüber ca. 1,45 Euro beim Kondenstrockner.',
      },
      {
        q: 'Gibt ein Luftentfeuchter Wärme ab?',
        a: 'Ja. Durch die Verdichtung des Kältemittels und die Kondensationswärme des Wasserdampfs bläst das Gerät um ca. 1–2 °C erwärmte Luft in den Raum zurück.',
      },
      {
        q: 'Was ist der Unterschied zwischen Kompressor- und Adsorptionsentfeuchtern?',
        a: 'Kompressor-Geräte verbrauchen ca. 200–350 Watt und sind ideal für Wohnräume (ab 15 °C). Adsorptionsentfeuchter ziehen 500–650 Watt, arbeiten dafür aber auch in kalten Kellern unter 10 °C zuverlässig.',
      },
      {
        q: 'Hilft ein Luftentfeuchter beim Heizkostensparen?',
        a: 'Ja. Trockenere Luft erwärmt sich bei gleicher Heizleistung schneller als feuchte Luft. Zudem verhindert eine relative Luftfeuchte unter 60 % effektiv teuren Schimmelbefall.',
      },
    ],
  },

  // 14. ELECTRIC SHOWER (Elektrische Dusche / Durchlauferhitzer)
  {
    slug: 'electric-shower',
    deSlug: 'elektrische-dusche',
    enName: 'Electric Shower',
    deName: 'Elektrische Dusche / Durchlauferhitzer',
    category: 'personal-care-lighting',
    wattageRange: {
      min: 7500,
      max: 10800,
      defaultWatts: 8500,
      source: 'Mira & Triton 8.5 kW - 10.5 kW instantaneous electric showers / Stiebel Eltron Durchlauferhitzer',
    },
    typicalUsage: {
      hoursPerDay: 0.33,
      usesPerWeek: 14,
      descriptionEn: 'Two 10-minute showers per day (20 minutes total = 0.33 hours / ~2.8 kWh/day)',
      descriptionDe: 'Zwei Duschgänge à 10 Minuten täglich (20 Minuten = 0,33 Stunden / ~2,8 kWh/Tag)',
    },
    tipsEn: [
      'Reduce shower time from 10 minutes to 5 minutes to instantly halve your showering electricity expenditure.',
      'Fit an aerating, water-saving showerhead; reducing flow rate from 10 L/min to 6 L/min allows lower power settings for the same temperature.',
      'Switch the shower dial to the "Eco" power setting during warm summer months when cold mains water enters at a warmer temperature.',
      'Turn off the shower while lathering shampoo or soap, turning it back on only to rinse.',
    ],
    tipsDe: [
      'Verkürzen Sie Ihre Duschzeit von 10 auf 5 Minuten: Das halbiert die Stromkosten für das Duschen unmittelbar.',
      'Installieren Sie einen Spar-Duschkopf mit Durchflussbegrenzer; er senkt den Wasserverbrauch von 12 auf 6 Liter/Minute ohne Komfortverlust.',
      'Stellen Sie den Durchlauferhitzer im Sommer auf die Eco-Stufe, da das zufließende Leitungswasser bereits deutlich wärmer ist.',
      'Schließen Sie beim Einseifen das Wasser, anstatt den Duschstrahl ununterbrochen heiß durchlaufen zu lassen.',
    ],
    alternatives: [
      {
        slug: 'immersion-heater',
        nameEn: 'Immersion Heater',
        nameDe: 'Warmwasserspeicher / Boiler',
        comparisonNoteEn: 'An electric shower heats water on demand instantaneously with zero tank heat losses, whereas an immersion heater keeps 150–200L continuously warm.',
        comparisonNoteDe: 'Ein Durchlauferhitzer erwärmt Wasser gradgenau im Moment des Durchflusses ohne Speicherverluste eines Boilers.',
      },
      {
        slug: 'kettle',
        nameEn: 'Electric Kettle',
        nameDe: 'Wasserkocher',
        comparisonNoteEn: 'Both use high-draw electric immersion elements, but a shower draws 8,500W to 10,000W compared to 2,200W for a kettle.',
        comparisonNoteDe: 'Beide nutzen Heizelemente, doch der Durchlauferhitzer zieht mit bis zu 10.000 Watt das Vierfache eines Wasserkochers.',
      },
    ],
    faqsEn: [
      {
        q: 'How much does a 10-minute electric shower cost in the UK?',
        a: 'An 8.5 kW shower running for 10 minutes (0.167 hours) consumes approx. 1.42 kWh. At 24.5p/kWh, a 10-minute shower costs approx. 34.7p. A 9.5 kW shower costs 38.8p.',
      },
      {
        q: 'Is an electric shower the highest wattage appliance in a home?',
        a: 'Yes. Most electric showers draw between 8,500W and 10,500W, requiring their own dedicated 40-amp circuit directly from the consumer unit.',
      },
      {
        q: 'How much can a family of 4 save by cutting showers to 5 minutes?',
        a: 'Four 10-minute showers daily cost around £506 per year in the UK. Cutting showers to 5 minutes saves over £250 annually on electricity bills.',
      },
      {
        q: 'Why do showers have higher wattage in winter than summer?',
        a: 'In winter, incoming mains water can be as cold as 5°C. To heat it to a comfortable 40°C, the shower element must work at full 8.5–10 kW capacity.',
      },
      {
        q: 'Is an electric shower cheaper than a mixer shower off a combi gas boiler?',
        a: 'No. Gas heating is roughly 6p–7p/kWh while electricity is 24.5p/kWh, making gas combi showers roughly three times cheaper per minute of hot water.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet 10 Minuten Duschen mit Durchlauferhitzer in Deutschland?',
        a: 'Ein 18-kW-Durchlauferhitzer (auf halber Last) bzw. ein 8,5-kW-Gerät verbraucht in 10 Minuten ca. 1,4 kWh. Bei 41,35 ct/kWh kostet ein Duschgang rund 58 Cent. Bei einem 21-kW-Gerät auf Volllast sind es ca. 1,45 Euro.',
      },
      {
        q: 'Warum verbraucht ein elektrischer Durchlauferhitzer so viel Strom?',
        a: 'Weil Wasser in Bruchteilen einer Sekunde von ca. 10 °C auf 38–40 °C erhitzt werden muss. Das erfordert kurzzeitig enorme elektrische Anschlussleistungen (11 bis 24 kW).',
      },
      {
        q: 'Wie viel Geld spart eine 4-köpfige Familie mit einem Sparduschkopf?',
        a: 'Ein Spar-Duschkopf halbiert die Durchflussmenge von 12 auf 6 Liter pro Minute. Eine 4-köpfige Familie spart damit bei täglichem Duschen rund 250 bis 400 Euro Strom- und Wasserkosten pro Jahr.',
      },
      {
        q: 'Welche Temperatur sollte am Durchlauferhitzer eingestellt werden?',
        a: 'Stellen Sie den Durchlauferhitzer direkt auf Ihre Wohlfühltemperatur (z. B. 38 °C) ein, anstatt Wasser auf 60 °C zu erhitzen und an der Armatur kalt beizumischen.',
      },
      {
        q: 'Lohnt sich ein elektronischer Durchlauferhitzer gegenüber einem hydraulischen?',
        a: 'Ja. Elektronische Durchlauferhitzer passen die Heizleistung exakt dem Wasserdruck und der Wunschtemperatur an und sparen ca. 20 % Strom gegenüber alten hydraulischen Geräten.',
      },
    ],
  },

  // 15. IMMERSION HEATER (Boiler / Warmwasserspeicher)
  {
    slug: 'immersion-heater',
    deSlug: 'warmwasserspeicher',
    enName: 'Immersion Heater',
    deName: 'Boiler / Warmwasserspeicher',
    category: 'heating-cooling',
    wattageRange: {
      min: 2500,
      max: 3500,
      defaultWatts: 3000,
      source: 'Megaflo & Santee standard 3 kW domestic unvented hot water cylinder immersion element',
    },
    typicalUsage: {
      hoursPerDay: 2.0,
      usesPerWeek: 7,
      descriptionEn: '2 hours daily on Economy 7 / off-peak timer to recharge hot water cylinder (~6.0 kWh/day)',
      descriptionDe: '2 Stunden tägliche Aufheizzeit für den Warmwasserspeicher (~6,0 kWh/Tag)',
    },
    standbyWatts: 0,
    tipsEn: [
      'Fit a 7-day mechanical or electronic timer so the immersion only runs during off-peak overnight tariff hours (Economy 7).',
      'Insulate the hot water cylinder with a 80mm British Standard jacket and insulate all exposed hot water pipework.',
      'Set the tank thermostat to 60°C; this is hot enough to prevent Legionella bacteria while preventing unnecessary scald-level heating.',
      'Never leave an immersion heater switched on 24/7; doing so can cost over £100 a month in standby heat loss.',
    ],
    tipsDe: [
      'Nutzen Sie eine Zeitschaltuhr, damit der Boiler nur zu günstigen Zeiten oder kurz vor dem Hauptbedarf am Morgen heizt.',
      'Dämmen Sie den Warmwasserspeicher und alle abgehenden Rohrleitungen mit hochwertigen Dämmschalen gegen Wärmeverluste.',
      'Stellen Sie das Thermostat auf exakt 60 °C ein: Das verhindert Legionellenbildung zuverlässig, vermeidet aber übermäßige Verkalkung und Stromkosten.',
      'Lassen Sie den Boiler niemals rund um die Uhr ohne Zeitschaltung nachheizen, da Wärmeverluste über das Gehäuse teuer bezahlt werden müssen.',
    ],
    alternatives: [
      {
        slug: 'electric-shower',
        nameEn: 'Electric Shower',
        nameDe: 'Elektrische Dusche / Durchlauferhitzer',
        comparisonNoteEn: 'An electric shower heats only what you use, avoiding having to maintain 150–200 litres of standing hot water in a cylinder.',
        comparisonNoteDe: 'Ein Durchlauferhitzer erhitzt nur exakt das durchfließende Wasser ohne Speicherverluste über den Tag.',
      },
      {
        slug: 'kettle',
        nameEn: 'Electric Kettle',
        nameDe: 'Wasserkocher',
        comparisonNoteEn: 'If you only need hot water for washing up a single pan, boiling a kettle is far cheaper than heating an entire 200L tank.',
        comparisonNoteDe: 'Für den kleinen Abwasch zwischendurch ist der Wasserkocher deutlich sparsamer als das Wiederaufheizen eines 150L-Speichers.',
      },
    ],
    faqsEn: [
      {
        q: 'How much does it cost to run a 3kW immersion heater for 2 hours in the UK?',
        a: 'A 3000W immersion heater running for 2 hours consumes 6.0 kWh. At the standard 24.5p/kWh price cap, that costs approx. £1.47 per day (£44.10 per month).',
      },
      {
        q: 'How much does leaving an immersion heater on all day cost?',
        a: 'Leaving an immersion heater on 24/7 with thermostat cycling consumes around 12 to 18 kWh per day, costing between £90 and £135 per month in the UK.',
      },
      {
        q: 'What is the ideal immersion heater thermostat temperature?',
        a: '60°C (140°F). Temperatures below 60°C pose a risk for Legionella bacterial growth, while settings above 60°C waste electricity and accelerate limescale buildup.',
      },
      {
        q: 'Can a cylinder jacket reduce immersion heating costs?',
        a: 'Fitting a thick 80mm British Standard insulating jacket to an uninsulated hot water cylinder saves around £50 to £70 per year in heat losses.',
      },
      {
        q: 'Can solar panels power an immersion heater?',
        a: 'Yes. Installing a "solar diverter" (like an eddi or myenergi unit) automatically routes surplus rooftop solar generation into the immersion heater for free hot water.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet 2 Stunden Boiler-Aufheizen in Deutschland?',
        a: 'Ein 3.000-Watt-Heizstab im Boiler verbraucht in 2 Stunden 6 kWh Strom. Bei 41,35 ct/kWh kostet das rund 2,48 Euro am Tag oder ca. 75 Euro im Monat.',
      },
      {
        q: 'Wie viel Strom verliert ein Warmwasserspeicher durch Standby-Verluste?',
        a: 'Ein mäßig gedämmter 150-Liter-Speicher verliert täglich rund 1,5 bis 2,5 kWh Wärme an den Aufstellraum. Das summiert sich im Jahr auf 200 bis 350 Euro reine Wärmeverluste.',
      },
      {
        q: 'Welche Temperatur muss im Warmwasserspeicher eingestellt sein?',
        a: 'Mindestens 60 °C, um das Wachstum gefährlicher Legionellen-Bakterien im Trinkwasser sicher zu verhindern.',
      },
      {
        q: 'Lohnt sich ein PV-Heizstab für die eigene Photovoltaikanlage?',
        a: 'Ja! Ein intelligenter PV-Heizstab nutzt überschüssigen Solarstrom vom Dach zur Warmwasserbereitung und erhöht den rentablen Eigenverbrauch signifikant.',
      },
      {
        q: 'Sollte man den Boiler im Urlaub ausschalten?',
        a: 'Bei Abwesenheit ab 3 Tagen lohnt sich das Abschalten. Nach der Rückkehr sollte der Speicher einmalig auf über 65 °C aufgeheizt werden, um Keime abzutöten.',
      },
    ],
  },

  // 16. ELECTRIC BLANKET (Heizdecke)
  {
    slug: 'electric-blanket',
    deSlug: 'heizdecke',
    enName: 'Electric Blanket',
    deName: 'Heizdecke',
    category: 'heating-cooling',
    wattageRange: {
      min: 50,
      max: 150,
      defaultWatts: 100,
      source: 'Dreamland & Beurer heated underblanket specifications (100W preheat, 30W maintain setting)',
    },
    typicalUsage: {
      hoursPerDay: 3.0,
      usesPerWeek: 7,
      descriptionEn: '3 hours evening usage in bed/sofa (1h preheat at 100W, 2h maintain at 30W = ~0.16 kWh/day)',
      descriptionDe: '3 Stunden abendliche Nutzung im Bett/Sofa (1 Std. Vorheizen 100W, 2 Std. Erhalten 30W = ~0,16 kWh/Tag)',
    },
    standbyWatts: 0.3,
    tipsEn: [
      'Preheat your bed for 45 minutes on high, then drop the setting to minimum (or switch it off completely) before sleeping.',
      'Heat the human, not the room: using an electric blanket allows you to turn bedroom central heating radiators down to 15°C.',
      'Always place an electric underblanket completely flat beneath your fitted sheet to prevent wire pinching and hotspot wear.',
      'Look for blankets with automatic 1-to-9 hour shut-off timers to avoid running power accidentally all night.',
    ],
    tipsDe: [
      'Heizen Sie das Bett 30–45 Minuten vor dem Zubettgehen auf hoher Stufe vor und schalten Sie dann auf die niedrigste Stufe oder ganz aus.',
      'Senken Sie die Raumtemperatur im Schlafzimmer auf 16 °C ab: Das spart massive Heizkosten, während die Heizdecke für wohlige Wärme sorgt.',
      'Verwenden Sie Modelle mit automatischer Abschaltung nach 90 bis 180 Minuten, um ein Durchlaufen während des Schlafs zu vermeiden.',
      'Achten Sie darauf, dass die Heizdecke glatt aufliegt und nicht geknickt wird, um die Heizdrähte zu schonen.',
    ],
    alternatives: [
      {
        slug: 'electric-heater',
        nameEn: 'Electric Fan Heater',
        nameDe: 'Heizlüfter',
        comparisonNoteEn: 'An electric blanket uses around 100W compared to 2000W for a fan heater—running an electric blanket is roughly 95% cheaper.',
        comparisonNoteDe: 'Eine Heizdecke verbraucht ca. 100 Watt gegenüber 2.000 Watt beim Heizlüfter – rund 95 % Ersparnis.',
      },
      {
        slug: 'oil-filled-radiator',
        nameEn: 'Oil-Filled Radiator',
        nameDe: 'Ölradiator',
        comparisonNoteEn: 'Heating an entire bedroom with an oil radiator draws 1500W, whereas an electric blanket focuses heat directly where needed for 100W.',
        comparisonNoteDe: 'Ein Ölradiator benötigt 1.500 Watt für den Raum; die Heizdecke wärmt gezielt den Körper für nur 100 Watt.',
      },
    ],
    faqsEn: [
      {
        q: 'How much does it cost to run an electric blanket for an hour in the UK?',
        a: 'On maximum preheat (100W), it costs approx. 2.45p per hour. On low maintenance setting (approx. 30W), it costs under 0.8p per hour.',
      },
      {
        q: 'Can an electric blanket save money on winter gas bills?',
        a: 'Yes. Lowering your whole-house central heating thermostat by just 1°C saves around 10% on gas bills. Using an electric blanket for personal warmth at night can save £80 to £140 per winter.',
      },
      {
        q: 'Is it safe to keep an electric blanket on all night?',
        a: 'Modern electric blankets equipped with overheat protection circuits (BEAB approved) are rated for all-night use on the lowest heat setting.',
      },
      {
        q: 'What is the difference between a heated throw and an underblanket?',
        a: 'An underblanket fits securely over the mattress beneath the bedsheet. A heated throw is a soft decorative fleece blanket meant for wrapping around yourself on the sofa or desk.',
      },
      {
        q: 'Can you wash an electric blanket in a washing machine?',
        a: 'Yes, most modern models feature detachable power cords and can be machine washed on a gentle 30°C wool cycle.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet eine Heizdecke pro Stunde in Deutschland?',
        a: 'Bei 100 Watt Maximalleistung verbraucht eine Heizdecke in einer Stunde 0,1 kWh (ca. 4,1 Cent). Auf niedriger Erhaltungsstufe (ca. 30 Watt) kostet sie nur rund 1,2 Cent pro Stunde.',
      },
      {
        q: 'Wie viel Heizkosten spart man durch eine Heizdecke?',
        a: 'Wer das Schlafzimmer nachts auf 15–16 °C abkühlen lässt und die Wärme über eine Heizdecke bezieht, spart pro Heizperiode bis zu 100–150 Euro an Gas- oder Fernwärmekosten.',
      },
      {
        q: 'Darf man eine Heizdecke die ganze Nacht anlassen?',
        a: 'Nur auf kleinster Stufe und bei Modellen mit geprüftem Überhitzungsschutz. Empfohlen wird jedoch die Nutzung von Abschaltautomatiken.',
      },
      {
        q: 'Was ist der Unterschied zwischen Heizdecke und Wärmeunterbett?',
        a: 'Ein Wärmeunterbett wird fest auf die Matratze gespannt. Eine Heizdecke (Heizplaid) ist eine flexible Kuscheldecke zum Zudecken auf der Couch oder am Arbeitsplatz.',
      },
      {
        q: 'Kann man eine moderne Heizdecke waschen?',
        a: 'Ja, fast alle modernen Fabrikate verfügen über abnehmbare Netzkabel und dürfen im Schonwaschgang bei 30 °C in die Waschmaschine.',
      },
    ],
  },

  // 17. TV (Fernseher 55" 4K)
  {
    slug: 'tv',
    deSlug: 'fernseher',
    enName: 'Television (55" 4K LED/OLED)',
    deName: 'Fernseher (55" 4K LED/OLED)',
    category: 'entertainment-work',
    wattageRange: {
      min: 50,
      max: 200,
      defaultWatts: 110,
      source: 'LG OLED55 & Samsung QLED 55" EU energy consumption labels (80W–140W SDR/HDR rating)',
    },
    typicalUsage: {
      hoursPerDay: 4.0,
      usesPerWeek: 7,
      descriptionEn: '4 hours daily viewing time (~0.44 kWh/day)',
      descriptionDe: '4 Stunden tägliche Nutzungsdauer (~0,44 kWh/Tag)',
    },
    standbyWatts: 0.5,
    tipsEn: [
      'Enable the ambient light sensor (Eco sensor); it automatically dims screen backlighting in dark rooms, cutting power consumption by up to 30%.',
      'Avoid running vivid/dynamic picture mode; switching to "Cinema", "Filmmaker", or "Standard" mode lowers peak backlighting wattage.',
      'Turn off the TV when listening to podcasts or background music, or activate the "Picture Off" feature.',
      'Disable "Quick Start" or instant standby mode if you do not mind waiting an extra 5 seconds for the TV to boot.',
    ],
    tipsDe: [
      'Aktivieren Sie den integrierten Lichtsensor (Öko-Modus); er dimmt die Hintergrundbeleuchtung im abgedunkelten Raum automatisch um bis zu 30 % ab.',
      'Vermeiden Sie den Bildmodus "Dynamisch" oder "Lebhaft"; der Modus "Standard" oder "Kino/Filmmaker" verbraucht deutlich weniger Strom.',
      'Nutzen Sie bei Musik- oder Radio-Streaming die Funktion "Bildschirm aus", damit das Display keinen Strom verbraucht.',
      'Deaktivieren Sie den "Schnellstart-Modus", wenn Sie auf das sofortige Einschalten in 2 Sekunden zugunsten geringeren Standby-Verbrauchs verzichten können.',
    ],
    alternatives: [
      {
        slug: 'gaming-pc',
        nameEn: 'Gaming PC',
        nameDe: 'Gaming-PC',
        comparisonNoteEn: 'A 55" television draws around 110W, whereas a high-end gaming PC draws 400W–500W—roughly four times as much electricity.',
        comparisonNoteDe: 'Ein 55-Zoll-Fernseher zieht ca. 110 Watt, ein Gaming-PC unter Volllast ca. 450 Watt – das Vierfache.',
      },
      {
        slug: 'laptop',
        nameEn: 'Laptop Computer',
        nameDe: 'Laptop',
        comparisonNoteEn: 'Streaming video on a laptop consumes around 25W–45W compared to 110W on a 55" large-screen television.',
        comparisonNoteDe: 'Filme auf dem Laptop zu streamen benötigt nur ca. 25–40 Watt gegenüber 110 Watt beim Großbild-Fernseher.',
      },
    ],
    faqsEn: [
      {
        q: 'How much does it cost to watch TV for 4 hours a day in the UK?',
        a: 'A 110W 55" 4K TV consumes 0.44 kWh over 4 hours. At 24.5p/kWh, that costs approx. 10.8p per day, or £3.24 per month (£39.30 per year).',
      },
      {
        q: 'Does an OLED TV use more electricity than an LED TV?',
        a: 'OLED power consumption varies with picture content. Dark scenes draw as little as 50W because black pixels are turned off, whereas bright snow scenes can draw 160W. On average, OLED and modern QLED consumption is very similar.',
      },
      {
        q: 'How much does TV standby mode cost per year?',
        a: 'Modern EU/UK regulations cap TV standby power at 0.5W, costing around £1.07 per year. However, if networked standby or smart home wake-up is turned on, it can draw 3W to 8W (£6 to £17/year).',
      },
      {
        q: 'Does HDR (High Dynamic Range) use more electricity?',
        a: 'Yes. HDR content pushes backlights and OLED pixels to peak nit brightness, increasing electricity consumption by 25% to 50% compared to Standard Dynamic Range (SDR).',
      },
      {
        q: 'What size TV is most energy efficient?',
        a: 'A 43" 4K TV uses roughly 60W–75W, a 55" uses 95W–125W, and an 85" screen can exceed 250W. Screen area increases exponentially with diagonal size.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet 4 Stunden Fernsehen am Tag in Deutschland?',
        a: 'Ein 55-Zoll-4K-Fernseher mit 110 Watt verbraucht in 4 Stunden ca. 0,44 kWh. Bei 41,35 ct/kWh kostet das rund 18,2 Cent am Tag bzw. ca. 5,50 Euro im Monat (66 Euro/Jahr).',
      },
      {
        q: 'Verbraucht ein OLED-Fernseher mehr Strom als ein LED/LCD-Fernseher?',
        a: 'Der Verbrauch von OLED hängt vom Bildinhalt ab: Bei dunklen Filmszenen schalten sich die Pixel ab (extrem sparsam, ~50 W); bei hellen Szenen steigt der Verbrauch auf bis zu 160 W. Im Jahresschnitt liegen OLED und QLED nahezu gleichauf.',
      },
      {
        q: 'Was kostet der Fernseher im Standby-Modus?',
        a: 'Nach EU-Ökodesign-Richtlinie darf der Standby-Verbrauch maximal 0,5 Watt betragen (ca. 1,80 Euro im Jahr). Ist jedoch der "Networked Standby" für Alexa oder Google Home aktiv, können es 3 bis 6 Watt sein (bis zu 22 Euro/Jahr).',
      },
      {
        q: 'Erhöht HDR (High Dynamic Range) den Stromverbrauch?',
        a: 'Ja. Bei HDR-Filmen leuchten die Dioden punktuell mit maximaler Helligkeit auf. Der Stromverbrauch liegt ca. 30 bis 50 % über normalem SDR-Fernsehen.',
      },
      {
        q: 'Wie wirkt sich die Bildschirmgröße auf die Stromrechnung aus?',
        a: 'Ein 43-Zoll-TV benötigt ca. 60 Watt, ein 55-Zoll-Gerät ca. 110 Watt und ein riesiger 75-Zoll-Fernseher oft über 180 bis 220 Watt.',
      },
    ],
  },

  // 18. GAMING PC (Gaming-PC)
  {
    slug: 'gaming-pc',
    deSlug: 'gaming-pc',
    enName: 'Gaming PC',
    deName: 'Gaming-PC',
    category: 'entertainment-work',
    wattageRange: {
      min: 250,
      max: 750,
      defaultWatts: 450,
      source: 'NVIDIA RTX 4070 & AMD Ryzen 7 system real-world gaming load measurements (350W–500W load)',
    },
    typicalUsage: {
      hoursPerDay: 3.0,
      usesPerWeek: 7,
      descriptionEn: '3 hours active gaming load per day (~1.35 kWh/day)',
      descriptionDe: '3 Stunden aktive Gaming-Nutzung pro Tag (~1,35 kWh/Tag)',
    },
    standbyWatts: 3.0,
    tipsEn: [
      'Cap your frame rate in graphics drivers (e.g. at 60 FPS or 120 FPS matching your monitor); rendering surplus frames wastes 30% of GPU power.',
      'Enable undervolting on your graphics card; you can often reduce power draw by 15% to 20% with zero loss in game performance.',
      'Use "Sleep" mode rather than leaving the PC running idling overnight; a desktop PC idling at 70W uses 1.7 kWh per 24 hours of non-use.',
      'Turn off RGB lighting controller software if not needed; running multiple ambient lighting suites increases idle CPU load.',
    ],
    tipsDe: [
      'Begrenzen Sie die Bildwiederholrate (FPS-Cap) auf die Frequenz Ihres Monitors (z. B. 60 oder 120 Hz); das verhindert, dass die Grafikkarte unnötig 100 W mehr zieht.',
      'Nutzen Sie GPU-Undervolting: Durch behutsames Absenken der Spannung lässt sich der Stromverbrauch der Grafikkarte oft um 15–20 % ohne Leistungsverlust senken.',
      'Versetzen Sie den PC bei Spielpausen in den Energiesparmodus: Ein PC im Leerlauf zieht oft 60 bis 90 Watt grundlos aus der Dose.',
      'Nutzen Sie Netzteile mit 80-Plus-Gold- oder Platin-Zertifizierung für minimalen Wandlungsverlust an der Steckdose.',
    ],
    alternatives: [
      {
        slug: 'games-console',
        nameEn: 'Games Console (PS5 / Xbox Series X)',
        nameDe: 'Spielekonsole (PS5 / Xbox Series X)',
        comparisonNoteEn: 'A modern gaming console draws around 180W to 200W, which is less than half the 450W drawn by a desktop gaming rig.',
        comparisonNoteDe: 'Eine PlayStation 5 zieht beim Gaming ca. 180–200 Watt – weniger als die Hälfte eines High-End-PCs mit 450 Watt.',
      },
      {
        slug: 'laptop',
        nameEn: 'Gaming Laptop',
        nameDe: 'Laptop',
        comparisonNoteEn: 'Gaming laptops use highly optimized mobile components capped between 100W and 180W total system power.',
        comparisonNoteDe: 'Ein Gaming-Notebook ist auf mobile Effizienz getrimmt und benötigt unter Volllast nur ca. 120–180 Watt.',
      },
    ],
    faqsEn: [
      {
        q: 'How much does it cost to run a gaming PC for 3 hours in the UK?',
        a: 'At 450W active load, 3 hours of gaming consumes 1.35 kWh. At 24.5p/kWh, this costs approx. 33.1p per day (or about £9.92 per month).',
      },
      {
        q: 'Does an 850W power supply always draw 850W?',
        a: 'No. The wattage on a power supply unit (PSU) is its maximum rated capacity. The PC only draws whatever wattage its components (CPU, GPU, fans) require at any given moment.',
      },
      {
        q: 'How much electricity does a gaming PC use when idling on the desktop?',
        a: 'A modern gaming desktop idles at around 50W to 80W. If left on 24/7 without sleep, this idle draw alone costs £107 to £171 per year.',
      },
      {
        q: 'How much does undervolting a GPU save in electricity?',
        a: 'Undervolting an NVIDIA RTX 3080 or 4080 typically reduces power draw by 50W to 80W. For a heavy gamer playing 20 hours a week, this saves around £20 to £35 annually.',
      },
      {
        q: 'Does playing games in 4K use more electricity than 1080p?',
        a: 'Yes. Rendering in 4K forces the graphics card to run at sustained 99% GPU utilization, pulling maximum power compared to lighter 1080p loads.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet 3 Stunden Gaming am PC in Deutschland?',
        a: 'Ein Gaming-PC mit 450 Watt Gesamtsystemlast verbraucht in 3 Stunden 1,35 kWh. Bei 41,35 ct/kWh entspricht das rund 56 Cent am Tag bzw. ca. 16,80 Euro im Monat (202 Euro/Jahr).',
      },
      {
        q: 'Zieht ein 850-Watt-Netzteil immer 850 Watt aus der Steckdose?',
        a: 'Nein. Die Wattangabe bezeichnet nur die maximale Belastbarkeit. Der PC zieht aus der Steckdose nur genau so viel Energie, wie Prozessor und Grafikkarte gerade anfordern.',
      },
      {
        q: 'Wie viel Strom verbraucht ein Gaming-PC im Idle (Desktop-Betrieb)?',
        a: 'Ein Desktop-Gaming-PC benötigt im Leerlauf meist 50 bis 80 Watt. Läuft der Rechner rund um die Uhr durch, kostet das Idle-Laufen bis zu 290 Euro im Jahr!',
      },
      {
        q: 'Wie viel Geld spart Undervolting der Grafikkarte?',
        a: 'Durch Undervolting sinkt der Verbrauch um ca. 50 bis 80 Watt. Bei 15 Stunden wöchentlicher Spielzeit spart das in Deutschland rund 32 bis 51 Euro Stromkosten im Jahr.',
      },
      {
        q: 'Macht die Monitorauflösung (1080p vs. 4K) einen Unterschied?',
        a: 'Ja. In 4K läuft die Grafikkarte permanent an ihrer thermischen Leistungsgrenze (z. B. 280–350 Watt), während bei 1080p mit FPS-Limit oft nur 150–200 Watt gezogen werden.',
      },
    ],
  },

  // 19. LAPTOP (Laptop / Notebook)
  {
    slug: 'laptop',
    deSlug: 'laptop',
    enName: 'Laptop Computer',
    deName: 'Laptop / Notebook',
    category: 'entertainment-work',
    wattageRange: {
      min: 30,
      max: 100,
      defaultWatts: 60,
      source: 'Dell XPS, Apple MacBook Air & Lenovo ThinkPad standard 45W–65W USB-C power adapters',
    },
    typicalUsage: {
      hoursPerDay: 8.0,
      usesPerWeek: 5,
      descriptionEn: '8 hours of remote work/study on weekdays (~0.48 kWh/day)',
      descriptionDe: '8 Stunden Büroarbeit / Homeoffice an Werktagen (~0,48 kWh/Tag)',
    },
    standbyWatts: 1.0,
    tipsEn: [
      'Lower screen brightness to 60–70%; display illumination accounts for up to 40% of laptop power draw.',
      'Enable Battery Saver / Eco mode in Windows or macOS to throttle background tasks and processor clock speed.',
      'Unplug external USB peripherals (hard drives, webcams, RGB accessories) when not in active use.',
      'Switch your primary home office setup from a desktop PC to a laptop to cut electricity consumption by 80%.',
    ],
    tipsDe: [
      'Reduzieren Sie die Bildschirmhelligkeit auf 60–70 %; das Display macht oft mehr als ein Drittel des gesamten Verbrauchs aus.',
      'Aktivieren Sie den Energiesparmodus im Betriebssystem, um Hintergrundaktivitäten und Taktfrequenzen bei Büroarbeiten zu drosseln.',
      'Trennen Sie nicht benötigte USB-Geräte (externe Festplatten, Lampen, Hubs), da diese permanent Strom über den Port ziehen.',
      'Arbeiten Sie im Homeoffice auf einem Laptop statt auf einem Desktop-PC: Das spart rund 80 % der Stromkosten für Ihren Arbeitsplatz.',
    ],
    alternatives: [
      {
        slug: 'gaming-pc',
        nameEn: 'Desktop PC',
        nameDe: 'Desktop-PC',
        comparisonNoteEn: 'An office desktop PC uses 120W to 200W, whereas a laptop uses only 30W to 60W for identical spreadsheet and web tasks.',
        comparisonNoteDe: 'Ein Büro-Desktop-PC benötigt 120–200 Watt, ein Laptop für dieselbe Büroarbeit nur ca. 30–60 Watt.',
      },
      {
        slug: 'tv',
        nameEn: 'Television (Streaming)',
        nameDe: 'Fernseher',
        comparisonNoteEn: 'Watching video on a laptop uses roughly one-third of the electricity drawn by a 55" television.',
        comparisonNoteDe: 'Das Streamen von Serien auf dem Laptop verbraucht nur einen Bruchteil des Stroms eines 55-Zoll-Fernsehers.',
      },
    ],
    faqsEn: [
      {
        q: 'How much does it cost to charge and run a laptop for 8 hours in the UK?',
        a: 'At an average 60W draw, an 8-hour workday consumes 0.48 kWh. At 24.5p/kWh, this costs approx. 11.8p per day, or £2.55 per month.',
      },
      {
        q: 'Does keeping a laptop plugged in all day damage the battery or use extra electricity?',
        a: 'Modern laptops stop charging once the battery reaches 100% and bypass power directly to the internal circuitry, consuming only idle operating power.',
      },
      {
        q: 'How much electricity does a MacBook Air use compared to a Windows laptop?',
        a: 'Apple Silicon (M1/M2/M3) laptops are exceptionally efficient, idling at 5W–10W and drawing only 20W–35W under moderate workloads.',
      },
      {
        q: 'Does leaving a laptop charger plugged into the wall with no laptop use power?',
        a: 'Modern switch-mode chargers draw virtually negligible power (less than 0.1W to 0.2W), costing around 20p to 40p per year in "vampire" draw.',
      },
      {
        q: 'How much money can switching from a desktop to a laptop save annually?',
        a: 'For someone working 40 hours a week from home, switching from a 180W desktop setup to a 50W laptop saves around £60 to £85 per year in the UK.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet ein 8-Stunden-Homeoffice-Tag am Laptop in Deutschland?',
        a: 'Ein Laptop mit durchschnittlich 50 Watt Leistungsaufnahme verbraucht an einem 8-Stunden-Arbeitstag ca. 0,4 kWh. Bei 41,35 ct/kWh kostet das rund 16,5 Cent am Tag (ca. 3,50 Euro im Monat).',
      },
      {
        q: 'Schadet es dem Akku, wenn der Laptop dauerhaft am Ladekabel hängt?',
        a: 'Nein, moderne Ladeelektroniken schalten bei vollem Akku auf Netzbetrieb um. Viele Hersteller bieten Akkuschonmodi an, die das Laden bei 80 % stoppen.',
      },
      {
        q: 'Verbraucht ein Laptop im Ruhezustand (Standby) viel Strom?',
        a: 'Im Standby (Suspend-to-RAM) zieht ein Notebook meist unter 1 Watt. Im Ruhezustand (Hibernate) wird der Speicher auf die SSD geschrieben und der Verbrauch sinkt auf 0 Watt.',
      },
      {
        q: 'Wie viel Strom spart der Wechsel vom Desktop-PC zum Laptop?',
        a: 'Wer einen 150-Watt-Desktop gegen einen 45-Watt-Laptop tauscht, spart bei 220 Homeoffice-Tagen jährlich rund 185 kWh bzw. knapp 77 Euro an Stromkosten ein.',
      },
      {
        q: 'Zieht das Netzteil in der Steckdose Strom, wenn kein Laptop angeschlossen ist?',
        a: 'Hochwertige Netzteile verbrauchen im Leerlauf weniger als 0,1 bis 0,2 Watt. Das summiert sich im ganzen Jahr auf weniger als 50 Cent.',
      },
    ],
  },

  // 20. GAMES CONSOLE (Spielekonsole PS5 / Xbox Series X)
  {
    slug: 'games-console',
    deSlug: 'spielekonsole',
    enName: 'Games Console (PS5 / Xbox Series X)',
    deName: 'Spielekonsole (PS5 / Xbox Series X)',
    category: 'entertainment-work',
    wattageRange: {
      min: 140,
      max: 220,
      defaultWatts: 180,
      source: 'Sony PlayStation 5 & Microsoft Xbox Series X measured active power draw during gameplay (160W–200W)',
    },
    typicalUsage: {
      hoursPerDay: 2.5,
      usesPerWeek: 7,
      descriptionEn: '2.5 hours active gameplay per day (~0.45 kWh/day)',
      descriptionDe: '2,5 Stunden aktive Spielzeit täglich (~0,45 kWh/Tag)',
    },
    standbyWatts: 3.5,
    tipsEn: [
      'Avoid streaming Netflix or YouTube through your console; consoles draw 50W–70W while streaming, compared to 3W on a Chromecast or smart TV app.',
      'Enable "Energy Saver" mode rather than "Instant-On / Rest Mode"; this cuts standby power from 12W–15W down to under 0.5W.',
      'Turn off controller charging via USB when the console is in sleep mode if controllers are already fully charged.',
      'Set auto-shutoff to 20 minutes of inactivity so the console does not sit in start menus drawing 100W while you are away.',
    ],
    tipsDe: [
      'Streamen Sie Filme und YouTube nicht über die Konsole: Eine PS5 zieht beim Videostreaming 60–70 Watt, ein Smart-TV-Stick nur ca. 3 Watt.',
      'Aktivieren Sie den echten Energiesparmodus statt des Ruhemodus ("Standby"); das senkt den Ruhezustandsverbrauch von 10–13 Watt auf unter 0,5 Watt.',
      'Nutzen Sie die automatische Abschaltung nach 20 Minuten Inaktivität, damit das Menü nicht stundenlang mit 90 Watt weiterläuft.',
      'Reinigen Sie die Lüftungsschlitze regelmäßig: Bei Hitzestau drehen die Lüfter voll auf und das Kühlsystem verbraucht mehr Energie.',
    ],
    alternatives: [
      {
        slug: 'gaming-pc',
        nameEn: 'Gaming PC',
        nameDe: 'Gaming-PC',
        comparisonNoteEn: 'A console draws around 180W, compared to 450W for an equivalent desktop gaming PC playing similar modern titles.',
        comparisonNoteDe: 'Eine Konsole zieht ca. 180 Watt, während ein Gaming-PC für dieselben Grafikdetails rund 450 Watt verbraucht.',
      },
      {
        slug: 'tv',
        nameEn: 'Smart TV (Streaming)',
        nameDe: 'Smart-TV',
        comparisonNoteEn: 'Consoles use 60W just to playback media; using the native TV app uses almost zero additional power.',
        comparisonNoteDe: 'Zum reinen Filmestreaming verbraucht eine Konsole 60 Watt extra; die Smart-TV-App spart diesen Strom komplett.',
      },
    ],
    faqsEn: [
      {
        q: 'How much does it cost to play a PS5 or Xbox Series X for 2.5 hours in the UK?',
        a: 'At 180W average gaming draw, 2.5 hours uses 0.45 kWh. At 24.5p/kWh, this costs approx. 11.0p per session, or £3.31 per month (£40.24 per year).',
      },
      {
        q: 'Why should you not use a games console for watching Netflix?',
        a: 'A console leaves its primary GPU and high-speed memory clocks active during media playback, consuming 60W to 80W. A smart TV app or Apple TV/Roku stick draws only 2W to 4W.',
      },
      {
        q: 'How much does PS5 Rest Mode cost per year?',
        a: 'In standard Rest Mode with internet connection active for background downloads, a PS5 draws about 3.5W to 5W (£7.50 to £10.70/year in the UK). On Xbox with "Instant-on", it can draw 10W to 13W (£21 to £28/year).',
      },
      {
        q: 'Does playing older PS4 games on PS5 use less electricity?',
        a: 'Yes. Backward-compatible games run the APU in legacy compatibility clocks, drawing roughly 100W to 120W instead of the full 200W demanded by PS5 native games.',
      },
      {
        q: 'Is Nintendo Switch cheaper to run than a PS5?',
        a: 'Dramatically cheaper. The Nintendo Switch draws only 10W to 15W while docked and playing games, costing less than 1p for 3 hours of play.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet 2,5 Stunden Zocken auf der PS5 oder Xbox Series X in Deutschland?',
        a: 'Bei 180 Watt Leistungsaufnahme verbraucht die Konsole in 2,5 Stunden ca. 0,45 kWh. Bei 41,35 ct/kWh entspricht das rund 18,6 Cent am Tag bzw. ca. 5,60 Euro im Monat (ca. 68 Euro/Jahr).',
      },
      {
        q: 'Warum sollte man Netflix nicht über die Konsole schauen?',
        a: 'Weil der Hauptprozessor und Grafikchip der Konsole auch beim simplen Videostreaming aktiv bleiben und ca. 60–80 Watt ziehen. Ein Smart-TV oder Fire-TV-Stick benötigt dafür nur 2–4 Watt.',
      },
      {
        q: 'Was kostet der Standby-/Ruhemodus der PS5 im Jahr?',
        a: 'Im Standard-Ruhemodus mit aktiver Internetverbindung zieht die PS5 ca. 3,5 bis 5 Watt (ca. 13 bis 18 Euro im Jahr). Bei der Xbox mit Schnellstart-Funktion (bis zu 12 Watt) sind es sogar über 43 Euro jährlich.',
      },
      {
        q: 'Verbraucht die Nintendo Switch weniger Strom als die PS5?',
        a: 'Ja, drastisch weniger. Die Nintendo Switch benötigt im TV-Dock beim Spielen nur rund 12 bis 15 Watt – über 90 % weniger als eine PS5 oder Xbox Series X.',
      },
      {
        q: 'Lohnt sich das vollständige Ausschalten nach dem Spielen?',
        a: 'Ja. Wer den Energiesparmodus wählt und die Konsole bei längeren Pausen ganz herunterfährt, spart im Jahr problemlos 15 bis 30 Euro Stromkosten.',
      },
    ],
  },

  // 21. HAIR DRYER (Haartrockner / Föhn)
  {
    slug: 'hair-dryer',
    deSlug: 'haartrockner',
    enName: 'Hair Dryer',
    deName: 'Haartrockner / Föhn',
    category: 'personal-care-lighting',
    wattageRange: {
      min: 1200,
      max: 2400,
      defaultWatts: 1800,
      source: 'Dyson Supersonic (1600W) & Remington Pro-Air ionic (2200W) product manuals',
    },
    typicalUsage: {
      hoursPerDay: 0.17,
      usesPerWeek: 7,
      descriptionEn: '10 minutes styling per morning (approx. 0.17 hours = ~0.3 kWh/day)',
      descriptionDe: '10 Minuten Föhnen pro Morgen (ca. 0,17 Stunden = ~0,3 kWh/Tag)',
    },
    standbyWatts: 0,
    tipsEn: [
      'Towel-dry hair thoroughly with a microfiber hair wrap for 5 minutes before blow drying to cut drying time in half.',
      'Use high airflow speed with medium heat rather than maximum heat; air velocity evaporates water without damaging hair or burning excess watts.',
      'Clean the rear air filter mesh regularly; dust buildup chokes air intake, causing heating coils to overheat and cycle inefficiently.',
      'Use the cool shot button to set hairstyles without engaging the high-draw electric resistance coils.',
    ],
    tipsDe: [
      'Trocknen Sie die Haare vorab gründlich mit einem Mikrofaser-Handtuch ab; das halbiert die anschließende Föhnzeit.',
      'Wählen Sie eine hohe Gebläsestufe, aber nur mittlere Hitze: Schneller Luftstrom trocknet effizienter als übermäßige Hitze und schont das Haar.',
      'Reinigen Sie das Ansauggitter am hinteren Ende regelmäßig von Fusseln und Haaren, damit das Gebläse mit voller Leistung arbeitet.',
      'Nutzen Sie die Kaltstufe zum Fixieren der Frisur, da hierbei die stromintensive Heizspirale komplett abgeschaltet bleibt.',
    ],
    alternatives: [
      {
        slug: 'fan',
        nameEn: 'Cool Air Fan',
        nameDe: 'Ventilator',
        comparisonNoteEn: 'A room fan uses 40W compared to 1800W for a hairdryer, because it has no electric heating element.',
        comparisonNoteDe: 'Ein Ventilator zieht nur 40 Watt gegenüber 1.800 Watt beim Föhn, da er keine Heizdrähte besitzt.',
      },
      {
        slug: 'electric-shower',
        nameEn: 'Electric Shower',
        nameDe: 'Elektrische Dusche',
        comparisonNoteEn: 'Both are bathroom appliances with heavy resistance heaters, but a shower draws 8,500W compared to 1,800W for a hairdryer.',
        comparisonNoteDe: 'Beide heizen mit Widerstandselementen, doch der Durchlauferhitzer benötigt das Fünffache an Leistung.',
      },
    ],
    faqsEn: [
      {
        q: 'How much does it cost to use a hairdryer for 10 minutes in the UK?',
        a: 'An 1800W hairdryer running for 10 minutes (0.167 hours) consumes 0.30 kWh. At 24.5p/kWh, that costs approx. 7.4p per use, or £2.24 per month for daily use.',
      },
      {
        q: 'Does a 2200W hairdryer use more electricity than an 1600W model?',
        a: 'Not necessarily in practice. A higher wattage hairdryer produces stronger airflow and heat, often drying thick hair in 6 minutes instead of 10 minutes, leading to comparable total kWh.',
      },
      {
        q: 'Does the cool shot button use less electricity?',
        a: 'Yes. The cool shot cuts power to the 1600W heating coil instantly, running only the 100W–150W electric fan motor.',
      },
      {
        q: 'Can a hair straightener or curler use less power than a hairdryer?',
        a: 'Yes. Hair straighteners typically draw only 40W to 80W once up to temperature, using roughly one-twentieth the power of a blow dryer.',
      },
      {
        q: 'Why does the bathroom light sometimes flicker when the hairdryer starts?',
        a: 'Hairdryers create an instantaneous inrush current when the motor and heating coils turn on, causing a momentary voltage dip on shared domestic circuits.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet 10 Minuten Haareföhnen in Deutschland?',
        a: 'Ein 1.800-Watt-Föhn verbraucht in 10 Minuten 0,30 kWh. Bei 41,35 ct/kWh entspricht das rund 12,4 Cent pro Anwendung bzw. ca. 3,75 Euro im Monat (45 Euro/Jahr).',
      },
      {
        q: 'Verbraucht die Kaltstufe am Föhn weniger Strom?',
        a: 'Ja, drastisch weniger. Auf der Kaltstufe wird die 1.600-Watt-Heizspirale deaktiviert; es läuft nur noch der kleine Gebläsemotor mit ca. 80 bis 120 Watt.',
      },
      {
        q: 'Braucht ein 2.200-Watt-Föhn mehr Strom als ein 1.400-Watt-Gerät?',
        a: 'Nicht zwingend. Durch den kräftigeren Luftstrom sind die Haare oft in der halben Zeit trocken. Die verbrauchten Kilowattstunden sind bei beiden Geräten meist sehr ähnlich.',
      },
      {
        q: 'Wie viel Strom verbraucht ein Glätteisen im Vergleich zum Föhn?',
        a: 'Ein Glätteisen benötigt nach dem kurzen Aufheizen nur noch ca. 40 bis 70 Watt zur Temperaturhaltung – rund 95 % weniger als ein Föhn.',
      },
      {
        q: 'Wie viel Strom spart man durch gründliches Vortrocknen im Handtuch?',
        a: 'Wer das Haar 5 Minuten im Mikrofaser-Turban antrocknen lässt, verkürzt das Föhnen um ca. 5 Minuten und spart jährlich rund 20 Euro Strom.',
      },
    ],
  },

  // 22. FAN (Ventilator)
  {
    slug: 'fan',
    deSlug: 'ventilator',
    enName: 'Desk / Standing Fan',
    deName: 'Ventilator (Tisch / Stand)',
    category: 'heating-cooling',
    wattageRange: {
      min: 25,
      max: 70,
      defaultWatts: 45,
      source: 'Rowenta Turbo Silence & Honeywell oscillating standing fan technical specifications (35W–55W)',
    },
    typicalUsage: {
      hoursPerDay: 6.0,
      usesPerWeek: 7,
      descriptionEn: '6 hours continuous cooling during summer afternoons/nights (~0.27 kWh/day)',
      descriptionDe: '6 Stunden Betrieb an warmen Sommertagen oder Nächten (~0,27 kWh/Tag)',
    },
    standbyWatts: 0.5,
    tipsEn: [
      'Turn fans off when leaving the room; fans cool people via skin sweat evaporation (wind chill effect), not room air temperature.',
      'Place a bowl of ice or cold water directly in front of the fan to generate an evaporative cooling breeze.',
      'Point the fan out of a window in the evening to exhaust trapped daytime heat, pulling cool night air through opposite windows.',
      'Clean dust off the fan blades at the start of summer; dusty blades drag aerodynamically and reduce air movement by 20%.',
    ],
    tipsDe: [
      'Schalten Sie den Ventilator aus, wenn Sie den Raum verlassen: Ventilatoren kühlen nicht die Raumluft, sondern nur die Haut durch Verdunstungskälte.',
      'Stellen Sie eine Schale mit Eiswürfeln vor das Gebläse, um einen angenehmen Kühleffekt wie bei einer sanften Klimaanlage zu erzeugen.',
      'Nutzen Sie den Ventilator am kühlen Abend am Fenster, um warme Luft nach draußen zu blasen und frische Nachtluft hereinzusaugen.',
      'Befreien Sie die Rotorblätter von Staub: Saubere Flügel transportieren deutlich mehr Luft bei geringerer Motorenbelastung.',
    ],
    alternatives: [
      {
        slug: 'air-conditioner',
        nameEn: 'Portable Air Conditioner',
        nameDe: 'Klimaanlage (Mobil)',
        comparisonNoteEn: 'A fan draws 45W compared to 1100W for an air conditioner—meaning running an air conditioner costs roughly 25 times more.',
        comparisonNoteDe: 'Ein Ventilator benötigt nur 45 Watt gegenüber 1.100 Watt bei einer Klimaanlage – ca. 25-mal günstiger.',
      },
      {
        slug: 'dehumidifier',
        nameEn: 'Dehumidifier',
        nameDe: 'Luftentfeuchter',
        comparisonNoteEn: 'In humid heat, lowering humidity with a dehumidifier (300W) improves comfort, but a fan (45W) provides instant personal relief.',
        comparisonNoteDe: 'Ein Entfeuchter senkt drückende Schwüle, verbraucht aber 300 Watt im Vergleich zu 45 Watt für den Ventilator.',
      },
    ],
    faqsEn: [
      {
        q: 'How much does it cost to run a desk fan all night (8 hours) in the UK?',
        a: 'A 45W fan running for 8 hours consumes 0.36 kWh. At 24.5p/kWh, that costs approx. 8.8p per night (around £2.65 per month of summer heat).',
      },
      {
        q: 'Does leaving a fan on in an empty room cool it down?',
        a: 'No! Fans do not change air temperature; the electric motor actually releases a tiny amount of heat into the room. Fans only create a wind chill effect on human skin.',
      },
      {
        q: 'Is a ceiling fan more efficient than a pedestal fan?',
        a: 'Ceiling fans move much larger volumes of air at lower rotational speeds, covering entire rooms for around 30W to 65W with superior efficiency.',
      },
      {
        q: 'How does the speed setting affect electricity use?',
        a: 'Running a fan on speed 1 (low) draws approx. 25W–30W, while speed 3 (high) draws 45W–55W—roughly half the running cost on low.',
      },
      {
        q: 'How much cheaper is a fan compared to an air conditioner?',
        a: 'A 45W fan costs around 1.1p per hour to run in the UK, whereas a 1100W portable air conditioner costs approx. 27p per hour—making the fan 95% cheaper.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet ein Ventilator über Nacht (8 Stunden) in Deutschland?',
        a: 'Ein 45-Watt-Ventilator verbraucht in 8 Stunden ca. 0,36 kWh. Bei 41,35 ct/kWh kostet das rund 14,9 Cent pro Nacht (ca. 4,50 Euro im Monat).',
      },
      {
        q: 'Kühlt ein Ventilator den Raum ab, wenn niemand drin ist?',
        a: 'Nein! Ventilatoren kühlen nicht die Luft, sondern erzeugen lediglich einen kühlenden Luftzug auf der Haut. Im leeren Raum gibt der Motor sogar minimale Abwärme ab.',
      },
      {
        q: 'Wie viel Strom spart Stufe 1 gegenüber Stufe 3?',
        a: 'Auf Stufe 1 zieht ein Ventilator meist nur 20 bis 28 Watt, auf höchster Stufe ca. 45 bis 55 Watt. Die kleinste Stufe halbiert die Betriebskosten fast.',
      },
      {
        q: 'Wie viel günstiger ist ein Ventilator im Vergleich zur Klimaanlage?',
        a: 'Ein Ventilator (45 W) kostet ca. 1,9 Cent pro Stunde. Eine mobile Klimaanlage (1.100 W) kostet rund 45 Cent pro Stunde – der Ventilator ist ca. 95 % billiger.',
      },
      {
        q: 'Was ist sparsamer: Standventilator oder Deckenventilator?',
        a: 'Moderne Deckenventilatoren mit bürstenlosem Gleichstrommotor (DC) bewegen riesige Luftmengen mit nur 15 bis 30 Watt und sind extrem energieeffizient.',
      },
    ],
  },

  // 23. AIR CONDITIONER (Klimaanlage mobil)
  {
    slug: 'air-conditioner',
    deSlug: 'klimaanlage',
    enName: 'Portable Air Conditioner',
    deName: 'Klimaanlage (Mobil)',
    category: 'heating-cooling',
    wattageRange: {
      min: 800,
      max: 1500,
      defaultWatts: 1100,
      source: 'De\'Longhi Pinguino & AEG ChillFlex Pro 9,000–12,000 BTU portable air conditioner fiches',
    },
    typicalUsage: {
      hoursPerDay: 5.0,
      usesPerWeek: 7,
      descriptionEn: '5 hours daily during summer heatwaves (~5.5 kWh/day)',
      descriptionDe: '5 Stunden Betrieb an heißen Sommertagen (~5,5 kWh/Tag)',
    },
    standbyWatts: 1.5,
    tipsEn: [
      'Seal the window exhaust hose tightly using an insulated window seal fabric kit so hot outside air does not leak back into the room.',
      'Set the thermostat to 23°C–24°C rather than 18°C; every degree lower increases compressor power consumption by 8% to 10%.',
      'Close blinds and curtains during daytime hours to block solar radiation before turning on the air conditioner.',
      'Clean the washable dust filters every week during heatwaves; clogged filters restrict airflow and force the compressor to overwork.',
    ],
    tipsDe: [
      'Nutzen Sie eine passgenaue Fensterabdichtung mit Reißverschluss für den Abluftschlauch, damit keine heiße Außenluft nachströmt.',
      'Stellen Sie die Zieltemperatur auf 23 bis 24 °C statt 18 °C ein; jedes Grad kühler erhöht den Stromverbrauch des Kompressors um 8 bis 10 %.',
      'Dunkeln Sie die Fenster tagsüber mit Rollos oder Vorhängen ab, um direkte Sonneneinstrahlung und Aufheizung zu verhindern.',
      'Reinigen Sie die Luftfilter alle 14 Tage: Verschmutzte Filter behindern den Luftstrom und treiben den Verbrauch in die Höhe.',
    ],
    alternatives: [
      {
        slug: 'fan',
        nameEn: 'Desk / Standing Fan',
        nameDe: 'Ventilator',
        comparisonNoteEn: 'A fan consumes 45W versus 1100W for an air conditioner, costing 95% less to run on moderately warm days.',
        comparisonNoteDe: 'Ein Ventilator verbraucht nur 45 Watt gegenüber 1.100 Watt bei der Klimaanlage – ca. 95 % Ersparnis.',
      },
      {
        slug: 'dehumidifier',
        nameEn: 'Dehumidifier',
        nameDe: 'Luftentfeuchter',
        comparisonNoteEn: 'In humid weather, removing moisture with a 300W dehumidifier makes air feel significantly cooler without running a 1100W compressor.',
        comparisonNoteDe: 'Bei schwüler Hitze senkt ein 300W-Entfeuchter die gefühlte Schwüle deutlich sparsamer als die Klimaanlage.',
      },
    ],
    faqsEn: [
      {
        q: 'How much does it cost to run a portable air conditioner for an hour in the UK?',
        a: 'An 1100W portable air conditioner running at full compressor load consumes 1.1 kWh. At 24.5p/kWh, this costs approx. 27.0p per hour (approx. £1.35 for a 5-hour afternoon session).',
      },
      {
        q: 'Why are portable single-hose air conditioners less efficient than split systems?',
        a: 'Single-hose portable units blow indoor air over the condenser coil and out the window, creating negative pressure that pulls warm outside air into the house through door cracks and vents.',
      },
      {
        q: 'How much does running an AC for 30 days of summer cost in the UK?',
        a: 'Running an AC for 6 hours a day over a 30-day heatwave consumes approx. 198 kWh, costing around £48.50 for that month.',
      },
      {
        q: 'What size air conditioner (BTU) do I need for a bedroom?',
        a: 'A 9,000 BTU unit is ideal for bedrooms up to 20 m² (approx. 200 sq ft). Larger living rooms (30 m²) generally require 12,000 BTU.',
      },
      {
        q: 'Does using "Dehumidify Mode" save electricity on an AC unit?',
        a: 'Only slightly. The compressor still runs to cool the evaporator coil, though fan speeds are typically pinned to the lowest setting.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet eine mobile Klimaanlage pro Stunde in Deutschland?',
        a: 'Ein mobiles 1.100-Watt-Klimagerät verbraucht 1,1 kWh pro Stunde Volllast. Bei 41,35 ct/kWh kostet eine Stunde ca. 45,5 Cent. Bei 5 Stunden täglicher Nutzung sind das rund 2,28 Euro am Tag.',
      },
      {
        q: 'Warum sind mobile Monoblock-Klimageräte weniger effizient als Split-Geräte?',
        a: 'Weil der Abluftschlauch die heiße Luft nach draußen bläst und dadurch im Raum ein Unterdruck entsteht, der warme Luft durch Ritzen und Nachbarräume wieder hineinsaugt.',
      },
      {
        q: 'Wie viel Strom verbraucht eine Klimaanlage in einem typischen Hitzemonat?',
        a: 'Bei 5 Stunden täglichem Betrieb über 30 Sommertage summiert sich der Verbrauch auf ca. 165 kWh. Das entspricht Stromkosten von rund 68 Euro im Monat.',
      },
      {
        q: 'Welche BTU-Zahl brauche ich für ein Schlafzimmer?',
        a: 'Für ein normales Schlafzimmer bis 20 m² reicht ein Gerät mit 7.000 bis 9.000 BTU/h (ca. 2,0 bis 2,6 kW Kühlleistung). Für 30 m² sollten es 12.000 BTU/h sein.',
      },
      {
        q: 'Spart die Nachtfunktion (Sleep-Modus) Strom?',
        a: 'Ja. Im Sleep-Modus hebt das Gerät die Solltemperatur im Laufe der Nacht schrittweise um 1 bis 2 °C an und senkt die Lüfterstufe, was bis zu 20 % Strom spart.',
      },
    ],
  },

  // 24. LED BULB (LED-Lampe 5er-Gruppe)
  {
    slug: 'led-bulb',
    deSlug: 'led-lampe',
    enName: 'LED Light Bulbs (5-Bulb Household Set)',
    deName: 'LED-Lampe (5er-Gruppe)',
    category: 'personal-care-lighting',
    wattageRange: {
      min: 5,
      max: 60,
      defaultWatts: 45, // 5 bulbs x 9W = 45W total
      source: 'Philips Hue & Osram LED A60 E27 specs (9W LED = 806 lumens, replacing 5 x 60W incandescents)',
    },
    typicalUsage: {
      hoursPerDay: 5.0,
      usesPerWeek: 7,
      descriptionEn: '5 hours evening illumination for main living areas (5 bulbs x 9W = 45W total, ~0.23 kWh/day)',
      descriptionDe: '5 Stunden abendliche Beleuchtung im Wohnbereich (5 Lampen x 9W = 45W gesamt, ~0,23 kWh/Tag)',
    },
    standbyWatts: 0,
    tipsEn: [
      'Replace any remaining halogen spotlights or incandescent bulbs with LEDs immediately; LEDs use 85% less electricity.',
      'Install motion sensors or smart timers in hallways, bathrooms, and garages so lights never burn unattended.',
      'Choose the right lumen brightness: 400 lumens (4W–5W LED) is plenty for bedside lamps, while 800 lumens (8W–9W LED) suits ceiling fixtures.',
      'Keep lampshades and bulb glass free of dust; dust layers absorb up to 20% of emitted light output.',
    ],
    tipsDe: [
      'Ersetzen Sie alle alten Halogenstrahler und Glühlampen restlos durch LEDs: Das spart sofort rund 85 % Beleuchtungsstrom.',
      'Installieren Sie Bewegungsmelder in Fluren, Kellern und Garagen, damit Lampen nie stundenlang unbemerkt brennen.',
      'Achten Sie auf die Lumenzahl statt Watt: Für Leselampen reichen 400 Lumen (ca. 4W LED), für die Deckenbeleuchtung ca. 800 Lumen (ca. 8W LED).',
      'Nutzen Sie warmweißes Licht (2.700 Kelvin) für Wohnräume und neutralweißes Licht (4.000 Kelvin) für konzentriertes Arbeiten.',
    ],
    alternatives: [
      {
        slug: 'tv',
        nameEn: 'Television',
        nameDe: 'Fernseher',
        comparisonNoteEn: 'Five LED bulbs illuminating a home draw 45W combined—less than half the power drawn by a 55" television (110W).',
        comparisonNoteDe: 'Fünf LED-Lampen verbrauchen zusammen nur 45 Watt – weniger als die Hälfte eines 55-Zoll-Fernsehers (110W).',
      },
      {
        slug: 'laptop',
        nameEn: 'Laptop',
        nameDe: 'Laptop',
        comparisonNoteEn: 'Modern LED illumination is so efficient that lighting an entire living room consumes less electricity than working on a laptop.',
        comparisonNoteDe: 'Moderne LED-Beleuchtung ist so sparsam, dass 5 Lampen weniger Strom ziehen als ein Laptop beim Arbeiten.',
      },
    ],
    faqsEn: [
      {
        q: 'How much does it cost to run 5 LED light bulbs for 5 hours in the UK?',
        a: 'Five 9W LED bulbs consume 45W total. Over 5 hours, this uses 0.225 kWh. At 24.5p/kWh, that costs approx. 5.5p per evening, or £1.65 per month.',
      },
      {
        q: 'How much money does switching from incandescent to LED save per year?',
        a: 'Replacing five old 60W incandescent bulbs (300W total) with five 9W LEDs (45W total) saves roughly 465 kWh per year, saving around £114 annually in the UK.',
      },
      {
        q: 'Do smart LED bulbs use electricity when switched off via app?',
        a: 'Yes. Smart bulbs (like Philips Hue) maintain Wi-Fi or Zigbee connections, drawing around 0.3W to 0.5W on standby (approx. 65p to £1.10 per bulb annually).',
      },
      {
        q: 'How long do LED bulbs last compared to halogen?',
        a: 'A quality LED bulb lasts 15,000 to 25,000 hours (10 to 15 years of typical domestic use), compared to only 1,000 hours for traditional incandescent bulbs and 2,000 hours for halogens.',
      },
      {
        q: 'Do LED bulbs produce heat?',
        a: 'LEDs produce very little radiant heat compared to incandescent bulbs (which waste 90% of energy as heat). The base has a small heat sink, keeping the bulb cool and safe.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kosten 5 LED-Lampen für 5 Stunden am Abend in Deutschland?',
        a: 'Fünf 9-Watt-LEDs verbrauchen zusammen 45 Watt. In 5 Stunden entspricht das 0,225 kWh. Bei 41,35 ct/kWh kostet das rund 9,3 Cent am Abend (ca. 2,80 Euro im Monat oder 34 Euro im Jahr).',
      },
      {
        q: 'Wie viel spart der Tausch von alten Glühbirnen zu LEDs?',
        a: 'Wer fünf alte 60-Watt-Glühlampen (300 W) gegen 9-Watt-LEDs (45 W) tauscht, spart bei 4 Stunden Brenndauer täglich rund 372 kWh pro Jahr. Das spart in Deutschland rund 154 Euro jährlich!',
      },
      {
        q: 'Verbrauchen smarte LED-Lampen Strom, wenn sie per App ausgeschaltet sind?',
        a: 'Ja. Smarte Lampen (z. B. Philips Hue) halten Funkkontakt (Zigbee/WLAN) und verbrauchen im Standby ca. 0,3 bis 0,5 Watt (ca. 1,10 bis 1,80 Euro pro Lampe im Jahr).',
      },
      {
        q: 'Wie lange hält eine LED-Lampe im Vergleich zur Glühlampe?',
        a: 'Eine Marken-LED hält ca. 15.000 bis 25.000 Stunden (bei 3 Stunden täglich ca. 15–20 Jahre). Eine klassische Glühbirne brannte meist nach 1.000 Stunden durch.',
      },
      {
        q: 'Lohnt es sich, funktionierende Halogenlampen vorzeitig wegzuwerfen?',
        a: 'Ja, energetisch absolut. Eine LED spart so viel Strom, dass sich der Kaufpreis von 2 bis 3 Euro für die neue LED-Lampe meist schon nach wenigen Monaten amortisiert hat.',
      },
    ],
  },

  // 25. EV HOME CHARGING (E-Auto Wallbox)
  {
    slug: 'ev-home-charging',
    deSlug: 'e-auto-wallbox',
    enName: 'EV Home Charging Wallbox',
    deName: 'E-Auto Wallbox',
    category: 'transport',
    wattageRange: {
      min: 3600,
      max: 11000,
      defaultWatts: 7400,
      source: 'Pod Point Solo 3, Ohme Home Pro & Webasto 7.4 kW single-phase to 11 kW 3-phase domestic Wallbox specs',
    },
    typicalUsage: {
      hoursPerDay: 3.5,
      usesPerWeek: 3,
      descriptionEn: '3.5 hours charging overnight, 3 times per week (~25.9 kWh/session = ~11.1 kWh/day average)',
      descriptionDe: '3,5 Stunden Ladezeit über Nacht, 3 Mal pro Woche (~25,9 kWh pro Ladung = ~11,1 kWh/Tag Schnitt)',
    },
    standbyWatts: 3.0,
    tipsEn: [
      'Switch to an EV-specific smart electricity tariff (e.g. Octopus Intelligent Go, OVO Charge Anytime); overnight charging rates are often 7p–9p/kWh compared to 24.5p standard cap.',
      'Schedule charging via your Wallbox app strictly between midnight and 5:00 AM to automatically capture cheap off-peak electricity.',
      'Limit everyday charging to 80% state of charge (SoC); charging between 20% and 80% is faster, preserves battery longevity, and avoids top-end charging resistance losses.',
      'Precondition your vehicle cabin while still plugged into the Wallbox so grid power heats or cools the car rather than your battery.',
    ],
    tipsDe: [
      'Nutzen Sie dynamische Stromtarife (z. B. Tibber) oder spezielle E-Auto-Tarife, um zu Zeiten mit hohem Wind- und Solarstromangebot extrem günstig zu laden.',
      'Programmieren Sie die Ladezeiten per App auf die Nachtstunden (z. B. 01:00 bis 05:00 Uhr), wenn der Netzstrom am günstigsten ist.',
      'Begrenzen Sie den Ladehub im Alltag auf 80 % (State of Charge); das schont den Akku und vermeidet hohe Ladeverluste bei fast vollem Speicher.',
      'Klimatisieren Sie das Auto im Winter noch während des Ladens an der Wallbox vor, damit die Heizenergie direkt aus dem Stromnetz statt aus dem Akku kommt.',
    ],
    alternatives: [
      {
        slug: 'immersion-heater',
        nameEn: 'Immersion Heater',
        nameDe: 'Warmwasserspeicher',
        comparisonNoteEn: 'Both are large domestic electrical loads ideal for overnight smart tariffs; an EV battery holds 50–80 kWh compared to ~10 kWh thermal energy in a hot water tank.',
        comparisonNoteDe: 'Beide sind flexible Großverbraucher für günstige Nachtstromtarife; der E-Auto-Akku speichert jedoch 50–80 kWh.',
      },
      {
        slug: 'electric-heater',
        nameEn: 'Electric Heater',
        nameDe: 'Heizlüfter',
        comparisonNoteEn: 'Charging an EV at 7.4 kW draws as much power as nearly four 2000W electric heaters running simultaneously.',
        comparisonNoteDe: 'Ein 7,4-kW-Ladevorgang entspricht der elektrischen Last von fast vier voll aufgedrehten 2.000-Watt-Heizlüftern.',
      },
    ],
    faqsEn: [
      {
        q: 'How much does it cost to charge an electric car at home in the UK?',
        a: 'At the standard 24.5p/kWh price cap, adding 30 kWh (approx. 100 miles of driving) costs £7.35. On an EV overnight off-peak tariff at 7.5p/kWh, that same 100 miles costs just £2.25.',
      },
      {
        q: 'What is the difference between a 3-pin plug charger and a 7kW Wallbox?',
        a: 'A standard 3-pin "granny" charger draws 2.3 kW (10 amps) and takes 24+ hours for a full charge. A dedicated 7.4 kW Wallbox (32 amps) charges more than three times faster with significantly lower conversion losses.',
      },
      {
        q: 'How much electricity is lost during home EV charging?',
        a: 'AC charging efficiency typically ranges between 85% and 92%. Roughly 8% to 15% of grid electricity is lost as heat in the onboard AC-to-DC converter and cooling systems.',
      },
      {
        q: 'Can solar panels fully charge an EV at home?',
        a: 'Yes. A solar-integrated EV charger (such as a Zappi) monitors rooftop generation and adjusts charge rate dynamically between 1.4 kW and 7.4 kW using 100% self-generated green energy.',
      },
      {
        q: 'How much money does driving an EV save compared to petrol?',
        a: 'Driving 10,000 miles in a petrol car (40 mpg at £1.45/L) costs roughly £1,650 in fuel. Charging an EV at home on a standard tariff costs approx. £680 (£210 on off-peak EV tariffs), saving over £900 to £1,400 annually.',
      },
    ],
    faqsDe: [
      {
        q: 'Was kostet eine Akkuladung für das E-Auto an der heimischen Wallbox in Deutschland?',
        a: 'Bei 41,35 ct/kWh kostet das Laden von 30 kWh (ca. 180 km Reichweite) rund 12,40 Euro. Mit eigenem PV-Strom vom Dach sinken die Kosten auf ca. 2,50 bis 3,50 Euro (Opportunitätskosten).',
      },
      {
        q: 'Warum ist eine Wallbox besser als die Schuko-Steckdose?',
        a: 'Eine Wallbox lädt mit 11 kW dreimal schneller als die Steckdose (2,3 kW). Zudem vermeidet sie Überhitzungsrisiken an alten Hausleitungen und reduziert Ladeverluste von 15 % auf unter 8 %.',
      },
      {
        q: 'Wie hoch sind die Ladeverluste beim Laden an der Wallbox?',
        a: 'Beim Wechselstrom-Laden (AC) an einer 11-kW-Wallbox liegen die Umwandlungsverluste (AC zu DC im internen Bordlader) typischerweise bei 6 bis 9 %.',
      },
      {
        q: 'Kann man das E-Auto komplett mit der eigenen Photovoltaikanlage laden?',
        a: 'Ja. Mit "PV-Überschussladen" steuert die intelligente Wallbox den Ladestrom dynamisch so, dass nur Strom ins Auto fließt, der gerade auf dem Dach erzeugt und im Haus nicht gebraucht wird.',
      },
      {
        q: 'Wie viel spart das E-Auto im Vergleich zu Benzin oder Diesel?',
        a: 'Bei 15.000 km Jahresfahrleistung kostet Benzin (7 l/100 km bei 1,75 €/l) rund 1.840 Euro. Ein E-Auto (18 kWh/100 km) an der Wallbox kostet ca. 1.115 Euro – mit Solarstrom oder Spezialtarif oft unter 450 Euro (Ersparnis: bis zu 1.400 Euro/Jahr).',
      },
    ],
  },
];

export function getApplianceBySlug(slug: string): ApplianceSpec | undefined {
  const norm = (slug || '').toLowerCase().trim();
  return APPLIANCES.find((a) => a.slug === norm);
}

export function getApplianceByDeSlug(deSlug: string): ApplianceSpec | undefined {
  const norm = (deSlug || '').toLowerCase().trim();
  return APPLIANCES.find((a) => a.deSlug === norm);
}
