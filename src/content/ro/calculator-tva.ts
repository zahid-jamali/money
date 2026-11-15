import { PageContent } from '../types';

export const calculatorTvaRo: PageContent = {
  metaTitle: 'Calculator TVA România 2026 | Calcul Net & Brut (Cota 21% & 11%)',
  metaDescription:
    'Calculează TVA rapid conform Legii 141/2025: cota standard de 21% și cota redusă unificată de 11%. Formule de adăugare și extragere, RO e-Factura și plafonul de scutire.',
  h1: 'Calculator TVA 2026 (Cota 21% și Cota Redusă 11%)',
  quickAnswer:
    'Pentru a adăuga TVA standard de 21% conform noii legislații (Legea 141/2025), înmulțiți suma netă cu 1,21 (sau cu 0,21 pentru a afla doar valoarea taxei). Pentru a extrage TVA dintr-un total brut, împărțiți suma brută la 1,21 pentru a obține baza impozabilă netă, sau înmulțiți brutul cu coeficientul 21/121 (aproximativ 0,17355).',
  howItWorks: [
    {
      label: 'Adăugare TVA Cota Standard 21% (Net → Brut)',
      formula: 'Brut = Net × 1,21 | Valoare TVA = Net × 0,21',
      ruleCitation: 'Legea nr. 141/2025 privind măsurile fiscal-bugetare, M.Of. 725/2025',
      effectiveDate: 'În vigoare de la 1 August 2025 și aplicabil pe întreg anul 2026',
    },
    {
      label: 'Extragere TVA Cota Standard 21% (Brut → Net)',
      formula: 'Net = Brut ÷ 1,21 | Valoare TVA = Brut × (21 / 121)',
      ruleCitation: 'Codul Fiscal (Legea 227/2015 cu modificările ulterioare)',
      effectiveDate: 'Coeficient de recalculare 21/121 (~0,17355) pentru cota de 21%',
    },
    {
      label: 'Adăugare Cota Redusă Unificată 11% (Net → Brut)',
      formula: 'Brut = Net × 1,11 | Valoare TVA = Net × 0,11',
      ruleCitation: 'Legea nr. 141/2025 (unificarea cotelor reduse de 9% și 5%)',
      effectiveDate: 'Alimente, medicamente, cărți, lemne de foc, servicii hoteliere',
    },
    {
      label: 'Extragere Cota Redusă 11% (Brut → Net)',
      formula: 'Net = Brut ÷ 1,11 | Valoare TVA = Brut × (11 / 111)',
      ruleCitation: 'Codul Fiscal, art. 291',
      effectiveDate: 'Coeficient de recalculare 11/111 (~0,099099) pentru cota de 11%',
    },
  ],
  articleSections: [
    {
      id: 'marea-reforma-fiscala-legea-141-2025',
      title: 'Marea Reformă a TVA din România: Legea nr. 141/2025',
      level: 2,
      content:
        'Sistemul taxei pe valoarea adăugată din România a cunoscut o transformare structurală profundă odată cu intrarea în vigoare a Legii nr. 141/2025 privind unele măsuri fiscal-bugetare, publicată în Monitorul Oficial nr. 725/2025. Adoptată în contextul eforturilor guvernamentale de consolidare fiscală și reducere a deficitului bugetar excesiv, legea a reconfigurat cotele de TVA aplicabile pe teritoriul național începând cu data de 1 august 2025.\n\nPrincipalele modificări intrate în vigoare includ:\n1. **Majorarea Cotei Standard de la 19% la 21%**: Cota generală aplicabilă majorității bunurilor și serviciilor a crescut cu două puncte procentuale, revenind la niveluri comparabile cu media statelor din Europa Centrală și de Est;\n2. **Unificarea Cotelor Reduse într-o Singură Cotă de 11%**: Sistemul binar anterior de cote reduse (9% pentru alimentație și medicamente, respectiv 5% pentru cărți, locuințe sociale, lemne de foc și fotovoltaice) a fost abrogat și comasat într-o cotă unică redusă de 11%;\n3. **Dispariția Cotei Super-Reduse de 5%**: Domeniile beneficiare de 5% au fost realiniate la cota de 11% sau reîncadrate la cota standard.',
    },
    {
      id: 'comparatie-cote-tva',
      title: 'Comparație Istorică: Noul Regim vs. Regimul Anterior',
      level: 2,
      content:
        'Pentru a gestiona corect regularizările de facturi și stornările din perioade anterioare, este esențială înțelegerea diferențelor dintre cele două regimuri legislative:\n\n- **Cota Standard (21% actual vs. 19% anterior)**: Se aplică echipamentelor electronice, electrocasnicelor, carburanților, îmbrăcămintei, serviciilor de consultanță, telecomunicațiilor, serviciilor juridice și de arhitectură, mobilei și tuturor bunurilor fără regim derogatoriu;\n- **Cota Redusă (11% unificat actual vs. 9% / 5% anterior)**: Include alimentele de bază destinate consumului uman, băuturile nealcoolice (cu excepția celor cu zahăr adăugat ridicat), livrarea de medicamente de uz uman și veterinar, manuale școlare, cărți și publicații periodice tipărite sau digitale, serviciile de cazare hotelieră, restaurante și catering, livrarea de energie termică în sezonul rece și lemnele de foc pentru încălzire;\n- **Cota 0% (Scutire cu drept de deducere)**: Rămâne în vigoare pentru livrările intracomunitare de bunuri (LIC), exporturile de bunuri în afara spațiului Uniunii Europene și transportul internațional de pasageri;\n- **Operațiuni Scutite fără drept de deducere**: Serviciile medicale și stomatologice prestate de unități autorizate, învățământul public și privat autorizat, operațiunile bancare, financiare și de asigurare.',
    },
    {
      id: 'formule-matematice-calcul-tva',
      title: 'Formule Matematice: Adăugarea și Extragerea TVA din Preț',
      level: 2,
      content:
        'Erorile de rotunjire și calcul invers pot genera discrepanțe majore în evidența contabilă. În funcție de punctul de plecare, formulele sunt următoarele:\n\n### 1. Adăugarea TVA (de la Preț Net la Preț Brut)\n$$\\text{Valoare TVA} = \\text{Bază Impozabilă (Net)} \\times 0,21$$\n$$\\text{Total de Plată (Brut)} = \\text{Bază Impozabilă (Net)} \\times 1,21$$\nPentru un contract de prestări servicii de 5.000 lei net, TVA este $5.000 \\times 0,21 = 1.050$ lei, rezultând un total facturat de 6.050 lei brut.\n\n### 2. Extragerea TVA (de la Preț Brut la Preț Net)\nO eroare clasică constă în scăderea a 21% direct din totalul brut. Scăderea a 21% din 6.050 lei ar însemna scăderea a 1.270,50 lei, rezultând un net eronat de 4.779,50 lei. Deoarece brutul reprezintă 121% din valoarea inițială, formula corectă este:\n$$\\text{Net} = \\frac{\\text{Brut}}{1,21}$$\n$$\\text{TVA extras} = \\text{Brut} \\times \\frac{21}{121} \\approx \\text{Brut} \\times 0,1735537$$\nPentru cota redusă de 11%, împărțitorul este 1,11, iar coeficientul direct de extragere a TVA este:\n$$\\text{TVA extras (11%)} = \\text{Brut} \\times \\frac{11}{111} \\approx \\text{Brut} \\times 0,099099$$',
    },
    {
      id: 'plafonul-de-scutire-tva-si-declararea-fiscala',
      title: 'Plafonul de Scutire pentru Întreprinderi Mici și RO e-Factura',
      level: 2,
      content:
        'Conform art. 310 din Codul Fiscal, persoanele impozabile stabilite în România a căror cifră de afaceri anuală declarată sau realizată nu depășește plafonul de **300.000 RON** (echivalentul a 88.500 EUR la cursul de aderare) pot aplica regimul special de scutire de TVA pentru întreprinderi mici.\n\nContribuabilii care aplică regimul de scutire nu colectează TVA pentru livrările efectuate și nu au drept de deducere a TVA plătite pentru achiziții. În momentul depășirii plafonului de 300.000 RON în cursul unui an calendaristic, persoana impozabilă este obligată să solicite înregistrarea în scopuri de TVA la organul fiscal competent în termen de cel mult 10 zile de la sfârșitul lunii în care a depășit plafonul.\n\nTotodată, toți operatorii economici care desfășoară tranzacții B2B și B2C pe teritoriul României sunt obligați să utilizeze sistemul național **RO e-Factura**, transmițând facturile în format electronic structurat XML UBL prin intermediul Spatiului Privat Virtual (SPV) în termen de maxim 5 zile calendaristice de la data emiterii.',
    },
    {
      id: 'regimul-deducerii-si-saf-t',
      title: 'Dreptul de Deducere a TVA și Raportarea SAF-T (Fișierul Standard D406)',
      level: 2,
      content:
        'Dreptul de deducere a taxei pe valoarea adăugată ia naștere în momentul în care taxa deductibilă devine exigibilă. Pentru a fi deductibilă, achiziția trebuie să fie destinată utilizării în folosul operațiunilor taxabile ale persoanei impozabile și să fie justificată printr-o factură fiscală completă transmisă și validată în sistemul RO e-Factura (având aplicat sigiliul electronic al Ministerului Finanțelor).\n\nÎn plus, toți contribuabilii mari, mijlocii și mici înregistrați în scopuri de TVA depun declarația informativă SAF-T (Declarația 406), raportând electronic ANAF registrul de jurnale contabile, plățile, încasările și stocurile conform taxonomiei OCDE.',
    },
    {
      id: 'decontul-de-tva-formularul-300',
      title: 'Decontul de TVA (Formularul 300) și Termenele de Plată către Buget',
      level: 2,
      content:
        'Persoanele impozabile înregistrate în scopuri de TVA în România au obligația legală de a întocmi și depune periodic la organul fiscal teritorial competent Decontul de taxă pe valoarea adăugată (Formularul 300). Perioada fiscală este luna calendaristică pentru contribuabilii a căror cifră de afaceri anuală depășește echivalentul în lei a 100.000 euro, respectiv trimestrul calendaristic pentru cei cu cifră de afaceri sub acest prag și care nu au efectuat achiziții intracomunitare de bunuri taxabile.\n\nTermenul de depunere a decontului și de plată a soldului de TVA datorat este data de 25 inclusiv a lunii următoare încheierii perioadei fiscale. Prin Formularul 300 se determină diferența netă dintre taxa colectată pentru livrările de bunuri sau prestările de servicii facturate și taxa deductibilă aferentă achizițiilor efectuate. Dacă taxa colectată depășește taxa deductibilă, rezultă o sumă de plată către bugetul de stat. În situația inversă, când taxa deductibilă depășește taxa colectată, contribuabilul înregistrează o sumă negativă de TVA, putând opta pentru rambursarea acesteia sau pentru reportarea în deconturile perioadelor următoare.',
    },
  ],
  examples: [
    {
      title: 'Exemplul 1: Emitere factură servicii IT B2B cu cota standard de 21%',
      scenario:
        'O companie de dezvoltare software din Cluj-Napoca facturează servicii de arhitectură cloud unui client din București în valoare contractuală de 12.000,00 RON net.',
      calculationType: 'add',
      inputAmount: 12000.0,
      rate: 21,
      resultVat: 2520.0,
      resultTotal: 14520.0,
      explanation:
        'Compania aplică cota standard de 21%: 12.000,00 RON × 0,21 = 2.520,00 RON TVA colectată. Totalul facturat transmis în sistemul RO e-Factura este de 14.520,00 RON (12.000,00 RON bază + 2.520,00 RON TVA).',
    },
    {
      title: 'Exemplul 2: Extragere 11% TVA cotă redusă din bon fiscal de consumabile alimentare',
      scenario:
        'Un restaurant achiziționează ingrediente alimentare de bază de la un depozit angro cu o factură în valoare totală de 3.885,00 RON brut (cu TVA 11% inclus).',
      calculationType: 'remove',
      inputAmount: 3885.0,
      rate: 11,
      resultVat: 385.0,
      resultTotal: 3500.0,
      explanation:
        'Contabilul împarte totalul brut de 3.885,00 RON la 1,11, stabilind baza netă de 3.500,00 RON. TVA deductibilă este de 385,00 RON (3.885,00 RON - 3.500,00 RON, echivalent cu 3.885,00 × 11/111).',
    },
  ],
  faqs: [
    {
      q: 'Care este cota standard de TVA în România în 2026?',
      a: 'Cota standard de TVA în România este de 21%. Aceasta a fost stabilită prin Legea nr. 141/2025, intrând în vigoare la 1 august 2025.',
    },
    {
      q: 'Ce s-a întâmplat cu cotele reduse de 9% și 5%?',
      a: 'Prin Legea 141/2025, cotele anterioare de 9% și 5% au fost comasate și înlocuite cu o cotă unică redusă de 11%, aplicabilă alimentelor, medicamentelor, cărților și serviciilor hoteliere.',
    },
    {
      q: 'Cum se calculează TVA de 21% dintr-o sumă brută?',
      a: 'Pentru a afla suma netă, împărțiți suma brută la 1,21. Pentru a extrage direct valoarea TVA, înmulțiți suma brută cu fracția 21/121 (aproximativ 0,17355).',
    },
    {
      q: 'Care este plafonul de scutire de TVA pentru firme mici în 2026?',
      a: 'Plafonul de scutire de TVA este de 300.000 RON cifră de afaceri anuală (art. 310 Codul Fiscal). Firmele sub acest plafon nu sunt obligate să se înregistreze în scopuri de TVA.',
    },
    {
      q: 'Este obligatorie transmiterea facturilor prin RO e-Factura?',
      a: 'Da. Transmiterea facturilor în format electronic structurat XML prin sistemul național RO e-Factura din SPV este obligatorie pentru toate operațiunile B2B și B2C derulate pe teritoriul României.',
    },
    {
      q: 'Cum pot calcula TVA pe o factură emisă înainte de 1 august 2025?',
      a: 'Pentru facturile emise anterior datei de 1 august 2025 (sau pentru stornări aferente acelor perioade), se aplică cotele istorice: 19% cota standard, respectiv 9% sau 5% cotele reduse.',
    },
    {
      q: 'Ce produse beneficiază de cota redusă de 11%?',
      a: 'Beneficiază de cota de 11% alimentele destinate consumului uman, medicamentele de uz uman și veterinar, cărțile, revistele, serviciile de cazare și alimentație publică (restaurante).',
    },
    {
      q: 'Ce reprezintă declarația SAF-T (D406)?',
      a: 'SAF-T este fișierul standard de control fiscal depus electronic periodic de către persoanele juridice înregistrate în scopuri de TVA, conținând evidența tranzacțiilor contabile și a stocurilor.',
    },
  ],
  sources: [
    {
      label: 'Agenția Națională de Administrare Fiscală (ANAF)',
      url: 'https://www.anaf.ro',
    },
    {
      label: 'Monitorul Oficial: Legea nr. 141/2025 privind unele măsuri fiscal-bugetare',
      url: 'https://www.monitoruloficial.ro',
    },
    {
      label: 'Codul Fiscal al României (Legea nr. 227/2015)',
      url: 'https://legislatie.just.ro/Public/DetaliiDocument/171282',
    },
    {
      label: 'Banca Națională a României (BNR) – Cursuri Valutare',
      url: 'https://www.bnr.ro',
    },
  ],
  relatedTools: [
    {
      title: 'Verificare IBAN și Cont Bancar România',
      slug: 'ro/verificare-iban',
      description: 'Validează conturi bancare românești conform algoritmului MOD-97 și identifică codul băncii.',
      category: 'Servicii Bancare',
    },
    {
      title: 'Hub European de Cote TVA (UE)',
      slug: 'vat-calculator',
      description: 'Compară cotele de TVA aplicabile în toate cele 27 de state membre ale Uniunii Europene.',
      category: 'Taxe & TVA',
    },
  ],
  relatedGuides: [
    {
      title: 'Ce este un cod IBAN și cum este structurat?',
      slug: 'guides/what-is-an-iban',
      description: 'Ghid detaliat despre structura internațională a conturilor bancare și plățile SEPA.',
      category: 'Ghiduri Financiare',
    },
    {
      title: 'Diferențele dintre codul IBAN și codul SWIFT / BIC',
      slug: 'guides/iban-vs-swift-bic',
      description: 'Când este necesar codul BIC/SWIFT în plățile naționale și transferurile internaționale.',
      category: 'Ghiduri Financiare',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Acest calculator este pus la dispoziție în scop pur informativ și orientativ. Pentru situații fiscale complexe sau interpretări particulare ale Legii 141/2025, consultați un consultant fiscal acreditat CCF sau un expert contabil autorizat CECCAR.',
};
