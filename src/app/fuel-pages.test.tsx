import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import UkFuelCostCalculatorPage, { metadata as ukMeta } from '@/app/(en)/fuel-cost-calculator/uk/page';
import AustraliaFuelCostCalculatorPage, { metadata as auMeta } from '@/app/(en)/fuel-cost-calculator/australia/page';
import CanadaFuelCostCalculatorPage, { metadata as caMeta } from '@/app/(en)/fuel-cost-calculator/canada/page';
import SpritkostenrechnerPage, { metadata as deMeta } from '@/app/(de)/de/spritkostenrechner/page';
import MpgConverterPage, { metadata as mpgMeta } from '@/app/(en)/mpg-to-litres-per-100km/page';
import EvVsPetrolPage, { metadata as evMeta } from '@/app/(en)/fuel-cost-calculator/ev-vs-petrol/page';
import { FuelCostCalculatorTool } from '@/components/tools/FuelCostCalculatorTool';
import { MpgConverterTool } from '@/components/tools/MpgConverterTool';
import { EvVsPetrolTool } from '@/components/tools/EvVsPetrolTool';

describe('Fuel Cost App Router Pages & Tools Rendering', () => {
  describe('Page Rendering', () => {
    it('1. renders UK fuel cost page without errors', () => {
      const html = renderToString(<UkFuelCostCalculatorPage />);
      expect(html).toContain('UK Fuel Cost Calculator');
      expect(html).toContain('application/ld+json');
    });

    it('2. renders Australia fuel cost page without errors', () => {
      const html = renderToString(<AustraliaFuelCostCalculatorPage />);
      expect(html).toContain('Australia Fuel Cost Calculator');
      expect(html).toContain('application/ld+json');
    });

    it('3. renders Canada fuel cost page without errors', () => {
      const html = renderToString(<CanadaFuelCostCalculatorPage />);
      expect(html).toContain('Canada Fuel Cost Calculator');
      expect(html).toContain('application/ld+json');
    });

    it('4. renders German Spritkostenrechner page without errors', () => {
      const html = renderToString(<SpritkostenrechnerPage />);
      expect(html).toContain('Spritkostenrechner');
      expect(html).toContain('application/ld+json');
    });

    it('5. renders MPG converter page without errors', () => {
      const html = renderToString(<MpgConverterPage />);
      expect(html).toContain('MPG to Litres per 100km');
      expect(html).toContain('application/ld+json');
    });

    it('6. renders EV vs Petrol page without errors', () => {
      const html = renderToString(<EvVsPetrolPage />);
      expect(html).toContain('EV vs Petrol Cost Calculator');
      expect(html).toContain('application/ld+json');
    });
  });

  describe('Page Metadata Validation', () => {
    const pages = [
      { name: 'UK Fuel', meta: ukMeta },
      { name: 'Australia Fuel', meta: auMeta },
      { name: 'Canada Fuel', meta: caMeta },
      { name: 'Germany Spritkosten', meta: deMeta },
      { name: 'MPG Converter', meta: mpgMeta },
      { name: 'EV vs Petrol', meta: evMeta },
    ];

    pages.forEach(({ name, meta }) => {
      it(`verifies metadata for ${name}`, () => {
        const titleStr = typeof meta.title === 'string' ? meta.title : String(meta.title);
        expect(titleStr.length).toBeGreaterThan(0);
        expect(titleStr.length).toBeLessThanOrEqual(60);

        const descStr = meta.description || '';
        expect(descStr.length).toBeGreaterThan(0);
        expect(descStr.length).toBeLessThanOrEqual(155);

        expect(meta.alternates?.canonical).toBeDefined();
      });
    });
  });

  describe('Tool Components Direct Rendering', () => {
    it('7. renders FuelCostCalculatorTool with all supported regions', () => {
      const ukHtml = renderToString(<FuelCostCalculatorTool region="uk" />);
      expect(ukHtml).toContain('Journey Distance');
      expect(ukHtml).toContain('Total Journey Cost');

      const auHtml = renderToString(<FuelCostCalculatorTool region="australia" defaultUnit="l_100km" />);
      expect(auHtml).toContain('Kilometres');

      const caHtml = renderToString(<FuelCostCalculatorTool region="canada" defaultUnit="l_100km" />);
      expect(caHtml).toContain('Canada');

      const deHtml = renderToString(<FuelCostCalculatorTool region="de" defaultUnit="l_100km" />);
      expect(deHtml).toContain('Deutschland');
    });

    it('8. renders MpgConverterTool with 4-way inputs and comparison table', () => {
      const html = renderToString(<MpgConverterTool />);
      expect(html).toContain('UK MPG');
      expect(html).toContain('Litres / 100 km');
      expect(html).toContain('US MPG');
      expect(html).toContain('Kilometres / Litre');
      expect(html).toContain('Full Conversion Reference Chart');
    });

    it('9. renders EvVsPetrolTool with comparison cards and savings badge', () => {
      const html = renderToString(<EvVsPetrolTool />);
      expect(html).toContain('Electric Vehicle (EV)');
      expect(html).toContain('Petrol / Diesel Car');
      expect(html).toContain('Annual Driving Distance');
      expect(html).toContain('Save');
    });
  });
});
