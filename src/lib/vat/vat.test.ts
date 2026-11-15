import { describe, it, expect } from 'vitest';
import { calculateVat } from './index';

describe('VAT Calculator pure math engine', () => {
  it('correctly calculates VAT addition (Net to Gross) at UK 20%', () => {
    const result = calculateVat({ amount: 100, rate: 20, type: 'add' });
    expect(result.netAmount).toBe(100);
    expect(result.vatAmount).toBe(20);
    expect(result.grossAmount).toBe(120);
    expect(result.breakdown).toHaveLength(3);
  });

  it('correctly calculates VAT removal (Gross to Net) at German 19%', () => {
    // 119 Gross at 19% VAT -> 100 Net, 19 VAT
    const result = calculateVat({ amount: 119, rate: 19, type: 'remove' });
    expect(result.grossAmount).toBe(119);
    expect(result.netAmount).toBe(100);
    expect(result.vatAmount).toBe(19);
  });

  it('handles fractional amounts and rounds to 2 decimals accurately', () => {
    const result = calculateVat({ amount: 49.99, rate: 20, type: 'add' });
    // 49.99 * 0.20 = 9.998 -> rounded 10.00
    expect(result.vatAmount).toBe(10.0);
    expect(result.grossAmount).toBe(59.99);
  });

  it('handles zero rate without errors', () => {
    const result = calculateVat({ amount: 250, rate: 0, type: 'remove' });
    expect(result.grossAmount).toBe(250);
    expect(result.netAmount).toBe(250);
    expect(result.vatAmount).toBe(0);
  });
});
