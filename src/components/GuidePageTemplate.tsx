import React, { ReactNode } from 'react';
import Link from 'next/link';
import { SupportedLang } from '@/config/pages';
import { ArticleSection, FaqItem, SourceCitation, RelatedItem, GuideContent, GuideCtaConfig } from '@/content/types';
import { getDictionary } from '@/i18n';
import { TableOfContents } from '@/components/ui/TableOfContents';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import {
  ChevronRight,
  ShieldCheck,
  Calendar,
  ExternalLink,
  FileText,
  Clock,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export type { GuideCtaConfig, GuideContent };

interface GuidePageTemplateProps {
  lang: SupportedLang;
  content: GuideContent;
  categoryName: string;
  categorySlug: string;
}

export function GuidePageTemplate({
  lang,
  content,
  categoryName,
  categorySlug,
}: GuidePageTemplateProps) {
  const dict = getDictionary(lang);
  const homeUrl = lang === 'en' ? '/' : `/${lang}/`;

  const totalArticleWords = content.articleSections.reduce(
    (acc, sec) => acc + sec.content.split(/\s+/).length,
    0,
  );
  const midPoint = Math.floor(content.articleSections.length / 2);
  const readTime = content.readTimeMinutes || Math.max(5, Math.ceil(totalArticleWords / 200));

  const tocItems = content.articleSections.map((sec) => ({
    id: sec.id,
    title: sec.title,
    level: sec.level,
  }));

  const faqItems = content.faqs.map((faq, idx) => ({
    id: `faq-${idx}`,
    question: faq.q,
    answer: <p>{faq.a}</p>,
  }));

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
          <li className="font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[240px] sm:max-w-none" aria-current="page">
            {content.h1}
          </li>
        </ol>
      </nav>

      {/* 2. Header: Title, Reading Time, Date */}
      <header className="mb-6 sm:mb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
          <span className="px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300">
            {categoryName}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{readTime} {lang === 'de' ? 'Min. Lesezeit' : 'min read'}</span>
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>
              {lang === 'de' ? 'Aktualisiert' : 'Updated'}:{' '}
              <time dateTime={content.updatedAt}>{content.updatedAt}</time>
            </span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
          {content.h1}
        </h1>

        {/* Lead / Intro callout box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900/60 text-slate-800 dark:text-teal-100">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-teal-600 text-white rounded-lg shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300 mb-1">
                {lang === 'de' ? 'Kernzusammenfassung' : 'Key Takeaway'}
              </div>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                {content.intro}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Table of Contents */}
      <div className="mb-8">
        <TableOfContents
          items={tocItems}
          title={lang === 'de' ? 'Inhaltsverzeichnis' : 'Table of Contents'}
        />
      </div>

      {/* 4. AdSlot #1 */}
      <aside
        data-ad-slot="guide-top"
        aria-label="Advertisement"
        className="my-8 min-h-[100px] sm:min-h-[250px] bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl flex items-center justify-center text-xs text-slate-400 uppercase tracking-widest font-mono"
      >
        <span>Ad Placement #1 (Reserved Slot)</span>
      </aside>

      {/* 5. Editorial Content Sections */}
      <section aria-label="Editorial Article" className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
        {content.articleSections.map((sec, idx) => (
          <React.Fragment key={sec.id}>
            <div id={sec.id} className="scroll-mt-20">
              {sec.level === 2 ? (
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight border-b border-slate-100 dark:border-slate-800 pb-2">
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

            {/* Mid-Article Interactive CTA or AdSlot */}
            {idx === midPoint && (
              <div className="my-8 space-y-6">
                {/* Interactive Tool CTA Box */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-500/10 via-slate-50 to-teal-500/5 dark:from-teal-950/40 dark:via-slate-900 dark:to-teal-950/20 border-2 border-teal-500/30 dark:border-teal-700/50 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 text-center sm:text-left">
                    {content.cta.badge && (
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-600 text-white">
                        {content.cta.badge}
                      </span>
                    )}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {content.cta.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl">
                      {content.cta.description}
                    </p>
                  </div>
                  <Link
                    href={content.cta.buttonHref}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md hover:shadow transition shrink-0 group"
                  >
                    <span>{content.cta.buttonText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Mid-Article Ad Slot */}
                <aside
                  data-ad-slot="guide-mid"
                  aria-label="Advertisement"
                  className="min-h-[100px] sm:min-h-[250px] bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl flex items-center justify-center text-xs text-slate-400 uppercase tracking-widest font-mono"
                >
                  <span>Mid-Article Ad Placement (Reserved Slot)</span>
                </aside>
              </div>
            )}
          </React.Fragment>
        ))}
      </section>

      {/* 6. FAQ Accordion */}
      {content.faqs.length > 0 && (
        <section aria-labelledby="guide-faqs" className="my-10">
          <FaqAccordion
            items={faqItems}
            title={dict.common.faq}
            includeSchema={false} // Already provided by Universal JsonLd component
          />
        </section>
      )}

      {/* 7. Related Tools and Related Guides */}
      <section aria-labelledby="related-heading" className="my-10">
        <h2
          id="related-heading"
          className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4"
        >
          {dict.common.relatedTools}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {content.relatedTools.map((t, idx) => (
            <Link
              key={idx}
              href={`/${t.slug.replace(/^\/+|\/+$/g, '')}/`}
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
                  href={`/${g.slug.replace(/^\/+|\/+$/g, '')}/`}
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

      {/* 8. Sources, UpdatedBadge, Disclaimer */}
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

      {/* 9. AdSlot #2 */}
      <aside
        data-ad-slot="guide-bottom"
        aria-label="Advertisement"
        className="my-8 min-h-[100px] sm:min-h-[250px] bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl flex items-center justify-center text-xs text-slate-400 uppercase tracking-widest font-mono"
      >
        <span>Ad Placement #2 (Reserved Slot)</span>
      </aside>
    </article>
  );
}
