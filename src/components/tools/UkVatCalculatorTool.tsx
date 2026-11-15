'use client';

import React, { useState, useId } from 'react';
import { calculateVat, VatCalculationType } from '@/lib/vat';
import { formatCurrency, parseLocaleNumber } from '@/lib/formatters';
import {
  Copy,
  Check,
  Share2,
  Printer,
  Info,
  ArrowRightLeft,
  FileText,
  Building2,
  CheckCircle2,
} from 'lucide-react';

interface UkVatCalculatorToolProps {
  initialAmount?: number;
  initialRate?: number;
  initialType?: VatCalculationType;
}

const COMMON_UK_AMOUNTS = [10, 25, 50, 100, 250, 500, 1000, 5000];

export function UkVatCalculatorTool({
  initialAmount = 100,
  initialRate = 20,
  initialType = 'add',
}: UkVatCalculatorToolProps) {
  const inputId = useId();
  const [calcType, setCalcType] = useState<VatCalculationType>(initialType);
  const [rawAmount, setRawAmount] = useState<string>(String(initialAmount));
  const [rate, setRate] = useState<number>(initialRate);
  const [copied, setCopied] = useState<boolean>(false);

  const parsedAmount = parseLocaleNumber(rawAmount);

  const result = calculateVat({
    amount: parsedAmount,
    rate,
    type: calcType,
  });

  const rates = [
    { label: '20% Standard', rate: 20, description: 'Most goods and commercial services' },
    { label: '5% Reduced', rate: 5, description: 'Domestic energy, children’s car seats' },
    { label: '0% Zero-rate', rate: 0, description: 'Most food, books, children’s clothes' },
  ];

  const handleCopy = async () => {
    const text = `UK VAT Calculation (${rate}%):\n` +
      `• Calculation: ${calcType === 'add' ? 'Add VAT (Net to Gross)' : 'Remove VAT (Gross to Net)'}\n` +
      `• Net Amount: ${formatCurrency(result.netAmount, 'en-GB', 'GBP')}\n` +
      `• VAT (${rate}%): ${formatCurrency(result.vatAmount, 'en-GB', 'GBP')}\n` +
      `• Gross Amount: ${formatCurrency(result.grossAmount, 'en-GB', 'GBP')}\n` +
      `• Effective Multiplier: ${result.effectiveMultiplier}x`;
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
          title: 'UK VAT Calculator - HMRC Rates',
          text: `Net: ${formatCurrency(result.netAmount, 'en-GB', 'GBP')} | VAT: ${formatCurrency(result.vatAmount, 'en-GB', 'GBP')} | Gross: ${formatCurrency(result.grossAmount, 'en-GB', 'GBP')}`,
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
    <div className="w-full space-y-8">
      {/* Main Calculator Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8">
        {/* Toggle: Add VAT vs Remove VAT */}
        <div className="mb-6">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Calculation Direction
          </label>
          <div
            role="radiogroup"
            aria-label="VAT Calculation Direction"
            className="grid grid-cols-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl gap-1.5"
          >
            <button
              type="button"
              role="radio"
              aria-checked={calcType === 'add'}
              onClick={() => setCalcType('add')}
              className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                calcType === 'add'
                  ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Add VAT</span>
              <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400 hidden sm:inline">
                (Net → Gross)
              </span>
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={calcType === 'remove'}
              onClick={() => setCalcType('remove')}
              className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                calcType === 'remove'
                  ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Remove VAT</span>
              <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400 hidden sm:inline">
                (Gross → Net)
              </span>
            </button>
          </div>
        </div>

        {/* Inputs: Amount and Rate Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Amount Input with £ Currency Prefix */}
          <div>
            <label
              htmlFor={inputId}
              className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1.5"
            >
              {calcType === 'add' ? 'Net Amount (excluding VAT)' : 'Gross Amount (including VAT)'}
            </label>
            <div className="relative rounded-xl shadow-sm">
              <div
                className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4"
                aria-hidden="true"
              >
                <span className="text-xl font-bold text-slate-500 dark:text-slate-400">£</span>
              </div>
              <input
                id={inputId}
                type="text"
                inputMode="decimal"
                value={rawAmount}
                onChange={(e) => setRawAmount(e.target.value)}
                placeholder="0.00"
                className="w-full text-xl sm:text-2xl font-bold pl-9 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl focus:bg-white dark:focus:bg-slate-900 focus:border-teal-600 dark:focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-slate-900 dark:text-white outline-none transition"
              />
            </div>
            <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
              Enter base amount in British Pounds (£)
            </p>
          </div>

          {/* Rates Selector */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
              HMRC Statutory VAT Rate
            </label>
            <div className="grid grid-cols-3 gap-2">
              {rates.map((preset) => (
                <button
                  key={preset.rate}
                  type="button"
                  onClick={() => setRate(preset.rate)}
                  className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-xl text-xs sm:text-sm font-semibold border transition ${
                    rate === preset.rate
                      ? 'bg-teal-50 text-teal-800 border-teal-400 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-600 ring-2 ring-teal-500/20'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                  }`}
                >
                  <span className="text-base sm:text-lg font-bold">{preset.rate}%</span>
                  <span className="text-[11px] font-normal truncate max-w-full">
                    {preset.label.split(' ')[1]}
                  </span>
                </button>
              ))}
            </div>

            {/* Custom Rate Fallback Input */}
            <div className="mt-2.5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Custom rate:</span>
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.5"
                  value={rate}
                  onChange={(e) => setRate(parseFloat(e.target.value) || 0)}
                  aria-label="Custom VAT rate percentage"
                  className="w-16 px-2 py-1 text-right font-semibold bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-slate-900 dark:text-white"
                />
                <span className="font-bold">%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Summary Card */}
        <div
          aria-live="polite"
          className="bg-gradient-to-br from-teal-50/80 via-emerald-50/30 to-white dark:from-slate-800 dark:via-slate-800/80 dark:to-slate-900 border border-teal-200 dark:border-teal-900/40 rounded-2xl p-5 sm:p-6 mb-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-5 border-b border-teal-200/60 dark:border-slate-700">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-400">
                {calcType === 'add' ? 'Total Gross (Including VAT)' : 'Net Amount (Excluding VAT)'}
              </span>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight mt-1">
                {formatCurrency(
                  calcType === 'add' ? result.grossAmount : result.netAmount,
                  'en-GB',
                  'GBP',
                )}
              </div>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                VAT Portion ({rate}%)
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-700 dark:text-teal-400 mt-1">
                {formatCurrency(result.vatAmount, 'en-GB', 'GBP')}
              </div>
            </div>
          </div>

          {/* Breakdown Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5">
            <div className="p-3 bg-white/70 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Net Amount</span>
              <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                {formatCurrency(result.netAmount, 'en-GB', 'GBP')}
              </div>
            </div>
            <div className="p-3 bg-white/70 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">VAT Rate</span>
              <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                {rate}%
              </div>
            </div>
            <div className="p-3 bg-white/70 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Gross Amount</span>
              <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                {formatCurrency(result.grossAmount, 'en-GB', 'GBP')}
              </div>
            </div>
            <div className="p-3 bg-white/70 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Effective Multiplier</span>
              <div className="text-base sm:text-lg font-bold text-teal-700 dark:text-teal-400 mt-0.5">
                {result.effectiveMultiplier}x
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons: Copy, Share, Print */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
          >
            {copied ? <Check className="w-4 h-4 text-teal-600" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied to Clipboard' : 'Copy Breakdown'}
          </button>
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
          >
            <Share2 className="w-4 h-4" />
            Share
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
          >
            <Printer className="w-4 h-4" />
            Print Calculation
          </button>
        </div>
      </div>

      {/* Pre-calculated Quick Reference Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Quick Reference Table ({rate}% UK VAT)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Click any row to test that amount in the calculator.
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 rounded-md border border-teal-200 dark:border-teal-800">
            HMRC Rate: {rate}%
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <th scope="col" className="pb-3 pr-4">Net (Excl. VAT)</th>
                <th scope="col" className="pb-3 px-4">VAT Amount ({rate}%)</th>
                <th scope="col" className="pb-3 px-4">Gross (Incl. VAT)</th>
                <th scope="col" className="pb-3 pl-4 text-right">Quick Apply</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {COMMON_UK_AMOUNTS.map((amt) => {
                const sample = calculateVat({ amount: amt, rate, type: 'add' });
                return (
                  <tr
                    key={amt}
                    onClick={() => setRawAmount(String(amt))}
                    className="cursor-pointer hover:bg-teal-50/40 dark:hover:bg-slate-800/60 transition-colors"
                  >
                    <td className="py-2.5 pr-4 font-semibold text-slate-900 dark:text-white">
                      {formatCurrency(amt, 'en-GB', 'GBP')}
                    </td>
                    <td className="py-2.5 px-4 text-teal-700 dark:text-teal-400 font-medium">
                      +{formatCurrency(sample.vatAmount, 'en-GB', 'GBP')}
                    </td>
                    <td className="py-2.5 px-4 font-bold text-slate-900 dark:text-white">
                      {formatCurrency(sample.grossAmount, 'en-GB', 'GBP')}
                    </td>
                    <td className="py-2.5 pl-4 text-right">
                      <span className="text-xs text-teal-600 dark:text-teal-400 hover:underline">
                        Apply £{amt}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Informative Notice Box: Flat Rate Scheme & £90,000 Registration Threshold */}
      <div className="bg-gradient-to-br from-amber-50/70 to-orange-50/40 dark:from-slate-800/90 dark:to-slate-800/40 border border-amber-200/80 dark:border-amber-900/40 rounded-2xl p-5 sm:p-6">
        <div className="flex items-start gap-3.5">
          <div className="p-2 bg-amber-100 dark:bg-amber-950/80 rounded-xl text-amber-800 dark:text-amber-300 shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <div className="space-y-3">
            <h4 className="text-base font-bold text-amber-950 dark:text-amber-200">
              HMRC Statutory VAT Guidance & Thresholds (2025/2026)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700 dark:text-slate-300">
              <div className="bg-white/80 dark:bg-slate-900/60 p-3.5 rounded-xl border border-amber-200/50 dark:border-slate-700">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">
                  VAT Registration Threshold: £90,000
                </span>
                <p>
                  You must register for UK VAT with HM Revenue and Customs (HMRC) if your VAT-taxable turnover goes over
                  <strong> £90,000</strong> in any rolling 12-month period, or if you expect it to exceed £90,000 in the next 30 days.
                </p>
              </div>

              <div className="bg-white/80 dark:bg-slate-900/60 p-3.5 rounded-xl border border-amber-200/50 dark:border-slate-700">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">
                  HMRC Flat Rate Scheme (FRS)
                </span>
                <p>
                  Businesses with a VAT-taxable turnover of up to <strong>£150,000</strong> (excluding VAT) can apply for the Flat Rate Scheme.
                  You charge standard 20% on invoices, but pay HMRC a fixed percentage of your gross turnover based on your industry.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>
                Standard rates confirmed pursuant to Value Added Tax Act 1994 (VATA 1994) & HMRC Notice 700.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UkVatCalculatorTool;
