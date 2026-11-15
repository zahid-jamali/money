import { GuideContent } from '../../types';

export const guideDeIbanAufbau: GuideContent = {
  metaTitle: 'IBAN Aufbau Deutschland: Struktur, Prüfziffer & 22 Stellen erklärt',
  metaDescription:
    'Detaillierter Leitfaden zum deutschen IBAN-Aufbau (22 Zeichen). Struktur aus Ländercode, Prüfziffer, BLZ und Kontonummer sowie der Modulo-97-Algorithmus erklärt.',
  h1: 'IBAN Aufbau in Deutschland: Alle 22 Stellen und Prüfziffern im Detail',
  intro:
    'Die deutsche IBAN (International Bank Account Number) besteht aus exakt 22 alphanumerischen Zeichen. Sie setzt sich aus dem zweistelligen Ländercode DE, einer zweistelligen Prüfziffer nach dem mathematischen Modulo-97-Verfahren, der achtstelligen Bankleitzahl (BLZ) sowie der zehnstelligen Kontonummer zusammen. Dieser Leitfaden erklärt den exakten Aufbau, die Berechnung der Prüfsumme und wie Tippfehler zuverlässig verhindert werden.',
  readTimeMinutes: 9,
  articleSections: [
    {
      id: 'was-ist-die-deutsche-iban',
      title: 'Was ist die deutsche IBAN und warum hat sie 22 Stellen?',
      level: 2,
      content:
        'Die International Bank Account Number (IBAN) ist eine weltweit genormte Kennung für Bankkonten, die von der Internationalen Organisation für Normung (ISO 13616) und dem European Committee for Banking Standards (ECBS) entwickelt wurde. Im Zuge der Einführung des einheitlichen Euro-Zahlungsverkehrsraums (SEPA – Single Euro Payments Area) löste die IBAN die früheren rein nationalen Kontonummern und Bankleitzahlen ab.\n\nWährend die Gesamtlänge einer IBAN international zwischen 15 Stellen (in Norwegen) und bis zu 33 Stellen variiert, hat die Deutsche Bundesbank in Abstimmung mit der deutschen Kreditwirtschaft eine feste Länge von **exakt 22 Zeichen** für alle deutschen Giro- und Sparkonten festgelegt. Diese feste Länge stellt sicher, dass Buchungssysteme unvollständige Eingaben sofort als fehlerhaft erkennen können.',
    },
    {
      id: 'die-vier-bestandteile-der-iban',
      title: 'Die 4 Bestandteile der deutschen IBAN im Überblick',
      level: 2,
      content:
        'Jede deutsche IBAN folgt einer unveränderlichen, viergliedrigen Architektur:\n\n```\n D   E   8   9   3   7   0   4   0   0   4   4   0   5   3   2   0   1   3   0   0   0\n[Länder] [Prüf] [---------- Bankleitzahl (BLZ) ----------] [---------- Kontonummer ----------]\n Pos 1-2 Pos 3-4                 Pos 5-12                               Pos 13-22\n```\n\n1. **Ländercode (Stelle 1–2)**: Die beiden Großbuchstaben `DE` stehen für die Bundesrepublik Deutschland nach ISO 3166-1 alpha-2.\n2. **Prüfziffer (Stelle 3–4)**: Zwei numerische Ziffern (im Wertebereich von 02 bis 98). Sie werden mathematisch aus den nachfolgenden 18 Stellen generiert und schützen vor Zahlendrehern.\n3. **Bankleitzahl / BLZ (Stelle 5–12)**: Die 8-stellige Bankleitzahl des kontoführenden Kreditinstituts aus der offiziellen Bankleitzahlendatei der Deutschen Bundesbank. Sie identifiziert die Bank, die Bankengruppe und die regionale Niederlassung.\n4. **Kontonummer (Stelle 13–22)**: Die 10-stellige Kontonummer des Kunden. War die ursprüngliche Kontonummer kürzer als zehn Stellen (beispielsweise 6- oder 7-stellig), wird sie von links mit führenden Nullen auf exakt 10 Ziffern aufgefüllt.',
    },
    {
      id: 'berechnung-der-pruefziffer-nach-iso-7064',
      title: 'Schritt-für-Schritt: Die Berechnung der Prüfziffer (Modulo 97-10)',
      level: 2,
      content:
        'Die beiden Prüfziffern an den Positionen 3 und 4 sind kein Zufallsprodukt, sondern das Ergebnis eines ausgeklügelten Prüfsummenverfahrens nach **ISO 7064 (MOD 97-10)**. Es erkennt 99,9 % aller typischen Eingabefehler wie Zahlendreher, Auslassungen oder Tippfehler.\n\n### Das mathematische Berechnungsverfahren:\nAngenommen, ein Konto bei der Sparkasse KölnBonn hat die Bankleitzahl `37050198` und die 7-stellige Kontonummer `1234567`.\n\n1. **Kontonummer auf 10 Stellen auffüllen**:\nAus `1234567` wird durch Auffüllen mit drei führenden Nullen: `0001234567`.\n2. **BBAN bilden (BLZ + Kontonummer)**:\n`370501980001234567` (18 Stellen).\n3. **Ländercode und vorläufige Prüfziffer \"00\" anhängen**:\nAn das Ende der Zeichenkette wird `DE00` angehängt: `370501980001234567DE00`.\n4. **Buchstaben in Zahlen umwandeln**:\nNach der Norm gilt: A = 10, B = 11, C = 12, D = 13, E = 14 usw.\n`D` wird zu `13`, `E` wird zu `14`. Die Zeichenkette lautet nun:\n`370501980001234567131400`.\n5. **Modulo-97-Division durchführen**:\nDiese 24-stellige Zahl wird durch 97 geteilt und der mathematische Rest ermittelt:\n$$370501980001234567131400 \\pmod{97} = 65$$\n6. **Prüfziffer ermitteln (98 minus Rest)**:\n$$98 - 65 = 33$$\nDie berechnete Prüfziffer lautet somit **33**!\n\nDie vollständige, gültige deutsche IBAN lautet damit: **DE33 3705 0198 0001 2345 67**.\n\nWird diese fertige IBAN nach derselben Methode geprüft (mit 33 statt 00), ergibt die Modulo-Division durch 97 exakt den Rest **1**. Jedes moderne Online-Banking führt diese Prüfung vor dem Absenden einer Überweisung in Millisekunden aus.',
    },
    {
      id: 'sepa-verordnung-und-iban-only',
      title: 'Die SEPA-Verordnung (EU) Nr. 260/2012 und die IBAN-Only-Regel',
      level: 2,
      content:
        'Mit der EU-Verordnung Nr. 260/2012 wurde der bargeldlose Zahlungsverkehr in Europa grundlegend harmonisiert. Seit Februar 2014 für Unternehmen und August 2014 für Verbraucher dürfen in Deutschland keine Überweisungen mehr mit der alten Kombination aus Kontonummer und Bankleitzahl eingereicht werden.\n\nSeit Februar 2016 gilt zudem die sogenannte **„IBAN-Only“-Regelung**: Banken dürfen für Inlandsüberweisungen und grenzüberschreitende SEPA-Zahlungen in Euro innerhalb der EU/EWR-Staaten keinen gesonderten BIC (Business Identifier Code) mehr von ihren Kunden verlangen. Da die Bankleitzahl in den Stellen 5 bis 12 der deutschen IBAN enthalten ist, leiten die IT-Systeme der Banken das empfangende Institut vollautomatisch ab.',
    },
    {
      id: 'bundesbank-pruefziffernmethoden-und-sonderregeln',
      title: 'Bundesbank-Prüfziffermethoden und bankinterne IBAN-Regeln',
      level: 2,
      content:
        'Was viele Bankkunden nicht wissen: Neben der übergeordneten internationalen Modulo-97-Prüfziffer (Stelle 3 und 4 der IBAN) existiert in Deutschland eine zweite, tiefere Prüfebene. Die Deutsche Bundesbank führt in ihrem offiziellen Regelwerk über **140 verschiedene nationale Prüfziffernmethoden** (gekennzeichnet von Methode `00` bis Methode `E5`).\n\n### Nationale Kontonummernprüfung:\nJeder Bankleitzahl in der Bankleitzahlendatei der Deutschen Bundesbank ist eine feste Prüfziffernmethode zugeordnet. Diese Methode legt fest, wie das kontoführende Institut die 10-stellige Kontonummer selbst auf Gültigkeit prüft (beispielsweise über Modulo 10 mit Gewichtung 2-1-2-1 oder Modulo 11). Dadurch wird sichergestellt, dass nicht nur die Zusammensetzung der IBAN rechnerisch stimmt, sondern dass das Konto im internen Kernbankensystem des Instituts überhaupt nach dessen Vergabekriterien existieren kann.\n\n### Die offiziellen IBAN-Regeln der Deutschen Bundesbank:\nIn den meisten Fällen entspricht der 18-stellige BBAN-Teil (Basic Bank Account Number) der deutschen IBAN einfach der 8-stelligen BLZ gefolgt von der 10-stelligen, links mit Nullen aufgefüllten Kontonummer. Es gibt jedoch bedeutsame Ausnahmen:\n- **Fusionierte Kreditinstitute**: Wenn zwei Sparkassen oder Genossenschaftsbanken fusionieren, behalten Kunden oft jahrzehntelang ihre gewohnte Kontonummer. Zur Vermeidung von Doppelbelegungen ordnet die Bundesbank über spezielle IBAN-Regeln (wie Regel 001 bis Regel 068) an, dass für die IBAN-Bildung eine abweichende Sammel-BLZ herangezogen wird oder Kontonummern um bestimmte Ziffernpräfixe verschoben werden.\n- **Unterkonten und Sparbücher**: Bei bestimmten Spezialkonten weicht die externe IBAN-Kontonummer von der auf dem Sparbuch eingedruckten internen Kundenstammnummer ab.\n\nAus diesem Grund weist die Deutsche Bundesbank verbindlich darauf hin: Die von der Bank auf dem Kontoauszug oder im Online-Portal ausgegebene IBAN ist stets rechtlich maßgeblich.',
    },
    {
      id: 'sepa-lastschrift-und-glaeubiger-id',
      title: 'Die Rolle der IBAN im SEPA-Lastschriftverfahren (Core & B2B)',
      level: 2,
      content:
        'Neben der klassischen Gutschrift (Überweisung) ist die deutsche IBAN der Dreh- und Angelpunkt für den automatisierten Einzug von Forderungen im Rahmen des SEPA-Lastschriftverfahrens (*SEPA Direct Debit*):\n\n- **Basislastschrift (SEPA Core Direct Debit)**: Wird von Telekommunikationsanbietern, Stromversorgern, Fitnessstudios und Vermietern genutzt. Verbraucher genießen hierbei einen gesetzlichen Schutz: Sie können jeder Lastschriftbuchung innerhalb von **8 Wochen** ohne Angabe von Gründen widersprechen und erhalten den Betrag von ihrer Bank gutgeschrieben. Bei einer unberechtigten Abbuchung ohne gültiges Mandat verlängert sich diese Frist sogar auf **13 Monate**.\n- **Firmenlastschrift (SEPA B2B Direct Debit)**: Ausschließlich für den Geschäftsverkehr zwischen Unternehmen vorgesehen. Hierbei verzichtet der Zahlungspflichtige auf das 8-wöchige Rückgaberecht, wodurch Unternehmen maximale Planungssicherheit bei Großtransaktionen erhalten.\n- **Die Gläubiger-Identifikationsnummer (Creditor ID)**: Jedes Unternehmen, das in Deutschland Lastschriften einziehen möchte, benötigt eine offizielle Gläubiger-ID von der Deutschen Bundesbank (z. B. `DE98ZZZ09999999999`). Diese Kennung wird zusammen mit der Mandatsreferenz und der IBAN des Zahlungspflichtigen an das Interbanken-Clearingnetzwerk übermittelt.',
    },
    {
      id: 'haeufige-fehler-bei-der-iban-eingabe',
      title: 'Häufige Eingabefehler und wie die IBAN Fehlbuchungen verhindert',
      level: 2,
      content:
        'Im Alltag passieren bei der manuellen Eingabe einer 22-stelligen Zeichenkette schnell Fehler. Zu den häufigsten Fehlerquellen gehören:\n\n- **Fehlende führende Nullen**: Kontonummern, die früher nur 6- oder 8-stellig waren, müssen zwingend auf 10 Stellen aufgefüllt werden. Werden die Nullen weggelassen, hat die IBAN nur 18 oder 20 Stellen und wird sofort als ungültig abgewiesen.\n- **Zahlendreher**: Zwei benachbarte Ziffern werden vertauscht (z. B. `37` statt `73`). Da die Modulo-97-Prüfung auf Positionsgewichten beruht, ändert ein Zahlendreher den mathematischen Rest fast immer drastisch, sodass die Überweisung blockiert wird.\n- **Verwechslung von O und 0**: Die Ziffer Null (`0`) wird mit dem Großbuchstaben `O` verwechselt. Deutsche IBANs enthalten ab Stelle 3 ausschließlich Ziffern; Buchstaben sind nur an den ersten beiden Stellen (`DE`) zulässig.\n- **Unterschied zwischen Papier- und Online-Format**: Auf Rechnungen und Formularen wird die IBAN zur besseren Lesbarkeit in Viererblöcken mit Leerzeichen gedruckt (`DE89 3704 0044 0532 0130 00`). Im Online-Banking oder bei Banking-Schnittstellen (HBCI/FinTS) wird die IBAN jedoch als fortlaufende, 22-stellige Zeichenkette ohne Leerzeichen verarbeitet.',
    },
    {
      id: 'wo-finde-ich-meine-iban',
      title: 'Wo steht die eigene IBAN? Karte, Kontoauszug und App',
      level: 2,
      content:
        'Ihre eigene IBAN finden Sie an mehreren vertrauten Stellen:\n- **Auf der Rückseite der Bankkarte (Girocard / Sparkassen-Card)**: Direkt unter dem Magnetstreifen oder neben dem Unterschriftsfeld ist die 22-stellige IBAN gut lesbar aufgedruckt.\n- **Im Online-Banking und in der Banking-App**: Unter Kontodetails, Kontoinformationen oder in den Kontoeinstellungen steht Ihre vollständige IBAN inklusive praktischer Kopierfunktion.\n- **Auf dem Kontoauszug**: Jeder monatliche oder quartalsweise Kontoauszug Ihrer Bank weist oben im Adress- und Infoblock die IBAN und den BIC Ihres Kontos aus.',
    },
  ],
  faqs: [
    {
      q: 'Wie viele Stellen hat eine deutsche IBAN?',
      a: 'Eine deutsche IBAN hat immer exakt 22 alphanumerische Stellen. Sie beginnt immer mit dem Länderkürzel DE, gefolgt von zwei Prüfziffern, der 8-stelligen Bankleitzahl und der 10-stelligen Kontonummer.',
    },
    {
      q: 'Kann eine deutsche IBAN Buchstaben enthalten?',
      a: 'In Deutschland sind Buchstaben ausschließlich an den ersten beiden Stellen für den Ländercode (DE) erlaubt. Die restlichen 20 Stellen (Prüfziffern, BLZ und Kontonummer) bestehen aus reinen Ziffern von 0 bis 9.',
    },
    {
      q: 'Was passiert, wenn die Kontonummer weniger als 10 Stellen hat?',
      a: 'Kürzere Kontonummern werden von links mit führenden Nullen auf genau 10 Stellen aufgefüllt. Eine 7-stellige Kontonummer wie 1234567 wird in der IBAN zu 0001234567.',
    },
    {
      q: 'Wozu dient die zweistellige Prüfziffer an dritter und vierter Stelle?',
      a: 'Die Prüfziffer dient dem Schutz vor Tippfehlern und Zahlendrehern. Sie wird nach dem Modulo-97-Algorithmus berechnet und verhindert, dass Geld versehentlich an ein falsches Konto überwiesen wird.',
    },
    {
      q: 'Braucht man für Überweisungen in Deutschland noch den BIC?',
      a: 'Nein. Seit 2016 gilt im gesamten SEPA-Raum die „IBAN-Only“-Regel. Für Überweisungen in Euro innerhalb Deutschlands und der EU genügt die Angabe der IBAN.',
    },
    {
      q: 'Wo finde ich meine IBAN auf der Sparkassen- oder Bankkarte?',
      a: 'Auf fast allen deutschen Debitkarten (Girocard) ist die 22-stellige IBAN auf der Kartenrückseite unterhalb des Unterschriftsfeldes eingedruckt.',
    },
    {
      q: 'Kann man aus BLZ und Kontonummer die deutsche IBAN selbst bilden?',
      a: 'Ja, die Bestandteile sind die 8-stellige BLZ und die 10-stellige Kontonummer. Zur Bestimmung der 2 Prüfziffern ist jedoch das Modulo-97-Verfahren erforderlich, das von automatischen IBAN-Rechnern sekundenschnell gelöst wird.',
    },
    {
      q: 'Kann jemand mit meiner IBAN Geld von meinem Konto abbuchen?',
      a: 'Überweisungen kann niemand mit einer fremden IBAN ausführen. Bei unberechtigten SEPA-Lastschriften haben Verbraucher ein 8-wöchiges bedingungsloses Rückbuchungsrecht (bei Betrug bis zu 13 Monate) über die eigene Bank.',
    },
  ],
  sources: [
    {
      label: 'Deutsche Bundesbank: Die Bankleitzahl und der IBAN-Standard',
      url: 'https://www.bundesbank.de/de/aufgaben/unbarer-zahlungsverkehr/serviceangebot/bankleitzahlen',
    },
    {
      label: 'Die Deutsche Kreditwirtschaft (DK): SEPA-Verfahrensregeln',
      url: 'https://die-dk.de',
    },
    {
      label: 'Europäische Zentralbank (EZB): Der einheitliche Euro-Zahlungsverkehrsraum (SEPA)',
      url: 'https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.de.html',
    },
    {
      label: 'Verordnung (EU) Nr. 260/2012 zur Festlegung der Vorschriften für SEPA-Überweisungen',
      url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32012R0260',
    },
  ],
  cta: {
    title: 'Deutsche IBAN aus BLZ und Kontonummer berechnen',
    description:
      'Geben Sie Ihre 8-stellige Bankleitzahl und Kontonummer ein, um die offizielle 22-stellige IBAN und den Bundesbank-geprüften BIC zu generieren.',
    buttonText: 'Zum deutschen IBAN-Rechner',
    buttonHref: '/de/iban-rechner/',
    badge: 'Bundesbank-Validiert',
  },
  relatedTools: [
    {
      title: 'Deutscher IBAN Rechner (BLZ & Kontonummer)',
      slug: 'de/iban-rechner',
      description: 'Generieren Sie fehlerfreie deutsche IBANs mit offizieller Bankleitzahlenprüfung.',
      category: 'Banken & Konten',
    },
    {
      title: 'IBAN Prüfer & Kontovalidierung',
      slug: 'de/iban-pruefen',
      description: 'Prüfen Sie beliebige deutsche und internationale IBANs auf Gültigkeit und Prüfziffern.',
      category: 'Banken & Konten',
    },
    {
      title: 'Bundesbank BLZ-Suche & Bankenverzeichnis',
      slug: 'de/blz-suche',
      description: 'Finden Sie Bankleitzahlen, BIC-Codes und Standorte aller deutscher Kreditinstitute.',
      category: 'Banken & Konten',
    },
  ],
  relatedGuides: [
    {
      title: 'Ratgeber: BLZ und BIC – Bedeutung & Unterschiede',
      slug: 'de/ratgeber/blz-und-bic',
      description: 'Wie Bankleitzahlen aufgebaut sind und welche Funktion der BIC im Zahlungsverkehr erfüllt.',
      category: 'Banken-Ratgeber',
    },
    {
      title: 'Anleitung: Wo finde ich meine IBAN?',
      slug: 'guides/how-to-find-your-iban',
      description: 'Schritt-für-Schritt-Anleitung für Girokarten, Kontoauszüge und Banking-Apps in Europa.',
      category: 'Banken-Ratgeber',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Dieser Ratgeber dient der allgemeinen Information über den Zahlungsverkehr. Bei konto- oder bankenspezifischen Fragestellungen wenden Sie sich bitte an Ihr kontoführendes Kreditinstitut.',
};
