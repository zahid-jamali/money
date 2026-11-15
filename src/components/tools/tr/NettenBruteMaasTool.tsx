'use client';

import React, { useState } from 'react';
import {
  calculateNetToGross,
  NetToGrossResult,
} from '@/lib/salary/tr';
import { formatCurrency, parseLocaleNumber } from '@/lib/formatters';
import {
  Calculator,
  ArrowRightLeft,
  Copy,
  Check,
  TrendingUp,
  Info,
} from 'lucide-react';

const MONTH_NAMES = [
  '1. Ay (Ocak)',
  '2. Ay (Şubat)',
  '3. Ay (Mart)',
  '4. Ay (Nisan)',
  '5. Ay (Mayıs)',
  '6. Ay (Haziran)',
  '7. Ay (Temmuz)',
  '8. Ay (Ağustos)',
  '9. Ay (Eylül)',
  '10. Ay (Ekim)',
  '11. Ay (Kasım)',
  '12. Ay (Aralık)',
];

export function NettenBruteMaasTool() {
  const [rawTargetNet, setRawTargetNet] = useState<string>('35000');
  const [targetMonth, setTargetMonth] = useState<number>(1);
  const [use5PointIncentive, setUse5PointIncentive] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const parsedNet = parseLocaleNumber(rawTargetNet);

  const result: NetToGrossResult = calculateNetToGross({
    targetNetSalary: parsedNet,
    month: targetMonth,
    use5PointIncentive,
  });

  // Calculate year table (all 12 months for this fixed net salary)
  const yearlySim = Array.from({ length: 12 }, (_, i) =>
    calculateNetToGross({
      targetNetSalary: parsedNet,
      month: i + 1,
      use5PointIncentive,
    }),
  );

  const handleCopy = async () => {
    const text = [
      `--- NETTEN BRÜTE MAAŞ HESAPLAMA SONUCU (2026) ---`,
      `Hedef Net Maaş: ${formatCurrency(parsedNet, 'tr', 'TRY')}`,
      `Hesaplanan Ay: ${MONTH_NAMES[targetMonth - 1]}`,
      `Gereken Brüt Maaş: ${formatCurrency(result.requiredGrossSalary, 'tr', 'TRY')}`,
      `SGK İşçi Primi (%14): ${formatCurrency(result.sgkIsci, 'tr', 'TRY')}`,
      `İşsizlik İşçi Primi (%1): ${formatCurrency(result.issizlikIsci, 'tr', 'TRY')}`,
      `Ödenecek Gelir Vergisi: ${formatCurrency(result.netIncomeTax, 'tr', 'TRY')}`,
      `Ödenecek Damga Vergisi: ${formatCurrency(result.netDamgaVergisi, 'tr', 'TRY')}`,
      `İşverene Toplam Maliyet: ${formatCurrency(result.totalEmployerCost, 'tr', 'TRY')}`,
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
            <ArrowRightLeft className="h-6 w-6 text-purple-600" />
            Netten Brüte Maaş Hesaplama (2026)
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Elinize geçmesini istediğiniz net maaş için işverenin bordroda göstermesi gereken brüt maaşı ve toplam maliyeti hesaplayın.
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
        {/* INPUTS */}
        <div className="lg:col-span-5 space-y-4">
          <div>
            <label htmlFor="target-net-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Hedef Net Maaş Tutarı (₺)
            </label>
            <div className="relative mt-1.5">
              <input
                id="target-net-input"
                type="text"
                inputMode="decimal"
                value={rawTargetNet}
                onChange={(e) => setRawTargetNet(e.target.value)}
                placeholder="Örn: 35000"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                TL / Ay (Net)
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Banka hesabınıza yatması hedeflenen net tutar.
            </p>
          </div>

          <div>
            <label htmlFor="target-month-select" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Hesaplanacak Bordro Ayı
            </label>
            <select
              id="target-month-select"
              value={targetMonth}
              onChange={(e) => setTargetMonth(parseInt(e.target.value, 10))}
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-purple-500 focus:bg-white focus:outline-none"
            >
              {MONTH_NAMES.map((m, idx) => (
                <option key={m} value={idx + 1}>
                  {m}
                </option>
              ))}
            </select>
            <p className="mt-1 text-xs text-slate-500">
              Vergi dilimleri kümülatif matraha göre arttığı için, sabit net maaş sözleşmelerinde yılın son aylarında gereken brüt maaş yükselir.
            </p>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <input
              id="net-incentive-toggle"
              type="checkbox"
              checked={use5PointIncentive}
              onChange={(e) => setUse5PointIncentive(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500"
            />
            <label htmlFor="net-incentive-toggle" className="text-xs font-medium text-slate-700 cursor-pointer">
              SGK 5 puanlık işveren teşviki dahil (%15,5)
            </label>
          </div>

          <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5 text-xs text-slate-600 flex items-start gap-2">
            <Info className="h-4 w-4 text-slate-400 mt-0.5 shrink-0" />
            <div>
              <strong>Net Ücret Anlaşması Uyarısı:</strong> İşveren ile &quot;Net Maaş&quot; üzerinden sözleşme yapıldığında, vergi dilimlerinden doğan ilave vergi maliyetlerini işveren üstlenir ve bordronuzdaki brüt tutar aydan aya artış gösterir.
            </div>
          </div>
        </div>

        {/* RESULTS HERO */}
        <div className="lg:col-span-7 space-y-4">
          <div className="rounded-2xl border-2 border-purple-600/30 bg-gradient-to-br from-purple-50/50 via-white to-pink-50/30 p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-800">
              Gereken Aylık Brüt Maaş ({MONTH_NAMES[targetMonth - 1]})
            </div>
            <div className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              {formatCurrency(result.requiredGrossSalary, 'tr', 'TRY')}
            </div>

            <div className="mt-6 space-y-2.5 border-t border-slate-200/80 pt-4 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>SGK İşçi Primi (%14):</span>
                <span className="font-semibold text-slate-800">
                  {formatCurrency(result.sgkIsci, 'tr', 'TRY')}
                </span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>İşsizlik Sigortası Primi (%1):</span>
                <span className="font-semibold text-slate-800">
                  {formatCurrency(result.issizlikIsci, 'tr', 'TRY')}
                </span>
              </div>
              <div className="flex justify-between text-rose-700">
                <span>Ödenecek Gelir Vergisi (Net):</span>
                <span className="font-semibold">
                  {formatCurrency(result.netIncomeTax, 'tr', 'TRY')}
                </span>
              </div>
              <div className="flex justify-between text-rose-700">
                <span>Ödenecek Damga Vergisi (Net):</span>
                <span className="font-semibold">
                  {formatCurrency(result.netDamgaVergisi, 'tr', 'TRY')}
                </span>
              </div>
              <div className="flex justify-between text-slate-900 font-bold border-t border-slate-100 pt-2 text-base">
                <span>İşverene Toplam Maliyet:</span>
                <span className="text-purple-700">
                  {formatCurrency(result.totalEmployerCost, 'tr', 'TRY')}
                </span>
              </div>
            </div>
          </div>

          {/* 12-MONTH REQUIRED GROSS PROGRESSION */}
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-900">
              <span className="flex items-center gap-1.5">
                <TrendingUp className="h-4 w-4 text-purple-600" />
                Sabit {formatCurrency(parsedNet, 'tr', 'TRY')} Net İçin 12 Aylık Brüt Değişimi
              </span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 text-center text-xs">
              {yearlySim.map((item, idx) => (
                <div key={idx} className="rounded-lg bg-slate-50 border border-slate-100 p-2">
                  <span className="text-[10px] text-slate-500 block">{MONTH_NAMES[idx].split(' ')[0]}</span>
                  <span className="font-bold text-slate-800 text-[11px] block mt-0.5">
                    {formatCurrency(item.requiredGrossSalary, 'tr', 'TRY')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
