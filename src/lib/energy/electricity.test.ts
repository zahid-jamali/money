import { describe, it, expect } from 'vitest';
import {
  calculateApplianceCost,
  compareAppliances,
  formatElectricityCost,
} from './electricity';
import {
  getElectricityPrice,
  OFGEM_PRICE_CAPS,
  AUSTRALIA_ELECTRICITY_RATES,
  GERMANY_ELECTRICITY_RATES,
} from '@/rules/energy/electricity';
import { APPLIANCES, getApplianceBySlug, getApplianceByDeSlug } from '@/data/appliances';

describe('Electricity Calculations (src/lib/energy/electricity.ts)', () => {
  it('1. calculates exact kWh and costs for 2000W heater running 3 hours daily at 24.5p/kWh', () => {
    const result = calculateApplianceCost({
      watts: 2000,
      hoursPerDay: 3,
      daysPerWeek: 7,
      pricePerKwh: 24.5,
    });

    // 2000W * 3h / 1000 = 6 kWh/day
    expect(result.kWhPerDay).toBe(6);
    expect(result.costPerDay).toBe(147); // 6 * 24.5 = 147 pence (£1.47)
    // 6 * 7 = 42 kWh/week
    expect(result.kWhPerWeek).toBe(42);
    expect(result.costPerWeek).toBe(1029); // 42 * 24.5 = 1029 pence (£10.29)
    // 42 * 52 = 2184 kWh/year
    expect(result.kWhPerYear).toBe(2184);
    expect(result.costPerYear).toBe(53508); // 2184 * 24.5 = 53508 pence (£535.08)
  });

  it('2. calculates kettle single boil (0.17h) cost accurately', () => {
    const result = calculateApplianceCost({
      watts: 2200,
      hoursPerDay: 0.17,
      daysPerWeek: 7,
      pricePerKwh: 24.5,
    });

    // 2200 * 0.17 / 1000 = 0.374 kWh
    expect(result.kWhPerUse).toBeCloseTo(0.374, 3);
    expect(result.costPerUse).toBeCloseTo(0.374 * 24.5, 1);
  });

  it('3. calculates daysPerWeek scaling for washing machine (4 days a week)', () => {
    const result = calculateApplianceCost({
      watts: 1800,
      hoursPerDay: 1,
      daysPerWeek: 4,
      pricePerKwh: 24.5,
    });

    // 1.8 kWh per use/day
    expect(result.kWhPerDay).toBe(1.8);
    // 1.8 * 4 = 7.2 kWh per week
    expect(result.kWhPerWeek).toBe(7.2);
    // 7.2 * 52 = 374.4 kWh per year
    expect(result.kWhPerYear).toBe(374.4);
    expect(result.costPerYear).toBeCloseTo(374.4 * 24.5, 1);
  });

  it('4. calculates standby wattage accurately over 52 weeks', () => {
    const result = calculateApplianceCost({
      watts: 100,
      hoursPerDay: 4, // active 4h/day, 7 days = 28h active
      daysPerWeek: 7,
      pricePerKwh: 24.5,
      standbyWatts: 2, // standby for 20h/day = 140h/week
    });

    // 140h * 52 weeks = 7280 standby hours
    // 2W * 7280h / 1000 = 14.56 kWh
    expect(result.standbyKwhPerYear).toBe(14.56);
    expect(result.standbyCostPerYear).toBeCloseTo(14.56 * 24.5, 1);
    expect(result.totalCostPerYearWithStandby).toBe(
      Math.round((result.costPerYear + result.standbyCostPerYear) * 100) / 100,
    );
  });

  it('5. handles zero inputs gracefully without errors or NaN', () => {
    const result = calculateApplianceCost({
      watts: 0,
      hoursPerDay: 0,
      daysPerWeek: 0,
      pricePerKwh: 0,
      standbyWatts: 0,
    });

    expect(result.kWhPerDay).toBe(0);
    expect(result.costPerYear).toBe(0);
    expect(result.totalCostPerYearWithStandby).toBe(0);
  });

  it('6. clamps daysPerWeek between 0 and 7', () => {
    const result = calculateApplianceCost({
      watts: 1000,
      hoursPerDay: 1,
      daysPerWeek: 10, // should clamp to 7
      pricePerKwh: 20,
    });

    expect(result.daysPerWeek).toBe(7);
    expect(result.kWhPerWeek).toBe(7);
  });

  it('7. compareAppliances compares air fryer vs conventional oven', () => {
    const comparison = compareAppliances(
      {
        name: 'Air Fryer',
        watts: 1700,
        hoursPerDay: 0.5,
        daysPerWeek: 4,
      },
      {
        name: 'Electric Oven',
        watts: 2500,
        hoursPerDay: 0.8,
        daysPerWeek: 4,
      },
      24.5, // 24.5p/kWh
    );

    // Air fryer: 1.7 * 0.5 * 4 * 52 = 176.8 kWh/yr
    // Oven: 2.5 * 0.8 * 4 * 52 = 416.0 kWh/yr
    expect(comparison.cheaperAppliance).toBe('A');
    expect(comparison.applianceA.kWhPerYear).toBeLessThan(comparison.applianceB.kWhPerYear);
    expect(comparison.annualSavings).toBeGreaterThan(0);
    expect(comparison.percentageSavings).toBeGreaterThan(50);
  });

  it('8. compareAppliances handles identical appliances as equal', () => {
    const comparison = compareAppliances(
      { name: 'App A', watts: 1000, hoursPerDay: 1 },
      { name: 'App B', watts: 1000, hoursPerDay: 1 },
      25,
    );

    expect(comparison.cheaperAppliance).toBe('equal');
    expect(comparison.annualSavings).toBe(0);
  });

  it('9. formatElectricityCost formats pence and major currency (£) correctly', () => {
    const cost = formatElectricityCost(49.0, '£', 'GBP');
    expect(cost.minor).toBe('49.0p');
    expect(cost.major).toBe('£0.49');

    const highCost = formatElectricityCost(53508, '£', 'GBP');
    expect(highCost.major).toBe('£535.08');
  });

  it('10. formatElectricityCost supports AUD (c) and EUR (ct)', () => {
    const audCost = formatElectricityCost(66.4, 'A$', 'AUD');
    expect(audCost.minor).toBe('66.4c');
    expect(audCost.major).toBe('A$0.66');

    const eurCost = formatElectricityCost(82.7, '€', 'EUR');
    expect(eurCost.minor).toBe('82.7ct');
    expect(eurCost.major).toBe('€0.83');
  });
});

