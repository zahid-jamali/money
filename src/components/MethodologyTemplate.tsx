import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Calendar, ExternalLink, RefreshCw, CheckCircle2 } from 'lucide-react';
import { SupportedLang } from '@/config/pages';
import { METHODOLOGY_REGISTRY } from '@/content/methodology-data';
import { JsonLd } from '@/components/JsonLd';
import { getSitePageLink } from '@/config/site-pages';

export interface MethodologyTemplateProps {
  lang: SupportedLang;
}

const TITLES_MAP: Record<SupportedLang, { title: string; subtitle: string; intro: string }> = {
  en: {
    title: 'Calculation Methodology & Official Verification Ledger',
    subtitle:
      'Every formula, statutory citation, and verified parameter powering Zetawala Money calculators.',
    intro:
      'At Zetawala Money, accuracy is non-negotiable. We adhere to a strict Zero-Hallucination policy: calculations never invent numbers or use unverified approximations. This public ledger documents the exact mathematical formula, statutory authority, valid-from effective date, and update cadence for every calculator across our network.',
  },
  de: {
    title: 'Berechnungsmethodik & Quellenverzeichnis',
    subtitle:
      'Alle mathematischen Formeln, Rechtsgrundlagen und amtlichen Richtwerte im Überblick.',
    intro:
      'Bei Zetawala Money hat mathematische und gesetzliche Exaktheit oberste Priorität. Alle Berechnungen basieren auf Primärquellen wie Bundesbank, UStG und BDEW. Dieses Verzeichnis legt die Formeln, Gültigkeitszeiträume und Aktualisierungszyklen transparent dar.',
  },
  pl: {
    title: 'Metodologia Obliczeń i Rejestr Źródeł Prawnych',
    subtitle:
      'Wszystkie formuły matematyczne, podstawy prawne Dz.U. i aktualne stawki podatkowe.',
    intro:
      'W Zetawala Money dokładność jest fundamentem zaufania. Nasze kalkulatory korzystają wyłącznie z oficjalnych aktów prawnych (Dziennik Ustaw, ZUS, Ministerstwo Finansów). Rejestr prezentuje zastosowane algorytmy, progi kwotowe i cykle aktualizacji.',
  },
  tr: {
    title: 'Hesaplama Metodolojisi ve Yasal Mevzuat Kaynakçası',
    subtitle:
      'Zetawala Money araçlarında kullanılan tüm matematiksel formüller ve resmi mevzuat verileri.',
    intro:
      'Zetawala Money hesaplama motorları; İş Kanunu, Gelir İdaresi Başkanlığı tebliğleri ve Hazine ve Maliye Bakanlığı genelgeleri esas alınarak inşa edilmiştir. Bu sayfada her aracın formülü, geçerlilik tarihi ve güncelleme periyodu kamuya açık olarak belgelenmektedir.',
  },
  ro: {
    title: 'Metodologia de Calcul și Registrul Surselor Oficiale',
    subtitle:
      'Toate formulele matematice, temeiurile legale din Codul Fiscal și cotele în vigoare.',
    intro:
      'La Zetawala Money, exactitatea calculelor este garantată prin ancorarea directă în legislația primară din România (Codul Fiscal Legea nr. 227/2015, hotărâri de Guvern și ordonanțe de urgență). Acest registru detaliază algoritmii, datele de intrare în vigoare și frecvența actualizării.',
  },
  fr: {
    title: 'Méthodologie de Calcul et Répertoire des Sources',
    subtitle: 'Toutes les formules et normes bancaires officielles utilisées par nos outils.',
    intro:
      'Zetawala Money garantit une précision absolue en s’appuyant exclusivement sur les normes internationales ISO et les réglementations bancaires officielles.',
  },
  es: {
    title: 'Metodología de Cálculo y Fuentes Oficiales',
    subtitle: 'Fórmulas matemáticas y normativas bancarias europeas que respaldan nuestras herramientas.',
    intro:
      'En Zetawala Money aplicamos estrictamente los algoritmos oficiales ISO y normativas del Banco de España y la Unión Europea para garantizar la fiabilidad total de los resultados.',
  },
  it: {
    title: 'Metodologia di Calcolo e Fonti Ufficiali',
    subtitle: 'Tutte le formule e le normative bancarie che regolano i nostri calcolatori.',
    intro:
      'Zetawala Money garantisce la massima affidabilità attraverso algoritmi conformi alle norme ISO e alla normativa bancaria dell’area SEPA.',
  },
  nl: {
    title: 'Berekeningsmethodologie & Officiële Bronnen',
    subtitle: 'Wiskundige formules en wettelijke standaarden achter onze calculators.',
    intro:
      'Zetawala Money hanteert een strikt kwaliteitsbeleid: al onze rekentools zijn gebaseerd op officiële normen zoals ISO 13616 en Europese wetgeving.',
  },
};

