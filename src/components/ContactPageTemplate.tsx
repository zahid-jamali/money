import React from 'react';
import Link from 'next/link';
import { Mail, MessageSquare, ShieldCheck, CheckCircle2, Globe2 } from 'lucide-react';
import { SupportedLang } from '@/config/pages';
import { siteConfig } from '@/config/site';
import { JsonLd } from '@/components/JsonLd';

export interface ContactPageTemplateProps {
  lang: SupportedLang;
}

export function ContactPageTemplate({ lang }: ContactPageTemplateProps) {
  const currentSlug = lang === 'en' ? 'contact' : `${lang}/contact`;

  return (
    <>
      <JsonLd
        lang={lang}
        pageId="contact"
        slug={currentSlug}
        type="site"
        title="Contact Zetawala Money — Feedback & Error Reporting"
        description="Contact our team for inquiries, corrections, statutory source updates, or feedback on Zetawala Money."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-900/60 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4">
            <Mail className="w-4 h-4 text-teal-600" />
            <span>Support • Error Reporting • Inquiries</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-3">
            Contact Us
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Have a question, feedback, or need to report an official statutory update? We are here to help.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1: Direct Email */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-2xl bg-teal-50 dark:bg-teal-950 text-teal-600 w-fit mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Editorial & Engineering Team
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                For feedback, calculation inquiries, partnerships, or reporting legislative updates:
              </p>
            </div>
            <div>
              <a
                href="mailto:contact@zetawala.com"
                className="text-sm sm:text-base font-bold text-teal-600 hover:text-teal-700 underline"
              >
                contact@zetawala.com
              </a>
              <span className="text-xs text-slate-400 block mt-1">Average response time: within 24 hours</span>
            </div>
          </div>

          {/* Card 2: Parent Network */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-2xl bg-teal-50 dark:bg-teal-950 text-teal-600 w-fit mb-4">
                <Globe2 className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Parent Network Headquarters
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Zetawala Money is part of the Zetawala network of free utilities and web tools.
              </p>
            </div>
            <div>
              <a
                href={siteConfig.parentBrand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-bold text-teal-600 hover:text-teal-700 underline"
              >
                zetawala.com
              </a>
              <span className="text-xs text-slate-400 block mt-1">Free tools for everyday decisions</span>
            </div>
          </div>
        </div>

        {/* Error reporting checklist */}
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            How to Submit an Error Report or Regulatory Update
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            To expedite our verification process, please include the following in your message:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span><strong>Tool URL:</strong> The exact page URL where you observed the issue.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span><strong>Input values:</strong> The numbers, dates, or accounts entered.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span><strong>Official Source:</strong> A direct link to the primary government gazette, tax agency bulletin, or central bank decree.</span>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default ContactPageTemplate;
