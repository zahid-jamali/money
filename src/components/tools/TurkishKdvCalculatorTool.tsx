'use client';

import React, { useState, useId } from 'react';
import { calculateVat, VatCalculationType } from '@/lib/vat';
import {
  calculateTevkifat,
  TevkifatCalculationResult,
} from '@/lib/vat/tevkifat';
import {
  TEVKIFAT_CATEGORIES,
  TEVKIFAT_FRACTIONS,
  TevkifatFraction,
} from '@/rules/tr/tevkifat';
import { formatCurrency, parseLocaleNumber } from '@/lib/formatters';
import {
  Calculator,
  Percent,
  Copy,
  Check,
  Share2,
  Printer,
  Info,
  Scale,
  FileCheck,
  Building,
  ArrowRightLeft,
  BookOpen,
} from 'lucide-react';

export function TurkishKdvCalculatorTool() {
  const [activeTab, setActiveTab] = useState<'standard' | 'tevkifat'>('standard');

  // Tab 1: Standart KDV Hesaplama
  const standardInputId = useId();
  const [standardCalcType, setStandardCalcType] = useState<VatCalculationType>('add');
  const [rawStandardAmount, setRawStandardAmount] = useState<string>('10000');
  const [standardRate, setStandardRate] = useState<number>(20);
  const [copied, setCopied] = useState<boolean>(false);

  const parsedStandardAmount = parseLocaleNumber(rawStandardAmount);
  const standardResult = calculateVat({
    amount: parsedStandardAmount,
    rate: standardRate,
    type: standardCalcType,
  });

  // Tab 2: KDV Tevkifatı Hesaplama
  const tevkifatInputId = useId();
  const [rawTevkifatAmount, setRawTevkifatAmount] = useState<string>('50000');
  const [tevkifatRate, setTevkifatRate] = useState<number>(20);
  const [selectedCategory, setSelectedCategory] = useState<string>('cleaning');
  const [customFraction, setCustomFraction] = useState<TevkifatFraction>('9/10');
  const [useCategoryPreset, setUseCategoryPreset] = useState<boolean>(true);

  const parsedTevkifatAmount = parseLocaleNumber(rawTevkifatAmount);

  const tevkifatResult: TevkifatCalculationResult = calculateTevkifat({
    netAmount: parsedTevkifatAmount,
    vatRate: tevkifatRate,
    fraction: useCategoryPreset
      ? TEVKIFAT_CATEGORIES[selectedCategory]?.fraction || '9/10'
      : customFraction,
    category: useCategoryPreset ? selectedCategory : undefined,
  });

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setUseCategoryPreset(true);
    if (TEVKIFAT_CATEGORIES[catId]) {
      setCustomFraction(TEVKIFAT_CATEGORIES[catId].fraction);
    }
  };

  const handleFractionChange = (fraction: TevkifatFraction) => {
    setCustomFraction(fraction);
    setUseCategoryPreset(false);
  };

  const handleCopy = async () => {
    let text = '';
    if (activeTab === 'standard') {
      text = `KDV Hesaplama (%${standardRate}):\n` +
        `• Yön: ${standardCalcType === 'add' ? 'KDV Hariçten Dahile' : 'KDV Dahilden Harice'}\n` +
        `• Matrah (Net): ${formatCurrency(standardResult.netAmount, 'tr', 'TRY')}\n` +
        `• Hesaplanan KDV: ${formatCurrency(standardResult.vatAmount, 'tr', 'TRY')}\n` +
        `• Genel Toplam (Brüt): ${formatCurrency(standardResult.grossAmount, 'tr', 'TRY')}`;
    } else {
      text = `KDV Tevkifatı Hesaplama (${tevkifatResult.fraction}):\n` +
        `• Matrah (Net Tutar): ${formatCurrency(tevkifatResult.netAmount, 'tr', 'TRY')}\n` +
        `• Hesaplanan KDV (%${tevkifatResult.vatRate}): ${formatCurrency(tevkifatResult.totalVat, 'tr', 'TRY')}\n` +
        `• Tevkif Edilen KDV (2 No.lu Beyanname ile Alıcı Öder): ${formatCurrency(tevkifatResult.withheldVat, 'tr', 'TRY')}\n` +
        `• Tahsil Edilecek KDV (Satıcıya Ödenir): ${formatCurrency(tevkifatResult.invoicedVat, 'tr', 'TRY')}\n` +
        `• Fatura Genel Toplamı (Ödenecek Tutar): ${formatCurrency(tevkifatResult.payableAmount, 'tr', 'TRY')}\n` +
        `• Yasal Dayanak: ${tevkifatResult.legalReference}`;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleShare = async () => {
    const title = activeTab === 'standard' ? 'KDV Hesaplama Aracı' : 'KDV Tevkifatı Hesaplama';
    const text = activeTab === 'standard'
      ? `Matrah: ${formatCurrency(standardResult.netAmount, 'tr', 'TRY')} | KDV: ${formatCurrency(standardResult.vatAmount, 'tr', 'TRY')} | Toplam: ${formatCurrency(standardResult.grossAmount, 'tr', 'TRY')}`
      : `Matrah: ${formatCurrency(tevkifatResult.netAmount, 'tr', 'TRY')} | Tevkifat (${tevkifatResult.fraction}): ${formatCurrency(tevkifatResult.withheldVat, 'tr', 'TRY')} | Fatura Toplamı: ${formatCurrency(tevkifatResult.payableAmount, 'tr', 'TRY')}`;

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: window.location.href,
        });
      } catch {
        handleCopy();
      }
    } else {
      handleCopy();
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Mode Switcher Tabs */}
      <div
        role="tablist"
        aria-label="KDV Hesaplama Modları"
        className="grid grid-cols-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl gap-1.5"
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
          <span>KDV Hesaplama (Genel)</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'tevkifat'}
          onClick={() => setActiveTab('tevkifat')}
          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'tevkifat'
              ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Scale className="w-4 h-4 shrink-0" />
          <span>KDV Tevkifatı Hesaplama</span>
        </button>
      </div>

      {/* TAB 1: STANDART KDV HESAPLAMA */}
      {activeTab === 'standard' && (
        <div
          role="tabpanel"
          aria-label="Standart KDV Hesaplama"
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8 space-y-6"
        >
          {/* Direction Toggle */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Hesaplama Yönü
            </label>
            <div className="grid grid-cols-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl gap-1">
              <button
                type="button"
                onClick={() => setStandardCalcType('add')}
                className={`py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition ${
                  standardCalcType === 'add'
                    ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                KDV Hariçten Dahile (KDV Ekle)
              </button>
              <button
                type="button"
                onClick={() => setStandardCalcType('remove')}
                className={`py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition ${
                  standardCalcType === 'remove'
                    ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                KDV Dahilden Harice (KDV Ayır)
              </button>
            </div>
          </div>

          {/* Amount & Rates Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor={standardInputId}
                className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1.5"
              >
                {standardCalcType === 'add' ? 'KDV Hariç Tutar (Matrah)' : 'KDV Dahil Toplam Tutar'}
              </label>
              <div className="relative rounded-xl shadow-sm">
                <input
                  id={standardInputId}
                  type="text"
                  inputMode="decimal"
                  value={rawStandardAmount}
                  onChange={(e) => setRawStandardAmount(e.target.value)}
                  placeholder="0,00"
                  className="w-full text-xl font-bold pl-4 pr-10 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl focus:bg-white dark:focus:bg-slate-900 focus:border-teal-600 dark:focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-slate-900 dark:text-white outline-none transition"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-bold text-lg">
                  ₺
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                KDV Oranı
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: '%20 Genel', rate: 20 },
                  { label: '%10 İndirimli', rate: 10 },
                  { label: '%1 Özel', rate: 1 },
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

          {/* Result Card */}
          <div
            aria-live="polite"
            className="bg-gradient-to-br from-teal-50 to-emerald-50/40 dark:from-slate-800 dark:to-slate-800/80 border border-teal-200 dark:border-teal-900/40 rounded-2xl p-5 sm:p-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-4 border-b border-teal-200/60 dark:border-slate-700">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-teal-800 dark:text-teal-400">
                  {standardCalcType === 'add' ? 'KDV Dahil Toplam Tutar' : 'KDV Hariç Matrah'}
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white mt-1">
                  {formatCurrency(
                    standardCalcType === 'add' ? standardResult.grossAmount : standardResult.netAmount,
                    'tr',
                    'TRY',
                  )}
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                  Hesaplanan KDV (%{standardRate})
                </span>
                <div className="text-2xl font-bold text-teal-700 dark:text-teal-400 mt-1">
                  {formatCurrency(standardResult.vatAmount, 'tr', 'TRY')}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-xs sm:text-sm">
              <div className="p-3 bg-white/80 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 block text-xs">Matrah (Net)</span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {formatCurrency(standardResult.netAmount, 'tr', 'TRY')}
                </span>
              </div>
              <div className="p-3 bg-white/80 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 block text-xs">KDV Tutarı (%{standardRate})</span>
                <span className="font-bold text-teal-700 dark:text-teal-400">
                  +{formatCurrency(standardResult.vatAmount, 'tr', 'TRY')}
                </span>
              </div>
              <div className="p-3 bg-white/80 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 block text-xs">Fatura Toplamı (Brüt)</span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {formatCurrency(standardResult.grossAmount, 'tr', 'TRY')}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: KDV TEVKİFATI HESAPLAMA */}
      {activeTab === 'tevkifat' && (
        <div
          role="tabpanel"
          aria-label="KDV Tevkifatı Hesaplama"
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8 space-y-6"
        >
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              GİB KDV Tevkifatı Hesaplayıcı (KDV Genel Uygulama Tebliği)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Hizmet veya işlem kategorisini seçerek alıcı ve satıcıya düşen yasal KDV sorumluluğunu anında hesaplayın.
            </p>
          </div>

          {/* Amount & Tax Rate Input */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label
                htmlFor={tevkifatInputId}
                className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1.5"
              >
                KDV Matrahı (Hizmet/Teslim Net Tutarı)
              </label>
              <div className="relative rounded-xl shadow-sm">
                <input
                  id={tevkifatInputId}
                  type="text"
                  inputMode="decimal"
                  value={rawTevkifatAmount}
                  onChange={(e) => setRawTevkifatAmount(e.target.value)}
                  placeholder="0,00"
                  className="w-full text-xl font-bold pl-4 pr-10 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl focus:bg-white dark:focus:bg-slate-900 focus:border-teal-600 dark:focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-slate-900 dark:text-white outline-none transition"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-bold text-lg">
                  ₺
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                KDV Oranı
              </label>
              <select
                value={tevkifatRate}
                onChange={(e) => setTevkifatRate(parseFloat(e.target.value) || 20)}
                aria-label="KDV Oranı"
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl font-bold text-slate-900 dark:text-white"
              >
                <option value={20}>%20 (Standart Oran)</option>
                <option value={10}>%10 (İndirimli Oran)</option>
              </select>
            </div>
          </div>

          {/* Category Selector Preset */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200">
                Tevkifat Kapsamındaki İşlem Türü
              </label>
              <span className="text-xs text-teal-600 dark:text-teal-400 font-medium">
                GİB Tebliğ Listesi
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {[
                { id: 'cleaning', name: 'Temizlik & Bahçe Bakım', fraction: '9/10' },
                { id: 'security', name: 'Özel Güvenlik Hizmetleri', fraction: '9/10' },
                { id: 'transportation_shuttle', name: 'Servis Taşımacılığı', fraction: '5/10' },
                { id: 'transportation_freight', name: 'Yük Taşımacılığı', fraction: '2/10' },
                { id: 'construction', name: 'Yapım İşleri & Mühendislik', fraction: '4/10' },
                { id: 'consulting', name: 'Danışmanlık & Denetim', fraction: '9/10' },
              ].map((cat) => {
                const isSelected = useCategoryPreset && selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-left text-xs sm:text-sm transition ${
                      isSelected
                        ? 'bg-teal-50 text-teal-900 border-teal-500 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-600 ring-2 ring-teal-500/20 font-bold'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="ml-2 px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300 text-xs font-mono font-bold">
                      {cat.fraction}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Custom Fraction Selector (2/10, 3/10, 4/10, 5/10, 7/10, 9/10, 10/10) */}
          <div className="pt-2">
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
              Veya Özel Tevkifat Oranı Seçin:
            </label>
            <div className="flex flex-wrap gap-1.5">
              {(['2/10', '3/10', '4/10', '5/10', '7/10', '9/10', '10/10'] as TevkifatFraction[]).map((frac) => {
                const isCurrent = !useCategoryPreset && customFraction === frac;
                return (
                  <button
                    key={frac}
                    type="button"
                    onClick={() => handleFractionChange(frac)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold border transition ${
                      isCurrent
                        ? 'bg-teal-600 text-white border-teal-600'
                        : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                    }`}
                  >
                    {frac}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Full Tevkifat Breakdown Card */}
          <div
            aria-live="polite"
            className="bg-gradient-to-br from-teal-50/90 via-emerald-50/40 to-white dark:from-slate-800 dark:via-slate-800/80 dark:to-slate-900 border border-teal-200 dark:border-teal-900/40 rounded-2xl p-5 sm:p-6 space-y-5"
          >
            {/* Headline: Fatura Genel Toplamı (Ödenecek Tutar) */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-5 border-b border-teal-200/60 dark:border-slate-700">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-400">
                  Fatura Genel Toplamı (Alıcının Satıcıya Ödeyeceği Tutar)
                </span>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight mt-1">
                  {formatCurrency(tevkifatResult.payableAmount, 'tr', 'TRY')}
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  Tevkif Edilen KDV ({tevkifatResult.fraction})
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-400 mt-1">
                  {formatCurrency(tevkifatResult.withheldVat, 'tr', 'TRY')}
                </div>
              </div>
            </div>

            {/* Detailed 5-Step Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
              <div className="p-3 bg-white/80 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 font-medium block">
                  1. KDV Matrahı (Net Tutar)
                </span>
                <div className="text-base font-bold text-slate-900 dark:text-white mt-1">
                  {formatCurrency(tevkifatResult.netAmount, 'tr', 'TRY')}
                </div>
              </div>

              <div className="p-3 bg-white/80 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 font-medium block">
                  2. Toplam Hesaplanan KDV (%{tevkifatResult.vatRate})
                </span>
                <div className="text-base font-bold text-slate-900 dark:text-white mt-1">
                  {formatCurrency(tevkifatResult.totalVat, 'tr', 'TRY')}
                </div>
              </div>

              <div className="p-3 bg-amber-50/80 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
                <span className="text-amber-800 dark:text-amber-300 font-medium block">
                  3. Tevkif Edilen KDV ({tevkifatResult.fraction})
                </span>
                <div className="text-base font-bold text-amber-900 dark:text-amber-200 mt-1">
                  {formatCurrency(tevkifatResult.withheldVat, 'tr', 'TRY')}
                </div>
                <span className="text-[10px] text-amber-700 dark:text-amber-400 block mt-0.5">
                  {"2 No'lu KDV ile Vergi Dairesine"}
                </span>
              </div>

              <div className="p-3 bg-emerald-50/80 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <span className="text-emerald-800 dark:text-emerald-300 font-medium block">
                  4. Tahsil Edilecek KDV
                </span>
                <div className="text-base font-bold text-emerald-900 dark:text-emerald-200 mt-1">
                  {formatCurrency(tevkifatResult.invoicedVat, 'tr', 'TRY')}
                </div>
                <span className="text-[10px] text-emerald-700 dark:text-emerald-400 block mt-0.5">
                  Satıcıya Fatura ile Ödenir
                </span>
              </div>

              <div className="p-3 bg-teal-50/80 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800">
                <span className="text-teal-800 dark:text-teal-300 font-medium block">
                  5. Ödenecek Tutar (Fatura)
                </span>
                <div className="text-base font-bold text-teal-900 dark:text-teal-200 mt-1">
                  {formatCurrency(tevkifatResult.payableAmount, 'tr', 'TRY')}
                </div>
                <span className="text-[10px] text-teal-700 dark:text-teal-400 block mt-0.5">
                  Matrah + Tahsil Edilecek KDV
                </span>
              </div>
            </div>

            {/* Legal Basis Notice */}
            <div className="p-3.5 bg-slate-100/80 dark:bg-slate-800/80 rounded-xl text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
              <BookOpen className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-slate-900 dark:text-white">
                  Yasal Dayanak & Beyan Rehberi:
                </span>
                <p className="mt-0.5 font-mono text-[11px] text-slate-600 dark:text-slate-400">
                  {tevkifatResult.legalReference}
                </p>
                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                  Alıcı, tevkif edilen <strong>{formatCurrency(tevkifatResult.withheldVat, 'tr', 'TRY')}</strong> tutarını 2 No.lu KDV Beyannamesi ile doğrudan vergi dairesine beyan edip öder. Satıcıya yalnızca fatura genel toplamı olan <strong>{formatCurrency(tevkifatResult.payableAmount, 'tr', 'TRY')}</strong> ödenir.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Actions */}
      <div className="flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
        >
          {copied ? <Check className="w-4 h-4 text-teal-600" /> : <Copy className="w-4 h-4" />}
          {copied ? 'Kopyalandı' : 'Hesaplamayı Kopyala'}
        </button>
        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
        >
          <Share2 className="w-4 h-4" />
          Paylaş
        </button>
        <button
          type="button"
          onClick={handlePrint}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
        >
          <Printer className="w-4 h-4" />
          Yazdır
        </button>
      </div>
    </div>
  );
}
export default TurkishKdvCalculatorTool;
