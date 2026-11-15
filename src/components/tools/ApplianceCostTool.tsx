'use client';

import React, { useState } from 'react';
import { ApplianceSpec } from '@/data/appliances';
import {
  calculateApplianceCost,
  formatElectricityCost,
} from '@/lib/energy/electricity';
import { getElectricityPrice } from '@/rules/energy/electricity';
import {
  Zap,
  Clock,
  Calendar,
  Sparkles,
  Copy,
  Check,
  Share2,
  Printer,
  Sliders,
  RotateCcw,
} from 'lucide-react';

export interface ApplianceCostToolProps {
  appliance: ApplianceSpec;
  region?: 'uk' | 'australia' | 'germany';
  lang?: 'en' | 'de';
}

export function ApplianceCostTool({
  appliance,
  region = 'uk',
  lang = 'en',
}: ApplianceCostToolProps) {
  const isDe = lang === 'de' || region === 'germany';
  const priceInfo = getElectricityPrice(region);
  const currencySymbol = priceInfo.currencySymbol;
  const currencyCode = priceInfo.currency;
  const unitLabel = priceInfo.unit;

  const defaultWatts = appliance.wattageRange.defaultWatts;
  const defaultHours = appliance.typicalUsage.hoursPerDay;
  const defaultDays = appliance.typicalUsage.usesPerWeek
    ? Math.min(7, appliance.typicalUsage.usesPerWeek)
    : 7;

  const [watts, setWatts] = useState<number>(defaultWatts);
  const [hours, setHours] = useState<number>(defaultHours);
  const [days, setDays] = useState<number>(defaultDays);
  const [unitRate, setUnitRate] = useState<number>(priceInfo.unitRate);
  const [copied, setCopied] = useState<boolean>(false);

  const result = calculateApplianceCost({
    watts,
    hoursPerDay: hours,
    daysPerWeek: days,
    pricePerKwh: unitRate,
    standbyWatts: appliance.standbyWatts || 0,
  });

  const applianceName = isDe ? appliance.deName : appliance.enName;
  const fmt = (p: number) => formatElectricityCost(p, currencySymbol, currencyCode);

  const handleReset = () => {
    setWatts(defaultWatts);
    setHours(defaultHours);
    setDays(defaultDays);
    setUnitRate(priceInfo.unitRate);
  };

  const handleCopy = async () => {
    const text = isDe
      ? `Stromkosten: ${applianceName}\n` +
        `• Leistung: ${watts} Watt | ${hours} Std./Tag | ${days} Tage/Woche\n` +
        `• Tarif: ${unitRate} ${unitLabel}\n` +
        `• Pro Nutzung/Tag: ${fmt(result.costPerDay).major} (${result.kWhPerDay} kWh)\n` +
        `• Pro Monat: ${fmt(result.costPerMonth).major} (${result.kWhPerMonth} kWh)\n` +
        `• Pro Jahr: ${fmt(result.costPerYear).major} (${result.kWhPerYear} kWh)\n` +
        `Berechnet mit Zetawala Money`
      : `Running Cost: ${applianceName}\n` +
        `• Power: ${watts}W | ${hours} hrs/day | ${days} days/week\n` +
        `• Unit Rate: ${unitRate} ${unitLabel}\n` +
        `• Per Day/Use: ${fmt(result.costPerDay).major} (${result.kWhPerDay} kWh)\n` +
        `• Per Month: ${fmt(result.costPerMonth).major} (${result.kWhPerMonth} kWh)\n` +
        `• Per Year: ${fmt(result.costPerYear).major} (${result.kWhPerYear} kWh)\n` +
        `Calculated via Zetawala Money`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: `${applianceName} Running Cost`,
          text: `${applianceName}: ${fmt(result.costPerYear).major}/year (${result.kWhPerYear} kWh)`,
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
    if (typeof window !== 'undefined') window.print();
  };

  return (
    <div className="w-full space-y-8">
      {/* Main Tool Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8">
        
        {/* Top Header / Price Cap Context */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-teal-600 text-white rounded-xl">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                {isDe ? 'Live-Stromkostenrechner' : 'Live Appliance Running Cost'}
              </div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {applianceName} ({watts}W)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {isDe ? 'Tarif:' : 'Tariff rate:'}
            </span>
            <div className="flex items-center gap-1">
              <input
                type="number"
                step="0.1"
                min="0"
                value={unitRate}
                onChange={(e) => setUnitRate(parseFloat(e.target.value) || 0)}
                className="w-20 text-xs font-bold py-1 px-2 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-right"
              />
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">{unitLabel}</span>
            </div>
          </div>
        </div>

        {/* Wattage Quick Presets (Min / Default / Max) */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-teal-600" />
              <span>{isDe ? 'Geräteleistung anpassen' : 'Adjust Appliance Wattage'}</span>
            </label>
            <button
              type="button"
              onClick={handleReset}
              className="text-xs font-semibold text-teal-600 hover:text-teal-700 dark:text-teal-400 flex items-center gap-1 transition"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{isDe ? 'Standard' : 'Reset'}</span>
            </button>
          </div>

          {/* Quick preset buttons */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <button
              type="button"
              onClick={() => setWatts(appliance.wattageRange.min)}
              className={`py-1.5 px-2 rounded-lg text-xs font-semibold border transition ${
                watts === appliance.wattageRange.min
                  ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-500 text-teal-700 dark:text-teal-300'
                  : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              {isDe ? 'Sparsam' : 'Low'}: {appliance.wattageRange.min}W
            </button>

            <button
              type="button"
              onClick={() => setWatts(appliance.wattageRange.defaultWatts)}
              className={`py-1.5 px-2 rounded-lg text-xs font-semibold border transition ${
                watts === appliance.wattageRange.defaultWatts
                  ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-500 text-teal-700 dark:text-teal-300'
                  : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              {isDe ? 'Standard' : 'Typical'}: {appliance.wattageRange.defaultWatts}W
            </button>

            <button
              type="button"
              onClick={() => setWatts(appliance.wattageRange.max)}
              className={`py-1.5 px-2 rounded-lg text-xs font-semibold border transition ${
                watts === appliance.wattageRange.max
                  ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-500 text-teal-700 dark:text-teal-300'
                  : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              {isDe ? 'Maximum' : 'High'}: {appliance.wattageRange.max}W
            </button>
          </div>

          {/* Slider & Exact Input */}
          <div className="flex items-center gap-4">
            <input
              type="range"
              min={Math.max(5, Math.floor(appliance.wattageRange.min * 0.7))}
              max={Math.ceil(appliance.wattageRange.max * 1.3)}
              step="10"
              value={watts}
              onChange={(e) => setWatts(parseInt(e.target.value) || 0)}
              className="flex-1 accent-teal-600 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
            />
            <div className="flex items-center gap-1 shrink-0">
              <input
                type="number"
                min="1"
                step="10"
                value={watts}
                onChange={(e) => setWatts(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 text-sm font-bold py-1.5 px-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-right focus:ring-2 focus:ring-teal-500"
              />
              <span className="text-xs font-semibold text-slate-500">W</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            {isDe ? 'Herstellerangaben:' : 'Manufacturer specs:'} {appliance.wattageRange.source}
          </p>
        </div>

        {/* Usage Controls: Hours per day & Days per week */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{isDe ? 'Laufzeit pro Tag' : 'Runtime per day'}</span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0.05"
                max="24"
                step="0.1"
                value={hours}
                onChange={(e) => setHours(parseFloat(e.target.value) || 0)}
                className="flex-1 accent-teal-600 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
              />
              <div className="flex items-center gap-1 shrink-0">
                <input
                  type="number"
                  min="0.01"
                  max="24"
                  step="0.1"
                  value={hours}
                  onChange={(e) => setHours(Math.max(0.01, parseFloat(e.target.value) || 0))}
                  className="w-16 text-xs font-bold py-1 px-1.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded text-right"
                />
                <span className="text-xs text-slate-500">h</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{isDe ? 'Nutzungstage pro Woche' : 'Days used per week'}</span>
            </label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setDays(num)}
                  className={`flex-1 py-1 text-xs font-bold rounded-lg border transition ${
                    days === num
                      ? 'bg-teal-600 text-white border-teal-600 shadow-sm'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {num}d
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SUMMARY CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {/* Card 1: Per Hour / Use */}
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
              {isDe ? 'Pro Stunde' : 'Per Hour'}
            </span>
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {fmt((watts * unitRate) / 1000).major}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              {(watts / 1000).toFixed(2)} kWh
            </div>
          </div>

          {/* Card 2: Per Day */}
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
              {isDe ? 'Pro Nutzungstag' : 'Per Active Day'}
            </span>
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {fmt(result.costPerDay).major}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              {result.kWhPerDay} kWh
            </div>
          </div>

          {/* Card 3: Per Month */}
          <div className="p-3.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/60">
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300 block mb-1">
              {isDe ? 'Pro Monat' : 'Per Month'}
            </span>
            <div className="text-xl sm:text-2xl font-black text-teal-900 dark:text-teal-100">
              {fmt(result.costPerMonth).major}
            </div>
            <div className="text-[11px] text-teal-700 dark:text-teal-300/80 mt-0.5">
              {result.kWhPerMonth} kWh
            </div>
          </div>

          {/* Card 4: Per Year */}
          <div className="p-3.5 rounded-xl bg-teal-600 text-white shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-100 block mb-1">
              {isDe ? 'Pro Jahr' : 'Per Year'}
            </span>
            <div className="text-xl sm:text-2xl font-black">
              {fmt(result.totalCostPerYearWithStandby).major}
            </div>
            <div className="text-[11px] text-teal-100 mt-0.5">
              {(result.kWhPerYear + result.standbyKwhPerYear).toFixed(1)} kWh
            </div>
          </div>
        </div>

        {/* Standby Note if applicable */}
        {appliance.standbyWatts && appliance.standbyWatts > 0 ? (
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 italic">
            {isDe
              ? `* Inklusive ${appliance.standbyWatts} Watt Standby-Verbrauch außerhalb der Nutzungszeiten (${fmt(result.standbyCostPerYear).major}/Jahr).`
              : `* Includes ${appliance.standbyWatts}W standby consumption outside active hours (${fmt(result.standbyCostPerYear).major}/year).`}
          </p>
        ) : null}

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-teal-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? (isDe ? 'Kopiert!' : 'Copied!') : (isDe ? 'Kopieren' : 'Copy')}</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{isDe ? 'Teilen' : 'Share'}</span>
            </button>
          </div>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{isDe ? 'Drucken' : 'Print'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
