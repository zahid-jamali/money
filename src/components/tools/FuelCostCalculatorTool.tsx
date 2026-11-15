'use client';

import React, { useState, useId, useMemo } from 'react';
import {
  calculateFuelTripCost,
  DistanceUnit,
  FuelConsumptionUnit,
  FuelTripResult,
} from '@/lib/travel/fuel';
import { getFuelRules } from '@/rules/fuel/prices';
import { formatCurrency, formatNumber } from '@/lib/formatters';
import {
  Fuel,
  Users,
  Copy,
  Check,
  Share2,
  Printer,
  Info,
  Car,
  RotateCcw,
  Receipt,
  MapPin,
  TrendingUp,
} from 'lucide-react';

export interface FuelCostCalculatorToolProps {
  region: 'uk' | 'australia' | 'canada' | 'de';
  defaultUnit?: 'uk_mpg' | 'l_100km';
}

const REGION_LOCALES: Record<string, string> = {
  uk: 'en-GB',
  australia: 'en-AU',
  canada: 'en-CA',
  de: 'de-DE',
};

export function FuelCostCalculatorTool({
  region,
  defaultUnit,
}: FuelCostCalculatorToolProps) {
  const rules = useMemo(() => getFuelRules(region), [region]);
  const locale = REGION_LOCALES[region] || 'en-GB';
  const currency = rules.currency.code;

  const distanceInputId = useId();
  const consumptionInputId = useId();
  const priceInputId = useId();
  const tollsInputId = useId();
  const parkingInputId = useId();

  // Region-specific default distance and consumption
  const initialDistanceUnit: DistanceUnit = rules.defaultDistanceUnit;
  const initialConsumptionUnit: FuelConsumptionUnit =
    defaultUnit || (rules.defaultConsumptionUnit as FuelConsumptionUnit);

  const [fuelType, setFuelType] = useState<'petrol' | 'diesel'>('petrol');
  const [distanceUnit, setDistanceUnit] = useState<DistanceUnit>(initialDistanceUnit);
  const [rawDistance, setRawDistance] = useState<string>(
    initialDistanceUnit === 'miles' ? '100' : '150',
  );

  const [consumptionUnit, setConsumptionUnit] = useState<FuelConsumptionUnit>(initialConsumptionUnit);
  const [rawConsumption, setRawConsumption] = useState<string>(
    initialConsumptionUnit === 'uk_mpg' ? '42' : '6.5',
  );

  // Price in main currency per litre (£, $, or €)
  const defaultPrice =
    fuelType === 'petrol'
      ? rules.petrol.priceInMainCurrency
      : rules.diesel.priceInMainCurrency;

  const [rawPrice, setRawPrice] = useState<string>(defaultPrice.toFixed(3));
  const [isRoundTrip, setIsRoundTrip] = useState<boolean>(false);
  const [passengers, setPassengers] = useState<number>(1);
  const [rawTolls, setRawTolls] = useState<string>('0');
  const [rawParking, setRawParking] = useState<string>('0');
  const [copied, setCopied] = useState<boolean>(false);

  // Switch fuel type updates default price if user hasn't heavily customized
  const handleFuelTypeChange = (newType: 'petrol' | 'diesel') => {
    setFuelType(newType);
    const newDefaultPrice =
      newType === 'petrol'
        ? rules.petrol.priceInMainCurrency
        : rules.diesel.priceInMainCurrency;
    setRawPrice(newDefaultPrice.toFixed(3));
  };

  const parsedDistance = Math.max(0, parseFloat(rawDistance) || 0);
  const parsedConsumption = Math.max(0, parseFloat(rawConsumption) || 0);
  const parsedPrice = Math.max(0, parseFloat(rawPrice) || 0);
  const parsedTolls = Math.max(0, parseFloat(rawTolls) || 0);
  const parsedParking = Math.max(0, parseFloat(rawParking) || 0);

  const result: FuelTripResult = calculateFuelTripCost({
    distance: parsedDistance,
    distanceUnit,
    consumption: parsedConsumption,
    consumptionUnit,
    fuelPrice: parsedPrice,
    isRoundTrip,
    passengers,
    tolls: parsedTolls,
    parking: parsedParking,
  });

  const distancePresets = distanceUnit === 'miles' ? [25, 50, 100, 200, 350] : [50, 100, 200, 350, 500];

  const consumptionPresets =
    consumptionUnit === 'uk_mpg'
      ? [
          { label: 'Small Hatchback', value: 55 },
          { label: 'Family Saloon', value: 42 },
          { label: 'Crossover / SUV', value: 32 },
          { label: 'Van / Large 4x4', value: 24 },
        ]
      : [
          { label: 'Small Car (5.0 L)', value: 5.0 },
          { label: 'Family Car (6.8 L)', value: 6.8 },
          { label: 'SUV (8.8 L)', value: 8.8 },
          { label: 'Van (11.5 L)', value: 11.5 },
        ];

  const handleCopy = async () => {
    const summaryText =
      `🚗 Fuel Cost Trip Calculation (${rules.countryName}):\n` +
      `• Journey: ${result.totalDistance} ${result.distanceUnit} ${isRoundTrip ? '(Round Trip)' : '(One-Way)'}\n` +
      `• Fuel Consumption: ${parsedConsumption} ${consumptionUnit.replace('_', ' ').toUpperCase()}\n` +
      `• Fuel Price: ${formatCurrency(parsedPrice, locale, currency)}/L\n` +
      `• Fuel Used: ${formatNumber(result.litresUsed, locale, 2)} L (${formatNumber(result.ukGallonsUsed, locale, 2)} imp gal)\n` +
      `• Fuel Cost: ${formatCurrency(result.fuelCost, locale, currency)}\n` +
      (result.extraCosts > 0
        ? `• Tolls & Parking: ${formatCurrency(result.extraCosts, locale, currency)}\n`
        : '') +
      `• Total Trip Cost: ${formatCurrency(result.totalCost, locale, currency)}\n` +
      (passengers > 1
        ? `• Cost per Person (${passengers} passengers): ${formatCurrency(result.costPerPerson, locale, currency)}\n`
        : '') +
      `• Running Cost: ${formatCurrency(result.costPerMile, locale, currency)}/mile (${formatCurrency(result.costPerKm, locale, currency)}/km)`;

    try {
      await navigator.clipboard.writeText(summaryText);
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
          title: `Trip Fuel Cost: ${formatCurrency(result.totalCost, locale, currency)}`,
          text: `Total trip fuel cost: ${formatCurrency(result.totalCost, locale, currency)} for ${result.totalDistance} ${result.distanceUnit}.`,
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
      {/* Main Tool Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-5 sm:p-7 space-y-6">
          {/* Header & Fuel Type Toggle */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Fuel Type
            </label>
            <div className="grid grid-cols-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl gap-1.5">
              <button
                type="button"
                onClick={() => handleFuelTypeChange('petrol')}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all ${
                  fuelType === 'petrol'
                    ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Fuel className="w-4 h-4" />
                <span>{region === 'de' ? 'Benzin (Super E10)' : 'Petrol / Gasoline'}</span>
              </button>
              <button
                type="button"
                onClick={() => handleFuelTypeChange('diesel')}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all ${
                  fuelType === 'diesel'
                    ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Fuel className="w-4 h-4" />
                <span>Diesel</span>
              </button>
            </div>
          </div>

          {/* Distance Input */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor={distanceInputId}
                className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-teal-600" />
                Journey Distance
              </label>
              <div className="flex items-center rounded-lg bg-slate-100 dark:bg-slate-800 p-0.5 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setDistanceUnit('miles')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    distanceUnit === 'miles'
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-bold'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  Miles
                </button>
                <button
                  type="button"
                  onClick={() => setDistanceUnit('km')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    distanceUnit === 'km'
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-bold'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  Kilometres
                </button>
              </div>
            </div>

            <div className="relative">
              <input
                id={distanceInputId}
                type="number"
                min="0"
                step="any"
                value={rawDistance}
                onChange={(e) => setRawDistance(e.target.value)}
                className="w-full text-lg sm:text-xl font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all pr-16"
                placeholder="0"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400">
                {distanceUnit}
              </span>
            </div>

            {/* Quick Distance Presets */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-[11px] text-slate-400 self-center mr-1">Presets:</span>
              {distancePresets.map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setRawDistance(String(d))}
                  className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-teal-50 hover:text-teal-700 dark:hover:bg-slate-700 transition-colors"
                >
                  {d} {distanceUnit}
                </button>
              ))}
            </div>
          </div>

          {/* Consumption Input */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor={consumptionInputId}
                className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
              >
                <Car className="w-3.5 h-3.5 text-teal-600" />
                Fuel Consumption (Fuel Economy)
              </label>
              <select
                aria-label="Fuel Consumption Unit"
                value={consumptionUnit}
                onChange={(e) => setConsumptionUnit(e.target.value as FuelConsumptionUnit)}
                className="text-xs font-medium bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg px-2 py-1 focus:ring-1 focus:ring-teal-500"
              >
                <option value="uk_mpg">UK MPG (Imperial)</option>
                <option value="l_100km">L/100km (Metric)</option>
                <option value="us_mpg">US MPG</option>
                <option value="km_l">km/L</option>
              </select>
            </div>

            <div className="relative">
              <input
                id={consumptionInputId}
                type="number"
                min="0"
                step="any"
                value={rawConsumption}
                onChange={(e) => setRawConsumption(e.target.value)}
                className="w-full text-lg sm:text-xl font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all pr-24"
                placeholder="0"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 uppercase">
                {consumptionUnit.replace('_', ' ')}
              </span>
            </div>

            {/* Efficiency Presets */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-1">
              {consumptionPresets.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => setRawConsumption(String(preset.value))}
                  className="text-[11px] p-2 text-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-teal-50 hover:text-teal-700 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className="block font-medium truncate">{preset.label}</span>
                  <span className="font-bold text-teal-700 dark:text-teal-400">
                    {preset.value} {consumptionUnit === 'uk_mpg' ? 'MPG' : 'L/100'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Fuel Price Input */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor={priceInputId}
                className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
              >
                <Receipt className="w-3.5 h-3.5 text-teal-600" />
                Fuel Price ({rules.currency.symbol} per Litre)
              </label>
              <button
                type="button"
                onClick={() => setRawPrice(defaultPrice.toFixed(3))}
                className="text-xs text-teal-600 hover:text-teal-700 dark:text-teal-400 flex items-center gap-1 hover:underline"
              >
                <RotateCcw className="w-3 h-3" />
                Reset to official ({rules.currency.symbol}{defaultPrice.toFixed(3)})
              </button>
            </div>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-slate-400">
                {rules.currency.symbol}
              </span>
              <input
                id={priceInputId}
                type="number"
                min="0"
                step="0.001"
                value={rawPrice}
                onChange={(e) => setRawPrice(e.target.value)}
                className="w-full text-lg sm:text-xl font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 rounded-xl pl-9 pr-24 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                placeholder="0.000"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                per litre
              </span>
            </div>

            <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>
                Default benchmark: {fuelType === 'petrol' ? rules.petrol.name : rules.diesel.name} at{' '}
                {fuelType === 'petrol'
                  ? `${rules.petrol.pricePerLitre.value} ${rules.petrol.unitLabel}`
                  : `${rules.diesel.pricePerLitre.value} ${rules.diesel.unitLabel}`}
              </span>
            </p>
          </div>

          {/* Toggle: Round Trip & Passengers */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <div>
                <span className="text-sm font-bold text-slate-900 dark:text-white block">
                  Round-Trip (Return Journey)
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Doubles total mileage to {result.totalDistance} {result.distanceUnit}
                </span>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={isRoundTrip}
                onClick={() => setIsRoundTrip(!isRoundTrip)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 ${
                  isRoundTrip ? 'bg-teal-600' : 'bg-slate-300 dark:bg-slate-700'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                    isRoundTrip ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Passenger Split */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-teal-600" />
                  Split Cost Between Passengers
                </label>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-400 border border-teal-200 dark:border-teal-800">
                  {passengers} {passengers === 1 ? 'person' : 'people'}
                </span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setPassengers(num)}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                      passengers === num
                        ? 'bg-teal-600 border-teal-600 text-white shadow-xs'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Costs (Tolls & Parking) */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="space-y-1">
                <label
                  htmlFor={tollsInputId}
                  className="text-xs font-semibold text-slate-600 dark:text-slate-400"
                >
                  Tolls ({rules.currency.symbol})
                </label>
                <input
                  id={tollsInputId}
                  type="number"
                  min="0"
                  step="0.5"
                  value={rawTolls}
                  onChange={(e) => setRawTolls(e.target.value)}
                  className="w-full text-sm font-semibold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 focus:ring-1 focus:ring-teal-500"
                  placeholder="0.00"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor={parkingInputId}
                  className="text-xs font-semibold text-slate-600 dark:text-slate-400"
                >
                  Parking / Extra ({rules.currency.symbol})
                </label>
                <input
                  id={parkingInputId}
                  type="number"
                  min="0"
                  step="0.5"
                  value={rawParking}
                  onChange={(e) => setRawParking(e.target.value)}
                  className="w-full text-sm font-semibold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 focus:ring-1 focus:ring-teal-500"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Card Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div className="bg-gradient-to-br from-teal-900 via-slate-900 to-slate-950 text-white rounded-2xl shadow-xl p-6 sm:p-7 border border-teal-800/50 flex-1 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Top Meta */}
              <div className="flex items-center justify-between border-b border-teal-800/40 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-xs font-medium uppercase tracking-wider text-teal-300">
                    Trip Cost Estimate
                  </span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-200 border border-teal-500/30">
                  {result.totalDistance} {result.distanceUnit}
                </span>
              </div>

              {/* Big Primary Metric */}
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-1">
                  Total Journey Cost
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                  {formatCurrency(result.totalCost, locale, currency)}
                </div>
                <p className="text-xs text-teal-200/80 mt-1">
                  Fuel: {formatCurrency(result.fuelCost, locale, currency)}
                  {result.extraCosts > 0 && ` + Extras: ${formatCurrency(result.extraCosts, locale, currency)}`}
                </p>
              </div>

              {/* Per Passenger Highlight */}
              {passengers > 1 && (
                <div className="p-3.5 rounded-xl bg-teal-800/40 border border-teal-600/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-teal-200 font-bold block">
                        Cost Per Person ({passengers} Passengers)
                      </span>
                      <span className="text-xs text-slate-300">Equal split of fuel and extras</span>
                    </div>
                    <div className="text-2xl font-black text-teal-200">
                      {formatCurrency(result.costPerPerson, locale, currency)}
                    </div>
                  </div>
                </div>
              )}

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-teal-800/40 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-300 block mb-0.5 font-medium">Fuel Required</span>
                  <span className="text-base font-bold text-white block">
                    {formatNumber(result.litresUsed, locale, 2)} Litres
                  </span>
                  <span className="text-[11px] text-teal-300">
                    {formatNumber(result.ukGallonsUsed, locale, 2)} imp gal
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-300 block mb-0.5 font-medium">Cost per Distance</span>
                  <span className="text-base font-bold text-white block">
                    {formatCurrency(result.costPerMile, locale, currency)}/mi
                  </span>
                  <span className="text-[11px] text-teal-300">
                    {formatCurrency(result.costPerKm, locale, currency)}/km
                  </span>
                </div>
              </div>

              {/* Breakdown List */}
              <div className="space-y-2 pt-2 border-t border-teal-800/40 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Effective Distance:</span>
                  <span className="font-semibold text-white">
                    {formatNumber(result.distanceMiles, locale, 1)} mi / {formatNumber(result.distanceKm, locale, 1)} km
                  </span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Consumption Rate:</span>
                  <span className="font-semibold text-white">
                    {formatNumber(result.consumptionLPer100Km, locale, 2)} L/100km
                  </span>
                </div>
                {result.tolls > 0 && (
                  <div className="flex justify-between text-slate-300">
                    <span>Tolls:</span>
                    <span className="font-semibold text-white">
                      {formatCurrency(result.tolls, locale, currency)}
                    </span>
                  </div>
                )}
                {result.parking > 0 && (
                  <div className="flex justify-between text-slate-300">
                    <span>Parking & Other:</span>
                    <span className="font-semibold text-white">
                      {formatCurrency(result.parking, locale, currency)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Actions: Copy, Share, Print */}
            <div className="pt-6 mt-6 border-t border-teal-800/40 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/40 text-teal-200 text-xs font-bold transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-teal-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <button
                type="button"
                onClick={handleShare}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-all"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-all"
                title="Print Calculation"
              >
                <Printer className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Official Fuel Price Reference Card */}
      <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-4 sm:p-6">
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 bg-teal-100 dark:bg-teal-950/80 rounded-xl text-teal-800 dark:text-teal-300 shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="space-y-2 text-xs">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Official Road Fuel Price Benchmarks ({rules.countryName})
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 block text-[11px]">
                  {rules.petrol.name}
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {rules.petrol.pricePerLitre.value} {rules.petrol.unitLabel}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  ({rules.currency.symbol}{rules.petrol.priceInMainCurrency.toFixed(3)}/L)
                </span>
              </div>

              <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 block text-[11px]">
                  {rules.diesel.name}
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {rules.diesel.pricePerLitre.value} {rules.diesel.unitLabel}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  ({rules.currency.symbol}{rules.diesel.priceInMainCurrency.toFixed(3)}/L)
                </span>
              </div>

              <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 block text-[11px]">
                  EV Electricity Rate
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {rules.electricity.pricePerKwh.value} {rules.electricity.unitLabel}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  ({rules.currency.symbol}{rules.electricity.priceInMainCurrency.toFixed(3)}/kWh)
                </span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-1">
              Official data source:{' '}
              <a
                href={rules.petrol.pricePerLitre.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
              >
                {rules.countryName} Government Official Fuel Statistics
              </a>
              . Prices verified for 2026.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FuelCostCalculatorTool;
