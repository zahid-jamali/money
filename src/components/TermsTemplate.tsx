import React from 'react';
import Link from 'next/link';
import { FileText, ShieldAlert } from 'lucide-react';
import { SupportedLang } from '@/config/pages';
import { JsonLd } from '@/components/JsonLd';

export interface TermsTemplateProps {
  lang: SupportedLang;
}

export function TermsTemplate({ lang }: TermsTemplateProps) {
  const currentSlug = lang === 'en' ? 'terms' : `${lang}/terms`;

  return (
    <>
      <JsonLd
        lang={lang}
        pageId="terms"
        slug={currentSlug}
        type="site"
        title="Terms of Use — Zetawala Money"
        description="Terms and conditions governing the use of Zetawala Money free calculators and online tools."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-900/60 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4">
            <FileText className="w-4 h-4 text-teal-600" />
            <span>Terms of Service • Acceptable Use</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-3">
            Terms of Use
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Please read these Terms of Use carefully before using the calculators on Zetawala Money.
          </p>
        </header>

        <article className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using Zetawala Money (money.zetawala.com), you acknowledge that you have read, understood, and agreed to be bound by these Terms of Use and our Privacy Policy. If you do not agree with any part of these terms, please do not use our tools.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              2. Free Informational Service
            </h2>
            <p>
              Zetawala Money provides financial, banking, tax, and travel calculators strictly as a free public utility. The calculations, formulas, and estimates are provided for general educational, estimation, and informational purposes only.
            </p>
            <p>
              The outputs generated do not constitute formal tax advice, legal counsel, banking guarantees, accounting declarations, or immigration compliance clearance. You should always verify calculations with a qualified professional (such as a certified accountant, tax advisor, immigration lawyer, or financial planner).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              3. Limitation of Liability
            </h2>
            <p>
              While every calculation engine is tested rigorously against official statutory benchmarks (such as HMRC, Bundesbank, ZUS, and EU legislation), Zetawala Money, its operators, and parent entity (Zetawala) make no warranties, express or implied, regarding the continuous availability or absolute error-free nature of the tools.
            </p>
            <p>
              Under no circumstances shall Zetawala Money be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use or inability to use our tools, including financial miscalculations, tax penalties, or travel disruptions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              4. Intellectual Property
            </h2>
            <p>
              All software architecture, visual branding, proprietary UI code, explanatory guide articles, and calculation interfaces are the intellectual property of Zetawala and protected under international copyright law. Unauthorised scraping, automated mirroring, or reproduction of content without written permission is prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              5. Governing Law
            </h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
            </p>
          </section>
        </article>
      </div>
    </>
  );
}

export default TermsTemplate;
