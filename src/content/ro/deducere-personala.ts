import { PageContent } from '../types';

export const contentRoDeducerePersonala: PageContent = {
  metaTitle: 'Deducere Personală 2026: Grilă Salarii, Persoane în Întreținere și Copii',
  metaDescription:
    'Află deducerea personală de bază și suplimentară conform art. 77 Cod Fiscal în 2026. Grila pe salarii (4.050–6.050 lei), persoane în întreținere, copii la școală și tineri <26.',
  h1: 'Deducere Personală 2026: Grilă Oficială și Reguli Art. 77 Cod Fiscal',
  quickAnswer:
    'Deducerea personală de bază se acordă salariaților cu un venit brut lunar de până la 6.050 lei (salariul minim + 2.000 lei), scăzând regresiv de la 20%–45% din salariul minim până la zero. Părinții primesc suplimentar 100 lei/copil înscris la școală fără limită de salariu, iar tinerii sub 26 de ani primesc 15%.',
  howItWorks: [
    {
      label: 'Deducerea de bază la salariul minim (4.050 lei)',
      formula: 'Deducere = 20% (0 întreținuți: 810 lei) până la 45% (4+ întreținuți: 1.830 lei)',
      ruleCitation: 'Art. 77 alin. (4) din Legea nr. 227/2015 privind Codul Fiscal',
      effectiveDate: '2026-01-01',
    },
    {
      label: 'Calculul regresiv între 4.051 și 6.050 lei',
      formula: 'Deducere = Deducere Maximă × [1 – (Brut – 4.050) / 2.000]',
      ruleCitation: 'Art. 77 alin. (4) lit. b) din Codul Fiscal',
      effectiveDate: '2026-01-01',
    },
    {
      label: 'Deducerea suplimentară pentru copii școlarizați',
      formula: 'Deducere Copil = 100 lei / lună pentru fiecare copil înscris în învățământ',
      ruleCitation: 'Art. 77 alin. (10) lit. b) din Codul Fiscal',
      effectiveDate: '2026-01-01',
    },
    {
      label: 'Deducerea suplimentară pentru tineri sub 26 de ani',
      formula: 'Deducere Tineri = 15% din salariul minim (608 lei) pentru venituri brute ≤ 6.050 lei',
      ruleCitation: 'Art. 77 alin. (10) lit. a) din Codul Fiscal',
      effectiveDate: '2026-01-01',
    },
  ],
  articleSections: [
    {
      id: 'rolul-si-filosofia-deducerii-personale-in-codul-fiscal',
      title: 'Rolul și Filosofia Deducerii Personale în Codul Fiscal Românesc',
      level: 2,
      content: `Deducerea personală reprezintă principalul instrument de echitate fiscală integrat în sistemul cotei unice de impozitare din România. Deși cota de impozit pe venit este de 10% pentru toți salariații, existența deducerii personale conferă sistemului o progresivitate efectivă mascată: salariații cu venituri mici și cei care au în îngrijire familii numeroase plătesc un impozit efectiv considerabil mai mic decât cei cu venituri mari.

Principii fundamentale stabilite de articolul 77 din Codul Fiscal (modificat substanțial prin OG nr. 16/2022):
1. **Acordare Exclusivă la Funcția de Bază**: Deducerea personală nu se acordă la toate contractele de muncă ale unui individ. Salariatul care cumulează mai multe funcții este obligat să își aleagă un singur angajator unde declară „funcția de bază” (de regulă prin depunerea unei declarații scrise pe propria răspundere la momentul angajării).
2. **Natura Neimpozabilă a Deducerii**: Deducerea personală nu reprezintă un bonus plătit în bani peste salariu, ci o **sumă scăzută direct din baza de calcul a impozitului pe venit de 10%**. O deducere personală de 1.000 de lei înseamnă o economie directă la impozit de \`1.000 × 10% = 100 de lei\` bani în plus în buzunarul salariatului în fiecare lună.
3. **Structură Bipartită**: Începând cu reforma fiscală recentă, deducerea personală a fost împărțită clar în două categorii distincte: **deducerea personală de bază** (regresivă) și **deducerea personală suplimentară** (stimulativă).`,
    },
    {
      id: 'grila-completa-a-deducerii-personale-de-baza',
      title: 'Grila Detaliată a Deducerii Personale de Bază în Funcție de Întreținuți',
      level: 2,
      content: `Deducerea personală de bază se acordă exclusiv salariaților care realizează un venit brut lunar de până la **6.050 lei** (nivelul salariului de bază minim brut de 4.050 lei majorat cu 2.000 lei).

### Nivelul Deducerii la Salariul Minim (4.050 lei):
Pentru salariații remunerați la nivelul salariului minim, cota procentuală din salariul minim brut garantat în plată este stabilită astfel:
- **Fără persoane în întreținere (20%)**: \`4.050 lei × 20% = **810 lei**\`
- **Cu 1 persoană în întreținere (25%)**: \`4.050 lei × 25% = 1.012,50 lei\` -> rotunjit la **1.020 lei**
- **Cu 2 persoane în întreținere (30%)**: \`4.050 lei × 30% = 1.215 lei\` -> rotunjit la **1.220 lei**
- **Cu 3 persoane în întreținere (35%)**: \`4.050 lei × 35% = 1.417,50 lei\` -> rotunjit la **1.420 lei**
- **Cu 4 sau mai multe persoane în întreținere (45%)**: \`4.050 lei × 45% = 1.822,50 lei\` -> rotunjit la **1.830 lei**

### Mecanismul Regresiv pentru Salarii între 4.051 și 6.050 Lei:
Pentru fiecare leu câștigat peste pragul de 4.050 lei, deducerea de bază descrește treptat potrivit formulei:
\`Deducere = Deducere_Maximă × [1 – (Venit_Brut – 4.050) / 2.000]\`
La un salariu brut de 5.050 lei (exact la jumătatea intervalului), deducerea se înjumătățește (coeficientul este 0,5).
La atingerea pragului de **6.050 lei brut**, coeficientul devine 0, iar deducerea personală de bază se anulează complet.`,
    },
    {
      id: 'deduceri-suplimentare-copii-scolarizati-si-tineri',
      title: 'Deducerile Personale Suplimentare: Copii la Școală și Tineri Sub 26 de Ani',
      level: 2,
      content: `Pentru a sprijini natalitatea, educația și integrarea tinerilor pe piața forței de muncă, art. 77 alin. (10) din Codul Fiscal instituie două deduceri suplimentare valoroase:

1. **Deducerea Suplimentară de 100 Lei pentru Copii Înscriși în Învățământ**:
- **Cine este eligibil?**: Părintele (salariatul) care are copii înscriși într-o unitate de învățământ preșcolar, primar, gimnazial sau liceal (grădiniță sau școală acreditată).
- **Cuantumul Deducerii**: Fix **100 lei lunar pentru fiecare copil**. Dacă un salariat are 3 copii la școală, beneficiază de o deducere suplimentară de 300 lei lunar.
- **Caracteristică Unică (Fără Plafon de Salariu)**: Această deducere **se acordă indiferent de nivelul salariului brut realizat de părinte**. Chiar dacă angajatul câștigă 15.000 sau 35.000 lei brut pe lună și nu mai are dreptul la deducerea de bază, cei 100 lei/copil se scad în continuare din baza de calcul a impozitului.
- **Regula unui Singur Părinte**: În cazul în care ambii părinți sunt salariați, deducerea de 100 lei se acordă unuia singur dintre ei, prin prezentarea unei declarații pe propria răspundere din partea celuilalt părinte că nu beneficiază de facilitate la propriul angajator.

2. **Deducerea Suplimentară de 15% pentru Tinerii Sub 26 de Ani**:
- Tinerii angajați cu vârsta de până la 26 de ani beneficiază de o deducere suplimentară de **15% din salariul minim pe țară** (608 lei în 2026).
- Condiție restrictivă: Venitul brut lunar realizat de tânăr nu trebuie să depășească plafonul de 6.050 lei (salariul minim + 2.000 lei).`,
    },
    {
      id: 'cine-poate-fi-considerat-persoana-in-intretinere',
      title: 'Cine Poate Avea Calitatea Legală de Persoană în Întreținere?',
      level: 2,
      content: `Codul Fiscal stabilește criterii stricte privind persoanele care pot fi luate în întreținere pentru acordarea deducerilor (art. 77 alin. 6-9):

- **Grade de Rudenie Eligibile**: Pot fi persoane în întreținere soția/soțul, copiii sau alți membri de familie până la gradul al doilea inclusiv (părinți, bunici, frați, surori, nepoți de fiu/fiică). Nu pot fi luați în întreținere unchii, mătușile, verii sau concubinii.
- **Plafonul de Venituri al Persoanei Întreținute**: Persoana aflată în întreținere trebuie să aibă venituri lunare impozabile și neimpozabile **mai mici sau egale cu 20% din salariul de bază minim brut pe țară** (adică maximum 810 lei pe lună în 2026).
- **Excepții Notabile**: Nu se includ în calculul acestui plafon de 810 lei: alocația de stat pentru copii, bursele școlare, pensiile de urmaș ale copiilor orfani sau indemnizațiile de handicap.
- **Copiii Minori**: Sunt întotdeauna considerați persoane în întreținere, cu excepția cazului în care sunt încadrați în muncă și obțin venituri salariale proprii.`,
    },
    {
      id: 'documentatia-necesara-pentru-acordarea-deducerii',
      title: 'Procedura Practică și Documentele Necesare la Departamentul de Resurse Umane',
      level: 2,
      content: `Deducerea personală nu se aplică din oficiu de către angajator fără documente justificative, ci necesită constituirea unui dosar fiscal depus la departamentul de resurse umane sau contabilitate:

1. **Declarația pe Propria Răspundere a Salariatului**: Formular tipizat furnizat de angajator în care se declară funcția de bază, starea civilă și datele de identificare ale persoanelor întreținute (nume, CNP).
2. **Acte de Stare Civilă**: Copii conforme ale certificatului de căsătorie, certificatelor de naștere ale copiilor sau ale actelor de identitate ale părinților întreținuți.
3. **Adeverință de Înscriere în Învățământ**: Pentru deducerea suplimentară de 100 lei, părintele trebuie să aducă adeverință de la școală sau grădiniță care atestă înscrierea copilului în anul școlar curent.
4. **Declarația Celuilalt Părinte**: Document prin care celălalt soț/partener declară pe propria răspundere că nu beneficiază de deducerea pentru copilul respectiv la locul său de muncă.
5. **Dovada Veniturilor Întreținuților**: Cupon de pensie, adeverință de venit de la ANAF sau declarație notarială că persoana întreținută nu realizează venituri peste 810 lei lunar.`,
    },
  ],
  examples: [
    {
      title: 'Exemplul 1: Salariat cu 5.000 lei brut și 2 copii la școală',
      scenario:
        'Calculul deducerii personale totale pentru un salariat încadrat la funcția de bază cu un salariu brut de 5.000 lei, având 2 copii înscriși în învățământul primar.',
      calculationType: 'custom',
      inputAmount: 5000.0,
      resultTotal: 830.0,
      customFields: [
        { label: 'Salariu Brut realizat', value: '5.000,00 lei' },
        { label: 'Deducere de bază maximă (2 întreținuți - 30%)', value: '1.220,00 lei' },
        { label: 'Coeficient regresiv: 1 - (5.000 - 4.050)/2.000', value: '0,525' },
        { label: 'Deducere de bază acordată', value: '630,00 lei' },
        { label: 'Deducere suplimentară 2 copii (2 × 100 lei)', value: '+200,00 lei' },
        { label: 'Deducere Personală Totală', value: '830,00 lei', highlight: true },
        { label: 'Economie lunară de impozit (10% din 830 lei)', value: '+83,00 lei în mână' },
      ],
      explanation:
        'La un brut de 5.000 lei, salariatul beneficiază de o deducere de bază regresivă de 630 lei plus 200 lei pentru cei 2 copii, economisind 83 de lei la impozitul lunar pe venit.',
    },
    {
      title: 'Exemplul 2: Tânăr de 23 de ani la primul loc de muncă cu 4.500 lei brut',
      scenario:
        'Calculul deducerii pentru un tânăr sub 26 de ani fără persoane în întreținere încadrat cu 4.500 lei brut.',
      calculationType: 'custom',
      inputAmount: 4500.0,
      resultTotal: 1090.0,
      customFields: [
        { label: 'Salariu Brut', value: '4.500,00 lei' },
        { label: 'Deducere de bază (0 întreținuți - regresivă)', value: '630,00 lei' },
        { label: 'Deducere suplimentară tânăr < 26 ani (15% regresiv)', value: '460,00 lei' },
        { label: 'Deducere Personală Totală', value: '1.090,00 lei', highlight: true },
        { label: 'Impozit economisit', value: '109,00 lei / lună' },
      ],
      explanation:
        'Datorită facilității acordate tinerilor sub 26 de ani, deducerea personală depășește 1.000 de lei, oferind o reducere semnificativă a sarcinii fiscale.',
    },
  ],
  faqs: [
    {
      q: 'Până la ce salariu brut se acordă deducerea personală de bază?',
      a: 'Deducerea personală de bază se acordă pentru salarii brute de până la 6.050 lei pe lună (salariul minim pe țară de 4.050 lei majorat cu 2.000 lei). Peste 6.050 lei, deducerea de bază este zero.',
    },
    {
      q: 'Pot beneficia de deducerea de 100 lei pentru copil dacă am salariu mare?',
      a: 'Da. Deducerea suplimentară de 100 lei pe lună pentru fiecare copil înscris în învățământ se acordă unuia dintre părinți indiferent de nivelul salariului brut realizat, nefiind plafonată la 6.050 lei.',
    },
    {
      q: 'Pot ambii părinți să primească deducerea de 100 lei pentru același copil?',
      a: 'Nu. Conform Codului Fiscal, deducerea suplimentară pentru copil se acordă exclusiv unuia dintre părinți, în baza unei declarații pe propria răspundere transmise angajatorului.',
    },
    {
      q: 'Ce venituri maxime poate avea o persoană pentru a fi luată în întreținere?',
      a: 'Persoana aflată în întreținere nu trebuie să realizeze venituri mai mari de 20% din salariul minim pe țară, respectiv maximum 810 lei pe lună în anul 2026.',
    },
    {
      q: 'Copilul student de 22 de ani poate fi considerat persoană în întreținere?',
      a: 'Da. Copiii majori pot fi luați în întreținere dacă își continuă studiile într-o formă de învățământ acreditată, până la împlinirea vârstei de 26 de ani, dacă nu realizează venituri proprii peste 810 lei/lună.',
    },
    {
      q: 'Cum dovedesc la serviciu că am copilul la școală pentru deducere?',
      a: 'Trebuie să depuneți la departamentul de resurse umane o adeverință eliberată de unitatea de învățământ (grădiniță sau școală) care atestă înscrierea copilului în anul școlar respectiv.',
    },
    {
      q: 'Ce înseamnă că deducerea este regresivă?',
      a: 'Înseamnă că valoarea deducerii este maximă la nivelul salariului minim (4.050 lei) și scade treptat pe măsură ce salariul brut crește, ajungând la zero exact la 6.050 lei brut.',
    },
    {
      q: 'Dacă am 4 copii, cât este deducerea de bază?',
      a: 'Pentru 4 sau mai multe persoane în întreținere, deducerea de bază la nivelul salariului minim este de 45% din salariul minim brut, adică 1.830 lei pe lună, la care se adaugă câte 100 lei pentru fiecare copil la școală.',
    },
  ],
  sources: [
    {
      label: 'Codul Fiscal – Art. 77 (Deducerea Personală)',
      url: 'https://www.anaf.ro',
    },
    {
      label: 'Ordonanța Guvernului nr. 16/2022 privind modificarea Codului Fiscal',
      url: 'https://mfinante.gov.ro',
    },
    {
      label: 'Ghidul Deducerilor Fiscale – Agenția Națională de Administrare Fiscală',
      url: 'https://www.anaf.ro/publicatii',
    },
  ],
  relatedTools: [
    {
      title: 'Calculator Salariu Brut în Net',
      slug: 'ro/calculator-salariu',
      description: 'Vezi exact cum influențează deducerea personală salariul tău net în mână.',
      category: 'Salarii',
    },
    {
      title: 'Salariul Minim 2026',
      slug: 'ro/salariul-minim',
      description: 'Statutul legal și facilitățile fiscale aferente salariului minim pe economie.',
      category: 'Muncă',
    },
  ],
  relatedGuides: [
    {
      title: 'Cum se Calculează Salariul Net din Brut?',
      slug: 'ro/ghiduri/cum-se-calculeaza-salariul-net',
      description: 'Calcul complet explicat: CAS 25%, CASS 10%, deduceri și impozit pe venit.',
      category: 'Ghiduri Salarii',
    },
    {
      title: 'Declarația Unică ANAF',
      slug: 'ro/ghiduri/declaratia-unica-pfa',
      description: 'Ghid util pentru veniturile independente, chirii și dividende din România.',
      category: 'Ghiduri Fiscale',
    },
  ],
  updatedAt: '2026-01-15',
};
