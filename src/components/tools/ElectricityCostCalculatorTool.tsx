'use client';

import React, { useState, useId } from 'react';
import {
  calculateApplianceCost,
  compareAppliances,
  formatElectricityCost,
  ApplianceCostResult,
} from '@/lib/energy/electricity';
import { getElectricityPrice, AUSTRALIA_ELECTRICITY_RATES } from '@/rules/energy/electricity';
import { APPLIANCES, ApplianceSpec } from '@/data/appliances';
import {
  Zap,
  Clock,
  Calendar,
  Sparkles,
  ArrowRightLeft,
  Copy,
  Check,
  Share2,
  Printer,
  ChevronDown,
  TrendingDown,
  Info,
} from 'lucide-react';

export interface ElectricityCostCalculatorToolProps {
  region?: 'uk' | 'australia' | 'germany';
  initialWatts?: number;
  initialHoursPerDay?: number;
  initialDaysPerWeek?: number;
  initialPricePerKwh?: number;
  lang?: 'en' | 'de';
}

export function ElectricityCostCalculatorTool({
  region = 'uk',
  initialWatts = 2000,
  initialHoursPerDay = 3,
  initialDaysPerWeek = 7,
  initialPricePerKwh,
  lang = 'en',
}: ElectricityCostCalculatorToolProps) {
  const isDe = lang === 'de' || region === 'germany';
  const priceInfo = getElectricityPrice(region);

  const defaultPrice = initialPricePerKwh ?? priceInfo.unitRate;
  const currencySymbol = priceInfo.currencySymbol;
  const currencyCode = priceInfo.currency;
  const unitLabel = priceInfo.unit;

  // Appliance A State
  const [selectedSlugA, setSelectedSlugA] = useState<string>('electric-heater');
  const [wattsA, setWattsA] = useState<number>(initialWatts);
  const [hoursA, setHoursA] = useState<number>(initialHoursPerDay);
  const [daysA, setDaysA] = useState<number>(initialDaysPerWeek);
  const [standbyA, setStandbyA] = useState<number>(0);

  // Region / Price Override State
  const [unitRate, setUnitRate] = useState<number>(defaultPrice);
  const [selectedAuState, setSelectedAuState] = useState<string>('national');

  // Comparison State
  const [showComparison, setShowComparison] = useState<boolean>(false);
  const [selectedSlugB, setSelectedSlugB] = useState<string>('electric-blanket');
  const [wattsB, setWattsB] = useState<number>(100);
  const [hoursB, setHoursB] = useState<number>(3);
  const [daysB, setDaysB] = useState<number>(7);
  const [standbyB, setStandbyB] = useState<number>(0);

  const [copied, setCopied] = useState<boolean>(false);

  // Australian state change handler
  const handleAuStateChange = (stateCode: string) => {
    setSelectedAuState(stateCode);
    const statePrice = AUSTRALIA_ELECTRICITY_RATES[stateCode];
    if (statePrice) {
      setUnitRate(statePrice.unitRateCents);
    }
  };

  // Preset Selection for Appliance A
  const handleSelectApplianceA = (slug: string) => {
    setSelectedSlugA(slug);
    const app = APPLIANCES.find((a) => a.slug === slug);
    if (app) {
      setWattsA(app.wattageRange.defaultWatts);
      setHoursA(app.typicalUsage.hoursPerDay);
      setDaysA(app.typicalUsage.usesPerWeek ? Math.min(7, app.typicalUsage.usesPerWeek) : 7);
      setStandbyA(app.standbyWatts || 0);
    }
  };

  // Preset Selection for Appliance B
  const handleSelectApplianceB = (slug: string) => {
    setSelectedSlugB(slug);
    const app = APPLIANCES.find((a) => a.slug === slug);
    if (app) {
      setWattsB(app.wattageRange.defaultWatts);
      setHoursB(app.typicalUsage.hoursPerDay);
      setDaysB(app.typicalUsage.usesPerWeek ? Math.min(7, app.typicalUsage.usesPerWeek) : 7);
      setStandbyB(app.standbyWatts || 0);
    }
  };

  // Calculations
  const resultA = calculateApplianceCost({
    watts: wattsA,
    hoursPerDay: hoursA,
    daysPerWeek: daysA,
    pricePerKwh: unitRate,
    standbyWatts: standbyA,
  });

  const appAName = APPLIANCES.find((a) => a.slug === selectedSlugA);
  const nameA = isDe ? appAName?.deName || 'Gerät A' : appAName?.enName || 'Appliance A';

  const appBName = APPLIANCES.find((a) => a.slug === selectedSlugB);
  const nameB = isDe ? appBName?.deName || 'Gerät B' : appBName?.enName || 'Appliance B';

  const comparison = showComparison
    ? compareAppliances(
        {
          name: nameA,
          watts: wattsA,
          hoursPerDay: hoursA,
          daysPerWeek: daysA,
          standbyWatts: standbyA,
        },
        {
          name: nameB,
          watts: wattsB,
          hoursPerDay: hoursB,
          daysPerWeek: daysB,
          standbyWatts: standbyB,
        },
        unitRate,
      )
    : null;

  // Format Helper
  const fmt = (penceOrCents: number) =>
    formatElectricityCost(penceOrCents, currencySymbol, currencyCode);

  const handleCopy = async () => {
    const text = isDe
      ? `Stromkosten-Berechnung (${nameA}):\n` +
        `• Leistung: ${wattsA} W | ${hoursA} Std./Tag | ${daysA} Tage/Woche\n` +
        `• Strompreis: ${unitRate} ${unitLabel}\n` +
        `• Pro Nutzung/Tag: ${fmt(resultA.costPerDay).major} (${resultA.kWhPerDay} kWh)\n` +
        `• Pro Monat: ${fmt(resultA.costPerMonth).major} (${resultA.kWhPerMonth} kWh)\n` +
        `• Pro Jahr: ${fmt(resultA.costPerYear).major} (${resultA.kWhPerYear} kWh)\n` +
        (standbyA > 0 ? `• Standby/Jahr: ${fmt(resultA.standbyCostPerYear).major}\n` : '') +
        `Quelle: Zetawala Money`
      : `Electricity Running Cost (${nameA}):\n` +
        `• Power: ${wattsA}W | ${hoursA} hrs/day | ${daysA} days/week\n` +
        `• Unit Rate: ${unitRate} ${unitLabel}\n` +
        `• Per Day/Use: ${fmt(resultA.costPerDay).major} (${resultA.kWhPerDay} kWh)\n` +
        `• Per Month: ${fmt(resultA.costPerMonth).major} (${resultA.kWhPerMonth} kWh)\n` +
        `• Per Year: ${fmt(resultA.costPerYear).major} (${resultA.kWhPerYear} kWh)\n` +
        (standbyA > 0 ? `• Standby/Year: ${fmt(resultA.standbyCostPerYear).major}\n` : '') +
        `Source: Zetawala Money`;

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
          title: isDe ? 'Stromkosten Rechner' : 'Electricity Running Cost Calculator',
          text: `${nameA}: ${fmt(resultA.costPerYear).major}/year (${resultA.kWhPerYear} kWh)`,
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
      {/* Main Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8">
        
        {/* Header / Electricity Rate Bar */}
        <div className="mb-6 p-4 rounded-xl bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900/60 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-teal-600 text-white rounded-lg">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 dark:text-teal-300">
                {isDe ? 'Aktiver Stromtarif' : 'Active Electricity Tariff'}
              </div>
              <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {priceInfo.sourceName} ({priceInfo.effectivePeriod})
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {region === 'australia' && (
              <select
                value={selectedAuState}
                onChange={(e) => handleAuStateChange(e.target.value)}
                className="text-xs font-semibold py-1.5 px-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                <option value="national">National Average (33.2c)</option>
                <option value="nsw">NSW (34.5c)</option>
                <option value="vic">Victoria VDO (28.7c)</option>
                <option value="qld">Queensland (31.8c)</option>
                <option value="sa">South Australia (41.5c)</option>
                <option value="wa">Western Australia (31.9c)</option>
                <option value="tas">Tasmania (30.5c)</option>
                <option value="act">ACT (29.2c)</option>
              </select>
            )}

            <div className="flex items-center gap-1.5">
              <label htmlFor="unitRateInput" className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                {unitLabel}:
              </label>
              <input
                id="unitRateInput"
                type="number"
                step="0.1"
                min="0"
                value={unitRate}
                onChange={(e) => setUnitRate(parseFloat(e.target.value) || 0)}
                className="w-20 text-sm font-bold py-1.5 px-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-right focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
        </div>

        {/* Comparison Toggle Button */}
        <div className="flex justify-between items-center mb-6">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {isDe ? 'Gerätekonfiguration' : 'Appliance Configuration'}
          </label>
          <button
            type="button"
            onClick={() => setShowComparison(!showComparison)}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              showComparison
                ? 'bg-teal-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <ArrowRightLeft className="w-3.5 h-3.5" />
            <span>{isDe ? '2 Geräte vergleichen' : 'Side-by-side comparison'}</span>
          </button>
        </div>

        {/* Appliance Inputs Grid */}
        <div className={`grid gap-6 ${showComparison ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
          {/* APPLIANCE A */}
          <div className={`p-4 sm:p-5 rounded-xl border ${showComparison ? 'border-teal-300 dark:border-teal-800 bg-teal-50/20 dark:bg-teal-950/10' : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40'}`}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase text-teal-700 dark:text-teal-400">
                {showComparison ? (isDe ? 'Gerät A' : 'Appliance A') : (isDe ? 'Gerät auswählen' : 'Select Appliance')}
              </span>
            </div>

            {/* Presets Dropdown */}
            <div className="mb-4">
              <label htmlFor="applianceSelectA" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {isDe ? 'Aus Vorlage laden' : 'Load from Presets'}
              </label>
              <select
                id="applianceSelectA"
                value={selectedSlugA}
                onChange={(e) => handleSelectApplianceA(e.target.value)}
                className="w-full text-sm font-medium py-2 px-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500"
              >
                {APPLIANCES.map((app) => (
                  <option key={app.slug} value={app.slug}>
                    {isDe ? app.deName : app.enName} ({app.wattageRange.defaultWatts}W)
                  </option>
                ))}
              </select>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {isDe ? 'Leistung (Watt)' : 'Wattage (Watts)'}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    step="10"
                    value={wattsA}
                    onChange={(e) => setWattsA(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full text-sm font-bold py-2 px-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-slate-400">W</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {isDe ? 'Nutzung (Std./Tag)' : 'Use (Hours/day)'}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0.01"
                    max="24"
                    step="0.25"
                    value={hoursA}
                    onChange={(e) => setHoursA(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-full text-sm font-bold py-2 px-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-slate-400">h</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {isDe ? 'Tage pro Woche' : 'Days per week'}
                </label>
                <input
                  type="number"
                  min="1"
                  max="7"
                  value={daysA}
                  onChange={(e) => setDaysA(Math.min(7, Math.max(1, parseInt(e.target.value) || 1)))}
                  className="w-full text-sm font-bold py-2 px-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Standby Wattage (Optional) */}
            <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-700/60">
              <span>{isDe ? 'Standby-Verbrauch (optional):' : 'Standby draw (optional):'}</span>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.5"
                  value={standbyA}
                  onChange={(e) => setStandbyA(Math.max(0, parseFloat(e.target.value) || 0))}
                  className="w-16 text-xs font-medium py-1 px-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded text-right"
                />
                <span>W</span>
              </div>
            </div>
          </div>

          {/* APPLIANCE B (If Comparison is Active) */}
          {showComparison && (
            <div className="p-4 sm:p-5 rounded-xl border border-indigo-300 dark:border-indigo-800 bg-indigo-50/20 dark:bg-indigo-950/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase text-indigo-700 dark:text-indigo-400">
                  {isDe ? 'Gerät B (Vergleich)' : 'Appliance B (Comparison)'}
                </span>
              </div>

              {/* Presets Dropdown */}
              <div className="mb-4">
                <label htmlFor="applianceSelectB" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {isDe ? 'Aus Vorlage laden' : 'Load from Presets'}
                </label>
                <select
                  id="applianceSelectB"
                  value={selectedSlugB}
                  onChange={(e) => handleSelectApplianceB(e.target.value)}
                  className="w-full text-sm font-medium py-2 px-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                >
                  {APPLIANCES.map((app) => (
                    <option key={app.slug} value={app.slug}>
                      {isDe ? app.deName : app.enName} ({app.wattageRange.defaultWatts}W)
                    </option>
                  ))}
                </select>
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {isDe ? 'Leistung (Watt)' : 'Wattage (Watts)'}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="1"
                      step="10"
                      value={wattsB}
                      onChange={(e) => setWattsB(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full text-sm font-bold py-2 px-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                    />
                    <span className="absolute right-3 top-2.5 text-xs text-slate-400">W</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {isDe ? 'Nutzung (Std./Tag)' : 'Use (Hours/day)'}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="0.01"
                      max="24"
                      step="0.25"
                      value={hoursB}
                      onChange={(e) => setHoursB(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="w-full text-sm font-bold py-2 px-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                    />
                    <span className="absolute right-3 top-2.5 text-xs text-slate-400">h</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {isDe ? 'Tage pro Woche' : 'Days per week'}
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="7"
                    value={daysB}
                    onChange={(e) => setDaysB(Math.min(7, Math.max(1, parseInt(e.target.value) || 1)))}
                    className="w-full text-sm font-bold py-2 px-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Standby Wattage */}
              <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-700/60">
                <span>{isDe ? 'Standby-Verbrauch (optional):' : 'Standby draw (optional):'}</span>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.5"
                    value={standbyB}
                    onChange={(e) => setStandbyB(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-16 text-xs font-medium py-1 px-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded text-right"
                  />
                  <span>W</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* COMPARISON CALLOUT (IF ACTIVE) */}
        {comparison && (
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 border border-teal-300 dark:border-teal-700">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-emerald-600 text-white rounded-lg">
                <TrendingDown className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {comparison.cheaperAppliance === 'equal' ? (
                    isDe ? 'Beide Geräte verursachen exakt die gleichen jährlichen Stromkosten.' : 'Both appliances have identical annual electricity costs.'
                  ) : comparison.cheaperAppliance === 'A' ? (
                    isDe
                      ? `${nameA} ist ${comparison.percentageSavings}% günstiger als ${nameB}!`
                      : `${nameA} is ${comparison.percentageSavings}% cheaper to run than ${nameB}!`
                  ) : (
                    isDe
                      ? `${nameB} ist ${comparison.percentageSavings}% günstiger als ${nameA}!`
                      : `${nameB} is ${comparison.percentageSavings}% cheaper to run than ${nameA}!`
                  )}
                </div>
                {comparison.cheaperAppliance !== 'equal' && (
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {isDe
                      ? `Ersparnis: ${fmt(comparison.annualSavings).major} pro Jahr durch Wechsel zu ${comparison.cheaperAppliance === 'A' ? nameA : nameB} (Differenz: ${Math.abs(comparison.differenceKwhPerYear)} kWh/Jahr).`
                      : `Annual Savings: ${fmt(comparison.annualSavings).major}/year by choosing ${comparison.cheaperAppliance === 'A' ? nameA : nameB} (Difference: ${Math.abs(comparison.differenceKwhPerYear)} kWh/year).`}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* RESULT SUMMARY CARDS */}
        <div className="mt-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
            {showComparison
              ? isDe ? 'Kostenvergleich im Überblick' : 'Side-by-side Cost Summary'
              : isDe ? 'Berechnete Stromkosten' : 'Calculated Running Costs'}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {/* Card 1: Per Day */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                {isDe ? 'Pro Nutzung / Tag' : 'Per Use / Day'}
              </span>
              <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {fmt(resultA.costPerDay).major}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {resultA.kWhPerDay} kWh
              </div>
              {comparison && (
                <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                  {nameB}: {fmt(comparison.applianceB.costPerDay).major}
                </div>
              )}
            </div>

            {/* Card 2: Per Week */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                {isDe ? 'Pro Woche' : 'Per Week'}
              </span>
              <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {fmt(resultA.costPerWeek).major}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {resultA.kWhPerWeek} kWh
              </div>
              {comparison && (
                <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                  {nameB}: {fmt(comparison.applianceB.costPerWeek).major}
                </div>
              )}
            </div>

            {/* Card 3: Per Month */}
            <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/60">
              <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 block mb-1">
                {isDe ? 'Pro Monat' : 'Per Month'}
              </span>
              <div className="text-xl sm:text-2xl font-black text-teal-900 dark:text-teal-100">
                {fmt(resultA.costPerMonth).major}
              </div>
              <div className="text-xs text-teal-700 dark:text-teal-300/80 mt-0.5">
                {resultA.kWhPerMonth} kWh
              </div>
              {comparison && (
                <div className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 mt-2 pt-2 border-t border-teal-200 dark:border-teal-800">
                  {nameB}: {fmt(comparison.applianceB.costPerMonth).major}
                </div>
              )}
            </div>

            {/* Card 4: Per Year */}
            <div className="p-4 rounded-xl bg-teal-600 text-white shadow-sm">
              <span className="text-xs font-semibold text-teal-100 block mb-1">
                {isDe ? 'Pro Jahr (Gesamt)' : 'Per Year (Total)'}
              </span>
              <div className="text-xl sm:text-2xl font-black">
                {fmt(resultA.totalCostPerYearWithStandby).major}
              </div>
              <div className="text-xs text-teal-100 mt-0.5">
                {roundNumber(resultA.kWhPerYear + resultA.standbyKwhPerYear, 1)} kWh
              </div>
              {comparison && (
                <div className="text-xs font-semibold text-white/90 mt-2 pt-2 border-t border-white/20">
                  {nameB}: {fmt(comparison.applianceB.totalCostPerYearWithStandby).major}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ACTION BAR: Copy, Share, Print */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            >
              {copied ? <Check className="w-4 h-4 text-teal-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? (isDe ? 'Kopiert!' : 'Copied!') : (isDe ? 'Ergebnis kopieren' : 'Copy Result')}</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            >
              <Share2 className="w-4 h-4" />
              <span>{isDe ? 'Teilen' : 'Share'}</span>
            </button>
          </div>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          >
            <Printer className="w-4 h-4" />
            <span>{isDe ? 'Drucken' : 'Print'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}

function roundNumber(num: number, decimals: number = 2): number {
  const f = Math.pow(10, decimals);
  return Math.round(num * f) / f;
}
