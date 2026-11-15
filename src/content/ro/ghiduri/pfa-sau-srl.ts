import { GuideContent } from '../../types';

export const guideRoPfaSauSrl: GuideContent = {
  metaTitle: 'PFA sau SRL în 2026? Comparație Completă, Taxe, Riscuri și Recomandări',
  metaDescription:
    'Ce să alegi între PFA și SRL în 2026? Află diferențele de impozit (10% vs 1%/3%), dividende 8%, plafoane CAS și CASS, răspunderea juridică și costurile contabile.',
  h1: 'PFA sau SRL în 2026: Ce Formă Juridică să Alegi? Ghid Fiscal și Juridic',
  intro:
    'Alegerea între PFA (Persoană Fizică Autorizată) și SRL (Societate cu Răspundere Limitată) reprezintă una dintre cele mai importante decizii pentru orice freelancer, programator, consultant sau antreprenor din România. În 2026, modificările fiscale aduse de Legea nr. 296/2023 și ordonanțele conexe au modificat profund plafoanele contribuțiilor sociale și regulile microîntreprinderilor, transformând analiza rentabilității într-un calcul matematic strict dependent de nivelul încasărilor anuale și cheltuielilor deductibile.',
  readTimeMinutes: 10,
  articleSections: [
    {
      id: 'statutul-juridic-si-raspunderea-patrimoniala',
      title: 'Statutul Juridic și Răspunderea Patrimonială: PFA vs SRL',
      level: 2,
      content: `Diferența primară și fundamentală dintre o Persoană Fizică Autorizată și o Societate cu Răspundere Limitată nu ține de fiscalitate, ci de regimul juridic al răspunderii:

### 1. Persoana Fizică Autorizată (OUG nr. 44/2008)
PFA-ul reprezintă o formă individuală de exercitare a activității economice de către o persoană fizică ce deține o calificare profesională atestată. PFA-ul nu este o persoană juridică distinctă.
- **Răspunderea Patrimonială Nelimitată**: Conform art. 20 din OUG nr. 44/2008, titularul PFA răspunde pentru obligațiile asumate în exploatarea întreprinderii economice cu **patrimoniul de afectațiune** (bunurile alocate afacerii) și, în măsura în care acesta nu este îndestulător, cu **întreaga sa avere personală prezentă și viitoare**. În caz de litigii comerciale, daune-interese cerute de clienți sau popriri puse de ANAF pentru debite fiscale, executorii judecătorești pot executa silit conturile bancare private, locuința personală, autovehiculele sau terenurile deținute de titular.
- **Accesul Necorespunzător la Banii Afacerii**: Singurul mare avantaj este libertatea totală a fluxurilor de numerar: sumele intrate în contul bancar al PFA-ului sunt banii proprii ai persoanei fizice și pot fi cheltuiți la orice oră din zi și din noapte pentru cumpărături personale, fără hotărâri de dividende sau justificări contabile.

### 2. Societatea cu Răspundere Limitată (Legea nr. 31/1990)
SRL-ul este o entitate juridică de sine stătătoare, dotată cu patrimoniu propriu, autonom și complet separat de patrimoniul asociaților săi fondatori:
- **Răspunderea Strict Limitată**: Asociații răspund pentru pierderile sau datoriile societății exclusiv în limita aportului la capitalul social (care poate fi de doar 1 leu). Bunurile personale ale asociaților (casa, economiile familiei) sunt la adăpost în fața insolvenței sau falimentului comercial al firmei (cu excepția situațiilor de fraudă fiscală dovedită penal prin atragerea răspunderii solidare).
- **Separarea Riguroasă a Banilor**: Banii din contul SRL-ului aparțin exclusiv companiei. Asociatul sau administratorul nu are voie să folosească cardul firmei pentru cumpărături private (hrană, îmbrăcăminte, vacanțe de familie). Scoaterea banilor din SRL se poate face exclusiv pe căi legale: salarii lunare, deconturi de cheltuieli de deplasare strict justificate sau distribuire trimestrială și anuală de dividende.`,
    },
    {
      id: 'regimul-de-impozitare-al-pfa-in-2026',
      title: 'Regimul Fiscal al PFA: Sistem Real, Plafoane CAS și Noul Plafon CASS de 60 Salarii',
      level: 2,
      content: `În 2026, majoritatea covârșitoare a PFA-urilor din România activează în **sistem real** pe baza contabilității în partidă simplă (deoarece normele de venit au fost drastic restrânse de Codul Fiscal, eliminând activitățile de IT, consultanță și management):

### Formula Venitului Net Anual:
\`Venit Net = Total Încasări Brute – Cheltuieli Deductibile Efectuate\`

### Pachetul Fiscal și Contribuțiile Datorate de PFA:
1. **Contribuția de Asigurări Sociale (CAS - Pensii 25%)**:
   - Dacă venitul net anual este **sub 12 salarii minime** (sub 48.600 lei): CAS este **opțional** (0 lei datorat).
   - Dacă venitul net se situează între **12 și 24 salarii minime** (48.600 – 97.200 lei): CAS fix = \`12 × 4.050 lei × 25% = **12.150 lei/an**\`.
   - Dacă venitul net depășește **24 salarii minime** (peste 97.200 lei): CAS este plafonat la maximum \`24 × 4.050 lei × 25% = **24.300 lei/an**\`.
2. **Contribuția de Asigurări Sociale de Sănătate (CASS - Sănătate 10%)**:
   - Cota de 10% se aplică la **venitul net real obținut**, iar nu la un plafon fix redus.
   - Plafon minim: 6 salarii minime (24.300 lei) -> CASS minim de **2.430 lei/an** (cu excepția titularilor care au concomitent și un contract individual de muncă).
   - Plafon maxim: **60 de salarii minime pe economie** (243.000 lei) -> CASS maxim de **24.300 lei/an**.
3. **Impozitul pe Venit (10%)**:
   Se calculează aplicând cota de 10% asupra venitului net diminuat cu CAS și CASS plătite:
   \`Impozit PFA = (Venit Net – CAS – CASS) × 10%\`.`,
    },
    {
      id: 'regimul-de-impozitare-al-srl-microintreprindere',
      title: 'Regimul Fiscal al SRL: Microîntreprindere (1% sau 3%), Salariat și Dividende 8%',
      level: 2,
      content: `O societate comercială cu răspundere limitată poate beneficia de regimul favorabil de microîntreprindere dacă îndeplinește condițiile cumulative din art. 47 din Codul Fiscal:

### 1. Condițiile Obligatorii ale Statutului de Microîntreprindere:
- **Cifra de afaceri anuală**: maximum 500.000 euro (calculată la cursul BNR de la finalul anului precedent).
- **Obligația existenței unui salariat cu normă întreagă (8 ore/zi)**: Compania trebuie să aibă angajat cel puțin 1 salariat cu contract de muncă pe durată nedeterminată sau determinată pe normă întreagă (remunerat cu minimum salariul de bază minim brut de 4.050 lei). În cazul în care firma nu are salariați, aceasta trece automat la regimul de impozit pe profit de 16%.
- **Deținerea asociaților**: Un asociat poate deține peste 25% din părțile sociale într-o singură societate microîntreprindere.

### 2. Cotele de Impozitare pe Veniturile Microîntreprinderii:
- **Cota de 1%**: Pentru firme cu venituri de până la 60.000 euro anual și care nu desfășoară activități în domeniul IT, HoReCa, stomatologie sau asistență medicală.
- **Cota de 3%**: Pentru firme cu venituri între 60.000 euro și 500.000 euro pe an, precum și pentru orice firmă care activează în IT (coduri CAEN 6201, 6202, 6203, 5821, 5829), consultanță sau restaurante.

### 3. Impozitul pe Dividende și CASS Asociat:
- **Impozitul pe dividende**: Compania reține 8% din profitul net distribuit ca dividende și îl virează la bugetul de stat.
- **CASS datorat de persoana fizică pe dividende**: Dacă totalul dividendelor nete încasate într-un an depășește pragurile de 6, 12 sau 24 de salarii minime (24.300 lei, 48.600 lei, 97.200 lei), asociatul datorează o contribuție fixă de sănătate de **2.430 lei, 4.860 lei sau maximum 9.720 lei**, declarată prin Declarația Unică D212.`,
    },
    {
      id: 'costurile-operationale-si-povara-administrativa',
      title: 'Costuri Operaționale, Evidență Contabilă și Birocrație: Comparație Reală',
      level: 2,
      content: `Rentabilitatea netă a unei afaceri depinde în egală măsură de costurile administrative fixe lunare:

### Contabilitatea și Expertiza Contabilă:
- **La PFA**: Titularul poate ține contabilitatea în partidă simplă chiar și pe cont propriu (Registrul de Încasări și Plăți, Registrul de Evidență Fiscală). Dacă apelează la un contabil sau o aplicație de facturare/contabilitate online, costul mediu este de **150 – 250 lei pe lună**.
- **La SRL**: Legea contabilității nr. 82/1991 obligă societățile comerciale să organizeze contabilitatea în partidă dublă, semnată de un membru autorizat CECCAR (expert contabil). Costul lunar pentru contabilitate, state de plată pentru angajat și depunerea declarațiilor lunare (D112, D100, D300, D394) se situează de regulă între **400 și 800 lei pe lună**.

### Costul Obligatoriu cu Salariatul la SRL:
Pentru a rămâne la cota de 1% sau 3% micro, SRL-ul suportă lunar salariul minim brut de 4.050 lei și contribuția CAM de 91 lei, ceea ce înseamnă o cheltuială totală de **4.141 lei pe lună (49.692 lei pe an)**. Din această sumă, 2.574 lei reprezintă salariul net încasat de angajat (care poate fi chiar fondatorul firmei), iar 1.567 lei/lună (18.804 lei/an) reprezintă taxele pe muncă virate obligatoriu la stat.

### Închiderea și Lichidarea Firmei:
- Un PFA se poate radia de la Registrul Comerțului în termen de **3–5 zile lucrătoare** printr-o procedură gratuită și simplă.
- Radierea unui SRL presupune o procedură complexă în două etape (dizolvare și lichidare), întocmirea unui bilanț de lichidare de către un expert contabil și un termen de așteptare de cel puțin 60 de zile pentru opoziția creditorilor.`,
    },
    {
      id: 'macricea-de-decizie-si-recomandarea-practica-2026',
      title: 'Matricea Decizională 2026: Când să Alegi PFA și Când să Treci pe SRL?',
      level: 2,
      content: `În funcție de simulările matematice exacte bazate pe legislația anului 2026, iată recomandările clare de selecție:

### Alege PFA în Sistem Real Dacă:
1. **Veniturile anuale estimate sunt sub 80.000 – 100.000 lei**: La acest volum de încasări, costul fix de 49.692 lei impus de salariatul de la SRL ar anula orice avantaj fiscal.
2. **Ai deja un contract individual de muncă cu normă întreagă la o altă companie**: În această situație, ești scutit de CASS-ul minim de 6 salarii la PFA, iar veniturile independente sunt taxate mult mai suplu.
3. **Ai cheltuieli deductibile masive**: Dacă afacerea ta implică achiziții de mărfuri, echipamente, chirii și servicii care depășesc 40–50% din cifra de afaceri, impozitul de 10% pe venitul net real la PFA devine mai avantajos decât impozitul pe cifra de afaceri brută de la microîntreprinderi.
4. **Cerința de flexibilitate financiară imediată este prioritară**: Vrei să poți retrage fondurile în orice secundă fără a aștepta bilanțuri trimestriale.

### Alege SRL Microîntreprindere Dacă:
1. **Veniturile anuale depășesc 120.000 – 150.000 lei**: De la acest nivel în sus, economia fiscală realizată prin cota micro (1% sau 3%) combinată cu dividendele de 8% și plafonarea CASS la cel mult 24 de salarii minime depășește categoric cheltuielile cu salariatul și contabilitatea.
2. **Activezi în domenii cu risc contractual sau clienți internaționali mari**: Clienții corporate din UE sau SUA preferă colaborarea cu entități juridice de tip societate (SRL/LLC), iar protecția răspunderii limitate este indispensabilă.
3. **Ai cheltuieli deductibile reduse (servicii, IT, consultanță)**: În domeniile în care principala resursă este timpul și competența intelectuală, taxarea pe cifra de afaceri micro aduce o rată de rentabilitate net superioară PFA-ului.`,
    },
  ],
  faqs: [
    {
      q: 'Care este diferența majoră de răspundere între PFA și SRL?',
      a: 'La PFA, titularul răspunde pentru datoriile afacerii cu întreaga sa avere personală (casă, mașină, conturi private). La SRL, asociații răspund doar în limita capitalului social subscris.',
    },
    {
      q: 'Pot avea SRL fără niciun angajat în 2026?',
      a: 'Da, dar în absența a cel puțin unui angajat cu normă întreagă, SRL-ul nu poate aplica cota de 1% sau 3% micro, fiind obligat să treacă la regimul de impozit pe profit de 16%.',
    },
    {
      q: 'Cât este impozitul pe dividende în 2026?',
      a: 'Cota de impozit pe dividende distribuită de o societate comercială este de 8%. Impozitul se reține la sursă de către companie la data plății dividendelor.',
    },
    {
      q: 'Cum pot folosi banii dintr-un SRL pentru cheltuieli personale?',
      a: 'Banii din SRL pot fi transferați pe persoană fizică legal prin: salariu lunar (dacă sunteți angajat în firmă), dividende trimestriale sau anuale (după reținerea impozitului de 8%) sau diurne legale de deplasare.',
    },
    {
      q: 'Ce este Declarația Unică și cine o depune?',
      a: 'Declarația Unică (formularul 212) se depune până la 25 mai de către titularii de PFA (pentru declararea veniturilor și a contribuțiilor CAS/CASS) și de către persoanele fizice care au încasat dividende peste plafonul de 6 salarii minime.',
    },
    {
      q: 'Care este plafonul maxim de CASS la PFA în 2026?',
      a: 'Plafonul maxim de CASS (sănătate) pentru un PFA în sistem real este de 60 de salarii minime pe economie, reprezentând 24.300 lei pe an la un salariu minim de 4.050 lei.',
    },
    {
      q: 'Pot trece de la PFA la SRL în timpul anului?',
      a: 'Da. Puteți înființa oricând un SRL la Registrul Comerțului, transfera contractele comerciale cu clienții pe noua firmă și suspenda sau radia ulterior activitatea PFA-ului.',
    },
    {
      q: 'Câte microîntreprinderi poate deține o persoană fizică?',
      a: 'Conform Codului Fiscal, un asociat poate deține, direct sau indirect, peste 25% din titlurile de participare la o singură societate microîntreprindere.',
    },
  ],
  sources: [
    {
      label: 'Codul Fiscal – Legea nr. 227/2015 privind impozitele și contribuțiile sociale',
      url: 'https://www.anaf.ro',
    },
    {
      label: 'Oficiul Național al Registrului Comerțului (ONRC) – Legislație PFA și SRL',
      url: 'https://www.onrc.ro',
    },
    {
      label: 'Legea nr. 296/2023 privind măsurile fiscal-bugetare pentru sustenabilitate financiară',
      url: 'https://mfinante.gov.ro',
    },
  ],
  cta: {
    title: 'Simulează Veniturile în Calculatorul PFA vs SRL',
    description: 'Introdu cifra de afaceri estimată și cheltuielile anuale pentru a afla exact cât profit net îți rămâne în mână pe fiecare formă juridică.',
    buttonText: 'Deschide Calculatorul PFA vs SRL',
    buttonHref: '/ro/calculator-pfa-srl/',
    badge: 'Simulator Fiscal 2026',
  },
  relatedTools: [
    {
      title: 'Calculator PFA vs SRL 2026',
      slug: 'ro/calculator-pfa-srl',
      description: 'Simulator comparativ de taxe, CAS, CASS, dividende și profit net.',
      category: 'Fiscalitate',
    },
    {
      title: 'Calculator Salariu 2026',
      slug: 'ro/calculator-salariu',
      description: 'Află reținerile salariatului și costul complet al angajatorului.',
      category: 'Salarii',
    },
  ],
  relatedGuides: [
    {
      title: 'Declarația Unică ANAF pentru PFA',
      slug: 'ro/ghiduri/declaratia-unica-pfa',
      description: 'Ghid pas cu pas pentru completarea și transmiterea formularului D212.',
      category: 'Declarații Fiscale',
    },
    {
      title: 'Cum se Calculează Salariul Net din Brut?',
      slug: 'ro/ghiduri/cum-se-calculeaza-salariul-net',
      description: 'Totul despre CAS 25%, CASS 10%, impozit 10% și deducerile personale în România.',
      category: 'Ghiduri Salarii',
    },
  ],
  updatedAt: '2026-01-15',
};
