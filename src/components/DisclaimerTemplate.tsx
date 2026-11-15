import React from 'react';
import Link from 'next/link';
import { AlertTriangle, ShieldCheck, Scale, FileText } from 'lucide-react';
import { SupportedLang } from '@/config/pages';
import { JsonLd } from '@/components/JsonLd';

export interface DisclaimerTemplateProps {
  lang: SupportedLang;
}

export function DisclaimerTemplate({ lang }: DisclaimerTemplateProps) {
  const currentSlug = lang === 'en' ? 'disclaimer' : `${lang}/disclaimer`;

  return (
    <>
      <JsonLd
        lang={lang}
        pageId="disclaimer"
        slug={currentSlug}
        type="site"
        title="Financial & Legal Disclaimer — Zetawala Money"
        description="Important legal, tax, and financial disclaimer regarding calculations and tools on Zetawala Money."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900/60 text-amber-700 dark:text-amber-300 text-xs font-semibold mb-4">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Important Information • No Professional Advice</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-3">
            Financial & Legal Disclaimer
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Please read this disclaimer carefully before relying on any calculation outputs or guidance on this site.
          </p>
        </header>

        <article className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
          <section className="p-6 rounded-2xl bg-amber-50/50 dark:bg-slate-900 border border-amber-200 dark:border-slate-800 space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Not Financial, Tax, Legal, or Immigration Advice
            </h2>
            <p className="text-xs sm:text-sm">
              The calculations, estimates, and data provided on Zetawala Money (money.zetawala.com) are intended solely for general informational, preliminary planning, and educational purposes. None of the content on this website constitutes formal financial advice, tax planning, legal counsel, or official visa guidance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              1. Salary and Tax Calculations
            </h2>
            <p>
              While our calculation engines model national tax acts (such as UK HMRC rules, Polish PIT/ZUS, Turkish Gelir Vergisi, and Romanian Codul Fiscal), individual tax circumstances differ. Special deductions, cumulative income from other employers, non-standard residency status, and local municipal levies can alter your actual take-home pay. For legally binding tax assessments, always consult an accredited tax accountant or consult official tax agency portals.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              2. Banking and IBAN Validation
            </h2>
            <p>
              The IBAN and BIC checkers perform mathematical ISO 13616 checksum and structure validations. Successful validation confirms that the account number conforms to international banking syntax. It does not certify that the account is currently open, solvent, or that the beneficiary name matches.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              3. Schengen 90/180 Day Travel Rule
            </h2>
            <p>
              The Schengen calculator replicates the rolling 180-day window formula prescribed by Regulation (EU) 2016/399. However, border guards hold discretionary legal authority to determine entry into the Schengen Area. The calculator cannot predict passport control decisions or bilateral treaty exceptions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              4. Energy and Fuel Estimations
            </h2>
            <p>
              Electricity appliance running costs and vehicle fuel calculations are based on published benchmarks (such as Ofgem price cap averages, AIP Australia, and NRCan). Actual household consumption varies with appliance efficiency, ambient temperature, driving style, and supplier-specific contractual tariffs.
            </p>
          </section>
        </article>
      </div>
    </>
  );
}

export default DisclaimerTemplate;
