import { PageContent } from '../types';

export const ibanRechnerDe: PageContent = {
  metaTitle: 'IBAN Rechner Deutschland 2026 | Kontonummer & BLZ berechnen',
  metaDescription:
    'Deutsche IBAN aus Kontonummer und Bankleitzahl (BLZ) online berechnen. Bundesbank-geprüft, BIC ermitteln & Modulo-97 Prüfziffern sofort validieren.',
  h1: 'IBAN Rechner Deutschland 2026 (Kontonummer & BLZ)',
  quickAnswer:
    'Um Ihre deutsche IBAN zu berechnen, wird der zweistellige Ländercode „DE“ mit einer zweistelligen Prüfziffer, der 8-stelligen Bankleitzahl (BLZ) und Ihrer auf 10 Stellen mit führenden Nullen aufgefüllten Kontonummer kombiniert. Die Prüfziffer wird nach dem ISO-7064-Verfahren (Modulo 97-10) berechnet, um Tippfehler bei Überweisungen zuverlässig auszuschließen.',
  howItWorks: [
    {
      label: '1. Kontonummer auf 10 Stellen auffüllen',
      formula: 'Kontonummer links mit führenden Nullen auffüllen (z. B. 1234567 → 0001234567)',
      ruleCitation: 'Deutsche Bundesbank: Richtlinie zur Erzeugung von IBANs',
      effectiveDate: 'Gültig seit SEPA-Einführung bis 2026',
    },
    {
      label: '2. Bankleitzahl und BBAN zusammensetzen',
      formula: 'BBAN = BLZ (8 Stellen) + Kontonummer (10 Stellen) = 18 Ziffern',
      ruleCitation: 'ISO 13616 / Deutsche Kreditwirtschaft (DK)',
      effectiveDate: 'Standardverfahren Deutschland',
    },
    {
      label: '3. Prüfziffer nach Modulo 97-10 berechnen',
      formula: 'Prüfsumme = 98 - (BigInt(BLZ + Kontonummer + "131400") mod 97)',
      ruleCitation: 'ISO 7064 (MOD 97-10)',
      effectiveDate: 'Gültig nach internationalem ISO-Standard',
    },
    {
      label: '4. Vollständige 22-stellige IBAN ausgeben',
      formula: 'IBAN = "DE" + Prüfziffer (2 Ziffern) + BLZ (8 Ziffern) + Kontonummer (10 Ziffern)',
      ruleCitation: 'Europäische SEPA-Verordnung (EU) Nr. 260/2012',
      effectiveDate: 'Verbindlich im gesamten SEPA-Raum',
    },
  ],
  articleSections: [
    {
      id: 'aufbau-der-deutschen-iban',
      title: 'Aufbau und Struktur der deutschen IBAN (22 Stellen)',
      level: 2,
      content:
        'Die International Bank Account Number (IBAN) wurde von der Internationalen Organisation für Normung (ISO) und dem Europäischen Ausschuss für Bankstandards (ECBS) entwickelt, um grenzüberschreitende und inländische Überweisungen zu vereinheitlichen und zu automatisieren. In Deutschland besteht die IBAN immer aus exakt 22 alphanumerischen Zeichen, die sich in vier feste Komponenten gliedern:\n\n' +
        '1. **Ländercode (Stellen 1–2)**: Für Deutschland stets das zweistellige Länderkürzel **DE** nach ISO 3166-1 alpha-2.\n' +
        '2. **Prüfziffern (Stellen 3–4)**: Zwei numerische Ziffern von 02 bis 98. Diese Prüfsumme wird nach dem mathematischen Algorithmus ISO 7064 Modulo 97-10 berechnet und dient dazu, Tipp- und Zahlendreher sofort beim Eintippen im Online-Banking zu erkennen.\n' +
        '3. **Bankleitzahl (Stellen 5–12)**: Die bisherige 8-stellige Bankleitzahl (BLZ) des kontoführenden Kreditinstituts. Sie identifiziert die Bank eindeutig im deutschen Bankensystem.\n' +
        '4. **Kontonummer (Stellen 13–22)**: Die bisherige nationale Kontonummer. Da deutsche Kontonummern historisch zwischen 1 und 10 Stellen lang sein durften, wird die Kontonummer bei der IBAN-Generierung immer linksbündig mit führenden Nullen auf exakt 10 Ziffern aufgefüllt (z. B. wird aus der Kontonummer 456789 die Zeichenfolge 0000456789).\n\n' +
        'Zusammen bilden die 8-stellige Bankleitzahl und die 10-stellige Kontonummer die sogenannte **BBAN (Basic Bank Account Number)** mit insgesamt 18 Ziffern. Durch das Voranstellen von „DE“ und den beiden Prüfziffern entsteht die finale 22-stellige IBAN.',
    },
    {
      id: 'berechnungsverfahren-modulo-97',
      title: 'Das mathematische Modulo 97-10 Prüfziffernverfahren im Detail',
      level: 2,
      content:
        'Die beiden Prüfziffern an den Positionen 3 und 4 entstehen nicht zufällig, sondern sind das Ergebnis einer strengen modularen Arithmetik nach **ISO 7064, Mod 97-10**. Dieses Verfahren stellt sicher, dass nahezu 99,99 % aller manuellen Eingabefehler (wie Zifferntausch, Auslassungen oder Doppeleingaben) mathematisch erkannt werden, bevor Geld auf ein falsches Konto überwiesen wird.\n\n' +
        'Der mathematische Ablauf der Prüfziffernberechnung erfolgt in vier Schritten:\n\n' +
        '**Schritt A: BBAN zusammensetzen**\n' +
        'Die 8-stellige BLZ und die 10-stellige, links mit Nullen aufgefüllte Kontonummer werden aneinandergefügt. Aus der BLZ 10070000 und der Kontonummer 123456700 entsteht: `100700000123456700`.\n\n' +
        '**Schritt B: Ländercode und Dummy-Prüfziffern anhängen**\n' +
        'Der Ländercode `DE` und zwei Nullen `00` werden an das Ende der Zahl gehängt. Im IBAN-System werden Buchstaben durch Zahlen ersetzt: A = 10, B = 11, C = 12, D = 13, E = 14 usw. Der Buchstabe D entspricht 13 und E entspricht 14. Der Ländercode `DE` wird somit zur Zahl `1314`. Zusammen mit den beiden Nullen `00` lautet das Anhängsel `131400`.\n' +
        'Unsere Rechenkette lautet nun: `100700000123456700131400`.\n\n' +
        '**Schritt C: Modulo 97 Division**\n' +
        'Diese 24-stellige Zahl wird ganzzahlig durch 97 geteilt und der mathematische Rest (Modulo) ermittelt:\n' +
        '`100700000123456700131400 mod 97 = Restwert`.\n\n' +
        '**Schritt D: Subtraktion von 98**\n' +
        'Der ermittelte Restwert wird von der Zahl 98 abgezogen: `Prüfziffer = 98 - Restwert`. Liegt das Ergebnis unter 10, wird eine führende Null vorangestellt (z. B. `07`). Das Ergebnis ist die zweistellige Prüfziffer, die an dritter und vierter Stelle der IBAN eingesetzt wird.',
    },
    {
      id: 'bundesbank-ausnahmeregeln',
      title: 'Bundesbank-Prüfziffermethoden und Sonderregeln (Ausnahmeregeln)',
      level: 2,
      content:
        'Ein weit verbreiteter Irrglaube ist, dass jede deutsche Kontonummer einfach durch das Voranstellen von Nullen und die Standardberechnung in eine gültige IBAN umgewandelt werden kann. In der Praxis führt dieses naive Vorgehen bei zahlreichen Banken zu ungültigen IBANs oder Fehlüberweisungen!\n\n' +
        'Die **Deutsche Bundesbank** pflegt und veröffentlicht vierteljährlich die offizielle **Bankleitzahlendatei**, in der jedem Kreditinstitut ein verbindliches Prüfziffernberechnungsverfahren zugeordnet ist. Aktuell existieren über 140 verschiedene Prüfziffernmethoden (Methode 00 bis Methode E3 sowie Sonderverfahren), die von deutschen Banken angewendet werden.\n\n' +
        'Zu den wichtigsten Ausnahmen und Besonderheiten gehören:\n\n' +
        '- **Kontonummern-Transformation**: Bestimmte Sparkassen, Volksbanken und genossenschaftliche Zentralbanken wandeln historische Kontonummern vor der IBAN-Berechnung nach internen Tabellen um. Dabei können Ziffern gestrichen, Unterkontonummern integriert oder bankinterne Filialkennziffern eingeschoben werden.\n' +
        '- **Rechtsbündige oder zentrierte Null-Auffüllung**: Während die Standardmethode Kontonummern links auffüllt, verlangen einzelne Spezialinstitute die Ergänzung von Nullen an bestimmten internen Positionen.\n' +
        '- **Prüfziffernberechnung der Kontonummer selbst**: Bevor eine IBAN erzeugt wird, prüft das Banksystem, ob die Kontonummer an sich mathematisch zur BLZ passt. Deutsche Banken nutzen Verfahren wie Modulo 10 mit Gewichtung 2-1-2-1, Modulo 11 mit Gewichtung 2 bis 7 oder modifizierte Luhn-Algorithmen.\n' +
        '- **Sonder-BLZ bei Fusionen und Übernahmen**: Viele Kreditinstitute führen bei Fusionen Alt-Bankleitzahlen als sogenannte Umleitungs-BLZ weiter. Bei der IBAN-Berechnung muss in solchen Fällen oft die neue Leit-BLZ der aufnehmenden Bank verwendet werden.\n\n' +
        'Aus diesem Grund weist unser IBAN-Rechner ausdrücklich darauf hin: Der Rechner prüft die BLZ gegen die offizielle Bundesbank-Datenbank und berechnet die mathematisch exakte ISO-7064-IBAN nach Standardregel. Bei Kreditinstituten mit individuellen Ausnahmeregeln ist jedoch stets die von der jeweiligen Bank auf dem Kontoauszug oder in der Banking-App ausgewiesene IBAN maßgeblich.',
    },
    {
      id: 'bic-und-sepa-routing',
      title: 'Die Rolle des BIC (SWIFT-Code) im SEPA-Zahlungsverkehr',
      level: 2,
      content:
        'Mit der europäischen SEPA-Verordnung (Single Euro Payments Area) Nr. 260/2012 wurde im Euro-Zahlungsverkehr das Prinzip **„IBAN-Only“** eingeführt. Seit Februar 2014 für inländische Überweisungen und seit Februar 2016 für grenzüberschreitende Überweisungen im Europäischen Wirtschaftsraum (EWR) müssen Verbraucher bei Überweisungen in Euro grundsätzlich nur noch die IBAN des Empfängers angeben.\n\n' +
        'Das Kreditinstitut ermittelt den zugehörigen **Business Identifier Code (BIC)** bzw. SWIFT-Code des Empfängerinstituts automatisch anhand der in der IBAN enthaltenen Bankleitzahl über das bundesweite Routing-Verzeichnis der Deutschen Bundesbank und das Clearing-Netzwerk des Eurosystems (z. B. über SEPA-Clearer / TARGET2 / TIPS).\n\n' +
        'Dennoch bleibt der BIC in vielen praktischen Situationen unverzichtbar:\n' +
        '1. **Überweisungen außerhalb des EWR**: Bei Zahlungen in Drittländer wie die USA, Großbritannien, die Schweiz, Kanada oder Australien ist die Angabe des 8- oder 11-stelligen BIC zwingend erforderlich.\n' +
        '2. **Zahlungen in Fremdwährungen**: Überweisungen in US-Dollar, Schweizer Franken oder Britischen Pfund erfordern auch innerhalb Europas meist den BIC.\n' +
        '3. **Firmenkunden und E-Commerce**: Viele Online-Händler, Lastschriftmandate und internationale Handelsverträge verlangen weiterhin die Nennung von IBAN und BIC zur doppelten Absicherung.',
    },
    {
      id: 'haeufige-fehler-und-tipps',
      title: 'Häufige Fehlerquellen bei der IBAN-Eingabe und wie Sie sich schützen',
      level: 2,
      content:
        'Trotz Prüfziffernverfahren kommt es im Zahlungsalltag immer wieder zu Fehlern. Folgende Punkte sollten Sie stets beachten:\n\n' +
        '- **Verwechslung von BLZ und Kontonummer**: Achten Sie darauf, die 8-stellige BLZ und die bis zu 10-stellige Kontonummer in die jeweils dafür vorgesehenen Felder einzutragen.\n' +
        '- **Leerzeichen und Formatierung**: In Dokumenten und Briefen wird die IBAN zur besseren Lesbarkeit meist in 4er-Blöcken formatiert (`DE12 3456 7890 1234 5678 90`). Bei der elektronischen Eingabe im Online-Banking werden Leerzeichen meist automatisch entfernt, im IBAN-Rechner können Sie die Nummer formatiert oder unformatiert eingeben.\n' +
        '- **Bankenhaftung nach § 675r BGB**: Nach deutschem und europäischem Zahlungsdiensterecht ist die Bank gesetzlich nur dazu verpflichtet, Überweisungen anhand des sogenannten **Kundenidentifikators (der IBAN)** auszuführen. Stimmt der angegebene Empfängername nicht mit dem tatsächlichen Kontoinhaber überein, die IBAN ist aber formal gültig, wird die Überweisung dennoch ausgeführt! Ein nachträglicher Rückruf (SEPA Recall) ist oft mit hohen Kosten verbunden und nur mit Zustimmung des fehlerhaften Empfängers möglich.',
    },
  ],
  examples: [
    {
      title: 'Beispiel 1: IBAN berechnen für Deutsche Bank Berlin',
      scenario:
        'Ein Bankkunde besitzt ein Girokonto bei der Deutschen Bank in Berlin mit der Bankleitzahl 10070000 und der Kontonummer 123456700. Er benötigt seine vollständige IBAN und den passenden BIC.',
      calculationType: 'custom',
      customFields: [
        { label: 'Bankleitzahl (BLZ)', value: '10070000' },
        { label: 'Kontonummer', value: '123456700' },
        { label: '10-stellig gepolstert', value: '0123456700' },
        { label: 'Kreditinstitut', value: 'Deutsche Bank PGK' },
        { label: 'Berechnete Prüfziffer', value: '27' },
        { label: 'Vollständige IBAN', value: 'DE27 1007 0000 0123 4567 00', highlight: true },
        { label: 'BIC / SWIFT', value: 'DEUTDEDBXXX', highlight: true },
      ],
      explanation:
        'Die Kontonummer 123456700 (9 Stellen) wird links mit einer Null auf 10 Stellen ergänzt (0123456700). Die Modulo-97-Berechnung mit Ländercode DE (1314) ergibt die Prüfziffer 27. Die fertige IBAN lautet DE27100700000123456700.',
    },
    {
      title: 'Beispiel 2: IBAN berechnen für Berliner Sparkasse',
      scenario:
        'Eine Kundin der Berliner Sparkasse (BLZ 10050000) möchte ihre IBAN aus einer kurzen 8-stelligen Kontonummer (54321098) ermitteln.',
      calculationType: 'custom',
      customFields: [
        { label: 'Bankleitzahl (BLZ)', value: '10050000' },
        { label: 'Kontonummer', value: '54321098' },
        { label: '10-stellig gepolstert', value: '0054321098' },
        { label: 'Kreditinstitut', value: 'Berliner Sparkasse' },
        { label: 'Berechnete Prüfziffer', value: '64' },
        { label: 'Vollständige IBAN', value: 'DE64 1005 0000 0054 3210 98', highlight: true },
        { label: 'BIC / SWIFT', value: 'BELADEBE100', highlight: true },
      ],
      explanation:
        'Die 8-stellige Kontonummer wird links mit zwei Nullen auf 10 Stellen aufgefüllt (0054321098). Zusammengesetzt mit der BLZ 10050000 und Ländercode DE ergibt die Prüfziffernrechnung den Wert 64. Die IBAN lautet DE64100500000054321098.',
    },
  ],
  faqs: [
    {
      q: 'Wie berechnet man eine deutsche IBAN aus Kontonummer und BLZ?',
      a: 'Füllen Sie Ihre Kontonummer links mit Nullen auf genau 10 Ziffern auf. Setzen Sie die 8-stellige Bankleitzahl davor (18-stellige BBAN). Fügen Sie das Länderkürzel DE (1314) und 00 hinten an, teilen Sie die Zahl durch 97 und ziehen Sie den Rest von 98 ab. Dies ergibt die zweistellige Prüfziffer, die zwischen DE und die BLZ gesetzt wird.',
    },
    {
      q: 'Wie viele Stellen hat eine deutsche IBAN?',
      a: 'Eine deutsche IBAN hat immer exakt 22 alphanumerische Zeichen: 2 Buchstaben für den Ländercode (DE), 2 Prüfziffern, 8 Ziffern für die Bankleitzahl und 10 Ziffern für die Kontonummer.',
    },
    {
      q: 'Kann man jede deutsche IBAN einfach online berechnen?',
      a: 'Für die meisten Standardkonten liefert die Berechnung das exakte Ergebnis. Allerdings verwenden manche Kreditinstitute interne Ausnahmeregeln der Bundesbank (z. B. Kontonummer-Umschlüsselungen). Maßgeblich ist daher stets die IBAN auf Ihrem Kontoauszug oder Ihrer Bankkarte.',
    },
    {
      q: 'Wo finde ich meine IBAN und meinen BIC?',
      a: 'Ihre IBAN finden Sie auf der Vorder- oder Rückseite Ihrer Girocard (Bankkarte), in den Kontodetails Ihrer Online-Banking-App sowie im Kopfbereich jedes offiziellen Kontoauszugs.',
    },
    {
      q: 'Was passiert, wenn ich eine falsche IBAN bei einer Überweisung eingebe?',
      a: 'Durch die zweistellige Prüfziffer erkennt das Online-Banking Tippfehler fast immer sofort und verweigert die Absendung. Ist eine falsch eingetippte IBAN jedoch rein rechnerisch gültig und existiert bei der Empfängerbank, wird das Geld dort gutgeschrieben. Banken prüfen den Namen des Empfängers gesetzlich nicht ab.',
    },
    {
      q: 'Brauche ich für Inlandsüberweisungen in Deutschland noch den BIC?',
      a: 'Nein. Im Rahmen des SEPA-Verfahrens gilt in Deutschland und dem gesamten SEPA-Raum das Prinzip „IBAN-Only“. Bei Euro-Überweisungen reicht die IBAN vollständig aus; die Bank ermittelt den BIC automatisch.',
    },
    {
      q: 'Was ist der Unterschied zwischen Kontonummer, BLZ und IBAN?',
      a: 'Die Kontonummer identifiziert Ihr persönliches Konto, die BLZ Ihre Bank. Die IBAN kombiniert beide Angaben international standardisiert mit einem Ländercode und einer mathematischen Prüfziffer zu einer weltweit eindeutigen Kontokennung.',
    },
    {
      q: 'Ist die Nutzung des IBAN-Rechners kostenlos und sicher?',
      a: 'Ja, dieser Rechner ist zu 100 % kostenlos und speichert keinerlei Bankdaten. Die Berechnung und Validierung erfolgt direkt in Ihrem Webbrowser mit offiziellen Referenzdaten der Deutschen Bundesbank.',
    },
  ],
  sources: [
    {
      label: 'Deutsche Bundesbank: Bankleitzahlendatei & Prüfzifferberechnung',
      url: 'https://www.bundesbank.de/de/aufgaben/unbarer-zahlungsverkehr/serviceangebot/bankleitzahlen',
    },
    {
      label: 'Die Deutsche Kreditwirtschaft (DK): Spezifikation der deutschen IBAN-Regeln',
      url: 'https://die-dk.de',
    },
    {
      label: 'Verordnung (EU) Nr. 260/2012 zur Festlegung der technischen Vorschriften und der Geschäftsanforderungen für Überweisungen und Lastschriften in Euro (SEPA-Verordnung)',
      url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32012R0260',
    },
    {
      label: 'ISO 13616: Banking and related financial services — International bank account number (IBAN)',
      url: 'https://www.iso.org/standard/81202.html',
    },
  ],
  relatedTools: [
    {
      title: 'BLZ Suche & Bankleitzahlenverzeichnis',
      slug: 'de/blz-suche',
      description:
        'Suchen Sie nach Bankleitzahlen, Institutsnamen und BICs im offiziellen Bundesbank-Verzeichnis.',
      category: 'Banken & Konten',
    },
    {
      title: 'BIC / SWIFT Prüfer & Decoder',
      slug: 'de/bic-pruefen',
      description:
        'Validieren Sie 8- und 11-stellige BIC- und SWIFT-Codes mit visueller ISO-9362-Aufschlüsselung.',
      category: 'Banken & Konten',
    },
    {
      title: 'IBAN Prüfer & Validierer',
      slug: 'de/iban-pruefen',
      description:
        'Prüfen Sie internationale IBANs aus über 60 Ländern auf formale Gültigkeit und Prüfziffern.',
      category: 'Banken & Konten',
    },
  ],
  relatedGuides: [
    {
      title: 'Ratgeber: Aufbau und Struktur der deutschen IBAN',
      slug: 'de/ratgeber/iban-aufbau',
      description:
        'Alles Wissenswerte über die 22 Stellen der deutschen IBAN, Prüfziffern und Bankenleitzahlen.',
      category: 'Banken & Konten',
    },
    {
      title: 'Ratgeber: Bankleitzahl (BLZ) und BIC im SEPA-Verkehr',
      slug: 'de/ratgeber/blz-und-bic',
      description:
        'Wie Bankleitzahlen entstanden sind und welche Rolle sie heute im SEPA-Verfahren spielen.',
      category: 'Banken & Konten',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Dieser IBAN-Rechner berechnet die IBAN nach den Standardvorgaben der Deutschen Bundesbank und ISO 7064. Für Kreditinstitute mit abweichenden Ausnahmeregeln kann das Ergebnis abweichen. Maßgeblich ist stets die von Ihrer Bank mitgeteilte IBAN.',
};
