import { GuideContent } from '../../types';

export const guidePlJakCzytacPasekWyplaty: GuideContent = {
  metaTitle: 'Jak Czytać Pasek Wypłaty (Pasek Wynagrodzeń)? Wyjaśnienie 2026',
  metaDescription:
    'Jak czytać pasek wynagrodzeń w 2026 roku? Sprawdź, co oznaczają skróty ZUS, podstawa wymiaru, KUP, PIT-2, składka zdrowotna NFZ, PPK i koszt pracodawcy.',
  h1: 'Jak Czytać Pasek Wypłaty (Pasek Wynagrodzeń)? Wyjaśnienie Składników 2026',
  intro:
    'Pasek wypłaty dzieli się na cztery sekcje: składniki przychodu brutto (podstawa, premie, dodatki), potrącenia ZUS pracownika (emerytalna 9,76%, rentowa 1,5%, chorobowa 2,45%), składkę zdrowotną NFZ (9%) oraz zaliczkę na podatek PIT (12%/32% po odliczeniu KUP i kwoty zmniejszającej z PIT-2). Kwota końcowa to przelew netto na Twoje konto.',
  readTimeMinutes: 8,
  updatedAt: '2026-01-15',
  articleSections: [
    {
      id: 'czym-jest-pasek-i-czy-jest-obowiazkowy',
      title: 'Czym jest pasek wynagrodzeń i czy pracodawca musi go wydawać?',
      level: 2,
      content: `Pasek wynagrodzeń (potocznie nazywany „paskiem z wypłaty” lub RMUA) to comiesięczny dokument księgowy generowany przez dział kadr i płac pracodawcy, który precyzyjnie obrazuje proces przekształcenia kwoty brutto w kwotę netto przelaną na rachunek bankowy pracownika:

- **Podstawa Prawna**: Zgodnie z art. 85 § 5 Kodeksu Pracy pracodawca, na żądanie pracownika, jest bezwzględnie obowiązany udostępnić do wglądu dokumenty, na których podstawie zostało obliczone jego wynagrodzenie. Choć przepisy nie nakazują drukowania papierowego paska każdemu z urzędu, w większości firm paski są udostępniane elektronicznie w portalach pracowniczych (np. Enova, Teta, Comarch Optima, SAP).
- **Dlaczego Warto Analizować Pasek?**: Regularna analiza paska pozwala wykryć błędy kadrowe: nieprawidłowe naliczenie godzin nadliczbowych, pominięcie dodatku nocnego, błędne naliczenie wynagrodzenia chorobowego, brak uwzględnienia kosztów podwyższonych (300 zł) czy omyłkowe potrącenie składki na PPK po złożeniu rezygnacji.`,
    },
    {
      id: 'struktura-paska-cztery-glowne-bloki',
      title: 'Struktura paska: cztery główne bloki obliczeniowe',
      level: 2,
      content: `Każdy profesjonalnie wygenerowany pasek płacowy składa się z czterech logicznych bloków informacyjnych:

1. **Dane Identyfikacyjne i Parametry Podatkowe**:
Miesiąc i rok rozliczeniowy, data wypłaty, wymiar etatu (np. 1/1), zastosowane koszty uzyskania przychodów (KUP: 250 zł lub 300 zł), zastosowana ulga podatkowa (PIT-2: 300 zł, 150 zł lub 0 zł) oraz informacja o Uldze dla Młodych czy uczestnictwie w PPK.

2. **Składniki Wynagrodzenia Brutto (Przychód)**:
Wynagrodzenie zasadnicze, premie regulaminowe, nagrody uznaniowe, wynagrodzenie za urlop wypoczynkowy, dodatek za pracę w godzinach nadliczbowych (50% lub 100%), dodatek za pracę w porze nocnej, ekwiwalenty oraz wynagrodzenie za czas niezdolności do pracy z powodu choroby (tzw. wynagrodzenie chorobowe płacone przez pracodawcę).

3. **Potrącenia Ustawowe (Składki ZUS i Podatki)**:
Składki na ubezpieczenia emerytalne, rentowe i chorobowe, składka na ubezpieczenie zdrowotne NFZ oraz zaliczka do Urzędu Skarbowego na podatek dochodowy od osób fizycznych (PIT).

4. **Potrącenia Dobrowolne i Inne**:
Wpłata pracownika na Pracownicze Plany Kapitałowe (PPK), składki na grupowe ubezpieczenie na życie (np. PZU, Warta), abonament medyczny (pakiet Medicover/Luxmed), karta sportowa (Multisport) oraz ewentualne zajęcia komornicze. Na samym dole znajduje się ostateczna kwota do wypłaty (netto).`,
    },
    {
      id: 'skladki-zus-spoleczne-pracownika',
      title: 'Ubezpieczenia społeczne ZUS pracownika (13,71%)',
      level: 2,
      content: `Pierwszym krokiem przy wyliczaniu pensji z kwoty brutto jest potrącenie składek na ubezpieczenia społeczne, które finansuje pracownik ze swojego wynagrodzenia:

- **Składka Emerytalna (9,76%)**:
Trafia do I filaru ZUS na Twoje indywidualne konto ubezpieczonego oraz częściowo na subkonto (lub do Otwartego Funduszu Emerytalnego – OFE, jeśli do niego należysz). Buduje kapitał początkowy Twojej przyszłej emerytury.
- **Składka Rentowa (1,50%)**:
Zabezpiecza środki na wypłatę rent w razie trwałej lub okresowej utraty zdolności do pracy oraz rent rodzinnych dla bliskich w razie śmierci ubezpieczonego.
- **Składka Chorobowa (2,45%)**:
Finansuje Fundusz Chorobowy ZUS. Gwarantuje prawo do zasiłku chorobowego od 34. dnia choroby w roku (pierwsze 33 dni finansuje pracodawca jako wynagrodzenie chorobowe), zasiłku macierzyńskiego, ojcowskiego oraz opiekuńczego na chore dziecko.

Łączna suma tych trzech składek wynosi **dokładnie 13,71% wynagrodzenia brutto**. Kwota ta w całości pomniejsza Twój przychód przed naliczeniem składki zdrowotnej i podatku PIT.`,
    },
    {
      id: 'skladka-zdrowotna-nfz-9-procent',
      title: 'Składka na ubezpieczenie zdrowotne NFZ (9,00%)',
      level: 2,
      content: `Kolejną pozycją na pasku płacowym jest ubezpieczenie zdrowotne, które zasila Narodowy Fundusz Zdrowia (NFZ):

- **Podstawa Naliczenia Składki Zdrowotnej**:
Podstawą nie jest pełna kwota brutto, lecz **przychód pomniejszony o składki ZUS społeczne (13,71%)**.
*Wzór*: Podstawa Zdrowotna = Brutto – (Emerytalne + Rentowe + Chorobowe).
- **Stawka Składki Zdrowotnej (9,00%)**:
Wynosi równo 9% tak ustalonej podstawy wymiaru.
- **Brak Prawa do Odliczenia**: Przed 2022 rokiem większość składki zdrowotnej (7,75%) odliczało się bezpośrednio od podatku dochodowego. Od czasu wejścia w życie Polskiego Ładu składka zdrowotna na umowie o pracę jest w 100% nieodliczalna – stanowi w całości bezpośrednie obciążenie pensji netto pracownika.`,
    },
    {
      id: 'zaliczka-na-podatek-pit-kup-i-pit2',
      title: 'Zaliczka na podatek PIT: Koszty KUP i ulga z PIT-2',
      level: 2,
      content: `Trzecim elementem obciążeń ustawowych jest zaliczka na podatek dochodowy od osób fizycznych odprowadzana przez pracodawcę do właściwego urzędu skarbowego:

1. **Ustalenie Podstawy Opodatkowania**:
Podstawa opodatkowania to podstawa składki zdrowotnej pomniejszona o przysługujące pracownikowi **Koszty Uzyskania Przychodu (KUP)**:
- Standardowe KUP: **250,00 zł** miesięcznie (gdy pracownik mieszka w tej samej miejscowości, w której znajduje się zakład pracy).
- Podwyższone KUP: **300,00 zł** miesięcznie (gdy pracownik dojeżdża do pracy z innej miejscowości).
Zgodnie z ordynacją podatkową wyliczoną podstawę opodatkowania zaokrągla się do pełnych złotych (końcówki poniżej 50 groszy pomija się, a 50 groszy i więcej podwyższa do pełnego złotego).

2. **Wyliczenie Podatku i Zastosowanie PIT-2**:
- Do kwoty 120 000 zł rocznej skumulowanej podstawy nalicza się stawkę **12%**.
- Od wyliczonego podatku odejmuje się miesięczną ulgę wynikającą ze złożonego oświadczenia **PIT-2** (standardowo 1/12 rocznej kwoty zmniejszającej = **300,00 zł**).
- Ostateczną zaliczkę na podatek również zaokrągla się do pełnych złotych.`,
    },
    {
      id: 'inne-potracenia-ppk-pzu-i-zajecia',
      title: 'Inne potrącenia: PPK, ubezpieczenia grupowe i zajęcia komornicze',
      level: 2,
      content: `W dolnej części paska znajdują się pozycje specyficzne dla danego pracownika i zakładu pracy:

- **PPK Pracownik (2,0%)**:
Podstawowa wpłata potrącana bezpośrednio z kwoty netto pracownika (2% z kwoty brutto).
- **PPK Pracodawca (1,5%)**:
Wpłata finansowana przez firmę ze środków własnych. Zwróć uwagę: kwota ta NIE pomniejsza Twojej wypłaty, ale jest dopisywana do podstawy opodatkowania PIT w danym miesiącu jako przychód w naturze, co powoduje nieznaczny wzrost zaliczki na podatek o kilka do kilkunastu złotych.
- **Pakiety Medyczne i Karty Sportowe**:
W zależności od polityki firmy pakiety mogą być współfinansowane (np. potrącenie 50 zł z netto) lub finansowane w 100% przez pracodawcę (wtedy ich rynkowa wartość stanowi przychód podlegający opodatkowaniu i oskładkowaniu).
- **Potrącenia Komornicze**:
W przypadku egzekucji komorniczej pracodawca potrąca środki zgodnie z art. 87 Kodeksu Pracy. Kodeks gwarantuje jednak kwotę wolną od potrąceń komorniczych (dla długów innych niż alimentacyjne), która jest równa **100% minimalnego wynagrodzenia za pracę netto** (w 2026 r. to 3 510,92 zł). Komornik nie może zająć ani złotówki poniżej tej kwoty.`,
    },
    {
      id: 'wynagrodzenie-chorobowe-i-zasilki-na-pasku',
      title: 'Wynagrodzenie Chorobowe i Zasiłek ZUS: Jak Czytać Dni L4 na Pasku?',
      level: 2,
      content: `Pojawienie się zwolnienia lekarskiego (L4) w danym miesiącu istotnie komplikuje konstrukcję paska wynagrodzeń. Warto znać mechanizm obliczeń, aby skontrolować prawidłowość wypłaty:

1. **Pomniejszenie Wynagrodzenia Zasadniczego (Zasada 1/30)**:
Zgodnie z rozporządzeniem Ministra Pracy, za każdy dzień kalendarzowy nieobecności spowodowanej chorobą pensję zasadniczą pomniejsza się o 1/30 jej miesięcznej wartości. Jeśli zarabiasz 6 000 zł brutto i byłeś na L4 przez 5 dni, Twoja pensja zasadnicza zostanie pomniejszona o 1 000 zł (5 × 200 zł).

2. **Pozycja „Wynagrodzenie Chorobowe” (Art. 92 Kodeksu Pracy)**:
Za pierwsze 33 dni choroby w danym roku kalendarzowym (lub pierwsze 14 dni w przypadku pracowników powyżej 50. roku życia) świadczenie finansuje bezpośrednio pracodawca:
- Wynosi ono standardowo **80% podstawy wymiaru** (średniego wynagrodzenia brutto z ostatnich 12 miesięcy pomniejszonego o 13,71% składek społecznych),
- Wynosi **100% podstawy** w przypadku choroby w ciąży, wypadku w drodze do/z pracy lub poddania się badaniom dawców komórek, tkanek i narządów.

3. **Specyfika Składkowo-Podatkowa Chorobowego**:
Od wynagrodzenia chorobowego **nie pobiera się składek na ubezpieczenia społeczne ZUS** (emerytalnej, rentowej, chorobowej). Pobiera się natomiast w pełnej wysokości **składkę zdrowotną NFZ (9%)** oraz zaliczkę na podatek dochodowy PIT (12%).`,
    },
    {
      id: 'nadgodziny-premie-i-dodatki-nocne-na-pasku',
      title: 'Premie, Nadgodziny i Dodatki Nocne: Rozbicie Składników Zmiennych',
      level: 2,
      content: `Oprócz stawki bazowej pasek płacowy precyzuje wszystkie zmienne i regulaminowe składniki wynagrodzenia:

- **Dodatki za Nadgodziny (Kodeks Pracy art. 151(1))**:
  - **Dodatek 50%**: Przysługuje za pracę w godzinach nadliczbowych przypadających w dni powszednie oraz w niedziele i święta będące dla pracownika dniami pracy zgodnie z jego rozkładem czasu pracy.
  - **Dodatek 100%**: Przysługuje za pracę nadliczbową w nocy, w niedziele i święta niebędące dniami pracy oraz w dniu wolnym z tytułu przeciętnie pięciodniowego tygodnia pracy (zazwyczaj w soboty).
- **Dodatek za Pracę w Porze Nocnej (Art. 151(8) KP)**:
  Za każdą godzinę przepracowaną w porze nocnej (między 21:00 a 7:00) przysługuje dodatek w wysokości 20% stawki godzinowej wynikającej z minimalnego wynagrodzenia za pracę obowiązującego w danym roku.
- **Premie Regulaminowe a Premie Uznaniowe (Nagrody)**:
  Premia regulaminowa ma charakter roszczeniowy – po spełnieniu obiektywnych kryteriów pracownik ma prawo żądać jej wypłaty przed sądem pracy. Premia uznaniowa (nagroda z art. 105 KP) zależy wyłącznie od swobodnej decyzji pracodawcy. Obie formy podlegają pełnemu oskładkowaniu ZUS i opodatkowaniu PIT.`,
    },
  ],
  faqs: [
    {
      q: 'Czy pracodawca ma obowiązek dawać pasek z wypłaty co miesiąc?',
      a: 'Zgodnie z art. 85 § 5 Kodeksu Pracy pracodawca ma obowiązek udostępnić dokumentację płacową na żądanie pracownika. Większość firm udostępnia paski automatycznie w formie elektronicznej w systemie kadrowym.',
    },
    {
      q: 'Dlaczego podstawa składki zdrowotnej jest inna niż podstawa PIT?',
      a: 'Podstawa zdrowotna to brutto pomniejszone o ZUS społeczny (13,71%). Podstawa PIT jest dodatkowo pomniejszona o koszty uzyskania przychodów (KUP: 250 lub 300 zł) oraz zaokrąglona do pełnych złotych.',
    },
    {
      q: 'Co oznacza pozycja "Koszty KUP" na pasku?',
      a: 'Koszty Uzyskania Przychodu to ustawowy ryczałt (250 zł lub 300 zł), o który obniża się dochód podlegający opodatkowaniu, dzięki czemu płacisz mniejszy podatek dochodowy.',
    },
    {
      q: 'Dlaczego w listopadzie moja pensja netto nagle spadła?',
      a: 'Najczęstszą przyczyną jest przekroczenie progu 120 000 zł rocznego dochodu – od nadwyżki zaliczka na PIT skacze z 12% do 32%, co skutkuje zauważalnie niższym przelewem na konto w ostatnich miesiącach roku.',
    },
    {
      q: 'Dlaczego w grudniu moja pensja netto nagle wzrosła?',
      a: 'U osób zarabiających powyżej 21 000 zł miesięcznie pod koniec roku następuje przekroczenie limitu 30-krotności ZUS (260 190 zł w 2026 r.). Pracodawca przestaje pobierać składki emerytalne i rentowe (11,26%), dzięki czemu pensja netto rośnie.',
    },
    {
      q: 'Co oznacza pozycja "Przychód z tytułu PPK"?',
      a: 'To wpłata pracodawcy na Twoje konto PPK (1,5% brutto). Pracodawca wpłaca ją do funduszu ze swoich środków, ale według przepisów stanowi ona dla Ciebie przychód, od którego należy odprowadzić podatek PIT.',
    },
    {
      q: 'Czy z paska wypłaty dowiem się, ile kosztuję firmę?',
      a: 'Wiele pasków zawiera sekcję "Narzut pracodawcy", gdzie wyszczególnione są składki ZUS finansowane przez firmę (emerytalna 9,76%, rentowa 6,5%, wypadkowa 1,67%, FP 2,45%, FGSP 0,10%), które podwyższają koszt zatrudnienia o ok. 20,48% ponad kwotę brutto.',
    },
    {
      q: 'Jak sprawdzić na pasku, czy odliczana jest ulga PIT-2?',
      a: 'Szukaj pozycji "Ulga podatkowa", "Kwota zmniejszająca" lub "PIT-2". Jeśli widnieje tam kwota 300,00 zł (lub 150/100 zł), oznacza to, że ulga jest prawidłowo uwzględniana w comiesięcznej zaliczce.',
    },
  ],
  sources: [
    {
      label: 'Kodeks Pracy (Ustawa z dnia 26 czerwca 1974 r.)',
      url: 'https://isap.sejm.gov.pl',
    },
    {
      label: 'Ministerstwo Rodziny, Pracy i Polityki Społecznej – Zasady Wynagradzania',
      url: 'https://www.gov.pl/web/rodzina',
    },
    {
      label: 'Zakład Ubezpieczeń Społecznych – Prawa Ubezpieczonego',
      url: 'https://www.zus.pl',
    },
  ],
  cta: {
    title: 'Wygeneruj Swój Pasek Wypłaty Online',
    description: 'Wpisz swoje wynagrodzenie brutto i zobacz pełne rozbicie składek ZUS, NFZ i zaliczki na podatek dochodowy.',
    buttonText: 'Otwórz kalkulator płacowy',
    buttonHref: '/pl/kalkulator-wynagrodzen/',
    badge: 'Pasek Wynagrodzeń 2026',
  },
  relatedTools: [
    {
      title: 'Kalkulator Wynagrodzeń Brutto na Netto',
      slug: 'pl/kalkulator-wynagrodzen',
      description: 'Wygeneruj dokładną symulację swojego comiesięcznego paska wypłaty.',
      category: 'Kalkulatory',
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
