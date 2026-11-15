'use client';

import React, { useState, useMemo, useId, useEffect } from 'react';
import Link from 'next/link';
import {
  Search,
  Building2,
  MapPin,
  Calculator,
  ExternalLink,
  Copy,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  ArrowRight,
} from 'lucide-react';
import deBanksData from '@/data/banks/de.json';
import { GermanIbanCalculatorTool } from './GermanIbanCalculatorTool';

export interface BankEntry {
  blz: string;
  name: string;
  plz: string;
  city: string;
  bic: string;
  shortName?: string;
  isMainOffice?: boolean;
}

export interface BlzSearchToolLabels {
  title?: string;
  subtitle?: string;
  searchLabel?: string;
  searchPlaceholder?: string;
  countFound?: string;
  tableBlz?: string;
  tableName?: string;
  tableCity?: string;
  tablePlz?: string;
  tableBic?: string;
  tableActions?: string;
  calcIban?: string;
  viewBankPage?: string;
  copyBlz?: string;
  copyBic?: string;
  copied?: string;
  noResultsTitle?: string;
  noResultsText?: string;
  modalTitle?: string;
  closeModal?: string;
  prevPage?: string;
  nextPage?: string;
  pageOf?: string;
}

const DEFAULT_LABELS_DE: Required<BlzSearchToolLabels> = {
  title: 'BLZ Suche & Bankleitzahlen-Verzeichnis',
  subtitle: 'Finden Sie deutsche Bankleitzahlen (BLZ), BICs und Kreditinstitute aus dem aktuellen Verzeichnis der Deutschen Bundesbank.',
  searchLabel: 'BLZ, Bankname oder Stadt suchen',
  searchPlaceholder: 'z.B. 10070000, Deutsche Bank, München, Sparkasse...',
  countFound: 'Banken gefunden',
  tableBlz: 'BLZ',
  tableName: 'Bankname',
  tableCity: 'Ort',
  tablePlz: 'PLZ',
  tableBic: 'BIC / SWIFT',
  tableActions: 'Aktionen',
  calcIban: 'IBAN berechnen',
  viewBankPage: 'Zur Bankseite',
  copyBlz: 'BLZ kopieren',
  copyBic: 'BIC kopieren',
  copied: 'Kopiert!',
  noResultsTitle: 'Keine Banken gefunden',
  noResultsText: 'Versuchen Sie eine andere 8-stellige BLZ, einen Banknamen oder Städtenamen.',
  modalTitle: 'IBAN berechnen für',
  closeModal: 'Schließen',
  prevPage: 'Zurück',
  nextPage: 'Weiter',
  pageOf: 'Seite',
};

const DEFAULT_LABELS_EN: Required<BlzSearchToolLabels> = {
  title: 'German BLZ (Bank Code) Directory & Search',
  subtitle: 'Look up German bank codes (BLZ), BIC/SWIFT codes, and cities from the official Deutsche Bundesbank registry.',
  searchLabel: 'Search by BLZ, Bank Name, or City',
  searchPlaceholder: 'e.g. 10070000, Deutsche Bank, Munich, Sparkasse...',
  countFound: 'banks found',
  tableBlz: 'BLZ',
  tableName: 'Bank Name',
  tableCity: 'City',
  tablePlz: 'Postcode',
  tableBic: 'BIC / SWIFT',
  tableActions: 'Actions',
  calcIban: 'Calculate IBAN',
  viewBankPage: 'View Bank Page',
  copyBlz: 'Copy BLZ',
  copyBic: 'Copy BIC',
  copied: 'Copied!',
  noResultsTitle: 'No banks found',
  noResultsText: 'Try searching by an 8-digit BLZ, bank name, or German city.',
  modalTitle: 'Calculate IBAN for',
  closeModal: 'Close',
  prevPage: 'Previous',
  nextPage: 'Next',
  pageOf: 'Page',
};

const POPULAR_FILTERS = [
  { label: 'Alle', query: '' },
  { label: 'Sparkasse', query: 'Sparkasse' },
  { label: 'Volksbank', query: 'Volksbank' },
  { label: 'Deutsche Bank', query: 'Deutsche Bank' },
  { label: 'Commerzbank', query: 'Commerzbank' },
  { label: 'Postbank', query: 'Postbank' },
  { label: 'Berlin', query: 'Berlin' },
  { label: 'Frankfurt', query: 'Frankfurt' },
  { label: 'München', query: 'München' },
  { label: 'Hamburg', query: 'Hamburg' },
];

export interface BlzSearchToolProps {
  initialQuery?: string;
  lang?: string;
  labels?: BlzSearchToolLabels;
  className?: string;
  pageSize?: number;
}

