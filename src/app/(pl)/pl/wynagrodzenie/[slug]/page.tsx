import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  POLAND_PROGRAMMATIC_SALARY_AMOUNTS,
  POLAND_SALARY_RULES_2026,
} from '@/rules/pl/salary-2026';
import { calculatePolishSalary, calculateB2bVsUop } from '@/lib/salary/pl';
import { ProgrammaticSalaryToolPl } from '@/components/tools/pl';
import { formatCurrency } from '@/lib/formatters';
import { siteConfig } from '@/config/site';
import { ChevronRight, HelpCircle, CheckCircle2, ArrowLeft } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return POLAND_PROGRAMMATIC_SALARY_AMOUNTS.map((amount) => ({
    slug: `${amount}-brutto-ile-netto`,
  }));
}

function parseAmountFromSlug(slug: string): number | null {
  const match = slug.match(/^(\d+)-brutto-ile-netto$/);
  if (!match) return null;
  const num = parseInt(match[1], 10);
  return POLAND_PROGRAMMATIC_SALARY_AMOUNTS.includes(num) ? num : null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const amount = parseAmountFromSlug(slug);
  if (!amount) return {};

  const uop = calculatePolishSalary({ grossSalary: amount });
  const netMonthly = uop.monthlyBreakdown[0]?.netSalary || 0;

  const title = `${amount.toLocaleString('pl-PL')} zł brutto – ile to netto na rękę w 2026 roku?`;
  const description = `Zarobki ${amount.toLocaleString('pl-PL')} zł brutto to dokładnie ${formatCurrency(netMonthly, 'pl', 'PLN')} na rękę na umowie o pracę. Sprawdź potrącenia ZUS, zaliczkę na PIT oraz porównanie z kontraktem B2B.`;
  const canonicalUrl = `${siteConfig.url}/pl/wynagrodzenie/${slug}/`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'article',
      locale: 'pl_PL',
    },
  };
}

