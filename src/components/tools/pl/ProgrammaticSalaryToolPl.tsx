'use client';

import React, { useState } from 'react';
import {
  Banknote,
  Building2,
  Scale,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Percent,
} from 'lucide-react';
import Link from 'next/link';
import {
  calculatePolishSalary,
  calculateB2bVsUop,
} from '@/lib/salary/pl';
import { formatCurrency } from '@/lib/formatters';

interface ProgrammaticSalaryToolPlProps {
  grossAmount: number;
}

export function ProgrammaticSalaryToolPl({ grossAmount }: ProgrammaticSalaryToolPlProps) {
  const [activeTab, setActiveTab] = useState<'uop' | 'b2b'>('uop');

  const uopResult = calculatePolishSalary({
    grossSalary: grossAmount,
    contractType: 'uop',
    kupType: 'standard',
    pit2Option: 'full',
  });

  const uopMonth = uopResult.monthlyBreakdown[0] || {
    grossSalary: grossAmount,
    netSalary: 0,
    totalZusSocialEmployee: 0,
    zusEmerytalneEmployee: 0,
    zusRentoweEmployee: 0,
    zusChoroboweEmployee: 0,
    zdrowotnaAmount: 0,
    pitAdvance: 0,
    totalEmployerCost: 0,
  };

  // B2B comparison at same gross / employer cost
  const b2bComparison = calculateB2bVsUop({
    grossSalaryOrInvoice: grossAmount,
    inputBasis: 'uop_gross',
    businessExpenses: 1000,
    zusType: 'pelny',
    taxRegime: 'ryczalt',
    ryczaltRate: 0.12,
  });

  return (
    <div className="space-y-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      {/* HEADER */}
      <div className="border-b border-slate-100 pb-5">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-800">
            Oficjalne stawki 2026 (Polski Ład)
          </span>
          <span className="text-xs font-medium text-slate-500">
            Umowa o pracę & Kontrakt B2B
          </span>
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
          {formatCurrency(grossAmount, 'pl', 'PLN')} brutto – ile to netto na rękę?
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Dokładne wyliczenie wypłaty dla kwoty {formatCurrency(grossAmount, 'pl', 'PLN')} brutto na umowie o pracę oraz porównanie z kontraktem B2B.
        </p>
      </div>

      {/* QUICK COMPARISON HERO */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* UOP NET */}
        <div className="rounded-2xl border-2 border-red-600/30 bg-gradient-to-br from-red-50/60 to-rose-50/30 p-5">
          <span className="text-xs font-bold uppercase tracking-wider text-red-800 block">
            Na rękę (Netto UoP)
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 block">
            {formatCurrency(uopMonth.netSalary, 'pl', 'PLN')}
          </span>
          <span className="text-[11px] text-slate-500 mt-1 block">
            Miesięcznie ({formatCurrency(uopResult.annualNet, 'pl', 'PLN')} rocznie)
          </span>
        </div>

        {/* B2B NET */}
        <div className="rounded-2xl border border-indigo-200 bg-indigo-50/40 p-5">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-800 block">
            Na rękę (B2B Ryczałt 12%)
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-indigo-950 mt-2 block">
            {formatCurrency(b2bComparison.b2b.netMonthly, 'pl', 'PLN')}
          </span>
          <span className="text-[11px] text-indigo-700 mt-1 block">
            {b2bComparison.monthlyDifference > 0
              ? `+${formatCurrency(b2bComparison.monthlyDifference, 'pl', 'PLN')} więcej niż na UoP`
              : `${formatCurrency(b2bComparison.monthlyDifference, 'pl', 'PLN')} różnicy`}
          </span>
        </div>

        {/* EMPLOYER TOTAL COST */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
            Całkowity koszt pracodawcy
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 block">
            {formatCurrency(uopMonth.totalEmployerCost, 'pl', 'PLN')}
          </span>
          <span className="text-[11px] text-slate-500 mt-1 block">
            Brutto + ZUS pracodawcy (+{formatCurrency(uopMonth.totalEmployerCost - grossAmount, 'pl', 'PLN')})
          </span>
        </div>
      </div>

      {/* DETAILED DEDUCTIONS ACCORDION / TABS */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
        <div className="flex border-b border-slate-200 pb-3 gap-4">
          <button
            type="button"
            onClick={() => setActiveTab('uop')}
            className={`text-sm font-bold pb-2 transition-all border-b-2 -mb-3.5 ${
              activeTab === 'uop'
                ? 'border-red-600 text-red-600'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            Szczegółowy pasek wypłaty (UoP)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('b2b')}
            className={`text-sm font-bold pb-2 transition-all border-b-2 -mb-3.5 ${
              activeTab === 'b2b'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            Symulacja kosztów B2B
          </button>
        </div>

        {activeTab === 'uop' ? (
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-600 border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3">Składnik pensji</th>
                  <th className="py-2.5 px-3">Stawka</th>
                  <th className="py-2.5 px-3 font-bold text-slate-900">Kwota (PLN)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="font-bold bg-slate-50/50">
                  <td className="py-2 px-3 text-slate-900">Wynagrodzenie brutto</td>
                  <td className="py-2 px-3">100%</td>
                  <td className="py-2 px-3 text-slate-900">{formatCurrency(grossAmount, 'pl', 'PLN')}</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">ZUS Emerytalne (pracownik)</td>
                  <td className="py-2 px-3">9,76%</td>
                  <td className="py-2 px-3 text-rose-700">-{formatCurrency(uopMonth.zusEmerytalneEmployee, 'pl', 'PLN')}</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">ZUS Rentowe (pracownik)</td>
                  <td className="py-2 px-3">1,50%</td>
                  <td className="py-2 px-3 text-rose-700">-{formatCurrency(uopMonth.zusRentoweEmployee, 'pl', 'PLN')}</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">ZUS Chorobowe (pracownik)</td>
                  <td className="py-2 px-3">2,45%</td>
                  <td className="py-2 px-3 text-rose-700">-{formatCurrency(uopMonth.zusChoroboweEmployee, 'pl', 'PLN')}</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Składka zdrowotna NFZ</td>
                  <td className="py-2 px-3">9,00%</td>
                  <td className="py-2 px-3 text-rose-700">-{formatCurrency(uopMonth.zdrowotnaAmount, 'pl', 'PLN')}</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Zaliczka na podatek dochodowy (PIT)</td>
                  <td className="py-2 px-3">12% (z ulgą 300 zł)</td>
                  <td className="py-2 px-3 text-rose-700">-{formatCurrency(uopMonth.pitAdvance, 'pl', 'PLN')}</td>
                </tr>
              </tbody>
              <tfoot className="bg-slate-50 font-extrabold text-slate-900 border-t border-slate-200">
                <tr>
                  <td className="py-2.5 px-3 text-red-800">Wypłata na rękę (Netto):</td>
                  <td className="py-2.5 px-3">{(100 - uopResult.effectiveEmployeeTaxRate * 100).toFixed(1)}%</td>
                  <td className="py-2.5 px-3 text-red-700 text-sm">{formatCurrency(uopMonth.netSalary, 'pl', 'PLN')}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        ) : (
          <div className="space-y-3 text-xs text-slate-700">
            <p>
              Wystawiając fakturę B2B na kwotę <strong>{formatCurrency(grossAmount, 'pl', 'PLN')} netto</strong> przy opodatkowaniu ryczałtem 12% (np. programista IT) oraz opłacaniu pełnego ZUS-u z chorobowym:
            </p>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1.5">
              <div className="flex justify-between">
                <span>Przychód z faktury (Netto):</span>
                <span className="font-bold text-slate-900">{formatCurrency(grossAmount, 'pl', 'PLN')}</span>
              </div>
              <div className="flex justify-between text-rose-700">
                <span>Składki ZUS społeczne (Pełny ZUS):</span>
                <span>-{formatCurrency(b2bComparison.b2b.socialZusMonthly, 'pl', 'PLN')}</span>
              </div>
              <div className="flex justify-between text-rose-700">
                <span>Składka zdrowotna NFZ:</span>
                <span>-{formatCurrency(b2bComparison.b2b.healthMonthly, 'pl', 'PLN')}</span>
              </div>
              <div className="flex justify-between text-rose-700">
                <span>Ryczałt od przychodów (12%):</span>
                <span>-{formatCurrency(b2bComparison.b2b.incomeTaxMonthly, 'pl', 'PLN')}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Przykładowe koszty firmowe:</span>
                <span>-{formatCurrency(b2bComparison.b2b.businessExpensesMonthly, 'pl', 'PLN')}</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-2 font-bold text-indigo-950 text-sm">
                <span>Zostaje w kieszeni na rękę:</span>
                <span className="text-emerald-700">{formatCurrency(b2bComparison.b2b.netMonthly, 'pl', 'PLN')}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA LINKS TO FULL TOOLS */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl bg-slate-50 p-4 text-xs">
        <span className="text-slate-600">
          Chcesz sprawdzić inne parametry (np. ulga do 26 lat, PPK, podwyższone KUP lub inny ryczałt)?
        </span>
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/pl/kalkulator-wynagrodzen/"
            className="rounded-lg bg-red-600 px-3 py-1.5 font-bold text-white hover:bg-red-700"
          >
            Pełny kalkulator UoP
          </Link>
          <Link
            href="/pl/kalkulator-b2b/"
            className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 font-semibold text-slate-700 hover:bg-slate-50"
          >
            Porównywarka B2B
          </Link>
        </div>
      </div>
    </div>
  );
}
