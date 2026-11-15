import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { APPLIANCES, getApplianceBySlug } from '@/data/appliances';
import { getElectricityPrice } from '@/rules/energy/electricity';
import { calculateApplianceCost, formatElectricityCost } from '@/lib/energy/electricity';
import { ApplianceCostTool } from '@/components/tools/ApplianceCostTool';
import { siteConfig } from '@/config/site';
import {
  ChevronRight,
  Zap,
  Lightbulb,
  ArrowRightLeft,
  HelpCircle,
  Sparkles,
  CheckCircle2,
  Layers,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ appliance: string }>;
}

export function generateStaticParams() {
  return APPLIANCES.map((a) => ({
    appliance: a.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { appliance: slug } = await params;
  const appliance = getApplianceBySlug(slug);

  if (!appliance) {
    return {
      title: 'Appliance Running Cost Not Found | Zetawala Money',
      description: 'The requested appliance running cost calculator could not be found.',
    };
  }

  const price = getElectricityPrice('australia');
  const rawTitle = `Cost to Run a ${appliance.enName} (AU 2026)`;
  const title = rawTitle.length <= 60
    ? rawTitle
    : `${appliance.enName.split('(')[0].trim()} Cost (Australia 2026)`.slice(0, 60);
  const description = `Calculate how much power a ${appliance.enName.toLowerCase()} uses per hour, day, and year in Australia. AER Default Market Offer (${price.unitRate}c/kWh) & state electricity benchmarks.`;

  const canonicalUrl = `${siteConfig.url}/electricity-cost-calculator/australia/${appliance.slug}/`;
  const ukUrl = `${siteConfig.url}/electricity-cost-calculator/uk/${appliance.slug}/`;
  const deUrl = `${siteConfig.url}/de/stromkosten-rechner/${appliance.deSlug}/`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-AU': canonicalUrl,
        'en-GB': ukUrl,
        'de-DE': deUrl,
        'x-default': ukUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
      locale: 'en_AU',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function AustraliaApplianceCostPage({ params }: PageProps) {
  const { appliance: slug } = await params;
  const appliance = getApplianceBySlug(slug);

  if (!appliance) {
    notFound();
  }

  const price = getElectricityPrice('australia');
  const defaultUsage = calculateApplianceCost({
    watts: appliance.wattageRange.defaultWatts,
    hoursPerDay: appliance.typicalUsage.hoursPerDay,
    daysPerWeek: appliance.typicalUsage.usesPerWeek ?? 7,
    pricePerKwh: price.unitRate,
    standbyWatts: appliance.standbyWatts || 0,
  });

  const costHourly = formatElectricityCost(
    (appliance.wattageRange.defaultWatts * price.unitRate) / 1000,
    price.currencySymbol,
    price.currency,
  );
  const costYearly = formatElectricityCost(
    defaultUsage.totalCostPerYearWithStandby,
    price.currencySymbol,
    price.currency,
  );
  const costDaily = formatElectricityCost(
    defaultUsage.costPerDay,
    price.currencySymbol,
    price.currency,
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': `${siteConfig.url}/electricity-cost-calculator/australia/${appliance.slug}/#webapp`,
        name: `How Much Does It Cost to Run a ${appliance.enName}? (Australia 2026)`,
        url: `${siteConfig.url}/electricity-cost-calculator/australia/${appliance.slug}/`,
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'All',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'AUD',
        },
        description: `Interactive electricity running cost calculator for ${appliance.enName} under Australian AER DMO state rates.`,
      },
      {
        '@type': 'Product',
        '@id': `${siteConfig.url}/electricity-cost-calculator/australia/${appliance.slug}/#product`,
        name: appliance.enName,
        description: `Domestic ${appliance.enName} with average rated power draw of ${appliance.wattageRange.defaultWatts} Watts.`,
        category: appliance.category,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${siteConfig.url}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Australia Electricity Cost Calculator',
            item: `${siteConfig.url}/electricity-cost-calculator/australia/`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: appliance.enName,
            item: `${siteConfig.url}/electricity-cost-calculator/australia/${appliance.slug}/`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: appliance.faqsEn.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <li>
              <Link href="/" className="hover:text-teal-600 transition">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3 h-3 text-slate-400" />
            </li>
            <li>
              <Link
                href="/electricity-cost-calculator/australia/"
                className="hover:text-teal-600 transition"
              >
                Australia Electricity Cost Calculator
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3 h-3 text-slate-400" />
            </li>
            <li className="font-semibold text-slate-800 dark:text-slate-200" aria-current="page">
              {appliance.enName}
            </li>
          </ol>
        </nav>

        {/* H1 Title */}
        <header className="mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            How Much Does It Cost to Run a {appliance.enName}? (Australia 2026)
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Based on the Australian National Benchmark electricity rate of{' '}
            <strong className="text-teal-700 dark:text-teal-400 font-bold">
              {price.unitRate}c per kWh
            </strong>{' '}
            (AER Default Market Offer {price.effectivePeriod}).
          </p>
        </header>

        {/* Quick Answer Box */}
        <section
          aria-label="Quick Answer"
          className="mb-6 p-4 sm:p-5 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900/60 text-slate-800 dark:text-teal-100"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 bg-teal-600 text-white rounded-lg shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300 mb-1">
                Quick Answer: {appliance.enName} Running Costs (Australia)
              </div>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                A standard {appliance.wattageRange.defaultWatts}W {appliance.enName.toLowerCase()}{' '}
                costs <strong>{costHourly.major} per hour</strong> of continuous use at national
                average rates ({price.unitRate}c/kWh). Based on typical domestic usage, it costs
                approximately <strong>{costDaily.major} per day</strong> or{' '}
                <strong>{costYearly.major} per year</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Appliance Cost Tool */}
        <section aria-label="Interactive Cost Tool" className="mb-10">
          <ApplianceCostTool appliance={appliance} region="australia" lang="en" />
        </section>

        {/* Money Saving Tips */}
        <section className="mb-10 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="p-2 bg-amber-500 text-white rounded-lg">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Tips to Cut {appliance.enName} Electricity Costs in Australia
            </h2>
          </div>
          <ul className="space-y-3">
            {appliance.tipsEn.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Alternative Comparisons */}
        <section className="mb-10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="p-2 bg-indigo-600 text-white rounded-lg">
              <ArrowRightLeft className="w-5 h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Alternative Appliances Compared
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {appliance.alternatives.map((alt, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    vs. {alt.nameEn}
                  </h3>
                  <Link
                    href={`/electricity-cost-calculator/australia/${alt.slug}/`}
                    className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                  >
                    View running cost &rarr;
                  </Link>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {alt.comparisonNoteEn}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-10 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">
            {appliance.enName} Technical Power Profile
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Typical Wattage</span>
              <span className="text-base font-bold text-slate-900 dark:text-white">
                {appliance.wattageRange.defaultWatts} Watts
              </span>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Wattage Range</span>
              <span className="text-base font-bold text-slate-900 dark:text-white">
                {appliance.wattageRange.min}W – {appliance.wattageRange.max}W
              </span>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Typical Daily Usage</span>
              <span className="text-base font-bold text-slate-900 dark:text-white">
                {appliance.typicalUsage.hoursPerDay} hours/day
              </span>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Standby Consumption</span>
              <span className="text-base font-bold text-slate-900 dark:text-white">
                {appliance.standbyWatts ? `${appliance.standbyWatts} Watts` : '0 Watts'}
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
            <strong>Source data:</strong> {appliance.wattageRange.source}
          </p>
        </section>

        {/* FAQs */}
        <section className="mb-10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="p-2 bg-teal-600 text-white rounded-lg">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Frequently Asked Questions: {appliance.enName} Electricity in Australia
            </h2>
          </div>
          <div className="space-y-3">
            {appliance.faqsEn.map((faq, idx) => (
              <details
                key={idx}
                className="group p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 open:shadow-sm transition"
              >
                <summary className="font-semibold text-slate-900 dark:text-white cursor-pointer list-none flex justify-between items-center text-sm sm:text-base">
                  <span>{faq.q}</span>
                  <span className="text-teal-600 transition group-open:rotate-180">&#9662;</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Other Appliances Quick Links */}
        <section className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-4 h-4 text-teal-600" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Browse Other Household Appliances
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {APPLIANCES.filter((a) => a.slug !== appliance.slug).map((a) => (
              <Link
                key={a.slug}
                href={`/electricity-cost-calculator/australia/${a.slug}/`}
                className="text-xs font-medium py-1.5 px-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition"
              >
                {a.enName}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
