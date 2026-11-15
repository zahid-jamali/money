import { PageContent } from '../types';

export const etiasEn: PageContent = {
  metaTitle: 'ETIAS 2027 Europe Travel Authorisation | Fees, Rules & Portal',
  metaDescription:
    'Complete guide to ETIAS (European Travel Information and Authorisation System) launching in 2027. €7 fee, 3-year validity, who needs it, and rules.',
  h1: 'ETIAS: European Travel Information and Authorisation System (2027)',
  quickAnswer:
    'ETIAS is the mandatory electronic pre-travel authorisation for visa-exempt third-country nationals (including UK, US, Australian, and Canadian citizens) traveling to 30 European countries for short stays up to 90 days. Expected to launch in 2027 following the Entry/Exit System rollout, ETIAS costs €7 (free for under-18s and over-70s) and is valid for 3 years or until passport expiry.',
  howItWorks: [
    {
      label: 'Official Legal Basis',
      formula: 'Regulation (EU) 2018/1240 of the European Parliament and of the Council',
      ruleCitation: 'OJ L 236, 19.9.2018, p. 1–71',
      effectiveDate: 'Enacted 2018; Launch Target 2027',
    },
    {
      label: 'Standard Processing Fee',
      formula: '€7 per adult applicant (Waived for age < 18 or age > 70)',
      ruleCitation: 'Article 18, Regulation (EU) 2018/1240',
      effectiveDate: 'Upon Launch',
    },
    {
      label: 'Authorisation Validity',
      formula: '3 consecutive years or until passport expiration (whichever comes first)',
      ruleCitation: 'Article 37, Regulation (EU) 2018/1240',
      effectiveDate: 'Upon Launch',
    },
    {
      label: 'Implementation Safeguards',
      formula: '6-Month Transitional Period + 6-Month Grace Period',
      ruleCitation: 'Articles 83 & 84, Regulation (EU) 2018/1240',
      effectiveDate: 'First 12 Months of Operation',
    },
  ],
  articleSections: [
    {
      id: 'what-is-etias',
      title: 'What is ETIAS and Why Was It Created?',
      level: 2,
      content: `The European Travel Information and Authorisation System (ETIAS) is an automated electronic IT system designed to identify security, irregular migration, or high epidemic risks posed by visa-exempt visitors before they arrive at Schengen external borders. Governed by Regulation (EU) 2018/1240, ETIAS brings the European Union's border management in line with established pre-travel screening systems operated worldwide, such as the United States ESTA, Canadian eTA, and Australian eVisitor programs.

Crucially, ETIAS is not a traditional visa. It does not require visiting a consulate, having an interview, submitting paper application dossiers, or providing biometric fingerprinting in advance. Instead, it is a streamlined digital security pre-screening conducted entirely online. For the vast majority of applicants (estimated at over 97%), approval will be issued automatically within minutes of submitting the web form.

Once issued, an ETIAS authorization is electronically linked to the traveler's passport. It grants permission to enter the 30 participating European countries for short-term stays of up to 90 days within any 180-day rolling window for tourism, business meetings, family visits, or short-term courses.`,
    },
    {
      id: 'timeline-and-delays',
      title: 'Implementation Timeline and Reasons for EU Delays to 2027',
      level: 2,
      content: `Initially scheduled for introduction in 2021, the operational deployment of ETIAS has experienced successive postponements by the European Commission and eu-LISA (the European Union Agency for the Operational Management of Large-Scale IT Systems):

- Original Roadmap (2018–2021): Delays stemming from complex software architecture, procurement tenders, and the global disruption caused by the COVID-19 pandemic postponed initial testing.
- Dependency on EES (2022–2024): The European Council determined that ETIAS cannot function without the biometric Entry/Exit System (EES) being fully active and stable. Unreadiness of border IT hardware across major international hubs—including Paris Charles de Gaulle, Frankfurt, and the French-UK Channel Tunnel terminals—prompted repeated rescheduling.
- Paris 2024 Olympics Deconfliction: French and European authorities deferred testing to prevent border terminal gridlock during the summer 2024 Olympic and Paralympic Games.
- Revised 2027 Schedule: European Commission policy directives confirmed that ETIAS will enter into operation in 2027, allowing a full multi-month stabilization window for the biometric Entry/Exit System (EES) before launching pre-travel authorization enforcement.

Travelers should beware of fraudulent third-party intermediary websites claiming to sell official ETIAS approvals today. No ETIAS applications can be accepted until the European Union officially activates the system in 2027 on the sole authentic web portal: travel-europe.europa.eu/etias_en.`,
    },
    {
      id: 'who-needs-etias',
      title: 'Who Needs an ETIAS and Participating European Countries',
      level: 2,
      content: `ETIAS applies strictly to citizens of approximately 60 visa-exempt third countries who currently enjoy visa-free entry to the Schengen Area. Major nationalities required to obtain an ETIAS include:
- United Kingdom (British citizens following Brexit)
- United States of America
- Canada
- Australia and New Zealand
- Japan, South Korea, and Singapore
- Israel, UAE, and Argentina, Brazil, Mexico, Chile

Who Does NOT Need ETIAS:
- Citizens of EU and EEA member states (France, Germany, Italy, Spain, etc.) and Switzerland.
- Third-country nationals who hold a valid Schengen Type C visa or national long-stay Type D visa or temporary/permanent residence permit issued by any Schengen country.
- Holders of diplomatic or official service passports under specific bilateral agreements.
- Citizens of the Republic of Ireland (and British citizens traveling solely between the UK and Ireland under the Common Travel Area).

Participating Countries (30 European Nations):
The requirement covers 30 countries: the 29 Schengen member states (including newly integrated Bulgaria and Romania) plus Cyprus (which will enforce ETIAS entry authorization once implemented).`,
    },
    {
      id: 'fees-validity-and-exemptions',
      title: 'Cost, Validity, and Fee Exemptions',
      level: 2,
      content: `The financial and operational parameters of ETIAS are established by EU legislation:

- Application Fee: €7 per application. This is a one-time electronic payment processed by credit card, debit card, or electronic payment method during online submission.
- Fee Exemptions: The €7 fee is completely waived for:
  1. Applicants who are under 18 years of age at the date of application.
  2. Applicants who are over 70 years of age at the date of application.
  3. Family members of EU citizens or third-country nationals with freedom of movement rights under Directive 2004/38/EC.
  (Note: Even if exempt from the €7 fee, these applicants must still submit an online ETIAS application and hold a valid authorization before traveling).

- Validity Period: An approved ETIAS is valid for 3 consecutive years, or until the exact expiration date of the passport registered in the application, whichever comes first. Because ETIAS is electronically bound to a specific passport number, renewing your passport automatically invalidates your ETIAS, requiring a new application.
- Unlimited Entries: During its 3-year validity, ETIAS permits multiple entries into all 30 participating European nations, always subject to compliance with the standard 90/180-day rolling rule.`,
    },
    {
      id: 'grace-and-transitional-periods',
      title: 'The 6-Month Transitional and 6-Month Grace Periods',
      level: 2,
      content: `To ensure seamless adoption without stranding uninformed international travelers at airports and ports, Regulation (EU) 2018/1240 includes two sequential protective transitional mechanisms:

1. 6-Month Transitional Period:
During the initial six months after ETIAS enters into service, travelers without an ETIAS authorization will not be automatically turned away at the border. If they meet all other standard Schengen entry conditions (valid passport, sufficient financial funds, return ticket, compliance with 90/180 days), border guards will permit entry while issuing an official informational leaflet notifying the traveler that ETIAS will become strictly compulsory for future trips.

2. 6-Month Grace Period:
Immediately following the transitional phase, a six-month grace period begins. During this window, travelers arriving for the first time since the end of the transitional period will be allowed entry if they fulfill general requirements. However, those who have already entered Europe once during the transitional period without ETIAS will be strictly denied boarding or border crossing unless they hold an approved authorization.

After these two six-month cushions expire (12 months total post-launch), commercial transport carriers (airlines, international rail operators, and ferry lines) will be legally forbidden from boarding any passenger lacking an active ETIAS authorization.`,
    },
  ],
  examples: [
    {
      title: 'Example 1: Family Vacation Application and Fee Calculation',
      scenario: 'A family of four from New York plans a two-week holiday to Greece and Italy: Father (age 44), Mother (age 42), Son (age 16), and Grandmother (age 72).',
      calculationType: 'verify',
      inputAmount: 14,
      rate: 7,
      resultVat: 0,
      resultTotal: 14,
      customFields: [
        { label: 'Father (44 yrs)', value: '€7 fee' },
        { label: 'Mother (42 yrs)', value: '€7 fee' },
        { label: 'Son (16 yrs)', value: '€0 (Exempt under 18)' },
        { label: 'Grandmother (72 yrs)', value: '€0 (Exempt over 70)' },
        { label: 'Total Family Cost', value: '€14 total' },
      ],
      explanation: 'All four family members must submit individual online ETIAS applications because authorizations are tied directly to individual biometric passports. However, because the son is under 18 and the grandmother is over 70, their application fees are waived. The total cost for the entire family is €14.',
    },
    {
      title: 'Example 2: Passport Expiry Invalidating ETIAS Validity',
      scenario: 'A traveler from London applies for ETIAS on 10 March 2027. Their British passport expires on 15 November 2028 (20 months later).',
      calculationType: 'verify',
      inputAmount: 7,
      rate: 3,
      resultVat: 0,
      resultTotal: 7,
      customFields: [
        { label: 'ETIAS Standard Validity', value: '3 Years (would end March 2030)' },
        { label: 'Passport Expiration Date', value: '15 November 2028' },
        { label: 'Actual ETIAS Expiry', value: '15 November 2028 (tied to passport)' },
      ],
      explanation: 'Although ETIAS theoretically lasts 3 years, it automatically terminates whenever the associated passport expires. The traveler will need to obtain a new passport in late 2028 and submit a fresh €7 ETIAS application with the new document details.',
    },
  ],
  faqs: [
    {
      q: 'Is ETIAS a visa?',
      a: 'No. ETIAS is an automated electronic travel authorization, similar to the US ESTA. It does not require visiting an embassy, providing biometric data at a visa center, or submitting bank statements. It is completed online in approximately 10 to 15 minutes.',
    },
    {
      q: 'When does ETIAS launch officially?',
      a: 'The European Commission expects ETIAS to launch in 2027 following the full rollout and operational stabilization of the biometric Entry/Exit System (EES).',
    },
    {
      q: 'What is the official website for ETIAS applications?',
      a: 'The only official EU portal for ETIAS is travel-europe.europa.eu/etias_en. The EU does not authorize third-party intermediaries to collect surcharges. Avoid scam copycat websites.',
    },
    {
      q: 'How much does ETIAS cost and who is exempt from the fee?',
      a: 'ETIAS costs €7 per adult applicant. Applicants under 18 years of age and over 70 years of age are completely exempt from the fee, as are family members of EU citizens.',
    },
    {
      q: 'How long is an approved ETIAS valid?',
      a: 'An ETIAS authorization is valid for 3 years from the date of issue, or until your passport expires, whichever occurs first. It allows unlimited entries during its validity.',
    },
    {
      q: 'Do Turkish citizens need an ETIAS?',
      a: 'No. Turkish ordinary (bordo) passport holders require a standard Schengen Type C visa issued by a consulate. ETIAS is solely for nationals of countries that are exempt from short-stay visa requirements.',
    },
    {
      q: 'Can an ETIAS application be rejected?',
      a: 'Yes. Applications cross-reference international security databases including the Schengen Information System (SIS), Interpol, and Europol. If a security flag, criminal alert, or prior overstay record appears, the application will be reviewed manually and may be refused.',
    },
    {
      q: 'Does an approved ETIAS guarantee entry into Europe?',
      a: 'No. Just like a visa or ESTA, an ETIAS authorizes you to travel to a Schengen border crossing point. The final decision to grant or refuse entry rests with national border guards under Article 6 of the Schengen Borders Code.',
    },
    {
      q: 'What happens if my passport expires while my ETIAS is still active?',
      a: 'Your ETIAS authorization becomes void the moment your passport expires. You must renew your passport first and then apply for a new ETIAS before traveling to Europe.',
    },
    {
      q: 'How far in advance of my flight should I apply for ETIAS?',
      a: 'While most applications are approved within minutes, it is strongly advised to apply at least 72 hours before booking transport or departing, allowing sufficient time if manual document verification is required.',
    },
  ],
  sources: [
    {
      label: 'Official European Union ETIAS Portal',
      url: 'https://travel-europe.europa.eu/etias_en',
    },
    {
      label: 'EUR-Lex: Regulation (EU) 2018/1240 Establishing ETIAS',
      url: 'https://eur-lex.europa.eu/eli/reg/2018/1240/oj',
    },
    {
      label: 'European Commission - Migration and Home Affairs: ETIAS Information',
      url: 'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/smart-borders/etias_en',
    },
    {
      label: 'eu-LISA: European Agency for Large-Scale IT Systems',
      url: 'https://www.eulisa.europa.eu/',
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
      title: 'EES Entry/Exit System Details',
      slug: 'ees-entry-exit-system',
      description: 'Comprehensive guide to EU biometric border kiosks and automated logging.',
      category: 'travel',
    },
  ],
  relatedGuides: [
    {
      title: 'UK Citizens Europe Travel Rules Post-Brexit',
      slug: 'guides/uk-citizens-europe-travel-rules',
      description: 'Guide for British passport holders navigating ETIAS, EES, and the 90/180 rule.',
      category: 'travel',
    },
    {
      title: 'Official Schengen Member Countries List 2026',
      slug: 'guides/schengen-countries-list',
      description: 'Directory of all 29 Schengen member states and non-Schengen EU countries.',
      category: 'travel',
    },
    {
      title: 'Schengen Overstay Consequences & Fines',
      slug: 'guides/schengen-overstay-consequences',
      description: 'How overstays impact future ETIAS authorizations and visa applications.',
      category: 'travel',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'This informational resource is derived from Regulation (EU) 2018/1240 and official European Commission directives. Operational timelines and launch dates are determined by EU institutions.',
};
