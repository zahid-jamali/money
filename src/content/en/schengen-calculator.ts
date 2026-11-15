import { PageContent } from '../types';

export const schengenCalculatorEn: PageContent = {
  metaTitle: 'Schengen 90/180 Day Calculator | Visa Rolling Window Tool',
  metaDescription:
    'Free Schengen 90/180 day calculator. Track your rolling window, check remaining days, prevent overstay penalties, and plan future European trips safely.',
  h1: 'Schengen 90/180 Day Calculator',
  quickAnswer:
    'The Schengen 90/180 rule allows visa-exempt travelers and Schengen short-stay C-visa holders to stay for a maximum of 90 days within any 180-day rolling window. Every day of presence, including entry and exit days, counts toward this limit. On any given check date, you look back exactly 179 days plus today; if the total days spent in the Schengen Area exceeds 90 days, you are in overstay.',
  howItWorks: [
    {
      label: 'Rolling 180-Day Window Assessment',
      formula: 'Window = [Target Date - 179 Days, Target Date]',
      ruleCitation: 'Regulation (EU) 2016/399 (Schengen Borders Code, Article 6)',
      effectiveDate: '2013-10-18 (Current standard)',
    },
    {
      label: 'Schengen Stay Day Accumulation',
      formula: 'Days Used = Count of unique calendar days present in Schengen within the 180-day window',
      ruleCitation: 'European Commission Short-Stay Calculator Guidelines',
      effectiveDate: 'Ongoing',
    },
    {
      label: 'Days Remaining Calculation',
      formula: 'Days Remaining = Max(0, 90 - Days Used in Window)',
      ruleCitation: 'Regulation (EU) 2016/399',
      effectiveDate: 'Ongoing',
    },
    {
      label: 'Overstay Identification',
      formula: 'Overstay = Days Used > 90 on any calendar date',
      ruleCitation: 'Regulation (EU) 2016/399 & National Immigration Enactments',
      effectiveDate: 'Strict Border Enforcement',
    },
  ],
  articleSections: [
    {
      id: 'understanding-the-90-180-rule',
      title: 'How the Schengen 90/180 Rolling Window Rule Operates',
      level: 2,
      content: `The 90/180 day rule is the fundamental legal constraint governing short-term visits to the European Schengen Area for non-EU/EEA/Swiss nationals. Codified under Regulation (EU) 2016/399—commonly known as the Schengen Borders Code—this mechanism mandates that a traveler may not accumulate more than 90 days of physical presence across the combined Schengen territories within any continuous rolling 180-day window.

Unlike a fixed calendar semester or annual visa allowance that resets on 1 January or 1 July, the Schengen window is dynamic and moves forward day-by-day. Whenever you cross an external border, passport control officers (and the digital Entry/Exit System) assess your compliance by reviewing the exact 180-day period ending on that precise day. This mathematical framework means that as a new day begins, the 181st day in your historical past drops out of the calculation.

Both the day of entry and the day of departure count as full days spent inside the Schengen Area, regardless of the actual time of flight or ferry crossing. Arriving at 23:45 on Friday night consumes an entire day from your 90-day allotment, and departing at 00:15 on Saturday morning consumes another full day. Understanding this calendar day counting mechanism is essential for preventing accidental overstays.`,
    },
    {
      id: 'rolling-window-mathematics',
      title: 'The Mathematics of the Rolling Window Explained',
      level: 2,
      content: `To understand the mathematical mechanics of the rolling window, consider any evaluation date denoted as D. The legal inspection window encompasses the interval [D - 179, D], representing exactly 180 calendar days inclusive.

To determine your legal status on date D:
1. Identify all calendar dates between (D - 179) and D where you were physically located in any Schengen member nation.
2. Sum the total number of unique presence days. If you travelled across internal borders—such as driving from France to Italy or flying from Germany to Spain—the day is counted once, as internal Schengen borders have no immigration checkpoints.
3. If this sum is less than or equal to 90, your stay on date D is lawful. Your remaining allowance on date D equals 90 minus this sum.
4. If this sum reaches 91 or greater, you have committed an unlawful overstay under EU immigration law.

Because older trips gradually exit the rolling window, leaving the Schengen Area does not trigger an instantaneous reset. A traveler who stays for 90 consecutive days must spend an unbroken 90 days entirely outside the Schengen Area before another 90-day period is fully restored. However, for intermittent travelers taking weekend breaks or month-long holidays, allowance restores in piecemeal increments as individual past trips cross the 180-day threshold.`,
    },
    {
      id: 'schengen-territorial-scope',
      title: 'Which Countries Belong to the Schengen Area in 2026?',
      level: 2,
      content: `The Schengen Area currently encompasses 29 European countries. A landmark expansion occurred on 1 January 2025, when Bulgaria and Romania achieved complete Schengen membership, permanently lifting border checks at land crossings in addition to the maritime and air border liberalisation enacted in March 2024. Consequently, all travel within Bulgaria and Romania now counts directly toward your single 90-day Schengen pool.

The 29 Schengen member states comprise:
- 25 European Union Member States: Austria, Belgium, Bulgaria, Croatia, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, and Sweden.
- 4 Non-EU EFTA States: Iceland, Liechtenstein, Norway, and Switzerland.

Crucially, two European Union member nations remain outside the Schengen Area:
1. Republic of Ireland: Maintains an official opt-out under EU Treaties (Protocols No 19 and 20) to preserve its Common Travel Area (CTA) bilateral agreement with the United Kingdom. Days spent in Ireland do NOT count toward the 90-day Schengen limit.
2. Cyprus: An EU member state that is legally bound to join Schengen in the future once technical evaluation and geopolitical conditions are satisfied. Until full accession, days in Cyprus are governed by sovereign Cypriot immigration limits and do not diminish your Schengen allowance.

Furthermore, non-EU European destinations such as the United Kingdom, Albania, Montenegro, Serbia, Bosnia and Herzegovina, North Macedonia, and Turkey do not belong to Schengen. Many long-stay travelers strategically visit these non-Schengen territories to pause or reset their Schengen rolling window.`,
    },
    {
      id: 'modern-border-systems',
      title: 'Digital Border Revolution: EES and ETIAS (2027)',
      level: 2,
      content: `The traditional method of manual physical passport stamping at European immigration booths is being replaced by comprehensive automated systems that eliminate human calculation errors:

1. Entry/Exit System (EES - Regulation EU 2017/2226):
The EES is an automated IT system registering non-EU nationals traveling for short stays every time they cross an external Schengen border. Rather than relying on ink passport stamps, biometric self-service kiosks capture four digital fingerprints and a facial scan. The system calculates exact lengths of stay down to the second, automatically flagging overstayers directly to border guard authorities and police databases across Europe.

2. ETIAS (European Travel Information and Authorisation System - Regulation EU 2018/1240):
ETIAS is an electronic travel authorisation mandatory for visa-exempt travelers (including citizens of the United Kingdom, United States, Canada, Australia, and 50+ other nations) before boarding transport to 30 European countries. With its official rollout scheduled for 2027 following the stabilization of the Entry/Exit System, ETIAS requires an online application through the official European Commission portal (travel-europe.europa.eu/etias_en). The standard fee is €7 (waived for applicants under 18 or over 70) and remains valid for three years or until passport expiration.

Together, EES and ETIAS provide automated algorithmic enforcement of the 90/180 day rule. Travelers can no longer rely on unreadable physical ink stamps or lenient border officials to overlook overstays.`,
    },
    {
      id: 'overstay-consequences-penalties',
      title: 'Legal Consequences and Penalties for Schengen Overstays',
      level: 2,
      content: `Overstaying in the Schengen Area—even by a single calendar day—is considered an administrative immigration violation under the Schengen Borders Code and the national laws of member states. Penalties vary depending on the country of departure, the duration of the violation, and whether the traveler departed voluntarily:

- Financial Fines: Monetary sanctions range from €100 for minor overstays of 1-3 days in Greece or Italy, up to €1,000 to €4,000 for prolonged unauthorized presence in Germany, the Netherlands, or Switzerland.
- Formal Entry Bans: Border authorities may issue an administrative expulsion decision and register an alert in the Schengen Information System (SIS II). This results in an entry ban prohibiting return to all 29 Schengen member states for periods ranging from 1 year to 5 years.
- Future Visa and ETIAS Refusals: An overstay creates a permanent digital immigration record. Future ETIAS applications will undergo automated manual secondary security screening, frequently resulting in outright rejection. Similarly, subsequent applications for Schengen Type C or long-stay national D visas will face stringent scrutiny and high refusal rates.
- Detention and Deportation: If intercepted during an unannounced internal document check or at a border control exit checkpoint during an active overstay, individuals risk administrative detention pending formal repatriation at their own expense.`,
    },
  ],
  examples: [
    {
      title: 'Example 1: Continuous 90-Day Stay followed by 90-Day Cooling Period',
      scenario: 'A Canadian remote traveler arrives in France on 1 January 2026 and departs from Spain on 31 March 2026 (90 full days).',
      calculationType: 'verify',
      inputAmount: 90,
      rate: 180,
      resultVat: 0,
      resultTotal: 90,
      customFields: [
        { label: 'Total Stay Duration', value: '90 days' },
        { label: 'Days Remaining on 31 March', value: '0 days' },
        { label: 'Next Legal Entry Date', value: '30 June 2026 (earliest 1 day available)' },
        { label: 'Full 90-Day Reset Date', value: '27 September 2026' },
      ],
      explanation: 'From 1 January through 31 March (31 days in Jan + 28 days in Feb + 31 days in Mar), exactly 90 days have elapsed. The traveler has exhausted their complete allowance. To stay lawfully, they must immediately exit. On 30 June 2026 (day 181 after 1 January), the first day of their January trip rolls out of the 180-day window, granting exactly 1 legal day. To regain all 90 days at once, they must remain outside the Schengen Area for 180 consecutive days after their last exit.',
    },
    {
      title: 'Example 2: Multiple Intermittent City Breaks',
      scenario: 'A UK business consultant makes four separate trips to Germany and Italy between February and May 2026.',
      calculationType: 'verify',
      inputAmount: 24,
      rate: 180,
      resultVat: 66,
      resultTotal: 24,
      customFields: [
        { label: 'Trip 1 (Feb 1 - Feb 7)', value: '7 days' },
        { label: 'Trip 2 (Feb 20 - Feb 26)', value: '7 days' },
        { label: 'Trip 3 (Mar 15 - Mar 20)', value: '6 days' },
        { label: 'Trip 4 (Apr 10 - Apr 13)', value: '4 days' },
        { label: 'Total Days Used on 1 May 2026', value: '24 days' },
        { label: 'Days Remaining on 1 May 2026', value: '66 days' },
      ],
      explanation: 'On 1 May 2026, the 180-day retrospective window spans from 2 November 2025 to 1 May 2026. Summing all visits: 7 + 7 + 6 + 4 = 24 days used. Subtracting from the 90-day ceiling leaves 66 days remaining. The consultant may lawfully embark on a summer vacation of up to 66 continuous days in Schengen starting in May.',
    },
  ],
  faqs: [
    {
      q: 'Does the day of arrival and departure count as full Schengen days?',
      a: 'Yes. Under the Schengen Borders Code, any portion of a calendar day spent within the Schengen territory is counted as a full day of presence. Arriving at 23:50 on 1 June and departing at 00:10 on 3 June constitutes three full days spent in Schengen (1 June, 2 June, and 3 June).',
    },
    {
      q: 'Do Bulgaria and Romania count towards the 90-day Schengen limit in 2026?',
      a: 'Yes, fully. As of 1 January 2025, Bulgaria and Romania are full Schengen member states with all internal air, sea, and land border controls permanently abolished. Time spent in Sofia, Bucharest, the Black Sea coast, or the Carpathian mountains counts directly toward your collective 90-day Schengen allocation.',
    },
    {
      q: 'Does time spent in Cyprus or Ireland reduce my Schengen days?',
      a: 'No. Neither the Republic of Ireland nor Cyprus belongs to the Schengen Area. Ireland has a permanent treaty opt-out and forms part of the Common Travel Area with the UK. Cyprus is an EU member not yet integrated into Schengen. Stays in either country do not reduce your Schengen allowance.',
    },
    {
      q: 'How does the rolling window differ from a fixed 6-month visa?',
      a: 'A fixed visa provides a predetermined validity period with a static reset date. In contrast, the Schengen rolling window shifts forward with each passing day. You evaluate legal compliance by examining the preceding 180 days on every individual day of your stay.',
    },
    {
      q: 'What is the earliest date when my 90-day allowance will be completely restored?',
      a: 'A complete reset to a fresh 90-day allowance occurs exactly 180 days after your last day of physical presence in the Schengen Area, provided you do not re-enter the territory during that interval.',
    },
    {
      q: 'What should I do if an emergency forces me to overstay in Schengen?',
      a: 'If severe illness, flight cancellations due to natural disasters, or unavoidable force majeure prevents departure before your 90 days expire, immediately contact the local immigration or foreign police office (Ausländerbehörde in Germany, Préfecture in France, Polizia di Stato in Italy) to request a formal temporary extension under Article 33 of the Visa Code before your allowance lapses.',
    },
    {
      q: 'Can I reset my 90-day Schengen clock by doing a quick "visa run" to London or Istanbul?',
      a: 'No. Departing Schengen for a weekend in London, Istanbul, or Dublin does not reset your 90-day allowance. It simply pauses the accumulation of days. Your historical stays remain in your 180-day rolling window until 180 days have elapsed since each individual trip.',
    },
    {
      q: 'How will the Entry/Exit System (EES) track my travel differently than passport stamps?',
      a: 'The EES captures biometric data (facial scans and four fingerprints) and logs entry and exit timestamps digitally in an interconnected EU central database. It calculates overstays automatically in real time, making border checks instantaneous and eliminating human stamping discrepancies.',
    },
    {
      q: 'When will ETIAS become mandatory and how much does it cost?',
      a: 'ETIAS is expected to enter into operation in 2027 following the successful implementation of the Entry/Exit System. It will cost €7 for travelers aged 18 to 70 (free for children under 18 and seniors over 70) and will remain valid for 3 years or until passport expiry.',
    },
    {
      q: 'Can I work remotely on a laptop in Schengen under the 90/180 day tourist rule?',
      a: 'Standard Schengen short-stay rules permit tourism, family visits, and incidental business activities (attending meetings, conferences, trade fairs). Engaging in local employment or providing paid services to local clients is strictly prohibited without a national work permit or specialized digital nomad visa.',
    },
  ],
  sources: [
    {
      label: 'European Commission - Migration and Home Affairs: Schengen Borders Code',
      url: 'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/schengen-area_en',
    },
    {
      label: 'European Union Official ETIAS Portal',
      url: 'https://travel-europe.europa.eu/etias_en',
    },
    {
      label: 'EUR-Lex: Regulation (EU) 2016/399 of the European Parliament and of the Council',
      url: 'https://eur-lex.europa.eu/eli/reg/2016/399/oj',
    },
    {
      label: 'European Commission Short-Stay Calculator Guide',
      url: 'https://ec.europa.eu/assets/home/visa-calculator/calculator.en.html',
    },
  ],
  relatedTools: [
    {
      title: 'Turkish Schengen Gün Hesaplama',
      slug: 'tr/schengen-gun-hesaplama',
      description: 'Türkçe Schengen 90/180 gün hesaplama ve vize süresi takip aracı.',
      category: 'travel',
    },
    {
      title: 'ETIAS European Travel Authorization Guide',
      slug: 'etias',
      description: 'Comprehensive 2027 ETIAS guide, fees, exemptions, and application procedures.',
      category: 'travel',
    },
    {
      title: 'EES Entry/Exit System Details',
      slug: 'ees-entry-exit-system',
      description: 'EU biometric border registration guide and external border crossing rules.',
      category: 'travel',
    },
  ],
  relatedGuides: [
    {
      title: 'Schengen 90/180 Rule Explained in Detail',
      slug: 'guides/schengen-90-180-rule-explained',
      description: 'Deep-dive editorial guide into rolling window mechanics with practical examples.',
      category: 'travel',
    },
    {
      title: 'UK Citizens Europe Travel Rules Post-Brexit',
      slug: 'guides/uk-citizens-europe-travel-rules',
      description: 'Essential European travel rules, passport validity, and limits for British passport holders.',
      category: 'travel',
    },
    {
      title: 'Schengen Overstay Consequences & Fines',
      slug: 'guides/schengen-overstay-consequences',
      description: 'Legal ramifications, monetary fines, deportation risks, and SIS entry bans.',
      category: 'travel',
    },
    {
      title: 'Official Schengen Member Countries List 2026',
      slug: 'guides/schengen-countries-list',
      description: 'Full roster of 29 Schengen states including Bulgaria and Romania.',
      category: 'travel',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'This Schengen calculator is an informative advisory tool based on Regulation (EU) 2016/399. Legal authority for entry and stay resides exclusively with border control officers and national immigration agencies of the respective Schengen member states.',
};
