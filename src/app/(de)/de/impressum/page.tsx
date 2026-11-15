import React from 'react';
import Link from 'next/link';
import { ShieldCheck, FileText, AlertCircle } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('impressum', 'de', undefined, {
  metaTitle: 'Impressum (Rechtliche Angaben) | Zetawala Money',
  metaDescription:
    'Gesetzliche Anbieterkennzeichnung und rechtliche Hinweise nach § 5 TMG für Zetawala Money.',
});

export default function GermanImpressumPage() {
  return (
    <>
      <JsonLd
        lang="de"
        pageId="impressum"
        slug="de/impressum"
        type="site"
        title="Impressum — Zetawala Money"
        description="Gesetzliche Anbieterkennzeichnung nach § 5 TMG für Zetawala Money."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-900/60 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4">
            <FileText className="w-4 h-4 text-teal-600" />
            <span>Gesetzliche Anbieterkennzeichnung (§ 5 TMG)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-3">
            Impressum
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Rechtliche Hinweise und Angaben gemäß § 5 Telemediengesetz (TMG) und § 18 Abs. 2 MStV.
          </p>
        </header>

        <article className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
          {/* Operator Notice Box */}
          <section className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <p><strong>Dienstanbieter / Betreiber:</strong> [BITTE AUSFÜLLEN: Name des Betreibers / Firmenname]</p>
              <p><strong>Rechtsform:</strong> [BITTE AUSFÜLLEN: z. B. Einzelunternehmen / GmbH / Ltd.]</p>
              <p><strong>Vertretungsberechtigte Person(en):</strong> [BITTE AUSFÜLLEN: Name des Geschäftsführers / Inhabers]</p>
              <p><strong>Anschrift:</strong> [BITTE AUSFÜLLEN: Straße und Hausnummer]</p>
              <p><strong>PLZ und Ort:</strong> [BITTE AUSFÜLLEN: Postleitzahl und Stadt, Land]</p>
            </div>
          </section>

          {/* Contact Details */}
          <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              Kontakt
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <p><strong>E-Mail:</strong> contact@zetawala.com [oder BITTE AUSFÜLLEN: alternative E-Mail-Adresse]</p>
              <p><strong>Telefon:</strong> [BITTE AUSFÜLLEN: Telefonnummer mit Ländervorwahl]</p>
              <p><strong>Webseite:</strong> https://money.zetawala.com (Teil des Netzwerks zetawala.com)</p>
            </div>
          </section>

          {/* Register & Tax ID */}
          <section className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              Registereintrag und Umsatzsteuer-ID
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <p><strong>Registergericht:</strong> [BITTE AUSFÜLLEN: z. B. Amtsgericht Berlin / Handelsregister]</p>
              <p><strong>Registernummer:</strong> [BITTE AUSFÜLLEN: z. B. HRB XXXXXX]</p>
              <p><strong>Umsatzsteuer-Identifikationsnummer (§ 27a UStG):</strong> [BITTE AUSFÜLLEN: z. B. DE XXXXXXXXX]</p>
            </div>
          </section>

          {/* Responsible for content */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p className="text-xs sm:text-sm">
              [BITTE AUSFÜLLEN: Vorname, Nachname, vollständige Anschrift der redaktionell verantwortlichen Person].
            </p>
          </section>

          {/* Dispute resolution */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              EU-Streitschlichtung und Verbraucherstreitbeilegung
            </h2>
            <p className="text-xs sm:text-sm">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline font-semibold"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p className="text-xs sm:text-sm">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          {/* Disclaimer for calculators */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Hinweis zu den Online-Rechnern
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Die auf Zetawala Money bereitgestellten Berechnungen dienen ausschließlich der unverbindlichen Information und Orientierung. Sie stellen keine steuerliche, finanzielle oder rechtliche Beratung dar. Für verbindliche Berechnungen konsultieren Sie bitte einen Steuerberater oder die zuständigen Behörden.
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
