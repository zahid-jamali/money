'use client';

import React, { useState, useId } from 'react';
import {
  calculateRomanianVat,
  RomanianVatRateTier,
  RomanianVatResult,
} from '@/lib/vat/romania';
import { formatCurrency, parseLocaleNumber } from '@/lib/formatters';
import {
  Copy,
  Check,
  Share2,
  Printer,
  Calendar,
  AlertCircle,
  FileText,
  Building,
  Info,
  CheckCircle2,
  Scale,
} from 'lucide-react';

interface RomanianTvaCalculatorToolProps {
  initialAmount?: number;
  initialType?: 'add' | 'remove';
  initialDate?: string;
}

export function RomanianTvaCalculatorTool({
  initialAmount = 1000,
  initialType = 'add',
  initialDate = '2026-11-14',
}: RomanianTvaCalculatorToolProps) {
  const inputId = useId();
  const [calcType, setCalcType] = useState<'add' | 'remove'>(initialType);
  const [rawAmount, setRawAmount] = useState<string>(String(initialAmount));
  const [date, setDate] = useState<string>(initialDate);
  const [rateTier, setRateTier] = useState<RomanianVatRateTier>('standard');
  const [copied, setCopied] = useState<boolean>(false);

  const parsedAmount = parseLocaleNumber(rawAmount);

  // Quick regime switcher helper
  const isPostAug2025 = date >= '2025-08-01';

  const setRegime = (post2025: boolean) => {
    if (post2025) {
      setDate('2026-01-01');
    } else {
      setDate('2025-05-01');
    }
  };

  const result: RomanianVatResult = calculateRomanianVat({
    amount: parsedAmount,
    type: calcType,
    date,
    rateTier,
  });

  const handleCopy = async () => {
    const text = `Calcul TVA România (${result.appliedRate}%):\n` +
      `• Regim: ${result.schedule.name}\n` +
      `• Operațiune: ${calcType === 'add' ? 'Adăugare TVA (Net → Brut)' : 'Extragere TVA (Brut → Net)'}\n` +
      `• Bază impozabilă (Net): ${formatCurrency(result.netAmount, 'ro', 'RON')}\n` +
      `• TVA (${result.appliedRate}%): ${formatCurrency(result.vatAmount, 'ro', 'RON')}\n` +
      `• Total de plată (Brut): ${formatCurrency(result.grossAmount, 'ro', 'RON')}\n` +
      `• Temei legal: ${result.legalReference}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'Calculator TVA România - Legea 141/2025',
          text: `Net: ${formatCurrency(result.netAmount, 'ro', 'RON')} | TVA (${result.appliedRate}%): ${formatCurrency(result.vatAmount, 'ro', 'RON')} | Brut: ${formatCurrency(result.grossAmount, 'ro', 'RON')}`,
          url: window.location.href,
        });
      } catch {
        handleCopy();
      }
    } else {
      handleCopy();
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Law 141/2025 Explanatory Banner */}
      <div className="bg-gradient-to-r from-teal-50 via-emerald-50 to-white dark:from-slate-800 dark:via-slate-800/90 dark:to-slate-900 border border-teal-200 dark:border-teal-900/60 rounded-2xl p-4 sm:p-5 shadow-sm">
        <div className="flex items-start gap-3.5">
          <div className="p-2 bg-teal-100 dark:bg-teal-950/80 rounded-xl text-teal-800 dark:text-teal-300 shrink-0">
            <Scale className="w-5 h-5" />
          </div>
          <div className="space-y-1 text-xs sm:text-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-slate-900 dark:text-white">
                Reforma Fiscală - Legea nr. 141/2025
              </span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
                În vigoare de la 1 August 2025
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-xs">
              Cota standard de TVA a fost majorată de la <strong>19% la 21%</strong>. Cotele reduse anterioare de 9% și 5% au fost comasate într-o <strong>cotă unică redusă de 11%</strong> (pentru alimente esențiale, medicamente, cărți, servicii hoteliere și energie termică).
            </p>
          </div>
        </div>
      </div>

      {/* Main Calculator Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Date Regime Selector Toggle */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Regimul Fiscal Aplicabil
            </label>
            {/* Direct Date Picker */}
            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>Data facturării / prestării:</span>
              <input
                type="date"
                value={date.slice(0, 10)}
                onChange={(e) => setDate(e.target.value)}
                aria-label="Data facturării"
                className="px-2 py-1 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div
            role="radiogroup"
            aria-label="Regim fiscal TVA România"
            className="grid grid-cols-1 md:grid-cols-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl gap-1.5"
          >
            <button
              type="button"
              role="radio"
              aria-checked={isPostAug2025}
              onClick={() => setRegime(true)}
              className={`p-3 rounded-lg text-left text-xs sm:text-sm font-semibold transition-all ${
                isPostAug2025
                  ? 'bg-white dark:bg-slate-900 text-teal-800 dark:text-teal-300 shadow-sm border border-teal-200 dark:border-teal-800'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold">Regim Actual (Legea 141/2025)</span>
                <span className="text-[11px] px-1.5 py-0.5 rounded bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300">
                  Activ
                </span>
              </div>
              <p className="text-[11px] font-normal text-slate-500 dark:text-slate-400 mt-1">
                21% standard • 11% redus unificat • 0% scutit
              </p>
            </button>

            <button
              type="button"
              role="radio"
              aria-checked={!isPostAug2025}
              onClick={() => setRegime(false)}
              className={`p-3 rounded-lg text-left text-xs sm:text-sm font-semibold transition-all ${
                !isPostAug2025
                  ? 'bg-white dark:bg-slate-900 text-teal-800 dark:text-teal-300 shadow-sm border border-teal-200 dark:border-teal-800'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold">Regim Anterior (până la 31 Iulie 2025)</span>
                <span className="text-[11px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  Istoric
                </span>
              </div>
              <p className="text-[11px] font-normal text-slate-500 dark:text-slate-400 mt-1">
                19% standard • 9% redus • 5% super-redus
              </p>
            </button>
          </div>
        </div>

        {/* Direction Toggle (Adaugare vs Extragere) */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Tip Operațiune
          </label>
          <div className="grid grid-cols-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl gap-1">
            <button
              type="button"
              onClick={() => setCalcType('add')}
              className={`py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition ${
                calcType === 'add'
                  ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Adăugare TVA (Net → Brut)
            </button>
            <button
              type="button"
              onClick={() => setCalcType('remove')}
              className={`py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition ${
                calcType === 'remove'
                  ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Extragere TVA (Brut → Net)
            </button>
          </div>
        </div>

        {/* Amount & Tier Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Suma Input */}
          <div>
            <label
              htmlFor={inputId}
              className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1.5"
            >
              {calcType === 'add' ? 'Valoare Netă (fără TVA)' : 'Valoare Brută (cu TVA inclus)'}
            </label>
            <div className="relative rounded-xl shadow-sm">
              <input
                id={inputId}
                type="text"
                inputMode="decimal"
                value={rawAmount}
                onChange={(e) => setRawAmount(e.target.value)}
                placeholder="0,00"
                className="w-full text-xl sm:text-2xl font-bold pl-4 pr-14 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl focus:bg-white dark:focus:bg-slate-900 focus:border-teal-600 dark:focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-slate-900 dark:text-white outline-none transition"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-bold text-sm">
                RON
              </span>
            </div>
            <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
              Introduceți suma în lei (RON)
            </p>
          </div>

          {/* Cota TVA Tier Selector */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
              Cota TVA Aplicabilă
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setRateTier('standard')}
                className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-bold transition ${
                  rateTier === 'standard'
                    ? 'bg-teal-50 text-teal-900 border-teal-500 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-600 ring-2 ring-teal-500/20'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                }`}
              >
                <div className="text-base sm:text-lg font-black text-teal-800 dark:text-teal-400">
                  {result.schedule.standardRate}%
                </div>
                <div className="text-[11px] font-normal text-slate-600 dark:text-slate-400">
                  Cota Standard
                </div>
              </button>

              <button
                type="button"
                onClick={() => setRateTier('reduced')}
                className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-bold transition ${
                  rateTier === 'reduced'
                    ? 'bg-teal-50 text-teal-900 border-teal-500 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-600 ring-2 ring-teal-500/20'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                }`}
              >
                <div className="text-base sm:text-lg font-black text-teal-800 dark:text-teal-400">
                  {result.schedule.reducedRates[0]}%
                </div>
                <div className="text-[11px] font-normal text-slate-600 dark:text-slate-400">
                  {isPostAug2025 ? 'Cotă Redusă Unificată' : 'Cotă Redusă (Alimente)'}
                </div>
              </button>

              {!isPostAug2025 && (
                <button
                  type="button"
                  onClick={() => setRateTier('superReduced')}
                  className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-bold transition ${
                    rateTier === 'superReduced'
                      ? 'bg-teal-50 text-teal-900 border-teal-500 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-600 ring-2 ring-teal-500/20'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                  }`}
                >
                  <div className="text-base sm:text-lg font-black text-teal-800 dark:text-teal-400">
                    5%
                  </div>
                  <div className="text-[11px] font-normal text-slate-600 dark:text-slate-400">
                    Super-redusă (manuale, lemne)
                  </div>
                </button>
              )}

              <button
                type="button"
                onClick={() => setRateTier('zero')}
                className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-bold transition ${
                  rateTier === 'zero'
                    ? 'bg-teal-50 text-teal-900 border-teal-500 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-600 ring-2 ring-teal-500/20'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                } ${isPostAug2025 ? 'col-span-2' : ''}`}
              >
                <div className="text-base sm:text-lg font-black text-teal-800 dark:text-teal-400">
                  0%
                </div>
                <div className="text-[11px] font-normal text-slate-600 dark:text-slate-400">
                  Scutit cu drept de deducere (Export, LIC)
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div
          aria-live="polite"
          className="bg-gradient-to-br from-teal-50/80 via-emerald-50/30 to-white dark:from-slate-800 dark:via-slate-800/80 dark:to-slate-900 border border-teal-200 dark:border-teal-900/40 rounded-2xl p-5 sm:p-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-5 border-b border-teal-200/60 dark:border-slate-700">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-400">
                {calcType === 'add' ? 'Valoare Factură (Brut cu TVA inclus)' : 'Baza de Impozitare (Valoare Netă)'}
              </span>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight mt-1">
                {formatCurrency(
                  calcType === 'add' ? result.grossAmount : result.netAmount,
                  'ro',
                  'RON',
                )}
              </div>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Valoare TVA ({result.appliedRate}%)
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-700 dark:text-teal-400 mt-1">
                {formatCurrency(result.vatAmount, 'ro', 'RON')}
              </div>
            </div>
          </div>

          {/* Breakdown Lines */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 text-xs sm:text-sm">
            <div className="p-3.5 bg-white/70 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
                Baza Impozabilă (Net)
              </span>
              <div className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                {formatCurrency(result.netAmount, 'ro', 'RON')}
              </div>
            </div>

            <div className="p-3.5 bg-white/70 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
                Cota TVA Aplicată ({result.appliedRate}%)
              </span>
              <div className="text-lg font-bold text-teal-700 dark:text-teal-400 mt-0.5">
                +{formatCurrency(result.vatAmount, 'ro', 'RON')}
              </div>
            </div>

            <div className="p-3.5 bg-white/70 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
                Total de Plată (Brut)
              </span>
              <div className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                {formatCurrency(result.grossAmount, 'ro', 'RON')}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <Info className="w-4 h-4 text-teal-600 shrink-0" />
            <span>
              <strong>Temei Legal:</strong> {result.legalReference}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
          >
            {copied ? <Check className="w-4 h-4 text-teal-600" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copiat' : 'Copiază rezultatul'}
          </button>
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
          >
            <Share2 className="w-4 h-4" />
            Distribuie
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
          >
            <Printer className="w-4 h-4" />
            Tipărește
          </button>
        </div>
      </div>
    </div>
  );
}
export default RomanianTvaCalculatorTool;
