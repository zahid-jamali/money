import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { etiasEn } from '@/content/en/etias';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { JsonLd } from '@/components/JsonLd';
import { getEtiasFacts } from '@/rules/eu/schengen';
import { ShieldCheck, Calendar, Info, ExternalLink, CheckCircle, Calculator } from 'lucide-react';

export const metadata: Metadata = buildMetadata('etias', 'en', undefined, etiasEn);

export default function EtiasPageEn() {
  const etias = getEtiasFacts();

  const etiasStatusBox = (
    <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 mb-1">
              <Calendar className="w-3.5 h-3.5" />
              Official Target: Launch {etias.expectedLaunchYear}
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {etias.fullName} ({etias.name})
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Governed by {etias.governingRegulation}
            </p>
          </div>
        </div>

        <a
          href={etias.officialPortal}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-teal-600 hover:bg-teal-700 text-white transition shadow-sm"
        >
          <span>Official EU Portal</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Key Quick Facts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
            Standard Fee
          </span>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
            €{etias.standardFeeEur}
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block">
            Free for &lt;18 and &gt;70
          </span>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
            Validity Period
          </span>
          <div className="text-2xl font-extrabold text-teal-600 dark:text-teal-400 mt-1">
            {etias.validityYears} Years
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block">
            Or until passport expiry
          </span>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
            Grace & Transition
          </span>
          <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 mt-1">
            6 + 6 Mo.
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block">
            12-month soft rollout
          </span>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
            Applicable Scope
          </span>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
            30 Nations
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block">
            29 Schengen + Cyprus
          </span>
        </div>
      </div>

      {/* Info Notice and Links */}
      <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 flex items-start gap-3 text-xs text-blue-900 dark:text-blue-200">
        <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold">
            ETIAS does not replace the Schengen 90/180-day limitation.
          </p>
          <p className="text-blue-800 dark:text-blue-300">
            Even with an approved ETIAS, your maximum legal presence remains strictly capped at 90 days in any 180-day rolling window. Use our Schengen calculator to verify your trip lengths before applying.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
        <span className="text-xs text-slate-500 dark:text-slate-400">
          Source: European Commission (travel-europe.europa.eu/etias_en)
        </span>
        <Link
          href="/schengen-calculator/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 hover:text-teal-700 dark:text-teal-400"
        >
          <Calculator className="w-4 h-4" />
          <span>Check Remaining Days in Schengen Calculator →</span>
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <JsonLd
        lang="en"
        type="info"
        pageId="etias"
        slug="etias"
        name={etiasEn.h1}
        description={etiasEn.metaDescription}
        faqs={etiasEn.faqs}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Travel Tools', url: '/#travel' },
          { name: 'ETIAS Travel Authorisation Guide', url: '/etias/' },
        ]}
      />
      <ToolPageTemplate
        lang="en"
        content={etiasEn}
        categoryName="Travel Tools"
        categorySlug="travel"
        toolNode={etiasStatusBox}
      />
    </>
  );
}
