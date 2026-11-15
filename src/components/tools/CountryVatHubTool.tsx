'use client';

import React, { useState, useMemo, useId } from 'react';
import {
  EU_VAT_RATES,
  compareAllEuVat,
  compareCountryPair,
  calculateCountryPairComparison,
  EuCountryVatCalculation,
  CountryPairComparisonResult,
} from '@/lib/vat/eu-hub';
import { calculateVat, VatCalculationType } from '@/lib/vat';
import { formatCurrency, parseLocaleNumber } from '@/lib/formatters';
import {
  Search,
  ArrowUpDown,
  ArrowRightLeft,
  Globe,
  TrendingUp,
  Percent,
  Check,
  Copy,
  Info,
  ShieldAlert,
  Building,
  Sparkles,
} from 'lucide-react';

interface CountryVatHubToolProps {
  initialAmount?: number;
  initialOrigin?: string;
  initialDestination?: string;
}

// Convert 2-letter country code to flag emoji
function getFlagEmoji(countryCode: string): string {
  if (!countryCode || countryCode.length !== 2) return '🇪🇺';
  // UK code fallback
  const code = countryCode.toUpperCase() === 'UK' ? 'GB' : countryCode.toUpperCase();
  return code
    .split('')
    .map((char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    .join('');
}

export function CountryVatHubTool({
  initialAmount = 100,
  initialOrigin = 'DE',
  initialDestination = 'FR',
}: CountryVatHubToolProps) {
  const inputId = useId();

  // Search & Filter state
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortField, setSortField] = useState<'name' | 'rate'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Interactive Calculator State
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('DE');
  const [calcAmount, setCalcAmount] = useState<string>(String(initialAmount));
  const [calcType, setCalcType] = useState<VatCalculationType>('add');
  const [rateTier, setRateTier] = useState<'standard' | 'reduced'>('standard');

  // Cross-border comparison state
  const [originCountry, setOriginCountry] = useState<string>(initialOrigin);
  const [destinationCountry, setDestinationCountry] = useState<string>(initialDestination);
  const [parityMode, setParityMode] = useState<'fixedNet' | 'fixedGross'>('fixedNet');
  const [copied, setCopied] = useState<boolean>(false);

  const parsedCalcAmount = parseLocaleNumber(calcAmount);

  // Selected Country data
  const selectedCountry = EU_VAT_RATES[selectedCountryCode] || EU_VAT_RATES.DE;
  const activeRate =
    rateTier === 'reduced' && selectedCountry.reducedRates.length > 0
      ? selectedCountry.reducedRates[0]
      : selectedCountry.standardRate;

  const currentCountryResult = calculateVat({
    amount: parsedCalcAmount,
    rate: activeRate,
    type: calcType,
  });

  // Cross-Border Comparison Calculation
  const pairComparison: CountryPairComparisonResult = useMemo(() => {
    return calculateCountryPairComparison({
      amount: parsedCalcAmount,
      originCountry,
      destinationCountry,
      parityMode,
      originRateTier: 'standard',
      destRateTier: 'standard',
    });
  }, [parsedCalcAmount, originCountry, destinationCountry, parityMode]);

  // Overall Comparison Rankings & Stats
  const hubData = useMemo(() => {
    return compareAllEuVat(parsedCalcAmount, calcType, rateTier);
  }, [parsedCalcAmount, calcType, rateTier]);

  // Filtered & Sorted countries list
  const filteredCountries = useMemo(() => {
    const list = Object.values(EU_VAT_RATES).filter((c) => {
      const q = searchTerm.toLowerCase().trim();
      return (
        c.countryName.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q)
      );
    });

    list.sort((a, b) => {
      if (sortField === 'name') {
        const cmp = a.countryName.localeCompare(b.countryName);
        return sortOrder === 'asc' ? cmp : -cmp;
      } else {
        const cmp = a.standardRate - b.standardRate;
        return sortOrder === 'asc' ? cmp : -cmp;
      }
    });

    return list;
  }, [searchTerm, sortField, sortOrder]);

  const toggleSort = (field: 'name' | 'rate') => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const handleCopyComparison = async () => {
    const text = `EU Cross-Border VAT Comparison:\n` +
      `• Origin: ${pairComparison.origin.entry.countryName} (${pairComparison.origin.rate}% VAT)\n` +
      `• Destination: ${pairComparison.destination.entry.countryName} (${pairComparison.destination.rate}% VAT)\n` +
      `• Rate Difference: ${pairComparison.vatRateDelta > 0 ? '+' : ''}${pairComparison.vatRateDelta}%\n` +
      `• Mode: ${parityMode === 'fixedNet' ? 'B2B Net Price Parity' : 'B2C Gross Shelf Price Parity'}\n` +
      `• Net Seller Margin Impact: ${pairComparison.sellerMarginImpactPercentage}%\n` +
      `• Gross Delta: €${pairComparison.grossAmountDelta.toFixed(2)}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* European Union VAT Hub Statistics Header */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
            EU Average Rate
          </span>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">
            {hubData.stats.averageStandardRate}%
          </div>
          <span className="text-[11px] text-slate-400 dark:text-slate-500 block mt-0.5">
            Median: {hubData.stats.medianStandardRate}%
          </span>
        </div>

        <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
            Lowest Standard VAT
          </span>
          <div className="text-2xl font-black text-teal-600 dark:text-teal-400 mt-1">
            {hubData.stats.minStandardRate}%
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium block mt-0.5">
            {hubData.stats.lowestVatCountry.countryName} ({hubData.stats.lowestVatCountry.code})
          </span>
        </div>

        <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
            Highest Standard VAT
          </span>
          <div className="text-2xl font-black text-amber-600 dark:text-amber-400 mt-1">
            {hubData.stats.maxStandardRate}%
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium block mt-0.5">
            {hubData.stats.highestVatCountry.countryName} ({hubData.stats.highestVatCountry.code})
          </span>
        </div>

        <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
            Tracked Countries
          </span>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">
            {hubData.stats.totalCountriesCount}
          </div>
          <span className="text-[11px] text-slate-400 dark:text-slate-500 block mt-0.5">
            27 EU Members + UK
          </span>
        </div>
      </div>

      {/* SECTION 1: INTERACTIVE SINGLE-COUNTRY CALCULATOR */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-teal-600" />
              Interactive Country VAT Calculator
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Select any EU member state or UK to instantly compute net, tax, and gross values.
            </p>
          </div>
        </div>

        {/* Direction Toggle */}
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
            Add VAT (Net → Gross)
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
            Remove VAT (Gross → Net)
          </button>
        </div>

        {/* Inputs: Country Select, Amount Input, Tier Select */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              Select Country
            </label>
            <select
              value={selectedCountryCode}
              onChange={(e) => setSelectedCountryCode(e.target.value)}
              className="w-full px-3.5 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl font-bold text-slate-900 dark:text-white"
            >
              {Object.values(EU_VAT_RATES).map((country) => (
                <option key={country.code} value={country.code}>
                  {country.countryName} ({country.code}) - {country.standardRate}%
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor={inputId}
              className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5"
            >
              Amount (€ or local)
            </label>
            <input
              id={inputId}
              type="text"
              inputMode="decimal"
              value={calcAmount}
              onChange={(e) => setCalcAmount(e.target.value)}
              placeholder="100.00"
              className="w-full px-3.5 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl font-bold text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              Rate Tier
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={() => setRateTier('standard')}
                className={`py-3 px-2 rounded-xl text-xs font-bold border transition ${
                  rateTier === 'standard'
                    ? 'bg-teal-50 text-teal-800 border-teal-400 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-600'
                    : 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                }`}
              >
                Standard ({selectedCountry.standardRate}%)
              </button>
              <button
                type="button"
                disabled={selectedCountry.reducedRates.length === 0}
                onClick={() => setRateTier('reduced')}
                className={`py-3 px-2 rounded-xl text-xs font-bold border transition ${
                  rateTier === 'reduced'
                    ? 'bg-teal-50 text-teal-800 border-teal-400 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-600'
                    : 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                } ${selectedCountry.reducedRates.length === 0 ? 'opacity-40 cursor-not-allowed' : ''}`}
              >
                Reduced ({selectedCountry.reducedRates[0] ?? 'N/A'}%)
              </button>
            </div>
          </div>
        </div>

        {/* Calculation Summary Box */}
        <div
          aria-live="polite"
          className="bg-gradient-to-br from-teal-50 via-emerald-50/40 to-white dark:from-slate-800 dark:via-slate-800/80 dark:to-slate-900 border border-teal-200 dark:border-teal-900/40 rounded-2xl p-5 sm:p-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-4 border-b border-teal-200/60 dark:border-slate-700">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-teal-800 dark:text-teal-400">
                {selectedCountry.countryName} ({selectedCountry.code}) • {activeRate}% VAT
              </span>
              <div className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white mt-1">
                €{(calcType === 'add' ? currentCountryResult.grossAmount : currentCountryResult.netAmount).toFixed(2)}
              </div>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                VAT Amount ({activeRate}%)
              </span>
              <div className="text-2xl font-bold text-teal-700 dark:text-teal-400 mt-1">
                +€{currentCountryResult.vatAmount.toFixed(2)}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-xs sm:text-sm">
            <div className="p-3 bg-white/80 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-xs">Net Base</span>
              <span className="font-bold text-slate-900 dark:text-white">
                €{currentCountryResult.netAmount.toFixed(2)}
              </span>
            </div>
            <div className="p-3 bg-white/80 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-xs">Tax Liability</span>
              <span className="font-bold text-teal-700 dark:text-teal-400">
                +€{currentCountryResult.vatAmount.toFixed(2)}
              </span>
            </div>
            <div className="p-3 bg-white/80 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-xs">Total Invoiced Gross</span>
              <span className="font-bold text-slate-900 dark:text-white">
                €{currentCountryResult.grossAmount.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: CROSS-BORDER VAT DIFFERENCE COMPARISON TOOL */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ArrowRightLeft className="w-5 h-5 text-teal-600" />
              Cross-Border VAT Difference & Seller Margin Comparison
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Analyze price differences and profit margin impacts when selling across EU borders (OSS / IOSS).
            </p>
          </div>
          <button
            type="button"
            onClick={handleCopyComparison}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg transition self-start sm:self-auto"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-teal-600" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied' : 'Copy Analysis'}
          </button>
        </div>

        {/* Origin / Destination / Parity Mode Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              Origin Country
            </label>
            <select
              value={originCountry}
              onChange={(e) => setOriginCountry(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl font-bold text-slate-900 dark:text-white"
            >
              {Object.values(EU_VAT_RATES).map((c) => (
                <option key={c.code} value={c.code}>
                  {c.countryName} ({c.standardRate}%)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              Destination Country
            </label>
            <select
              value={destinationCountry}
              onChange={(e) => setDestinationCountry(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl font-bold text-slate-900 dark:text-white"
            >
              {Object.values(EU_VAT_RATES).map((c) => (
                <option key={c.code} value={c.code}>
                  {c.countryName} ({c.standardRate}%)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              Price Parity Policy
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={() => setParityMode('fixedNet')}
                className={`py-2 px-2 rounded-xl text-xs font-bold border transition ${
                  parityMode === 'fixedNet'
                    ? 'bg-teal-50 text-teal-800 border-teal-400 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-600'
                    : 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                Fixed Net (B2B)
              </button>
              <button
                type="button"
                onClick={() => setParityMode('fixedGross')}
                className={`py-2 px-2 rounded-xl text-xs font-bold border transition ${
                  parityMode === 'fixedGross'
                    ? 'bg-teal-50 text-teal-800 border-teal-400 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-600'
                    : 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                Fixed Gross (B2C)
              </button>
            </div>
          </div>
        </div>

        {/* Side-by-Side Comparison Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Origin Country Card */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-800/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Origin ({pairComparison.origin.entry.code})
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700">
                {pairComparison.origin.rate}% VAT
              </span>
            </div>
            <div className="text-xl font-black text-slate-900 dark:text-white">
              {pairComparison.origin.entry.countryName}
            </div>
            <div className="space-y-1.5 text-xs pt-2 border-t border-slate-200 dark:border-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">Net Amount:</span>
                <span className="font-semibold">€{pairComparison.origin.netAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">VAT Collected:</span>
                <span className="font-semibold text-teal-700 dark:text-teal-400">
                  +€{pairComparison.origin.vatAmount.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between font-bold text-slate-900 dark:text-white pt-1 border-t border-slate-200 dark:border-slate-700">
                <span>Consumer Gross:</span>
                <span>€{pairComparison.origin.grossAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Destination Country Card */}
          <div className="p-5 rounded-2xl border border-teal-200 dark:border-teal-900 bg-teal-50/30 dark:bg-teal-950/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                Destination ({pairComparison.destination.entry.code})
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300">
                {pairComparison.destination.rate}% VAT
              </span>
            </div>
            <div className="text-xl font-black text-slate-900 dark:text-white">
              {pairComparison.destination.entry.countryName}
            </div>
            <div className="space-y-1.5 text-xs pt-2 border-t border-teal-200/60 dark:border-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">Net Amount:</span>
                <span className="font-semibold">€{pairComparison.destination.netAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">VAT Collected:</span>
                <span className="font-semibold text-teal-700 dark:text-teal-400">
                  +€{pairComparison.destination.vatAmount.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between font-bold text-slate-900 dark:text-white pt-1 border-t border-teal-200/60 dark:border-slate-700">
                <span>Consumer Gross:</span>
                <span>€{pairComparison.destination.grossAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Delta Analysis Pill */}
        <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div>
            <span className="font-bold text-slate-900 dark:text-white">
              Statutory VAT Rate Delta:
            </span>{' '}
            <span
              className={`font-mono font-bold ${
                pairComparison.vatRateDelta > 0
                  ? 'text-rose-600 dark:text-rose-400'
                  : pairComparison.vatRateDelta < 0
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-slate-600'
              }`}
            >
              {pairComparison.vatRateDelta > 0 ? '+' : ''}
              {pairComparison.vatRateDelta}%
            </span>
          </div>

          <div>
            <span className="font-bold text-slate-900 dark:text-white">
              {parityMode === 'fixedGross' ? 'Seller Net Margin Impact:' : 'Consumer Price Difference:'}
            </span>{' '}
            <span
              className={`font-mono font-bold ${
                pairComparison.sellerMarginImpactPercentage < 0
                  ? 'text-rose-600 dark:text-rose-400'
                  : pairComparison.sellerMarginImpactPercentage > 0
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-slate-600'
              }`}
            >
              {parityMode === 'fixedGross'
                ? `${pairComparison.sellerMarginImpactPercentage > 0 ? '+' : ''}${pairComparison.sellerMarginImpactPercentage}%`
                : `${pairComparison.grossAmountDelta > 0 ? '+' : ''}€${pairComparison.grossAmountDelta.toFixed(2)}`}
            </span>
          </div>
        </div>
      </div>

      {/* SECTION 3: COMPLETE DIRECTORY TABLE OF ALL 27 EU MEMBERS + UK */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Complete EU & UK Statutory VAT Rates Directory (2026)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Verified European Commission statutory standard, reduced, and super-reduced rates. Click any country to test.
            </p>
          </div>

          {/* Search Filter Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search country or code..."
              className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Directory Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/70 text-xs font-semibold text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th
                  scope="col"
                  onClick={() => toggleSort('name')}
                  className="p-3.5 cursor-pointer hover:text-slate-900 dark:hover:text-white select-none"
                >
                  <div className="flex items-center gap-1.5">
                    <span>Country & Code</span>
                    <ArrowUpDown className="w-3.5 h-3.5" />
                  </div>
                </th>
                <th
                  scope="col"
                  onClick={() => toggleSort('rate')}
                  className="p-3.5 cursor-pointer hover:text-slate-900 dark:hover:text-white select-none"
                >
                  <div className="flex items-center gap-1.5">
                    <span>Standard Rate</span>
                    <ArrowUpDown className="w-3.5 h-3.5" />
                  </div>
                </th>
                <th scope="col" className="p-3.5">Reduced Rates</th>
                <th scope="col" className="p-3.5">Super-Reduced / Parking</th>
                <th scope="col" className="p-3.5 text-right">Tax on €{parsedCalcAmount || 100}</th>
                <th scope="col" className="p-3.5 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredCountries.map((c) => {
                const sampleVat = Math.round((parsedCalcAmount * (c.standardRate / 100) + Number.EPSILON) * 100) / 100;
                const isSelected = selectedCountryCode === c.code;

                return (
                  <tr
                    key={c.code}
                    className={`transition-colors ${
                      isSelected
                        ? 'bg-teal-50/60 dark:bg-teal-950/40 font-semibold'
                        : 'hover:bg-slate-50/60 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <td className="p-3.5">
                      <div className="flex items-center gap-2">
                        <span className="text-lg" role="img" aria-label={c.countryName}>
                          {getFlagEmoji(c.code)}
                        </span>
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white">
                            {c.countryName}
                          </span>
                          <span className="ml-1.5 font-mono text-xs px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                            {c.code}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="p-3.5">
                      <span className="text-base font-bold text-slate-900 dark:text-white">
                        {c.standardRate}%
                      </span>
                    </td>

                    <td className="p-3.5">
                      {c.reducedRates.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {c.reducedRates.map((r) => (
                            <span
                              key={r}
                              className="px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                            >
                              {r}%
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-xs text-slate-400">None</span>
                      )}
                    </td>

                    <td className="p-3.5 text-xs text-slate-600 dark:text-slate-400">
                      {c.superReducedRate ? (
                        <span>Super: {c.superReducedRate}%</span>
                      ) : c.parkingRate ? (
                        <span>Parking: {c.parkingRate}%</span>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>

                    <td className="p-3.5 text-right font-mono font-bold text-teal-700 dark:text-teal-400">
                      €{sampleVat.toFixed(2)}
                    </td>

                    <td className="p-3.5 text-center">
                      <button
                        type="button"
                        onClick={() => setSelectedCountryCode(c.code)}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                          isSelected
                            ? 'bg-teal-600 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                        }`}
                      >
                        {isSelected ? 'Selected' : 'Calculate'}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default CountryVatHubTool;
