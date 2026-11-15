import { describe, it, expect } from 'vitest';
import {
  milesToKm,
  kmToMiles,
  litresToUkGallons,
  ukGallonsToLitres,
  litresToUsGallons,
  usGallonsToLitres,
  ukMpgToLPer100Km,
  lPer100KmToUkMpg,
  usMpgToLPer100Km,
  lPer100KmToUsMpg,
  kmPerLToLPer100Km,
  lPer100KmToKmPerL,
  ukMpgToUsMpg,
  usMpgToUkMpg,
  normalizeToLPer100Km,
  normalizeToKwhPer100Km,
  calculateFuelTripCost,
  calculateEvTripCost,
  compareEvVsPetrol,
  generateMpgComparisonTable,
  KM_PER_MILE,
  UK_MPG_FACTOR,
  US_MPG_FACTOR,
} from './fuel';
import { getFuelRules } from '@/rules/fuel/prices';

describe('Fuel Calculation Engine', () => {
  describe('Unit Conversions', () => {
    it('1. converts miles to km accurately using 1.609344', () => {
      expect(milesToKm(1)).toBeCloseTo(1.609344, 5);
      expect(milesToKm(100)).toBeCloseTo(160.9344, 4);
    });

    it('2. converts km to miles accurately', () => {
      expect(kmToMiles(160.9344)).toBeCloseTo(100, 4);
      expect(kmToMiles(100)).toBeCloseTo(62.1371, 3);
    });

    it('3. converts UK gallons and litres using 4.54609', () => {
      expect(ukGallonsToLitres(1)).toBeCloseTo(4.54609, 5);
      expect(litresToUkGallons(4.54609)).toBeCloseTo(1, 5);
    });

    it('4. converts US gallons and litres using 3.78541', () => {
      expect(usGallonsToLitres(1)).toBeCloseTo(3.78541, 4);
      expect(litresToUsGallons(3.78541)).toBeCloseTo(1, 4);
    });

    it('5. converts UK mpg to L/100km via 282.481 / mpg', () => {
      // 40 UK mpg -> 282.481 / 40 = 7.062 L/100km
      expect(ukMpgToLPer100Km(40)).toBeCloseTo(7.062, 2);
      expect(ukMpgToLPer100Km(282.481)).toBeCloseTo(1.0, 3);
    });

    it('6. converts L/100km to UK mpg invertibly', () => {
      const originalMpg = 52.3;
      const l100 = ukMpgToLPer100Km(originalMpg);
      expect(lPer100KmToUkMpg(l100)).toBeCloseTo(originalMpg, 4);
    });

    it('7. converts US mpg to L/100km via 235.215 / mpg', () => {
      // 30 US mpg -> 235.215 / 30 = 7.84 L/100km
      expect(usMpgToLPer100Km(30)).toBeCloseTo(7.8405, 2);
    });

    it('8. converts L/100km to US mpg invertibly', () => {
      const originalMpg = 33.3;
      const l100 = usMpgToLPer100Km(originalMpg);
      expect(lPer100KmToUsMpg(l100)).toBeCloseTo(originalMpg, 4);
    });

    it('9. converts km/L to L/100km via 100 / km_per_L', () => {
      // 15 km/L -> 100 / 15 = 6.667 L/100km
      expect(kmPerLToLPer100Km(15)).toBeCloseTo(6.6667, 3);
      expect(lPer100KmToKmPerL(6.6667)).toBeCloseTo(15, 2);
    });

    it('10. converts UK mpg to US mpg directly', () => {
      // 1 UK Gallon = 1.20095 US Gallons -> UK MPG is higher than US MPG
      const ukMpg = 50;
      const usMpg = ukMpgToUsMpg(ukMpg);
      expect(usMpg).toBeLessThan(ukMpg);
      expect(usMpg).toBeCloseTo(50 * (US_MPG_FACTOR / UK_MPG_FACTOR), 3);
      expect(usMpgToUkMpg(usMpg)).toBeCloseTo(ukMpg, 3);
    });

    it('11. normalizes different efficiency units to L/100km', () => {
      expect(normalizeToLPer100Km(6.5, 'l_100km')).toBe(6.5);
      expect(normalizeToLPer100Km(40, 'uk_mpg')).toBeCloseTo(7.062, 2);
      expect(normalizeToLPer100Km(30, 'us_mpg')).toBeCloseTo(7.84, 2);
      expect(normalizeToLPer100Km(20, 'km_l')).toBe(5.0);
    });
  });

  describe('Core Fuel Trip Calculations', () => {
    it('12. calculates basic metric fuel trip cost: distance * consumption / 100 * price', () => {
      // 200 km, 6.0 L/100km, 1.72 €/L
      // litres = 200 * 6.0 / 100 = 12 L
      // cost = 12 * 1.72 = 20.64 €
      const result = calculateFuelTripCost({
        distance: 200,
        distanceUnit: 'km',
        consumption: 6.0,
        consumptionUnit: 'l_100km',
        fuelPrice: 1.72,
      });

      expect(result.litresUsed).toBeCloseTo(12.0, 3);
      expect(result.fuelCost).toBeCloseTo(20.64, 2);
      expect(result.totalCost).toBeCloseTo(20.64, 2);
      expect(result.costPerPerson).toBeCloseTo(20.64, 2);
      expect(result.costPerKm).toBeCloseTo(20.64 / 200, 4);
    });

    it('13. calculates imperial trip cost (miles and UK mpg)', () => {
      // 100 miles, 40 UK mpg, £1.385 / L
      // Gallons = 100 / 40 = 2.5 imperial gallons
      // Litres = 2.5 * 4.54609 = 11.365225 L
      // Cost = 11.365225 * 1.385 = £15.74
      const result = calculateFuelTripCost({
        distance: 100,
        distanceUnit: 'miles',
        consumption: 40,
        consumptionUnit: 'uk_mpg',
        fuelPrice: 1.385,
      });

      expect(result.ukGallonsUsed).toBeCloseTo(2.5, 2);
      expect(result.litresUsed).toBeCloseTo(11.365, 2);
      expect(result.fuelCost).toBeCloseTo(15.74, 2);
      expect(result.costPerMile).toBeCloseTo(0.1574, 3);
    });

    it('14. handles one-way vs round-trip doubling correctly', () => {
      const oneWay = calculateFuelTripCost({
        distance: 150,
        distanceUnit: 'km',
        consumption: 7.0,
        consumptionUnit: 'l_100km',
        fuelPrice: 1.50,
        isRoundTrip: false,
      });

      const roundTrip = calculateFuelTripCost({
        distance: 150,
        distanceUnit: 'km',
        consumption: 7.0,
        consumptionUnit: 'l_100km',
        fuelPrice: 1.50,
        isRoundTrip: true,
      });

      expect(roundTrip.totalDistance).toBe(300);
      expect(roundTrip.oneWayDistance).toBe(150);
      expect(roundTrip.litresUsed).toBeCloseTo(oneWay.litresUsed * 2, 4);
      expect(roundTrip.fuelCost).toBeCloseTo(oneWay.fuelCost * 2, 4);
    });

    it('15. splits total cost correctly between 1 to 10 passengers', () => {
      const trip = calculateFuelTripCost({
        distance: 200,
        distanceUnit: 'km',
        consumption: 5.0,
        consumptionUnit: 'l_100km',
        fuelPrice: 2.00, // 200 * 5/100 * 2 = 20€
        passengers: 4,
      });

      expect(trip.totalCost).toBeCloseTo(20.0, 2);
      expect(trip.costPerPerson).toBeCloseTo(5.0, 2);
      expect(trip.passengers).toBe(4);
    });

    it('16. adds tolls and parking to split cost and total cost', () => {
      // Fuel cost: 100 km * 6 L/100km / 100 * 1.50 €/L = 9.00 €
      // Tolls = 15 €, Parking = 10 € -> Total extra = 25 € -> Total cost = 34 €
      // Split 2 passengers -> 17 € each
      const trip = calculateFuelTripCost({
        distance: 100,
        distanceUnit: 'km',
        consumption: 6.0,
        consumptionUnit: 'l_100km',
        fuelPrice: 1.50,
        passengers: 2,
        tolls: 15,
        parking: 10,
      });

      expect(trip.fuelCost).toBeCloseTo(9.00, 2);
      expect(trip.extraCosts).toBe(25.0);
      expect(trip.totalCost).toBeCloseTo(34.00, 2);
      expect(trip.costPerPerson).toBeCloseTo(17.00, 2);
      expect(trip.fuelCostPerPerson).toBeCloseTo(4.50, 2);
    });
  });

  describe('EV Mode Calculations', () => {
    it('17. calculates EV trip electricity cost: kwhCost = (distance * kwhPer100km / 100) * electricityPricePerKwh', () => {
      // 150 km, 18 kWh/100km, 0.30 €/kWh
      // kWh = 150 * 18 / 100 = 27 kWh
      // Cost = 27 * 0.30 = 8.10 €
      const result = calculateEvTripCost({
        distance: 150,
        distanceUnit: 'km',
        kwhPer100km: 18,
        electricityPricePerKwh: 0.30,
      });

      expect(result.kwhUsed).toBeCloseTo(27.0, 2);
      expect(result.electricityCost).toBeCloseTo(8.10, 2);
      expect(result.totalCost).toBeCloseTo(8.10, 2);
      expect(result.costPerKm).toBeCloseTo(8.10 / 150, 4);
    });

    it('18. handles EV round trip and passenger splits with tolls', () => {
      const result = calculateEvTripCost({
        distance: 100,
        distanceUnit: 'miles',
        isRoundTrip: true, // 200 miles
        milesPerKwh: 4, // 200 / 4 = 50 kWh
        electricityPricePerKwh: 0.245, // 50 * 0.245 = 12.25
        passengers: 5,
        tolls: 7.75, // Total = 20.00
      });

      expect(result.totalDistance).toBe(200);
      expect(result.kwhUsed).toBeCloseTo(50.0, 1);
      expect(result.electricityCost).toBeCloseTo(12.25, 2);
      expect(result.totalCost).toBeCloseTo(20.00, 2);
      expect(result.costPerPerson).toBeCloseTo(4.00, 2);
    });
  });

  describe('EV vs Petrol Comparison Mode', () => {
    it('19. compares EV and petrol trip savings and per-mile/per-km costs', () => {
      // 100 miles
      // Petrol: 35 UK mpg, £1.40/L
      // EV: 3.5 miles/kWh (or 28.57 kWh/100mi), £0.25/kWh
      const comparison = compareEvVsPetrol({
        distance: 100,
        distanceUnit: 'miles',
        petrolConsumption: 35,
        petrolConsumptionUnit: 'uk_mpg',
        petrolPricePerLitre: 1.40,
        evEfficiency: 3.5,
        evEfficiencyUnit: 'mi_kwh',
        electricityPricePerKwh: 0.25,
      });

      expect(comparison.petrolCost).toBeGreaterThan(comparison.evCost);
      expect(comparison.savings).toBeCloseTo(comparison.petrolCost - comparison.evCost, 4);
      expect(comparison.savingsPercent).toBeGreaterThan(0);
      expect(comparison.savingsPerMile).toBeCloseTo(comparison.petrolCostPerMile - comparison.evCostPerMile, 4);
      expect(comparison.savingsPerKm).toBeCloseTo(comparison.petrolCostPerKm - comparison.evCostPerKm, 4);
    });

    it('20. computes annual savings based on 10,000 miles or custom annual distance', () => {
      const comparison = compareEvVsPetrol({
        distance: 100,
        distanceUnit: 'miles',
        petrolConsumption: 40,
        petrolConsumptionUnit: 'uk_mpg',
        petrolPricePerLitre: 1.385,
        evEfficiency: 18,
        evEfficiencyUnit: 'kwh_100km',
        electricityPricePerKwh: 0.245,
        annualDistance: 12000,
      });

      expect(comparison.annualDistanceUsed).toBe(12000);
      expect(comparison.annualSavings).toBeCloseTo(comparison.annualPetrolCost - comparison.annualEvCost, 2);
      expect(comparison.annualSavings).toBeGreaterThan(500); // Substantial savings over 12k miles
    });
  });

  describe('Edge Cases & Sanitization', () => {
    it('21. gracefully handles zero and negative distances', () => {
      const result = calculateFuelTripCost({
        distance: 0,
        consumption: 50,
        fuelPrice: 1.5,
      });
      expect(result.litresUsed).toBe(0);
      expect(result.totalCost).toBe(0);
      expect(result.costPerKm).toBe(0);

      const negResult = calculateFuelTripCost({
        distance: -50,
        consumption: 50,
        fuelPrice: 1.5,
      });
      expect(negResult.totalDistance).toBe(0);
    });

    it('22. clamps passengers between 1 and 10', () => {
      const low = calculateFuelTripCost({
        distance: 100,
        consumption: 40,
        fuelPrice: 1.5,
        passengers: 0,
      });
      expect(low.passengers).toBe(1);

      const high = calculateFuelTripCost({
        distance: 100,
        consumption: 40,
        fuelPrice: 1.5,
        passengers: 99,
      });
      expect(high.passengers).toBe(10);
    });

    it('23. handles zero or negative consumption without NaN or Infinity', () => {
      const zeroCons = calculateFuelTripCost({
        distance: 100,
        consumption: 0,
        fuelPrice: 1.5,
      });
      expect(Number.isFinite(zeroCons.totalCost)).toBe(true);
      expect(zeroCons.totalCost).toBe(0);
    });
  });

  describe('MPG Table Generator', () => {
    it('24. generates reference table from 10 to 70 MPG with consistent conversions', () => {
      const table = generateMpgComparisonTable(10, 70, 10);
      expect(table.length).toBe(7); // 10, 20, 30, 40, 50, 60, 70
      expect(table[0].ukMpg).toBe(10);
      expect(table[0].lPer100Km).toBeCloseTo(28.2, 1);
      expect(table[3].ukMpg).toBe(40);
      expect(table[3].lPer100Km).toBeCloseTo(7.1, 1);
    });
  });

  describe('Regional Rules Verification', () => {
    it('25. returns official road fuel prices and electricity rates for UK, AU, CA, DE', () => {
      const uk = getFuelRules('uk');
      expect(uk.currency.code).toBe('GBP');
      expect(uk.petrol.pricePerLitre.source).toContain('gov.uk');
      expect(uk.electricity.pricePerKwh.source).toContain('ofgem');
      expect(uk.petrol.pricePerLitre.value).toBeGreaterThan(100); // 138.5 p/L

      const au = getFuelRules('australia');
      expect(au.currency.code).toBe('AUD');
      expect(au.petrol.pricePerLitre.source).toContain('aip.com.au');
      expect(au.defaultConsumptionUnit).toBe('l_100km');

      const ca = getFuelRules('canada');
      expect(ca.currency.code).toBe('CAD');
      expect(ca.petrol.pricePerLitre.source).toContain('nrcan.gc.ca');

      const de = getFuelRules('de');
      expect(de.currency.code).toBe('EUR');
      expect(de.petrol.pricePerLitre.source).toContain('adac.de');
      expect(de.electricity.pricePerKwh.source).toContain('bdew.de');

      // Fallback
      const fallback = getFuelRules('unknown_region');
      expect(fallback.region).toBe('uk');
    });
  });
});
