'use client';

import React, { useState, useMemo, useId } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  Building2,
  Globe2,
  Sparkles,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';
import { validateBic, type BicValidationResult } from '@/lib/banking/bic';

export interface BicCheckerLabels {
  title?: string;
  subtitle?: string;
  inputLabel?: string;
  inputPlaceholder?: string;
  inputHelp?: string;
  validBadge?: string;
  invalidBadge?: string;
  headOfficeBadge?: string;
  branchBadge?: string;
  copyBic?: string;
  copied?: string;
  bankCodeTitle?: string;
  bankCodeDesc?: string;
  countryCodeTitle?: string;
  countryCodeDesc?: string;
  locationCodeTitle?: string;
  locationCodeDesc?: string;
  branchCodeTitle?: string;
  branchCodeDesc?: string;
  germanBankVerified?: string;
  viewBankPage?: string;
  examplesLabel?: string;
  reset?: string;
}

const DEFAULT_LABELS_EN: Required<BicCheckerLabels> = {
  title: 'BIC / SWIFT Code Validator',
  subtitle: 'Verify 8-character and 11-character SWIFT / BIC codes instantly with 4-part visual ISO 9362 breakdown.',
  inputLabel: 'Enter BIC / SWIFT Code',
  inputPlaceholder: 'e.g. DEUTDEDBXXX or BNPAPRPP',
  inputHelp: '8 or 11 alphanumeric characters (spaces and dashes automatically removed)',
  validBadge: 'Valid BIC / SWIFT',
  invalidBadge: 'Invalid BIC / SWIFT',
  headOfficeBadge: 'Head Office (Primary)',
  branchBadge: 'Specific Branch',
  copyBic: 'Copy BIC',
  copied: 'Copied!',
  bankCodeTitle: 'Bank Code',
  bankCodeDesc: '4 letters identifying the financial institution',
  countryCodeTitle: 'Country Code',
  countryCodeDesc: '2 letters ISO 3166-1 alpha-2 country code',
  locationCodeTitle: 'Location Code',
  locationCodeDesc: '2 characters identifying the city or regional hub',
  branchCodeTitle: 'Branch Code',
  branchCodeDesc: '3 characters identifying the specific department or XXX for head office',
  germanBankVerified: 'Bundesbank Verified Bank',
  viewBankPage: 'View Bank details',
  examplesLabel: 'Try an example:',
  reset: 'Reset',
};

const DEFAULT_LABELS_DE: Required<BicCheckerLabels> = {
  title: 'BIC / SWIFT Prüfer & Decoder',
  subtitle: 'Überprüfen Sie 8- und 11-stellige BIC- / SWIFT-Codes sekundenschnell mit 4-teiliger visueller ISO-9362-Aufschlüsselung.',
  inputLabel: 'BIC / SWIFT-Code eingeben',
  inputPlaceholder: 'z.B. DEUTDEDBXXX oder MARKDEF1100',
  inputHelp: '8 oder 11 Zeichen (Leerzeichen und Bindestriche werden ignoriert)',
  validBadge: 'Gültiger BIC / SWIFT',
  invalidBadge: 'Ungültiger BIC / SWIFT',
  headOfficeBadge: 'Hauptsitz (Head Office)',
  branchBadge: 'Filiale / Zweigstelle',
  copyBic: 'BIC kopieren',
  copied: 'Kopiert!',
  bankCodeTitle: 'Bankcode (Institut)',
  bankCodeDesc: '4 Buchstaben zur eindeutigen Kennzeichnung der Bank',
  countryCodeTitle: 'Ländercode',
  countryCodeDesc: '2 Buchstaben nach ISO 3166-1 alpha-2',
  locationCodeTitle: 'Ortscode',
  locationCodeDesc: '2 Zeichen für den regionalen Standort / Niederlassung',
  branchCodeTitle: 'Filialcode',
  branchCodeDesc: '3 Zeichen für Abteilung/Zweigstelle oder XXX für Hauptstelle',
  germanBankVerified: 'Bundesbank-bestätigte Bank',
  viewBankPage: 'Zur Bankseite',
  examplesLabel: 'Beispiele testen:',
  reset: 'Zurücksetzen',
};

