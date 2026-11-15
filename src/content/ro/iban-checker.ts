import { PageContent } from '../types';

export const ibanCheckerRo: PageContent = {
  metaTitle: 'Verificare IBAN 2026 | Validare cont bancar online',
  metaDescription:
    'Verifică orice IBAN din România și străinătate. Validare checksum Mod-97 ISO 13616, cod bancă BNR, identificare BIC și verificare SEPA gratuită.',
  h1: 'Verificare IBAN și Validare Cont Bancar 2026',
  quickAnswer:
    'Validarea unui cod IBAN (International Bank Account Number) se realizează în trei etape riguroase: verificarea lungimii specifice țării emitente, mutarea primelor patru caractere la sfârșitul șirului, conversia literelor în valori numerice (A=10 până la Z=35) și calculul restului modulo-97 conform normei ISO 13616. Un cont IBAN valid produce întotdeauna un rest al împărțirii egal cu 1.',
  howItWorks: [
    {
      label: 'Verificare format și lungime națională',
      formula: 'Lungime(IBAN) == 24 (pentru RO) && Regex(FormatCont)',
      ruleCitation: 'Regulamentul BNR privind standardul IBAN în România / ISO 13616',
      effectiveDate: 'Standard obligatoriu în sistemul bancar românesc în 2026',
    },
    {
      label: 'Permutarea caracterelor de identificare',
      formula: 'ȘirTranspus = BBAN + "RO" + 2_CifreControl',
      ruleCitation: 'Standardul ISO 13616-1 Paragraful 5.2',
      effectiveDate: 'Regulă universală aplicată pe toate canalele interbancare',
    },
    {
      label: 'Algoritmul de control ISO 7064 Mod-97-10',
      formula: 'ȘirNumeric mod 97 == 1 (R=27, O=24)',
      ruleCitation: 'ISO/IEC 7064:2003 (Sisteme de caractere de control)',
      effectiveDate: 'Algoritm matematic permanent pentru prevenirea plăților eronate',
    },
    {
      label: 'Identificarea băncii în registrul BNR / SENT',
      formula: 'CodBancă(4 Litere) asociat instituției din evidența BNR',
      ruleCitation: 'Registrul instituțiilor de credit acreditate de Banca Națională a României',
      effectiveDate: 'Bază de date actualizată periodic de Banca Centrală',
    },
  ],
  articleSections: [
    {
      id: 'ce-este-iban-in-romania',
      title: 'Ce este un cod IBAN și cum funcționează în România?',
      level: 2,
      content:
        'Numărul Internațional de Cont Bancar (IBAN – International Bank Account Number) este un format standardizat creat de Organizația Internațională pentru Standardizare (ISO 13616) și Comitetul European pentru Standarde Bancare (ECBS) pentru identificarea unică a conturilor bancare la nivel mondial.\n\nÎn România, utilizarea codului IBAN a fost reglementată prin regulamente exprese ale Băncii Naționale a României (BNR) încă din anul 2004, devenind obligatorie pentru toate operațiunile de încasări și plăți interbancare atât în moneda națională (Leu românesc - RON), cât și în valută (Euro, Dolar american, Liră sterlină). Înainte de adoptarea acestui format internațional unitar, fiecare instituție de credit utiliza propriile structuri interne de numerotare a conturilor, ceea ce genera erori frecvente de redactare, plăți direcționate greșit și întârzieri semnificative în decontare. Prin introducerea IBAN-ului, fiecare cont bancar deschis la o bancă comercială sau la Trezoreria Statului beneficiază de o structură fixă de 24 de caractere cu verificare matematică automată, asigurând procesarea automată directă (STP – Straight-Through Processing) în sistemele naționale de plăți ReGIS și SENT.',
    },
    {
      id: 'algoritmul-mod-97-pas-cu-pas',
      title: 'Cum funcționează algoritmul Mod-97 (ISO 7064) pas cu pas',
      level: 2,
      content:
        'Sistemul de securitate care stă la baza validării codurilor IBAN este algoritmul ISO 7064 Modulo 97-10. Acesta a fost proiectat pentru a detecta peste 99,99% din erorile uzuale de tastare, inclusiv inversarea a două cifre alăturate, omiterea sau adăugarea accidentală de caractere:\n\n1. **Verificarea lungimii totale**: În primă instanță, sistemul verifică numărul total de caractere. Pentru România, lungimea obligatorie este de exact 24 de caractere alfanumerice. Pentru Germania sunt 22 de caractere, pentru Franța 27, iar pentru Marea Britanie 22.\n\n2. **Deplasarea primelor 4 caractere**: Primele patru caractere (codul de țară `RO` urmat de cele două cifre de control) sunt decupate de la începutul codului și mutate la final. De exemplu, codul `RO49 BTRL 0001 2345 6789 01XX` devine `BTRL00012345678901XXRO49`.\n\n3. **Transformarea literelor în numere**: Fiecare literă este înlocuită cu un număr din două cifre în funcție de poziția sa în alfabet (A=10, B=11 ... Z=35). În cazul codului României, litera `R` devine `27`, iar litera `O` devine `24`. Literele codului băncii (`BTRL`) devin respectiv `11`, `29`, `27`, `21`. Se obține astfel un număr uriaș format exclusiv din cifre zecimale.\n\n4. **Calculul restului împărțirii la 97**: Acest număr uriaș este împărțit succesiv la 97 folosind aritmetica modulară pe blocuri de cifre. Dacă și numai dacă restul final al împărțirii este egal cu 1, codul IBAN este considerat valid și corect alcătuit pentru procesare bancară directă.',
    },
    {
      id: 'structura-iban-romania',
      title: 'Structura contului IBAN în România: Cifre de control, cod bancă și cont',
      level: 2,
      content:
        'Toate conturile IBAN emise de instituțiile bancare autorizate din România au o lungime fixă de 24 de caractere și respectă următoarea arhitectură strictă:\n\n- **Pozițiile 1–2 (Codul de țară)**: Întotdeauna `RO` pentru conturile deschise în România, conform ISO 3166-1 alpha-2.\n- **Pozițiile 3–4 (Cifrele de control)**: Două cifre calculate prin algoritmul Mod-97 la generarea contului de către banca emitentă.\n- **Pozițiile 5–8 (Codul BIC al băncii - 4 litere)**: Un identificator alfabetic unic de 4 caractere alocat băncii de către BNR. De exemplu: `BTRL` pentru Banca Transilvania, `RNCB` pentru Banca Comercială Română (BCR), `BRDE` pentru BRD Groupe Société Générale, `INGB` pentru ING Bank România, `RZBR` pentru Raiffeisen Bank România, `BACX` pentru UniCredit Bank, `CECE` pentru CEC Bank sau `TREZ` pentru conturile de Trezorerie ale Ministerului Finanțelor Publice.\n- **Pozițiile 9–24 (BBAN - 16 caractere)**: Numărul propriu-zis de cont stabilit de către bancă, ce poate conține atât cifre, cât și litere majuscule, identificând sucursala teritorială și contul specific al titularului persoană fizică sau companie.',
    },
    {
      id: 'sepa-regis-sent-swift',
      title: 'Plăți în lei și valută: ReGIS, SENT, Plăți Instant și transferuri SEPA',
      level: 2,
      content:
        'În funcție de tipul și moneda tranzacției, codul IBAN este procesat prin diverse canale de plăți naționale și europene:\n\n- **Plăți interbancare în Lei (RON)**: Transferurile de mică valoare sunt procesate automat prin casa de compensare SENT (operată de TransFonD), iar plățile urgente sau de mare valoare (peste 50.000 RON) prin sistemul ReGIS operat direct de BNR. Pentru transferurile instant prin sistemul Plăți Instant administrat de TransFonD și noul protocol RoPay, transferul în lei se realizează în mai puțin de 10 secunde, non-stop 24/7/365.\n- **Transferuri europene SEPA (în Euro)**: România este integrată în zona SEPA (Single Euro Payments Area). Pentru plățile în euro către orice alt stat SEPA (cum ar fi Germania, Italia, Spania, Franța), este necesară doar introducerea codului IBAN. Băncile nu pot percepe comisioane discriminatorii și nu pot solicita codul BIC/SWIFT pentru plăți SEPA standard (principiul „IBAN-Only”).\n- **Transferuri internaționale prin SWIFT**: Pentru viramente în dolari (USD), lire sterline (GBP) sau transferuri către țări din afara Europei, pe lângă codul IBAN este obligatorie furnizarea codului SWIFT/BIC al băncii destinatare.',
    },
    {
      id: 'erori-comune-si-securitate',
      title: 'Greșeli frecvente la completarea IBAN-ului, Serviciul Afișare Nume și securitate',
      level: 2,
      content:
        'Chiar dacă algoritmul de validare oferă o protecție matematică de excepție, utilizatorii trebuie să respecte câteva măsuri de precauție:\n\n- **Confuzia între litera O și cifra 0**: În codul de bancă apar doar litere (ex: `RO`), iar în primele 4 poziții cifrele de control sunt strict numerice. Asigurați-vă că nu introduceți cifra zero în locul literei O.\n- **Serviciul Afișare Nume (SAN)**: În România, majoritatea băncilor au integrat Serviciul Afișare Nume administrat de TransFonD. La introducerea unui IBAN, sistemul afișează automat prenumele și inițiala numelui titularului (sau denumirea companiei), prevenind transferurile către destinatari greșiți sau plăți frauduloase.\n- **Atacuri de tip „Clipboard Hijacking”**: Aplicațiile malițioase pot modifica automat numărul de cont copiat în memoria temporară (clipboard). Înainte de a autoriza o plată în aplicația de mobile banking, verificați cu atenție cifrele de control și ultimele 4 caractere ale contului afișat pe ecran.\n- **Plăți către Trezoreria Statului**: Conturile IBAN deschise la Trezoreria Statului (având codul `TREZ`) necesită adesea completarea obligatorie a codului de identificare fiscală (CIF/CNP) în câmpul de detalii pentru a permite stingerea obligațiilor bugetare fără întârzieri.',
    },
  ],
  examples: [
    {
      title: 'Exemplul 1: Validare cont Banca Transilvania',
      scenario:
        'Un contabil verifică datele bancare ale unui furnizor din Cluj-Napoca având codul IBAN RO49 BTRL 0001 2345 6789 01XX.',
      calculationType: 'custom',
      customFields: [
        { label: 'IBAN introdus', value: 'RO49 BTRL 0001 2345 6789 01XX' },
        { label: 'Țară și lungime', value: 'România (RO) — 24 de caractere' },
        { label: 'Cod bancă', value: 'BTRL (Banca Transilvania SA)' },
        { label: 'Număr cont intern', value: '00012345678901XX' },
        { label: 'Șir transpus', value: 'BTRL00012345678901XXRO49' },
        { label: 'Valoare numerică (R=27, O=24)', value: '11292721000123456789013333272449' },
        { label: 'Rest împărțire Mod-97', value: '1 (Validare matematică confirmată)', highlight: true },
        { label: 'Compatibilitate plăți', value: 'ReGIS, SENT și SEPA Direct' },
      ],
      explanation:
        'Validatorul decupează prefixul RO49, îl atașează la finalul șirului, transformă literele în valori numerice și calculează restul la împărțirea cu 97. Deoarece restul este 1, contul este conform normelor BNR.',
    },
    {
      title: 'Exemplul 2: Validare cont BCR (Banca Comercială Română)',
      scenario:
        'Verificarea unui cont IBAN al Băncii Comerciale Române RO12 RNCB 0074 0123 4567 8901.',
      calculationType: 'custom',
      customFields: [
        { label: 'IBAN introdus', value: 'RO12 RNCB 0074 0123 4567 8901' },
        { label: 'Țară și lungime', value: 'România (RO) — 24 de caractere' },
        { label: 'Identificator bancă', value: 'RNCB (Banca Comercială Română SA)' },
        { label: 'Cifre de control', value: '12' },
        { label: 'Număr cont', value: '0074012345678901' },
        { label: 'Rezultat Modulo-97', value: '1 (Cont conform ISO 13616)', highlight: true },
        { label: 'Cod SWIFT / BIC', value: 'RNCBROBU' },
      ],
      explanation:
        'Sistemul confirmă lungimea exactă de 24 de caractere, identifică BCR prin codul RNCB și validează cifra de control 12 conform algoritmului.',
    },
  ],
  faqs: [
    {
      q: 'Ce este codul IBAN și de la ce provine denumirea?',
      a: 'IBAN provine din limba engleză (International Bank Account Number) și reprezintă standardul internațional de identificare a conturilor bancare, conceput pentru a garanta siguranța plăților fără erori.',
    },
    {
      q: 'Câte caractere are un cod IBAN în România?',
      a: 'În România, codul IBAN conține întotdeauna exact 24 de caractere alfanumerice: primele 2 litere reprezintă codul de țară (RO), urmate de 2 cifre de control, 4 litere pentru codul băncii și 16 caractere pentru contul clientului.',
    },
    {
      q: 'Este sigură verificarea contului pe acest site?',
      a: 'Da, 100% sigură. Toate verificările se realizează exclusiv pe dispozitivul dumneavoastră, în browser, prin intermediul codului JavaScript. Datele contului nu sunt transmise pe niciun server și nu sunt salvate.',
    },
    {
      q: 'Cum pot afla la ce bancă este deschis un cont IBAN?',
      a: 'În România, caracterele de la poziția 5 la 8 (cele 4 litere după cifrele de control) identifică banca emitentă. De exemplu: BTRL este Banca Transilvania, RNCB este BCR, BRDE este BRD, iar INGB este ING Bank.',
    },
    {
      q: 'Dacă IBAN-ul este valid, înseamnă sigur că banii vor ajunge?',
      a: 'Validarea matematică garantează că structura și cifrele de control sunt corecte și aparțin unei bănci reale. Totuși, ea nu poate garanta că respectivul cont nu a fost închis sau poprit recent.',
    },
    {
      q: 'Unde pot găsi codul meu IBAN?',
      a: 'Puteți găsi codul IBAN în contractul de deschidere de cont, pe extrasele de cont lunare, în aplicația de internet banking sau mobile banking ori direct pe cardul de debit dacă banca îl are imprimat.',
    },
    {
      q: 'Ce diferență există între IBAN și codul SWIFT / BIC?',
      a: 'Codul IBAN identifică în mod unic contul personal sau de firmă, în timp ce codul SWIFT/BIC identifică instituția bancară în sine în rețeaua mondială de telecomunicații financiare.',
    },
    {
      q: 'Pot verifica mai multe coduri IBAN simultan?',
      a: 'Da. Instrumentul nostru suportă validarea în masă (bulk) pentru până la 50 de conturi IBAN simultan. Introduceți conturile separate prin rând nou pentru a obține o analiză tabelară completă.',
    },
    {
      q: 'Ce se întâmplă dacă trimit bani către un IBAN greșit?',
      a: 'Datorită celor două cifre de control Mod-97, sistemul băncii dumneavoastră va refuza aproape sigur tranzacția dacă ați greșit o cifră, banii rămânând în siguranță în contul dumneavoastră.',
    },
  ],
  sources: [
    {
      label: 'Banca Națională a României (BNR): Reglementări privind plățile',
      url: 'https://www.bnro.ro/Sisteme-de-plati-3171.aspx',
    },
    {
      label: 'TransFonD: Operatorul sistemului de plăți SENT și Plăți Instant',
      url: 'https://www.transfond.ro',
    },
    {
      label: 'SWIFT: Registrul internațional oficial al formatelor IBAN',
      url: 'https://www.swift.com/standards/data-standards/iban',
    },
    {
      label: 'Banca Centrală Europeană: Standardul SEPA',
      url: 'https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html',
    },
  ],
  relatedTools: [
    {
      title: 'Calculator TVA România 2026',
      slug: 'ro/calculator-tva',
      description: 'Calculează rapid cotele de 19%, 9% și 5% TVA pentru prețuri nete și brute.',
      category: 'Taxe & TVA',
    },
    {
      title: 'Verificator coduri BIC / SWIFT',
      slug: 'bic-swift-checker',
      description: 'Validează coduri bancare internaționale de 8 și 11 caractere conform ISO 9362.',
      category: 'Bănci & Conturi',
    },
    {
      title: 'Calculator și Comparator TVA Europa',
      slug: 'vat-calculator',
      description: 'Compară cotele de TVA standard și reduse aplicabile în Uniunea Europeană.',
      category: 'Taxe & TVA',
    },
  ],
  relatedGuides: [
    {
      title: 'Ghid complet: Ce este un cont IBAN și cum funcționează?',
      slug: 'guides/what-is-an-iban',
      description: 'Află istoria, utilitatea și alcătuirea codurilor internaționale de cont bancar.',
      category: 'Bănci & Conturi',
    },
    {
      title: 'IBAN vs SWIFT / BIC: Când ai nevoie de fiecare cod?',
      slug: 'guides/iban-vs-swift-bic',
      description: 'Diferențele esențiale la transferurile bancare naționale și internaționale.',
      category: 'Bănci & Conturi',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Acest instrument de verificare a codurilor IBAN este pus la dispoziție exclusiv în scop informativ și de verificare preliminară. Deși algoritmul efectuează validarea matematică conform standardelor internaționale ISO 13616 și BNR, nu putem garanta existența efectivă a titularului sau starea curentă a contului. Înainte de a efectua plăți importante, confirmați datele direct cu beneficiarul sau banca emitentă.',
};
