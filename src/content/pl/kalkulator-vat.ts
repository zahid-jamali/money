import { PageContent } from '../types';

export const kalkulatorVatPl: PageContent = {
  metaTitle: 'Kalkulator VAT Polska 2026 | Oblicz Netto i Brutto (23%, 8%, 5%)',
  metaDescription:
    'Szybki kalkulator VAT w Polsce. Oblicz kwoty netto i brutto dla stawek 23%, 8% i 5%. Sprawdź zasady split payment, białą listę podatników i limit zwolnienia.',
  h1: 'Kalkulator VAT 2026 (Stawki 23%, 8%, 5% Netto i Brutto)',
  quickAnswer:
    'Aby dodać 23% VAT do kwoty netto, pomnóż wartość netto przez 1,23 (lub przez 0,23, aby uzyskać sam podatek). Aby wyodrębnić 23% VAT z kwoty brutto, podziel kwotę brutto przez 1,23, uzyskując wartość netto, lub pomnóż kwotę brutto przez ułamek 23/123 (ok. 0,18699), aby obliczyć kwotę podatku.',
  howItWorks: [
    {
      label: 'Dodawanie stawki podstawowej 23% (Netto → Brutto)',
      formula: 'Brutto = Netto × 1,23 | Kwota VAT = Netto × 0,23',
      ruleCitation: 'Ustawa o podatku od towarów i usług, art. 41 ust. 1 w zw. z art. 146ef',
      effectiveDate: 'Stawka podstawowa obowiązująca w 2026 r.',
    },
    {
      label: 'Wyodrębnianie stawki 23% (Brutto → Netto)',
      formula: 'Netto = Brutto ÷ 1,23 | Kwota VAT = Brutto × (23 / 123)',
      ruleCitation: 'Ustawa o VAT, art. 106e (Elementy faktury)',
      effectiveDate: 'Współczynnik podatkowy 23/123 dla stawki 23%',
    },
    {
      label: 'Dodawanie stawki obniżonej 8% (Netto → Brutto)',
      formula: 'Brutto = Netto × 1,08 | Kwota VAT = Netto × 0,08',
      ruleCitation: 'Ustawa o VAT, załącznik nr 3',
      effectiveDate: 'Budownictwo objęte społecznym programem mieszkaniowym, transport',
    },
    {
      label: 'Wyodrębnianie stawki obniżonej 8% (Brutto → Netto)',
      formula: 'Netto = Brutto ÷ 1,08 | Kwota VAT = Brutto × (8 / 108)',
      ruleCitation: 'Ustawa o VAT, art. 106e',
      effectiveDate: 'Współczynnik podatkowy 8/108 dla stawki 8%',
    },
  ],
  articleSections: [
    {
      id: 'zasady-dzialania-vat-w-polsce',
      title: 'Jak działa podatek od towarów i usług (VAT) w Polsce w 2026 roku',
      level: 2,
      content:
        'Podatek od towarów i usług (PTU), powszechnie określany jako VAT (Value Added Tax), jest najważniejszym podatkiem pośrednim i głównym źródłem dochodów budżetu państwa w Polsce. Funkcjonuje w oparciu o Ustawę z dnia 11 marca 2004 r. o podatku od towarów i usług oraz zharmonizowane dyrektywy unijne (w szczególności Dyrektywę 2006/112/WE).\n\nMechanizm VAT polega na opodatkowaniu wartości dodanej na każdym kolejnym etapie obrotu gospodarczego. Przedsiębiorca zarejestrowany jako czynny podatnik VAT dolicza podatek do ceny sprzedaży swoich towarów lub usług (podatek należny). Jednocześnie przysługuje mu prawo do obniżenia kwoty podatku należnego o kwotę podatku naliczonego przy nabyciu towarów i usług wykorzystywanych do wykonywania czynności opodatkowanych. Rozliczenie z urzędem skarbowym następuje w cyklach miesięcznych lub kwartalnych poprzez zintegrowany plik JPK_V7.',
    },
    {
      id: 'stawki-podatku-vat',
      title: 'Obowiązujące stawki podatku VAT: 23%, 8%, 5% i 0%',
      level: 2,
      content:
        'W polskim porządku prawnym obowiązują cztery podstawowe poziomy opodatkowania podatkiem od towarów i usług:\n\n- **Stawka podstawowa (23%)**: Obejmuje większość towarów i usług na rynku, m.in. sprzęt elektroniczny, paliwa, usługi doradcze, prawnicze, programistyczne, meble, odzież dla dorosłych oraz większość materiałów przemysłowych.\n- **Stawka obniżona (8%)**: Przeznaczona dla ściśle zdefiniowanych kategorii wymienionych w Załączniku nr 3 do ustawy o VAT. Dotyczy m.in. robót budowlano-montażowych w ramach społecznego programu mieszkaniowego (mieszkania do 150 m² i domy do 300 m²), dostawy niektórych wyrobów medycznych, usług gastronomicznych (z wyłączeniem napojów alkoholowych), usług transportu pasażerskiego oraz biletów na wydarzenia kulturalne i sportowe.\n- **Stawka obniżona (5%)**: Objęto nią dobra pierwszej potrzeby wymienione w Załączniku nr 10 do ustawy, m.in. podstawowe artykuły spożywcze (chleb, mięso, ryby, nabiał, owoce i warzywa), książki drukowane oraz czasopisma specjalistyczne.\n- **Stawka 0% (ze statusem prawa do odliczenia)**: Ma zastosowanie w międzynarodowym obrocie gospodarczym, w szczególności przy wewnątrzwspólnotowej dostawie towarów (WDT) oraz eksporcie towarów poza obszar celny Unii Europejskiej, pod warunkiem posiadania dokumentacji potwierdzającej wywóz towarów.\n- **Zwolnienia z VAT**: Poza stawkami procentowymi ustawa przewiduje zwolnienia przedmiotowe (np. usługi medyczne, edukacyjne, finansowe i ubezpieczeniowe na podstawie art. 43 ustawy) oraz zwolnienie podmiotowe dla drobnych przedsiębiorców.',
    },
    {
      id: 'split-payment-mechanizm-podzielonej-platnosci',
      title: 'Mechanizm Podzielonej Płatności (Split Payment / MPP)',
      level: 2,
      content:
        'Mechanizm Podzielonej Płatności (MPP), uregulowany w art. 108a ustawy o VAT, jest kluczowym narzędziem uszczelniania systemu podatkowego. Polega na rozdzieleniu płatności za fakturę na dwa odrębne strumienie bankowe: kwota netto trafia na standardowy rachunek bieżący sprzedawcy, natomiast kwota podatku VAT jest automatycznie przekazywana przez system bankowy na dedykowany, wydzielony rachunek VAT dostawcy.\n\nStosowanie Split Payment jest **obowiązkowe**, gdy łącznie spełnione są dwa warunki:\n1. Transakcja dotyczy towarów lub usług wrażliwych wymienionych w Załączniku nr 15 do ustawy o VAT (np. wyroby stalowe, metale szlachetne, paliwa, smartfony, laptopy, odpady, części samochodowe czy roboty budowlane);\n2. Całkowita kwota brutto należności wykazana na fakturze przekracza kwotę **15 000 PLN** (lub równowartość w walucie obcej).\n\nW takim przypadku sprzedawca ma bezwzględny obowiązek umieszczenia na fakturze adnotacji „mechanizm podzielonej płatności”, a nabywca musi zrealizować przelew z wykorzystaniem dedykowanego komunikatu przelewu MPP. Złamanie tego obowiązku wiąże się z sankcją w wysokości 30% kwoty podatku wykazanego na fakturze oraz brakiem możliwości zaliczenia wydatku do kosztów uzyskania przychodów (KUP) w podatku PIT/CIT.',
    },
    {
      id: 'biala-lista-podatnikow-vat',
      title: 'Biała Lista Podatników VAT i Obowiązki Weryfikacyjne Nabywcy',
      level: 2,
      content:
        'Biała lista podatników VAT to jednolity, publiczny rejestr prowadzony w formie elektronicznej przez Szefa Krajowej Administracji Skarbowej (KAS). Umożliwia weryfikację statusu rejestracyjnego kontrahenta (czy jest podatnikiem czynnym, zwolnionym, czy został wykreślony z rejestru) oraz jego oficjalnych firmowych rachunków bankowych zgłoszonych do urzędu skarbowego.\n\nPrzedsiębiorcy dokonujący płatności za transakcje B2B o wartości przekraczającej **15 000 PLN brutto** są zobowiązani do weryfikacji, czy rachunek bankowy odbiorcy widnieje na Białej Liście w dniu zlecenia przelewu. Dokonanie przelewu na rachunek spoza rejestru rodzi poważne konsekwencje:\n- Utrata prawa do zaliczenia wydatku do kosztów uzyskania przychodów (art. 22p ustawy o PIT / art. 15b ustawy o CIT);\n- Solidarna odpowiedzialność całym majątkiem za zaległości podatkowe sprzedawcy w części VAT przypadającej na tę transakcję.\n\nAby uwolnić się od sankcji w razie omyłkowego przelewu na niezgłoszone konto, nabywca musi złożyć zawiadomienie ZAW-NR do naczelnika urzędu skarbowego właściwego dla wystawcy faktury w nieprzekraczalnym terminie 7 dni od dnia zlecenia przelewu.',
    },
    {
      id: 'zwolnienie-podmiotowe-i-jpk-v7',
      title: 'Limit zwolnienia z VAT (200 000 PLN) i sprawozdawczość JPK_V7',
      level: 2,
      content:
        'Zgodnie z art. 113 ust. 1 ustawy o VAT zwalnia się od podatku sprzedaż dokonywaną przez podatników, u których wartość sprzedaży nie przekroczyła łącznie w poprzednim roku podatkowym kwoty **200 000 PLN** netto (do limitu nie wlicza się m.in. WDT, odpłatnego świadczenia usług zwolnionych przedmiotowo oraz dostawy środków trwałych). W przypadku przedsiębiorców rozpoczynających działalność w trakcie roku podatkowego limit ten wylicza się proporcjonalnie do liczby dni prowadzenia działalności.\n\nNiektórzy przedsiębiorcy są ustawowo wyłączeni ze zwolnienia podmiotowego bez względu na obrót – dotyczy to m.in. osób świadczących usługi doradcze, prawnicze, jubilerskie, ściągania długów czy sprzedających towary akcyzowe i przez internet wybrane kategorie elektroniki.\n\nWszyscy czynni podatnicy VAT mają obowiązek prowadzenia elektronicznej ewidencji i comiesięcznego przesyłania struktury **JPK_V7M** (lub kwartalnej części deklaracyjnej **JPK_V7K**), zawierającej szczegółowe oznaczenia procedur (np. MPP, TP) oraz kody grup towarowo-usługowych (GTU).',
    },
    {
      id: 'formuly-matematyczne-obliczen',
      title: 'Wzory matematyczne: Obliczanie VAT od netto i od brutto',
      level: 2,
      content:
        'W codziennych rozliczeniach handlowych kluczowe jest rozróżnienie dwóch kierunków obliczeń:\n\n### 1. Dodawanie podatku VAT (od kwoty Netto do Brutto)\nGdy znasz cenę bazową netto i chcesz ustalić cenę brutto:\n$$\\text{Kwota VAT} = \\text{Kwota Netto} \\times \\text{Stawka}\$$\n$$\\text{Kwota Brutto} = \\text{Kwota Netto} \\times (1 + \\text{Stawka})$$\nDla stawki 23%: $\\text{Brutto} = \\text{Netto} \\times 1,23$.\nDla stawki 8%: $\\text{Brutto} = \\text{Netto} \\times 1,08$.\nDla stawki 5%: $\\text{Brutto} = \\text{Netto} \\times 1,05$.\n\n### 2. Wyodrębnianie podatku VAT (od kwoty Brutto do Netto)\nGdy posiadasz łączną kwotę brutto i musisz obliczyć zawarty w niej podatek:\n$$\\text{Kwota Netto} = \\text{Kwota Brutto} \\div (1 + \\text{Stawka})$$\nNigdy nie należy odejmować 23% bezpośrednio od kwoty brutto. Odjęcie 23% od 123 zł dałoby 94,71 zł zamiast prawidłowych 100 zł netto. Właściwy współczynnik wyliczenia samego podatku to:\n$$\\text{Kwota VAT (23%)} = \\text{Brutto} \\times \\frac{23}{123} \\approx \\text{Brutto} \\times 0,1869919$$\n$$\\text{Kwota VAT (8%)} = \\text{Brutto} \\times \\frac{8}{108} \\approx \\text{Brutto} \\times 0,0740741$$\n$$\\text{Kwota VAT (5%)} = \\text{Brutto} \\times \\frac{5}{105} \\approx \\text{Brutto} \\times 0,0476190$$',
    },
  ],
  examples: [
    {
      title: 'Przykład 1: Wystawienie faktury B2B za usługi programistyczne (23% VAT)',
      scenario:
        'Programista prowadzący jednoosobową działalność gospodarczą w Warszawie ustalił z klientem stawkę za wykonanie oprogramowania w wysokości 8 000,00 PLN netto.',
      calculationType: 'add',
      inputAmount: 8000.0,
      rate: 23,
      resultVat: 1840.0,
      resultTotal: 9840.0,
      explanation:
        'Przedsiębiorca mnoży kwotę 8 000,00 PLN przez 0,23, co daje kwotę podatku VAT 1 840,00 PLN. Łączna kwota brutto na fakturze wynosi 9 840,00 PLN (8 000,00 PLN netto + 1 840,00 PLN VAT).',
    },
    {
      title: 'Przykład 2: Wyodrębnienie 8% podatku VAT z paragonu za usługi transportowe',
      scenario:
        'Dział księgowości rozlicza fakturę za przewóz osób o łącznej wartości brutto 1 620,00 PLN i potrzebuje ustalić kwotę podatku naliczonego do odliczenia.',
      calculationType: 'remove',
      inputAmount: 1620.0,
      rate: 8,
      resultVat: 120.0,
      resultTotal: 1500.0,
      explanation:
        'Księgowy dzieli kwotę brutto 1 620,00 PLN przez 1,08, uzyskując wartość netto 1 500,00 PLN. Kwota podatku VAT wynosi dokładnie 120,00 PLN (1 620,00 PLN - 1 500,00 PLN), co odpowiada wyliczeniu 1 620,00 PLN × (8 / 108).',
    },
  ],
  faqs: [
    {
      q: 'Ile wynosi podstawowa stawka VAT w Polsce w 2026 roku?',
      a: 'Podstawowa stawka VAT wynosi 23%. Obowiązuje ona na większość towarów i usług komercyjnych na terytorium Rzeczypospolitej Polskiej.',
    },
    {
      q: 'Jakie stawki obniżone podatku VAT obowiązują w Polsce?',
      a: 'W Polsce obowiązują stawki obniżone: 8% (m.in. budownictwo mieszkaniowe, usługi transportu pasażerskiego), 5% (podstawowa żywność, pieczywo, książki) oraz stawka 0% (eksport towarów i WDT).',
    },
    {
      q: 'Jak prawidłowo obliczyć kwotę netto z kwoty brutto przy stawce 23%?',
      a: 'Należy podzielić kwotę brutto przez 1,23. Otrzymany wynik to kwota netto. Różnica między kwotą brutto a netto stanowi wartość podatku VAT (można ją też obliczyć mnożąc brutto przez 23/123).',
    },
    {
      q: 'Dlaczego nie wolno po prostu odjąć 23% od ceny brutto?',
      a: 'Cena brutto stanowi 123% wartości bazowej netto. Odjęcie 23% od 123% oznacza odliczenie ponad 28,29% wartości netto, co prowadzi do błędnego zaniżenia kwoty netto i podatku.',
    },
    {
      q: 'Kiedy mechanizm Split Payment (MPP) jest obowiązkowy?',
      a: 'Split Payment jest obowiązkowy przy transakcjach B2B powyżej 15 000 PLN brutto, jeżeli faktura dokumentuje sprzedaż towarów lub usług wrażliwych z Załącznika nr 15 do ustawy o VAT (np. elektronika, stal, budownictwo).',
    },
    {
      q: 'Co grozi za płatność na rachunek spoza Białej Listy Podatników?',
      a: 'W przypadku płatności powyżej 15 000 PLN na konto niezarejestrowane na Białej Liście grozi brak możliwości zaliczenia wydatku do kosztów podatkowych (KUP) oraz solidarna odpowiedzialność za zaległości podatkowe dostawcy.',
    },
    {
      q: 'Jaki jest limit zwolnienia podmiotowego z VAT w 2026 roku?',
      a: 'Limit zwolnienia podmiotowego z VAT na podstawie art. 113 ust. 1 ustawy o VAT wynosi 200 000 PLN rocznej wartości sprzedaży netto. Po przekroczeniu tego limitu rejestracja do VAT staje się obowiązkowa.',
    },
    {
      q: 'Czy faktura uproszczona (paragon z NIP do 450 zł) daje prawo do odliczenia VAT?',
      a: 'Tak. Paragon z numerem NIP nabywcy opiewający na kwotę do 450 PLN brutto (lub 100 EUR) jest traktowany jak faktura uproszczona i uprawnia do odliczenia podatku VAT.',
    },
  ],
  sources: [
    {
      label: 'Portal Podatki.gov.pl: Oficjalny przewodnik po podatku VAT',
      url: 'https://www.podatki.gov.pl/vat/',
    },
    {
      label: 'Ustawa o podatku od towarów i usług (Ustawa o VAT)',
      url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20040540535',
    },
    {
      label: 'Wykaz Podatników VAT (Biała Lista) – Ministerstwo Finansów',
      url: 'https://www.podatki.gov.pl/wykaz-podatnikow-vat-wyszukiwarka',
    },
    {
      label: 'Główny Urząd Statystyczny (GUS) – Klasyfikacje PKWiU',
      url: 'https://stat.gov.pl',
    },
  ],
  relatedTools: [
    {
      title: 'Sprawdzanie Numeru IBAN i Rachunku Bankowego',
      slug: 'pl/sprawdz-iban',
      description: 'Sprawdź poprawność polskiego i zagranicznego numeru konta bankowego zgodnie z MOD-97.',
      category: 'Bankowość',
    },
    {
      title: 'Europejski Hub Stawek VAT (UE)',
      slug: 'vat-calculator',
      description: 'Porównaj stawki VAT w 27 państwach Unii Europejskiej oraz sprawdź procedury OSS.',
      category: 'Podatki i VAT',
    },
  ],
  relatedGuides: [
    {
      title: 'Czym jest numer IBAN i jak jest zbudowany?',
      slug: 'guides/what-is-an-iban',
      description: 'Kompletny przewodnik po strukturze rachunków bankowych i przelewach SEPA.',
      category: 'Poradniki bankowe',
    },
    {
      title: 'Różnice między IBAN a kodem SWIFT / BIC',
      slug: 'guides/iban-vs-swift-bic',
      description: 'Kiedy w przelewie krajowym i zagranicznym wymagany jest kod BIC/SWIFT banku.',
      category: 'Poradniki bankowe',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Prezentowany kalkulator służy wyłącznie do celów poglądowych i edukacyjnych. Przed złożeniem deklaracji podatkowych skonsultuj się z licencjonowanym doradcą podatkowym lub biurem rachunkowym.',
};
