import { IBAN_REGISTRY, type IbanCountrySpec } from './iban-registry';

export interface CountryExtendedMeta {
  code: string;
  enSlug: string;
  deSlug: string;
  enName: string;
  deName: string;
  clearingSystemEn: string;
  clearingSystemDe: string;
  clearingDescEn: string;
  clearingDescDe: string;
  whereToFindEn: string[];
  whereToFindDe: string[];
}

export const TARGET_COUNTRY_METAS: CountryExtendedMeta[] = [
  // === SEPA COUNTRIES (37 entities) ===
  {
    code: 'DE',
    enSlug: 'germany',
    deSlug: 'deutschland',
    enName: 'Germany',
    deName: 'Deutschland',
    clearingSystemEn: 'EMZ / Bundesbank RPS / SEPA Clearer',
    clearingSystemDe: 'Elektronischer Massenzahlungsverkehr (EMZ) & Bundesbank RPS',
    clearingDescEn:
      'German domestic clearing operates via the Bundesbank EMZ clearing service and the Eurosystem TARGET2/TIPS infrastructure for real-time payments.',
    clearingDescDe:
      'Der inländische Zahlungsverkehr in Deutschland wird über den EMZ-Service der Deutschen Bundesbank und das Eurosystem (TARGET2/TIPS) abgewickelt.',
    whereToFindEn: [
      'Printed on the front or back of your physical Girocard (Sparkassen-, Volksbank- or bank debit card)',
      'Displayed in the profile or account settings section of your online banking app (N26, DKB, Commerzbank, etc.)',
      'At the top right of every monthly bank statement (Kontoauszug)',
    ],
    whereToFindDe: [
      'Auf der Vorder- oder Rückseite Ihrer Girocard (Bankkarte)',
      'In den Kontodetails oder im Profil Ihrer Online-Banking-App (N26, DKB, ING, Sparkasse etc.)',
      'Im Kopfbereich jedes offiziellen Kontoauszugs',
    ],
  },
  {
    code: 'AT',
    enSlug: 'austria',
    deSlug: 'oesterreich',
    enName: 'Austria',
    deName: 'Österreich',
    clearingSystemEn: 'PSA Payment Services Austria / STUZZA',
    clearingSystemDe: 'PSA Payment Services Austria & STUZZA Verrechnung',
    clearingDescEn:
      'Austrian interbank clearing is coordinated via PSA Payment Services Austria and the Oesterreichische Nationalbank (OeNB) routing system.',
    clearingDescDe:
      'Österreichische Interbank-Zahlungen laufen über PSA Payment Services Austria und das Clearing-Netzwerk der Oesterreichischen Nationalbank (OeNB).',
    whereToFindEn: [
      'On the back of your Austrian Bankomatkarte / Debit Mastercard',
      'Inside George (Erste Bank / Sparkasse) or your bank’s mobile portal',
      'On physical account confirmation letters and monthly bank statements',
    ],
    whereToFindDe: [
      'Auf der Rückseite Ihrer Bankomatkarte (Debitkarte)',
      'In Ihrer Banking-App (z. B. George bei Erste Bank & Sparkassen, Mein ELBA bei Raiffeisen)',
      'Auf Ihren monatlichen Kontoauszügen',
    ],
  },
  {
    code: 'CH',
    enSlug: 'switzerland',
    deSlug: 'schweiz',
    enName: 'Switzerland',
    deName: 'Schweiz',
    clearingSystemEn: 'SIC (Swiss Interbank Clearing) / SIX Group',
    clearingSystemDe: 'Swiss Interbank Clearing (SIC) / SIX Group',
    clearingDescEn:
      'Swiss Franc and Euro interbank payments are settled in central bank money via the SIC system operated by SIX Group under the supervision of the Swiss National Bank (SNB).',
    clearingDescDe:
      'Interbank-Zahlungen in CHF und EUR werden über das von der SIX Group betriebene SIC-System der Schweizerischen Nationalbank (SNB) verrechnet.',
    whereToFindEn: [
      'Printed on Swiss QR-bills (QR-Rechnung) for incoming creditor accounts',
      'On the back of your PostFinance card, UBS, or Credit Suisse debit card',
      'In the account info tab of your Swiss e-banking dashboard',
    ],
    whereToFindDe: [
      'Auf dem Zahlteil der Schweizer QR-Rechnung',
      'Auf der Rückseite Ihrer PostFinance Card oder Bank-Debitkarte (UBS, ZKB, Raiffeisen)',
      'In den Stammdaten Ihres E-Banking-Portals',
    ],
  },
  {
    code: 'GB',
    enSlug: 'united-kingdom',
    deSlug: 'grossbritannien',
    enName: 'United Kingdom',
    deName: 'Großbritannien',
    clearingSystemEn: 'Faster Payments Service (FPS) / BACS / CHAPS',
    clearingSystemDe: 'Faster Payments (FPS), BACS & CHAPS',
    clearingDescEn:
      'UK domestic payments settle near-instantaneously via Faster Payments (up to £1m) or high-value CHAPS, while cross-border Euro wires route through SEPA and SWIFT.',
    clearingDescDe:
      'Zahlungen im UK laufen sekundenschnell über Faster Payments (FPS) oder BACS; grenzüberschreitende SEPA-Zahlungen werden via ISO 13616 abgewickelt.',
    whereToFindEn: [
      'In your UK banking app (Barclays, Lloyds, NatWest, HSBC, Revolut, Monzo) under "Account Details"',
      'Derived directly from your 6-digit Sort Code and 8-digit Account Number',
      'On printed paper statements sent by your building society or bank',
    ],
    whereToFindDe: [
      'In Ihrer britischen Banking-App (Revolut, Monzo, Barclays, HSBC) unter „Account details“',
      'Abgeleitet aus Ihrem 6-stelligen Sort Code und der 8-stelligen Kontonummer',
      'Auf dem monatlichen Kontoauszug Ihrer Bank',
    ],
  },
  {
    code: 'FR',
    enSlug: 'france',
    deSlug: 'frankreich',
    enName: 'France',
    deName: 'Frankreich',
    clearingSystemEn: 'CORE (FR) / STET / Banque de France',
    clearingSystemDe: 'CORE (STET) / Banque de France',
    clearingDescEn:
      'French interbank automated clearing is handled through the STET platform (CORE system) in conjunction with Banque de France oversight.',
    clearingDescDe:
      'Das französische Interbank-Clearing erfolgt über die hochleistungsfähige STET-Plattform (CORE) unter Aufsicht der Banque de France.',
    whereToFindEn: [
      'On your official RIB document (Relevé d’Identité Bancaire)',
      'On the bottom left of your French chequebook (chéquier)',
      'Inside your mobile banking portal (BNP Paribas, Crédit Agricole, BoursoBank, SG)',
    ],
    whereToFindDe: [
      'Auf Ihrem offiziellen RIB-Dokument (Relevé d’Identité Bancaire)',
      'Unten links auf Formularen Ihres französischen Scheckhefts',
      'In der Banking-App (BNP Paribas, Crédit Agricole, BoursoBank, Société Générale)',
    ],
  },
  {
    code: 'ES',
    enSlug: 'spain',
    deSlug: 'spanien',
    enName: 'Spain',
    deName: 'Spanien',
    clearingSystemEn: 'SNCE (Sistema Nacional de Compensación Electrónica) / Iberpay',
    clearingSystemDe: 'SNCE / Iberpay & Banco de España',
    clearingDescEn:
      'Spanish credit transfers and Bizum instant payments route through Iberpay and the SNCE clearing house governed by Banco de España.',
    clearingDescDe:
      'Spanische Überweisungen und Sofortzahlungen laufen über Iberpay und das SNCE-Clearinghaus unter Aufsicht der Banco de España.',
    whereToFindEn: [
      'On your Spanish bank card (tarjeta de débito) or contract document',
      'Inside the BBVA, Santander, CaixaBank, or Sabadell app under "Consultar IBAN"',
      'On monthly extract statements (extracto bancario)',
    ],
    whereToFindDe: [
      'Auf Ihrer spanischen Bank-Debitkarte oder im Eröffnungsvertrag',
      'In der App von Santander, BBVA, CaixaBank oder Sabadell unter „Consultar IBAN“',
      'Auf dem monatlichen Kontoauszug (Extracto bancario)',
    ],
  },
  {
    code: 'IT',
    enSlug: 'italy',
    deSlug: 'italien',
    enName: 'Italy',
    deName: 'Italien',
    clearingSystemEn: 'BI-COMP / CBI / Banca d’Italia',
    clearingSystemDe: 'BI-COMP & CBI / Banca d’Italia',
    clearingDescEn:
      'Italian domestic transactions settle via the BI-COMP multilateral clearing system and the CBI corporate banking interbank network.',
    clearingDescDe:
      'Italienische Transaktionen werden über das BI-COMP-Clearingsystem und das CBI-Netzwerk der Banca d’Italia abgewickelt.',
    whereToFindEn: [
      'Inside the Intesa Sanpaolo, UniCredit, Poste Italiane, or Fineco mobile banking app',
      'On physical bank cards issued with printed IBAN',
      'In the official estratto conto (bank statement)',
    ],
    whereToFindDe: [
      'In Ihrer Online-Banking-App (Intesa Sanpaolo, UniCredit, Poste Italiane, Fineco)',
      'Auf dem offiziellen Kontoauszug (Estratto conto)',
      'Auf gedruckten Bankbestätigungen',
    ],
  },
  {
    code: 'NL',
    enSlug: 'netherlands',
    deSlug: 'niederlande',
    enName: 'Netherlands',
    deName: 'Niederlande',
    clearingSystemEn: 'Equens (Worldline) / De Nederlandsche Bank (DNB)',
    clearingSystemDe: 'Equens / De Nederlandsche Bank (DNB)',
    clearingDescEn:
      'Dutch bank clearing operates with real-time settlement through equensWorldline and DNB for domestic instant SEPA credit transfers.',
    clearingDescDe:
      'Niederländische Banküberweisungen laufen in Echtzeit über equensWorldline und DNB im SEPA Instant System.',
    whereToFindEn: [
      'Printed clearly on the front of your ING, Rabobank, ABN AMRO, or bunq debit card',
      'At the top of the mobile home screen in Dutch banking apps',
      'On downloadable PDF bank statements',
    ],
    whereToFindDe: [
      'Direkt auf der Vorderseite Ihrer Bankkarte (ING, Rabobank, ABN AMRO, bunq)',
      'Auf der Startseite Ihrer niederländischen Banking-App',
      'Auf herunterladbaren monatlichen PDF-Kontoauszügen',
    ],
  },
  {
    code: 'BE',
    enSlug: 'belgium',
    deSlug: 'belgien',
    enName: 'Belgium',
    deName: 'Belgien',
    clearingSystemEn: 'CEC (Centre d’Échange et de Compensation) / National Bank of Belgium',
    clearingSystemDe: 'CEC / Belgische Nationalbank',
    clearingDescEn:
      'Belgian interbank clearing is coordinated by the Centre for Exchange and Clearing (CEC) supervised by the National Bank of Belgium (NBB).',
    clearingDescDe:
      'Das belgische Clearing wird vom Centre d’Échange et de Compensation (CEC) unter Aufsicht der Nationalbank von Belgien gesteuert.',
    whereToFindEn: [
      'On the front of your Belgian Bancontact / debit card',
      'Inside the KBC Mobile, Belfius, BNP Paribas Fortis, or ING Belgium app',
      'On bank account certificates (attestation bancaire)',
    ],
    whereToFindDe: [
      'Auf der Vorderseite Ihrer Bancontact-Debitkarte',
      'In der App von KBC, Belfius, BNP Paribas Fortis oder ING Belgien',
      'Auf Ihren offiziellen Kontoauszügen',
    ],
  },
  {
    code: 'PL',
    enSlug: 'poland',
    deSlug: 'polen',
    enName: 'Poland',
    deName: 'Polen',
    clearingSystemEn: 'Elixir / Express Elixir / KIR (Krajowa Izba Rozliczeniowa)',
    clearingSystemDe: 'Elixir / Express Elixir & KIR',
    clearingDescEn:
      'Polish domestic PLN transfers clear via the KIR Elixir and real-time Express Elixir networks, while Euro transactions follow SEPA standards.',
    clearingDescDe:
      'Inländische PLN-Zahlungen laufen über Elixir und Express Elixir der KIR; Euro-Zahlungen folgen dem internationalen SEPA-Clearing.',
    whereToFindEn: [
      'Derived from your 26-digit national NRB account number prefixed by "PL"',
      'Inside the PKO BP (iKO), mBank, Santander Polska, or Pekao mobile app',
      'On the monthly wyciąg bankowy (bank statement)',
    ],
    whereToFindDe: [
      'Aus der 26-stelligen polnischen NRB-Kontonummer mit vorangestelltem „PL“',
      'In der mobilen App von PKO BP (iKO), mBank, Santander oder Bank Pekao',
      'Auf dem monatlichen Kontoauszug (Wyciąg bankowy)',
    ],
  },
  {
    code: 'PT',
    enSlug: 'portugal',
    deSlug: 'portugal',
    enName: 'Portugal',
    deName: 'Portugal',
    clearingSystemEn: 'SICOI (Sistema de Compensação Interbancária) / SIBS',
    clearingSystemDe: 'SICOI / SIBS & Banco de Portugal',
    clearingDescEn:
      'Portuguese interbank settlement and MB Way instant payments are operated by SIBS under the regulatory framework of Banco de Portugal.',
    clearingDescDe:
      'Portugiesische Interbank-Zahlungen und MB Way laufen über SIBS unter Aufsicht der Banco de Portugal.',
    whereToFindEn: [
      'On your Portuguese Multibanco bank card or contract sheet',
      'Inside the Millennium bcp, Caixa Geral de Depósitos, or Novobanco app',
      'On the comprovativo de IBAN generated at any Multibanco ATM',
    ],
    whereToFindDe: [
      'Auf Ihrer Multibanco-Bankkarte oder im Kontoeröffnungsvertrag',
      'In der Banking-App von Caixa Geral de Depósitos, Millennium bcp oder Novobanco',
      'Auf dem IBAN-Beleg (Comprovativo de IBAN) jedes Multibanco-Geldautomaten',
    ],
  },
  {
    code: 'IE',
    enSlug: 'ireland',
    deSlug: 'irland',
    enName: 'Ireland',
    deName: 'Irland',
    clearingSystemEn: 'IPCC / Central Bank of Ireland / SEPA',
    clearingSystemDe: 'IPCC & Central Bank of Ireland',
    clearingDescEn:
      'Irish banking transactions clear seamlessly through domestic clearing arrangements and the European SEPA scheme under Central Bank of Ireland rules.',
    clearingDescDe:
      'Irische Banküberweisungen laufen über die SEPA-Clearing-Infrastruktur unter Aufsicht der Central Bank of Ireland.',
    whereToFindEn: [
      'In your AIB, Bank of Ireland, PTSB, or Revolut Ireland account settings',
      'Derived from your 6-digit NSC (National Sort Code) and 8-digit Account Number',
      'On e-statements and formal bank confirmation letters',
    ],
    whereToFindDe: [
      'In den Kontodetails Ihrer Bank-App (AIB, Bank of Ireland, PTSB, Revolut)',
      'Zusammengesetzt aus 6-stelligem Sort Code (NSC) und 8-stelliger Kontonummer',
      'Auf Ihren elektronischen Kontoauszügen',
    ],
  },
  {
    code: 'IT',
    enSlug: 'italy',
    deSlug: 'italien',
    enName: 'Italy',
    deName: 'Italien',
    clearingSystemEn: 'BI-COMP / Banca d’Italia',
    clearingSystemDe: 'BI-COMP / Banca d’Italia',
    clearingDescEn: 'Italian clearing via Banca d’Italia.',
    clearingDescDe: 'Italienisches Clearing über die Banca d’Italia.',
    whereToFindEn: ['Mobile app', 'Bank statement'],
    whereToFindDe: ['Banking-App', 'Kontoauszug'],
  },
  {
    code: 'GR',
    enSlug: 'greece',
    deSlug: 'griechenland',
    enName: 'Greece',
    deName: 'Griechenland',
    clearingSystemEn: 'DIAS (Interbanking Systems S.A.) / Bank of Greece',
    clearingSystemDe: 'DIAS Interbanking Systems & Bank of Greece',
    clearingDescEn:
      'Greek domestic interbank payments and IRIS instant transfers settle via the DIAS interbank payment system.',
    clearingDescDe:
      'Griechische Inlandsüberweisungen und IRIS-Sofortzahlungen werden über das DIAS-Clearingsystem abgewickelt.',
    whereToFindEn: [
      'In your NBG, Eurobank, Alpha Bank, or Piraeus Bank mobile app',
      'On printed statement summaries and account opening documents',
      'On the back of newly issued Greek debit cards',
    ],
    whereToFindDe: [
      'In Ihrer griechischen Banking-App (National Bank of Greece, Eurobank, Alpha Bank, Piraeus)',
      'Auf Kontoeröffnungsdokumenten und Monatsauszügen',
      'Auf der Rückseite neuer Bankkarten',
    ],
  },
  {
    code: 'SE',
    enSlug: 'sweden',
    deSlug: 'schweden',
    enName: 'Sweden',
    deName: 'Schweden',
    clearingSystemEn: 'Bankgirot / RIX (Sveriges Riksbank)',
    clearingSystemDe: 'Bankgirot & RIX / Sveriges Riksbank',
    clearingDescEn:
      'Swedish interbank clearing operates via Bankgirot and the central bank RIX real-time gross settlement system.',
    clearingDescDe:
      'Schwedische Inlandszahlungen laufen über Bankgirot und das RIX-System der Sveriges Riksbank.',
    whereToFindEn: [
      'Inside the Swedbank, SEB, Handelsbanken, or Nordea Sweden app',
      'In the internet banking profile under international payment settings',
      'On formal account statements and tax report certificates',
    ],
    whereToFindDe: [
      'In der Banking-App von Swedbank, SEB, Handelsbanken oder Nordea',
      'Im Online-Banking-Profil unter internationalen Zahlungsdetails',
      'Auf Ihren monatlichen Kontoauszügen',
    ],
  },
  {
    code: 'NO',
    enSlug: 'norway',
    deSlug: 'norwegen',
    enName: 'Norway',
    deName: 'Norwegen',
    clearingSystemEn: 'NICS (Norwegian Interbank Clearing System) / Norges Bank',
    clearingSystemDe: 'NICS / Norges Bank',
    clearingDescEn:
      'Norwegian domestic clearing is managed through NICS and settled at Norges Bank via the NBO settlement engine.',
    clearingDescDe:
      'Norwegische Überweisungen laufen über das NICS-System und werden bei der Norges Bank (NBO) abgewickelt.',
    whereToFindEn: [
      'Derived directly from your 11-digit national account number (Bank ID)',
      'Inside the DNB, Nordea Norway, or SpareBank 1 mobile app',
      'On monthly PDF statements in your online nettbank',
    ],
    whereToFindDe: [
      'Direkt abgeleitet aus der 11-stelligen nationalen Kontonummer',
      'In der Banking-App von DNB, Nordea Norwegen oder SpareBank 1',
      'Auf dem monatlichen Nettbank-Kontoauszug',
    ],
  },
  {
    code: 'DK',
    enSlug: 'denmark',
    deSlug: 'daenemark',
    enName: 'Denmark',
    deName: 'Dänemark',
    clearingSystemEn: 'Straksclearing / Intradagclearing / Danmarks Nationalbank',
    clearingSystemDe: 'Straksclearing & Danmarks Nationalbank',
    clearingDescEn:
      'Danish krone domestic wires clear via Straksclearing for instant payments and Kronos2 at Danmarks Nationalbank.',
    clearingDescDe:
      'Dänische Überweisungen laufen über Straksclearing für Sofortzahlungen und Danmarks Nationalbank.',
    whereToFindEn: [
      'Inside the Danske Bank, Jyske Bank, or Nordea Denmark mobile app',
      'Derived from your 4-digit Reg number (registreringsnummer) and account number',
      'On official Danish kontoudskrift statements',
    ],
    whereToFindDe: [
      'In der Banking-App von Danske Bank, Jyske Bank oder Nordea Dänemark',
      'Zusammengesetzt aus 4-stelliger Registrierungsnummer (Reg. nr.) und Kontonummer',
      'Auf Ihrem offiziellen Kontoauszug (Kontoudskrift)',
    ],
  },
  {
    code: 'FI',
    enSlug: 'finland',
    deSlug: 'finnland',
    enName: 'Finland',
    deName: 'Finnland',
    clearingSystemEn: 'Bank of Finland / STEP2 / TIPS',
    clearingSystemDe: 'Bank of Finland / STEP2 / TIPS',
    clearingDescEn:
      'Finnish payments are fully integrated into pan-European SEPA STEP2 and TIPS real-time settlement rails.',
    clearingDescDe:
      'Finnische Zahlungen laufen vollständig integriert über die europäischen STEP2- und TIPS-Verfahren.',
    whereToFindEn: [
      'Printed on your Finnish debit / credit card',
      'Inside the OP-Pohjola, Nordea Finland, or Danske Bank app',
      'On official tiliote bank statements',
    ],
    whereToFindDe: [
      'Auf Ihrer finnischen Bankkarte (Debitkarte)',
      'In der Banking-App von OP, Nordea Finnland oder Danske Bank',
      'Auf dem offiziellen Monatsauszug (Tiliote)',
    ],
  },
  {
    code: 'CZ',
    enSlug: 'czech-republic',
    deSlug: 'tschechien',
    enName: 'Czech Republic',
    deName: 'Tschechien',
    clearingSystemEn: 'CERTIS / Czech National Bank (ČNB)',
    clearingSystemDe: 'CERTIS / Tschechische Nationalbank (ČNB)',
    clearingDescEn:
      'Czech Koruna payments clear via the CERTIS settlement system operated by the Czech National Bank.',
    clearingDescDe:
      'Zahlungen in tschechischen Kronen (CZK) laufen über das CERTIS-System der Tschechischen Nationalbank.',
    whereToFindEn: [
      'Inside the Česká spořitelna, ČSOB, or Komerční banka app',
      'Converted from national account prefix, number, and 4-digit bank code',
      'On your official výpis z účtu statement',
    ],
    whereToFindDe: [
      'In der Banking-App von Česká spořitelna, ČSOB oder Komerční banka',
      'Aus der nationalen Kontonummer und dem 4-stelligen Bankcode',
      'Auf Ihrem Kontoauszug (Výpis z účtu)',
    ],
  },
  {
    code: 'RO',
    enSlug: 'romania',
    deSlug: 'rumaenien',
    enName: 'Romania',
    deName: 'Rumänien',
    clearingSystemEn: 'ReGIS / SENT / TransFonD / National Bank of Romania',
    clearingSystemDe: 'ReGIS / SENT / TransFonD & BNR',
    clearingDescEn:
      'Romanian leu transfers clear through TransFonD (automated clearing house SENT and real-time ReGIS system).',
    clearingDescDe:
      'Rumänische Überweisungen laufen über TransFonD (Clearinghaus SENT und ReGIS) der Nationalbank von Rumänien.',
    whereToFindEn: [
      'Inside Banca Transilvania (BT Pay), BCR, BRD, or ING Romania app',
      'On your formal extras de cont statement',
      'On salary confirmation certificates requested from your employer',
    ],
    whereToFindDe: [
      'In Ihrer Banking-App (Banca Transilvania, BCR, BRD, ING Rumänien)',
      'Auf Ihrem offiziellen Kontoauszug (Extras de cont)',
      'Auf offiziellen Arbeitgeber-Bankbescheinigungen',
    ],
  },
  {
    code: 'HU',
    enSlug: 'hungary',
    deSlug: 'ungarn',
    enName: 'Hungary',
    deName: 'Ungarn',
    clearingSystemEn: 'BICSKE / GIRO Zrt. / Magyar Nemzeti Bank (MNB)',
    clearingSystemDe: 'GIRO Zrt. & Magyar Nemzeti Bank (MNB)',
    clearingDescEn:
      'Hungarian domestic payments settle in under 5 seconds via the GIRO Instant Payment System (AFR).',
    clearingDescDe:
      'Ungarische Inlandsüberweisungen laufen sekundenschnell über das GIRO-Sofortzahlungssystem (AFR).',
    whereToFindEn: [
      'Inside the OTP Bank, Erste Hungary, or K&H mobile banking app',
      'Derived from your 16- or 24-digit GIRO account number',
      'On monthly számlakivonat bank statements',
    ],
    whereToFindDe: [
      'In der Banking-App von OTP Bank, Erste Ungarn oder K&H',
      'Aus Ihrer 16- oder 24-stelligen nationalen GIRO-Kontonummer',
      'Auf dem monatlichen Kontoauszug (Számlakivonat)',
    ],
  },
  {
    code: 'HR',
    enSlug: 'croatia',
    deSlug: 'kroatien',
    enName: 'Croatia',
    deName: 'Kroatien',
    clearingSystemEn: 'Eurosystem / Croatian National Bank (HNB)',
    clearingSystemDe: 'Eurosystem / Kroatische Nationalbank (HNB)',
    clearingDescEn:
      'Croatia joined the Eurozone in 2023; domestic and cross-border Euro transactions settle via SEPA and TIPS.',
    clearingDescDe:
      'Kroatien gehört seit 2023 zur Eurozone; Zahlungen laufen nahtlos über SEPA und TIPS der HNB.',
    whereToFindEn: [
      'Inside the Zagrebačka banka (Zaba), PBZ, or Erste Croatia app',
      'Printed on your debit card issued by Croatian banks',
      'On monthly bank statement certificates',
    ],
    whereToFindDe: [
      'In Ihrer kroatischen Banking-App (Zagrebačka banka, PBZ, Erste Kroatien)',
      'Auf Ihrer kroatischen Bankkarte',
      'Auf monatlichen Kontoauszügen',
    ],
  },
  {
    code: 'BG',
    enSlug: 'bulgaria',
    deSlug: 'bulgarien',
    enName: 'Bulgaria',
    deName: 'Bulgarien',
    clearingSystemEn: 'BISERA / RINGS / Bulgarian National Bank (BNB)',
    clearingSystemDe: 'BISERA / RINGS & Bulgarische Nationalbank',
    clearingDescEn:
      'Bulgarian Lev and Euro payments settle through BISERA (BORICA) and real-time gross settlement RINGS.',
    clearingDescDe:
      'Bulgarische Zahlungen laufen über BISERA (BORICA) und das RINGS-System der Bulgarischen Nationalbank.',
    whereToFindEn: [
      'Inside the DSK Bank, UniCredit Bulbank, or UBB mobile app',
      'On paper account certificates issued at bank branches',
      'On downloadable monthly electronic statements',
    ],
    whereToFindDe: [
      'In der App von DSK Bank, UniCredit Bulbank oder UBB',
      'Auf Kontoeröffnungszertifikaten der Filiale',
      'Auf monatlichen Kontoauszügen',
    ],
  },
  {
    code: 'SK',
    enSlug: 'slovakia',
    deSlug: 'slowakei',
    enName: 'Slovakia',
    deName: 'Slowakei',
    clearingSystemEn: 'Slovak National Bank (NBS) / SIPS / SEPA',
    clearingSystemDe: 'NBS / SIPS & SEPA System',
    clearingDescEn:
      'Slovakian Euro payments settle via the SIPS interbank system operated by the National Bank of Slovakia.',
    clearingDescDe:
      'Slowakische Euro-Überweisungen laufen über das SIPS-System der Nationalbank der Slowakei (NBS).',
    whereToFindEn: [
      'Inside the Slovenská sporiteľňa, VÚB, or Tatra banka app',
      'Converted from national account prefix and basic account number',
      'On official výpis z účtu statements',
    ],
    whereToFindDe: [
      'In der App von Slovenská sporiteľňa, VÚB oder Tatra banka',
      'Aus der nationalen Kontonummer und Bankleitzahl',
      'Auf Ihrem Monatsauszug (Výpis z účtu)',
    ],
  },
  {
    code: 'SI',
    enSlug: 'slovenia',
    deSlug: 'slowenien',
    enName: 'Slovenia',
    deName: 'Slowenien',
    clearingSystemEn: 'Bank of Slovenia / Bankart / SEPA',
    clearingSystemDe: 'Bank of Slovenia / Bankart',
    clearingDescEn:
      'Slovenian interbank transactions are processed via Bankart and settled through the Bank of Slovenia.',
    clearingDescDe:
      'Slowenische Interbank-Zahlungen laufen über Bankart und die Bank von Slowenien.',
    whereToFindEn: [
      'Inside the NLB Klik, Nova KBM, or SKB mobile app',
      'Printed on your Slovenian debit card',
      'On regular bank extract statements',
    ],
    whereToFindDe: [
      'In Ihrer Banking-App (NLB Klik, Nova KBM, SKB)',
      'Auf Ihrer slowenischen Bank-Debitkarte',
      'Auf dem monatlichen Kontoauszug',
    ],
  },
  {
    code: 'EE',
    enSlug: 'estonia',
    deSlug: 'estland',
    enName: 'Estonia',
    deName: 'Estland',
    clearingSystemEn: 'Bank of Estonia / STEP2 / TIPS',
    clearingSystemDe: 'Bank of Estonia / STEP2 / TIPS',
    clearingDescEn:
      'Estonia operates a fully digital interbank infrastructure connected to Eurosystem TIPS for real-time transfers.',
    clearingDescDe:
      'Estland nutzt eine volldigitale Bankeninfrastruktur mit direkter Anbindung an TIPS und STEP2.',
    whereToFindEn: [
      'Inside the Swedbank Estonia, SEB, LHV, or Coop Pank app',
      'On downloadable digital statements signed with Smart-ID or Mobile-ID',
      'In your bank profile overview',
    ],
    whereToFindDe: [
      'In Ihrer Banking-App (LHV, Swedbank Estland, SEB, Coop Pank)',
      'Auf digitalen Kontoauszügen im Online-Portal',
      'Im Kundenprofil Ihrer Bank',
    ],
  },
  {
    code: 'LV',
    enSlug: 'latvia',
    deSlug: 'lettland',
    enName: 'Latvia',
    deName: 'Lettland',
    clearingSystemEn: 'Bank of Latvia (Latvijas Banka) / EKS',
    clearingSystemDe: 'Latvijas Banka / EKS & TIPS',
    clearingDescEn:
      'Latvian payments clear through the Bank of Latvia electronic clearing system (EKS) and TIPS.',
    clearingDescDe:
      'Lettische Zahlungen laufen über das elektronische Clearingsystem (EKS) der Latvijas Banka und TIPS.',
    whereToFindEn: [
      'Inside Swedbank Latvia, SEB Latvia, Citadele, or Luminor app',
      'On your physical debit card or contract agreement',
      'On monthly PDF bank statements',
    ],
    whereToFindDe: [
      'In der App von Swedbank Lettland, SEB, Citadele oder Luminor',
      'Auf Ihrer Bankkarte oder im Eröffnungsvertrag',
      'Auf monatlichen Kontoauszügen',
    ],
  },
  {
    code: 'LT',
    enSlug: 'lithuania',
    deSlug: 'litauen',
    enName: 'Lithuania',
    deName: 'Litauen',
    clearingSystemEn: 'CENTROlink / Bank of Lithuania',
    clearingSystemDe: 'CENTROlink / Bank of Lithuania',
    clearingDescEn:
      'Lithuania operates the renowned CENTROlink payment system providing instant SEPA gateway access across Europe.',
    clearingDescDe:
      'Litauen betreibt das bekannte CENTROlink-Zahlungssystem der Bank of Lithuania für SEPA-Echtzeitzahlungen.',
    whereToFindEn: [
      'Inside Swedbank Lithuania, SEB, Revolut Bank UAB, or Paysera app',
      'In your mobile account details under "IBAN"',
      'On bank account verification certificates',
    ],
    whereToFindDe: [
      'In Ihrer Banking-App (Revolut Bank UAB, Swedbank Litauen, SEB, Paysera)',
      'In den Kontodetails unter „IBAN“',
      'Auf offiziellen Kontobestätigungen',
    ],
  },
  {
    code: 'LU',
    enSlug: 'luxembourg',
    deSlug: 'luxemburg',
    enName: 'Luxembourg',
    deName: 'Luxemburg',
    clearingSystemEn: 'Banque Centrale du Luxembourg (BCL) / SEPA',
    clearingSystemDe: 'Banque Centrale du Luxembourg (BCL) / SEPA',
    clearingDescEn:
      'Luxembourg domestic and cross-border fund movements settle through BCL and Eurosystem TARGET2/TIPS channels.',
    clearingDescDe:
      'Luxemburgische Zahlungen werden über die Banque Centrale du Luxembourg (BCL) und TARGET2/TIPS verrechnet.',
    whereToFindEn: [
      'Inside the Spuerkeess (BCEE), BGL BNP Paribas, or BIL mobile app',
      'Printed on your Luxembourg bank debit card',
      'On official extrait de compte statements',
    ],
    whereToFindDe: [
      'In der Banking-App von Spuerkeess (BCEE), BGL BNP Paribas oder BIL',
      'Auf Ihrer luxemburgischen Debitkarte',
      'Auf Ihren offiziellen Kontoauszügen (Extrait de compte)',
    ],
  },
  {
    code: 'MT',
    enSlug: 'malta',
    deSlug: 'malta',
    enName: 'Malta',
    deName: 'Malta',
    clearingSystemEn: 'Central Bank of Malta / SEPA',
    clearingSystemDe: 'Central Bank of Malta / SEPA',
    clearingDescEn:
      'Maltese payments operate within the SEPA network with clearing oversight by the Central Bank of Malta.',
    clearingDescDe:
      'Maltesische Überweisungen laufen über das SEPA-Netzwerk unter Aufsicht der Central Bank of Malta.',
    whereToFindEn: [
      'Inside Bank of Valletta (BOV) or HSBC Malta mobile app',
      'On account confirmation certificates',
      'On printed bank statements',
    ],
    whereToFindDe: [
      'In der Banking-App der Bank of Valletta (BOV) oder HSBC Malta',
      'Auf offiziellen Kontobestätigungen',
      'Auf gedruckten Kontoauszügen',
    ],
  },
  {
    code: 'CY',
    enSlug: 'cyprus',
    deSlug: 'zypern',
    enName: 'Cyprus',
    deName: 'Zypern',
    clearingSystemEn: 'Central Bank of Cyprus / JCC Payment Systems',
    clearingSystemDe: 'Central Bank of Cyprus / JCC Payment Systems',
    clearingDescEn:
      'Cypriot domestic transfers clear through JCC Payment Systems and the Central Bank of Cyprus.',
    clearingDescDe:
      'Zypriotische Überweisungen laufen über JCC Payment Systems und die Zentralbank von Zypern.',
    whereToFindEn: [
      'Inside Bank of Cyprus (1bank) or Hellenic Bank app',
      'On your monthly statement of account',
      'On account opening documentation',
    ],
    whereToFindDe: [
      'In der Banking-App der Bank of Cyprus oder Hellenic Bank',
      'Auf Ihrem monatlichen Kontoauszug',
      'Auf Kontoeröffnungsunterlagen',
    ],
  },
  {
    code: 'IS',
    enSlug: 'iceland',
    deSlug: 'island',
    enName: 'Iceland',
    deName: 'Island',
    clearingSystemEn: 'Central Bank of Iceland / Greiðsluveitan',
    clearingSystemDe: 'Central Bank of Iceland / Greiðsluveitan',
    clearingDescEn:
      'Icelandic Krona payments clear through Greiðsluveitan, while Euro payments connect through SEPA.',
    clearingDescDe:
      'Isländische Zahlungen laufen über Greiðsluveitan der Zentralbank von Island sowie über SEPA.',
    whereToFindEn: [
      'Inside Landsbankinn, Arion banki, or Íslandsbanki app',
      'Derived from 4-digit bank identifier, 2-digit ledger, and 6-digit account',
      'On bank statements in your internet bank',
    ],
    whereToFindDe: [
      'In der App von Landsbankinn, Arion banki oder Íslandsbanki',
      'Aus Bankkennung, Kontoführung und Kontonummer',
      'Im Online-Kontoauszug Ihres Internetbankings',
    ],
  },
  {
    code: 'LI',
    enSlug: 'liechtenstein',
    deSlug: 'liechtenstein',
    enName: 'Liechtenstein',
    deName: 'Liechtenstein',
    clearingSystemEn: 'Swiss SIC / SEPA / National Bank of Liechtenstein',
    clearingSystemDe: 'Schweizer SIC & SEPA Verbund',
    clearingDescEn:
      'Liechtenstein banks participate directly in both the Swiss SIC CHF clearing and the European SEPA scheme.',
    clearingDescDe:
      'Banken in Liechtenstein nehmen sowohl am Schweizer SIC (CHF) als auch am europäischen SEPA-System teil.',
    whereToFindEn: [
      'Inside LGT Bank, Liechtensteinische Landesbank (LLB), or VP Bank portal',
      'On official wealth management statements and IBAN letters',
      'On your banking card',
    ],
    whereToFindDe: [
      'Im E-Banking von LGT, LLB (Liechtensteinische Landesbank) oder VP Bank',
      'Auf Ihren offiziellen Vermögens- und Kontoauszügen',
      'Auf Ihrer Bankkarte',
    ],
  },
  {
    code: 'MC',
    enSlug: 'monaco',
    deSlug: 'monaco',
    enName: 'Monaco',
    deName: 'Monaco',
    clearingSystemEn: 'Banque de France / SEPA zone',
    clearingSystemDe: 'Banque de France / SEPA-Raum',
    clearingDescEn:
      'Monaco participates in SEPA under customs and monetary agreements with France and Banque de France.',
    clearingDescDe:
      'Monaco ist über Währungsabkommen mit Frankreich direkt in den SEPA-Raum und Banque de France eingebunden.',
    whereToFindEn: [
      'On your official Monegasque RIB certificate',
      'Inside your private banking portal (CMB Monaco, CFM Indosuez, Barclays Monaco)',
      'On monthly account statements',
    ],
    whereToFindDe: [
      'Auf Ihrem monegassischen RIB-Zertifikat',
      'Im Portal Ihrer Bank (CMB Monaco, CFM Indosuez, Barclays Monaco)',
      'Auf Ihren offiziellen Monatsauszügen',
    ],
  },
  {
    code: 'AD',
    enSlug: 'andorra',
    deSlug: 'andorra',
    enName: 'Andorra',
    deName: 'Andorra',
    clearingSystemEn: 'Andorran Financial Authority (AFA) / SEPA',
    clearingSystemDe: 'Andorran Financial Authority (AFA) & SEPA',
    clearingDescEn:
      'Andorra is an official member of the SEPA area since 2019, settling Euro transfers through European rails.',
    clearingDescDe:
      'Andorra ist seit 2019 Mitglied des SEPA-Raums und wickelt Euro-Überweisungen über SEPA ab.',
    whereToFindEn: [
      'Inside the Andbank, MoraBanc, or Creand Crèdit Andorrà mobile app',
      'On paper account certificates issued by Andorran branches',
      'On official extract statements',
    ],
    whereToFindDe: [
      'In der Banking-App von Andbank, MoraBanc oder Creand',
      'Auf Ihren offiziellen Kontoeröffnungsdokumenten',
      'Auf Ihren monatlichen Auszügen',
    ],
  },
  {
    code: 'SM',
    enSlug: 'san-marino',
    deSlug: 'san-marino',
    enName: 'San Marino',
    deName: 'San Marino',
    clearingSystemEn: 'Central Bank of San Marino (BCSM) / SEPA',
    clearingSystemDe: 'Banca Centrale della Repubblica di San Marino / SEPA',
    clearingDescEn:
      'San Marino banks connect to European payments via SEPA protocols and Italian interbank networks.',
    clearingDescDe:
      'San-marinesische Banken sind über SEPA und italienische Verrechnungsnetze angebunden.',
    whereToFindEn: [
      'Inside Cassa di Risparmio della Repubblica di San Marino (CRSM) or BKN301 app',
      'On bank statements and account certificates',
    ],
    whereToFindDe: [
      'In der Banking-App der san-marinesischen Banken (z. B. CRSM, BKN301)',
      'Auf Ihren offiziellen Kontoauszügen',
    ],
  },
  {
    code: 'VA',
    enSlug: 'vatican-city',
    deSlug: 'vatikanstadt',
    enName: 'Vatican City',
    deName: 'Vatikanstadt',
    clearingSystemEn: 'IOR (Institute for the Works of Religion) / SEPA',
    clearingSystemDe: 'IOR (Istituto per le Opere di Religione) & SEPA',
    clearingDescEn:
      'The Holy See and Vatican City State joined the SEPA scheme in 2019 via the IOR financial institute.',
    clearingDescDe:
      'Der Vatikanstaat ist seit 2019 über das IOR Mitglied im SEPA-Zahlungsraum.',
    whereToFindEn: [
      'On official IOR account certificates and statements',
      'In direct institutional correspondence with the IOR',
    ],
    whereToFindDe: [
      'Auf offiziellen IOR-Kontodokumenten und Bescheinigungen',
      'In institutionellen Unterlagen des Vatikans',
    ],
  },
  {
    code: 'GI',
    enSlug: 'gibraltar',
    deSlug: 'gibraltar',
    enName: 'Gibraltar',
    deName: 'Gibraltar',
    clearingSystemEn: 'Gibraltar Clearing / UK Faster Payments / SEPA',
    clearingSystemDe: 'Gibraltar Clearing, Faster Payments & SEPA',
    clearingDescEn:
      'Gibraltar participates in SEPA and connects to the UK clearing network for sterling payments.',
    clearingDescDe:
      'Gibraltar ist SEPA-Teilnehmer und für GBP-Zahlungen an das britische Clearingnetzwerk angebunden.',
    whereToFindEn: [
      'Inside Gibraltar International Bank or trusted banking app',
      'On monthly bank statement certificates',
    ],
    whereToFindDe: [
      'In Ihrer Banking-App (Gibraltar International Bank u. a.)',
      'Auf Ihren offiziellen Kontoauszügen',
    ],
  },

  // === ADDITIONAL TARGET COUNTRIES (UAE, Saudi Arabia, Turkey, Pakistan, Egypt, Qatar) ===
  {
    code: 'AE',
    enSlug: 'united-arab-emirates',
    deSlug: 'vereinigte-arabische-emirate',
    enName: 'United Arab Emirates',
    deName: 'Vereinigte Arabische Emirate',
    clearingSystemEn: 'UAEFTS (UAE Funds Transfer System) / Central Bank of the UAE',
    clearingSystemDe: 'UAEFTS / Zentralbank der VAE',
    clearingDescEn:
      'AED funds settle in real-time through the UAE Funds Transfer System (UAEFTS) operated by the Central Bank of the UAE.',
    clearingDescDe:
      'Überweisungen in VAE-Dirham (AED) laufen in Echtzeit über das UAEFTS-System der Zentralbank der VAE.',
    whereToFindEn: [
      'Inside your Emirates NBD, ADCB, FAB (First Abu Dhabi Bank), or Mashreq app',
      'On monthly electronic e-statements sent via email',
      'Printed on your debit card or account opening certificate',
    ],
    whereToFindDe: [
      'In der Banking-App von Emirates NBD, ADCB, FAB oder Mashreq',
      'Auf Ihren monatlichen E-Statements der Bank',
      'Auf offiziellen Kontoeröffnungszertifikaten',
    ],
  },
  {
    code: 'SA',
    enSlug: 'saudi-arabia',
    deSlug: 'saudi-arabien',
    enName: 'Saudi Arabia',
    deName: 'Saudi-Arabien',
    clearingSystemEn: 'SARIE (Saudi Arabian Riyal Interbank Express) / Saudi Central Bank (SAMA)',
    clearingSystemDe: 'SARIE / Saudi Central Bank (SAMA)',
    clearingDescEn:
      'Saudi domestic wires clear in real-time through the SARIE payment network supervised by SAMA.',
    clearingDescDe:
      'Überweisungen in Saudi-Riyal laufen in Echtzeit über das SARIE-System unter Aufsicht der SAMA.',
    whereToFindEn: [
      'Inside the Al Rajhi Bank, SNB (AlAhli), Riyad Bank, or Alinma app',
      'Displayed on the home dashboard under your mada account card',
      'On official bank statement PDFs',
    ],
    whereToFindDe: [
      'In der Banking-App von Al Rajhi Bank, SNB (AlAhli), Riyad Bank oder Alinma',
      'Auf der Übersichtskarte Ihres mada-Kontos',
      'Auf monatlichen PDF-Kontoauszügen',
    ],
  },
  {
    code: 'TR',
    enSlug: 'turkey',
    deSlug: 'tuerkei',
    enName: 'Turkey',
    deName: 'Türkei',
    clearingSystemEn: 'EFT / FAST (Instant and Continuous Transfer) / Central Bank of Turkey (CBRT)',
    clearingSystemDe: 'EFT & FAST / Zentralbank der Republik Türkei (TCMB)',
    clearingDescEn:
      'Turkish Lira domestic payments clear instantly 24/7 through the FAST network and EFT systems operated by the Central Bank of the Republic of Turkey.',
    clearingDescDe:
      'Überweisungen in Türkischer Lira laufen rund um die Uhr in Echtzeit über das FAST-Netzwerk und das EFT-System der TCMB.',
    whereToFindEn: [
      'Prominently displayed on the main home screen of the Ziraat, İşbank, Garanti BBVA, or Yapı Kredi mobile app',
      'On the back or front of your Bankamatik / debit card',
      'On the official hesap cüzdanı (passbook) or monthly hesap özeti (statement)',
    ],
    whereToFindDe: [
      'Auf der Startseite Ihrer Banking-App (Ziraat Bankası, İşbank, Garanti BBVA, Yapı Kredi)',
      'Auf Ihrer Bankamatik-Debitkarte',
      'Auf dem monatlichen Kontoauszug (Hesap özeti)',
    ],
  },
  {
    code: 'PK',
    enSlug: 'pakistan',
    deSlug: 'pakistan',
    enName: 'Pakistan',
    deName: 'Pakistan',
    clearingSystemEn: 'Raast / 1LINK / State Bank of Pakistan (SBP)',
    clearingSystemDe: 'Raast & 1LINK / State Bank of Pakistan (SBP)',
    clearingDescEn:
      'Pakistani rupee interbank transfers clear in real-time via the State Bank of Pakistan’s instant payment system Raast and the 1LINK switch.',
    clearingDescDe:
      'Pakistanische Interbank-Zahlungen laufen in Echtzeit über das Raast-System der State Bank of Pakistan und das 1LINK-Netzwerk.',
    whereToFindEn: [
      'Inside the HBL Mobile, Meezan Bank, UBL Digital, or MCB Live app under "My Accounts"',
      'On printed chequebook leaves and bank statement summaries',
      'On official IBAN certificates issued at your branch',
    ],
    whereToFindDe: [
      'In der Banking-App von HBL, Meezan Bank, UBL oder MCB unter „My Accounts“',
      'Auf Ihren Scheckheftblättern und Monatsauszügen',
      'Auf offiziellen IBAN-Bescheinigungen Ihrer Filiale',
    ],
  },
  {
    code: 'EG',
    enSlug: 'egypt',
    deSlug: 'aegypten',
    enName: 'Egypt',
    deName: 'Ägypten',
    clearingSystemEn: 'IPN (InstaPay) / RTGS / Central Bank of Egypt (CBE)',
    clearingSystemDe: 'IPN (InstaPay) & RTGS / Central Bank of Egypt (CBE)',
    clearingDescEn:
      'Egyptian Pound domestic transfers clear via the Instant Payment Network (InstaPay) and the Central Bank of Egypt RTGS platform.',
    clearingDescDe:
      'Inländische Zahlungen in Ägyptischen Pfund laufen über das Instant Payment Network (InstaPay) und das RTGS-System der CBE.',
    whereToFindEn: [
      'Inside the National Bank of Egypt (NBE Mobile), CIB, or Banque Misr app',
      'Derived from your 12-digit account number prefixed with EG and check digits',
      'On monthly paper or electronic bank statements',
    ],
    whereToFindDe: [
      'In der Banking-App der National Bank of Egypt (NBE), CIB oder Banque Misr',
      'Zusammengesetzt aus Ländercode EG, Prüfziffern und nationaler Kontonummer',
      'Auf Ihren offiziellen Kontoauszügen',
    ],
  },
  {
    code: 'QA',
    enSlug: 'qatar',
    deSlug: 'katar',
    enName: 'Qatar',
    deName: 'Katar',
    clearingSystemEn: 'QATCH (Qatar Central Automated Clearing House) / QCB',
    clearingSystemDe: 'QATCH / Qatar Central Bank (QCB)',
    clearingDescEn:
      'Qatari Riyal payments settle through QATCH and the real-time gross settlement engine at Qatar Central Bank.',
    clearingDescDe:
      'Zahlungen in Katar-Riyal laufen über das QATCH-Clearingsystem der Qatar Central Bank.',
    whereToFindEn: [
      'Inside the QNB (Qatar National Bank), CBQ, or Dukhan Bank mobile app',
      'On the official account certificate (IBAN letter)',
      'On printed periodic bank statements',
    ],
    whereToFindDe: [
      'In der Banking-App von QNB (Qatar National Bank), CBQ oder Dukhan Bank',
      'Auf Ihrem offiziellen IBAN-Zertifikat der Bank',
      'Auf regelmäßigen Kontoauszügen',
    ],
  },
];

