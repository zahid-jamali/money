import React from 'react';
import Link from 'next/link';
import { Home, ArrowRight, Landmark, Receipt, TrendingUp, Plane } from 'lucide-react';

export default function GlobalNotFound() {
  const languageTools = [
    {
      lang: 'English (UK / Global)',
      tools: [
        { name: 'IBAN Checker & Validator', href: '/iban-checker/' },
        { name: 'Schengen 90/180 Calculator', href: '/schengen-calculator/' },
        { name: 'UK Electricity Cost Calculator', href: '/electricity-cost-calculator/uk/' },
        { name: 'UK VAT Calculator', href: '/vat-calculator/uk/' },
      ],
    },
    {
      lang: 'Deutsch (Deutschland)',
      tools: [
        { name: 'IBAN prüfen & validieren', href: '/de/iban-pruefen/' },
        { name: 'Deutsche BLZ Suche (Bundesbank)', href: '/de/blz-suche/' },
        { name: 'Mehrwertsteuerrechner (19% & 7%)', href: '/de/mwst-rechner/' },
        { name: 'Stromkostenrechner', href: '/de/stromkosten-rechner/' },
      ],
    },
    {
      lang: 'Polski (Polska)',
      tools: [
        { name: 'Kalkulator Wynagrodzeń 2026', href: '/pl/kalkulator-wynagrodzen/' },
        { name: 'Kalkulator B2B vs UoP', href: '/pl/kalkulator-b2b/' },
        { name: 'Płaca Minimalna 2026', href: '/pl/placa-minimalna/' },
        { name: 'Kalkulator VAT Polska', href: '/pl/kalkulator-vat/' },
      ],
    },
    {
      lang: 'Türkçe (Türkiye)',
      tools: [
        { name: 'Kıdem Tazminatı Hesaplama 2026', href: '/tr/kidem-tazminati-hesaplama/' },
        { name: 'İhbar Tazminatı Hesaplama', href: '/tr/ihbar-tazminati-hesaplama/' },
        { name: 'Brütten Nete Maaş Hesaplama', href: '/tr/brutten-nete-maas-hesaplama/' },
        { name: 'Schengen Vize Günü Hesaplama', href: '/tr/schengen-gun-hesaplama/' },
      ],
    },
    {
      lang: 'Română (România)',
      tools: [
        { name: 'Calculator Salariu 2026 (Brut în Net)', href: '/ro/calculator-salariu/' },
        { name: 'Calculator PFA vs SRL', href: '/ro/calculator-pfa-srl/' },
        { name: 'Salariul Minim 4.050 lei', href: '/ro/salariul-minim/' },
        { name: 'Calculator TVA România', href: '/ro/calculator-tva/' },
      ],
    },
    {
      lang: 'Français, Español, Italiano, Nederlands',
      tools: [
        { name: 'Vérificateur IBAN (FR)', href: '/fr/verifier-iban/' },
        { name: 'Validar IBAN (ES)', href: '/es/validar-iban/' },
        { name: 'Verifica IBAN (IT)', href: '/it/verifica-iban/' },
        { name: 'IBAN Controleren (NL)', href: '/nl/iban-controleren/' },
      ],
    },
  ];

  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans p-4 sm:p-8 flex flex-col justify-between">
        <div className="max-w-4xl mx-auto w-full my-auto py-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-900">
              Error 404
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mt-4 mb-2 tracking-tight">
              Page Not Found
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              The calculator or page you requested could not be located. Explore our most popular financial tools below or return to the homepage.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-xs hover:shadow-md transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Go to English Homepage</span>
            </Link>
          </div>

          {/* Multilingual Popular Tools Grid */}
          <div className="border border-slate-200 dark:border-slate-800 rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs">
            <h2 className="text-base font-bold text-slate-900 dark:text-white mb-6 pb-2 border-b border-slate-200 dark:border-slate-800">
              Top Calculators by Language & Region
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {languageTools.map((sec, idx) => (
                <div key={idx} className="space-y-2.5">
                  <h3 className="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider">
                    {sec.lang}
                  </h3>
                  <ul className="space-y-1.5 text-xs">
                    {sec.tools.map((t, tIdx) => (
                      <li key={tIdx}>
                        <Link
                          href={t.href}
                          className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center justify-between group"
                        >
                          <span>{t.name}</span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="text-center text-xs text-slate-400 py-4">
          © 2026 Zetawala Money. All rights reserved. Zero server storage, 100% in-browser calculations.
        </footer>
      </body>
    </html>
  );
}
