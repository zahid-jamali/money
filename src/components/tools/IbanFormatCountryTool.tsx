'use client';

import React, { useState, useMemo, useId } from 'react';
import {
  Globe2,
  Copy,
  Check,
  CheckCircle2,
  XCircle,
  Building2,
  Sparkles,
  Info,
  ChevronDown,
  ShieldCheck,
  Search,
} from 'lucide-react';
import {
  IBAN_REGISTRY,
  getIbanCountrySpec,
  getAllIbanCountries,
  type IbanCountrySpec,
} from '@/data/iban-registry';
import { validateIban, formatIban, normalizeIban, type IbanValidationResult } from '@/lib/banking/iban';

export interface IbanFormatCountryToolLabels {
  title?: string;
  subtitle?: string;
  selectCountryLabel?: string;
  searchCountryPlaceholder?: string;
  keyFactsTitle?: string;
  totalLengthLabel?: string;
  currencyLabel?: string;
  sepaMemberLabel?: string;
  nationalAlgorithmLabel?: string;
  characters?: string;
  exampleTitle?: string;
  copyExample?: string;
  copied?: string;
  breakdownTitle?: string;
  testerTitle?: string;
  testerPlaceholder?: string;
  testerHelp?: string;
  countryCodePill?: string;
  checkDigitsPill?: string;
  bankCodePill?: string;
  branchCodePill?: string;
  accountPill?: string;
  nationalCheckDigitsPill?: string;
  validCountryIban?: string;
  invalidCountryIban?: string;
}

const DEFAULT_LABELS_EN: Required<IbanFormatCountryToolLabels> = {
  title: 'IBAN Format & Country Specifications',
  subtitle: 'Inspect structure, length, currency, and checksum algorithms for IBAN member nations worldwide.',
  selectCountryLabel: 'Select Country',
  searchCountryPlaceholder: 'Search country or code (e.g. Germany, DE, FR)...',
  keyFactsTitle: 'Key Country Facts',
  totalLengthLabel: 'Total IBAN Length',
  currencyLabel: 'Official Currency',
  sepaMemberLabel: 'SEPA Zone Member',
  nationalAlgorithmLabel: 'National Check Algorithm',
  characters: 'characters',
  exampleTitle: 'Official Example IBAN',
  copyExample: 'Copy Example',
  copied: 'Copied!',
  breakdownTitle: 'IBAN Structure Breakdown',
  testerTitle: 'Interactive Country IBAN Tester',
  testerPlaceholder: 'Enter IBAN to test for this country...',
  testerHelp: 'Instant verification against this country’s exact format, character lengths, and checksums.',
  countryCodePill: 'Country Code',
  checkDigitsPill: 'Check Digits',
  bankCodePill: 'Bank Code',
  branchCodePill: 'Branch Code',
  accountPill: 'Account Number',
  nationalCheckDigitsPill: 'National Check Digits',
  validCountryIban: 'Valid IBAN for this country',
  invalidCountryIban: 'Invalid IBAN for this country',
};

const DEFAULT_LABELS_DE: Required<IbanFormatCountryToolLabels> = {
  title: 'IBAN Formate nach Ländern',
  subtitle: 'Prüfen Sie Struktur, Zeichenlängen, Währung und Prüfziffer-Algorithmen aller IBAN-Länder weltweit.',
  selectCountryLabel: 'Land auswählen',
  searchCountryPlaceholder: 'Land oder Code suchen (z.B. Deutschland, DE, AT, CH)...',
  keyFactsTitle: 'Länder-Fakten',
  totalLengthLabel: 'Gesamtlänge',
  currencyLabel: 'Währung',
  sepaMemberLabel: 'SEPA-Mitglied',
  nationalAlgorithmLabel: 'Nationales Prüfverfahren',
  characters: 'Zeichen',
  exampleTitle: 'Offizielle Beispiel-IBAN',
  copyExample: 'Beispiel kopieren',
  copied: 'Kopiert!',
  breakdownTitle: 'Aufbau & Struktur der IBAN',
  testerTitle: 'Interaktiver Länder-IBAN Prüfer',
  testerPlaceholder: 'IBAN zum Testen für dieses Land eingeben...',
  testerHelp: 'Direkte Prüfung gegen exaktes Länderformat, Zeichenlängen und Mod-97 Prüfsummen.',
  countryCodePill: 'Ländercode',
  checkDigitsPill: 'Prüfziffern',
  bankCodePill: 'Bankcode / BLZ',
  branchCodePill: 'Filialcode',
  accountPill: 'Kontonummer',
  nationalCheckDigitsPill: 'Nationale Prüfziffern',
  validCountryIban: 'Gültige IBAN für dieses Land',
  invalidCountryIban: 'Ungültige IBAN für dieses Land',
};

