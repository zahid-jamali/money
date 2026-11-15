import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import UkElectricityCostCalculatorPage, { metadata as ukHubMeta } from '@/app/(en)/electricity-cost-calculator/uk/page';
import AustraliaElectricityCostCalculatorPage, { metadata as auHubMeta } from '@/app/(en)/electricity-cost-calculator/australia/page';
import GermanStromkostenRechnerPage, { metadata as deHubMeta } from '@/app/(de)/de/stromkosten-rechner/page';
import UkApplianceCostPage, {
  generateStaticParams as ukParams,
  generateMetadata as ukAppMeta,
} from '@/app/(en)/electricity-cost-calculator/uk/[appliance]/page';
import AustraliaApplianceCostPage, {
  generateStaticParams as auParams,
  generateMetadata as auAppMeta,
} from '@/app/(en)/electricity-cost-calculator/australia/[appliance]/page';
import GermanApplianceCostPage, {
  generateStaticParams as deParams,
  generateMetadata as deAppMeta,
} from '@/app/(de)/de/stromkosten-rechner/[geraet]/page';
import HowToReadElectricityBillUkGuidePage, { metadata as billGuideMeta } from '@/app/(en)/guides/how-to-read-your-electricity-bill-uk/page';
import EnergyPriceCapExplainedGuidePage, { metadata as capGuideMeta } from '@/app/(en)/guides/energy-price-cap-explained/page';
import GermanStromverbrauchSenkenGuidePage, { metadata as deGuideMeta } from '@/app/(de)/de/ratgeber/stromverbrauch-senken/page';
import { APPLIANCES } from '@/data/appliances';

describe('Electricity App Router Pages & Programmatic Rendering', () => {
  describe('Regional Hub Pages', () => {
    it('1. renders UK electricity calculator hub page', () => {
      const html = renderToString(<UkElectricityCostCalculatorPage />);
      expect(html).toContain('UK Electricity Cost Calculator');
      expect(html).toContain('application/ld+json');
      expect(ukHubMeta.title).toBeDefined();
    });

    it('2. renders Australia electricity calculator hub page', () => {
      const html = renderToString(<AustraliaElectricityCostCalculatorPage />);
      expect(html).toContain('Australia Electricity Cost Calculator');
      expect(html).toContain('application/ld+json');
      expect(auHubMeta.title).toBeDefined();
    });

    it('3. renders German Stromkostenrechner hub page', () => {
      const html = renderToString(<GermanStromkostenRechnerPage />);
      expect(html).toContain('Stromkostenrechner');
      expect(html).toContain('application/ld+json');
      expect(deHubMeta.title).toBeDefined();
    });
  });

  describe('Programmatic Appliance Pages & Static Params', () => {
    it('4. generateStaticParams returns all 25 appliances for UK, AU, and DE', () => {
      const ukStatic = ukParams();
      const auStatic = auParams();
      const deStatic = deParams();

      expect(ukStatic.length).toBe(25);
      expect(auStatic.length).toBe(25);
      expect(deStatic.length).toBe(25);

      expect(ukStatic.some((p) => p.appliance === 'kettle')).toBe(true);
      expect(auStatic.some((p) => p.appliance === 'air-conditioner')).toBe(true);
      expect(deStatic.some((p) => p.geraet === 'wasserkocher')).toBe(true);
    });

    it('5. renders UK programmatic appliance page (kettle)', async () => {
      const pageNode = await UkApplianceCostPage({
        params: Promise.resolve({ appliance: 'kettle' }),
      });
      const html = renderToString(pageNode);
      expect(html).toContain('How Much Does It Cost to Run a Electric Kettle?');
      expect(html).toContain('24.5');
      expect(html).toContain('application/ld+json');
      expect(html).toContain('FAQPage');
    });

    it('6. generates UK appliance dynamic metadata with hreflangs', async () => {
      const meta = await ukAppMeta({
        params: Promise.resolve({ appliance: 'kettle' }),
      });
      expect(meta.title).toContain('Electric Kettle');
      expect(meta.alternates?.languages?.['en-GB']).toBeDefined();
      expect(meta.alternates?.languages?.['en-AU']).toBeDefined();
      expect(meta.alternates?.languages?.['de-DE']).toBeDefined();
    });

    it('7. renders Australia programmatic appliance page (air-conditioner)', async () => {
      const pageNode = await AustraliaApplianceCostPage({
        params: Promise.resolve({ appliance: 'air-conditioner' }),
      });
      const html = renderToString(pageNode);
      expect(html).toContain('How Much Does It Cost to Run a Portable Air Conditioner?');
      expect(html).toContain('33.2');
      expect(html).toContain('AER Default Market Offer');
    });

    it('8. renders German programmatic appliance page (wasserkocher)', async () => {
      const pageNode = await GermanApplianceCostPage({
        params: Promise.resolve({ geraet: 'wasserkocher' }),
      });
      const html = renderToString(pageNode);
      expect(html).toContain('Was kostet ein Wasserkocher an Strom?');
      expect(html).toContain('41.35');
      expect(html).toContain('BDEW-Strompreisanalyse');
    });
  });

  describe('Energy Guides Pages', () => {
    it('9. renders UK bill reading guide', () => {
      const html = renderToString(<HowToReadElectricityBillUkGuidePage />);
      expect(html).toContain('How to Read Your UK Electricity Bill');
      expect(html).toContain('MPAN');
      expect(html).toContain('application/ld+json');
      expect(billGuideMeta.title).toBeDefined();
    });

    it('10. renders Energy Price Cap explained guide', () => {
      const html = renderToString(<EnergyPriceCapExplainedGuidePage />);
      expect(html).toContain('The Ofgem Energy Price Cap Explained');
      expect(html).toContain('Typical Domestic Consumption Values');
      expect(html).toContain('application/ld+json');
      expect(capGuideMeta.title).toBeDefined();
    });

    it('11. renders German Stromverbrauch senken guide', () => {
      const html = renderToString(<GermanStromverbrauchSenkenGuidePage />);
      expect(html).toContain('Stromverbrauch im Haushalt nachhaltig senken');
      expect(html).toContain('Balkonkraftwerk');
      expect(html).toContain('application/ld+json');
      expect(deGuideMeta.title).toBeDefined();
    });
  });
});
