import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';

import KidemTazminatiHesaplamaPage, { metadata as kidemMeta } from '@/app/(tr)/tr/kidem-tazminati-hesaplama/page';
import IhbarTazminatiHesaplamaPage, { metadata as ihbarMeta } from '@/app/(tr)/tr/ihbar-tazminati-hesaplama/page';
import KidemVeIhbarTazminatiHesaplamaPage, { metadata as kidemIhbarMeta } from '@/app/(tr)/tr/kidem-ve-ihbar-tazminati-hesaplama/page';
import BruttenNeteMaasHesaplamaPage, { metadata as brutNetMeta } from '@/app/(tr)/tr/brutten-nete-maas-hesaplama/page';
import NettenBruteMaasHesaplamaPage, { metadata as netBrutMeta } from '@/app/(tr)/tr/netten-brute-maas-hesaplama/page';
import AsgariUcretPage, { metadata as asgariMeta } from '@/app/(tr)/tr/asgari-ucret/page';
import KidemTazminatiTavaniPage, { metadata as tavanMeta } from '@/app/(tr)/tr/kidem-tazminati-tavani/page';
import GelirVergisiDilimleriPage, { metadata as gvDilimMeta } from '@/app/(tr)/tr/gelir-vergisi-dilimleri/page';

import IstifaEdenKidemTazminatiAlabilirMiPage, { metadata as istifaMeta } from '@/app/(tr)/tr/rehber/istifa-eden-kidem-tazminati-alabilir-mi/page';
import KidemTazminatiSartlariPage, { metadata as sartlarMeta } from '@/app/(tr)/tr/rehber/kidem-tazminati-sartlari/page';
import IhbarSuresiNasilHesaplanirPage, { metadata as ihbarSuresiMeta } from '@/app/(tr)/tr/rehber/ihbar-suresi-nasil-hesaplanir/page';
import EvlilikNedeniyleKidemTazminatiPage, { metadata as evlilikMeta } from '@/app/(tr)/tr/rehber/evlilik-nedeniyle-kidem-tazminati/page';

describe('Turkey Salary & Tax App Router Pages SSR Rendering', () => {
  it('renders Kidem Tazminati tool page', () => {
    const html = renderToString(<KidemTazminatiHesaplamaPage />);
    expect(html).toContain('Kıdem Tazminatı');
    expect(html).toContain('İşe Giriş Tarihi');
    expect(html).toContain('İşten Çıkış');
    expect(html).toContain('Damga Vergisi');
    expect(kidemMeta.title).toBeDefined();
  });

  it('renders Ihbar Tazminati tool page', () => {
    const html = renderToString(<IhbarTazminatiHesaplamaPage />);
    expect(html).toContain('İhbar Tazminatı');
    expect(html).toContain('Yasal İhbar Öneli Süresi');
    expect(html).toContain('Gelir Vergisi Kesintisi');
    expect(ihbarMeta.title).toBeDefined();
  });

  it('renders Kidem ve Ihbar combined tool page', () => {
    const html = renderToString(<KidemVeIhbarTazminatiHesaplamaPage />);
    expect(html).toContain('Kıdem ve İhbar Tazminatı');
    expect(html).toContain('Toplam Net Ödenecek');
    expect(html).toContain('Fesih Gerekçesi');
    expect(kidemIhbarMeta.title).toBeDefined();
  });

  it('renders Brutten Nete Maas tool page', () => {
    const html = renderToString(<BruttenNeteMaasHesaplamaPage />);
    expect(html).toContain('Brütten Nete Maaş');
    expect(html).toContain('Aylık Brüt Maaş');
    expect(html).toContain('12 Aylık');
    expect(brutNetMeta.title).toBeDefined();
  });

  it('renders Netten Brute Maas tool page', () => {
    const html = renderToString(<NettenBruteMaasHesaplamaPage />);
    expect(html).toContain('Netten Brüte');
    expect(html).toContain('Hedef Net');
    expect(html).toContain('Gereken');
    expect(netBrutMeta.title).toBeDefined();
  });

  it('renders Asgari Ucret info tool page', () => {
    const html = renderToString(<AsgariUcretPage />);
    expect(html).toContain('Asgari Ücret');
    expect(html).toContain('26.005,50');
    expect(html).toContain('22.104,67');
    expect(asgariMeta.title).toBeDefined();
  });

  it('renders Kidem Tazminati Tavani info tool page', () => {
    const html = renderToString(<KidemTazminatiTavaniPage />);
    expect(html).toContain('Kıdem Tazminatı Tavanı');
    expect(html).toContain('59.250,00');
    expect(html).toContain('Canlı Test Edin');
    expect(tavanMeta.title).toBeDefined();
  });

  it('renders Gelir Vergisi Dilimleri info tool page', () => {
    const html = renderToString(<GelirVergisiDilimleriPage />);
    expect(html).toContain('Gelir Vergisi Dilimleri');
    expect(html).toContain('158.000');
    expect(html).toContain('Kümülatif Vergi Matrahı Simülatörü');
    expect(gvDilimMeta.title).toBeDefined();
  });

  it('renders Istifa Eden Kidem Alabilir mi guide page', () => {
    const html = renderToString(<IstifaEdenKidemTazminatiAlabilirMiPage />);
    expect(html).toContain('İstifa');
    expect(html).toContain('Kıdem Tazminatı');
    expect(istifaMeta.title).toBeDefined();
  });

  it('renders Kidem Tazminati Alma Sartlari guide page', () => {
    const html = renderToString(<KidemTazminatiSartlariPage />);
    expect(html).toContain('Kıdem');
    expect(html).toContain('Şartları');
    expect(sartlarMeta.title).toBeDefined();
  });

  it('renders Ihbar Suresi Nasil Hesaplanir guide page', () => {
    const html = renderToString(<IhbarSuresiNasilHesaplanirPage />);
    expect(html).toContain('İhbar Süresi');
    expect(ihbarSuresiMeta.title).toBeDefined();
  });

  it('renders Evlilik Nedeniyle Kidem guide page', () => {
    const html = renderToString(<EvlilikNedeniyleKidemTazminatiPage />);
    expect(html).toContain('Evlilik');
    expect(html).toContain('Kıdem');
    expect(evlilikMeta.title).toBeDefined();
  });
});
