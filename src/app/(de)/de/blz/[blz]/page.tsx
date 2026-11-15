import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import deBanksData from '@/data/banks/de.json';
import { germanIbanFromAccount } from '@/lib/banking/german-iban';
import { GermanIbanCalculatorTool } from '@/components/tools/GermanIbanCalculatorTool';
import {
  Building2,
  MapPin,
  ShieldCheck,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  CreditCard,
  Layers,
  HelpCircle,
  ExternalLink,
  Copy,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

interface BankRecord {
  blz: string;
  name: string;
  plz: string;
  city: string;
  bic: string;
  shortName?: string;
  isMainOffice?: boolean;
}

interface BranchRecord {
  blz: string;
  name: string;
  bic: string;
  plz: string;
}

interface PageProps {
  params: Promise<{ blz: string }>;
}

function getBankByBlz(blz: string): BankRecord | null {
  const blzMap = (deBanksData as { blzMap?: Record<string, BankRecord> })?.blzMap;
  return blzMap?.[blz] || null;
}

const MAIN_BANK_BLZ_SET = new Set(
  ((deBanksData as any).mainBanks || []).map((b: any) => b.blz),
);

function getBranchesInCity(city?: string): BranchRecord[] {
  if (!city) return [];
  const cityKey = city.toLowerCase().trim();
  const branchesByCity = (
    deBanksData as { branchesByCity?: Record<string, BranchRecord[]> }
  )?.branchesByCity;
  return branchesByCity?.[cityKey] || [];
}

export function generateStaticParams() {
  const mainBanks = (deBanksData as { mainBanks?: Array<{ blz: string }> })?.mainBanks || [];
  return mainBanks.map((bank) => ({
    blz: bank.blz,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { blz } = await params;
  const bank = getBankByBlz(blz);

  if (!bank) {
    return {
      title: 'Bankleitzahl nicht gefunden | Zetawala Money',
      description: 'Die angegebene deutsche Bankleitzahl konnte nicht gefunden werden.',
    };
  }

  const fullTitle = `${bank.name} BLZ ${bank.blz} BIC & IBAN`;
  const title = fullTitle.length <= 60 
    ? fullTitle 
    : `${bank.shortName || bank.name.slice(0, 32)} BLZ ${bank.blz}`.slice(0, 60);
  const description = `BLZ ${bank.blz} der ${bank.name} in ${bank.city}. Offizielle BIC ${bank.bic || 'unbekannt'}, IBAN-Berechnung und Filialen im Verzeichnis der Deutschen Bundesbank.`;
  const canonicalUrl = `${siteConfig.url}/de/blz/${bank.blz}/`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
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

export default async function GermanBankDetailPage({ params }: PageProps) {
  const { blz } = await params;
  const bank = getBankByBlz(blz);

  if (!bank) {
    notFound();
  }

  // Generate an official example IBAN for this bank using test account
  const exampleResult = germanIbanFromAccount(bank.blz, '1234567890');
  const exampleIban = exampleResult.formattedIban || `DE00 ${bank.blz} 1234 5678 90`;

  // Retrieve nearby branches in the same city
  const cityBranches = getBranchesInCity(bank.city);
  // Exclude current BLZ from the branch list if it appears, and take top 10
  const otherBranches = cityBranches.filter((b) => b.blz !== bank.blz).slice(0, 10);

  // Structured Data (Schema.org BankOrCreditUnion + FinancialProduct + BreadcrumbList)
  const jsonLdData = {
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
            name: 'BLZ Suche',
            item: `${siteConfig.url}/de/blz-suche/`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: `${bank.name} (${bank.blz})`,
            item: `${siteConfig.url}/de/blz/${bank.blz}/`,
          },
        ],
      },
      {
        '@type': 'BankOrCreditUnion',
        name: bank.name,
        legalName: bank.name,
        identifier: bank.blz,
        url: `${siteConfig.url}/de/blz/${bank.blz}/`,
        address: {
          '@type': 'PostalAddress',
          postalCode: bank.plz,
          addressLocality: bank.city,
          addressCountry: 'DE',
        },
        description: `Offizieller Eintrag der ${bank.name} in der Bankleitzahlendatei der Deutschen Bundesbank mit BLZ ${bank.blz} und BIC ${bank.bic}.`,
      },
      {
        '@type': 'FinancialProduct',
        name: `Girokonto & IBAN (${bank.name})`,
        provider: {
          '@type': 'BankOrCreditUnion',
          name: bank.name,
        },
        description: `Berechnung und Validierung der deutschen SEPA-IBAN für Kundenkonten bei der ${bank.name} (BLZ ${bank.blz}).`,
        category: 'CheckingAccount',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-2">
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
              <Link href="/de/blz-suche/" className="hover:text-primary-600 transition">
                BLZ Suche
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3 h-3 text-slate-400" />
            </li>
            <li className="font-semibold text-slate-800 dark:text-slate-200" aria-current="page">
              {bank.name} ({bank.blz})
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <div>
          <Link
            href="/de/blz-suche/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Bankleitzahlen-Suche
          </Link>
        </div>

        {/* Header Section */}
        <header className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                Offizieller Bundesbank-Datensatz
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {bank.name}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1">
                Bankleitzahl, BIC und IBAN-Berechnung für {bank.city}
              </p>
            </div>

            <div className="text-right shrink-0">
              <span className="block text-xs uppercase tracking-wider font-bold text-slate-400">
                Bankleitzahl (BLZ)
              </span>
              <span className="font-mono text-3xl font-black text-primary-600 dark:text-primary-400">
                {bank.blz}
              </span>
            </div>
          </div>

          {/* Key Facts Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3 sm:p-4">
              <span className="block text-[11px] uppercase font-bold text-slate-500 dark:text-slate-400">
                Bankleitzahl
              </span>
              <span className="font-mono text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5 block">
                {bank.blz}
              </span>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3 sm:p-4">
              <span className="block text-[11px] uppercase font-bold text-slate-500 dark:text-slate-400">
                BIC / SWIFT
              </span>
              <span className="font-mono text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5 block break-all">
                {bank.bic || '—'}
              </span>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3 sm:p-4">
              <span className="block text-[11px] uppercase font-bold text-slate-500 dark:text-slate-400">
                Standort
              </span>
              <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5 block truncate">
                {bank.plz} {bank.city}
              </span>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3 sm:p-4">
              <span className="block text-[11px] uppercase font-bold text-slate-500 dark:text-slate-400">
                Merkmal
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-950 px-2 py-0.5 rounded-md mt-1">
                Hauptstelle (Merkmal 1)
              </span>
            </div>
          </div>
        </header>

        {/* Example IBAN for this Bank */}
        <section
          aria-labelledby="example-iban-heading"
          className="bg-gradient-to-br from-primary-50 to-teal-50 dark:from-slate-900 dark:to-slate-950 border border-primary-200/80 dark:border-primary-900/60 rounded-2xl p-6 shadow-sm"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-700 dark:text-primary-300">
                <Sparkles className="w-4 h-4 text-primary-600" />
                Muster-IBAN für {bank.name}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Berechnet mit BLZ {bank.blz} und Beispiel-Kontonummer 1234567890
              </p>
              <div className="font-mono text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-wider mt-2 select-all break-all">
                {exampleIban}
              </div>
            </div>

            <div className="shrink-0">
              <Link
                href={`#iban-rechner`}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-sm font-semibold transition shadow-xs"
              >
                <CreditCard className="w-4 h-4" />
                Eigene IBAN berechnen
              </Link>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-primary-200/50 dark:border-primary-900/40 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div>
              <span className="text-slate-500 dark:text-slate-400 block">Ländercode:</span>
              <span className="font-mono font-bold text-slate-800 dark:text-slate-200">DE</span>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400 block">Bankleitzahl:</span>
              <span className="font-mono font-bold text-primary-700 dark:text-primary-300">
                {bank.blz}
              </span>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400 block">BIC / SWIFT:</span>
              <span className="font-mono font-bold text-slate-800 dark:text-slate-200">
                {bank.bic}
              </span>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400 block">Clearing-Verfahren:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">SEPA &amp; EMZ</span>
            </div>
          </div>
        </section>

        {/* Embedded Interactive IBAN Calculator pre-filled with this Bank's BLZ */}
        <section id="iban-rechner" aria-labelledby="calc-heading" className="space-y-3">
          <div className="flex items-center justify-between">
            <h2
              id="calc-heading"
              className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2"
            >
              <CreditCard className="w-5 h-5 text-primary-600" />
              IBAN berechnen für {bank.name}
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Die Bankleitzahl <strong className="font-mono text-slate-900 dark:text-slate-100">{bank.blz}</strong> ist bereits vorausgefüllt. Tragen Sie lediglich Ihre Kontonummer ein, um Ihre vollständige deutsche IBAN und den passenden BIC zu generieren:
          </p>
          <GermanIbanCalculatorTool initialBlz={bank.blz} lang="de" />
        </section>

        {/* Bank & Clearing Guide Content */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
              Überweisungen an {bank.name} (BLZ {bank.blz})
            </h2>
            <div className="prose dark:prose-invert text-sm sm:text-base text-slate-700 dark:text-slate-300 space-y-3 leading-relaxed">
              <p>
                Die <strong>{bank.name}</strong> mit Sitz in {bank.city} (Postleitzahl {bank.plz}) wird im Verzeichnis der Deutschen Bundesbank unter der Bankleitzahl <strong>{bank.blz}</strong> geführt. Für internationale und inländische Transaktionen im Euro-Raum ist ihr der offizielle Business Identifier Code (BIC) <strong>{bank.bic}</strong> zugeordnet.
              </p>
              <p>
                Wenn Sie eine SEPA-Überweisung zu einem Konto bei der {bank.name} ausführen möchten, gilt im Euro-Zahlungsverkehr das europäische Prinzip <strong>„IBAN-Only“</strong>. Sie müssen im Online-Banking in der Regel nur die 22-stellige IBAN des Empfängers eintragen. Das Banksystem leitet die Überweisung über die in der IBAN kodierte Bankleitzahl {bank.blz} automatisch an das richtige Institut weiter.
              </p>
              <p>
                Für Überweisungen aus Staaten außerhalb der Europäischen Union (Drittländer wie die Schweiz, Großbritannien oder die USA) sowie für Zahlungen in Fremdwährungen ist hingegen die explizite Angabe des BICs <strong>{bank.bic}</strong> zwingend erforderlich, um das Routing über das weltweite SWIFT-Netzwerk abzuwickeln.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3">
              Stammdaten der Bundesbank für BLZ {bank.blz}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm text-left">
                <tbody>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="py-2.5 font-bold text-slate-500 dark:text-slate-400 w-1/3">
                      Institutsbezeichnung:
                    </td>
                    <td className="py-2.5 font-semibold text-slate-900 dark:text-slate-100">
                      {bank.name}
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="py-2.5 font-bold text-slate-500 dark:text-slate-400">
                      Bankleitzahl (BLZ):
                    </td>
                    <td className="py-2.5 font-mono font-bold text-primary-600 dark:text-primary-400">
                      {bank.blz}
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="py-2.5 font-bold text-slate-500 dark:text-slate-400">
                      BIC / SWIFT:
                    </td>
                    <td className="py-2.5 font-mono font-bold text-slate-900 dark:text-slate-100">
                      {bank.bic}
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="py-2.5 font-bold text-slate-500 dark:text-slate-400">
                      Postleitzahl / Ort:
                    </td>
                    <td className="py-2.5 text-slate-900 dark:text-slate-100">
                      {bank.plz} {bank.city}
                    </td>
                  </tr>
                  {bank.shortName && (
                    <tr className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-2.5 font-bold text-slate-500 dark:text-slate-400">
                        Kurzbezeichnung:
                      </td>
                      <td className="py-2.5 text-slate-900 dark:text-slate-100">
                        {bank.shortName}
                      </td>
                    </tr>
                  )}
                  <tr>
                    <td className="py-2.5 font-bold text-slate-500 dark:text-slate-400">
                      Instituts-Status:
                    </td>
                    <td className="py-2.5 text-emerald-700 dark:text-emerald-400 font-semibold">
                      Hauptstelle (Merkmal 1, Deutsche Bundesbank)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Nearby Branches in the Same City */}
        {otherBranches.length > 0 && (
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  Weitere Banken &amp; Filialen in {bank.city}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Registrierte Kreditinstitute und Zweigstellen im Raum {bank.city}
                </p>
              </div>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {otherBranches.map((branch, idx) => (
                <div
                  key={`${branch.blz}-${idx}`}
                  className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <span className="font-semibold text-sm text-slate-900 dark:text-slate-100 block">
                      {branch.name}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      PLZ: {branch.plz} {bank.city} • BIC: {branch.bic || '—'}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-700 dark:text-slate-300">
                      BLZ {branch.blz}
                    </span>
                    {MAIN_BANK_BLZ_SET.has(branch.blz) ? (
                      <Link
                        href={`/de/blz/${branch.blz}/`}
                        className="text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        Details &amp; IBAN →
                      </Link>
                    ) : (
                      <span className="text-xs text-slate-400">Zweigstelle</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Quick Links and Related Tools Footer */}
        <section className="p-6 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Suchen Sie nach einer anderen Bankleitzahl?
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Durchsuchen Sie alle 3.432 Hauptbanken und über 20.000 Filialen der Bundesbank.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/de/blz-suche/"
              className="px-4 py-2 text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition"
            >
              BLZ Suche öffnen
            </Link>
            <Link
              href="/de/iban-rechner/"
              className="px-4 py-2 text-xs font-semibold bg-primary-600 hover:bg-primary-700 text-white rounded-xl transition"
            >
              IBAN Rechner
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
