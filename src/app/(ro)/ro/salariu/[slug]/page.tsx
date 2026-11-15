import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  ROMANIA_PROGRAMMATIC_SALARY_AMOUNTS,
  ROMANIA_SALARY_RULES_2026,
} from '@/rules/ro/salary-2026';
import { calculateRomanianSalary } from '@/lib/salary/ro';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { ProgrammaticSalaryToolRo } from '@/components/tools/ro';
import { JsonLd } from '@/components/JsonLd';
import { PageContent } from '@/content/types';
import { formatCurrency } from '@/lib/formatters';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ROMANIA_PROGRAMMATIC_SALARY_AMOUNTS.map((amount) => ({
    slug: `${amount}-brut-in-net`,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const match = slug.match(/^(\d+)-brut-in-net$/);
  if (!match) return {};

  const gross = parseInt(match[1], 10);
  const res = calculateRomanianSalary({ grossSalary: gross });

  const formattedGross = formatCurrency(gross, 'ro');
  const formattedNet = formatCurrency(res.netSalary, 'ro');

  return {
    title: `${formattedGross} Brut în Net 2026: Calcul Salariu și Fluturaș`,
    description: `Cât iei în mână din ${formattedGross} brut în 2026? Află salariul net (${formattedNet}), contribuțiile CAS 25%, CASS 10%, impozitul și costul total al firmei.`,
    alternates: {
      canonical: `https://money.zetawala.com/ro/salariu/${slug}/`,
    },
  };
}

export default async function ProgrammaticSalaryPageRo({ params }: Props) {
  const { slug } = await params;
  const match = slug.match(/^(\d+)-brut-in-net$/);
  if (!match) notFound();

  const grossAmount = parseInt(match[1], 10);
  if (isNaN(grossAmount) || grossAmount <= 0) notFound();

  const res = calculateRomanianSalary({ grossSalary: grossAmount });

  const formattedGross = formatCurrency(grossAmount, 'ro');
  const formattedNet = formatCurrency(res.netSalary, 'ro');
  const formattedCas = formatCurrency(res.casEmployee, 'ro');
  const formattedCass = formatCurrency(res.cassEmployee, 'ro');
  const formattedTax = formatCurrency(res.incomeTax, 'ro');
  const formattedEmployer = formatCurrency(res.totalEmployerCost, 'ro');

  const pageContent: PageContent = {
    metaTitle: `${formattedGross} Brut în Net 2026: Calcul Salariu și Fluturaș`,
    metaDescription: `Cât iei în mână din ${formattedGross} brut în 2026? Află salariul net (${formattedNet}), contribuțiile CAS 25%, CASS 10%, impozitul și costul total al firmei.`,
    h1: `${formattedGross} Brut – Cât Înseamnă Net în Mână în 2026?`,
    quickAnswer: `La un salariu de ${formattedGross} brut, un angajat fără persoane în întreținere primește un salariu net de ${formattedNet} pe lună. Din suma brută se opresc ${formattedCas} CAS (pensii), ${formattedCass} CASS (sănătate) și ${formattedTax} impozit pe venit. Costul total al angajatorului este de ${formattedEmployer}.`,
    howItWorks: [
      {
        label: 'Contribuția la pensii (CAS 25%)',
        formula: `${formattedGross} × 25% = ${formattedCas}`,
        ruleCitation: 'Art. 137 din Codul Fiscal',
        effectiveDate: '2026-01-01',
      },
      {
        label: 'Contribuția la sănătate (CASS 10%)',
        formula: `${formattedGross} × 10% = ${formattedCass}`,
        ruleCitation: 'Art. 156 din Codul Fiscal',
        effectiveDate: '2026-01-01',
      },
      {
        label: 'Deducerea personală aplicată',
        formula: `Deducere = ${formatCurrency(res.personalDeduction, 'ro')}`,
        ruleCitation: 'Art. 77 din Codul Fiscal (regresivă până la 6.050 lei)',
        effectiveDate: '2026-01-01',
      },
      {
        label: 'Impozitul pe venit (10%)',
        formula: `Impozit = Bază Impozabilă × 10% = ${formattedTax}`,
        ruleCitation: 'Art. 64 din Codul Fiscal',
        effectiveDate: '2026-01-01',
      },
    ],
    articleSections: [
      {
        id: 'analiza-salariului-brut-in-net',
        title: `Cum se Împarte un Salariu Brut de ${formattedGross} în 2026?`,
        level: 2,
        content: `Pentru un salariu de bază brut de ${formattedGross} negociat în contractul individual de muncă cu normă întreagă (168 de ore pe lună), angajatul primește efectiv în mână suma netă de **${formattedNet}**.

Defalcarea reținerilor fiscale obligatorii:
1. **CAS – Pensii (25%)**: Statul reține suma de **${formattedCas}** care este direcționată către bugetul asigurărilor sociale de stat (Pilonul I) și către fondul de pensii privat (Pilonul II).
2. **CASS – Sănătate (10%)**: Asigurarea de sănătate reprezintă **${formattedCass}**, asigurând accesul la serviciile medicale publice din România.
3. **Deducerea Personală de Bază**: Pentru acest nivel de salariu, deducerea personală de bază acordată conform art. 77 Cod Fiscal este de **${formatCurrency(res.personalDeduction, 'ro')}** (pentru un salariat fără persoane în întreținere).
4. **Impozitul pe Venit (10%)**: După scăderea contribuțiilor sociale și a deducerii personale, impozitul reținut la sursă este de **${formattedTax}**.`,
      },
      {
        id: 'costul-complet-al-firmei-pentru-acest-salariu',
        title: `Cât Plătește Angajatorul în Total pentru ${formattedGross} Brut?`,
        level: 2,
        content: `Cheltuiala totală a companiei cu remunerarea unui angajat plătit cu ${formattedGross} brut include contribuția obligatorie a angajatorului:

- **Contribuția Asiguratorie pentru Muncă (CAM - 2,25%)**: Compania suportă din fonduri proprii cota de 2,25%, reprezentând **${formatCurrency(res.camEmployer, 'ro')}**.
- **Cost Total Angajator**: Suma totală pe care firma trebuie să o prevadă în bugetul lunar de salarii este de **${formattedEmployer}**.
- **Poverea Fiscală Globală**: Din costul total de ${formattedEmployer}, salariatul primește ${formattedNet}, iar statul colectează taxe și contribuții de ${formatCurrency(res.totalEmployerCost - res.netSalary, 'ro')} (adică ${(res.totalTaxWedge * 100).toFixed(1)}% din bugetul complet al postului).`,
      },
    ],
    examples: [
      {
        title: `Exemplu de calcul pentru salariul brut de ${formattedGross}`,
        scenario: `Angajat cu normă întreagă la funcția de bază fără persoane în întreținere, plătit cu ${formattedGross} brut.`,
        calculationType: 'custom',
        inputAmount: grossAmount,
        resultTotal: res.netSalary,
        customFields: [
          { label: 'Salariu Brut', value: formattedGross },
          { label: 'CAS Pensii (25%)', value: `-${formattedCas}` },
          { label: 'CASS Sănătate (10%)', value: `-${formattedCass}` },
          { label: 'Deducere personală', value: formatCurrency(res.personalDeduction, 'ro') },
          { label: 'Impozit pe venit (10%)', value: `-${formattedTax}` },
          { label: 'Salariu Net Încasat', value: formattedNet, highlight: true },
          { label: 'Cost Total Angajator', value: formattedEmployer },
        ],
        explanation: `Salariatul primește ${formattedNet} pe card, reprezentând ${((1 - res.effectiveTaxRate) * 100).toFixed(1)}% din salariul brut negociat.`,
      },
    ],
    faqs: [
      {
        q: `Cât este salariul net pentru ${formattedGross} brut?`,
        a: `Salariul net pe care îl primești în mână este de ${formattedNet} pe lună, presupunând că nu ai persoane în întreținere și este funcția ta de bază.`,
      },
      {
        q: `Cât este contribuția la pensie (CAS) la ${formattedGross} brut?`,
        a: `Contribuția de asigurări sociale (CAS) este de 25%, reprezentând exact ${formattedCas} lunar.`,
      },
      {
        q: `Cât este contribuția la sănătate (CASS) la ${formattedGross} brut?`,
        a: `Contribuția de sănătate (CASS) este de 10%, adică ${formattedCass} reținuți în fiecare lună.`,
      },
      {
        q: `Cât impozit pe venit se oprește din ${formattedGross} brut?`,
        a: `Impozitul pe venit reținut este de 10% din venitul impozabil, respectiv ${formattedTax} lunar.`,
      },
      {
        q: `Cât costă acest salariu pentru firmă în total?`,
        a: `Costul total al angajatorului este de ${formattedEmployer}, incluzând salariul brut plus contribuția CAM de 2,25% (${formatCurrency(res.camEmployer, 'ro')}).`,
      },
      {
        q: `Cum crește salariul net dacă am copii în întreținere?`,
        a: `Dacă ai copii în întreținere și brutul este sub 6.050 lei, deducerea personală crește, ceea ce reduce impozitul și îți mărește salariul net cu zeci de lei în fiecare lună.`,
      },
      {
        q: `Se pot primi tichete de masă peste acest salariu brut?`,
        a: `Da, angajatorul poate acorda tichete de masă pentru fiecare zi lucrată, acestea fiind impozitate cu 10% CASS și 10% impozit pe venit.`,
      },
      {
        q: `Cât primește un tânăr sub 26 de ani din acest salariu brut?`,
        a: `Tinerii sub 26 de ani beneficiază de o deducere personală suplimentară de 15% dacă salariul brut este sub 6.050 lei, mărind venitul net încasat.`,
      },
    ],
    sources: [
      {
        label: 'Codul Fiscal – Legea nr. 227/2015 cu modificările ulterioare',
        url: 'https://www.anaf.ro',
      },
      {
        label: 'Inspecția Muncii – Cadrul Salarizării în România',
        url: 'https://www.inspectiamuncii.ro',
      },
    ],
    relatedTools: [
      {
        title: 'Calculator Salariu Brut în Net',
        slug: 'ro/calculator-salariu',
        description: 'Introdu orice valoare brută sau netă și personalizează deducerile personale.',
        category: 'Salarii',
      },
      {
        title: 'Calculator PFA vs SRL',
        slug: 'ro/calculator-pfa-srl',
        description: 'Compară contractul de muncă cu Persoană Fizică Autorizată sau Microîntreprindere SRL.',
        category: 'Fiscalitate',
      },
    ],
    relatedGuides: [
      {
        title: 'Cum se Calculează Salariul Net din Brut?',
        slug: 'ro/ghiduri/cum-se-calculeaza-salariul-net',
        description: 'Ghid pas cu pas cu formule, procente și explicații pentru toate contribuțiile.',
        category: 'Ghiduri Salarii',
      },
      {
        title: 'Deducere Personală Grilă',
        slug: 'ro/deducere-personala',
        description: 'Află deducerile exacte pentru copii și membri de familie aflați în întreținere.',
        category: 'Deduceri',
      },
    ],
    updatedAt: '2026-01-15',
  };

  return (
    <>
      <JsonLd
        lang="ro"
        region="ro"
        pageId={`salariu-${grossAmount}-brut-in-net`}
        type="tool"
        slug={`ro/salariu/${slug}`}
        name={pageContent.h1}
        description={pageContent.metaDescription}
        faqs={pageContent.faqs}
        applicationCategory="FinanceApplication"
        currency="RON"
        breadcrumbs={[
          { name: 'Acasă', url: '/ro/' },
          { name: 'Salarii', url: '/ro/#salary' },
          { name: `${formattedGross} Brut în Net`, url: `/ro/salariu/${slug}/` },
        ]}
      />
      <ToolPageTemplate
        lang="ro"
        content={pageContent}
        categoryName="Salarii & Taxe"
        categorySlug="salary"
        toolNode={<ProgrammaticSalaryToolRo grossAmount={grossAmount} />}
      />
    </>
  );
}
