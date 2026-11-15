import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, Cookie, Globe2, FileText, CheckCircle2 } from 'lucide-react';
import { SupportedLang } from '@/config/pages';
import { siteConfig } from '@/config/site';
import { JsonLd } from '@/components/JsonLd';
import { getSitePageLink } from '@/config/site-pages';

export interface PrivacyPolicyTemplateProps {
  lang: SupportedLang;
}

const PRIVACY_TITLES: Record<SupportedLang, { title: string; subtitle: string; lastUpdated: string }> = {
  en: {
    title: 'Privacy Policy',
    subtitle: 'Comprehensive privacy terms covering GDPR, UK GDPR, KVKK, Google AdSense, and browser-only processing.',
    lastUpdated: '15 November 2026',
  },
  de: {
    title: 'Datenschutzerklärung',
    subtitle: 'Informationen zur Datenverarbeitung nach DSGVO, Google AdSense, Cloudflare und rein lokaler Ausführung.',
    lastUpdated: '15. November 2026',
  },
  pl: {
    title: 'Polityka Prywatności',
    subtitle: 'Zasady ochrony danych osobowych (RODO), Google AdSense, analityki Cloudflare i obliczeń lokalnych.',
    lastUpdated: '15 listopada 2026',
  },
  tr: {
    title: 'Gizlilik Politikası ve KVKK Aydınlatma Metni',
    subtitle: 'KVKK, GDPR, Google AdSense reklam çerezleri ve tarayıcı içi yerel hesaplama prensiplerimiz.',
    lastUpdated: '15 Kasım 2026',
  },
  ro: {
    title: 'Politica de Confidențialitate',
    subtitle: 'Protecția datelor conform GDPR, Google AdSense, Cloudflare și procesare exclusivă în browser.',
    lastUpdated: '15 noiembrie 2026',
  },
  fr: {
    title: 'Politique de Confidentialité',
    subtitle: 'Protection des données conforme au RGPD, Google AdSense et traitement 100% local en navigateur.',
    lastUpdated: '15 novembre 2026',
  },
  es: {
    title: 'Política de Privacidad',
    subtitle: 'Protección de datos RGPD, cookies de Google AdSense y procesamiento exclusivo en el navegador.',
    lastUpdated: '15 de noviembre de 2026',
  },
  it: {
    title: 'Informativa sulla Privacy',
    subtitle: 'Tutela dei dati personali ai sensi del GDPR, Google AdSense e calcoli eseguiti solo nel browser.',
    lastUpdated: '15 novembre 2026',
  },
  nl: {
    title: 'Privacybeleid',
    subtitle: 'Gegevensbescherming conform AVG/GDPR, Google AdSense en lokale berekeningen in de browser.',
    lastUpdated: '15 november 2026',
  },
};

