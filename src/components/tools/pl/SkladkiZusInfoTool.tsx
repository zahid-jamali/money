'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Building,
  Info,
  Calendar,
  Layers,
} from 'lucide-react';
import { POLAND_SALARY_RULES_2026 } from '@/rules/pl/salary-2026';
import { formatCurrency } from '@/lib/formatters';

export function SkladkiZusInfoTool() {
  const [activeTab, setActiveTab] = useState<'pelny' | 'preferencyjny' | 'ulga_na_start'>('pelny');

  const { b2bZus, minimalWage } = POLAND_SALARY_RULES_2026;

  return (
    <div className="space-y-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      {/* HEADER */}
      <div className="border-b border-slate-100 pb-5">
        <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
          <ShieldCheck className="h-6 w-6 text-red-600" />
          Składki ZUS 2026: Pełny ZUS, Preferencyjny i Ulga na Start
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Oficjalne stawki składek na ubezpieczenia społeczne ZUS dla przedsiębiorców prowadzących jednoosobową działalność gospodarczą (JDG).
        </p>
      </div>

      {/* THREE SCHEMES SUMMARY CARDS */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* PEŁNY ZUS */}
        <div
          onClick={() => setActiveTab('pelny')}
          className={`cursor-pointer rounded-2xl border p-5 transition-all ${
            activeTab === 'pelny'
              ? 'border-red-600 bg-red-50/50 shadow-sm'
              : 'border-slate-200 bg-white hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Duży / Pełny ZUS
            </span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
              Od 31. mies.
            </span>
          </div>
          <div className="mt-2 text-2xl font-extrabold text-slate-900">
            {formatCurrency(b2bZus.pelnyMonthly.totalWithChorobowe, 'pl', 'PLN')}
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Podstawa: 60% przeciętnego wynagrodzenia ({formatCurrency(b2bZus.pelnyBase, 'pl', 'PLN')})
          </p>
        </div>

        {/* PREFERENCYJNY ZUS */}
        <div
          onClick={() => setActiveTab('preferencyjny')}
          className={`cursor-pointer rounded-2xl border p-5 transition-all ${
            activeTab === 'preferencyjny'
              ? 'border-red-600 bg-red-50/50 shadow-sm'
              : 'border-slate-200 bg-white hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Preferencyjny ZUS
            </span>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
              Miesiące 7–30
            </span>
          </div>
          <div className="mt-2 text-2xl font-extrabold text-slate-900">
            {formatCurrency(b2bZus.preferencyjnyMonthly.totalWithChorobowe, 'pl', 'PLN')}
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Podstawa: 30% płacy minimalnej ({formatCurrency(b2bZus.preferencyjnyBase, 'pl', 'PLN')})
          </p>
        </div>

        {/* ULGA NA START */}
        <div
          onClick={() => setActiveTab('ulga_na_start')}
          className={`cursor-pointer rounded-2xl border p-5 transition-all ${
            activeTab === 'ulga_na_start'
              ? 'border-red-600 bg-red-50/50 shadow-sm'
              : 'border-slate-200 bg-white hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Ulga na start
            </span>
            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-800">
              Pierwsze 6 mies.
            </span>
          </div>
          <div className="mt-2 text-2xl font-extrabold text-slate-900">
            0,00 zł
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Przedsiębiorca opłaca wyłącznie składkę zdrowotną do NFZ.
          </p>
        </div>
      </div>

      {/* ACTIVE SCHEME DETAILED BREAKDOWN */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Layers className="h-5 w-5 text-red-600" />
          Szczegółowe zestawienie składek:{' '}
          <span className="text-red-700">
            {activeTab === 'pelny'
              ? 'Pełny ZUS (Standardowy)'
              : activeTab === 'preferencyjny'
              ? 'Preferencyjny ZUS (Mały ZUS)'
              : 'Ulga na start'}
          </span>
        </h3>

        {activeTab !== 'ulga_na_start' ? (
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-600 border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3">Ubezpieczenie ZUS</th>
                  <th className="py-2.5 px-3">Stopa procentowa</th>
                  <th className="py-2.5 px-3">Podstawa wymiaru</th>
                  <th className="py-2.5 px-3 font-bold text-slate-900">Kwota miesięczna</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {activeTab === 'pelny' ? (
                  <>
                    <tr>
                      <td className="py-2 px-3 font-medium text-slate-900">Składka emerytalna</td>
                      <td className="py-2 px-3">19,52%</td>
                      <td className="py-2 px-3">{formatCurrency(b2bZus.pelnyBase, 'pl', 'PLN')}</td>
                      <td className="py-2 px-3 font-semibold">{formatCurrency(b2bZus.pelnyMonthly.emerytalne, 'pl', 'PLN')}</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-medium text-slate-900">Składka rentowa</td>
                      <td className="py-2 px-3">8,00%</td>
                      <td className="py-2 px-3">{formatCurrency(b2bZus.pelnyBase, 'pl', 'PLN')}</td>
                      <td className="py-2 px-3 font-semibold">{formatCurrency(b2bZus.pelnyMonthly.rentowe, 'pl', 'PLN')}</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-medium text-slate-900">Składka wypadkowa</td>
                      <td className="py-2 px-3">1,67%</td>
                      <td className="py-2 px-3">{formatCurrency(b2bZus.pelnyBase, 'pl', 'PLN')}</td>
                      <td className="py-2 px-3 font-semibold">{formatCurrency(b2bZus.pelnyMonthly.wypadkowe, 'pl', 'PLN')}</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-medium text-slate-900">Fundusz Pracy (FP)</td>
                      <td className="py-2 px-3">2,45%</td>
                      <td className="py-2 px-3">{formatCurrency(b2bZus.pelnyBase, 'pl', 'PLN')}</td>
                      <td className="py-2 px-3 font-semibold">{formatCurrency(b2bZus.pelnyMonthly.fp, 'pl', 'PLN')}</td>
                    </tr>
                    <tr className="bg-blue-50/30">
                      <td className="py-2 px-3 font-medium text-slate-900">Chorobowa (dobrowolna)</td>
                      <td className="py-2 px-3">2,45%</td>
                      <td className="py-2 px-3">{formatCurrency(b2bZus.pelnyBase, 'pl', 'PLN')}</td>
                      <td className="py-2 px-3 font-semibold">{formatCurrency(b2bZus.pelnyMonthly.choroboweDobrowolne, 'pl', 'PLN')}</td>
                    </tr>
                  </>
                ) : (
                  <>
                    <tr>
                      <td className="py-2 px-3 font-medium text-slate-900">Składka emerytalna</td>
                      <td className="py-2 px-3">19,52%</td>
                      <td className="py-2 px-3">{formatCurrency(b2bZus.preferencyjnyBase, 'pl', 'PLN')}</td>
                      <td className="py-2 px-3 font-semibold">{formatCurrency(b2bZus.preferencyjnyMonthly.emerytalne, 'pl', 'PLN')}</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-medium text-slate-900">Składka rentowa</td>
                      <td className="py-2 px-3">8,00%</td>
                      <td className="py-2 px-3">{formatCurrency(b2bZus.preferencyjnyBase, 'pl', 'PLN')}</td>
                      <td className="py-2 px-3 font-semibold">{formatCurrency(b2bZus.preferencyjnyMonthly.rentowe, 'pl', 'PLN')}</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-medium text-slate-900">Składka wypadkowa</td>
                      <td className="py-2 px-3">1,67%</td>
                      <td className="py-2 px-3">{formatCurrency(b2bZus.preferencyjnyBase, 'pl', 'PLN')}</td>
                      <td className="py-2 px-3 font-semibold">{formatCurrency(b2bZus.preferencyjnyMonthly.wypadkowe, 'pl', 'PLN')}</td>
                    </tr>
                    <tr className="bg-blue-50/30">
                      <td className="py-2 px-3 font-medium text-slate-900">Chorobowa (dobrowolna)</td>
                      <td className="py-2 px-3">2,45%</td>
                      <td className="py-2 px-3">{formatCurrency(b2bZus.preferencyjnyBase, 'pl', 'PLN')}</td>
                      <td className="py-2 px-3 font-semibold">{formatCurrency(b2bZus.preferencyjnyMonthly.choroboweDobrowolne, 'pl', 'PLN')}</td>
                    </tr>
                  </>
                )}
              </tbody>
              <tfoot className="bg-slate-50 font-bold text-slate-900 border-t border-slate-200">
                <tr>
                  <td colSpan={3} className="py-2.5 px-3">
                    Razem ZUS społeczny z dobrowolnym chorobowym:
                  </td>
                  <td className="py-2.5 px-3 text-red-700">
                    {formatCurrency(
                      activeTab === 'pelny'
                        ? b2bZus.pelnyMonthly.totalWithChorobowe
                        : b2bZus.preferencyjnyMonthly.totalWithChorobowe,
                      'pl',
                      'PLN',
                    )}
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} className="py-2 px-3 font-normal text-slate-600">
                    Razem bez dobrowolnego chorobowego:
                  </td>
                  <td className="py-2 px-3 font-normal text-slate-700">
                    {formatCurrency(
                      activeTab === 'pelny'
                        ? b2bZus.pelnyMonthly.totalWithoutChorobowe
                        : b2bZus.preferencyjnyMonthly.totalWithoutChorobowe,
                      'pl',
                      'PLN',
                    )}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        ) : (
          <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-4 text-xs text-blue-900 leading-relaxed">
            <p className="font-semibold mb-1">Czym jest Ulga na Start?</p>
            Przez pierwsze pełne 6 miesięcy od rejestracji działalności gospodarczej przedsiębiorca jest całkowicie zwolniony z opłacania składek na ubezpieczenia społeczne (emerytalne, rentowe, wypadkowe, chorobowe) oraz Funduszu Pracy. Opłaca się jedynie comiesięczną składkę zdrowotną (NFZ) uzależnioną od wybranej formy opodatkowania.
          </div>
        )}
      </div>
    </div>
  );
}
