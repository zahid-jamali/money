import { PageContent } from '../types';

export const bicCheckerDe: PageContent = {
  metaTitle: 'BIC & SWIFT Prüfer 2026 | BIC Code validieren & entschlüsseln',
  metaDescription:
    'BIC / SWIFT-Code online prüfen und decodieren. 8- und 11-stellige Codes nach ISO 9362 validieren mit 4-teiliger Aufschlüsselung & Bundesbank-Verifizierung.',
  h1: 'BIC & SWIFT Prüfer (ISO 9362 Code Validierung)',
  quickAnswer:
    'Ein BIC (Business Identifier Code), oft auch als SWIFT-Code bezeichnet, ist eine 8- oder 11-stellige internationale Kennung nach ISO 9362 für Finanzinstitute weltweit. Er besteht aus einem 4-stelligen Bankcode, einem 2-stelligen Ländercode, einem 2-stelligen Ortscode sowie einem optionalen 3-stelligen Filialcode (oder „XXX“ für die Hauptstelle).',
  howItWorks: [
    {
      label: '1. Bankcode (Stellen 1–4)',
      formula: '4 Buchstaben zur eindeutigen Kennzeichnung der Bank (z. B. „DEUT“ für Deutsche Bank, „COBA“ für Commerzbank)',
      ruleCitation: 'ISO 9362 / SWIFT Registration Authority',
      effectiveDate: 'Weltweiter ISO-Standard',
    },
    {
      label: '2. Ländercode (Stellen 5–6)',
      formula: '2 Buchstaben nach ISO 3166-1 alpha-2 für das Herkunftsland (z. B. „DE“ für Deutschland, „AT“ für Österreich, „CH“ für Schweiz)',
      ruleCitation: 'ISO 3166-1 alpha-2',
      effectiveDate: 'Internationale Norm',
    },
    {
      label: '3. Ortscode (Stellen 7–8)',
      formula: '2 alphanumerische Zeichen für den regionalen Standort / Abrechnungsplatz (z. B. „DB“ für Frankfurt, „MM“ für München)',
      ruleCitation: 'ISO 9362 Abschnitt 4',
      effectiveDate: 'Regionales Routing',
    },
    {
      label: '4. Filialcode (Stellen 9–11, optional)',
      formula: '3 alphanumerische Zeichen für eine konkrete Zweigstelle oder Abteilung; „XXX“ oder Weglassen kennzeichnet die Hauptstelle',
      ruleCitation: 'ISO 9362 Abschnitt 5',
      effectiveDate: 'Optionale 11-stellige Form',
    },
  ],
  articleSections: [
    {
      id: 'was-ist-ein-bic-swift-code',
      title: 'Was ist ein BIC / SWIFT-Code? (Standard ISO 9362)',
      level: 2,
      content:
        'Der **BIC (Business Identifier Code)** ist ein international genormter Code, der Kreditinstitute, Broker und Finanzdienstleister rund um den Globus unverwechselbar identifiziert. Weil die Registrierungs- und Vergabestelle die genossenschaftlich organisierte Organisation **SWIFT (Society for Worldwide Interbank Financial Telecommunication)** mit Sitz in La Hulpe bei Brüssel ist, wird der BIC im Sprachgebrauch häufig synonym als **SWIFT-Code** oder **SWIFT/BIC** bezeichnet.\n\n' +
        'Während die IBAN (International Bank Account Number) das persönliche Einzelkonto eines Bankkunden bezeichnet, adressiert der BIC das Finanzinstitut als Ganzes im weltweiten Bankennetzwerk. Ohne den BIC wäre ein sicheres, automatisiertes Routing von Geldüberweisungen über Länder- und Währungsgrenzen hinweg nicht möglich.',
    },
    {
      id: 'aufbau-des-bic-codes',
      title: 'Die 4-teilige Struktur des BIC-Codes (8 oder 11 Zeichen)',
      level: 2,
      content:
        'Ein standardkonformer BIC nach ISO 9362 setzt sich aus vier klar abgegrenzten Datenblöcken zusammen:\n\n' +
        '**1. Bankleitziffer / Institutscode (Stellen 1–4)**\n' +
        'Vier lateinische Großbuchstaben, die meist an den Namen der Bank angelehnt sind:\n' +
        '- `DEUT` = Deutsche Bank\n' +
        '- `COBA` = Commerzbank\n' +
        '- `BYLA` = Bayerische Landesbank (BayernLB)\n' +
        '- `DABA` = Deutsche Apotheker- und Ärztebank\n' +
        '- `PBNK` = Postbank\n\n' +
        '**2. Ländercode (Stellen 5–6)**\n' +
        'Zwei Buchstaben nach ISO 3166-1 alpha-2, die das Land des Instituts angeben (`DE` für Deutschland, `AT` für Österreich, `CH` für die Schweiz, `FR` für Frankreich usw.).\n\n' +
        '**3. Ortscode / Standortkennung (Stellen 7–8)**\n' +
        'Zwei Buchstaben oder Ziffern für den Sitz des Rechenzentrums bzw. den Bankenplatz (z. B. `DB` für Frankfurt am Main, `B1` für Berlin). Steht an der 8. Stelle eine `0`, handelt es sich um einen Test-BIC; eine `1` kennzeichnet einen passiven Teilnehmer, der nicht direkt am aktiven SWIFT-Netz angebunden ist.\n\n' +
        '**4. Filialcode / Zweigstellenkennung (Stellen 9–11, optional)**\n' +
        'Drei alphanumerische Zeichen für eine regionale Niederlassung, Abteilung oder Fachfiliale. Fehlen diese drei Stellen, handelt es sich um einen **8-stelligen BIC**, der automatisch für die Hauptstelle gilt. Wird die Hauptstelle explizit 11-stellig angegeben, enden die letzten drei Zeichen auf `XXX` (z. B. `DEUTDEDBXXX`). Beide Schreibweisen sind bankentechnisch vollkommen gleichwertig.',
    },
    {
      id: 'bic-und-sepa-iban-only',
      title: 'BIC im SEPA-Raum: Gilt das Prinzip „IBAN-Only“?',
      level: 2,
      content:
        'Seit der verbindlichen Einführung der SEPA-Verordnung (EU-Verordnung Nr. 260/2012) gilt für Verbraucher in der Europäischen Union das Prinzip **„IBAN-Only“**:\n\n' +
        '- Bei allen Überweisungen und Lastschriften in Euro innerhalb Deutschlands und des SEPA-Raums müssen Bankkunden **nur noch die IBAN** angeben.\n' +
        '- Die Banken ermitteln den BIC des Empfängerinstituts vollautomatisch aus der in der IBAN enthaltenen Bankleitzahl (über das bundesweite Routing-Verzeichnis der Deutschen Bundesbank).\n\n' +
        '**Wann wird der BIC dennoch benötigt?**\n' +
        '1. **Auslandsüberweisungen außerhalb von SEPA**: Für weltweite Überweisungen in Drittländer wie die USA, Großbritannien, Kanada, Australien oder asiatische Staaten ist der BIC unverzichtbar.\n' +
        '2. **Fremdwährungstransaktionen**: Auch innerhalb Europas verlangen Überweisungen in Fremdwährungen (z. B. US-Dollar, Schweizer Franken oder Britische Pfund) in der Regel den vollständigen BIC.\n' +
        '3. **Handelsverträge und Rechnungen**: Auf Geschäftsbriefen, Rechnungen und im Impressum gehört die Angabe von IBAN und BIC weiterhin zum professionellen kaufmännischen Standard.',
    },
    {
      id: 'das-swift-netzwerk-und-sicherheit',
      title: 'Funktionsweise des SWIFT-Netzwerks & ISO 20022 Standard',
      level: 2,
      content:
        'Das SWIFT-Netzwerk transferiert selbst kein Geld, sondern übermittelt hochsichere, verschlüsselte Finanznachrichten (sogenannte FIN-Nachrichten wie MT103 für Kundenüberweisungen oder MT202 für Interbankenverrechnungen) zwischen den teilnehmenden Banken.\n\n' +
        'Derzeit vollzieht die globale Bankenwelt die Umstellung auf den modernen Nachrichtenstandard **ISO 20022 (MX-Nachrichten)**. In diesem modernen XML-Format bleiben BICs als universelle Institutionskennungen (`AnyBIC`) das Fundament des internationalen Clearings, werden jedoch durch zusätzliche Metadaten (wie den Legal Entity Identifier / LEI und detaillierte Adressdaten) ergänzt, um Betrugsprävention und Sanktionsprüfungen zu optimieren.',
    },
    {
      id: 'tipps-zur-bic-pruefung',
      title: 'Typische Fehler bei der BIC-Eingabe und wie Sie sie vermeiden',
      level: 2,
      content:
        'Ein fehlerhafter BIC kann dazu führen, dass Auslandsüberweisungen tagelang feststecken oder von Korrespondenzbanken kostenpflichtig abgewiesen werden (oft fallen Rückleitungsgebühren von 20 bis 50 Euro an). Achten Sie deshalb auf folgende Punkte:\n\n' +
        '- **Exakte Zeichenlänge beachten**: Ein BIC darf nur 8 oder 11 Stellen lang sein. Eingaben mit 9 oder 10 Zeichen sind fehlerhaft.\n' +
        '- **Verwechslung von Ziffern und Buchstaben**: Häufig wird die Zahl Null (`0`) mit dem Großbuchstaben `O` oder die Zahl Eins (`1`) mit dem Großbuchstaben `I` verwechselt.\n' +
        '- **Im Zweifel Hauptstelle `XXX` wählen**: Ist Ihnen die Filialkennung einer ausländischen Bank nicht bekannt, verwenden Sie stets den 8-stelligen Hauptstellen-BIC oder hängen Sie `XXX` an. Das Kernbanksystem leitet die Überweisung anhand der Kontonummer automatisch intern an die zuständige Filiale weiter.',
    },
  ],
  examples: [
    {
      title: 'Beispiel 1: Deutsche Bank Frankfurt (Hauptsitz)',
      scenario:
        'Ein Unternehmen in den USA möchte eine Rechnung per Auslandsüberweisung an die Deutsche Bank in Frankfurt begleichen.',
      calculationType: 'custom',
      customFields: [
        { label: 'Eingegebener BIC', value: 'DEUTDEDBXXX', highlight: true },
        { label: 'Bankcode (Stellen 1–4)', value: 'DEUT (Deutsche Bank)' },
        { label: 'Ländercode (Stellen 5–6)', value: 'DE (Deutschland)' },
        { label: 'Ortscode (Stellen 7–8)', value: 'DB (Frankfurt am Main)' },
        { label: 'Filialcode (Stellen 9–11)', value: 'XXX (Hauptsitz / Zentrale)' },
        { label: 'Gültig nach ISO 9362', value: 'Ja (11 Zeichen)', highlight: true },
      ],
      explanation:
        'DEUTDEDBXXX ist der offizielle 11-stellige BIC der Zentrale der Deutschen Bank AG in Frankfurt am Main. Die Endung XXX weist die Hauptstelle eindeutig aus.',
    },
    {
      title: 'Beispiel 2: Commerzbank Frankfurt (8-stellige Kurzform)',
      scenario:
        'Eine Exporteurin prüft den 8-stelligen Kurz-BIC der Commerzbank für eine internationale Lieferantenvereinbarung.',
      calculationType: 'custom',
      customFields: [
        { label: 'Eingegebener BIC', value: 'COBADEFF', highlight: true },
        { label: 'Bankcode (Stellen 1–4)', value: 'COBA (Commerzbank)' },
        { label: 'Ländercode (Stellen 5–6)', value: 'DE (Deutschland)' },
        { label: 'Ortscode (Stellen 7–8)', value: 'FF (Frankfurt am Main)' },
        { label: 'Filialcode', value: 'Nicht angegeben (Hauptstelle)' },
        { label: 'Gültig nach ISO 9362', value: 'Ja (8 Zeichen)', highlight: true },
      ],
      explanation:
        'COBADEFF ist die standardkonforme 8-stellige Form des BICs der Commerzbank AG in Frankfurt. Sie ist funktional identisch mit COBADEFFXXX.',
    },
  ],
  faqs: [
    {
      q: 'Was ist der Unterschied zwischen BIC und SWIFT-Code?',
      a: 'Es gibt keinen Unterschied. BIC (Business Identifier Code) ist die offizielle Bezeichnung nach ISO 9362. SWIFT ist die Organisation, die diese Codes weltweit registriert und verwaltet.',
    },
    {
      q: 'Wie viele Zeichen hat ein gültiger BIC?',
      a: 'Ein BIC besteht entweder aus genau 8 Zeichen (für die Hauptstelle der Bank) oder aus 11 Zeichen (für eine bestimmte Filiale oder mit der Endung XXX für die Hauptstelle).',
    },
    {
      q: 'Brauche ich für SEPA-Überweisungen in Euro noch einen BIC?',
      a: 'Nein, innerhalb Deutschlands und des gesamten SEPA-Raums gilt das Prinzip „IBAN-Only“. Bei Euro-Zahlungen reicht die IBAN aus; Ihre Bank ermittelt den BIC automatisch.',
    },
    {
      q: 'Wo finde ich meinen eigenen BIC / SWIFT-Code?',
      a: 'Ihr BIC steht auf Ihrer Girocard (Bankkarte), auf jedem offiziellen Kontoauszug sowie in den Kontodetails Ihrer Online-Banking-App.',
    },
    {
      q: 'Was bedeuten die Buchstaben „XXX“ am Ende eines BICs?',
      a: 'Die Endung „XXX“ in einem 11-stelligen BIC kennzeichnet ausdrücklich die Hauptstelle (Head Office) der jeweiligen Bank im Gegensatz zu Zweigstellen.',
    },
    {
      q: 'Was passiert, wenn ich einen falschen BIC eingebe?',
      a: 'Existiert der BIC nicht, weist das Online-Banking die Eingabe sofort ab. Gehört der BIC zu einer falschen Bank, kann die Überweisung fehlgeleitet werden oder kostenpflichtig zurückgebucht werden.',
    },
    {
      q: 'Kann ein BIC auch Kleinbuchstaben oder Sonderzeichen enthalten?',
      a: 'Nein, ein BIC besteht ausschließlich aus lateinischen Buchstaben (A–Z) und Ziffern (0–9). Leerzeichen oder Bindestriche werden von unserem Prüfer automatisch entfernt.',
    },
    {
      q: 'Ist dieser BIC-Prüfer kostenlos und sicher?',
      a: 'Ja, dieser Validator ist vollständig kostenlos und arbeitet direkt im Browser. Es werden keinerlei vertrauliche Bankdaten an externe Server übertragen oder gespeichert.',
    },
  ],
  sources: [
    {
      label: 'SWIFT Organisation: Standards und BIC Directory',
      url: 'https://www.swift.com',
    },
    {
      label: 'ISO 9362: Banking — Business identifier code (BIC)',
      url: 'https://www.iso.org/standard/60390.html',
    },
    {
      label: 'Deutsche Bundesbank: Zahlungsverkehr und SEPA-Regelwerk',
      url: 'https://www.bundesbank.de',
    },
  ],
  relatedTools: [
    {
      title: 'Deutscher IBAN Rechner',
      slug: 'de/iban-rechner',
      description:
        'Berechnen Sie deutsche IBAN und BIC aus BLZ und Kontonummer nach Bundesbank-Regeln.',
      category: 'Banken & Konten',
    },
    {
      title: 'BLZ Suche & Bankleitzahlenverzeichnis',
      slug: 'de/blz-suche',
      description:
        'Suchen Sie Bankleitzahlen, BICs und Adressen im offiziellen Bundesbank-Bestand.',
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
        'Wie BIC und Bankleitzahl im internationalen Zahlungsverkehr zusammenwirken.',
      category: 'Banken & Konten',
    },
    {
      title: 'Ratgeber: Aufbau und Struktur der deutschen IBAN',
      slug: 'de/ratgeber/iban-aufbau',
      description:
        'Alle 22 Stellen der deutschen IBAN verständlich aufgeschlüsselt.',
      category: 'Banken & Konten',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Dieser BIC / SWIFT Prüfer überprüft die formale Konformität nach ISO 9362 sowie Bundesbank-Daten. Bei internationalen Großüberweisungen sollten Sie die Zahlungsdaten vorab mit dem Empfänger abgleichen.',
};
