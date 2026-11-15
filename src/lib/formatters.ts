import { SupportedLang } from '@/config/pages';

const LOCALE_MAP: Record<SupportedLang | string, string> = {
  en: 'en-GB',
  'en-GB': 'en-GB',
  'en-AU': 'en-AU',
  'en-CA': 'en-CA',
  de: 'de-DE',
  pl: 'pl-PL',
  tr: 'tr-TR',
  ro: 'ro-RO',
  fr: 'fr-FR',
  es: 'es-ES',
  it: 'it-IT',
  nl: 'nl-NL',
};

const CURRENCY_BY_LANG: Record<SupportedLang | string, string> = {
  en: 'GBP',
  'en-GB': 'GBP',
  'en-AU': 'AUD',
  'en-CA': 'CAD',
  de: 'EUR',
  pl: 'PLN',
  tr: 'TRY',
  ro: 'RON',
  fr: 'EUR',
  es: 'EUR',
  it: 'EUR',
  nl: 'EUR',
};

/**
 * Format a number as currency using Intl.NumberFormat
 */
export function formatCurrency(
  value: number,
  lang: SupportedLang | string = 'en',
  overrideCurrency?: string,
): string {
  const locale = LOCALE_MAP[lang] || 'en-GB';
  const currency = overrideCurrency || CURRENCY_BY_LANG[lang] || 'GBP';

  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    return `${currency} ${value.toFixed(2)}`;
  }
}

/**
 * Format a plain decimal or integer with locale thousands separators
 */
export function formatNumber(
  value: number,
  lang: SupportedLang | string = 'en',
  decimals = 2,
): string {
  const locale = LOCALE_MAP[lang] || 'en-GB';
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * Robust locale input parser:
 * Accepts comma and dot decimals, strips currency symbols (£, €, zł, ₺, $, etc.) and spaces.
 */
export function parseLocaleNumber(rawInput: string | number): number {
  if (typeof rawInput === 'number') {
    return Number.isFinite(rawInput) ? rawInput : 0;
  }
  if (!rawInput) return 0;

  let cleaned = rawInput.trim();
  // Remove currency symbols, letters, spaces
  cleaned = cleaned.replace(/[^0-9.,\-]/g, '');

  if (!cleaned) return 0;

  const hasComma = cleaned.includes(',');
  const hasDot = cleaned.includes('.');

  if (hasComma && hasDot) {
    const lastComma = cleaned.lastIndexOf(',');
    const lastDot = cleaned.lastIndexOf('.');
    if (lastComma > lastDot) {
      // European format: 1.234,56
      cleaned = cleaned.replace(/\./g, '').replace(',', '.');
    } else {
      // Anglo format: 1,234.56
      cleaned = cleaned.replace(/,/g, '');
    }
  } else if (hasComma) {
    // Only comma: treat as decimal separator e.g. 12,50 -> 12.50
    cleaned = cleaned.replace(',', '.');
  }

  const parsed = parseFloat(cleaned);
  return Number.isNaN(parsed) ? 0 : parsed;
}
