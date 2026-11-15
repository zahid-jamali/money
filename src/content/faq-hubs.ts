import { SupportedLang } from '@/config/pages';

export interface HubFaqQuestion {
  q: string;
  a: string;
  linkText: string;
  linkHref: string;
}

export interface HubFaqTopic {
  id: string;
  topicTitle: string;
  questions: HubFaqQuestion[];
}

export interface LanguageFaqHub {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  topics: HubFaqTopic[];
}

export const FAQ_HUBS_DATA: Partial<Record<SupportedLang, LanguageFaqHub>> = {
  en: {
    metaTitle: 'Financial FAQ Hub: Banking, VAT, Travel & Energy Questions',
    metaDescription:
      'Answers to 35+ common questions on IBANs, VAT calculations, Schengen 90/180 rules, energy price caps, fuel consumption, and take-home pay.',
    h1: 'Financial Questions & Answers Hub',
    subtitle:
      'Clear, verified answers across international banking, value added tax, European border rules, household energy tariffs, and salary taxation.',
    topics: [
      {
        id: 'banking',
        topicTitle: 'IBAN, SWIFT & International Banking',
        questions: [
          {
            q: 'How does an IBAN check verify that an account number is genuine?',
            a: 'The validation runs an ISO 13616 modulo-97 mathematical algorithm on the country code and check digits. It confirms that the string is free of transcription errors and matches the country’s length and structure.',
            linkText: 'Check an IBAN now',
            linkHref: '/iban-checker/',
          },
          {
            q: 'What is the difference between an IBAN and a BIC/SWIFT code?',
            a: 'An IBAN identifies an individual bank account, whereas a BIC (Business Identifier Code) identifies the specific financial institution and branch. Both are frequently required for cross-border SEPA and wire transfers.',
            linkText: 'Read IBAN vs BIC comparison',
            linkHref: '/guides/iban-vs-swift-bic/',
          },
          {
            q: 'Where can I locate my bank’s official IBAN and BIC on a statement?',
            a: 'Your IBAN is printed on your physical bank card, monthly statement header, or inside your online banking profile under account details. You can also derive it using your branch routing code.',
            linkText: 'How to find your IBAN guide',
            linkHref: '/guides/how-to-find-your-iban/',
          },
          {
            q: 'Is it dangerous if someone knows my IBAN number?',
            a: 'Knowing an IBAN only allows someone to send money to your account, not withdraw funds, unless an unauthorised direct debit mandate is created. Banking regulations require strict authorization for debits.',
            linkText: 'Learn about IBAN security',
            linkHref: '/guides/what-is-an-iban/',
          },
          {
            q: 'Are IBAN check digits universal across all European banks?',
            a: 'Yes, positions 3 and 4 in every IBAN are ISO check digits calculated by moving the country letters to the end and computing remainder modulo 97.',
            linkText: 'Validate any European IBAN',
            linkHref: '/iban-checker/',
          },
          {
            q: 'Can a bank code be looked up without knowing the account number?',
            a: 'Yes. For countries with structured BBANs like Germany or the UK, the bank routing code directly reveals the headquarters and clearing code.',
            linkText: 'Verify SWIFT & BIC formats',
            linkHref: '/bic-swift-checker/',
          },
        ],
      },
      {
        id: 'vat',
        topicTitle: 'Value Added Tax (VAT) & Invoicing',
        questions: [
          {
            q: 'How do I add 20% VAT to a net commercial invoice?',
            a: 'Multiply the net figure by 0.20 to find the VAT amount, or multiply by 1.20 to calculate the gross total payable. In the UK, this is the standard rate applicable to most taxable supplies.',
            linkText: 'Open UK VAT Calculator',
            linkHref: '/vat-calculator/uk/',
          },
          {
            q: 'How do I extract VAT from a gross amount that already includes 20% tax?',
            a: 'Divide the gross total by 1.20 to determine the net price, then subtract the net from the gross to find the exact tax component. Do not simply take 20% off the gross amount.',
            linkText: 'Reverse calculate VAT',
            linkHref: '/vat-calculator/uk/',
          },
          {
            q: 'What items qualify for the UK 5% reduced VAT rate?',
            a: 'The 5% reduced rate applies to domestic residential fuel and power, child car seats, and certain energy-saving renovations. Most standard goods and services remain at 20%.',
            linkText: 'UK VAT Rates & Rules',
            linkHref: '/vat-calculator/uk/',
          },
          {
            q: 'What is the mandatory UK VAT registration threshold?',
            a: 'Businesses must register for VAT if their rolling 12-month taxable turnover exceeds £90,000. Voluntary registration is permitted below this threshold.',
            linkText: 'Read UK VAT guide',
            linkHref: '/vat-calculator/uk/',
          },
          {
            q: 'How do VAT rates differ across European Union member states?',
            a: 'EU member states set their own standard rates between 17% (Luxembourg) and 27% (Hungary). All states adhere to minimum thresholds governed by Directive 2006/112/EC.',
            linkText: 'EU 27 VAT Hub',
            linkHref: '/vat-calculator/',
          },
          {
            q: 'Do cross-border B2B digital sales within the EU carry VAT?',
            a: 'When invoicing a VAT-registered business in another EU state, the reverse-charge mechanism typically applies, shifting the VAT accounting obligation to the purchaser.',
            linkText: 'Explore EU VAT rules',
            linkHref: '/vat-calculator/',
          },
        ],
      },
      {
        id: 'travel',
        topicTitle: 'Schengen 90/180 Rule, ETIAS & European Borders',
        questions: [
          {
            q: 'How does the Schengen 90/180-day rule work in practice?',
            a: 'Non-EU citizens without a residence permit can stay in the Schengen Area for a maximum of 90 days in any 180-day rolling window. Every single day spent in Europe is checked against the prior 179 days.',
            linkText: 'Calculate your Schengen days',
            linkHref: '/schengen-calculator/',
          },
          {
            q: 'Do the entry day and exit day both count towards the 90-day allowance?',
            a: 'Yes. Even spending a single hour in the Schengen Area before midnight on your day of departure counts as one full day of your 90-day allowance.',
            linkText: 'Schengen Rule Explained',
            linkHref: '/guides/schengen-90-180-rule-explained/',
          },
          {
            q: 'What are the legal consequences of overstaying a Schengen visa or allowance?',
            a: 'Overstaying can trigger financial fines, immediate entry bans registered in the Schengen Information System (SIS), and potential deportation at border control.',
            linkText: 'Overstay penalties guide',
            linkHref: '/guides/schengen-overstay-consequences/',
          },
          {
            q: 'Which countries belong to the Schengen Area as of 2026?',
            a: 'There are 29 member countries, including full members Bulgaria and Romania since 1 January 2025. Ireland and Cyprus remain outside the Schengen border-free zone.',
            linkText: 'View Schengen countries list',
            linkHref: '/guides/schengen-countries-list/',
          },
          {
            q: 'What is ETIAS and when does it take effect for travelers?',
            a: 'ETIAS is the European Travel Information and Authorisation System for visa-exempt travelers. It costs €7, remains valid for 3 years, and launch is scheduled for 2027.',
            linkText: 'ETIAS Status & Start Date',
            linkHref: '/etias/',
          },
          {
            q: 'How does the Entry/Exit System (EES) affect border passport stamping?',
            a: 'EES replaces manual ink passport stamps with biometric facial and fingerprint records at external EU border checkpoints, automating overstay tracking.',
            linkText: 'EES Entry/Exit System overview',
            linkHref: '/ees-entry-exit-system/',
          },
        ],
      },
      {
        id: 'energy',
        topicTitle: 'Electricity Costs & Household Appliances',
        questions: [
          {
            q: 'How do you calculate the running cost of an electric appliance?',
            a: 'Divide the appliance’s wattage by 1,000 to convert to kilowatts (kW), multiply by hours of usage, and multiply by your electricity tariff per kWh.',
            linkText: 'UK Electricity Cost Calculator',
            linkHref: '/electricity-cost-calculator/uk/',
          },
          {
            q: 'What is the Ofgem Price Cap and how does it protect households?',
            a: 'Ofgem sets a legal maximum limit on standard variable default energy tariffs that suppliers can charge per kilowatt-hour and as a daily standing charge in Great Britain.',
            linkText: 'Price Cap Guide',
            linkHref: '/guides/energy-price-cap-explained/',
          },
          {
            q: 'How much does it cost to boil a standard 3kW electric kettle?',
            a: 'Boiling a full 1.7-litre kettle takes roughly 3 to 4 minutes, consuming around 0.18 kWh and costing approximately 4p to 5p under current UK caps.',
            linkText: 'Kettle running cost calculator',
            linkHref: '/electricity-cost-calculator/uk/kettle/',
          },
          {
            q: 'Why does an electric fan heater cost so much to run continuously?',
            a: 'A 2kW portable electric heater uses 2 kilowatt-hours every hour. Running it for 6 hours daily can add upwards of £3.00 per day to your electricity bill.',
            linkText: 'Electric heater cost calculator',
            linkHref: '/electricity-cost-calculator/uk/electric-heater/',
          },
          {
            q: 'How do standing charges affect low-energy households?',
            a: 'The daily standing charge is a fixed fee paid every day regardless of how little electricity is used, covering network pipeline and maintenance costs.',
            linkText: 'How to read electricity bills',
            linkHref: '/guides/how-to-read-your-electricity-bill-uk/',
          },
        ],
      },
      {
        id: 'fuel',
        topicTitle: 'Vehicle Fuel Costs & EV Comparison',
        questions: [
          {
            q: 'How do I calculate the total fuel cost for a road trip?',
            a: 'Divide the total distance by 100, multiply by your vehicle’s fuel consumption in litres per 100km, and multiply by the current fuel price per litre.',
            linkText: 'UK Fuel Trip Cost Tool',
            linkHref: '/fuel-cost-calculator/uk/',
          },
          {
            q: 'Is it cheaper to charge an electric car or drive a petrol car per mile?',
            a: 'Charging an EV at home on a standard tariff typically costs 6p to 9p per mile, compared to 14p to 18p per mile for an average petrol vehicle.',
            linkText: 'Compare EV vs Petrol costs',
            linkHref: '/fuel-cost-calculator/ev-vs-petrol/',
          },
          {
            q: 'How do I convert UK miles per gallon (MPG) to litres per 100km?',
            a: 'Divide 282.48 by your vehicle’s UK MPG rating to find consumption in L/100km. A car achieving 45 MPG UK uses approximately 6.28 L/100km.',
            linkText: 'MPG to L/100km Converter',
            linkHref: '/mpg-to-litres-per-100km/',
          },
          {
            q: 'How does tire pressure and vehicle weight influence fuel consumption?',
            a: 'Under-inflated tires increase rolling resistance by up to 10%, while carrying 50kg of unnecessary weight increases fuel consumption by approximately 1% to 2%.',
            linkText: 'Road fuel trip calculator',
            linkHref: '/fuel-cost-calculator/uk/',
          },
        ],
      },
      {
        id: 'salary',
        topicTitle: 'Salary, Social Security & Income Tax',
        questions: [
          {
            q: 'What is the difference between gross salary and take-home net pay?',
            a: 'Gross pay is the agreed contractual salary before deductions. Net pay is the liquid amount deposited in your bank after income tax, pension contributions, and mandatory social security.',
            linkText: 'Browse salary calculators',
            linkHref: '/',
          },
          {
            q: 'How do progressive tax brackets work on higher incomes?',
            a: 'Higher tax percentage rates apply only to the portion of income that exceeds each bracket threshold, never to your total gross earnings.',
            linkText: 'Read calculation methodology',
            linkHref: '/methodology/',
          },
          {
            q: 'Why do tax deductions increase mid-year for some employees?',
            a: 'In countries with cumulative tax systems, bonuses or salary increases can push cumulative annual earnings into higher tax bands later in the fiscal year.',
            linkText: 'Explore salary methodology',
            linkHref: '/methodology/',
          },
        ],
      },
    ],
  },
  de: {
    metaTitle: 'FAQ Verzeichnis: Banken, Steuern, MwSt., Strom & Reise',
    metaDescription:
      'Antworten auf über 30 häufige Fragen zu IBAN, BLZ-Suche, Mehrwertsteuer 19%, BDEW-Stromkosten und Reisekosten.',
    h1: 'Häufig gestellte Fragen (FAQ)',
    subtitle:
      'Geprüfte Antworten zu Bankverbindungen, deutscher Mehrwertsteuer, Stromkosten und Reiseberechnungen.',
    topics: [
      {
        id: 'banking',
        topicTitle: 'IBAN, BLZ & Bankverkehr',
        questions: [
          {
            q: 'Wie prüft der IBAN-Rechner die Gültigkeit einer Bankverbindung?',
            a: 'Er führt die internationale ISO 13616 Modulo-97 Prüfung durch und gleicht die Bankleitzahl mit dem amtlichen Verzeichnis der Bundesbank ab.',
            linkText: 'IBAN jetzt prüfen',
            linkHref: '/de/iban-pruefen/',
          },
          {
            q: 'Was ist der Unterschied zwischen Bankleitzahl und BIC?',
            a: 'Die BLZ ist eine 8-stellige deutsche Bankkennung. Der BIC (SWIFT-Code) ist die internationale 8- oder 11-stellige Kennung für weltweite Überweisungen.',
            linkText: 'BLZ und BIC Ratgeber',
            linkHref: '/de/ratgeber/blz-und-bic/',
          },
          {
            q: 'Kann man eine deutsche IBAN aus Kontonummer und BLZ erzeugen?',
            a: 'Ja, nach der Standardregel DE + Prüfziffer + BLZ + 10-stellige Kontonummer. Beachten Sie, dass manche Banken Sonderregeln anwenden.',
            linkText: 'Deutscher IBAN Rechner',
            linkHref: '/de/iban-rechner/',
          },
          {
            q: 'Wo finde ich die Bankleitzahl meiner Sparkasse oder Volksbank?',
            a: 'Nutzen Sie unsere Bundesbank-Datenbank, um nach Ort, Bankname oder BLZ zu suchen.',
            linkText: 'Zur BLZ Suche',
            linkHref: '/de/blz-suche/',
          },
          {
            q: 'Wie ist eine deutsche IBAN genau aufgebaut?',
            a: 'Sie besteht aus 22 Zeichen: DE + 2 Prüfziffern + 8 Stellen Bankleitzahl + 10 Stellen Kontonummer (mit führenden Nullen).',
            linkText: 'IBAN Aufbau erklärt',
            linkHref: '/de/ratgeber/iban-aufbau/',
          },
        ],
      },
      {
        id: 'vat',
        topicTitle: 'Mehrwertsteuer & Rechnungsstellung',
        questions: [
          {
            q: 'Wie rechne ich 19 % Mehrwertsteuer aus einem Bruttobetrag heraus?',
            a: 'Teilen Sie den Bruttobetrag durch 1,19. Der Nettobetrag ergibt sich direkt; die Differenz ist die Mehrwertsteuer.',
            linkText: 'MwSt.-Rechner öffnen',
            linkHref: '/de/mwst-rechner/',
          },
          {
            q: 'Wann gilt der ermäßigte Steuersatz von 7 % nach § 12 UStG?',
            a: 'Der ermäßigte Satz gilt für die meisten Grundnahrungsmittel, Bücher, Zeitschriften sowie Kultur- und Nahverkehrstickets.',
            linkText: 'MwSt. 7% berechnen',
            linkHref: '/de/mwst-rechner/',
          },
          {
            q: 'Wie wird die Mehrwertsteuer kaufmännisch gerundet?',
            a: 'Gemäß § 14 UStG wird auf volle Cent gerundet: Ab 0,5 Cent wird aufgerundet, darunter abgerundet.',
            linkText: 'Zur MwSt.-Berechnung',
            linkHref: '/de/mwst-rechner/',
          },
        ],
      },
      {
        id: 'energy',
        topicTitle: 'Stromkosten & Haushaltsgeräte',
        questions: [
          {
            q: 'Wie berechnen sich die Stromkosten eines Haushaltsgeräts?',
            a: 'Watt-Leistung geteilt durch 1.000 ergibt kW. Multipliziert mit den Betriebsstunden und dem Arbeitspreis pro kWh erhalten Sie die Kosten.',
            linkText: 'Stromkostenrechner öffnen',
            linkHref: '/de/stromkosten-rechner/',
          },
          {
            q: 'Was kostet der Betrieb eines Wasserkochers in Deutschland?',
            a: 'Ein 2.000-Watt-Wasserkocher benötigt für 1 Liter Wasser etwa 3 Minuten, was rund 3 bis 4 Cent an Stromkosten verursacht.',
            linkText: 'Wasserkocher Stromkosten',
            linkHref: '/de/stromkosten-rechner/wasserkocher/',
          },
          {
            q: 'Welche Haushaltsgeräte verbrauchen am meisten Strom?',
            a: 'Heizlüfter, alte Kühlschränke, Wäschetrockner und Durchlauferhitzer gehören zu den größten Verbrauchern im Haushalt.',
            linkText: 'Stromverbrauch senken Ratgeber',
            linkHref: '/de/ratgeber/stromverbrauch-senken/',
          },
        ],
      },
      {
        id: 'travel',
        topicTitle: 'Spritkosten & Fahrtkosten',
        questions: [
          {
            q: 'Wie ermittle ich die Fahrtkosten für eine Urlaubsreise?',
            a: 'Strecke durch 100 teilen, mit dem Durchschnittsverbrauch in Litern multiplizieren und mit dem aktuellen Literpreis für Benzin oder Diesel multiplizieren.',
            linkText: 'Spritkostenrechner nutzen',
            linkHref: '/de/spritkostenrechner/',
          },
        ],
      },
    ],
  },
  pl: {
    metaTitle: 'FAQ Finansowe: Wynagrodzenia, ZUS, PIT, B2B i VAT w Polsce',
    metaDescription:
      'Odpowiedzi na ponad 30 pytań o płacę minimalną 4666 zł, kalkulator brutto netto, składki ZUS, podatki B2B i weryfikację IBAN.',
    h1: 'Centrum Pytań i Odpowiedzi (FAQ)',
    subtitle:
      'Oficjalne wyjaśnienia dotyczące zasad rozliczania wynagrodzeń, podatków dochodowych, składek ZUS i podatku VAT w 2026 roku.',
    topics: [
      {
        id: 'salary',
        topicTitle: 'Wynagrodzenia, ZUS i Podatki (UoP i B2B)',
        questions: [
          {
            q: 'Ile wynosi płaca minimalna w Polsce w 2026 roku?',
            a: 'Od 1 stycznia 2026 r. płaca minimalna wynosi 4 666,00 zł brutto (ok. 3 510,92 zł netto), a stawka godzinowa to 30,50 zł brutto.',
            linkText: 'Szczegóły płacy minimalnej',
            linkHref: '/pl/placa-minimalna/',
          },
          {
            q: 'Jak obliczyć wynagrodzenie netto z kwoty brutto na umowie o pracę?',
            a: 'Od kwoty brutto odejmuje się składki ZUS pracownika (13,71%), składkę zdrowotną NFZ (9%) oraz zaliczkę na PIT po uwzględnieniu KUP i ulgi podatkowej.',
            linkText: 'Kalkulator Wynagrodzeń UoP',
            linkHref: '/pl/kalkulator-wynagrodzen/',
          },
          {
            q: 'Co jest bardziej opłacalne w 2026 roku: B2B czy etat?',
            a: 'Opłacalność B2B zależy od wysokości przychodu, kosztów uzyskania oraz formy opodatkowania (ryczałt, podatek liniowy lub skala).',
            linkText: 'Kalkulator B2B vs UoP',
            linkHref: '/pl/kalkulator-b2b/',
          },
          {
            q: 'Kiedy wchodzi się w drugi próg podatkowy 32%?',
            a: 'Drugi próg podatkowy obowiązuje po przekroczeniu 120 000 zł rocznej podstawy opodatkowania na skali podatkowej.',
            linkText: 'Tabela progów podatkowych',
            linkHref: '/pl/progi-podatkowe/',
          },
          {
            q: 'Ile wynoszą składki ZUS dla przedsiębiorców w 2026 roku?',
            a: 'Pełny ZUS wynosi 1 188,02 zł (bez chorobowego) lub 1 315,51 zł (z chorobowym) plus składka zdrowotna zależna od formy opodatkowania.',
            linkText: 'Kalkulator składek ZUS',
            linkHref: '/pl/skladki-zus/',
          },
          {
            q: 'Kto może skorzystać z Ulgi dla Młodych do 26 lat?',
            a: 'Osoby zatrudnione na umowie o pracę lub zleceniu do ukończenia 26 roku życia są zwolnione z PIT do limitu 85 528 zł rocznie.',
            linkText: 'Poradnik Ulga dla Młodych',
            linkHref: '/pl/poradniki/ulga-dla-mlodych/',
          },
        ],
      },
      {
        id: 'vat',
        topicTitle: 'Podatek VAT w Polsce',
        questions: [
          {
            q: 'Jakie stawki VAT obowiązują w Polsce?',
            a: 'Stawka podstawowa wynosi 23%, stawki obniżone to 8% i 5%, a w eksporcie i WDT stosuje się stawkę 0%.',
            linkText: 'Kalkulator VAT Polska',
            linkHref: '/pl/kalkulator-vat/',
          },
        ],
      },
      {
        id: 'banking',
        topicTitle: 'Konta Bankowe i IBAN',
        questions: [
          {
            q: 'Jak sprawdzić poprawność polskiego numeru konta bankowego?',
            a: 'Polski numer IBAN składa się z liter PL i 26 cyfr sprawdzanych sumą kontrolną modulo 97.',
            linkText: 'Sprawdź polski IBAN',
            linkHref: '/pl/sprawdz-iban/',
          },
        ],
      },
    ],
  },
  tr: {
    metaTitle: 'Sıkça Sorulan Sorular: Kıdem, İhbar, Maaş ve Vergi 2026',
    metaDescription:
      'Kıdem tazminatı tavanı 59.250 TL, ihbar süreleri, brütten nete maaş, asgari ücret muafiyeti ve KDV hakkında 30+ soru ve yanıt.',
    h1: 'Sıkça Sorulan Sorular (SSS)',
    subtitle:
      'İş Kanunu, SGK mevzuatı, 2026 kıdem tazminatı tavanı ve gelir vergisi hakkında merak edilen tüm yasal detaylar.',
    topics: [
      {
        id: 'salary',
        topicTitle: 'Kıdem, İhbar ve Maaş Bordrosu',
        questions: [
          {
            q: '2026 yılı kıdem tazminatı tavanı ne kadar oldu?',
            a: 'Hazine ve Maliye Bakanlığı genelgesi uyarınca 2026 yılı ilk 6 ayı için kıdem tazminatı tavanı 59.250,00 TL olarak belirlenmiştir.',
            linkText: 'Kıdem Tazminatı Hesaplama',
            linkHref: '/tr/kidem-tazminati-hesaplama/',
          },
          {
            q: 'İstifa eden işçi hangi şartlarda kıdem tazminatı alabilir?',
            a: 'Haklı fesih (İş K. m.24), zorunlu askerlik, emeklilik koşullarının sağlanması veya kadının evlilik tarihinden itibaren 1 yıl içinde ayrılması durumunda kıdem tazminatı ödenir.',
            linkText: 'İstifa ve kıdem rehberi',
            linkHref: '/tr/rehber/istifa-eden-kidem-tazminati-alabilir-mi/',
          },
          {
            q: 'İhbar süresi hizmet süresine göre nasıl belirlenir?',
            a: '6 aya kadar 2 hafta, 6-18 ay arası 4 hafta, 1.5-3 yıl arası 6 hafta, 3 yıldan fazla çalışanlar için 8 haftadır.',
            linkText: 'İhbar Süresi Hesaplama',
            linkHref: '/tr/ihbar-tazminati-hesaplama/',
          },
          {
            q: 'Brütten nete maaş hesaplanırken asgari ücret istisnası nasıl uygulanır?',
            a: 'Bütün çalışanların maaşlarının asgari ücrete denk gelen kısmı gelir ve damga vergisinden muaftır.',
            linkText: 'Brütten Nete Maaş Hesaplama',
            linkHref: '/tr/brutten-nete-maas-hesaplama/',
          },
          {
            q: 'Giydirilmiş brüt ücret neleri kapsar?',
            a: 'Çıplak brüt ücrete ek olarak yol, yemek, ikramiye, prim ve devamlılık arz eden tüm nakdi ve ayni hakların aylık ortalamasını içerir.',
            linkText: 'Kıdem Şartları Rehberi',
            linkHref: '/tr/rehber/kidem-tazminati-sartlari/',
          },
        ],
      },
      {
        id: 'travel',
        topicTitle: 'Schengen Vizesi 90/180 Gün Kuralı',
        questions: [
          {
            q: 'Schengen 90/180 kuralında günler nasıl sayılır?',
            a: 'Giriş yaptığınız tarihten geriye doğru son 180 gün içindeki toplam kalış gününüz 90 günü geçemez. Giriş ve çıkış günleri de tam gün sayılır.',
            linkText: 'Schengen Gün Hesaplama',
            linkHref: '/tr/schengen-gun-hesaplama/',
          },
        ],
      },
      {
        id: 'vat',
        topicTitle: 'KDV ve Tevkifat',
        questions: [
          {
            q: 'Türkiye’de hangi KDV oranları uygulanmaktadır?',
            a: 'Genel oran %20, gıda ve temel tüketimde %10, bazı tarım ve konut teslimlerinde %1 oranları uygulanır.',
            linkText: 'KDV Hesaplama Aracı',
            linkHref: '/tr/kdv-hesaplama/',
          },
        ],
      },
    ],
  },
  ro: {
    metaTitle: 'Întrebări Frecvente: Salariu 2026, PFA vs SRL, Cod Fiscal și TVA',
    metaDescription:
      'Răspunsuri la peste 30 de întrebări despre salariul minim de 4.050 lei, deducerea personală, CAS, CASS, dividende și Declarația Unică.',
    h1: 'Întrebări Frecvente (FAQ Hub)',
    subtitle:
      'Ghid complet cu răspunsuri oficiale verificate conform Codului Fiscal 2026, hotărârilor de Guvern și normelor ANAF.',
    topics: [
      {
        id: 'salary',
        topicTitle: 'Salarii, Contribuții Sociale și Deduceri',
        questions: [
          {
            q: 'Cât este salariul minim brut și net în România în 2026?',
            a: 'Salariul minim brut este de 4.050 lei pe lună. Datorită facilității fiscale a sumei neimpozabile de 300 lei, salariul minim net încasat este de 2.574 lei.',
            linkText: 'Detalii Salariul Minim',
            linkHref: '/ro/salariul-minim/',
          },
          {
            q: 'Cum se calculează deducerea personală regresivă?',
            a: 'Deducerea personală de bază se acordă pentru salarii brute de până la 6.050 lei și descrește proporțional odată cu creșterea venitului.',
            linkText: 'Calculator Deducere Personală',
            linkHref: '/ro/deducere-personala/',
          },
          {
            q: 'Ce cote de contribuții sociale se opresc din salariul brut?',
            a: 'Angajatul datorează CAS (pensii 25%) și CASS (sănătate 10%), iar impozitul pe venit este de 10% după deduceri.',
            linkText: 'Calculator Salariu Brut în Net',
            linkHref: '/ro/calculator-salariu/',
          },
          {
            q: 'Ce formă este mai avantajoasă în 2026: PFA sau SRL?',
            a: 'Pentru activități cu cheltuieli reduse și cifre mari de afaceri, SRL micro cu impozit de 1% sau 3% și dividende de 8% este adesea mai avantajos decât PFA.',
            linkText: 'Comparație PFA vs SRL',
            linkHref: '/ro/calculator-pfa-srl/',
          },
          {
            q: 'Când este termenul limită pentru depunerea Declarației Unice (D212)?',
            a: 'Termenul limită legal este data de 25 mai inclusiv, dată până la care se achită și impozitul pe venit, CAS și CASS datorate.',
            linkText: 'Ghid Declarația Unică PFA',
            linkHref: '/ro/ghiduri/declaratia-unica-pfa/',
          },
        ],
      },
      {
        id: 'vat',
        topicTitle: 'TVA în România',
        questions: [
          {
            q: 'Care sunt cotele de TVA aplicabile în România?',
            a: 'Cota standard este de 19%, iar cotele reduse sunt de 9% (alimente, medicamente) și 5% (cărți, manuale, lemne de foc).',
            linkText: 'Calculator TVA România',
            linkHref: '/ro/calculator-tva/',
          },
        ],
      },
      {
        id: 'banking',
        topicTitle: 'Bănci și Conturi IBAN',
        questions: [
          {
            q: 'Cum se validează un cont IBAN românesc?',
            a: 'Contul IBAN din România are 24 de caractere (prefix RO) și este validat prin algoritmul ISO 13616 modulo 97.',
            linkText: 'Verificare cont IBAN',
            linkHref: '/ro/verificare-iban/',
          },
        ],
      },
    ],
  },
};
