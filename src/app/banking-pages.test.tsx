import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { getPageContent } from '@/content';
import { ibanRechnerDe } from '@/content/de/iban-rechner';
import { blzSucheDe } from '@/content/de/blz-suche';
import { bicCheckerEn } from '@/content/en/bic-checker';
import { bicCheckerDe } from '@/content/de/bic-checker';
import {
  getCountryMetaBySlugEn,
  getCountryMetaBySlugDe,
  getCountryMetaByCode,
  getAllCountrySlugsEn,
  getAllCountrySlugsDe,
  TARGET_COUNTRY_METAS,
} from '@/data/iban-country-meta';
import GermanIbanRechnerPage from '@/app/(de)/de/iban-rechner/page';
import GermanBlzSuchePage from '@/app/(de)/de/blz-suche/page';
import BicSwiftCheckerPageEn from '@/app/(en)/bic-swift-checker/page';
import BicPruefenPageDe from '@/app/(de)/de/bic-pruefen/page';
import GermanBankDetailPage, { generateStaticParams as blzStaticParams } from '@/app/(de)/de/blz/[blz]/page';
import CountryIbanFormatPageEn, { generateStaticParams as enFormatStaticParams } from '@/app/(en)/iban-format/[country]/page';
import CountryIbanFormatPageDe, { generateStaticParams as deFormatStaticParams } from '@/app/(de)/de/iban-format/[land]/page';