const BIC_EXAMPLES = [
  { code: 'DEUTDEDBXXX', label: 'Deutsche Bank (DE)' },
  { code: 'COBADEFFXXX', label: 'Commerzbank (DE)' },
  { code: 'MARKDEF1100', label: 'Bundesbank Berlin (DE)' },
  { code: 'NTSBDEB1XXX', label: 'N26 Bank (DE)' },
  { code: 'BNPAPRPPXXX', label: 'BNP Paribas (FR)' },
  { code: 'CHASUS33XXX', label: 'JPMorgan Chase (US)' },
];

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

export interface BicCheckerToolProps {
  initialBic?: string;
  lang?: string;
  labels?: BicCheckerLabels;
  className?: string;
}

export function BicCheckerTool({
  initialBic = '',
  lang = 'en',
  labels: customLabels,
  className = '',
}: BicCheckerToolProps) {
  const isGerman = lang.toLowerCase().startsWith('de');
  const baseLabels = isGerman ? DEFAULT_LABELS_DE : DEFAULT_LABELS_EN;
  const labels: Required<BicCheckerLabels> = { ...baseLabels, ...(customLabels || {}) };

  const [rawInput, setRawInput] = useState<string>(initialBic);
  const [copied, setCopied] = useState<boolean>(false);
  const inputId = useId();

  // Instant validation
  const result: BicValidationResult = useMemo(() => {
    return validateBic(rawInput);
  }, [rawInput]);

  const handleCopy = async () => {
    if (!result.bic) return;
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(result.bic);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleApplyExample = (code: string) => {
    setRawInput(code);
  };

  const handleReset = () => {
    setRawInput('');
  };

  return (
    <div className={`w-full max-w-4xl mx-auto space-y-6 ${className}`}>
      {/* Privacy Notice */}
      <div
        role="region"
        aria-label="Security Reassurance"
        className="flex items-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-emerald-900 dark:text-emerald-200 text-sm font-medium shadow-sm"
      >
        <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
        <p className="leading-snug">
          🔒 Offline ISO 9362 validation. BIC checks are performed securely in your browser.
        </p>
      </div>

      {/* Main Input Box */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5">
        {/* Quick Examples */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              {labels.examplesLabel}
            </span>
            {rawInput && (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                {labels.reset}
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {BIC_EXAMPLES.map((ex) => (
              <button
                key={ex.code}
                type="button"
                onClick={() => handleApplyExample(ex.code)}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-all ${
                  rawInput.toUpperCase().replace(/\s+/g, '') === ex.code
                    ? 'bg-primary-50 dark:bg-primary-950/60 border-primary-500 text-primary-700 dark:text-primary-300 font-semibold shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {ex.label}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div>
          <label
            htmlFor={inputId}
            className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1"
          >
            {labels.inputLabel}
          </label>
          <div className="relative">
            <input
              id={inputId}
              type="text"
              maxLength={14}
              value={rawInput}
              onChange={(e) => setRawInput(e.target.value.toUpperCase())}
              placeholder={labels.inputPlaceholder}
              className="w-full font-mono text-xl sm:text-2xl tracking-widest px-4 py-3.5 border border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-slate-100 uppercase focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all placeholder:text-slate-400 placeholder:tracking-normal placeholder:text-base"
            />
            <span className="absolute right-3 top-4 text-xs font-mono text-slate-400">
              {rawInput.replace(/[\s.-]/g, '').length}/11
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{labels.inputHelp}</p>
        </div>

        {/* Validation Error */}
        {!result.isValid && rawInput.trim().length > 0 && result.errorReason && (
          <div className="p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 rounded-xl text-rose-700 dark:text-rose-300 text-sm font-medium flex items-start gap-2.5 animate-in fade-in">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-500" />
            <span>{result.errorReason}</span>
          </div>
        )}

        {/* Valid Result Breakdown */}
        {result.isValid && result.bic && (
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-6 animate-in fade-in duration-300">
            {/* Status Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 rounded-xl p-4 sm:p-5">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  {labels.validBadge}
                </span>

                {result.countryCode && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200">
                    <span className="text-sm">{getCountryFlag(result.countryCode)}</span>
                    <span>{result.countryCode}</span>
                  </span>
                )}

                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                    result.isHeadOffice
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                      : 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300'
                  }`}
                >
                  {result.isHeadOffice ? labels.headOfficeBadge : labels.branchBadge}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-800 rounded-xl shadow-xs transition-colors self-end sm:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-200" />
                    {labels.copied}
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    {labels.copyBic}
                  </>
                )}
              </button>
            </div>

            {/* Visual 4-Part Breakdown Diagram */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                ISO 9362 Struktur-Diagramm:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* 1. Bank Code */}
                <div className="bg-blue-50 dark:bg-blue-950/40 border-2 border-blue-200 dark:border-blue-900/60 rounded-xl p-3.5 text-center">
                  <div className="text-xs font-bold uppercase text-blue-600 dark:text-blue-400 mb-1">
                    {labels.bankCodeTitle}
                  </div>
                  <div className="font-mono text-2xl font-black text-blue-900 dark:text-blue-100 tracking-wider">
                    {result.bankCode}
                  </div>
                  <div className="text-[11px] text-blue-700 dark:text-blue-300 mt-1 leading-tight">
                    {labels.bankCodeDesc}
                  </div>
                </div>

                {/* 2. Country Code */}
                <div className="bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-200 dark:border-emerald-900/60 rounded-xl p-3.5 text-center">
                  <div className="text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400 mb-1">
                    {labels.countryCodeTitle}
                  </div>
                  <div className="font-mono text-2xl font-black text-emerald-900 dark:text-emerald-100 tracking-wider flex items-center justify-center gap-1">
                    <span>{result.countryCode}</span>
                    <span className="text-lg">{getCountryFlag(result.countryCode)}</span>
                  </div>
                  <div className="text-[11px] text-emerald-700 dark:text-emerald-300 mt-1 leading-tight">
                    {labels.countryCodeDesc}
                  </div>
                </div>

                {/* 3. Location Code */}
                <div className="bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-200 dark:border-amber-900/60 rounded-xl p-3.5 text-center">
                  <div className="text-xs font-bold uppercase text-amber-600 dark:text-amber-400 mb-1">
                    {labels.locationCodeTitle}
                  </div>
                  <div className="font-mono text-2xl font-black text-amber-900 dark:text-amber-100 tracking-wider">
                    {result.locationCode}
                  </div>
                  <div className="text-[11px] text-amber-700 dark:text-amber-300 mt-1 leading-tight">
                    {labels.locationCodeDesc}
                  </div>
                </div>

                {/* 4. Branch Code */}
                <div className="bg-purple-50 dark:bg-purple-950/40 border-2 border-purple-200 dark:border-purple-900/60 rounded-xl p-3.5 text-center">
                  <div className="text-xs font-bold uppercase text-purple-600 dark:text-purple-400 mb-1">
                    {labels.branchCodeTitle}
                  </div>
                  <div className="font-mono text-2xl font-black text-purple-900 dark:text-purple-100 tracking-wider">
                    {result.branchCode || 'XXX'}
                  </div>
                  <div className="text-[11px] text-purple-700 dark:text-purple-300 mt-1 leading-tight">
                    {labels.branchCodeDesc}
                  </div>
                </div>
              </div>
            </div>

            {/* German Bank Details from Bundesbank dataset if available */}
            {result.bankName && (
              <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    <span className="font-bold text-slate-900 dark:text-slate-100 text-base">
                      {result.bankName}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 px-2.5 py-1 rounded-full">
                    ✓ {labels.germanBankVerified}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  {result.city && (
                    <div>
                      <span className="block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400">
                        Stadt / Ort
                      </span>
                      <span className="font-medium text-slate-900 dark:text-slate-100 mt-0.5 block">
                        {result.city}
                      </span>
                    </div>
                  )}

                  {result.blz && (
                    <div>
                      <span className="block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400">
                        Deutsche Bankleitzahl (BLZ)
                      </span>
                      <span className="font-mono font-bold text-slate-900 dark:text-slate-100 mt-0.5 block">
                        {result.blz}
                      </span>
                    </div>
                  )}
                </div>

                {result.blz && (
                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700/80 flex items-center justify-end">
                    <Link
                      href={`/de/blz/${result.blz}/`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                    >
                      <span>{labels.viewBankPage}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default BicCheckerTool;
