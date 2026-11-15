import React from 'react';
import Link from 'next/link';
import { Cookie, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';
import { SupportedLang } from '@/config/pages';
import { JsonLd } from '@/components/JsonLd';

export interface CookiePolicyTemplateProps {
  lang: SupportedLang;
}

export function CookiePolicyTemplate({ lang }: CookiePolicyTemplateProps) {
  const currentSlug = lang === 'en' ? 'cookie-policy' : `${lang}/cookie-policy`;

  return (
    <>
      <JsonLd
        lang={lang}
        pageId="cookie-policy"
        slug={currentSlug}
        type="site"
        title="Cookie Policy — Zetawala Money"
        description="Detailed categorization of cookies: strictly necessary, analytics, and Google AdSense advertising cookies."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-900/60 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4">
            <Cookie className="w-4 h-4 text-teal-600" />
            <span>Transparency & Consent • ePrivacy Directive</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-3">
            Cookie Policy
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            This Cookie Policy explains how Zetawala Money uses cookies and similar technologies to support our free calculators.
          </p>
        </header>

        <article className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              What Are Cookies?
            </h2>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. They allow the website to remember user preferences, maintain session stability, and deliver relevant advertising.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-slate-800">
              Cookie Categories on Zetawala Money
            </h2>

            {/* Category 1: Strictly Necessary */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  1. Strictly Necessary & Security Cookies
                </h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  Always Active
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                These cookies and local storage tokens are required for core website security, basic navigation, and storing your consent preferences (such as remembering whether you opted in or out of personalised advertising via Google’s CMP).
              </p>
            </div>

            {/* Category 2: Analytics */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  2. Performance & Web Analytics
                </h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300">
                  Cookieless
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                We use Cloudflare Web Analytics to understand aggregated site performance and popular tools. Cloudflare Web Analytics is engineered to be <strong>100% cookieless</strong>: it does not use cookies, does not collect personal identifiers, and protects user anonymity.
              </p>
            </div>

            {/* Category 3: Advertising */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  3. Advertising Cookies (Google AdSense)
                </h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
                  Requires Consent in EEA/UK
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Google and its certified ad technology partners use cookies to measure ad performance, prevent fraud, and serve advertisements. For users in the EEA, the UK, and Switzerland, personalised ads are served only when you give your consent through Google’s certified consent message.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              How Can You Manage Cookies?
            </h2>
            <p>
              You can control and manage cookies in multiple ways:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                <strong>Browser Settings:</strong> You can configure your browser to block, refuse, or delete cookies at any time through your browser preferences (Chrome, Safari, Firefox, Edge).
              </li>
              <li>
                <strong>Google Ads Settings:</strong> Opt out of personalised ads across Google network sites at{' '}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 font-semibold underline"
                >
                  https://adssettings.google.com
                </a>
                .
              </li>
              <li>
                <strong>Industry Opt-Out Platforms:</strong> You can opt out of participating behavioral advertising networks at{' '}
                <a
                  href="https://www.youronlinechoices.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 font-semibold underline"
                >
                  Your Online Choices (Europe)
                </a>
                .
              </li>
            </ul>
          </section>
        </article>
      </div>
    </>
  );
}

export default CookiePolicyTemplate;
