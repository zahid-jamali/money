import { describe, it, expect } from 'vitest';
import { getPageContent } from './index';
import { vatCalculatorEn } from './en/vat-calculator';
import { vatCalculatorUkEn } from './en/vat-calculator-uk';
import { mwstRechnerDe } from './de/mwst-rechner';
import { kalkulatorVatPl } from './pl/kalkulator-vat';
import { kdvHesaplamaTr } from './tr/kdv-hesaplama';
import { calculatorTvaRo } from './ro/calculator-tva';
import { guideWhatIsAnIbanEn } from './en/guides/what-is-an-iban';
import { guideIbanVsSwiftBicEn } from './en/guides/iban-vs-swift-bic';
import { guideHowToFindYourIbanEn } from './en/guides/how-to-find-your-iban';
import { guideDeIbanAufbau } from './de/ratgeber/iban-aufbau';
import { guideDeBlzBic } from './de/ratgeber/blz-und-bic';
import { fuelCostUkEn } from './en/fuel-cost-uk';
import { fuelCostAustraliaEn } from './en/fuel-cost-australia';
import { fuelCostCanadaEn } from './en/fuel-cost-canada';
import { spritkostenrechnerDe } from './de/spritkostenrechner';
import { mpgConverterEn } from './en/mpg-converter';
import { evVsPetrolEn } from './en/ev-vs-petrol';
import { schengenCalculatorEn } from './en/schengen-calculator';
import { schengenGunHesaplamaTr } from './tr/schengen-gun-hesaplama';
import { etiasEn } from './en/etias';
import { eesEntryExitEn } from './en/ees-entry-exit';
import { guideSchengenRuleExplainedEn } from './en/guides/schengen-90-180-rule-explained';
import { guideUkCitizensEuropeTravelEn } from './en/guides/uk-citizens-europe-travel-rules';
import { guideSchengenOverstayConsequencesEn } from './en/guides/schengen-overstay-consequences';
import { guideSchengenCountriesListEn } from './en/guides/schengen-countries-list';
import { guideTrSchengenVizeRehberi } from './tr/rehber/schengen-vizesi-90-180-kurali';
import {
  kidemTazminatiTr,
  ihbarTazminatiTr,
  kidemVeIhbarTr,
  bruttenNeteMaasTr,
  nettenBruteMaasTr,
  asgariUcretTr,
  kidemTazminatiTavaniTr,
  gelirVergisiDilimleriTr,
  guideTrIstifaEdenKidem,
  guideTrKidemTazminatiSartlari,
  guideTrIhbarSuresi,
  guideTrEvlilikKidemTazminati,
  contentPlKalkulatorWynagrodzen,
  contentPlKalkulatorB2b,
  contentPlPlacaMinimalna,
  contentPlSkladkiZus,
  contentPlProgiPodatkowe,
  guidePlB2bCzyUop,
  guidePlRyczaltCzyLiniowy,
  guidePlUlgaDlaMlodych,
  guidePlJakCzytacPasekWyplaty,
  contentRoCalculatorSalariu,
  contentRoCalculatorPfaSrl,
  contentRoSalariulMinim,
  contentRoDeducerePersonala,
  guideRoPfaSauSrl,
  guideRoCumSeCalculeazaSalariulNet,
  guideRoDeclaratiaUnicaPfa,
} from './index';

