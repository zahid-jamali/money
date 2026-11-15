'use client';

import React, { useState, useId } from 'react';
import { calculateVat, VatCalculationType } from '@/lib/vat';
import { formatCurrency, parseLocaleNumber } from '@/lib/formatters';
import {
  Calculator,
  ListPlus,
  ShieldCheck,
  Plus,
  Trash2,
  Copy,
  Check,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  FileSpreadsheet,
} from 'lucide-react';

interface InvoiceItem {
  id: string;
  description: string;
  netAmount: number;
  rate: number;
}

export function GermanMwstCalculatorTool() {
  const [activeTab, setActiveTab] = useState<'standard' | 'items' | 'check'>('standard');

  // Tab 1: Standard Rechner State
  const inputId = useId();
  const [calcType, setCalcType] = useState<VatCalculationType>('add');
  const [rawAmount, setRawAmount] = useState<string>('100');
  const [standardRate, setStandardRate] = useState<number>(19);
  const [copied, setCopied] = useState<boolean>(false);

  const parsedAmount = parseLocaleNumber(rawAmount);
  const standardResult = calculateVat({
    amount: parsedAmount,
    rate: standardRate,
    type: calcType,
  });

  // Tab 2: Rechnungspositionen State
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: '1', description: 'Beratungsleistung / IT-Service', netAmount: 250, rate: 19 },
    { id: '2', description: 'Fachbuch / Periodika', netAmount: 45, rate: 7 },
  ]);

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        description: `Position ${prev.length + 1}`,
        netAmount: 100,
        rate: 19,
      },
    ]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateItem = (id: string, updates: Partial<InvoiceItem>) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updates } : item)),
    );
  };

  // Calculations for multiple items
  const itemsSubtotalNetto = items.reduce((sum, item) => sum + (item.netAmount || 0), 0);
  const itemsVat19 = items
    .filter((item) => item.rate === 19)
    .reduce((sum, item) => sum + Math.round((item.netAmount * 0.19 + Number.EPSILON) * 100) / 100, 0);
  const itemsVat7 = items
    .filter((item) => item.rate === 7)
    .reduce((sum, item) => sum + Math.round((item.netAmount * 0.07 + Number.EPSILON) * 100) / 100, 0);
  const itemsTotalVat = itemsVat19 + itemsVat7;
  const itemsTotalBrutto = itemsSubtotalNetto + itemsTotalVat;

  // Tab 3: Rechnungsprüfung (Invoice Check) State
  const [checkNetto, setCheckNetto] = useState<string>('100.00');
  const [checkMwst, setCheckMwst] = useState<string>('19.00');
  const [checkBrutto, setCheckBrutto] = useState<string>('119.00');
  const [checkRate, setCheckRate] = useState<number>(19);

  const parsedCheckNetto = parseLocaleNumber(checkNetto);
  const parsedCheckMwst = parseLocaleNumber(checkMwst);
  const parsedCheckBrutto = parseLocaleNumber(checkBrutto);

  const expectedMwSt = Math.round((parsedCheckNetto * (checkRate / 100) + Number.EPSILON) * 100) / 100;
  const expectedBrutto = Math.round((parsedCheckNetto + expectedMwSt + Number.EPSILON) * 100) / 100;

  const mwstDiff = Math.abs(parsedCheckMwst - expectedMwSt);
  const sumDiff = Math.abs(parsedCheckBrutto - (parsedCheckNetto + parsedCheckMwst));
  const isMwstCorrect = mwstDiff <= 0.01;
  const isSumCorrect = sumDiff <= 0.01;
  const isInvoiceValid = isMwstCorrect && isSumCorrect;

  const handleCopyStandard = async () => {
    const text = `Umsatzsteuer-Berechnung:\n` +
      `• Modus: ${calcType === 'add' ? 'Netto zu Brutto (+ MwSt)' : 'Brutto zu Netto (- MwSt)'}\n` +
      `• Nettobetrag: ${formatCurrency(standardResult.netAmount, 'de', 'EUR')}\n` +
      `• MwSt (${standardRate}%): ${formatCurrency(standardResult.vatAmount, 'de', 'EUR')}\n` +
      `• Bruttobetrag: ${formatCurrency(standardResult.grossAmount, 'de', 'EUR')}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Tab Navigation Header */}
      <div
        role="tablist"
        aria-label="MwSt Rechner Modi"
        className="grid grid-cols-1 sm:grid-cols-3 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl gap-1.5"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'standard'}
          onClick={() => setActiveTab('standard')}
          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'standard'
              ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Calculator className="w-4 h-4 shrink-0" />
          <span>Standard Rechner</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'items'}
          onClick={() => setActiveTab('items')}
          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'items'
              ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <ListPlus className="w-4 h-4 shrink-0" />
          <span>Mehrere Positionen</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'check'}
          onClick={() => setActiveTab('check')}
          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'check'
              ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span>Rechnungsprüfung</span>
        </button>
      </div>

      {/* TAB 1: STANDARD RECHNER */}
      {activeTab === 'standard' && (
        <div
          role="tabpanel"
          aria-label="Standard Mehrwertsteuerrechner"
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8 space-y-6"
        >
          {/* Direction Toggle */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Berechnungsrichtung
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
                Netto zu Brutto (+ MwSt)
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
                Brutto zu Netto (- MwSt)
              </button>
            </div>
          </div>

          {/* Amount & Rate Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor={inputId}
                className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1.5"
              >
                {calcType === 'add' ? 'Nettobetrag (ohne MwSt)' : 'Bruttobetrag (inkl. MwSt)'}
              </label>
              <div className="relative rounded-xl shadow-sm">
                <input
                  id={inputId}
                  type="text"
                  inputMode="decimal"
                  value={rawAmount}
                  onChange={(e) => setRawAmount(e.target.value)}
                  placeholder="0,00"
                  className="w-full text-xl font-bold px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl focus:bg-white dark:focus:bg-slate-900 focus:border-teal-600 dark:focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-slate-900 dark:text-white outline-none transition"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
                  €
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                Steuersatz (§ 12 UStG)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: '19% Regel', rate: 19 },
                  { label: '7% Ermäßigt', rate: 7 },
                  { label: '0% Frei', rate: 0 },
                ].map((item) => (
                  <button
                    key={item.rate}
                    type="button"
                    onClick={() => setStandardRate(item.rate)}
                    className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-bold border transition ${
                      standardRate === item.rate
                        ? 'bg-teal-50 text-teal-800 border-teal-400 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-600 ring-2 ring-teal-500/20'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Box */}
          <div
            aria-live="polite"
            className="bg-gradient-to-br from-teal-50 to-emerald-50/40 dark:from-slate-800 dark:to-slate-800/80 border border-teal-200 dark:border-teal-900/40 rounded-2xl p-5 sm:p-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-4 border-b border-teal-200/60 dark:border-slate-700">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-teal-800 dark:text-teal-400">
                  {calcType === 'add' ? 'Rechnungsbetrag Brutto' : 'Rechnungsbetrag Netto'}
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white mt-1">
                  {formatCurrency(
                    calcType === 'add' ? standardResult.grossAmount : standardResult.netAmount,
                    'de',
                    'EUR',
                  )}
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                  Enthaltene MwSt ({standardRate}%)
                </span>
                <div className="text-2xl font-bold text-teal-700 dark:text-teal-400 mt-1">
                  {formatCurrency(standardResult.vatAmount, 'de', 'EUR')}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-xs sm:text-sm">
              <div className="p-3 bg-white/80 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 block text-xs">Nettobetrag</span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {formatCurrency(standardResult.netAmount, 'de', 'EUR')}
                </span>
              </div>
              <div className="p-3 bg-white/80 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 block text-xs">Umsatzsteuer ({standardRate}%)</span>
                <span className="font-bold text-teal-700 dark:text-teal-400">
                  +{formatCurrency(standardResult.vatAmount, 'de', 'EUR')}
                </span>
              </div>
              <div className="p-3 bg-white/80 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 block text-xs">Gesamtbetrag (Brutto)</span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {formatCurrency(standardResult.grossAmount, 'de', 'EUR')}
                </span>
              </div>
            </div>
          </div>

          {/* Copy Button */}
          <div className="flex justify-start">
            <button
              type="button"
              onClick={handleCopyStandard}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
            >
              {copied ? <Check className="w-4 h-4 text-teal-600" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Kopiert' : 'Ergebnis kopieren'}
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: RECHNUNGSPOSITIONEN (MEHRERE POSTEN) */}
      {activeTab === 'items' && (
        <div
          role="tabpanel"
          aria-label="Rechnungspositionen Rechner"
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8 space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Rechnungspositionen erfassen
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Fügen Sie mehrere Artikel oder Dienstleistungen mit unterschiedlichen MwSt-Sätzen hinzu.
              </p>
            </div>
            <button
              type="button"
              onClick={addItem}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-sm transition"
            >
              <Plus className="w-4 h-4" />
              Position hinzufügen
            </button>
          </div>

          {/* Items Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/60 text-xs font-semibold text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th scope="col" className="p-3">Bezeichnung</th>
                  <th scope="col" className="p-3 w-40">Nettobetrag (€)</th>
                  <th scope="col" className="p-3 w-32">MwSt-Satz</th>
                  <th scope="col" className="p-3 w-32 text-right">MwSt Betrag</th>
                  <th scope="col" className="p-3 w-32 text-right">Bruttobetrag</th>
                  <th scope="col" className="p-3 w-12 text-center">Aktion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {items.map((item, index) => {
                  const vat = Math.round((item.netAmount * (item.rate / 100) + Number.EPSILON) * 100) / 100;
                  const brutto = item.netAmount + vat;
                  return (
                    <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                      <td className="p-2.5">
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) => updateItem(item.id, { description: e.target.value })}
                          aria-label={`Bezeichnung für Position ${index + 1}`}
                          className="w-full px-2.5 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white"
                        />
                      </td>
                      <td className="p-2.5">
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          value={item.netAmount}
                          onChange={(e) => updateItem(item.id, { netAmount: parseFloat(e.target.value) || 0 })}
                          aria-label={`Nettobetrag für Position ${index + 1}`}
                          className="w-full px-2.5 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-900 dark:text-white"
                        />
                      </td>
                      <td className="p-2.5">
                        <select
                          value={item.rate}
                          onChange={(e) => updateItem(item.id, { rate: parseInt(e.target.value, 10) })}
                          aria-label={`MwSt-Satz für Position ${index + 1}`}
                          className="w-full px-2.5 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-900 dark:text-white"
                        >
                          <option value={19}>19% Regel</option>
                          <option value={7}>7% Ermäßigt</option>
                          <option value={0}>0% Frei</option>
                        </select>
                      </td>
                      <td className="p-2.5 text-right font-medium text-teal-700 dark:text-teal-400">
                        {formatCurrency(vat, 'de', 'EUR')}
                      </td>
                      <td className="p-2.5 text-right font-bold text-slate-900 dark:text-white">
                        {formatCurrency(brutto, 'de', 'EUR')}
                      </td>
                      <td className="p-2.5 text-center">
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          aria-label={`Position ${index + 1} löschen`}
                          className="p-1.5 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 rounded-lg transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Dynamic Invoice Totals Summary Card */}
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 sm:p-6">
            <div className="max-w-md ml-auto space-y-2.5 text-sm">
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Summe Netto:</span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {formatCurrency(itemsSubtotalNetto, 'de', 'EUR')}
                </span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>MwSt 19% Anteil:</span>
                <span className="font-semibold text-teal-700 dark:text-teal-400">
                  +{formatCurrency(itemsVat19, 'de', 'EUR')}
                </span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>MwSt 7% Anteil:</span>
                <span className="font-semibold text-teal-700 dark:text-teal-400">
                  +{formatCurrency(itemsVat7, 'de', 'EUR')}
                </span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Gesamte Umsatzsteuer:</span>
                <span className="font-semibold text-teal-700 dark:text-teal-400">
                  +{formatCurrency(itemsTotalVat, 'de', 'EUR')}
                </span>
              </div>
              <div className="flex justify-between pt-3 border-t border-slate-200 dark:border-slate-700 text-base font-extrabold text-slate-950 dark:text-white">
                <span>Gesamtbetrag (Brutto):</span>
                <span className="text-teal-700 dark:text-teal-400 text-lg">
                  {formatCurrency(itemsTotalBrutto, 'de', 'EUR')}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: RECHNUNGSPRÜFUNG (INVOICE CHECK) */}
      {activeTab === 'check' && (
        <div
          role="tabpanel"
          aria-label="Rechnungsprüfung"
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8 space-y-6"
        >
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Eingangsrechnungsprüfung (§ 14 & § 15 UStG)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Geben Sie die auf der Rechnung ausgewiesenen Werte ein, um die mathematische Korrektheit und den Vorsteuerabzug zu prüfen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Netto laut Rechnung (€)
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={checkNetto}
                onChange={(e) => setCheckNetto(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl font-bold text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Angewandter Steuersatz
              </label>
              <select
                value={checkRate}
                onChange={(e) => setCheckRate(parseFloat(e.target.value) || 19)}
                className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl font-bold text-slate-900 dark:text-white"
              >
                <option value={19}>19% (Regelsteuersatz)</option>
                <option value={7}>7% (Ermäßigter Satz)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Ausgewiesene MwSt (€)
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={checkMwst}
                onChange={(e) => setCheckMwst(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl font-bold text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Ausgewiesener Bruttobetrag (€)
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={checkBrutto}
                onChange={(e) => setCheckBrutto(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl font-bold text-slate-900 dark:text-white"
              />
            </div>
          </div>

          {/* Verification Status Banner */}
          <div
            className={`p-5 rounded-2xl border transition-all ${
              isInvoiceValid
                ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800'
                : 'bg-rose-50 dark:bg-rose-950/30 border-rose-300 dark:border-rose-800'
            }`}
          >
            <div className="flex items-start gap-3.5">
              {isInvoiceValid ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
              )}
              <div className="space-y-2">
                <h4
                  className={`text-base font-bold ${
                    isInvoiceValid ? 'text-emerald-900 dark:text-emerald-200' : 'text-rose-900 dark:text-rose-200'
                  }`}
                >
                  {isInvoiceValid
                    ? 'Rechnung mathematisch einwandfrei (innerhalb 1-Cent-Toleranz)'
                    : 'Achtung: Diskrepanz in der Umsatzsteuerberechnung festgestellt!'}
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  {isInvoiceValid
                    ? 'Die ausgewiesene Mehrwertsteuer entspricht genau den Vorgaben des § 14 Abs. 4 UStG. Der Vorsteuerabzug nach § 15 UStG ist rechnerisch unbedenklich.'
                    : `Es liegt eine Abweichung von ${formatCurrency(mwstDiff, 'de', 'EUR')} bei der Steuer bzw. ${formatCurrency(sumDiff, 'de', 'EUR')} bei der Gesamtsumme vor. Nach § 14c UStG schuldet der Rechnungssteller unberechtigt ausgewiesene Steuer, während der Leistungsempfänger unter Umständen nur den gesetzlich geschuldeten Betrag als Vorsteuer geltend machen darf.`}
                </p>

                {/* Expected vs Given Table */}
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-black/5 dark:border-white/5 text-xs">
                  <div>
                    <span className="text-slate-500 block">Erwartete MwSt:</span>
                    <span className="font-bold">{formatCurrency(expectedMwSt, 'de', 'EUR')}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Eingegebene MwSt:</span>
                    <span className="font-bold">{formatCurrency(parsedCheckMwst, 'de', 'EUR')}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Erwartetes Brutto:</span>
                    <span className="font-bold">{formatCurrency(expectedBrutto, 'de', 'EUR')}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Eingegebenes Brutto:</span>
                    <span className="font-bold">{formatCurrency(parsedCheckBrutto, 'de', 'EUR')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default GermanMwstCalculatorTool;
