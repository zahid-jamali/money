import { PageContent } from '../types';

export const contentRoCalculatorPfaSrl: PageContent = {
  metaTitle: 'Calculator PFA vs SRL 2026: Comparație Taxe, Dividende și Profit Net',
  metaDescription:
    'Compară PFA sistem real cu SRL microîntreprindere în 2026. Află impozitul pe venit (10% vs 1%/3%), CAS 25%, CASS plafonat, impozitul pe dividende 8% și profitul net.',
  h1: 'Calculator PFA vs SRL 2026: Simulator Fiscal și Profit Net',
  quickAnswer:
    'În 2026, PFA în sistem real este recomandat pentru venituri anuale moderate (sub 80.000 – 100.000 lei) sau cheltuieli deductibile mari, oferind acces direct la bani. SRL microîntreprindere (cu impozit de 1% sau 3%, dividende de 8% și salariu minim obligatoriu) devine mult mai rentabil la încasări mai mari.',
  howItWorks: [
    {
      label: 'Impozitarea PFA în sistem real',
      formula: 'Profit Net PFA = Venituri – Cheltuieli Deductibile – CAS – CASS – Impozit 10%',
      ruleCitation: 'Art. 68 și 118 din Legea nr. 227/2015 privind Codul Fiscal',
      effectiveDate: '2026-01-01',
    },
    {
      label: 'Contribuțiile sociale PFA (CAS și CASS plafonate)',
      formula: 'CAS = 25% la plafonul de 12 sau 24 salarii; CASS = 10% plafonat la 6–60 salarii',
      ruleCitation: 'Art. 148 și 170 din Legea nr. 227/2015 privind Codul Fiscal',
      effectiveDate: '2026-01-01',
    },
    {
      label: 'Regimul microîntreprinderilor SRL (1% sau 3%)',
      formula: 'Impozit Micro = Venituri Totale × 1% (sub 60.000 EUR) sau 3% (peste 60.000 EUR)',
      ruleCitation: 'Art. 47–55 din Codul Fiscal modificat prin Legea 296/2023',
      effectiveDate: '2026-01-01',
    },
    {
      label: 'Impozitarea dividendelor și CASS asociat',
      formula: 'Dividende Nete = Profit Brut SRL – Impozit Dividende (8%) – CASS Dividende (plafon 6/12/24)',
      ruleCitation: 'Art. 97 alin. (7) și Art. 170 din Legea nr. 227/2015 privind Codul Fiscal',
      effectiveDate: '2026-01-01',
    },
  ],
  articleSections: [
    {
      id: 'dilema-fundamentala-pfa-sau-srl',
      title: 'Dilema Fundamentală a Antreprenorului: PFA sau SRL în 2026?',
      level: 2,
      content: `Alegerea formei juridice pentru desfășurarea unei activități economice independente reprezintă prima și cea mai importantă decizie a unui freelancer, prestator de servicii sau antreprenor în România. În ultimii ani, reformele fiscale succesive (Ordonanța Guvernului nr. 16/2022 și Legea nr. 296/2023) au reconfigurat profund tratamentul fiscal pentru ambele entități:

- **Persoana Fizică Autorizată (PFA)**:
Reprezintă o formă de organizare simplificată reglementată de OUG nr. 44/2008. PFA-ul nu deține personalitate juridică distinctă de persoana fizică a titularului. Principalul său avantaj operațional constă în **accesul instantaneu la disponibilitățile bănești**: orice leu încasat în contul bancar al PFA-ului poate fi retras sau cheltuit imediat în scopuri personale, fără a fi necesară distribuirea de dividende sau justificarea contabilă a destinației sumelor. În contrapartidă, titularul PFA răspunde pentru datoriile fiscale și comerciale cu întreg patrimoniul său personal (locuință, terenuri, autoturisme, economii).

- **Societatea cu Răspundere Limitată (SRL)**:
Este o persoană juridică de drept privat cu patrimoniu complet autonom față de fondatorii săi, reglementată de Legea societăților nr. 31/1990. Răspunderea asociaților este limitată strict la valoarea capitalului social subscris și vărsat, oferind un grad înalt de protecție a averii private. Dezavantajul major este rigiditatea fluxurilor de numerar: banii firmei aparțin exclusiv persoanei juridice, iar asociatul nu poate retrage profitul decât trimestrial sau anual prin hotărârea adunării generale a asociaților privind repartizarea și plata dividendelor, după aprobarea situațiilor financiare intermediare și reținerea impozitului de 8%.`,
    },
    {
      id: 'regimul-fiscal-complet-al-pfa-in-sistem-real',
      title: 'Regimul Fiscal Complet al PFA în Sistem Real (Evidență Contabilă în Partidă Simplă)',
      level: 2,
      content: `Pentru un PFA care activează în sistem real, baza de calcul a taxelor o constituie **venitul net anual**, calculat ca diferență între veniturile brute încasate și cheltuielile deductibile efectuate în scopul desfășurării activității economice (conform Registrului de Evidență Fiscală):

1. **Contribuția de Asigurări Sociale (CAS - Pensii 25%)**:
Datorarea contribuției de pensii depinde de nivelul venitului net anual raportat la salariul de bază minim brut pe țară (4.050 lei în 2026):
- **Venit net sub 12 salarii minime (sub 48.600 lei/an)**: CAS este opțional. PFA-ul nu plătește nimic dacă alege să nu se asigure în sistemul public de pensii.
- **Venit net între 12 și 24 de salarii minime (48.600 – 97.200 lei/an)**: CAS este obligatoriu și se calculează la plafonul fix de 12 salarii minime: \`12 × 4.050 lei × 25% = 12.150 lei/an\`.
- **Venit net peste 24 de salarii minime (peste 97.200 lei/an)**: CAS este plafonat la 24 de salarii minime: \`24 × 4.050 lei × 25% = 24.300 lei/an\`.

2. **Contribuția de Asigurări Sociale de Sănătate (CASS - Sănătate 10%)**:
Spre deosebire de anii anteriori când CASS era plafonată la 24 de salarii, noua legislație prevede că pentru PFA în sistem real:
- Cota de 10% se aplică la **venitul net efectiv realizat**.
- Plafonul minim obligatoriu este de **6 salarii minime** (24.300 lei), rezultând un CASS minim de 2.430 lei/an (cu excepția situației în care titularul este simultan angajat cu contract de muncă).
- Plafonul maxim absolut a fost majorat la **60 de salarii minime** (243.000 lei), ceea ce înseamnă că CASS maxim plătit de un PFA ajunge la **24.300 lei/an**.

3. **Impozitul pe Venitul Net din Activități Independente (10%)**:
Se aplică asupra venitului net impozabil, obținut prin scăderea din venitul net a contribuțiilor CAS și CASS deductibile fiscal: \`Impozit = (Venit Net – CAS – CASS) × 10%\`.`,
    },
    {
      id: 'regimul-microintreprinderilor-srl-in-2026',
      title: 'Regimul Microîntreprinderilor SRL: Condiții, Cotele de 1% și 3% și Salariatul Obligatoriu',
      level: 2,
      content: `O microîntreprindere beneficiază de un sistem extrem de favorabil de impozitare pe cifra de afaceri, dacă îndeplinește condițiile cumulative stabilite de art. 47 din Codul Fiscal:

### Criterii Obligatorii pentru Statutul de Microîntreprindere:
1. **Plafonul Maxim de Venituri**: Încasările totale anuale nu trebuie să depășească echivalentul în lei a **500.000 euro** la cursul de schimb de la închiderea exercițiului financiar.
2. **Angajat cu Normă Întreagă**: Societatea trebuie să aibă **cel puțin un salariat cu normă întreagă (8 ore/zi)** sau mai mulți angajați cu fracțiuni de normă a căror durată cumulată echivalează cu un contract cu normă întreagă. Angajatul trebuie remunerat cu cel puțin salariul minim brut pe țară (4.050 lei).
3. **Plafonul de Participație (Regula unei Singure Micro)**: Un asociat poate deține, direct sau indirect, peste 25% din părțile sociale într-o **singură societate microîntreprindere**.

### Cotele de Impozitare pe Cifra de Afaceri:
- **Cota de 1%**: Se aplică dacă veniturile anuale nu depășesc **60.000 euro** (aprox. 298.500 lei) și societatea nu desfășoară activități exceptate.
- **Cota de 3%**: Se aplică dacă:
  - Veniturile anuale se situează între **60.000 euro și 500.000 euro**, sau
  - Societatea desfășoară activități principale sau secundare încadrate în coduri CAEN specifice: editare de software (5821, 5829), activități de realizare a softului la comandă (6201), consultanță în tehnologia informației (6202), managementul facilităților de calcul (6203), activități ale portalurilor web (6312), baruri și restaurante (5610, 5630), asistență medicală și stomatologică.`,
    },
    {
      id: 'impozitarea-dividendelor-si-plafonul-cass-pentru-asociati',
      title: 'Impozitarea Dividendelor și Contribuția CASS a Asociatului',
      level: 2,
      content: `După achitarea impozitului pe veniturile microîntreprinderii (1% sau 3%) și acoperirea cheltuielilor operaționale și salariale, profitul net contabil poate fi retras de către asociați sub formă de dividende:

- **Impozitul pe Dividende (8%)**: Se reține la sursă de către companie la momentul plății efective a dividendelor către asociat și se virează la bugetul de stat până la data de 25 a lunii următoare.
- **Contribuția CASS pe Dividende Încasate (Persoană Fizică)**:
Asociatul persoană fizică are obligația depunerii Declarației Unice la ANAF până la data de 25 mai a anului următor dacă dividendele nete încasate în anul calendaristic (cumulate cu alte venituri din investiții, dobânzi sau chirii) depășesc plafoanele legale:
  1. **Sub 6 salarii minime (sub 24.300 lei)**: CASS = **0 lei**.
  2. **Între 6 și 12 salarii minime (24.300 – 48.600 lei)**: CASS fix = \`6 × 4.050 lei × 10% = **2.430 lei**\`.
  3. **Între 12 și 24 de salarii minime (48.600 – 97.200 lei)**: CASS fix = \`12 × 4.050 lei × 10% = **4.860 lei**\`.
  4. **Peste 24 de salarii minime (peste 97.200 lei)**: CASS plafonat la maximum 24 de salarii = \`24 × 4.050 lei × 10% = **9.720 lei**\`.`,
    },
    {
      id: 'concluzie-si-punctul-de-inflexiune',
      title: 'Punctul de Inflexiune: La Ce Nivel de Venituri Devine SRL Net Superior?',
      level: 2,
      content: `Comparația riguroasă dintre PFA și SRL arată că nu există o formulă universal valabilă, ci praguri precise de rentabilitate determinate de structura costurilor:

1. **Pentru venituri de până la 60.000 – 80.000 lei anual**:
PFA în sistem real este adesea soluția optimă. PFA-ul nu suportă costul fix obligatoriu cu salariul minim (aproximativ 49.693 lei pe an incluzând taxele pe muncă), iar cheltuielile cu contabilitatea sunt minime (150–250 lei/lună).
2. **Pentru venituri de peste 120.000 – 180.000 lei anual**:
SRL preia categoric conducerea. La venituri mari, plafonul de CASS la PFA urcă până la 60 de salarii minime (24.300 lei), iar impozitul de 10% pe venit mușcă adânc din marjă. Pe SRL, cota de 1% sau 3% micro combinată cu dividendele de 8% și CASS-ul plafonat la maximum 24 de salarii (9.720 lei) permite antreprenorului să economisească între **10.000 și 35.000 lei pe an** în comparație cu un PFA.`,
    },
  ],
  examples: [
    {
      title: 'Exemplul 1: Freelancer cu venituri de 180.000 lei/an și cheltuieli de 20.000 lei',
      scenario:
        'Comparație între PFA sistem real și SRL micro (cota 1%) pentru un specialist în marketing digital cu încasări de 180.000 lei anual.',
      calculationType: 'custom',
      inputAmount: 180000.0,
      resultTotal: 122800.0,
      customFields: [
        { label: 'Venit Brut Anual', value: '180.000,00 lei' },
        { label: 'Cheltuieli deductibile', value: '20.000,00 lei' },
        { label: 'Profit Net PFA rămas în buzunar', value: '107.820,00 lei' },
        { label: 'Profit Net SRL (dividende + salariu)', value: '122.846,00 lei', highlight: true },
        { label: 'Avantaj financiar net în favoarea SRL', value: '+15.026,00 lei / an' },
      ],
      explanation:
        'La un nivel al încasărilor de 180.000 lei, SRL aduce cu peste 15.000 lei mai mult profit net anual datorită plafonării taxelor pe dividende și cotei micro de 1%.',
    },
    {
      title: 'Exemplul 2: Activitate la început de drum – 60.000 lei venit anual fără salariați',
      scenario:
        'Comparație pentru un fotograf cu încasări moderate de 60.000 lei și cheltuieli deductibile de 15.000 lei (venit net 45.000 lei).',
      calculationType: 'custom',
      inputAmount: 60000.0,
      resultTotal: 38250.0,
      customFields: [
        { label: 'Venit Brut Încasat', value: '60.000,00 lei' },
        { label: 'Cheltuieli Deductibile', value: '15.000,00 lei' },
        { label: 'Venit net impozabil', value: '45.000,00 lei' },
        { label: 'CAS Pensii PFA (sub 12 salarii = 0 lei)', value: '0,00 lei' },
        { label: 'CASS Sănătate PFA (10%)', value: '-4.500,00 lei' },
        { label: 'Impozit 10% PFA', value: '-4.050,00 lei' },
        { label: 'Profit Net PFA', value: '36.450,00 lei', highlight: true },
      ],
      explanation:
        'Pentru venituri sub pragul de 12 salarii minime, PFA este considerabil mai flexibil și profitabil, nefiind împovărat de obligația angajării cu normă întreagă necesară pentru menținerea statutului de microîntreprindere.',
    },
  ],
  faqs: [
    {
      q: 'Pot scoate oricând banii dintr-un PFA?',
      a: 'Da. Titularul PFA are acces deplin și necondiționat la fondurile încasate în contul bancar, putându-le folosi oricând pentru cheltuieli personale fără a plăti taxe suplimentare.',
    },
    {
      q: 'Cât este impozitul pe dividende la SRL în 2026?',
      a: 'Cota de impozit pe dividende distribuite asociaților este de 8%. Impozitul se reține la sursă de către companie și se virează la bugetul de stat până la data de 25 a lunii următoare.',
    },
    {
      q: 'Este obligatoriu să am angajat pe SRL pentru a plăti 1% sau 3% micro?',
      a: 'Da. Pentru a beneficia de regimul de impozitare pe veniturile microîntreprinderilor, societatea trebuie să aibă cel puțin 1 salariat cu normă întreagă (8 ore/zi). În caz contrar, devine plătitoare de impozit pe profit de 16%.',
    },
    {
      q: 'Cât plătește un PFA contribuție la sănătate (CASS) în 2026?',
      a: 'Un PFA în sistem real plătește 10% din venitul net realizat, suma fiind plafonată la un minim de 6 salarii minime (2.430 lei) și un maxim de 60 de salarii minime (24.300 lei).',
    },
    {
      q: 'La ce cifră de afaceri se aplică cota de 3% la microîntreprinderi?',
      a: 'Cota de 3% se aplică firmelor cu venituri cuprinse între 60.000 euro și 500.000 euro pe an, precum și celor care activează în IT, consultanță, HoReCa sau asistență medicală indiferent de cifra de afaceri.',
    },
    {
      q: 'Pot fi angajat cu contract de muncă în propriul meu SRL?',
      a: 'Da. Administratorul sau asociatul poate încheia un contract individual de muncă cu propria firmă pentru a îndeplini condiția existenței unui salariat cu normă întreagă necesară regimului micro.',
    },
    {
      q: 'Ce răspundere juridică are titularul unui PFA în caz de datorii?',
      a: 'Titularul PFA răspunde cu patrimoniul său de afectațiune și, în completare, cu toate bunurile personale (inclusiv conturi private, apartament sau mașină) pentru creanțele neachitate.',
    },
    {
      q: 'Când se plătește CASS pe dividendele ridicate dintr-un SRL?',
      a: 'Dacă totalul dividendelor nete încasate de o persoană fizică într-un an depășește 6 salarii minime (24.300 lei), se datorează CASS plafonat la 6, 12 sau 24 de salarii, achitat prin Declarația Unică până la 25 mai.',
    },
    {
      q: 'Care formă juridică este mai potrivită pentru programatorii IT?',
      a: 'Pentru venituri mari specifice industriei IT (peste 150.000 lei/an), SRL este de regulă mult mai eficient fiscal decât PFA, plafonând contribuțiile sociale și protejând patrimoniul privat.',
    },
  ],
  sources: [
    {
      label: 'Codul Fiscal – Titlul III (Microîntreprinderi) și Titlul IV (Venituri Independente)',
      url: 'https://www.anaf.ro',
    },
    {
      label: 'Registrul Comerțului (ONRC) – Proceduri Înființare PFA și SRL',
      url: 'https://www.onrc.ro',
    },
    {
      label: 'Ministerul Finanțelor Publice – Ghidul Fiscal al Contribuabililor',
      url: 'https://mfinante.gov.ro',
    },
  ],
  relatedTools: [
    {
      title: 'Calculator Salariu 2026',
      slug: 'ro/calculator-salariu',
      description: 'Află salariul net și costul complet al angajatorului pentru contractul individual de muncă.',
      category: 'Salarii',
    },
    {
      title: 'Deducere Personală',
      slug: 'ro/deducere-personala',
      description: 'Grila oficială a deducerilor personale în funcție de numărul de persoane în întreținere.',
      category: 'Deduceri',
    },
  ],
  relatedGuides: [
    {
      title: 'Ghid PFA sau SRL în 2026',
      slug: 'ro/ghiduri/pfa-sau-srl',
      description: 'Analiză juridică și fiscală amplă pentru alegerea formei optime de organizare.',
      category: 'Ghiduri Fiscale',
    },
    {
      title: 'Declarația Unică ANAF pentru PFA',
      slug: 'ro/ghiduri/declaratia-unica-pfa',
      description: 'Instrucțiuni complete pas cu pas pentru completarea și transmiterea formularului D212.',
      category: 'Declarații ANAF',
    },
  ],
  updatedAt: '2026-01-15',
};