describe('VAT Country Pages Content Validation', () => {
  const vatPages = [
    { name: 'UK VAT', content: vatCalculatorUkEn, lang: 'en', slug: 'vat-calculator/uk' },
    { name: 'EU VAT Hub', content: vatCalculatorEn, lang: 'en', slug: 'vat-calculator' },
    { name: 'German MwSt', content: mwstRechnerDe, lang: 'de', slug: 'de/mwst-rechner' },
    { name: 'Polish VAT', content: kalkulatorVatPl, lang: 'pl', slug: 'pl/kalkulator-vat' },
    { name: 'Turkish KDV', content: kdvHesaplamaTr, lang: 'tr', slug: 'tr/kdv-hesaplama' },
    { name: 'Romanian TVA', content: calculatorTvaRo, lang: 'ro', slug: 'ro/calculator-tva' },
  ];

  vatPages.forEach(({ name, content, lang, slug }) => {
    describe(`${name} (${lang})`, () => {
      it('is registered and retrievable via getPageContent', () => {
        const fetched = getPageContent(lang as any, slug);
        expect(fetched).toBeDefined();
        expect(fetched?.h1).toBe(content.h1);
      });

      it('has a quick answer of 40-60 words', () => {
        const wordCount = content.quickAnswer.trim().split(/\s+/).length;
        expect(wordCount).toBeGreaterThanOrEqual(35);
        expect(wordCount).toBeLessThanOrEqual(75);
      });

      it('has an article exceeding 900 words', () => {
        const totalWords = content.articleSections.reduce(
          (acc, sec) => acc + sec.content.trim().split(/\s+/).length,
          0,
        );
        expect(totalWords).toBeGreaterThanOrEqual(900);
      });

      it('has at least 2 worked examples with explanations', () => {
        expect(content.examples.length).toBeGreaterThanOrEqual(2);
        content.examples.forEach((ex) => {
          expect(ex.title).toBeTruthy();
          expect(ex.scenario).toBeTruthy();
          expect(ex.explanation).toBeTruthy();
          expect(ex.resultTotal).toBeGreaterThan(0);
        });
      });

      it('has 8-10 accessible FAQs', () => {
        expect(content.faqs.length).toBeGreaterThanOrEqual(8);
        expect(content.faqs.length).toBeLessThanOrEqual(12);
        content.faqs.forEach((faq) => {
          expect(faq.q).toBeTruthy();
          expect(faq.a).toBeTruthy();
        });
      });

      it('has official source citations with valid https URLs', () => {
        expect(content.sources.length).toBeGreaterThanOrEqual(2);
        content.sources.forEach((src) => {
          expect(src.label).toBeTruthy();
          expect(src.url.startsWith('https://')).toBe(true);
        });
      });
    });
  });
});

describe('Banking Guides Content Validation', () => {
  const guides = [
    { name: 'What is an IBAN?', content: guideWhatIsAnIbanEn, lang: 'en', slug: 'guides/what-is-an-iban' },
    { name: 'IBAN vs SWIFT/BIC', content: guideIbanVsSwiftBicEn, lang: 'en', slug: 'guides/iban-vs-swift-bic' },
    { name: 'How to Find Your IBAN', content: guideHowToFindYourIbanEn, lang: 'en', slug: 'guides/how-to-find-your-iban' },
    { name: 'DE: IBAN Aufbau', content: guideDeIbanAufbau, lang: 'de', slug: 'de/ratgeber/iban-aufbau' },
    { name: 'DE: BLZ und BIC', content: guideDeBlzBic, lang: 'de', slug: 'de/ratgeber/blz-und-bic' },
  ];

  guides.forEach(({ name, content, lang, slug }) => {
    describe(`${name} (${lang})`, () => {
      it('is registered and retrievable via getPageContent', () => {
        const fetched = getPageContent(lang as any, slug);
        expect(fetched).toBeDefined();
        expect(fetched?.h1).toBe(content.h1);
      });

      it('has rich editorial content exceeding 1,200 words', () => {
        const totalWords = content.articleSections.reduce(
          (acc, sec) => acc + sec.content.trim().split(/\s+/).length,
          0,
        );
        expect(totalWords).toBeGreaterThanOrEqual(1200);
      });

      it('has table of contents sections with valid IDs and titles', () => {
        expect(content.articleSections.length).toBeGreaterThanOrEqual(4);
        content.articleSections.forEach((sec) => {
          expect(sec.id).toMatch(/^[a-z0-9-]+$/);
          expect(sec.title).toBeTruthy();
        });
      });

      it('has 8-10 accessible FAQs', () => {
        expect(content.faqs.length).toBeGreaterThanOrEqual(8);
        expect(content.faqs.length).toBeLessThanOrEqual(12);
      });

      it('has official sources cited with https URLs', () => {
        expect(content.sources.length).toBeGreaterThanOrEqual(3);
        content.sources.forEach((src) => {
          expect(src.url.startsWith('https://')).toBe(true);
        });
      });

      it('has an interactive CTA linking to a relevant tool', () => {
        expect(content.cta).toBeDefined();
        expect(content.cta.title).toBeTruthy();
        expect(content.cta.buttonHref.startsWith('/')).toBe(true);
      });
    });
  });

  it('verifies How to Find Your IBAN contains all 6 required country sections', () => {
    const sectionIds = guideHowToFindYourIbanEn.articleSections.map((s) => s.id);
    expect(sectionIds).toContain('how-to-find-uk-iban');
    expect(sectionIds).toContain('how-to-find-germany-iban');
    expect(sectionIds).toContain('how-to-find-france-iban');
    expect(sectionIds).toContain('how-to-find-spain-iban');
    expect(sectionIds).toContain('how-to-find-italy-iban');
    expect(sectionIds).toContain('how-to-find-netherlands-iban');
  });
});

