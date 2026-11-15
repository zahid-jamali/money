import { PageContent } from '../types';

export const contentRoSalariulMinim: PageContent = {
  metaTitle: 'Salariul Minim 2026: Brut și Net în România | HG și Istoric',
  metaDescription:
    'Salariul minim pe țară în 2026 în România este 4.050 lei brut și 2.574 lei net. Află facilitarea de 300 lei netaxabili, costul total pentru angajator și istoricul complet.',
  h1: 'Salariul Minim pe Țară 2026: Brut, Net și Cost Total Firmă',
  quickAnswer:
    'În 2026, salariul de bază minim brut pe țară garantat în plată în România este de 4.050 lei pe lună pentru un program complet de 168 de ore. Salariatul încasează un salariu minim net de 2.574 lei datorită sumei neimpozabile de 300 lei, iar costul total al angajatorului este de 4.141 lei.',
  howItWorks: [
    {
      label: 'Salariul de bază minim brut garantat în plată',
      formula: 'Brut Minim = 4.050 lei / lună (aprox. 24,10 lei / oră)',
      ruleCitation: 'Hotărârea Guvernului nr. 141/2025 / HG 1506/2024',
      effectiveDate: '2026-01-01',
    },
    {
      label: 'Facilitatea fiscală de 300 de lei netaxabili',
      formula: 'Bază Calcul Contribuții = 4.050 – 300 lei = 3.750 lei',
      ruleCitation: 'OUG nr. 115/2023 privind unele măsuri fiscal-bugetare',
      effectiveDate: '2026-01-01',
    },
    {
      label: 'Contribuțiile sociale ale salariatului minim',
      formula: 'CAS (25%) = 938 lei; CASS (10%) = 375 lei (calculate la 3.750 lei)',
      ruleCitation: 'Art. 137 și 156 din Legea nr. 227/2015 privind Codul Fiscal',
      effectiveDate: '2026-01-01',
    },
    {
      label: 'Deducerea personală și impozitul pe venit',
      formula: 'Deducere = 810 lei; Bază Impozit = 1.627 lei; Impozit (10%) = 163 lei',
      ruleCitation: 'Art. 77 din Codul Fiscal',
      effectiveDate: '2026-01-01',
    },
  ],
  articleSections: [
    {
      id: 'cadrul-normativ-al-salariului-minim-pe-economie',
      title: 'Cadrul Normativ și Stabilirea Salariului Minim Brut în 2026',
      level: 2,
      content: `Salariul de bază minim brut pe țară garantat în plată reprezintă pragul financiar minim sub care niciun angajator din România nu poate remunera un salariat încadrat în baza unui contract individual de muncă cu normă întreagă.

Reglementarea este fundamentată pe dispozițiile imperative ale Codului Muncii (Legea nr. 53/2003 republicată, art. 164), care stipulează că:
- Salariul minim se stabilește prin hotărâre a Guvernului, după consultarea sindicatelor și a patronatelor reprezentative la nivel național în cadrul Consiliului Național Tripartit pentru Dialog Social.
- Angajatorul nu poate negocia și stabili salarii de bază brute prin contractul individual de muncă sub nivelul salariului de bază minim brut orar prevăzut de actul normativ guvernamental.
- Pentru anul 2026, prin **Hotărârea Guvernului nr. 141/2025** (și HG nr. 1506/2024), valoarea salariului de bază minim brut a fost stabilită la **4.050 lei lunar**, corespunzând unui tarif mediu de aproximativ **24,10 lei pe oră** pentru un program normal de lucru de 168 de ore pe lună.`,
    },
    {
      id: 'impactul-scutirii-de-300-lei-asupra-salariului-net',
      title: 'Scutirea de 300 Lei Neimpozabili și Calculul Salariului Net (2.574 Lei)',
      level: 2,
      content: `Elementul definitoriu care diferențiază calculul salariului minim în România față de grilele standard de salarizare îl constituie **facilitatea fiscală a sumei neimpozabile de 300 lei** pe lună:

1. **Mecanismul de Aplicare a Scutirii**:
Suma de 300 de lei nu este supusă contribuției de asigurări sociale (CAS 25%), contribuției de asigurări sociale de sănătate (CASS 10%) și nici impozitului pe venit (10%). Aceasta înseamnă că sarcina fiscală se calculează exclusiv la suma de **3.750 lei**:
- **CAS (Pensii 25%)**: \`3.750 lei × 25% = **938 lei**\` (rotunjit)
- **CASS (Sănătate 10%)**: \`3.750 lei × 10% = **375 lei**\`
- **Venit net înainte de deducere**: \`3.750 – 938 – 375 = 2.437 lei\`

2. **Acordarea Deducerii Personale de Bază**:
Conform art. 77 din Codul Fiscal, un salariat remunerat cu salariul minim beneficiază de cota maximă a deducerii personale de bază de 20%, reprezentând **810 lei**:
- **Baza de calcul a impozitului**: \`2.437 lei – 810 lei = **1.627 lei**\`
- **Impozit pe venit (10%)**: \`1.627 lei × 10% = **163 lei**\` (rotunjit)

3. **Salariul Net Final Încasat**:
\`Salariu Net = 4.050 lei (Brut Total) – 938 lei (CAS) – 375 lei (CASS) – 163 lei (Impozit) = **2.574 lei**\`.
Fără deducerea de 300 lei neimpozabili, venitul net al angajatului ar fi fost de doar aproximativ 2.450 lei, ceea ce înseamnă că facilitatea fiscală aduce salariatului un plus direct de **124 de lei pe lună în buzunar**.`,
    },
    {
      id: 'interdictia-mentinerii-la-salariul-minim-peste-24-de-luni',
      title: 'Regula celor 24 de Luni: Interdicția Menținerii Salariatului la Nivelul Minim',
      level: 2,
      content: `O prevedere critică a dreptului muncii românesc, introdusă prin OUG nr. 142/2021 și consolidată în art. 164 alin. (2^1) din Codul Muncii, vizează durata maximă în care un angajat poate fi plătit cu salariul minim:

- **Termenul Maxim de 24 de Luni**: „Salariul de bază minim brut pe țară garantat în plată poate fi aplicat pentru un salariat pentru o perioadă de **maximum 24 de luni** de la momentul încheierii contractului individual de muncă”.
- **Obligația de Majorare**: După expirarea acestei perioade de 24 de luni calendaristice, în care salariatul a acumulat experiență și competențe la respectivul angajator, compania are obligația legală imperativă de a-i **majora salariul de bază brut** peste valoarea salariului minim pe economie.
- **Valoarea Majorării**: Legislația nu impune o sumă fixă de creștere (majorarea poate fi de 50 de lei, 100 de lei sau mai mult, negociată între părți), însă simpla menținere la pragul minim legal de 4.050 lei după împlinirea a 2 ani de vechime în firmă constituie contravenție sancționată dur de inspectorii ITM.`,
    },
    {
      id: 'costul-total-al-angajatorului-la-salariul-minim',
      title: 'Costul Total al Angajatorului și CAM la Salariul Minim pe Economie',
      level: 2,
      content: `Pentru a asigura plata legală a salariului minim, compania angajatoare suportă cheltuieli ce depășesc valoarea brută din contractul individual de muncă:

- **Contribuția Asiguratorie pentru Muncă (CAM - 2,25%)**:
Se aplică asupra întregului salariu de bază brut de 4.050 lei (facilitatea de 300 lei nu se aplică pentru CAM datorat de firmă):
\`CAM = 4.050 lei × 2,25% = **91,13 lei**\` (rotunjit la 91 lei).
- **Bugetul Total Necesar Angajatorului**:
\`Cost Total Firmă = 4.050 lei + 91 lei = **4.141 lei pe lună**\`.
La nivel anual, un singur loc de muncă remunerat la nivelul salariului minim pe țară generează pentru companie o cheltuială totală de **49.692 lei**, din care salariatul primește net 30.888 lei, iar suma totală virată la bugetul statului este de 18.804 lei.`,
    },
    {
      id: 'transpunerea-directivei-europene-privind-salariile-minime',
      title: 'Alinierea la Directiva UE 2022/2041 privind Salariile Minime Adecvate',
      level: 2,
      content: `Nivelul salariului minim din România în 2026 reflectă implementarea în dreptul intern a cerințelor Directivei (UE) 2022/2041 a Parlamentului European și a Consiliului:

- **Formula Salariului Minim European**: Directiva recomandă ca nivelul salariului minim național să fie ajustat periodic în funcție de indicatori macroeconomici obiectivi: puterea de cumpărare a populației, productivitatea muncii, nivelul general al salariilor și rata inflației, țintind un prag de **50% din salariul mediu brut** la nivel național.
- **Relația cu Salariul Mediu Brut în România**: Cu un salariu minim brut de 4.050 lei raportat la un salariu mediu brut prognozat de peste 8.600 lei, România se situează la o pondere de aproximativ 47–48%, respectând aproape integral recomandările Comisiei Europene pentru asigurarea unui trai decent lucrătorilor din statele membre.`,
    },
    {
      id: 'istoricul-salariului-minim-si-regimurile-sectoriale',
      title: 'Istoricul Salariului Minim în România (2020–2026) și Regimurile Sectoriale',
      level: 2,
      content: `Evoluția salariului de bază minim brut pe țară garantat în plată reflectă dinamica economică și presiunile inflaționiste din ultimii ani din România:

1. **Cronologia Salariului Minim Brut General**:
   - **Anul 2020**: 2.230 lei brut (1.346 lei net)
   - **Anul 2021**: 2.300 lei brut (1.386 lei net)
   - **Anul 2022**: 2.550 lei brut (1.524 lei net) – introducerea primelor facilități voluntare de 200 lei netaxabili
   - **Anul 2023**: 3.000 lei brut (1.898 lei net, cu 200 lei scutiți) la 1 ianuarie, majorat la 3.300 lei brut (2.079 lei net) de la 1 octombrie
   - **Anul 2024**: 3.300 lei brut în semestrul I, majorat la 3.700 lei brut (2.363 lei net, cu 300 lei scutiți prin OUG 59/2024) de la 1 iulie 2024
   - **Anul 2025–2026**: 4.050 lei brut (2.574 lei net, cu menținerea facilității de 300 lei neimpozabili conform HG 1506/2024 și HG 141/2025).

2. **Diferențierile Sectoriale în Muncă**:
   - **Sectorul Construcțiilor**: A beneficiat tradițional de un salariu minim diferențiat majorat (stabilit la 4.582 lei brut conform OUG 93/2023). Muncitorii din construcții au un regim distinct de asigurare, deși facilitățile istorice de scutire totală de CASS și impozit au fost treptat restrânse prin Legea nr. 296/2023 pentru a asigura sustenabilitatea fondurilor publice de sănătate și pensii.
   - **Sectorul Agro-Alimentar**: Salariul minim brut în agricultură și industria alimentară a fost menținut la nivelul specific de 3.436 lei brut, urmând a fi armonizat cu salariul minim general pe economie odată cu noile ajustări legislative.

3. **Impactul Asupra Contribuțiilor și Plafoanelor PFA**:
   Creșterea salariului minim la 4.050 lei antrenează automat o creștere proporțională a plafoanelor anuale pentru persoanele fizice autorizate și beneficiarii de dividende, pragul minim de 6 salarii devenind 24.300 lei, iar cel de 24 de salarii atingând 97.200 lei.`,
    },
  ],
  examples: [
    {
      title: 'Exemplul 1: Salariat remunerat cu salariul minim fără deduceri pentru persoane în întreținere',
      scenario:
        'Calculul drepturilor salariale lunare pentru un angajat cu normă întreagă la funcția de bază remunerat cu 4.050 lei brut.',
      calculationType: 'custom',
      inputAmount: 4050.0,
      resultTotal: 2574.0,
      customFields: [
        { label: 'Salariu de bază minim brut', value: '4.050,00 lei' },
        { label: 'Facilitate fiscală netaxabilă', value: '-300,00 lei' },
        { label: 'CAS Pensii (25% din 3.750 lei)', value: '-938,00 lei' },
        { label: 'CASS Sănătate (10% din 3.750 lei)', value: '-375,00 lei' },
        { label: 'Deducere personală de bază (20%)', value: '810,00 lei' },
        { label: 'Impozit pe venit (10%)', value: '-163,00 lei' },
        { label: 'Salariu Minim Net Încasat', value: '2.574,00 lei', highlight: true },
        { label: 'Cost Total Firmă (inclusiv CAM)', value: '4.141,00 lei' },
      ],
      explanation:
        'Salariatul încasează 2.574 lei bani în mână, reprezentând o rată netă efectivă de 63,5% din salariul brut, facilitată de scutirea parțială de taxe.',
    },
    {
      title: 'Exemplul 2: Părinte cu 2 copii la școală plătit cu salariul minim',
      scenario:
        'Calculul salariului minim pentru un angajat care are în întreținere 2 copii înscriși în învățământul preuniversitar.',
      calculationType: 'custom',
      inputAmount: 4050.0,
      resultTotal: 2635.0,
      customFields: [
        { label: 'Salariu Minim Brut', value: '4.050,00 lei' },
        { label: 'Deducere de bază (2 întreținuți - 30%)', value: '1.220,00 lei' },
        { label: 'Deducere suplimentară copii școală (2 × 100)', value: '+200,00 lei' },
        { label: 'Deducere personală totală', value: '1.420,00 lei' },
        { label: 'Bază impozit (2.437 – 1.420)', value: '1.017,00 lei' },
        { label: 'Impozit pe venit redus (10%)', value: '-102,00 lei' },
        { label: 'Salariu Net Majorat', value: '2.635,00 lei', highlight: true },
      ],
      explanation:
        'Datorită deducerii suplimentare pentru copii înscriși la școală și deducerii de 30% pentru întreținuți, impozitul scade semnificativ, crescând salariul net la 2.635 lei.',
    },
  ],
  faqs: [
    {
      q: 'Cât este salariul minim net în România în 2026?',
      a: 'Salariul minim net este de 2.574 lei pe lună pentru un angajat fără persoane în întreținere, corespunzător unui salariu de bază minim brut pe țară de 4.050 lei.',
    },
    {
      q: 'Ce reprezintă facilitatea celor 300 de lei netaxabili?',
      a: 'Este o măsură fiscală prin care suma de 300 de lei din salariul minim brut de 4.050 lei este scutită de plata CAS (25%), CASS (10%) și a impozitului pe venit (10%).',
    },
    {
      q: 'Poate un angajator să plătească un salariat cu salariul minim pe termen nelimitat?',
      a: 'Nu. Conform Codului Muncii, un salariat poate fi plătit cu salariul minim pe țară pentru o perioadă de maximum 24 de luni de la angajare, după care angajatorul este obligat să îi crească salariul.',
    },
    {
      q: 'Cât este tariful orar la salariul minim pe economie?',
      a: 'Pentru un program mediu complet de 168 de ore pe lună, salariul minim brut orar este de aproximativ 24,10 lei pe oră.',
    },
    {
      q: 'Ce cost total are firma pentru un angajat cu salariul minim?',
      a: 'Costul total suportat de companie este de 4.141 lei pe lună, reprezentând salariul brut de 4.050 lei plus contribuția asiguratorie pentru muncă (CAM) de 2,25% (91 lei).',
    },
    {
      q: 'Dacă lucrez cu jumătate de normă (4 ore/zi), ce salariu minim primesc?',
      a: 'Salariul de bază minim brut pentru o normă parțială de 4 ore/zi (jumatate de normă) este de 2.025 lei brut pe lună, însă contribuțiile sociale pot fi calculate la nivelul normei întregi dacă nu există alte contracte active.',
    },
    {
      q: 'Se pot include sporurile sau tichetele de masă în salariul minim legal?',
      a: 'Nu. Salariul de bază stabilit prin contract trebuie să fie de minimum 4.050 lei brut, fără a include sporuri de noapte, ore suplimentare, tichete de masă sau premii.',
    },
    {
      q: 'Ce sancțiune riscă o companie dacă nu acordă salariul minim legal?',
      a: 'Inspectoratul Teritorial de Muncă (ITM) poate sancționa angajatorul cu amendă contravențională de la 300 lei la 2.000 lei pentru fiecare contract individual de muncă în care s-a stabilit un salariu sub minimul legal.',
    },
  ],
  sources: [
    {
      label: 'Hotărârea Guvernului nr. 141/2025 – Salariul de Bază Minim Brut Garantat în Plată',
      url: 'https://www.mmuncii.ro',
    },
    {
      label: 'Codul Muncii – Legea nr. 53/2003 republicată (Art. 164)',
      url: 'https://www.inspectiamuncii.ro',
    },
    {
      label: 'Ordonanța de Urgență a Guvernului nr. 115/2023 (Scutirea de 300 lei)',
      url: 'https://mfinante.gov.ro',
    },
  ],
  relatedTools: [
    {
      title: 'Calculator Salariu Brut în Net',
      slug: 'ro/calculator-salariu',
      description: 'Simulator complet pentru orice valoare a salariului brut sau net dorit în 2026.',
      category: 'Calculatoare',
    },
    {
      title: 'Simulator Deducere Personală',
      slug: 'ro/deducere-personala',
      description: 'Calculează deducerea personală de bază și suplimentară conform art. 77 Cod Fiscal.',
      category: 'Deduceri',
    },
  ],
  relatedGuides: [
    {
      title: 'Cum se Calculează Salariul Net din Brut?',
      slug: 'ro/ghiduri/cum-se-calculeaza-salariul-net',
      description: 'Formule practice, defalcarea contribuțiilor și fluturașul de salariu explicat pas cu pas.',
      category: 'Ghiduri Salarii',
    },
    {
      title: 'PFA sau SRL în 2026?',
      slug: 'ro/ghiduri/pfa-sau-srl',
      description: 'Află diferențele de taxe dintre contractul de muncă, PFA și societatea SRL.',
      category: 'Ghiduri Fiscale',
    },
  ],
  updatedAt: '2026-01-15',
};
