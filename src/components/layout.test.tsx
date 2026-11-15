import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import { Header, getTargetUrlForLang } from './Header';
import { Footer } from './Footer';

describe('Header Component', () => {
  it('computes correct language switcher links for tool page', () => {
    // vat-calculator exists in 'en' (slug 'vat-calculator') and 'de' (slug 'de/mwst-rechner')
    expect(getTargetUrlForLang('en', 'vat-calculator')).toBe('/vat-calculator/');
    expect(getTargetUrlForLang('de', 'vat-calculator')).toBe('/de/mwst-rechner/');
    // For languages where vat-calculator is not registered, should fall back to /${lang}/
    expect(getTargetUrlForLang('pl', 'vat-calculator')).toBe('/pl/');
    expect(getTargetUrlForLang('tr', 'vat-calculator')).toBe('/tr/');
  });

  it('computes correct language switcher links for home page', () => {
    expect(getTargetUrlForLang('en', 'home')).toBe('/');
    expect(getTargetUrlForLang('de', 'home')).toBe('/de/');
    expect(getTargetUrlForLang('es', 'home')).toBe('/es/');
  });

  it('renders logo, brand title, and category navigation', () => {
    const html = renderToString(<Header lang="de" />);

    // Logo link to /de
    expect(html).toMatch(/href="\/de\/?\"/);
    expect(html).toContain('Zetawala');
    expect(html).toContain('Money');

    // German category links
    expect(html).toContain('Banken &amp; Konten');
    expect(html).toContain('Steuern &amp; MwSt.');
  });

  it('renders English navigation categories and logo', () => {
    const html = renderToString(<Header lang="en" />);
    expect(html).toContain('Zetawala');
    expect(html).toContain('Money');
    expect(html).toContain('Banking');
    expect(html).toContain('Tax &amp; VAT');
  });
});

describe('Footer Component', () => {
  it('renders brand column, tool navigation, and single discrete Zetawala project link', () => {
    const html = renderToString(<Footer lang="en" />);

    // Discrete parent attribution
    expect(html).toContain('A project by');
    expect(html).toContain('https://zetawala.com');

    // Columns
    expect(html).toContain('Calculators');
    expect(html).toContain('Guides');
    expect(html).toContain('Information');

    // Copyright
    expect(html).toMatch(/2026/);
    expect(html).toMatch(/Zetawala/);

    // Impressum should not be on English footer
    expect(html).not.toContain('Impressum');
  });

  it('includes Impressum on German /de/ footer', () => {
    const html = renderToString(<Footer lang="de" />);

    // Discrete parent attribution
    expect(html).toContain('A project by');
    expect(html).toContain('https://zetawala.com');

    // Impressum link must be present on German footer
    expect(html).toContain('Impressum');
    expect(html).toMatch(/href="\/de\/impressum\/?\"/);
  });
});