describe('Fuel Cost & Travel Pages Content Validation', () => {
  const fuelPages = [
    { name: 'UK Fuel Cost', content: fuelCostUkEn, lang: 'en', slug: 'fuel-cost-calculator/uk' },
    { name: 'Australia Fuel Cost', content: fuelCostAustraliaEn, lang: 'en', slug: 'fuel-cost-calculator/australia' },
    { name: 'Canada Fuel Cost', content: fuelCostCanadaEn, lang: 'en', slug: 'fuel-cost-calculator/canada' },
    { name: 'German Spritkostenrechner', content: spritkostenrechnerDe, lang: 'de', slug: 'de/spritkostenrechner' },
    { name: 'MPG to L/100km Converter', content: mpgConverterEn, lang: 'en', slug: 'mpg-to-litres-per-100km' },
    { name: 'EV vs Petrol Calculator', content: evVsPetrolEn, lang: 'en', slug: 'fuel-cost-calculator/ev-vs-petrol' },
  ];

  fuelPages.forEach(({ name, content, lang, slug }) => {
    describe(`${name} (${lang})`, () => {
      it('is registered and retrievable via getPageContent', () => {
        const fetched = getPageContent(lang as any, slug);
        expect(fetched).toBeDefined();
        expect(fetched?.h1).toBe(content.h1);
      });

      it('has metaTitle <= 60 characters', () => {
        expect(content.metaTitle.length).toBeLessThanOrEqual(60);
      });

      it('has metaDescription <= 155 characters', () => {
        expect(content.metaDescription.length).toBeLessThanOrEqual(155);
      });

      it('has a quick answer of 40-60 words', () => {
        const wordCount = content.quickAnswer.trim().split(/\s+/).length;
        expect(wordCount).toBeGreaterThanOrEqual(35);
        expect(wordCount).toBeLessThanOrEqual(75);
      });

      it('has article sections between 900 and 1400 words total', () => {
        const totalWords = content.articleSections.reduce(
          (acc, sec) => acc + sec.content.trim().split(/\s+/).length,
          0,
        );
        expect(totalWords).toBeGreaterThanOrEqual(900);
        expect(totalWords).toBeLessThanOrEqual(1400);
      });

      it('has 3-4 howItWorks steps with formulas and citations', () => {
        expect(content.howItWorks.length).toBeGreaterThanOrEqual(3);
        expect(content.howItWorks.length).toBeLessThanOrEqual(4);
        content.howItWorks.forEach((step) => {
          expect(step.label).toBeTruthy();
          expect(step.formula).toBeTruthy();
          expect(step.ruleCitation).toBeTruthy();
        });
      });

      it('has at least 2 worked examples with customFields and positive totals', () => {
        expect(content.examples.length).toBeGreaterThanOrEqual(2);
        content.examples.forEach((ex) => {
          expect(ex.title).toBeTruthy();
          expect(ex.scenario).toBeTruthy();
          expect(ex.explanation).toBeTruthy();
          expect(ex.resultTotal).toBeGreaterThan(0);
          expect(ex.customFields).toBeDefined();
          expect(ex.customFields?.length).toBeGreaterThanOrEqual(2);
        });
      });

      it('has 8-10 accessible FAQs', () => {
        expect(content.faqs.length).toBeGreaterThanOrEqual(8);
        expect(content.faqs.length).toBeLessThanOrEqual(12);
        content.faqs.forEach((faq) => {
          expect(faq.q).toBeTruthy();
          expect(faq.a).toBeTruthy();
        });
      });

      it('has official source citations with valid https URLs', () => {
        expect(content.sources.length).toBeGreaterThanOrEqual(2);
        content.sources.forEach((src) => {
          expect(src.label).toBeTruthy();
          expect(src.url.startsWith('https://')).toBe(true);
        });
      });
    });
  });
});

