'use client';

import React, { useState, useMemo, useId } from 'react';
import Link from 'next/link';
import {
  Calculator,
  Copy,
  Check,
  Building2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';
import { germanIbanFromAccount, type GermanIbanResult } from '@/lib/banking/german-iban';

export interface GermanIbanCalculatorLabels {
  title?: string;
  subtitle?: string;
  blzLabel?: string;
  blzPlaceholder?: string;
  blzHelp?: string;
  kontonummerLabel?: string;
  kontonummerPlaceholder?: string;
  kontonummerHelp?: string;
  resultTitle?: string;
  copyIban?: string;
  copyBic?: string;
  copied?: string;
  bankNameLabel?: string;
  bicLabel?: string;
  cityLabel?: string;
  disclaimer?: string;
  quickPresetsLabel?: string;
  viewBankPage?: string;
  reset?: string;
}

const DEFAULT_LABELS_DE: Required<GermanIbanCalculatorLabels> = {
  title: 'Deutscher IBAN Rechner',
  subtitle: 'Berechnen Sie Ihre deutsche IBAN und BIC direkt aus Bankleitzahl (BLZ) und Kontonummer mit offiziellen Bundesbank-Daten.',
  blzLabel: 'Bankleitzahl (BLZ)',
  blzPlaceholder: 'z.B. 10070000',
  blzHelp: 'Genau 8 Ziffern',
  kontonummerLabel: 'Kontonummer',
  kontonummerPlaceholder: 'z.B. 1234567890',
  kontonummerHelp: 'Bis zu 10 Ziffern (wird links mit Nullen aufgefüllt)',
  resultTitle: 'Ihre berechnete deutsche IBAN',
  copyIban: 'IBAN kopieren',
  copyBic: 'BIC kopieren',
  copied: 'Kopiert!',
  bankNameLabel: 'Kreditinstitut',
  bicLabel: 'BIC / SWIFT',
  cityLabel: 'Ort',
  disclaimer:
    'Hinweis: Einige Kreditinstitute verwenden spezielle Berechnungsregeln (Bundesbank-Ausnahmeregeln). Maßgeblich ist stets die von Ihrer Bank mitgeteilte IBAN.',
  quickPresetsLabel: 'Beispiel-Banken wählen:',
  viewBankPage: 'Bank-Detailseite öffnen',
  reset: 'Zurücksetzen',
};

const DEFAULT_LABELS_EN: Required<GermanIbanCalculatorLabels> = {
  title: 'German IBAN Calculator',
  subtitle: 'Compute your German IBAN and BIC from Bankleitzahl (BLZ) and Account Number using official Deutsche Bundesbank data.',
  blzLabel: 'Bankleitzahl (BLZ / Bank Code)',
  blzPlaceholder: 'e.g. 10070000',
  blzHelp: 'Exactly 8 digits',
  kontonummerLabel: 'Account Number (Kontonummer)',
  kontonummerPlaceholder: 'e.g. 1234567890',
  kontonummerHelp: 'Up to 10 digits (padded with leading zeros if shorter)',
  resultTitle: 'Calculated German IBAN',
  copyIban: 'Copy IBAN',
  copyBic: 'Copy BIC',
  copied: 'Copied!',
  bankNameLabel: 'Bank Name',
  bicLabel: 'BIC / SWIFT',
  cityLabel: 'City',
  disclaimer:
    'Hinweis: Einige Kreditinstitute verwenden spezielle Berechnungsregeln (Bundesbank-Ausnahmeregeln). Maßgeblich ist stets die von Ihrer Bank mitgeteilte IBAN.',
  quickPresetsLabel: 'Quick bank presets:',
  viewBankPage: 'View Bank details',
  reset: 'Reset',
};

const PRESETS = [
  { name: 'Deutsche Bank', blz: '10070000', knt: '123456700' },
  { name: 'Berliner Sparkasse', blz: '10050000', knt: '54321098' },
  { name: 'Commerzbank', blz: '10040000', knt: '9876543210' },
  { name: 'Postbank', blz: '10010010', knt: '1234567' },
  { name: 'N26 Bank', blz: '10011001', knt: '1000123456' },
  { name: 'Trade Republic', blz: '10012345', knt: '99887766' },
];

export interface GermanIbanCalculatorToolProps {
  initialBlz?: string;
  initialKontonummer?: string;
  lang?: string;
  labels?: GermanIbanCalculatorLabels;
  className?: string;
  onCalculated?: (iban: string) => void;
}

export function GermanIbanCalculatorTool({
  initialBlz = '',
  initialKontonummer = '',
  lang = 'de',
  labels: customLabels,
  className = '',
  onCalculated,
}: GermanIbanCalculatorToolProps) {
  const isGerman = lang.toLowerCase().startsWith('de');
  const baseLabels = isGerman ? DEFAULT_LABELS_DE : DEFAULT_LABELS_EN;
  const labels: Required<GermanIbanCalculatorLabels> = { ...baseLabels, ...(customLabels || {}) };

  const [blz, setBlz] = useState<string>(initialBlz);
  const [kontonummer, setKontonummer] = useState<string>(initialKontonummer);
  const [copiedIban, setCopiedIban] = useState<boolean>(false);
  const [copiedBic, setCopiedBic] = useState<boolean>(false);

  const blzInputId = useId();
  const kontonummerInputId = useId();

  // Instant calculation
  const result: GermanIbanResult = useMemo(() => {
    return germanIbanFromAccount(blz, kontonummer);
  }, [blz, kontonummer]);

  // Trigger onCalculated callback if valid
  React.useEffect(() => {
    if (result.isValid && result.iban) {
      onCalculated?.(result.iban);
    }
  }, [result.isValid, result.iban, onCalculated]);

  const handleCopyIban = async () => {
    if (!result.formattedIban) return;
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(result.formattedIban);
      }
      setCopiedIban(true);
      setTimeout(() => setCopiedIban(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleCopyBic = async () => {
    if (!result.bic) return;
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(result.bic);
      }
      setCopiedBic(true);
      setTimeout(() => setCopiedBic(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleApplyPreset = (presetBlz: string, presetKnt: string) => {
    setBlz(presetBlz);
    setKontonummer(presetKnt);
  };

  const handleReset = () => {
    setBlz('');
    setKontonummer('');
  };

  // Extract visual parts of computed IBAN
  const ibanParts = useMemo(() => {
    if (!result.isValid || !result.iban) return null;
    const raw = result.iban;
    return {
      country: raw.slice(0, 2), // DE
      checkDigits: raw.slice(2, 4), // e.g. 89
      blz: raw.slice(4, 12), // 8 digits
      account: raw.slice(12, 22), // 10 digits
    };
  }, [result.isValid, result.iban]);

  return (
    <div className={`w-full max-w-4xl mx-auto space-y-6 ${className}`}>
      {/* Official Bundesbank disclaimer banner */}
      <div
        role="region"
        aria-label="Bundesbank Disclaimer"
        className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-xl text-amber-900 dark:text-amber-200 text-xs sm:text-sm font-medium shadow-sm"
      >
        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
        <p className="leading-relaxed">{labels.disclaimer}</p>
      </div>

      {/* Main Input Form Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        {/* Quick Presets */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              {labels.quickPresetsLabel}
            </span>
            {(blz || kontonummer) && (
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
            {PRESETS.map((p) => (
              <button
                key={p.blz}
                type="button"
                onClick={() => handleApplyPreset(p.blz, p.knt)}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-all ${
                  blz === p.blz
                    ? 'bg-primary-50 dark:bg-primary-950/60 border-primary-500 text-primary-700 dark:text-primary-300 font-semibold shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* BLZ Input */}
          <div>
            <label
              htmlFor={blzInputId}
              className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1"
            >
              {labels.blzLabel}
            </label>
            <div className="relative">
              <input
                id={blzInputId}
                type="text"
                inputMode="numeric"
                maxLength={8}
                value={blz}
                onChange={(e) => setBlz(e.target.value.replace(/\D/g, '').slice(0, 8))}
                placeholder={labels.blzPlaceholder}
                className="w-full font-mono text-base sm:text-lg px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all placeholder:text-slate-400"
              />
              <span className="absolute right-3 top-3.5 text-xs text-slate-400 font-mono">
                {blz.length}/8
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{labels.blzHelp}</p>
          </div>

          {/* Kontonummer Input */}
          <div>
            <label
              htmlFor={kontonummerInputId}
              className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1"
            >
              {labels.kontonummerLabel}
            </label>
            <div className="relative">
              <input
                id={kontonummerInputId}
                type="text"
                inputMode="numeric"
                maxLength={10}
                value={kontonummer}
                onChange={(e) => setKontonummer(e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder={labels.kontonummerPlaceholder}
                className="w-full font-mono text-base sm:text-lg px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all placeholder:text-slate-400"
              />
              <span className="absolute right-3 top-3.5 text-xs text-slate-400 font-mono">
                {kontonummer.length}/10
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{labels.kontonummerHelp}</p>
          </div>
        </div>

        {/* Calculation Result */}
        {result.isValid && result.formattedIban && (
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-5 animate-in fade-in duration-300">
            {/* Header / Copy Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 rounded-xl p-4 sm:p-5">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  {labels.resultTitle}
                </div>
                <div className="font-mono text-2xl sm:text-3xl font-bold tracking-wider text-slate-900 dark:text-slate-50 select-all break-all">
                  {result.formattedIban}
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleCopyIban}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-800 rounded-xl shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                >
                  {copiedIban ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-200" />
                      {labels.copied}
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      {labels.copyIban}
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Visual 4-Part Structure of the German IBAN */}
            {ibanParts && (
              <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Aufbau der deutschen IBAN (22 Stellen):
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-center">
                  <div className="bg-blue-100 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-900 p-2.5 rounded-lg">
                    <span className="block text-lg font-bold text-blue-900 dark:text-blue-200">
                      {ibanParts.country}
                    </span>
                    <span className="block text-[10px] uppercase font-bold text-blue-700 dark:text-blue-400 mt-0.5">
                      Länder-Code (2)
                    </span>
                  </div>

                  <div className="bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-900 p-2.5 rounded-lg">
                    <span className="block text-lg font-bold text-emerald-900 dark:text-emerald-200">
                      {ibanParts.checkDigits}
                    </span>
                    <span className="block text-[10px] uppercase font-bold text-emerald-700 dark:text-emerald-400 mt-0.5">
                      Prüfziffer (2)
                    </span>
                  </div>

                  <div className="bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-900 p-2.5 rounded-lg">
                    <span className="block text-lg font-bold text-indigo-900 dark:text-indigo-200">
                      {ibanParts.blz}
                    </span>
                    <span className="block text-[10px] uppercase font-bold text-indigo-700 dark:text-indigo-400 mt-0.5">
                      BLZ (8)
                    </span>
                  </div>

                  <div className="bg-violet-100 dark:bg-violet-950/80 border border-violet-200 dark:border-violet-900 p-2.5 rounded-lg">
                    <span className="block text-lg font-bold text-violet-900 dark:text-violet-200">
                      {ibanParts.account}
                    </span>
                    <span className="block text-[10px] uppercase font-bold text-violet-700 dark:text-violet-400 mt-0.5">
                      Kontonummer (10)
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Bundesbank Bank Details Card */}
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
              <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  <span className="font-bold text-slate-900 dark:text-slate-100 text-base">
                    {result.bankName}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 px-2.5 py-1 rounded-full">
                  ✓ Deutsche Bundesbank
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400">
                    {labels.bicLabel}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-mono font-bold text-slate-900 dark:text-slate-100 text-base">
                      {result.bic || '—'}
                    </span>
                    {result.bic && (
                      <button
                        type="button"
                        onClick={handleCopyBic}
                        aria-label="Copy BIC"
                        className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded transition-colors"
                      >
                        {copiedBic ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    )}
                  </div>
                </div>

                <div>
                  <span className="block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400">
                    {labels.cityLabel}
                  </span>
                  <span className="block font-semibold text-slate-900 dark:text-slate-100 mt-1 text-base">
                    {result.city || '—'}
                  </span>
                </div>

                <div>
                  <span className="block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400">
                    Bankleitzahl (BLZ)
                  </span>
                  <span className="block font-mono font-bold text-slate-900 dark:text-slate-100 mt-1 text-base">
                    {result.blz}
                  </span>
                </div>
              </div>

              {result.blz && (
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700/80 flex items-center justify-end">
                  <Link
                    href={`/de/blz/${result.blz}/`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                  >
                    <span>{labels.viewBankPage}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Validation Error Message */}
        {!result.isValid && (blz.length > 0 || kontonummer.length > 0) && result.errorReason && (
          <div className="p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 rounded-xl text-rose-700 dark:text-rose-300 text-sm font-medium flex items-start gap-2.5 animate-in fade-in">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-rose-500" />
            <span>{result.errorReason}</span>
          </div>
        )}
      </div>
    </div>
  );
}
export default GermanIbanCalculatorTool;
