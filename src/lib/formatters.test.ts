import { describe, it, expect } from 'vitest';
import { parseLocaleNumber, formatCurrency, formatNumber } from './formatters';

describe('Locale formatters and parsers', () => {
  it('parses European comma decimal format "1.234,56"', () => {
    expect(parseLocaleNumber('1.234,56')).toBe(1234.56);
  });

  it('parses standard dot decimal format "1,234.56"', () => {
    expect(parseLocaleNumber('1,234.56')).toBe(1234.56);
  });

  it('strips currency symbols and spaces "£ 500,25"', () => {
    expect(parseLocaleNumber('£ 500,25')).toBe(500.25);
    expect(parseLocaleNumber('€ 1.500,00')).toBe(1500.0);
    expect(parseLocaleNumber('1 250,50 zł')).toBe(1250.5);
  });

  it('formats currency correctly for different locales', () => {
    const ukFormatted = formatCurrency(100, 'en', 'GBP');
    expect(ukFormatted).toContain('100.00');

    const deFormatted = formatCurrency(100, 'de', 'EUR');
    expect(deFormatted).toContain('100,00');
  });

  it('formats numbers with specified decimals', () => {
    expect(formatNumber(1234.5, 'en', 2)).toBe('1,234.50');
  });
});
