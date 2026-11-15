import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';

// Tool Pages
import CalculatorSalariuRoPage from './(ro)/ro/calculator-salariu/page';
import CalculatorPfaSrlRoPage from './(ro)/ro/calculator-pfa-srl/page';
import SalariulMinimRoPage from './(ro)/ro/salariul-minim/page';
import DeducerePersonalaRoPage from './(ro)/ro/deducere-personala/page';
import ProgrammaticSalaryPageRo from './(ro)/ro/salariu/[slug]/page';

// Guide Pages
import PfaSauSrlGuidePage from './(ro)/ro/ghiduri/pfa-sau-srl/page';
import CumSeCalculeazaSalariulNetGuidePage from './(ro)/ro/ghiduri/cum-se-calculeaza-salariul-net/page';
import DeclaratiaUnicaPfaGuidePage from './(ro)/ro/ghiduri/declaratia-unica-pfa/page';

describe('Romania Salary & Tax App Router Pages SSR Rendering', () => {
  it('renders /ro/calculator-salariu/ page without errors', () => {
    const html = renderToString(<CalculatorSalariuRoPage />);
    expect(html).toContain('Calculator Salariu 2026: Brut în Net și Cost Total Firmă');
    expect(html).toContain('Direcția Calculului');
    expect(html).toContain('Salariul Net (Bani în Mână)');
    expect(html).toContain('CAS – Asigurări Sociale / Pensii (25%)');
  });

  it('renders /ro/calculator-pfa-srl/ page without errors', () => {
    const html = renderToString(<CalculatorPfaSrlRoPage />);
    expect(html).toContain('Calculator PFA vs SRL 2026: Comparație Impozite și Profit Net');
    expect(html).toContain('Încasări / Venit Anual Brut (RON)');
    expect(html).toContain('Persoană Fizică Autorizată (PFA)');
    expect(html).toContain('SRL Microîntreprindere');
  });

  it('renders /ro/salariul-minim/ page without errors', () => {
    const html = renderToString(<SalariulMinimRoPage />);
    expect(html).toContain('Salariul Minim pe Țară 2026: Brut și Net în România');
    expect(html).toContain('4.050');
    expect(html).toContain('2.574');
    expect(html).toContain('300');
  });

  it('renders /ro/deducere-personala/ page without errors', () => {
    const html = renderToString(<DeducerePersonalaRoPage />);
    expect(html).toContain('Deducere Personală 2026: Grilă Oficială și Simulator Art. 77 Cod Fiscal');
    expect(html).toContain('Persoane Întreținute');
    expect(html).toContain('Tabel de Sinteză a Deducerilor Personale de Bază');
  });

  it('renders programmatic salary page /ro/salariu/8000-brut-in-net/ without errors', async () => {
    const pageElement = await ProgrammaticSalaryPageRo({
      params: Promise.resolve({ slug: '8000-brut-in-net' }),
    });
    const html = renderToString(pageElement);
    expect(html).toContain('8.000');
    expect(html).toContain('4.680');
    expect(html).toContain('Net în Mână');
    expect(html).toContain('Costul total al angajatorului');
  });

  it('renders programmatic salary page /ro/salariu/4050-brut-in-net/ without errors', async () => {
    const pageElement = await ProgrammaticSalaryPageRo({
      params: Promise.resolve({ slug: '4050-brut-in-net' }),
    });
    const html = renderToString(pageElement);
    expect(html).toContain('4.050');
    expect(html).toContain('2.574');
    expect(html).toContain('Net în Mână');
  });

  it('renders guide /ro/ghiduri/pfa-sau-srl/ page without errors', () => {
    const html = renderToString(<PfaSauSrlGuidePage />);
    expect(html).toContain('PFA sau SRL în 2026: Ce Formă Juridică să Alegi?');
    expect(html).toContain('Statutul Juridic și Răspunderea Patrimonială');
  });

  it('renders guide /ro/ghiduri/cum-se-calculeaza-salariul-net/ page without errors', () => {
    const html = renderToString(<CumSeCalculeazaSalariulNetGuidePage />);
    expect(html).toContain('Cum se Calculează Salariul Net din Brut în România în 2026?');
    expect(html).toContain('Reținerea Contribuțiilor Sociale Obligatorii');
  });

  it('renders guide /ro/ghiduri/declaratia-unica-pfa/ page without errors', () => {
    const html = renderToString(<DeclaratiaUnicaPfaGuidePage />);
    expect(html).toContain('Declarația Unică ANAF 2026 (Formularul 212)');
    expect(html).toContain('Cine Are Obligația Legală de a Depune Declarația Unică');
  });
});
