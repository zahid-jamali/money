'use client';

import React, { useState, useId } from 'react';
import { calculateVat, VatCalculationType } from '@/lib/vat';
import { formatCurrency, parseLocaleNumber } from '@/lib/formatters';
import {
  Copy,
  Check,
  Share2,
  Printer,
  ShieldCheck,
  Building,
  Info,
  CheckCircle2,
} from 'lucide-react';

interface PolishVatCalculatorToolProps {
  initialAmount?: number;
  initialRate?: number;
  initialType?: VatCalculationType;
}

const COMMON_PLN_AMOUNTS = [50, 100, 250, 500, 1000, 2500, 5000, 10000];

export function PolishVatCalculatorTool({
  initialAmount = 100,
  initialRate = 23,
  initialType = 'add',
}: PolishVatCalculatorToolProps) {
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

  const polishRates = [
    { label: '23% Podstawowa', rate: 23, desc: 'Większość towarów i usług' },
    { label: '8% Obniżona', rate: 8, desc: 'Budownictwo mieszkaniowe, transport, nawozy' },
    { label: '5% Obniżona', rate: 5, desc: 'Podstawowa żywność, pieczywo, książki' },
    { label: '0% Zero', rate: 0, desc: 'Eksport towarów, WDT' },
  ];

  const handleCopy = async () => {
    const text = `Rozliczenie podatku VAT (${rate}%):\n` +
      `• Tryb: ${calcType === 'add' ? 'Od netto do brutto (Dodanie VAT)' : 'Od brutto do netto (Wyodrębnienie VAT)'}\n` +
      `• Kwota netto: ${formatCurrency(result.netAmount, 'pl', 'PLN')}\n` +
      `• Podatek VAT (${rate}%): ${formatCurrency(result.vatAmount, 'pl', 'PLN')}\n` +
      `• Kwota brutto: ${formatCurrency(result.grossAmount, 'pl', 'PLN')}\n` +
      `• Mnożnik efektywny: ${result.effectiveMultiplier}x`;
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
          title: 'Kalkulator VAT Polska',
          text: `Netto: ${formatCurrency(result.netAmount, 'pl', 'PLN')} | VAT: ${formatCurrency(result.vatAmount, 'pl', 'PLN')} | Brutto: ${formatCurrency(result.grossAmount, 'pl', 'PLN')}`,
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
      {/* Main Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8">
        {/* Kierunek kalkulacji (Toggle) */}
        <div className="mb-6">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Kierunek obliczeń
          </label>
          <div
            role="radiogroup"
            aria-label="Kierunek kalkulacji VAT"
            className="grid grid-cols-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl gap-1.5"
          >
            <button
              type="button"
              role="radio"
              aria-checked={calcType === 'add'}
              onClick={() => setCalcType('add')}
              className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                calcType === 'add'
                  ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Netto → Brutto</span>
              <span className="text-[11px] font-normal text-slate-500 hidden sm:inline">(Dodaj VAT)</span>
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={calcType === 'remove'}
              onClick={() => setCalcType('remove')}
              className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                calcType === 'remove'
                  ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Brutto → Netto</span>
              <span className="text-[11px] font-normal text-slate-500 hidden sm:inline">(Wylicz Netto)</span>
            </button>
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Kwota Input */}
          <div>
            <label
              htmlFor={inputId}
              className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1.5"
            >
              {calcType === 'add' ? 'Kwota Netto (bez podatku VAT)' : 'Kwota Brutto (z podatkiem VAT)'}
            </label>
            <div className="relative rounded-xl shadow-sm">
              <input
                id={inputId}
                type="text"
                inputMode="decimal"
                value={rawAmount}
                onChange={(e) => setRawAmount(e.target.value)}
                placeholder="0,00"
                className="w-full text-xl sm:text-2xl font-bold pl-4 pr-12 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl focus:bg-white dark:focus:bg-slate-900 focus:border-teal-600 dark:focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-slate-900 dark:text-white outline-none transition"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-base font-bold text-slate-500 dark:text-slate-400">
                zł
              </span>
            </div>
            <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
              Wprowadź kwotę w polskich złotych (PLN)
            </p>
          </div>

          {/* Stawki VAT */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
              Stawka podatku VAT (ustawa o VAT)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {polishRates.map((preset) => (
                <button
                  key={preset.rate}
                  type="button"
                  onClick={() => setRate(preset.rate)}
                  className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold border transition ${
                    rate === preset.rate
                      ? 'bg-teal-50 text-teal-800 border-teal-400 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-600 ring-2 ring-teal-500/20'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                  }`}
                >
                  <span className="text-base sm:text-lg">{preset.rate}%</span>
                  <span className="text-[10px] font-normal text-slate-500 dark:text-slate-400 truncate max-w-full">
                    {preset.label.split(' ')[1]}
                  </span>
                </button>
              ))}
            </div>

            {/* Custom Rate Fallback */}
            <div className="mt-2.5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Własna stawka procentowa:</span>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.5"
                  value={rate}
                  onChange={(e) => setRate(parseFloat(e.target.value) || 0)}
                  aria-label="Własna stawka VAT"
                  className="w-16 px-2 py-1 text-right font-semibold bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-slate-900 dark:text-white"
                />
                <span className="font-bold">%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Breakdown & Results Summary Card */}
        <div
          aria-live="polite"
          className="bg-gradient-to-br from-teal-50/80 via-emerald-50/30 to-white dark:from-slate-800 dark:via-slate-800/80 dark:to-slate-900 border border-teal-200 dark:border-teal-900/40 rounded-2xl p-5 sm:p-6 mb-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-5 border-b border-teal-200/60 dark:border-slate-700">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-400">
                {calcType === 'add' ? 'Do zapłaty (Kwota Brutto z VAT)' : 'Baza opodatkowania (Kwota Netto)'}
              </span>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight mt-1">
                {formatCurrency(
                  calcType === 'add' ? result.grossAmount : result.netAmount,
                  'pl',
                  'PLN',
                )}
              </div>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Kwota podatku VAT ({rate}%)
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-700 dark:text-teal-400 mt-1">
                {formatCurrency(result.vatAmount, 'pl', 'PLN')}
              </div>
            </div>
          </div>

          {/* Visual 3-Column Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5">
            <div className="p-3.5 bg-white/70 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
                Kwota Netto (bez VAT)
              </span>
              <div className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                {formatCurrency(result.netAmount, 'pl', 'PLN')}
              </div>
            </div>

            <div className="p-3.5 bg-white/70 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
                Należny podatek VAT ({rate}%)
              </span>
              <div className="text-lg font-bold text-teal-700 dark:text-teal-400 mt-1">
                +{formatCurrency(result.vatAmount, 'pl', 'PLN')}
              </div>
            </div>

            <div className="p-3.5 bg-white/70 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
                Łączna kwota Brutto
              </span>
              <div className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                {formatCurrency(result.grossAmount, 'pl', 'PLN')}
              </div>
            </div>
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
            {copied ? 'Skopiowano' : 'Kopiuj wynik'}
          </button>
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
          >
            <Share2 className="w-4 h-4" />
            Udostępnij
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
          >
            <Printer className="w-4 h-4" />
            Drukuj
          </button>
        </div>
      </div>

      {/* Pre-calculated Quick Reference Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Tabela szybkiego przeliczenia ({rate}% VAT)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Kliknij wybrany wiersz, aby automatycznie wstawić kwotę do kalkulatora.
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 rounded-md border border-teal-200 dark:border-teal-800">
            Stawka: {rate}%
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <th scope="col" className="pb-3 pr-4">Kwota Netto</th>
                <th scope="col" className="pb-3 px-4">Podatek VAT ({rate}%)</th>
                <th scope="col" className="pb-3 px-4">Kwota Brutto</th>
                <th scope="col" className="pb-3 pl-4 text-right">Zastosuj</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {COMMON_PLN_AMOUNTS.map((amt) => {
                const sample = calculateVat({ amount: amt, rate, type: 'add' });
                return (
                  <tr
                    key={amt}
                    onClick={() => setRawAmount(String(amt))}
                    className="cursor-pointer hover:bg-teal-50/40 dark:hover:bg-slate-800/60 transition-colors"
                  >
                    <td className="py-2.5 pr-4 font-semibold text-slate-900 dark:text-white">
                      {formatCurrency(amt, 'pl', 'PLN')}
                    </td>
                    <td className="py-2.5 px-4 text-teal-700 dark:text-teal-400 font-medium">
                      +{formatCurrency(sample.vatAmount, 'pl', 'PLN')}
                    </td>
                    <td className="py-2.5 px-4 font-bold text-slate-900 dark:text-white">
                      {formatCurrency(sample.grossAmount, 'pl', 'PLN')}
                    </td>
                    <td className="py-2.5 pl-4 text-right">
                      <span className="text-xs text-teal-600 dark:text-teal-400 hover:underline">
                        Wstaw {amt} zł
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Polish Statutory VAT Legal Notice Box */}
      <div className="bg-gradient-to-br from-blue-50/60 to-indigo-50/30 dark:from-slate-800/90 dark:to-slate-800/40 border border-blue-200/80 dark:border-blue-900/40 rounded-2xl p-5 sm:p-6">
        <div className="flex items-start gap-3.5">
          <div className="p-2 bg-blue-100 dark:bg-blue-950/80 rounded-xl text-blue-800 dark:text-blue-300 shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="space-y-3">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Ważne przepisy ustawy o podatku od towarów i usług (Ustawa o VAT)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs text-slate-700 dark:text-slate-300">
              <div className="bg-white/80 dark:bg-slate-900/60 p-3 rounded-xl border border-blue-200/50 dark:border-slate-700">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">
                  Limit zwolnienia: 200 000 zł
                </span>
                <p>
                  Przedsiębiorcy, których wartość sprzedaży nie przekroczyła <strong>200 000 zł</strong> w poprzednim roku podatkowym, mogą korzystać ze zwolnienia podmiotowego z VAT (art. 113 ust. 1).
                </p>
              </div>

              <div className="bg-white/80 dark:bg-slate-900/60 p-3 rounded-xl border border-blue-200/50 dark:border-slate-700">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">
                  Split Payment (MPP)
                </span>
                <p>
                  Mechanizm podzielonej płatności jest obowiązkowy dla faktur o wartości brutto przekraczającej <strong>15 000 zł</strong> (lub równowartość w walucie), obejmujących towary i usługi wrażliwe z załącznika nr 15.
                </p>
              </div>

              <div className="bg-white/80 dark:bg-slate-900/60 p-3 rounded-xl border border-blue-200/50 dark:border-slate-700">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">
                  Biała Lista Podatników
                </span>
                <p>
                  Przelewy na kwotę powyżej 15 000 zł na rzecz czynnego podatnika VAT muszą trafiać na rachunek zgłoszony w wykazie Ministerstwa Finansów, aby wydatek stanowił koszt podatkowy (KUP).
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>
                Ustawa z dnia 11 marca 2004 r. o podatku od towarów i usług (Dz.U. z 2024 r. poz. 361 z późn. zm.).
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PolishVatCalculatorTool;
