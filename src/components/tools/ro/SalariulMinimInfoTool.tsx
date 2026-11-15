'use client';

import React from 'react';
import { ShieldCheck, Calendar, Info, TrendingUp, AlertTriangle } from 'lucide-react';
import { ROMANIA_SALARY_RULES_2026 } from '@/rules/ro/salary-2026';
import { formatCurrency } from '@/lib/formatters';

export function SalariulMinimInfoTool() {
  const minWage = ROMANIA_SALARY_RULES_2026.minimumWageGross; // 4.050 lei
  const minNet = ROMANIA_SALARY_RULES_2026.minimumWageNet; // 2.574 lei
  const taxFree = ROMANIA_SALARY_RULES_2026.taxFreeAmountMinWage; // 300 lei

  const history = [
    { period: '1 Ianuarie 2026 – Prezent', gross: 4050, net: 2574, legalAct: 'HG nr. 141/2025 / HG 1506/2024' },
    { period: '1 Iulie 2024 – 31 Decembrie 2024', gross: 3700, net: 2363, legalAct: 'HG nr. 598/2024' },
    { period: '1 Octombrie 2023 – 30 Iunie 2024', gross: 3300, net: 2079, legalAct: 'HG nr. 900/2023' },
    { period: '1 Ianuarie 2023 – 30 Septembrie 2023', gross: 3000, net: 1898, legalAct: 'HG nr. 1447/2022' },
    { period: '1 Ianuarie 2022 – 31 Decembrie 2022', gross: 2550, net: 1524, legalAct: 'HG nr. 1071/2021' },
  ];

  return (
    <div className="space-y-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
      {/* HEADER */}
      <div className="border-b border-slate-100 pb-5 dark:border-slate-800">
        <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
          <ShieldCheck className="h-6 w-6 text-teal-600" />
          Salariul Minim pe Țară 2026: Brut și Net în România
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Statutul legal oficial al salariului de bază minim brut garantat în plată, facilitatea celor 300 de lei netaxabili și evoluția istorică a veniturilor minime.
        </p>
      </div>

      {/* METRIC HIGHLIGHTS */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800">
          <span className="text-xs font-semibold uppercase text-slate-500">Salariul Minim Brut</span>
          <div className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
            {formatCurrency(minWage, 'ro')}
          </div>
          <span className="text-xs text-slate-500">40 ore/săpt. (normă întreagă)</span>
        </div>

        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/30">
          <span className="text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400">Salariul Minim Net</span>
          <div className="mt-1 text-2xl font-black text-emerald-600 dark:text-emerald-400">
            {formatCurrency(minNet, 'ro')}
          </div>
          <span className="text-xs text-emerald-700 dark:text-emerald-400">Bani încasați pe card</span>
        </div>

        <div className="rounded-xl border border-teal-200 bg-teal-50 p-4 dark:border-teal-900 dark:bg-teal-950/30">
          <span className="text-xs font-semibold uppercase text-teal-700 dark:text-teal-400">Suma Netaxabilă</span>
          <div className="mt-1 text-2xl font-black text-teal-600 dark:text-teal-400">
            {formatCurrency(taxFree, 'ro')}
          </div>
          <span className="text-xs text-teal-700 dark:text-teal-400">Scutită de CAS, CASS și impozit</span>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800">
          <span className="text-xs font-semibold uppercase text-slate-500">Cost Total Firmă</span>
          <div className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
            {formatCurrency(minWage * 1.0225, 'ro')}
          </div>
          <span className="text-xs text-slate-500">Include CAM 2,25% (91 lei)</span>
        </div>
      </div>

      {/* DETAILED STATUTORY CALCULATION TABLE */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
        <table className="w-full text-left text-sm text-slate-700 dark:text-slate-300">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            <tr>
              <th className="px-4 py-3">Element de Calcul</th>
              <th className="px-4 py-3">Cotă / Procent</th>
              <th className="px-4 py-3">Bază de Calcul</th>
              <th className="px-4 py-3 text-right">Sumă (RON)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            <tr>
              <td className="px-4 py-2.5 font-bold">Salariul de Bază Brut</td>
              <td className="px-4 py-2.5">-</td>
              <td className="px-4 py-2.5">Total contract</td>
              <td className="px-4 py-2.5 text-right font-bold">4.050,00 lei</td>
            </tr>
            <tr className="bg-emerald-50/40 dark:bg-emerald-950/20">
              <td className="px-4 py-2.5 text-emerald-700 dark:text-emerald-400">Suma Netaxabilă (OUG 115/2023)</td>
              <td className="px-4 py-2.5 text-emerald-700 dark:text-emerald-400">Scutire</td>
              <td className="px-4 py-2.5 text-emerald-700 dark:text-emerald-400">Deducere din brut</td>
              <td className="px-4 py-2.5 text-right font-medium text-emerald-600">-300,00 lei</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5">Baza pentru Contribuții Sociale</td>
              <td className="px-4 py-2.5">-</td>
              <td className="px-4 py-2.5">4.050 – 300 lei</td>
              <td className="px-4 py-2.5 text-right font-semibold">3.750,00 lei</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5">CAS – Asigurări Sociale / Pensii</td>
              <td className="px-4 py-2.5">25%</td>
              <td className="px-4 py-2.5">3.750 lei</td>
              <td className="px-4 py-2.5 text-right text-rose-600 font-semibold">-938,00 lei</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5">CASS – Sănătate</td>
              <td className="px-4 py-2.5">10%</td>
              <td className="px-4 py-2.5">3.750 lei</td>
              <td className="px-4 py-2.5 text-right text-rose-600 font-semibold">-375,00 lei</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5">Deducere Personală de Bază (0 întreținuți)</td>
              <td className="px-4 py-2.5">20%</td>
              <td className="px-4 py-2.5">Art. 77 Cod Fiscal</td>
              <td className="px-4 py-2.5 text-right font-medium text-teal-600">810,00 lei</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5">Baza de Calcul a Impozitului</td>
              <td className="px-4 py-2.5">-</td>
              <td className="px-4 py-2.5">3.750 – 938 – 375 – 810</td>
              <td className="px-4 py-2.5 text-right font-semibold">1.627,00 lei</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5">Impozit pe Venit</td>
              <td className="px-4 py-2.5">10%</td>
              <td className="px-4 py-2.5">1.627 lei</td>
              <td className="px-4 py-2.5 text-right text-rose-600 font-semibold">-163,00 lei</td>
            </tr>
            <tr className="bg-teal-50/50 font-bold dark:bg-teal-950/20">
              <td className="px-4 py-3 text-teal-900 dark:text-teal-200">Salariul Minim Net Încasat</td>
              <td className="px-4 py-3">-</td>
              <td className="px-4 py-3">4.050 – 938 – 375 – 163</td>
              <td className="px-4 py-3 text-right text-teal-600 dark:text-teal-400 text-base">2.574,00 lei</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* HISTORICAL TABLE */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
          Evoluția Salariului Minim în România (2022–2026)
        </h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-sm text-slate-700 dark:text-slate-300">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              <tr>
                <th className="px-4 py-3">Perioadă</th>
                <th className="px-4 py-3">Brut (RON)</th>
                <th className="px-4 py-3">Net (RON)</th>
                <th className="px-4 py-3">Act Normativ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {history.map((item, idx) => (
                <tr key={idx} className={idx === 0 ? 'bg-teal-50/30 font-semibold dark:bg-teal-950/10' : ''}>
                  <td className="px-4 py-2.5">{item.period}</td>
                  <td className="px-4 py-2.5 font-bold text-slate-900 dark:text-white">
                    {formatCurrency(item.gross, 'ro')}
                  </td>
                  <td className="px-4 py-2.5 text-emerald-600 dark:text-emerald-400 font-bold">
                    {formatCurrency(item.net, 'ro')}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-slate-500">{item.legalAct}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
