import { PageContent } from '../types';

export const stromkostenRechnerDe: PageContent = {
  metaTitle: 'Stromkostenrechner 2026 | Stromverbrauch & Kosten für Haushaltsgeräte berechnen',
  metaDescription:
    'Stromkosten für Haushaltsgeräte in Deutschland exakt berechnen. BDEW Durchschnittspreis (41,35 ct/kWh), Watt-Verbrauch, Standby-Kosten und Spartipps im Vergleich.',
  h1: 'Stromkostenrechner 2026 (Verbrauch & Kosten für Haushaltsgeräte)',
  quickAnswer:
    'Bei einem durchschnittlichen deutschen Haushaltsstrompreis von 41,35 ct/kWh (BDEW) kostet eine Stunde Heizlüfter (2.000 Watt) exakt 82,7 Cent, 30 Minuten Heißluftfritteuse ca. 35,1 Cent, ein Waschgang bei 40 °C rund 35 Cent und ein 10-minütiger Duschgang mit elektrischem Durchlauferhitzer rund 58 Cent.',
  howItWorks: [
    {
      label: '1. Umrechnung von Watt in Kilowattstunden (kWh)',
      formula: 'Energie (kWh) = (Geräteleistung in Watt × Betriebsdauer in Stunden) ÷ 1.000',
      ruleCitation: 'Physikalische Grundeinheiten nach SI-Standard',
      effectiveDate: 'Standardisierte Energiemetrik',
    },
    {
      label: '2. Berechnung der Stromkosten mit BDEW-Referenzpreis',
      formula: 'Stromkosten (€) = (Energieverbrauch in kWh × Strompreis in ct/kWh) ÷ 100',
      ruleCitation: 'BDEW Bundesverband der Energie- und Wasserwirtschaft',
      effectiveDate: 'Gültig für bundesweiten Haushaltsdurchschnitt 2025/2026',
    },
    {
      label: '3. Hochrechnung auf Monat und Jahr',
      formula: 'Jahreskosten (€) = Täglicher Verbrauch in kWh × Nutzungstage/Woche × 52 × (Arbeitspreis ÷ 100)',
      ruleCitation: 'Standard-Lastprofil H0 für Haushaltskunden',
      effectiveDate: '52-Wochen-Verbrauchsmodell',
    },
    {
      label: '4. Standby-Verluste (Scheinleistung & Bereitschaft)',
      formula: 'Standby-Kosten (€/Jahr) = (Standby-Watt × Ruhe-Stunden/Jahr × Arbeitspreis) ÷ 100.000',
      ruleCitation: 'EU-Ökodesign-Verordnung (EG) Nr. 1275/2008',
      effectiveDate: 'Grenzwerte für Bereitschaftszustand',
    },
  ],
  articleSections: [
    {
      id: 'strompreiszusammensetzung-deutschland',
      title: 'Wie setzt sich der Strompreis in Deutschland 2026 zusammen?',
      level: 2,
      content:
        'Der Strompreis für private Haushalte in Deutschland liegt laut der aktuellen Strompreisanalyse des BDEW (Bundesverband der Energie- und Wasserwirtschaft) bei durchschnittlich rund 41,35 Cent pro Kilowattstunde (ct/kWh). Hinzu kommt eine jährliche Grundgebühr (Grundpreis) von durchschnittlich ca. 150 bis 160 Euro im Jahr (~12,80 Euro monatlich), die unabhängig vom tatsächlichen Verbrauch für Netzanschluss und Zählergebühren anfällt.\n\nDer Strompreis setzt sich aus drei Hauptblöcken zusammen:\n1. **Beschaffung und Vertrieb (ca. 45–50 %)**: Kosten für Stromeinkauf an der Strombörse EEX, Risikoaufschläge und Marge des Stromversorgers.\n2. **Regulierte Netzentgelte (ca. 25–30 %)**: Gebühren für den Erhalt und Ausbau der Übertragungs- und Verteilnetze durch Netzbetreiber wie TenneT, 50Hertz, Amprion und TransnetBW.\n3. **Steuern, Abgaben und Umlagen (ca. 20–25 %)**: Gesetzliche Stromsteuer (2,05 ct/kWh), Konzessionsabgaben an Kommunen, KWKG-Umlage, Offshore-Netzumlage und 19 % Mehrwertsteuer (Umsatzsteuer).',
    },
    {
      id: 'die-groessten-stromfresser-im-haushalt',
      title: 'Die größten Stromfresser im Haushalt im Überblick',
      level: 2,
      content:
        'Nicht alle Elektrogeräte im Haushalt belasten die Stromrechnung gleichermaßen. Das größte Einsparpotenzial liegt bei Geräten mit thermischer Wandlung (Wärmeerzeugung):\n\n- **Elektrische Warmwasserbereitung (Durchlauferhitzer / Boiler)**: Geräte mit 18 bis 24 kW Anschlussleistung erwärmen Wasser in Sekundenschnelle. Warmwasser macht in Wohnungen mit Durchlauferhitzern oft bis zu 30 % der gesamten Stromrechnung aus.\n- **Heizlüfter und Radiatoren**: Ein mobiler 2.000-Watt-Heizlüfter verbraucht in nur 3 Stunden 6 kWh Strom – das entspricht über 2,48 Euro pro Abend. Wird er den ganzen Winter über regelmäßig genutzt, drohen Stromnachzahlungen von mehreren hundert Euro.\n- **Alte Kühl- und Gefriergeräte**: Während moderne A- oder B-Klasse-Kühlschränke nur noch 100 bis 150 kWh im Jahr verbrauchen, ziehen 15 Jahre alte Kühl-Gefrierkombinationen oft 350 bis 450 kWh jährlich aus der Steckdose (rund 145 bis 186 Euro pro Jahr).\n- **Wäschetrockner**: Herkömmliche Kondenstrockner verbrauchen rund 3,5 kWh pro Trockengang (ca. 1,45 Euro), während moderne Wärmepumpentrockner mit nur 1,4 kWh auskommen.',
    },
    {
      id: 'stromkosten-vergleichstabelle-deutschland',
      title: 'Stromkosten-Vergleichstabelle für 25 Haushaltsgeräte (BDEW 2026)',
      level: 2,
      content:
        'Basierend auf dem durchschnittlichen Strompreis von 41,35 ct/kWh ergeben sich für typische Haushaltsgeräte folgende Richtwerte:\n\n- **Wasserkocher (2.200 W)**: ca. 3,7 Cent pro Kochvorgang (2,5 Min.) | ca. 54 €/Jahr (4x täglich)\n- **Heizlüfter (2.000 W)**: ca. 82,7 Cent pro Stunde | ca. 74,40 €/Monat (3 Std./Tag)\n- **Ölradiator (1.500 W)**: ca. 37,2 Cent pro Betriebsstunde (mit Taktung) | ca. 44,60 €/Monat\n- **Heißluftfritteuse (1.700 W)**: ca. 35,1 Cent pro 30-Minuten-Garzeit | ca. 73 €/Jahr (4x wöchentlich)\n- **Wäschetrockner (Kondens 2.200 W)**: ca. 1,45 € pro Ladung | ca. 226 €/Jahr (3x wöchentlich)\n- **Wärmepumpentrockner (900 W)**: ca. 0,58 € pro Ladung | ca. 90 €/Jahr (Ersparnis: ~136 €/Jahr!)\n- **Waschmaschine (40°C)**: ca. 35,1 Cent pro Waschgang | ca. 73 €/Jahr (4x wöchentlich)\n- **Geschirrspüler (Eco 50°C)**: ca. 35,1 Cent pro Spülgang | ca. 128 €/Jahr (täglich)\n- **Backofen (2.500 W)**: ca. 62,0 Cent pro 45-Minuten-Backvorgang | ca. 161 €/Jahr (5x wöchentlich)\n- **Mikrowelle (1.200 W)**: ca. 4,1 Cent pro 5-Minuten-Erwärmung | ca. 30 €/Jahr\n- **Fernseher (55" 4K 110 W)**: ca. 18,2 Cent für 4 Stunden Fernsehen | ca. 66 €/Jahr\n- **Gaming-PC (450 W)**: ca. 55,8 Cent für 3 Stunden Zocken | ca. 204 €/Jahr\n- **Laptop (60 W)**: ca. 19,8 Cent pro 8-Stunden-Homeoffice-Tag | ca. 43 €/Jahr (220 Arbeitstage)\n- **Wallbox E-Auto (11 kW)**: ca. 12,40 € pro 30 kWh Akkuladung (Reichweite ca. 180–200 km)',
    },
    {
      id: 'konkrete-spartipps-im-alltag',
      title: '5 wirksame Spartipps zur sofortigen Senkung der Stromkosten',
      level: 2,
      content:
        'Mit wenigen gezielten Maßnahmen lässt sich der private Stromverbrauch um 20 bis 35 % reduzieren:\n\n1. **Eco-Programme konsequent nutzen**: Das Eco-Programm bei Waschmaschine und Spülmaschine wäscht mit niedrigeren Wassertemperaturen (z. B. 30 °C statt 60 °C). Da 85 % des Stroms für das Heizen des Wassers verbraucht werden, spart das bis zu 50 % Energie pro Waschgang.\n2. **Wäsche auf der Leine trocknen**: Wer von Frühjahr bis Herbst auf den elektrischen Trockner verzichtet, spart jährlich ca. 80 bis 130 Euro reinen Strom ein.\n3. **Standby-Verbraucher eliminieren**: Schaltbare Steckdosenleisten oder smarte Zwischenstecker für Fernseher, Audio-Receiver, Spielekonsolen und PC-Monitore verhindern heimlichen "Vampir-Strom", der pro Haushalt bis zu 80 Euro im Jahr verschlingt.\n4. **Sparduschkopf bei elektrischem Warmwasser**: Ein Sparduschkopf reduziert die Wassermenge von 12–14 Liter auf ca. 6–7 Liter pro Minute. Bei einem Durchlauferhitzer spart eine 4-köpfige Familie damit jährlich bis zu 300 Euro Strom- und Wasserkosten.\n5. **Dynamische Stromtarife und Balkonkraftwerk**: Ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600 bis 800 kWh Strom direkt für den Eigenbedarf und spart jedes Jahr rund 250 bis 330 Euro Stromkosten ein.',
    },
  ],
  examples: [
    {
      title: 'Heißluftfritteuse vs. Einbaubackofen (Deutschland)',
      scenario: 'Zubereitung von Pommes Frites oder Gemüse für 2 Personen, 4 Mal pro Woche.',
      customFields: [
        { label: 'Backofen (45 Min. Garzeit + 15 Min. Vorheizen)', value: '1,8 kWh × 41,35 ct = 74,4 ct' },
        { label: 'Heißluftfritteuse (25 Min., kein Vorheizen)', value: '0,71 kWh × 41,35 ct = 29,4 ct', highlight: true },
        { label: 'Kostenunterschied pro Mahlzeit', value: '45,0 Cent Ersparnis' },
        { label: 'Ersparnis pro Jahr (200 Zubereitungen)', value: 'ca. 90,00 Euro gespart', highlight: true },
      ],
      explanation:
        'Die Heißluftfritteuse benötigt durch ihren kleinen Garraum kein langes Vorheizen und zirkuliert Hitze effizienter. Bei 4 Einsätzen wöchentlich amortisiert sich ein Marken-Airfryer (ca. 90 Euro) bereits im ersten Jahr über die Stromersparnis.',
    },
    {
      title: 'Wäschetrockner-Vergleich: Kondenstrockner vs. Wärmepumpe',
      scenario: 'Ein 4-Personen-Haushalt mit 3 Trocknerdurchgängen pro Woche (156 Ladungen pro Jahr).',
      customFields: [
        { label: 'Herkömmlicher Kondenstrockner', value: '3,5 kWh pro Ladung | 1,45 € pro Gang' },
        { label: 'Jahreskosten Kondenstrockner', value: '226,20 Euro / Jahr' },
        { label: 'Moderner A+++ Wärmepumpentrockner', value: '1,4 kWh pro Ladung | 0,58 € pro Gang', highlight: true },
        { label: 'Jahreskosten Wärmepumpentrockner', value: '90,48 Euro / Jahr' },
        { label: 'Jährliche Stromersparnis', value: '135,72 Euro / Jahr gespart', highlight: true },
      ],
      explanation:
        'Ein Wärmepumpentrockner nutzt die Abwärme im geschlossenen thermodynamischen Kreislauf und spart über 60 % Strom. Bei einer Gerätelebensdauer von 10 Jahren spart die Familie über 1.350 Euro Stromkosten.',
    },
    {
      title: 'Austausch alter Glühlampen gegen moderne LEDs',
      scenario: 'Umrüstung von 10 klassischen 60-Watt-Glühbirnen im Wohnbereich auf 9-Watt-LED-Lampen.',
      customFields: [
        { label: 'Alte Glühlampen (10 × 60W = 600W)', value: '720 kWh/Jahr bei 3,3 Std./Tag' },
        { label: 'Kosten alte Glühlampen', value: '297,72 Euro / Jahr' },
        { label: 'Neue LED-Lampen (10 × 9W = 90W)', value: '108 kWh/Jahr bei 3,3 Std./Tag', highlight: true },
        { label: 'Kosten LED-Lampen', value: '44,66 Euro / Jahr' },
        { label: 'Netto-Ersparnis pro Jahr', value: '253,06 Euro / Jahr gespart', highlight: true },
      ],
      explanation:
        'LED-Leuchtmittel wandeln bis zu 85 % der Energie in Licht statt in Hitze um. Die Anschaffungskosten für 10 Qualitäts-LEDs (ca. 25 Euro) haben sich bereits nach knapp zwei Monaten voll amortisiert.',
    },
  ],
  faqs: [
    {
      q: 'Wie hoch ist der durchschnittliche Strompreis in Deutschland 2026?',
      a: 'Laut BDEW-Strompreisanalyse liegt der durchschnittliche Strompreis für private Haushalte in Deutschland bei rund 41,35 Cent pro Kilowattstunde (ct/kWh). Hinzu kommt eine jährliche Grundgebühr von durchschnittlich ca. 150 bis 160 Euro.',
    },
    {
      q: 'Wie berechnet man die Stromkosten eines Geräts anhand der Wattzahl?',
      a: 'Multiplizieren Sie die Wattleistung des Geräts mit den Betriebsstunden und teilen Sie das Ergebnis durch 1.000, um die Kilowattstunden (kWh) zu erhalten. Multiplizieren Sie diesen Wert anschließend mit Ihrem Strompreis in Cent. Beispiel: Ein 2.000-Watt-Föhn für 15 Minuten (0,25 Std.) = (2.000 × 0,25) ÷ 1.000 = 0,5 kWh. Bei 41,35 ct/kWh kostet das 20,7 Cent.',
    },
    {
      q: 'Was verbraucht am meisten Strom im deutschen Haushalt?',
      a: 'Die größten Einzelverbraucher sind elektrische Warmwasserbereiter (Durchlauferhitzer und Warmwasserboiler), gefolgt von elektrischen Raumheizungen (Heizlüfter), veralteten Kondenstrocknern, alten Kühlschränken und Elektro-Einbaubacköfen.',
    },
    {
      q: 'Wie viel Strom verbraucht ein 1-Personen-, 2-Personen- und 4-Personen-Haushalt im Jahr?',
      a: 'Nach Angaben von Bund der Energieverbraucher und BDEW verbraucht ein 1-Personen-Haushalt ca. 1.500 bis 1.900 kWh/Jahr, ein 2-Personen-Haushalt ca. 2.500 bis 3.000 kWh/Jahr und ein 4-Personen-Haushalt im Einfamilienhaus ca. 4.000 bis 5.000 kWh/Jahr (ohne elektrische Warmwasserbereitung).',
    },
    {
      q: 'Wie viel Strom spart ein Balkonkraftwerk?',
      a: 'Ein steckerfertiges 800-Watt-Balkonkraftwerk erzeugt in Deutschland je nach Ausrichtung ca. 600 bis 800 kWh Sonnenstrom pro Jahr. Wird dieser Strom tagsüber im Haushalt direkt verbraucht, sinkt die jährliche Stromrechnung um rund 250 bis 330 Euro.',
    },
    {
      q: 'Lohnt sich ein Wechsel des Stromanbieters?',
      a: 'Ja. Tarife der örtlichen Grundversorgung sind oft 20 bis 30 % teurer als alternative Sonderverträge. Ein Wechsel kann einem Durchschnittshaushalt jährlich 150 bis 300 Euro Ersparnis bringen.',
    },
  ],
  sources: [
    { label: 'BDEW (Bundesverband der Energie- und Wasserwirtschaft e.V.)', url: 'https://www.bdew.de/service/daten-und-grafiken/bdew-strompreisanalyse/' },
    { label: 'Verbraucherzentrale Bundesverband (vzbv)', url: 'https://www.verbraucherzentrale.de/wissen/energie' },
    { label: 'Bundesnetzagentur (Monitoringbericht Energie)', url: 'https://www.bundesnetzagentur.de' },
  ],
  relatedTools: [
    { title: 'UK Electricity Cost Calculator', slug: 'electricity-cost-calculator/uk', description: 'Stromkosten für Haushaltsgeräte in Großbritannien mit Ofgem Price Cap berechnen.', category: 'home-energy' },
    { title: 'Australia Electricity Cost Calculator', slug: 'electricity-cost-calculator/australia', description: 'Appliance running costs across Australian states using AER DMO rates.', category: 'home-energy' },
    { title: 'Deutscher MwSt-Rechner', slug: 'de/mwst-rechner', description: 'Mehrwertsteuer mit 19 % und 7 % berechnen oder herausrechnen.', category: 'tax-vat' },
  ],
  relatedGuides: [
    { title: 'Stromverbrauch im Haushalt senken (Ratgeber)', slug: 'de/ratgeber/stromverbrauch-senken', description: 'Ausführlicher Ratgeber mit praktischen Strategien zur dauerhaften Senkung der Stromrechnung.', category: 'home-energy' },
    { title: 'Energy Price Cap Explained (UK)', slug: 'guides/energy-price-cap-explained', description: 'Funktionsweise staatlicher Preisobergrenzen und Tarifregulierungen.', category: 'home-energy' },
  ],
  updatedAt: '2026-01-01',
};