/**
 * Returns country flag emoji from 2-letter ISO country code
 */
function getCountryFlag(countryCode?: string): string {
  if (!countryCode || countryCode.length !== 2) return '🌐';
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

/**
 * Known national check algorithms description
 */
function getNationalAlgorithmDescription(code: string): string {
  switch (code.toUpperCase()) {
    case 'BE':
      return 'Belgian Mod-97 BBAN Check Digits (Last 2 digits)';
    case 'FR':
    case 'MC':
      return 'French Weighted RIB Key (89·Bank + 15·Branch + 3·Account mod 97)';
    case 'ES':
      return 'Spanish Mod-11 Control Digits (Weights 4,8,5,10,9,7,3,6 & 1,2,4,8,5,10,9,7,3,6)';
    case 'IT':
    case 'SM':
      return 'Italian CIN Alpha Character Check (Odd/Even Character Weight Table mod 26)';
    case 'DE':
      return 'German Mod 97-10 Check (Deutsche Bundesbank Ausnahmeregeln)';
    case 'NL':
      return 'Dutch 11-proof / Mod-11 Check Digits';
    case 'GB':
      return 'UK Modulus Checking (Vocalink / BACS)';
    case 'PL':
      return 'Polish Mod-97 National Account Check (NRB)';
    case 'NO':
      return 'Norwegian Mod-11 Account Check Digits';
    default:
      return 'Standard ISO 13616 Mod-97 checksum';
  }
}

const GERMAN_COUNTRY_NAMES: Record<string, string> = {
  DE: 'Deutschland',
  AT: 'Österreich',
  CH: 'Schweiz',
  FR: 'Frankreich',
  ES: 'Spanien',
  IT: 'Italien',
  NL: 'Niederlande',
  GB: 'Großbritannien',
  BE: 'Belgien',
  PL: 'Polen',
  RO: 'Rumänien',
  TR: 'Türkei',
};

const POPULAR_COUNTRIES = ['DE', 'AT', 'CH', 'FR', 'ES', 'IT', 'NL', 'GB', 'BE', 'PL'];

export interface IbanFormatCountryToolProps {
  countryCode?: string;
  initialCountryCode?: string;
  lang?: string;
  labels?: IbanFormatCountryToolLabels;
  className?: string;
}

export function IbanFormatCountryTool({
  countryCode,
  initialCountryCode = 'DE',
  lang = 'en',
  labels: customLabels,
  className = '',
}: IbanFormatCountryToolProps) {
  const effectiveCountryCode = (countryCode || initialCountryCode).toUpperCase();
  const isGerman = lang.toLowerCase().startsWith('de');
  const baseLabels = isGerman ? DEFAULT_LABELS_DE : DEFAULT_LABELS_EN;
  const labels: Required<IbanFormatCountryToolLabels> = useMemo(() => {
    return { ...baseLabels, ...(customLabels || {}) };
  }, [baseLabels, customLabels]);

  const [selectedCountryCode, setSelectedCountryCode] = useState<string>(
    effectiveCountryCode,
  );
  const [countrySearch, setCountrySearch] = useState<string>('');
  const [testInput, setTestInput] = useState<string>('');
  const [copiedExample, setCopiedExample] = useState<boolean>(false);
  const testInputId = useId();

  // All countries sorted alphabetically by country name
  const allCountries: IbanCountrySpec[] = useMemo(() => {
    return getAllIbanCountries().sort((a, b) => a.countryName.localeCompare(b.countryName));
  }, []);

  // Filtered country dropdown options
  const filteredCountries = useMemo(() => {
    const q = countrySearch.trim().toLowerCase();
    if (!q) return allCountries;
    return allCountries.filter(
      (c) => c.countryName.toLowerCase().includes(q) || c.countryCode.toLowerCase().includes(q),
    );
  }, [allCountries, countrySearch]);

  // Current selected country specification
  const currentSpec: IbanCountrySpec = useMemo(() => {
    return getIbanCountrySpec(selectedCountryCode) || IBAN_REGISTRY['DE'];
  }, [selectedCountryCode]);

  // Format example IBAN
  const formattedExample = useMemo(() => {
    return formatIban(currentSpec.example);
  }, [currentSpec.example]);

  // Visual breakdown slices for the current country's example
  const slices = useMemo(() => {
    const ex = currentSpec.example;
    const parts: Array<{
      label: string;
      value: string;
      colorBg: string;
      colorBorder: string;
      colorText: string;
      range: string;
      description: string;
    }> = [];

    // 1. Country Code: [0, 2]
    parts.push({
      label: labels.countryCodePill,
      value: ex.slice(0, 2),
      colorBg: 'bg-blue-50 dark:bg-blue-950/60',
      colorBorder: 'border-blue-300 dark:border-blue-800',
      colorText: 'text-blue-900 dark:text-blue-200',
      range: 'Pos 1–2',
      description: '2 ISO letters',
    });

    // 2. ISO Check Digits: [2, 4]
    parts.push({
      label: labels.checkDigitsPill,
      value: ex.slice(2, 4),
      colorBg: 'bg-emerald-50 dark:bg-emerald-950/60',
      colorBorder: 'border-emerald-300 dark:border-emerald-800',
      colorText: 'text-emerald-900 dark:text-emerald-200',
      range: 'Pos 3–4',
      description: '2 checksum digits',
    });

    // 3. Bank Code
    if (currentSpec.bankCodePos) {
      const [s, e] = currentSpec.bankCodePos;
      parts.push({
        label: labels.bankCodePill,
        value: ex.slice(s, e),
        colorBg: 'bg-indigo-50 dark:bg-indigo-950/60',
        colorBorder: 'border-indigo-300 dark:border-indigo-800',
        colorText: 'text-indigo-900 dark:text-indigo-200',
        range: `Pos ${s + 1}–${e}`,
        description: `${e - s} characters`,
      });
    }

    // 4. Branch Code (if present)
    if (currentSpec.branchCodePos) {
      const [s, e] = currentSpec.branchCodePos;
      parts.push({
        label: labels.branchCodePill,
        value: ex.slice(s, e),
        colorBg: 'bg-cyan-50 dark:bg-cyan-950/60',
        colorBorder: 'border-cyan-300 dark:border-cyan-800',
        colorText: 'text-cyan-900 dark:text-cyan-200',
        range: `Pos ${s + 1}–${e}`,
        description: `${e - s} characters`,
      });
    }

    // 5. Account Number
    if (currentSpec.accountPos) {
      const [s, e] = currentSpec.accountPos;
      parts.push({
        label: labels.accountPill,
        value: ex.slice(s, e),
        colorBg: 'bg-violet-50 dark:bg-violet-950/60',
        colorBorder: 'border-violet-300 dark:border-violet-800',
        colorText: 'text-violet-900 dark:text-violet-200',
        range: `Pos ${s + 1}–${e}`,
        description: `${e - s} characters`,
      });
    }

    // 6. National Check Digits (if present)
    if (currentSpec.checkDigitsPos) {
      const [s, e] = currentSpec.checkDigitsPos;
      parts.push({
        label: labels.nationalCheckDigitsPill,
        value: ex.slice(s, e),
        colorBg: 'bg-amber-50 dark:bg-amber-950/60',
        colorBorder: 'border-amber-300 dark:border-amber-800',
        colorText: 'text-amber-900 dark:text-amber-200',
        range: `Pos ${s + 1}–${e}`,
        description: `${e - s} digits`,
      });
    }

    return parts;
  }, [currentSpec, labels]);

  // Interactive tester validation
  const testResult: (IbanValidationResult & { matchesCountry: boolean }) | null = useMemo(() => {
    const clean = normalizeIban(testInput);
    if (!clean) return null;

    const res = validateIban(clean);
    const matchesCountry = clean.slice(0, 2) === currentSpec.countryCode;

    return {
      ...res,
      matchesCountry,
    };
  }, [testInput, currentSpec.countryCode]);

  const handleCopyExample = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(formattedExample);
      }
      setCopiedExample(true);
      setTimeout(() => setCopiedExample(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleSelectCountry = (code: string) => {
    setSelectedCountryCode(code);
    setCountrySearch('');
  };

  const handleUseExampleAsTest = () => {
    setTestInput(formattedExample);
  };

  return (
    <div className={`w-full max-w-5xl mx-auto space-y-6 ${className}`}>
      {/* Country Selection Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{getCountryFlag(currentSpec.countryCode)}</span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                <span>{isGerman && GERMAN_COUNTRY_NAMES[currentSpec.countryCode] ? GERMAN_COUNTRY_NAMES[currentSpec.countryCode] : currentSpec.countryName}</span>
                <span className="text-sm font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {currentSpec.countryCode}
                </span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {currentSpec.isSepa ? 'SEPA Zone Member' : 'Non-SEPA IBAN Country'} •{' '}
                {currentSpec.ibanLength} characters total length
              </p>
            </div>
          </div>

          {/* Quick Country Dropdown / Selector */}
          <div className="relative min-w-[220px]">
            <select
              aria-label={labels.selectCountryLabel}
              value={selectedCountryCode}
              onChange={(e) => handleSelectCountry(e.target.value)}
              className="w-full appearance-none px-4 py-2.5 pr-10 border border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer transition-all"
            >
              {allCountries.map((c) => (
                <option key={c.countryCode} value={c.countryCode}>
                  {getCountryFlag(c.countryCode)} {c.countryName} ({c.countryCode})
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 absolute right-3.5 top-3.5 pointer-events-none text-slate-400" />
          </div>
        </div>

        {/* Quick Country Pills */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 mr-1">
            Top Countries:
          </span>
          {POPULAR_COUNTRIES.map((code) => {
            const spec = IBAN_REGISTRY[code];
            if (!spec) return null;
            return (
              <button
                key={code}
                type="button"
                onClick={() => handleSelectCountry(code)}
                className={`text-xs px-2.5 py-1 rounded-lg transition-colors font-medium inline-flex items-center gap-1 ${
                  selectedCountryCode === code
                    ? 'bg-primary-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span>{getCountryFlag(code)}</span>
                <span>{code}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Key Facts Grid */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {labels.keyFactsTitle}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {/* Total Length */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
          <span className="block text-xs uppercase font-bold text-slate-500 dark:text-slate-400">
            {labels.totalLengthLabel}
          </span>
          <div className="font-mono text-2xl font-black text-slate-900 dark:text-white mt-1">
            {currentSpec.ibanLength}{' '}
            <span className="text-xs font-normal text-slate-500">{labels.characters}</span>
          </div>
        </div>

        {/* Currency */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
          <span className="block text-xs uppercase font-bold text-slate-500 dark:text-slate-400">
            {labels.currencyLabel}
          </span>
          <div className="font-mono text-2xl font-black text-slate-900 dark:text-white mt-1">
            {currentSpec.currency}
          </div>
        </div>

        {/* SEPA Zone Member */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
          <span className="block text-xs uppercase font-bold text-slate-500 dark:text-slate-400">
            {labels.sepaMemberLabel}
          </span>
          <div className="mt-1">
            {currentSpec.isSepa ? (
              <span className="inline-flex items-center gap-1 text-sm font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-2.5 py-1 rounded-full">
                <CheckCircle2 className="w-4 h-4" />
                Yes (SEPA)
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-sm font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">
                No (Non-SEPA)
              </span>
            )}
          </div>
        </div>

        {/* Algorithm */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
          <span className="block text-xs uppercase font-bold text-slate-500 dark:text-slate-400">
            {labels.nationalAlgorithmLabel}
          </span>
          <div className="text-xs font-medium text-slate-800 dark:text-slate-200 mt-1 line-clamp-2">
            {getNationalAlgorithmDescription(currentSpec.countryCode)}
          </div>
        </div>
      </div>
      </div>

      {/* Visual Breakdown Diagram & Example Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-7 shadow-sm space-y-6">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {labels.exampleTitle}
              </div>
              <div className="font-mono text-xl sm:text-2xl font-bold tracking-wider text-slate-900 dark:text-slate-50 mt-1 select-all break-all">
                {formattedExample}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleUseExampleAsTest}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Test This Example
              </button>
              <button
                type="button"
                onClick={handleCopyExample}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                {copiedExample ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    {labels.copied}
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    {labels.copyExample}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Colored Segment Pill Diagram */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            {labels.breakdownTitle}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {slices.map((slice, idx) => (
              <div
                key={idx}
                className={`${slice.colorBg} border-2 ${slice.colorBorder} rounded-xl p-3 text-center transition-all`}
              >
                <span className="block text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
                  {slice.range}
                </span>
                <span
                  className={`block font-mono text-lg font-black tracking-wider ${slice.colorText} my-1 break-all`}
                >
                  {slice.value}
                </span>
                <span className="block text-xs font-bold text-slate-800 dark:text-slate-200">
                  {slice.label}
                </span>
                <span className="block text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {slice.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Embedded Interactive IBAN Tester pre-filtered for this Country */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-7 shadow-sm space-y-4">
        <div>
          <label
            htmlFor={testInputId}
            className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-1"
          >
            <ShieldCheck className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <span>{labels.testerTitle} ({currentSpec.countryCode})</span>
          </label>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {labels.testerHelp}
          </p>
        </div>

        <div className="relative">
          <input
            id={testInputId}
            type="text"
            value={testInput}
            onChange={(e) => setTestInput(e.target.value)}
            placeholder={labels.testerPlaceholder}
            className="w-full font-mono text-base sm:text-lg px-4 py-3.5 border border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all uppercase"
          />
        </div>

        {/* Live Validation Result Feedback */}
        {testResult && (
          <div className="animate-in fade-in duration-200 pt-2">
            {!testResult.matchesCountry ? (
              <div className="p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 rounded-xl text-amber-900 dark:text-amber-200 text-xs sm:text-sm flex items-start gap-2.5 font-medium">
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
                <div>
                  <strong>Notice:</strong> This IBAN starts with{' '}
                  <span className="font-mono font-bold">
                    {normalizeIban(testInput).slice(0, 2)}
                  </span>
                  , but this page is configured for{' '}
                  <span className="font-mono font-bold">{currentSpec.countryCode}</span>.
                </div>
              </div>
            ) : testResult.isValid ? (
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-emerald-900 dark:text-emerald-200 text-sm flex items-start justify-between gap-3 font-medium">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">{labels.validCountryIban}</div>
                    <div className="font-mono text-xs mt-1 text-emerald-800 dark:text-emerald-300">
                      {testResult.formattedIban}
                    </div>
                  </div>
                </div>

                {testResult.bankName && (
                  <div className="text-right text-xs">
                    <span className="font-bold block">{testResult.bankName}</span>
                    {testResult.bic && (
                      <span className="font-mono text-slate-600 dark:text-slate-400">
                        BIC: {testResult.bic}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="p-4 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 rounded-xl text-rose-800 dark:text-rose-200 text-sm flex items-start gap-2.5 font-medium">
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">{labels.invalidCountryIban}</div>
                  <div className="text-xs mt-1">{testResult.errorReason}</div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default IbanFormatCountryTool;