describe('Rules & Regional Electricity Rates (src/rules/energy/electricity.ts)', () => {
  it('11. returns current active UK Ofgem price cap for 2026', () => {
    const price = getElectricityPrice('uk');
    expect(price.region).toBe('uk');
    expect(price.currency).toBe('GBP');
    expect(price.currencySymbol).toBe('£');
    expect(price.unitRate).toBe(24.50);
    expect(price.standingChargePerDay).toBe(60.10);
    expect(price.source).toContain('ofgem.gov.uk');
  });

  it('12. looks up historical Ofgem price cap by date (2025-Q3)', () => {
    const price = getElectricityPrice('uk', '2025-08-15');
    expect(price.quarter).toBe('2025-Q3');
    expect(price.unitRate).toBe(22.36);
    expect(price.standingChargePerDay).toBe(60.12);
  });

  it('13. returns Australian AER DMO rates for national and states', () => {
    const national = getElectricityPrice('australia');
    expect(national.currency).toBe('AUD');
    expect(national.currencySymbol).toBe('A$');
    expect(national.unitRate).toBe(33.20);

    const nsw = getElectricityPrice('nsw');
    expect(nsw.unitRate).toBe(34.50);

    const vic = getElectricityPrice('vic');
    expect(vic.unitRate).toBe(28.70);
    expect(vic.sourceName).toContain('VDO');
  });

  it('14. returns German BDEW electricity rate', () => {
    const de = getElectricityPrice('germany');
    expect(de.region).toBe('de');
    expect(de.currency).toBe('EUR');
    expect(de.currencySymbol).toBe('€');
    expect(de.unitRate).toBe(41.35);
    expect(de.standingChargePerDay).toBeCloseTo(42.08, 1);
    expect(de.source).toContain('bdew.de');
  });
});

describe('Appliance Dataset Integrity (src/data/appliances.ts)', () => {
  it('15. verifies all 25 required appliances are present', () => {
    expect(APPLIANCES.length).toBe(25);

    const requiredSlugs = [
      'kettle',
      'electric-heater',
      'oil-filled-radiator',
      'air-fryer',
      'tumble-dryer',
      'washing-machine',
      'dishwasher',
      'oven',
      'microwave',
      'slow-cooker',
      'fridge-freezer',
      'chest-freezer',
      'dehumidifier',
      'electric-shower',
      'immersion-heater',
      'electric-blanket',
      'tv',
      'gaming-pc',
      'laptop',
      'games-console',
      'hair-dryer',
      'fan',
      'air-conditioner',
      'led-bulb',
      'ev-home-charging',
    ];

    for (const slug of requiredSlugs) {
      const app = getApplianceBySlug(slug);
      expect(app, `Missing appliance slug: ${slug}`).toBeDefined();
      expect(app?.wattageRange.min).toBeGreaterThan(0);
      expect(app?.wattageRange.max).toBeGreaterThanOrEqual(app?.wattageRange.min || 0);
      expect(app?.wattageRange.defaultWatts).toBeGreaterThanOrEqual(app?.wattageRange.min || 0);
      expect(app?.wattageRange.source.length).toBeGreaterThan(10);
      expect(app?.tipsEn.length).toBeGreaterThanOrEqual(3);
      expect(app?.tipsDe.length).toBeGreaterThanOrEqual(3);
      expect(app?.alternatives.length).toBe(2);
      expect(app?.faqsEn.length).toBe(5);
      expect(app?.faqsDe.length).toBe(5);
    }
  });

  it('16. verifies German deSlug lookups for all 25 appliances', () => {
    for (const app of APPLIANCES) {
      expect(app.deSlug).toBeTruthy();
      const lookedUp = getApplianceByDeSlug(app.deSlug);
      expect(lookedUp?.slug).toBe(app.slug);
    }
  });
});
