'use client';

import React, { useState } from 'react';
import {
  calculateGrossToNet,
  GrossToNetYearResult,
} from '@/lib/salary/tr';
import { ASGARI_UCRET_2026 } from '@/rules/tr/salary-2026';
import { formatCurrency, parseLocaleNumber } from '@/lib/formatters';
import {
  Calculator,
  TrendingDown,
  Building,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Info,
  DollarSign,
} from 'lucide-react';

export function BruttenNeteMaasTool() {
  const [rawSalary, setRawSalary] = useState<string>('50000');
  const [use5PointIncentive, setUse5PointIncentive] = useState<boolean>(true);
  const [isVaryingMonths, setIsVaryingMonths] = useState<boolean>(false);
  const [monthlySalaries, setMonthlySalaries] = useState<string[]>(Array(12).fill('50000'));
  const [showFullTable, setShowFullTable] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const parsedSingle = parseLocaleNumber(rawSalary);
  const grossInput = isVaryingMonths
    ? monthlySalaries.map((s) => parseLocaleNumber(s))
    : parsedSingle;

  const result: GrossToNetYearResult = calculateGrossToNet({
    grossSalary: grossInput,
    use5PointIncentive,
  });

  const handleMonthlySalaryChange = (index: number, val: string) => {
    const updated = [...monthlySalaries];
    updated[index] = val;
    setMonthlySalaries(updated);
  };

  const handleCopy = async () => {
    const text = [
      `--- 2026 BRÜTTEN NETE MAAŞ HESAPLAMA ---`,
      `Yıllık Toplam Brüt: ${formatCurrency(result.totals.gross, 'tr', 'TRY')}`,
      `Yıllık Net Ele Geçen: ${formatCurrency(result.totals.netSalary, 'tr', 'TRY')}`,
      `Aylık Ortalama Net: ${formatCurrency(result.averages.monthlyNet, 'tr', 'TRY')}`,
      `Yıllık SGK İşçi Payı (%14): ${formatCurrency(result.totals.sgkIsci, 'tr', 'TRY')}`,
      `Yıllık İşsizlik İşçi (%1): ${formatCurrency(result.totals.issizlikIsci, 'tr', 'TRY')}`,
      `Yıllık Gelir Vergisi (Net): ${formatCurrency(result.totals.netIncomeTax, 'tr', 'TRY')}`,
      `Yıllık Damga Vergisi (Net): ${formatCurrency(result.totals.netDamgaVergisi, 'tr', 'TRY')}`,
      `Yıllık Asgari Ücret Vergi İstisnası: ${formatCurrency(result.totals.asgariUcretGvIstisnasi, 'tr', 'TRY')}`,
      `Yıllık İşveren Toplam Maliyeti: ${formatCurrency(result.totals.totalEmployerCost, 'tr', 'TRY')}`,
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
            <Calculator className="h-6 w-6 text-blue-600" />
            Brütten Nete Maaş Hesaplama (2026)
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            2026 GİB vergi dilimleri, 7349 sayılı Kanun asgari ücret istisnası ve SGK tavanı ile 12 aylık bordro simülasyonu.
          </p>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 self-start rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4 text-slate-500" />}
          {copied ? 'Kopyalandı' : 'Özeti Kopyala'}
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* INPUTS */}
        <div className="lg:col-span-5 space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="brut-salary-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Aylık Brüt Maaş (₺)
              </label>
              <button
                type="button"
                onClick={() => {
                  setRawSalary('26005.50');
                  setIsVaryingMonths(false);
                }}
                className="text-xs font-medium text-blue-600 hover:underline"
              >
                Asgari Ücret (26.005,50 ₺)
              </button>
            </div>
            {!isVaryingMonths ? (
              <div className="relative mt-1.5">
                <input
                  id="brut-salary-input"
                  type="text"
                  inputMode="decimal"
                  value={rawSalary}
                  onChange={(e) => setRawSalary(e.target.value)}
                  placeholder="Örn: 50000"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                  TL / Ay
                </span>
              </div>
            ) : (
              <p className="mt-1 text-xs text-slate-500 italic">
                Aşağıdaki 12 aylık tablodan her ayı ayrı ayrı düzenleyebilirsiniz.
              </p>
            )}
          </div>

          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2">
              <input
                id="varying-toggle"
                type="checkbox"
                checked={isVaryingMonths}
                onChange={(e) => setIsVaryingMonths(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="varying-toggle" className="text-xs font-medium text-slate-700 cursor-pointer">
                Her ay için farklı brüt maaş gir (Prim, zam vb.)
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                id="incentive-toggle"
                type="checkbox"
                checked={use5PointIncentive}
                onChange={(e) => setUse5PointIncentive(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="incentive-toggle" className="text-xs font-medium text-slate-700 cursor-pointer">
                SGK 5 Puanlık Hazine Teşviki Uygula (%15,5 vs %20,5)
              </label>
            </div>
          </div>

          {/* QUICK SUMMARY CARD */}
          <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-800">
              Ocak Ayı (1. Ay) Net Maaş
            </span>
            <div className="text-3xl font-extrabold text-slate-900">
              {formatCurrency(result.months[0].netSalary, 'tr', 'TRY')}
            </div>

            <div className="space-y-1.5 border-t border-blue-200/50 pt-3 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>SGK İşçi (%14) + İşsizlik (%1):</span>
                <span className="font-semibold text-slate-800">
                  {formatCurrency(result.months[0].sgkIsci + result.months[0].issizlikIsci, 'tr', 'TRY')}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Ödenecek Gelir Vergisi (Net):</span>
                <span className="font-semibold text-slate-800">
                  {formatCurrency(result.months[0].netIncomeTax, 'tr', 'TRY')}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Asgari Ücret Vergi İstisnası:</span>
                <span className="font-semibold text-emerald-700">
                  - {formatCurrency(result.months[0].asgariUcretGvIstisnasi, 'tr', 'TRY')}
                </span>
              </div>
              <div className="flex justify-between">
                <span>İşverene Toplam Maliyet:</span>
                <span className="font-semibold text-slate-900">
                  {formatCurrency(result.months[0].totalEmployerCost, 'tr', 'TRY')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ANNUAL TOTALS TILES */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
              Yıllık Toplam Net Maaş
            </span>
            <span className="text-xl font-bold text-slate-900 mt-1 block">
              {formatCurrency(result.totals.netSalary, 'tr', 'TRY')}
            </span>
            <span className="text-xs text-slate-500 mt-0.5 block">
              Aylık Ort: {formatCurrency(result.averages.monthlyNet, 'tr', 'TRY')}
            </span>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
              Yıllık İşveren Toplam Maliyeti
            </span>
            <span className="text-xl font-bold text-slate-900 mt-1 block">
              {formatCurrency(result.totals.totalEmployerCost, 'tr', 'TRY')}
            </span>
            <span className="text-xs text-slate-500 mt-0.5 block">
              Aylık Ort: {formatCurrency(result.averages.monthlyEmployerCost, 'tr', 'TRY')}
            </span>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
              Yıllık Toplam SGK & İşsizlik
            </span>
            <span className="text-xl font-bold text-slate-900 mt-1 block">
              {formatCurrency(result.totals.sgkIsci + result.totals.issizlikIsci, 'tr', 'TRY')}
            </span>
            <span className="text-xs text-slate-500 mt-0.5 block">
              İşçi primi toplamı
            </span>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
              Yıllık Toplam Gelir Vergisi
            </span>
            <span className="text-xl font-bold text-rose-700 mt-1 block">
              {formatCurrency(result.totals.netIncomeTax, 'tr', 'TRY')}
            </span>
            <span className="text-xs text-emerald-700 mt-0.5 block">
              İstisna: {formatCurrency(result.totals.asgariUcretGvIstisnasi, 'tr', 'TRY')}
            </span>
          </div>
        </div>
      </div>

      {/* 12-MONTH DETAILED PAYROLL TABLE */}
      <div className="mt-8 border-t border-slate-100 pt-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-slate-900">
            12 Aylık Maaş ve Kesinti Bordro Tablosu (2026)
          </h3>
          <button
            type="button"
            onClick={() => setShowFullTable(!showFullTable)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800"
          >
            {showFullTable ? 'Tabloyu Gizle' : 'Tabloyu Göster'}
            {showFullTable ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>

        {showFullTable && (
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-700 border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3">Ay</th>
                  <th className="py-2.5 px-3">Brüt Maaş</th>
                  <th className="py-2.5 px-3">SGK (%14+1)</th>
                  <th className="py-2.5 px-3">Küm. Matrah</th>
                  <th className="py-2.5 px-3">Hesaplanan GV</th>
                  <th className="py-2.5 px-3 text-emerald-700">GV İstisnası</th>
                  <th className="py-2.5 px-3 text-rose-700">Ödenecek GV</th>
                  <th className="py-2.5 px-3">Damga V.</th>
                  <th className="py-2.5 px-3 font-bold text-slate-900">Net Maaş</th>
                  <th className="py-2.5 px-3 text-slate-600">İşveren Maliyeti</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
                {result.months.map((m, idx) => (
                  <tr key={m.month} className="hover:bg-slate-50/70">
                    <td className="py-2 px-3 font-sans font-semibold text-slate-900">
                      {m.monthName}
                    </td>
                    <td className="py-2 px-3">
                      {isVaryingMonths ? (
                        <input
                          type="text"
                          inputMode="decimal"
                          value={monthlySalaries[idx]}
                          onChange={(e) => handleMonthlySalaryChange(idx, e.target.value)}
                          className="w-20 rounded border border-slate-200 px-1.5 py-0.5 text-xs text-slate-900 font-mono"
                        />
                      ) : (
                        formatCurrency(m.gross, 'tr', 'TRY')
                      )}
                    </td>
                    <td className="py-2 px-3 text-slate-700">
                      {formatCurrency(m.sgkIsci + m.issizlikIsci, 'tr', 'TRY')}
                    </td>
                    <td className="py-2 px-3 text-slate-500">
                      {formatCurrency(m.cumulativeMatrahAfter, 'tr', 'TRY')}
                    </td>
                    <td className="py-2 px-3 text-slate-700">
                      {formatCurrency(m.grossIncomeTax, 'tr', 'TRY')}
                    </td>
                    <td className="py-2 px-3 text-emerald-700">
                      {formatCurrency(m.asgariUcretGvIstisnasi, 'tr', 'TRY')}
                    </td>
                    <td className="py-2 px-3 font-semibold text-rose-700">
                      {formatCurrency(m.netIncomeTax, 'tr', 'TRY')}
                    </td>
                    <td className="py-2 px-3 text-slate-700">
                      {formatCurrency(m.netDamgaVergisi, 'tr', 'TRY')}
                    </td>
                    <td className="py-2 px-3 font-sans font-bold text-emerald-700 bg-emerald-50/30">
                      {formatCurrency(m.netSalary, 'tr', 'TRY')}
                    </td>
                    <td className="py-2 px-3 text-slate-600">
                      {formatCurrency(m.totalEmployerCost, 'tr', 'TRY')}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-slate-100 font-sans font-bold text-xs text-slate-900 border-t-2 border-slate-300">
                <tr>
                  <td className="py-2.5 px-3">Yıllık Toplam</td>
                  <td className="py-2.5 px-3">{formatCurrency(result.totals.gross, 'tr', 'TRY')}</td>
                  <td className="py-2.5 px-3">{formatCurrency(result.totals.sgkIsci + result.totals.issizlikIsci, 'tr', 'TRY')}</td>
                  <td className="py-2.5 px-3">-</td>
                  <td className="py-2.5 px-3">{formatCurrency(result.totals.grossIncomeTax, 'tr', 'TRY')}</td>
                  <td className="py-2.5 px-3 text-emerald-700">{formatCurrency(result.totals.asgariUcretGvIstisnasi, 'tr', 'TRY')}</td>
                  <td className="py-2.5 px-3 text-rose-700">{formatCurrency(result.totals.netIncomeTax, 'tr', 'TRY')}</td>
                  <td className="py-2.5 px-3">{formatCurrency(result.totals.netDamgaVergisi, 'tr', 'TRY')}</td>
                  <td className="py-2.5 px-3 text-emerald-800">{formatCurrency(result.totals.netSalary, 'tr', 'TRY')}</td>
                  <td className="py-2.5 px-3">{formatCurrency(result.totals.totalEmployerCost, 'tr', 'TRY')}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
