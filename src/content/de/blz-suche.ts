import { PageContent } from '../types';

export const blzSucheDe: PageContent = {
  metaTitle: 'BLZ Suche Deutschland 2026 | Bankleitzahlen & BIC Verzeichnis',
  metaDescription:
    'Deutsche Bankleitzahlen (BLZ) und BICs im aktuellen Verzeichnis der Deutschen Bundesbank suchen. Filialen, Bankadressen und Clearing-Daten sofort finden.',
  h1: 'BLZ Suche & Bankleitzahlen-Verzeichnis Deutschland 2026',
  quickAnswer:
    'Die Bankleitzahl (BLZ) ist eine 8-stellige Ziffernfolge, die jedes Kreditinstitut in Deutschland eindeutig identifiziert. Sie gliedert sich in Clearing-Gebiet (Stelle 1), Bankenplatz (Stellen 2–3), Institutsgruppe (Stelle 4) und institutsinterne Nummer (Stellen 5–8). Die Deutsche Bundesbank aktualisiert die offizielle Bankleitzahlendatei vierteljährlich zum ersten Montag im März, Juni, September und Dezember.',
  howItWorks: [
    {
      label: '1. Stelle 1: Clearing-Gebiet (Clearingbezirk)',
      formula: 'Ziffer 1 bis 8 definiert die Großregion (z. B. 1 = Berlin/Brandenburg, 2 = Hamburg/Schleswig-Holstein/Bremen/Niedersachsen, 5 = Hessen)',
      ruleCitation: 'Deutsche Bundesbank: Aufbau der Bankleitzahl',
      effectiveDate: 'Historisch gewachsenes Bundesbank-System',
    },
    {
      label: '2. Stellen 2–3: Bankenplatz & Abrechnungsgebiet',
      formula: 'Gemeinsam mit Stelle 1 bildet dies die 3-stellige Kennung des Abrechnungsgebiets bzw. der Landeszentralbank-Filiale',
      ruleCitation: 'Bundesbank Richtlinien für den unbaren Zahlungsverkehr',
      effectiveDate: 'Standard seit 1970',
    },
    {
      label: '3. Stelle 4: Institutsgruppe (Bankensektor)',
      formula: '1–3 = Privatbanken, 5 = Sparkassen, 6 = Genossenschaftsbanken/Volksbanken, 9 = Bundesbank/Spezialbanken',
      ruleCitation: 'Verband der deutschen Banken / DSGV / BVR',
      effectiveDate: 'Sektorale Klassifikation',
    },
    {
      label: '4. Stellen 5–8: Institutsinterne Banknummer',
      formula: 'Eindeutige 4-stellige Nummer des individuellen Kreditinstituts innerhalb der Region',
      ruleCitation: 'Zuteilung durch die Deutsche Bundesbank',
      effectiveDate: 'Vierteljährliche Fortschreibung',
    },
  ],
  articleSections: [
    {
      id: 'bedeutung-und-geschichte-der-blz',
      title: 'Die Entstehung und Bedeutung des deutschen Bankleitzahlensystems',
      level: 2,
      content:
        'Das deutsche Bankleitzahlensystem blickt auf eine über 50-jährige Erfolgsgeschichte zurück. Es wurde Ende der 1960er Jahre von der Deutschen Bundesbank gemeinsam mit den Spitzenverbänden der deutschen Kreditwirtschaft entwickelt und zum 1. Januar 1970 bundesweit verbindlich eingeführt. Ziel war es damals, den rasant ansteigenden Scheck- und Überweisungsverkehr durch automatisierte optische Beleglesung und elektronische Datenverarbeitung effizienter abzuwickeln.\n\n' +
        'Vor der Einführung der BLZ mussten Bankmitarbeiter Postadressen und Institutskennungen manuell sortieren und per Hand verrechnen. Durch die 8-stellige numerische Bankleitzahl wurde es erstmals möglich, Überweisungen vollautomatisch über Nacht im Gironetzwerk zu routen. Jedes an der bargeldlosen Verrechnung teilnehmende Kreditinstitut erhielt eine unverwechselbare Kennziffer, die seither die Grundlage für alle Zahlungsströme in Deutschland bildet.',
    },
    {
      id: 'aufbau-der-8-stelligen-bankleitzahl',
      title: 'Detaillierter Aufbau der 8-stelligen BLZ (Struktur & Systematik)',
      level: 2,
      content:
        'Die 8 Ziffern einer deutschen Bankleitzahl sind keineswegs willkürlich gewählt, sondern folgen einer exakt definierten geografischen und sektoralen Hierarchie:\n\n' +
        '**1. Stelle: Clearing-Gebiet (Großraum)**\n' +
        'Die erste Ziffer orientiert sich an den historischen Zuständigkeitsbereichen der früheren Landeszentralbanken:\n' +
        '- **1**: Berlin, Brandenburg, Mecklenburg-Vorpommern\n' +
        '- **2**: Hamburg, Niedersachsen, Schleswig-Holstein, Bremen\n' +
        '- **3**: Nordrhein-Westfalen (Rheinland)\n' +
        '- **4**: Nordrhein-Westfalen (Westfalen/Lippe)\n' +
        '- **5**: Hessen (Finanzplatz Frankfurt am Main)\n' +
        '- **6**: Rheinland-Pfalz, Saarland\n' +
        '- **7**: Baden-Württemberg\n' +
        '- **8**: Bayern (Großraum München, Nürnberg usw.)\n\n' +
        '**2. und 3. Stelle: Bankenplatz und Abrechnungsbezirk**\n' +
        'Zusammen mit der ersten Ziffer kennzeichnen die Stellen 1 bis 3 den genauen Bankenplatz bzw. das Abrechnungsnetzwerk der jeweiligen Hauptstelle. So steht die Ziffernfolge `100` für Berlin, `200` für Hamburg, `500` für Frankfurt am Main und `700` für Stuttgart.\n\n' +
        '**4. Stelle: Institutsgruppe (Bankensektor)**\n' +
        'Die vierte Ziffer verrät, zu welcher Bankengruppe das Institut gehört:\n' +
        '- `0`: Deutsche Bundesbank\n' +
        '- `1` bis `3`: Privatbanken, Großbanken (z. B. Deutsche Bank, Commerzbank, HypoVereinsbank, Postbank)\n' +
        '- `4`: Sonstige Institute und Privatbankiers\n' +
        '- `5`: Sparkassen und Landesbanken\n' +
        '- `6`: Genossenschaftsbanken (Volksbanken, Raiffeisenbanken, PSD-Banken, Sparda-Banken)\n' +
        '- `7` bis `8`: Realkreditinstitute, Bausparkassen und Spezialbanken\n' +
        '- `9`: Sonderkreditinstitute und genossenschaftliche Zentralbanken\n\n' +
        '**5. bis 8. Stelle: Institutsinterne Kennziffer**\n' +
        'Die letzten vier Ziffern identifizieren das konkrete Einzelinstitut innerhalb seines Abrechnungsbezirks. Bei großen Banken mit vielen Zweigstellen stehen oft Nullen an den letzten Stellen der Hauptstelle (z. B. `10070000` Deutsche Bank Berlin).',
    },
    {
      id: 'die-bundesbank-bankleitzahlendatei',
      title: 'Die Bankleitzahlendatei der Deutschen Bundesbank & Aktualisierungszyklus',
      level: 2,
      content:
        'Die offizielle Referenzdatenbank für alle deutschen Bankleitzahlen wird von der **Deutschen Bundesbank** geführt. Diese Datei wird viermal im Jahr jeweils zum **ersten Montag im März, Juni, September und Dezember** mit einem verbindlichen Gültigkeitszeitraum veröffentlicht.\n\n' +
        'Die Bankleitzahlendatei enthält für jedes Institut präzise Stammdaten:\n' +
        '- **Bankleitzahl (8 Ziffern)**\n' +
        '- **Merkmal (1 = Hauptstelle, 2 = Zweigstelle/Filiale)**: Ein zentrales Merkmal zur Unterscheidung eigenständiger Hauptinstitute von unselbstständigen Niederlassungen.\n' +
        '- **Vollständige Institutsbezeichnung** und bankinterne Kurzbezeichnung\n' +
        '- **Postleitzahl, Ort und Straßenanschrift**\n' +
        '- **BIC (Business Identifier Code)**: Der offizielle SWIFT-Code des Instituts für die internationale Adressierung im Zahlungsverkehr\n' +
        '- **Prüfzifferberechnungsmethode (2 Stellen)**: Kennzeichnet das für Kontonummern dieses Instituts anzuwendende Berechnungsverfahren (z. B. Methode 00, 09, 51 usw.)\n' +
        '- **Änderungskennzeichen (A = Neuaufnahme, D = Löschung, U = Umbenennung, M = Modifikation)**\n\n' +
        'Unser Verzeichnis basiert auf dem offiziellen Datenbestand der Deutschen Bundesbank mit 3.432 erfassten Hauptinstituten sowie über 20.000 registrierten Filialen und Zweigstellen.',
    },
    {
      id: 'blz-in-zeiten-von-sepa',
      title: 'Die BLZ im heutigen SEPA-System: Nicht abgeschafft, sondern integriert',
      level: 2,
      content:
        'Bei der Einführung des einheitlichen Euro-Zahlungsverkehrsraums (SEPA) im Jahr 2014 wurde häufig fälschlicherweise berichtet, die Bankleitzahl sei abgeschafft worden. Das Gegenteil ist der Fall: Die Bankleitzahl ist heute fester Bestandteil jeder deutschen IBAN!\n\n' +
        'Betrachtet man eine deutsche IBAN mit ihren 22 Stellen:\n' +
        '`DE kk bbbb bbbb kkkk kkkk kk`\n' +
        'befindet sich die 8-stellige Bankleitzahl (`bbbb bbbb`) immer direkt nach dem Ländercode und den zwei Prüfziffern an den Positionen 5 bis 12. Die Bankleitzahl dient auch heute den automatisierten Clearing-Systemen der Bundesbank (SEPA-Clearer / EMZ) und der Europäischen Zentralbank (TIPS / TARGET) als primärer Routing-Schlüssel, um Zahlungen dem richtigen Institutskonto gutzuschreiben.',
    },
    {
      id: 'fusionen-und-umschluesselungen',
      title: 'Bankenfusionen: Was passiert bei Änderung oder Löschung einer BLZ?',
      level: 2,
      content:
        'Aufgrund des anhaltenden Konsolidierungsprozesses in der deutschen Bankenlandschaft – insbesondere bei Sparkassen und Volksbanken – verschmelzen jedes Jahr zahlreiche Geldinstitute. Bei einer Fusion wird in der Regel eine einheitliche übernehmende Bankleitzahl festgelegt.\n\n' +
        'Damit Daueraufträge, Lastschriftmandate und Gehaltszahlungen nicht fehlschlagen, richtet die Deutsche Bundesbank für gelöschte Alt-Bankleitzahlen in der Regel eine Übergangsfrist (sogenannte **Umleitungsregeln**) ein. Dennoch sollten Kontoinhaber nach einer Fusion ihre Geschäftspartner und Vertragspartner zeitnah über die neue IBAN und BLZ informieren, da Alt-Leitzahlen nach Ablauf der Übergangsfristen endgültig deaktiviert werden.',
    },
  ],
  examples: [
    {
      title: 'Beispiel 1: BLZ Analyse für Commerzbank Frankfurt',
      scenario:
        'Ein Bankkunde sieht auf seiner Abrechnung die Bankleitzahl 50040000 und möchte wissen, welches Institut und welcher Standort sich dahinter verbirgt.',
      calculationType: 'custom',
      customFields: [
        { label: 'Bankleitzahl (BLZ)', value: '50040000' },
        { label: 'Clearingbezirk (Stelle 1)', value: '5 (Hessen)' },
        { label: 'Bankenplatz (Stellen 1–3)', value: '500 (Frankfurt am Main)' },
        { label: 'Sektor (Stelle 4)', value: '4 (Groß- / Privatbanken)' },
        { label: 'Kreditinstitut', value: 'Commerzbank AG' },
        { label: 'Offizieller BIC', value: 'COBADEFFXXX', highlight: true },
        { label: 'Hauptsitz / Status', value: 'Hauptstelle (Merkmal 1)', highlight: true },
      ],
      explanation:
        'Die BLZ 50040000 gehört zur Commerzbank AG in Frankfurt am Main. Die ersten drei Ziffern 500 kennzeichnen den Bankenplatz Frankfurt in Hessen, Ziffer 4 die Gruppe der privaten Großbanken.',
    },
    {
      title: 'Beispiel 2: BLZ Suche für Stadtsparkasse München',
      scenario:
        'Ein Finanzbuchhalter sucht die Leitzahl und den BIC der Stadtsparkasse München zur manuellen Prüfung einer Lieferantenrechnung.',
      calculationType: 'custom',
      customFields: [
        { label: 'Bankname', value: 'Stadtsparkasse München' },
        { label: 'Gefundene BLZ', value: '70150000', highlight: true },
        { label: 'Clearingbezirk', value: '7 (Bayern/München)' },
        { label: 'Sektor (Stelle 4)', value: '5 (Sparkassensektor)' },
        { label: 'Postleitzahl & Ort', value: '80331 München' },
        { label: 'Offizieller BIC', value: 'SSKMDE77XXX', highlight: true },
        { label: 'Zweigstellen im Ort', value: 'Über 40 Filialen registriert' },
      ],
      explanation:
        'Die Stadtsparkasse München besitzt die bundesweit bekannte BLZ 70150000. Ziffer 5 an vierter Stelle zeigt eindeutig die Zugehörigkeit zur Sparkassen-Finanzgruppe.',
    },
  ],
  faqs: [
    {
      q: 'Was ist eine Bankleitzahl (BLZ) und wie ist sie aufgebaut?',
      a: 'Die Bankleitzahl ist eine 8-stellige numerische Kennung für deutsche Kreditinstitute. Sie gliedert sich in Clearing-Gebiet (Stelle 1), Abrechnungsbezirk (Stellen 2–3), Bankengruppe (Stelle 4) und institutsinterne Nummer (Stellen 5–8).',
    },
    {
      q: 'Wann wird die offizielle Bundesbank-Bankleitzahlendatei aktualisiert?',
      a: 'Die Deutsche Bundesbank aktualisiert das offizielle Verzeichnis vierteljährlich jeweils zum ersten Montag im März, Juni, September und Dezember. Unser Tool nutzt stets die aktuellen Daten.',
    },
    {
      q: 'Was bedeutet Merkmal 1 und Merkmal 2 bei der Bundesbank?',
      a: 'Merkmal 1 kennzeichnet die Hauptstelle bzw. den juristischen Hauptsitz eines Kreditinstituts. Merkmal 2 steht für unselbstständige Filialen, Zweigstellen oder regionale Niederlassungen.',
    },
    {
      q: 'Wurde die Bankleitzahl durch die IBAN ersetzt?',
      a: 'Nein, die Bankleitzahl wurde nicht ersetzt, sondern in die IBAN integriert. In jeder deutschen 22-stelligen IBAN steht die 8-stellige Bankleitzahl an den Positionen 5 bis 12.',
    },
    {
      q: 'Wo finde ich die Bankleitzahl meiner Bank?',
      a: 'Sie können die BLZ entweder direkt in unserem Suchwerkzeug über den Banknamen oder Ort finden oder sie aus Ihrer 22-stelligen IBAN ablesen: Die Stellen 5 bis 12 entsprechen exakt Ihrer 8-stelligen BLZ.',
    },
    {
      q: 'Kann man anhand der BLZ sofort den BIC und die Bank ermitteln?',
      a: 'Ja. Jede Bankleitzahl ist in der Bundesbankdatei eindeutig einem Kreditinstitut und dem entsprechenden SWIFT-BIC zugeordnet. Unser Tool zeigt Ihnen Bankname, BIC, Adresse und Filialen sofort an.',
    },
    {
      q: 'Was passiert mit der BLZ bei einer Bankenfusion?',
      a: 'Bei einer Fusion übernimmt das vereinigte Institut meist eine gemeinsame Leitzahl. Für die gelöschte BLZ richtet die Bundesbank in der Regel eine Übergangs-Umleitung ein, bevor sie endgültig stillgelegt wird.',
    },
    {
      q: 'Gibt es Bankleitzahlen auch in anderen Ländern?',
      a: 'Einige Länder besitzen ähnliche nationale Bankencodes (z. B. Sort Codes in Großbritannien mit 6 Ziffern, Routing Numbers in den USA mit 9 Ziffern oder Code Banque in Frankreich). Im SEPA-Raum werden diese heute über die IBAN standardisiert.',
    },
  ],
  sources: [
    {
      label: 'Deutsche Bundesbank: Bankleitzahlenverzeichnis & Downloads',
      url: 'https://www.bundesbank.de/de/aufgaben/unbarer-zahlungsverkehr/serviceangebot/bankleitzahlen',
    },
    {
      label: 'Bundesbank Richtlinien für die Vergabe von Bankleitzahlen',
      url: 'https://www.bundesbank.de',
    },
    {
      label: 'Die Deutsche Kreditwirtschaft (DK): Verzeichnis der Spitzenverbände',
      url: 'https://die-dk.de',
    },
  ],
  relatedTools: [
    {
      title: 'Deutscher IBAN Rechner',
      slug: 'de/iban-rechner',
      description:
        'Berechnen Sie Ihre 22-stellige deutsche IBAN aus BLZ und Kontonummer mit Bundesbank-Prüfung.',
      category: 'Banken & Konten',
    },
    {
      title: 'BIC / SWIFT Prüfer & Decoder',
      slug: 'de/bic-pruefen',
      description:
        'Prüfen und decodieren Sie 8- und 11-stellige BIC-Codes mit 4-teiliger visueller Aufschlüsselung.',
      category: 'Banken & Konten',
    },
    {
      title: 'IBAN Prüfer & Validierer',
      slug: 'de/iban-pruefen',
      description:
        'Internationale IBANs auf ISO-Konformität, Länderlänge und Prüfsummen testen.',
      category: 'Banken & Konten',
    },
  ],
  relatedGuides: [
    {
      title: 'Ratgeber: Bankleitzahl (BLZ) und BIC im SEPA-Verkehr',
      slug: 'de/ratgeber/blz-und-bic',
      description:
        'Funktionsweise, Geschichte und Bedeutung der Bankleitzahlen im modernen Zahlungsverkehr.',
      category: 'Banken & Konten',
    },
    {
      title: 'Ratgeber: Aufbau und Struktur der deutschen IBAN',
      slug: 'de/ratgeber/iban-aufbau',
      description:
        'Alle 22 Stellen der deutschen IBAN im Detail aufgeschlüsselt.',
      category: 'Banken & Konten',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Die Bankleitzahlen, Institutsbezeichnungen und BICs stammen aus der offiziellen Bankleitzahlendatei der Deutschen Bundesbank. Trotz sorgfältiger Aktualisierung wird für die Richtigkeit keine Haftung übernommen.',
};
