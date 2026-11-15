import { PageContent } from '../types';

export const contentPlKalkulatorB2b: PageContent = {
  metaTitle: 'Kalkulator B2B vs Umowa o Pracę 2026: Porównanie Zarobków i Podatków',
  metaDescription:
    'Porównaj zarobki na rękę z umowy o pracę (UoP) i B2B w 2026 roku. Sprawdź opłacalność ryczałtu (12%, 8,5%), podatku liniowego (19%) i skali, składki ZUS oraz koszty firmowe.',
  h1: 'Kalkulator B2B vs Umowa o Pracę 2026',
  quickAnswer:
    'Przejście na B2B w 2026 roku staje się opłacalne finansowo zazwyczaj od kwoty 10 000 – 12 000 zł brutto na UoP. Przy fakturze 15 000 zł netto na ryczałcie 12% (programista IT) zysk na rękę na B2B wynosi około 11 650 zł, podczas gdy z 15 000 zł brutto na UoP pracownik otrzymuje 10 470 zł.',
  howItWorks: [
    {
      label: 'Wyliczenie Przychodu i Kosztów B2B',
      formula: 'Dochód B2B = Faktura Netto - Koszty Działalności - Składki ZUS Społeczne',
      ruleCitation: 'Ustawa o podatku dochodowym od osób fizycznych / Ustawa o zryczałtowanym podatku',
      effectiveDate: 'Parametry aktualne na rok podatkowy 2026.',
    },
    {
      label: 'Składki ZUS Przedsiębiorcy',
      formula: 'ZUS = Pełny ZUS (1 188,02 zł) lub Preferencyjny (278,29 zł) lub Ulga na Start (0 zł)',
      ruleCitation: 'Ustawa o systemie ubezpieczeń społecznych (art. 18 i 18a)',
      effectiveDate: 'Podstawa pełnego ZUS w 2026 r.: 5 203,80 zł; preferencyjnego: 1 399,80 zł.',
    },
    {
      label: 'Podatek i Składka Zdrowotna NFZ',
      formula: 'Netto B2B = Przychód Netto - Koszty - ZUS - NFZ - Podatek Dochodowy',
      ruleCitation: 'Polski Ład / Ustawa o świadczeniach opieki zdrowotnej',
      effectiveDate: 'Ryczałt: 12% lub 8,5% od przychodu; Liniowy: 19% od dochodu z NFZ 4,9%.',
    },
  ],
  articleSections: [
    {
      id: 'podstawowe-roznice-miedzy-uop-a-b2b',
      title: 'Podstawowe Różnice Pomiędzy Umową o Pracę a Samozatrudnieniem (B2B)',
      level: 2,
      content: `Wybór między umową o pracę (UoP) a kontraktem B2B (jednoosobową działalnością gospodarczą) to jedna z najważniejszych decyzji finansowych i zawodowych na polskim rynku pracy, szczególnie w branżach IT, marketingu, finansach i inżynierii:

1. **Stosunek Prawny i Ochrona Kodeksu Pracy**:
- **Umowa o Pracę (UoP)**: podlega rygorystycznym przepisom Kodeksu Pracy. Gwarantuje pracownikowi 20 lub 26 dni płatnego urlopu wypoczynkowego, płatne zwolnienie lekarskie (L4 – 80% lub 100% wynagrodzenia), okres wypowiedzenia (do 3 miesięcy) oraz ochronę przed zwolnieniem (np. w ciąży lub w wieku przedemerytalnym).
- **Kontrakt B2B**: to relacja dwóch niezależnych podmiotów gospodarczych regulowana Kodeksem Cywilnym. Przedsiębiorca nie posiada ustawowego prawa do urlopu, odpraw czy limitów nadgodzin, chyba że kwestie te zostaną wynegocjowane w umowie o świadczenie usług.

2. **Ryzyko Przeklasyfikowania (Test Przedsiębiorcy)**:
Zgodnie z art. 22 § 1 Kodeksu Pracy praca wykonywana pod kierownictwem pracodawcy, w wyznaczonym przez niego miejscu i czasie, za wynagrodzeniem, jest stosunkiem pracy bez względu na nazwę zawartej umowy. Prawdziwe B2B wymaga ponoszenia ryzyka gospodarczego, swobody wyboru metod i czasu pracy oraz braku bezpośredniego podporządkowania służbowego.`,
    },
    {
      id: 'formy-opodatkowania-b2b-w-2026',
      title: 'Formy Opodatkowania B2B w 2026 Roku: Ryczałt, Liniowy, Skala',
      level: 2,
      content: `Przedsiębiorca na B2B ma do wyboru trzy podstawowe formy opodatkowania dochodów:

1. **Ryczałt od Przychodów Ewidencjonowanych**:
Podatek płacony jest od czystego przychodu (faktury netto) bez możliwości pomniejszania go o koszty firmowe (np. leasing, sprzęt, biuro).
- **12%**: stawka dla większości specjalistów IT, programistów, architektów systemowych (PKWiU 62).
- **8,5%**: usługi ogólne, niematerialne, wsparcie biznesowe, marketing.
- **15%**: zarządzanie, doradztwo prawne i finansowe.
- **Składka zdrowotna na ryczałcie**: jest stała i zależy od rocznego przychodu podzielonego na 3 progi: do 60 tys. zł (~468 zł/mies.), 60–300 tys. zł (~780 zł/mies.) oraz powyżej 300 tys. zł (~1 405 zł/mies.). 50% zapłaconej składki zdrowotnej odlicza się od przychodu.

2. **Podatek Liniowy (19%)**:
Stała stawka 19% niezależnie od poziomu dochodu. Idealna dla osób o zarobkach powyżej 150 000 zł rocznie generujących duże koszty firmowe (leasing samochodowy, delegacje, podwykonawcy).
- **Składka zdrowotna**: wynosi 4,9% dochodu (minimum 419,94 zł). Przedsiębiorca może zaliczyć zapłacone składki zdrowotne do kosztów uzyskania przychodu do rocznego limitu (w 2026 r. 12 900 zł).

3. **Skala Podatkowa (12% i 32%)**:
Opodatkowanie na zasadach ogólnych z kwotą wolną 30 000 zł. Opłacalna głównie przy rocznych dochodach do 120 000 zł, przy rozliczaniu wspólnym z małżonkiem lub korzystaniu z ulg rodzinnych.
- **Składka zdrowotna**: 9% dochodu (nieodliczalna od podatku).`,
    },
    {
      id: 'skladki-zus-na-b2b-etapy',
      title: 'Ścieżka Składek ZUS dla Nowej Firmy (Od 0 zł do Pełnego ZUS-u)',
      level: 2,
      content: `Zakładając jednoosobową działalność gospodarczą, przedsiębiorca przechodzi przez trzy etapy obciążeń składkowych ZUS:

1. **Ulga na Start (Miesiące 1–6)**:
Przez pierwsze 6 miesięcy od rozpoczęcia działalności przedsiębiorca jest zwolniony z opłacania składek społecznych. Płaci jedynie miesięczną składkę zdrowotną (NFZ).

2. **Preferencyjny ZUS / Mały ZUS (Miesiące 7–30)**:
Przez kolejne 24 miesiące podstawa składek społecznych wynosi 30% minimalnego wynagrodzenia (w 2026 r. 1 399,80 zł). Łączna suma składek społecznych wynosi ok. **278,29 zł z chorobowym** (lub ok. 243,99 zł bez chorobowego).

3. **Pełny ZUS (Od 31. miesiąca)**:
Podstawa wymiaru wynosi 60% prognozowanego przeciętnego wynagrodzenia (5 203,80 zł w 2026 r.). Składki społeczne wynoszą ok. **1 188,02 zł z chorobowym** lub **1 060,53 zł bez chorobowego**. Do tego dochodzi zmienna składka zdrowotna zależna od formy opodatkowania.`,
    },
    {
      id: 'punkt-rentownosci-i-rekomendacja',
      title: 'Kiedy Przejście na B2B Jest Naprawdę Opłacalne? Punkt Rentowności (Breakeven)',
      level: 2,
      content: `Kalkulując przejście z UoP na B2B, błędem jest porównywanie jedynie kwoty na rękę w miesiącu przepracowanym w 100%. Prawidłowe porównanie musi uwzględniać tzw. koszt utraconych korzyści:

- **Wartość Płatnego Urlopu**: 26 dni urlopu wypoczynkowego oraz ok. 10–13 dni świąt ustawowych oznacza, że pracownik na UoP pracuje efektywnie przez ok. 10,5 miesiąca w roku, otrzymując pensję za pełne 12 miesięcy. Aby B2B było neutralne urlopowo, stawka na fakturze musi być wyższa o co najmniej 10–15%.
- **Ryzyko Choroby**: Na UoP za czas zwolnienia lekarskiego pracodawca i ZUS płacą 80% pensji. Na B2B zasiłek chorobowy liczony od podstawy preferencyjnej to zaledwie kilkadziesiąt złotych dziennie, a od pełnego ZUS-u ok. 130 zł dziennie.
- **Koszty Obsługi**: Prowadzenie JDG wiąże się z opłatami za biuro rachunkowe (200–400 zł/mies.), rachunek bankowy firmowy oraz ubezpieczenie OC zawodowe.

W praktyce w 2026 roku punkt rentowności (breakeven point) dla ryczałtu 12% przy pełnym ZUS-ie i uwzględnieniu 26 dni nieobecności leży na poziomie **ok. 9 500 – 10 500 zł netto na fakturze**. Powyżej tej kwoty B2B przynosi wyraźną przewagę finansową, sięgającą przy zarobkach 20 000 zł nawet 3 000 – 4 500 zł miesięcznie na korzyść samozatrudnienia.`,
    },
    {
      id: 'ryzyko-art-22-kodeksu-pracy-i-test-przedsiebiorcy',
      title: 'Ryzyko Prawne: Art. 22 Kodeksu Pracy i Kontrole PIP/ZUS (Test Przedsiębiorcy)',
      level: 2,
      content: `Jednym z najpoważniejszych zagrożeń związanych z przejściem na kontrakt B2B jest zarzut pozornego samozatrudnienia. Zgodnie z art. 22 § 1(1) Kodeksu Pracy: „Nie jest dopuszczalne zastąpienie umowy o pracę umową cywilnoprawną przy zachowaniu warunków wykonywania pracy określonych w § 1”.

Cechy charakteryzujące stosunek pracy, których należy unikać w kontrakcie B2B:
1. **Kierownictwo i podległość służbowa**: Wyznaczanie bezpośredniego przełożonego, konieczność raportowania obecności czy codzienne polecenia służbowe.
2. **Ścisłe miejsce i czas pracy**: Wymóg przebywania w siedzibie firmy w godzinach 9:00–17:00.
3. **Osobiste świadczenie usług**: Brak umownej klauzuli o możliwości wyznaczenia podwykonawcy (zastępcy).
4. **Brak ryzyka gospodarczego**: Pełna gwarancja stałego wynagrodzenia niezależnie od efektów pracy.

W przypadku kontroli Państwowej Inspekcji Pracy (PIP) lub ZUS, umowa B2B spełniająca te kryteria może zostać przekwalifikowana na stosunek pracy. Pociąga to za sobą obowiązek zapłaty zaległych składek ZUS wraz z odsetkami oraz podatku dochodowego za cały okres trwania współpracy.`,
    },
    {
      id: 'optymalizacja-kosztowa-i-rozliczenie-vat',
      title: 'Optymalizacja Kosztowa, Leasing Samochodu i Wdrożenie KSeF w 2026 Roku',
      level: 2,
      content: `Prowadzenie jednoosobowej działalności gospodarczej otwiera możliwości odliczania kosztów i podatku od towarów i usług (VAT), które nie przysługują pracownikom etatowym:

- **Podatek od Towarów i Usług (VAT 23%)**: Jako czynny podatnik VAT wystawiasz faktury z doliczonym podatkiem 23%, który klient odlicza w swojej deklaracji. Ty natomiast odliczasz VAT od wszelkich zakupów firmowych: sprzętu komputerowego, telefonu, oprogramowania, paliwa czy wyposażenia biura.
- **Leasing Samochodu Osobowego**:
  - Przy użytkowaniu mieszanym (służbowo-prywatnym) odliczasz **50% podatku VAT** od rat leasingowych, serwisu i paliwa.
  - Na podatku liniowym lub skali podatkowej zaliczasz do kosztów podatkowych do **150 000 zł** wartości samochodu spalinowego lub **225 000 zł** samochodu elektrycznego (EV).
  - Wydatki eksploatacyjne (paliwo, naprawy, myjnia) stanowią koszt w wysokości **75%** kwoty netto + nieodliczonego VAT.
- **Krajowy System e-Faktur (KSeF)**: Od 2026 roku wszyscy przedsiębiorcy B2B w Polsce mają obowiązek wystawiania ustrukturyzowanych faktur elektronicznych w centralnym systemie Ministerstwa Finansów, co eliminuje papierowe dokumenty i przyspiesza zwroty VAT do 40 dni.`,
    },
  ],
  examples: [
    {
      title: 'Przykład 1: Specjalista IT – 16 000 zł brutto UoP vs 16 000 zł netto faktura B2B',
      scenario:
        'Porównanie dla programisty Java wybierającego między umową o pracę na 16 000 zł brutto a fakturą B2B na 16 000 zł netto + VAT z ryczałtem 12% i pełnym ZUS-em.',
      calculationType: 'custom',
      inputAmount: 16000.0,
      resultTotal: 12284.0,
      customFields: [
        { label: 'UoP Netto na rękę', value: '11 154,20 zł' },
        { label: 'B2B Zysk na rękę (Ryczałt 12%)', value: '12 284,00 zł', highlight: true },
        { label: 'Różnica miesięczna na korzyść B2B', value: '+1 129,80 zł' },
        { label: 'Roczna przewaga finansowa B2B', value: '+13 557,60 zł' },
      ],
      explanation:
        'Na B2B po opłaceniu pełnego ZUS-u (1 188 zł), składki zdrowotnej w II progu (780,57 zł) oraz ryczałtu 12% programista zachowuje w portfelu ponad 1 100 zł miesięcznie więcej niż na umowie o pracę.',
    },
    {
      title: 'Przykład 2: Negocjacje w oparciu o budżet pracodawcy (Koszt 20 000 zł)',
      scenario:
        'Pracodawca przeznacza 20 000 zł łącznego budżetu. Pracownik wybiera między UoP na 16 600 zł brutto a fakturą B2B na pełną kwotę budżetu 20 000 zł netto.',
      calculationType: 'custom',
      inputAmount: 20000.0,
      resultTotal: 15640.0,
      customFields: [
        { label: 'Budżet pracodawcy', value: '20 000,00 zł' },
        { label: 'UoP Netto (z 16 600 zł brutto)', value: '11 540,00 zł' },
        { label: 'B2B Netto (faktura 20 000 zł)', value: '15 640,00 zł', highlight: true },
        { label: 'Przewaga B2B przy budżecie całkowitym', value: '+4 100,00 zł' },
      ],
      explanation:
        'Jeśli pracodawca zgadza się oddać cały swój koszt zatrudnienia w postaci faktury B2B (20 000 zł), przewaga samozatrudnienia staje się bezdyskusyjna – wynosi ponad 4 100 zł miesięcznie.',
    },
  ],
  faqs: [
    {
      q: 'Czy na B2B muszę płacić podatek VAT?',
      a: 'Zwolnienie podmiotowe z VAT przysługuje do 200 000 zł rocznego obrotu. Jednak usługi doradcze i prawnicze muszą być na VAT od pierwszej złotówki. Dla firm B2B podatek VAT jest neutralny, gdyż kontrahent odlicza go w swojej deklaracji.',
    },
    {
      q: 'Jaka forma opodatkowania na B2B jest najlepsza dla programisty?',
      a: 'Dla programistów najczęściej najkorzystniejszy jest ryczałt 12% ze względu na niską stawkę podatkową i brak konieczności dokumentowania wysokich kosztów firmowych.',
    },
    {
      q: 'Czy przechodząc na B2B u obecnego pracodawcy mogę korzystać z Ulg ZUS?',
      a: 'Nie. Świadczenie tych samych usług na rzecz byłego lub obecnego pracodawcy wyklucza korzystanie z Ulgi na Start oraz preferencyjnego ZUS-u. Wymagany jest pełny ZUS, a na ryczałcie obowiązuje karencja.',
    },
    {
      q: 'Ile kosztuje księgowość dla jednoosobowej działalności B2B?',
      a: 'Koszt biura rachunkowego lub księgowości online wynosi zazwyczaj od 150 do 350 zł netto miesięcznie dla ryczałtu oraz 250 do 500 zł netto dla podatku liniowego i KPiR.',
    },
    {
      q: 'Jak na B2B rozliczać urlop?',
      a: 'Na B2B urlop nie przysługuje z mocy prawa. Strony mogą ustalić wyższą stawkę miesięczną/godzinową pokrywającą dni wolne lub zawrzeć w kontrakcie klauzulę o płatnej przerwie w świadczeniu usług (np. 20 dni w roku).',
    },
    {
      q: 'Co to jest Mały ZUS Plus i komu przysługuje?',
      a: 'Mały ZUS Plus pozwala płacić składki ZUS uzależnione od dochodu z poprzedniego roku przedsiębiorcom, których roczny przychód nie przekroczył 120 000 zł. Przysługuje maksymalnie przez 36 miesięcy w ciągu 60 miesięcy działalności.',
    },
    {
      q: 'Czy składkę zdrowotną na podatku liniowym można odliczyć?',
      a: 'Tak. Przedsiębiorcy rozliczający się podatkiem liniowym 19% mogą zaliczyć zapłacone składki zdrowotne do kosztów uzyskania przychodów lub odliczyć je od dochodu do rocznego limitu wynoszącego w 2026 roku 12 900 zł.',
    },
    {
      q: 'Czy na B2B przysługuje zasiłek macierzyński lub ojcowski?',
      a: 'Tak, pod warunkiem opłacania dobrowolnego ubezpieczenia chorobowego w ZUS. Wysokość zasiłku zależy od wybranej podstawy wymiaru składek.',
    },
  ],
  sources: [
    {
      label: 'Biznes.gov.pl – Serwis Informacyjno-Usługowy dla Przedsiębiorcy',
      url: 'https://www.biznes.gov.pl',
    },
    {
      label: 'Ministerstwo Finansów – Podatki dla Przedsiębiorców',
      url: 'https://www.podatki.gov.pl',
    },
    {
      label: 'ZUS – Ubezpieczenia Osób Prowadzących Działalność',
      url: 'https://www.zus.pl',
    },
  ],
  updatedAt: '2026-11-15',
  relatedTools: [
    {
      title: 'Kalkulator Wynagrodzeń Brutto na Netto',
      slug: 'pl/kalkulator-wynagrodzen',
      description: 'Oblicz pensję na rękę na umowie o pracę, zleceniu i dziele.',
      category: 'Wynagrodzenia',
    },
    {
      title: 'Składki ZUS 2026',
      slug: 'pl/skladki-zus',
      description: 'Zestawienie składek ZUS dla JDG: Pełny ZUS, Mały ZUS i Ulga na Start.',
      category: 'Ubezpieczenia',
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
