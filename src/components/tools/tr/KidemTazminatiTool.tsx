'use client';

import React, { useState } from 'react';
import {
  calculateKidemTazminati,
  KidemReason,
  KidemResult,
} from '@/lib/salary/tr';
import { KIDEM_TAZMINATI_TAVANI_2026_H1 } from '@/rules/tr/salary-2026';
import { formatCurrency, parseLocaleNumber } from '@/lib/formatters';
import {
  Calculator,
  ShieldAlert,
  ShieldCheck,
  Calendar,
  AlertTriangle,
  Copy,
  Check,
  FileText,
  Info,
} from 'lucide-react';

const REASON_OPTIONS: { id: KidemReason; label: string; desc: string }[] = [
  {
    id: 'employer_layoff',
    label: 'İşveren Feshi (Haklı Neden 25/II Hariç / Kod 04)',
    desc: 'İşveren tarafından performans, daralma vb. gerekçeyle fesih',
  },
  {
    id: 'employee_just_cause_24',
    label: 'İşçi Haklı Feshi (İş Kanunu m.24 / Kod 23-25)',
    desc: 'Maaş ödenmemesi, mobbing, sağlık, ahlaka aykırılık vb.',
  },
  {
    id: 'retirement',
    label: 'Emeklilik veya 15 Yıl 3600 Gün (Kod 08-09)',
    desc: 'SGK kıdem tazminatı yazısı ile ayrılma',
  },
  {
    id: 'military_service',
    label: 'Muvazzaf Askerlik Görevi (Kod 12)',
    desc: 'Zorunlu askerlik nedeniyle işten ayrılma',
  },
  {
    id: 'marriage_female',
    label: 'Kadın Çalışanın Evlenmesi (Kod 13)',
    desc: 'Resmi nikah tarihinden itibaren 1 yıl içinde fesih',
  },
  {
    id: 'death',
    label: 'İşçinin Vefatı (Kod 10)',
    desc: 'Kıdem tazminatı yasal mirasçılara ödenir',
  },
  {
    id: 'employee_resignation',
    label: 'Kendi İsteğiyle İstifa (Haklı Neden Yok / Kod 03)',
    desc: 'Kıdem tazminatı hakkı doğmaz',
  },
  {
    id: 'employer_misconduct_25_2',
    label: 'İşveren Haklı Feshi (İş Kanunu 25/II Ahlaka Aykırılık / Kod 29-46)',
    desc: 'Kıdem tazminatı ödenmez',
  },
];

