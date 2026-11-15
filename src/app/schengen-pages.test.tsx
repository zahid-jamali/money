import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { buildMetadata } from '@/lib/seo';
import SchengenCalculatorPageEn, { metadata as enMeta } from '@/app/(en)/schengen-calculator/page';
import SchengenGunHesaplamaPageTr, { metadata as trMeta } from '@/app/(tr)/tr/schengen-gun-hesaplama/page';
import EtiasPageEn from '@/app/(en)/etias/page';
import EesEntryExitSystemPageEn from '@/app/(en)/ees-entry-exit-system/page';
import Schengen90180RuleExplainedPage from '@/app/(en)/guides/schengen-90-180-rule-explained/page';
import UkCitizensEuropeTravelRulesPage from '@/app/(en)/guides/uk-citizens-europe-travel-rules/page';
import SchengenOverstayConsequencesPage from '@/app/(en)/guides/schengen-overstay-consequences/page';
import SchengenCountriesListPage from '@/app/(en)/guides/schengen-countries-list/page';
import SchengenVizesi90180KuraliGuidePageTr from '@/app/(tr)/tr/rehber/schengen-vizesi-90-180-kurali/page';

describe('Schengen App Router Pages Rendering', () => {
  it('renders English Schengen Calculator tool page', () => {
    const html = renderToString(<SchengenCalculatorPageEn />);
    expect(html).toContain('Schengen 90/180 Day Calculator');
    expect(html).toContain('180-Day Rolling Window Timeline');
    expect(html).toContain('Days Used');
    expect(html).toContain('Future Trip Planner');
  });

  it('renders Turkish Schengen Gün Hesaplama tool page', () => {
    const html = renderToString(<SchengenGunHesaplamaPageTr />);
    expect(html).toContain('Schengen Vize Gün Hesaplama');
    expect(html).toContain('180 Günlük Hareketli Pencere Zaman Çizelgesi');
    expect(html).toContain('Kullanılan Gün');
    expect(html).toContain('Gelecek Seyahat Planlama');
  });

  it('renders ETIAS 2027 information page with status card', () => {
    const html = renderToString(<EtiasPageEn />);
    expect(html).toContain('ETIAS: European Travel Information and Authorisation System');
    expect(html).toContain('2027');
    expect(html).toContain('7');
    expect(html).toContain('Years');
  });

  it('renders EES Entry/Exit System information page', () => {
    const html = renderToString(<EesEntryExitSystemPageEn />);
    expect(html).toContain('EU Entry/Exit System (EES)');
    expect(html).toContain('Biometric Capture');
    expect(html).toContain('No More Passport Stamps');
    expect(html).toContain('Real-Time Overstay Tracking');
  });

  it('renders Schengen 90/180 Rule Explained guide page', () => {
    const html = renderToString(<Schengen90180RuleExplainedPage />);
    expect(html).toContain('The Schengen 90/180 Rule Explained: The Complete Guide');
    expect(html).toContain('Regulation (EU) 2016/399');
    expect(html).toContain('Launch Schengen Calculator');
  });

  it('renders UK Citizens Europe Travel Rules guide page', () => {
    const html = renderToString(<UkCitizensEuropeTravelRulesPage />);
    expect(html).toContain('Europe Travel Rules for UK Citizens: Passports, 90/180 Days &amp; ETIAS');
    expect(html).toContain('10-Year Issue Rule');
    expect(html).toContain('Juxtaposed Controls');
  });

  it('renders Schengen Overstay Consequences guide page', () => {
    const html = renderToString(<SchengenOverstayConsequencesPage />);
    expect(html).toContain('Schengen Overstay Consequences: Fines, Entry Bans &amp; Legal Risks');
    expect(html).toContain('Article 33');
    expect(html).toContain('SIS II');
  });

  it('renders Schengen Countries List 2026 guide page', () => {
    const html = renderToString(<SchengenCountriesListPage />);
    expect(html).toContain('Schengen Countries List 2026: All 29 Member States &amp; Map Guide');
    expect(html).toContain('Bulgaria');
    expect(html).toContain('Romania');
  });

  it('renders Turkish Schengen Vizesi Rehberi guide page', () => {
    const html = renderToString(<SchengenVizesi90180KuraliGuidePageTr />);
    expect(html).toContain('Schengen Vizesi 90/180 Kuralı: Kapsamlı Hesaplama ve Kullanım Rehberi');
    expect(html).toContain('Kapıkule');
    expect(html).toContain('Schengen Gün Hesaplayıcıyı Aç');
  });

  describe('SEO & Hreflang Alternates', () => {
    it('generates mutual hreflangs between English and Turkish calculator pages', () => {
      expect(enMeta.alternates?.languages).toBeDefined();
      expect(enMeta.alternates?.languages?.['en']).toContain('/schengen-calculator/');
      expect(enMeta.alternates?.languages?.['tr-TR']).toContain('/tr/schengen-gun-hesaplama/');

      expect(trMeta.alternates?.languages).toBeDefined();
      expect(trMeta.alternates?.languages?.['en']).toContain('/schengen-calculator/');
      expect(trMeta.alternates?.languages?.['tr-TR']).toContain('/tr/schengen-gun-hesaplama/');
    });
  });
});
