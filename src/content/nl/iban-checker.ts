import { PageContent } from '../types';

export const ibanCheckerNl: PageContent = {
  metaTitle: 'IBAN Checker 2026 | Controleer elk IBAN-nummer online',
  metaDescription:
    'Controleer direct de geldigheid van een Nederlands of buitenlands IBAN. Mod-97 checksum ISO 13616, bankcode van DNB, BIC/SWIFT en SEPA-validatie gratis.',
  h1: 'IBAN Checker en Rekeningnummer Validator 2026',
  quickAnswer:
    'De validatie van een IBAN (International Bank Account Number) verloopt in drie vaste stappen: controle van de landspecifieke lengte (18 tekens voor Nederland), verplaatsing van de eerste vier tekens naar het einde, conversie van letters naar cijfers (A=10 tot Z=35) en berekening van de modulo-97 rest volgens ISO 13616. Een geldig IBAN levert altijd een rest op van exact 1.',
  howItWorks: [
    {
      label: 'Controle van landcode en lengte',
      formula: 'Lengte(IBAN) == 18 (voor NL) && Regex(Alfanumeriek)',
      ruleCitation: 'ISO 13616-1:2020 / Voorschriften Betaalvereniging Nederland',
      effectiveDate: 'Verplichte bancaire standaard in Nederland in 2026',
    },
    {
      label: 'Karakterverplaatsing (Permutatie)',
      formula: 'OmgezetteString = BBAN + "NL" + 2_ControleCijfers',
      ruleCitation: 'ISO 13616-1 Artikel 5.2 (Permutatievoorschrift)',
      effectiveDate: 'Universele regel binnen alle interbancaire betalingssystemen',
    },
    {
      label: 'Berekening van het ISO 7064 Mod-97-10 controlegetal',
      formula: 'NumeriekeString mod 97 == 1 (N=23, L=21)',
      ruleCitation: 'ISO/IEC 7064:2003 (Controlekaraktersystemen MOD 97-10)',
      effectiveDate: 'Wiskundig algoritme ter voorkoming van overboekfouten',
    },
    {
      label: 'Bankidentificatie en elfproef (11-proof)',
      formula: 'Bankcode(4 letters) register DNB + 11-proef op rekeningnummer',
      ruleCitation: 'De Nederlandsche Bank (DNB) & Betaalvereniging Nederland',
      effectiveDate: 'Nationale controle op Nederlandse bankrekeningnummers',
    },
  ],
  articleSections: [
    {
      id: 'wat-is-een-iban-in-nederland',
      title: 'Wat is een IBAN en hoe werkt het in Nederland?',
      level: 2,
      content:
        'Het International Bank Account Number (IBAN) is een internationaal overeengekomen nummeringssysteem voor bankrekeningen, ontworpen door de International Organization for Standardization (ISO 13616) en het European Committee for Banking Standards (ECBS). Het primaire doel van het IBAN is het stroomlijnen van grensoverschrijdende betalingen en het elimineren van typefouten bij overboekingen tussen verschillende banken.\n\nIn Nederland is het IBAN sinds 2014 de officiële wettelijke standaard voor alle girale betalingen ter vervanging van de traditionele 9- of 10-cijferige rekeningnummers. Waar vroeger uitsluitend het lokale rekeningnummer werd doorgegeven, bevat het Nederlandse IBAN tegenwoordig 18 alfanumerieke tekens. Hierin zijn de landcode (`NL`), twee controlecijfers, een vierletterige bankcode en het oorspronkelijke rekeningnummer (aangevuld met voorloopnullen) naadloos samengevoegd. Dit zorgt ervoor dat betaalopdrachten via internetbankieren, mobiele bankapps en pinbetalingen direct en foutloos geautomatiseerd worden verwerkt door clearinginstellingen zoals equensWorldline en De Nederlandsche Bank.',
    },
    {
      id: 'hoe-werkt-het-mod-97-algoritme',
      title: 'Hoe het wiskundige Mod-97 algoritme (ISO 7064) stap voor stap werkt',
      level: 2,
      content:
        'De kernbeveiliging van elk IBAN-nummer is het ISO 7064 Modulo 97-10 controle-algoritme. Dit wiskundige mechanisme herkent meer dan 99,99% van alle invoerfouten, waaronder omgewisselde cijfers en overtypblunders:\n\n1. **Lengtecontrole**: De validatietool controleert eerst of het aantal karakters exact overeenkomt met de officiële landsnorm. Een Nederlands IBAN telt altijd precies 18 tekens, een Belgisch IBAN 16, een Duits IBAN 22 en een Frans IBAN 27 tekens.\n\n2. **De eerste 4 tekens verplaatsen**: De eerste vier tekens van het nummer (het landkruisel `NL` en de twee controlecijfers, bijvoorbeeld `NL91`) worden losgemaakt van de voorzijde en aan het einde van de reeks geplaatst. Het IBAN `NL91 ABNA 0417 1643 00` wordt omgezet naar `ABNA0417164300NL91`.\n\n3. **Letters vervangen door cijfers**: Alle letters worden systematisch vervangen door tweecijferige getallen volgens hun positie in het alfabet (A=10, B=11 ... Z=35). Voor Nederland wordt `N` omgezet in `23` en `L` in `21`. De vierletterige bankcode `ABNA` wordt respectievelijk `10112310`. Het resultaat is een gigantisch getal van meer dan 20 cijfers.\n\n4. **Modulo 97 deling**: Dit enorme getal wordt via modulaire rekenkunde gedeeld door 97. Als en slechts als de wiskundige rest van deze deling exact 1 bedraagt, is het IBAN gegarandeerd vrij van typfouten en formeel geldig.',
    },
    {
      id: 'opbouw-van-een-nederlands-iban',
      title: 'De opbouw van een Nederlands IBAN: Bankcode, rekeningnummer en de elfproef',
      level: 2,
      content:
        'Een Nederlands IBAN kent een strakke indeling van precies 18 alfanumerieke tekens:\n\n- **Positie 1–2 (Landcode)**: `NL` voor Nederland conform ISO 3166-1 alpha-2.\n- **Positie 3–4 (Controlecijfers)**: Twee cijfers berekend met het Modulo-97 algoritme (ISO 7064).\n- **Positie 5–8 (Bankcode - 4 letters)**: Een vierletterige afkorting die de specifieke bank identificeert bij De Nederlandsche Bank (DNB). Veelvoorkomende bankcodes zijn: `INGB` (ING Bank), `RABO` (Rabobank), `ABNA` (ABN AMRO), `SNSB` (SNS Bank / De Volksbank), `ASNB` (ASN Bank), `TRIO` (Triodos Bank), `KNAB` (Knab), `BUNQ` (bunq), `NWBK` (Nederlandse Waterschapsbank).\n- **Positie 9–18 (Rekeningnummer - 10 cijfers)**: Het traditionele rekeningnummer van de klant. Bestond het oorspronkelijke nummer uit minder dan 10 cijfers, dan wordt het aan de voorzijde aangevuld met nullen (bijvoorbeeld `0417164300`).\n\n### De historische elfproef (Modulo 11):\nVeel Nederlandse banken (waaronder ABN AMRO en Rabobank) hanteren op het 9- of 10-cijferige rekeningnummer de bekende «elfproef». Hierbij worden de posities gewogen vermenigvuldigd met aflopende factoren van 10 tot 1; de som van deze producten moet exact deelbaar zijn door 11. Een uitzondering hierop vormen voormalige Postbank-rekeningnummers bij ING (de bekende «gironummers» met maximaal 7 cijfers), die een ander intern controlesysteem gebruikten.',
    },
    {
      id: 'sepa-instant-payments-en-swift',
      title: 'SEPA-overschrijvingen, Instant Payments, iDEAL en internationale SWIFT-transacties',
      level: 2,
      content:
        'Het gebruik van uw IBAN verschilt naargelang de betaalmethode en het bestemmingsland:\n\n- **SEPA-zone (Single Euro Payments Area)**: Binnen de 36 Europese SEPA-landen geldt de Europese wetgeving (Verordening EU nr. 260/2012) met de «IBAN Only»-regel. Banken mogen bij overboekingen in euro’s binnen het SEPA-gebied geen BIC/SWIFT-code meer verplichten; het opgeven van het IBAN is wettelijk voldoende.\n- **Instant Payments (Flitsoverboekingen)**: In Nederland worden vrijwel alle particuliere en zakelijke overboekingen tussen deelnemende Nederlandse banken automatisch binnen enkele seconden verwerkt, 24 uur per dag en 365 dagen per jaar. De nieuwe Europese Instant Payments-verordening verplicht alle Europese banken om deze flitsbetalingen zonder extra opslag aan te bieden.\n- **iDEAL en Wero**: Bij online betalingen via iDEAL (en diens Europese opvolger Wero) vormt uw IBAN de achterliggende verrekenrekening die de transactie via uw bankapp autoriseert.\n- **Buitenlandse overboekingen via SWIFT**: Voor transacties buiten Europa of in vreemde valuta (zoals USD of GBP) heeft u naast het IBAN nog steeds de 8- of 11-cijferige BIC/SWIFT-code van de ontvangende bank nodig om de betaling via het internationale correspondentnetwerk te geleiden.',
    },
    {
      id: 'voorkomen-van-fouten-en-fraude',
      title: 'Veelvoorkomende fouten, SurePay IBAN-Naam Check en SEPA-stornering',
      level: 2,
      content:
        'Om financiële missers en oplichting te voorkomen, adviseert de bancaire sector de volgende voorzorgsmaatregelen:\n\n- **IBAN-Naam Check**: In Nederland bieden vrijwel alle banken bij internetbankieren de automatische IBAN-Naam Check (ontwikkeld door SurePay). Als de door u ingevoerde naam afwijkt van de naam die bij de bank geregistreerd staat, krijgt u direct een waarschuwing op uw scherm, wat verkeerde overboekingen drastisch verkleint.\n- **Wiskundige geldigheid versus actieve rekening**: Een succesvolle controle met onze tool bevestigt dat het nummer mathematisch klopt en aan een legitieme bank toebehoort. Onze tool kan echter niet inzien of de rekening momenteel actief is of dat er beslag op is gelegd.\n- **Factuurfraude (spookfacturen)**: Criminelen onderscheppen soms facturen van vertrouwde bedrijven en passen het IBAN-nummer aan. Controleer bij gewijzigde bankgegevens altijd telefonisch met uw vaste contactpersoon of het rekeningnummer daadwerkelijk is gewijzigd voordat u grote bedragen overmaakt.\n- **SEPA-incasso en storneren**: Voor automatische incasso’s via uw IBAN heeft u als consument 8 weken het recht om het bedrag zonder opgaaf van reden terug te boeken («storneren»). Bij ongeoorloofde incasso zonder geldig mandaat bedraagt deze termijn zelfs 13 maanden via de Melding Onterechte Incasso (MOI).\n- **Periodieke controle van vaste tegenrekeningen**: Loop periodiek uw lijst met opgeslagen tegenrekeningen na in uw bankieren-app om oude en niet meer gebruikte IBAN-nummers tijdig te verwijderen.',
    },
  ],
  examples: [
    {
      title: 'Voorbeeld 1: Validatie van een ING Bank IBAN',
      scenario:
        'Een ondernemer controleert de geldigheid van het rekeningnummer NL91 INGB 0001 2345 67 alvorens een zakelijke betaling te verrichten.',
      calculationType: 'custom',
      customFields: [
        { label: 'Ingevoerd IBAN', value: 'NL91 INGB 0001 2345 67' },
        { label: 'Land en lengte', value: 'Nederland (NL) — 18 tekens' },
        { label: 'Bankcode', value: 'INGB (ING Bank N.V.)' },
        { label: 'Rekeningnummer', value: '0001234567' },
        { label: 'Omgezette string', value: 'INGB0001234567NL91' },
        { label: 'Numerieke waarde (N=23, L=21)', value: '182316110001234567232191' },
        { label: 'Modulo-97 rest', value: '1 (Geldig controlegetal)', highlight: true },
        { label: 'SEPA-status', value: 'Geschikt voor SEPA en Instant Payments' },
      ],
      explanation:
        'De checker verplaatst NL91 naar het einde, converteert de letters INGB en NL naar getallen en deelt het geheel door 97. Omdat de rest exact 1 bedraagt, is het rekeningnummer mathematisch foutloos.',
    },
    {
      title: 'Voorbeeld 2: Validatie van een Rabobank IBAN',
      scenario:
        'Controle van een Nederlands Rabobank-rekeningnummer met het IBAN NL02 RABO 0123 4567 89.',
      calculationType: 'custom',
      customFields: [
        { label: 'Ingevoerd IBAN', value: 'NL02 RABO 0123 4567 89' },
        { label: 'Land en lengte', value: 'Nederland (NL) — 18 tekens' },
        { label: 'Bankinstelling', value: 'RABO (Coöperatieve Rabobank U.A.)' },
        { label: 'Controlecijfers', value: '02' },
        { label: 'Rekeningnummer', value: '0123456789' },
        { label: 'Modulo-97 uitkomst', value: '1 (Succesvol gevalideerd)', highlight: true },
        { label: 'BIC / SWIFT-code', value: 'RABONL2U' },
      ],
      explanation:
        'Het systeem bevestigt de correcte lengte van 18 tekens, koppelt de code RABO aan de Rabobank en verifieert dat de controlecijfers 02 voldoen aan de ISO-norm.',
    },
  ],
  faqs: [
    {
      q: 'Wat betekent de afkorting IBAN?',
      a: 'IBAN staat voor «International Bank Account Number». Het is een internationale standaard voor bankrekeningnummers die fouten voorkomt en overboekingen binnen en buiten Europa versnelt.',
    },
    {
      q: 'Uit hoeveel tekens bestaat een Nederlands IBAN?',
      a: 'Een Nederlands IBAN bestaat altijd uit exact 18 tekens: de landcode NL, 2 controlecijfers, een vierletterige bankcode en een tiencijferig rekeningnummer.',
    },
    {
      q: 'Is het veilig om een IBAN op deze website te controleren?',
      a: 'Ja, 100% veilig. Alle validatieberekeningen worden lokaal in uw eigen browser uitgevoerd met JavaScript. Uw bankgegevens worden nooit verzonden of opgeslagen.',
    },
    {
      q: 'Hoe weet ik welke bank bij een Nederlands IBAN hoort?',
      a: 'De 4 letters op positie 5 tot en met 8 geven de bank aan. Zo staat INGB voor ING Bank, RABO voor Rabobank, ABNA voor ABN AMRO en SNSB voor SNS Bank.',
    },
    {
      q: 'Kan een wiskundig geldig IBAN toch een foute overboeking opleveren?',
      a: 'Ja. De wiskundige controle bevestigt dat het nummer aan alle formele eisen voldoet, maar kan niet zien of de rekening recent is opgeheven of op naam staat van de juiste ontvanger.',
    },
    {
      q: 'Waar kan ik mijn eigen IBAN vinden?',
      a: 'Uw IBAN staat op de voor- of achterzijde van uw bankpas, op uw bankafschriften en in de mobiel bankieren app of internetbankieromgeving van uw bank.',
    },
    {
      q: 'Wat is het verschil tussen een IBAN en een BIC / SWIFT-code?',
      a: 'Het IBAN identificeert uw persoonlijke bankrekening. De BIC/SWIFT-code identificeert de bank zelf binnen het internationale betalingsverkeer.',
    },
    {
      q: 'Kan ik meerdere IBAN-nummers tegelijk controleren?',
      a: 'Ja, onze tool biedt bulkvalidatie voor maximaal 50 IBAN-nummers tegelijk. Plak eenvoudig een lijst met één nummer per regel voor een compleet overzicht.',
    },
    {
      q: 'Is een BIC-code nodig voor een betaling binnen Nederland of de EU?',
      a: 'Nee. Dankzij de Europese «IBAN Only»-regelgeving binnen het SEPA-gebied is het opgeven van het IBAN voldoende voor overschrijvingen in euro\'s.',
    },
  ],
  sources: [
    {
      label: 'De Nederlandsche Bank (DNB): Betalingsverkeer en standaarden',
      url: 'https://www.dnb.nl/betalingsverkeer/',
    },
    {
      label: 'Betaalvereniging Nederland: Richtlijnen en IBAN-standaarden',
      url: 'https://www.betaalvereniging.nl',
    },
    {
      label: 'Europese Centrale Bank (ECB): SEPA-regelgeving',
      url: 'https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.nl.html',
    },
    {
      label: 'SWIFT: Officieel internationaal register van IBAN-formaten',
      url: 'https://www.swift.com/standards/data-standards/iban',
    },
  ],
  relatedTools: [
    {
      title: 'BIC / SWIFT Code Checker',
      slug: 'bic-swift-checker',
      description: 'Controleer internationale 8- en 11-cijferige bankidentificatiecodes volgens ISO 9362.',
      category: 'Bankieren',
    },
    {
      title: 'Europese Btw-calculator',
      slug: 'vat-calculator',
      description: 'Bereken eenvoudig 21% en 9% btw voor facturen en buitenlandse handel in de EU.',
      category: 'Belastingen & Btw',
    },
    {
      title: 'Duitse MwSt-calculator',
      slug: 'de/mwst-rechner',
      description: 'Bereken de Duitse omzetbelasting van 19% en 7% voor grensoverschrijdend zakendoen.',
      category: 'Belastingen & Btw',
    },
  ],
  relatedGuides: [
    {
      title: 'Wat is een IBAN? Alles over internationale bankrekeningnummers',
      slug: 'guides/what-is-an-iban',
      description: 'Lees alles over de ontstaansgeschiedenis, opbouw en veiligheid van het IBAN.',
      category: 'Bankieren',
    },
    {
      title: 'IBAN versus SWIFT / BIC: Wanneer gebruikt u welk nummer?',
      slug: 'guides/iban-vs-swift-bic',
      description: 'De belangrijkste verschillen bij SEPA- en wereldwijde overschrijvingen op een rij.',
      category: 'Bankieren',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Deze IBAN-validatietool is uitsluitend bedoeld voor informatieve doeleinden en als eerste controle. Hoewel de controle streng voldoet aan de internationale ISO 13616-normen en DNB-specificaties, kan de tool de actuele status van de bankrekening of de tenaamstelling niet garanderen. Verifieer bij twijfel altijd vooraf de gegevens bij uw eigen bank of de ontvanger.',
};