export function KidemTazminatiTool() {
  const [startDate, setStartDate] = useState<string>('2023-01-01');
  const [endDate, setEndDate] = useState<string>('2026-01-15');
  const [rawGrossSalary, setRawGrossSalary] = useState<string>('45000');
  const [rawBonuses, setRawBonuses] = useState<string>('0');
  const [reason, setReason] = useState<KidemReason>('employer_layoff');
  const [copied, setCopied] = useState<boolean>(false);

  const parsedGross = parseLocaleNumber(rawGrossSalary);
  const parsedBonuses = parseLocaleNumber(rawBonuses);

  const result: KidemResult = calculateKidemTazminati({
    startDate,
    endDate,
    grossMonthlySalary: parsedGross,
    regularBonuses: parsedBonuses,
    reason,
  });

  const handleCopy = async () => {
    const text = [
      `--- KIDEM TAZMİNATI HESAPLAMA SONUCU (2026) ---`,
      `İşe Giriş: ${startDate} | İşten Çıkış: ${endDate}`,
      `Çalışma Süresi: ${result.serviceYears} Yıl, ${result.serviceMonths} Ay, ${result.serviceDays} Gün (${result.totalDays} gün)`,
      `Giydirilmiş Brüt Ücret: ${formatCurrency(result.giydirilmisBrut, 'tr', 'TRY')}`,
      `Uygulanan Kıdem Tavanı: ${formatCurrency(result.tavanApplied, 'tr', 'TRY')}`,
      `Tavan Aşıldı mı?: ${result.isCapApplied ? 'Evet (Tavan uygulandı)' : 'Hayır'}`,
      `Hak Ediş Durumu: ${result.eligible ? 'HAK KAZANDI' : 'HAK KAZANAMADI'}`,
      `Brüt Kıdem Tazminatı: ${formatCurrency(result.grossSeverance, 'tr', 'TRY')}`,
      `Damga Vergisi (%0.759): ${formatCurrency(result.damgaVergisi, 'tr', 'TRY')}`,
      `Net Kıdem Tazminatı: ${formatCurrency(result.netSeverance, 'tr', 'TRY')}`,
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
            <Calculator className="h-6 w-6 text-emerald-600" />
            Kıdem Tazminatı Hesaplama Aracı (2026)
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            4857 ve 1475 sayılı İş Kanunu uyarınca 2026 güncel tavanı ({formatCurrency(KIDEM_TAZMINATI_TAVANI_2026_H1.current, 'tr', 'TRY')}) ile net kıdem tazminatınızı hesaplayın.
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="kidem-start-date" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                İşe Giriş Tarihi
              </label>
              <div className="relative mt-1.5">
                <input
                  id="kidem-start-date"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
            </div>

            <div>
              <label htmlFor="kidem-end-date" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                İşten Çıkış / Fesih Tarihi
              </label>
              <div className="relative mt-1.5">
                <input
                  id="kidem-end-date"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="kidem-gross-salary" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Son Aylık Brüt Maaş (₺)
            </label>
            <div className="relative mt-1.5">
              <input
                id="kidem-gross-salary"
                type="text"
                inputMode="decimal"
                value={rawGrossSalary}
                onChange={(e) => setRawGrossSalary(e.target.value)}
                placeholder="Örn: 45000"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                TL / Ay
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Bordronuzdaki çıplak brüt maaş tutarı.
            </p>
          </div>

          <div>
            <label htmlFor="kidem-bonuses" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Aylık Düzenli Yan Haklar & Ek Ödemeler (₺)
            </label>
            <div className="relative mt-1.5">
              <input
                id="kidem-bonuses"
                type="text"
                inputMode="decimal"
                value={rawBonuses}
                onChange={(e) => setRawBonuses(e.target.value)}
                placeholder="Örn: 5000"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                TL / Ay
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Yol, yemek, ikramiye (aylık ortalaması), yakacak vb. giydirilmiş brüte dahil edilecek nakdi veya ayni ödemeler.
            </p>
          </div>

          <div>
            <label htmlFor="kidem-reason" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              İşten Ayrılma / Fesih Nedeni
            </label>
            <div className="relative mt-1.5">
              <select
                id="kidem-reason"
                value={reason}
                onChange={(e) => setReason(e.target.value as KidemReason)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              >
                {REASON_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              {REASON_OPTIONS.find((o) => o.id === reason)?.desc}
            </p>
          </div>

          {/* DURATION BADGES */}
          <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              <Calendar className="h-4 w-4 text-slate-500" />
              Hesaplanan Hizmet Süresi
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white border border-slate-200 font-semibold text-slate-800">
                {result.serviceYears} Yıl
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white border border-slate-200 font-semibold text-slate-800">
                {result.serviceMonths} Ay
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white border border-slate-200 font-semibold text-slate-800">
                {result.serviceDays} Gün
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-medium ml-auto">
                Toplam: {result.totalDays} Gün
              </span>
            </div>
          </div>
        </div>

        {/* RESULTS COLUMN */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          {/* ELIGIBILITY BANNER */}
          {result.eligible ? (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
              <div className="text-sm">
                <p className="font-semibold text-emerald-950">
                  Kıdem Tazminatına Hak Kazanıldı
                </p>
                <p className="text-xs text-emerald-800 mt-0.5">
                  1475 sayılı Kanun m.14 şartları (en az 1 yıl hizmet ve hak kazandıran fesih sebebi) sağlanmıştır.
                </p>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-4 flex items-start gap-3">
              <ShieldAlert className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
              <div className="text-sm">
                <p className="font-semibold text-amber-950">
                  Kıdem Tazminatına Hak Kazanılamadı
                </p>
                <p className="text-xs text-amber-800 mt-0.5">
                  {result.ineligibilityReason}
                </p>
              </div>
            </div>
          )}

          {/* CAP WARNING */}
          {result.isCapApplied && result.eligible && (
            <div className="rounded-xl border border-sky-200 bg-sky-50/70 p-3.5 flex items-start gap-2.5 text-xs text-sky-900">
              <AlertTriangle className="h-4 w-4 text-sky-600 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold">Kıdem Tavanı Uygulandı: </span>
                Giydirilmiş brüt ücretiniz ({formatCurrency(result.giydirilmisBrut, 'tr', 'TRY')}), fesih tarihindeki yasal tavanı ({formatCurrency(result.tavanApplied, 'tr', 'TRY')}) aştığından hesaplama tavan tutar üzerinden sınırlandırılmıştır.
              </div>
            </div>
          )}

          {/* MAIN RESULT CARD */}
          <div className="rounded-2xl border-2 border-emerald-600/30 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/30 p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
              Ödenecek Net Kıdem Tazminatı
            </div>
            <div className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              {formatCurrency(result.netSeverance, 'tr', 'TRY')}
            </div>

            <div className="mt-6 space-y-2.5 border-t border-slate-200/80 pt-4 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Giydirilmiş Brüt Ücret:</span>
                <span className="font-semibold text-slate-900">
                  {formatCurrency(result.giydirilmisBrut, 'tr', 'TRY')}
                </span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Hesaba Esas Ücret:</span>
                <span className="font-semibold text-slate-900">
                  {formatCurrency(result.cappedWage, 'tr', 'TRY')}
                </span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Brüt Kıdem Tazminatı:</span>
                <span className="font-semibold text-slate-900">
                  {formatCurrency(result.grossSeverance, 'tr', 'TRY')}
                </span>
              </div>
              <div className="flex justify-between text-rose-700">
                <span className="flex items-center gap-1">
                  Damga Vergisi Kesintisi (binde 7,59):
                </span>
                <span className="font-semibold">
                  - {formatCurrency(result.damgaVergisi, 'tr', 'TRY')}
                </span>
              </div>
              <div className="flex justify-between text-emerald-700 text-xs">
                <span>Gelir Vergisi & SGK Kesintisi:</span>
                <span className="font-semibold">0,00 ₺ (Muaf)</span>
              </div>
            </div>
          </div>

          {/* LEGAL NOTICE */}
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5 text-xs text-slate-600 flex items-start gap-2">
            <Info className="h-4 w-4 text-slate-400 mt-0.5 shrink-0" />
            <div>
              <strong>Yasal Dayanak:</strong> 1475 sayılı İş Kanunu Madde 14 ve 193 sayılı Gelir Vergisi Kanunu Madde 25/1 gereğince, kıdem tazminatından Gelir Vergisi ve SGK primi kesilmez. Yalnızca 488 sayılı Kanun uyarınca binde 7,59 oranında Damga Vergisi kesilir.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
