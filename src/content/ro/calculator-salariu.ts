import { PageContent } from '../types';

export const contentRoCalculatorSalariu: PageContent = {
  metaTitle: 'Calculator Salariu 2026: Brut în Net și Fluturaș de Salariu România',
  metaDescription:
    'Calculează gratuit salariul net din brut în România pentru 2026. Află reținerile CAS 25%, CASS 10%, impozit 10%, deducerea personală și costul total al angajatorului.',
  h1: 'Calculator Salariu 2026: Brut în Net și Cost Total Angajator',
  quickAnswer:
    'În 2026, salariul net pe contract de muncă în România reprezintă aproximativ 58,5% din salariul brut pentru veniturile fără deduceri. Din salariul brut se scad CAS 25% (pensii), CASS 10% (sănătate) și impozitul pe venit de 10% aplicat după deducerea personală, iar angajatorul achită suplimentar contribuția CAM de 2,25%.',
  howItWorks: [
    {
      label: 'Contribuția la pensii (CAS 25%)',
      formula: 'CAS = (Salariu Brut – Scutire 300 lei) × 25%',
      ruleCitation: 'Art. 137 alin. (1) lit. a) din Legea nr. 227/2015 privind Codul Fiscal',
      effectiveDate: '2026-01-01',
    },
    {
      label: 'Contribuția la sănătate (CASS 10%)',
      formula: 'CASS = (Salariu Brut – Scutire 300 lei) × 10%',
      ruleCitation: 'Art. 156 din Legea nr. 227/2015 privind Codul Fiscal',
      effectiveDate: '2026-01-01',
    },
    {
      label: 'Deducerea personală de bază și suplimentară',
      formula: 'Deducere = Deducere de bază (Art. 77) + Copii școală (100 lei) + Tânăr <26 (15%)',
      ruleCitation: 'Art. 77 din Codul Fiscal modificat prin OG nr. 16/2022',
      effectiveDate: '2026-01-01',
    },
    {
      label: 'Impozitul pe venit (10%)',
      formula: 'Impozit = (Bază Contribuții – CAS – CASS – Deducere Personală) × 10%',
      ruleCitation: 'Art. 64 din Legea nr. 227/2015 privind Codul Fiscal',
      effectiveDate: '2026-01-01',
    },
    {
      label: 'Salariul net încasat de angajat',
      formula: 'Net = Salariu Brut – CAS – CASS – Impozit pe Venit',
      ruleCitation: 'Legea nr. 53/2003 – Codul Muncii republicat',
      effectiveDate: '2026-01-01',
    },
  ],
  articleSections: [
    {
      id: 'mecanismul-de-calcul-al-salariului-net-in-romania',
      title: 'Mecanismul Legal de Calcul al Salariului Net din Brut în 2026',
      level: 2,
      content: `Sistemul fiscal românesc aplicabil veniturilor din salarii și asimilate salariilor este reglementat de Titlul IV și Titlul V din Legea nr. 227/2015 privind Codul Fiscal. Spre deosebire de alte state membre ale Uniunii Europene care aplică impozitarea progresivă în trepte, România utilizează o cotă unică proporțională de impozit pe venit de 10%, însă povara fiscală totală este dominată de contribuțiile sociale obligatorii transferate integral în sarcina salariatului începând cu marea reformă fiscală din 2018 (OUG nr. 79/2017).

Traseul exact prin care un salariu brut se transformă în bani lichizi pe cardul angajatului parcurge patru operațiuni succesive și obligatorii:

1. **Reținerea Contribuției de Asigurări Sociale (CAS - 25%)**:
Această contribuție este direcționată către bugetul asigurărilor sociale de stat (Pilonul I de pensii publice) și, pentru salariații eligibili în vârstă de până la 35 de ani la momentul primei angajări, o cotă de 4,75% este transferată automat către fondurile de pensii administrate privat (Pilonul II). CAS se calculează aplicând cota de 25% asupra salariului brut realizat (sau asupra brutului diminuat cu suma neimpozabilă de 300 lei în cazul salariului minim).

2. **Reținerea Contribuției de Asigurări Sociale de Sănătate (CASS - 10%)**:
CASS reprezintă contribuția la Fondul Național Unic de Asigurări Sociale de Sănătate (FNUASS), administrat de Casa Națională de Asigurări de Sănătate (CNAS). Cota de 10% asigură calitatea de asigurat în sistemul public medical de sănătate pentru angajat și membrii de familie aflați în întreținerea sa (coasigurați).

3. **Determinarea și Acordarea Deducerii Personale**:
Înainte de calculul impozitului pe venit, legislația fiscală prevede acordarea unei deduceri personale regresive pentru salariații care realizează venituri brute lunare de până la 6.050 lei (salariul minim pe țară garantat în plată majorat cu 2.000 lei). Deducerea personală micșorează baza de impozitare, diminuând direct impozitul reținut de stat.

4. **Calculul Impozitului pe Salarii (10%)**:
Impozitul se determină prin aplicarea cotei de 10% asupra venitului net din salarii, calculat ca diferență între salariul brut și contribuțiile sociale obligatorii (CAS și CASS), minus deducerea personală acordată și cotizația sindicală legală (dacă este cazul).`,
    },
    {
      id: 'facilitatea-fiscala-de-300-lei-la-salariul-minim',
      title: 'Facilitatea Fiscală de 300 de Lei Netaxabili pentru Salariul Minim pe Țară',
      level: 2,
      content: `O particularitate deosebit de importantă a legislației fiscale românești pentru anul 2026 o constituie mecanismul facilității fiscale a sumei neimpozabile acordate la nivelul salariului de bază minim brut pe țară:

- **Originea Reglementării**: Introdusă inițial ca măsură temporară de protecție socială și prelungită succesiv prin Ordonanțe de Urgență ale Guvernului (OUG nr. 115/2023 și actele normative conexe), măsura prevede că o sumă de **300 de lei din salariul minim brut de 4.050 lei este complet scutită de impozit pe venit și de contribuții sociale obligatorii (CAS și CASS)**.
- **Impactul Asupra Bazei de Calcul**: Pentru un angajat încadrat cu salariul minim brut legal de 4.050 lei pe lună, contribuțiile sociale de 25% și 10% nu se aplică la suma totală de 4.050 lei, ci la baza redusă de **3.750 lei** (4.050 lei – 300 lei).
- **Efectul Net Asupra Salariatului**: Fără această facilitate de 300 lei, salariul net la minimul pe economie ar fi fost de doar aproximativ 2.450 lei. Datorită scutirii de 300 lei, salariatul încasează în mână exact **2.574 lei**, beneficiind de o creștere directă a puterii de cumpărare.
- **Condiții de Menținere a Facilității**: Angajatul trebuie să fie încadrat cu normă întreagă la funcția de bază, iar salariul brut stabilit prin contractul individual de muncă nu trebuie să depășească plafonul maxim reglementat de lege pentru acordarea facilității.`,
    },
    {
      id: 'deducerea-personala-de-baza-si-suplimentara-in-2026',
      title: 'Sistemul Deducerilor Personale: Bază Regresivă și Deduceri Suplimentare',
      level: 2,
      content: `Articolul 77 din Codul Fiscal instituie un sistem amplu de deduceri personale structurat pe două paliere complementare:

### 1. Deducerea Personală de Bază
Se acordă exclusiv pentru veniturile din salarii realizate la funcția de bază, dacă venitul brut lunar nu depășește nivelul de **6.050 lei** (salariul minim + 2.000 lei):
- **La nivelul salariului minim (4.050 lei)**, procentul deducerii este maxim:
  - Fără persoane în întreținere: 20% din salariul minim = **810 lei**
  - Cu 1 persoană în întreținere: 25% din salariul minim = **1.012,50 lei** (rotunjit la 1.020 lei)
  - Cu 2 persoane în întreținere: 30% din salariul minim = **1.215 lei** (rotunjit la 1.220 lei)
  - Cu 3 persoane în întreținere: 35% din salariul minim = **1.417,50 lei** (rotunjit la 1.420 lei)
  - Cu 4 sau mai multe persoane: 45% din salariul minim = **1.822,50 lei** (rotunjit la 1.830 lei)
- **Pentru salarii între 4.051 și 6.050 lei**, deducerea descrește liniar conform coeficientului: \`1 – (Brut – 4.050) / 2.000\`.
- **Pentru salarii de peste 6.050 lei**, deducerea de bază devine **0 lei**.

### 2. Deducerea Personală Suplimentară
Se acordă independent de deducerea de bază și aduce două beneficii majore:
- **Tinerii în vârstă de până la 26 de ani**: Beneficiază de o deducere suplimentară de **15% din salariul minim pe țară** (608 lei) dacă venitul lor brut este de până la 6.050 lei pe lună.
- **Părinții cu copii înscriși în învățământ**: Se acordă o deducere fixă de **100 lei pe lună pentru fiecare copil** înscris într-o unitate de învățământ preșcolar, primar, gimnazial sau liceal. Această deducere se acordă unuia dintre părinți **indiferent de nivelul salariului brut realizat** (chiar dacă părintele câștigă 10.000 sau 30.000 lei brut).`,
    },
    {
      id: 'costul-total-al-angajatorului-si-cam-225',
      title: 'Costul Total al Angajatorului și Contribuția Asiguratorie pentru Muncă (CAM)',
      level: 2,
      content: `În România, cheltuiala totală a unei companii cu remunerarea unui angajat depășește salariul brut negociat în contractul de muncă:

- **Contribuția Asiguratorie pentru Muncă (CAM - 2,25%)**: Reglementată de art. 220 din Codul Fiscal, CAM este singura contribuție socială rămasă în sarcina exclusivă a angajatorului. Din veniturile colectate prin CAM se finanțează Fondul de garantare pentru plata creanțelor salariale, indemnizațiile de șomaj, concediile medicale pentru incapacitate temporară de muncă și asigurarea pentru accidente de muncă și boli profesionale.
- **Formula Costului Total (Cheltuiala Completă a Companiei)**:
  \`Cost Total Angajator = Salariu Brut + CAM (2,25%)\`
  La un salariu brut de 8.000 lei, angajatorul plătește 180 lei contribuție CAM, ajungând la un cost total lunar de **8.180 lei**.
- **Poverea Fiscală Globală (Klin-ul Fiscal sau Tax Wedge)**:
  Raportul dintre totalul taxelor virate către stat (CAS 25% + CASS 10% + Impozit 10% + CAM 2,25%) și costul total al angajatorului evidențiază că statul român reține între **40% și 43%** din fiecare leu cheltuit de companie pentru forța de muncă.`,
    },
    {
      id: 'fluturasul-de-salariu-si-obligatiile-angajatorului',
      title: 'Obligații Legale, Fluturașul de Salariu și Declarația 112',
      level: 2,
      content: `Conform Codului Muncii (Legea nr. 53/2003 republicată, art. 166-168), plata salariului se dovedește prin semnarea statelor de plată, precum și prin orice alte documente justificative care demonstrează efectuarea plății către salariatul îndreptățit.

Obligații procedurale ale companiei angajatoare:
1. **Emiterea Fluturașului de Salariu**: Angajatorul are obligația legală de a pune la dispoziția salariatului documentul detaliat al plății (fluturașul de salariu sau fișa de calcul), în format tipărit sau electronic prin intermediul portalurilor interne HR. Pe fluturaș trebuie evidențiate clar salariul de bază, sporurile permanente și temporare, orele suplimentare, tichetele de masă acordate, contribuțiile sociale reținute și impozitul pe venit.
2. **Depunerea Declarației Unice 112**: Până la data de 25 a lunii următoare celei de plată, angajatorul depune la ANAF formularul electronic D112 („Declarația privind obligațiile de plată a contribuțiilor sociale, impozitului pe venit și evidența nominală a persoanelor asigurate”). Prin intermediul D112 se transmit către Casa Națională de Pensii (CNPP) și CNAS stagiile de cotizare și calitatea de asigurat a fiecărui salariat.
3. **Plata la Termen a Contribuțiilor**: Nedepunerea declarațiilor sau nevirarea contribuțiilor reținute la sursă în termen de 60 de zile de la scadență atrage răspunderea penală a administratorilor conform legislației privind evaziunea fiscală.`,
    },
  ],
  examples: [
    {
      title: 'Exemplul 1: Salariu mediu în economie de 8.000 lei brut (fără persoane în întreținere)',
      scenario:
        'Calculul salariului net pentru un specialist din București încadrat cu un salariu de bază brut de 8.000 lei la funcția de bază, fără persoane în întreținere.',
      calculationType: 'custom',
      inputAmount: 8000.0,
      resultTotal: 4680.0,
      customFields: [
        { label: 'Salariu Brut', value: '8.000,00 lei' },
        { label: 'CAS Pensii (25%)', value: '-2.000,00 lei' },
        { label: 'CASS Sănătate (10%)', value: '-800,00 lei' },
        { label: 'Deducere personală (Brut > 6.050 lei)', value: '0,00 lei' },
        { label: 'Venit impozabil', value: '5.200,00 lei' },
        { label: 'Impozit pe venit (10%)', value: '-520,00 lei' },
        { label: 'Salariu Net încasat', value: '4.680,00 lei', highlight: true },
        { label: 'Contribuție CAM angajator (2,25%)', value: '+180,00 lei' },
        { label: 'Cost Total Suportat de Angajator', value: '8.180,00 lei' },
      ],
      explanation:
        'La un salariu brut de 8.000 lei, angajatul primește 4.680 lei net pe card (58,5% din brut), iar angajatorul cheltuiește în total 8.180 lei incluzând contribuția CAM.',
    },
    {
      title: 'Exemplul 2: Salariul minim legal de 4.050 lei cu facilitatea de 300 lei netaxabili',
      scenario:
        'Calculul salariului minim pe economie pentru un muncitor fără persoane în întreținere, beneficiind de scutirea de 300 lei și de deducerea personală de 810 lei.',
      calculationType: 'custom',
      inputAmount: 4050.0,
      resultTotal: 2574.0,
      customFields: [
        { label: 'Salariu Minim Brut', value: '4.050,00 lei' },
        { label: 'Suma netaxabilă (scutire OUG 115/2023)', value: '-300,00 lei' },
        { label: 'Baza contribuțiilor sociale', value: '3.750,00 lei' },
        { label: 'CAS Pensii (25% din 3.750 lei)', value: '-938,00 lei' },
        { label: 'CASS Sănătate (10% din 3.750 lei)', value: '-375,00 lei' },
        { label: 'Deducere personală de bază (20%)', value: '810,00 lei' },
        { label: 'Venit impozabil (3.750 – 938 – 375 – 810)', value: '1.627,00 lei' },
        { label: 'Impozit pe venit (10% din 1.627 lei)', value: '-163,00 lei' },
        { label: 'Salariu Minim Net pe Card', value: '2.574,00 lei', highlight: true },
        { label: 'Cost Total Angajator (4.050 + CAM 91 lei)', value: '4.141,00 lei' },
      ],
      explanation:
        'Datorită facilității fiscale a sumei de 300 de lei netaxabili, salariul minim net încasat este de 2.574 lei, iar impozitul total este redus la doar 163 lei.',
    },
  ],
  faqs: [
    {
      q: 'Cât este salariul minim net în România în 2026?',
      a: 'Salariul minim brut este de 4.050 lei pe lună, iar salariul net încasat este de 2.574 lei pentru un angajat fără persoane în întreținere, datorită scutirii fiscale aplicate pentru suma de 300 de lei.',
    },
    {
      q: 'Ce taxe se plătesc la stat dintr-un salariu brut?',
      a: 'Din salariul brut se rețin: CAS 25% (pensii), CASS 10% (sănătate) și impozitul pe venit de 10%. Angajatorul achită suplimentar contribuția CAM de 2,25% din fondul de salarii.',
    },
    {
      q: 'Cine beneficiază de deducere personală la salariu?',
      a: 'Beneficiază de deducere personală de bază salariații încadrați la funcția de bază cu un salariu brut de până la 6.050 lei. Tinerii sub 26 de ani primesc suplimentar 15%, iar părinții primesc 100 lei pentru fiecare copil înscris la școală.',
    },
    {
      q: 'Dacă am un salariu brut de 10.000 lei, ce sumă primesc în mână?',
      a: 'La 10.000 lei brut, CAS este 2.500 lei, CASS este 1.000 lei, deducerea personală este 0 lei, iar impozitul pe venit (10%) este 650 lei. Salariul net încasat este exact 5.850 lei.',
    },
    {
      q: 'Ce reprezintă contribuția CAM plătită de angajator?',
      a: 'Contribuția Asiguratorie pentru Muncă (CAM) de 2,25% este plătită exclusiv de firmă și alimentează fondurile de garantare a salariilor, șomaj, concedii medicale și accidente de muncă.',
    },
    {
      q: 'Tichetele de masă sunt supuse contribuțiilor sociale?',
      a: 'Da. Valoarea tichetelor de masă acordate se include în baza de calcul a CASS (10%) și în baza de calcul a impozitului pe venit (10%), fiind scutite doar de contribuția de pensii CAS (25%).',
    },
    {
      q: 'Până la ce sumă se acordă deducerea personală regresivă?',
      a: 'Deducerea personală de bază scade treptat de la 4.050 lei până la plafonul maxim de 6.050 lei brut lunar. Peste această sumă, deducerea de bază devine 0 lei.',
    },
    {
      q: 'Poate un angajat să beneficieze de deducere personală la două locuri de muncă?',
      a: 'Nu. Deducerea personală se acordă exclusiv la locul unde salariatul își declară funcția de bază prin declarație pe propria răspundere depusă la departamentul de resurse umane.',
    },
    {
      q: 'Ce diferență este între salariul brut și salariul complet al angajatorului?',
      a: 'Salariul brut este suma negociată în contractul individual de muncă. Costul complet al angajatorului include brutul plus contribuția CAM de 2,25% virată de firmă peste salariu.',
    },
  ],
  sources: [
    {
      label: 'Codul Fiscal – Legea nr. 227/2015 cu modificările ulterioare',
      url: 'https://www.anaf.ro',
    },
    {
      label: 'Inspectoratul Teritorial de Muncă (ITM) – Ghid Drepturi Salariale',
      url: 'https://www.inspectiamuncii.ro',
    },
    {
      label: 'Ministerul Muncii și Solidarității Sociale – Cadrul Salarizării',
      url: 'https://www.mmuncii.ro',
    },
  ],
  relatedTools: [
    {
      title: 'Calculator PFA vs SRL',
      slug: 'ro/calculator-pfa-srl',
      description: 'Compară taxele dintre Persoană Fizică Autorizată și Microîntreprindere SRL în 2026.',
      category: 'Fiscalitate',
    },
    {
      title: 'Salariul Minim 2026',
      slug: 'ro/salariul-minim',
      description: 'Informații complete despre salariul minim brut, net și evoluția istorică a grilelor.',
      category: 'Muncă',
    },
  ],
  relatedGuides: [
    {
      title: 'Cum se Calculează Salariul Net din Brut?',
      slug: 'ro/ghiduri/cum-se-calculeaza-salariul-net',
      description: 'Ghid pas cu pas cu formule matematice și exemple detaliate pentru fiecare reținere.',
      category: 'Ghiduri Salarii',
    },
    {
      title: 'PFA sau SRL în 2026?',
      slug: 'ro/ghiduri/pfa-sau-srl',
      description: 'Analiză comparativă completă între cele două forme juridice de desfășurare a afacerilor.',
      category: 'Ghiduri Fiscale',
    },
  ],
  updatedAt: '2026-01-15',
};
