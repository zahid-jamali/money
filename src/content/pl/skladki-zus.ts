import { PageContent } from '../types';

export const contentPlSkladkiZus: PageContent = {
  metaTitle: 'Składki ZUS 2026: Pełny ZUS, Preferencyjny i Ulga na Start dla Przedsiębiorców',
  metaDescription:
    'Ile wynoszą składki ZUS w 2026 roku dla jednoosobowej działalności gospodarczej? Sprawdź Duży Pełny ZUS (1 188 zł), Preferencyjny Mały ZUS (278 zł), zasady Ulgi na Start oraz składkę NFZ.',
  h1: 'Składki ZUS 2026: Pełny ZUS, Preferencyjny i Ulga na Start',
  quickAnswer:
    'W 2026 roku pełne składki ZUS dla przedsiębiorców wynoszą 1 188,02 zł miesięcznie z dobrowolnym chorobowym (1 060,53 zł bez chorobowego) plus składka zdrowotna. Preferencyjny ZUS dla nowych firm wynosi 278,29 zł z chorobowym (243,99 zł bez), a przez pierwsze 6 miesięcy w ramach Ulgi na Start płaci się 0 zł składek społecznych.',
  howItWorks: [
    {
      label: 'Podstawa Wymiaru Pełnego ZUS-u',
      formula: 'Podstawa = 60% × 8 673 zł (prognozowane przeciętne wynagrodzenie) = 5 203,80 zł',
      ruleCitation: 'Ustawa o systemie ubezpieczeń społecznych (art. 18 ust. 8)',
      effectiveDate: 'Parametry obowiązujące na rok 2026.',
    },
    {
      label: 'Podstawa Preferencyjnego ZUS-u (Mały ZUS)',
      formula: 'Podstawa = 30% × 4 666 zł (płaca minimalna) = 1 399,80 zł',
      ruleCitation: 'Ustawa o systemie ubezpieczeń społecznych (art. 18a ust. 1)',
      effectiveDate: 'Przysługuje przez pierwsze 24 miesiące po Uldze na Start.',
    },
    {
      label: 'Zwolnienie w Ramach Ulgi na Start',
      formula: 'Składki społeczne = 0 zł (tylko składka zdrowotna do NFZ)',
      ruleCitation: 'Prawo przedsiębiorców (art. 18 ust. 1)',
      effectiveDate: 'Przysługuje przez pierwsze pełne 6 miesięcy kalendarzowych.',
    },
  ],
  articleSections: [
    {
      id: 'system-skladek-zus-dla-firm-2026',
      title: 'Struktura i Podstawy Wymiaru Składek ZUS dla Przedsiębiorców w 2026 Roku',
      level: 2,
      content: `Osoby prowadzące pozarolniczą działalność gospodarczą w Polsce podlegają obowiązkowym ubezpieczeniom społecznym na zasadach ryczałtowych. Oznacza to, że kwota składek społecznych nie zależy od faktycznych przychodów w danym miesiącu, lecz od z góry ustalonej podstawy wymiaru:

1. **Podstawa Wymiaru dla Pełnego ZUS-u (Duży ZUS)**:
Zgodnie z art. 18 ust. 8 ustawy o systemie ubezpieczeń społecznych podstawa wymiaru składek na ubezpieczenia emerytalne i rentowe wynosi 60% prognozowanego przeciętnego wynagrodzenia miesięcznego przyjętego do ustawy budżetowej. W 2026 roku prognozowane przeciętne wynagrodzenie wynosi **8 673 zł**, co daje podstawę wymiaru w wysokości **5 203,80 zł**.

2. **Podstawa Wymiaru dla Preferencyjnego ZUS-u (Mały ZUS)**:
Zgodnie z art. 18a ustawy o SUS podstawa dla przedsiębiorców w pierwszych 24 miesiącach po Uldze na Start wynosi 30% kwoty minimalnego wynagrodzenia. W 2026 roku wynosi ona **1 399,80 zł** (30% z 4 666 zł).

3. **Stopy Procentowe Poszczególnych Składek Społecznych**:
- **Ubezpieczenie emerytalne**: 19,52% podstawy,
- **Ubezpieczenie rentowe**: 8,00% podstawy,
- **Ubezpieczenie wypadkowe**: 1,67% podstawy (stawka standardowa dla płatników zgłaszających do 9 ubezpieczonych),
- **Ubezpieczenie chorobowe (dobrowolne)**: 2,45% podstawy,
- **Fundusz Pracy i Fundusz Solidarnościowy (FP)**: 2,45% podstawy (tylko w pełnym ZUS-ie).`,
    },
    {
      id: 'pelny-zus-rozbicie-i-kwoty-2026',
      title: 'Pełny ZUS w 2026 Roku – Zestawienie Kwotowe',
      level: 2,
      content: `Dla podstawy wymiaru 5 203,80 zł miesięczne składki wynoszą dokładnie:

- **Składka emerytalna (19,52%)**: 1 015,78 zł -> część przedsiębiorcy to 507,89 zł,
- **Składka rentowa (8,00%)**: 416,30 zł -> 338,25 zł,
- **Składka wypadkowa (1,67%)**: 86,90 zł,
- **Fundusz Pracy i FS (2,45%)**: 127,49 zł,
- **Dobrowolna składka chorobowa (2,45%)**: 127,49 zł.

**Podsumowanie Pełnego ZUS-u:**
- Łącznie ze składką chorobową: **1 188,02 zł / miesiąc**,
- Łącznie bez składki chorobowej: **1 060,53 zł / miesiąc**.

Do powyższych kwot każdy przedsiębiorca musi doliczyć comiesięczną składkę zdrowotną (NFZ), która zależy od wybranej formy opodatkowania:
- Na skali podatkowej: 9% dochodu (min. 419,94 zł),
- Na podatku liniowym: 4,9% dochodu (min. 419,94 zł),
- Na ryczałcie: od 468,34 zł do 1 405,03 zł w zależności od przychodu.`,
    },
    {
      id: 'ulga-na-start-i-preferencyjny-zus',
      title: 'Ulga na Start oraz Preferencyjny ZUS dla Nowych Przedsiębiorców',
      level: 2,
      content: `System prawa wspiera rozpoczynanie działalności gospodarczej poprzez stopniowanie obciążeń:

1. **Ulga na Start (Pierwsze 6 Pełnych Miesięcy)**:
Przysługuje osobom fizycznym podejmującym działalność gospodarczą po raz pierwszy lub po upływie co najmniej 60 miesięcy od zawieszenia/zamknięcia poprzedniej działalności. Przedsiębiorca nie opłaca składek na ubezpieczenia społeczne ani Fundusz Pracy. Płaci jedynie składkę zdrowotną. Ważne: w okresie korzystania z Ulgi na Start przedsiębiorca nie odkłada środków na emeryturę ani nie ma prawa do płatnego zwolnienia lekarskiego (L4).

2. **Preferencyjny ZUS (Miesiące 7–30)**:
Po zakończeniu Ulgi na Start przedsiębiorca może przez 24 miesiące płacić preferencyjne składki od podstawy 1 399,80 zł:
- Emerytalna: 273,24 zł -> 136,62 zł,
- Rentowa: 111,98 zł -> 83,99 zł,
- Wypadkowa: 23,38 zł,
- Chorobowa (dobrowolna): 34,30 zł,
- Fundusz Pracy: **0 zł** (podstawa jest niższa od płacy minimalnej).
Razem preferencyjny ZUS: **278,29 zł z chorobowym** (lub 243,99 zł bez chorobowego).`,
    },
    {
      id: 'maly-zus-plus-warunki-i-terminy',
      title: 'Mały ZUS Plus – Ulga dla Firm o Przychodach do 120 000 zł',
      level: 2,
      content: `Dla firm działających dłużej niż 30 miesięcy, które osiągają umiarkowane przychody, ratunkiem przed pełnym ZUS-em jest **Mały ZUS Plus**:

- **Kryterium Przychodowe**: Roczny przychód z działalności gospodarczej w poprzednim roku kalendarzowym nie mógł przekroczyć **120 000 zł**. Jeśli działalność była prowadzona przez część roku, limit ustala się proporcjonalnie do liczby dni.
- **Wyliczenie Podstawy**: Podstawa wymiaru składek zależy od dochodu z poprzedniego roku: roczny dochód dzieli się przez liczbę dni prowadzenia działalności, mnoży przez 30 i przez współczynnik 0,5. Podstawa nie może być niższa niż 30% płacy minimalnej (1 399,80 zł) ani wyższa niż 60% prognozowanego przeciętnego wynagrodzenia (5 203,80 zł).
- **Limit Czasowy**: Z Małego ZUS-u Plus można korzystać maksymalnie przez 36 miesięcy kalendarzowych w ciągu każdych 60 miesięcy prowadzenia firmy. Zgłoszenia do programu dokonuje się na druku ZUS ZUA/ZZA do 31 stycznia danego roku.`,
    },
    {
      id: 'wakacje-skladkowe-dla-mikroprzedsiebiorcow',
      title: 'Wakacje Składkowe dla Mikroprzedsiębiorców w 2026 Roku',
      level: 2,
      content: `Począwszy od końca 2024 roku i przez cały 2026 rok mikroprzedsiębiorcy w Polsce mogą korzystać z przełomowego instrumentu wsparcia – **Wakacji Składkowych** (art. 17a ustawy o systemie ubezpieczeń społecznych):

1. **Istota Zwolnienia**:
Przedsiębiorca ma prawo do zwolnienia z obowiązku opłacenia składek na własne ubezpieczenia społeczne (emerytalne, rentowe, wypadkowe oraz dobrowolne chorobowe) oraz Fundusz Pracy i Fundusz Solidarnościowy za **jeden dowolnie wybrany miesiąc kalendarzowy w każdym roku**.
W miesiącu wakacji składkowych ubezpieczony zachowuje pełne prawo do świadczeń, a składki za ten miesiąc są finansowane w całości z budżetu państwa za pośrednictwem ZUS.

2. **Warunki Formalne**:
- Status mikroprzedsiębiorcy (zatrudnianie średniorocznie do 9 pracowników i roczny obrót lub suma bilansowa do 2 milionów euro),
- Roczny przychód z działalności w co najmniej jednym z 2 poprzednich lat nieprzekraczający równowartości 2 milionów euro,
- Dostępny limit pomocy de minimis (maksymalnie 300 000 euro w okresie 3 lat).

3. **Procedura Wnioskowania**:
Wniosek o wakacje składkowe (druk RWS) składa się wyłącznie elektronicznie za pośrednictwem platformy ZUS PUE/eZUS w miesiącu poprzedzającym miesiąc kalendarzowy, za który przedsiębiorca chce uzyskać zwolnienie.`,
    },
    {
      id: 'dobrowolne-chorobowe-zasilek-macierzynski-i-l4',
      title: 'Dobrowolne Ubezpieczenie Chorobowe: Zasiłek L4 i Macierzyński Przedsiębiorcy',
      level: 2,
      content: `W przeciwieństwie do pracowników etatowych, dla których składka chorobowa (2,45%) jest obowiązkowa, samozatrudniony sam decyduje o przystąpieniu do ubezpieczenia chorobowego:

- **Okres Wyczekiwania (90 dni)**: Prawo do zasiłku chorobowego (L4) powstaje po upływie 90 dni nieprzerwanego ubezpieczenia chorobowego. Wcześniejszy okres zatrudnienia na etacie wlicza się do okresu wyczekiwania, jeżeli przerwa między umowami nie przekroczyła 30 dni.
- **Wysokość Zasiłku Chorobowego**: Wynosi 80% podstawy wymiaru za czas pobytu na zwolnieniu lekarskim oraz 100% podstawy w przypadku ciąży lub wypadku przy pracy. Dla przedsiębiorcy na pełnym ZUS-ie podstawa dzienna to ok. 130 zł netto za dzień niezdolności do pracy.
- **Zasiłek Macierzyński**: Przysługuje przedsiębiorczyni od pierwszego dnia ubezpieczenia chorobowego (bez 90-dniowego okresu wyczekiwania) i wynosi 100% podstawy za okres urlopu macierzyńskiego oraz 70% lub 81,5% za okres urlopu rodzicielskiego.
- **Terminowość Wpłat**: Zniesiono wcześniejszą drastyczną regułę, według której jednodniowe spóźnienie z zapłatą składki skutkowało automatycznym wyrejestrowaniem z ubezpieczenia chorobowego. Obecnie prawo do zasiłku jest zachowane, a ewentualne zaległości potrąca się z wypłacanego świadczenia.`,
    },
  ],
  examples: [
    {
      title: 'Przykład 1: Nowa firma korzystająca z preferencyjnego ZUS-u (miesiąc 12)',
      scenario:
        'Grafik komputerowy rozliczający się na ryczałcie w pierwszym roku po Uldze na Start, opłacający preferencyjny ZUS z dobrowolnym chorobowym.',
      calculationType: 'custom',
      inputAmount: 1399.8,
      resultTotal: 746.63,
      customFields: [
        { label: 'Podstawa wymiaru ZUS', value: '1 399,80 zł' },
        { label: 'ZUS społeczny z chorobowym', value: '278,29 zł' },
        { label: 'Składka zdrowotna NFZ (I próg)', value: '468,34 zł' },
        { label: 'Łączne składki do ZUS', value: '746,63 zł', highlight: true },
      ],
      explanation:
        'Dzięki preferencji przedsiębiorca płaci łącznie do ZUS jedynie 746,63 zł miesięcznie zamiast ponad 1 650 zł, oszczędzając rocznie niemal 11 000 zł.',
    },
    {
      title: 'Przykład 2: Przedsiębiorca na pełnym ZUS-ie z dobrowolnym ubezpieczeniem chorobowym',
      scenario:
        'Właściciel sklepu internetowego prowadzący działalność od 5 lat, rozliczający się na podatku liniowym przy dochodzie 15 000 zł miesięcznie.',
      calculationType: 'custom',
      inputAmount: 5203.8,
      resultTotal: 1923.02,
      customFields: [
        { label: 'ZUS społeczny (pełny)', value: '1 188,02 zł' },
        { label: 'Składka zdrowotna (4,9% dochodu)', value: '735,00 zł' },
        { label: 'Łączny miesięczny przelew do ZUS', value: '1 923,02 zł', highlight: true },
      ],
      explanation:
        'Przedsiębiorca odprowadza jeden zbiorczy przelew na swój Indywidualny Rachunek Składkowy (NRS) w kwocie 1 923,02 zł, z czego ZUS automatycznie rozdziela środki na poszczególne fundusze.',
    },
  ],
  faqs: [
    {
      q: 'Do kiedy należy opłacić składki ZUS za dany miesiąc?',
      a: 'Osoby fizyczne opłacające składki wyłącznie za siebie mają termin płatności do 20. dnia następnego miesiąca (np. za styczeń do 20 lutego). Płatnicy posiadający pracowników również opłacają składki do 20. dnia miesiąca.',
    },
    {
      q: 'Czy opłacanie składki chorobowej na B2B jest obowiązkowe?',
      a: 'Nie. Ubezpieczenie chorobowe dla osób prowadzących działalność gospodarczą jest całkowicie dobrowolne. Zgłoszenia dokonuje się na druku ZUS ZUA. Bez tej składki nie otrzymasz jednak zasiłku chorobowego ani macierzyńskiego.',
    },
    {
      q: 'Ile wynosi zasiłek chorobowy na pełnym ZUS-ie?',
      a: 'Miesięczny zasiłek chorobowy wynosi standardowo 80% podstawy wymiaru pomniejszonej o wskaźnik 13,71%. Na pełnym ZUS-ie daje to około 3 590 zł brutto za pełny miesiąc choroby (ok. 119 zł dziennie).',
    },
    {
      q: 'Czy na Uldze na Start jestem ubezpieczony w NFZ?',
      a: 'Tak. Ulga na Start zwalnia wyłącznie ze składek społecznych. Opłacając regularnie składkę zdrowotną, masz pełne prawo do bezpłatnego leczenia w publicznych placówkach służby zdrowia i szpitalach.',
    },
    {
      q: 'Czy zawieszenie działalności gospodarczej zwalnia z ZUS?',
      a: 'Tak. W okresie zawieszenia wykonywania działalności gospodarczej przedsiębiorca nie opłaca składek na ubezpieczenia społeczne ani ubezpieczenie zdrowotne. Okres ten nie liczy się jednak do stażu emerytalnego.',
    },
    {
      q: 'Jak sprawdzić swój Indywidualny Rachunek Składkowy (NRS)?',
      a: 'Numer rachunku składkowego można sprawdzić w wyszukiwarce na oficjalnej stronie ZUS (eskladka.pl) po podaniu NIP, REGON i numeru PESEL.',
    },
    {
      q: 'Czy przedsiębiorca na emeryturze musi płacić ZUS?',
      a: 'Przedsiębiorca z ustalonym prawem do emerytury nie ma obowiązku opłacania składek społecznych (emerytalnej i rentowej – są dobrowolne), jednak musi opłacać pełną składkę zdrowotną.',
    },
    {
      q: 'Czy w trakcie pobierania zasiłku macierzyńskiego płaci się składki ZUS?',
      a: 'Za okres pobierania zasiłku macierzyńskiego składki emerytalne i rentowe są finansowane z budżetu państwa. Przedsiębiorca jest zwolniony ze składek społecznych z działalności, opłacając jedynie składkę zdrowotną (jeśli nie spełnia warunków zwolnienia z NFZ).',
    },
  ],
  sources: [
    {
      label: 'Zakład Ubezpieczeń Społecznych (ZUS) – Podstawy i Wskaźniki',
      url: 'https://www.zus.pl',
    },
    {
      label: 'Ustawa o systemie ubezpieczeń społecznych (Dz.U. 2024 poz. 497)',
      url: 'https://isap.sejm.gov.pl',
    },
    {
      label: 'Biznes.gov.pl – Kalkulator Składek ZUS dla Przedsiębiorców',
      url: 'https://www.biznes.gov.pl',
    },
  ],
  updatedAt: '2026-11-15',
  relatedTools: [
    {
      title: 'Kalkulator B2B vs UoP',
      slug: 'pl/kalkulator-b2b',
      description: 'Sprawdź, jak składki ZUS wpływają na opłacalność przejścia na działalność.',
      category: 'Działalność',
    },
    {
      title: 'Płaca Minimalna 2026',
      slug: 'pl/placa-minimalna',
      description: 'Poznaj powiązanie płacy minimalnej z podstawą wymiaru składek.',
      category: 'Płace',
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
  ],
};
