import { GuideContent } from '../../types';

export const guideDeBlzBic: GuideContent = {
  metaTitle: 'BLZ und BIC: Unterschiede, Aufbau & Bedeutung im SEPA-System',
  metaDescription:
    'Ratgeber zu Bankleitzahl (BLZ) und BIC/SWIFT. Erfahren Sie den 8-stelligen Aufbau der BLZ, Bankengruppen der Bundesbank, ISO 9362 BIC-Codes und die IBAN-Only-Regel.',
  h1: 'BLZ und BIC im Detail: Aufbau, Bedeutung und Unterschiede im Zahlungsverkehr',
  intro:
    'Obwohl im europäischen SEPA-Zahlungsverkehr die IBAN im Mittelpunkt steht, bleiben die Bankleitzahl (BLZ) und der Business Identifier Code (BIC/SWIFT) die fundamentalen Pfeiler des Bankenclearings. Während die 8-stellige deutsche Bankleitzahl der Bundesbank das Kreditinstitut und die Bankengruppe auf nationaler Ebene identifiziert, ermöglicht der 8- oder 11-stellige BIC nach ISO 9362 das weltweite Interbanken-Routing.',
  readTimeMinutes: 9,
  articleSections: [
    {
      id: 'einfuehrung-blz-und-bic',
      title: 'Was sind BLZ und BIC und welche Rolle spielen sie heute?',
      level: 2,
      content:
        'Vor der Einführung des SEPA-Verfahrens war die Kombination aus einer achtstelligen Bankleitzahl (BLZ) und der persönlichen Kontonummer der Standard für jede Überweisung in Deutschland. Mit der Umstellung auf die 22-stellige deutsche IBAN ist die Bankleitzahl keineswegs verschwunden: Sie bildet als unverzichtbarer Bestandteil die Positionen 5 bis 12 jeder deutschen IBAN.\n\nParallel dazu existiert der BIC (Business Identifier Code), der oft synonym als SWIFT-Code bezeichnet wird. Während die Bankleitzahl ein rein deutsches Ordnungssystem der Deutschen Bundesbank darstellt, ist der BIC ein internationaler Standard der ISO (ISO 9362). Zusammen bilden BLZ und BIC das informationstechnische Rückgrat für die automatische Weiterleitung von Zahlungsströmen zwischen Kreditinstituten weltweit.',
    },
    {
      id: 'aufbau-der-deutschen-bankleitzahl',
      title: 'Der 8-stellige Aufbau der deutschen Bankleitzahl (BLZ)',
      level: 2,
      content:
        'Die Bankleitzahl ist keine willkürliche Nummernfolge, sondern ein hochgradig hierarchisch gegliedertes System, das die Deutsche Bundesbank vierteljährlich pflegt und herausgibt. Jede BLZ besteht aus exakt 8 numerischen Ziffern:\n\n```\n 3   7   0   5   0   1   9   8\n[Clear-] [Bank-] [Filiale /]\n[Gebiet] [Gruppe] [Institut]\n Pos 1-3  Pos 4    Pos 5-8\n```\n\n### Die drei Segmente der Bankleitzahl:\n1. **Clearinggebiet / Giro-Netzknoten (Stelle 1–3)**:\nDie ersten drei Ziffern kennzeichnen den regionalen Abrechnungsbezirk (Leitzone und Leitraum) der Deutschen Bundesbank. Zum Beispiel steht `100` für Berlin, `200` für Hamburg, `300` für Hannover, `370` für Köln/Bonn, `500` für Frankfurt am Main und `700` für Stuttgart.\n2. **Bankengruppe / Institutstyp (Stelle 4)**:\nDie vierte Ziffer verrät auf einen Blick, zu welchem Bankensektor das Kreditinstitut gehört:\n- `0`: Deutsche Bundesbank\n- `1`: Postbank (heute Deutsche Bank Gruppe)\n- `2`: Großbanken (z. B. Deutsche Bank, HypoVereinsbank) und Privatbankiers\n- `3`: Genossenschaftsbanken (Volksbanken, Raiffeisenbanken, Sparda-Banken, PSD-Banken)\n- `4`: Commerzbank und sonstige private Kreditinstitute\n- `5`: Sparkassen und Landesbanken\n- `6`: Genossenschaftliche Zentralbanken\n- `7`: Sonstige Kreditinstitute\n- `8`: Genossenschaftsbanken (Zusatzkontingent)\n- `9`: Sonderkontingente und Verrechnungsstellen\n3. **Institutsinterne Filialnummer (Stelle 5–8)**:\nDie letzten vier Ziffern identifizieren das konkrete Kreditinstitut innerhalb des Clearinggebiets oder eine bestimmte Haupt- oder Regionalzweigstelle.',
    },
    {
      id: 'die-bundesbank-bankleitzahlendatei',
      title: 'Die offizielle Bankleitzahlendatei der Deutschen Bundesbank',
      level: 2,
      content:
        'Die Deutsche Bundesbank ist gesetzlich für die Vergabe, Änderung und Löschung von Bankleitzahlen in der Bundesrepublik Deutschland zuständig. Zum ersten Montag im März, Juni, September und Dezember jeden Jahres veröffentlicht die Bundesbank eine aktualisierte Bankleitzahlendatei.\n\nDiese Datei enthält für jede aktive Bankleitzahl:\n- Die 8-stellige BLZ und das Merkmal, ob sie führend ist;\n- Die genaue postalische Anschrift und den Namen des Instituts;\n- Die Postleitzahl und den Ort;\n- Die Kurzbezeichnung des Instituts für Kontoauszüge;\n- Die Nummer der Prüfziffernberechnungsmethode (über 140 verschiedene mathematische Verfahren zur Kontonummernprüfung nach Anlage 1 der Bundesbank-Richtlinie);\n- Den zugeordneten SWIFT-BIC für das SEPA-Clearingsystem.',
    },
    {
      id: 'aufbau-des-bic-swift-codes',
      title: 'Der Aufbau des BIC / SWIFT-Codes (ISO 9362)',
      level: 2,
      content:
        'Der Business Identifier Code (BIC) wird weltweit von der Society for Worldwide Interbank Financial Telecommunication (SWIFT) vergeben und besteht aus 8 oder 11 Zeichen:\n\n```\n D   E   U   T   D   E   F   F   X   X   X\n[Bank-Code] [Land] [Ort]   [Filialkennung]\n Pos 1-4    Pos 5-6 Pos 7-8    Pos 9-11\n```\n\n- **Bank-Code (4 Buchstaben)**: Eindeutiges Kürzel der Bank (z. B. `DEUT` für Deutsche Bank, `COBA` für Commerzbank, `WELK` für Sparkasse KölnBonn, `GENO` für genossenschaftliche Institute).\n- **Ländercode (2 Buchstaben)**: ISO-Ländercode (z. B. `DE` für Deutschland, `AT` für Österreich, `CH` für die Schweiz).\n- **Ortscode (2 Zeichen)**: Sitz der Zentrale oder Abwicklungsstelle (z. B. `FF` für Frankfurt am Main, `MM` für München, `33` für Berlin).\n- **Filialcode / Branch Code (3 Zeichen, optional)**: Bezeichnet eine spezielle Zweigstelle oder Auslandsabteilung. Fehlen diese drei Stellen oder lauten sie `XXX`, handelt es sich um die Hauptverwaltung des Instituts.',
    },
    {
      id: 'sepa-iban-only-regel',
      title: 'Wann braucht man heute noch den BIC? Die „IBAN-Only“-Regel',
      level: 2,
      content:
        'Viele Verbraucher fragen sich, warum der BIC auf Rechnungen und Überweisungsträgern kaum noch verlangt wird. Der Grund ist die europäische **Verordnung (EU) Nr. 260/2012**:\n\nSeit Februar 2016 dürfen Banken bei Zahlungen im gesamten SEPA-Raum (alle 27 EU-Staaten sowie u. a. Großbritannien, Schweiz, Norwegen und Island) ausschließlich die IBAN verlangen. Das Eingeben des BIC ist für normale Euro-Überweisungen und SEPA-Lastschriften gesetzlich untersagt, um den Prozess für Verbraucher zu vereinfachen.\n\n### Wann der BIC weiterhin zwingend erforderlich ist:\n1. **Überweisungen in Länder außerhalb des SEPA-Raums**: z. B. in die USA, nach Kanada, Australien, Japan, in die Türkei oder nach China;\n2. **Überweisungen in Fremdwährungen**: Wenn Sie von einem deutschen Euro-Konto US-Dollar, Schweizer Franken oder Britische Pfund über das klassische SWIFT-Netzwerk transferieren;\n3. **Wertpapierabwicklung und Akkreditive**: Im internationalen Außenhandel und bei der Verwahrung von Wertpapieren.',
    },
    {
      id: 'geschichte-des-blz-systems',
      title: 'Historischer Rückblick: Die Entstehung des deutschen BLZ-Systems',
      level: 2,
      content:
        'Das heute selbstverständliche System der achtstelligen Bankleitzahl wurde im Jahr **1970** vom damaligen Zentralen Kreditausschuss (ZKA, heute Die Deutsche Kreditwirtschaft – DK) gemeinsam mit der Deutschen Bundesbank geschaffen. Vor 1970 existierten in den einzelnen Bundesländern und Bankensektoren unkoordinierte Kontonummernsysteme, die eine automatische maschinelle Belegverarbeitung unmöglich machten.\n\nMit der bundesweiten Standardisierung auf 8 Ziffern schufen die deutschen Banken die Grundlage für die optische Klarschriftlesung (OCR-A und CMC-7) auf papierhaften Schecks und Überweisungsträgern. Jedes Giroinstitut erhielt eine eindeutige Ziffernkennung, die sich aus dem geografischen Abrechnungsbezirk der Landeszentralbanken und dem Institutstyp zusammensetzte. Dieses geniale Ordnungssystem erwies sich als so robust und zukunftssicher, dass es bei der europäischen SEPA-Harmonisierung unverändert als nationaler Kontobestandteil (BBAN) in die deutsche IBAN übernommen werden konnte.',
    },
    {
      id: 'clearing-netze-bundesbank-target',
      title: 'Interbanken-Clearing: RPS der Bundesbank, TARGET2 und TIPS',
      level: 2,
      content:
        'Im Hintergrund jeder Transaktion wickeln Banken die tatsächliche Liquiditätsübertragung über hochkomplexe Clearing- und Settlement-Systeme ab, bei denen BLZ und BIC Hand in Hand greifen:\n\n- **Elektronischer Massenzahlungsverkehr (EMZ / RPS)**: Der Zahlungsverkehrsdienst der Deutschen Bundesbank wickelt täglich Millionen inländischer Überweisungen und Lastschriften ab. Hierbei dient die BLZ als primärer Routing-Schlüssel zur Identifikation der bilateralen Verrechnungskonten.\n- **T2 (ehemals TARGET2)**: Das Großbetrags-Zahlungssystem des Eurosystems, betrieben von den Zentralbanken (Bundesbank, Banque de France, Banca d\'Italia, Banco de España). Großbetragszahlungen und dringliche Eilüberweisungen werden hierbei in Echtzeit auf Brutto-Basis (RTGS – Real-Time Gross Settlement) über SWIFT-BICs der Institute final abgewickelt.\n- **TIPS (TARGET Instant Payment Settlement)**: Für moderne SEPA-Echtzeitüberweisungen (*SEPA Instant Payments*), die rund um die Uhr an 365 Tagen im Jahr innerhalb von unter 10 Sekunden auf dem Empfängerkonto ankommen müssen. Das System prüft über die im Verzeichnis hinterlegte BIC/BLZ-Kombination in Bruchteilen einer Sekunde, ob beide beteiligten Kreditinstitute am Instant-Clearing teilnehmen.',
    },
    {
      id: 'bankenfusionen-und-nachfolge-blz',
      title: 'Bankenfusionen, Filialschließungen und Nachfolge-BLZ',
      level: 2,
      content:
        'Der deutsche Bankensektor ist seit Jahrzehnten von tiefgreifenden Konsolidierungswellen geprägt, insbesondere im Sparkassen- und Genossenschaftssektor. Wenn zwei Institute fusionieren (beispielsweise die Fusion zweier benachbarter Volksbanken oder Kreissparkassen), entsteht in der Bundesbank-Datenbank eine Nachfolgeregelung:\n\n- **Führende Bankleitzahl (Merkmal 1)**: Das fusionierte Gesamtinstitut wählt in der Regel eine führende Haupt-BLZ, über die der gesamte künftige Zahlungsverkehr und die institutionelle Kommunikation abgewickelt wird.\n- **Weiterleitungs- und Übergangsfristen**: Damit Daueraufträge, Gehaltseingänge und hinterlegte Einzugsermächtigungen der Kunden der übernommenen Bank nicht schlagartig scheitern, behält die Deutsche Bundesbank die gelöschte BLZ häufig für eine Übergangszeit von mehreren Jahren im Verzeichnis mit einem automatischen Weiterleitungsvermerk (Merkmal 2).\n- **Aktualisierungspflicht für Verbraucher und Unternehmen**: Trotz automatischer Weiterleitungssysteme empfehlen Verbraucherzentralen und Bankenverbände, bestehende Daueraufträge und Arbeitgeberdaten zeitnah auf die neue Haupt-IBAN des fusionierten Instituts umzustellen, um Fehlbuchungen nach Ablauf der Übergangsfristen zu verhindern.',
    },
    {
      id: 'blz-ermitteln-und-bank-finden',
      title: 'So ermitteln Sie die BLZ aus einer bestehenden IBAN',
      level: 2,
      content:
        'Haben Sie eine 22-stellige deutsche IBAN vorliegen und möchten wissen, um welche Bank und Niederlassung es sich handelt? Sie können die Bankleitzahl unmittelbar ablesen:\n\nSchneiden Sie einfach die ersten 4 Zeichen (`DE` + Prüfziffer) ab. Die darauf folgenden **8 Ziffern (Position 5 bis 12)** sind exakt die Bankleitzahl des kontoführenden Instituts.\n\n*Beispiel*: Bei der IBAN `DE89 3704 0044 0532 0130 00` lautet die BLZ `37040044`. Ein schneller Abgleich in unserer BLZ-Suche zeigt sofort: Es handelt sich um die Commerzbank AG, Filiale Köln.\n\n### Verifizierung vor Auslands- und Eilüberweisungen:\nGerade wenn Sie internationale Lieferantenrechnungen bezahlen oder als Buchhaltung Überweisungslisten prüfen, empfiehlt sich vor der Ausführung ein kurzer digitaler Abgleich mit der offiziellen Bundesbankdatei. Dadurch schließen Sie veraltete BLZ-Ziffernkombinationen und Fehlleitungen von vornherein aus und stellen sicher, dass das Empfängerinstitut für den gewünschten Zahlungsverkehrsweg (wie SEPA Instant oder T2-Eiltransfers) uneingeschränkt freigeschaltet ist.',
    },
  ],
  faqs: [
    {
      q: 'Was ist der Unterschied zwischen BLZ und BIC?',
      a: 'Die Bankleitzahl (BLZ) ist eine 8-stellige deutsche Kennzahl der Bundesbank für inländische Institute. Der BIC (Business Identifier Code / SWIFT) ist ein 8- oder 11-stelliger internationaler Code nach ISO 9362 für weltweite Finanztransaktionen.',
    },
    {
      q: 'Wo finde ich die Bankleitzahl in meiner IBAN?',
      a: 'In jeder deutschen IBAN befindet sich die 8-stellige Bankleitzahl an den Positionen 5 bis 12, also unmittelbar hinter dem Länderkürzel DE und den beiden Prüfziffern.',
    },
    {
      q: 'Muss ich bei einer Überweisung in Deutschland noch den BIC angeben?',
      a: 'Nein. Seit 2016 gilt im gesamten SEPA-Raum die „IBAN-Only“-Regel. Für Überweisungen in Euro innerhalb Deutschlands und der EU genügt die Angabe der IBAN.',
    },
    {
      q: 'Welche Bankengruppe hat die Ziffer 5 an vierter Stelle der BLZ?',
      a: 'Die Ziffer 5 an vierter Stelle einer deutschen Bankleitzahl kennzeichnet ausnahmslos Sparkassen und Landesbanken.',
    },
    {
      q: 'Was bedeutet der Zusatz XXX am Ende eines BIC?',
      a: 'Der Zusatz XXX an den Positionen 9 bis 11 eines BIC signalisiert, dass es sich um die Hauptverwaltung bzw. den Hauptsitz der Bank handelt und keine untergeordnete Filiale gemeint ist.',
    },
    {
      q: 'Wie oft aktualisiert die Deutsche Bundesbank die Bankleitzahlen?',
      a: 'Die Bundesbank aktualisiert die offizielle Bankleitzahlendatei viermal im Jahr: jeweils zum ersten Montag im März, Juni, September und Dezember.',
    },
    {
      q: 'Wann benötigt man den BIC heute noch?',
      a: 'Der BIC wird zwingend für weltweite Überweisungen außerhalb des SEPA-Raums (z. B. in die USA oder nach Asien) sowie bei internationalen Zahlungen in Fremdwährungen benötigt.',
    },
    {
      q: 'Kann eine gelöschte Bankleitzahl noch für Überweisungen genutzt werden?',
      a: 'Wenn Banken fusionieren, werden alte Bankleitzahlen nach einer Übergangsfrist gelöscht. Eine Überweisung an eine gelöschte BLZ wird im Interbankenclearing abgewiesen und an den Absender rücküberwiesen.',
    },
  ],
  sources: [
    {
      label: 'Deutsche Bundesbank: Merkblatt zur Bankleitzahlendatei und Berechnungsmethoden',
      url: 'https://www.bundesbank.de/de/aufgaben/unbarer-zahlungsverkehr/serviceangebot/bankleitzahlen',
    },
    {
      label: 'SWIFT: ISO 9362 Business Identifier Codes Directory',
      url: 'https://www.swift.com/standards/data-standards/bic',
    },
    {
      label: 'Die Deutsche Kreditwirtschaft (DK): Richtlinien für den Zahlungsverkehr',
      url: 'https://die-dk.de',
    },
    {
      label: 'Europäische Union: SEPA-Verordnung (EU) Nr. 260/2012',
      url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32012R0260',
    },
  ],
  cta: {
    title: 'Bankleitzahlen und Banken bundesweit suchen',
    description:
      'Finden Sie mit unserer interaktiven Bundesbank-BLZ-Suche den zugehörigen BIC, Bankennamen, Ort und Clearingmerkmale.',
    buttonText: 'Zur Bundesbank BLZ-Suche',
    buttonHref: '/de/blz-suche/',
    badge: 'Offizielles Verzeichnis',
  },
  relatedTools: [
    {
      title: 'Bundesbank BLZ-Suche & Bankenverzeichnis',
      slug: 'de/blz-suche',
      description: 'Suchen Sie nach 8-stelligen Bankleitzahlen, Institutsnamen und BIC-Codes in Deutschland.',
      category: 'Banken & Konten',
    },
    {
      title: 'BIC & SWIFT Code Prüfer',
      slug: 'de/bic-pruefen',
      description: 'Validieren Sie 8- und 11-stellige BIC-Codes nach ISO 9362 auf Format und Existenz.',
      category: 'Banken & Konten',
    },
    {
      title: 'Deutscher IBAN Rechner',
      slug: 'de/iban-rechner',
      description: 'Errechnen Sie aus BLZ und Kontonummer die 22-stellige deutsche IBAN.',
      category: 'Banken & Konten',
    },
  ],
  relatedGuides: [
    {
      title: 'Ratgeber: IBAN Aufbau in Deutschland (22 Stellen)',
      slug: 'de/ratgeber/iban-aufbau',
      description: 'Die Struktur aus DE, Prüfziffer, BLZ und Kontonummer mit Modulo-97-Berechnung erklärt.',
      category: 'Banken-Ratgeber',
    },
    {
      title: 'Anleitung: Wo finde ich meine IBAN?',
      slug: 'guides/how-to-find-your-iban',
      description: 'Finden Sie Ihre IBAN auf Bankkarten, Kontoauszügen und in Banking-Apps in Europa.',
      category: 'Banken-Ratgeber',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Dieser Ratgeber dient der reinen Information. Bankleitzahlen und Bankenzuordnungen unterliegen fortlaufenden Aktualisierungen durch Fusionen der Kreditinstitute.',
};
