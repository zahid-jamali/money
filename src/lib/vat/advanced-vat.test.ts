import { describe, it, expect } from 'vitest';
import { EU_VAT_RATES, getEuVatRate } from '../../rules/eu/vat-rates';
import {
  ROMANIAN_VAT_HISTORY,
  getRomanianVatRates,
} from '../../rules/ro/history';
import {
  TEVKIFAT_CATEGORIES,
  TEVKIFAT_FRACTIONS,
  getTevkifatCategory,
  parseTevkifatFraction,
} from '../../rules/tr/tevkifat';
import {
  calculateTevkifat,
  calculateTevkifatFromGross,
} from './tevkifat';
import { calculateRomanianVat } from './romania';
import {
  compareAllEuVat,
  compareCountryPair,
  getEuVatSummary,
} from './eu-hub';

describe('Turkish KDV Tevkifat Rules and Engine', () => {
  it('contains all statutory withholding fractions', () => {
    const fractions = ['2/10', '3/10', '4/10', '5/10', '7/10', '9/10', '10/10'];
    fractions.forEach((f) => {
      expect(TEVKIFAT_FRACTIONS[f as keyof typeof TEVKIFAT_FRACTIONS]).toBeDefined();
      expect(TEVKIFAT_FRACTIONS[f as keyof typeof TEVKIFAT_FRACTIONS].denominator).toBe(10);
    });
    expect(TEVKIFAT_FRACTIONS['5/10'].ratio).toBe(0.5);
    expect(TEVKIFAT_FRACTIONS['9/10'].ratio).toBe(0.9);
    expect(TEVKIFAT_FRACTIONS['10/10'].ratio).toBe(1.0);
  });

  it('correctly maps all required transaction categories', () => {
    // Cleaning (Temizlik) - 9/10
    const cleaning = getTevkifatCategory('cleaning');
    expect(cleaning).toBeDefined();
    expect(cleaning?.fraction).toBe('9/10');
    expect(cleaning?.ratio).toBe(0.9);

    // Security (Özel Güvenlik) - 9/10
    const security = getTevkifatCategory('security');
    expect(security).toBeDefined();
    expect(security?.fraction).toBe('9/10');

    // Transportation (Servis taşımacılığı 5/10, Yük taşımacılığı 2/10)
    const shuttle = getTevkifatCategory('transportation_shuttle');
    expect(shuttle).toBeDefined();
    expect(shuttle?.fraction).toBe('5/10');

    const freight = getTevkifatCategory('transportation_freight');
    expect(freight).toBeDefined();
    expect(freight?.fraction).toBe('2/10');

    // Construction (Yapım İşleri) - 4/10
    const construction = getTevkifatCategory('construction');
    expect(construction).toBeDefined();
    expect(construction?.fraction).toBe('4/10');

    // Audit (Denetim) - 9/10
    const audit = getTevkifatCategory('audit');
    expect(audit).toBeDefined();
    expect(audit?.fraction).toBe('9/10');

    // Consulting (Danışmanlık) - 9/10
    const consulting = getTevkifatCategory('consulting');
    expect(consulting).toBeDefined();
    expect(consulting?.fraction).toBe('9/10');

    // Full withholding (Tam Tevkifat) - 10/10
    const full = getTevkifatCategory('full_withholding');
    expect(full).toBeDefined();
    expect(full?.fraction).toBe('10/10');
    expect(full?.ratio).toBe(1.0);
  });

  it('correctly calculates 5/10 Tevkifat on 10,000 TRY Net with standard 20% KDV', () => {
    const result = calculateTevkifat({
      netAmount: 10000,
      vatRate: 20,
      fraction: '5/10',
    });

    expect(result.netAmount).toBe(10000);
    expect(result.vatRate).toBe(20);
    expect(result.totalVat).toBe(2000); // 10000 * 0.20
    expect(result.withheldVat).toBe(1000); // 2000 * (5/10)
    expect(result.invoicedVat).toBe(1000); // 2000 - 1000
    expect(result.payableAmount).toBe(11000); // 10000 + 1000
    expect(result.grossAmount).toBe(12000); // 10000 + 2000
    expect(result.buyerLiability).toBe(1000);
    expect(result.sellerReceivable).toBe(11000);

    // Strict accounting invariants
    expect(result.withheldVat + result.invoicedVat).toBe(result.totalVat);
    expect(result.payableAmount + result.withheldVat).toBe(result.grossAmount);
    expect(result.breakdown).toHaveLength(6);
  });

  it('correctly calculates 9/10 Tevkifat for Cleaning category on 50,000 TRY Net', () => {
    const result = calculateTevkifat({
      netAmount: 50000,
      category: 'cleaning',
      fraction: '9/10',
    });

    expect(result.fraction).toBe('9/10');
    expect(result.totalVat).toBe(10000); // 50,000 * 20%
    expect(result.withheldVat).toBe(9000); // 10,000 * 0.9
    expect(result.invoicedVat).toBe(1000); // 10,000 * 0.1
    expect(result.payableAmount).toBe(51000); // 50,000 + 1,000
    expect(result.grossAmount).toBe(60000);
    expect(result.legalReference).toContain('KDV Genel Uygulama Tebliği');
  });

  it('correctly calculates 4/10 Tevkifat for Construction category on 100,000 TRY Net', () => {
    const result = calculateTevkifat({
      netAmount: 100000,
      category: 'construction',
      fraction: '4/10',
    });

    expect(result.totalVat).toBe(20000);
    expect(result.withheldVat).toBe(8000); // 20,000 * 0.4
    expect(result.invoicedVat).toBe(12000); // 20,000 - 8,000
    expect(result.payableAmount).toBe(112000);
    expect(result.grossAmount).toBe(120000);
  });

  it('correctly calculates 10/10 Full Tevkifat (Tam Tevkifat)', () => {
    const result = calculateTevkifat({
      netAmount: 25000,
      vatRate: 20,
      fraction: '10/10',
    });

    expect(result.totalVat).toBe(5000);
    expect(result.withheldVat).toBe(5000);
    expect(result.invoicedVat).toBe(0);
    expect(result.payableAmount).toBe(25000);
    expect(result.grossAmount).toBe(30000);
  });

  it('maintains cent-level rounding precision without 1-cent discrepancy on odd numbers', () => {
    const result = calculateTevkifat({
      netAmount: 123.45,
      vatRate: 20,
      fraction: '7/10',
    });

    // 123.45 * 0.20 = 24.69
    expect(result.totalVat).toBe(24.69);
    // 24.69 * 0.7 = 17.283 -> 17.28
    expect(result.withheldVat).toBe(17.28);
    // 24.69 - 17.28 = 7.41
    expect(result.invoicedVat).toBe(7.41);
    expect(result.withheldVat + result.invoicedVat).toBe(result.totalVat);
    expect(result.payableAmount).toBe(130.86);
    expect(result.grossAmount).toBe(148.14);
    expect(Number((result.payableAmount + result.withheldVat).toFixed(2))).toBe(result.grossAmount);
  });

  it('calculates Tevkifat in reverse from known Gross amount', () => {
    // 12,000 Gross at 20% KDV with 5/10 Tevkifat -> 10,000 Net
    const result = calculateTevkifatFromGross(12000, '5/10', 20);
    expect(result.netAmount).toBe(10000);
    expect(result.totalVat).toBe(2000);
    expect(result.withheldVat).toBe(1000);
    expect(result.invoicedVat).toBe(1000);
    expect(result.payableAmount).toBe(11000);
  });

  it('gracefully parses fractions with spaces and handles custom fractions', () => {
    const parsed1 = parseTevkifatFraction(' 3 / 10 ');
    expect(parsed1.fraction).toBe('3/10');
    expect(parsed1.ratio).toBe(0.3);

    const parsedCustom = parseTevkifatFraction('1/2');
    expect(parsedCustom.ratio).toBe(0.5);

    const fallback = parseTevkifatFraction('invalid');
    expect(fallback.fraction).toBe('5/10');
  });
});

