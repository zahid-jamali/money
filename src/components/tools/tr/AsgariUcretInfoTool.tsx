'use client';

import React, { useState } from 'react';
import {
  ASGARI_UCRET_2026,
  ASGARI_UCRET_HISTORY,
  AsgariUcretRecord,
} from '@/rules/tr/salary-2026';
import { formatCurrency } from '@/lib/formatters';
import {
  Coins,
  Search,
  CheckCircle2,
  Building,
  TrendingUp,
  FileCheck,
  ShieldCheck,
} from 'lucide-react';

export function AsgariUcretInfoTool() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredHistory = ASGARI_UCRET_HISTORY.filter(
    (item) =>
      item.year.toString().includes(searchQuery) ||
      item.period.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 space-y-8">
      {/* HEADER */}
      <div className="border-b border-slate-100 pb-5">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Coins className="h-6 w-6 text-amber-600" />
          2026 Asgari Ücret Tablosu & Geçmiş Veriler (2018–2026)
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Resmî Gazete&apos;de yayımlanan Asgari Ücret Tespit Komisyonu Kararı doğrultusunda 2026 yılı net, brüt ve işveren maliyetleri dökümü.
        </p>
      </div>

      {/* 2026 CURRENT MINIMUM WAGE OVERVIEW CARDS */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50/70 to-yellow-50/30 p-5 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">
            Net Asgari Ücret (2026)
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 block">
            {formatCurrency(ASGARI_UCRET_2026.net, 'tr', 'TRY')}
          </span>
          <span className="text-xs text-amber-800 mt-1 block">
            Çalışanın eline geçen net tutar
          </span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
            Brüt Asgari Ücret
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 block">
            {formatCurrency(ASGARI_UCRET_2026.gross, 'tr', 'TRY')}
          </span>
          <span className="text-xs text-slate-500 mt-1 block">
            Bordroya esas yasal brüt tutar
          </span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
            İşveren Maliyeti (Teşvikli)
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700 mt-2 block">
            {formatCurrency(ASGARI_UCRET_2026.totalIsverenIncentive, 'tr', 'TRY')}
          </span>
          <span className="text-xs text-emerald-800 mt-1 block">
            5 puanlık SGK teşviki dahil
          </span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
            İşveren Maliyeti (Standart)
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-slate-800 mt-2 block">
            {formatCurrency(ASGARI_UCRET_2026.totalIsverenStandard, 'tr', 'TRY')}
          </span>
          <span className="text-xs text-slate-500 mt-1 block">
            Teşviksiz genel işveren maliyeti
          </span>
        </div>
      </div>

      {/* DETAILED COST & DEDUCTION BREAKDOWN */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
        <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
          <FileCheck className="h-4 w-4 text-slate-600" />
          2026 Asgari Ücret Bordro Kesintileri ve Yasal Paylar
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 text-sm">
          {/* Worker deductions */}
          <div className="space-y-3 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <h4 className="font-semibold text-slate-900 border-b border-slate-100 pb-2">
              İşçi Kesintileri
            </h4>
            <div className="flex justify-between text-slate-600">
              <span>SGK Primi İşçi Payı (%14):</span>
              <span className="font-semibold text-slate-900">
                {formatCurrency(ASGARI_UCRET_2026.sgkIsci, 'tr', 'TRY')}
              </span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>İşsizlik Sigortası İşçi Payı (%1):</span>
              <span className="font-semibold text-slate-900">
                {formatCurrency(ASGARI_UCRET_2026.issizlikIsci, 'tr', 'TRY')}
              </span>
            </div>
            <div className="flex justify-between text-emerald-700">
              <span>Gelir Vergisi (7349 s.K. İstisnası):</span>
              <span className="font-semibold">0,00 ₺ (%100 Muaf)</span>
            </div>
            <div className="flex justify-between text-emerald-700">
              <span>Damga Vergisi (İstisna):</span>
              <span className="font-semibold">0,00 ₺ (%100 Muaf)</span>
            </div>
            <div className="flex justify-between font-bold text-slate-900 border-t border-slate-100 pt-2 text-base">
              <span>Net Ele Geçen Asgari Ücret:</span>
              <span className="text-amber-700">{formatCurrency(ASGARI_UCRET_2026.net, 'tr', 'TRY')}</span>
            </div>
          </div>

          {/* Employer contributions */}
          <div className="space-y-3 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <h4 className="font-semibold text-slate-900 border-b border-slate-100 pb-2">
              İşveren Katkı Payları ve Maliyet
            </h4>
            <div className="flex justify-between text-slate-600">
              <span>SGK İşveren Payı (%15,5 Teşvikli):</span>
              <span className="font-semibold text-slate-900">
                {formatCurrency(ASGARI_UCRET_2026.sgkIsverenIncentive, 'tr', 'TRY')}
              </span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>SGK İşveren Payı (%20,5 Standart):</span>
              <span className="font-semibold text-slate-900">
                {formatCurrency(ASGARI_UCRET_2026.sgkIsverenStandard, 'tr', 'TRY')}
              </span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>İşsizlik Sigortası İşveren Payı (%2):</span>
              <span className="font-semibold text-slate-900">
                {formatCurrency(ASGARI_UCRET_2026.issizlikIsveren, 'tr', 'TRY')}
              </span>
            </div>
            <div className="flex justify-between font-bold text-slate-900 border-t border-slate-100 pt-2 text-base">
              <span>İşveren Toplam Maliyeti (Teşvikli):</span>
              <span className="text-emerald-700">{formatCurrency(ASGARI_UCRET_2026.totalIsverenIncentive, 'tr', 'TRY')}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/80 p-3.5 text-xs text-emerald-950 flex items-start gap-2.5">
          <ShieldCheck className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
          <div>
            <strong>7349 Sayılı Kanun Uyarınca Vergi Muafiyeti:</strong> 1 Ocak 2022 tarihinden itibaren asgari ücret tutarından Gelir Vergisi ve Damga Vergisi tamamen kaldırılmıştır. Asgari ücretten yüksek maaş alan tüm çalışanlar için de her ay asgari ücretin vergi matrahı tutarı kadar Gelir Vergisi ve Damga Vergisi istisnası uygulanmaktadır.
          </div>
        </div>
      </div>

      {/* HISTORICAL TABLE 2018-2026 */}
      <div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-slate-700" />
            Türkiye Asgari Ücret Geçmişi (2018–2026)
          </h3>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Yıl veya dönem ara..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-9 pr-3 py-1.5 text-xs text-slate-900 focus:border-amber-500 focus:bg-white focus:outline-none"
            />
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-700 border-b border-slate-200">
              <tr>
                <th className="py-2.5 px-4 font-semibold">Yıl</th>
                <th className="py-2.5 px-4 font-semibold">Uygulama Dönemi</th>
                <th className="py-2.5 px-4 font-semibold">Brüt Asgari Ücret (₺)</th>
                <th className="py-2.5 px-4 font-semibold text-emerald-700">Net Asgari Ücret (₺)</th>
                <th className="py-2.5 px-4 font-semibold text-slate-500">Resmi Kaynak</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
              {filteredHistory.map((row) => (
                <tr key={`${row.year}-${row.period}`} className="hover:bg-slate-50/70">
                  <td className="py-2.5 px-4 font-sans font-bold text-slate-900">{row.year}</td>
                  <td className="py-2.5 px-4 font-sans text-slate-700">{row.period}</td>
                  <td className="py-2.5 px-4 font-semibold text-slate-900">
                    {formatCurrency(row.gross, 'tr', 'TRY')}
                  </td>
                  <td className="py-2.5 px-4 font-bold text-emerald-700 bg-emerald-50/20">
                    {formatCurrency(row.net, 'tr', 'TRY')}
                  </td>
                  <td className="py-2.5 px-4 font-sans text-slate-500 text-[10px]">
                    {row.source}
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
