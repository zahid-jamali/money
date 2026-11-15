import { PageContent } from '../types';

export const spritkostenrechnerDe: PageContent = {
  metaTitle: 'Spritkostenrechner 2026 | Benzin & Diesel Fahrtkosten',
  metaDescription:
    'Spritkosten für jede Autofahrt exakt berechnen. Mit offiziellen ADAC-Preisen für Super E10 und Diesel, L/100km-Verbrauch und Mitfahrer-Kostenaufteilung.',
  h1: 'Spritkostenrechner 2026 (Benzin, Diesel & Mitfahrer)',
  quickAnswer:
    "Um die Spritkosten einer Fahrt zu berechnen, multiplizieren Sie die Fahrstrecke in Kilometern mit dem Durchschnittsverbrauch in L/100km, teilen durch 100 und multiplizieren mit dem Spritpreis pro Liter. Eine Fahrt über 300 km bei 6,5 L/100km und 1,72 €/L Benzin kostet beispielsweise 33,54 Euro.",
  howItWorks: [
    {
      label: '1. Streckenermittlung in Kilometern',
      formula: 'Gesamtdistanz = Einfache Strecke × (2 bei Hin- und Rückfahrt sonst 1)',
      ruleCitation: 'Einheiten- und Zeitgesetz (EinhZeitG) / Metrisches Straßensystem',
      effectiveDate: 'Gesetzliche Maßeinheit für Straßenstrecken in Deutschland',
    },
    {
      label: '2. Kraftstoffverbrauch in Litern',
      formula: 'Verbrauchte Liter = (Fahrstrecke in km × L/100km) ÷ 100',
      ruleCitation: 'Pkw-Energieverbrauchskennzeichnungsverordnung (Pkw-EnVKV / WLTP)',
      effectiveDate: 'Amtlicher WLTP-Verbrauchszyklus für Kraftfahrzeuge',
    },
    {
      label: '3. Berechnung der Spritkosten',
      formula: 'Spritkosten = Verbrauchte Liter × Kraftstoffpreis (€ pro Liter)',
      ruleCitation: 'ADAC Kraftstoffpreisentwicklung & Bundeskartellamt Markttransparenzstelle',
      effectiveDate: 'ADAC Durchschnittsbenchmark für Super E10 und Diesel 2026',
    },
    {
      label: '4. Kostenaufteilung pro Mitfahrer',
      formula: 'Kosten pro Person = (Spritkosten + Maut + Parkgebühren) ÷ Personen',
      ruleCitation: 'Fahrgemeinschafts-Grundsätze nach Personenbeförderungsgesetz (PBefG)',
      effectiveDate: 'Steuerfreie private Aufwandsentschädigung ohne Gewinnerzielung',
    },
  ],
  articleSections: [
    {
      id: 'kraftstoffpreise-und-steuern-deutschland',
      title: 'Wie sich der Spritpreis in Deutschland zusammensetzt: Steuern und Abgaben',
      level: 2,
      content:
        'Wer in Deutschland an die Zapfsäule fährt, zahlt für jeden Liter Super E10 oder Dieselkraftstoff zu einem überwiegenden Teil staatliche Steuern und Abgaben. Der eigentliche Warenwert des Rohöls und die Raffineriekosten machen häufig weniger als die Hälfte des finalen Zapfsäulenpreises aus.\n\nDie gesetzliche Preisstruktur setzt sich aus mehreren Komponenten zusammen:\n\n1. **Energiesteuer (frühere Mineralölsteuer)**: Geregelt im Energiesteuergesetz (EnergieStG). Der Gesetzgeber erhebt eine feste Steuer von 65,45 Cent pro Liter Benzin und 47,04 Cent pro Liter Diesel.\n2. **Nationaler CO2-Preis**: Gemäß Brennstoffemissionshandelsgesetz (BEHG) steigt der nationale CO2-Zertifikatspreis kontinuierlich an. Dies verteuert fossile Kraftstoffe um rund 12 bis 15 Cent je Liter inklusive Mehrwertsteuer.\n3. **Umsatzsteuer (Mehrwertsteuer)**: Nach dem Umsatzsteuergesetz (UStG) fallen 19% Mehrwertsteuer an. Entscheidend ist, dass die 19% MwSt. auf den gesamten Bruttobetrag erhoben wird – also auch auf die bereits enthaltene Energiesteuer und den CO2-Preis (Steuer auf die Steuer).\n4. **Erdölbevorratungsbeitrag (EBV)**: Ein kleiner gesetzlicher Pflichtbeitrag zur Finanzierung der staatlichen strategischen Rohölreserve.\n\nAufgrund dieser festen Abgabenblöcke schwankt der Endkundenpreis im Tagesverlauf erheblich. Laut Markttransparenzstelle für Kraftstoffe (MTS-K) des Bundeskartellamtes ist das Tanken zwischen 18:00 und 22:00 Uhr im Bundesdurchschnitt um bis zu 10 bis 15 Cent pro Liter günstiger als in den frühen Morgenstunden zwischen 6:00 und 9:00 Uhr. Autobahntankstellen verlangen zudem wegen 24-Stunden-Betrieb und Konzessionsabgaben oft 30 bis 45 Cent mehr pro Liter als benachbarte Autohöfe oder innerstädtische Tankstellen.',
    },
    {
      id: 'realen-verbrauch-ermitteln-l100km',
      title: 'Den realen Kraftstoffverbrauch (L/100km) exakt ermitteln',
      level: 2,
      content:
        'In den Zulassungsbescheinigungen und Werksangaben neuer Pkw ist der Kraftstoffverbrauch nach dem weltweit harmonisierten Prüfverfahren WLTP (Worldwide Harmonized Light Vehicles Test Procedure) ausgewiesen. Während der WLTP-Test deutlich realistischere Werte liefert als der veraltete NEFZ-Zyklus, weicht der reale Straßenverbrauch dennoch häufig um 10% bis 25% nach oben ab.\n\nUm den exakten Verbrauch Ihres Fahrzeugs für die Fahrtkostenberechnung zu ermitteln, empfiehlt sich die klassische Voll-zu-Voll-Methode:\n1. Tanken Sie das Fahrzeug voll, bis die Zapfpistole automatisch abschaltet, und stellen Sie den Tageskilometerzähler auf null.\n2. Fahren Sie Ihre regulären Strecken (beispielsweise 400 bis 600 Kilometer).\n3. Tanken Sie an derselben Tankstelle erneut voll und notieren Sie die getankten Liter sowie die exakt gefahrenen Kilometer.\n4. Berechnen Sie: `Verbrauch = (Getankte Liter × 100) ÷ Gefahrene Kilometer`.\n\nEin Kompaktwagen, der für eine Fahrstrecke von 550 Kilometern 36,3 Liter Benzin benötigt, hat somit einen realen Verbrauch von (36,3 × 100) ÷ 550 = 6,6 L/100km. Bordcomputer schätzen den Verbrauch meist zu optimistisch ein; die manuelle Nachtankmethode über zwei bis drei Tankzyklen liefert verlässliche Erfahrungswerte für jede Reisekalkulation.',
    },
    {
      id: 'autobahn-richtgeschwindigkeit-und-verbrauch',
      title: 'Autobahn, Richtgeschwindigkeit 130 km/h und der Luftwiderstand',
      level: 2,
      content:
        'Auf deutschen Bundesautobahnen ohne generelles Tempolimit gilt gemäß Autobahn-Richtgeschwindigkeits-Verordnung eine empfohlene Richtgeschwindigkeit von 130 km/h. Das individuelle Reisetempo hat einen gewaltigen Einfluss auf die Tankrechnung.\n\nPhysikalisch wächst der aerodynamische Luftwiderstand quadratisch mit der Fahrgeschwindigkeit, während die erforderliche Motorantriebsleistung sogar mit der dritten Potenz der Geschwindigkeit ansteigt:\n\n- **Konstante 100 km/h**: Das Fahrzeug gleitet mit minimalem Luft- und Rollwiderstand im höchsten Gang. Viele moderne Mittelklassewagen verbrauchen hierbei lediglich 4,8 bis 5,5 Liter auf 100 km.\n- **Richtgeschwindigkeit 130 km/h**: Der Luftwiderstand verdoppelt sich nahezu gegenüber 90 km/h. Der Verbrauch steigt im Schnitt auf 6,5 bis 7,5 L/100km.\n- **160 km/h und schneller**: Der Motor muss gegen gewaltige Luftmassen ankämpfen. Ein Pkw, der bei 120 km/h 6,5 Liter benötigt, schluckt bei konstant 160 km/h häufig 10 bis 12 Liter pro 100 km – ein Expresszuschlag von über 60% an Spritkosten für einen oftmals minimalen Fahrzeitgewinn von wenigen Minuten auf verkehrsreichen Strecken.\n- **Zusatzlasten und Dachträger**: Dachboxen, Fahrradträger oder Skihalterungen wirken wie aerodynamische Bremsfallschirme im Fahrtwind. Eine montierte Dachbox erhöht den Autobahnverbrauch bei Tempo 130 um bis zu 1,5 bis 2,0 Liter pro 100 Kilometer. Nicht mehr benötigte Aufbauten sollten daher unmittelbar nach dem Urlaub abmontiert werden.\n\nDurch gleichmäßiges Gleiten mit Tempomat, vorausschauendes Fahren und das Vermeiden harter Brems- und Beschleunigungsmanöver lassen sich auf langen Urlaubs- und Geschäftsreisen mühelos 20 bis 30 Euro Spritkosten pro Tankfüllung einsparen.',
    },
    {
      id: 'faire-kostenteilung-fahrgemeinschaften',
      title: 'Faire Kostenteilung bei Fahrgemeinschaften und Ausflügen',
      level: 2,
      content:
        'Ob tägliches Pendeln zur Arbeitsstätte, Fahrten zum Auswärtsspiel des Sportvereins oder ein verlängertes Wochenende in den Alpen: Fahrgemeinschaften entlasten den Geldbeutel und schonen die Umwelt.\n\nFür eine faire Kostenaufteilung unter Freunden oder Arbeitskollegen sollten sämtliche streckenbezogenen variablen Ausgaben transparent zusammengeführt werden:\n1. Ermitteln Sie die reinen Kraftstoffkosten über die Gesamtdistanz und den tatsächlichen Tankpreis an der Zapfsäule.\n2. Berücksichtigen Sie Auslandsmautgebühren (etwa die österreichische Autobahn-Vignette, Brennermaut, Schweizer Autobahnvignette oder französische Péage-Kosten).\n3. Rechnen Sie Parkhausgebühren, Fähren und City-Mautgebühren am Zielort hinzu.\n4. Teilen Sie die Gesamtsumme durch die Anzahl der mitfahrenden Personen.\n\nRechtlicher Hinweis nach Personenbeförderungsgesetz (PBefG): Private Fahrgemeinschaften, bei denen Mitfahrer sich an den reinen Betriebs- und Treibstoffkosten beteiligen, sind vollkommen zulässig und genehmigungsfrei. Wichtig ist lediglich, dass der Fahrer keinen geschäftsmäßigen Gewinn erzielt, da andernfalls eine behördliche Genehmigung als Mietwagen oder Taxi erforderlich wäre. Die private Unfall- und Haftpflichtversicherung bleibt bei reinem Kostenersatz vollständig intakt.',
    },
    {
      id: 'kraftstoff-spartipps-und-reifendruck',
      title: 'Effizientes Fahren: Reifendruck, Klimaanlage und Sparpotenziale im Alltag',
      level: 2,
      content:
        'Neben der Fahrgeschwindigkeit beeinflussen Fahrzeugzustand und Nebenverbraucher den Kraftstoffverbrauch spürbar. Bereits ein um 0,5 bar zu niedriger Reifendruck erhöht den Rollwiderstand des Fahrzeugs und führt zu einem Mehrverbrauch von bis zu 3% bis 5%. Regelmäßiges Prüfen des kalten Reifendrucks an der Tankstelle – idealerweise orientiert an den Herstellerempfehlungen für volle Beladung – senkt den Verbrauch und schützt vor ungleichmäßigem Profilverschleiß.\n\nAuch Nebenaggregate fordern ihren Tribut an der Zapfsäule:\n- **Klimaanlage**: Im sommerlichen Stadtverkehr kann eine voll aufgedrehte Klimaanlage den Verbrauch um bis zu 1,0 bis 1,5 Liter je 100 Kilometer in die Höhe treiben. Auf Landstraßen und Autobahnen sinkt dieser Mehrbedarf auf ca. 0,3 bis 0,5 L/100km.\n- **Sitz- und Heckscheibenheizung**: Elektrische Verbraucher belasten die Lichtmaschine und damit den Verbrennungsmotor. 100 Watt elektrische Leistung entsprechen ca. 0,1 Liter Kraftstoff pro 100 km.\n- **Unnötiger Ballast im Kofferraum**: Je 100 Kilogramm Zusatzgewicht steigen die Spritkosten im Stadtverkehr um rund 0,3 Liter je 100 Kilometer. Das Ausräumen ungenutzter Gegenstände spart bares Geld.',
    },
    {
      id: 'pendlerpauschale-und-steuerliche-entfernungspauschale',
      title: 'Pendlerpauschale und Reisekostenabrechnung nach Einkommensteuergesetz (EStG)',
      level: 2,
      content:
        'Wer mit dem privaten Pkw zur Arbeit fährt oder Dienstreisen unternimmt, kann diese Aufwendungen im Rahmen der Einkommensteuererklärung steuermindernd geltend machen:\n\n- **Entfernungspauschale (§ 9 Abs. 1 Satz 3 Nr. 4 EStG)**: Für Fahrten zwischen Wohnung und erster Tätigkeitsstätte gewährt das Finanzamt die Pendlerpauschale. Diese beträgt 30 Cent für die ersten 20 Kilometer der einfachen Entfernung (nicht Hin- und Rückweg) und erhöht sich ab dem 21. Kilometer auf 38 Cent pro Entfernungskilometer. Die Pauschale gilt verkehrsmittelunabhängig und kann auch von Mitfahrern in einer Fahrgemeinschaft angesetzt werden.\n- **Dienstreisen und Auswärtstätigkeiten (§ 9 Abs. 1 Satz 3 Nr. 4a EStG)**: Bei beruflich veranlassten Auswärtstätigkeiten (Kundenbesuche, Seminare, Montage) mit dem Privat-Pkw können pauschal 30 Cent pro tatsächlich gefahrenem Kilometer (Hin- und Rückfahrt) als Werbungskosten oder steuerfreie Arbeitgebererstattung angesetzt werden.\n\nEin präziser Spritkostenrechner hilft Ihnen festzustellen, ob Ihre tatsächlichen Treibstoffausgaben durch die steuerlichen Pauschalen gedeckt sind oder ob sich bei hohem Fahrzeugverschleiß der Nachweis der tatsächlichen Kilometerkosten via Fahrtenbuch lohnt.',
    },
  ],
  examples: [
    {
      title: 'Wochenendausflug München – Berlin (Super E10)',
      scenario:
        'Vier Freunde fahren gemeinsam im Mittelklasse-Benziner von München nach Berlin und zurück über die A9 (insgesamt 1.170 km) bei einem Durchschnittsverbrauch von 6,8 L/100km.',
      calculationType: 'custom',
      inputAmount: 1170,
      rate: 6.8,
      resultTotal: 136.84,
      customFields: [
        { label: 'Einfache Fahrtstrecke', value: '585 km' },
        { label: 'Gesamtstrecke Hin & Rückweg', value: '1.170 km', highlight: true },
        { label: 'Durchschnittsverbrauch', value: '6,8 L/100km' },
        { label: 'ADAC Benzinpreis (Super E10)', value: '1,720 € / Liter' },
        { label: 'Verbrauchter Kraftstoff', value: '79,56 Liter' },
        { label: 'Gesamte Spritkosten', value: '136,84 €', highlight: true },
        { label: 'Kostenanteil pro Mitfahrer (4 Personen)', value: '34,21 € p.P.', highlight: true },
        { label: 'Kilometerkosten (reiner Sprit)', value: '11,7 Cent / km' },
      ],
      explanation:
        '1.170 km bei 6,8 L/100km entsprechen (1.170 × 6,8) ÷ 100 = 79,56 Litern Benzin. Bei einem Literpreis von 1,72 € betragen die gesamten Treibstoffkosten 136,84 €. Bei vier Insassen zahlt jeder Mitfahrer exakt 34,21 Euro.',
    },
    {
      title: 'Stuttgart – Gardasee Urlaubsfahrt mit Vignette & Maut (Diesel)',
      scenario:
        'Zwei Personen fahren von Stuttgart an den Gardasee und zurück (1.020 km) im Diesel-Kombi bei 5,6 L/100km, zuzüglich 38 € für Österreich-Vignette, Brennermaut und italienische Maut.',
      calculationType: 'custom',
      inputAmount: 1020,
      rate: 5,
      resultTotal: 130.54,
      customFields: [
        { label: 'Fahrstrecke', value: '1.020 km Hin & Rückfahrt' },
        { label: 'Diesel-Verbrauch', value: '5,6 L/100km' },
        { label: 'ADAC Dieselpreis', value: '1,620 € / Liter' },
        { label: 'Diesel verbraucht', value: '57,12 Liter' },
        { label: 'Reine Kraftstoffkosten', value: '92,54 €' },
        { label: 'Mautgebühren & Vignette', value: '38,00 €' },
        { label: 'Gesamte Reisekosten (Fahrt)', value: '130,54 €', highlight: true },
        { label: 'Kosten pro Person (2 Personen)', value: '65,27 € p.P.', highlight: true },
      ],
      explanation:
        '1.020 km bei 5,6 L/100km ergeben 57,12 Liter Diesel. Bei 1,62 € pro Liter kostet der Treibstoff 92,54 €. Zusammen mit 38,00 € Mautgebühren belaufen sich die Gesamtkosten auf 130,54 €, also 65,27 Euro pro Person.',
    },
  ],
  faqs: [
    {
      q: 'Wie berechne ich die Spritkosten für eine Autofahrt genau?',
      a: 'Multiplizieren Sie die gefahrene Strecke in Kilometern mit dem Verbrauch Ihres Autos in L/100km, teilen das Ergebnis durch 100 und multiplizieren die verbrauchten Liter mit dem Literpreis an der Tankstelle. Beispiel: 400 km × 6 L/100km ÷ 100 = 24 Liter × 1,72 € = 41,28 Euro.',
    },
    {
      q: 'Woher stammen die offiziellen Durchschnittspreise für Benzin und Diesel?',
      a: 'Unsere Standard-Richtwerte basieren auf den wöchentlichen statistischen Erhebungen des ADAC (Allgemeiner Deutscher Automobil-Club) und der Markttransparenzstelle für Kraftstoffe (MTS-K) des Bundeskartellamtes für Super E10 und Diesel.',
    },
    {
      q: 'Zu welcher Uhrzeit ist das Tanken in Deutschland am günstigsten?',
      a: 'Statistisch tanken Autofahrer in Deutschland zwischen 18:00 und 22:00 Uhr am preiswertesten. Morgens zwischen 6:00 und 9:00 Uhr verlangen Tankstellen im Schnitt 10 bis 15 Cent mehr pro Liter.',
    },
    {
      q: 'Wie wirkt sich das Fahrtempo auf den Spritverbrauch auf der Autobahn aus?',
      a: 'Da der Luftwiderstand quadratisch zur Geschwindigkeit wächst, benötigt ein Pkw bei 160 km/h oft 35% bis 60% mehr Kraftstoff als bei gleichmäßigen 120 km/h. Richtgeschwindigkeit 130 km/h spart erheblich Geld.',
    },
    {
      q: 'Darf ich von Mitfahrern legal Spritgeld verlangen?',
      a: 'Ja, die anteilige Beteiligung an den tatsächlichen Betriebskosten (Sprit, Öl, Maut) im Rahmen privater Fahrgemeinschaften ist nach Personenbeförderungsgesetz (PBefG) vollkommen legal und steuerfrei, solange kein gewerblicher Gewinn erzielt wird.',
    },
    {
      q: 'Wie rechne ich Mautgebühren und Parkkosten in die Fahrtkosten ein?',
      a: 'Addieren Sie Ausgaben für Autobahnvignetten, Mautstrecken (z.B. in Österreich, Italien oder Frankreich) und Parkscheine direkt zu den reinen Spritkosten hinzu und teilen Sie den Gesamtbetrag durch die Mitfahreranzahl.',
    },
    {
      q: 'Wie viel Cent pro Kilometer kostet ein Auto rein an Kraftstoff?',
      a: 'Bei einem Benzin-Pkw mit 6,5 L/100km und 1,72 €/L betragen die reinen Treibstoffkosten circa 11,2 Cent pro Kilometer. Ein sparsamer Diesel mit 5,0 L/100km und 1,62 €/L liegt bei etwa 8,1 Cent pro Kilometer.',
    },
    {
      q: 'Was ist der Unterschied zwischen Pendlerpauschale und Reisekosten?',
      a: 'Die Pendlerpauschale (30 Cent bis km 20, 38 Cent ab km 21) gilt für den einfachen Weg zwischen Wohnung und Arbeitsstätte. Bei beruflich veranlassten Auswärtstätigkeiten können hingegen 30 Cent pro tatsächlich gefahrenem Kilometer (Hin- und Rückweg) steuerfrei abgesetzt werden.',
    },
    {
      q: 'Wie rechne ich britisches MPG in Liter pro 100 km um?',
      a: 'Verwenden Sie die Formel: `Liter pro 100 km = 282,481 ÷ UK MPG`. Ein britisches Fahrzeug mit 45 MPG verbraucht demnach 282,481 ÷ 45 = 6,28 L/100km.',
    },
  ],
  sources: [
    {
      label: 'ADAC Kraftstoffpreisentwicklung in Deutschland (Super E10 & Diesel)',
      url: 'https://www.adac.de/verkehr/tanken-kraftstoff-antrieb/deutschland/kraftstoffpreisentwicklung/',
    },
    {
      label: 'Bundeskartellamt Markttransparenzstelle für Kraftstoffe (MTS-K)',
      url: 'https://www.bundeskartellamt.de/DE/Wirtschaftsbereiche/Mineraloelsektor/MTS-K/mts-k_node.html',
    },
    {
      label: 'Statistisches Bundesamt (Destatis) Verbraucherpreise für Mineralölprodukte',
      url: 'https://www.destatis.de/DE/Themen/Wirtschaft/Preise/Verbraucherpreisindex/_inhalt.html',
    },
  ],
  relatedTools: [
    {
      title: 'MPG in Liter pro 100 km Umrechner',
      slug: 'mpg-to-litres-per-100km',
      description: 'Rechnen Sie UK MPG, US MPG und Liter pro 100 Kilometer interaktiv um.',
      category: 'travel',
    },
    {
      title: 'Elektroauto vs Benziner Kostenrechner',
      slug: 'fuel-cost-calculator/ev-vs-petrol',
      description: 'Vergleichen Sie Stromladekosten für E-Autos mit Spritkosten für Verbrenner.',
      category: 'travel',
    },
    {
      title: 'Deutscher Mehrwertsteuerrechner',
      slug: 'de/mwst-rechner',
      description: 'Berechnen Sie 19% und 7% deutsche Umsatzsteuer schnell und rechtssicher.',
      category: 'tax-vat',
    },
  ],
  relatedGuides: [
    {
      title: 'Ratgeber: Stromverbrauch und Energiekosten im Haushalt senken',
      slug: 'de/ratgeber/stromverbrauch-senken',
      description: 'Bewährte Maßnahmen zur Senkung Ihrer laufenden Haushalts- und Energiekosten.',
      category: 'home-energy',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Die berechneten Spritkosten stellen Richtwerte auf Basis offizieller ADAC-Durchschnittspreise dar. Der tatsächliche Verbrauch hängt von Fahrweise, Reifendruck, Beladung, Witterung und lokalen Zapfsäulenpreisen ab.',
};

export default spritkostenrechnerDe;
