'use client';

import React, { useState } from 'react';
import {
  calculateKidemVeIhbar,
  KidemReason,
  CombinedResult,
} from '@/lib/salary/tr';
import { formatCurrency, parseLocaleNumber } from '@/lib/formatters';
import {
  Calculator,
  ShieldCheck,
  ShieldAlert,
  Copy,
  Check,
  Calendar,
  Clock,
  Layers,
  Info,
} from 'lucide-react';

const REASON_OPTIONS: { id: KidemReason; label: string }[] = [
  { id: 'employer_layoff', label: 'İşveren Feshi (İhbar ve Kıdem Birlikte Ödenir)' },
  { id: 'employee_just_cause_24', label: 'İşçi Haklı Feshi (İş Kanunu m.24)' },
  { id: 'retirement', label: 'Emeklilik (Yalnızca Kıdem Ödenir, İhbar Yok)' },
  { id: 'military_service', label: 'Askerlik (Yalnızca Kıdem Ödenir, İhbar Yok)' },
  { id: 'marriage_female', label: 'Kadın Çalışanın Evliliği (Yalnızca Kıdem, İhbar Yok)' },
  { id: 'death', label: 'Vefat (Kıdem Mirasçılara Ödenir)' },
  { id: 'employee_resignation', label: 'İstifa (Kıdem ve İhbar Ödenmez)' },
  { id: 'employer_misconduct_25_2', label: 'İşveren Haklı Feshi 25/II (Tazminat Yok)' },
];

