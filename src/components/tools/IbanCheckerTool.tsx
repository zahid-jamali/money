'use client';

import React, { useState, useMemo, useId } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  Building2,
  Globe2,
  Trash2,
  FileSpreadsheet,
  LayoutGrid,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { validateIban, type IbanValidationResult } from '@/lib/banking/iban';

export interface IbanCheckerLabels {
  title?: string;
  subtitle?: string;
  inputLabel?: string;
  inputPlaceholder?: string;
  privacyNotice?: string;
  validBadge?: string;
  invalidBadge?: string;
  sepaBadge?: string;
  nonSepaBadge?: string;
  bankCodeLabel?: string;
  branchCodeLabel?: string;
  accountNumberLabel?: string;
  nationalCheckDigitsLabel?: string;
  bundesbankVerified?: string;
  copyIban?: string;
  copied?: string;
  clearAll?: string;
  loadSample?: string;
  copyAllValid?: string;
  allValidCopied?: string;
  cardView?: string;
  tableView?: string;
  summaryTotal?: string;
  summaryValid?: string;
  summaryInvalid?: string;
  maxIbansNotice?: string;
  emptyState?: string;
}

const DEFAULT_LABELS_EN: Required<IbanCheckerLabels> = {
  title: 'IBAN Checker & Validator',
  subtitle: 'Verify single or bulk IBANs instantly with ISO 13616 Mod-97 and national checksum rules.',
  inputLabel: 'Enter or paste IBANs (one per line, up to 50)',
  inputPlaceholder: 'e.g.\nDE89 3704 0044 0532 0130 00\nFR14 2004 1010 0505 0001 3M02 606\nGB29 NWBK 6016 1331 9268 19',
  privacyNotice: '🔒 Your IBAN never leaves your browser. All checks are performed entirely on your device.',
  validBadge: 'Valid IBAN',
  invalidBadge: 'Invalid IBAN',
  sepaBadge: 'SEPA Member',
  nonSepaBadge: 'Non-SEPA',
  bankCodeLabel: 'Bank Code',
  branchCodeLabel: 'Branch Code',
  accountNumberLabel: 'Account Number',
  nationalCheckDigitsLabel: 'Check Digits',
  bundesbankVerified: 'Bundesbank Verified',
  copyIban: 'Copy',
  copied: 'Copied!',
  clearAll: 'Clear',
  loadSample: 'Load Sample',
  copyAllValid: 'Copy All Valid',
  allValidCopied: 'Copied All!',
  cardView: 'Cards',
  tableView: 'Table',
  summaryTotal: 'Total IBANs',
  summaryValid: 'Valid',
  summaryInvalid: 'Invalid',
  maxIbansNotice: 'Maximum 50 IBANs evaluated simultaneously.',
  emptyState: 'Paste or type an IBAN above to see live validation and bank details.',
};

const DEFAULT_LABELS_DE: Required<IbanCheckerLabels> = {
  title: 'IBAN Prüfer & Rechner',
  subtitle: 'Überprüfen Sie einzelne oder mehrere IBANs blitzschnell nach ISO 13616 Mod-97 und nationalen Prüfziffern.',
  inputLabel: 'IBANs eingeben oder einfügen (eine pro Zeile, bis zu 50)',
  inputPlaceholder: 'z.B.\nDE89 3704 0044 0532 0130 00\nDE02 1001 0010 0123 4567 89\nFR14 2004 1010 0505 0001 3M02 606',
  privacyNotice: '🔒 Ihre IBAN verlässt niemals Ihren Browser. Alle Berechnungen erfolgen ausschließlich lokal auf Ihrem Gerät.',
  validBadge: 'Gültige IBAN',
  invalidBadge: 'Ungültige IBAN',
  sepaBadge: 'SEPA-Mitglied',
  nonSepaBadge: 'Nicht-SEPA',
  bankCodeLabel: 'Bankleitzahl (BLZ)',
  branchCodeLabel: 'Filialcode',
  accountNumberLabel: 'Kontonummer',
  nationalCheckDigitsLabel: 'Prüfziffern',
  bundesbankVerified: 'Bundesbank-geprüft',
  copyIban: 'Kopieren',
  copied: 'Kopiert!',
  clearAll: 'Löschen',
  loadSample: 'Beispiel laden',
  copyAllValid: 'Alle gültigen kopieren',
  allValidCopied: 'Alle kopiert!',
  cardView: 'Karten',
  tableView: 'Tabelle',
  summaryTotal: 'Gesamt',
  summaryValid: 'Gültig',
  summaryInvalid: 'Ungültig',
  maxIbansNotice: 'Maximal 50 IBANs werden gleichzeitig geprüft.',
  emptyState: 'Geben Sie oben eine IBAN ein, um die Live-Prüfung und Bankdaten zu sehen.',
};

