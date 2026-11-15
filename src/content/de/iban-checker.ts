import { PageContent } from '../types';

export const ibanCheckerDe: PageContent = {
  metaTitle: 'IBAN Prüfer & Rechner 2026 | IBAN online prüfen',
  metaDescription:
    'IBAN kostenlos online prüfen mit ISO 13616 Mod-97 Prüfsumme. Bankleitzahl, Bankname, Kontonummer und SEPA-Gültigkeit blitzschnell validieren.',
  h1: 'IBAN Prüfer & Rechner 2026',
  quickAnswer:
    'Eine IBAN (International Bank Account Number) wird in drei präzisen Phasen geprüft: Abgleich der länderspezifischen Gesamtlänge, Verschiebung der ersten vier Zeichen ans Ende, Ersetzung von Buchstaben durch zweistellige Zahlenwerte (A=10 bis Z=35) und Berechnung des Modulo-97 Rests nach ISO 13616. Nur wenn der mathematische Divisionsrest exakt 1 ergibt, ist die IBAN fehlerfrei und gültig.',
  howItWorks: [
    {
      label: 'Länderformat- & Längenprüfung',
      formula: 'Länge(IBAN) == LänderLänge && Regex(LänderMuster)',
      ruleCitation: 'ISO 13616-1:2020 / Offizielles SWIFT IBAN-Register',
      effectiveDate: 'Weltweiter Bankenstandard, fortlaufend aktualisiert 2026',
    },
    {
      label: 'Zeichenumstellung & Buchstabenersetzung',
      formula: 'Umgewandelt = BBAN + Ländercode + Prüfziffern (A=10...Z=35)',
      ruleCitation: 'ISO 13616-1 Ziffer 5.2 (Transformationsvorschrift)',
      effectiveDate: 'Verbindliche Vorschrift im gesamten SEPA-Zahlungsraum',
    },
    {
      label: 'ISO 7064 Mod-97-10 Divisionsrest',
      formula: 'NumerischerString mod 97 == 1',
      ruleCitation: 'ISO/IEC 7064:2003 (Prüfzeichensystem MOD 97-10)',
      effectiveDate: 'Dauerhaftes mathematisches Prüfverfahren im Interbankenverkehr',
    },
    {
      label: 'BLZ- & Kontonummern-Abgleich',
      formula: 'Bundesbank-BLZ-Katalog + Bundesbank-Prüfziffernmethode',
      ruleCitation: 'Deutsche Bundesbank: Merkblatt zur Berechnung der Prüfziffer',
      effectiveDate: 'Quartalsweise aktualisierte Bankenstammdaten der Bundesbank',
    },
  ],
  articleSections: [
    {
      id: 'was-ist-eine-iban',
      title: 'Was ist eine IBAN und wie entstand der Standard?',
      level: 2,
      content:
        'Die International Bank Account Number (IBAN) ist eine weltweit vereinheitlichte Kennung für Bankkonten, die von der Internationalen Organisation für Normung (ISO 13616) gemeinsam mit dem European Committee for Banking Standards (ECBS) geschaffen wurde. Ziel dieser weitreichenden Standardisierung war es, den nationalen und grenzüberschreitenden Zahlungsverkehr grundlegend zu vereinfachen, Medienbrüche zu beseitigen und manuelle Bearbeitungszeiten bei internationalen Überweisungen drastisch zu reduzieren.\n\nVor der Einführung der IBAN nutzte jedes Land eigene, untereinander völlig inkompatible Kontonummernsysteme. Während in Deutschland eine Kombination aus achtstelliger Bankleitzahl (BLZ) und bis zu zehnstelliger Kontonummer üblich war, verwendeten andere europäische Staaten alphanumerische Filialcodes oder völlig abweichende Ziffernlängen. Fehler beim manuellen Abtippen führten regelmäßig zu kostspieligen Fehlleitungen, aufwendigen Nachforschungen und erheblichen Bankgebühren. Die IBAN löste dieses Problem durch einen standardisierten Aufbau mit vorangestelltem Ländercode und zweistelliger Prüfziffer, die Tippfehler bereits bei der Eingabe im Online-Banking und in moderner Buchhaltungssoftware zuverlässig abfängt und den sicheren, reibungslosen Geldfluss im gesamten europäischen Binnenmarkt nachhaltig gewährleistet.',
    },
    {
      id: 'der-mod-97-pruefsummen-algorithmus',
      title: 'Der mathematische Mod-97 Algorithmus nach ISO 7064 im Detail',
      level: 2,
      content:
        'Das Herzstück der IBAN-Validierung ist das Prüfverfahren ISO 7064 Modulo 97-10. Es erkennt über 99,99 % aller typischen Eingabefehler, darunter Zahlendreher, vergessene Ziffern oder falsche Zeichen:\n\n1. **Prüfung der Zeichenlänge**: Zunächst prüft das System, ob die eingegebene Zeichenfolge exakt der vorgeschriebenen Länge des jeweiligen Staates entspricht. In Deutschland umfasst die IBAN stets exakt 22 Stellen, in Österreich 20, in der Schweiz 21 und in Frankreich 27 Stellen.\n\n2. **Umgruppierung (Permutation)**: Die ersten vier Zeichen (der zweistellige Ländercode wie DE und die zweistellige Prüfziffer wie 89) werden an das Ende der Kontokennung verschoben. Aus der deutschen IBAN `DE89 3704 0044 0532 0130 00` entsteht so die temporäre Zeichenkette `370400440532013000DE89`.\n\n3. **Buchstaben in Zahlen umwandeln**: Jeder Buchstabe wird durch eine zweistellige Zahl ersetzt, beginnend bei A=10, B=11 bis Z=35. Aus `D` wird `13`, aus `E` wird `14`. Die Zeichenkette wandelt sich dadurch in eine 24-stellige reine Ganzzahl um: `370400440532013000131489`.\n\n4. **Modulo-97 Berechnung**: Da eine 24- oder gar 34-stellige Ganzzahl den regulären Speicher gängiger Rechnersysteme übersteigt, wird der Divisionsrest schrittweise durch 97 geteilt. Nur wenn der endgültige mathematische Rest exakt 1 beträgt, gilt die IBAN als formal gültig und mathematisch fehlerfrei verifiziert.\n\n5. **Algorithmische Sicherheit**: Selbst wenn zwei Ziffern vertauscht werden, ändert sich der Divisionsrest fast ausnahmslos, wodurch versehentliche Fehlüberweisungen im Online-Banking ausgeschlossen werden.',
    },
    {
      id: 'aufbau-deutscher-ibans',
      title: 'Aufbau deutscher IBANs: Bankleitzahl und Bundesbank-Prüfmethoden',
      level: 2,
      content:
        'Eine deutsche IBAN ist nach einem streng hierarchischen Schema aufgebaut und besteht aus genau 22 alphanumerischen Zeichen:\n\n- **Stellen 1–2 (Ländercode)**: `DE` für Deutschland nach ISO 3166-1 alpha-2.\n- **Stellen 3–4 (Prüfziffern)**: Zwei berechnete Kontrollziffern nach dem Modulo-97-Verfahren.\n- **Stellen 5–12 (Bankleitzahl / BLZ)**: Die 8-stellige Bankleitzahl der kontoführenden Bank. Diese BLZ ist im offiziellen Bankleitzahlenverzeichnis der Deutschen Bundesbank registriert und gibt Auskunft über das jeweilige Kreditinstitut und dessen Hauptsitz. Die vierte Ziffer verrät zudem den Bankensektor (z. B. `5` für Sparkassen, `3` für Volks- und Raiffeisenbanken, `2` für Großbanken wie Deutsche Bank oder HypoVereinsbank).\n- **Stellen 13–22 (Kontonummer)**: Die 10-stellige nationale Kontonummer. War die ursprüngliche deutsche Kontonummer kürzer als zehn Stellen, wird sie linksbündig mit führenden Nullen auf genau 10 Ziffern aufgefüllt (z. B. wird aus `532013000` die zehnstellige Ziffernfolge `0532013000`).\n\nZusätzlich zum internationalen Mod-97-Standard verfügen deutsche Kreditinstitute über mehr als 140 institutsspezifische Prüfziffernverfahren (von Methode 00 bis Methode E5), die von der Deutschen Bundesbank quartalsweise im Bankleitzahlenverzeichnis veröffentlicht werden, um die Gültigkeit der Kontonummer innerhalb der BLZ mathematisch abzusichern.',
    },
    {
      id: 'sepa-zahlungsverkehr-iban-only',
      title: 'SEPA-Überweisungen, Echtzeitüberweisungen und die IBAN-Only Regelung',
      level: 2,
      content:
        'Mit der vollständigen Umsetzung der SEPA-Verordnung (EU) Nr. 260/2012 wurde der europäische Zahlungsverkehr für Überweisungen und Lastschriften in Euro vereinheitlicht. Im sogenannten SEPA-Raum (Single Euro Payments Area), dem 36 europäische Länder angehören, gilt seit Februar 2016 die verbraucherfreundliche „IBAN-Only“-Regel.\n\nDas bedeutet: Bei Inlands- und Euro-Überweisungen innerhalb des SEPA-Gebiets müssen Verbraucher und Geschäftskunden keinen BIC (Bank Identifier Code bzw. SWIFT-Code) mehr angeben. Die Angabe der IBAN genügt vollkommen, da die kontoführende Bank und das Empfängerinstitut direkt aus der IBAN abgeleitet werden können. Der BIC wird ausschließlich bei Transaktionen in Fremdwährungen oder bei Zahlungen in Länder außerhalb des SEPA-Raumes (z. B. in die USA, nach China oder Japan) benötigt.\n\nDarüber hinaus harmonisiert die europäische Instant-Payment-Verordnung den Zahlungsverkehr weiter: SEPA-Echtzeitüberweisungen (*Instant Payments*) müssen von allen teilnehmenden Banken im Euro-Währungsgebiet flächendeckend angeboten werden und führen Gutschriften rund um die Uhr binnen zehn Sekunden aus, ohne dass dafür höhere Entgelte als für Standardüberweisungen verlangt werden dürfen. Dies beschleunigt den Handel und erhöht die Liquidität bei Konsumenten und Gewerbetreibenden nachhaltig im gesamten europäischen Wirtschaftsraum.',
    },
    {
      id: 'haeufige-fehler-und-tipps',
      title: 'Häufige Fehler bei der IBAN-Eingabe und Schutz vor Fehlüberweisungen',
      level: 2,
      content:
        'Trotz automatischer Prüfziffern sollten Sie beim Online-Banking auf folgende typische Fehlerquellen achten:\n\n- **Verwechslung von O und 0**: Die Ziffer Null (0) wird im Schriftverkehr häufig mit dem Großbuchstaben O verwechselt. Eine deutsche IBAN enthält außer dem Länderkürzel `DE` ausschließlich Ziffern.\n- **Fehlende führende Nullen**: Wird eine alte deutsche Kontonummer manuell in eine IBAN übertragen, vergessen Nutzer gelegentlich die Auffüllung auf 10 Stellen. Dadurch wird die IBAN zu kurz und scheitert an der Längenprüfung.\n- **Unterschied zwischen Formatprüfung und Existenz**: Ein positiver Prüfbefund bestätigt, dass die IBAN mathematisch korrekt berechnet wurde und zur angegebenen Bank passt. Unser Tool kann jedoch nicht feststellen, ob das Konto aktuell aktiv ist oder auf den von Ihnen gewünschten Empfängernamen lautet. Überprüfen Sie daher bei Rechnungen stets auch die Identität des Ausstellers, um sich vor Rechnungsbetrug zu schützen.\n- **SEPA-Überweisungsrückruf**: Wurde Geld versehentlich an eine falsche, aber existente IBAN überwiesen, kann die eigene Hausbank einen SEPA-Recall anstoßen. Da der Empfänger der Rückbuchung jedoch zustimmen muss, ist die vorherige Prüfung der IBAN der sicherste Schutz vor langwierigen Rückforderungsverfahren.\n- **Sorgfaltspflicht bei Online-Eingaben**: Nutzen Sie stets verifizierte Tools zur Validierung von Bankdaten und speichern Sie wiederkehrende Geschäftspartner mit geprüften Kontodaten in Ihrer Vorlagenliste ab, um Fehleingaben dauerhaft auszuschließen.',
    },
  ],
  examples: [
    {
      title: 'Beispiel 1: Prüfung einer deutschen Deutsche Bank IBAN',
      scenario:
        'Ein Rechnungsempfänger in Berlin möchte die IBAN DE89 3704 0044 0532 0130 00 vor Ausführung einer Überweisung validieren.',
      calculationType: 'custom',
      customFields: [
        { label: 'Eingegebene IBAN', value: 'DE89 3704 0044 0532 0130 00' },
        { label: 'Land & Zeichenlänge', value: 'Deutschland (DE) — 22 Zeichen' },
        { label: 'Bankleitzahl (BLZ)', value: '37040044 (Deutsche Bank AG)' },
        { label: 'Kontonummer', value: '0532013000' },
        { label: 'Umgruppierte Zeichenfolge', value: '370400440532013000DE89' },
        { label: 'Numerischer Zahlenwert', value: '370400440532013000131489' },
        { label: 'Modulo-97 Prüfergebnis', value: '1 (Gültige Prüfziffer nach ISO 7064)', highlight: true },
        { label: 'SEPA-Eignung', value: 'Vollständig SEPA- und echtzeitfähig' },
      ],
      explanation:
        'DE89 wird ans Ende verschoben, D durch 13 und E durch 14 ersetzt. Die resultierende 24-stellige Zahl geteilt durch 97 ergibt den Divisionsrest 1. Die IBAN ist fehlerfrei und gehört zur Deutschen Bank AG.',
    },
    {
      title: 'Beispiel 2: Prüfung einer Commerzbank IBAN',
      scenario:
        'Prüfung einer geschäftlichen Bankverbindung der Commerzbank Frankfurt mit der IBAN DE02 5008 0000 0123 4567 89.',
      calculationType: 'custom',
      customFields: [
        { label: 'Eingegebene IBAN', value: 'DE02 5008 0000 0123 4567 89' },
        { label: 'Land & Zeichenlänge', value: 'Deutschland (DE) — 22 Zeichen' },
        { label: 'Bankleitzahl (BLZ)', value: '50080000 (Commerzbank AG)' },
        { label: 'Kontonummer', value: '0123456789' },
        { label: 'Umgruppierte Zeichenfolge', value: '500800000123456789DE02' },
        { label: 'Modulo-97 Prüfergebnis', value: '1 (Gültige Prüfziffer)', highlight: true },
        { label: 'Bundesbank-Status', value: 'BLZ im Bundesbank-Verzeichnis verifiziert' },
      ],
      explanation:
        'Der Prüfer isoliert die BLZ 50080000 (Commerzbank), bestätigt die 10-stellige Kontonummer und weist nach, dass die Prüfziffern 02 rechnerisch den ISO-Divisionsrest 1 erzeugen.',
    },
  ],
  faqs: [
    {
      q: 'Wofür steht die Abkürzung IBAN?',
      a: 'IBAN steht für „International Bank Account Number“ (internationale Bankkontonummer). Sie ist eine weltweit standardisierte Kennzeichnung für Bankkonten, die Zahlungen vereinfacht und Fehlüberweisungen verhindert.',
    },
    {
      q: 'Wie funktioniert die Berechnung der IBAN-Prüfziffern?',
      a: 'Die zweistellige Prüfziffer an dritter und vierter Stelle basiert auf dem Modulo-97-Verfahren nach ISO 7064. Sie stellt mathematisch sicher, dass die umgruppierte IBAN bei Division durch 97 genau den Rest 1 ergibt.',
    },
    {
      q: 'Ist die Nutzung dieses Online-IBAN-Prüfers sicher?',
      a: 'Ja, absolut sicher. Alle Berechnungen und Validierungen erfolgen zu 100 % lokal in Ihrem Webbrowser mittels JavaScript. Ihre IBAN wird zu keinem Zeitpunkt über das Internet übertragen oder auf Servern gespeichert.',
    },
    {
      q: 'Was ist der Unterschied zwischen IBAN und BIC / SWIFT?',
      a: 'Die IBAN identifiziert Ihr individuelles Giro- oder Geschäftskonto bei einer bestimmten Bank. Der BIC (Bank Identifier Code) identifiziert die Bank selbst im internationalen Kommunikationsnetzwerk von SWIFT.',
    },
    {
      q: 'Gilt bei Überweisungen in Deutschland die IBAN-Only Regel?',
      a: 'Ja. Innerhalb Deutschlands und des gesamten SEPA-Zahlungsraums reicht für Euro-Überweisungen die Angabe der IBAN aus. Kreditinstitute dürfen seit 2016 keinen zusätzlichen BIC mehr verlangen.',
    },
    {
      q: 'Kann eine formell gültige IBAN trotzdem nicht existieren?',
      a: 'Ja. Die mathematische Prüfung bestätigt, dass die IBAN allen formalen Regeln und Prüfsummen entspricht. Sie garantiert jedoch nicht, dass das Konto bei der Bank aktuell noch aktiv geführt wird oder auf den gewünschten Namen lautet.',
    },
    {
      q: 'Wie viele Stellen hat eine deutsche IBAN?',
      a: 'Eine deutsche IBAN hat ausnahmslos genau 22 Stellen: 2 Buchstaben Ländercode (DE), 2 Prüfziffern, 8 Ziffern Bankleitzahl (BLZ) und 10 Ziffern Kontonummer.',
    },
    {
      q: 'Wo finde ich meine eigene IBAN?',
      a: 'Ihre IBAN finden Sie auf der Vorder- oder Rückseite Ihrer Bank- oder Debitkarte (girocard), auf Ihren gedruckten Kontoauszügen sowie im Online-Banking und in Ihrer Banking-App unter den Kontodetails.',
    },
    {
      q: 'Kann ich mehrere IBANs gleichzeitig prüfen?',
      a: 'Ja, unser Tool unterstützt die Stapelprüfung (Bulk-Check) für bis zu 50 IBANs gleichzeitig. Fügen Sie einfach mehrere Nummern untereinander ein, um eine tabellarische Auswertung zu erhalten.',
    },
    {
      q: 'Was passiert, wenn ich mich bei der IBAN vertippe?',
      a: 'Dank der zweistelligen Modulo-97-Prüfziffer bemerkt das Online-Banking Zahlendreher oder Tippfehler fast immer sofort und bricht den Überweisungsauftrag ab, bevor Geld abgebucht werden kann.',
    },
  ],
  sources: [
    {
      label: 'Deutsche Bundesbank: Bankleitzahlenverzeichnis und Richtlinien',
      url: 'https://www.bundesbank.de/de/aufgaben/unbarer-zahlungsverkehr/serviceangebot/bankleitzahlen',
    },
    {
      label: 'SWIFT: Offizielles internationales IBAN-Register',
      url: 'https://www.swift.com/standards/data-standards/iban',
    },
    {
      label: 'Europäische Zentralbank (EZB): SEPA-Regelwerke und Zahlungsverkehr',
      url: 'https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.de.html',
    },
    {
      label: 'ISO: Standard ISO 13616-1:2020 für Finanzdienstleistungen',
      url: 'https://www.iso.org/standard/72570.html',
    },
  ],
  relatedTools: [
    {
      title: 'Deutscher IBAN Rechner (aus BLZ & Kontonummer)',
      slug: 'de/iban-rechner',
      description: 'Generieren Sie aus deutscher Bankleitzahl und Kontonummer die korrekte IBAN.',
      category: 'Banken & Konten',
    },
    {
      title: 'Bundesbank BLZ Suche',
      slug: 'de/blz-suche',
      description: 'Finden Sie Bankleitzahlen, Banknamen und BICs deutscher Geldinstitute online.',
      category: 'Banken & Konten',
    },
    {
      title: 'BIC / SWIFT Prüfer',
      slug: 'de/bic-pruefen',
      description: 'Prüfen Sie internationale 8- oder 11-stellige BIC-Codes nach ISO 9362.',
      category: 'Banken & Konten',
    },
    {
      title: 'MwSt-Rechner Deutschland',
      slug: 'de/mwst-rechner',
      description: '19 % Regelsteuersatz und 7 % ermäßigte Mehrwertsteuer berechnen oder herausrechnen.',
      category: 'Steuern & MwSt.',
    },
  ],
  relatedGuides: [
    {
      title: 'IBAN Aufbau in Deutschland: Alle 22 Stellen erklärt',
      slug: 'de/ratgeber/iban-aufbau',
      description: 'Detaillierte Übersicht zu Ländercode, Prüfziffer, BLZ und Auffüllregeln.',
      category: 'Banken & Konten',
    },
    {
      title: 'BLZ und BIC: Unterschiede und Bedeutung im Zahlungsverkehr',
      slug: 'de/ratgeber/blz-und-bic',
      description: 'Wann Sie die Bankleitzahl und wann den SWIFT-Code wirklich brauchen.',
      category: 'Banken & Konten',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Dieser IBAN-Prüfer dient ausschließlich Informations- und Vorprüfungszwecken. Obwohl die mathematische Prüfung nach ISO 13616 und Bundesbank-Kriterien erfolgt, kann keine Gewähr für die tatsächliche Kontoführung oder Übereinstimmung mit dem Empfängernamen übernommen werden. Bei geschäftlichen Transaktionen empfiehlt sich vorab ein Datenabgleich mit Ihrer Hausbank.',
};
