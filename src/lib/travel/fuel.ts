/**
 * Travel and Road Fuel Calculation Engine
 * Pure TypeScript functions without React dependencies.
 */

// Precise physical and statutory conversion factors
export const KM_PER_MILE = 1.609344;
export const MILES_PER_KM = 1 / KM_PER_MILE; // 0.621371192237334
export const LITRES_PER_UK_GALLON = 4.54609;
export const LITRES_PER_US_GALLON = 3.785411784;

// Standard conversion constants:
// L/100km = (100 / 1.609344) * 4.54609 / uk_mpg = 282.4809363 / uk_mpg ≈ 282.481 / uk_mpg
export const UK_MPG_FACTOR = 282.481;
// L/100km = (100 / 1.609344) * 3.785411784 / us_mpg = 235.214583 / us_mpg ≈ 235.215 / us_mpg
export const US_MPG_FACTOR = 235.215;
export const KM_L_FACTOR = 100;

export type DistanceUnit = 'miles' | 'km';
export type FuelConsumptionUnit = 'l_100km' | 'uk_mpg' | 'us_mpg' | 'km_l';
export type EvEfficiencyUnit = 'kwh_100km' | 'kwh_100mi' | 'mi_kwh' | 'km_kwh';

// ==========================================
// 1. UNIT CONVERSIONS
// ==========================================

export function milesToKm(miles: number): number {
  if (miles <= 0 || !Number.isFinite(miles)) return 0;
  return miles * KM_PER_MILE;
}

export function kmToMiles(km: number): number {
  if (km <= 0 || !Number.isFinite(km)) return 0;
  return km * MILES_PER_KM;
}

export function litresToUkGallons(litres: number): number {
  if (litres <= 0 || !Number.isFinite(litres)) return 0;
  return litres / LITRES_PER_UK_GALLON;
}

export function ukGallonsToLitres(gallons: number): number {
  if (gallons <= 0 || !Number.isFinite(gallons)) return 0;
  return gallons * LITRES_PER_UK_GALLON;
}

export function litresToUsGallons(litres: number): number {
  if (litres <= 0 || !Number.isFinite(litres)) return 0;
  return litres / LITRES_PER_US_GALLON;
}

export function usGallonsToLitres(gallons: number): number {
  if (gallons <= 0 || !Number.isFinite(gallons)) return 0;
  return gallons * LITRES_PER_US_GALLON;
}

export function ukMpgToLPer100Km(mpg: number): number {
  if (mpg <= 0 || !Number.isFinite(mpg)) return 0;
  return UK_MPG_FACTOR / mpg;
}

export function lPer100KmToUkMpg(lPer100Km: number): number {
  if (lPer100Km <= 0 || !Number.isFinite(lPer100Km)) return 0;
  return UK_MPG_FACTOR / lPer100Km;
}

export function usMpgToLPer100Km(mpg: number): number {
  if (mpg <= 0 || !Number.isFinite(mpg)) return 0;
  return US_MPG_FACTOR / mpg;
}

export function lPer100KmToUsMpg(lPer100Km: number): number {
  if (lPer100Km <= 0 || !Number.isFinite(lPer100Km)) return 0;
  return US_MPG_FACTOR / lPer100Km;
}

export function kmPerLToLPer100Km(kmPerL: number): number {
  if (kmPerL <= 0 || !Number.isFinite(kmPerL)) return 0;
  return KM_L_FACTOR / kmPerL;
}

export function lPer100KmToKmPerL(lPer100Km: number): number {
  if (lPer100Km <= 0 || !Number.isFinite(lPer100Km)) return 0;
  return KM_L_FACTOR / lPer100Km;
}

export function ukMpgToUsMpg(ukMpg: number): number {
  if (ukMpg <= 0 || !Number.isFinite(ukMpg)) return 0;
  return ukMpg * (US_MPG_FACTOR / UK_MPG_FACTOR);
}

export function usMpgToUkMpg(usMpg: number): number {
  if (usMpg <= 0 || !Number.isFinite(usMpg)) return 0;
  return usMpg * (UK_MPG_FACTOR / US_MPG_FACTOR);
}

/**
 * Normalizes any supported fuel consumption unit to L/100km.
 */
export function normalizeToLPer100Km(value: number, unit: FuelConsumptionUnit): number {
  if (value <= 0 || !Number.isFinite(value)) return 0;
  switch (unit) {
    case 'l_100km':
      return value;
    case 'uk_mpg':
      return ukMpgToLPer100Km(value);
    case 'us_mpg':
      return usMpgToLPer100Km(value);
    case 'km_l':
      return kmPerLToLPer100Km(value);
    default:
      return value;
  }
}

