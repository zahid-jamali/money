import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { APPLIANCES, getApplianceByDeSlug } from '@/data/appliances';
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
  params: Promise<{ geraet: string }>;
}

export function generateStaticParams() {
  return APPLIANCES.map((a) => ({
    geraet: a.deSlug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { geraet } = await params;
  const appliance = getApplianceByDeSlug(geraet);

  if (!appliance) {
    return {
      title: 'Gerätestromkosten nicht gefunden | Zetawala Money',
      description: 'Die angeforderte Stromkosten-Berechnung konnte nicht gefunden werden.',
    };
  }

  const price = getElectricityPrice('germany');
  const rawTitle = `${appliance.deName}: Stromkosten & Verbrauch 2026`;
  const title = rawTitle.length <= 60
    ? rawTitle
    : `${appliance.deName.split('(')[0].split('/')[0].trim()} Stromkosten (2026)`.slice(0, 60);
  const description = `Wie viel Strom verbraucht ein ${appliance.deName} pro Stunde, Tag und Jahr? Exakte Kosten nach BDEW-Strompreis (${price.unitRate} ct/kWh), Watt-Rechner & Spartipps.`;

  const canonicalUrl = `${siteConfig.url}/de/stromkosten-rechner/${appliance.deSlug}/`;
  const ukUrl = `${siteConfig.url}/electricity-cost-calculator/uk/${appliance.slug}/`;
  const auUrl = `${siteConfig.url}/electricity-cost-calculator/australia/${appliance.slug}/`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'de-DE': canonicalUrl,
        'en-GB': ukUrl,
        'en-AU': auUrl,
        'x-default': ukUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
      locale: 'de_DE',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function GermanApplianceCostPage({ params }: PageProps) {
  const { geraet } = await params;
  const appliance = getApplianceByDeSlug(geraet);

  if (!appliance) {
    notFound();
  }

  const price = getElectricityPrice('germany');
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
        '@id': `${siteConfig.url}/de/stromkosten-rechner/${appliance.deSlug}/#webapp`,
        name: `Was kostet ein ${appliance.deName} an Strom? (Deutschland 2026)`,
        url: `${siteConfig.url}/de/stromkosten-rechner/${appliance.deSlug}/`,
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'All',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'EUR',
        },
        description: `Online-Stromkostenrechner für ${appliance.deName} basierend auf dem deutschen BDEW-Strompreis.`,
      },
      {
        '@type': 'Product',
        '@id': `${siteConfig.url}/de/stromkosten-rechner/${appliance.deSlug}/#product`,
        name: appliance.deName,
        description: `Haushaltsgerät ${appliance.deName} mit durchschnittlicher Leistungsaufnahme von ${appliance.wattageRange.defaultWatts} Watt.`,
        category: appliance.category,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Startseite',
            item: `${siteConfig.url}/de/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Stromkostenrechner',
            item: `${siteConfig.url}/de/stromkosten-rechner/`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: appliance.deName,
            item: `${siteConfig.url}/de/stromkosten-rechner/${appliance.deSlug}/`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: appliance.faqsDe.map((faq) => ({
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
              <Link href="/de/" className="hover:text-teal-600 transition">
                Startseite
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3 h-3 text-slate-400" />
            </li>
            <li>
              <Link
                href="/de/stromkosten-rechner/"
                className="hover:text-teal-600 transition"
              >
                Stromkostenrechner
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3 h-3 text-slate-400" />
            </li>
            <li className="font-semibold text-slate-800 dark:text-slate-200" aria-current="page">
              {appliance.deName}
            </li>
          </ol>
        </nav>

        {/* H1 Title */}
        <header className="mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Was kostet ein {appliance.deName} an Strom? (Deutschland 2026)
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Berechnet nach dem aktuellen deutschen Durchschnittsstrompreis von{' '}
            <strong className="text-teal-700 dark:text-teal-400 font-bold">
              {price.unitRate} ct pro kWh
            </strong>{' '}
            (BDEW-Strompreisanalyse {price.effectivePeriod}).
          </p>
        </header>

        {/* Quick Answer Box */}
        <section
          aria-label="Schnellantwort"
          className="mb-6 p-4 sm:p-5 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900/60 text-slate-800 dark:text-teal-100"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 bg-teal-600 text-white rounded-lg shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300 mb-1">
                Auf einen Blick: Stromkosten für {appliance.deName}
              </div>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                Ein {appliance.deName} mit durchschnittlich {appliance.wattageRange.defaultWatts} Watt
                Leistung kostet bei durchgehendem Betrieb <strong>{costHourly.major} pro Stunde</strong>{' '}
                beim aktuellen Strompreis ({price.unitRate} ct/kWh). Bei typischer Nutzung (
                {appliance.typicalUsage.descriptionDe}) liegen die Kosten bei rund{' '}
                <strong>{costDaily.major} pro Nutzungstag</strong> bzw.{' '}
                <strong>{costYearly.major} pro Jahr</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Appliance Cost Tool */}
        <section aria-label="Interaktiver Kostenrechner" className="mb-10">
          <ApplianceCostTool appliance={appliance} region="germany" lang="de" />
        </section>

        {/* Money Saving Tips */}
        <section className="mb-10 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="p-2 bg-amber-500 text-white rounded-lg">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Strom sparen beim {appliance.deName}: Die besten Tipps
            </h2>
          </div>
          <ul className="space-y-3">
            {appliance.tipsDe.map((tip, idx) => (
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
              Vergleich mit alternativen Haushaltsgeräten
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {appliance.alternatives.map((alt, idx) => {
              const altSpec = APPLIANCES.find((a) => a.slug === alt.slug);
              const altLink = altSpec ? `/de/stromkosten-rechner/${altSpec.deSlug}/` : '/de/stromkosten-rechner/';
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      vs. {alt.nameDe}
                    </h3>
                    <Link
                      href={altLink}
                      className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                    >
                      Kosten ansehen &rarr;
                    </Link>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {alt.comparisonNoteDe}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-10 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">
            Technische Verbrauchsdaten: {appliance.deName}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Typische Leistung</span>
              <span className="text-base font-bold text-slate-900 dark:text-white">
                {appliance.wattageRange.defaultWatts} Watt
              </span>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Leistungsbereich</span>
              <span className="text-base font-bold text-slate-900 dark:text-white">
                {appliance.wattageRange.min}W – {appliance.wattageRange.max}W
              </span>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Typische Nutzung</span>
              <span className="text-base font-bold text-slate-900 dark:text-white">
                {appliance.typicalUsage.hoursPerDay} Std./Tag
              </span>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Standby-Verbrauch</span>
              <span className="text-base font-bold text-slate-900 dark:text-white">
                {appliance.standbyWatts ? `${appliance.standbyWatts} Watt` : '0 Watt'}
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
            <strong>Herstellerangaben:</strong> {appliance.wattageRange.source}
          </p>
        </section>

        {/* FAQs */}
        <section className="mb-10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="p-2 bg-teal-600 text-white rounded-lg">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Häufig gestellte Fragen (FAQ): Stromverbrauch {appliance.deName}
            </h2>
          </div>
          <div className="space-y-3">
            {appliance.faqsDe.map((faq, idx) => (
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
              Stromkosten weiterer Haushaltsgeräte
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {APPLIANCES.filter((a) => a.slug !== appliance.slug).map((a) => (
              <Link
                key={a.deSlug}
                href={`/de/stromkosten-rechner/${a.deSlug}/`}
                className="text-xs font-medium py-1.5 px-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition"
              >
                {a.deName}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
