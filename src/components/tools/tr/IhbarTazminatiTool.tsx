'use client';

import React, { useState } from 'react';
import {
  calculateIhbarTazminati,
  IhbarResult,
} from '@/lib/salary/tr';
import { formatCurrency, parseLocaleNumber } from '@/lib/formatters';
import {
  Calculator,
  Clock,
  Copy,
  Check,
  Info,
  Scale,
} from 'lucide-react';

const DURATION_PRESETS = [
  { label: '6 aydan az', months: 4, weeks: 2, days: 14 },
  { label: '6 ay - 1.5 yıl', months: 12, weeks: 4, days: 28 },
  { label: '1.5 yıl - 3 yıl', months: 24, weeks: 6, days: 42 },
  { label: '3 yıldan fazla', months: 48, weeks: 8, days: 56 },
];

export function IhbarTazminatiTool() {
  const [selectedPresetMonths, setSelectedPresetMonths] = useState<number>(48);
  const [useCustomMonths, setUseCustomMonths] = useState<boolean>(false);
  const [customMonths, setCustomMonths] = useState<string>('36');
  const [rawGrossSalary, setRawGrossSalary] = useState<string>('45000');
  const [rawBonuses, setRawBonuses] = useState<string>('0');
  const [rawTaxBase, setRawTaxBase] = useState<string>('0');
  const [copied, setCopied] = useState<boolean>(false);

  const parsedGross = parseLocaleNumber(rawGrossSalary);
  const parsedBonuses = parseLocaleNumber(rawBonuses);
  const parsedTaxBase = parseLocaleNumber(rawTaxBase);

  const effectiveMonths = useCustomMonths
    ? Math.max(0, parseFloat(customMonths) || 0)
    : selectedPresetMonths;

  const result: IhbarResult = calculateIhbarTazminati({
    grossMonthlySalary: parsedGross,
    regularBonuses: parsedBonuses,
    serviceDurationMonths: effectiveMonths,
    cumulativeTaxBase: parsedTaxBase,
  });

  const handleCopy = async () => {
    const text = [
      `--- İHBAR TAZMİNATI HESAPLAMA SONUCU (2026) ---`,
      `Çalışma Süresi: ${effectiveMonths} Ay`,
      `Yasal İhbar Süresi: ${result.noticeWeeks} Hafta (${result.noticeDays} Gün)`,
      `Giydirilmiş Brüt Ücret: ${formatCurrency(result.giydirilmisBrut, 'tr', 'TRY')}`,
      `Günlük Ücret: ${formatCurrency(result.dailyWage, 'tr', 'TRY')}`,
      `Brüt İhbar Tazminatı: ${formatCurrency(result.grossIhbar, 'tr', 'TRY')}`,
      `Gelir Vergisi Kesintisi: ${formatCurrency(result.gelirVergisi, 'tr', 'TRY')}`,
      `Damga Vergisi (%0.759): ${formatCurrency(result.damgaVergisi, 'tr', 'TRY')}`,
      `Net İhbar Tazminatı: ${formatCurrency(result.netIhbar, 'tr', 'TRY')}`,
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
            <Calculator className="h-6 w-6 text-indigo-600" />
            İhbar Tazminatı ve Süresi Hesaplama (2026)
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            4857 sayılı İş Kanunu m.17 uyarınca ihbar süresi ve net ihbar tazminatı tutarını anında hesaplayın.
          </p>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 self-start rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4 text-slate-500" />}
          {copied ? 'Kopyalandı' : 'Sonucu Kopyala'}
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* INPUTS COLUMN */}
        <div className="lg:col-span-6 space-y-5">
          {/* SERVICE DURATION SELECTOR */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
              Çalışma (Kıdem) Süresi Dilimi
            </label>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {DURATION_PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => {
                    setSelectedPresetMonths(preset.months);
                    setUseCustomMonths(false);
                  }}
                  className={`flex flex-col items-center justify-center rounded-xl border p-2.5 text-xs transition ${
                    !useCustomMonths && selectedPresetMonths === preset.months
                      ? 'border-indigo-600 bg-indigo-50/70 font-semibold text-indigo-900 ring-2 ring-indigo-500/20'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="font-medium">{preset.label}</span>
                  <span className="text-[11px] text-slate-500 mt-0.5 font-bold">
                    {preset.weeks} Hafta ({preset.days} Gün)
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-2.5 flex items-center gap-2">
              <input
                id="ihbar-custom-toggle"
                type="checkbox"
                checked={useCustomMonths}
                onChange={(e) => setUseCustomMonths(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="ihbar-custom-toggle" className="text-xs text-slate-600 cursor-pointer">
                Özel çalışma süresi girmek istiyorum (Ay cinsinden)
              </label>
            </div>

            {useCustomMonths && (
              <div className="mt-2">
                <input
                  type="number"
                  min="0"
                  value={customMonths}
                  onChange={(e) => setCustomMonths(e.target.value)}
                  placeholder="Toplam çalışma ayı (Örn: 22)"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none"
                />
              </div>
            )}
          </div>

          <div>
            <label htmlFor="ihbar-gross-salary" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Son Aylık Brüt Maaş (₺)
            </label>
            <div className="relative mt-1.5">
              <input
                id="ihbar-gross-salary"
                type="text"
                inputMode="decimal"
                value={rawGrossSalary}
                onChange={(e) => setRawGrossSalary(e.target.value)}
                placeholder="Örn: 45000"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                TL / Ay
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="ihbar-bonuses" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Aylık Düzenli Yan Haklar & Ek Ödemeler (₺)
            </label>
            <div className="relative mt-1.5">
              <input
                id="ihbar-bonuses"
                type="text"
                inputMode="decimal"
                value={rawBonuses}
                onChange={(e) => setRawBonuses(e.target.value)}
                placeholder="Örn: 5000"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                TL / Ay
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              İhbar tazminatı hesabında da yol, yemek ve ikramiye gibi giydirilmiş brüte dahil ödemeler dikkate alınır.
            </p>
          </div>

          <div>
            <label htmlFor="ihbar-tax-base" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Mevcut Yıl Kümülatif Gelir Vergisi Matrahı (₺)
            </label>
            <div className="relative mt-1.5">
              <input
                id="ihbar-tax-base"
                type="text"
                inputMode="decimal"
                value={rawTaxBase}
                onChange={(e) => setRawTaxBase(e.target.value)}
                placeholder="Örn: 158000 (Varsayılan: 0)"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                TL
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              İhbar tazminatı gelir vergisine tabidir. Kümülatif matrahınız varsa vergi dilimi yükselir.
            </p>
          </div>
        </div>

        {/* RESULTS COLUMN */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          {/* NOTICE PERIOD BADGE */}
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/80 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-indigo-600 shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-900">
                  Yasal İhbar Öneli Süresi
                </p>
                <p className="text-base font-bold text-slate-900">
                  {result.noticeWeeks} Hafta ({result.noticeDays} Gün)
                </p>
              </div>
            </div>
            <span className="text-xs font-medium px-2.5 py-1 bg-white rounded-lg border border-indigo-200 text-indigo-800">
              İş Kanunu m.17
            </span>
          </div>

          {/* MAIN RESULT CARD */}
          <div className="rounded-2xl border-2 border-indigo-600/30 bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/30 p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-800">
              Ödenecek Net İhbar Tazminatı
            </div>
            <div className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              {formatCurrency(result.netIhbar, 'tr', 'TRY')}
            </div>

            <div className="mt-6 space-y-2.5 border-t border-slate-200/80 pt-4 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Giydirilmiş Brüt Ücret:</span>
                <span className="font-semibold text-slate-900">
                  {formatCurrency(result.giydirilmisBrut, 'tr', 'TRY')}
                </span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Günlük Giydirilmiş Ücret (Brüt/30):</span>
                <span className="font-semibold text-slate-900">
                  {formatCurrency(result.dailyWage, 'tr', 'TRY')}
                </span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Brüt İhbar Tazminatı ({result.noticeDays} Gün):</span>
                <span className="font-semibold text-slate-900">
                  {formatCurrency(result.grossIhbar, 'tr', 'TRY')}
                </span>
              </div>
              <div className="flex justify-between text-rose-700">
                <span>Gelir Vergisi Kesintisi (Tarifeye Göre):</span>
                <span className="font-semibold">
                  - {formatCurrency(result.gelirVergisi, 'tr', 'TRY')}
                </span>
              </div>
              <div className="flex justify-between text-rose-700">
                <span>Damga Vergisi Kesintisi (binde 7,59):</span>
                <span className="font-semibold">
                  - {formatCurrency(result.damgaVergisi, 'tr', 'TRY')}
                </span>
              </div>
            </div>
          </div>

          {/* LEGAL NOTICE */}
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5 text-xs text-slate-600 flex items-start gap-2">
            <Info className="h-4 w-4 text-slate-400 mt-0.5 shrink-0" />
            <div>
              <strong>Önemli Fark:</strong> Kıdem tazminatından yalnızca damga vergisi kesilirken; ihbar tazminatı Gelir Vergisi Kanunu uyarınca ücret sayıldığından hem <strong>Gelir Vergisi</strong> hem de <strong>Damga Vergisi</strong> kesintisine tabidir. SGK kesintisi yapılmaz.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
