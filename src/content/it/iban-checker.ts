import { PageContent } from '../types';

export const ibanCheckerIt: PageContent = {
  metaTitle: 'Verifica IBAN 2026 | Controllo codice IBAN online',
  metaDescription:
    'Verifica qualsiasi codice IBAN italiano o estero. Controllo checksum Mod-97 ISO 13616, carattere CIN, codici ABI e CAB della Banca d\'Italia gratuito.',
  h1: 'Verifica IBAN e Controllo Conto Bancario 2026',
  quickAnswer:
    'La validazione di un codice IBAN (International Bank Account Number) si sviluppa in tre fasi: la verifica della lunghezza nazionale (27 caratteri per l\'Italia), lo spostamento dei primi quattro caratteri al termine della stringa, la conversione delle lettere in cifre numeriche (A=10 a Z=35) e il calcolo del resto modulo-97 secondo la norma ISO 13616. Un IBAN formalmente valido restituisce sempre un resto pari a 1.',
  howItWorks: [
    {
      label: 'Controllo della lunghezza e del formato',
      formula: 'Lunghezza(IBAN) == 27 (per IT) && Regex(FormatoNazionale)',
      ruleCitation: 'Disposizioni della Banca d\'Italia / Standard ISO 13616-1:2020',
      effectiveDate: 'Regolamentazione obbligatoria in tutto il circuito bancario nel 2026',
    },
    {
      label: 'Permutazione dei caratteri di testa',
      formula: 'StringaTrasposta = BBAN + "IT" + 2_CifreControllo',
      ruleCitation: 'ISO 13616-1 Clausola 5.2 (Regola di trasposizione)',
      effectiveDate: 'Standard vincolante nei circuiti di compensazione interbancaria',
    },
    {
      label: 'Calcolo del checksum ISO 7064 Mod-97-10',
      formula: 'InteroNumerico mod 97 == 1 (I=18, T=29)',
      ruleCitation: 'ISO/IEC 7064:2003 (Sistemi di caratteri di controllo)',
      effectiveDate: 'Algoritmo matematico fondamentale per scongiurare errori di bonifico',
    },
    {
      label: 'Verifica del carattere CIN e codici ABI/CAB',
      formula: 'Algoritmo di controllo del carattere alfabetico CIN su ABI, CAB e Conto',
      ruleCitation: 'Normativa ABI (Associazione Bancaria Italiana)',
      effectiveDate: 'Doppio livello di controllo algoritmico tipico dei conti correnti italiani',
    },
  ],
  articleSections: [
    {
      id: 'cose-iban-in-italia',
      title: 'Cos’è il codice IBAN e come è stato introdotto in Italia?',
      level: 2,
      content:
        'L’International Bank Account Number (IBAN) è un identificatore alfanumerico standardizzato a livello internazionale, sviluppato dall’Organizzazione Internazionale per la Standardizzazione (ISO) e dal Comitato Europeo per gli Standard Bancari (ECBS). La sua funzione primaria consiste nell’uniformare la codifica dei conti correnti bancari e postali, rendendo le transazioni interbancarie rapide, sicure e prive di errori manuali.\n\nIn Italia, l’IBAN è diventato obbligatorio per tutti i bonifici nazionali ed esteri nel 2008, in conformità con la nascita dell’Area Unica dei Pagamenti in Euro (SEPA). Prima dell’adozione dell’IBAN, per eseguire un bonifico sul territorio nazionale venivano utilizzate le coordinate bancarie tradizionali note come codice BBAN italiano (composto da 23 caratteri: il carattere di controllo CIN, 5 cifre di codice ABI della banca, 5 cifre di codice CAB dello sportello e 12 caratteri per il numero di conto corrente). L’IBAN italiano ha semplicemente integrato il BBAN preesistente anteponendo il codice del Paese (`IT`) e 2 cifre numeriche di controllo internazionale calcolate con la formula Mod-97, portando la lunghezza complessiva a esattamente 27 caratteri.',
    },
    {
      id: 'funzionamento-algoritmo-mod-97',
      title: 'Come funziona l’algoritmo matematico Mod-97 (ISO 7064) passo dopo passo',
      level: 2,
      content:
        'Il fulcro della sicurezza del codice IBAN risiede nell’algoritmo matematico ISO 7064 Modulo 97-10. Questa procedura intercetta con un’affidabilità superiore al 99,99% gli errori di digitazione, le cifre omesse o la trasposizione accidentale di caratteri adiacenti:\n\n1. **Verifica della lunghezza formale**: Il validatore esamina innanzitutto che la stringa contenga esattamente il numero di caratteri previsto dal Paese emittente (27 caratteri per l’Italia, 22 per la Germania, 27 per la Francia e 24 per la Spagna).\n\n2. **Spostamento dei primi 4 caratteri in coda**: I primi quattro caratteri del codice (la sigla nazione `IT` e i due numeri di controllo, ad esempio `IT60`) vengono staccati dall’inizio e riposizionati alla fine della sequenza. L’IBAN `IT60 X054 2811 1010 0000 0123 456` si trasforma provvisoriamente in `X0542811101000000123456IT60`.\n\n3. **Conversione alfabetica in decimali**: Ogni lettera presente nel codice viene trasformata in due cifre numeriche in base all’ordine alfabetico internazionale (A=10, B=11 ... Z=35). Per l’Italia, la lettera `I` corrisponde al valore `18` e la lettera `T` al valore `29`. Il prefisso `IT` diventa il numero `1829`, mentre il carattere interno CIN (`X`) viene convertito nel valore `33`.\n\n4. **Divisione modulo 97**: Questo immenso valore numerico (composto da oltre 30 cifre) viene diviso per 97. Solo se il resto matematico finale della divisione è esattamente uguale a 1, l’IBAN viene considerato formalmente corretto e autentico.',
    },
    {
      id: 'struttura-iban-italiano',
      title: 'Struttura dettagliata dell’IBAN italiano: CIN, codice ABI, CAB e conto',
      level: 2,
      content:
        'Un codice IBAN italiano ha sempre una lunghezza fissa di 27 caratteri alfanumerici ed è articolato secondo uno schema gerarchico ben preciso:\n\n- **Posizioni 1–2 (Codice Paese)**: `IT` per l’Italia, in ottemperanza allo standard ISO 3166-1 alpha-2.\n- **Posizioni 3–4 (Caratteri di controllo IBAN)**: Due cifre numeriche derivanti dal calcolo matematico Mod-97.\n- **Posizione 5 (Carattere CIN - 1 lettera)**: Il Control Internal Number è una lettera dell’alfabeto calcolata sulla base di una tabella di pesi pari e dispari applicata a tutti i restanti 22 caratteri del BBAN nazionale.\n- **Posizioni 6–10 (Codice ABI - 5 cifre)**: Identifica l’istituto di credito autorizzato dalla Banca d’Italia. Ad esempio: `03069` (Intesa Sanpaolo), `02008` (UniCredit), `05034` (Banco BPM), `01030` (Banca Monte dei Paschi di Siena), `07601` (Poste Italiane / Bancoposta), `03268` (Banca Sella), `03475` (BNL Gruppo BNP Paribas).\n- **Posizioni 11–15 (Codice CAB - 5 cifre)**: Il Codice di Avviamento Bancario individua la specifica filiale o agenzia del gruppo bancario.\n- **Posizioni 16–27 (Numero di conto - 12 caratteri)**: Il numero progressivo del conto corrente del cliente. Se il numero di conto originario è inferiore a 12 cifre, viene preceduto da una serie di zeri per raggiungere la lunghezza richiesta.',
    },
    {
      id: 'bonifici-sepa-e-internazionali',
      title: 'Bonifici SEPA (ordinari e istantanei) versus bonifici internazionali SWIFT',
      level: 2,
      content:
        'A seconda del circuito bancario utilizzato, l’IBAN assume funzioni specifiche:\n\n- **Area SEPA (Single Euro Payments Area)**: Comprende 36 Paesi europei (inclusi i membri UE, Svizzera, Regno Unito e Norvegia). All’interno dell’area SEPA, in base al Regolamento UE n. 260/2012, vige il principio dell’«IBAN Only». Le banche non possono richiedere il codice BIC/SWIFT per i bonifici in euro tra conti SEPA; la sola fornitura dell’IBAN è sufficiente.\n- **Bonifico Istantaneo SEPA (Instant Payment)**: Permette di accreditare fino a 100.000 € sul conto del beneficiario in meno di 10 secondi, attivo 24 ore su 24, 7 giorni su 7.\n- **Bonifici extra-SEPA ed esteri in valuta**: Quando il denaro viene inviato verso Paesi fuori dal circuito europeo (ad esempio Stati Uniti, Cina o Australia) oppure in valute diverse dall’euro (USD, GBP, CHF), è tassativo indicare oltre all’IBAN anche il codice BIC/SWIFT della banca ricevente per consentire il transito attraverso le banche corrispondenti.',
    },
    {
      id: 'consigli-sicurezza-e-truffe',
      title: 'Errori comuni di digitazione, verifica del beneficiario e prevenzione delle truffe',
      level: 2,
      content:
        'Per garantire la massima sicurezza nei pagamenti elettronici quotidiani:\n\n- **Attenzione alle lettere e alle cifre simili**: Nel codice IBAN italiano la lettera `O` non compare nei codici ABI e CAB (che sono composti esclusivamente da numeri). Se notate un carattere rotondo in quelle posizioni, si tratta obbligatoriamente della cifra zero (`0`).\n- **Validità formale e reale titolarità del conto**: Il nostro sistema attesta la conformità matematica dell’IBAN e riconosce la banca emittente. Tuttavia, la validazione algoritmica non ha accesso all’anagrafe bancaria e non può confermare se il conto sia attualmente operativo o se il beneficiario effettivo coincida con il nominativo presente sulla fattura.\n- **Verifica automatica del beneficiario (Verification of Payee)**: Gli istituti bancari europei introducono il controllo sistematico di corrispondenza tra l’intestatario digitato e l’IBAN beneficiario, riducendo drasticamente il rischio di bonifici indirizzati per sbaglio a soggetti terzi.\n- **Truffe da manomissione della fattura (Man-in-the-Middle)**: Se un fornitore abituale vi comunica via e-mail un improvviso cambio di coordinate IBAN per i pagamenti, contattatelo sempre telefonicamente a un recapito aziendale consolidato prima di disporre il bonifico.',
    },
  ],
  examples: [
    {
      title: 'Esempio 1: Verifica conto Intesa Sanpaolo',
      scenario:
        'Un libero professionista a Milano deve verificare le coordinate bancarie IT60 X030 6909 6061 0000 0123 456 prima di disporre il saldo di una fattura.',
      calculationType: 'custom',
      customFields: [
        { label: 'IBAN analizzato', value: 'IT60 X030 6909 6061 0000 0123 456' },
        { label: 'Paese e lunghezza', value: 'Italia (IT) — 27 caratteri' },
        { label: 'Carattere CIN', value: 'X (Verificato su pesi pari/dispari)' },
        { label: 'Codice ABI', value: '03069 (Intesa Sanpaolo SpA)' },
        { label: 'Codice CAB', value: '09606' },
        { label: 'Numero di conto', value: '1000000123456' },
        { label: 'Esito Modulo 97', value: '1 (Algoritmo ISO 7064 verificato)', highlight: true },
        { label: 'Circuito SEPA', value: 'Abilitato a bonifici ordinari e istantanei' },
      ],
      explanation:
        'Il validatore estrae il codice ABI 03069 corrispondente a Intesa Sanpaolo, verifica la congruità del carattere CIN X e conferma che le cifre di controllo 60 soddisfano la formula con resto pari a 1.',
    },
    {
      title: 'Esempio 2: Verifica conto UniCredit',
      scenario:
        'Controllo di una coordinata bancaria UniCredit SpA con codice IBAN IT02 L020 0801 1000 0001 2345 6789.',
      calculationType: 'custom',
      customFields: [
        { label: 'IBAN analizzato', value: 'IT02 L020 0801 1000 0001 2345 6789' },
        { label: 'Paese e lunghezza', value: 'Italia (IT) — 27 caratteri' },
        { label: 'Banca emittente', value: '02008 (UniCredit SpA)' },
        { label: 'Codice sportello (CAB)', value: '01100' },
        { label: 'Carattere CIN', value: 'L' },
        { label: 'Controllo Modulo 97', value: '1 (Conforme alle specifiche)', highlight: true },
        { label: 'Codice BIC / SWIFT', value: 'UNCRITM1' },
      ],
      explanation:
        'L\'analisi conferma la corretta lunghezza di 27 caratteri, associa l\'ABI 02008 a UniCredit e certifica la validità dell\'algoritmo di controllo nazionale e internazionale.',
    },
  ],
  faqs: [
    {
      q: 'Che cosa significa l’acronimo IBAN?',
      a: 'IBAN sta per «International Bank Account Number» (numero di conto bancario internazionale). È lo standard internazionale ideato per individuare in modo univoco i conti bancari ed evitare errori nelle transazioni.',
    },
    {
      q: 'Da quanti caratteri è composto l’IBAN italiano?',
      a: 'L\'IBAN italiano è composto obbligatoriamente da 27 caratteri alfanumerici: le due lettere IT, 2 cifre di controllo, una lettera per il CIN, 5 cifre di ABI, 5 cifre di CAB e 12 caratteri per il conto corrente.',
    },
    {
      q: 'È sicuro verificare un codice IBAN su questo sito?',
      a: 'Sì, assolutamente sicuro. La verifica viene eseguita esclusivamente nel vostro browser tramite JavaScript. Nessun dato bancario viene memorizzato su server o trasferito online.',
    },
    {
      q: 'Come posso sapere a quale banca appartiene un codice IBAN?',
      a: 'In Italia, le 5 cifre che vanno dalla posizione 6 alla posizione 10 corrispondono al codice ABI, che identifica la banca. Ad esempio, 03069 indica Intesa Sanpaolo, 02008 UniCredit e 07601 Poste Italiane.',
    },
    {
      q: 'Che cosa rappresenta la lettera CIN nell’IBAN?',
      a: 'La lettera CIN (Control Internal Number) è un codice di sicurezza interno calcolato a partire dai successivi caratteri del BBAN per rilevare preventivamente eventuali errori di battitura.',
    },
    {
      q: 'Un IBAN formalmente valido è garanzia che il conto sia aperto?',
      a: 'No. Il controllo conferma che il codice rispetta le regole matematiche e i registri della Banca d\'Italia, ma non può verificare lo stato amministrativo del conto corrente (se attivo, bloccato o estinto).',
    },
    {
      q: 'Qual è la differenza tra codice IBAN e codice SWIFT / BIC?',
      a: 'L\'IBAN identifica il singolo conto corrente del destinatario, mentre il codice BIC/SWIFT identifica l\'istituto finanziario nel network di comunicazione interbancaria globale.',
    },
    {
      q: 'Posso verificare più codici IBAN contemporaneamente?',
      a: 'Sì. Il nostro strumento consente la verifica massiva fino a 50 IBAN contemporaneamente. È sufficiente incollare l\'elenco con un codice per ciascuna riga.',
    },
    {
      q: 'Serve il codice BIC per fare un bonifico in Italia o in Europa?',
      a: 'No. Per i bonifici in euro all\'interno dell\'area SEPA vige la regola comunitaria «IBAN Only», che rende il codice IBAN l\'unico parametro necessario.',
    },
  ],
  sources: [
    {
      label: 'Banca d\'Italia: Sistema dei pagamenti e coordinate bancarie',
      url: 'https://www.bancaditalia.it/compiti/sistema-pagamenti/',
    },
    {
      label: 'ABI - Associazione Bancaria Italiana: Standard e circolari operative',
      url: 'https://www.abi.it',
    },
    {
      label: 'Banca Centrale Europea: Normativa SEPA e pagamenti al dettaglio',
      url: 'https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.it.html',
    },
    {
      label: 'SWIFT: Registro internazionale ufficiale dei formati IBAN',
      url: 'https://www.swift.com/standards/data-standards/iban',
    },
  ],
  relatedTools: [
    {
      title: 'Verificatore codici BIC / SWIFT',
      slug: 'bic-swift-checker',
      description: 'Verifica i codici identificativi bancari internazionali di 8 e 11 caratteri ISO 9362.',
      category: 'Banche e Conti',
    },
    {
      title: 'Calcolatore IVA Europa',
      slug: 'vat-calculator',
      description: 'Calcola l\'aliquota ordinaria del 22% e le aliquote ridotte del 10%, 5% e 4% per fatture.',
      category: 'Tasse e IVA',
    },
    {
      title: 'Calcolatore MwSt Germania',
      slug: 'de/mwst-rechner',
      description: 'Calcolo dell\'imposta tedesca sul valore aggiunto al 19% e al 7% per operazioni UE.',
      category: 'Tasse e IVA',
    },
  ],
  relatedGuides: [
    {
      title: 'Guida all’IBAN: Composizione, calcolo e significato di ogni cifra',
      slug: 'guides/what-is-an-iban',
      description: 'Tutto quello che c\'è da sapere sulla struttura delle coordinate bancarie europee.',
      category: 'Banche e Conti',
    },
    {
      title: 'Differenza tra IBAN e BIC / SWIFT nei bonifici esteri',
      slug: 'guides/iban-vs-swift-bic',
      description: 'Come orientarsi tra bonifici SEPA e bonifici internazionali in valuta extra-UE.',
      category: 'Banche e Conti',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Questo servizio di validazione IBAN è fornito esclusivamente a scopo informativo e di controllo formale preliminare. Sebbene l\'algoritmo esegua l\'intera verifica matematica ISO 13616 e le specifiche della Banca d\'Italia, non possiamo verificare la titolarità effettiva o la piena operatività del conto. Prima di disporre transazioni di rilevante entità, si raccomanda di verificare i dettagli direttamente con la propria banca.',
};