export function KidemVeIhbarTool() {
  const [startDate, setStartDate] = useState<string>('2022-01-01');
  const [endDate, setEndDate] = useState<string>('2026-01-15');
  const [rawGrossSalary, setRawGrossSalary] = useState<string>('45000');
  const [rawBonuses, setRawBonuses] = useState<string>('0');
  const [reason, setReason] = useState<KidemReason>('employer_layoff');
  const [includeIhbar, setIncludeIhbar] = useState<boolean>(true);
  const [rawTaxBase, setRawTaxBase] = useState<string>('0');
  const [copied, setCopied] = useState<boolean>(false);

  const parsedGross = parseLocaleNumber(rawGrossSalary);
  const parsedBonuses = parseLocaleNumber(rawBonuses);
  const parsedTaxBase = parseLocaleNumber(rawTaxBase);

  const result: CombinedResult = calculateKidemVeIhbar({
    startDate,
    endDate,
    grossMonthlySalary: parsedGross,
    regularBonuses: parsedBonuses,
    reason,
    cumulativeTaxBase: parsedTaxBase,
    includeIhbar,
  });

  const handleCopy = async () => {
    const text = [
      `--- KIDEM VE İHBAR TAZMİNATI TOPLAM HESAPLAMA (2026) ---`,
      `İşe Giriş: ${startDate} | İşten Çıkış: ${endDate}`,
      `Kıdem Hizmet Süresi: ${result.kidem.serviceYears} Yıl ${result.kidem.serviceMonths} Ay ${result.kidem.serviceDays} Gün`,
      `İhbar Süresi: ${result.ihbar.noticeWeeks} Hafta (${result.ihbar.noticeDays} Gün)`,
      `Toplam Giydirilmiş Brüt: ${formatCurrency(result.kidem.giydirilmisBrut, 'tr', 'TRY')}`,
      `--- KIDEM TAZMİNATI ---`,
      `Brüt Kıdem: ${formatCurrency(result.kidem.grossSeverance, 'tr', 'TRY')}`,
      `Damga Vergisi: ${formatCurrency(result.kidem.damgaVergisi, 'tr', 'TRY')}`,
      `Net Kıdem: ${formatCurrency(result.kidem.netSeverance, 'tr', 'TRY')}`,
      `--- İHBAR TAZMİNATI ---`,
      `Brüt İhbar: ${formatCurrency(result.ihbar.grossIhbar, 'tr', 'TRY')}`,
      `Gelir Vergisi: ${formatCurrency(result.ihbar.gelirVergisi, 'tr', 'TRY')}`,
      `Damga Vergisi: ${formatCurrency(result.ihbar.damgaVergisi, 'tr', 'TRY')}`,
      `Net İhbar: ${formatCurrency(result.ihbar.netIhbar, 'tr', 'TRY')}`,
      `--- GENEL TOPLAM ---`,
      `Toplam Brüt Hak Ediş: ${formatCurrency(result.totalGross, 'tr', 'TRY')}`,
      `Toplam Kesintiler: ${formatCurrency(result.totalDamgaVergisi + result.totalGelirVergisi, 'tr', 'TRY')}`,
      `TOPLAM NET ÖDENECEK: ${formatCurrency(result.totalNet, 'tr', 'TRY')}`,
    ].join('\n');

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-5">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Layers className="h-6 w-6 text-teal-600" />
            Kıdem ve İhbar Tazminatı Birlikte Hesaplama (2026)
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            İş sözleşmesi feshinde çalışana ödenecek kıdem ve ihbar tazminatlarını tek formda bir arada hesaplayın.
          </p>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 self-start rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4 text-slate-500" />}
          {copied ? 'Kopyalandı' : 'Raporu Kopyala'}
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* INPUTS COLUMN */}
        <div className="lg:col-span-6 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="kidem-ihbar-start" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                İşe Giriş Tarihi
              </label>
              <input
                id="kidem-ihbar-start"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-sm text-slate-900 focus:border-teal-500 focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="kidem-ihbar-end" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                İşten Çıkış Tarihi
              </label>
              <input
                id="kidem-ihbar-end"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-sm text-slate-900 focus:border-teal-500 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="kidem-ihbar-gross" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Son Aylık Brüt Maaş (₺)
              </label>
              <input
                id="kidem-ihbar-gross"
                type="text"
                inputMode="decimal"
                value={rawGrossSalary}
                onChange={(e) => setRawGrossSalary(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-sm text-slate-900 focus:border-teal-500 focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="kidem-ihbar-bonuses" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Aylık Düzenli Ek Haklar (₺)
              </label>
              <input
                id="kidem-ihbar-bonuses"
                type="text"
                inputMode="decimal"
                value={rawBonuses}
                onChange={(e) => setRawBonuses(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-sm text-slate-900 focus:border-teal-500 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="kidem-ihbar-reason" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Fesih Gerekçesi
            </label>
            <select
              id="kidem-ihbar-reason"
              value={reason}
              onChange={(e) => setReason(e.target.value as KidemReason)}
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-sm text-slate-900 focus:border-teal-500 focus:bg-white focus:outline-none"
            >
              {REASON_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-3">
            <div className="flex items-center gap-2">
              <input
                id="ihbar-check"
                type="checkbox"
                checked={includeIhbar}
                onChange={(e) => setIncludeIhbar(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
              />
              <label htmlFor="ihbar-check" className="text-xs font-medium text-slate-800 cursor-pointer">
                İhbar süresi peşin ödensin (İhbar tazminatını hesaba kat)
              </label>
            </div>
            <span className="text-[11px] text-slate-500">
              Önel kullandırılmadıysa
            </span>
          </div>
        </div>

        {/* RESULTS COLUMN */}
        <div className="lg:col-span-6 space-y-4">
          {/* GRAND TOTAL HERO */}
          <div className="rounded-2xl border-2 border-teal-600/30 bg-gradient-to-br from-teal-50/60 via-white to-emerald-50/40 p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-800">
              Toplam Net Ödenecek Tazminat
            </div>
            <div className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              {formatCurrency(result.totalNet, 'tr', 'TRY')}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-200/80 pt-4 text-xs">
              <div>
                <span className="text-slate-500 block">Toplam Brüt Hak Ediş:</span>
                <span className="font-bold text-slate-900 text-sm">
                  {formatCurrency(result.totalGross, 'tr', 'TRY')}
                </span>
              </div>
              <div>
                <span className="text-slate-500 block">Toplam Vergi Kesintileri:</span>
                <span className="font-bold text-rose-700 text-sm">
                  - {formatCurrency(result.totalDamgaVergisi + result.totalGelirVergisi, 'tr', 'TRY')}
                </span>
              </div>
            </div>
          </div>

          {/* TWO SIDE-BY-SIDE SUMMARY CARDS */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {/* Kıdem Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-xs">
              <div className="flex items-center justify-between font-bold text-slate-900 border-b border-slate-100 pb-2 mb-2">
                <span>Kıdem Tazminatı</span>
                <span className="text-emerald-700">
                  {formatCurrency(result.kidem.netSeverance, 'tr', 'TRY')}
                </span>
              </div>
              <div className="space-y-1 text-slate-600">
                <div className="flex justify-between">
                  <span>Hizmet Süresi:</span>
                  <span className="font-medium text-slate-800">
                    {result.kidem.serviceYears}y {result.kidem.serviceMonths}a {result.kidem.serviceDays}g
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Brüt Kıdem:</span>
                  <span>{formatCurrency(result.kidem.grossSeverance, 'tr', 'TRY')}</span>
                </div>
                <div className="flex justify-between text-rose-600">
                  <span>Damga Vergisi:</span>
                  <span>- {formatCurrency(result.kidem.damgaVergisi, 'tr', 'TRY')}</span>
                </div>
                <div className="flex justify-between text-slate-500 text-[11px]">
                  <span>Gelir Vergisi:</span>
                  <span>0,00 ₺ (Muaf)</span>
                </div>
              </div>
            </div>

            {/* İhbar Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-xs">
              <div className="flex items-center justify-between font-bold text-slate-900 border-b border-slate-100 pb-2 mb-2">
                <span>İhbar Tazminatı</span>
                <span className="text-indigo-700">
                  {formatCurrency(result.ihbar.netIhbar, 'tr', 'TRY')}
                </span>
              </div>
              <div className="space-y-1 text-slate-600">
                <div className="flex justify-between">
                  <span>İhbar Süresi:</span>
                  <span className="font-medium text-slate-800">
                    {result.ihbar.noticeWeeks} Hafta ({result.ihbar.noticeDays} Gün)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Brüt İhbar:</span>
                  <span>{formatCurrency(result.ihbar.grossIhbar, 'tr', 'TRY')}</span>
                </div>
                <div className="flex justify-between text-rose-600">
                  <span>Gelir Vergisi:</span>
                  <span>- {formatCurrency(result.ihbar.gelirVergisi, 'tr', 'TRY')}</span>
                </div>
                <div className="flex justify-between text-rose-600">
                  <span>Damga Vergisi:</span>
                  <span>- {formatCurrency(result.ihbar.damgaVergisi, 'tr', 'TRY')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