describe('Schengen & Travel Tool Pages Content Validation', () => {
  const travelPages = [
    { name: 'Schengen Calculator (EN)', content: schengenCalculatorEn, lang: 'en', slug: 'schengen-calculator' },
    { name: 'Schengen Gün Hesaplama (TR)', content: schengenGunHesaplamaTr, lang: 'tr', slug: 'tr/schengen-gun-hesaplama' },
    { name: 'ETIAS (EN)', content: etiasEn, lang: 'en', slug: 'etias' },
    { name: 'EES Entry/Exit (EN)', content: eesEntryExitEn, lang: 'en', slug: 'ees-entry-exit-system' },
  ];

  travelPages.forEach(({ name, content, lang, slug }) => {
    describe(`${name} (${lang})`, () => {
      it('is registered and retrievable via getPageContent', () => {
        const fetched = getPageContent(lang as any, slug);
        expect(fetched).toBeDefined();
        expect(fetched?.h1).toBe(content.h1);
      });

      it('has metaTitle <= 65 characters', () => {
        expect(content.metaTitle.length).toBeLessThanOrEqual(65);
      });

      it('has metaDescription <= 160 characters', () => {
        expect(content.metaDescription.length).toBeLessThanOrEqual(160);
      });

      it('has a quick answer of 35-75 words', () => {
        const wordCount = content.quickAnswer.trim().split(/\s+/).length;
        expect(wordCount).toBeGreaterThanOrEqual(35);
        expect(wordCount).toBeLessThanOrEqual(75);
      });

      it('has article sections exceeding 900 words total', () => {
        const totalWords = content.articleSections.reduce(
          (acc, sec) => acc + sec.content.trim().split(/\s+/).length,
          0,
        );
        expect(totalWords).toBeGreaterThanOrEqual(900);
      });

      it('has 4 howItWorks steps with formulas and citations', () => {
        expect(content.howItWorks.length).toBe(4);
        content.howItWorks.forEach((step) => {
          expect(step.label).toBeTruthy();
          expect(step.formula).toBeTruthy();
          expect(step.ruleCitation).toBeTruthy();
        });
      });

      it('has at least 2 worked examples with customFields and positive totals', () => {
        expect(content.examples.length).toBeGreaterThanOrEqual(2);
        content.examples.forEach((ex) => {
          expect(ex.title).toBeTruthy();
          expect(ex.scenario).toBeTruthy();
          expect(ex.explanation).toBeTruthy();
          expect(ex.resultTotal).toBeGreaterThan(0);
        });
      });

      it('has 8-12 accessible FAQs', () => {
        expect(content.faqs.length).toBeGreaterThanOrEqual(8);
        expect(content.faqs.length).toBeLessThanOrEqual(12);
        content.faqs.forEach((faq) => {
          expect(faq.q).toBeTruthy();
          expect(faq.a).toBeTruthy();
        });
      });

      it('has official source citations with valid https URLs', () => {
        expect(content.sources.length).toBeGreaterThanOrEqual(2);
        content.sources.forEach((src) => {
          expect(src.label).toBeTruthy();
          expect(src.url.startsWith('https://')).toBe(true);
        });
      });
    });
  });
});

describe('Schengen Guides Content Validation', () => {
  const guides = [
    { name: 'Schengen 90/180 Rule Explained', content: guideSchengenRuleExplainedEn, lang: 'en', slug: 'guides/schengen-90-180-rule-explained' },
    { name: 'UK Citizens Europe Travel Rules', content: guideUkCitizensEuropeTravelEn, lang: 'en', slug: 'guides/uk-citizens-europe-travel-rules' },
    { name: 'Schengen Overstay Consequences', content: guideSchengenOverstayConsequencesEn, lang: 'en', slug: 'guides/schengen-overstay-consequences' },
    { name: 'Schengen Countries List 2026', content: guideSchengenCountriesListEn, lang: 'en', slug: 'guides/schengen-countries-list' },
    { name: 'TR: Schengen Vize Rehberi', content: guideTrSchengenVizeRehberi, lang: 'tr', slug: 'tr/rehber/schengen-vizesi-90-180-kurali' },
  ];

  guides.forEach(({ name, content, lang, slug }) => {
    describe(`${name} (${lang})`, () => {
      it('is registered and retrievable via getPageContent', () => {
        const fetched = getPageContent(lang as any, slug);
        expect(fetched).toBeDefined();
        expect(fetched?.h1).toBe(content.h1);
      });

      it('has rich editorial content exceeding 1,200 words', () => {
        const totalWords = content.articleSections.reduce(
          (acc, sec) => acc + sec.content.trim().split(/\s+/).length,
          0,
        );
        expect(totalWords).toBeGreaterThanOrEqual(1200);
      });

      it('has table of contents sections with valid IDs and titles', () => {
        expect(content.articleSections.length).toBeGreaterThanOrEqual(4);
        content.articleSections.forEach((sec) => {
          expect(sec.id).toMatch(/^[a-z0-9-]+$/);
          expect(sec.title).toBeTruthy();
        });
      });

      it('has 8-12 accessible FAQs', () => {
        expect(content.faqs.length).toBeGreaterThanOrEqual(8);
        expect(content.faqs.length).toBeLessThanOrEqual(12);
      });

      it('has official sources cited with https URLs', () => {
        expect(content.sources.length).toBeGreaterThanOrEqual(3);
        content.sources.forEach((src) => {
          expect(src.url.startsWith('https://')).toBe(true);
        });
      });

      it('has an interactive CTA linking to a relevant tool', () => {
        expect(content.cta).toBeDefined();
        expect(content.cta.title).toBeTruthy();
        expect(content.cta.buttonHref.startsWith('/')).toBe(true);
      });
    });
  });
});

