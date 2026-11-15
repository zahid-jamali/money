'use client';

import React, { useState, useId } from 'react';
import { SupportedLang } from '@/config/pages';
import { getDictionary } from '@/i18n';
import { calculateVat, VatCalculationType } from '@/lib/vat';
import { formatCurrency, parseLocaleNumber } from '@/lib/formatters';
import { Copy, Check, Share2, Printer, ArrowRightLeft, Sparkles } from 'lucide-react';

interface VatPreset {
  label: string;
  rate: number;
}

interface VatCalculatorToolProps {
  lang: SupportedLang;
  defaultRate?: number;
  currencyCode?: string;
  presets?: VatPreset[];
}

export function VatCalculatorTool({
  lang,
  defaultRate = 20,
  currencyCode,
  presets,
}: VatCalculatorToolProps) {
  const dict = getDictionary(lang);
  const inputId = useId();

  const defaultPresets: VatPreset[] =
    presets ||
    (lang === 'de'
      ? [
          { label: '19% Regel', rate: 19 },
          { label: '7% Ermäßigt', rate: 7 },
          { label: '0% Frei', rate: 0 },
        ]
      : [
          { label: '20% Standard', rate: 20 },
          { label: '5% Reduced', rate: 5 },
          { label: '0% Zero', rate: 0 },
        ]);

  const [rawAmount, setRawAmount] = useState<string>('100');
  const [rate, setRate] = useState<number>(defaultRate);
  const [calcType, setCalcType] = useState<VatCalculationType>('add');
  const [copied, setCopied] = useState<boolean>(false);
  const [showComparison, setShowComparison] = useState<boolean>(false);
  const [compareAmount, setCompareAmount] = useState<string>('150');

  const parsedAmount = parseLocaleNumber(rawAmount);
  const result = calculateVat({
    amount: parsedAmount,
    rate,
    type: calcType,
  });

  const parsedCompareAmount = parseLocaleNumber(compareAmount);
  const compareResult = calculateVat({
    amount: parsedCompareAmount,
    rate,
    type: calcType,
  });

  const headlineValue = calcType === 'add' ? result.grossAmount : result.netAmount;
  const headlineLabel = calcType === 'add' ? dict.tool.grossAmount : dict.tool.netAmount;

  const copyResult = async () => {
    const text = `${headlineLabel}: ${formatCurrency(headlineValue, lang, currencyCode)} (VAT: ${formatCurrency(result.vatAmount, lang, currencyCode)} @ ${rate}%)`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const shareTool = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: dict.meta.siteTitle,
          text: `${headlineLabel}: ${formatCurrency(headlineValue, lang, currencyCode)}`,
          url: window.location.href,
        });
      } catch {
        // Fallback to copy
        copyResult();
      }
    } else {
      copyResult();
    }
  };

  const printCalculation = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8">
      {/* Direction Segmented Toggle */}
      <div className="mb-6">
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
          {dict.tool.calculationType}
        </label>
        <div className="grid grid-cols-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl gap-1">
          <button
            type="button"
            onClick={() => setCalcType('add')}
            className={`py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
              calcType === 'add'
                ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {dict.tool.addVat}
          </button>
          <button
            type="button"
            onClick={() => setCalcType('remove')}
            className={`py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
              calcType === 'remove'
                ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {dict.tool.removeVat}
          </button>
        </div>
      </div>

      {/* Main Grid: Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        {/* Amount Input */}
        <div>
          <label
            htmlFor={inputId}
            className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1.5"
          >
            {calcType === 'add' ? dict.tool.netAmount : dict.tool.grossAmount}
          </label>
          <div className="relative rounded-xl shadow-sm">
            <input
              id={inputId}
              type="text"
              inputMode="decimal"
              value={rawAmount}
              onChange={(e) => setRawAmount(e.target.value)}
              placeholder="0.00"
              className="w-full text-lg sm:text-xl font-semibold px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl focus:bg-white dark:focus:bg-slate-900 focus:border-teal-600 dark:focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-slate-900 dark:text-white outline-none transition"
            />
          </div>
        </div>

        {/* VAT Rate Input & Quick Presets */}
        <div>
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
            {dict.tool.vatRate}
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="number"
                step="0.1"
                min="0"
                max="100"
                value={rate}
                onChange={(e) => setRate(parseFloat(e.target.value) || 0)}
                className="w-full text-lg sm:text-xl font-semibold px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl focus:bg-white dark:focus:bg-slate-900 focus:border-teal-600 dark:focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-slate-900 dark:text-white outline-none transition"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
                %
              </span>
            </div>
          </div>
          {/* Preset Buttons */}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {defaultPresets.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => setRate(preset.rate)}
                className={`text-xs px-2.5 py-1 rounded-md font-medium transition ${
                  rate === preset.rate
                    ? 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 border border-teal-300 dark:border-teal-700'
                    : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Prominent Headline Result & Breakdown */}
      <div
        aria-live="polite"
        className="bg-gradient-to-br from-teal-50 to-emerald-50/40 dark:from-slate-800 dark:to-slate-800/80 border border-teal-200/80 dark:border-teal-900/40 rounded-2xl p-5 sm:p-6 mb-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-teal-200/60 dark:border-slate-700">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-teal-800 dark:text-teal-400">
              {headlineLabel}
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-0.5">
              {formatCurrency(headlineValue, lang, currencyCode)}
            </div>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
              {dict.tool.vatAmount} ({rate}%)
            </span>
            <div className="text-xl sm:text-2xl font-bold text-teal-700 dark:text-teal-400">
              {formatCurrency(result.vatAmount, lang, currencyCode)}
            </div>
          </div>
        </div>

        {/* Detailed Breakdown Lines */}
        <div className="pt-4 space-y-2.5 text-xs sm:text-sm">
          <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
            <span>{dict.tool.netAmount}:</span>
            <span className="font-semibold">
              {formatCurrency(result.netAmount, lang, currencyCode)}
            </span>
          </div>
          <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
            <span>
              {dict.tool.vatAmount} ({rate}%):
            </span>
            <span className="font-semibold text-teal-700 dark:text-teal-400">
              +{formatCurrency(result.vatAmount, lang, currencyCode)}
            </span>
          </div>
          <div className="flex justify-between items-center text-slate-900 dark:text-white font-bold pt-2 border-t border-teal-200/40 dark:border-slate-700">
            <span>{dict.tool.totalAmount}:</span>
            <span className="text-base">
              {formatCurrency(result.grossAmount, lang, currencyCode)}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons: Copy, Share, Print, Compare */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <button
          type="button"
          onClick={copyResult}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-teal-600" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
          {copied ? dict.common.copied : dict.common.copy}
        </button>

        <button
          type="button"
          onClick={shareTool}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
        >
          <Share2 className="w-3.5 h-3.5" />
          {dict.common.share}
        </button>

        <button
          type="button"
          onClick={printCalculation}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
        >
          <Printer className="w-3.5 h-3.5" />
          {dict.common.print}
        </button>

        <button
          type="button"
          onClick={() => setShowComparison(!showComparison)}
          className="inline-flex items-center gap-1.5 ml-auto px-3.5 py-2 rounded-lg text-xs font-semibold text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/40 transition"
        >
          <ArrowRightLeft className="w-3.5 h-3.5" />
          {showComparison ? 'Hide Comparison' : 'Compare Scenarios'}
        </button>
      </div>

      {/* Side-by-side comparison mode when toggled */}
      {showComparison && (
        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-teal-600" /> Side-by-Side Comparison
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-teal-300 dark:border-teal-800 bg-teal-50/30 dark:bg-teal-950/20">
              <span className="text-xs font-bold text-teal-700 dark:text-teal-400">
                {dict.common.scenarioA} ({rawAmount})
              </span>
              <div className="text-xl font-bold mt-1 text-slate-900 dark:text-white">
                {formatCurrency(headlineValue, lang, currencyCode)}
              </div>
              <div className="text-xs text-slate-500 mt-1">
                VAT: {formatCurrency(result.vatAmount, lang, currencyCode)}
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                  {dict.common.scenarioB}
                </span>
                <input
                  type="text"
                  value={compareAmount}
                  onChange={(e) => setCompareAmount(e.target.value)}
                  className="w-24 text-right text-xs px-2 py-1 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded font-semibold"
                />
              </div>
              <div className="text-xl font-bold mt-1 text-slate-900 dark:text-white">
                {formatCurrency(
                  calcType === 'add' ? compareResult.grossAmount : compareResult.netAmount,
                  lang,
                  currencyCode,
                )}
              </div>
              <div className="text-xs text-slate-500 mt-1">
                VAT: {formatCurrency(compareResult.vatAmount, lang, currencyCode)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
