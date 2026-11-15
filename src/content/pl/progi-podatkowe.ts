import { PageContent } from '../types';

export const contentPlProgiPodatkowe: PageContent = {
  metaTitle: 'Progi Podatkowe 2026 w Polsce: Skala Podatkowa 12% i 32% oraz Kwota Wolna',
  metaDescription:
    'Jakie są progi podatkowe w 2026 roku w Polsce? Poznaj I próg (12% do 120 000 zł), II próg (32% powyżej 120 000 zł), kwotę wolną od podatku 30 000 zł oraz zasady wspólnego rozliczenia.',
  h1: 'Progi Podatkowe 2026 w Polsce: Skala Podatkowa 12% i 32%',
  quickAnswer:
    'W 2026 roku w Polsce obowiązują dwa progi podatkowe na skali podatkowej: I próg wynosi 12% dla podstawy opodatkowania do 120 000 zł rocznie, a II próg to 32% od nadwyżki powyżej 120 000 zł. Kwota wolna od podatku wynosi 30 000 zł, co daje roczną kwotę zmniejszającą podatek w wysokości 3 600 zł (300 zł miesięcznie).',
  howItWorks: [
    {
      label: 'I Próg Podatkowy (12%)',
      formula: 'Podatek = Dochód (do 120 000 zł) × 12% - 3 600 zł (kwota zmniejszająca)',
      ruleCitation: 'Ustawa o podatku dochodowym od osób fizycznych (art. 27 ust. 1)',
      effectiveDate: 'Kwota wolna od podatku wynosi 30 000 zł.',
    },
    {
      label: 'II Próg Podatkowy (32%)',
      formula: 'Podatek = 10 800 zł + 32% × (Dochód - 120 000 zł)',
      ruleCitation: 'Ustawa o podatku dochodowym od osób fizycznych (art. 27 ust. 1)',
      effectiveDate: 'Stawka 32% obejmuje wyłącznie nadwyżkę ponad 120 000 zł dochodu rocznie.',
    },
    {
      label: 'Danina Solidarnościowa (4%)',
      formula: 'Danina = 4% × (Dochód - 1 000 000 zł)',
      ruleCitation: 'Ustawa o PIT (art. 30h) – deklaracja DSF-1',
      effectiveDate: 'Dotyczy rocznych dochodów powyżej 1 miliona złotych.',
    },
  ],
  articleSections: [
    {
      id: 'zasady-skali-podatkowej-2026',
      title: 'Skala Podatkowa w 2026 Roku – Podstawowe Parametry i Progi',
      level: 2,
      content: `Opodatkowanie na zasadach ogólnych (skala podatkowa) uregulowane w art. 27 ustawy z dnia 26 lipca 1991 r. o podatku dochodowym od osób fizycznych (Ustawa o PIT) to podstawowa i domyślna forma opodatkowania dochodów osób fizycznych w Polsce:

1. **I Próg Podatkowy – Stawka 12% (Do 120 000 zł dochodu)**:
Do kwoty 120 000 zł podstawy obliczenia podatku podatek dochodowy wynosi **12% minus kwota zmniejszająca podatek 3 600 zł**. W praktyce oznacza to, że dochód do 30 000 zł rocznie jest całkowicie nieopodatkowany (tzw. kwota wolna), a każda złotówka pomiędzy 30 001 zł a 120 000 zł jest opodatkowana stawką 12%.

2. **II Próg Podatkowy – Stawka 32% (Powyżej 120 000 zł dochodu)**:
Od nadwyżki dochodu przekraczającej 120 000 zł rocznie podatek wynosi **10 800 zł + 32% od kwoty ponad 120 000 zł**. Kwota 10 800 zł to maksymalny podatek z pierwszego przedziału (120 000 zł × 12% – 3 600 zł).

3. **Danina Solidarnościowa (4% powyżej 1 000 000 zł)**:
Dla osób osiągających bardzo wysokie dochody roczne przekraczające 1 milion złotych obowiązuje dodatkowa danina solidarnościowa w wysokości **4%** od nadwyżki ponad 1 000 000 zł sumy dochodów opodatkowanych według skali, podatkiem liniowym oraz ze zbycia papierów wartościowych.`,
    },
    {
      id: 'kwota-wolna-i-pit-2-mechanizm',
      title: 'Kwota Wolna od Podatku (30 000 zł) i Kwota Zmniejszająca Podatek',
      level: 2,
      content: `Kwota wolna od podatku w wysokości 30 000 zł obowiązuje jednolicie dla wszystkich podatników rozliczających się według skali podatkowej:

- **Mechanizm Działania Kwoty Zmniejszającej**: Kwota zmniejszająca podatek to iloczyn kwoty wolnej i najniższej stawki skali (30 000 zł × 12% = **3 600 zł rocznie**).
- **Zaliczki Miesięczne i Oświadczenie PIT-2**: Pracodawca obliczający miesięczne zaliczki na podatek pomniejsza należny podatek o 1/12 kwoty rocznej, czyli o **300 zł miesięcznie**.
- **Wielu Płatników**: Jeśli podatnik pracuje w kilku miejscach lub pobiera równocześnie emeryturę z ZUS i pracuje na etacie, może podzielić kwotę zmniejszającą na maksymalnie 3 płatników (po 150 zł przy 2 płatnikach lub po 100 zł przy 3 płatnikach). Zapobiega to powstawaniu niedopłaty podatku w zeznaniu rocznym PIT-37.`,
    },
    {
      id: 'jak-uniknac-drugiego-progu-metody',
      title: 'Legalne Sposoby na Zmniejszenie Podatku i Uniknięcie II Progu (32%)',
      level: 2,
      content: `Podatnicy, których roczny dochód zbliża się lub przekracza 120 000 zł, mogą skorzystać z przewidzianych prawem mechanizmów optymalizacji podatkowej:

1. **Wspólne Rozliczenie z Małżonkiem**:
Najbardziej efektywna metoda dla małżeństw o dużej dysproporcji zarobków. Dochody obojga małżonków sumuje się i dzieli przez 2, a podatek oblicza się od połowy sumy i mnoży przez 2. Jeśli jeden z małżonków zarabia 200 000 zł, a drugi nie zarabia wcale (0 zł), podstawa dla każdego wynosi 100 000 zł – całość mieści się w I progu 12%, a podwójna kwota wolna (2 × 30 000 zł) pozwala zaoszczędzić ponad 16 000 zł podatku rocznie.

2. **Wpłaty na IKZE (Indywidualne Konto Zabezpieczenia Emerytalnego)**:
Wpłaty na IKZE podlegają bezpośredniemu odliczeniu od dochodu w zeznaniu rocznym. W 2026 roku limit wpłat dla pracowników wynosi ponad 9 300 zł, co dla podatnika w drugim progu podatkowym (32%) oznacza bezpośredni zwrot z urzędu skarbowego w wysokości blisko 3 000 zł.

3. **Ulga na Dzieci (Ulga Prorodzinna)**:
Dla podatników wychowujących dzieci odliczenie od podatku wynosi: 1 112,04 zł rocznie na pierwsze i drugie dziecko, 2 000,04 zł na trzecie dziecko oraz 2 700,00 zł na czwarte i kolejne.

4. **Koszty Autorskie (50% KUP)**:
Twórcy, programiści, dziennikarze i naukowcy mogą korzystać z 50% kosztów uzyskania przychodów z praw autorskich (do rocznego limitu 120 000 zł), co obniża podstawę opodatkowania o połowę i skutecznie chroni przed wejściem w 32%.`,
    },
    {
      id: 'porownanie-skali-z-liniowym-i-ryczaltem',
      title: 'Skala Podatkowa vs Podatek Liniowy (19%) i Ryczałt dla Przedsiębiorców',
      level: 2,
      content: `Dla osób prowadzących działalność gospodarczą skala podatkowa jest tylko jedną z opcji:

- **Do 120 000 zł Dochodu**: Skala podatkowa (12%) z kwotą wolną 30 000 zł jest niemal zawsze bezkonkurencyjna w porównaniu z podatkiem liniowym 19% (przy 100 000 zł dochodu podatek na skali wynosi 8 400 zł, a na liniowym 19 000 zł).
- **Powyżej 150 000 – 180 000 zł Dochodu**: Wkracza opłacalność podatku liniowego 19%, gdzie każda kolejna złotówka opodatkowana jest stałą stawką 19% bez skoku do 32%.
- **Ryczałt**: Dla branż o niskich kosztach (np. IT ze stawką 12%) ryczałt wygrywa ze skalą nawet przy niższych przychodach, gdyż podatek liczony jest od przychodu, a stawka 12% jest stała bez względu na wysokość obrotów.`,
    },
    {
      id: 'danina-solidarnosciowa-trzeci-prog-podatkowy',
      title: 'Danina Solidarnościowa (4%) – Faktyczny Trzeci Próg Podatkowy Powyżej 1 Miliona Złotych',
      level: 2,
      content: `Choć formalnie skala podatkowa w Polsce kończy się na stawce 32%, osoby o najwyższych dochodach podlegają dodatkowemu obciążeniu w postaci **daniny solidarnościowej** (art. 30h ustawy o PIT):

1. **Podstawa i Stawka Daniny**:
Stawka daniny solidarnościowej wynosi **4% podstawy jej obliczenia**. Podstawę stanowi nadwyżka sumy dochodów podlegających opodatkowaniu ponad kwotę **1 000 000 zł** w danym roku podatkowym (po pomniejszeniu o zapłacone składki na ubezpieczenia społeczne).

2. **Sumowanie Wszystkich Źródeł Dochodów**:
W przeciwieństwie do tradycyjnej skali podatkowej, przy ustalaniu progu miliona złotych sumuje się dochody z różnych źródeł:
- Dochody ze skali podatkowej (umowa o pracę, zlecenia, emerytura – formularz PIT-36/PIT-37),
- Dochody z działalności gospodarczej opodatkowanej podatkiem liniowym 19% (PIT-36L),
- Dochody z odpłatnego zbycia papierów wartościowych, akcji i kryptowalut (PIT-38),
- Dochody z kwalifikowanych praw własności intelektualnej IP Box (PIT-CFC/PIT-36).

3. **Rozliczenie i Deklaracja DSF-1**:
Daninę solidarnościową rozlicza się na odrębnym formularzu **DSF-1** składanym do 30 kwietnia roku następującego po roku podatkowym. Środki z daniny trafiają bezpośrednio na rachunek Solidarnościowego Funduszu Wsparcia Osób Niepełnosprawnych. Dla podatnika na skali zarabiającego powyżej 1 miliona złotych krańcowa stawka podatku wynosi zatem aż **36%** (32% PIT + 4% danina).`,
    },
    {
      id: 'ulgi-podatkowe-odliczane-od-dochodu-i-podatku',
      title: 'Przegląd Ulg Podatkowych Obniżających Podstawę i Podatek PIT',
      level: 2,
      content: `Prawidłowe wykorzystanie katalogu ulg podatkowych pozwala skutecznie zredukować należny podatek lub powstrzymać wejście w II próg podatkowy:

- **Ulga Termomodernizacyjna (do 53 000 zł)**: Przysługuje właścicielom domów jednorodzinnych na wydatki związane z ociepleniem, wymianą pieca na pompę ciepła, instalacją fotowoltaiczną lub wymianą okien. Kwotę odlicza się bezpośrednio od dochodu, a niewykorzystaną część można rozliczać przez kolejne 6 lat.
- **Ulga na Internet (do 760 zł)**: Można z niej skorzystać wyłącznie w dwóch kolejno po sobie następujących latach podatkowych, jeżeli podatnik nie korzystał z niej w latach wcześniejszych.
- **Darowizny Krwiodawstwa i Cele Społeczne**: Ekwiwalent za oddaną krew (130 zł za litr krwi pełnej) oraz darowizny na rzecz organizacji pożytku publicznego (OPP) można odliczyć od dochodu do łącznego limitu 6% rocznego dochodu podatnika.
- **Ulga na Zabytki (Pałacyk Plus)**: Pozwala na odliczenie 50% wydatków na prace konserwatorskie i restauratorskie wpisanego do rejestru zabytków budynku mieszkalnego.`,
    },
  ],
  examples: [
    {
      title: 'Przykład 1: Pracownik zarabiający 10 000 zł brutto miesięcznie (dochód w I progu)',
      scenario:
        'Kalkulacja rocznego podatku pracownika z pensją 10 000 zł brutto (roczny dochód po odliczeniu ZUS i standardowych KUP wynosi ok. 100 488 zł).',
      calculationType: 'custom',
      inputAmount: 100488.0,
      resultTotal: 8459.0,
      customFields: [
        { label: 'Roczna podstawa opodatkowania', value: '100 488,00 zł' },
        { label: 'Próg podatkowy', value: 'I Próg (12%)' },
        { label: 'Podatek wyjściowy (12%)', value: '12 058,56 zł' },
        { label: 'Kwota zmniejszająca podatek', value: '-3 600,00 zł' },
        { label: 'Roczny podatek PIT do zapłaty', value: '8 459,00 zł', highlight: true },
        { label: 'Efektywna stawka podatkowa', value: '8,42%' },
      ],
      explanation:
        'Dzięki kwocie wolnej 30 000 zł efektywne opodatkowanie wynosi zaledwie 8,42%, mimo że nominalna stawka w I progu to 12%.',
    },
    {
      title: 'Przykład 2: Menedżer wchodzący w II próg (dochód roczny 180 000 zł)',
      scenario:
        'Kalkulacja podatku dla menedżera, którego podstawa opodatkowania w skali roku wynosi 180 000 zł (przekroczenie I progu o 60 000 zł).',
      calculationType: 'custom',
      inputAmount: 180000.0,
      resultTotal: 30000.0,
      customFields: [
        { label: 'Podstawa opodatkowania', value: '180 000,00 zł' },
        { label: 'Część w I progu (120 000 zł)', value: '10 800,00 zł' },
        { label: 'Nadwyżka w II progu (60 000 zł × 32%)', value: '19 200,00 zł' },
        { label: 'Łączny podatek PIT', value: '30 000,00 zł', highlight: true },
        { label: 'Efektywna stawka podatkowa', value: '16,67%' },
      ],
      explanation:
        'Od pierwszych 120 000 zł dochodu menedżer płaci 10 800 zł podatku. Dopiero od nadwyżki 60 000 zł naliczane jest 32% (19 200 zł). Średnie efektywne opodatkowanie wynosi 16,67%.',
    },
  ],
  faqs: [
    {
      q: 'Od jakiej kwoty płaci się 32% podatku?',
      a: 'Stawkę 32% płaci się od nadwyżki dochodu przekraczającej 120 000 zł rocznie. Pierwsze 120 000 zł dochodu jest opodatkowane stawką 12% (z uwzględnieniem kwoty wolnej 30 000 zł).',
    },
    {
      q: 'Czy emerytura liczy się do limitu 120 000 zł?',
      a: 'Tak. Świadczenia emerytalne i rentowe z ZUS podlegają opodatkowaniu na skali podatkowej. Jeśli emeryt dodatkowo dorabia na etacie, dochody z emerytury i pracy sumują się przy weryfikacji progu 120 000 zł.',
    },
    {
      q: 'Jak działa kwota wolna 30 000 zł w praktyce?',
      a: 'Osoba, której roczny dochód nie przekroczył 30 000 zł, nie płaci ani grosza podatku PIT. Wszelkie zaliczki pobrane przez płatnika w ciągu roku są zwracane w całości w rozliczeniu rocznym.',
    },
    {
      q: 'Czy zryczałtowane zasiłki chorobowe wliczają się do progów?',
      a: 'Tak, zasiłki chorobowe i opiekuńcze wypłacane przez ZUS lub pracodawcę stanowią przychód z innych źródeł podlegający opodatkowaniu na skali podatkowej (12%/32%).',
    },
    {
      q: 'Kiedy opłaca się rozliczenie z małżonkiem?',
      a: 'Wspólne rozliczenie opłaca się niemal zawsze, gdy jeden z małżonków zarabia powyżej 120 000 zł, a drugi zarabia mniej niż 120 000 zł lub nie osiąga dochodów wcale, co pozwala uniknąć stawki 32% i podwójnie wykorzystać kwotę wolną.',
    },
    {
      q: 'Czym jest danina solidarnościowa i kogo dotyczy?',
      a: 'Danina solidarnościowa to dodatkowy 4-procentowy podatek płacony przez najbogatszych od nadwyżki dochodów rocznych przekraczających 1 000 000 zł (na deklaracji DSF-1 składanej do 30 kwietnia).',
    },
    {
      q: 'Czy przedsiębiorca na ryczałcie może skorzystać z kwoty wolnej 30 000 zł?',
      a: 'Nie. Kwota wolna od podatku 30 000 zł przysługuje wyłącznie podatnikom rozliczającym się na zasadach ogólnych (skala podatkowa). Na ryczałcie i podatku liniowym kwota wolna nie obowiązuje.',
    },
    {
      q: 'Do kiedy należy złożyć zeznanie roczne PIT za 2026 rok?',
      a: 'Roczne deklaracje podatkowe (PIT-37, PIT-36, PIT-36L, PIT-28) składa się w urzędzie skarbowym w terminie od 15 lutego do 30 kwietnia kolejnego roku kalendarzowego.',
    },
  ],
  sources: [
    {
      label: 'Ustawa o podatku dochodowym od osób fizycznych (Dz.U. 2024 poz. 226)',
      url: 'https://isap.sejm.gov.pl',
    },
    {
      label: 'Portal Podatkowy Ministerstwa Finansów (Twój e-PIT)',
      url: 'https://www.podatki.gov.pl',
    },
    {
      label: 'Główny Urząd Statystyczny (GUS) – Wskaźniki Wynagrodzeń',
      url: 'https://stat.gov.pl',
    },
  ],
  updatedAt: '2026-11-15',
  relatedTools: [
    {
      title: 'Kalkulator Wynagrodzeń 2026',
      slug: 'pl/kalkulator-wynagrodzen',
      description: 'Sprawdź, w którym miesiącu Twoje dochody przekroczą próg 120 000 zł.',
      category: 'Wynagrodzenia',
    },
    {
      title: 'Kalkulator B2B vs UoP',
      slug: 'pl/kalkulator-b2b',
      description: 'Porównaj skalę podatkową z podatkiem liniowym 19% i ryczałtem.',
      category: 'Podatki',
    },
  ],
  relatedGuides: [
    {
      title: 'Ulga dla Młodych (do 26 lat)',
      slug: 'pl/poradniki/ulga-dla-mlodych',
      description: 'Zasady korzystania z PIT 0% dla osób do 26. roku życia.',
      category: 'Ulgi',
    },
    {
      title: 'B2B czy Umowa o Pracę?',
      slug: 'pl/poradniki/b2b-czy-umowa-o-prace',
      description: 'Wielkie porównanie zarobków, urlopów i ryzyk prawnych w 2026 roku.',
      category: 'Poradniki',
    },
  ],
};