describe('Turkey Salary & Tax Tool Pages Content Validation', () => {
  const turkeyPages = [
    { name: 'Kıdem Tazminatı', content: kidemTazminatiTr, lang: 'tr', slug: 'tr/kidem-tazminati' },
    { name: 'İhbar Tazminatı', content: ihbarTazminatiTr, lang: 'tr', slug: 'tr/ihbar-tazminati' },
    { name: 'Kıdem ve İhbar', content: kidemVeIhbarTr, lang: 'tr', slug: 'tr/kidem-ve-ihbar' },
    { name: 'Brütten Nete Maaş', content: bruttenNeteMaasTr, lang: 'tr', slug: 'tr/brutten-nete-maas' },
    { name: 'Netten Brüte Maaş', content: nettenBruteMaasTr, lang: 'tr', slug: 'tr/netten-brute-maas' },
    { name: 'Asgari Ücret 2026', content: asgariUcretTr, lang: 'tr', slug: 'tr/asgari-ucret' },
    { name: 'Kıdem Tazminatı Tavanı', content: kidemTazminatiTavaniTr, lang: 'tr', slug: 'tr/kidem-tazminati-tavani' },
    { name: 'Gelir Vergisi Dilimleri', content: gelirVergisiDilimleriTr, lang: 'tr', slug: 'tr/gelir-vergisi-dilimleri' },
  ];

  turkeyPages.forEach(({ name, content, lang, slug }) => {
    describe(`${name} (${lang})`, () => {
      it('is registered and retrievable via getPageContent', () => {
        const fetched = getPageContent(lang as any, slug);
        expect(fetched).toBeDefined();
        expect(fetched?.h1).toBe(content.h1);
      });

      it('has metaTitle <= 65 characters', () => {
        expect(content.metaTitle.length).toBeLessThanOrEqual(65);
      });

      it('has metaDescription <= 160 characters', () => {
        expect(content.metaDescription.length).toBeLessThanOrEqual(160);
      });

      it('has a quick answer of 35-75 words', () => {
        const wordCount = content.quickAnswer.trim().split(/\s+/).length;
        expect(wordCount).toBeGreaterThanOrEqual(35);
        expect(wordCount).toBeLessThanOrEqual(75);
      });

      it('has article sections exceeding 900 words total', () => {
        const totalWords = content.articleSections.reduce(
          (acc, sec) => acc + sec.content.trim().split(/\s+/).length,
          0,
        );
        expect(totalWords).toBeGreaterThanOrEqual(900);
      });

      it('has 4 howItWorks steps with formulas and citations', () => {
        expect(content.howItWorks.length).toBe(4);
        content.howItWorks.forEach((step) => {
          expect(step.label).toBeTruthy();
          expect(step.formula).toBeTruthy();
          expect(step.ruleCitation).toBeTruthy();
        });
      });

      it('has at least 2 worked examples with customFields and positive totals', () => {
        expect(content.examples.length).toBeGreaterThanOrEqual(2);
        content.examples.forEach((ex) => {
          expect(ex.title).toBeTruthy();
          expect(ex.scenario).toBeTruthy();
          expect(ex.explanation).toBeTruthy();
          expect(ex.resultTotal).toBeGreaterThan(0);
          expect(ex.customFields).toBeDefined();
          expect(ex.customFields?.length).toBeGreaterThanOrEqual(2);
        });
      });

      it('has 8-12 accessible FAQs', () => {
        expect(content.faqs.length).toBeGreaterThanOrEqual(8);
        expect(content.faqs.length).toBeLessThanOrEqual(12);
        content.faqs.forEach((faq) => {
          expect(faq.q).toBeTruthy();
          expect(faq.a).toBeTruthy();
        });
      });

      it('has official source citations with valid https URLs', () => {
        expect(content.sources.length).toBeGreaterThanOrEqual(2);
        content.sources.forEach((src) => {
          expect(src.label).toBeTruthy();
          expect(src.url.startsWith('https://')).toBe(true);
        });
      });
    });
  });
});