/**
 * Normalizes any EV efficiency unit to kWh/100km.
 */
export function normalizeToKwhPer100Km(value: number, unit: EvEfficiencyUnit): number {
  if (value <= 0 || !Number.isFinite(value)) return 0;
  switch (unit) {
    case 'kwh_100km':
      return value;
    case 'kwh_100mi':
      // 100 miles = 160.9344 km -> (kwh / 160.9344) * 100 = value / 1.609344
      return value / KM_PER_MILE;
    case 'mi_kwh':
      // miles per kWh -> 100 miles takes 100 / value kWh -> normalize to 100km
      // (100 / (value * 1.609344)) * 100 ??
      // If 1 kWh gives `value` miles (which is value * 1.609344 km), then 100 km takes 100 / (value * 1.609344) kWh.
      return (100 / (value * KM_PER_MILE));
    case 'km_kwh':
      // km per kWh -> 100 km takes 100 / value kWh
      return 100 / value;
    default:
      return value;
  }
}

// ==========================================
// 2. FUEL TRIP CALCULATION
// ==========================================

export interface FuelTripInput {
  distance: number;
  distanceUnit?: DistanceUnit;
  consumption: number;
  consumptionUnit?: FuelConsumptionUnit;
  fuelPrice: number; // In main currency per litre (e.g. 1.385 for £1.385, 1.72 for 1.72€)
  isRoundTrip?: boolean;
  passengers?: number; // 1 to 10
  tolls?: number; // Extra toll costs in main currency
  parking?: number; // Extra parking costs in main currency
}

export interface FuelTripResult {
  oneWayDistance: number;
  totalDistance: number;
  distanceUnit: DistanceUnit;
  distanceKm: number;
  distanceMiles: number;
  consumptionLPer100Km: number;
  litresUsed: number;
  ukGallonsUsed: number;
  usGallonsUsed: number;
  fuelCost: number;
  tolls: number;
  parking: number;
  extraCosts: number;
  totalCost: number;
  passengers: number;
  costPerPerson: number;
  fuelCostPerPerson: number;
  costPerKm: number;
  costPerMile: number;
  fuelCostPerKm: number;
  fuelCostPerMile: number;
}

export function calculateFuelTripCost(input: FuelTripInput): FuelTripResult {
  const oneWayDistance = Math.max(0, Number(input.distance) || 0);
  const distanceUnit = input.distanceUnit || 'miles';
  const isRoundTrip = Boolean(input.isRoundTrip);
  const totalDistance = isRoundTrip ? oneWayDistance * 2 : oneWayDistance;

  const passengers = Math.min(10, Math.max(1, Math.round(Number(input.passengers) || 1)));
  const tolls = Math.max(0, Number(input.tolls) || 0);
  const parking = Math.max(0, Number(input.parking) || 0);
  const extraCosts = tolls + parking;

  const fuelPrice = Math.max(0, Number(input.fuelPrice) || 0);
  const rawConsumption = Math.max(0, Number(input.consumption) || 0);
  const consumptionUnit = input.consumptionUnit || (distanceUnit === 'miles' ? 'uk_mpg' : 'l_100km');

  const consumptionLPer100Km = normalizeToLPer100Km(rawConsumption, consumptionUnit);

  let distanceKm = 0;
  let distanceMiles = 0;

  if (distanceUnit === 'miles') {
    distanceMiles = totalDistance;
    distanceKm = milesToKm(totalDistance);
  } else {
    distanceKm = totalDistance;
    distanceMiles = kmToMiles(totalDistance);
  }

  // Pure formula: cost = distance * consumption / 100 * price
  // Using distance in km and consumption in L/100km
  const litresUsed = (distanceKm * consumptionLPer100Km) / 100;
  const fuelCost = litresUsed * fuelPrice;
  const totalCost = fuelCost + extraCosts;

  const ukGallonsUsed = litresToUkGallons(litresUsed);
  const usGallonsUsed = litresToUsGallons(litresUsed);

  const costPerPerson = totalCost / passengers;
  const fuelCostPerPerson = fuelCost / passengers;

  const costPerKm = distanceKm > 0 ? totalCost / distanceKm : 0;
  const costPerMile = distanceMiles > 0 ? totalCost / distanceMiles : 0;
  const fuelCostPerKm = distanceKm > 0 ? fuelCost / distanceKm : 0;
  const fuelCostPerMile = distanceMiles > 0 ? fuelCost / distanceMiles : 0;

  return {
    oneWayDistance,
    totalDistance,
    distanceUnit,
    distanceKm,
    distanceMiles,
    consumptionLPer100Km,
    litresUsed,
    ukGallonsUsed,
    usGallonsUsed,
    fuelCost,
    tolls,
    parking,
    extraCosts,
    totalCost,
    passengers,
    costPerPerson,
    fuelCostPerPerson,
    costPerKm,
    costPerMile,
    fuelCostPerKm,
    fuelCostPerMile,
  };
}

