'use client';

import React, { useState, useId } from 'react';
import {
  compareEvVsPetrol,
  DistanceUnit,
  FuelConsumptionUnit,
  EvEfficiencyUnit,
  EvVsPetrolComparisonResult,
} from '@/lib/travel/fuel';
import { formatCurrency, formatNumber } from '@/lib/formatters';
import {
  Zap,
  Fuel,
  TrendingDown,
  Sparkles,
  Copy,
  Check,
  Share2,
  Printer,
  Calendar,
  MapPin,
  ArrowRight,
} from 'lucide-react';

export function EvVsPetrolTool() {
  const distanceId = useId();
  const evEfficiencyId = useId();
  const elecPriceId = useId();
  const petrolMpgId = useId();
  const fuelPriceId = useId();

  // Mode: Single Trip or Annual
  const [calculationMode, setCalculationMode] = useState<'annual' | 'trip'>('annual');
  const [distanceUnit, setDistanceUnit] = useState<DistanceUnit>('miles');
  const [rawDistance, setRawDistance] = useState<string>('10000'); // 10,000 miles annual default

  // EV parameters (default ~17.5 kWh/100km or 28 kWh/100mi, £0.245/kWh UK Ofgem cap)
  const [evEffUnit, setEvEffUnit] = useState<EvEfficiencyUnit>('kwh_100mi');
  const [rawEvEfficiency, setRawEvEfficiency] = useState<string>('28');
  const [rawElecPrice, setRawElecPrice] = useState<string>('0.245');

  // Petrol parameters (default 40 UK mpg, £1.385 / L)
  const [petrolConsUnit, setPetrolConsUnit] = useState<FuelConsumptionUnit>('uk_mpg');
  const [rawPetrolConsumption, setRawPetrolConsumption] = useState<string>('40');
  const [rawFuelPrice, setRawFuelPrice] = useState<string>('1.385');

  const [copied, setCopied] = useState<boolean>(false);

  const parsedDistance = Math.max(0, parseFloat(rawDistance) || 0);
  const parsedEvEfficiency = Math.max(0, parseFloat(rawEvEfficiency) || 0);
  const parsedElecPrice = Math.max(0, parseFloat(rawElecPrice) || 0);
  const parsedPetrolConsumption = Math.max(0, parseFloat(rawPetrolConsumption) || 0);
  const parsedFuelPrice = Math.max(0, parseFloat(rawFuelPrice) || 0);

  const comparison: EvVsPetrolComparisonResult = compareEvVsPetrol({
    distance: parsedDistance,
    distanceUnit,
    petrolConsumption: parsedPetrolConsumption,
    petrolConsumptionUnit: petrolConsUnit,
    petrolPricePerLitre: parsedFuelPrice,
    evEfficiency: parsedEvEfficiency,
    evEfficiencyUnit: evEffUnit,
    electricityPricePerKwh: parsedElecPrice,
    annualDistance: parsedDistance,
  });

  const costPetrol = calculationMode === 'annual' ? comparison.annualPetrolCost : comparison.petrolCost;
  const costEv = calculationMode === 'annual' ? comparison.annualEvCost : comparison.evCost;
  const savings = calculationMode === 'annual' ? comparison.annualSavings : comparison.savings;

  const handleCopy = async () => {
    const text =
      `⚡ EV vs Petrol Cost Comparison (${calculationMode === 'annual' ? 'Annual ' : 'Trip '} ${parsedDistance} ${distanceUnit}):\n` +
      `• Petrol Car Cost: ${formatCurrency(costPetrol, 'en-GB', 'GBP')} (${formatCurrency(comparison.petrolCostPerMile, 'en-GB', 'GBP')}/mile)\n` +
      `• Electric Vehicle (EV) Cost: ${formatCurrency(costEv, 'en-GB', 'GBP')} (${formatCurrency(comparison.evCostPerMile, 'en-GB', 'GBP')}/mile)\n` +
      `• Total Money Saved: ${formatCurrency(savings, 'en-GB', 'GBP')} (${comparison.savingsPercent.toFixed(1)}% savings)\n` +
      `• Savings per Mile: ${formatCurrency(comparison.savingsPerMile, 'en-GB', 'GBP')}/mi (${formatCurrency(comparison.savingsPerKm, 'en-GB', 'GBP')}/km)`;

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
          title: `EV vs Petrol Savings: Save ${formatCurrency(savings, 'en-GB', 'GBP')}`,
          text: `Switching to an EV saves ${formatCurrency(savings, 'en-GB', 'GBP')} over ${parsedDistance} ${distanceUnit}!`,
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

  const setCarPreset = (
    evName: string,
    kwh100mi: number,
    petrolName: string,
    petrolMpg: number,
  ) => {
    setEvEffUnit('kwh_100mi');
    setRawEvEfficiency(String(kwh100mi));
    setPetrolConsUnit('uk_mpg');
    setRawPetrolConsumption(String(petrolMpg));
  };

  return (
    <div className="w-full space-y-8">
      {/* Top Banner: Mode Selection & Unit Toggle */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
            Comparison Horizon
          </label>
          <div className="flex items-center rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
            <button
              type="button"
              onClick={() => {
                setCalculationMode('annual');
                if (parsedDistance < 1000) setRawDistance('10000');
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                calculationMode === 'annual'
                  ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Annual Driving (Yearly Savings)</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setCalculationMode('trip');
                if (parsedDistance > 1000) setRawDistance('250');
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                calculationMode === 'trip'
                  ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Single Road Trip</span>
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
            Distance Unit
          </label>
          <div className="flex items-center rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
            <button
              type="button"
              onClick={() => setDistanceUnit('miles')}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                distanceUnit === 'miles'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Miles
            </button>
            <button
              type="button"
              onClick={() => setDistanceUnit('km')}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                distanceUnit === 'km'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Kilometres
            </button>
          </div>
        </div>
      </div>

      {/* Inputs Grid: Side-by-Side EV vs Petrol */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* EV Panel */}
        <div className="bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800/80 border border-emerald-200 dark:border-emerald-900/40 rounded-2xl p-6 shadow-sm space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-emerald-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-950/80 rounded-xl text-emerald-800 dark:text-emerald-300">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Electric Vehicle (EV)
              </h3>
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
              Zero Tailpipe Emissions
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor={evEfficiencyId}
                  className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                >
                  EV Efficiency
                </label>
                <select
                  value={evEffUnit}
                  onChange={(e) => setEvEffUnit(e.target.value as EvEfficiencyUnit)}
                  className="text-xs font-medium bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2 py-1"
                >
                  <option value="kwh_100mi">kWh / 100 miles</option>
                  <option value="kwh_100km">kWh / 100 km</option>
                  <option value="mi_kwh">Miles / kWh</option>
                </select>
              </div>
              <div className="relative">
                <input
                  id={evEfficiencyId}
                  type="number"
                  step="0.1"
                  min="1"
                  value={rawEvEfficiency}
                  onChange={(e) => setRawEvEfficiency(e.target.value)}
                  className="w-full text-lg font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-emerald-300 dark:border-slate-700 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                  {evEffUnit === 'mi_kwh' ? 'mi/kWh' : 'kWh/100'}
                </span>
              </div>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1">
                Typical: Tesla Model 3 ~26 kWh/100mi; SUV EV ~34 kWh/100mi
              </span>
            </div>

            <div>
              <label
                htmlFor={elecPriceId}
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Electricity Cost (£ / kWh)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
                  £
                </span>
                <input
                  id={elecPriceId}
                  type="number"
                  step="0.01"
                  min="0.01"
                  value={rawElecPrice}
                  onChange={(e) => setRawElecPrice(e.target.value)}
                  className="w-full text-lg font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-emerald-300 dark:border-slate-700 rounded-xl pl-8 pr-16 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                  / kWh
                </span>
              </div>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1">
                UK Ofgem Cap ~£0.245/kWh (Home off-peak EV tariffs ~£0.07/kWh)
              </span>
            </div>
          </div>
        </div>

        {/* Petrol Panel */}
        <div className="bg-gradient-to-br from-amber-50/70 via-white to-orange-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800/80 border border-amber-200 dark:border-amber-900/40 rounded-2xl p-6 shadow-sm space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-amber-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-amber-100 dark:bg-amber-950/80 rounded-xl text-amber-800 dark:text-amber-300">
                <Fuel className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Petrol / Diesel Car
              </h3>
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
              Internal Combustion (ICE)
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor={petrolMpgId}
                  className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                >
                  Fuel Economy
                </label>
                <select
                  value={petrolConsUnit}
                  onChange={(e) => setPetrolConsUnit(e.target.value as FuelConsumptionUnit)}
                  className="text-xs font-medium bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2 py-1"
                >
                  <option value="uk_mpg">UK MPG</option>
                  <option value="l_100km">L / 100km</option>
                  <option value="us_mpg">US MPG</option>
                </select>
              </div>
              <div className="relative">
                <input
                  id={petrolMpgId}
                  type="number"
                  step="0.5"
                  min="5"
                  value={rawPetrolConsumption}
                  onChange={(e) => setRawPetrolConsumption(e.target.value)}
                  className="w-full text-lg font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-amber-300 dark:border-slate-700 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                  {petrolConsUnit === 'l_100km' ? 'L/100' : 'MPG'}
                </span>
              </div>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1">
                Typical: Small petrol ~48 mpg; Family car ~40 mpg; SUV ~30 mpg
              </span>
            </div>

            <div>
              <label
                htmlFor={fuelPriceId}
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Fuel Price (£ / Litre)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
                  £
                </span>
                <input
                  id={fuelPriceId}
                  type="number"
                  step="0.001"
                  min="0.5"
                  value={rawFuelPrice}
                  onChange={(e) => setRawFuelPrice(e.target.value)}
                  className="w-full text-lg font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-amber-300 dark:border-slate-700 rounded-xl pl-8 pr-16 py-2.5 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                  / litre
                </span>
              </div>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1">
                DESNZ Weekly Road Fuel Benchmark: ~£1.385/L petrol, £1.432/L diesel
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Distance Input Field */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm">
        <label
          htmlFor={distanceId}
          className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
        >
          {calculationMode === 'annual' ? 'Annual Driving Distance' : 'Trip Distance'}
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <input
              id={distanceId}
              type="number"
              step="any"
              min="1"
              value={rawDistance}
              onChange={(e) => setRawDistance(e.target.value)}
              className="w-full text-xl font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
              {distanceUnit}
            </span>
          </div>

          <div className="flex items-center gap-1.5 self-center">
            {(calculationMode === 'annual' ? [6000, 10000, 15000, 20000] : [50, 100, 250, 500]).map(
              (d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setRawDistance(String(d))}
                  className="px-3 py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-teal-50 hover:text-teal-700 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                >
                  {d} {distanceUnit}
                </button>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Hero Comparison Results Card */}
      <div className="bg-gradient-to-br from-teal-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-teal-800/40 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-teal-800/40 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                {calculationMode === 'annual' ? 'Projected Annual Savings' : 'Trip Savings Summary'}
              </span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-black text-white mt-1">
              Save {formatCurrency(savings, 'en-GB', 'GBP')}{' '}
              <span className="text-lg font-bold text-emerald-400">
                ({comparison.savingsPercent.toFixed(0)}% less)
              </span>
            </h4>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 py-2 px-3.5 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/40 text-teal-200 text-xs font-bold transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              type="button"
              onClick={handleShare}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all"
              title="Share Comparison"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all"
              title="Print Summary"
            >
              <Printer className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Side-by-Side Total Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Petrol Cost Card */}
          <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-600/30 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Petrol / Diesel Car
              </span>
              <Fuel className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-3xl font-extrabold text-amber-200">
              {formatCurrency(costPetrol, 'en-GB', 'GBP')}
            </div>
            <div className="text-xs text-amber-300/80">
              Running cost: <strong>{formatCurrency(comparison.petrolCostPerMile, 'en-GB', 'GBP')}/mile</strong> ({formatCurrency(comparison.petrolCostPerKm, 'en-GB', 'GBP')}/km)
            </div>
          </div>

          {/* EV Cost Card */}
          <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Electric Vehicle (EV)
              </span>
              <Zap className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-extrabold text-emerald-200">
              {formatCurrency(costEv, 'en-GB', 'GBP')}
            </div>
            <div className="text-xs text-emerald-300/80">
              Running cost: <strong>{formatCurrency(comparison.evCostPerMile, 'en-GB', 'GBP')}/mile</strong> ({formatCurrency(comparison.evCostPerKm, 'en-GB', 'GBP')}/km)
            </div>
          </div>
        </div>

        {/* Per-Mile / Per-Km Delta Breakdown */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div>
            <span className="text-slate-400 block mb-0.5">Per-Mile Savings</span>
            <span className="text-base font-bold text-emerald-400">
              {formatCurrency(comparison.savingsPerMile, 'en-GB', 'GBP')} saved / mile
            </span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">Per-Kilometre Savings</span>
            <span className="text-base font-bold text-emerald-400">
              {formatCurrency(comparison.savingsPerKm, 'en-GB', 'GBP')} saved / km
            </span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">Estimated 5-Year Savings</span>
            <span className="text-base font-bold text-emerald-300">
              {formatCurrency(comparison.annualSavings * 5, 'en-GB', 'GBP')}
            </span>
          </div>
        </div>
      </div>

      {/* Preset Vehicles Quick Selection */}
      <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-6">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
          <span>Real-World Model Comparisons (Click to Apply)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            type="button"
            onClick={() => setCarPreset('Tesla Model 3', 25, 'BMW 320i', 42)}
            className="p-3 text-left bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-400 rounded-xl transition-all"
          >
            <span className="text-xs font-bold text-slate-900 dark:text-white block">
              Saloon: Tesla Model 3 vs BMW 320i
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
              25 kWh/100mi vs 42 UK MPG
            </span>
          </button>

          <button
            type="button"
            onClick={() => setCarPreset('Tesla Model Y', 28, 'Nissan Qashqai', 38)}
            className="p-3 text-left bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-400 rounded-xl transition-all"
          >
            <span className="text-xs font-bold text-slate-900 dark:text-white block">
              Family SUV: Model Y vs Qashqai
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
              28 kWh/100mi vs 38 UK MPG
            </span>
          </button>

          <button
            type="button"
            onClick={() => setCarPreset('MG4 EV', 26, 'VW Golf 1.5 TSI', 45)}
            className="p-3 text-left bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-400 rounded-xl transition-all"
          >
            <span className="text-xs font-bold text-slate-900 dark:text-white block">
              Hatchback: MG4 EV vs VW Golf
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
              26 kWh/100mi vs 45 UK MPG
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EvVsPetrolTool;