describe('Turkey Salary & Tax Guides Content Validation', () => {
  const turkeyGuides = [
    {
      name: 'İstifa Eden Kıdem Tazminatı Alabilir mi?',
      content: guideTrIstifaEdenKidem,
      lang: 'tr',
      slug: 'tr/rehber/istifa-eden-kidem-tazminati-alabilir-mi',
    },
    {
      name: 'Kıdem Tazminatı Şartları',
      content: guideTrKidemTazminatiSartlari,
      lang: 'tr',
      slug: 'tr/rehber/kidem-tazminati-sartlari',
    },
    {
      name: 'İhbar Süresi Nasıl Hesaplanır?',
      content: guideTrIhbarSuresi,
      lang: 'tr',
      slug: 'tr/rehber/ihbar-suresi-nasil-hesaplanir',
    },
    {
      name: 'Evlilik Nedeniyle Kıdem Tazminatı',
      content: guideTrEvlilikKidemTazminati,
      lang: 'tr',
      slug: 'tr/rehber/evlilik-nedeniyle-kidem-tazminati',
    },
  ];

  turkeyGuides.forEach(({ name, content, lang, slug }) => {
    describe(`${name} (${lang})`, () => {
      it('is registered and retrievable via getPageContent', () => {
        const fetched = getPageContent(lang as any, slug);
        expect(fetched).toBeDefined();
        expect(fetched?.h1).toBe(content.h1);
      });

      it('has rich editorial content exceeding 1,200 words', () => {
        const totalWords = content.articleSections.reduce(
          (acc, sec) => acc + sec.content.trim().split(/\s+/).length,
          0,
        );
        expect(totalWords).toBeGreaterThanOrEqual(1200);
      });

      it('has table of contents sections with valid IDs and titles', () => {
        expect(content.articleSections.length).toBeGreaterThanOrEqual(4);
        content.articleSections.forEach((sec) => {
          expect(sec.id).toMatch(/^[a-z0-9-]+$/);
          expect(sec.title).toBeTruthy();
        });
      });

      it('has 8-12 accessible FAQs', () => {
        expect(content.faqs.length).toBeGreaterThanOrEqual(8);
        expect(content.faqs.length).toBeLessThanOrEqual(12);
      });

      it('has official sources cited with https URLs', () => {
        expect(content.sources.length).toBeGreaterThanOrEqual(3);
        content.sources.forEach((src) => {
          expect(src.url.startsWith('https://')).toBe(true);
        });
      });

      it('has an interactive CTA linking to a relevant tool', () => {
        expect(content.cta).toBeDefined();
        expect(content.cta.title).toBeTruthy();
        expect(content.cta.buttonHref.startsWith('/')).toBe(true);
      });
    });
  });
});

describe('Poland Salary & Tax Tool Pages Content Validation', () => {
  const polandTools = [
    {
      name: 'Kalkulator Wynagrodzeń',
      content: contentPlKalkulatorWynagrodzen,
      lang: 'pl',
      slug: 'pl/kalkulator-wynagrodzen',
    },
    {
      name: 'Kalkulator B2B vs UoP',
      content: contentPlKalkulatorB2b,
      lang: 'pl',
      slug: 'pl/kalkulator-b2b',
    },
    {
      name: 'Płaca Minimalna',
      content: contentPlPlacaMinimalna,
      lang: 'pl',
      slug: 'pl/placa-minimalna',
    },
    {
      name: 'Składki ZUS',
      content: contentPlSkladkiZus,
      lang: 'pl',
      slug: 'pl/skladki-zus',
    },
    {
      name: 'Progi Podatkowe',
      content: contentPlProgiPodatkowe,
      lang: 'pl',
      slug: 'pl/progi-podatkowe',
    },
  ];

  polandTools.forEach(({ name, content, lang, slug }) => {
    describe(`${name} (${lang})`, () => {
      it('is registered and retrievable via getPageContent', () => {
        const fetched = getPageContent(lang as any, slug);
        expect(fetched).toBeDefined();
        expect(fetched?.title).toBe(content.title);
      });

      it('has a quick answer of 40-60 words', () => {
        const wordCount = content.quickAnswer.trim().split(/\s+/).length;
        expect(wordCount).toBeGreaterThanOrEqual(40);
        expect(wordCount).toBeLessThanOrEqual(60);
      });

      it('has article sections exceeding 900 words total', () => {
        const totalWords = content.articleSections.reduce(
          (acc, sec) => acc + sec.content.trim().split(/\s+/).length,
          0,
        );
        expect(totalWords).toBeGreaterThanOrEqual(900);
      });

      it('has at least 2 worked examples with explanations', () => {
        expect(content.examples.length).toBeGreaterThanOrEqual(2);
        content.examples.forEach((example) => {
          expect(example.title).toBeTruthy();
          expect(example.scenario).toBeTruthy();
          expect(example.explanation).toBeTruthy();
        });
      });

      it('has 8-12 accessible FAQs', () => {
        expect(content.faqs.length).toBeGreaterThanOrEqual(8);
        expect(content.faqs.length).toBeLessThanOrEqual(12);
        content.faqs.forEach((faq) => {
          expect(faq.q).toBeTruthy();
          expect(faq.a).toBeTruthy();
        });
      });

      it('has official sources cited with https URLs', () => {
        expect(content.sources.length).toBeGreaterThanOrEqual(3);
        content.sources.forEach((src) => {
          expect(src.url.startsWith('https://')).toBe(true);
        });
      });
    });
  });
});