// ==========================================
// 3. EV TRIP CALCULATION
// ==========================================

export interface EvTripInput {
  distance: number;
  distanceUnit?: DistanceUnit;
  kwhPer100km?: number;
  kwhPer100mi?: number;
  milesPerKwh?: number;
  kmPerKwh?: number;
  electricityPricePerKwh: number; // In main currency (e.g. 0.245 for 24.5p)
  isRoundTrip?: boolean;
  passengers?: number;
  tolls?: number;
  parking?: number;
}

export interface EvTripResult {
  oneWayDistance: number;
  totalDistance: number;
  distanceUnit: DistanceUnit;
  distanceKm: number;
  distanceMiles: number;
  kwhPer100km: number;
  kwhUsed: number;
  electricityCost: number;
  tolls: number;
  parking: number;
  extraCosts: number;
  totalCost: number;
  passengers: number;
  costPerPerson: number;
  costPerKm: number;
  costPerMile: number;
}

export function calculateEvTripCost(input: EvTripInput): EvTripResult {
  const oneWayDistance = Math.max(0, Number(input.distance) || 0);
  const distanceUnit = input.distanceUnit || 'miles';
  const isRoundTrip = Boolean(input.isRoundTrip);
  const totalDistance = isRoundTrip ? oneWayDistance * 2 : oneWayDistance;

  const passengers = Math.min(10, Math.max(1, Math.round(Number(input.passengers) || 1)));
  const tolls = Math.max(0, Number(input.tolls) || 0);
  const parking = Math.max(0, Number(input.parking) || 0);
  const extraCosts = tolls + parking;

  let distanceKm = 0;
  let distanceMiles = 0;

  if (distanceUnit === 'miles') {
    distanceMiles = totalDistance;
    distanceKm = milesToKm(totalDistance);
  } else {
    distanceKm = totalDistance;
    distanceMiles = kmToMiles(totalDistance);
  }

  let kwhPer100km = 0;
  if (typeof input.kwhPer100km === 'number' && input.kwhPer100km > 0) {
    kwhPer100km = input.kwhPer100km;
  } else if (typeof input.kwhPer100mi === 'number' && input.kwhPer100mi > 0) {
    kwhPer100km = normalizeToKwhPer100Km(input.kwhPer100mi, 'kwh_100mi');
  } else if (typeof input.milesPerKwh === 'number' && input.milesPerKwh > 0) {
    kwhPer100km = normalizeToKwhPer100Km(input.milesPerKwh, 'mi_kwh');
  } else if (typeof input.kmPerKwh === 'number' && input.kmPerKwh > 0) {
    kwhPer100km = normalizeToKwhPer100Km(input.kmPerKwh, 'km_kwh');
  } else {
    // Default modern EV consumption ~17.5 kWh/100km (~28 kWh/100mi or 3.5 mi/kWh)
    kwhPer100km = 17.5;
  }

  const electricityPrice = Math.max(0, Number(input.electricityPricePerKwh) || 0);

  // Pure formula: kwhCost = (distance * kwhPer100km / 100) * electricityPricePerKwh
  const kwhUsed = (distanceKm * kwhPer100km) / 100;
  const electricityCost = kwhUsed * electricityPrice;
  const totalCost = electricityCost + extraCosts;

  const costPerPerson = totalCost / passengers;
  const costPerKm = distanceKm > 0 ? totalCost / distanceKm : 0;
  const costPerMile = distanceMiles > 0 ? totalCost / distanceMiles : 0;

  return {
    oneWayDistance,
    totalDistance,
    distanceUnit,
    distanceKm,
    distanceMiles,
    kwhPer100km,
    kwhUsed,
    electricityCost,
    tolls,
    parking,
    extraCosts,
    totalCost,
    passengers,
    costPerPerson,
    costPerKm,
    costPerMile,
  };
}

// ==========================================
// 4. EV VS PETROL COMPARISON
// ==========================================

export interface EvVsPetrolComparisonInput {
  distance: number;
  distanceUnit?: DistanceUnit;
  petrolConsumption: number;
  petrolConsumptionUnit?: FuelConsumptionUnit;
  petrolPricePerLitre: number;
  evEfficiency: number;
  evEfficiencyUnit?: EvEfficiencyUnit;
  electricityPricePerKwh: number;
  annualDistance?: number;
}

