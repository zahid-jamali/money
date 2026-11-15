import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getCountryMetaBySlugDe,
  getAllCountrySlugsDe,
  TARGET_COUNTRY_METAS,
} from '@/data/iban-country-meta';
import { getIbanCountrySpec, IBAN_REGISTRY } from '@/data/iban-registry';
import { IbanFormatCountryTool } from '@/components/tools/IbanFormatCountryTool';
import { siteConfig } from '@/config/site';
import {
  Globe2,
  ChevronRight,
  CreditCard,
  Building2,
  CheckCircle2,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ land: string }>;
}

export function generateStaticParams() {
  const slugs = getAllCountrySlugsDe();
  return slugs.map((land) => ({
    land,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { land } = await params;
  const meta = getCountryMetaBySlugDe(land);

  if (!meta) {
    return {
      title: 'IBAN Format nicht gefunden | Zetawala Money',
      description: 'Das angeforderte Länder-IBAN-Format konnte nicht gefunden werden.',
    };
  }

  const spec = getIbanCountrySpec(meta.code) || IBAN_REGISTRY[meta.code];
  const rawTitle = `${meta.deName} IBAN Format (${spec?.ibanLength || 0} Zeichen)`;
  const title = rawTitle.length <= 60 ? rawTitle : `${meta.deName} IBAN Format & Aufbau`.slice(0, 60);
  const description = `Offizielles IBAN-Format für ${meta.deName} (${meta.code}). ${spec?.ibanLength} Zeichen Gesamtlänge, Bankcodes, Kontonummern-Struktur, Beispiel-IBAN & Prüfer.`;
  const canonicalUrl = `${siteConfig.url}/de/iban-format/${meta.deSlug}/`;
  const enAlternateUrl = `${siteConfig.url}/iban-format/${meta.enSlug}/`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        de: canonicalUrl,
        en: enAlternateUrl,
        'x-default': enAlternateUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: 'de_DE',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}

export default async function CountryIbanFormatPageDe({ params }: PageProps) {
  const { land } = await params;
  const meta = getCountryMetaBySlugDe(land);

  if (!meta) {
    notFound();
  }

  const spec = getIbanCountrySpec(meta.code);
  if (!spec) {
    notFound();
  }

  const canonicalUrl = `${siteConfig.url}/de/iban-format/${meta.deSlug}/`;
  const enAlternateUrl = `${siteConfig.url}/iban-format/${meta.enSlug}/`;

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
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
            name: 'Banken & Konten',
            item: `${siteConfig.url}/de/#banking`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'IBAN Prüfer',
            item: `${siteConfig.url}/de/iban-pruefen/`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: `${meta.deName} (${meta.code})`,
            item: canonicalUrl,
          },
        ],
      },
      {
        '@type': 'FinancialProduct',
        name: `${meta.deName} IBAN Format & Struktur`,
        description: `Offizielle ${spec.ibanLength}-stellige IBAN-Spezifikation für ${meta.deName} (${meta.code}) nach ISO 13616 mit Prüfziffern und Clearing-Informationen.`,
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
            name: `Wie viele Zeichen hat eine IBAN in ${meta.deName}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Eine offizielle IBAN in ${meta.deName} besteht aus genau ${spec.ibanLength} Zeichen, beginnend mit dem Ländercode „${spec.countryCode}“, 2 Prüfziffern und den nationalen Kontobestandteilen.`,
            },
          },
          {
            '@type': 'Question',
            name: `Gehört ${meta.deName} zum SEPA-Raum?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${meta.deName} ist ${spec.isSepa ? 'offizielles Mitglied des SEPA-Raums (Single Euro Payments Area), wodurch Euro-Überweisungen ohne Extragebühren ausgeführt werden.' : 'kein SEPA-Mitglied, nutzt jedoch das internationale ISO-13616-Format für Auslandsüberweisungen.'}`,
            },
          },
          {
            '@type': 'Question',
            name: `Wo finde ich meine ${meta.deName} IBAN?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Ihre ${meta.deName} IBAN finden Sie auf Ihren offiziellen Kontoauszügen, in der mobilen Banking-App unter Kontodetails oder auf Ihrer ausgegebenen Bank-Debitkarte.`,
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
              <Link href="/de/" className="hover:text-primary-600 transition">
                Startseite
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3 h-3 text-slate-400" />
            </li>
            <li>
              <Link href="/de/#banking" className="hover:text-primary-600 transition">
                Banken &amp; Konten
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3 h-3 text-slate-400" />
            </li>
            <li>
              <Link href="/de/iban-pruefen/" className="hover:text-primary-600 transition">
                IBAN Prüfer
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3 h-3 text-slate-400" />
            </li>
            <li className="font-semibold text-slate-800 dark:text-slate-200" aria-current="page">
              {meta.deName} ({meta.code})
            </li>
          </ol>
        </nav>

        {/* Header Section */}
        <header className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary-50 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800 mb-3">
                <Globe2 className="w-3.5 h-3.5" />
                ISO 13616 Offizielle IBAN Spezifikation
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {meta.deName} IBAN Format &amp; Struktur
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1">
                Gesamtlänge: {spec.ibanLength} Zeichen • Währung: {spec.currency} • Ländercode: {spec.countryCode}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Link
                href={enAlternateUrl}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              >
                🇬🇧 English Version
              </Link>
            </div>
          </div>
        </header>

        {/* Interactive Country Tool (Colored boxes, breakdown, example & embedded tester) */}
        <section aria-label="Interaktiver Länder-IBAN Prüfer">
          <IbanFormatCountryTool countryCode={spec.countryCode} lang="de" />
        </section>

        {/* Where to Find IBAN in This Country */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-primary-600" />
            {`Wo finde ich meine IBAN in ${meta.deName}?`}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Je nach Kreditinstitut in {meta.deName} finden Sie Ihre {spec.ibanLength}-stellige IBAN an folgenden Stellen:
          </p>
          <ul className="space-y-2.5">
            {meta.whereToFindDe.map((item, idx) => (
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
            Nationales Clearing- &amp; Verrechnungssystem in {meta.deName}
          </h2>
          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400">
              Zentrales Clearing-Netzwerk
            </div>
            <div className="text-base font-bold text-slate-900 dark:text-white mt-1">
              {meta.clearingSystemDe}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              {meta.clearingDescDe}
            </p>
          </div>

          <div className="text-sm text-slate-700 dark:text-slate-300 space-y-3 leading-relaxed">
            <p>
              Bei Überweisungen nach {meta.deName} dient der Bankcode (Positionen {spec.bankCodePos[0] + 1}–{spec.bankCodePos[1]}) der automatischen Zuordnung an das jeweilige Kreditinstitut im nationalen Verrechnungsnetzwerk.
            </p>
            <p>
              {spec.isSepa
                ? `Da ${meta.deName} zum europäischen SEPA-Raum gehört, profitieren Euro-Überweisungen von einheitlichen Standards (meist innerhalb von 24 Stunden oder sekundenschnell per SEPA Instant / SCT Inst) ohne Auslandszuschläge.`
                : `Bei Überweisungen nach ${meta.deName} außerhalb des SEPA-Raums wird die Zahlung über internationale Korrespondenzbanken und das SWIFT-Netzwerk unter Verwendung des 8- oder 11-stelligen BICs und dieser ${spec.ibanLength}-stelligen IBAN abgewickelt.`}
            </p>
          </div>
        </section>

        {/* Related Countries in SEPA and Worldwide */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            Weitere Länder-IBAN-Formate ansehen
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {TARGET_COUNTRY_METAS.slice(0, 16).map((other) => (
              <Link
                key={other.code}
                href={`/de/iban-format/${other.deSlug}/`}
                className={`p-2.5 rounded-xl border text-xs font-medium transition flex items-center justify-between ${
                  other.code === meta.code
                    ? 'bg-primary-50 dark:bg-primary-950/60 border-primary-300 text-primary-700 dark:text-primary-300 font-bold'
                    : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>{other.deName}</span>
                <span className="font-mono text-[10px] text-slate-400">{other.code}</span>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
