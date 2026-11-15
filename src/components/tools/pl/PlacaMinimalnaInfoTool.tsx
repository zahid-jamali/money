'use client';

import React, { useState } from 'react';
import {
  Coins,
  History,
  Building,
  Clock,
  Search,
  CheckCircle2,
} from 'lucide-react';
import { POLAND_SALARY_RULES_2026, POLAND_MINIMAL_WAGE_HISTORY } from '@/rules/pl/salary-2026';
import { formatCurrency } from '@/lib/formatters';

export function PlacaMinimalnaInfoTool() {
  const [etatRatio, setEtatRatio] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const grossMonthly = POLAND_SALARY_RULES_2026.minimalWage.grossMonthly * etatRatio;
  const netMonthlyApprox = 3510.92 * etatRatio;
  const employerCostApprox = 5621.60 * etatRatio;

  const filteredHistory = POLAND_MINIMAL_WAGE_HISTORY.filter(
    (h) =>
      h.period.toLowerCase().includes(searchTerm.toLowerCase()) ||
      h.legalAct.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      {/* HEADER */}
      <div className="border-b border-slate-100 pb-5">
        <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
          <Coins className="h-6 w-6 text-red-600" />
          Płaca Minimalna 2026: Brutto i Netto w Polsce
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Oficjalne stawki minimalnego wynagrodzenia za pracę oraz minimalnej stawki godzinowej ustalone rozporządzeniem Rady Ministrów.
        </p>
      </div>

      {/* STATS OVERVIEW CARDS */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* BRUTTO */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
            Minimalne brutto (2026)
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 block">
            {formatCurrency(POLAND_SALARY_RULES_2026.minimalWage.grossMonthly, 'pl', 'PLN')}
          </span>
          <span className="text-[11px] text-slate-500 mt-1 block">Pełny etat (Dz.U. 2024 poz. 1362)</span>
        </div>

        {/* NETTO */}
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
            Minimalne netto (Na rękę)
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-emerald-950 mt-2 block">
            ~3 510,92 zł
          </span>
          <span className="text-[11px] text-emerald-700 mt-1 block">Przy standardowym KUP i PIT-2</span>
        </div>

        {/* HOURLY */}
        <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-5">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-800 block">
            Stawka godzinowa brutto
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-blue-950 mt-2 block">
            {formatCurrency(POLAND_SALARY_RULES_2026.minimalWage.minimumHourlyRate, 'pl', 'PLN')}
          </span>
          <span className="text-[11px] text-blue-700 mt-1 block">Umowy zlecenia i o świadczenie usług</span>
        </div>

        {/* EMPLOYER COST */}
        <div className="rounded-2xl border border-purple-200 bg-purple-50/50 p-5">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-800 block">
            Koszt pracodawcy
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-purple-950 mt-2 block">
            ~5 621,60 zł
          </span>
          <span className="text-[11px] text-purple-700 mt-1 block">Wraz ze składkami ZUS pracodawcy</span>
        </div>
      </div>

      {/* PART TIME SIMULATOR */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
        <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
          <Clock className="h-4 w-4 text-slate-600" />
          Kalkulator płacy minimalnej dla części etatu
        </h3>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            { label: 'Pełny etat (1/1)', ratio: 1 },
            { label: '3/4 etatu', ratio: 0.75 },
            { label: '1/2 etatu (pół etatu)', ratio: 0.5 },
            { label: '1/4 etatu', ratio: 0.25 },
          ].map((e) => (
            <button
              key={e.ratio}
              type="button"
              onClick={() => setEtatRatio(e.ratio)}
              className={`rounded-xl border p-3 text-center transition-all ${
                etatRatio === e.ratio
                  ? 'border-red-600 bg-white shadow-xs font-bold text-red-700'
                  : 'border-slate-200 bg-white/70 text-slate-600 hover:bg-white'
              }`}
            >
              <div className="text-xs">{e.label}</div>
              <div className="text-sm font-extrabold text-slate-900 mt-1">
                {formatCurrency(POLAND_SALARY_RULES_2026.minimalWage.grossMonthly * e.ratio, 'pl', 'PLN')}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div>
            Dla <strong>{etatRatio === 1 ? 'pełnego etatu' : `${etatRatio} etatu`}</strong> pensja brutto wynosi{' '}
            <strong className="text-slate-900">{formatCurrency(grossMonthly, 'pl', 'PLN')}</strong>, na rękę to około{' '}
            <strong className="text-emerald-700">{formatCurrency(netMonthlyApprox, 'pl', 'PLN')}</strong>, a całkowity koszt firmy to{' '}
            <strong className="text-slate-900">{formatCurrency(employerCostApprox, 'pl', 'PLN')}</strong>.
          </div>
        </div>
      </div>

      {/* HISTORICAL TABLE (2015-2026) */}
      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <History className="h-5 w-5 text-slate-700" />
            Historia płacy minimalnej w Polsce (2015–2026)
          </h3>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              aria-label="Szukaj roku..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Szukaj roku..."
              className="w-full rounded-xl border border-slate-200 pl-9 pr-3 py-1.5 text-xs text-slate-800 focus:border-red-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-600 border-b border-slate-200">
              <tr>
                <th className="py-2.5 px-3">Okres</th>
                <th className="py-2.5 px-3">Brutto (PLN)</th>
                <th className="py-2.5 px-3">Netto szacowane</th>
                <th className="py-2.5 px-3">Stawka godzinowa</th>
                <th className="py-2.5 px-3">Podstawa prawna</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredHistory.map((row, idx) => (
                <tr key={idx} className={idx === 0 ? 'bg-red-50/30 font-semibold' : 'hover:bg-slate-50/80'}>
                  <td className="py-2 px-3 font-medium text-slate-900">{row.period}</td>
                  <td className="py-2 px-3">{formatCurrency(row.grossAmount, 'pl', 'PLN')}</td>
                  <td className="py-2 px-3 text-emerald-800">{formatCurrency(row.netApprox, 'pl', 'PLN')}</td>
                  <td className="py-2 px-3">{formatCurrency(row.hourlyGross, 'pl', 'PLN')} / godz.</td>
                  <td className="py-2 px-3 text-slate-500 font-mono text-[11px]">{row.legalAct}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