// Slugs index maps
const EN_SLUG_MAP = new Map<string, CountryExtendedMeta>();
const DE_SLUG_MAP = new Map<string, CountryExtendedMeta>();
const CODE_MAP = new Map<string, CountryExtendedMeta>();

for (const meta of TARGET_COUNTRY_METAS) {
  EN_SLUG_MAP.set(meta.enSlug.toLowerCase(), meta);
  EN_SLUG_MAP.set(meta.code.toLowerCase(), meta); // fallback by code (e.g. 'de')
  DE_SLUG_MAP.set(meta.deSlug.toLowerCase(), meta);
  DE_SLUG_MAP.set(meta.code.toLowerCase(), meta); // fallback by code
  CODE_MAP.set(meta.code.toUpperCase(), meta);
}

export function getCountryMetaBySlugEn(slug: string): CountryExtendedMeta | null {
  if (!slug) return null;
  return EN_SLUG_MAP.get(slug.toLowerCase().trim()) || null;
}

export function getCountryMetaBySlugDe(slug: string): CountryExtendedMeta | null {
  if (!slug) return null;
  return DE_SLUG_MAP.get(slug.toLowerCase().trim()) || null;
}

export function getCountryMetaByCode(code: string): CountryExtendedMeta | null {
  if (!code) return null;
  return CODE_MAP.get(code.toUpperCase().trim()) || null;
}

export function getAllCountrySlugsEn(): string[] {
  return TARGET_COUNTRY_METAS.map((m) => m.enSlug);
}

export function getAllCountrySlugsDe(): string[] {
  return TARGET_COUNTRY_METAS.map((m) => m.deSlug);
}
