import { GuideContent } from '../../types';

export const guideRoCumSeCalculeazaSalariulNet: GuideContent = {
  metaTitle: 'Cum se Calculează Salariul Net din Brut în România 2026? Ghid Formule',
  metaDescription:
    'Ghid complet de calcul al salariului net din brut în România în 2026. Află formulele matematice, CAS 25%, CASS 10%, deducerea personală regresivă și contribuția CAM 2,25%.',
  h1: 'Cum se Calculează Salariul Net din Brut în România în 2026? Formule și Exemple',
  intro:
    'Înțelegerea modului în care salariul brut negociat la interviul de angajare se transformă în salariul net încasat lunar pe card este esențială pentru orice angajat și specialist în resurse umane din România. În 2026, sistemul fiscal impune reținerea la sursă a contribuțiilor sociale de pensii (CAS 25%) și sănătate (CASS 10%), acordarea deducerilor personale regresive pentru veniturile de până la 6.050 lei și reținerea impozitului pe venit de 10%, în timp ce angajatorul achită suplimentar contribuția CAM de 2,25%.',
  readTimeMinutes: 11,
  articleSections: [
    {
      id: 'notiuni-fundamentale-brut-net-si-fluturas',
      title: 'Noțiuni Fundamentale: Salariu de Bază, Salariu Brut și Salariu Net',
      level: 2,
      content: `În dreptul muncii din România (reglementat de Legea nr. 53/2003 – Codul Muncii republicat), terminologia salarială include trei noțiuni distincte pe care orice persoană activă trebuie să le diferențieze:

1. **Salariul de Bază**: Reprezintă partea fixă a remunerației brute negociate și consemnate în contractul individual de muncă (CIM), fără a include sporuri, indemnizații, prime sau adaosuri salariale. În 2026, salariul de bază pentru normă întreagă nu poate fi inferior nivelului de **4.050 lei lunar** (salariul minim garantat în plată).
2. **Salariul Brut Realizat (Venitul Brut)**: Include salariul de bază la care se adaugă toate componentele variabile: sporul de noapte (20%), sporul de ore suplimentare (50% sau 100%), sporul de weekend sau de sărbători legale, indemnizațiile de concediu de odihnă sau medical, primele de performanță, al treisprezecelea salariu și contravaloarea avantajelor în natură impozabile (tichete de masă, abonamente medicale suportate de firmă peste plafon).
3. **Salariul Net (Banii în Mână)**: Este suma lichidă efectiv transferată în contul bancar al angajatului sau achitată în numerar la casieria unității, după ce angajatorul (în calitatea sa legală de plătitor de venit și agent de reținere la sursă) a dedus și virat la bugetul de stat toate contribuțiile sociale și impozitul pe venit.
4. **Costul Total al Angajatorului (Salariul Complet)**: Reprezintă efortul financiar total al companiei pentru respectivul post, format din salariul brut realizat plus **Contribuția Asiguratorie pentru Muncă (CAM de 2,25%)**.`,
    },
    {
      id: 'pasul-1-retinerea-contributiilor-sociale-cas-si-cass',
      title: 'Pasul 1: Reținerea Contribuțiilor Sociale Obligatorii (CAS 25% și CASS 10%)',
      level: 2,
      content: `Prima etapă în calculul salariului net o constituie determinarea și scăderea contribuțiilor sociale obligatorii ale asiguratului, reglementate de Titlul V din Legea nr. 227/2015 privind Codul Fiscal:

### 1. Contribuția de Asigurări Sociale (CAS - Pensii): Cota de 25%
- **Destinația Fondurilor**: Asigură dreptul la pensie pentru limită de vârstă, pensie de invaliditate sau pensie de urmaș prin sistemul public de pensii administrat de Casa Națională de Pensii Publice (CNPP).
- **Distribuția către Pilonul II**: Pentru salariații în vârstă de până la 35 de ani (și opțional până la 45 de ani), o cotă de **4,75%** din totalul de 25% este transferată automat către fondul de pensii administrat privat ales de participant, fără ca suma totală reținută salariatului să se modifice.
- **Formula de Calcul**:
  \`CAS = Baza de Calcul × 25%\`
  Pentru un salariu brut standard de 8.000 lei: \`CAS = 8.000 lei × 25% = 2.000 lei\`.
  *(Notă: La salariul minim legal de 4.050 lei se aplică facilitatea celor 300 lei neimpozabili, baza de calcul fiind redusă la 3.750 lei, rezultând un CAS de 938 lei).*

### 2. Contribuția de Asigurări Sociale de Sănătate (CASS - Sănătate): Cota de 10%
- **Destinația Fondurilor**: Alimentează Fondul Național Unic de Asigurări Sociale de Sănătate (FNUASS), conferind salariatului calitatea de asigurat în sistemul sanitar public, dreptul la servicii medicale decontate, medicamente compensate și indemnizații pentru concedii medicale.
- **Formula de Calcul**:
  \`CASS = Baza de Calcul × 10%\`
  Pentru salariul de 8.000 lei: \`CASS = 8.000 lei × 10% = 800 lei\`.
  *(La salariul minim de 4.050 lei cu scutirea de 300 lei: CASS = 3.750 lei × 10% = 375 lei).*

### Totalul Contribuțiilor Sociale ale Salariatului:
Cumulat, CAS și CASS însumează **35%** din salariul brut realizat. Din 8.000 lei brut, statul reține prin contribuții sociale suma de 2.800 lei, rămânând un venit net din salarii de 5.200 lei.`,
    },
    {
      id: 'pasul-2-determinarea-deducerilor-personale',
      title: 'Pasul 2: Determinarea Deducerii Personale Acordate (Art. 77 Cod Fiscal)',
      level: 2,
      content: `Înainte de calcularea impozitului pe venit, legislația prevede micșorarea venitului net cu deducerea personală legală, acordată exclusiv la funcția de bază:

### Criteriile de Acordare a Deducerii Personale de Bază:
Deducerea personală de bază se acordă dacă venitul brut lunar nu depășește plafonul de **6.050 lei** (salariul minim de 4.050 lei + 2.000 lei):
1. **La nivelul de 4.050 lei brut**:
   - 0 persoane în întreținere: 20% = **810 lei**
   - 1 persoană în întreținere: 25% = **1.020 lei**
   - 2 persoane în întreținere: 30% = **1.220 lei**
   - 3 persoane în întreținere: 35% = **1.420 lei**
   - 4 sau mai multe persoane în întreținere: 45% = **1.830 lei**
2. **Pentru salarii între 4.051 și 6.050 lei**:
   Deducerea descrește treptat pe măsură ce brutul crește, după formula de regresie:
   \`Deducere = Deducere_Maximă × [1 – (Venit_Brut – 4.050) / 2.000]\`.
3. **Peste 6.050 lei brut**:
   Deducerea personală de bază este de **0 lei**.

### Deducerile Personale Suplimentare:
- **Pentru copii școlarizați**: Se acordă o deducere fixă de **100 lei pe lună pentru fiecare copil** înscris la grădiniță sau școală. Această deducere se acordă unuia dintre părinți **la orice nivel de salariu brut** (chiar și peste 6.050 lei).
- **Pentru tineri până în 26 de ani**: Se acordă o deducere suplimentară de **15% din salariul minim** (608 lei) dacă venitul brut este de până la 6.050 lei.`,
    },
    {
      id: 'pasul-3-calculul-impozitului-pe-venit-si-salariul-net',
      title: 'Pasul 3: Calculul Impozitului pe Venit (10%) și Determinarea Salariului Net',
      level: 2,
      content: `După deducerea contribuțiilor sociale obligatorii (35%) și a deducerilor personale cuvenite, se obține **baza de calcul a impozitului pe salarii**:

### Formula Bazei de Impozitare:
\`Venit Impozabil = Salariu Brut – CAS (25%) – CASS (10%) – Deducere Personală Totală – Cotizație Sindicală\`
*(Dacă rezultatul este negativ sau zero, baza de impozitare este zero și nu se datorează impozit).*

### Formula Impozitului pe Venit:
\`Impozit pe Venit = Venit Impozabil × 10%\`
Valoarea impozitului rezultat se rotunjește la leu întreg (fracțiunile sub 50 de bani se neglijează, iar cele de 50 de bani și peste se rotunjesc la 1 leu).

### Formula Salariului Net Încasat de Salariat:
\`Salariu Net = Salariu Brut – CAS (25%) – CASS (10%) – Impozit pe Venit (10%)\`

### Analiză Comparativă:
- Pentru salarii mari (peste 6.050 lei) unde deducerea de bază este zero:
  \`Venit Impozabil = Brut – 35% = 65% din Brut\`
  \`Impozit = 65% × 10% = 6,5% din Brut\`
  \`Salariu Net = 100% – 35% – 6,5% = **58,5% din Salariul Brut**\`.
  Aceasta înseamnă că pentru un salariu brut negociat de 10.000 lei, salariatul va primi net exact **5.850 lei** pe card.`,
    },
    {
      id: 'pasul-4-costul-angajatorului-cam-225-si-fluturasul-de-salariu',
      title: 'Pasul 4: Contribuția CAM (2,25%), Costul Complet al Firmei și Structura Fluturașului',
      level: 2,
      content: `Ultima piesă a puzzle-ului salarial aparține în exclusivitate departamentului financiar al companiei:

### Contribuția Asiguratorie pentru Muncă (CAM - 2,25%):
Angajatorul este obligat prin art. 220 din Codul Fiscal să plătească din fonduri proprii o contribuție de 2,25% aplicată asupra masei salariale brute:
\`CAM = Salariu Brut × 2,25%\`
La 8.000 lei brut, CAM reprezintă 180 lei.

### Bugetul Total al Locului de Muncă:
\`Cost Total Angajator = Salariu Brut + CAM = 102,25% din Salariul Brut\`
La 8.000 lei brut, firma cheltuiește **8.180 lei** pentru ca salariatul să încaseze **4.680 lei net**. Statul român colectează diferența de **3.500 lei**, reprezentând o povară fiscală efectivă de **42,8%** raportată la cheltuiala totală a postului.

### Cum Verifici Fluturașul de Salariu?
Pe fluturașul emis lunar de departamentul de salarizare trebuie să regăsești întotdeauna următoarele coloane obligatorii:
1. **Elemente de venit**: Salariul de încadrare, zile lucrate, zile de concediu, ore suplimentare, tichete de masă.
2. **Rețineri obligatorii**: CAS 25%, CASS 10%, Deducere personală acordată, Impozit 10%.
3. **Rețineri facultative/popriri**: Rate la CAR, pensii facultative Pilon III, asigurări private de sănătate, popriri executorii.
4. **Rest de plată (Net)**: Suma exactă virată pe contul bancar IBAN.`,
    },
    {
      id: 'beneficii-extrasalariale-tichete-si-avantaje-in-natura',
      title: 'Tratamentul Fiscal al Beneficiilor Extrasalariale (Tichete de Masă, Abonamente Medicale)',
      level: 2,
      content: `Pachetele moderne de compensații și beneficii din România includ frecvent componente extrasalariale care au un regim fiscal distinct reglementat de art. 76 și art. 142 din Codul Fiscal:

### 1. Tichetele de Masă (Până la 40,04 Lei pe Zi Lucrată):
- **Tratament Fiscal**: Valoarea nominală a tichetelor de masă nu este supusă contribuției de asigurări sociale (CAS 25%).
- **Impozit și CASS**: Începând cu modificările aduse prin Legea nr. 296/2023, tichetele de masă sunt supuse atât **impozitului pe venit de 10%**, cât și **contribuției de sănătate (CASS 10%)**.
- **Impact Net**: Pentru 21 de zile lucrătoare la valoarea de 40 lei/zi (840 lei), salariatului i se reține 84 lei CASS și 75,6 lei impozit, rezultând o valoare netă a beneficiului de aproximativ 680 lei pe cardul de masă.

### 2. Abonamente Medicale Private și Asigurări Voluntare:
- Primele de asigurare voluntară de sănătate și abonamentele medicale suportate de angajator sunt neimpozabile și scutite de contribuții sociale în limita echivalentului în lei a **400 de euro pe an** per angajat.
- Depășirea acestui plafon anual transformă sumele excedentare în avantaje de natură salarială, impozitate integral cu CAS (25%), CASS (10%) și impozit pe venit (10%).

### 3. Pensii Facultative Pilonul III:
- Contribuțiile plătite de angajator sau de salariat la fondurile de pensii facultative administrate privat sunt deductibile fiscal din venitul salarial în limita a **400 de euro pe an**.
- Această deducere reduce baza de impozitare pentru impozitul pe venit, oferind o economie directă de impozit salariatului.`,
    },
  ],
  faqs: [
    {
      q: 'Care este procentul total de taxe oprit dintr-un salariu brut în România?',
      a: 'Pentru salariile care nu beneficiază de deduceri personale, reținerile totale ale salariatului însumează 41,5% din brut (CAS 25% + CASS 10% + Impozit 6,5%), salariatul primind 58,5% net în mână.',
    },
    {
      q: 'Ce este facilitatea de 300 lei la salariul minim pe țară?',
      a: 'Este o facilitate fiscală conform căreia o sumă de 300 de lei din salariul minim brut de 4.050 lei este scutită integral de contribuții sociale și impozit pe venit, baza de calcul fiind redusă la 3.750 lei.',
    },
    {
      q: 'Cine plătește contribuția CAM de 2,25%?',
      a: 'Contribuția Asiguratorie pentru Muncă (CAM) este suportată exclusiv de către compania angajatoare din fonduri proprii, fără a fi scăzută din salariul brut al angajatului.',
    },
    {
      q: 'Cum influențează tichetele de masă salariul net?',
      a: 'Tichetele de masă acordate se impozitează cu 10% CASS (sănătate) și 10% impozit pe venit. Aceste taxe (în total 20% din valoarea tichetelor) se rețin din salariul net în bani primit pe card.',
    },
    {
      q: 'Până la ce nivel de salariu primesc deducere personală de bază?',
      a: 'Deducerea personală de bază se acordă pentru salarii brute de până la 6.050 lei pe lună (salariul minim + 2.000 lei). Peste 6.050 lei brut, deducerea de bază devine zero.',
    },
    {
      q: 'Cât este deducerea suplimentară pentru copiii aflați la școală?',
      a: 'Deducerea suplimentară este de 100 lei pe lună pentru fiecare copil înscris într-o unitate de învățământ, acordată unuia dintre părinți indiferent de nivelul salariului brut realizat.',
    },
    {
      q: 'Ce se întâmplă cu contribuția la Pilonul II de pensii?',
      a: 'O cotă de 4,75% din contribuția CAS de 25% este transferată automat de către Casa de Pensii în contul privat al salariatului la fondul de pensii Pilon II, fără costuri suplimentare.',
    },
    {
      q: 'De ce diferă salariul net calculat de salariul primit pe card?',
      a: 'Diferențele apar de regulă din: tichete de masă acordate, deduceri personale acordate pentru copii, concedii medicale (plătite cu 75% sau 100%) sau popriri judecătorești.',
    },
  ],
  sources: [
    {
      label: 'Codul Fiscal al României – Legea nr. 227/2015 cu modificările ulterioare',
      url: 'https://www.anaf.ro',
    },
    {
      label: 'Codul Muncii – Legea nr. 53/2003 republicată (Salarizarea)',
      url: 'https://www.inspectiamuncii.ro',
    },
    {
      label: 'Casa Națională de Pensii Publice (CNPP) – Cotele de Contribuții',
      url: 'https://www.cnpp.ro',
    },
  ],
  cta: {
    title: 'Calculează Salariul Tău Net în Timp Real',
    description: 'Introdu salariul brut sau net dorit și află pe loc fluturașul complet cu CAS, CASS, impozit și deduceri personale.',
    buttonText: 'Deschide Calculatorul de Salariu',
    buttonHref: '/ro/calculator-salariu/',
    badge: 'Calculator Salariu 2026',
  },
  relatedTools: [
    {
      title: 'Calculator Salariu 2026',
      slug: 'ro/calculator-salariu',
      description: 'Simulator oficial cu calcul brut în net și net în brut.',
      category: 'Salarii',
    },
    {
      title: 'Deducere Personală Grilă',
      slug: 'ro/deducere-personala',
      description: 'Grila oficială a deducerilor regresive în funcție de numărul de întreținuți.',
      category: 'Deduceri',
    },
  ],
  relatedGuides: [
    {
      title: 'PFA sau SRL în 2026?',
      slug: 'ro/ghiduri/pfa-sau-srl',
      description: 'Ghid fiscal și juridic complet pentru alegerea formei optime de afaceri.',
      category: 'Ghiduri Fiscale',
    },
    {
      title: 'Declarația Unică ANAF pentru PFA',
      slug: 'ro/ghiduri/declaratia-unica-pfa',
      description: 'Instrucțiuni complete de declarare a veniturilor independente și a dividendelor.',
      category: 'Declarații ANAF',
    },
  ],
  updatedAt: '2026-01-15',
};