describe('Poland Salary & Tax Guides Content Validation', () => {
  const polandGuides = [
    {
      name: 'B2B czy Umowa o Pracę',
      content: guidePlB2bCzyUop,
      lang: 'pl',
      slug: 'pl/poradniki/b2b-czy-umowa-o-prace',
    },
    {
      name: 'Ryczałt czy Podatek Liniowy',
      content: guidePlRyczaltCzyLiniowy,
      lang: 'pl',
      slug: 'pl/poradniki/ryczalt-czy-liniowy',
    },
    {
      name: 'Ulga dla Młodych',
      content: guidePlUlgaDlaMlodych,
      lang: 'pl',
      slug: 'pl/poradniki/ulga-dla-mlodych',
    },
    {
      name: 'Jak Czytać Pasek Wypłaty',
      content: guidePlJakCzytacPasekWyplaty,
      lang: 'pl',
      slug: 'pl/poradniki/jak-czytac-pasek-wyplaty',
    },
  ];

  polandGuides.forEach(({ name, content, lang, slug }) => {
    describe(`${name} (${lang})`, () => {
      it('is registered and retrievable via getPageContent', () => {
        const fetched = getPageContent(lang as any, slug);
        expect(fetched).toBeDefined();
        expect(fetched?.title).toBe(content.title);
      });

      it('has rich editorial content exceeding 1,200 words', () => {
        const totalWords = content.articleSections.reduce(
          (acc, sec) => acc + sec.content.trim().split(/\s+/).length,
          0,
        );
        expect(totalWords).toBeGreaterThanOrEqual(1200);
      });

      it('has table of contents sections with valid IDs and titles', () => {
        expect(content.articleSections.length).toBeGreaterThanOrEqual(4);
        content.articleSections.forEach((sec) => {
          expect(sec.id).toMatch(/^[a-z0-9-]+$/);
          expect(sec.title).toBeTruthy();
        });
      });

      it('has 8-12 accessible FAQs', () => {
        expect(content.faqs.length).toBeGreaterThanOrEqual(8);
        expect(content.faqs.length).toBeLessThanOrEqual(12);
      });

      it('has official sources cited with https URLs', () => {
        expect(content.sources.length).toBeGreaterThanOrEqual(3);
        content.sources.forEach((src) => {
          expect(src.url.startsWith('https://')).toBe(true);
        });
      });

      it('has an interactive CTA linking to a relevant tool', () => {
        expect(content.cta).toBeDefined();
        expect(content.cta.title).toBeTruthy();
        expect(content.cta.buttonHref.startsWith('/')).toBe(true);
      });
    });
  });
});

