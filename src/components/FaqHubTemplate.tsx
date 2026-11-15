import React from 'react';
import Link from 'next/link';
import { HelpCircle, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { SupportedLang } from '@/config/pages';
import { FAQ_HUBS_DATA } from '@/content/faq-hubs';
import { JsonLd } from '@/components/JsonLd';

export interface FaqHubTemplateProps {
  lang: SupportedLang;
}

export function FaqHubTemplate({ lang }: FaqHubTemplateProps) {
  const hubData = FAQ_HUBS_DATA[lang] || FAQ_HUBS_DATA.en!;
  const currentSlug = lang === 'en' ? 'faq' : lang === 'tr' ? 'tr/sss' : lang === 'ro' ? 'ro/intrebari-frecvente' : `${lang}/faq`;

  // Flatten all questions for JSON-LD FAQPage schema
  const allFaqs = hubData.topics.flatMap((t) =>
    t.questions.map((q) => ({
      q: q.q,
      a: `${q.a} Learn more at ${q.linkText}.`,
    })),
  );

  return (
    <>
      <JsonLd
        lang={lang}
        pageId="faq"
        slug={currentSlug}
        type="site"
        title={hubData.metaTitle}
        description={hubData.metaDescription}
        faqs={allFaqs}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-900/60 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4">
            <HelpCircle className="w-4 h-4 text-teal-600" />
            <span>Comprehensive Knowledge Base • 30+ Questions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-3">
            {hubData.h1}
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {hubData.subtitle}
          </p>

          {/* Jump navigation pills */}
          <nav className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-200 dark:border-slate-800" aria-label="FAQ Topics">
            {hubData.topics.map((topic) => (
              <a
                key={topic.id}
                href={`#${topic.id}`}
                className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-teal-50 hover:text-teal-700 dark:bg-slate-800 dark:hover:bg-teal-950 dark:hover:text-teal-300 text-slate-700 dark:text-slate-300 transition-colors"
              >
                {topic.topicTitle}
              </a>
            ))}
          </nav>
        </header>

        {/* FAQ Topics and Questions */}
        <div className="space-y-12">
          {hubData.topics.map((topic) => (
            <section key={topic.id} id={topic.id} className="scroll-mt-20">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 pb-2 border-b border-slate-200 dark:border-slate-800">
                {topic.topicTitle}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {topic.questions.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                        {faq.q}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        {faq.a}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                      <Link
                        href={faq.linkHref}
                        className="inline-flex items-center text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors group"
                      >
                        <span>{faq.linkText}</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

export default FaqHubTemplate;