describe('Romanian Date-Aware VAT Engine & Historical Lookup', () => {
  it('includes historical Romanian VAT schedules with exact dates', () => {
    expect(ROMANIAN_VAT_HISTORY.length).toBeGreaterThanOrEqual(4);
    const postAug2025 = ROMANIAN_VAT_HISTORY[0];
    expect(postAug2025.validFrom).toBe('2025-08-01');
    expect(postAug2025.standardRate).toBe(21);
    expect(postAug2025.reducedRates).toEqual([11]);
    expect(postAug2025.isPostAug2025).toBe(true);

    const preAug2025 = ROMANIAN_VAT_HISTORY[1];
    expect(preAug2025.validFrom).toBe('2017-01-01');
    expect(preAug2025.validTo).toBe('2025-07-31');
    expect(preAug2025.standardRate).toBe(19);
    expect(preAug2025.reducedRates).toEqual([9, 5]);
    expect(preAug2025.superReducedRate).toBe(5);
  });

  it('correctly returns rates for pre-August 2025 dates (Standard 19%, Reduced 9%, 5%)', () => {
    const rates2024 = getRomanianVatRates('2024-05-15');
    expect(rates2024.standardRate).toBe(19);
    expect(rates2024.reducedRates).toEqual([9, 5]);
    expect(rates2024.superReducedRate).toBe(5);
    expect(rates2024.isPostAug2025).toBe(false);

    // Boundary check on the last day before reform
    const lastDayOld = getRomanianVatRates('2025-07-31');
    expect(lastDayOld.standardRate).toBe(19);
    expect(lastDayOld.isPostAug2025).toBe(false);
  });

  it('correctly returns rates for post-August 2025 dates under Law 141/2025 (Standard 21%, Reduced 11%)', () => {
    // Boundary check on the first day of reform
    const firstDayNew = getRomanianVatRates('2025-08-01');
    expect(firstDayNew.standardRate).toBe(21);
    expect(firstDayNew.reducedRates).toEqual([11]);
    expect(firstDayNew.isPostAug2025).toBe(true);
    expect(firstDayNew.legalReference).toContain('141/2025');

    const year2026 = getRomanianVatRates('2026-11-14');
    expect(year2026.standardRate).toBe(21);
    expect(year2026.reducedRates).toEqual([11]);
  });

  it('calculates Romanian VAT addition for pre-August 2025 invoice', () => {
    const result = calculateRomanianVat({
      amount: 1000,
      date: '2025-05-01',
      rateTier: 'standard',
      type: 'add',
    });

    expect(result.appliedRate).toBe(19);
    expect(result.netAmount).toBe(1000);
    expect(result.vatAmount).toBe(190);
    expect(result.grossAmount).toBe(1190);
    expect(result.isPostAug2025).toBe(false);
  });

  it('calculates Romanian VAT addition for post-August 2025 invoice at 21%', () => {
    const result = calculateRomanianVat({
      amount: 1000,
      date: '2025-08-15',
      rateTier: 'standard',
      type: 'add',
    });

    expect(result.appliedRate).toBe(21);
    expect(result.netAmount).toBe(1000);
    expect(result.vatAmount).toBe(210);
    expect(result.grossAmount).toBe(1210);
    expect(result.isPostAug2025).toBe(true);
    expect(result.breakdown).toHaveLength(3);
  });

  it('calculates Romanian VAT for reduced rates pre vs post August 2025', () => {
    // Pre-August 2025 reduced rate = 9%
    const preReduced = calculateRomanianVat({
      amount: 1000,
      date: '2025-03-01',
      rateTier: 'reduced',
      type: 'add',
    });
    expect(preReduced.appliedRate).toBe(9);
    expect(preReduced.vatAmount).toBe(90);

    // Post-August 2025 reduced rate = 11% (unified reduced rate)
    const postReduced = calculateRomanianVat({
      amount: 1000,
      date: '2025-09-01',
      rateTier: 'reduced',
      type: 'add',
    });
    expect(postReduced.appliedRate).toBe(11);
    expect(postReduced.vatAmount).toBe(110);
  });

  it('calculates Romanian VAT removal (Gross to Net) post-August 2025', () => {
    // 1210 RON Gross at 21% -> 1000 RON Net, 210 RON VAT
    const result = calculateRomanianVat({
      amount: 1210,
      date: '2025-10-01',
      rateTier: 'standard',
      type: 'remove',
    });

    expect(result.grossAmount).toBe(1210);
    expect(result.netAmount).toBe(1000);
    expect(result.vatAmount).toBe(210);
  });

  it('handles zero rate and custom rate tiers', () => {
    const zeroResult = calculateRomanianVat({
      amount: 500,
      date: '2026-01-01',
      rateTier: 'zero',
    });
    expect(zeroResult.appliedRate).toBe(0);
    expect(zeroResult.vatAmount).toBe(0);
    expect(zeroResult.grossAmount).toBe(500);

    const customResult = calculateRomanianVat({
      amount: 500,
      rateTier: 'custom',
      customRate: 15,
    });
    expect(customResult.appliedRate).toBe(15);
    expect(customResult.vatAmount).toBe(75);
    expect(customResult.grossAmount).toBe(575);
  });
});

