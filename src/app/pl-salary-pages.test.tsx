import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';

// Tool Pages
import KalkulatorWynagrodzenPlPage from './(pl)/pl/kalkulator-wynagrodzen/page';
import KalkulatorB2bPlPage from './(pl)/pl/kalkulator-b2b/page';
import PlacaMinimalnaPlPage from './(pl)/pl/placa-minimalna/page';
import SkladkiZusPlPage from './(pl)/pl/skladki-zus/page';
import ProgiPodatkowePlPage from './(pl)/pl/progi-podatkowe/page';
import ProgrammaticSalaryPagePl from './(pl)/pl/wynagrodzenie/[slug]/page';

// Guide Pages
import B2bCzyUopGuidePage from './(pl)/pl/poradniki/b2b-czy-umowa-o-prace/page';
import RyczaltCzyLiniowyGuidePage from './(pl)/pl/poradniki/ryczalt-czy-liniowy/page';
import UlgaDlaMlodychGuidePage from './(pl)/pl/poradniki/ulga-dla-mlodych/page';
import JakCzytacPasekWyplatyGuidePage from './(pl)/pl/poradniki/jak-czytac-pasek-wyplaty/page';

describe('Poland Salary & Tax App Router Pages SSR Rendering', () => {
  it('renders /pl/kalkulator-wynagrodzen/ page without errors', () => {
    const html = renderToString(<KalkulatorWynagrodzenPlPage />);
    expect(html).toContain('Kalkulator Wynagrodzeń 2026: Brutto na Netto');
    expect(html).toContain('Wynagrodzenie brutto (PLN)');
    expect(html).toContain('Wynagrodzenie netto (na rękę)');
  });

  it('renders /pl/kalkulator-b2b/ page without errors', () => {
    const html = renderToString(<KalkulatorB2bPlPage />);
    expect(html).toContain('Kalkulator B2B vs Umowa o Pracę 2026');
    expect(html).toContain('Forma opodatkowania B2B');
    expect(html).toContain('Ryczałt');
  });

  it('renders /pl/placa-minimalna/ page without errors', () => {
    const html = renderToString(<PlacaMinimalnaPlPage />);
    expect(html).toContain('Płaca Minimalna 2026: Brutto i Netto w Polsce');
    expect(html).toContain('4 666');
    expect(html).toContain('30,50');
  });

  it('renders /pl/skladki-zus/ page without errors', () => {
    const html = renderToString(<SkladkiZusPlPage />);
    expect(html).toContain('Składki ZUS 2026');
    expect(html).toContain('Pełny ZUS');
    expect(html).toContain('Preferencyjny ZUS');
    expect(html).toContain('Ulga na start');
  });

  it('renders /pl/progi-podatkowe/ page without errors', () => {
    const html = renderToString(<ProgiPodatkowePlPage />);
    expect(html).toContain('Progi Podatkowe 2026 w Polsce: Skala Podatkowa 12% i 32%');
    expect(html).toContain('120 000 zł');
    expect(html).toContain('30 000 zł');
  });

  it('renders programmatic salary page /pl/wynagrodzenie/8000-brutto-ile-netto/ without errors', async () => {
    const pageElement = await ProgrammaticSalaryPagePl({
      params: Promise.resolve({ slug: '8000-brutto-ile-netto' }),
    });
    const html = renderToString(pageElement);
    expect(html).toContain('brutto – ile to netto na rękę?');
    expect(html).toContain('Na rękę (Netto UoP)');
    expect(html).toContain('Przykłady rozliczenia');
  });

  it('renders guide /pl/poradniki/b2b-czy-umowa-o-prace/ page without errors', () => {
    const html = renderToString(<B2bCzyUopGuidePage />);
    expect(html).toContain('B2B czy Umowa o Pracę?');
    expect(html).toContain('Fundamenty prawne');
  });

  it('renders guide /pl/poradniki/ryczalt-czy-liniowy/ page without errors', () => {
    const html = renderToString(<RyczaltCzyLiniowyGuidePage />);
    expect(html).toContain('Ryczałt czy Podatek Liniowy (19%)?');
    expect(html).toContain('Przegląd stawek ryczałtu');
  });

  it('renders guide /pl/poradniki/ulga-dla-mlodych/ page without errors', () => {
    const html = renderToString(<UlgaDlaMlodychGuidePage />);
    expect(html).toContain('Ulga dla Młodych (Zerowy PIT do 26 Lat)');
    expect(html).toContain('85 528 zł');
  });

  it('renders guide /pl/poradniki/jak-czytac-pasek-wyplaty/ page without errors', () => {
    const html = renderToString(<JakCzytacPasekWyplatyGuidePage />);
    expect(html).toContain('Jak Czytać Pasek Wypłaty (Pasek Wynagrodzeń)?');
    expect(html).toContain('Struktura paska');
  });
});
