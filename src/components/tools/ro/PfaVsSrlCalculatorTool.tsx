'use client';

import React, { useState } from 'react';
import {
  Scale,
  Briefcase,
  Building,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';
import { calculatePfaVsSrlRo } from '@/lib/salary/ro';
import { formatCurrency } from '@/lib/formatters';

export function PfaVsSrlCalculatorTool() {
  const [revenueInput, setRevenueInput] = useState<string>('180000');
  const [expensesInput, setExpensesInput] = useState<string>('20000');
  const [hasOtherSalary, setHasOtherSalary] = useState<boolean>(false);
  const [isItOrConsultancy, setIsItOrConsultancy] = useState<boolean>(false);

  const parsedRevenue = parseFloat(revenueInput.replace(/\s+/g, '').replace(',', '.')) || 0;
  const parsedExpenses = parseFloat(expensesInput.replace(/\s+/g, '').replace(',', '.')) || 0;

  const comparison = calculatePfaVsSrlRo({
    annualRevenue: parsedRevenue,
    annualExpenses: parsedExpenses,
    hasOtherSalaryContract: hasOtherSalary,
    isItOrConsultancy,
  });

  const { pfa, srl, betterChoice, netDifference } = comparison;

  return (
    <div className="space-y-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
      {/* HEADER */}
      <div className="border-b border-slate-100 pb-5 dark:border-slate-800">
        <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
          <Scale className="h-6 w-6 text-teal-600" />
          Calculator PFA vs SRL 2026: Comparație Impozite și Profit Net
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Află dacă este mai avantajos să funcționezi ca PFA (Persoană Fizică Autorizată în sistem real) sau ca SRL (Microîntreprindere cu 1 angajat și dividende 8%) în funcție de venituri și cheltuieli.
        </p>
      </div>

      {/* INPUT CONTROLS */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label htmlFor="ro-pfa-revenue" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            Încasări / Venit Anual Brut (RON)
          </label>
          <input
            id="ro-pfa-revenue"
            type="text"
            inputMode="decimal"
            value={revenueInput}
            onChange={(e) => setRevenueInput(e.target.value)}
            placeholder="Ex. 180000"
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-base font-semibold text-slate-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>

        <div>
          <label htmlFor="ro-pfa-expenses" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            Cheltuieli Anuale Deductibile (RON)
          </label>
          <input
            id="ro-pfa-expenses"
            type="text"
            inputMode="decimal"
            value={expensesInput}
            onChange={(e) => setExpensesInput(e.target.value)}
            placeholder="Ex. 20000"
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-base font-semibold text-slate-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>

        <div className="flex flex-col justify-end space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={hasOtherSalary}
              onChange={(e) => setHasOtherSalary(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
            />
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
              Am și contract individual de muncă (CIM)
            </span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isItOrConsultancy}
              onChange={(e) => setIsItOrConsultancy(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
            />
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
              Domeniu IT sau consultanță (cota 3% micro)
            </span>
          </label>
        </div>

        <div className="flex items-end">
          <div className="w-full rounded-xl bg-slate-100 p-3 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            Plafon microîntreprinderi: 60.000 EUR (1% sau 3%) și 500.000 EUR max. Salariul minim de referință 2026: 4.050 lei.
          </div>
        </div>
      </div>

      {/* VERDICT BANNER */}
      <div className={`rounded-2xl p-6 text-white shadow-md ${
        betterChoice === 'srl'
          ? 'bg-gradient-to-r from-teal-600 to-emerald-700'
          : 'bg-gradient-to-r from-blue-600 to-indigo-700'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
              {betterChoice === 'srl' ? 'SRL Microîntreprindere Câștigătoare' : 'PFA Sistem Real Câștigător'}
            </span>
            <div className="mt-2 text-2xl sm:text-3xl font-extrabold">
              {betterChoice === 'srl' ? 'SRL' : 'PFA'} îți aduce cu{' '}
              {formatCurrency(Math.abs(netDifference), 'ro')} mai mult profit net pe an!
            </div>
            <p className="mt-1 text-xs text-white/80">
              Diferența lunară echivalentă: {formatCurrency(Math.abs(netDifference) / 12, 'ro')} în buzunar.
            </p>
          </div>
        </div>
      </div>

      {/* SIDE-BY-SIDE COMPARISON */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* PFA CARD */}
        <div className={`rounded-2xl border p-6 transition ${
          betterChoice === 'pfa'
            ? 'border-blue-500 bg-blue-50/20 dark:bg-blue-950/20'
            : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
        }`}>
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
              <Briefcase className="h-5 w-5 text-blue-600" />
              Persoană Fizică Autorizată (PFA)
            </h3>
            <span className="rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-700 dark:bg-blue-900 dark:text-blue-300">
              Sistem Real
            </span>
          </div>

          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Venit Net Impozabil (Brut - Cheltuieli):</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {formatCurrency(pfa.netTaxableIncome, 'ro')}
              </span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
              <span className="text-slate-600 dark:text-slate-400">CAS Pensii (plafon 12/24 salarii):</span>
              <span className="font-semibold text-rose-600">
                -{formatCurrency(pfa.casAmount, 'ro')}
              </span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
              <span className="text-slate-600 dark:text-slate-400">CASS Sănătate (10% plafonat 6-60 salarii):</span>
              <span className="font-semibold text-rose-600">
                -{formatCurrency(pfa.cassAmount, 'ro')}
              </span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
              <span className="text-slate-600 dark:text-slate-400">Impozit pe Venit (10%):</span>
              <span className="font-semibold text-rose-600">
                -{formatCurrency(pfa.incomeTax, 'ro')}
              </span>
            </div>
            <div className="flex justify-between pt-2 text-base font-bold text-slate-900 dark:text-white">
              <span>Bani Rămași în Mână (Net Anual):</span>
              <span className="text-blue-600">
                {formatCurrency(pfa.netProfit, 'ro')}
              </span>
            </div>
            <div className="text-xs text-slate-500">
              Rata efectivă de taxare pe PFA: {(pfa.effectiveTaxRate * 100).toFixed(1)}%. Banii pot fi cheltuiți oricând fără justificare de dividende.
            </div>
          </div>
        </div>

        {/* SRL CARD */}
        <div className={`rounded-2xl border p-6 transition ${
          betterChoice === 'srl'
            ? 'border-teal-500 bg-teal-50/20 dark:bg-teal-950/20'
            : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
        }`}>
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
              <Building className="h-5 w-5 text-teal-600" />
              SRL Microîntreprindere
            </h3>
            <span className="rounded-md bg-teal-100 px-2 py-0.5 text-xs font-bold text-teal-700 dark:bg-teal-900 dark:text-teal-300">
              Cota {(srl.microTaxRate * 100).toFixed(0)}% + Dividende 8%
            </span>
          </div>

          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Impozit Venit Micro ({(srl.microTaxRate * 100).toFixed(0)}% din încasări):</span>
              <span className="font-semibold text-rose-600">
                -{formatCurrency(srl.microTaxAmount, 'ro')}
              </span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
              <span className="text-slate-600 dark:text-slate-400">Cost Anual 1 Angajat Minim (salariu + taxe):</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                -{formatCurrency(srl.minimumSalaryAnnualCost, 'ro')}
              </span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
              <span className="text-slate-600 dark:text-slate-400">Impozit pe Dividende (8%):</span>
              <span className="font-semibold text-rose-600">
                -{formatCurrency(srl.dividendTax, 'ro')}
              </span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
              <span className="text-slate-600 dark:text-slate-400">CASS Dividende Persoană Fizică (plafon 6/12/24):</span>
              <span className="font-semibold text-rose-600">
                -{formatCurrency(srl.dividendCass, 'ro')}
              </span>
            </div>
            <div className="flex justify-between pt-2 text-base font-bold text-slate-900 dark:text-white">
              <span>Bani Rămași în Mână (Net Dividende + Salariu Net):</span>
              <span className="text-teal-600">
                {formatCurrency(srl.netProfit, 'ro')}
              </span>
            </div>
            <div className="text-xs text-slate-500">
              Rata efectivă de taxare pe SRL: {(srl.effectiveTaxRate * 100).toFixed(1)}%. Include protecția patrimoniului personal și răspunderea limitată.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
