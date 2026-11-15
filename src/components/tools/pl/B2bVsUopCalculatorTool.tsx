'use client';

import React, { useState } from 'react';
import {
  Scale,
  Briefcase,
  HelpCircle,
  Building,
  CheckCircle2,
  TrendingUp,
  Percent,
} from 'lucide-react';
import {
  calculateB2bVsUop,
  B2bZusType,
  B2bTaxRegime,
} from '@/lib/salary/pl';
import { formatCurrency } from '@/lib/formatters';

export function B2bVsUopCalculatorTool() {
  const [amountInput, setAmountInput] = useState<string>('15000');
  const [inputBasis, setInputBasis] = useState<'uop_gross' | 'b2b_net_invoice' | 'employer_cost'>('uop_gross');
  const [expensesInput, setExpensesInput] = useState<string>('1000');
  const [zusType, setZusType] = useState<B2bZusType>('pelny');
  const [hasChorobowe, setHasChorobowe] = useState<boolean>(true);
  const [taxRegime, setTaxRegime] = useState<B2bTaxRegime>('ryczalt');
  const [ryczaltRate, setRyczaltRate] = useState<number>(0.12);

  const parsedAmount = parseFloat(amountInput.replace(/\s+/g, '').replace(',', '.')) || 0;
  const parsedExpenses = parseFloat(expensesInput.replace(/\s+/g, '').replace(',', '.')) || 0;

  const comparison = calculateB2bVsUop({
    grossSalaryOrInvoice: parsedAmount,
    inputBasis,
    businessExpenses: parsedExpenses,
    zusType,
    hasChorobowe,
    taxRegime,
    ryczaltRate,
  });

  return (
    <div className="space-y-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      {/* HEADER */}
      <div className="border-b border-slate-100 pb-5">
        <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
          <Scale className="h-6 w-6 text-indigo-600" />
          Kalkulator B2B vs Umowa o Pracę 2026
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Porównaj zyski na rękę z umowy o pracę (UoP) oraz jednoosobowej działalności gospodarczej (B2B) z uwzględnieniem kosztów, ZUS-u i form opodatkowania.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* INPUTS COLUMN */}
        <div className="space-y-5 lg:col-span-5">
          {/* BASE AMOUNT */}
          <div>
            <label htmlFor="b2b-amount-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Kwota bazowa do porównania (PLN)
            </label>
            <div className="relative mt-1.5">
              <input
                id="b2b-amount-input"
                type="text"
                inputMode="decimal"
                value={amountInput}
                onChange={(e) => setAmountInput(e.target.value)}
                placeholder="np. 15000"
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-base font-semibold text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                PLN / mies.
              </span>
            </div>

            <div className="mt-2 flex flex-wrap gap-1.5">
              {[8000, 12000, 15000, 20000, 25000, 30000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setAmountInput(preset.toString())}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100"
                >
                  {preset.toLocaleString('pl-PL')} zł
                </button>
              ))}
            </div>
          </div>

          {/* INPUT BASIS */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Co oznacza wpisana kwota?
            </label>
            <div className="mt-1.5 grid grid-cols-1 gap-1.5 sm:grid-cols-3">
              {[
                { id: 'uop_gross', label: 'Brutto UoP' },
                { id: 'b2b_net_invoice', label: 'Faktura netto B2B' },
                { id: 'employer_cost', label: 'Budżet pracodawcy' },
              ].map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setInputBasis(b.id as any)}
                  className={`rounded-xl border p-2 text-center text-xs font-medium transition-all ${
                    inputBasis === b.id
                      ? 'border-indigo-600 bg-indigo-50/70 text-indigo-700 font-bold'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          {/* B2B BUSINESS EXPENSES */}
          <div>
            <label htmlFor="b2b-expenses-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Miesięczne koszty działalności B2B (PLN)
            </label>
            <div className="relative mt-1.5">
              <input
                id="b2b-expenses-input"
                type="text"
                inputMode="decimal"
                value={expensesInput}
                onChange={(e) => setExpensesInput(e.target.value)}
                placeholder="np. 1000"
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400">
                PLN / mies.
              </span>
            </div>
            <p className="mt-1 text-[11px] text-slate-500">
              Koszty księgowości, sprzętu, leasingu auta, telefonu itp.
            </p>
          </div>

          {/* B2B TAX FORM */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Forma opodatkowania B2B
            </label>
            <div className="mt-1.5 grid grid-cols-3 gap-2">
              {[
                { id: 'ryczalt', label: 'Ryczałt' },
                { id: 'liniowy', label: 'Liniowy (19%)' },
                { id: 'skala', label: 'Skala (12/32%)' },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTaxRegime(t.id as B2bTaxRegime)}
                  className={`rounded-xl border p-2.5 text-xs font-semibold transition-all ${
                    taxRegime === t.id
                      ? 'border-indigo-600 bg-indigo-50/70 text-indigo-700 shadow-xs'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* RYCZAŁT RATE SELECTOR */}
          {taxRegime === 'ryczalt' && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Stawka ryczałtu
              </label>
              <select
                aria-label="Stawka ryczałtu"
                value={ryczaltRate}
                onChange={(e) => setRyczaltRate(parseFloat(e.target.value))}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-800 focus:border-indigo-500 focus:outline-none"
              >
                <option value={0.12}>12% – Branża IT, programowanie, oprogramowanie</option>
                <option value={0.085}>8,5% – Usługi ogólne, doradztwo niematerialne</option>
                <option value={0.15}>15% – Zarządzanie, usługi prawne i architektoniczne</option>
                <option value={0.14}>14% – Zawody medyczne i opieka zdrowotna</option>
                <option value={0.055}>5,5% – Roboty budowlane, produkcja</option>
              </select>
            </div>
          )}

          {/* ZUS TYPE */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Składki ZUS przedsiębiorcy
            </label>
            <select
              aria-label="Składki ZUS przedsiębiorcy"
              value={zusType}
              onChange={(e) => setZusType(e.target.value as B2bZusType)}
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-800 focus:border-indigo-500 focus:outline-none"
            >
              <option value="pelny">Pełny ZUS (po 30 miesiącach działalności)</option>
              <option value="preferencyjny">Preferencyjny ZUS (Mały ZUS – miesiące 7-30)</option>
              <option value="ulga_na_start">Ulga na start (pierwsze 6 miesięcy – tylko NFZ)</option>
            </select>
          </div>

          {/* VOLUNTARY SICKNESS */}
          {zusType !== 'ulga_na_start' && (
            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/60 p-3">
              <div>
                <span className="text-xs font-bold text-slate-900 block">Dobrowolne ubezpieczenie chorobowe</span>
                <span className="text-[11px] text-slate-500">Uprawnia do płatnego zasiłku chorobowego na B2B</span>
              </div>
              <input
                type="checkbox"
                id="chorobowe-checkbox"
                checked={hasChorobowe}
                onChange={(e) => setHasChorobowe(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>
          )}
        </div>

        {/* COMPARISON RESULTS HERO */}
        <div className="space-y-6 lg:col-span-7">
          {/* VERDICT BANNER */}
          <div
            className={`rounded-2xl border p-6 shadow-sm ${
              comparison.recommendedOption === 'b2b'
                ? 'border-emerald-200 bg-gradient-to-br from-emerald-50/70 to-teal-50/30'
                : comparison.recommendedOption === 'uop'
                ? 'border-blue-200 bg-gradient-to-br from-blue-50/70 to-indigo-50/30'
                : 'border-slate-200 bg-slate-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Różnica na korzyść {comparison.monthlyDifference > 0 ? 'B2B' : 'Umowy o Pracę'}
              </span>
              <span className="rounded-full bg-white px-2.5 py-0.5 text-xs font-extrabold text-slate-900 border border-slate-200 shadow-2xs">
                {comparison.monthlyDifference > 0 ? '+' : ''}
                {formatCurrency(comparison.monthlyDifference, 'pl', 'PLN')} / mies.
              </span>
            </div>

            <div className="mt-3 text-sm text-slate-800 leading-relaxed font-medium">
              {comparison.breakevenDescription}
            </div>

            <div className="mt-2 text-xs text-slate-500">
              Roczna różnica w kieszeni: <strong>{formatCurrency(comparison.annualDifference, 'pl', 'PLN')}</strong> netto.
            </div>
          </div>

          {/* SIDE BY SIDE CARDS */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* UOP CARD */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-red-600" />
                  <span className="font-bold text-slate-900 text-sm">Umowa o pracę (UoP)</span>
                </div>
                <span className="text-xs text-slate-500">Kodeks Pracy</span>
              </div>

              <div>
                <span className="text-xs text-slate-500 block">Pensja na rękę (Netto):</span>
                <span className="text-2xl font-extrabold text-slate-900 block mt-1">
                  {formatCurrency(comparison.uop.netMonthly, 'pl', 'PLN')}
                </span>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  Rocznie: {formatCurrency(comparison.uop.annualNet, 'pl', 'PLN')}
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                <div className="flex justify-between">
                  <span>Brutto na umowie:</span>
                  <span className="font-semibold text-slate-900">{formatCurrency(comparison.uop.grossMonthly, 'pl', 'PLN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>ZUS pracownika (13,71%):</span>
                  <span className="font-medium text-slate-700">{formatCurrency(comparison.uop.employeeZusMonthly, 'pl', 'PLN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Składka zdrowotna (9%):</span>
                  <span className="font-medium text-slate-700">{formatCurrency(comparison.uop.employeeHealthMonthly, 'pl', 'PLN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Zaliczka na PIT:</span>
                  <span className="font-medium text-slate-700">{formatCurrency(comparison.uop.pitMonthly, 'pl', 'PLN')}</span>
                </div>
                <div className="flex justify-between border-t border-slate-100 pt-1 text-slate-900 font-bold">
                  <span>Łączny koszt pracodawcy:</span>
                  <span>{formatCurrency(comparison.uop.employerCostMonthly, 'pl', 'PLN')}</span>
                </div>
              </div>

              <div className="rounded-xl bg-slate-50 p-2.5 text-[11px] text-slate-600">
                ✓ 26 dni płatnego urlopu<br />
                ✓ Płatne chorobowe L4 (80% / 100%)<br />
                ✓ 3-miesięczny okres wypowiedzenia
              </div>
            </div>

            {/* B2B CARD */}
            <div className="rounded-2xl border border-indigo-200 bg-white p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-indigo-50 pb-3">
                <div className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-indigo-600" />
                  <span className="font-bold text-slate-900 text-sm">Kontrakt B2B</span>
                </div>
                <span className="text-xs font-semibold text-indigo-700">Działalność</span>
              </div>

              <div>
                <span className="text-xs text-slate-500 block">Zysk na rękę (Netto):</span>
                <span className="text-2xl font-extrabold text-indigo-950 block mt-1">
                  {formatCurrency(comparison.b2b.netMonthly, 'pl', 'PLN')}
                </span>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  Rocznie: {formatCurrency(comparison.b2b.annualNet, 'pl', 'PLN')}
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                <div className="flex justify-between">
                  <span>Faktura netto:</span>
                  <span className="font-semibold text-slate-900">{formatCurrency(comparison.b2b.netInvoicedMonthly, 'pl', 'PLN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Składki ZUS społeczne:</span>
                  <span className="font-medium text-slate-700">{formatCurrency(comparison.b2b.socialZusMonthly, 'pl', 'PLN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Składka zdrowotna:</span>
                  <span className="font-medium text-slate-700">{formatCurrency(comparison.b2b.healthMonthly, 'pl', 'PLN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Podatek dochodowy:</span>
                  <span className="font-medium text-slate-700">{formatCurrency(comparison.b2b.incomeTaxMonthly, 'pl', 'PLN')}</span>
                </div>
                <div className="flex justify-between border-t border-slate-100 pt-1 text-slate-500">
                  <span>Koszty firmy:</span>
                  <span>{formatCurrency(comparison.b2b.businessExpensesMonthly, 'pl', 'PLN')}</span>
                </div>
              </div>

              <div className="rounded-xl bg-indigo-50/50 p-2.5 text-[11px] text-indigo-900">
                ⚠ Brak ustawowego urlopu wypoczynkowego<br />
                ⚠ Odpowiedzialność całym majątkiem<br />
                ⚠ Obowiązek prowadzenia księgowości
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