describe('German Banking & Programmatic Content & Pages', () => {
  describe('Content Registry & Files', () => {
    it('retrieves German IBAN Rechner content', () => {
      const content = getPageContent('de', 'iban-rechner');
      expect(content).not.toBeNull();
      expect(content?.h1).toContain('IBAN Rechner Deutschland');
      expect(content?.articleSections.length).toBeGreaterThanOrEqual(4);
      expect(content?.faqs.length).toBe(8);
      expect((content as any)?.examples.length).toBe(2);
    });

    it('retrieves German BLZ Suche content', () => {
      const content = getPageContent('de', 'blz-suche');
      expect(content).not.toBeNull();
      expect(content?.h1).toContain('BLZ Suche');
      expect(content?.articleSections.length).toBeGreaterThanOrEqual(4);
      expect(content?.faqs.length).toBe(8);
      expect((content as any)?.examples.length).toBe(2);
    });

    it('retrieves BIC Checker content in English and German', () => {
      const en = getPageContent('en', 'bic-swift-checker');
      const de = getPageContent('de', 'bic-pruefen');

      expect(en).not.toBeNull();
      expect(en?.h1).toContain('BIC & SWIFT Code Validator');
      expect(en?.faqs.length).toBe(8);

      expect(de).not.toBeNull();
      expect(de?.h1).toContain('BIC & SWIFT Prüfer');
      expect(de?.faqs.length).toBe(8);
    });
  });

  describe('Country Metadata & Slugs', () => {
    it('contains all 36+ SEPA countries plus UAE, SA, TR, PK, EG, QA', () => {
      expect(TARGET_COUNTRY_METAS.length).toBeGreaterThanOrEqual(42);

      const codes = new Set(TARGET_COUNTRY_METAS.map((m) => m.code));
      expect(codes.has('DE')).toBe(true);
      expect(codes.has('AT')).toBe(true);
      expect(codes.has('CH')).toBe(true);
      expect(codes.has('GB')).toBe(true);
      expect(codes.has('FR')).toBe(true);
      expect(codes.has('ES')).toBe(true);
      expect(codes.has('IT')).toBe(true);
      expect(codes.has('NL')).toBe(true);
      expect(codes.has('PL')).toBe(true);

      // Extra targets:
      expect(codes.has('AE')).toBe(true);
      expect(codes.has('SA')).toBe(true);
      expect(codes.has('TR')).toBe(true);
      expect(codes.has('PK')).toBe(true);
      expect(codes.has('EG')).toBe(true);
      expect(codes.has('QA')).toBe(true);
    });

    it('maps English and German slugs accurately', () => {
      const deEn = getCountryMetaBySlugEn('germany');
      const deDe = getCountryMetaBySlugDe('deutschland');
      expect(deEn?.code).toBe('DE');
      expect(deDe?.code).toBe('DE');

      const trEn = getCountryMetaBySlugEn('turkey');
      const trDe = getCountryMetaBySlugDe('tuerkei');
      expect(trEn?.code).toBe('TR');
      expect(trDe?.code).toBe('TR');
    });

    it('generates non-empty static params arrays for programmatic country pages', () => {
      const enParams = enFormatStaticParams();
      const deParams = deFormatStaticParams();
      expect(enParams.length).toBeGreaterThanOrEqual(42);
      expect(deParams.length).toBeGreaterThanOrEqual(42);
      expect(enParams.some((p) => p.country === 'germany')).toBe(true);
      expect(deParams.some((p) => p.land === 'deutschland')).toBe(true);
    });
  });

  describe('Programmatic German Bank Pages (/de/blz/[blz]/)', () => {
    it('generates static params for all 3,432 main banks', () => {
      const params = blzStaticParams();
      expect(params.length).toBe(3432);
      expect(params.some((p) => p.blz === '10070000')).toBe(true);
      expect(params.some((p) => p.blz === '10000000')).toBe(true);
    });

    it('renders bank detail page for Deutsche Bank Berlin (BLZ 10070000)', async () => {
      const pageJsx = await GermanBankDetailPage({
        params: Promise.resolve({ blz: '10070000' }),
      });
      const html = renderToString(pageJsx);

      expect(html).toContain('Deutsche Bank');
      expect(html).toContain('10070000');
      expect(html).toContain('DEUTDEBB');
      expect(html).toContain('Hauptstelle (Merkmal 1)');
      expect(html).toContain('Muster-IBAN');
      expect(html).toContain('application/ld+json');
    });
  });

  describe('Standalone Tool Pages Rendering', () => {
    it('renders /de/iban-rechner/ page without errors', () => {
      const html = renderToString(<GermanIbanRechnerPage />);
      expect(html).toContain('IBAN Rechner Deutschland 2026');
      expect(html).toContain('Bankleitzahl (BLZ)');
      expect(html).toContain('Kontonummer');
      expect(html).toContain('application/ld+json');
    });

    it('renders /de/blz-suche/ page without errors', () => {
      const html = renderToString(<GermanBlzSuchePage />);
      expect(html).toContain('BLZ Suche');
      expect(html).toContain('Deutsche Bundesbank');
      expect(html).toContain('application/ld+json');
    });

    it('renders /bic-swift-checker/ (en) page without errors', () => {
      const html = renderToString(<BicSwiftCheckerPageEn />);
      expect(html).toContain('BIC &amp; SWIFT Code Validator');
      expect(html).toContain('Enter BIC / SWIFT Code');
      expect(html).toContain('application/ld+json');
    });

    it('renders /de/bic-pruefen/ (de) page without errors', () => {
      const html = renderToString(<BicPruefenPageDe />);
      expect(html).toContain('BIC &amp; SWIFT Prüfer');
      expect(html).toContain('BIC / SWIFT-Code eingeben');
      expect(html).toContain('application/ld+json');
    });

    it('renders programmatic country page in English for Germany', async () => {
      const pageJsx = await CountryIbanFormatPageEn({
        params: Promise.resolve({ country: 'germany' }),
      });
      const html = renderToString(pageJsx);
      expect(html).toContain('Germany IBAN Format');
      expect(html).toContain('22');
      expect(html).toContain('EMZ');
      expect(html).toContain('Where to Find Your IBAN in Germany');
    });

    it('renders programmatic country page in German for Deutschland', async () => {
      const pageJsx = await CountryIbanFormatPageDe({
        params: Promise.resolve({ land: 'deutschland' }),
      });
      const html = renderToString(pageJsx);
      expect(html).toContain('Deutschland IBAN Format');
      expect(html).toContain('22');
      expect(html).toContain('Wo finde ich meine IBAN in Deutschland?');
    });
  });
});
