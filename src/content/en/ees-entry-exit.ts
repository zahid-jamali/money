import { PageContent } from '../types';

export const eesEntryExitEn: PageContent = {
  metaTitle: 'EU Entry/Exit System (EES) Explained | Biometric Border Rules',
  metaDescription:
    'Complete guide to the EU Entry/Exit System (EES). Learn how biometric kiosks, fingerprints, and digital logs replace passport stamping for non-EU travelers.',
  h1: 'EU Entry/Exit System (EES): Biometric Border Kiosks & Rules',
  quickAnswer:
    'The Entry/Exit System (EES) is the European Union’s automated digital border management infrastructure for non-EU travelers crossing Schengen external borders. Governed by Regulation (EU) 2017/2226, EES permanently replaces physical ink passport stamps with biometric self-service kiosks collecting four fingerprints and a facial scan, recording exact entry/exit timestamps to automatically calculate the 90/180-day allowance.',
  howItWorks: [
    {
      label: 'Governing EU Legislation',
      formula: 'Regulation (EU) 2017/2226 of the European Parliament and of the Council',
      ruleCitation: 'OJ L 327, 9.12.2017, p. 20–82',
      effectiveDate: 'Enacted 2017; Progressive Deployment',
    },
    {
      label: 'Biometric Identifier Collection',
      formula: 'Live Facial Recognition Image + Four Fingerprints (right index, middle, ring, little)',
      ruleCitation: 'Article 16, Regulation (EU) 2017/2226',
      effectiveDate: 'Initial External Border Registration',
    },
    {
      label: 'Passport Stamping Abolition',
      formula: 'Digital electronic logs completely supersede physical ink stamping',
      ruleCitation: 'Article 21, Regulation (EU) 2017/2226',
      effectiveDate: 'Universal External Border Application',
    },
    {
      label: 'Automated Overstay Calculation',
      formula: 'Central algorithmic tracking against Schengen 90/180-day threshold',
      ruleCitation: 'Article 11 & 12, Regulation (EU) 2017/2226',
      effectiveDate: 'Real-time Border & Police Notification',
    },
  ],
  articleSections: [
    {
      id: 'what-is-the-ees',
      title: 'What is the EU Entry/Exit System (EES)?',
      level: 2,
      content: `The Entry/Exit System (EES) represents the most significant overhaul of European border infrastructure since the signing of the original Schengen Agreement in 1985. Established under Regulation (EU) 2017/2226 and operated by eu-LISA, the EES is a high-security, interconnected IT database that automatically monitors the entry, exit, and entry refusal of non-EU nationals at all air, land, and sea border checkpoints across 29 Schengen member countries.

Historically, border officials verified compliance with the 90/180-day rule through visual inspection of physical ink stamps stamped onto the paper pages of passports. This manual process was notoriously prone to human calculation errors, deciphering difficulties caused by faint or overlapping ink stamps, and inability to track travelers who intentionally or inadvertently used multiple travel documents.

Under the EES, physical passport stamps are eliminated entirely. In their place, an automated digital ledger registers the exact traveler identity, biometric profile, passport details, entry point, date, and time. This data is instantly shared across all 29 member states, enabling instantaneous algorithmic tracking of every traveler's remaining legal stay.`,
    },
    {
      id: 'biometric-data-collection',
      title: 'How Biometric Registration Works at Border Kiosks',
      level: 2,
      content: `When a non-EU traveler crosses an external Schengen border for the first time following EES activation, they undergo an initial registration process at dedicated automated self-service kiosks or with a border control officer:

1. Facial Biometric Scan:
A digital camera captures a high-resolution, live facial image to verify biometric identity against the photographic chip embedded in the traveler's e-Passport.

2. Fingerprint Scanning:
The traveler places four fingers of their right hand (index, middle, ring, and little fingers) onto an optical glass scanner to capture digital biometric fingerprint templates. Children under 12 years of age are legally exempt from fingerprinting, though their facial images are recorded.

3. Document Reading:
The kiosk reads the machine-readable zone (MRZ) and electronic chip of the passport, verifying document authenticity and absence of counterfeiting.

4. Subsequent Border Crossings:
Once initial biometric registration is completed, subsequent entries and exits require only a rapid facial verification at an automated e-Gate, drastically shortening processing time on future visits. The biometric data dossier is retained in the secure central EES database for three years following the traveler's last recorded exit (or five years in the event of an recorded overstay).`,
    },
    {
      id: 'who-is-affected',
      title: 'Who is Subject to the EES and Who is Exempt?',
      level: 2,
      content: `The EES applies to all non-EU/EEA/Swiss nationals visiting the Schengen Area for a short stay (up to 90 days in any 180-day period). This includes:
- Visa-exempt third-country nationals: Citizens of the United Kingdom, United States, Canada, Australia, New Zealand, Japan, and other visa-free partner nations.
- Visa-required third-country nationals: Travelers holding Schengen Type C short-stay visas (such as Turkish, Indian, or Chinese nationals). For these travelers, fingerprint data already gathered during consular visa applications (VIS) is cross-referenced with EES border records.

Who is EXEMPT from EES Registration:
- Citizens of European Union member states, EEA countries (Norway, Iceland, Liechtenstein), and Switzerland.
- Non-EU family members of EU/EEA/Swiss citizens who hold a valid residence card under Directive 2004/38/EC.
- Holders of national long-stay Type D visas or permanent/temporary residence permits issued by an EU/Schengen member state.
- Crew members of international commercial aircraft, merchant maritime vessels, and cross-border emergency services.
- Diplomats and officials of international organizations traveling under official accreditation.`,
    },
    {
      id: 'impact-on-uk-us-travelers',
      title: 'Practical Impact on UK, US, and International Travelers',
      level: 2,
      content: `For British passport holders, the implementation of the EES represents the final full technological realization of post-Brexit border barriers. Because British citizens are now third-country nationals under EU law, every traveler crossing the English Channel, landing at European airports, or disembarking from cruises must undergo full EES registration.

Key Operational Points:
- Juxtaposed Controls (Dover, St Pancras, Folkestone): Unique to UK-EU travel, French border police conduct passport control on British soil at the Port of Dover, Eurostar terminal at London St Pancras, and Eurotunnel in Folkestone. To avoid severe highway congestion and passenger queues, port authorities have installed extensive drive-through biometric processing lanes and passenger terminal kiosks.
- Elimination of Stamping Disputes: In previous years, British second-home owners and frequent business travelers frequently complained about over-zealous or forgotten passport stamps leading to baseless overstay accusations. EES creates an indisputable digital audit trail, protecting compliant travelers while preventing illicit stays.
- Airport Queue Times: The initial registration visit is estimated to add between 90 and 120 seconds per non-EU passenger. European airport operators (AENA in Spain, Fraport in Germany, ADP in Paris) have cautioned passengers to budget additional transit time when departing international hubs during peak holiday weekends.`,
    },
    {
      id: 'carrier-obligations-and-preboarding',
      title: 'Carrier Obligations: How Airlines and Ferry Operators Verify EES Status',
      level: 2,
      content: `A central pillar of the Entry/Exit System architecture is the legal obligation imposed upon commercial international transport carriers under Directive 2001/51/EC and Article 13 of Regulation (EU) 2017/2226. Commercial airlines, international rail operators (including Eurostar), and maritime ferry lines must verify that a passenger possesses valid authorization before allowing them to board.

To execute this requirement without granting private corporations access to sensitive biometric databases, eu-LISA operates a secure Carrier Web Service and Application Programming Interface (API). At the time of passenger check-in:
1. The carrier system queries the central EES database using the passenger's travel document details (passport number, nationality, and date of birth).
2. The EES engine returns an automated OK / NOT OK verification response confirming whether the traveler has remaining days within their 90/180-day allowance.
3. If an individual has already exhausted their 90 days, the carrier will be issued an automated boarding refusal prompt. Under European law, transport companies that transport undocumented or overstayed passengers into the Schengen Area face severe statutory carrier fines ranging from €3,000 to €5,000 per passenger, plus mandatory repatriation costs at carrier expense.

Consequently, travelers will find that airline mobile apps and airport check-in desks will block online boarding pass issuance if their recorded travel history indicates zero remaining Schengen days.`,
    },
    {
      id: 'data-privacy-and-overstay-alerts',
      title: 'Data Privacy, GDPR Compliance, and Overstay Enforcement',
      level: 2,
      content: `The EES architecture incorporates robust data privacy safeguards in accordance with the EU General Data Protection Regulation (GDPR) and Regulation (EU) 2018/1725:

- Data Security and Retention: Biometric and travel records are stored in a dedicated, isolated central repository maintained by eu-LISA in Strasbourg, France. Access is strictly restricted to authorized national border authorities, visa authorities, and Europol for specific counter-terrorism investigations. Commercial corporations, marketing entities, and private transport carriers have zero access to raw biometric files.
- Automated Overstay Warnings: The EES software calculates presence continuously. If a traveler remains inside the Schengen Area on day 91 of their 180-day window, the system automatically marks the record as an active overstay. This status is communicated to the Schengen Information System (SIS II) and national border guard alerts.
- Traveler Access and Correction Rights: Under Article 52 of Regulation 2017/2226, travelers have the legal right to access their EES file, verify their recorded entry/exit timestamps, and request immediate rectification of erroneous records (such as an exit date incorrectly unlogged due to an equipment glitch).`,
    },
  ],
  examples: [
    {
      title: 'Example 1: Initial Biometric Registration at London St Pancras Eurostar',
      scenario: 'A British traveler takes the Eurostar from London to Paris for the first time following EES activation.',
      calculationType: 'verify',
      inputAmount: 1,
      rate: 4,
      resultVat: 0,
      resultTotal: 1,
      customFields: [
        { label: 'Step 1: Passport Scan', value: 'MRZ and chip read at kiosk (15 sec)' },
        { label: 'Step 2: Live Facial Image', value: 'Automated biometric camera capture' },
        { label: 'Step 3: Fingerprints', value: '4 right-hand fingers scanned' },
        { label: 'Step 4: Central Log', value: 'Digital entry recorded; 0 passport stamps' },
        { label: 'Total Registration Duration', value: '~90 seconds' },
      ],
      explanation: 'Because this is the traveler’s first entry since EES deployment, their full biometric file is created and stored in the eu-LISA database for 3 years. On subsequent Eurostar trips to Paris or Brussels, only a 15-second facial e-Gate scan will be required.',
    },
    {
      title: 'Example 2: Automated Overstay Flagging at Madrid Barajas Airport',
      scenario: 'An American traveler attempts to board a return flight to Miami after spending 94 days in Spain without a visa.',
      calculationType: 'verify',
      inputAmount: 94,
      rate: 90,
      resultVat: 4,
      resultTotal: 94,
      customFields: [
        { label: 'Days in Schengen', value: '94 days' },
        { label: 'Permitted Allowance', value: '90 days' },
        { label: 'EES System Alert', value: 'RED OVERSTAY (4 days exceeded)' },
        { label: 'Border Action', value: 'Administrative fine + SIS alert' },
      ],
      explanation: 'As the passenger scans their passport at the exit gate, the EES engine calculates the 4-day overstay automatically. The border officer is notified immediately on their terminal screen, issuing a formal fine and entry ban without the traveler being able to claim a missing entry stamp.',
    },
  ],
  faqs: [
    {
      q: 'Will border guards still stamp my physical passport once EES is active?',
      a: 'No. The EES completely abolishes the manual ink stamping of passports for non-EU travelers. Entry and exit dates are logged entirely in the EU digital database.',
    },
    {
      q: 'Do EU citizens have to scan their fingerprints in the EES?',
      a: 'No. European Union citizens, citizens of EEA countries (Norway, Iceland, Liechtenstein), and Swiss citizens are completely exempt from the Entry/Exit System.',
    },
    {
      q: 'Are British citizens subject to fingerprinting under EES?',
      a: 'Yes. As non-EU nationals following the UK’s withdrawal from the European Union, British citizens must undergo facial and 4-fingerprint biometric registration at Schengen external borders.',
    },
    {
      q: 'How long will my biometric data be stored in the EES database?',
      a: 'Your biometric data and travel logs are stored for 3 years following your last recorded exit from the Schengen Area. If an overstay is detected, the record is stored for 5 years.',
    },
    {
      q: 'Can children under 12 be fingerprinted at EES kiosks?',
      a: 'No. Children under the age of 12 are legally exempt from fingerprint collection under EU law, although a facial image photograph is taken at the border kiosk.',
    },
    {
      q: 'What should I do if an EES kiosk experiences a technical error?',
      a: 'If a self-service kiosk fails or cannot read your biometrics, border control staff are stationed immediately adjacent to assist with manual secondary inspection consoles.',
    },
    {
      q: 'Does EES replace the need for an ETIAS or visa?',
      a: 'No. EES is the physical border crossing IT system that logs entries and exits. ETIAS (expected 2027) is a pre-travel authorisation completed online before traveling. You may need both.',
    },
    {
      q: 'How can I check how many days I have left under the EES system?',
      a: 'The European Commission provides a public online portal connected to the EES database where non-EU travelers can input their passport details to view their exact official remaining days.',
    },
    {
      q: 'Does EES apply when traveling between two Schengen countries?',
      a: 'No. EES only operates at external Schengen borders (e.g., flights arriving from London, New York, or Istanbul). Flights between Schengen countries (e.g., Paris to Rome) have no border controls or EES kiosks.',
    },
  ],
  sources: [
    {
      label: 'European Commission - Migration and Home Affairs: Entry/Exit System (EES)',
      url: 'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/smart-borders/entry-exit-system_en',
    },
    {
      label: 'EUR-Lex: Regulation (EU) 2017/2226 Establishing the Entry/Exit System',
      url: 'https://eur-lex.europa.eu/eli/reg/2017/2226/oj',
    },
    {
      label: 'eu-LISA: Entry/Exit System Technical Specifications',
      url: 'https://www.eulisa.europa.eu/Activities/Large-Scale-It-Systems/Entry-Exit-System',
    },
  ],
  relatedTools: [
    {
      title: 'Schengen 90/180 Day Calculator',
      slug: 'schengen-calculator',
      description: 'Track rolling window compliance and calculate remaining days under Schengen rules.',
      category: 'travel',
    },
    {
      title: 'ETIAS Travel Authorization Portal',
      slug: 'etias',
      description: 'Information regarding the 2027 electronic travel authorization and €7 fee.',
      category: 'travel',
    },
  ],
  relatedGuides: [
    {
      title: 'Schengen 90/180 Rule Explained',
      slug: 'guides/schengen-90-180-rule-explained',
      description: 'Understand the mathematical mechanics of the rolling 180-day window.',
      category: 'travel',
    },
    {
      title: 'UK Citizens Europe Travel Rules Post-Brexit',
      slug: 'guides/uk-citizens-europe-travel-rules',
      description: 'Comprehensive guide for British passport holders traveling to Europe.',
      category: 'travel',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'This informational resource is derived from Regulation (EU) 2017/2226 and official eu-LISA guidelines. Border control decisions are made exclusively by national immigration agencies.',
};