export interface EvVsPetrolComparisonResult {
  distance: number;
  distanceUnit: DistanceUnit;
  distanceKm: number;
  distanceMiles: number;
  petrolCost: number;
  evCost: number;
  savings: number;
  savingsPercent: number;
  petrolCostPerMile: number;
  evCostPerMile: number;
  savingsPerMile: number;
  petrolCostPerKm: number;
  evCostPerKm: number;
  savingsPerKm: number;
  annualPetrolCost: number;
  annualEvCost: number;
  annualSavings: number;
  annualDistanceUsed: number;
}

export function compareEvVsPetrol(input: EvVsPetrolComparisonInput): EvVsPetrolComparisonResult {
  const distance = Math.max(0, Number(input.distance) || 0);
  const distanceUnit = input.distanceUnit || 'miles';

  const distanceKm = distanceUnit === 'miles' ? milesToKm(distance) : distance;
  const distanceMiles = distanceUnit === 'miles' ? distance : kmToMiles(distance);

  const petrolConsUnit = input.petrolConsumptionUnit || (distanceUnit === 'miles' ? 'uk_mpg' : 'l_100km');
  const petrolLPer100Km = normalizeToLPer100Km(input.petrolConsumption, petrolConsUnit);
  const petrolPrice = Math.max(0, Number(input.petrolPricePerLitre) || 0);

  const evEffUnit = input.evEfficiencyUnit || (distanceUnit === 'miles' ? 'kwh_100mi' : 'kwh_100km');
  const evKwhPer100Km = normalizeToKwhPer100Km(input.evEfficiency, evEffUnit);
  const elecPrice = Math.max(0, Number(input.electricityPricePerKwh) || 0);

  // Trip costs
  const petrolLitres = (distanceKm * petrolLPer100Km) / 100;
  const petrolCost = petrolLitres * petrolPrice;

  const evKwh = (distanceKm * evKwhPer100Km) / 100;
  const evCost = evKwh * elecPrice;

  const savings = petrolCost - evCost;
  const savingsPercent = petrolCost > 0 ? (savings / petrolCost) * 100 : 0;

  // Per-unit costs
  const petrolCostPerKm = distanceKm > 0 ? petrolCost / distanceKm : 0;
  const evCostPerKm = distanceKm > 0 ? evCost / distanceKm : 0;
  const savingsPerKm = petrolCostPerKm - evCostPerKm;

  const petrolCostPerMile = distanceMiles > 0 ? petrolCost / distanceMiles : 0;
  const evCostPerMile = distanceMiles > 0 ? evCost / distanceMiles : 0;
  const savingsPerMile = petrolCostPerMile - evCostPerMile;

  // Annual calculation
  const defaultAnnual = distanceUnit === 'miles' ? 10000 : 15000;
  const annualDistanceUsed = input.annualDistance && input.annualDistance > 0 ? input.annualDistance : defaultAnnual;
  const annualDistanceKm = distanceUnit === 'miles' ? milesToKm(annualDistanceUsed) : annualDistanceUsed;

  const annualPetrolCost = ((annualDistanceKm * petrolLPer100Km) / 100) * petrolPrice;
  const annualEvCost = ((annualDistanceKm * evKwhPer100Km) / 100) * elecPrice;
  const annualSavings = annualPetrolCost - annualEvCost;

  return {
    distance,
    distanceUnit,
    distanceKm,
    distanceMiles,
    petrolCost,
    evCost,
    savings,
    savingsPercent,
    petrolCostPerMile,
    evCostPerMile,
    savingsPerMile,
    petrolCostPerKm,
    evCostPerKm,
    savingsPerKm,
    annualPetrolCost,
    annualEvCost,
    annualSavings,
    annualDistanceUsed,
  };
}

// ==========================================
// 5. MPG & CONSUMPTION REFERENCE TABLE
// ==========================================

export interface MpgTableRow {
  ukMpg: number;
  usMpg: number;
  lPer100Km: number;
  kmPerL: number;
}

export function generateMpgComparisonTable(
  startMpg: number = 10,
  endMpg: number = 70,
  step: number = 5,
): MpgTableRow[] {
  const rows: MpgTableRow[] = [];
  const start = Math.max(5, startMpg);
  const end = Math.max(start, endMpg);
  const validStep = Math.max(1, step);

  for (let mpg = start; mpg <= end; mpg += validStep) {
    rows.push({
      ukMpg: mpg,
      usMpg: Math.round(ukMpgToUsMpg(mpg) * 10) / 10,
      lPer100Km: Math.round(ukMpgToLPer100Km(mpg) * 10) / 10,
      kmPerL: Math.round(lPer100KmToKmPerL(ukMpgToLPer100Km(mpg)) * 10) / 10,
    });
  }

  return rows;
}
