import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getCountryMetaBySlugEn,
  getAllCountrySlugsEn,
  TARGET_COUNTRY_METAS,
} from '@/data/iban-country-meta';
import { getIbanCountrySpec, IBAN_REGISTRY } from '@/data/iban-registry';
import { IbanFormatCountryTool } from '@/components/tools/IbanFormatCountryTool';
import { siteConfig } from '@/config/site';
import {
  Globe2,
  ChevronRight,
  ShieldCheck,
  CreditCard,
  Building2,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Layers,
  Sparkles,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ country: string }>;
}

export function generateStaticParams() {
  const slugs = getAllCountrySlugsEn();
  return slugs.map((country) => ({
    country,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country } = await params;
  const meta = getCountryMetaBySlugEn(country);

  if (!meta) {
    return {
      title: 'IBAN Format Not Found | Zetawala Money',
      description: 'The requested country IBAN format could not be found.',
    };
  }

  const spec = getIbanCountrySpec(meta.code) || IBAN_REGISTRY[meta.code];
  const title = `${meta.enName} IBAN Format & Structure 2026 (${spec?.ibanLength || 0} Chars)`;
  const description = `Official IBAN format and structure for ${meta.enName} (${meta.code}). ${spec?.ibanLength}-character length, bank codes, account breakdown, example IBAN, and validation.`;
  const canonicalUrl = `${siteConfig.url}/iban-format/${meta.enSlug}/`;
  const deAlternateUrl = `${siteConfig.url}/de/iban-format/${meta.deSlug}/`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: canonicalUrl,
        de: deAlternateUrl,
        'x-default': canonicalUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}

export default async function CountryIbanFormatPageEn({ params }: PageProps) {
  const { country } = await params;
  const meta = getCountryMetaBySlugEn(country);

  if (!meta) {
    notFound();
  }

  const spec = getIbanCountrySpec(meta.code);
  if (!spec) {
    notFound();
  }

  const canonicalUrl = `${siteConfig.url}/iban-format/${meta.enSlug}/`;
  const deAlternateUrl = `${siteConfig.url}/de/iban-format/${meta.deSlug}/`;

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
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
            name: 'Banking',
            item: `${siteConfig.url}/#banking`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'IBAN Format',
            item: `${siteConfig.url}/iban-checker/`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: `${meta.enName} (${meta.code})`,
            item: canonicalUrl,
          },
        ],
      },
      {
        '@type': 'FinancialProduct',
        name: `${meta.enName} IBAN Format Specification`,
        description: `Official ${spec.ibanLength}-character IBAN structure for ${meta.enName} (${meta.code}), including check digits, national clearing system, and account validation rules.`,
        provider: {
          '@type': 'Organization',
          name: siteConfig.name,
          url: siteConfig.url,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: `How many characters is an IBAN in ${meta.enName}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `An official IBAN in ${meta.enName} consists of exactly ${spec.ibanLength} characters, starting with the two-letter ISO country code "${spec.countryCode}" followed by 2 check digits and national account components.`,
            },
          },
          {
            '@type': 'Question',
            name: `Is ${meta.enName} part of the SEPA payment network?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${meta.enName} is ${spec.isSepa ? 'an active member of the SEPA (Single Euro Payments Area) zone, allowing standardized Euro transfers with zero extra fees.' : 'not a member of the SEPA zone, but adheres to the international ISO 13616 IBAN format for cross-border wires.'}`,
            },
          },
          {
            '@type': 'Question',
            name: `Where can I find my ${meta.enName} IBAN?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `You can find your ${meta.enName} IBAN on your bank statements, inside your mobile banking app under account details, or on your issued debit/credit card.`,
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <li>
              <Link href="/" className="hover:text-primary-600 transition">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3 h-3 text-slate-400" />
            </li>
            <li>
              <Link href="/#banking" className="hover:text-primary-600 transition">
                Banking
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3 h-3 text-slate-400" />
            </li>
            <li>
              <Link href="/iban-checker/" className="hover:text-primary-600 transition">
                IBAN Checker
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3 h-3 text-slate-400" />
            </li>
            <li className="font-semibold text-slate-800 dark:text-slate-200" aria-current="page">
              {meta.enName} ({meta.code})
            </li>
          </ol>
        </nav>

        {/* Header Section */}
        <header className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary-50 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800 mb-3">
                <Globe2 className="w-3.5 h-3.5" />
                ISO 13616 Official IBAN Specification
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {meta.enName} IBAN Format &amp; Specifications
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1">
                Total length: {spec.ibanLength} characters • Currency: {spec.currency} • Country Code: {spec.countryCode}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Link
                href={deAlternateUrl}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              >
                🇩🇪 Deutsche Version
              </Link>
            </div>
          </div>
        </header>

        {/* Interactive Country Tool (Colored boxes, breakdown, example & embedded tester) */}
        <section aria-label="Interactive IBAN Country Specification Tool">
          <IbanFormatCountryTool countryCode={spec.countryCode} lang="en" />
        </section>

        {/* Where to Find IBAN in This Country */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-primary-600" />
            {`Where to Find Your IBAN in ${meta.enName}`}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Depending on your financial institution in {meta.enName}, you can locate your {spec.ibanLength}-character IBAN through several primary sources:
          </p>
          <ul className="space-y-2.5">
            {meta.whereToFindEn.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Local Clearing System & Interbank Network */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary-600" />
            National Clearing System in {meta.enName}
          </h2>
          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400">
              Primary Settlement Network
            </div>
            <div className="text-base font-bold text-slate-900 dark:text-white mt-1">
              {meta.clearingSystemEn}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              {meta.clearingDescEn}
            </p>
          </div>

          <div className="text-sm text-slate-700 dark:text-slate-300 space-y-3 leading-relaxed">
            <p>
              When sending money domestically or internationally to {meta.enName}, the bank code positioned at characters {spec.bankCodePos[0] + 1}–{spec.bankCodePos[1]} routes the wire directly through the national central bank and interbank exchange.
            </p>
            <p>
              {spec.isSepa
                ? `Because ${meta.enName} is a member of the SEPA area, Euro payments between this country and other SEPA members benefit from standardized execution times (typically next-business-day or instant via SCT Inst) without non-resident surcharge fees.`
                : `For international wires to ${meta.enName}, transfers are routed through correspondent banking networks and the SWIFT messaging service using the recipient bank’s 8- or 11-character BIC code alongside this ${spec.ibanLength}-digit IBAN.`}
            </p>
          </div>
        </section>

        {/* Related Countries in SEPA and Worldwide */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            Explore Other Country IBAN Formats
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {TARGET_COUNTRY_METAS.slice(0, 16).map((other) => (
              <Link
                key={other.code}
                href={`/iban-format/${other.enSlug}/`}
                className={`p-2.5 rounded-xl border text-xs font-medium transition flex items-center justify-between ${
                  other.code === meta.code
                    ? 'bg-primary-50 dark:bg-primary-950/60 border-primary-300 text-primary-700 dark:text-primary-300 font-bold'
                    : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>{other.enName}</span>
                <span className="font-mono text-[10px] text-slate-400">{other.code}</span>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
