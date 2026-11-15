import { describe, it, expect } from 'vitest';
import {
  buildMetadata,
  buildCanonicalUrl,
  buildSeoTitle,
  buildSeoDescription,
  getOgLocale,
} from './seo';

describe('SEO Library - buildCanonicalUrl', () => {
  it('generates canonical url with trailing slash for root', () => {
    expect(buildCanonicalUrl('')).toBe('https://money.zetawala.com/');
    expect(buildCanonicalUrl('/')).toBe('https://money.zetawala.com/');
  });

  it('generates canonical url with trailing slash for slugs', () => {
    expect(buildCanonicalUrl('vat-calculator')).toBe('https://money.zetawala.com/vat-calculator/');
    expect(buildCanonicalUrl('/vat-calculator/')).toBe(
      'https://money.zetawala.com/vat-calculator/',
    );
    expect(buildCanonicalUrl('de/mwst-rechner')).toBe(
      'https://money.zetawala.com/de/mwst-rechner/',
    );
  });
});

describe('SEO Library - buildSeoTitle', () => {
  it('keeps titles within 60 characters and appends brand suffix', () => {
    const title = buildSeoTitle('VAT Calculator');
    expect(title).toContain('VAT Calculator');
    expect(title).toContain('| Zetawala Money');
    expect(title.length).toBeLessThanOrEqual(60);
  });

  it('adds year when space permits', () => {
    const title = buildSeoTitle('VAT Calculator', ' | Zetawala Money', 2026);
    expect(title).toContain('2026');
    expect(title.length).toBeLessThanOrEqual(60);
  });

  it('does not duplicate brand name or year', () => {
    const title = buildSeoTitle('VAT Calculator 2026 | Zetawala Money');
    expect(title).toBe('VAT Calculator 2026 | Zetawala Money');
  });

  it('truncates gracefully to strict 60 chars max if raw title is long', () => {
    const longTitle =
      'Very Long Financial Calculator With Extreme Keyword Density And Many Extra Words';
    const title = buildSeoTitle(longTitle);
    expect(title.length).toBeLessThanOrEqual(60);
    expect(title).toContain('| Zetawala Money');
  });
});

describe('SEO Library - buildSeoDescription', () => {
  it('clamps descriptions strictly to 155 characters max', () => {
    const longDesc =
      'Calculate VAT quickly with our free online tool for UK businesses and consumers. Get instant net, gross, and tax breakdown with official 2026 HMRC rates right here in your browser today!';
    const desc = buildSeoDescription(longDesc);
    expect(desc.length).toBeLessThanOrEqual(155);
  });
});

describe('SEO Library - getOgLocale', () => {
  it('returns appropriate locales including regional variants', () => {
    expect(getOgLocale('en')).toBe('en_GB');
    expect(getOgLocale('en', 'uk')).toBe('en_GB');
    expect(getOgLocale('en', 'au')).toBe('en_AU');
    expect(getOgLocale('en', 'ca')).toBe('en_CA');
    expect(getOgLocale('de')).toBe('de_DE');
    expect(getOgLocale('pl')).toBe('pl_PL');
    expect(getOgLocale('tr')).toBe('tr_TR');
    expect(getOgLocale('ro')).toBe('ro_RO');
    expect(getOgLocale('fr')).toBe('fr_FR');
    expect(getOgLocale('es')).toBe('es_ES');
    expect(getOgLocale('it')).toBe('it_IT');
    expect(getOgLocale('nl')).toBe('nl_NL');
  });
});

describe('SEO Library - buildMetadata', () => {
  it('creates complete metadata for home page', () => {
    const meta = buildMetadata('home', 'en');
    expect(meta.title?.toString().length).toBeLessThanOrEqual(60);
    expect(meta.description?.length).toBeLessThanOrEqual(155);
    expect(meta.alternates?.canonical).toBe('https://money.zetawala.com/');
    expect(meta.openGraph?.locale).toBe('en_GB');
    expect((meta.twitter as any)?.card).toBe('summary_large_image');
    expect((meta.twitter as any)?.site).toBe('@zetawala');

    // Hreflang alternates
    const langs = meta.alternates?.languages as Record<string, string>;
    expect(langs).toBeDefined();
    expect(langs['en']).toBe('https://money.zetawala.com/');
    expect(langs['de']).toBe('https://money.zetawala.com/de/');
    expect(langs['x-default']).toBe('https://money.zetawala.com/');
  });

  it('creates alternates with x-default for tools with translations', () => {
    const meta = buildMetadata('vat-calculator', 'en', 'uk');
    expect(meta.alternates?.canonical).toBe('https://money.zetawala.com/vat-calculator/');

    const langs = meta.alternates?.languages as Record<string, string>;
    expect(langs).toBeDefined();
    expect(langs['x-default']).toBe('https://money.zetawala.com/vat-calculator/');
    expect(langs['de-DE']).toBe('https://money.zetawala.com/de/mwst-rechner/');
  });

  it('handles regional tools like electricity-cost-calculator', () => {
    const metaUk = buildMetadata('electricity-cost-calculator', 'en', 'uk');
    expect(metaUk.alternates?.canonical).toBe(
      'https://money.zetawala.com/electricity-cost-calculator/uk/',
    );
    expect(metaUk.openGraph?.locale).toBe('en_GB');

    const langs = metaUk.alternates?.languages as Record<string, string>;
    expect(langs['en-GB']).toBe('https://money.zetawala.com/electricity-cost-calculator/uk/');
    expect(langs['en-AU']).toBe(
      'https://money.zetawala.com/electricity-cost-calculator/australia/',
    );
    expect(langs['x-default']).toBe('https://money.zetawala.com/electricity-cost-calculator/uk/');
  });
});
