import { GuideContent } from '../../types';

export const guideHowToFindYourIbanEn: GuideContent = {
  metaTitle: 'How to Find Your IBAN: UK, Germany, France, Spain, Italy & NL',
  metaDescription:
    'Step-by-step instructions for finding your IBAN in the UK, Germany, France, Spain, Italy, and the Netherlands. Convert sort codes, find on cards, apps & statements.',
  h1: 'How to Find Your IBAN: Complete Country Guide (UK, DE, FR, ES, IT & NL)',
  intro:
    'Finding your International Bank Account Number (IBAN) depends on the country where your account is held. Whether you need to convert a UK sort code and account number, locate the IBAN on a German Girocard, extract it from a French RIB, or locate it in mobile banking apps across Spain, Italy, or the Netherlands, this definitive guide provides exact steps for every major European banking market.',
  readTimeMinutes: 10,
  articleSections: [
    {
      id: 'where-is-iban-located-general',
      title: 'Common Places to Find Your IBAN in Any Country',
      level: 2,
      content:
        'Regardless of which country or bank you use, several universal locations always display your full IBAN:\n\n1. **Mobile Banking Applications**: Open your bank\'s mobile app, select your primary checking or current account, and tap on "Account Details", "Share Details", or "Manage Account". Your IBAN will typically be displayed alongside a one-tap copy button.\n2. **PDF or Paper Bank Statements**: Official monthly account statements prominently feature your IBAN in the top-right or top-left header block alongside your account holder name and customer reference number.\n3. **Online Banking Portals**: Logging into your web portal under "Accounts" or "Transfers" exposes your international account details.\n4. **Physical Payment Cards**: In several European nations (notably Germany, Austria, and Switzerland), the full 22-character IBAN is physically engraved or laser-printed on the reverse side of your debit card (Girocard).\n\nBelow is the country-specific breakdown for the six largest European economies.',
    },
    {
      id: 'how-to-find-uk-iban',
      title: 'United Kingdom (UK): Sort Code, Account Number & GB IBAN',
      level: 2,
      content:
        'In the United Kingdom, domestic retail banking continues to operate primarily on a **6-digit Sort Code** and **8-digit Account Number**. However, whenever you receive money from abroad, you must supply your 22-character **GB IBAN**.\n\n### How a UK IBAN is Constructed:\n- **Positions 1–2**: Country code `GB`\n- **Positions 3–4**: Two mathematical MOD-97 check digits (e.g., `29`)\n- **Positions 5–8**: 4-letter bank identifier (e.g., `NWBK` for NatWest, `BARC` for Barclays, `HBUK` for HSBC, `LOYD` for Lloyds, `MONZ` for Monzo, `REVO` for Revolut UK)\n- **Positions 9–14**: Your 6-digit sort code (without dashes)\n- **Positions 15–22**: Your 8-digit account number (with leading zeros if under 8 digits)\n*Example*: `GB29 NWBK 6016 1331 9268 19`\n\n### Finding Your UK IBAN in Popular Banking Apps:\n- **Barclays**: Tap your current account on the home screen > tap "Account info" > view "IBAN and BIC".\n- **HSBC UK**: Select your account > tap the gear icon (Manage) > select "Account details" > scroll to "International transfers (IBAN)".\n- **Lloyds Bank / Halifax**: Select your account > tap "More actions" > "Account details" > copy the IBAN.\n- **Monzo**: Tap your profile or card > tap "Account details" > scroll down to "International payments".\n- **Revolut**: Tap the flag or currency balance > tap "Details" > view local and international IBAN.',
    },
    {
      id: 'how-to-find-germany-iban',
      title: 'Germany (DE): The 22-Digit IBAN and Girocard Reverse',
      level: 2,
      content:
        'In Germany, the legacy national system of Kontonummer and 8-digit Bankleitzahl (BLZ) was completely unified into the 22-character German IBAN under the SEPA transition.\n\n### Where to Find Your German IBAN:\n1. **On the Reverse of Your Girocard (Sparkassen-Card / Bankkarte)**:\nFlip your physical debit card over. On almost all German bank cards (Sparkasse, Volksbank, Deutsche Bank, Commerzbank, ING, DKB), your 22-character IBAN is laser-printed directly below the magnetic stripe, beginning with `DE` followed by two check digits, your 8-digit BLZ, and your 10-digit account number.\n2. **In German Banking Apps**:\n- **Sparkasse App**: Select your "Girokonto" > tap on the three dots (More) or "Kontodetails" to copy your IBAN.\n- **Deutsche Bank Mobile**: Tap your account card on the dashboard > tap "Details" > tap the copy icon next to IBAN.\n- **ING Deutschland**: Tap "Girokonto" > tap "Konto-Details" > copy IBAN.\n- **DKB App**: Tap your account card > tap "Details" > view IBAN and BIC.\n- **N26**: Tap your profile icon > "Account Details" displays your German `DE` IBAN.\n\n### Converting BLZ and Kontonummer:\nIf you only know your 8-digit Bankleitzahl and account number, you can generate your exact DE IBAN using our specialized German IBAN Calculator tool, which computes the precise MOD-97 check digits.',
    },
    {
      id: 'how-to-find-france-iban',
      title: 'France (FR): The 27-Digit IBAN and the RIB Document',
      level: 2,
      content:
        'In France, your banking coordinates are traditionally provided in a document known as the **RIB (Relevé d\'Identité Bancaire)**. The French IBAN consists of exactly **27 characters**.\n\n### The Structure of a French RIB / IBAN:\n- `FR` (Country code)\n- 2 check digits (MOD-97)\n- 5-digit **Code Banque** (identifies the bank, e.g., `30003` for Société Générale, `30004` for BNP Paribas, `10278` for Crédit Agricole)\n- 5-digit **Code Guichet** (identifies the local branch agency)\n- 11-character **Numéro de Compte** (account number, letters and numbers)\n- 2-digit **Clé RIB** (national French mathematical check key between 01 and 97)\n*Example*: `FR76 3000 3012 3401 2345 6789 014`\n\n### How to Download a RIB:\nIn France, employers, landlords, and government bodies (such as CAF, CPAM, or URSSAF) frequently request an official RIB document to set up payroll or direct debits. You can download an official PDF RIB in seconds by logging into your banking app (BNP Paribas, BoursoBank, Crédit Agricole, La Banque Postale), navigating to "Virements" or "Mon Compte", and selecting "Télécharger mon RIB".',
    },
    {
      id: 'how-to-find-spain-iban',
      title: 'Spain (ES): The 24-Digit Código Cuenta Corriente (CCC)',
      level: 2,
      content:
        'The Spanish IBAN consists of **24 characters** and incorporates the legacy 20-digit **Código Cuenta Corriente (CCC)** that Spanish banks historically utilized.\n\n### Breakdown of a Spanish IBAN:\n- `ES` + 2 check digits (ISO 7064 Modulo 97-10)\n- 4-digit **Código de Entidad** (Bank code, e.g., `0049` for Banco Santander, `0182` for BBVA, `2100` for CaixaBank, `0081` for Banco Sabadell, `0128` for Bankinter)\n- 4-digit **Código de Oficina** (Branch agency code)\n- 2-digit **Dígitos de Control (DC)** (Legacy national Spanish checksum digits calculated via Modulo 11 algorithm on the bank/office and account segments respectively)\n- 10-digit **Número de Cuenta** (Account number)\n*Example*: `ES91 2100 0418 4502 0005 1332`\n\n### Finding Your Spanish IBAN:\nIn the apps of BBVA, Santander, CaixaBank, or Sabadell, tap on your account, navigate to "Información de la cuenta" or "Configuración", and select "Ver IBAN y detalles". Spanish debit cards often print only the last 4 digits for privacy, so the mobile app or monthly extracto is the most reliable source. If you are dealing with the Agencia Tributaria (AEAT) or Seguridad Social for tax refunds or pensions, your official IBAN certificate (*certificado de titularidad bancaria*) can be downloaded directly from your bank\'s online portal as a signed PDF.',
    },
    {
      id: 'how-to-find-italy-iban',
      title: 'Italy (IT): The 27-Digit IBAN and CIN Character',
      level: 2,
      content:
        'The Italian IBAN contains **27 characters** and is notable for containing an alphabetical check character known as the **CIN (Control Internal Number)**.\n\n### Breakdown of an Italian IBAN:\n- `IT` + 2 check digits (Modulo 97)\n- 1 single letter **CIN** (e.g., `A`, `K`, `X`, calculated via a proprietary Italian national algorithm combining odd and even position weights)\n- 5-digit **ABI** (Associazione Bancaria Italiana code identifying the bank institution, e.g., `03069` for Intesa Sanpaolo, `02008` for UniCredit, `01030` for Banca Monte dei Paschi di Siena, `03488` for Banco BPM)\n- 5-digit **CAB** (Codice di Avviamento Bancario identifying the municipal branch agency)\n- 12-character **Numero di Conto** (Account number, padded with leading zeroes)\n*Example*: `IT60 X 0542 8111 0100 0000 1234 56`\n\n### Locating Your Italian IBAN:\nIn Italian banking apps (Intesa Sanpaolo Mobile, UniCredit, Poste Italiane BancoPosta, Fineco, Illimity), tap "Il mio conto" > "Dettagli conto e IBAN". Your IBAN is also featured at the top of every Estratto Conto (bank statement) and on official INPS pension or employer direct deposit forms (*modulo accredito stipendio*).',
    },
    {
      id: 'how-to-find-netherlands-iban',
      title: 'Netherlands (NL): The 18-Character Compact IBAN',
      level: 2,
      content:
        'The Dutch IBAN is one of the most streamlined and compact in Europe, containing exactly **18 characters**.\n\n### Breakdown of a Dutch IBAN:\n- `NL` + 2 check digits\n- 4-letter **Bank Identifier** (e.g., `INGB` for ING Bank, `ABNA` for ABN AMRO, `RABO` for Rabobank, `KNAB` for Knab, `SNSB` for SNS Bank, `BUNQ` for Bunq, `ASNB` for ASN Bank)\n- 10-digit **Rekeningnummer** (Account number, padded with leading zeroes to 10 digits)\n*Example*: `NL91 INGB 0001 2345 67`\n\n### Locating Your Dutch IBAN:\n- **On your Debit Card (Betaalpas)**: On Dutch plastic Maestro / Debit Mastercard cards, your 18-character IBAN is clearly printed on the front or back under "IBAN / Rekeningnummer".\n- **In Dutch Mobile Apps**: In the ING, Rabobank, or ABN AMRO app, your full IBAN is shown directly on the main dashboard screen beneath your account name. When sharing payment requests via iDEAL or Tikkie, your IBAN is the underlying clearing coordinate linked to the settlement transfer.',
    },
  ],
  faqs: [
    {
      q: 'Is my sort code and account number the same as my IBAN in the UK?',
      a: 'No, but your sort code and account number are inside your UK IBAN. A UK IBAN starts with GB, followed by 2 check digits, a 4-letter bank code, your 6-digit sort code, and your 8-digit account number.',
    },
    {
      q: 'Where is the IBAN printed on a German bank card?',
      a: 'On German bank cards (Girocards from Sparkasse, Volksbank, Deutsche Bank, etc.), the 22-character IBAN is almost always printed on the back of the card, directly below the magnetic signature stripe.',
    },
    {
      q: 'What is a French RIB and how does it relate to the IBAN?',
      a: 'A RIB (Relevé d\'Identité Bancaire) is an official French document containing your complete banking coordinates (Code Banque, Code Guichet, Numéro de Compte, Clé RIB, and your 27-character FR IBAN).',
    },
    {
      q: 'Can I generate my own IBAN manually?',
      a: 'While the mathematical formula is standardized, calculating the 2 check digits requires the MOD-97 algorithm. It is far safer to use an automated IBAN generator or check your official bank app.',
    },
    {
      q: 'Why does my Spanish IBAN have 24 characters while France has 27?',
      a: 'Each national central bank and banking authority decided the length of their Basic Bank Account Number (BBAN) when standardizing under ISO 13616. Spain opted for 24 characters, France for 27, and the Netherlands for 18.',
    },
    {
      q: 'How can I verify if the IBAN I found is valid?',
      a: 'You can test the string in our free IBAN Checker tool, which checks character length, national formatting rules, and executes the MOD-97 checksum calculation in real time.',
    },
    {
      q: 'Is an IBAN required for receiving money from overseas?',
      a: 'Yes. For transfers coming from outside your country or originating anywhere within the European SEPA network, providing your IBAN is mandatory for routing.',
    },
    {
      q: 'Can someone take money from my account if they see my IBAN on a statement?',
      a: 'No. An IBAN only allows someone to send money to you. Unauthorized withdrawals cannot be made without login credentials, 2FA, or signed legal mandates protected by consumer direct debit refund rights.',
    },
  ],
  sources: [
    {
      label: 'SWIFT: Official International IBAN Registry',
      url: 'https://www.swift.com/standards/data-standards/iban',
    },
    {
      label: 'Deutsche Bundesbank: Bankleitzahlen und IBAN-Richtlinien',
      url: 'https://www.bundesbank.de',
    },
    {
      label: 'Banque de France: Le Relevé d\'Identité Bancaire et l\'IBAN',
      url: 'https://www.banque-france.fr',
    },
    {
      label: 'Banco de España: Estructura del Código de Cuenta y el IBAN',
      url: 'https://www.bde.es',
    },
    {
      label: 'Banca d\'Italia: Sistema dei Pagamenti e Codici Nazionali',
      url: 'https://www.bancaditalia.it',
    },
    {
      label: 'De Nederlandsche Bank (DNB): IBAN en SEPA Richtlijnen',
      url: 'https://www.dnb.nl',
    },
  ],
  cta: {
    title: 'Validate Your IBAN or Convert BLZ & Account',
    description:
      'Check the mathematical MOD-97 checksum of your account number or convert national banking details.',
    buttonText: 'Test Your IBAN Online',
    buttonHref: '/iban-checker/',
    badge: 'Instant Verification',
  },
  relatedTools: [
    {
      title: 'IBAN Validator & BIC Lookup',
      slug: 'iban-checker',
      description: 'Check domestic and international account numbers with MOD-97 checksum validation.',
      category: 'Banking',
    },
    {
      title: 'German IBAN Calculator (BLZ & Konto)',
      slug: 'de/iban-rechner',
      description: 'Calculate official German IBANs from 8-digit Bankleitzahl and Kontonummer.',
      category: 'Banking',
    },
  ],
  relatedGuides: [
    {
      title: 'What is an IBAN? Structure & Validation Guide',
      slug: 'guides/what-is-an-iban',
      description: 'Comprehensive guide to International Bank Account Numbers and SEPA integration.',
      category: 'Banking Guides',
    },
    {
      title: 'IBAN vs SWIFT/BIC: Key Differences',
      slug: 'guides/iban-vs-swift-bic',
      description: 'Understand account routing versus institution routing for wire transfers.',
      category: 'Banking Guides',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'This guide is compiled for informational assistance. Banking mobile application interfaces and menu structures are updated frequently by individual financial institutions.',
};
