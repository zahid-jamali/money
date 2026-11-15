import { PageContent } from '../types';

export const contentPlKalkulatorWynagrodzen: PageContent = {
  metaTitle: 'Kalkulator Wynagrodzeń 2026: Brutto na Netto (UoP, Zlecenie, Dzieło)',
  metaDescription:
    'Oblicz pensję netto na rękę w 2026 roku. Kalkulator wynagrodzeń uwzględnia składki ZUS (13,71%), NFZ (9%), zaliczkę na PIT 12%/32%, ulgę dla młodych oraz koszt pracodawcy.',
  h1: 'Kalkulator Wynagrodzeń 2026: Brutto na Netto',
  quickAnswer:
    'W 2026 roku przy płacy minimalnej 4 666 zł brutto na umowie o pracę wypłata netto na rękę wynosi dokładnie 3 510,92 zł. Przy średniej pensji 8 000 zł brutto pracownik otrzymuje 5 783,91 zł netto, składki ZUS wynoszą 1 096,80 zł, składka zdrowotna 621,29 zł, a zaliczka na PIT 498 zł.',
  howItWorks: [
    {
      label: 'Składki ZUS Społeczne Pracownika (13,71%)',
      formula: 'ZUS = Brutto × (9,76% emerytalna + 1,50% rentowa + 2,45% chorobowa)',
      ruleCitation: 'Ustawa o systemie ubezpieczeń społecznych (Dz.U. 2024 poz. 497)',
      effectiveDate: 'Obowiązuje w 2026 r. z rocznym limitem 30-krotności wynoszącym 260 190 zł.',
    },
    {
      label: 'Składka Zdrowotna NFZ (9,00%)',
      formula: 'Zdrowotna = (Brutto - ZUS Społeczny) × 9,00%',
      ruleCitation: 'Ustawa o świadczeniach opieki zdrowotnej finansowanych ze środków publicznych',
      effectiveDate: 'W 100% nieodliczalna od podatku dochodowego PIT.',
    },
    {
      label: 'Zaliczka na Podatek Dochodowy PIT (12% lub 32%)',
      formula: 'Zaliczka PIT = Max(0, Round((Podstawa Zdrowotna - KUP) × 12%) - 300 zł)',
      ruleCitation: 'Ustawa o podatku dochodowym od osób fizycznych (Dz.U. 2024 poz. 226)',
      effectiveDate: 'I próg 12% do 120 000 zł dochodu rocznie, II próg 32% od nadwyżki, kwota wolna 30 000 zł.',
    },
  ],
  articleSections: [
    {
      id: 'zasady-obliczania-wynagrodzenia-2026',
      title: 'Zasady Obliczania Wynagrodzenia Netto z Brutto w 2026 Roku',
      level: 2,
      content: `Obliczanie wynagrodzenia w Polsce opiera się na wieloetapowym potrącaniu składek na ubezpieczenia społeczne, ubezpieczenie zdrowotne oraz zaliczki na podatek dochodowy od osób fizycznych (PIT). W 2026 roku system podatkowo-składkowy charakteryzuje się następującymi kluczowymi regułami:

1. **Składki na Ubezpieczenia Społeczne Pracownika (13,71%)**:
Z kwoty brutto pracownika pracodawca potrąca:
- **Składka emerytalna (9,76%)**: trafia na indywidualne konto ubezpieczonego w ZUS oraz subkonto.
- **Składka rentowa (1,50%)**: finansuje świadczenia z tytułu niezdolności do pracy i renty rodzinne.
- **Składka chorobowa (2,45%)**: jest obowiązkowa na umowie o pracę i uprawnia do płatnego zwolnienia lekarskiego (L4) oraz zasiłku macierzyńskiego.
Łączna suma składek społecznych wynosi 13,71% wynagrodzenia brutto.

2. **Podstawa Wymiaru Składki Zdrowotnej**:
Podstawą naliczenia składki na powszechne ubezpieczenie zdrowotne (NFZ) jest kwota brutto pomniejszona o składki społeczne pracownika (Gross – 13,71% ZUS).

3. **Składka Zdrowotna NFZ (9,00%)**:
Wynosi 9% podstawy wymiaru. Zgodnie z zasadami Polskiego Ładu składka zdrowotna nie podlega odliczeniu od podatku dochodowego na umowie o pracę ani umowie zleceniu.

4. **Koszty Uzyskania Przychodów (KUP)**:
Pracownik zatrudniony na umowie o pracę ma prawo do zryczałtowanych kosztów pomniejszających podstawę opodatkowania:
- **250 zł miesięcznie (3 000 zł rocznie)**: w przypadku pracy w miejscu zamieszkania pracownika.
- **300 zł miesięcznie (3 600 zł rocznie)**: podwyższone koszty dla pracowników dojeżdżających z innej miejscowości.
- **50% koszty autorskie**: dla pracowników wykonujących pracę twórczą i przenoszących prawa autorskie (limit roczny 120 000 zł).`,
    },
    {
      id: 'skala-podatkowa-i-oswiadczenie-pit-2',
      title: 'Skala Podatkowa (12% i 32%) oraz Kwota Zmniejszająca Podatek (PIT-2)',
      level: 2,
      content: `Podatek dochodowy od osób fizycznych dla pracowników rozliczany jest według dwustopniowej skali podatkowej:

- **I Próg Podatkowy (12%)**: obejmuje roczną podstawę opodatkowania do kwoty **120 000 zł**. W tym przedziale podatek wynosi 12% dochodu pomniejszone o kwotę zmniejszającą podatek.
- **II Próg Podatkowy (32%)**: ma zastosowanie do nadwyżki dochodu ponad **120 000 zł**. Od miesiąca, w którym skumulowana podstawa przekracza 120 tysięcy złotych, zaliczka na PIT wzrasta do 32%.
- **Kwota Wolna od Podatku (30 000 zł)**: generuje roczną kwotę zmniejszającą podatek w wysokości **3 600 zł** (30 000 zł × 12%).
- **Oświadczenie PIT-2**: Pracownik składający PIT-2 upoważnia płatnika (pracodawcę) do stosowania miesięcznej kwoty zmniejszającej podatek:
  - 1/12 kwoty (300 zł miesięcznie) – w przypadku jednej umowy,
  - 1/24 kwoty (150 zł miesięcznie) – przy pracy u dwóch pracodawców równocześnie,
  - 1/36 kwoty (100 zł miesięcznie) – przy trzech umowach o pracę.
Brak złożenia PIT-2 skutkuje brakiem odliczenia kwoty 300 zł co miesiąc, co obniża bieżącą wypłatę netto, a nadpłacony podatek zwracany jest dopiero w rocznym zeznaniu PIT-37.`,
    },
    {
      id: 'limit-30-krotnosci-i-ppk',
      title: 'Roczny Limit 30-Krotności Składek ZUS oraz Pracownicze Plany Kapitałowe (PPK)',
      level: 2,
      content: `W przypadku pracowników o wysokich zarobkach kluczowe znaczenie ma instytucja rocznego ograniczenia podstawy wymiaru składek:

1. **Limit 30-Krotności Przeciętnego Wynagrodzenia**:
Zgodnie z art. 19 ustawy o systemie ubezpieczeń społecznych, roczna podstawa wymiaru składek na ubezpieczenia emerytalne i rentowe nie może być wyższa od 30-krotności prognozowanego przeciętnego wynagrodzenia w gospodarce narodowej. W 2026 roku limit ten wynosi **260 190 zł**.
Po przekroczeniu tej kwoty w trakcie roku pracodawca przestaje pobierać składki emerytalne (9,76% pracownik + 9,76% pracodawca) oraz rentowe (1,5% pracownik + 6,5% pracodawca). Składka chorobowa (2,45%), wypadkowa oraz zdrowotna (9%) pobierane są nadal bez ograniczeń. Skutkuje to zauważalnym wzrostem miesięcznej pensji netto w ostatnich miesiącach roku.

2. **Wpływ PPK na Wypłatę Netto**:
W przypadku uczestnictwa w Pracowniczych Planach Kapitałowych (PPK):
- Pracownik finansuje wpłatę podstawową w wysokości **2,0%** wynagrodzenia brutto (potrącaną z pensji netto).
- Pracodawca finansuje wpłatę w wysokości **1,5%** brutto ze środków własnych.
Wpłata pracodawcy stanowi dla pracownika przychód ze stosunku pracy, co oznacza, że pracownik płaci od niej zaliczkę na podatek dochodowy (12% lub 32%).`,
    },
    {
      id: 'calkowity-koszt-pracodawcy',
      title: 'Całkowity Koszt Pracodawcy (Narzut na Wynagrodzenia)',
      level: 2,
      content: `Kwota brutto widniejąca na umowie o pracę nie jest całkowitym kosztem, jaki ponosi zatrudniający. Pracodawca zobowiązany jest do sfinansowania dodatkowych składek z własnych środków:

- **Składka emerytalna pracodawcy**: 9,76%
- **Składka rentowa pracodawcy**: 6,50%
- **Składka wypadkowa**: standardowo 1,67% (dla podmiotów zgłaszających do 9 ubezpieczonych)
- **Fundusz Pracy (FP)**: 2,45%
- **Fundusz Gwarantowanych Świadczeń Pracowniczych (FGSP)**: 0,10%
Łączny narzut składek społecznych pracodawcy wynosi **20,48%** wynagrodzenia brutto. 

Oznacza to, że aby pracownik otrzymał 8 000 zł brutto (ok. 5 784 zł netto), pracodawca musi wydać łącznie **9 638,40 zł**. Różnica między łącznym kosztem a kwotą na rękę (tzw. klin podatkowo-składkowy) wynosi w tym przykładzie aż 3 854,49 zł.`,
    },
    {
      id: 'ulga-dla-mlodych-i-specjalne-zwolnienia-pit',
      title: 'Ulga dla Młodych do 26 Lat i Pozostałe Zwolnienia Podatkowe',
      level: 2,
      content: `W polskim systemie podatkowym funkcjonują cztery tożsame limitem zwolnienia z podatku dochodowego (art. 21 ust. 1 pkt 148, 152, 153 i 154 ustawy o PIT):

1. **Ulga dla Młodych (do 26. roku życia)**: zwalnia przychody z pracy i umów zlecenia do limitu 85 528 zł rocznie. Młody pracownik otrzymuje wyższą pensję netto, nie płacąc zaliczki na podatek, lecz składki ZUS społeczne i NFZ są pobierane w standardowej wysokości.
2. **Ulga na Powrót**: dedykowana osobom, które przez co najmniej trzy lata mieszkały i pracowały za granicą, a następnie przeniosły rezydencję podatkową do Polski. Zwolnienie obowiązuje przez cztery kolejne lata podatkowe.
3. **Ulga dla Rodzin 4+**: przysługuje rodzicom wychowującym co najmniej czworo dzieci. Każdy z rodziców ma prawo do odrębnego limitu zwolnienia 85 528 zł, co łącznie daje 171 056 zł wolnego od podatku przychodu dla obojga małżonków.
4. **Ulga dla Pracujących Seniorów**: dla osób, które osiągnęły powszechny wiek emerytalny (60 lat kobiety, 65 lat mężczyźni), ale zrezygnowały z pobierania emerytury i kontynuują pracę zawodową.

Każde z tych zwolnień sumuje się z powszechną kwotą wolną od podatku (30 000 zł), co sprawia, że faktyczny próg opodatkowania wynosi aż **115 528 zł rocznie**.`,
    },
    {
      id: 'roczne-rozliczenie-pit-37-i-optymalizacja',
      title: 'Roczne Rozliczenie PIT-37: Wspólne Opodatkowanie i Zwroty Podatku',
      level: 2,
      content: `Comiesięczne zaliczki pobierane przez pracodawcę mają charakter zaliczkowy. Ostatecznego rozliczenia podatku pracownik dokonuje do 30 kwietnia następnego roku podatkowego na formularzu PIT-37 generowanym w usłudze Twój e-PIT.

Główne mechanizmy optymalizacyjne w rozliczeniu rocznym:
- **Wspólne rozliczenie z małżonkiem**: Szczególnie korzystne, gdy jeden z małżonków osiąga dochody w drugim progu (powyżej 120 000 zł), a drugi nie pracuje lub zarabia poniżej kwoty wolnej. Podatek oblicza się od połowy łącznych dochodów, co pozwala zaoszczędzić nawet kilkanaście tysięcy złotych rocznie.
- **Ulga na dzieci (prorodzinna)**: Odliczenie wynosi 1 112,04 zł rocznie na pierwsze i drugie dziecko, 2 000,04 zł na trzecie dziecko oraz 2 700,00 zł na czwarte i każde kolejne dziecko. Jeśli podatek jest za niski, kwotę ulgi można odebrać ze składek ZUS i zdrowotnych.
- **Ulga termomodernizacyjna i rehabilitacyjna**: Pozwalają na odliczenie wydatków na ocieplenie domu, pompę ciepła, fotowoltaikę lub cele rehabilitacyjne bezpośrednio od dochodu.`,
    },
  ],
  examples: [
    {
      title: 'Przykład 1: Pensja 6 000 zł brutto (standardowa umowa o pracę, pracownik powyżej 26 lat)',
      scenario:
        'Kalkulacja miesięcznego wynagrodzenia specjalisty ds. obsługi klienta zatrudnionego na pełny etat w Warszawie, zamieszkałego w Warszawie (KUP 250 zł, złożony PIT-2 na 300 zł).',
      calculationType: 'custom',
      inputAmount: 6000.0,
      resultTotal: 4437.93,
      customFields: [
        { label: 'Wynagrodzenie brutto', value: '6 000,00 zł' },
        { label: 'Składki ZUS społeczne (13,71%)', value: '-822,60 zł' },
        { label: 'Składka zdrowotna NFZ (9%)', value: '-465,97 zł' },
        { label: 'Zaliczka na PIT (12% minus 300 zł)', value: '-273,50 zł' },
        { label: 'Wypłata na rękę (Netto)', value: '4 437,93 zł', highlight: true },
        { label: 'Łączny koszt pracodawcy', value: '7 228,80 zł' },
      ],
      explanation:
        'Z kwoty 6 000 zł potrącane jest 822,60 zł ZUS społecznego. Podstawa zdrowotna wynosi 5 177,40 zł (zdrowotna 465,97 zł). Podstawa PIT wynosi 5 177,40 zł - 250 zł = 4 927,40 zł -> 4 927 zł. Podatek 4 927 × 12% - 300 zł = 291,24 zł -> 291 zł zaliczki. Pracownik otrzymuje na konto 4 437,93 zł.',
    },
    {
      title: 'Przykład 2: Pensja 12 000 zł brutto (programista, praca w miejscu zamieszkania)',
      scenario:
        'Kalkulacja miesięczna starszego programisty zarabiającego 12 000 zł brutto na umowie o pracę z PIT-2.',
      calculationType: 'custom',
      inputAmount: 12000.0,
      resultTotal: 8475.83,
      customFields: [
        { label: 'Wynagrodzenie brutto', value: '12 000,00 zł' },
        { label: 'Składki ZUS społeczne (13,71%)', value: '-1 645,20 zł' },
        { label: 'Składka zdrowotna NFZ (9%)', value: '-931,93 zł' },
        { label: 'Zaliczka na PIT (12%)', value: '-947,04 zł' },
        { label: 'Wypłata na rękę (Netto)', value: '8 475,83 zł', highlight: true },
        { label: 'Łączny koszt pracodawcy', value: '14 457,60 zł' },
      ],
      explanation:
        'Pracownik z pensją 12 000 zł brutto otrzymuje na rękę 8 475,83 zł. Koszt dla firmy przekracza 14 450 zł miesięcznie.',
    },
  ],
  faqs: [
    {
      q: 'Ile wynosi płaca minimalna netto w 2026 roku?',
      a: 'W 2026 roku minimalne wynagrodzenie wynosi 4 666 zł brutto, co przy standardowych kosztach uzyskania przychodów (250 zł) i złożonym oświadczeniu PIT-2 daje dokładnie 3 510,92 zł netto na rękę.',
    },
    {
      q: 'Kiedy pensja netto wzrasta ze względu na limit 30-krotności ZUS?',
      a: 'Limit 30-krotności w 2026 roku wynosi 260 190 zł. Po zarobieniu tej kwoty w danym roku kalendarzowym pracodawca przestaje pobierać składki emerytalne i rentowe, dzięki czemu wypłata netto rośnie o około 11,26%.',
    },
    {
      q: 'Kiedy wchodzi się w II próg podatkowy 32%?',
      a: 'W II próg podatkowy wchodzi się w miesiącu, w którym skumulowana podstawa opodatkowania od początku roku przekroczy 120 000 zł. Stawka 32% jest naliczana wyłącznie od nadwyżki powyżej 120 000 zł.',
    },
    {
      q: 'Czy osoba do 26. roku życia płaci składki ZUS?',
      a: 'Tak. Ulga dla młodych (PIT 0%) zwalnia jedynie z podatku dochodowego. Młodzi pracownicy na umowie o pracę płacą pełne składki ZUS społeczne (13,71%) oraz składkę zdrowotną NFZ (9%).',
    },
    {
      q: 'Co się stanie, jeśli nie złożę pracodawcy PIT-2?',
      a: 'Brak formularza PIT-2 oznacza, że pracodawca nie odlicza miesięcznej kwoty zmniejszającej podatek (300 zł). Twoja miesięczna wypłata netto będzie niższa o 300 zł, jednak całą tę kwotę odzyskasz w rocznym zwrocie podatku z urzędu skarbowego.',
    },
    {
      q: 'Jak rezygnacja z PPK wpływa na pensję?',
      a: 'Rezygnacja z PPK zwiększa bieżącą wypłatę netto o 2% wynagrodzenia brutto (nie potrąca się składki pracownika) oraz nieznacznie obniża zaliczkę na podatek o wartość podatku od wpłaty pracodawcy.',
    },
    {
      q: 'Czym różnią się podwyższone koszty uzyskania przychodów (300 zł)?',
      a: 'Podwyższone KUP (300 zł zamiast 250 zł miesięcznie) przysługują pracownikom, których stałe miejsce zamieszkania znajduje się w innej miejscowości niż zakład pracy i nie otrzymują dodatku za rozłąkę.',
    },
    {
      q: 'Czy umowa zlecenie daje prawo do płatnego urlopu wypoczynkowego?',
      a: 'Nie. Umowa zlecenie regulowana jest Kodeksem Cywilnym, a nie Kodeksem Pracy. Zleceniobiorcy nie przysługuje kodeksowy urlop wypoczynkowy, chyba że strony zawarły odrębne odpłatne porozumienie w treści umowy.',
    },
  ],
  sources: [
    {
      label: 'Ministerstwo Finansów – Skala Podatkowa i PIT',
      url: 'https://www.podatki.gov.pl/pit/',
    },
    {
      label: 'Zakład Ubezpieczeń Społecznych (ZUS) – Składki i Limity 2026',
      url: 'https://www.zus.pl/baza-wiedzy/skladki-wskazniki-odsetki',
    },
    {
      label: 'Dziennik Ustaw RP – Rozporządzenie o Płacy Minimalnej',
      url: 'https://isap.sejm.gov.pl',
    },
  ],
  updatedAt: '2026-11-15',
  relatedTools: [
    {
      title: 'Kalkulator B2B vs Umowa o Pracę',
      slug: 'pl/kalkulator-b2b',
      description: 'Porównaj zyski z etatu i samozatrudnienia z ryczałtem i podatkiem liniowym.',
      category: 'Wynagrodzenia',
    },
    {
      title: 'Płaca Minimalna 2026',
      slug: 'pl/placa-minimalna',
      description: 'Stawki brutto, netto oraz historia płacy minimalnej w Polsce od 2015 roku.',
      category: 'Płace',
    },
    {
      title: 'Progi Podatkowe 2026',
      slug: 'pl/progi-podatkowe',
      description: 'Sprawdź zasady opodatkowania w I i II progu (12% i 32%) oraz kwotę wolną.',
      category: 'Podatki',
    },
  ],
  relatedGuides: [
    {
      title: 'B2B czy Umowa o Pracę?',
      slug: 'pl/poradniki/b2b-czy-umowa-o-prace',
      description: 'Wielkie porównanie zarobków, urlopów i ryzyk prawnych w 2026 roku.',
      category: 'Poradniki',
    },
    {
      title: 'Ryczałt czy Podatek Liniowy 19%?',
      slug: 'pl/poradniki/ryczalt-czy-liniowy',
      description: 'Sprawdź, która forma opodatkowania przyniesie Ci wyższy zysk.',
      category: 'Podatki',
    },
    {
      title: 'Jak Czytać Pasek Wypłaty?',
      slug: 'pl/poradniki/jak-czytac-pasek-wyplaty',
      description: 'Wyjaśnienie wszystkich skrótów i potrąceń ZUS na pasku płacowym.',
      category: 'Wynagrodzenia',
    },
  ],
};
