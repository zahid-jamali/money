'use client';

import React, { useState } from 'react';
import {
  INCOME_TAX_BRACKETS_2026_WAGE,
  TaxBracket,
} from '@/rules/tr/salary-2026';
import { calculateTaxForSlice } from '@/lib/salary/tr';
import { formatCurrency, parseLocaleNumber } from '@/lib/formatters';
import {
  Percent,
  Calculator,
  Info,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

export function GelirVergisiDilimleriTool() {
  const [rawTaxBase, setRawTaxBase] = useState<string>('250000');
  const parsedMatrah = parseLocaleNumber(rawTaxBase);

  // Compute tax across brackets
  const calculatedTax = calculateTaxForSlice(0, parsedMatrah, INCOME_TAX_BRACKETS_2026_WAGE);
  const effectiveRate = parsedMatrah > 0 ? (calculatedTax / parsedMatrah) * 100 : 0;

  // Determine current active bracket
  let currentBracketRate = 15;
  let nextBracketLimit = 158000;
  let remainingToNext = 0;

  if (parsedMatrah > 4300000) {
    currentBracketRate = 40;
    nextBracketLimit = Infinity;
    remainingToNext = 0;
  } else if (parsedMatrah > 1200000) {
    currentBracketRate = 35;
    nextBracketLimit = 4300000;
    remainingToNext = 4300000 - parsedMatrah;
  } else if (parsedMatrah > 330000) {
    currentBracketRate = 27;
    nextBracketLimit = 1200000;
    remainingToNext = 1200000 - parsedMatrah;
  } else if (parsedMatrah > 158000) {
    currentBracketRate = 20;
    nextBracketLimit = 330000;
    remainingToNext = 330000 - parsedMatrah;
  } else {
    currentBracketRate = 15;
    nextBracketLimit = 158000;
    remainingToNext = 158000 - parsedMatrah;
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 space-y-8">
      {/* HEADER */}
      <div className="border-b border-slate-100 pb-5">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Percent className="h-6 w-6 text-indigo-600" />
          2026 Gelir Vergisi Dilimleri & İnteraktif Matrah Simülatörü
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          193 sayılı Gelir Vergisi Kanunu Madde 103 uyarınca 2026 takvim yılı ücret gelirlerine uygulanan gelir vergisi tarifesi.
        </p>
      </div>

      {/* 2026 OFFICIAL BRACKETS CARDS */}
      <div>
        <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-slate-600" />
          2026 Ücret Gelirleri İçin Gelir Vergisi Tarifesi (GİB)
        </h3>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-800">1. Dilim (%15)</span>
            <div className="text-lg font-bold text-slate-900 mt-1">0 – 158.000 ₺</div>
            <p className="text-[11px] text-slate-600 mt-1">İlk 158 bin TL&apos;ye kadar %15 vergi</p>
          </div>

          <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-800">2. Dilim (%20)</span>
            <div className="text-lg font-bold text-slate-900 mt-1">158.000 – 330.000 ₺</div>
            <p className="text-[11px] text-slate-600 mt-1">158 bin - 330 bin TL arası %20</p>
          </div>

          <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-800">3. Dilim (%27)</span>
            <div className="text-lg font-bold text-slate-900 mt-1">330.000 – 1.200.000 ₺</div>
            <p className="text-[11px] text-slate-600 mt-1">330 bin - 1,2 milyon TL arası %27</p>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">4. Dilim (%35)</span>
            <div className="text-lg font-bold text-slate-900 mt-1">1.200.000 – 4.300.000 ₺</div>
            <p className="text-[11px] text-slate-600 mt-1">1,2 milyon - 4,3 milyon TL %35</p>
          </div>

          <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-800">5. Dilim (%40)</span>
            <div className="text-lg font-bold text-slate-900 mt-1">4.300.000 ₺ üzeri</div>
            <p className="text-[11px] text-slate-600 mt-1">4,3 milyon TL&apos;yi aşan kısım %40</p>
          </div>
        </div>
      </div>

      {/* INTERACTIVE SIMULATOR */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
        <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
          <Calculator className="h-4 w-4 text-indigo-600" />
          Kümülatif Vergi Matrahı Simülatörü
        </h3>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-6 space-y-4">
            <div>
              <label htmlFor="tax-matrah-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Kümülatif Gelir Vergisi Matrahınız (₺)
              </label>
              <div className="relative mt-1.5">
                <input
                  id="tax-matrah-input"
                  type="text"
                  inputMode="decimal"
                  value={rawTaxBase}
                  onChange={(e) => setRawTaxBase(e.target.value)}
                  placeholder="Örn: 250000"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                  TL (Kümülatif)
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500">
                Bordronuzdaki &quot;Kümülatif Gelir Vergisi Matrahı&quot; tutarını girin.
              </p>
            </div>

            <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-indigo-900 font-semibold">Bulunduğunuz Dilim:</span>
                <span className="font-extrabold text-indigo-950 text-sm px-2 py-0.5 rounded-md bg-white border border-indigo-200">
                  %{currentBracketRate} Vergi Dilimi
                </span>
              </div>
              {nextBracketLimit < Infinity ? (
                <div className="flex items-center justify-between text-xs text-indigo-800">
                  <span>Bir Sonraki Dilime ({nextBracketLimit.toLocaleString('tr-TR')} ₺) Kalan:</span>
                  <span className="font-bold">{formatCurrency(remainingToNext, 'tr', 'TRY')}</span>
                </div>
              ) : (
                <div className="text-xs text-indigo-800 font-medium">
                  En üst vergi dilimindesiniz (%40).
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-6 rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                Bu Matrah Üzerinden Toplam Hesaplanan Vergi
              </span>
              <span className="text-3xl font-extrabold text-slate-900 mt-2 block">
                {formatCurrency(calculatedTax, 'tr', 'TRY')}
              </span>
              <span className="text-xs text-slate-500 mt-1 block">
                Efektif Ortalama Vergi Oranı: <strong>%{effectiveRate.toFixed(2)}</strong>
              </span>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600">
              <p>
                <strong>Not:</strong> Bordroda çalışanlara her ay asgari ücretin kümülatif matrahına isabet eden vergi kadar <em>Asgari Ücret Gelir Vergisi İstisnası</em> uygulanarak ödenecek nihai vergi tutarından düşülmektedir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
