import { SupportedLang } from '@/config/pages';
import { FaqItem } from './types';

export interface HomeToolItem {
  title: string;
  slug: string;
  description: string;
  badge: string;
  category: 'banking' | 'tax-vat' | 'salary' | 'travel' | 'home-energy';
}

export interface HomeGuideItem {
  title: string;
  slug: string;
  description: string;
  readTime: string;
}

export interface HomeData {
  h1: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  featuredToolsTitle: string;
  categoriesTitle: string;
  guidesTitle: string;
  builtForTitle: string;
  builtForSubtitle: string;
  aboutTitle: string;
  aboutText: string;
  aboutNetworkNotice: string;
  faqTitle: string;
  mostUsedTools: HomeToolItem[];
  categoryTools: Record<string, HomeToolItem[]>;
  popularGuides: HomeGuideItem[];
  faqs: FaqItem[];
}

export const HOME_DATA_MAP: Record<SupportedLang, HomeData> = {
  en: {
    h1: 'Free Money, Banking & Travel Calculators',
    subtitle:
      'Fast, accurate, statutory calculation tools for the UK, Europe, Australia, and Canada. Zero server storage, 100% in-browser.',
    metaTitle: 'Free Money, Banking & Travel Calculators | Zetawala Money',
    metaDescription:
      'Free, accurate money, banking, VAT, fuel, and salary calculators for the UK, Europe, Australia, and Canada. No registration, zero tracking.',
    featuredToolsTitle: 'Most Used Calculators',
    categoriesTitle: 'Browse by Financial Category',
    guidesTitle: 'Popular Guides & Resources',
    builtForTitle: 'Built for the UK, Europe, Australia and Canada',
    builtForSubtitle:
      'Country-specific statutory rules, tax brackets, and central bank registries verified directly against official primary sources.',
    aboutTitle: 'About Zetawala Money',
    aboutText:
      'Zetawala Money provides free, reliable, and high-precision financial calculators designed for real-world decisions. Every calculation runs entirely in your web browser—meaning your financial data, account numbers, and travel plans never touch any server.',
    aboutNetworkNotice:
      'Zetawala Money is part of the Zetawala network of free tools.',
    faqTitle: 'Frequently Asked Questions',
    mostUsedTools: [
      {
        title: 'IBAN Checker & Validator',
        slug: 'iban-checker',
        description: 'Verify European and international IBAN account numbers with ISO 13616 MOD-97 checks.',
        badge: 'ISO Certified',
        category: 'banking',
      },
      {
        title: 'Schengen 90/180 Day Calculator',
        slug: 'schengen-calculator',
        description: 'Track short-stay visa-free days across the 29 Schengen member countries with rolling dates.',
        badge: 'EU Rules',
        category: 'travel',
      },
      {
        title: 'UK Electricity Cost Calculator',
        slug: 'electricity-cost-calculator/uk',
        description: 'Calculate appliance running costs with Ofgem price cap tariffs in pence per kilowatt-hour.',
        badge: 'Ofgem Q1 2026',
        category: 'home-energy',
      },
      {
        title: 'UK VAT Calculator 2026',
        slug: 'vat-calculator/uk',
        description: 'Calculate standard 20% or reduced 5% UK VAT forward and reverse under HMRC rules.',
        badge: 'HMRC 2026',
        category: 'tax-vat',
      },
    ],
    categoryTools: {
      banking: [
        {
          title: 'IBAN Checker & Validator',
          slug: 'iban-checker',
          description: 'Official ISO 13616 validation for 80+ countries with national structure checks.',
          badge: 'Banking Tool',
          category: 'banking',
        },
        {
          title: 'BIC / SWIFT Code Validator',
          slug: 'bic-swift-checker',
          description: 'Validate 8- and 11-character SWIFT/BIC codes by bank, country, and branch.',
          badge: 'ISO 9362',
          category: 'banking',
        },
      ],
      'tax-vat': [
        {
          title: 'UK VAT Calculator',
          slug: 'vat-calculator/uk',
          description: 'Calculate 20% standard and 5% reduced VAT with decimal rounding.',
          badge: 'UK Rates',
          category: 'tax-vat',
        },
        {
          title: 'EU VAT Calculator Hub',
          slug: 'vat-calculator',
          description: 'Instant VAT calculations for all 27 European Union member states.',
          badge: 'EU 27 Hub',
          category: 'tax-vat',
        },
      ],
      travel: [
        {
          title: 'Schengen 90/180 Calculator',
          slug: 'schengen-calculator',
          description: 'Prevent overstaying in Europe with rolling 180-day window tracking.',
          badge: 'EU Travel',
          category: 'travel',
        },
        {
          title: 'UK Fuel Trip Cost Calculator',
          slug: 'fuel-cost-calculator/uk',
          description: 'Journey fuel costs in pounds with live DESNZ petrol and diesel averages.',
          badge: 'DESNZ UK',
          category: 'travel',
        },
        {
          title: 'Australia Fuel Cost Calculator',
          slug: 'fuel-cost-calculator/australia',
          description: 'Trip fuel expenses in AUD using Australian Institute of Petroleum benchmarks.',
          badge: 'AIP Australia',
          category: 'travel',
        },
        {
          title: 'Canada Fuel Cost Calculator',
          slug: 'fuel-cost-calculator/canada',
          description: 'Calculate travel fuel costs across Canadian provinces with NRCan weekly prices.',
          badge: 'NRCan Canada',
          category: 'travel',
        },
        {
          title: 'Electric Vehicle vs Petrol Calculator',
          slug: 'fuel-cost-calculator/ev-vs-petrol',
          description: 'Compare cost per mile between home charging and conventional petrol filling.',
          badge: 'EV Comparison',
          category: 'travel',
        },
        {
          title: 'MPG to Litres per 100km Converter',
          slug: 'mpg-to-litres-per-100km',
          description: 'Instant conversion between UK MPG, US MPG, and metric L/100km.',
          badge: 'Converter',
          category: 'travel',
        },
      ],
      'home-energy': [
        {
          title: 'UK Electricity Cost Calculator',
          slug: 'electricity-cost-calculator/uk',
          description: 'Appliance hourly and monthly costs under Ofgem quarterly price cap tariffs.',
          badge: 'Ofgem Cap',
          category: 'home-energy',
        },
        {
          title: 'Australia Electricity Calculator',
          slug: 'electricity-cost-calculator/australia',
          description: 'Energy running costs by Australian state (NSW, VIC, QLD, SA).',
          badge: 'AER Offer',
          category: 'home-energy',
        },
      ],
    },
    popularGuides: [
      {
        title: 'Schengen 90/180 Rule Explained',
        slug: 'guides/schengen-90-180-rule-explained',
        description: 'A complete practical guide to how the rolling 180-day window works for visa-free travelers.',
        readTime: '8 min read',
      },
      {
        title: 'What is an IBAN and How Does It Work?',
        slug: 'guides/what-is-an-iban',
        description: 'Understand country codes, check digits, and national account structures in international banking.',
        readTime: '6 min read',
      },
      {
        title: 'Ofgem Energy Price Cap Explained',
        slug: 'guides/energy-price-cap-explained',
        description: 'How unit rates and daily standing charges are determined for UK households.',
        readTime: '7 min read',
      },
      {
        title: 'UK Citizens Travel Rules for Europe',
        slug: 'guides/uk-citizens-europe-travel-rules',
        description: 'Passport validity, border stamps, and Schengen stay allowances after Brexit.',
        readTime: '6 min read',
      },
    ],
    faqs: [
      {
        q: 'Are the calculators on Zetawala Money completely free to use?',
        a: 'Yes, 100% of the calculators on Zetawala Money are completely free. There are no subscriptions, paywalls, or accounts required to access any tool.',
      },
      {
        q: 'Is my personal or financial information stored on your servers?',
        a: 'No. All calculations are executed strictly client-side inside your web browser. IBANs, salary figures, and trip dates are never sent to or stored on any server.',
      },
      {
        q: 'How accurate are the tax, energy, and salary calculations?',
        a: 'Every calculator is engineered directly from primary statutory sources—including HMRC legislation, Deutsche Bundesbank directories, Ofgem determinations, and EU regulations.',
      },
      {
        q: 'Which regions and currencies are supported?',
        a: 'We provide specialized tools for the UK (£), Germany and the Eurozone (€), Poland (zł), Turkey (₺), Romania (lei), Australia (A$), and Canada (C$).',
      },
      {
        q: 'How often are tax rules and energy caps updated?',
        a: 'Rules are updated as soon as official authorities release new figures, such as Ofgem quarterly price cap announcements and annual statutory tax bracket revisions.',
      },
      {
        q: 'Can I export or save my calculation results?',
        a: 'Yes. Most tools offer instant copy-to-clipboard buttons, print-ready views, and optional localStorage persistence to save your data privately on your own device.',
      },
    ],
  },
  de: {
    h1: 'Kostenlose Finanz-, Steuer- und Bankrechner für Deutschland',
    subtitle:
      'Präzise Berechnungen mit echten Formeln aus UStG, Bundesbank und EU-Vorgaben. 100 % im Browser berechnet, keine Speicherung.',
    metaTitle: 'Kostenlose Finanz- und Bankrechner | Zetawala Money',
    metaDescription:
      'Kostenlose Rechner für Deutschland: IBAN-Prüfung, Bankleitzahlensuche (BLZ), Mehrwertsteuer (19% & 7%), Spritkosten und Stromverbrauch.',
    featuredToolsTitle: 'Häufig genutzte Rechner',
    categoriesTitle: 'Rechner nach Kategorie',
    guidesTitle: 'Ratgeber & Fachartikel',
    builtForTitle: 'Speziell für Deutschland und Europa entwickelt',
    builtForSubtitle:
      'Offizielle Bundesbank-Bankleitzahlen, deutsche Mehrwertsteuersätze nach § 12 UStG und BDEW-Strompreise.',
    aboutTitle: 'Über Zetawala Money',
    aboutText:
      'Zetawala Money bietet kostenlose, datenschutzfreundliche Online-Rechner für alltägliche und geschäftliche Finanzentscheidungen. Alle Berechnungen erfolgen lokal in Ihrem Browser.',
    aboutNetworkNotice:
      'Zetawala Money ist Teil des Zetawala-Netzwerks für kostenlose Online-Tools.',
    faqTitle: 'Häufig gestellte Fragen (FAQ)',
    mostUsedTools: [
      {
        title: 'IBAN Prüfer & Validierer',
        slug: 'de/iban-pruefen',
        description: 'Deutsche und internationale IBANs mit offizieller MOD-97 Prüfziffer und Längenabgleich prüfen.',
        badge: 'MOD-97',
        category: 'banking',
      },
      {
        title: 'Deutsche BLZ Suche',
        slug: 'de/blz-suche',
        description: 'Offizieller Bankleitzahlen-Katalog der Deutschen Bundesbank mit 3.432 Instituten und BIC.',
        badge: 'Bundesbank',
        category: 'banking',
      },
      {
        title: 'Mehrwertsteuerrechner (19 % & 7 %)',
        slug: 'de/mwst-rechner',
        description: 'MwSt. hinzurechnen oder herausrechnen nach § 12 UStG mit exakter Cent-Aufschlüsselung.',
        badge: '§ 12 UStG',
        category: 'tax-vat',
      },
      {
        title: 'Stromkostenrechner Deutschland',
        slug: 'de/stromkosten-rechner',
        description: 'Verbrauchskosten für Haushaltsgeräte mit aktuellen BDEW-Durchschnittspreisen ermitteln.',
        badge: 'BDEW 2026',
        category: 'home-energy',
      },
    ],
    categoryTools: {
      banking: [
        {
          title: 'IBAN Prüfer & Validierer',
          slug: 'de/iban-pruefen',
          description: 'Validierung von IBAN-Kontoverbindungen für über 80 Länder.',
          badge: 'Banken Tool',
          category: 'banking',
        },
        {
          title: 'Deutscher IBAN Rechner',
          slug: 'de/iban-rechner',
          description: 'IBAN aus Bankleitzahl und Kontonummer nach Bundesbank-Regeln generieren.',
          badge: 'BLZ zu IBAN',
          category: 'banking',
        },
        {
          title: 'BLZ Suche & BIC Verzeichnis',
          slug: 'de/blz-suche',
          description: 'Bankleitzahlen, BIC und Anschriften deutscher Kreditinstitute durchsuchen.',
          badge: '3.432 Banken',
          category: 'banking',
        },
        {
          title: 'BIC & SWIFT Prüfer',
          slug: 'de/bic-pruefen',
          description: 'Strukturprüfung für 8- und 11-stellige internationale BIC-Codes.',
          badge: 'ISO 9362',
          category: 'banking',
        },
      ],
      'tax-vat': [
        {
          title: 'Mehrwertsteuerrechner Deutschland',
          slug: 'de/mwst-rechner',
          description: 'Berechnung von 19 % Regelsteuersatz und 7 % ermäßigtem Steuersatz.',
          badge: 'UStG 2026',
          category: 'tax-vat',
        },
      ],
      travel: [
        {
          title: 'Spritkostenrechner Deutschland',
          slug: 'de/spritkostenrechner',
          description: 'Fahrtkosten für Benzin und Diesel mit aktuellen ADAC-Durchschnittspreisen.',
          badge: 'ADAC Preise',
          category: 'travel',
        },
      ],
      'home-energy': [
        {
          title: 'Stromkostenrechner Deutschland',
          slug: 'de/stromkosten-rechner',
          description: 'Stromkosten pro Stunde, Tag, Monat und Jahr für 25 Haushaltsgeräte berechnen.',
          badge: 'Stromsparen',
          category: 'home-energy',
        },
      ],
    },
    popularGuides: [
      {
        title: 'IBAN Aufbau und Prüfziffer erklärt',
        slug: 'de/ratgeber/iban-aufbau',
        description: 'Wie setzt sich die deutsche IBAN zusammen und wie schützt der MOD-97 Algorithmus vor Fehlern?',
        readTime: '6 Min. Lesezeit',
      },
      {
        title: 'Bankleitzahl (BLZ) und BIC: Unterschiede',
        slug: 'de/ratgeber/blz-und-bic',
        description: 'Wann wird die BLZ benötigt und wie hängt sie mit dem SWIFT/BIC-Code zusammen?',
        readTime: '5 Min. Lesezeit',
      },
      {
        title: 'Stromverbrauch im Haushalt wirksam senken',
        slug: 'de/ratgeber/stromverbrauch-senken',
        description: 'Die größten Stromfresser erkennen und Energiekosten im Alltag gezielt reduzieren.',
        readTime: '7 Min. Lesezeit',
      },
    ],
    faqs: [
      {
        q: 'Sind die Rechner auf Zetawala Money wirklich kostenlos?',
        a: 'Ja, alle Tools und Rechner können ohne Registrierung, Abonnement oder versteckte Kosten frei genutzt werden.',
      },
      {
        q: 'Werden eingegebene IBANs oder Bankdaten gespeichert?',
        a: 'Nein. Sämtliche Berechnungen und Prüfungen finden ausschließlich in Ihrem Webbrowser statt. Es werden keine Daten an Server übertragen.',
      },
      {
        q: 'Woher stammen die Bankleitzahlen der BLZ-Suche?',
        a: 'Die Bankleitzahlen und BIC stammen direkt aus der offiziellen Bankleitzahlendatei der Deutschen Bundesbank.',
      },
      {
        q: 'Wie aktuell sind die Steuersätze und Energiepreise?',
        a: 'Unsere Berechnungsregeln basieren auf dem Umsatzsteuergesetz (UStG) 2026 und aktuellen BDEW-Erhebungen und werden kontinuierlich gepflegt.',
      },
      {
        q: 'Kann ich Berechnungen ausdrucken oder kopieren?',
        a: 'Ja, alle Rechner verfügen über Schnellkopier-Funktionen und druckoptimierte Layouts.',
      },
      {
        q: 'Gilt das Tool als steuerliche oder rechtliche Beratung?',
        a: 'Nein, die Rechner dienen rein zu Informationszwecken und ersetzen keine professionelle Beratung durch einen Steuerberater oder Fachanwalt.',
      },
    ],
  },
  pl: {
    h1: 'Darmowe Kalkulatory Finansowe, Wynagrodzeń i VAT',
    subtitle:
      'Precyzyjne narzędzia obliczeniowe zgodne z przepisami Dz.U., ZUS i Ministerstwa Finansów na 2026 rok. 100% lokalnie w przeglądarce.',
    metaTitle: 'Kalkulatory Wynagrodzeń, B2B i VAT 2026 | Zetawala Money',
    metaDescription:
      'Darmowe kalkulatory dla Polski: brutto na netto, B2B vs UoP, płaca minimalna 4666 zł, składki ZUS, progi podatkowe i weryfikacja IBAN.',
    featuredToolsTitle: 'Najczęściej wybierane kalkulatory',
    categoriesTitle: 'Kalkulatory według kategorii',
    guidesTitle: 'Praktyczne poradniki i analizy',
    builtForTitle: 'Stworzone specjalnie dla polskich podatników i pracowników',
    builtForSubtitle:
      'Uwzględnia płacę minimalną 4 666 zł, skalę podatkową 12%/32%, ryczałt ewidencjonowany oraz pełne składki ZUS i NFZ.',
    aboutTitle: 'O projekcie Zetawala Money',
    aboutText:
      'Zetawala Money to niezależny serwis oferujący bezpłatne kalkulatory finansowe i płacowe. Wszystkie operacje matematyczne wykonują się bezpośrednio w Twojej przeglądarce, chroniąc Twoją prywatność.',
    aboutNetworkNotice:
      'Zetawala Money jest częścią sieci bezpłatnych narzędzi internetowych Zetawala.',
    faqTitle: 'Często zadawane pytania (FAQ)',
    mostUsedTools: [
      {
        title: 'Kalkulator Wynagrodzeń 2026',
        slug: 'pl/kalkulator-wynagrodzen',
        description: 'Przelicz wynagrodzenie brutto na netto z uwzględnieniem ZUS, NFZ, PPK i ulg podatkowych.',
        badge: 'UoP 2026',
        category: 'salary',
      },
      {
        title: 'Kalkulator B2B vs Umowa o Pracę',
        slug: 'pl/kalkulator-b2b',
        description: 'Porównanie zysku na rękę: etat vs skala podatkowa vs podatek liniowy vs ryczałt.',
        badge: 'Porównanie B2B',
        category: 'salary',
      },
      {
        title: 'Płaca Minimalna 2026 (4 666 zł)',
        slug: 'pl/placa-minimalna',
        description: 'Płaca minimalna brutto, netto (3 510,92 zł) oraz całkowity koszt zatrudnienia pracodawcy.',
        badge: 'Dz.U. 2024 poz. 1362',
        category: 'salary',
      },
      {
        title: 'Kalkulator VAT Polska (23%, 8%, 5%)',
        slug: 'pl/kalkulator-vat',
        description: 'Obliczanie kwot netto i brutto według polskich stawek podatku od towarów i usług.',
        badge: 'VAT Polska',
        category: 'tax-vat',
      },
    ],
    categoryTools: {
      salary: [
        {
          title: 'Kalkulator Wynagrodzeń UoP',
          slug: 'pl/kalkulator-wynagrodzen',
          description: 'Szczegółowe wyliczenie pensji netto, składek pracownika i kosztów firmy.',
          badge: 'Etaty',
          category: 'salary',
        },
        {
          title: 'Kalkulator B2B vs UoP',
          slug: 'pl/kalkulator-b2b',
          description: 'Zestawienie form opodatkowania działalności gospodarczej z etatem.',
          badge: 'B2B',
          category: 'salary',
        },
        {
          title: 'Płaca Minimalna 2026',
          slug: 'pl/placa-minimalna',
          description: 'Stawka miesięczna 4 666 zł i godzinowa 30,50 zł z historią zmian.',
          badge: 'Płaca Min.',
          category: 'salary',
        },
        {
          title: 'Składki ZUS 2026',
          slug: 'pl/skladki-zus',
          description: 'Ulga na start, ZUS preferencyjny i duży ZUS dla przedsiębiorców.',
          badge: 'ZUS 2026',
          category: 'salary',
        },
        {
          title: 'Progi Podatkowe PIT',
          slug: 'pl/progi-podatkowe',
          description: 'Próg 120 000 zł, stawki 12% i 32% oraz kwota wolna 30 000 zł.',
          badge: 'Skala PIT',
          category: 'salary',
        },
      ],
      'tax-vat': [
        {
          title: 'Kalkulator VAT',
          slug: 'pl/kalkulator-vat',
          description: 'Dodawanie i odejmowanie VAT dla stawek 23%, 8%, 5% i 0%.',
          badge: 'Stawki VAT',
          category: 'tax-vat',
        },
      ],
      banking: [
        {
          title: 'Weryfikacja Konta IBAN',
          slug: 'pl/sprawdz-iban',
          description: 'Sprawdzanie polskich numerów NRB i zagranicznych rachunków IBAN.',
          badge: 'MOD-97',
          category: 'banking',
        },
      ],
    },
    popularGuides: [
      {
        title: 'B2B czy Umowa o Pracę w 2026 roku?',
        slug: 'pl/poradniki/b2b-czy-umowa-o-prace',
        description: 'Szczegółowa analiza opłacalności przejścia na samozatrudnienie przy różnych stawkach.',
        readTime: '10 min czytania',
      },
      {
        title: 'Ryczałt czy Podatek Liniowy?',
        slug: 'pl/poradniki/ryczalt-czy-liniowy',
        description: 'Która forma opodatkowania JDG jest korzystniejsza dla branży IT i usług profesjonalnych.',
        readTime: '9 min czytania',
      },
      {
        title: 'Ulga dla Młodych do 26 Lat',
        slug: 'pl/poradniki/ulga-dla-mlodych',
        description: 'Zasady korzystania z zerowego PIT do limitu 85 528 zł rocznie.',
        readTime: '7 min czytania',
      },
      {
        title: 'Jak Czytać Pasek Wypłaty?',
        slug: 'pl/poradniki/jak-czytac-pasek-wyplaty',
        description: 'Wyjaśnienie pozycji na pasku wynagrodzeń: ZUS, składka zdrowotna, zaliczka PIT.',
        readTime: '8 min czytania',
      },
    ],
    faqs: [
      {
        q: 'Czy korzystanie z kalkulatorów Zetawala Money jest bezpłatne?',
        a: 'Tak, wszystkie kalkulatory są całkowicie darmowe i nie wymagają logowania ani instalowania oprogramowania.',
      },
      {
        q: 'Czy wpisywane zarobki są przesyłane na serwer?',
        a: 'Nie. Obliczenia odbywają się wyłącznie po stronie przeglądarki internetowej. Twoje dane finansowe są w 100% poufne.',
      },
      {
        q: 'Z jakich przepisów wynikają stawki w kalkulatorze wynagrodzeń?',
        a: 'Stawki opierają się na ustawie o PIT, ustawie o systemie ubezpieczeń społecznych oraz Rozporządzeniu Rady Ministrów w sprawie płacy minimalnej na 2026 r.',
      },
      {
        q: 'Czy kalkulator B2B uwzględnia składkę zdrowotną ZUS?',
        a: 'Tak, narzędzie precyzyjnie kalkuluje składkę zdrowotną w zależności od wybranej formy: 9% na skali, 4,9% na liniowym i progi przychodowe na ryczałcie.',
      },
      {
        q: 'Jak często aktualizowane są wskaźniki podatkowe?',
        a: 'Aktualizacje wprowadzane są niezwłocznie po publikacji nowych ustaw w Dzienniku Ustaw oraz komunikatów prezesa GUS.',
      },
      {
        q: 'Czy wyniki z kalkulatora mają moc wiążącą dla urzędu skarbowego?',
        a: 'Narzędzia mają charakter informacyjno-edukacyjny i nie zastępują indywidualnej porady doradcy podatkowego.',
      },
    ],
  },
  tr: {
    h1: 'Ücretsiz Maaş, Tazminat ve Finans Hesaplama Araçları',
    subtitle:
      'İş Kanunu, Gelir İdaresi Başkanlığı ve SGK 2026 mevzuatına tam uyumlu hesaplama motorları. Tarayıcıda %100 gizli ve anında.',
    metaTitle: 'Kıdem Tazminatı, İhbar ve Maaş Hesaplama 2026 | Zetawala Money',
    metaDescription:
      '2026 Türkiye hesaplama araçları: kıdem tazminatı tavanı 59.250 TL, ihbar tazminatı, brütten nete maaş, asgari ücret ve KDV hesaplama.',
    featuredToolsTitle: 'En Çok Kullanılan Hesaplama Araçları',
    categoriesTitle: 'Kategorilere Göre Araçlar',
    guidesTitle: 'İş Hukuku ve Vergi Rehberleri',
    builtForTitle: 'Türkiye Mevzuatına ve Çalışma Hayatına Özel Geliştirildi',
    builtForSubtitle:
      '2026 yılı asgari ücreti 26.005,50 TL, kıdem tavanı 59.250 TL ve GİB gelir vergisi tarifesi doğrulanmıştır.',
    aboutTitle: 'Zetawala Money Hakkında',
    aboutText:
      'Zetawala Money, çalışanlar, işverenler ve serbest meslek sahipleri için ücretsiz finans ve tazminat hesaplama motorları sunar. Bütün hesaplamalar kendi cihazınızda çalışır, hiçbir bilginiz sunuculara iletilmez.',
    aboutNetworkNotice:
      'Zetawala Money, Zetawala ücretsiz web araçları ağının bir parçasıdır.',
    faqTitle: 'Sıkça Sorulan Sorular (SSS)',
    mostUsedTools: [
      {
        title: 'Kıdem Tazminatı Hesaplama 2026',
        slug: 'tr/kidem-tazminati-hesaplama',
        description: 'Giriş ve çıkış tarihleri, giydirilmiş brüt ücret ve 59.250 TL tavan kontrolüyle net tazminat hesabı.',
        badge: '1475 SK m.14',
        category: 'salary',
      },
      {
        title: 'İhbar Tazminatı Hesaplama',
        slug: 'tr/ihbar-tazminati-hesaplama',
        description: 'Hizmet süresine göre 2, 4, 6 veya 8 haftalık ihbar süresi ve vergi kesintileri.',
        badge: '4857 SK m.17',
        category: 'salary',
      },
      {
        title: 'Brütten Nete Maaş Hesaplama',
        slug: 'tr/brutten-nete-maas-hesaplama',
        description: '12 aylık kümülatif vergi dilimleri geçişi, SGK primi ve damga vergisi muafiyeti.',
        badge: 'GİB 2026',
        category: 'salary',
      },
      {
        title: 'Schengen Vizesi 90/180 Gün Hesaplama',
        slug: 'tr/schengen-gun-hesaplama',
        description: 'Avrupa seyahatlerinde vize ihlalini önlemek için geriye dönük 180 günlük hareketli pencere.',
        badge: 'AB Kuralı',
        category: 'travel',
      },
    ],
    categoryTools: {
      salary: [
        {
          title: 'Kıdem Tazminatı Hesaplama',
          slug: 'tr/kidem-tazminati-hesaplama',
          description: 'Hizmet süresi ve giydirilmiş brüt ücretle kıdem tazminatı hesaplama.',
          badge: 'Kıdem',
          category: 'salary',
        },
        {
          title: 'İhbar Tazminatı Hesaplama',
          slug: 'tr/ihbar-tazminati-hesaplama',
          description: 'İhbar öneli ve yasal kesintilerle ihbar tazminatı hesaplama.',
          badge: 'İhbar',
          category: 'salary',
        },
        {
          title: 'Kıdem ve İhbar Birleşik Hesaplama',
          slug: 'tr/kidem-ve-ihbar-tazminati-hesaplama',
          description: 'İşten çıkışta hem kıdem hem ihbar tazminatını tek ekranda hesaplayın.',
          badge: 'Birleşik',
          category: 'salary',
        },
        {
          title: 'Brütten Nete Maaş',
          slug: 'tr/brutten-nete-maas-hesaplama',
          description: 'Aylık brütten nete maaş ve işveren maliyeti tablosu.',
          badge: 'Maaş',
          category: 'salary',
        },
        {
          title: 'Netten Brüte Maaş',
          slug: 'tr/netten-brute-maas-hesaplama',
          description: 'Anlaşılan net tutardan brüt bordroya ters hesaplama.',
          badge: 'Ters Hesap',
          category: 'salary',
        },
        {
          title: 'Asgari Ücret 2026',
          slug: 'tr/asgari-ucret',
          description: 'Net 22.104,67 TL ve brüt 26.005,50 TL asgari ücret verileri.',
          badge: 'Asgari Ücret',
          category: 'salary',
        },
        {
          title: 'Kıdem Tazminatı Tavanı 2026',
          slug: 'tr/kidem-tazminati-tavani',
          description: 'Hazine ve Maliye Bakanlığı 2026 yılı 1. yarıyıl tavan tutarı.',
          badge: '59.250 TL',
          category: 'salary',
        },
        {
          title: 'Gelir Vergisi Dilimleri',
          slug: 'tr/gelir-vergisi-dilimleri',
          description: '%15 ile %40 arasındaki 2026 gelir vergisi dilimleri.',
          badge: 'GİB Tarifesi',
          category: 'salary',
        },
      ],
      'tax-vat': [
        {
          title: 'KDV Hesaplama (%20, %10, %1)',
          slug: 'tr/kdv-hesaplama',
          description: 'KDV dahil ve hariç hesaplama ile tevkifatlı fatura seçenekleri.',
          badge: 'KDV',
          category: 'tax-vat',
        },
      ],
      travel: [
        {
          title: 'Schengen Gün Hesaplama',
          slug: 'tr/schengen-gun-hesaplama',
          description: '90/180 gün kuralı seyahat planlayıcısı ve kalan gün takipçisi.',
          badge: 'Schengen',
          category: 'travel',
        },
      ],
      banking: [
        {
          title: 'IBAN Doğrulama',
          slug: 'tr/iban-dogrulama',
          description: 'TR ile başlayan 26 haneli IBAN numaralarını MOD-97 algoritmasıyla doğrulama.',
          badge: 'IBAN',
          category: 'banking',
        },
      ],
    },
    popularGuides: [
      {
        title: 'İstifa Eden Kıdem Tazminatı Alabilir mi?',
        slug: 'tr/rehber/istifa-eden-kidem-tazminati-alabilir-mi',
        description: '1475 sayılı yasa kapsamındaki haklı fesih, askerlik, evlilik ve emeklilik istisnaları.',
        readTime: '9 dk okuma',
      },
      {
        title: 'Kıdem Tazminatı Alma Şartları Nelerdir?',
        slug: 'tr/rehber/kidem-tazminati-sartlari',
        description: '1 yıllık kıdem süresi, fesih türleri ve giydirilmiş brüt ücret kavramı.',
        readTime: '8 dk okuma',
      },
      {
        title: 'İhbar Süresi Nasıl Hesaplanır?',
        slug: 'tr/rehber/ihbar-suresi-nasil-hesaplanir',
        description: 'İş arama izni, ihbar süreleri ve ihbar tazminatı hesaplama kuralları.',
        readTime: '7 dk okuma',
      },
      {
        title: 'Evlilik Nedeniyle Kıdem Tazminatı Rehberi',
        slug: 'tr/rehber/evlilik-nedeniyle-kidem-tazminati',
        description: 'Kadın çalışanların evlilik tarihinden itibaren 1 yıl içinde yararlanabileceği yasal hak.',
        readTime: '8 dk okuma',
      },
    ],
    faqs: [
      {
        q: 'Hesaplama araçları için herhangi bir ücret ödemem gerekir mi?',
        a: 'Hayır, Zetawala Money üzerindeki bütün hesaplama araçları tamamen ücretsiz ve sınırsızdır.',
      },
      {
        q: 'Girdiğim maaş ve kimlik bilgileri kaydediliyor mu?',
        a: 'Kesinlikle hayır. Tüm hesaplamalar yalnızca web tarayıcınızda gerçekleştirilir; hiçbir sunucuya veri aktarılmaz.',
      },
      {
        q: '2026 yılı kıdem tazminatı tavanı ne kadardır?',
        a: '2026 yılı ilk 6 ayı için kıdem tazminatı tavanı 59.250,00 TL olarak uygulanmaktadır.',
      },
      {
        q: 'Asgari ücret vergiden muaf mıdır?',
        a: 'Evet, 7349 sayılı Kanun uyarınca asgari ücrete isabet eden gelir ve damga vergisi tamamen istisnadır.',
      },
      {
        q: 'Schengen 90/180 gün kuralı nasıl çalışır?',
        a: 'Giriş yaptığınız tarihten geriye doğru son 180 gün içindeki toplam kalış sürenizin 90 günü aşmaması gerekir.',
      },
      {
        q: 'Sonuçlar resmi belge yerine geçer mi?',
        a: 'Hesaplamalar mevzuata uygun bilgilendirme amaçlıdır; ihtilaflı durumlarda resmi bordro ve uzman görüşü esastır.',
      },
    ],
  },
  ro: {
    h1: 'Calculatoare Gratuite de Salarii, Taxe și Bănci în România',
    subtitle:
      'Calcule exacte bazate pe Codul Fiscal 2026, facilitățile OUG 115/2023 și normele ANAF. 100% procesare privată în browser.',
    metaTitle: 'Calculator Salariu 2026, PFA vs SRL și TVA | Zetawala Money',
    metaDescription:
      'Calculatoare România 2026: salariu brut în net, salariul minim 4.050 lei, deducere personală, PFA vs SRL, cote TVA și validare IBAN.',
    featuredToolsTitle: 'Cele mai utilizate calculatoare',
    categoriesTitle: 'Calculatoare pe categorii',
    guidesTitle: 'Ghiduri fiscale și analize',
    builtForTitle: 'Adaptat legislației din România pentru salariați și antreprenori',
    builtForSubtitle:
      'Include salariul minim de 4.050 lei, scutirea de 300 lei netaxabili, CAS 25%, CASS 10% și plafoanele PFA 2026.',
    aboutTitle: 'Despre Zetawala Money',
    aboutText:
      'Zetawala Money pune la dispoziție instrumente financiare precise și gratuite pentru angajați, freelanceri și administratori de firme. Toate calculele rulează direct pe dispozitivul dumneavoastră.',
    aboutNetworkNotice:
      'Zetawala Money face parte din rețeaua de instrumente gratuite Zetawala.',
    faqTitle: 'Întrebări Frecvente (FAQ)',
    mostUsedTools: [
      {
        title: 'Calculator Salariu 2026 (Brut în Net)',
        slug: 'ro/calculator-salariu',
        description: 'Află salariul net din brut, deducerea personală regresivă, contribuțiile CAS, CASS și costul firmei.',
        badge: 'Salarii 2026',
        category: 'salary',
      },
      {
        title: 'Calculator PFA vs SRL',
        slug: 'ro/calculator-pfa-srl',
        description: 'Comparație fiscală directă: PFA în sistem real vs SRL micro 1%/3% și dividende.',
        badge: 'Fiscalitate',
        category: 'salary',
      },
      {
        title: 'Salariul Minim pe Țară (4.050 lei)',
        slug: 'ro/salariul-minim',
        description: 'Salariul minim brut, salariul net de 2.574 lei cu scutirea de 300 lei și costul total al angajatorului.',
        badge: 'HG 141/2025',
        category: 'salary',
      },
      {
        title: 'Calculator TVA România (19%, 9%, 5%)',
        slug: 'ro/calculator-tva',
        description: 'Calcul adăugare și extragere TVA conform reglementărilor Codului Fiscal.',
        badge: 'TVA România',
        category: 'tax-vat',
      },
    ],
    categoryTools: {
      salary: [
        {
          title: 'Calculator Salariu Brut în Net',
          slug: 'ro/calculator-salariu',
          description: 'Calcul detaliat al salariului net cu deduceri pentru copii și persoane în întreținere.',
          badge: 'Salarii',
          category: 'salary',
        },
        {
          title: 'Calculator PFA vs SRL',
          slug: 'ro/calculator-pfa-srl',
          description: 'Alege forma optimă de organizare a activității independente în 2026.',
          badge: 'PFA / SRL',
          category: 'salary',
        },
        {
          title: 'Salariul Minim 2026',
          slug: 'ro/salariul-minim',
          description: 'Detalii complete despre salariul minim de 4.050 lei și aplicarea celor 300 lei scutiți.',
          badge: 'Minim Garantat',
          category: 'salary',
        },
        {
          title: 'Deducere Personală 2026',
          slug: 'ro/deducere-personala',
          description: 'Grilele de deducere conform art. 77 Cod Fiscal pentru venituri până la 6.050 lei.',
          badge: 'Deduceri',
          category: 'salary',
        },
      ],
      'tax-vat': [
        {
          title: 'Calculator TVA',
          slug: 'ro/calculator-tva',
          description: 'Calcul rapid pentru cotele de TVA standard și reduse aplicabile în România.',
          badge: 'TVA',
          category: 'tax-vat',
        },
      ],
      banking: [
        {
          title: 'Verificare Cont IBAN',
          slug: 'ro/verificare-iban',
          description: 'Validare conturi bancare românești și internaționale conform algoritmului MOD-97.',
          badge: 'IBAN',
          category: 'banking',
        },
      ],
    },
    popularGuides: [
      {
        title: 'PFA sau SRL în 2026? Ghid Fiscal Comparativ',
        slug: 'ro/ghiduri/pfa-sau-srl',
        description: 'Analiză comparativă completă a taxelor, plafoanelor CAS/CASS și profitului net.',
        readTime: '11 min lectură',
      },
      {
        title: 'Cum se Calculează Salariul Net din Brut?',
        slug: 'ro/ghiduri/cum-se-calculeaza-salariul-net',
        description: 'Formulele matematice, pașii de reținere și modul de calcul al fluturașului de salariu.',
        readTime: '10 min lectură',
      },
      {
        title: 'Declarația Unică ANAF 2026 (Formularul 212)',
        slug: 'ro/ghiduri/declaratia-unica-pfa',
        description: 'Termenul de 25 mai, completarea SPV și plafoanele de 6, 12, 24 și 60 salarii minime.',
        readTime: '9 min lectură',
      },
    ],
    faqs: [
      {
        q: 'Sunt gratuite calculatoarele de pe Zetawala Money?',
        a: 'Da, toate calculatoarele sunt 100% gratuite, fără înregistrare sau plăți ascunse.',
      },
      {
        q: 'Sunt salvate datele salariale pe serverele dumneavoastră?',
        a: 'Nu. Toate datele introduse sunt procesate exclusiv local în browserul dumneavoastră.',
      },
      {
        q: 'Cât este salariul minim net în România în 2026?',
        a: 'Salariul minim net este de 2.574 lei, datorită sumei neimpozabile de 300 lei aplicate brutului de 4.050 lei.',
      },
      {
        q: 'Ce plafoane CASS se aplică pentru dividende în 2026?',
        a: 'Plafoanele CASS pentru dividende sunt la 6 salarii (24.300 lei), 12 salarii (48.600 lei) și 24 salarii (97.200 lei).',
      },
      {
        q: 'Cum se calculează deducerea personală suplimentară pentru copii?',
        a: 'Părintele beneficiază de o deducere de 100 lei lunar pentru fiecare copil înscris într-o instituție de învățământ.',
      },
      {
        q: 'Pot imprima sau salva rezultatele obținute?',
        a: 'Da, fiecare instrument conține opțiuni de copiere rapidă și formatare optimă pentru tipărire.',
      },
    ],
  },
  fr: {
    h1: 'Calculateurs Financiers et Bancaires Gratuits',
    subtitle:
      'Outils de vérification bancaire et financière fiables, rapides et 100% exécutés dans votre navigateur.',
    metaTitle: 'Calculateurs Financiers et Bancaires Gratuits | Zetawala Money',
    metaDescription:
      'Vérification gratuite de numéro IBAN et outils financiers pour la France et l’Europe. Sans inscription.',
    featuredToolsTitle: 'Outils populaires',
    categoriesTitle: 'Outils disponibles',
    guidesTitle: 'Guides pratiques',
    builtForTitle: 'Conçu pour la France et l’Europe',
    builtForSubtitle: 'Algorithmes certifiés ISO et conformes aux standards bancaires européens SEPA.',
    aboutTitle: 'À propos de Zetawala Money',
    aboutText:
      'Zetawala Money met à disposition des calculateurs financiers fiables et respectueux de la vie privée. Aucune donnée n’est enregistrée sur nos serveurs.',
    aboutNetworkNotice:
      'Zetawala Money fait partie du réseau d’outils gratuits Zetawala.',
    faqTitle: 'Foire Aux Questions (FAQ)',
    mostUsedTools: [
      {
        title: 'Vérificateur et Validateur IBAN',
        slug: 'fr/verifier-iban',
        description: 'Vérifiez la validité d’un compte IBAN français ou européen grâce au contrôle MOD-97.',
        badge: 'ISO 13616',
        category: 'banking',
      },
    ],
    categoryTools: {
      banking: [
        {
          title: 'Vérificateur IBAN',
          slug: 'fr/verifier-iban',
          description: 'Validation de comptes bancaires avec contrôle de clé RIB et format SEPA.',
          badge: 'Banque',
          category: 'banking',
        },
      ],
    },
    popularGuides: [],
    faqs: [
      {
        q: 'L’utilisation des calculateurs est-elle gratuite ?',
        a: 'Oui, tous nos outils sont entièrement gratuits et accessibles sans inscription.',
      },
      {
        q: 'Mes coordonnées bancaires sont-elles conservées ?',
        a: 'Non, aucune donnée n’est envoyée à nos serveurs. Tout est calculé dans votre navigateur.',
      },
      {
        q: 'Comment fonctionne la validation IBAN ?',
        a: 'L’outil applique l’algorithme international ISO 13616 modulo 97 pour vérifier la clé de contrôle.',
      },
      {
        q: 'Quels pays sont supportés par le vérificateur IBAN ?',
        a: 'Tous les pays du registre officiel SWIFT, incluant la France et les membres de la zone SEPA.',
      },
      {
        q: 'Puis-je copier le résultat de validation ?',
        a: 'Oui, un bouton de copie rapide vous permet de transférer l’IBAN mis en forme.',
      },
      {
        q: 'Cet outil remplace-t-il les confirmations de ma banque ?',
        a: 'Non, il s’agit d’une vérification technique du format et de la somme de contrôle.',
      },
    ],
  },
  es: {
    h1: 'Calculadoras Financieras y Bancarias Gratuitas',
    subtitle:
      'Herramientas precisas para comprobar cuentas bancarias y cálculos monetarios en Europa. 100% en el navegador.',
    metaTitle: 'Calculadoras Financieras y Bancarias | Zetawala Money',
    metaDescription:
      'Validador de IBAN gratuito y herramientas de cálculo bancario para España y la Unión Europea.',
    featuredToolsTitle: 'Herramientas destacadas',
    categoriesTitle: 'Herramientas disponibles',
    guidesTitle: 'Guías financieras',
    builtForTitle: 'Diseñado para España y el Espacio Europeo',
    builtForSubtitle: 'Algoritmos oficiales MOD-97 y compatibilidad total con la zona de pagos SEPA.',
    aboutTitle: 'Sobre Zetawala Money',
    aboutText:
      'Zetawala Money ofrece calculadoras financieras gratuitas con máxima privacidad. Ninguna cuenta o dato introducido se almacena en servidores.',
    aboutNetworkNotice:
      'Zetawala Money forma parte de la red de herramientas gratuitas de Zetawala.',
    faqTitle: 'Preguntas Frecuentes (FAQ)',
    mostUsedTools: [
      {
        title: 'Validador de Cuentas IBAN',
        slug: 'es/validar-iban',
        description: 'Comprueba el código IBAN de cuentas bancarias españolas e internacionales con MOD-97.',
        badge: 'ISO 13616',
        category: 'banking',
      },
    ],
    categoryTools: {
      banking: [
        {
          title: 'Validador IBAN',
          slug: 'es/validar-iban',
          description: 'Validación de códigos bancarios y formato SEPA para más de 80 países.',
          badge: 'Banca',
          category: 'banking',
        },
      ],
    },
    popularGuides: [],
    faqs: [
      {
        q: '¿Es totalmente gratuito este servicio?',
        a: 'Sí, todas las herramientas son 100% gratuitas y no requieren registro ni suscripción.',
      },
      {
        q: '¿Se guardan mis datos bancarios o números de cuenta?',
        a: 'No. El cálculo se ejecuta exclusivamente en el navegador y ningún dato viaja a servidores externos.',
      },
      {
        q: '¿Cómo comprueba el validador el número IBAN?',
        a: 'Aplica el algoritmo estándar ISO 13616 (módulo 97) sobre los dígitos de control.',
      },
      {
        q: '¿Admite cuentas bancarias de España y de la zona SEPA?',
        a: 'Sí, admite España y todos los países miembros del registro oficial SWIFT.',
      },
      {
        q: '¿Puedo copiar o compartir el IBAN formateado?',
        a: 'Sí, incluye opción de copiado con formato de 4 caracteres para transferencias sin errores.',
      },
      {
        q: '¿Sustituye esta comprobación a mi entidad bancaria?',
        a: 'Es una verificación matemática de estructura y no certifica el estado de solvencia de la cuenta.',
      },
    ],
  },
  it: {
    h1: 'Calcolatori Finanziari e Bancari Gratuiti',
    subtitle:
      'Strumenti veloci e affidabili per la verifica dei conti bancari in Italia e nell’Unione Europea. 100% nel browser.',
    metaTitle: 'Calcolatori Finanziari e Bancari Gratuiti | Zetawala Money',
    metaDescription:
      'Verifica IBAN gratuita e calcolatori monetari per l’Italia e l’area SEPA. Nessuna registrazione.',
    featuredToolsTitle: 'Strumenti più utilizzati',
    categoriesTitle: 'Strumenti disponibili',
    guidesTitle: 'Guide e risorse',
    builtForTitle: 'Progettato per l’Italia e l’Europa',
    builtForSubtitle: 'Algoritmi conformi allo standard ISO 13616 e alle specifiche interbancarie SEPA.',
    aboutTitle: 'Informazioni su Zetawala Money',
    aboutText:
      'Zetawala Money offre strumenti di calcolo finanziario gratuiti e orientati alla privacy. Tutti i calcoli avvengono direttamente sul vostro dispositivo.',
    aboutNetworkNotice:
      'Zetawala Money fa parte della rete di strumenti gratuiti Zetawala.',
    faqTitle: 'Domande Frequenti (FAQ)',
    mostUsedTools: [
      {
        title: 'Verifica e Validatore IBAN',
        slug: 'it/verifica-iban',
        description: 'Controlla la correttezza del codice IBAN italiano o internazionale con il check MOD-97.',
        badge: 'ISO 13616',
        category: 'banking',
      },
    ],
    categoryTools: {
      banking: [
        {
          title: 'Verifica IBAN',
          slug: 'it/verifica-iban',
          description: 'Controllo delle cifre di verifica e del formato bancario per oltre 80 paesi.',
          badge: 'Banca',
          category: 'banking',
        },
      ],
    },
    popularGuides: [],
    faqs: [
      {
        q: 'I calcolatori sono completamente gratuiti?',
        a: 'Sì, tutti i nostri strumenti sono gratuiti e non richiedono alcuna registrazione.',
      },
      {
        q: 'I dati bancari inseriti vengono memorizzati?',
        a: 'No. Nessun dato lascia il vostro dispositivo: il controllo si esegue solo nel browser.',
      },
      {
        q: 'Come viene eseguita la verifica dell’IBAN?',
        a: 'Viene utilizzato il calcolo ISO 13616 mod-97 per verificare le cifre di controllo.',
      },
      {
        q: 'È possibile verificare conti italiani e SEPA?',
        a: 'Sì, supporta l’Italia e tutti i paesi compresi nel registro internazionale SWIFT.',
      },
      {
        q: 'Posso copiare l’IBAN formattato?',
        a: 'Sì, con un click potete copiare l’IBAN suddiviso in blocchi di 4 caratteri.',
      },
      {
        q: 'Questa verifica garantisce l’esistenza del conto?',
        a: 'Conferma che l’IBAN è formalmente corretto secondo le regole bancarie, non il saldo o l’intestatario.',
      },
    ],
  },
  nl: {
    h1: 'Gratis Financiële en Bankrekening Calculators',
    subtitle:
      'Snelle en betrouwbare tools voor IBAN-controle en financiële berekeningen. 100% in uw browser berekend.',
    metaTitle: 'Gratis Financiële en IBAN Calculators | Zetawala Money',
    metaDescription:
      'Gratis IBAN-controle en financiële rekenhulpen voor Nederland, België en Europa. Zonder registratie.',
    featuredToolsTitle: 'Populaire rekenhulpen',
    categoriesTitle: 'Beschikbare tools',
    guidesTitle: 'Handige artikelen',
    builtForTitle: 'Ontworpen voor Nederland en Europa',
    builtForSubtitle: 'Volledig compatibel met de ISO 13616 standaarden en het Europese SEPA-betalingsverkeer.',
    aboutTitle: 'Over Zetawala Money',
    aboutText:
      'Zetawala Money biedt gratis en privacyvriendelijke online rekenhulpen. Alle berekeningen worden lokaal uitgevoerd zonder dat er gegevens naar servers worden gestuurd.',
    aboutNetworkNotice:
      'Zetawala Money maakt deel uit van het Zetawala netwerk van gratis online tools.',
    faqTitle: 'Veelgestelde Vragen (FAQ)',
    mostUsedTools: [
      {
        title: 'IBAN Nummer Controleren & Valideren',
        slug: 'nl/iban-controleren',
        description: 'Controleer de geldigheid van Nederlandse en internationale IBAN-nummers met MOD-97.',
        badge: 'ISO 13616',
        category: 'banking',
      },
    ],
    categoryTools: {
      banking: [
        {
          title: 'IBAN Controleren',
          slug: 'nl/iban-controleren',
          description: 'Valideer IBAN-rekeningen voor meer dan 80 landen volgens officiële standaarden.',
          badge: 'Bankieren',
          category: 'banking',
        },
      ],
    },
    popularGuides: [],
    faqs: [
      {
        q: 'Zijn de rekenhulpen op Zetawala Money gratis?',
        a: 'Ja, al onze tools zijn volledig gratis te gebruiken zonder account of abonnement.',
      },
      {
        q: 'Worden ingevoerde rekeningnummers opgeslagen?',
        a: 'Nee. Alle validaties gebeuren rechtstreeks in uw browser en worden nooit opgeslagen.',
      },
      {
        q: 'Hoe controleert de tool een IBAN-nummer?',
        a: 'Door de officiële ISO 13616 mod-97 controleberekening uit te voeren op het ingevoerde nummer.',
      },
      {
        q: 'Werkt dit voor alle Europese bankrekeningen?',
        a: 'Ja, de tool ondersteunt alle SEPA-landen en meer dan 80 officiële SWIFT-landen.',
      },
      {
        q: 'Kan ik het gecontroleerde IBAN gemakkelijk kopiëren?',
        a: 'Ja, er is een knop om het IBAN netjes gegroepeerd in blokjes van 4 tekens te kopiëren.',
      },
      {
        q: 'Geeft deze controle uitsluitsel over de rekeninghouder?',
        a: 'Nee, het is een wiskundige validatie van de structuur en controlegetallen.',
      },
    ],
  },
};