export function MethodologyTemplate({ lang }: MethodologyTemplateProps) {
  const t = TITLES_MAP[lang] || TITLES_MAP.en;

  return (
    <>
      <JsonLd
        lang={lang}
        pageId="methodology"
        slug={lang === 'en' ? 'methodology' : `${lang}/methodik`}
        type="site"
        title={t.title}
        description={t.subtitle}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <header className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-900/60 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>Statutory Verification Standard • Zero Hallucination</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            {t.title}
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-6">
            {t.intro}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">
                100% In-Browser Execution
              </span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-teal-600 shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">
                Quarterly & Annual Update Cadence
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-teal-600 shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">
                Statutory Valid-From Tracking
              </span>
            </div>
          </div>
        </header>

        {/* Verification Ledger Table */}
        <div className="border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden bg-white dark:bg-slate-900 shadow-xs mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold">
                  <th className="py-3.5 px-4 min-w-[200px]">Calculator & Domain</th>
                  <th className="py-3.5 px-4 min-w-[240px]">Mathematical Formula</th>
                  <th className="py-3.5 px-4 min-w-[220px]">Statutory Legal Source</th>
                  <th className="py-3.5 px-4 min-w-[220px]">Current Values in Force</th>
                  <th className="py-3.5 px-4 min-w-[120px]">Valid From</th>
                  <th className="py-3.5 px-4 min-w-[150px]">Update Rhythm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {METHODOLOGY_REGISTRY.map((entry, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="py-4 px-4 align-top">
                      <span className="font-bold text-slate-900 dark:text-white block">
                        {entry.calculatorName}
                      </span>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300">
                          {entry.category}
                        </span>
                        <span className="text-[11px] text-slate-400 dark:text-slate-500">
                          {entry.region}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 align-top font-mono text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
                      {entry.formula}
                    </td>
                    <td className="py-4 px-4 align-top">
                      <a
                        href={entry.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold gap-1"
                      >
                        <span>{entry.statutorySource}</span>
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                      <span className="text-[11px] text-slate-400 dark:text-slate-500 block mt-1">
                        {entry.notes}
                      </span>
                    </td>
                    <td className="py-4 px-4 align-top text-slate-700 dark:text-slate-300 leading-relaxed">
                      {entry.currentValues}
                    </td>
                    <td className="py-4 px-4 align-top font-mono text-slate-600 dark:text-slate-400 whitespace-nowrap">
                      {entry.validFrom}
                    </td>
                    <td className="py-4 px-4 align-top text-slate-500 dark:text-slate-400">
                      {entry.updateRhythm}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Verification Standards Notice */}
        <section className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 max-w-4xl space-y-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Reporting a Discrepancy or Legislative Change
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Our engineering team monitors gazette publications, statutory instruments, and central bank announcements daily. If you represent an official body or identify an impending tax bracket revision or regulatory update, please submit it via our{' '}
            <Link href={getSitePageLink('contact', lang)} className="text-teal-600 font-semibold underline">
              contact form
            </Link>
            . Updates with official gazette citations are reviewed and deployed within 24 hours.
          </p>
        </section>
      </div>
    </>
  );
}

export default MethodologyTemplate;