export function BlzSearchTool({
  initialQuery = '',
  lang = 'de',
  labels: customLabels,
  className = '',
  pageSize = 25,
}: BlzSearchToolProps) {
  const isGerman = lang.toLowerCase().startsWith('de');
  const baseLabels = isGerman ? DEFAULT_LABELS_DE : DEFAULT_LABELS_EN;
  const labels: Required<BlzSearchToolLabels> = { ...baseLabels, ...(customLabels || {}) };

  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeBankForCalc, setActiveBankForCalc] = useState<BankEntry | null>(null);
  const searchInputId = useId();

  // All banks dataset from de.json
  const allBanks: BankEntry[] = useMemo(() => {
    return (deBanksData as { mainBanks?: BankEntry[] })?.mainBanks || [];
  }, []);

  // Filter banks matching query across BLZ, name, shortName, city, plz, bic
  const filteredBanks = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) {
      return allBanks;
    }
    // Check if numeric (search BLZ prefix or exact)
    const isNumeric = /^[0-9]+$/.test(q);

    return allBanks.filter((bank) => {
      if (isNumeric) {
        return bank.blz.startsWith(q) || bank.plz.startsWith(q);
      }
      return (
        bank.name.toLowerCase().includes(q) ||
        bank.city.toLowerCase().includes(q) ||
        (bank.shortName && bank.shortName.toLowerCase().includes(q)) ||
        bank.blz.includes(q) ||
        (bank.bic && bank.bic.toLowerCase().includes(q))
      );
    });
  }, [allBanks, searchQuery]);

  // Reset to page 1 whenever query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredBanks.length / pageSize));
  const displayedBanks = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredBanks.slice(start, start + pageSize);
  }, [filteredBanks, currentPage, pageSize]);

  const handleCopy = async (text: string, key: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      }
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      // Fallback
    }
  };

  // Close modal on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeBankForCalc) {
        setActiveBankForCalc(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeBankForCalc]);

  return (
    <div className={`w-full max-w-6xl mx-auto space-y-6 ${className}`}>
      {/* Search Input Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
        <div>
          <label
            htmlFor={searchInputId}
            className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1"
          >
            {labels.searchLabel}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              id={searchInputId}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={labels.searchPlaceholder}
              className="w-full pl-11 pr-10 py-3.5 border border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Quick Filter Pills */}
        <div className="flex items-center gap-1.5 flex-wrap pt-1">
          <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 flex items-center gap-1 mr-1">
            <Filter className="w-3 h-3" />
            Schnellfilter:
          </span>
          {POPULAR_FILTERS.map((f) => (
            <button
              key={f.label}
              type="button"
              onClick={() => setSearchQuery(f.query)}
              className={`text-xs px-2.5 py-1 rounded-lg transition-colors font-medium ${
                searchQuery === f.query
                  ? 'bg-primary-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header / Counter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1">
        <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          <span className="font-bold text-slate-900 dark:text-white text-base">
            {filteredBanks.length.toLocaleString()}
          </span>{' '}
          {labels.countFound}
          {searchQuery && (
            <span className="text-xs font-normal text-slate-500 dark:text-slate-400 ml-1">
              für &ldquo;{searchQuery}&rdquo;
            </span>
          )}
        </div>

        {/* Top Pagination if multiple pages */}
        {totalPages > 1 && (
          <div className="flex items-center gap-2 self-end sm:self-auto text-xs">
            <span className="text-slate-500 dark:text-slate-400">
              {labels.pageOf} <span className="font-semibold text-slate-900 dark:text-white">{currentPage}</span> / {totalPages}
            </span>
            <div className="inline-flex rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-0.5">
              <button
                type="button"
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                aria-label={labels.prevPage}
                className="p-1 rounded text-slate-600 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                disabled={currentPage >= totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                aria-label={labels.nextPage}
                className="p-1 rounded text-slate-600 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Results Table */}
      {displayedBanks.length > 0 ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-xs uppercase font-semibold text-slate-600 dark:text-slate-300 tracking-wider">
                <tr>
                  <th scope="col" className="py-3.5 px-4 font-mono">
                    {labels.tableBlz}
                  </th>
                  <th scope="col" className="py-3.5 px-4">
                    {labels.tableName}
                  </th>
                  <th scope="col" className="py-3.5 px-4">
                    {labels.tableCity}
                  </th>
                  <th scope="col" className="py-3.5 px-4">
                    {labels.tablePlz}
                  </th>
                  <th scope="col" className="py-3.5 px-4 font-mono">
                    {labels.tableBic}
                  </th>
                  <th scope="col" className="py-3.5 px-4 text-right">
                    {labels.tableActions}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {displayedBanks.map((bank) => {
                  const blzCopyKey = `blz-${bank.blz}`;
                  const bicCopyKey = `bic-${bank.blz}`;

                  return (
                    <tr
                      key={bank.blz}
                      className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                    >
                      {/* BLZ with copy button */}
                      <td className="py-3 px-4 font-mono font-bold text-slate-900 dark:text-slate-100 whitespace-nowrap">
                        <div className="inline-flex items-center gap-1.5">
                          <span>{bank.blz}</span>
                          <button
                            type="button"
                            onClick={() => handleCopy(bank.blz, blzCopyKey)}
                            title={labels.copyBlz}
                            aria-label={`Copy BLZ ${bank.blz}`}
                            className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded transition-colors"
                          >
                            {copiedKey === blzCopyKey ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </td>

                      {/* Bank Name */}
                      <td className="py-3 px-4">
                        <div className="font-semibold text-slate-900 dark:text-slate-100">
                          {bank.name}
                        </div>
                        {bank.shortName && bank.shortName !== bank.name && (
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {bank.shortName}
                          </div>
                        )}
                      </td>

                      {/* City */}
                      <td className="py-3 px-4 text-slate-700 dark:text-slate-300">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{bank.city}</span>
                        </span>
                      </td>

                      {/* Postcode */}
                      <td className="py-3 px-4 text-slate-600 dark:text-slate-400 font-mono text-xs">
                        {bank.plz || '—'}
                      </td>

                      {/* BIC */}
                      <td className="py-3 px-4 font-mono text-xs whitespace-nowrap">
                        {bank.bic ? (
                          <div className="inline-flex items-center gap-1.5">
                            <span className="font-bold text-slate-800 dark:text-slate-200">
                              {bank.bic}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleCopy(bank.bic, bicCopyKey)}
                              title={labels.copyBic}
                              aria-label={`Copy BIC ${bank.bic}`}
                              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded transition-colors"
                            >
                              {copiedKey === bicCopyKey ? (
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        ) : (
                          <span className="text-slate-400">—</span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-3 px-4 text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setActiveBankForCalc(bank)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-950/70 hover:bg-primary-100 dark:hover:bg-primary-900/70 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                          >
                            <Calculator className="w-3.5 h-3.5" />
                            <span>{labels.calcIban}</span>
                          </button>

                          <Link
                            href={`/de/blz/${bank.blz}/`}
                            title={`${labels.viewBankPage} (${bank.blz})`}
                            className="inline-flex items-center gap-1 p-1.5 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 rounded-lg transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Bottom Pagination Controls */}
          {totalPages > 1 && (
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/50 dark:bg-slate-900">
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Zeige {((currentPage - 1) * pageSize + 1).toLocaleString()} bis{' '}
                {Math.min(currentPage * pageSize, filteredBanks.length).toLocaleString()} von{' '}
                {filteredBanks.length.toLocaleString()} Banken
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  type="button"
                  disabled={currentPage <= 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  {labels.prevPage}
                </button>

                <span className="text-xs font-semibold px-2 text-slate-700 dark:text-slate-300">
                  {currentPage} / {totalPages}
                </span>

                <button
                  type="button"
                  disabled={currentPage >= totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  {labels.nextPage}
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Empty Search State */
        <div className="text-center py-12 px-4 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900">
          <Building2 className="w-10 h-10 mx-auto text-slate-300 dark:text-slate-600 mb-3" />
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1">
            {labels.noResultsTitle}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            {labels.noResultsText}
          </p>
        </div>
      )}

      {/* IBAN Calculator Modal for selected bank */}
      {activeBankForCalc && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="calc-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6 relative">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 flex items-center gap-1.5">
                  <Calculator className="w-4 h-4" />
                  {labels.modalTitle}
                </div>
                <h3 id="calc-modal-title" className="text-xl font-bold text-slate-900 dark:text-slate-50 mt-1">
                  {activeBankForCalc.name}
                </h3>
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1">
                  <span>BLZ: <strong className="font-mono text-slate-800 dark:text-slate-200">{activeBankForCalc.blz}</strong></span>
                  {activeBankForCalc.bic && (
                    <span>BIC: <strong className="font-mono text-slate-800 dark:text-slate-200">{activeBankForCalc.bic}</strong></span>
                  )}
                  <span>Ort: <strong className="text-slate-800 dark:text-slate-200">{activeBankForCalc.city}</strong></span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveBankForCalc(null)}
                aria-label={labels.closeModal}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Embedded Calculator pre-filled with this BLZ */}
            <GermanIbanCalculatorTool
              initialBlz={activeBankForCalc.blz}
              initialKontonummer=""
              lang={lang}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default BlzSearchTool;
