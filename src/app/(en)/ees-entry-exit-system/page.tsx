import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { eesEntryExitEn } from '@/content/en/ees-entry-exit';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { JsonLd } from '@/components/JsonLd';
import { getEesFacts } from '@/rules/eu/schengen';
import { Fingerprint, ScanFace, FileCheck, ExternalLink, Calculator, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = buildMetadata('ees-entry-exit', 'en', undefined, eesEntryExitEn);

export default function EesEntryExitSystemPageEn() {
  const ees = getEesFacts();

  const eesStatusBox = (
    <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400">
            <Fingerprint className="w-7 h-7" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Schengen External Border Infrastructure
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {ees.fullName} ({ees.name})
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Governed by {ees.regulation}
            </p>
          </div>
        </div>

        <a
          href={ees.officialSource}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-teal-600 hover:bg-teal-700 text-white transition shadow-sm"
        >
          <span>European Commission Policy</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* 3 Pillar Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300">
            <Fingerprint className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Biometric Capture
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              4 digital fingerprints (right hand) plus live facial recognition scan captured at border kiosks.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
            <FileCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              No More Passport Stamps
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Manual ink passport stamping is completely replaced by central electronic entry and exit logs.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300">
            <ScanFace className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Real-Time Overstay Tracking
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Automated central database tracks remaining days against the 90/180-day rule across all 29 countries.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
        <span className="text-xs text-slate-500 dark:text-slate-400">
          Source: European Commission (home-affairs.ec.europa.eu)
        </span>
        <Link
          href="/schengen-calculator/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 hover:text-teal-700 dark:text-teal-400"
        >
          <Calculator className="w-4 h-4" />
          <span>Calculate Your 90/180-Day Allowance →</span>
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <JsonLd
        lang="en"
        type="info"
        pageId="ees-entry-exit"
        slug="ees-entry-exit-system"
        name={eesEntryExitEn.h1}
        description={eesEntryExitEn.metaDescription}
        faqs={eesEntryExitEn.faqs}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Travel Tools', url: '/#travel' },
          { name: 'EU Entry/Exit System (EES)', url: '/ees-entry-exit-system/' },
        ]}
      />
      <ToolPageTemplate
        lang="en"
        content={eesEntryExitEn}
        categoryName="Travel Tools"
        categorySlug="travel"
        toolNode={eesStatusBox}
      />
    </>
  );
}
