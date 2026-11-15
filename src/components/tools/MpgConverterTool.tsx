'use client';

import React, { useState } from 'react';
import {
  ukMpgToLPer100Km,
  lPer100KmToUkMpg,
  usMpgToLPer100Km,
  lPer100KmToUsMpg,
  kmPerLToLPer100Km,
  lPer100KmToKmPerL,
  generateMpgComparisonTable,
} from '@/lib/travel/fuel';
import {
  ArrowRightLeft,
  Gauge,
  Copy,
  Check,
  Share2,
  Printer,
  Sparkles,
  Info,
  Car,
} from 'lucide-react';

export function MpgConverterTool() {
  // Master state in L/100km (the scientific standard)
  const [lPer100Km, setLPer100Km] = useState<number>(6.5);
  const [rawUkMpg, setRawUkMpg] = useState<string>(
    String(Math.round(lPer100KmToUkMpg(6.5) * 10) / 10),
  );
  const [rawUsMpg, setRawUsMpg] = useState<string>(
    String(Math.round(lPer100KmToUsMpg(6.5) * 10) / 10),
  );
  const [rawL100, setRawL100] = useState<string>('6.5');
  const [rawKmL, setRawKmL] = useState<string>(
    String(Math.round(lPer100KmToKmPerL(6.5) * 10) / 10),
  );
  const [copied, setCopied] = useState<boolean>(false);

  // Synchronizers
  const updateFromL100 = (newVal: number) => {
    setLPer100Km(newVal);
    if (newVal > 0) {
      setRawUkMpg(String(Math.round(lPer100KmToUkMpg(newVal) * 10) / 10));
      setRawUsMpg(String(Math.round(lPer100KmToUsMpg(newVal) * 10) / 10));
      setRawL100(String(Math.round(newVal * 10) / 10));
      setRawKmL(String(Math.round(lPer100KmToKmPerL(newVal) * 10) / 10));
    }
  };

  const handleUkMpgChange = (val: string) => {
    setRawUkMpg(val);
    const num = parseFloat(val);
    if (num > 0) {
      const l100 = ukMpgToLPer100Km(num);
      setLPer100Km(l100);
      setRawUsMpg(String(Math.round(lPer100KmToUsMpg(l100) * 10) / 10));
      setRawL100(String(Math.round(l100 * 10) / 10));
      setRawKmL(String(Math.round(lPer100KmToKmPerL(l100) * 10) / 10));
    }
  };

  const handleUsMpgChange = (val: string) => {
    setRawUsMpg(val);
    const num = parseFloat(val);
    if (num > 0) {
      const l100 = usMpgToLPer100Km(num);
      setLPer100Km(l100);
      setRawUkMpg(String(Math.round(lPer100KmToUkMpg(l100) * 10) / 10));
      setRawL100(String(Math.round(l100 * 10) / 10));
      setRawKmL(String(Math.round(lPer100KmToKmPerL(l100) * 10) / 10));
    }
  };

  const handleL100Change = (val: string) => {
    setRawL100(val);
    const num = parseFloat(val);
    if (num > 0) {
      setLPer100Km(num);
      setRawUkMpg(String(Math.round(lPer100KmToUkMpg(num) * 10) / 10));
      setRawUsMpg(String(Math.round(lPer100KmToUsMpg(num) * 10) / 10));
      setRawKmL(String(Math.round(lPer100KmToKmPerL(num) * 10) / 10));
    }
  };

  const handleKmLChange = (val: string) => {
    setRawKmL(val);
    const num = parseFloat(val);
    if (num > 0) {
      const l100 = kmPerLToLPer100Km(num);
      setLPer100Km(l100);
      setRawUkMpg(String(Math.round(lPer100KmToUkMpg(l100) * 10) / 10));
      setRawUsMpg(String(Math.round(lPer100KmToUsMpg(l100) * 10) / 10));
      setRawL100(String(Math.round(l100 * 10) / 10));
    }
  };

  const tableRows = generateMpgComparisonTable(10, 70, 5);

  const presets = [
    { label: 'Supermini / Hybrid', ukMpg: 65, desc: 'Toyota Yaris, Clio Hybrid' },
    { label: 'Compact Family', ukMpg: 48, desc: 'VW Golf, Ford Focus' },
    { label: 'Mid-size SUV', ukMpg: 38, desc: 'Nissan Qashqai, Hyundai Tucson' },
    { label: 'Large 4x4 / Van', ukMpg: 28, desc: 'Land Rover, Ford Transit' },
    { label: 'Performance V8', ukMpg: 18, desc: 'Mustang V8, AMG C63' },
  ];

  const handleCopy = async () => {
    const text =
      `Fuel Economy Conversion Equivalent:\n` +
      `• UK MPG (Imperial): ${rawUkMpg} mpg\n` +
      `• US MPG: ${rawUsMpg} mpg\n` +
      `• Litres / 100km: ${rawL100} L/100km\n` +
      `• Kilometres / Litre: ${rawKmL} km/L`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'MPG to Litres per 100km Converter',
          text: `${rawUkMpg} UK MPG = ${rawL100} L/100km = ${rawUsMpg} US MPG`,
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
    <div className="w-full space-y-8">
      {/* 4-Way Interactive Converter Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-6 sm:p-8">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-teal-50 dark:bg-teal-950/80 rounded-xl text-teal-700 dark:text-teal-300">
              <ArrowRightLeft className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Live Multi-Unit Fuel Economy Converter
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Type in any box to instantly recalculate all imperial and metric counterparts
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-teal-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              type="button"
              onClick={handleShare}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all"
              title="Share Conversion"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all"
              title="Print Reference Table"
            >
              <Printer className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4 Interactive Converter Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* UK MPG */}
          <div className="bg-gradient-to-br from-teal-50/50 to-emerald-50/30 dark:from-slate-800/80 dark:to-slate-800/40 p-4 rounded-xl border border-teal-200/70 dark:border-slate-700">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-teal-900 dark:text-teal-300 uppercase tracking-wider">
                UK MPG
              </label>
              <span className="text-[10px] text-teal-600 dark:text-teal-400 font-semibold">Imperial Gallon</span>
            </div>
            <div className="relative">
              <input
                type="number"
                step="0.1"
                min="1"
                value={rawUkMpg}
                onChange={(e) => handleUkMpgChange(e.target.value)}
                className="w-full text-2xl font-black text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-teal-300 dark:border-teal-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                mpg
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
              Formula: 282.481 ÷ L/100km
            </p>
          </div>

          {/* L/100km */}
          <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-slate-800/80 dark:to-slate-800/40 p-4 rounded-xl border border-blue-200/70 dark:border-slate-700">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider">
                Litres / 100 km
              </label>
              <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">Metric Standard</span>
            </div>
            <div className="relative">
              <input
                type="number"
                step="0.1"
                min="1"
                value={rawL100}
                onChange={(e) => handleL100Change(e.target.value)}
                className="w-full text-2xl font-black text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-blue-300 dark:border-blue-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                L/100
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
              Standard in EU, AU & Canada
            </p>
          </div>

          {/* US MPG */}
          <div className="bg-gradient-to-br from-amber-50/50 to-orange-50/30 dark:from-slate-800/80 dark:to-slate-800/40 p-4 rounded-xl border border-amber-200/70 dark:border-slate-700">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider">
                US MPG
              </label>
              <span className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold">US Gallon (3.785 L)</span>
            </div>
            <div className="relative">
              <input
                type="number"
                step="0.1"
                min="1"
                value={rawUsMpg}
                onChange={(e) => handleUsMpgChange(e.target.value)}
                className="w-full text-2xl font-black text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                us mpg
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
              Formula: 235.215 ÷ L/100km
            </p>
          </div>

          {/* km / L */}
          <div className="bg-gradient-to-br from-purple-50/50 to-fuchsia-50/30 dark:from-slate-800/80 dark:to-slate-800/40 p-4 rounded-xl border border-purple-200/70 dark:border-slate-700">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-purple-900 dark:text-purple-300 uppercase tracking-wider">
                Kilometres / Litre
              </label>
              <span className="text-[10px] text-purple-600 dark:text-purple-400 font-semibold">Japan / Asia</span>
            </div>
            <div className="relative">
              <input
                type="number"
                step="0.1"
                min="1"
                value={rawKmL}
                onChange={(e) => handleKmLChange(e.target.value)}
                className="w-full text-2xl font-black text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-purple-300 dark:border-purple-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                km/L
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
              Formula: 100 ÷ L/100km
            </p>
          </div>
        </div>

        {/* Vehicle Presets */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Popular Benchmark Categories (Click to Apply)</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {presets.map((preset) => {
              const pL100 = ukMpgToLPer100Km(preset.ukMpg);
              const isActive = Math.abs(lPer100Km - pL100) < 0.2;
              return (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => updateFromL100(pL100)}
                  className={`p-3 text-left rounded-xl border transition-all ${
                    isActive
                      ? 'bg-teal-50 dark:bg-teal-950/60 border-teal-500 text-teal-950 dark:text-teal-200 shadow-xs'
                      : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:border-teal-300 dark:hover:border-slate-600'
                  }`}
                >
                  <span className="block text-xs font-bold text-slate-900 dark:text-white truncate">
                    {preset.label}
                  </span>
                  <span className="block text-sm font-black text-teal-700 dark:text-teal-400 mt-0.5">
                    {preset.ukMpg} UK MPG
                  </span>
                  <span className="block text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                    {Math.round(pL100 * 10) / 10} L/100km
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Complete Reference Comparison Table (10 to 70 MPG) */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4 mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Gauge className="w-5 h-5 text-teal-600" />
              <span>Full Conversion Reference Chart (10 to 70 MPG)</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Click any row to test in the live converter above
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg self-start sm:self-auto">
            1 UK Gallon = 4.546 L | 1 US Gallon = 3.785 L
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <th scope="col" className="pb-3 pr-4">UK MPG</th>
                <th scope="col" className="pb-3 px-4">Litres / 100km</th>
                <th scope="col" className="pb-3 px-4">US MPG</th>
                <th scope="col" className="pb-3 px-4">km / Litre</th>
                <th scope="col" className="pb-3 pl-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs sm:text-sm">
              {tableRows.map((row) => (
                <tr
                  key={row.ukMpg}
                  onClick={() => updateFromL100(row.lPer100Km)}
                  className="cursor-pointer hover:bg-teal-50/50 dark:hover:bg-slate-800/60 transition-colors"
                >
                  <td className="py-2.5 pr-4 font-bold text-slate-900 dark:text-white">
                    {row.ukMpg} MPG
                  </td>
                  <td className="py-2.5 px-4 font-semibold text-teal-700 dark:text-teal-400">
                    {row.lPer100Km.toFixed(1)} L/100km
                  </td>
                  <td className="py-2.5 px-4 text-slate-700 dark:text-slate-300">
                    {row.usMpg.toFixed(1)} mpg
                  </td>
                  <td className="py-2.5 px-4 text-slate-700 dark:text-slate-300">
                    {row.kmPerL.toFixed(1)} km/L
                  </td>
                  <td className="py-2.5 pl-4 text-right">
                    <span className="text-xs text-teal-600 dark:text-teal-400 hover:underline font-semibold">
                      Select
                    </span>
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

export default MpgConverterTool;
