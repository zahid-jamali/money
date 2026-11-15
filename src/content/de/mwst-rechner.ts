import { PageContent } from '../types';

export const mwstRechnerDe: PageContent = {
  metaTitle: 'MwSt Rechner Deutschland 2026 | 19% & 7% berechnen',
  metaDescription:
    'Mehrwertsteuer schnell und präzise berechnen. 19% Regelsteuersatz oder 7% ermäßigt hinzufügen oder herausrechnen nach § 12 UStG.',
  h1: 'Mehrwertsteuerrechner Deutschland 2026 (19% & 7%)',
  quickAnswer:
    'Um 19 % Mehrwertsteuer zu einem Nettobetrag hinzuzurechnen, multiplizieren Sie den Nettopreis mit 1,19 (oder mit 0,19 für die reine Steuer). Um 19 % MwSt. aus einem Bruttobetrag herauszurechnen, teilen Sie den Bruttobetrag durch 1,19, um den Nettopreis zu erhalten, oder multiplizieren Sie den Bruttobetrag mit ca. 0,15966 (19/119).',
  howItWorks: [
    {
      label: 'MwSt. hinzurechnen (19% Regelsteuersatz)',
      formula: 'Brutto = Netto × 1,19 (MwSt. = Netto × 0,19)',
      ruleCitation: 'Umsatzsteuergesetz (UStG) § 12 Abs. 1',
      effectiveDate: 'Gültig seit 1. Januar 2007 bis 2026',
    },
    {
      label: 'MwSt. herausrechnen (19% Regelsteuersatz)',
      formula: 'Netto = Brutto ÷ 1,19 (MwSt. = Brutto - Netto)',
      ruleCitation: 'Umsatzsteuergesetz (UStG) § 14 Ausstellung von Rechnungen',
      effectiveDate: 'Gültig seit 1. Januar 2007 bis 2026',
    },
    {
      label: 'MwSt. hinzurechnen (7% ermäßigter Steuersatz)',
      formula: 'Brutto = Netto × 1,07 (MwSt. = Netto × 0,07)',
      ruleCitation: 'Umsatzsteuergesetz (UStG) § 12 Abs. 2',
      effectiveDate: 'Gültig seit 1. Juli 1983 bis 2026',
    },
    {
      label: 'MwSt. herausrechnen (7% ermäßigter Steuersatz)',
      formula: 'Netto = Brutto ÷ 1,07 (MwSt. = Brutto - Netto)',
      ruleCitation: 'Umsatzsteuergesetz (UStG) § 12 Abs. 2',
      effectiveDate: 'Gültig seit 1. Juli 1983 bis 2026',
    },
  ],
  articleSections: [
    {
      id: 'grundlagen-der-umsatzsteuer',
      title: 'Funktionsweise der Umsatzsteuer und Mehrwertsteuer in Deutschland',
      level: 2,
      content:
        'Die Begriffe Mehrwertsteuer (MwSt.) und Umsatzsteuer (USt.) werden im Alltag synonym verwendet. Gesetzlich spricht das deutsche Steuerrecht stets von der Umsatzsteuer, während auf Rechnungen und Quittungen meist Mehrwertsteuer steht. Es handelt sich um eine sogenannte indirekte Steuer bzw. Endverbrauchersteuer: Unternehmen schlagen die Steuer auf ihre Nettoverkaufspreise auf, nehmen diese treuhänderisch für das Finanzamt ein und führen sie im Rahmen der monatlichen oder quartalsweisen Umsatzsteuervoranmeldung ab. Vorsteuerabzugsberechtigte Unternehmer können die ihnen von anderen Betrieben in Rechnung gestellte Umsatzsteuer als Vorsteuer gegenrechnen.',
    },
    {
      id: 'steuersaetze-in-deutschland',
      title: 'Die aktuellen Steuersätze nach § 12 UStG',
      level: 2,
      content:
        'Das deutsche Umsatzsteuergesetz unterscheidet im Wesentlichen zwei Steuersätze sowie die vollständige Steuerbefreiung:\n\n- **Regelsteuersatz (19 %)**: Gilt für den Großteil aller Waren, Elektronikartikel, Kraftstoffe, Möbel, Bekleidung und gewerblichen Dienstleistungen.\n- **Ermäßigter Steuersatz (7 %)**: Begünstigt lebensnotwendige Grundbedürfnisse und Kulturgüter nach Anlage 2 des UStG. Hierzu zählen fast alle Grundnahrungsmittel (z. B. Milch, Fleisch, Gemüse, Backwaren), Bücher, Zeitungen, Zeitschriften, Kunstgegenstände sowie Personennahverkehrsfahrten (unter 50 km) und der Fernverkehr der Bahn.\n- **Steuerbefreiungen (0 % bzw. echt/unecht befreit)**: Bestimmte Umsätze wie medizinische Heilbehandlungen durch Ärzte, Vermietung von Wohnraum oder Finanzdienstleistungen nach § 4 UStG sind grundsätzlich von der Umsatzsteuer befreit.',
    },
    {
      id: 'rechenformeln-im-detail',
      title: 'Mathematische Rechenwege: Netto zu Brutto und Brutto zu Netto',
      level: 2,
      content:
        'Ein häufiger Fehler im kaufmännischen Alltag entsteht durch das einfache Abziehen von 19 % von einem Bruttobetrag. Wer von einem Bruttobetrag von 119,00 € einfach 19 % subtrahiert (was 22,61 € entspräche), erhält fälschlicherweise 96,39 € statt des korrekten Nettobetrags von 100,00 €.\n\nDer korrekte mathematische Teiler für den 19%-Satz lautet **1,19**:\n- **Netto zu Brutto**: Netto × 1,19 = Brutto. (MwSt.-Betrag = Netto × 0,19)\n- **Brutto zu Netto**: Brutto ÷ 1,19 = Netto. (MwSt.-Betrag = Brutto - Netto oder Brutto × (19 / 119))\n\nFür den ermäßigten Satz von 7 % lautet der entsprechende Faktor **1,07**:\n- **Netto zu Brutto**: Netto × 1,07 = Brutto. (MwSt.-Betrag = Netto × 0,07)\n- **Brutto zu Netto**: Brutto ÷ 1,07 = Netto. (MwSt.-Betrag = Brutto - Netto oder Brutto × (7 / 107))',
    },
    {
      id: 'kleinunternehmerregelung',
      title: 'Besonderheiten bei der Kleinunternehmerregelung (§ 19 UStG)',
      level: 2,
      content:
        'Selbstständige und Gründer, deren Gesamtumsatz im vorangegangenen Kalenderjahr 25.000 € (bzw. nach früherer Rechtslage 22.000 €) nicht überstiegen hat und im laufenden Jahr 100.000 € voraussichtlich nicht übersteigen wird, können die Kleinunternehmerregelung nach § 19 UStG in Anspruch nehmen. In diesem Fall wird auf Rechnungen keine Umsatzsteuer ausgewiesen und berechnet, allerdings entfällt zeitgleich auch die Möglichkeit des Vorsteuerabzugs.',
    },
    {
      id: 'tipps-fuer-ordnungsgemaesse-rechnungen',
      title: 'Pflichtangaben und Rechnungsprüfung nach § 14 UStG',
      level: 2,
      content:
        'Damit der Vorsteuerabzug vom Finanzamt bei einer Betriebsprüfung anerkannt wird, muss jede Eingangsrechnung einer sorgfältigen Rechnungsprüfung unterzogen werden. Nach § 14 Abs. 4 i. V. m. § 14a UStG muss eine ordnungsgemäße Rechnung ab einem Gesamtbetrag von 250 € folgende Pflichtangaben lückenlos enthalten:\n\n1. **Vollständiger Name und Anschrift** des leistenden Unternehmers sowie des Leistungsempfängers;\n2. **Steuernummer oder Umsatzsteuer-Identifikationsnummer (USt-IdNr.)** des leistenden Unternehmers;\n3. **Ausstellungsdatum** der Rechnung (Rechnungsdatum);\n4. **Fortlaufende Rechnungsnummer** mit einer oder mehreren Zahlen- oder Buchstabenreihen, die zur Identifizierung einmalig vergeben wird;\n5. **Menge und handelsübliche Bezeichnung** der gelieferten Gegenstände oder Art und Umfang der sonstigen Leistung;\n6. **Zeitpunkt der Lieferung oder Leistung** bzw. Vereinnahmung des Entgelts bei Anzahlungen;\n7. **Nach Steuersätzen aufgeschlüsseltes Nettoentgelt** sowie im Voraus vereinbarte Minderungen des Entgelts (Skonti, Rabatte);\n8. **Anzuwendender Steuersatz (19 %, 7 % oder Hinweis auf Steuerbefreiung)**;\n9. **Gesondert ausgewiesener Steuerbetrag** in Euro;\n10. **Hinweis auf Aufbewahrungspflicht** bei Privatpersonen oder bei Werklieferungen (§ 14 Abs. 4 Nr. 9 UStG).\n\nFehlt auch nur eines dieser Pflichtmerkmale, verweigert das Finanzamt den Vorsteuerabzug rückwirkend für den betreffenden Besteuerungszeitraum. Dies führt zu Steuernachzahlungen und Nachzahlungszinsen (§ 233a AO). Zudem droht bei unberechtigtem oder überhöhtem Steuerausweis eine Steuerschuldnerschaft nach § 14c UStG.',
    },
    {
      id: 'e-rechnung-und-kleinbetragsrechnung',
      title: 'E-Rechnungspflicht (B2B) und Kleinbetragsrechnungen (§ 33 UStDV)',
      level: 2,
      content:
        'Seit dem Inkrafttreten des Wachstumschancengesetzes gilt in Deutschland eine stufenweise Einführung der E-Rechnungspflicht für inländische B2B-Umsätze. Reine PDF-Rechnungen genügen künftig nicht mehr der Definition einer elektronischen Rechnung; gefordert ist ein strukturiertes elektronisches Format nach der europäischen Norm EN 16931 (wie XRechnung oder ZUGFeRD ab Profil Comfort).\n\nFür Beträge bis zu einem Gesamtbruttobetrag von **250 €** (Kleinbetragsrechnung nach § 33 UStDV) gelten vereinfachte Anforderungen. Hier genügen:\n- Name und Anschrift des leistenden Unternehmers,\n- Ausstellungsdatum,\n- Menge und Art der gelieferten Gegenstände oder Leistung,\n- Gesamtbruttobetrag in einer Summe sowie der anzuwendende Steuersatz oder Hinweis auf Steuerbefreiung.\nDie Angabe des Leistungsempfängers, einer Steuernummer und einer fortlaufenden Rechnungsnummer ist bei Kleinbeträgen bis 250 € gesetzlich nicht erforderlich.',
    },
    {
      id: 'reverse-charge-nach-paragraf-13b',
      title: 'Umkehr der Steuerschuldnerschaft (Reverse-Charge nach § 13b UStG)',
      level: 2,
      content:
        'In bestimmten gesetzlich geregelten Branchen greift in Deutschland die Umkehr der Steuerschuldnerschaft nach § 13b UStG. In diesen Fällen schuldet nicht der leistende Unternehmer, sondern der unternehmerische Leistungsempfänger die Umsatzsteuer an das Finanzamt.\n\nTypische Anwendungsbereiche von § 13b UStG sind:\n- **Bauleistungen**: Werklieferungen und sonstige Leistungen, die der Herstellung, Instandsetzung, Instandhaltung, Änderung oder Beseitigung von Bauwerken dienen, sofern der Leistungsempfänger selbst nachhaltig Bauleistungen erbringt (Nachweis durch Freistellungsbescheinigung nach § 48b EStG bzw. USt 1 TG);\n- **Gebäudereinigung**: Wenn der Auftraggeber selbst entsprechende Reinigungsleistungen nachhaltig erbringt;\n- **Lieferung von Schrott, Altmetallen und Abfallstoffen**;\n- **Lieferungen von Mobilfunkgeräten und Tablet-Computern** ab einem Rechnungsbetrag von 5.000 €;\n- **Leistungen ausländischer Unternehmer** an inländische Unternehmer.\n\nDer Rechnungssteller weist in diesen Fällen ausschließlich den Nettobetrag aus und vermerkt zwingend: *„Steuerschuldnerschaft des Leistungsempfängers (§ 13b UStG)“*. Der Leistungsempfänger berechnet die Steuer selbst und zieht sie zeitgleich als Vorsteuer ab, sodass die Transaktion liquiditätsneutral bleibt.',
    },
    {
      id: 'dauerfristverlaengerung-und-voranmeldung',
      title: 'Umsatzsteuervoranmeldung, Fristen und Dauerfristverlängerung',
      level: 2,
      content:
        'Unternehmer müssen ihre Umsatzsteuervoranmeldungen auf elektronischem Weg via ELSTER an das Finanzamt übermitteln. Der Voranmeldungszeitraum richtet sich nach der Zahllast des vorangegangenen Kalenderjahres:\n- **Monatlich**: Betrug die Steuer im Vorjahr mehr als 7.500 €;\n- **Vierteljährlich**: Betrug die Steuer im Vorjahr zwischen 1.000 € und 7.500 €;\n- **Befreiung von der Voranmeldung**: Betrug die Zahllast weniger als 1.000 €, kann das Finanzamt den Unternehmer von der Pflicht zur Abgabe befreien.\n\nDie Voranmeldung ist jeweils bis zum 10. Tag nach Ablauf des Voranmeldungszeitraums fällig. Unternehmer können jedoch beim Finanzamt eine **Dauerfristverlängerung (§ 46 UStDV)** um einen Monat beantragen. Bei monatlicher Abgabe ist hierfür eine Sondervorauszahlung in Höhe von einem Elftel der Vorjahressumme zu leisten, die im Dezember mit der Jahressteuer verrechnet wird.',
    },
  ],
  examples: [
    {
      title: 'Beispiel 1: 19 % MwSt. auf Handwerkerrechnung aufschlagen',
      scenario:
        'Ein Elektriker stellt für Material und Montageleistungen 850,00 € netto in Rechnung. Es gilt der Regelsteuersatz von 19 %.',
      calculationType: 'add',
      inputAmount: 850.0,
      rate: 19,
      resultVat: 161.5,
      resultTotal: 1011.5,
      explanation:
        'Der Elektriker rechnet: 850,00 € × 0,19 = 161,50 € Mehrwertsteuer. Der Bruttorechnungsbetrag beläuft sich auf 1.011,50 € (850,00 € + 161,50 €).',
    },
    {
      title: 'Beispiel 2: 7 % Vorsteuer aus einer Fachbuch-Quittung herausrechnen',
      scenario:
        'Eine Kanzlei erwirbt steuerrechtliche Fachliteratur für 53,50 € brutto im Buchhandel und möchte den Vorsteuerbetrag buchen.',
      calculationType: 'remove',
      inputAmount: 53.5,
      rate: 7,
      resultVat: 3.5,
      resultTotal: 50.0,
      explanation:
        'Die Buchhaltung teilt den Bruttobetrag von 53,50 € durch 1,07. Dies ergibt einen Nettopreis von 50,00 €. Die abziehbare Vorsteuer beträgt 3,50 € (53,50 € - 50,00 €).',
    },
  ],
  faqs: [
    {
      q: 'Wie hoch ist die Mehrwertsteuer in Deutschland 2026?',
      a: 'Der reguläre Mehrwertsteuersatz beträgt 19 % (§ 12 Abs. 1 UStG). Der ermäßigte Steuersatz für Lebensmittel, Bücher und ÖPNV beträgt 7 % (§ 12 Abs. 2 UStG).',
    },
    {
      q: 'Wie zieht man 19 % Mehrwertsteuer vom Bruttobetrag ab?',
      a: 'Teilen Sie den Bruttobetrag durch 1,19. Das Ergebnis ist der Nettobetrag. Ziehen Sie den Nettobetrag vom Bruttobetrag ab, um den reinen MwSt.-Betrag zu ermitteln.',
    },
    {
      q: 'Welche Waren unterliegen dem ermäßigten Satz von 7 %?',
      a: 'Zum ermäßigten Satz gehören vor allem Grundnahrungsmittel, Bücher, Zeitschriften, Zeitungen, Nahverkehrstickets sowie Bahnfahrten im Fernverkehr.',
    },
    {
      q: 'Gilt die Mehrwertsteuer auch für Kleinunternehmer?',
      a: 'Kleinunternehmer nach § 19 UStG weisen keine Mehrwertsteuer auf ihren Rechnungen aus und führen keine ab, können dafür aber auch keine Vorsteuer geltend machen.',
    },
    {
      q: 'Was ist der Unterschied zwischen Vorsteuer und Umsatzsteuer?',
      a: 'Umsatzsteuer ist die Steuer, die Sie Kunden auf Verkäufe berechnen. Vorsteuer ist die Umsatzsteuer, die Ihnen andere Unternehmen auf betriebliche Einkäufe in Rechnung stellen.',
    },
    {
      q: 'Bis zu welchem Betrag gilt eine Kleinbetragsrechnung?',
      a: 'Rechnungen bis zu einem Gesamtbetrag von 250 € brutto gelten nach § 33 UStDV als Kleinbetragsrechnungen und erfordern weniger Pflichtangaben.',
    },
    {
      q: 'Werden Speisen im Restaurant mit 19 % oder 7 % besteuert?',
      a: 'Speisen zum Verzehr an Ort und Stelle in Gaststätten unterliegen regulär 19 % MwSt., während Speisen zum Mitnehmen (Take-away) mit 7 % besteuert werden.',
    },
    {
      q: 'Wie berechnet man den Mehrwertsteuer-Faktor für 19 %?',
      a: 'Um die enthaltene Steuer direkt zu berechnen, multiplizieren Sie den Bruttobetrag mit 19 / 119 (ca. 0,159664).',
    },
  ],
  sources: [
    {
      label: 'Gesetze im Internet: Umsatzsteuergesetz (UStG) § 12 Steuersätze',
      url: 'https://www.gesetze-im-internet.de/ustg_1980/__12.html',
    },
    {
      label: 'Bundesministerium der Finanzen (BMF): Umsatzsteuer-Leitfaden',
      url: 'https://www.bundesfinanzministerium.de',
    },
    {
      label: 'Umsatzsteuer-Durchführungsverordnung (UStDV)',
      url: 'https://www.gesetze-im-internet.de/ustdv_1980/',
    },
  ],
  relatedTools: [
    {
      title: 'IBAN Prüfer & BIC Generator',
      slug: 'de/iban-pruefen',
      description:
        'Deutsche und europäische IBAN auf Gültigkeit und Prüfziffer nach MOD-97 prüfen.',
      category: 'Banken & Konten',
    },
  ],
  relatedGuides: [
    {
      title: 'Ratgeber: IBAN Aufbau und Prüfziffer erklärt',
      slug: 'de/ratgeber/iban-aufbau',
      description:
        'Wie setzt sich die deutsche IBAN zusammen und wie schützt der Prüfziffern-Algorithmus vor Fehlüberweisungen?',
      category: 'Banken & Finanzen',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Dieser Rechner dient der allgemeinen Information und ersetzt keine steuerliche Beratung durch einen Steuerberater oder Wirtschaftsprüfer.',
};
