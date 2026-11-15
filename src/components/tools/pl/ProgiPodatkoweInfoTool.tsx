'use client';

import React, { useState } from 'react';
import {
  Percent,
  Calculator,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import { POLAND_SALARY_RULES_2026 } from '@/rules/pl/salary-2026';
import { formatCurrency } from '@/lib/formatters';

export function ProgiPodatkoweInfoTool() {
  const [taxBaseInput, setTaxBaseInput] = useState<string>('150000');
  const parsedTaxBase = parseFloat(taxBaseInput.replace(/\s+/g, '').replace(',', '.')) || 0;

  const { threshold, lowerRate, higherRate, kwotaWolna, kwotaZmniejszajacaPodatekAnnual } =
    POLAND_SALARY_RULES_2026.pitScale;

  let firstBracketBase = 0;
  let secondBracketBase = 0;
  let rawTax = 0;

  if (parsedTaxBase <= threshold) {
    firstBracketBase = parsedTaxBase;
    secondBracketBase = 0;
    rawTax = Math.max(0, firstBracketBase * lowerRate);
  } else {
    firstBracketBase = threshold;
    secondBracketBase = parsedTaxBase - threshold;
    rawTax = firstBracketBase * lowerRate + secondBracketBase * higherRate;
  }

  // Deduct annual kwota zmniejszająca
  const finalTaxAnnual = Math.round(Math.max(0, rawTax - kwotaZmniejszajacaPodatekAnnual));
  const effectiveRate = parsedTaxBase > 0 ? (finalTaxAnnual / parsedTaxBase) * 100 : 0;

  return (
    <div className="space-y-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      {/* HEADER */}
      <div className="border-b border-slate-100 pb-5">
        <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
          <Percent className="h-6 w-6 text-red-600" />
          Progi Podatkowe 2026 w Polsce: Skala Podatkowa 12% i 32%
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Oficjalne progi podatkowe na 2026 rok, kwota wolna od podatku 30 000 zł oraz zasady obliczania podatku dochodowego od osób fizycznych (PIT).
        </p>
      </div>

      {/* VISUAL BRACKETS DISPLAY */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* FIRST BRACKET 12% */}
        <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
              I Próg Podatkowy (12%)
            </span>
            <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-900">
              Podstawa do 120 000 zł
            </span>
          </div>

          <div className="text-2xl font-extrabold text-slate-900">
            12% minus 3 600 zł
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Dla dochodów do 120 000 zł rocznie podatek wynosi 12% podstawy opodatkowania, pomniejszony o kwotę zmniejszającą podatek (3 600 zł rocznie / 300 zł miesięcznie). Dochód do 30 000 zł jest całkowicie wolny od podatku.
          </p>
        </div>

        {/* SECOND BRACKET 32% */}
        <div className="rounded-2xl border border-rose-200 bg-rose-50/50 p-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-800">
              II Próg Podatkowy (32%)
            </span>
            <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-bold text-rose-900">
              Nadwyżka ponad 120 000 zł
            </span>
          </div>

          <div className="text-2xl font-extrabold text-slate-900">
            10 800 zł + 32% nadwyżki
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Stawka 32% obejmuje wyłącznie kwotę dochodu powyżej 120 000 zł w skali roku podatkowego. Za pierwsze 120 000 zł płaci się stałą kwotę 10 800 zł (120 000 × 12% – 3 600 zł), a 32% dotyczy tylko sumy ponad próg.
          </p>
        </div>
      </div>

      {/* INTERACTIVE TAX CALCULATOR */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
        <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
          <Calculator className="h-4 w-4 text-slate-700" />
          Symulator podatku PIT w skali podatkowej
        </h3>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-6 space-y-4">
            <div>
              <label htmlFor="tax-scale-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Roczna podstawa opodatkowania (PLN)
              </label>
              <div className="relative mt-1.5">
                <input
                  id="tax-scale-input"
                  type="text"
                  inputMode="decimal"
                  value={taxBaseInput}
                  onChange={(e) => setTaxBaseInput(e.target.value)}
                  placeholder="np. 150000"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:border-red-500 focus:outline-none"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400">
                  PLN / rok
                </span>
              </div>
              <p className="mt-1 text-[11px] text-slate-500">
                Przychód po odliczeniu składek ZUS i kosztów uzyskania przychodów (KUP).
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {[30000, 60000, 100000, 120000, 150000, 200000].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setTaxBaseInput(val.toString())}
                  className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-600 hover:bg-slate-100"
                >
                  {val.toLocaleString('pl-PL')} zł
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <span className="text-xs font-bold text-slate-700 block">Należny podatek roczny (PIT)</span>
              <div className="mt-1 text-2xl font-extrabold text-slate-900">
                {formatCurrency(finalTaxAnnual, 'pl', 'PLN')}
              </div>
              <div className="mt-2 space-y-1 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>W I progu (12% do 120k zł):</span>
                  <span>{formatCurrency(firstBracketBase * lowerRate, 'pl', 'PLN')}</span>
                </div>
                {secondBracketBase > 0 && (
                  <div className="flex justify-between text-rose-700 font-medium">
                    <span>W II progu (32% od nadwyżki {formatCurrency(secondBracketBase, 'pl', 'PLN')}):</span>
                    <span>{formatCurrency(secondBracketBase * higherRate, 'pl', 'PLN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-emerald-700">
                  <span>Kwota zmniejszająca podatek:</span>
                  <span>-{formatCurrency(kwotaZmniejszajacaPodatekAnnual, 'pl', 'PLN')}</span>
                </div>
                <div className="flex justify-between border-t border-slate-100 pt-1 font-bold text-slate-900">
                  <span>Efektywna stawka podatkowa:</span>
                  <span>{effectiveRate.toFixed(2)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
