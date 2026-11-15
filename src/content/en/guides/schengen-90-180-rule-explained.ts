import { GuideContent } from '../../types';

export const guideSchengenRuleExplainedEn: GuideContent = {
  metaTitle: 'Schengen 90/180 Rule Explained: Complete Guide & Calculation',
  metaDescription:
    'Master the Schengen 90/180 day rolling window rule. In-depth explanation of day counts, cooling periods, border stamps, EES biometric logs, and reset dates.',
  h1: 'The Schengen 90/180 Rule Explained: The Complete Guide',
  intro:
    'Navigating the European Schengen Area without violating immigration laws requires a rigorous mathematical understanding of the 90/180-day rolling window rule. Codified under Regulation (EU) 2016/399 (the Schengen Borders Code), this regulation applies universally to visa-free travelers and short-stay C-visa holders alike. This definitive guide breaks down every aspect of rolling window mechanics, day-count rules, border enforcement, and legal reset strategies.',
  readTimeMinutes: 9,
  articleSections: [
    {
      id: 'core-legal-framework',
      title: 'The Legal Foundation of the 90/180 Day Rule',
      level: 2,
      content: `The foundation of short-term mobility within Europe is governed by Article 6 of Regulation (EU) 2016/399 of the European Parliament and of the Council, officially termed the Schengen Borders Code. Under this statute, third-country nationals—meaning individuals who are neither citizens of the European Union, the European Economic Area (EEA), nor the Swiss Confederation—are legally authorized to remain within the collective territory of the Schengen member states for a maximum duration of 90 days in any 180-day period.

Prior to October 2013, European regulations employed an older phrasing referring to "90 days within three months from the date of first entry." That historical definition caused immense confusion, as travelers frequently attempted to reset their allowances simply by leaving on day 90 and re-entering immediately under what they believed was a brand-new three-month block. Recognizing widespread abuses and structural ambiguities, the European Union revised the regulation in October 2013 to establish a strict, continuously dynamic "rolling window" framework.

Under the current legal standard, the evaluation of whether your stay is lawful does not depend on calendar years, quarters, or fixed visa issuance intervals. Instead, on every single calendar day that you are present in any Schengen member state, the border control authority (or automated digital system) evaluates the preceding 180 days. If the count of presence days within that retrospective 180-day window exceeds 90, you are legally classified as an overstayer under European Union law.`,
    },
    {
      id: 'mathematics-of-rolling-window',
      title: 'The Precise Mathematics of the 180-Day Rolling Window',
      level: 2,
      content: `Understanding how the rolling window functions requires visualizing time as a moving 180-day frame sliding across your travel calendar. Whenever you evaluate your status on a specific target date D, the legal inspection window is mathematically defined as the closed interval [D - 179, D]. This interval contains exactly 180 calendar days inclusive.

To determine your legal compliance on date D:
1. Identify all calendar days between (D - 179) and D on which you set foot in any Schengen country.
2. Sum the total number of unique presence days. If you crossed an internal border—such as traveling by high-speed train from Paris to Brussels or driving from Germany into Austria—the day is counted only once, because internal borders do not possess sovereign immigration checkpoints.
3. If this sum is less than or equal to 90, your presence on date D is completely lawful.
4. If this sum equals 91 or greater, you have committed an administrative overstay.

Because the window shifts forward by exactly one calendar day with each passing midnight, the earliest day from your past eventually drops out of the calculation. For example, if you spent 10 days in France in early January and then remained outside Europe for five months, those 10 days will gradually drop out of the 180-day window one by one starting exactly 181 days after your first January entry.

This continuous roll-off mechanism means that departure from Europe does not provide an instant reset. Many travelers mistakenly believe that flying to London, Istanbul, or Dublin for a weekend "resets the clock." In reality, leaving Schengen merely halts the accumulation of additional stay days; historical days remain active inside your 180-day calculation until 180 days have passed since each individual trip.`,
    },
    {
      id: 'arrival-and-departure-day-counting',
      title: 'How Arrival and Departure Days Are Counted',
      level: 2,
      content: `One of the most frequent traps resulting in unintentional Schengen overstays is a misunderstanding of how fractional days are treated. Under European Union immigration law, there is no concept of half-days, hourly increments, or transit allowances for short-stay calculations.

According to the official guidelines of the European Commission:
- Both the day of entry and the day of departure count as full days of physical presence.
- Any portion of a calendar day spent within the Schengen Area—whether it is 23 hours and 50 minutes or 5 minutes—is legally recorded as one full day used against your 90-day allotment.

Consider a practical example: If your flight touches down at Frankfurt Airport at 23:45 on Friday night (10 May) and passes passport control before midnight, 10 May counts as an entire day of your 90-day allowance. If you then take an early-morning flight out of Europe departing at 00:20 on Sunday morning (12 May), 12 May also counts as an entire full day. In this scenario, your total elapsed time in Europe was approximately 24 hours and 35 minutes, yet under the Schengen Borders Code, you have officially consumed three full days of your 90-day allowance (10 May, 11 May, and 12 May).

To optimize travel allowances and avoid accidental overstays, experienced travelers schedule arrivals early in the morning and departures late in the evening, ensuring maximum practical utility from each consumed calendar day.`,
    },
    {
      id: 'consecutive-vs-intermittent-stays',
      title: 'Consecutive Stays vs. Intermittent Travel: How Allowances Refresh',
      level: 2,
      content: `The mathematical implications of the 90/180 rule differ dramatically depending on whether you travel in a single continuous block or take intermittent, recurring trips.

1. The Single 90-Day Continuous Stay:
If a traveler arrives in Schengen and stays for 90 consecutive days (for instance, arriving 1 January and departing 31 March), they completely exhaust their legal allowance on their final day. Under the rolling window formula, the traveler cannot re-enter the Schengen Area on the following day, because looking back 180 days from 1 April includes all 90 days just spent in Europe. To regain another continuous 90-day block, the traveler must remain entirely outside the Schengen Area for an unbroken 90 days (until day 181 from their initial entry). On that day, the entire previous 90-day visit has rolled outside the 180-day retrospective window, restoring a full 90-day allowance.

2. Intermittent and Frequent Travel:
For business consultants, digital nomads, and vacationers who take frequent short trips—such as 4 days in Italy, 10 days in Spain, and 6 days in Germany—allowances refresh incrementally rather than in a single 90-day lump sum. As each individual historical trip crosses the 180-day threshold in the past, the exact number of days consumed during that specific trip becomes available again on your balance sheet.

This dynamic refresh means that intermittent travelers can maintain an ongoing pattern of European travel indefinitely, provided their average presence does not exceed 50% of their total time over any six-month duration.`,
    },
    {
      id: 'geographical-boundaries-2026',
      title: 'Geographical Scope: 29 Schengen Countries and Key Non-Members',
      level: 2,
      content: `A common error made by international visitors is conflating European Union membership with Schengen membership. While the two entities overlap significantly, they are legally distinct.

As of 2026, the Schengen Area comprises 29 sovereign European nations:
- 25 EU Member States: Austria, Belgium, Bulgaria, Croatia, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, and Sweden.
- 4 Non-EU EFTA States: Iceland, Liechtenstein, Norway, and Switzerland.

Expansion Milestone: Bulgaria and Romania
On 1 January 2025, Bulgaria and Romania attained full Schengen membership with the permanent lifting of all land border controls, completing the process initiated with maritime and air border opening in March 2024. Consequently, any time spent exploring Bucharest, Transylvania, Sofia, or the Black Sea coast now counts directly toward your collective 90-day Schengen pool.

Crucial Non-Schengen European Countries:
- Republic of Ireland: Although an EU member, Ireland maintains an official permanent opt-out under EU Treaties (Protocols 19 and 20) to preserve its Common Travel Area (CTA) bilateral agreement with the UK. Time spent in Ireland does NOT diminish your Schengen allowance.
- Cyprus: An EU member state that is legally bound to join Schengen upon completing technical evaluation criteria. Days spent in Cyprus do not count toward your Schengen 90-day ceiling.
- United Kingdom: A non-EU, non-Schengen state. Travel in England, Scotland, Wales, and Northern Ireland is governed by UK domestic immigration law.
- Non-EU Balkan Nations: Albania, Montenegro, Bosnia and Herzegovina, Serbia, North Macedonia, and Kosovo are completely outside Schengen.

Many international travelers who have exhausted their 90-day Schengen allowance spend their mandatory 90-day cooling-off period in non-Schengen European destinations like London, Dublin, Split, or Istanbul while awaiting the reset of their Schengen rolling window.`,
    },
    {
      id: 'ees-and-etias-transition',
      title: 'The Shift to Automated Enforcement: EES and ETIAS',
      level: 2,
      content: `Historically, the enforcement of the 90/180-day rule relied entirely on border control officers manually flipping through passport pages to locate, decipher, and calculate the dates on physical ink stamps. Inconsistencies, faded ink stamps, and missed stamps frequently created ambiguities that worked either for or against the traveler.

This manual era is permanently ending with the deployment of two major European Union automated border initiatives:
1. Entry/Exit System (EES - Regulation EU 2017/2226):
EES eliminates physical passport stamping at external Schengen borders for all non-EU travelers. Instead, biometric kiosks record digital fingerprints and live facial scans, creating a central electronic entry/exit log maintained by eu-LISA. The system continuously calculates length of stay against the 90/180-day threshold, alerting border guards automatically whenever an individual attempts to exit after day 90.

2. ETIAS (European Travel Information and Authorisation System - Regulation EU 2018/1240):
Expected to launch in 2027 following the stabilization of the Entry/Exit System, ETIAS requires visa-exempt third-country nationals (including British, American, and Canadian citizens) to secure an electronic travel authorization before departure. Costing €7 and valid for 3 years, ETIAS cross-checks security databases and verifies that the applicant does not possess an active overstay flag or immigration ban.

With these digital systems operating in unison, tracking compliance with the 90/180-day rule has shifted from discretionary manual checks to algorithmic precision. Using an automated calculator before booking international flights is now an indispensable necessity for every non-EU traveler.`,
    },
  ],
  faqs: [
    {
      q: 'Can I stay in Schengen for 90 days, leave for 1 day, and come back for another 90 days?',
      a: 'No. This is the single most common misconception. Under the rolling 180-day window, leaving for a single day only rolls off 1 day from 180 days ago (if applicable). If you stayed 90 consecutive days, you must remain outside the Schengen Area for an unbroken 90 days before you can begin a new 90-day stay.',
    },
    {
      q: 'Do internal border crossings reset my 90-day allowance?',
      a: 'No. Moving between Schengen member states (such as driving from France to Spain or flying from Germany to Italy) does not reset or pause your allowance. All 29 Schengen states share a single collective 90-day pool.',
    },
    {
      q: 'What happens if I stay 91 days instead of 90?',
      a: 'Staying 91 days constitutes an official overstay. Penalties vary by country but typically include on-the-spot administrative fines ranging from €150 to €1,000+, potential entry bans recorded in the Schengen Information System (SIS II), and difficulties securing future travel authorizations such as ETIAS.',
    },
    {
      q: 'Are British passport holders subject to the 90/180 rule?',
      a: 'Yes. Since 1 January 2021 (the conclusion of the Brexit transition period), UK citizens are third-country nationals under EU law and are strictly subject to the 90-day limit in any 180-day rolling window for short visits.',
    },
    {
      q: 'Do medical emergencies excuse an overstay?',
      a: 'Yes, but only if you contact the local immigration or foreign police office before your legal stay expires to request a formal extension under Article 33 of the Visa Code based on force majeure or humanitarian grounds.',
    },
    {
      q: 'Does time spent in Bulgaria or Romania count toward my 90 days in 2026?',
      a: 'Yes. As of 1 January 2025, Bulgaria and Romania are full Schengen member states. Time spent in both nations counts fully toward your 90-day Schengen limit.',
    },
    {
      q: 'How does a leap year affect the 180-day rolling calculation?',
      a: 'The rule is strictly based on calendar days, not fixed months. During a leap year, February has 29 days, and the calculator counts each individual calendar day accurately without skipping.',
    },
    {
      q: 'Can I work remotely on a laptop during my 90 days in Europe?',
      a: 'Tourist entry under the 90/180 rule allows tourism, leisure, and incidental business activities (meetings, attending trade fairs). Providing services to local clients or entering the local labor market is strictly prohibited without a national digital nomad or employment visa.',
    },
  ],
  sources: [
    {
      label: 'EUR-Lex: Regulation (EU) 2016/399 of the European Parliament and of the Council (Schengen Borders Code)',
      url: 'https://eur-lex.europa.eu/eli/reg/2016/399/oj',
    },
    {
      label: 'European Commission: Schengen Borders and Visa Policy Overview',
      url: 'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/schengen-area_en',
    },
    {
      label: 'European Commission Official Short-Stay Calculator Guide',
      url: 'https://ec.europa.eu/assets/home/visa-calculator/calculator.en.html',
    },
    {
      label: 'Official EU ETIAS Portal',
      url: 'https://travel-europe.europa.eu/etias_en',
    },
  ],
  cta: {
    title: 'Calculate Your Exact Schengen Days Remaining',
    description: 'Use our free interactive Schengen 90/180 Day Travel Engine with visual rolling window timeline, overstay detection, and trip feasibility planner.',
    buttonText: 'Launch Schengen Calculator',
    buttonHref: '/schengen-calculator/',
    badge: '100% Free & Accurate',
  },
  relatedTools: [
    {
      title: 'Schengen 90/180 Day Calculator',
      slug: 'schengen-calculator',
      description: 'Interactive rolling window tool to track past stays and test upcoming trip feasibility.',
      category: 'travel',
    },
    {
      title: 'Turkish Schengen Gün Hesaplama',
      slug: 'tr/schengen-gun-hesaplama',
      description: 'Türk vatandaşları için 90/180 gün hareketli pencere ve vize süresi hesaplayıcı.',
      category: 'travel',
    },
  ],
  relatedGuides: [
    {
      title: 'UK Citizens Europe Travel Rules Post-Brexit',
      slug: 'guides/uk-citizens-europe-travel-rules',
      description: 'Essential European travel rules, passport validity, and limits for British passport holders.',
      category: 'travel',
    },
    {
      title: 'Schengen Overstay Consequences & Penalties',
      slug: 'guides/schengen-overstay-consequences',
      description: 'Detailed analysis of monetary fines, entry bans, and SIS alerts for overstaying.',
      category: 'travel',
    },
    {
      title: 'Official Schengen Member Countries List 2026',
      slug: 'guides/schengen-countries-list',
      description: 'Directory of all 29 Schengen member states and non-Schengen EU countries.',
      category: 'travel',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'This guide provides legal analysis based on Regulation (EU) 2016/399. Individual entry decisions remain the sole prerogative of national border control officers.',
};