export default async function ProgrammaticSalaryPagePl({ params }: PageProps) {
  const { slug } = await params;
  const amount = parseAmountFromSlug(slug);
  if (!amount) {
    notFound();
  }

  const uopResult = calculatePolishSalary({
    grossSalary: amount,
    contractType: 'uop',
    kupType: 'standard',
    pit2Option: 'full',
  });

  const month1 = uopResult.monthlyBreakdown[0];
  const b2b = calculateB2bVsUop({
    grossSalaryOrInvoice: amount,
    inputBasis: 'uop_gross',
    businessExpenses: 1000,
    zusType: 'pelny',
    taxRegime: 'ryczalt',
    ryczaltRate: 0.12,
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Ile wynosi pensja netto z ${amount.toLocaleString('pl-PL')} zł brutto w 2026 roku?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Przy wynagrodzeniu ${amount.toLocaleString('pl-PL')} zł brutto pracownik na umowie o pracę otrzymuje na rękę ${formatCurrency(month1.netSalary, 'pl', 'PLN')}. Składki ZUS wynoszą ${formatCurrency(month1.totalZusSocialEmployee, 'pl', 'PLN')}, składka zdrowotna to ${formatCurrency(month1.zdrowotnaAmount, 'pl', 'PLN')}, a zaliczka na PIT wynosi ${formatCurrency(month1.pitAdvance, 'pl', 'PLN')}.`,
        },
      },
      {
        '@type': 'Question',
        name: `Jaki jest całkowity koszt pracodawcy przy zarobkach ${amount.toLocaleString('pl-PL')} zł brutto?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Całkowity koszt pracodawcy wynosi ${formatCurrency(month1.totalEmployerCost, 'pl', 'PLN')}. Pracodawca dopłaca ${formatCurrency(month1.totalEmployerCost - amount, 'pl', 'PLN')} z własnych środków na ubezpieczenia emerytalne, rentowe, wypadkowe, FP i FGSP.`,
        },
      },
      {
        '@type': 'Question',
        name: `Czy przy kwocie ${amount.toLocaleString('pl-PL')} zł bardziej opłaca się B2B czy umowa o pracę?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Na kontrakcie B2B (ryczałt 12% dla IT, pełny ZUS) zysk na rękę wynosi ${formatCurrency(b2b.b2b.netMonthly, 'pl', 'PLN')}, co stanowi ${b2b.monthlyDifference > 0 ? `o ${formatCurrency(b2b.monthlyDifference, 'pl', 'PLN')} więcej` : `${formatCurrency(b2b.monthlyDifference, 'pl', 'PLN')} różnicy`} w porównaniu do umowy o pracę.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500">
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li>
              <Link href="/pl/" className="hover:text-slate-900 transition-colors">
                Strona główna
              </Link>
            </li>
            <li><ChevronRight className="h-3 w-3 text-slate-400" /></li>
            <li>
              <Link href="/pl/kalkulator-wynagrodzen/" className="hover:text-slate-900 transition-colors">
                Kalkulator wynagrodzeń
              </Link>
            </li>
            <li><ChevronRight className="h-3 w-3 text-slate-400" /></li>
            <li className="font-semibold text-slate-900">
              {amount.toLocaleString('pl-PL')} zł brutto
            </li>
          </ol>
        </nav>

        {/* HERO INTERACTIVE TOOL */}
        <ProgrammaticSalaryToolPl grossAmount={amount} />

        {/* TWO WORKED EXAMPLES */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900">
            Przykłady rozliczenia kwoty {amount.toLocaleString('pl-PL')} zł brutto
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-red-800 block">
                Przykład 1: Standardowa umowa o pracę (UoP)
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pracownik zatrudniony na pełny etat w Warszawie, zamieszkały w miejscu wykonywania pracy (KUP 250 zł), ze złożonym formularzem PIT-2 (kwota wolna 300 zł miesięcznie):
              </p>
              <ul className="text-xs space-y-1.5 text-slate-700 border-t border-slate-100 pt-3">
                <li className="flex justify-between"><span>Brutto:</span> <strong className="text-slate-900">{formatCurrency(amount, 'pl', 'PLN')}</strong></li>
                <li className="flex justify-between"><span>Składki ZUS (13,71%):</span> <span className="text-rose-700">-{formatCurrency(month1.totalZusSocialEmployee, 'pl', 'PLN')}</span></li>
                <li className="flex justify-between"><span>Składka zdrowotna NFZ (9%):</span> <span className="text-rose-700">-{formatCurrency(month1.zdrowotnaAmount, 'pl', 'PLN')}</span></li>
                <li className="flex justify-between"><span>Zaliczka PIT:</span> <span className="text-rose-700">-{formatCurrency(month1.pitAdvance, 'pl', 'PLN')}</span></li>
                <li className="flex justify-between border-t border-slate-200 pt-1 font-bold text-red-700"><span>Wypłata na rękę:</span> <span>{formatCurrency(month1.netSalary, 'pl', 'PLN')}</span></li>
              </ul>
            </div>

            <div className="rounded-2xl border border-indigo-200 bg-white p-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-800 block">
                Przykład 2: Kontrakt B2B (Ryczałt 12%)
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Programista wystawiający comiesięczną fakturę na kwotę {amount.toLocaleString('pl-PL')} zł netto + 23% VAT, opłacający pełny ZUS oraz ponoszący 1 000 zł kosztów firmowych:
              </p>
              <ul className="text-xs space-y-1.5 text-slate-700 border-t border-indigo-50 pt-3">
                <li className="flex justify-between"><span>Faktura netto:</span> <strong className="text-slate-900">{formatCurrency(amount, 'pl', 'PLN')}</strong></li>
                <li className="flex justify-between"><span>ZUS Pełny:</span> <span className="text-rose-700">-{formatCurrency(b2b.b2b.socialZusMonthly, 'pl', 'PLN')}</span></li>
                <li className="flex justify-between"><span>NFZ:</span> <span className="text-rose-700">-{formatCurrency(b2b.b2b.healthMonthly, 'pl', 'PLN')}</span></li>
                <li className="flex justify-between"><span>Ryczałt 12%:</span> <span className="text-rose-700">-{formatCurrency(b2b.b2b.incomeTaxMonthly, 'pl', 'PLN')}</span></li>
                <li className="flex justify-between border-t border-indigo-100 pt-1 font-bold text-indigo-950"><span>Zysk na rękę:</span> <span className="text-emerald-700">{formatCurrency(b2b.b2b.netMonthly, 'pl', 'PLN')}</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* MINI FAQ SECTION */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-slate-600" />
            Często zadawane pytania: {amount.toLocaleString('pl-PL')} zł brutto
          </h3>
          <div className="space-y-3 text-xs">
            <div className="rounded-xl bg-white p-3.5 border border-slate-200">
              <span className="font-bold text-slate-900 block">
                Ile wynosi wypłata z {amount.toLocaleString('pl-PL')} zł brutto dla osoby do 26 lat?
              </span>
              <p className="mt-1 text-slate-600">
                Osoba do 26. roku życia korzystająca z Ulgi dla Młodych nie płaci podatku PIT, co podwyższa jej wypłatę o kwotę zaliczki na podatek dochodowy. Z {amount.toLocaleString('pl-PL')} zł brutto na umowie o pracę otrzyma około {formatCurrency(month1.netSalary + month1.pitAdvance, 'pl', 'PLN')} na rękę.
              </p>
            </div>
            <div className="rounded-xl bg-white p-3.5 border border-slate-200">
              <span className="font-bold text-slate-900 block">
                Jakie inne kwoty brutto są popularne?
              </span>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {[4666, 6000, 7000, 8000, 10000, 12000, 15000, 20000].map((popular) => (
                  <Link
                    key={popular}
                    href={`/pl/wynagrodzenie/${popular}-brutto-ile-netto/`}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    {popular === 4666 ? '4 666 zł (min)' : `${popular.toLocaleString('pl-PL')} zł`}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
