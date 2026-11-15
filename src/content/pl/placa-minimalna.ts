import { PageContent } from '../types';

export const contentPlPlacaMinimalna: PageContent = {
  metaTitle: 'Płaca Minimalna 2026 w Polsce: Brutto i Netto (Na Rękę) oraz Historia od 2015',
  metaDescription:
    'Ile wynosi płaca minimalna w 2026 roku w Polsce? Sprawdź kwotę brutto (4 666 zł), netto (3 510,92 zł), minimalną stawkę godzinową (30,50 zł) oraz pełną historię podwyżek od 2015 roku.',
  h1: 'Płaca Minimalna 2026: Brutto i Netto w Polsce',
  quickAnswer:
    'Od 1 stycznia 2026 roku minimalne wynagrodzenie za pracę w Polsce wynosi 4 666 zł brutto miesięcznie, co daje dokładnie 3 510,92 zł na rękę (netto) przy standardowych kosztach uzyskania przychodów i PIT-2. Minimalna stawka godzinowa dla umów zlecenia wynosi 30,50 zł brutto.',
  howItWorks: [
    {
      label: 'Minimalne Wynagrodzenie Miesięczne',
      formula: 'Brutto = 4 666,00 zł / miesiąc (pełny etat)',
      ruleCitation: 'Rozporządzenie Rady Ministrów (Dz.U. 2024 poz. 1362)',
      effectiveDate: 'Obowiązuje od 1 stycznia 2026 r.',
    },
    {
      label: 'Minimalna Stawka Godzinowa',
      formula: 'Stawka = 30,50 zł brutto / roboczogodzinę',
      ruleCitation: 'Ustawa o minimalnym wynagrodzeniu za pracę (art. 8a)',
      effectiveDate: 'Obowiązuje dla umów zlecenia i o świadczenie usług od 1 stycznia 2026 r.',
    },
    {
      label: 'Wyliczenie Kwoty Netto na Rękę',
      formula: 'Netto = 4 666 zł - 639,71 zł (ZUS) - 362,37 zł (NFZ) - 153 zł (PIT) = 3 510,92 zł',
      ruleCitation: 'Kodeks Pracy & Ustawa o PIT',
      effectiveDate: 'Dla pracownika powyżej 26 lat ze standardowym KUP 250 zł i PIT-2.',
    },
  ],
  articleSections: [
    {
      id: 'stawki-placy-minimalnej-2026',
      title: 'Oficjalne Stawki Płacy Minimalnej i Stawki Godzinowej w 2026 Roku',
      level: 2,
      content: `Wysokość minimalnego wynagrodzenia za pracę w Polsce regulowana jest przepisami ustawy z dnia 10 października 2002 r. o minimalnym wynagrodzeniu za pracę oraz corocznymi rozporządzeniami Rady Ministrów publikowanymi w Dzienniku Ustaw:

1. **Wynagrodzenie Miesięczne Brutto**:
Od 1 stycznia 2026 r. kwota gwarantowanego minimalnego wynagrodzenia dla pracownika zatrudnionego w pełnym wymiarze czasu pracy (pełny etat) wynosi **4 666,00 zł brutto**. Stanowi to wzrost w stosunku do 2025 roku (4 626 zł) oraz ponad 2,5-krotny wzrost w porównaniu ze stawką z 2015 roku (1 750 zł).

2. **Minimalna Stawka Godzinowa**:
Dla osób wykonujących zlecenia oraz świadczących usługi na podstawie umów cywilnoprawnych (art. 734 i 750 Kodeksu Cywilnego) minimalna stawka godzinowa wynosi **30,50 zł brutto**. Zleceniodawca ma bezwzględny obowiązek ewidencjonowania liczby przepracowanych godzin i wypłacenia co najmniej tej stawki za każdą z nich.

3. **Część Etatu**:
W przypadku zatrudnienia w niepełnym wymiarze czasu pracy kwotę płacy minimalnej ustala się w kwocie proporcjonalnej do liczby godzin pracy:
- 1/2 etatu: 2 333,00 zł brutto (~1 830 zł netto),
- 3/4 etatu: 3 499,50 zł brutto (~2 680 zł netto),
- 1/4 etatu: 1 166,50 zł brutto (~950 zł netto).`,
    },
    {
      id: 'jak-policzyc-netto-z-minimalnej',
      title: 'Jak Wyliczana Jest Płaca Minimalna Netto (Krok po Kroku)?',
      level: 2,
      content: `Z kwoty 4 666,00 zł brutto odprowadzane są następujące składki i podatki:

- **Składki ZUS Finansowane przez Pracownika (13,71%)**:
  - Ubezpieczenie emerytalne (9,76%): **455,40 zł**
  - Ubezpieczenie rentowe (1,50%): **69,99 zł**
  - Ubezpieczenie chorobowe (2,45%): **114,32 zł**
  - Razem potrącenia ZUS: **639,71 zł**
- **Podstawa Wymiaru Składki Zdrowotnej**: 4 666,00 zł – 639,71 zł = **4 026,29 zł**
- **Składka na Ubezpieczenie Zdrowotne NFZ (9,00%)**: 4 026,29 zł × 9% = **362,37 zł**
- **Koszty Uzyskania Przychodu (KUP)**: 250,00 zł
- **Podstawa Opodatkowania PIT**: 4 026,29 zł – 250,00 zł = 3 776,29 zł -> po zaokrągleniu **3 776 zł**
- **Zaliczka na Podatek Dochodowy (PIT)**:
  - Podatek należny (12%): 3 776 zł × 12% = 453,12 zł
  - Odliczenie PIT-2 (1/12 kwoty wolnej): 300,00 zł
  - Zaliczka do wpłaty do US: 453,12 zł – 300,00 zł = 153,12 zł -> po zaokrągleniu **153 zł**
- **Kwota Netto do Wypłaty**: 4 666,00 zł – 639,71 zł – 362,37 zł – 153,00 zł = **3 510,92 zł**.`,
    },
    {
      id: 'skladniki-wliczane-i-niewliczane-do-minimum',
      title: 'Jakie Składniki Wynagrodzenia Wlicza Się do Płacy Minimalnej?',
      level: 2,
      content: `Płaca minimalna nie musi być tożsama z wynagrodzeniem zasadniczym określonym w umowie. Do pensji minimalnej wlicza się również inne przysługujące pracownikowi składniki wynagrodzenia i świadczenia ze stosunku pracy. Ustawa zawiera jednak ścisły katalog wyłączeń:

**Składniki, które NIE MOGĄ być wliczane do płacy minimalnej:**
1. Nagroda jubileuszowa,
2. Odprawa pieniężna przysługująca pracownikowi w związku z przejściem na emeryturę lub rentę,
3. Wynagrodzenie za pracę w godzinach nadliczbowych,
4. Dodatek do wynagrodzenia za pracę w porze nocnej,
5. Dodatek za staż pracy (dodatek za wysługę lat),
6. Dodatek za pracę w warunkach szkodliwych dla zdrowia, uciążliwych lub niebezpiecznych.

Wszystkie te dodatki muszą być wypłacane **ponad** kwotę 4 666 zł brutto. Jeżeli suma pensji zasadniczej i dopuszczalnych premii regulaminowych jest niższa niż 4 666 zł, pracodawca ma obowiązek wypłacić pracownikowi wyrównanie.`,
    },
    {
      id: 'wplyw-placy-minimalnej-na-gospodarke-i-swiadczenia',
      title: 'Wpływ Płacy Minimalnej na Inne Świadczenia i Składki ZUS',
      level: 2,
      content: `Wzrost minimalnego wynagrodzenia za pracę automatycznie podnosi wiele innych parametrów w polskim prawie pracy i ubezpieczeniach społecznych:

- **Maksymalna Wysokość Odprawy przy Zwolnieniach Grupowych**: Zgodnie z ustawą o szczególnych zasadach rozwiązywania z pracownikami stosunków pracy z przyczyn niedotyczących pracowników odprawa nie może przekraczać 15-krotności płacy minimalnej. W 2026 r. limit ten wynosi **69 990 zł** (15 × 4 666 zł).
- **Dodatek za Pracę w Porze Nocnej**: Wynosi 20% stawki godzinowej wynikającej z płacy minimalnej w danym miesiącu.
- **Podstawa Preferencyjnego ZUS-u dla Początkujących Przedsiębiorców**: Podstawa wynosi 30% płacy minimalnej, czyli w 2026 roku **1 399,80 zł**, co bezpośrednio wpływa na składki ZUS nowych firm.
- **Minimalna Podstawa Zasiłku Chorobowego**: Podstawa wymiaru zasiłku chorobowego z tytułu pracy w pełnym wymiarze nie może być niższa od płacy minimalnej po potrąceniu składek (4 026,29 zł).`,
    },
    {
      id: 'dyrektywa-ue-o-adekwatnych-wynagrodzeniach',
      title: 'Dyrektywa UE 2022/2041 i Przyszłość Płacy Minimalnej w Polsce',
      level: 2,
      content: `Wysokość płacy minimalnej w Polsce w coraz większym stopniu determinowana jest przez unijną Dyrektywę Parlamentu Europejskiego i Rady (UE) 2022/2041 w sprawie adekwatnych wynagrodzeń minimalnych w Unii Europejskiej:

1. **Wskaźniki Referencyjne Dyrektywy**:
Dyrektywa zaleca państwom członkowskim stosowanie orientacyjnych wartości referencyjnych w celu oceny adekwatności ustawowych wynagrodzeń minimalnych. Najczęściej stosowanymi wskaźnikami są:
- **50% przeciętnego wynagrodzenia brutto** w gospodarce narodowej, lub
- **60% mediany wynagrodzeń**.
W Polsce w 2026 roku minimalne wynagrodzenie 4 666 zł brutto wynosi ponad 53% prognozowanego przeciętnego wynagrodzenia (8 673 zł), co plasuje Polskę w czołówce państw Unii Europejskiej pod względem relacji płacy minimalnej do średniej krajowej.

2. **Rola Rady Dialogu Społecznego (RDS)**:
Ustalanie płacy minimalnej na każdy kolejny rok następuje w drodze corocznych negocjacji w Radzie Dialogu Społecznego pomiędzy rządem, reprezentatywnymi organizacjami związkowymi (NSZZ Solidarność, OPZZ, FZZ) a organizacjami pracodawców (Lewiatan, Pracodawcy RP, BCC, ZPP). Jeśli strony nie osiągną porozumienia do 15 lipca, ostateczną wysokość płacy minimalnej ustala Rada Ministrów w drodze rozporządzenia do 15 września.`,
    },
    {
      id: 'minimalna-stawka-godzinowa-zlecenia-i-kontrole-pip',
      title: 'Minimalna Stawka Godzinowa (30,50 zł) i Obowiązkowa Ewidencja Godzin',
      level: 2,
      content: `Od 2017 roku w polskim porządku prawnym funkcjonuje minimalna stawka godzinowa dla określonych umów cywilnoprawnych (art. 1 pkt 1b ustawy o minimalnym wynagrodzeniu za pracę). W 2026 roku stawka ta wynosi **30,50 zł brutto za każdą przepracowaną godzinę**:

- **Kogo Dotyczy Stawka Godzinowa?**: Obejmuje osoby fizyczne wykonujące zlecenia (art. 734 Kodeksu Cywilnego) lub świadczące usługi (art. 750 KC) na rzecz przedsiębiorców lub innych jednostek organizacyjnych, w tym osoby samozatrudnione niewskazujące pracowników ani podwykonawców.
- **Obowiązek Ewidencjonowania Czasu Pracy**: Zleceniodawca i zleceniobiorca mają bezwzględny prawny obowiązek określenia w umowie sposobu potwierdzania liczby godzin wykonania zlecenia. W przypadku braku takich zapisów zleceniobiorca przedkłada pisemne lub elektroniczne zestawienie godzin przed wypłatą wynagrodzenia. Dokumentacja ewidencji godzin musi być przechowywana przez 3 lata.
- **Odpowiedzialność Karna i Kary PIP**: Wypłacenie wynagrodzenia w stawce niższej niż ustawowe 30,50 zł/h lub niewypłacenie go w terminie stanowi wykroczenie przeciwko prawom osoby wykonującej pracę zarobkową. Inspektor Państwowej Inspekcji Pracy ma prawo nałożyć mandat karny lub skierować wniosek do sądu, który może wymierzyć karę grzywny w wysokości **od 1 000 do 30 000 zł**.`,
    },
  ],
  examples: [
    {
      title: 'Przykład 1: Pracownik pełnoetatowy zarabiający płacę minimalną w 2026 roku',
      scenario:
        'Pracownik magazynu zatrudniony na pełny etat na umowie o pracę z minimalnym wynagrodzeniem zasadniczym 4 666 zł brutto, standardowe koszty KUP 250 zł, PIT-2 złożony.',
      calculationType: 'custom',
      inputAmount: 4666.0,
      resultTotal: 3510.92,
      customFields: [
        { label: 'Brutto miesięcznie', value: '4 666,00 zł' },
        { label: 'ZUS pracownika (13,71%)', value: '-639,71 zł' },
        { label: 'Zdrowotna NFZ (9%)', value: '-362,37 zł' },
        { label: 'Zaliczka PIT', value: '-153,00 zł' },
        { label: 'Netto na rękę', value: '3 510,92 zł', highlight: true },
        { label: 'Koszt pracodawcy', value: '5 621,60 zł' },
      ],
      explanation:
        'Pracownik otrzymuje co miesiąc przelew w wysokości 3 510,92 zł. Dla pracodawcy całkowity wydatek wynosi 5 621,60 zł (4 666 zł brutto + 955,60 zł narzutu składek ZUS pracodawcy).',
    },
    {
      title: 'Przykład 2: Zleceniobiorca przepracowujący 160 godzin w miesiącu',
      scenario:
        'Ochroniarz realizujący zlecenie z minimalną stawką godzinową 30,50 zł brutto przez 160 godzin w miesiącu.',
      calculationType: 'custom',
      inputAmount: 4880.0,
      resultTotal: 3672.0,
      customFields: [
        { label: 'Liczba godzin', value: '160 godz.' },
        { label: 'Stawka godzinowa', value: '30,50 zł / godz.' },
        { label: 'Wynagrodzenie brutto', value: '4 880,00 zł' },
        { label: 'Wypłata netto (szacunek)', value: '3 672,00 zł', highlight: true },
      ],
      explanation:
        '160 godzin pomnożone przez stawkę minimalną 30,50 zł daje 4 880 zł brutto. Wypłata netto zależy od statusu ubezpieczeniowego zleceniobiorcy (student do 26 lat otrzyma pełne 4 880 zł brutto jako netto).',
    },
  ],
  faqs: [
    {
      q: 'Czy pracodawca może zapłacić mniej niż 4 666 zł brutto?',
      a: 'Nie, jeśli pracownik jest zatrudniony na pełny etat. Wypłacenie niższego wynagrodzenia stanowi wykroczenie przeciwko prawom pracownika podlegające karze grzywny nakładanej przez Państwową Inspekcję Pracy (PIP).',
    },
    {
      q: 'Ile dostanie na rękę student do 26 lat z płacy minimalnej?',
      a: 'Student lub uczeń do 26 lat zatrudniony na umowie zlecenie nie podlega ubezpieczeniom ZUS ani podatkowi dochodowemu. Otrzymuje pełną stawkę brutto na rękę, czyli 30,50 zł za każdą przepracowaną godzinę.',
    },
    {
      q: 'Kiedy wypłacana jest płaca minimalna?',
      a: 'Zgodnie z art. 85 Kodeksu Pracy wynagrodzenie wypłaca się co najmniej raz w miesiącu, w stałym i ustalonym z góry terminie, nie później niż do 10. dnia następnego miesiąca kalendarzowego.',
    },
    {
      q: 'Czy staż pracy wlicza się do płacy minimalnej?',
      a: 'Nie. Od 1 stycznia 2020 roku dodatek za wysługę lat (staż pracy) jest ustawowo wyłączony z płacy minimalnej i musi być wypłacany dodatkowo.',
    },
    {
      q: 'Czy premia uznaniowa może uzupełniać pensję do minimalnej?',
      a: 'Tak, premie regulaminowe i nagrody mogą stanowić element minimalnego wynagrodzenia, o ile nie należą do ustawowego katalogu wyłączeń (np. nadgodziny, nocki).',
    },
    {
      q: 'Jak płaca minimalna wpływa na składki ZUS przedsiębiorców?',
      a: 'Wpływa bezpośrednio na Preferencyjny ZUS dla nowych firm, którego podstawa wynosi 30% płacy minimalnej (1 399,80 zł w 2026 r.), oraz na minimalną składkę zdrowotną (419,94 zł).',
    },
    {
      q: 'Ile wynosi płaca minimalna na 1/2 etatu?',
      a: 'Na 1/2 etatu minimalne wynagrodzenie brutto w 2026 roku wynosi 2 333,00 zł, co daje w przybliżeniu 1 830 zł netto na rękę.',
    },
    {
      q: 'Jak zmieniła się płaca minimalna od 2015 roku?',
      a: 'W 2015 roku płaca minimalna wynosiła 1 750 zł brutto. W 2026 roku wynosi 4 666 zł brutto, co oznacza wzrost o ponad 166% na przestrzeni 11 lat.',
    },
  ],
  sources: [
    {
      label: 'Rządowe Centrum Legislacji – Rozporządzenie RM',
      url: 'https://dziennikustaw.gov.pl',
    },
    {
      label: 'Ministerstwo Rodziny, Pracy i Polityki Społecznej',
      url: 'https://www.gov.pl/web/rodzina',
    },
    {
      label: 'Państwowa Inspekcja Pracy (PIP)',
      url: 'https://www.pip.gov.pl',
    },
  ],
  updatedAt: '2026-11-15',
  relatedTools: [
    {
      title: 'Kalkulator Wynagrodzeń 2026',
      slug: 'pl/kalkulator-wynagrodzen',
      description: 'Oblicz dokładną pensję na rękę z płacy minimalnej.',
      category: 'Wynagrodzenia',
    },
    {
      title: 'Składki ZUS 2026',
      slug: 'pl/skladki-zus',
      description: 'Poznaj wpływ płacy minimalnej na podstawę preferencyjnego ZUS.',
      category: 'Ubezpieczenia',
    },
  ],
  relatedGuides: [
    {
      title: 'Jak Czytać Pasek Wypłaty?',
      slug: 'pl/poradniki/jak-czytac-pasek-wyplaty',
      description: 'Wyjaśnienie wszystkich skrótów i potrąceń ZUS na pasku płacowym.',
      category: 'Wynagrodzenia',
    },
    {
      title: 'Ulga dla Młodych (do 26 lat)',
      slug: 'pl/poradniki/ulga-dla-mlodych',
      description: 'Zasady korzystania z PIT 0% dla osób do 26. roku życia.',
      category: 'Ulgi',
    },
  ],
};