export function PrivacyPolicyTemplate({ lang }: PrivacyPolicyTemplateProps) {
  const t = PRIVACY_TITLES[lang] || PRIVACY_TITLES.en;
  const currentSlug = lang === 'en' ? 'privacy-policy' : `${lang}/datenschutz`;

  return (
    <>
      <JsonLd
        lang={lang}
        pageId="privacy-policy"
        slug={currentSlug}
        type="site"
        title={t.title}
        description={t.subtitle}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-900/60 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4">
            <Lock className="w-4 h-4 text-teal-600" />
            <span>GDPR • UK GDPR • KVKK • Strict Privacy Architecture</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-3">
            {t.title}
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            {t.subtitle}
          </p>
          <div className="text-xs text-slate-400 dark:text-slate-500 font-mono">
            Last Updated: {t.lastUpdated}
          </div>
        </header>

        <article className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
          {/* 1. Core Commitment: Browser-only processing */}
          <section className="p-6 rounded-2xl bg-teal-50/60 dark:bg-slate-900 border border-teal-200/60 dark:border-slate-800">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white mb-2 text-base">
              <Eye className="w-5 h-5 text-teal-600" />
              <h2>1. Fundamental Architecture: 100% In-Browser Calculations</h2>
            </div>
            <p>
              Zetawala Money is deliberately engineered as a purely static, client-side web utility. When you use our calculators:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm mt-2">
              <li>
                <strong>Bank Account Numbers & IBANs:</strong> The characters you enter into the IBAN validator or BLZ tool are verified locally in your browser’s memory using the ISO 13616 modulo-97 algorithm. They are never sent across the internet, logged in access files, or transmitted to any remote database.
              </li>
              <li>
                <strong>Salaries, Taxable Income & Deductions:</strong> All salary, tax, and social contribution formulas execute strictly within your device’s JavaScript engine.
              </li>
              <li>
                <strong>Travel Dates & Schengen Stays:</strong> Stays entered into the Schengen calculator remain on your device.
              </li>
            </ul>
          </section>

          {/* 2. LocalStorage */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              2. Use of LocalStorage on Your Device
            </h2>
            <p>
              Certain tools (such as the Schengen 90/180 calculator) offer the convenience of saving your trip history so you do not have to re-type it upon your next visit.
            </p>
            <p>
              This information is stored exclusively in your browser’s HTML5 <code>localStorage</code> container. It remains exclusively on your own personal device, is never transmitted to our servers or third parties, and can be cleared at any time by clearing your browser cache or clicking the tool’s reset button.
            </p>
          </section>

          {/* 3. Advertising & Google AdSense */}
          <section className="space-y-3 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white mb-1 text-base">
              <Cookie className="w-5 h-5 text-teal-600" />
              <h2>3. Display Advertising & Google AdSense Compliance</h2>
            </div>
            <p>
              To keep our tools completely free without paywalls or subscriptions, Zetawala Money displays digital advertising served by Google AdSense and its certified advertising partners.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm mt-2">
              <li>
                Third-party vendors, including Google, use cookies to serve ads based on a user’s prior visits to this website or other websites across the internet.
              </li>
              <li>
                Google’s use of advertising cookies enables it and its partners to serve ads to users based on their visits to our site and/or other sites on the Internet.
              </li>
              <li>
                <strong>Consent Management (EEA, UK, Switzerland):</strong> For visitors located in the European Economic Area (EEA), the United Kingdom, and Switzerland, personalised advertising is only served if you explicitly give your informed consent via Google’s certified Consent Management Platform (CMP). If you decline or choose non-personalised ads, cookies will only be used for frequency capping, aggregated ad reporting, and fraud prevention.
              </li>
              <li>
                <strong>Opt-Out:</strong> Users may opt out of personalised advertising at any time by visiting{' '}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 font-semibold underline"
                >
                  Google Ads Settings (https://adssettings.google.com)
                </a>
                .
              </li>
              <li>
                For further information on how Google processes personal data when you use partner sites, visit{' '}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 font-semibold underline"
                >
                  Google Privacy & Terms for Partner Sites
                </a>
                .
              </li>
            </ul>
          </section>

          {/* 4. Analytics */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              4. Cookieless Web Analytics (Cloudflare)
            </h2>
            <p>
              We use Cloudflare Web Analytics to monitor aggregate traffic trends, page views, and performance metrics across the globe.
            </p>
            <p>
              Unlike traditional tracking platforms, Cloudflare Web Analytics is <strong>100% cookieless</strong>. It does not use any tracking pixels, does not collect personal identifiers or IP addresses, and does not follow users across third-party websites. It is engineered specifically to preserve complete visitor anonymity.
            </p>
          </section>

          {/* 5. User Rights (GDPR & KVKK) */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              5. Your Legal Rights Under GDPR, UK GDPR, and KVKK
            </h2>
            <p>
              Depending on your location, you hold statutory rights under applicable privacy legislation (such as the EU/UK General Data Protection Regulation and the Turkish Law on the Protection of Personal Data No. 6698 / KVKK):
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm pt-2">
              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <strong>Right to Information & Access:</strong> The right to know whether personal data is processed.
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <strong>Right to Withdraw Consent:</strong> The right to revoke advertising cookie consent at any time.
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <strong>Right to Erasure / Deletion:</strong> The right to request removal of contact messages.
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <strong>Right to Lodge a Complaint:</strong> The right to contact your national supervisory authority (e.g. ICO in the UK, BfDI in Germany, UODO in Poland, ANSPDCP in Romania, KVKK in Turkey).
              </div>
            </div>
          </section>

          {/* 6. Cookie Categories & Policy Link */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              6. Categories of Cookies Used
            </h2>
            <p>
              For a detailed breakdown of strictly necessary, performance, and advertising cookies, please consult our dedicated{' '}
              <Link
                href={getSitePageLink('cookiePolicy', lang)}
                className="text-teal-600 font-semibold underline"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </section>

          {/* 7. Contact Information */}
          <section className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              7. Data Controller & Contact
            </h2>
            <p className="text-xs sm:text-sm">
              If you have any questions regarding this Privacy Policy or wish to exercise any of your statutory privacy rights, please reach out via our{' '}
              <Link href={getSitePageLink('contact', lang)} className="text-teal-600 font-semibold underline">
                contact page
              </Link>{' '}
              or write to our privacy officer at <code>privacy@zetawala.com</code>.
            </p>
          </section>
        </article>
      </div>
    </>
  );
}

export default PrivacyPolicyTemplate;
