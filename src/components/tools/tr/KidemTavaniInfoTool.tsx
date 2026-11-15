'use client';

import React, { useState } from 'react';
import {
  KIDEM_TAZMINATI_TAVANI_2026_H1,
  KIDEM_TAZMINATI_TAVANI_HISTORY,
  KidemTavaniRecord,
} from '@/rules/tr/salary-2026';
import { formatCurrency, parseLocaleNumber } from '@/lib/formatters';
import {
  Scale,
  Search,
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  TrendingUp,
  FileText,
} from 'lucide-react';

export function KidemTavaniInfoTool() {
  const [testWage, setTestWage] = useState<string>('75000');
  const [searchYear, setSearchYear] = useState<string>('');

  const parsedWage = parseLocaleNumber(testWage);
  const currentTavan = KIDEM_TAZMINATI_TAVANI_2026_H1.current;
  const isCapExceeded = parsedWage > currentTavan;

  const filteredList = KIDEM_TAZMINATI_TAVANI_HISTORY.filter(
    (item) =>
      item.year.toString().includes(searchYear) ||
      item.period.toLowerCase().includes(searchYear.toLowerCase()),
  );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 space-y-8">
      {/* HEADER */}
      <div className="border-b border-slate-100 pb-5">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Scale className="h-6 w-6 text-emerald-600" />
          Kıdem Tazminatı Tavanı (2026 Güncel & 2018–2026 Geçmiş Tablosu)
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Hazine ve Maliye Bakanlığı Genelgesi ile belirlenen 2026 1. Yarıyıl resmi kıdem tazminatı tavanı ve tarihsel değişim serisi.
        </p>
      </div>

      {/* 2026 HERO CARD & INTERACTIVE CHECKER */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* CURRENT TAVAN HERO */}
        <div className="lg:col-span-6 rounded-2xl border-2 border-emerald-600/30 bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/30 p-6 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold">
              Yürürlük: 01.01.2026 – 30.06.2026
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block mt-3">
              2026 1. Yarıyıl Kıdem Tazminatı Tavanı
            </span>
            <span className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 block">
              {formatCurrency(currentTavan, 'tr', 'TRY')}
            </span>
            <p className="text-xs text-slate-600 mt-3 leading-relaxed">
              İş sözleşmesi sona eren işçiye, her bir tam çalışma yılı için ödenebilecek azami brüt kıdem tazminatı tutarıdır. Giydirilmiş brüt ücretiniz bu tutarın üzerinde olsa dahi hesaplama tavan tutardan yapılır.
            </p>
          </div>

          <div className="mt-6 border-t border-slate-200/60 pt-3 text-xs text-slate-500">
            <strong>Resmi Dayanak:</strong> Hazine ve Maliye Bakanlığı Kamu Mali Yönetim ve Dönüşüm Genel Müdürlüğü Genelgesi
          </div>
        </div>

        {/* INTERACTIVE WAGE TESTER */}
        <div className="lg:col-span-6 rounded-2xl border border-slate-200 bg-slate-50/60 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-2">
              <HelpCircle className="h-4 w-4 text-slate-600" />
              Maaşınız Kıdem Tavanını Aşıyor mu? Canlı Test Edin
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              Aylık brüt maaşınızı (yol, yemek ve ikramiyeler dahil giydirilmiş brüt tutarı) yazarak tavan kontrolü yapın.
            </p>

            <div>
              <label htmlFor="tavan-test-wage" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Giydirilmiş Brüt Maaşınız (₺)
              </label>
              <div className="relative mt-1.5">
                <input
                  id="tavan-test-wage"
                  type="text"
                  inputMode="decimal"
                  value={testWage}
                  onChange={(e) => setTestWage(e.target.value)}
                  placeholder="Örn: 75000"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                  TL / Ay
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            {isCapExceeded ? (
              <div className="rounded-xl border border-sky-200 bg-sky-50 p-4 text-xs text-sky-950 flex items-start gap-2.5">
                <AlertTriangle className="h-5 w-5 text-sky-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-sm block">Tavan Aşılıyor!</span>
                  Brüt maaşınız ({formatCurrency(parsedWage, 'tr', 'TRY')}), 2026 1. Yarıyıl tavanı olan {formatCurrency(currentTavan, 'tr', 'TRY')} tutarını aşıyor. Kıdem tazminatınız <strong>yıllık azami {formatCurrency(currentTavan, 'tr', 'TRY')}</strong> üzerinden hesaplanacaktır.
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-xs text-emerald-950 flex items-start gap-2.5">
                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-sm block">Tavan Aşılmıyor.</span>
                  Brüt maaşınız ({formatCurrency(parsedWage, 'tr', 'TRY')}) yasal tavanın altındadır. Kıdem tazminatınız kendi brüt maaşınız üzerinden tam olarak hesaplanacaktır.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* HOW TAVAN IS CALCULATED EXPLANATION */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
          <FileText className="h-4 w-4 text-slate-600" />
          Kıdem Tazminatı Tavanı Nasıl Belirlenir?
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          1475 sayılı İş Kanunu&apos;nun 14. maddesinin 13. fıkrasına göre; toplu iş sözleşmeleri veya bireysel hizmet akitleri ile belirlenen kıdem tazminatlarının yıllık miktarı, <strong>Devlet Memurları Kanunu&apos;na tabi en yüksek Devlet memuruna</strong> (Cumhurbaşkanlığı İdari İşler Başkanı) bir hizmet yılı için ödenecek azami emeklilik ikramiyesi tutarını aşamaz. Memur maaş katsayılarındaki her 6 aylık artış (Ocak ve Temmuz aylarında) kıdem tazminatı tavanını da doğrudan günceller.
        </p>
      </div>

      {/* HISTORICAL TABLE 2018-2026 */}
      <div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-slate-700" />
            Geçmiş Yıllara Göre Kıdem Tazminatı Tavanı (2018–2026)
          </h3>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchYear}
              onChange={(e) => setSearchYear(e.target.value)}
              placeholder="Yıl veya dönem ara..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-9 pr-3 py-1.5 text-xs text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none"
            />
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-700 border-b border-slate-200">
              <tr>
                <th className="py-2.5 px-4 font-semibold">Yıl</th>
                <th className="py-2.5 px-4 font-semibold">Dönem</th>
                <th className="py-2.5 px-4 font-semibold text-emerald-800">Kıdem Tazminatı Tavanı (₺)</th>
                <th className="py-2.5 px-4 font-semibold text-slate-500">Maliye Genelge Dayanağı</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
              {filteredList.map((row) => (
                <tr key={`${row.year}-${row.period}`} className="hover:bg-slate-50/70">
                  <td className="py-2.5 px-4 font-sans font-bold text-slate-900">{row.year}</td>
                  <td className="py-2.5 px-4 font-sans text-slate-700">{row.period}</td>
                  <td className="py-2.5 px-4 font-bold text-emerald-700 bg-emerald-50/20">
                    {formatCurrency(row.tavan, 'tr', 'TRY')}
                  </td>
                  <td className="py-2.5 px-4 font-sans text-slate-500 text-[10px]">
                    {row.circularNo || 'Maliye Bakanlığı Genelgesi'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
