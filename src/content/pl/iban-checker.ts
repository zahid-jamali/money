import { PageContent } from '../types';

export const ibanCheckerPl: PageContent = {
  metaTitle: 'Sprawdź IBAN 2026 | Walidator konta bankowego online',
  metaDescription:
    'Sprawdź numer konta IBAN online. Walidacja sumy kontrolnej Mod-97, kodu banku i oddziału według ISO 13616 oraz standardu NRB w Polsce za darmo.',
  h1: 'Sprawdź IBAN i Numer Konta 2026',
  quickAnswer:
    'Walidacja numeru IBAN (Międzynarodowego Numeru Rachunku Bankowego) odbywa się w trzech etapach: sprawdzeniu długości znaków, przeniesieniu pierwszych czterech znaków na koniec ciągu, zamianie liter na cyfry (A=10 do Z=35) oraz obliczeniu reszty z dzielenia modulo-97 zgodnie z normą ISO 13616. Prawidłowy numer IBAN po podzieleniu przez 97 daje resztę równą dokładnie 1.',
  howItWorks: [
    {
      label: 'Weryfikacja formatu i długości (NRB / IBAN)',
      formula: 'Długość(IBAN) == 28 dla PL && TylkoCyfry(NRB)',
      ruleCitation: 'Zarządzenie Prezesa NBP w sprawie standardu NRB / ISO 13616',
      effectiveDate: 'Obowiązujący jednolity standard bankowy w Polsce w 2026 r.',
    },
    {
      label: 'Przestawienie znaków (Transpozycja)',
      formula: 'Przekształcony = 26_cyfr_NRB + "PL" + 2_cyfry_kontrolne',
      ruleCitation: 'ISO 13616-1 punkt 5.2 (Zasada permutacji)',
      effectiveDate: 'Zasada obowiązująca we wszystkich systemach rozliczeniowych',
    },
    {
      label: 'Obliczenie sumy kontrolnej ISO 7064 Mod-97-10',
      formula: 'CiągLiczbowy mod 97 == 1 (P=25, L=21)',
      ruleCitation: 'Polska Norma PN-ISO 7064:2003 (Systemy znaków kontrolnych)',
      effectiveDate: 'Matematyczny algorytm eliminujący błędy pisarskie i czeskie',
    },
    {
      label: 'Identyfikacja banku i jednostki rozliczeniowej',
      formula: 'Wyszukanie 8-cyfrowego numeru rozliczeniowego w ewidencji KIR / NBP',
      ruleCitation: 'Ewidencja numerów rozliczeniowych prowadzona przez NBP i KIR',
      effectiveDate: 'Aktualizowana na bieżąco lista instytucji finansowych w Polsce',
    },
  ],
  articleSections: [
    {
      id: 'co-to-jest-iban-i-nrb',
      title: 'Czym jest numer rachunku IBAN i standard NRB w Polsce?',
      level: 2,
      content:
        'Międzynarodowy Numer Rachunku Bankowego (IBAN – International Bank Account Number) to globalny standard zapisu numerów kont bankowych opracowany przez Międzynarodową Organizację Normalizacyjną (norma ISO 13616) oraz Europejski Komitet Standardów Bankowych. Standard ten powstał w celu wyeliminowania pomyłek w rozliczeniach międzybankowych i radykalnego przyspieszenia transferów pieniężnych w zglobalizowanej gospodarce.\n\nW Polsce od 2004 roku obowiązuje zintegrowany z normą ISO standard NRB (Numer Rachunku Bankowego), który liczy dokładnie 26 cyfr. W codziennym obrocie krajowym (np. w standardowych przelewach w systemie Elixir, Express Elixir czy płatnościach skarbowych) banki i użytkownicy posługują się 26-cyfrowym numerem NRB. W przypadku płatności zagranicznych lub europejskich przelewów SEPA na początku polskiego numeru dodaje się dwuliterowy kod kraju „PL”, tworząc pełny 28-znakowy polski numer IBAN. Dzięki pełnej unifikacji ze strukturą europejską każdy polski rachunek bankowy spełnia rygorystyczne wymagania międzynarodowego systemu bankowego, umożliwiając bezpośrednie księgowanie transakcji handlowych bez konieczności kosztownej interwencji operatora rozliczeniowego.',
    },
    {
      id: 'jak-dziala-algorytm-mod-97',
      title: 'Jak działa algorytm Mod-97 według normy ISO 7064 krok po kroku',
      level: 2,
      content:
        'Fundamentem bezpieczeństwa numeru IBAN jest matematyczny algorytm sumy kontrolnej ISO 7064 Modulo 97-10. Został on zaprojektowany tak, aby z prawdopodobieństwem przekraczającym 99,99% wykrywać wszelkie pomyłki ludzkie, w tym przestawienie sąsiednich cyfr (tzw. błędy czeskie), pominięcie cyfry lub jej powtórzenie.\n\nProcedura sprawdzania poprawności polskiego IBAN przebiega w następujących krokach:\n\n1. **Sprawdzenie długości**: Polski numer IBAN musi składać się z dokładnie 28 znaków (dwóch liter „PL” oraz 26 cyfr). Jeżeli użytkownik wprowadzi numer krajowy (26 cyfr), walidator automatycznie dołącza prefiks kraju.\n\n2. **Przeniesienie znaków na koniec**: Pierwsze 4 znaki numeru (kod „PL” oraz 2 cyfry kontrolne, np. `PL61`) zostają odcięte z początku i dopisane na samym końcu ciągu. W ten sposób powstaje ciąg rozpoczynający się od 8-cyfrowego numeru rozliczeniowego banku.\n\n3. **Konwersja liter na liczby**: Litery zostają zastąpione odpowiednikami liczbowymi według reguły A=10, B=11 ... Z=35. W polskim kodzie litera `P` przyjmuje wartość `25`, a litera `L` wartość `21`. Prefiks `PL` staje się liczbą `2521`.\n\n4. **Dzielenie z resztą modulo 97**: Ponieważ powstała liczba liczy aż 30 cyfr i nie mieści się w tradycyjnych rejestrach pamięci komputerowej, dzielenie przez 97 wykonuje się metodą modularną fragmentami. Jeżeli ostateczna reszta z dzielenia wynosi dokładnie 1, numer jest poprawny pod względem matematycznym i nadaje się do natychmiastowej realizacji w systemie międzybankowym.',
    },
    {
      id: 'struktura-polskiego-numeru-konta',
      title: 'Struktura polskiego numeru konta: Od cyfr kontrolnych po numer klienta',
      level: 2,
      content:
        'Polski numer rachunku bankowego (NRB) charakteryzuje się logiczną, trzyczęściową architekturą o łącznej długości 26 cyfr (lub 28 znaków wraz z kodem kraju PL):\n\n- **Cyfry 1–2 (lub pozycje 3–4 w IBAN)**: Dwie cyfry sumy kontrolnej. Zapewniają poprawność całego numeru i chronią przed wpisaniem błędnych danych w bankowości elektronicznej.\n- **Cyfry 3–10 (8 cyfr jednostki rozliczeniowej)**: Numer rozliczeniowy jednostki organizacyjnej banku przydzielany przez Narodowy Bank Polski (NBP). Pierwsze 3 lub 4 cyfry identyfikują konkretną instytucję finansową (np. `1020` to PKO Bank Polski, `1140` to mBank, `1090` to Santander Bank Polska, `1240` to Bank Pekao SA, a `1050` to ING Bank Śląski, `1010` to NBP). Kolejne cyfry oznaczają konkretny oddział banku oraz cyfrę kontrolną numeru rozliczeniowego obliczaną wagami NBP.\n- **Cyfry 11–26 (16 cyfr numeru rachunku klienta)**: Unikalny numer konta przydzielony klientowi przez dany bank. Format tej części jest ustalany wewnętrznie przez dany bank, często zawierając podkody typu rachunku (rachunek bieżący, oszczędnościowy, subkonto walutowe czy rachunek techniczny dla kredytu).',
    },
    {
      id: 'przelewy-sepa-elixir-swift',
      title: 'Przelewy SEPA, Elixir, Express Elixir i przelewy międzynarodowe SWIFT',
      level: 2,
      content:
        'Znajomość własnego numeru IBAN jest kluczowa w zależności od kanału rozliczeniowego, z którego korzystasz:\n\n- **Przelewy krajowe w złotych (PLN)**: Zlecenia realizowane przez Krajową Izbę Rozliczeniową w systemach Elixir (sesje poranne, południowe i popołudniowe) oraz całodobowym Express Elixir zazwyczaj wymagają wprowadzenia jedynie 26 cyfr numeru NRB. Większość polskich systemów bankowych automatycznie ignoruje wpisany prefiks PL.\n- **Przelewy europejskie SEPA (w walucie EUR)**: Przy wysyłaniu lub odbieraniu euro z krajów Jednolitego Obszaru Płatności w Euro (36 państw, w tym Niemcy, Francja, Holandia) podanie pełnego numeru IBAN z kodem kraju jest bezwzględnie wymagane. Zgodnie z unijnym rozporządzeniem nr 260/2012 banki nie mogą żądać kodu BIC/SWIFT przy transakcjach SEPA (tzw. zasada „IBAN-Only”). Dodatkowo przelewy SEPA Instant pozwalają na rozliczenie płatności w euro w ciągu zaledwie 10 sekund bez barier granicznych.\n- **Przelewy międzynarodowe SWIFT**: Przy transakcjach w dolarach amerykańskich (USD), funtach brytyjskich (GBP) lub transferach poza Europę oprócz numeru IBAN konieczne jest podanie 8- lub 11-znakowego kodu SWIFT/BIC banku odbiorcy oraz określenie opcji kosztowej (OUR, BEN lub SHA).\n- **Płatności mobilne BLIK**: Chociaż system BLIK opiera się na 6-cyfrowych kodach lub przelewach na numer telefonu (P2P), w tle każda operacja jest księgowana na powiązanym rachunku IBAN.',
    },
    {
      id: 'bezpieczenstwo-i-weryfikacja-rachunku',
      title: 'Najczęstsze błędy, split payment i zasady bezpiecznego zlecania przelewów',
      level: 2,
      content:
        'Mimo wysokiej skuteczności algorytmu sumy kontrolnej, użytkownicy bankowości elektronicznej powinni pamiętać o fundamentalnych zasadach bezpieczeństwa:\n\n- **Prawidłowość matematyczna a status rachunku**: Walidator IBAN potwierdza, że wpisany ciąg znaków jest zgodny ze standardem ISO 13616 i wskazuje istniejący bank. Narzędzie nie ma jednak dostępu do danych osobowych i nie weryfikuje, czy konto jest aktywne, zablokowane lub czy dane odbiorcy zgadzają się z właścicielem.\n- **Zagrożenie złośliwym oprogramowaniem (podmiana schowka)**: Jedną z popularnych metod cyberprzestępczości jest atak polegający na podmianie numeru konta skopiowanego do schowka systemowego. Po wklejeniu numeru rachunku na stronie banku zawsze porównaj pierwsze i ostatnie 4 cyfry z fakturą lub dokumentem źródłowym.\n- **Sprawdzanie białej listy podatników VAT i mechanizm Split Payment**: W relacjach biznesowych (B2B) w Polsce firmy powinny dodatkowo weryfikować rachunek kontrahenta w Wykazie podatników VAT prowadzonym przez Szefa KAS (tzw. Biała Lista VAT). Płatności powyżej 15 000 zł brutto z Mechanizmem Podzielonej Płatności (MPP) muszą trafiać na rachunek rozliczeniowy posiadający powiązane subkonto VAT.\n- **Indywidualny mikrorachunek podatkowy**: Do rozliczeń podatków dochodowych PIT, CIT oraz podatku od towarów i usług VAT podatnicy stosują indywidualny mikrorachunek przypisany do numeru PESEL lub NIP, którego cyfry kontrolne i struktura podlegają dokładnie tym samym regułom walidacji co tradycyjne rachunki oszczędnościowo-rozliczeniowe.\n- **Zasada ograniczonego zaufania przy transakcjach**: Wszelkie powiadomienia mailowe o rzekomej zmianie konta bankowego kontrahenta należy weryfikować telefonicznie przed autoryzacją przelewu w bankowości elektronicznej.',
    },
  ],
  examples: [
    {
      title: 'Przykład 1: Weryfikacja polskiego konta w PKO Banku Polskim',
      scenario:
        'Księgowy sprawdza poprawność numeru rachunku wskazanego na fakturze: PL61 1020 1013 0000 0002 0000 1234.',
      calculationType: 'custom',
      customFields: [
        { label: 'Wprowadzony IBAN', value: 'PL61 1020 1013 0000 0002 0000 1234' },
        { label: 'Kraj i długość', value: 'Polska (PL) — 28 znaków (26 cyfr NRB)' },
        { label: 'Numer rozliczeniowy', value: '10201013 (PKO Bank Polski SA)' },
        { label: 'Konto klienta', value: '0000000200001234' },
        { label: 'Przestawiony ciąg', value: '102010130000000200001234PL61' },
        { label: 'Ciąg liczbowy (P=25, L=21)', value: '102010130000000200001234252161' },
        { label: 'Reszta z dzielenia mod 97', value: '1 (Suma kontrolna poprawna)', highlight: true },
        { label: 'Przynależność SEPA', value: 'Rachunek obsługuje przelewy SEPA i Elixir' },
      ],
      explanation:
        'Ciąg znaków po przeniesieniu PL61 na koniec i zamianie liter P i L na 25 i 21 tworzy liczbę dającą resztę 1 z dzielenia przez 97. Numer rozliczeniowy 1020 jednoznacznie wskazuje PKO Bank Polski.',
    },
    {
      title: 'Przykład 2: Sprawdzenie konta w mBanku',
      scenario:
        'Przedsiębiorca weryfikuje konto do wpłaty zaliczki dla kontrahenta z numerem PL14 1140 2004 0000 3102 0000 5678.',
      calculationType: 'custom',
      customFields: [
        { label: 'Wprowadzony IBAN', value: 'PL14 1140 2004 0000 3102 0000 5678' },
        { label: 'Kraj i długość', value: 'Polska (PL) — 28 znaków' },
        { label: 'Identyfikator banku', value: '1140 (mBank SA / BRE Bank)' },
        { label: 'Jednostka oddziałowa', value: '2004' },
        { label: 'Numer rachunku', value: '0000310200005678' },
        { label: 'Wynik algorytmu Mod-97', value: '1 (Walidacja zakończona sukcesem)', highlight: true },
        { label: 'Kod SWIFT / BIC', value: 'BREXPLPW' },
      ],
      explanation:
        'Walidator potwierdza prawidłową długość 28 znaków, identyfikuje mBank na podstawie prefiksu 1140 i potwierdza ważność sumy kontrolnej 14.',
    },
  ],
  faqs: [
    {
      q: 'Co oznacza skrót IBAN i czym różni się od NRB?',
      a: 'IBAN (International Bank Account Number) to międzynarodowy standard numeracji kont. W Polsce standardem krajowym jest NRB (26 cyfr), natomiast polski IBAN to ten sam numer NRB poprzedzony literami „PL” (łącznie 28 znaków).',
    },
    {
      q: 'Jak sprawdzić, czy numer konta bankowego jest poprawny?',
      a: 'Wystarczy wkleić numer konta do naszego bezpłatnego walidatora. Narzędzie sprawdza długość, strukturę, sumę kontrolną Mod-97 oraz wyszukuje bank w bazie numerów rozliczeniowych NBP i KIR.',
    },
    {
      q: 'Czy wpisywanie numeru IBAN na tej stronie jest bezpieczne?',
      a: 'Tak, w 100% bezpieczne. Narzędzie przetwarza dane wyłącznie w Twojej przeglądarce za pomocą kodu JavaScript. Numer konta nie jest nigdzie przesyłany ani zapisywany w żadnej bazie danych.',
    },
    {
      q: 'Co oznaczają poszczególne cyfry w polskim numerze konta?',
      a: 'Pierwsze 2 cyfry to suma kontrolna. Następne 8 cyfr to numer rozliczeniowy banku i oddziału, a pozostałe 16 cyfr to unikalny numer rachunku klienta.',
    },
    {
      q: 'Które cyfry wskazują, w jakim banku znajduje się konto?',
      a: 'Cyfry od 3 do 6 w polskim numerze NRB (lub od 5 do 8 w pełnym IBAN z kodem PL) to unikalny identyfikator banku, np. 1020 to PKO BP, 1140 to mBank, 1090 to Santander, a 1050 to ING Bank Śląski.',
    },
    {
      q: 'Czy przy przelewach krajowych muszę wpisywać PL?',
      a: 'Nie. Przy standardowych przelewach w złotych (PLN) realizowanych w polskich bankach wystarczy podać 26 cyfr numeru NRB. Kod PL wymagany jest przy przelewach zagranicznych i walutowych.',
    },
    {
      q: 'Czy poprawny IBAN gwarantuje, że przelew dotrze do odbiorcy?',
      a: 'Poprawny IBAN gwarantuje brak błędu pisarskiego i poprawność formatu bankowego. Nie weryfikuje jednak, czy konto nie zostało zamknięte lub czy nazwisko odbiorcy zgadza się z danymi u dostawcy płatności.',
    },
    {
      q: 'Czy mogę sprawdzić wiele numerów kont jednocześnie?',
      a: 'Tak. Nasz kalkulator umożliwia masową weryfikację do 50 numerów IBAN jednocześnie. Wystarczy wkleić listę numerów rozdzielonych nowymi liniami.',
    },
    {
      q: 'Co to jest kod SWIFT/BIC i kiedy jest potrzebny?',
      a: 'Kod SWIFT/BIC to międzynarodowy identyfikator instytucji finansowej. W Polsce jest on wymagany głównie przy przelewach walutowych z zagranicy spoza obszaru SEPA lub w walutach obcych (np. USD, GBP).',
    },
  ],
  sources: [
    {
      label: 'Narodowy Bank Polski (NBP): Ewidencja numerów rozliczeniowych',
      url: 'https://www.nbp.pl/home.aspx?f=/banki_w_polsce/ewidencja/ewidencja.html',
    },
    {
      label: 'Krajowa Izba Rozliczeniowa (KIR): Standardy systemów Elixir i Euro Elixir',
      url: 'https://www.kir.pl/o-nas/standardy-i-regulacje',
    },
    {
      label: 'SWIFT: Oficjalny rejestr formatów IBAN',
      url: 'https://www.swift.com/standards/data-standards/iban',
    },
    {
      label: 'Europejski Bank Centralny: Standardy SEPA',
      url: 'https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html',
    },
  ],
  relatedTools: [
    {
      title: 'Kalkulator VAT Polska',
      slug: 'pl/kalkulator-vat',
      description: 'Obliczanie stawek 23%, 8% i 5% VAT z kwot netto i brutto dla faktur w Polsce.',
      category: 'Podatki & VAT',
    },
    {
      title: 'Walidator kodów BIC / SWIFT',
      slug: 'bic-swift-checker',
      description: 'Weryfikacja 8 i 11-znakowych kodów BIC/SWIFT banków na całym świecie.',
      category: 'Bankowość',
    },
    {
      title: 'Kalkulator VAT UE i Porównywarka',
      slug: 'vat-calculator',
      description: 'Porównanie stawek podatku od towarów i usług we wszystkich 27 krajach UE.',
      category: 'Podatki & VAT',
    },
  ],
  relatedGuides: [
    {
      title: 'Co to jest IBAN? Kompletny przewodnik po międzynarodowych numerach kont',
      slug: 'guides/what-is-an-iban',
      description: 'Poznaj historię, budowę i globalne zasady funkcjonowania standardu IBAN.',
      category: 'Bankowość',
    },
    {
      title: 'IBAN a SWIFT / BIC: Kluczowe różnice w przelewach zagranicznych',
      slug: 'guides/iban-vs-swift-bic',
      description: 'Dowiedz się, kiedy potrzebujesz numeru konta, a kiedy kodu banku SWIFT.',
      category: 'Bankowość',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Narzędzie do sprawdzania numerów IBAN służy wyłącznie celom informacyjnym i wstępnej weryfikacji syntaktycznej. Choć algorytm przeprowadza pełną weryfikację matematyczną według ISO 13616 i wytycznych NBP, nie weryfikuje tożsamości właściciela konta ani jego aktualnego salda. Przed realizacją transakcji o wysokiej wartości zawsze upewnij się co do poprawności danych bezpośrednio u odbiorcy płatności.',
};