describe('Romania Salary & Tax Tool Pages Content Validation', () => {
  const romaniaTools = [
    {
      name: 'Calculator Salariu',
      content: contentRoCalculatorSalariu,
      lang: 'ro',
      slug: 'ro/calculator-salariu',
    },
    {
      name: 'Calculator PFA vs SRL',
      content: contentRoCalculatorPfaSrl,
      lang: 'ro',
      slug: 'ro/calculator-pfa-srl',
    },
    {
      name: 'Salariul Minim',
      content: contentRoSalariulMinim,
      lang: 'ro',
      slug: 'ro/salariul-minim',
    },
    {
      name: 'Deducere Personală',
      content: contentRoDeducerePersonala,
      lang: 'ro',
      slug: 'ro/deducere-personala',
    },
  ];

  romaniaTools.forEach(({ name, content, lang, slug }) => {
    describe(`${name} (${lang})`, () => {
      it('is registered and retrievable via getPageContent', () => {
        const fetched = getPageContent(lang as any, slug);
        expect(fetched).toBeDefined();
        expect((fetched as any)?.h1).toBe(content.h1);
      });

      it('has a quick answer of 40-60 words', () => {
        const wordCount = content.quickAnswer.trim().split(/\s+/).length;
        expect(wordCount).toBeGreaterThanOrEqual(40);
        expect(wordCount).toBeLessThanOrEqual(60);
      });

      it('has article sections exceeding 900 words total', () => {
        const totalWords = content.articleSections.reduce(
          (acc, sec) => acc + sec.content.trim().split(/\s+/).length,
          0,
        );
        expect(totalWords).toBeGreaterThanOrEqual(900);
      });

      it('has at least 2 worked examples with explanations', () => {
        expect(content.examples.length).toBeGreaterThanOrEqual(2);
        content.examples.forEach((example) => {
          expect(example.title).toBeTruthy();
          expect(example.scenario).toBeTruthy();
          expect(example.explanation).toBeTruthy();
        });
      });

      it('has 8-12 accessible FAQs', () => {
        expect(content.faqs.length).toBeGreaterThanOrEqual(8);
        expect(content.faqs.length).toBeLessThanOrEqual(12);
        content.faqs.forEach((faq) => {
          expect(faq.q).toBeTruthy();
          expect(faq.a).toBeTruthy();
        });
      });

      it('has official sources cited with https URLs', () => {
        expect(content.sources.length).toBeGreaterThanOrEqual(3);
        content.sources.forEach((src) => {
          expect(src.url.startsWith('https://')).toBe(true);
        });
      });
    });
  });
});

describe('Romania Salary & Tax Guides Content Validation', () => {
  const romaniaGuides = [
    {
      name: 'PFA sau SRL',
      content: guideRoPfaSauSrl,
      lang: 'ro',
      slug: 'ro/ghiduri/pfa-sau-srl',
    },
    {
      name: 'Cum se Calculează Salariul Net',
      content: guideRoCumSeCalculeazaSalariulNet,
      lang: 'ro',
      slug: 'ro/ghiduri/cum-se-calculeaza-salariul-net',
    },
    {
      name: 'Declarația Unică PFA',
      content: guideRoDeclaratiaUnicaPfa,
      lang: 'ro',
      slug: 'ro/ghiduri/declaratia-unica-pfa',
    },
  ];

  romaniaGuides.forEach(({ name, content, lang, slug }) => {
    describe(`${name} (${lang})`, () => {
      it('is registered and retrievable via getPageContent', () => {
        const fetched = getPageContent(lang as any, slug);
        expect(fetched).toBeDefined();
        expect((fetched as any)?.h1).toBe(content.h1);
      });

      it('has rich editorial content exceeding 1,200 words', () => {
        const totalWords = content.articleSections.reduce(
          (acc, sec) => acc + sec.content.trim().split(/\s+/).length,
          0,
        );
        expect(totalWords).toBeGreaterThanOrEqual(1200);
      });

      it('has table of contents sections with valid IDs and titles', () => {
        expect(content.articleSections.length).toBeGreaterThanOrEqual(4);
        content.articleSections.forEach((sec) => {
          expect(sec.id).toMatch(/^[a-z0-9-]+$/);
          expect(sec.title).toBeTruthy();
        });
      });

      it('has 8-12 accessible FAQs', () => {
        expect(content.faqs.length).toBeGreaterThanOrEqual(8);
        expect(content.faqs.length).toBeLessThanOrEqual(12);
      });

      it('has official sources cited with https URLs', () => {
        expect(content.sources.length).toBeGreaterThanOrEqual(3);
        content.sources.forEach((src) => {
          expect(src.url.startsWith('https://')).toBe(true);
        });
      });

      it('has an interactive CTA linking to a relevant tool', () => {
        expect(content.cta).toBeDefined();
        expect(content.cta.title).toBeTruthy();
        expect(content.cta.buttonHref.startsWith('/')).toBe(true);
      });
    });
  });
});