export interface IbanCheckerToolProps {
  initialIbans?: string;
  lang?: string;
  labels?: IbanCheckerLabels;
  className?: string;
}

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

export function IbanCheckerTool({
  initialIbans = '',
  lang = 'en',
  labels: customLabels,
  className = '',
}: IbanCheckerToolProps) {
  const isGerman = lang.toLowerCase().startsWith('de');
  const baseLabels = isGerman ? DEFAULT_LABELS_DE : DEFAULT_LABELS_EN;
  const labels: Required<IbanCheckerLabels> = { ...baseLabels, ...(customLabels || {}) };

  const [rawText, setRawText] = useState<string>(initialIbans);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const textareaId = useId();

  // Parse lines, trim, filter empty lines, max 50
  const lines = useMemo(() => {
    return rawText
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .slice(0, 50);
  }, [rawText]);

  // Validation results
  const results: Array<IbanValidationResult & { raw: string; index: number }> = useMemo(() => {
    return lines.map((line, index) => {
      const res = validateIban(line);
      return {
        ...res,
        raw: line,
        index,
      };
    });
  }, [lines]);

  const summary = useMemo(() => {
    const total = results.length;
    const valid = results.filter((r) => r.isValid).length;
    const invalid = total - valid;
    return { total, valid, invalid };
  }, [results]);

  const handleCopySingle = async (textToCopy: string, index: number) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      }
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      // Fallback
    }
  };

  const handleCopyAllValid = async () => {
    const validIbans = results
      .filter((r) => r.isValid && r.formattedIban)
      .map((r) => r.formattedIban)
      .join('\n');
    if (!validIbans) return;

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(validIbans);
      }
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleLoadSample = () => {
    const sample = isGerman
      ? 'DE89 3704 0044 0532 0130 00\nDE02 1001 0010 0123 4567 89\nDE99 9999 9999 9999 9999 99\nFR14 2004 1010 0505 0001 3M02 606'
      : 'DE89 3704 0044 0532 0130 00\nFR14 2004 1010 0505 0001 3M02 606\nGB29 NWBK 6016 1331 9268 19\nDE00 1234 5678 9012 3456 78';
    setRawText(sample);
  };

  const handleClear = () => {
    setRawText('');
    setCopiedIndex(null);
  };

  return (
    <div className={`w-full max-w-5xl mx-auto space-y-6 ${className}`}>
      {/* Privacy Reassurance Notice */}
      <div
        role="region"
        aria-label="Privacy Reassurance"
        className="flex items-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-emerald-900 dark:text-emerald-200 text-sm font-medium shadow-sm"
      >
        <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
        <p className="leading-snug">{labels.privacyNotice}</p>
      </div>

      {/* Main Input Box */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-7 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <label
              htmlFor={textareaId}
              className="text-base font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2"
            >
              {labels.inputLabel}
              <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
                ({lines.length} / 50)
              </span>
            </label>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Spaces, dashes, dots, and slashes are automatically cleaned.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleLoadSample}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              {labels.loadSample}
            </button>
            {rawText && (
              <button
                type="button"
                onClick={handleClear}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/50 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              >
                <Trash2 className="w-3.5 h-3.5" />
                {labels.clearAll}
              </button>
            )}
          </div>
        </div>

        <textarea
          id={textareaId}
          rows={Math.min(8, Math.max(3, lines.length + 1))}
          value={rawText}
          onChange={(e) => setRawText(e.target.value)}
          placeholder={labels.inputPlaceholder}
          aria-label={labels.inputLabel}
          className="w-full font-mono text-sm sm:text-base p-4 border border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-y transition-all"
        />

        {rawText.split('\n').filter((l) => l.trim().length > 0).length > 50 && (
          <p className="mt-2 text-xs text-amber-600 dark:text-amber-400 flex items-center gap-1.5 font-medium">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {labels.maxIbansNotice}
          </p>
        )}
      </div>

      {/* Summary Toolbar (for > 1 IBAN) */}
      {summary.total > 0 && (
        <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                {labels.summaryTotal}:
              </span>
              <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                {summary.total}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                {labels.summaryValid}:
              </span>
              <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                {summary.valid}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                {labels.summaryInvalid}:
              </span>
              <span className="text-sm font-bold text-rose-600 dark:text-rose-400">
                {summary.invalid}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {summary.valid > 0 && (
              <button
                type="button"
                onClick={handleCopyAllValid}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 hover:bg-emerald-200 dark:hover:bg-emerald-900/60 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                {copiedAll ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    {labels.allValidCopied}
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    {labels.copyAllValid} ({summary.valid})
                  </>
                )}
              </button>
            )}

            {summary.total > 1 && (
              <div className="inline-flex rounded-lg border border-slate-300 dark:border-slate-700 p-0.5 bg-white dark:bg-slate-900">
                <button
                  type="button"
                  onClick={() => setViewMode('cards')}
                  aria-pressed={viewMode === 'cards'}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                    viewMode === 'cards'
                      ? 'bg-primary-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{labels.cardView}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('table')}
                  aria-pressed={viewMode === 'table'}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                    viewMode === 'table'
                      ? 'bg-primary-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{labels.tableView}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Empty State */}
      {summary.total === 0 && (
        <div className="text-center py-12 px-4 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl text-slate-500 dark:text-slate-400">
          <Globe2 className="w-10 h-10 mx-auto text-slate-300 dark:text-slate-600 mb-3" />
          <p className="text-sm font-medium">{labels.emptyState}</p>
        </div>
      )}

      {/* Results View: Table Mode */}
      {summary.total > 1 && viewMode === 'table' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/70 border-b border-slate-200 dark:border-slate-700 text-xs uppercase font-semibold text-slate-600 dark:text-slate-300 tracking-wider">
                <tr>
                  <th scope="col" className="py-3 px-4 w-12">
                    #
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Status
                  </th>
                  <th scope="col" className="py-3 px-4">
                    IBAN
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Country
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Bank / Institution
                  </th>
                  <th scope="col" className="py-3 px-4 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 font-normal">
                {results.map((r, i) => (
                  <tr
                    key={i}
                    className={`hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors ${
                      !r.isValid ? 'bg-rose-50/30 dark:bg-rose-950/10' : ''
                    }`}
                  >
                    <td className="py-3 px-4 text-xs text-slate-400 font-mono">{i + 1}</td>
                    <td className="py-3 px-4">
                      {r.isValid ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {labels.validBadge}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300">
                          <XCircle className="w-3.5 h-3.5" />
                          {labels.invalidBadge}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-mono font-medium text-slate-900 dark:text-slate-100 select-all">
                        {r.formattedIban || r.raw}
                      </span>
                      {!r.isValid && r.errorReason && (
                        <div className="text-xs text-rose-600 dark:text-rose-400 mt-0.5">
                          {r.errorReason}
                        </div>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      {r.countryCode ? (
                        <span className="inline-flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-200">
                          <span className="text-base">{getCountryFlag(r.countryCode)}</span>
                          <span>{r.countryName || r.countryCode}</span>
                          {r.isSepa !== undefined && (
                            <span
                              className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${
                                r.isSepa
                                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                                  : 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                              }`}
                            >
                              {r.isSepa ? 'SEPA' : 'Non-SEPA'}
                            </span>
                          )}
                        </span>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      {r.bankName ? (
                        <div>
                          <div className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                            {r.bankName}
                            <span className="text-[10px] font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-1.5 py-0.5 rounded">
                              ✓ BBk
                            </span>
                          </div>
                          {(r.bic || r.city) && (
                            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                              {r.bic} {r.city && `• ${r.city}`}
                            </div>
                          )}
                        </div>
                      ) : r.bankCode ? (
                        <span className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                          {labels.bankCodeLabel}: {r.bankCode}
                        </span>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        type="button"
                        onClick={() => handleCopySingle(r.formattedIban || r.raw, i)}
                        aria-label={`Copy IBAN ${r.formattedIban || r.raw}`}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md transition-colors"
                      >
                        {copiedIndex === i ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            {labels.copied}
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            {labels.copyIban}
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Results View: Card Mode (Default) */}
      {(summary.total === 1 || (summary.total > 1 && viewMode === 'cards')) && (
        <div className="space-y-4">
          {results.map((r, i) => (
            <div
              key={i}
              className={`bg-white dark:bg-slate-900 border rounded-2xl p-5 sm:p-6 shadow-sm transition-all ${
                r.isValid
                  ? 'border-emerald-200 dark:border-emerald-900/60'
                  : 'border-rose-200 dark:border-rose-900/60'
              }`}
            >
              {/* Header: Valid Status + Country + Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2.5 flex-wrap">
                  {r.isValid ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      {labels.validBadge}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">
                      <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                      {labels.invalidBadge}
                    </span>
                  )}

                  {r.countryCode && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                      <span className="text-sm">{getCountryFlag(r.countryCode)}</span>
                      <span>{r.countryName || r.countryCode}</span>
                    </span>
                  )}

                  {r.isSepa !== undefined && (
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider ${
                        r.isSepa
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300'
                          : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                      }`}
                    >
                      {r.isSepa ? labels.sepaBadge : labels.nonSepaBadge}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    type="button"
                    onClick={() => handleCopySingle(r.formattedIban || r.raw, i)}
                    aria-label={`Copy IBAN ${r.formattedIban || r.raw}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                  >
                    {copiedIndex === i ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        {labels.copied}
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        {labels.copyIban}
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Formatted IBAN display */}
              <div className="py-4">
                <div className="text-xs uppercase font-semibold text-slate-400 dark:text-slate-500 mb-1">
                  International Bank Account Number
                </div>
                <div className="font-mono text-xl sm:text-2xl font-bold tracking-wider text-slate-900 dark:text-slate-50 break-all select-all">
                  {r.formattedIban || r.raw}
                </div>

                {!r.isValid && r.errorReason && (
                  <div className="mt-2.5 flex items-start gap-2 p-3 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 rounded-xl text-rose-700 dark:text-rose-300 text-xs font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{r.errorReason}</span>
                  </div>
                )}
              </div>

              {/* German Bank Details if available */}
              {r.bankName && (
                <div className="mt-1 p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-xl">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                      <span className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                        {r.bankName}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded-full">
                      ✓ {labels.bundesbankVerified}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    {r.bic && (
                      <div>
                        <span className="text-slate-500 dark:text-slate-400">BIC / SWIFT: </span>
                        <span className="font-mono font-bold text-slate-800 dark:text-slate-200">
                          {r.bic}
                        </span>
                      </div>
                    )}
                    {r.city && (
                      <div>
                        <span className="text-slate-500 dark:text-slate-400">City: </span>
                        <span className="font-medium text-slate-800 dark:text-slate-200">
                          {r.city}
                        </span>
                      </div>
                    )}
                    {r.bankCode && (
                      <div>
                        <span className="text-slate-500 dark:text-slate-400">BLZ: </span>
                        <span className="font-mono font-medium text-slate-800 dark:text-slate-200">
                          {r.bankCode}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Breakdown Tags */}
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs uppercase font-semibold text-slate-400 dark:text-slate-500 mb-2">
                  Component Breakdown
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {r.bankCode && (
                    <div className="px-3 py-1.5 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 rounded-lg">
                      <span className="text-blue-600 dark:text-blue-400 block text-[10px] uppercase font-bold">
                        {labels.bankCodeLabel}
                      </span>
                      <span className="font-mono font-bold text-blue-900 dark:text-blue-200">
                        {r.bankCode}
                      </span>
                    </div>
                  )}

                  {r.branchCode && (
                    <div className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/50 rounded-lg">
                      <span className="text-indigo-600 dark:text-indigo-400 block text-[10px] uppercase font-bold">
                        {labels.branchCodeLabel}
                      </span>
                      <span className="font-mono font-bold text-indigo-900 dark:text-indigo-200">
                        {r.branchCode}
                      </span>
                    </div>
                  )}

                  {r.accountNumber && (
                    <div className="px-3 py-1.5 bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-900/50 rounded-lg">
                      <span className="text-violet-600 dark:text-violet-400 block text-[10px] uppercase font-bold">
                        {labels.accountNumberLabel}
                      </span>
                      <span className="font-mono font-bold text-violet-900 dark:text-violet-200">
                        {r.accountNumber}
                      </span>
                    </div>
                  )}

                  {r.nationalCheckDigits && (
                    <div className="px-3 py-1.5 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 rounded-lg">
                      <span className="text-amber-600 dark:text-amber-400 block text-[10px] uppercase font-bold">
                        {labels.nationalCheckDigitsLabel}
                      </span>
                      <span className="font-mono font-bold text-amber-900 dark:text-amber-200">
                        {r.nationalCheckDigits}
                      </span>
                    </div>
                  )}

                  {r.currency && (
                    <div className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                      <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-bold">
                        Currency
                      </span>
                      <span className="font-mono font-bold text-slate-800 dark:text-slate-200">
                        {r.currency}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default IbanCheckerTool;
