import React, { ReactNode } from 'react';
import Link from 'next/link';
import { SupportedLang } from '@/config/pages';
import { PageContent } from '@/content/types';
import { getDictionary } from '@/i18n';
import {
  ChevronRight,
  BookOpen,
  HelpCircle,
  FileText,
  ShieldCheck,
  Calendar,
  ExternalLink,
  Layers,
  Sparkles,
} from 'lucide-react';

interface ToolPageTemplateProps {
  lang: SupportedLang;
  content: PageContent;
  categoryName: string;
  categorySlug: string;
  toolNode: ReactNode;
}

export function ToolPageTemplate({
  lang,
  content,
  categoryName,
  categorySlug,
  toolNode,
}: ToolPageTemplateProps) {
  const dict = getDictionary(lang);
  const homeUrl = lang === 'en' ? '/' : `/${lang}/`;

  // Calculate approximate word count for middle-of-article ad slot placement
  const totalArticleWords = content.articleSections.reduce(
    (acc, sec) => acc + sec.content.split(/\s+/).length,
    0,
  );
  const midPoint = Math.floor(content.articleSections.length / 2);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      {/* 1. Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <li>
            <Link href={homeUrl} className="hover:text-teal-600 transition">
              {dict.nav.home}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="w-3 h-3 text-slate-400" />
          </li>
          <li>
            <Link href={`${homeUrl}#${categorySlug}`} className="hover:text-teal-600 transition">
              {categoryName}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="w-3 h-3 text-slate-400" />
          </li>
          <li className="font-semibold text-slate-800 dark:text-slate-200" aria-current="page">
            {content.h1}
          </li>
        </ol>
      </nav>

      {/* 2. H1 with main keyword and year */}
      <header className="mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          {content.h1}
        </h1>
      </header>

      {/* 3. Quick-answer box (40-60 words directly answering search query) */}
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
              Quick Answer
            </div>
            <p className="text-sm sm:text-base leading-relaxed font-medium">
              {content.quickAnswer}
            </p>
          </div>
        </div>
      </section>

      {/* 4 & 5. The Tool (Interactive calculation + Result + Breakdown + Copy/Share/Print) */}
      <section aria-label="Interactive Calculator" className="mb-8">
        {toolNode}
      </section>

      {/* 6. AdSlot #1 */}
      <aside
        data-ad-slot="1"
        aria-label="Advertisement"
        className="my-8 min-h-[100px] sm:min-h-[250px] bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl flex items-center justify-center text-xs text-slate-400 uppercase tracking-widest font-mono"
      >
        <span>Ad Placement #1 (Reserved Slot)</span>
      </aside>

      {/* 7. How it's calculated (formulas, laws, dates) */}
      <section aria-labelledby="how-calculated-heading" className="my-10">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="w-5 h-5 text-teal-600" />
          <h2
            id="how-calculated-heading"
            className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
          >
            {dict.common.howItWorks}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.howItWorks.map((step, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs"
            >
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                {step.label}
              </h3>
              <div className="p-2.5 bg-slate-100 dark:bg-slate-800 font-mono text-xs rounded-lg text-teal-800 dark:text-teal-300 mb-2.5 break-all">
                {step.formula}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    Statutory Rule:
                  </span>{' '}
                  {step.ruleCitation}
                </div>
                <div className="text-slate-500">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    Validity:
                  </span>{' '}
                  {step.effectiveDate}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Comprehensive Article with Table of Contents (900-1,400 words) */}
      <section aria-labelledby="in-depth-guide-heading" className="my-10">
        {/* Table of Contents */}
        <nav
          aria-label="Table of contents"
          className="p-5 mb-8 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800"
        >
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-3">
            <BookOpen className="w-4 h-4 text-teal-600" />
            <span>Table of Contents</span>
          </div>
          <ul className="space-y-1.5 text-xs sm:text-sm">
            {content.articleSections.map((sec) => (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition"
                >
                  {sec.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Article Sections */}
        <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          {content.articleSections.map((sec, idx) => (
            <React.Fragment key={sec.id}>
              <div id={sec.id} className="scroll-mt-20">
                {sec.level === 2 ? (
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                    {sec.title}
                  </h2>
                ) : (
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                    {sec.title}
                  </h3>
                )}
                <div className="whitespace-pre-line text-slate-700 dark:text-slate-300 space-y-3">
                  {sec.content}
                </div>
              </div>

              {/* Mid-article Ad Slot if article is long (> 1,000 words) */}
              {totalArticleWords > 800 && idx === midPoint && (
                <aside
                  data-ad-slot="mid"
                  aria-label="Advertisement"
                  className="my-8 min-h-[100px] sm:min-h-[250px] bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl flex items-center justify-center text-xs text-slate-400 uppercase tracking-widest font-mono"
                >
                  <span>Mid-Article Ad Placement (Reserved Slot)</span>
                </aside>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* 9. Two worked examples with real numbers */}
      <section aria-labelledby="worked-examples-heading" className="my-10">
        <h2
          id="worked-examples-heading"
          className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4"
        >
          {dict.common.workedExamples}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {content.examples.map((ex, idx) => (
            <div
              key={idx}
              className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {ex.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {ex.scenario}
                </p>
                {ex.customFields && ex.customFields.length > 0 ? (
                  <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl space-y-1.5 text-xs font-mono mb-4">
                    {ex.customFields.map((field, fIdx) => (
                      <div
                        key={fIdx}
                        className={`flex justify-between ${
                          field.highlight
                            ? 'pt-1 border-t border-slate-200 dark:border-slate-700 font-bold'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500">{field.label}:</span>
                        <span
                          className={
                            field.highlight
                              ? 'text-teal-600 dark:text-teal-400 font-bold'
                              : 'font-semibold text-slate-900 dark:text-white'
                          }
                        >
                          {field.value}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : ex.inputAmount !== undefined ? (
                  <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl space-y-1.5 text-xs font-mono mb-4">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Base Amount:</span>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {ex.inputAmount.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Tax ({ex.rate ?? 0}%):</span>
                      <span className="font-semibold text-teal-600 dark:text-teal-400">
                        {(ex.resultVat ?? 0).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-slate-200 dark:border-slate-700 font-bold">
                      <span>Final Total:</span>
                      <span className="text-slate-900 dark:text-white">
                        {(ex.resultTotal ?? 0).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 italic">{ex.explanation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FAQ: 8-10 questions in native accessible <details> accordion */}
      <section aria-labelledby="faq-heading" className="my-10">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-teal-600" />
          <h2
            id="faq-heading"
            className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
          >
            {dict.common.faq}
          </h2>
        </div>
        <div className="space-y-3">
          {content.faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl transition duration-200"
            >
              <summary className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white cursor-pointer list-none flex items-center justify-between gap-3">
                <span>{faq.q}</span>
                <span className="text-teal-600 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* 11. Related tools (3-4) + related guides (2-3) */}
      <section aria-labelledby="related-tools-heading" className="my-10">
        <h2
          id="related-tools-heading"
          className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4"
        >
          {dict.common.relatedTools}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {content.relatedTools.map((t, idx) => (
            <Link
              key={idx}
              href={`/${t.slug}/`}
              className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-500 rounded-xl transition group shadow-xs"
            >
              <span className="text-xs uppercase tracking-wider font-semibold text-teal-600 dark:text-teal-400">
                {t.category}
              </span>
              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-teal-600 transition mt-0.5">
                {t.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t.description}</p>
            </Link>
          ))}
        </div>

        {content.relatedGuides.length > 0 && (
          <>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
              {dict.common.relatedGuides}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.relatedGuides.map((g, idx) => (
                <Link
                  key={idx}
                  href={`/${g.slug}/`}
                  className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-500 rounded-xl transition group"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <FileText className="w-3.5 h-3.5 text-teal-600" />
                    <span>{g.category}</span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-teal-600 transition mt-1">
                    {g.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{g.description}</p>
                </Link>
              ))}
            </div>
          </>
        )}
      </section>

      {/* 12. Sources, UpdatedBadge, Disclaimer */}
      <footer className="my-10 pt-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 space-y-4">
        {/* Official Sources */}
        <div>
          <div className="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-300 mb-2">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>{dict.common.sources}:</span>
          </div>
          <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
            {content.sources.map((src, idx) => (
              <li key={idx}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-teal-600 hover:underline"
                >
                  <span>{src.label}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Updated badge & disclaimer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>
              {dict.common.lastChecked}:{' '}
              <time dateTime={content.updatedAt}>{content.updatedAt}</time>
            </span>
          </div>
          <p className="text-xs text-slate-500 max-w-xl italic">
            {content.disclaimer || dict.common.disclaimerText}
          </p>
        </div>
      </footer>

      {/* 13. AdSlot #2 */}
      <aside
        data-ad-slot="2"
        aria-label="Advertisement"
        className="my-8 min-h-[100px] sm:min-h-[250px] bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl flex items-center justify-center text-xs text-slate-400 uppercase tracking-widest font-mono"
      >
        <span>Ad Placement #2 (Reserved Slot)</span>
      </aside>
    </article>
  );
}