describe('EU VAT Rates and Multi-Country Hub Engine', () => {
  it('contains official European Commission VAT rates for all 27 EU Member States plus UK', () => {
    const expectedMemberStates = [
      'AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI',
      'FR', 'GR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT',
      'NL', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK',
    ];

    expectedMemberStates.forEach((code) => {
      expect(EU_VAT_RATES[code], `Missing EU country ${code}`).toBeDefined();
      expect(EU_VAT_RATES[code].standardRate).toBeGreaterThan(0);
      expect(EU_VAT_RATES[code].source).toBeDefined();
      expect(EU_VAT_RATES[code].verifiedOn).toBe('2026-01-01');
    });

    // Plus UK
    expect(EU_VAT_RATES['UK']).toBeDefined();
    expect(EU_VAT_RATES['UK'].standardRate).toBe(20);
    expect(EU_VAT_RATES['UK'].reducedRates).toContain(5);

    // Total 28 countries
    expect(Object.keys(EU_VAT_RATES)).toHaveLength(28);
  });

  it('verifies specific statutory EU rates like Finland 25.5%, Hungary 27%, Luxembourg 17%', () => {
    expect(EU_VAT_RATES['HU'].standardRate).toBe(27); // Highest in EU
    expect(EU_VAT_RATES['LU'].standardRate).toBe(17); // Lowest in EU
    expect(EU_VAT_RATES['FI'].standardRate).toBe(25.5); // September 2024 update
    expect(EU_VAT_RATES['DK'].standardRate).toBe(25);
    expect(EU_VAT_RATES['DK'].reducedRates).toEqual([]); // Denmark has no reduced rates
    expect(EU_VAT_RATES['DE'].standardRate).toBe(19);
    expect(EU_VAT_RATES['FR'].standardRate).toBe(20);
  });

  it('supports case-insensitive lookup and aliases Greece EL to GR', () => {
    expect(getEuVatRate('gr')?.countryName).toBe('Greece');
    expect(getEuVatRate('el')?.countryName).toBe('Greece');
    expect(getEuVatRate('DE')?.countryName).toBe('Germany');
    expect(getEuVatRate('uk')?.countryName).toBe('United Kingdom');
    expect(getEuVatRate('nonexistent')).toBeUndefined();
  });

  it('compares VAT across all 28 countries and ranks them from lowest to highest tax', () => {
    const comparison = compareAllEuVat(1000, 'add', 'standard');
    expect(comparison.rankings).toHaveLength(28);

    // Rank 1 must be lowest VAT (Luxembourg at 17% = 170 VAT)
    const lowest = comparison.rankings[0];
    expect(lowest.code).toBe('LU');
    expect(lowest.rate).toBe(17);
    expect(lowest.vatAmount).toBe(170);
    expect(lowest.grossAmount).toBe(1170);

    // Last rank must be highest VAT (Hungary at 27% = 270 VAT)
    const highest = comparison.rankings[comparison.rankings.length - 1];
    expect(highest.code).toBe('HU');
    expect(highest.rate).toBe(27);
    expect(highest.vatAmount).toBe(270);
    expect(highest.grossAmount).toBe(1270);

    // Statistics checks
    expect(comparison.stats.minStandardRate).toBe(17);
    expect(comparison.stats.maxStandardRate).toBe(27);
    expect(comparison.stats.averageStandardRate).toBeGreaterThan(20);
    expect(comparison.stats.averageStandardRate).toBeLessThan(23);
    expect(comparison.stats.medianStandardRate).toBeGreaterThanOrEqual(21);
    expect(comparison.stats.totalCountriesCount).toBe(28);
  });

  it('performs cross-border country pair comparison under fixed Net price parity', () => {
    // A merchant sells a B2B product for 1,000 EUR Net from Germany (19%) into Hungary (27%)
    const pair = compareCountryPair({
      amount: 1000,
      originCountry: 'DE',
      destinationCountry: 'HU',
      parityMode: 'fixedNet',
    });

    expect(pair.origin.vatAmount).toBe(190);
    expect(pair.origin.grossAmount).toBe(1190);
    expect(pair.destination.vatAmount).toBe(270);
    expect(pair.destination.grossAmount).toBe(1270);

    expect(pair.vatRateDelta).toBe(8); // 27% - 19%
    expect(pair.vatAmountDelta).toBe(80); // 270 - 190
    expect(pair.grossAmountDelta).toBe(80); // 1270 - 1190
    expect(pair.netAmountDelta).toBe(0); // Seller kept same Net
    expect(pair.sellerMarginImpactPercentage).toBe(0);
  });

  it('performs cross-border country pair comparison under fixed Gross consumer price parity (B2C)', () => {
    // A digital merchant sells an item for €100 retail gross in Germany (19%) and Hungary (27%)
    const pair = compareCountryPair({
      amount: 100,
      originCountry: 'DE',
      destinationCountry: 'HU',
      parityMode: 'fixedGross',
    });

    // In Germany (19%): Gross 100 -> Net 84.03, VAT 15.97
    expect(pair.origin.grossAmount).toBe(100);
    expect(pair.origin.netAmount).toBe(84.03);
    expect(pair.origin.vatAmount).toBe(15.97);

    // In Hungary (27%): Gross 100 -> Net 78.74, VAT 21.26
    expect(pair.destination.grossAmount).toBe(100);
    expect(pair.destination.netAmount).toBe(78.74);
    expect(pair.destination.vatAmount).toBe(21.26);

    // Impact on seller margin: 78.74 - 84.03 = -5.29 EUR
    expect(pair.netAmountDelta).toBe(-5.29);
    expect(pair.sellerMarginImpactPercentage).toBe(-6.3); // (-5.29 / 84.03) * 100
  });

  it('provides global EU summary statistics through getEuVatSummary', () => {
    const summary = getEuVatSummary();
    expect(summary.totalCountriesCount).toBe(28);
    expect(summary.lowestVatCountry.code).toBe('LU');
    expect(summary.highestVatCountry.code).toBe('HU');
  });

  it('throws a descriptive error when unknown country code is passed to compareCountryPair', () => {
    expect(() =>
      compareCountryPair({
        amount: 100,
        originCountry: 'UNKNOWN',
        destinationCountry: 'DE',
      }),
    ).toThrow('Invalid or unsupported origin country code');
  });
});
