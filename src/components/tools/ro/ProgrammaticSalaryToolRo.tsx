'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calculator,
  ArrowRight,
  TrendingUp,
  Building2,
  Users,
  ShieldCheck,
} from 'lucide-react';
import { calculateRomanianSalary } from '@/lib/salary/ro';
import {
  ROMANIA_SALARY_RULES_2026,
  ROMANIA_PROGRAMMATIC_SALARY_AMOUNTS,
} from '@/rules/ro/salary-2026';
import { formatCurrency } from '@/lib/formatters';

interface ProgrammaticSalaryToolRoProps {
  grossAmount: number;
}

export function ProgrammaticSalaryToolRo({ grossAmount }: ProgrammaticSalaryToolRoProps) {
  const [dependants, setDependants] = useState<number>(0);
  const [isUnder26, setIsUnder26] = useState<boolean>(false);
  const [schoolChildren, setSchoolChildren] = useState<number>(0);

  const result = calculateRomanianSalary({
    grossSalary: grossAmount,
    dependants,
    isUnder26,
    schoolChildrenCount: schoolChildren,
  });

  // Calculate nearby amounts for internal links and comparison
  const nearbyAmounts = ROMANIA_PROGRAMMATIC_SALARY_AMOUNTS.filter(
    (amt) => Math.abs(amt - grossAmount) <= 1500 && amt !== grossAmount,
  ).slice(0, 4);

  return (
    <div className="space-y-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
      {/* HEADER BANNER */}
      <div className="rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-700 p-6 text-white shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-100">
              Salariu Brut: {formatCurrency(grossAmount, 'ro')}
            </span>
            <h2 className="mt-1 text-2xl font-black sm:text-4xl">
              Net în Mână: {formatCurrency(result.netSalary, 'ro')}
            </h2>
            <p className="mt-1 text-xs text-teal-100">
              Costul total al angajatorului pentru acest salariu este de{' '}
              {formatCurrency(result.totalEmployerCost, 'ro')}.
            </p>
          </div>
          <div className="rounded-xl bg-white/10 p-3 text-right">
            <div className="text-xs font-semibold text-teal-100">Rată Netă</div>
            <div className="text-2xl font-black">
              {((1 - result.effectiveTaxRate) * 100).toFixed(1)}%
            </div>
            <div className="text-[10px] text-teal-200">din brut ajunge la salariat</div>
          </div>
        </div>
      </div>

      {/* QUICK STATS CARDS */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-800">
          <span className="text-[11px] font-semibold uppercase text-slate-500">CAS Pensii (25%)</span>
          <div className="mt-1 text-lg font-bold text-rose-600">
            -{formatCurrency(result.casEmployee, 'ro')}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-800">
          <span className="text-[11px] font-semibold uppercase text-slate-500">CASS Sănătate (10%)</span>
          <div className="mt-1 text-lg font-bold text-rose-600">
            -{formatCurrency(result.cassEmployee, 'ro')}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-800">
          <span className="text-[11px] font-semibold uppercase text-slate-500">Impozit Venit (10%)</span>
          <div className="mt-1 text-lg font-bold text-rose-600">
            -{formatCurrency(result.incomeTax, 'ro')}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-800">
          <span className="text-[11px] font-semibold uppercase text-slate-500">CAM Firmă (2,25%)</span>
          <div className="mt-1 text-lg font-bold text-slate-800 dark:text-slate-200">
            +{formatCurrency(result.camEmployer, 'ro')}
          </div>
        </div>
      </div>

      {/* CUSTOMIZE PARAMETERS */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-800/40">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-1.5">
          <Users className="h-4 w-4 text-teal-600" />
          Personalizează Calculul (Deduceri Personale & Vârstă)
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="ro-prog-dep" className="block text-xs font-medium text-slate-600 dark:text-slate-400">
              Persoane în întreținere
            </label>
            <select
              id="ro-prog-dep"
              value={dependants}
              onChange={(e) => setDependants(parseInt(e.target.value, 10))}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              <option value={0}>0 persoane (fără)</option>
              <option value={1}>1 persoană</option>
              <option value={2}>2 persoane</option>
              <option value={3}>3 persoane</option>
              <option value={4}>4+ persoane</option>
            </select>
          </div>

          <div>
            <label htmlFor="ro-prog-school" className="block text-xs font-medium text-slate-600 dark:text-slate-400">
              Copii la grădiniță / școală
            </label>
            <select
              id="ro-prog-school"
              value={schoolChildren}
              onChange={(e) => setSchoolChildren(parseInt(e.target.value, 10))}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              <option value={0}>0 copii</option>
              <option value={1}>1 copil (+100 lei deducere)</option>
              <option value={2}>2 copii (+200 lei deducere)</option>
            </select>
          </div>

          <div className="flex items-center pt-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isUnder26}
                onChange={(e) => setIsUnder26(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
              />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                Tânăr sub 26 ani
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* FULL DETAILED BREAKDOWN TABLE */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
        <table className="w-full text-left text-sm text-slate-700 dark:text-slate-300">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            <tr>
              <th className="px-4 py-2.5">Indicator</th>
              <th className="px-4 py-2.5">Procent</th>
              <th className="px-4 py-2.5 text-right">Sumă Lunar</th>
              <th className="px-4 py-2.5 text-right">Sumă Anual</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            <tr>
              <td className="px-4 py-2 font-bold text-slate-900 dark:text-white">Salariu Brut</td>
              <td className="px-4 py-2">100%</td>
              <td className="px-4 py-2 text-right font-bold">{formatCurrency(result.grossSalary, 'ro')}</td>
              <td className="px-4 py-2 text-right font-bold">{formatCurrency(result.grossSalary * 12, 'ro')}</td>
            </tr>
            {result.taxExemptAmount > 0 && (
              <tr className="bg-emerald-50/30 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400">
                <td className="px-4 py-2">Scutire 300 lei (OUG 115/2023)</td>
                <td className="px-4 py-2">Scutire</td>
                <td className="px-4 py-2 text-right font-semibold">-{formatCurrency(result.taxExemptAmount, 'ro')}</td>
                <td className="px-4 py-2 text-right font-semibold">-{formatCurrency(result.taxExemptAmount * 12, 'ro')}</td>
              </tr>
            )}
            <tr>
              <td className="px-4 py-2">CAS – Pensii</td>
              <td className="px-4 py-2">25,00%</td>
              <td className="px-4 py-2 text-right text-rose-600 font-semibold">-{formatCurrency(result.casEmployee, 'ro')}</td>
              <td className="px-4 py-2 text-right text-rose-600 font-semibold">-{formatCurrency(result.casEmployee * 12, 'ro')}</td>
            </tr>
            <tr>
              <td className="px-4 py-2">CASS – Sănătate</td>
              <td className="px-4 py-2">10,00%</td>
              <td className="px-4 py-2 text-right text-rose-600 font-semibold">-{formatCurrency(result.cassEmployee, 'ro')}</td>
              <td className="px-4 py-2 text-right text-rose-600 font-semibold">-{formatCurrency(result.cassEmployee * 12, 'ro')}</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Deducere Personală</td>
              <td className="px-4 py-2">Art. 77</td>
              <td className="px-4 py-2 text-right font-medium text-teal-600">{formatCurrency(result.personalDeduction, 'ro')}</td>
              <td className="px-4 py-2 text-right font-medium text-teal-600">{formatCurrency(result.personalDeduction * 12, 'ro')}</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Impozit pe Venit</td>
              <td className="px-4 py-2">10,00%</td>
              <td className="px-4 py-2 text-right text-rose-600 font-semibold">-{formatCurrency(result.incomeTax, 'ro')}</td>
              <td className="px-4 py-2 text-right text-rose-600 font-semibold">-{formatCurrency(result.incomeTax * 12, 'ro')}</td>
            </tr>
            <tr className="bg-teal-50/50 font-bold dark:bg-teal-950/30">
              <td className="px-4 py-2.5 text-teal-900 dark:text-teal-200">Salariul Net (În Mână)</td>
              <td className="px-4 py-2.5 text-teal-900 dark:text-teal-200">{((1 - result.effectiveTaxRate) * 100).toFixed(1)}%</td>
              <td className="px-4 py-2.5 text-right text-teal-600 dark:text-teal-400 text-base">{formatCurrency(result.netSalary, 'ro')}</td>
              <td className="px-4 py-2.5 text-right text-teal-600 dark:text-teal-400 text-base">{formatCurrency(result.netSalary * 12, 'ro')}</td>
            </tr>
            <tr>
              <td className="px-4 py-2">CAM Angajator</td>
              <td className="px-4 py-2">2,25%</td>
              <td className="px-4 py-2 text-right">+{formatCurrency(result.camEmployer, 'ro')}</td>
              <td className="px-4 py-2 text-right">+{formatCurrency(result.camEmployer * 12, 'ro')}</td>
            </tr>
            <tr className="bg-slate-100 font-bold dark:bg-slate-800">
              <td className="px-4 py-2.5">Cost Total Angajator</td>
              <td className="px-4 py-2.5">102,25%</td>
              <td className="px-4 py-2.5 text-right">{formatCurrency(result.totalEmployerCost, 'ro')}</td>
              <td className="px-4 py-2.5 text-right">{formatCurrency(result.totalEmployerCost * 12, 'ro')}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* NEARBY PROGRAMMATIC SALARY PAGES */}
      {nearbyAmounts.length > 0 && (
        <div className="pt-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            Comparație cu Salarii Asemănătoare
          </h3>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {nearbyAmounts.map((amt) => {
              const nearbyRes = calculateRomanianSalary({ grossSalary: amt });
              return (
                <Link
                  key={amt}
                  href={`/ro/salariu/${amt}-brut-in-net/`}
                  className="group rounded-xl border border-slate-200 p-3 hover:border-teal-500 hover:bg-teal-50/30 transition dark:border-slate-800 dark:hover:bg-teal-950/20"
                >
                  <div className="text-xs font-bold text-slate-900 group-hover:text-teal-600 dark:text-white">
                    {formatCurrency(amt, 'ro')} brut
                  </div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                    = {formatCurrency(nearbyRes.netSalary, 'ro')} net
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
