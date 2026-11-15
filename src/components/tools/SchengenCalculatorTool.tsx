'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  calculateSchengenStatus,
  checkTripFeasibility,
  getLatestExitDate,
  formatStaysSummary,
  diffDays,
  isValidDateStr,
  SchengenStay,
} from '@/lib/travel/schengen';
import { SchengenTimeline } from './SchengenTimeline';
import { PrintButton } from '@/components/ui/PrintButton';
import {
  Plus,
  Trash2,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  RotateCcw,
  Plane,
  ShieldAlert,
  Clock,
  Compass,
  FileDown,
} from 'lucide-react';

export interface SchengenCalculatorToolProps {
  initialStays?: SchengenStay[];
  lang?: 'en' | 'tr';
  defaultCheckDate?: string;
}

const LOCAL_STORAGE_KEY = 'zetawala_schengen_stays_v1';

export function SchengenCalculatorTool({
  initialStays,
  lang = 'en',
  defaultCheckDate,
}: SchengenCalculatorToolProps) {
  const isTr = lang === 'tr';

  const todayStr = useMemo(() => {
    if (defaultCheckDate && isValidDateStr(defaultCheckDate)) return defaultCheckDate;
    return new Date().toISOString().slice(0, 10);
  }, [defaultCheckDate]);

  // Stays state
  const [stays, setStays] = useState<SchengenStay[]>(() => {
    if (initialStays && initialStays.length > 0) return initialStays;
    return [
      {
        id: '1',
        entry: '2026-01-10',
        exit: '2026-01-25',
        label: isTr ? 'Kış tatili' : 'Winter break',
      },
    ];
  });

  // Check date state
  const [checkDate, setCheckDate] = useState<string>(todayStr);

  // Planned trip state
  const [hasPlannedTrip, setHasPlannedTrip] = useState<boolean>(true);
  const [plannedEntry, setPlannedEntry] = useState<string>('2026-04-01');
  const [plannedExit, setPlannedExit] = useState<string>('2026-04-15');

  // Copy summary status
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);

  // Load from localStorage on mount safely
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setStays(parsed);
        }
      }
    } catch {
      // ignore localStorage disabled or corrupted
    }
  }, []);

  // Save to localStorage on change safely
  const saveStays = useCallback((updated: SchengenStay[]) => {
    setStays(updated);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore storage full or disabled
    }
  }, []);

  // Add new stay row
  const handleAddStay = () => {
    const newStay: SchengenStay = {
      id: String(Date.now()),
      entry: todayStr,
      exit: todayStr,
      label: '',
    };
    saveStays([...stays, newStay]);
  };

  // Remove stay row
  const handleRemoveStay = (index: number) => {
    const updated = stays.filter((_, i) => i !== index);
    saveStays(updated);
  };

  // Update stay field
  const handleUpdateStay = (index: number, field: keyof SchengenStay, value: string) => {
    const updated = [...stays];
    updated[index] = { ...updated[index], [field]: value };
    saveStays(updated);
  };

  // Reset stays
  const handleReset = () => {
    saveStays([]);
  };

  // Live calculation results
  const calculation = useMemo(() => {
    return calculateSchengenStatus(stays, checkDate);
  }, [stays, checkDate]);

  // Feasibility calculation for planned trip
  const plannedDuration = useMemo(() => {
    if (!isValidDateStr(plannedEntry) || !isValidDateStr(plannedExit)) return 0;
    const dur = diffDays(plannedEntry, plannedExit) + 1;
    return dur > 0 ? dur : 0;
  }, [plannedEntry, plannedExit]);

  const feasibility = useMemo(() => {
    if (!hasPlannedTrip || plannedDuration <= 0) return null;
    try {
      return checkTripFeasibility(stays, plannedEntry, plannedDuration);
    } catch {
      return null;
    }
  }, [hasPlannedTrip, stays, plannedEntry, plannedDuration]);

  // Max continuous stay allowed from checkDate
  const maxStayFromToday = useMemo(() => {
    return getLatestExitDate(stays, checkDate);
  }, [stays, checkDate]);

  const maxStayFromTodayDays = useMemo(() => {
    if (!maxStayFromToday) return 0;
    return diffDays(checkDate, maxStayFromToday) + 1;
  }, [checkDate, maxStayFromToday]);

  // Export summary string
  const summaryReport = useMemo(() => {
    return formatStaysSummary(stays, checkDate);
  }, [stays, checkDate]);

  const handleCopySummary = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(summaryReport);
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2000);
    }
  };

  // Warning thresholds
  const isDangerOverstay = calculation.isOverstay || calculation.daysUsed > 90;
  const isWarningHighUsage = calculation.daysUsed >= 75 && !isDangerOverstay;

  return (
    <div className="w-full space-y-6">
      {/* 1. Header Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              {isTr ? 'Schengen 90/180 Gün Hesaplama Motoru' : 'Schengen 90/180 Day Travel Engine'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isTr
                ? 'Son 180 günlük hareketli pencere kuralına göre kalan gün ve ihlal takibi'
                : 'Official rolling window compliance & overstay detection'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <PrintButton label={isTr ? 'Yazdır' : 'Print'} />
          <button
            type="button"
            onClick={() => setShowExportModal(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition"
          >
            <FileDown className="w-3.5 h-3.5" />
            {isTr ? 'Rapor Çıkar' : 'Export Report'}
          </button>
        </div>
      </div>

      {/* 2. Key Live Result Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Days Used in 180-day window */}
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {isTr ? 'Kullanılan Gün' : 'Days Used'}
            </span>
            {isDangerOverstay ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-600 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded-full">
                <AlertCircle className="w-3 h-3" />
                {isTr ? 'İhlal!' : 'Overstay!'}
              </span>
            ) : isWarningHighUsage ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full">
                <AlertTriangle className="w-3 h-3" />
                {isTr ? 'Kritik' : 'High Usage'}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                <CheckCircle2 className="w-3 h-3" />
                {isTr ? 'Yasal' : 'Legal'}
              </span>
            )}
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span
              className={`text-3xl font-extrabold ${
                isDangerOverstay
                  ? 'text-rose-600 dark:text-rose-400'
                  : isWarningHighUsage
                  ? 'text-amber-600 dark:text-amber-400'
                  : 'text-slate-900 dark:text-white'
              }`}
            >
              {calculation.daysUsed}
            </span>
            <span className="text-sm font-semibold text-slate-400">/ 90 {isTr ? 'gün' : 'days'}</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {isTr ? 'Son 180 gün içindeki toplam süre' : 'In 180-day rolling window'}
          </p>
        </div>

        {/* Days Remaining Today */}
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            {isTr ? 'Kalan Gün Hakkı' : 'Days Remaining'}
          </span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-teal-600 dark:text-teal-400">
              {calculation.daysRemaining}
            </span>
            <span className="text-sm font-semibold text-slate-400">{isTr ? 'gün' : 'days'}</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {isTr ? 'Kontrol tarihi itibarıyla hak' : `As of check date (${calculation.checkDate})`}
          </p>
        </div>

        {/* Max Continuous Stay from Check Date */}
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            {isTr ? 'Kesintisiz Kalış Limiti' : 'Max Continuous Stay'}
          </span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
              {maxStayFromTodayDays}
            </span>
            <span className="text-sm font-semibold text-slate-400">{isTr ? 'gün' : 'days'}</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {maxStayFromToday
              ? `${isTr ? 'Son çıkış:' : 'Latest exit:'} ${maxStayFromToday}`
              : isTr ? 'Giriş hakkı kalmadı' : 'No allowance available'}
          </p>
        </div>

        {/* Full Reset Date */}
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            {isTr ? 'Tam 90 Gün Yenilenme' : 'Full 90-Day Reset'}
          </span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              {calculation.earliestFullResetDate}
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {isTr ? 'Önceki tüm girişlerin 180 günü dolduracağı tarih' : 'Earliest date 90 full days become available'}
          </p>
        </div>
      </div>

      {/* 3. Overstay Alert Banner (If Applicable) */}
      {calculation.isOverstay && (
        <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <h4 className="font-bold text-rose-800 dark:text-rose-300">
              {isTr ? 'DİKKAT: VİZE / SCHENGEN KURALI İHLALİ (OVERSTAY) TESPİT EDİLDİ' : 'WARNING: SCHENGEN OVERSTAY VIOLATION DETECTED'}
            </h4>
            <p className="mt-1">
              {isTr
                ? `Kayıtlı seyahat geçmişinizde 90 günlük yasal sınır ${calculation.maxDaysExceeded} gün aşılmıştır. İlk ihlal tarihi: ${calculation.overstayDates[0]}.`
                : `Your stay history exceeds the 90-day legal ceiling by ${calculation.maxDaysExceeded} day(s). First illegal date: ${calculation.overstayDates[0]}.`}
            </p>
            <p className="text-xs text-rose-700 dark:text-rose-400 mt-1 font-mono">
              {isTr ? 'İhlal Günleri:' : 'Violation Dates:'} {calculation.overstayDates.slice(0, 10).join(', ')}
              {calculation.overstayDates.length > 10 ? ` ... (+${calculation.overstayDates.length - 10} days)` : ''}
            </p>
          </div>
        </div>
      )}

      {/* 4. Visual Timeline Component */}
      <SchengenTimeline
        stays={stays}
        plannedStay={
          hasPlannedTrip && plannedDuration > 0
            ? { entry: plannedEntry, exit: plannedExit }
            : null
        }
        checkDate={checkDate}
        overstayDates={calculation.overstayDates}
        lang={lang}
      />

      {/* 5. Stay History Input Table */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {isTr ? '1. Geçmiş ve Mevcut Schengen Seyahatleriniz' : '1. Past & Current Schengen Stays'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isTr
                ? 'Pasaportunuzdaki giriş ve çıkış kaşelerindeki tarihleri ekleyin (giriş ve çıkış günleri tam gün sayılır).'
                : 'Enter your passport entry and exit dates (both entry and exit days count as full days).'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs text-slate-500 hover:text-rose-600 transition"
              title={isTr ? 'Tüm seyahatleri temizle' : 'Clear all stays'}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              {isTr ? 'Temizle' : 'Clear'}
            </button>
            <button
              type="button"
              onClick={handleAddStay}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-teal-600 hover:bg-teal-700 text-white transition shadow-sm"
            >
              <Plus className="w-4 h-4" />
              {isTr ? 'Seyahat Ekle' : 'Add Stay'}
            </button>
          </div>
        </div>

        {/* Check date selector */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg flex flex-wrap items-center justify-between gap-3 text-xs">
          <label className="font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
            <Clock className="w-4 h-4 text-teal-600" />
            {isTr ? 'Durum Kontrol Tarihi:' : 'Calculation Check Date:'}
          </label>
          <input
            type="date"
            value={checkDate}
            onChange={(e) => setCheckDate(e.target.value)}
            className="px-2.5 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
          />
        </div>

        {/* Stays List */}
        {stays.length === 0 ? (
          <div className="text-center py-8 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl text-slate-500">
            <Plane className="w-8 h-8 mx-auto mb-2 text-slate-400 opacity-60" />
            <p className="text-sm font-medium">
              {isTr ? 'Henüz seyahat eklenmedi' : 'No Schengen stays added yet'}
            </p>
            <p className="text-xs text-slate-400 mt-1">
              {isTr
                ? 'Hesaplamaya başlamak için yukarıdaki "Seyahat Ekle" butonuna tıklayın.'
                : 'Click "Add Stay" above to begin tracking your 90-day allowance.'}
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {stays.map((stay, idx) => {
              const dur =
                isValidDateStr(stay.entry) && isValidDateStr(stay.exit)
                  ? diffDays(stay.entry, stay.exit) + 1
                  : 0;
              return (
                <div
                  key={stay.id || idx}
                  className="flex flex-wrap sm:flex-nowrap items-center gap-2 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40"
                >
                  <span className="text-xs font-mono font-bold text-slate-400 w-6 text-center">
                    #{idx + 1}
                  </span>

                  <div className="flex-1 min-w-[130px]">
                    <label className="block text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold mb-0.5">
                      {isTr ? 'Giriş Tarihi' : 'Entry Date'}
                    </label>
                    <input
                      type="date"
                      value={stay.entry}
                      onChange={(e) => handleUpdateStay(idx, 'entry', e.target.value)}
                      className="w-full px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div className="flex-1 min-w-[130px]">
                    <label className="block text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold mb-0.5">
                      {isTr ? 'Çıkış Tarihi' : 'Exit Date'}
                    </label>
                    <input
                      type="date"
                      value={stay.exit}
                      onChange={(e) => handleUpdateStay(idx, 'exit', e.target.value)}
                      className="w-full px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div className="flex-1 min-w-[140px]">
                    <label className="block text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold mb-0.5">
                      {isTr ? 'Not / Ülke' : 'Note / Country'}
                    </label>
                    <input
                      type="text"
                      placeholder={isTr ? 'Örn: İtalya tatili' : 'e.g. Italy vacation'}
                      value={stay.label || ''}
                      onChange={(e) => handleUpdateStay(idx, 'label', e.target.value)}
                      className="w-full px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div className="w-16 text-center flex-shrink-0">
                    <span className="block text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold mb-0.5">
                      {isTr ? 'Süre' : 'Length'}
                    </span>
                    <span className="text-xs font-bold text-teal-600 dark:text-teal-400">
                      {dur > 0 ? `${dur}d` : '-'}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleRemoveStay(idx)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/50 rounded transition"
                    title={isTr ? 'Sil' : 'Delete'}
                    aria-label={isTr ? `Seyahati sil #${idx + 1}` : `Delete stay #${idx + 1}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 6. Planner Mode: Proposed Future Trip Feasibility */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-600" />
              {isTr ? '2. Gelecek Seyahat Planlama Modu' : '2. Future Trip Planner & Feasibility'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isTr
                ? 'Planladığınız giriş ve çıkış tarihlerini girin; sistem kural ihlali oluşup oluşmayacağını anında simüle eder.'
                : 'Test planned entry and exit dates to verify compliance before booking flights.'}
            </p>
          </div>

          <label className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              checked={hasPlannedTrip}
              onChange={(e) => setHasPlannedTrip(e.target.checked)}
              className="rounded border-slate-300 text-teal-600 focus:ring-teal-500"
            />
            {isTr ? 'Planlanan seyahati simüle et' : 'Simulate planned trip'}
          </label>
        </div>

        {hasPlannedTrip && (
          <div className="space-y-4 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {isTr ? 'Planlanan Giriş Tarihi' : 'Planned Entry Date'}
                </label>
                <input
                  type="date"
                  value={plannedEntry}
                  onChange={(e) => setPlannedEntry(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {isTr ? 'Planlanan Çıkış Tarihi' : 'Planned Exit Date'}
                </label>
                <input
                  type="date"
                  value={plannedExit}
                  onChange={(e) => setPlannedExit(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {isTr ? 'Planlanan Toplam Süre' : 'Planned Duration'}
                </label>
                <div className="px-3 py-2 text-sm font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <span>{plannedDuration > 0 ? `${plannedDuration} ${isTr ? 'gün' : 'days'}` : '-'}</span>
                </div>
              </div>
            </div>

            {/* Feasibility Result Badge */}
            {feasibility && (
              <div
                className={`p-4 rounded-xl border flex items-start gap-3 ${
                  feasibility.isLegal
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                    : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-200'
                }`}
              >
                {feasibility.isLegal ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                )}
                <div className="text-sm space-y-1">
                  <div className="font-bold flex items-center gap-2">
                    {feasibility.isLegal
                      ? isTr
                        ? '✅ PLANLANAN SEYAHAT YASAL VE UYGUN'
                        : '✅ PLANNED TRIP IS FULLY LEGAL'
                      : isTr
                      ? '❌ DİKKAT: PLANLANAN SEYAHAT 90 GÜN LİMİTİNİ AŞIYOR!'
                      : '❌ CAUTION: PLANNED TRIP WILL CAUSE AN OVERSTAY!'}
                  </div>
                  <p className="text-xs">
                    {feasibility.isLegal
                      ? isTr
                        ? `Seyahat girişinde (${plannedEntry}) önceki 180 güne göre ${feasibility.daysRemainingBeforeTrip} gün hakkınız bulunacak. Bu girişle en geç ${feasibility.latestExitDate} tarihine kadar (${feasibility.maxContinuousDays} gün) kesintisiz kalabilirsiniz.`
                        : `At entry on ${plannedEntry}, you will have ${feasibility.daysRemainingBeforeTrip} days available. The latest legal exit date for this entry is ${feasibility.latestExitDate} (max ${feasibility.maxContinuousDays} continuous days).`
                      : isTr
                      ? `Seyahat süresi 90 günlük hareketli pencereyi aşmaktadır. İlk ihlal gerçekleşecek tarih: ${feasibility.firstIllegalDate}. Bu tarihten önce Schengen alanını terk etmelisiniz.`
                      : `Your planned trip exceeds the allowance. First illegal violation date will be: ${feasibility.firstIllegalDate}. You must depart before this date.`}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 7. Export / Copy Modal */}
      {showExportModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="export-dialog-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 id="export-dialog-title" className="text-base font-bold text-slate-900 dark:text-white">
                {isTr ? 'Schengen Seyahat Raporu' : 'Schengen Travel Report'}
              </h3>
              <button
                type="button"
                onClick={() => setShowExportModal(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm font-semibold"
              >
                ✕
              </button>
            </div>

            <textarea
              readOnly
              rows={12}
              value={summaryReport}
              className="w-full p-3 font-mono text-xs rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 resize-none"
            />

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={handleCopySummary}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-teal-600 hover:bg-teal-700 text-white transition shadow-sm"
              >
                {copiedSummary ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copiedSummary
                  ? isTr
                    ? 'Kopyalandı!'
                    : 'Copied!'
                  : isTr
                  ? 'Metni Kopyala'
                  : 'Copy Report'}
              </button>
              <button
                type="button"
                onClick={() => setShowExportModal(false)}
                className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                {isTr ? 'Kapat' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
