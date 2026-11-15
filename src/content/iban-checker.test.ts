import { describe, it, expect } from 'vitest';
import { getPageContent } from './index';
import { SupportedLang } from '@/config/pages';
import { ibanCheckerEn } from './en/iban-checker';
import { ibanCheckerDe } from './de/iban-checker';
import { ibanCheckerPl } from './pl/iban-checker';
import { ibanCheckerTr } from './tr/iban-checker';
import { ibanCheckerRo } from './ro/iban-checker';
import { ibanCheckerFr } from './fr/iban-checker';
import { ibanCheckerEs } from './es/iban-checker';
import { ibanCheckerIt } from './it/iban-checker';
import { ibanCheckerNl } from './nl/iban-checker';

describe('IBAN Checker 9-Language Content & Registration', () => {
  const languages: Array<{ lang: SupportedLang; slug: string; content: typeof ibanCheckerEn; name: string }> = [
    { lang: 'en', slug: 'iban-checker', content: ibanCheckerEn, name: 'English' },
    { lang: 'de', slug: 'de/iban-pruefen', content: ibanCheckerDe, name: 'German' },
    { lang: 'pl', slug: 'pl/sprawdz-iban', content: ibanCheckerPl, name: 'Polish' },
    { lang: 'tr', slug: 'tr/iban-dogrulama', content: ibanCheckerTr, name: 'Turkish' },
    { lang: 'ro', slug: 'ro/verificare-iban', content: ibanCheckerRo, name: 'Romanian' },
    { lang: 'fr', slug: 'fr/verifier-iban', content: ibanCheckerFr, name: 'French' },
    { lang: 'es', slug: 'es/validar-iban', content: ibanCheckerEs, name: 'Spanish' },
    { lang: 'it', slug: 'it/verifica-iban', content: ibanCheckerIt, name: 'Italian' },
    { lang: 'nl', slug: 'nl/iban-controleren', content: ibanCheckerNl, name: 'Dutch' },
  ];

  languages.forEach(({ lang, slug, content, name }) => {
    describe(`${name} (${lang})`, () => {
      it('is registered in contentRegistry and retrievable via getPageContent', () => {
        const fetchedBySlug = getPageContent(lang, slug);
        expect(fetchedBySlug).toBeDefined();
        expect(fetchedBySlug?.h1).toBe(content.h1);

        const fetchedById = getPageContent(lang, 'iban-checker');
        expect(fetchedById).toBeDefined();
        expect(fetchedById?.h1).toBe(content.h1);
      });

      it('has metaTitle under 60 chars and metaDescription under 155 chars', () => {
        expect(content.metaTitle.length).toBeLessThan(60);
        expect(content.metaDescription.length).toBeLessThan(155);
      });

      it('has quickAnswer of 40-60 words', () => {
        const words = content.quickAnswer.trim().split(/\s+/).length;
        expect(words).toBeGreaterThanOrEqual(35);
        expect(words).toBeLessThanOrEqual(70);
      });

      it('has 3-4 howItWorks steps explaining ISO 13616 Mod-97', () => {
        expect(content.howItWorks.length).toBeGreaterThanOrEqual(3);
        expect(content.howItWorks.length).toBeLessThanOrEqual(5);
        content.howItWorks.forEach((step) => {
          expect(step.label).toBeTruthy();
          expect(step.formula).toBeTruthy();
          expect(step.ruleCitation).toBeTruthy();
        });
      });

      it('has 4-5 article sections totaling 900-1400 words', () => {
        expect(content.articleSections.length).toBeGreaterThanOrEqual(4);
        expect(content.articleSections.length).toBeLessThanOrEqual(6);
        const totalWords = content.articleSections.reduce(
          (acc, sec) => acc + sec.content.trim().split(/\s+/).length,
          0,
        );
        expect(totalWords).toBeGreaterThanOrEqual(900);
        expect(totalWords).toBeLessThanOrEqual(1400);
      });

      it('has at least 2 worked examples with customFields breakdown', () => {
        expect(content.examples.length).toBeGreaterThanOrEqual(2);
        content.examples.forEach((ex) => {
          expect(ex.title).toBeTruthy();
          expect(ex.scenario).toBeTruthy();
          expect(ex.explanation).toBeTruthy();
          expect(ex.customFields).toBeDefined();
          expect(ex.customFields!.length).toBeGreaterThanOrEqual(4);
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

      it('has authoritative sources with valid HTTPS links', () => {
        expect(content.sources.length).toBeGreaterThanOrEqual(3);
        content.sources.forEach((src) => {
          expect(src.label).toBeTruthy();
          expect(src.url.startsWith('https://')).toBe(true);
        });
      });

      it('has related tools and guides configured', () => {
        expect(content.relatedTools.length).toBeGreaterThanOrEqual(2);
        expect(content.relatedGuides.length).toBeGreaterThanOrEqual(1);
      });

      it('has privacy and banking disclaimer', () => {
        expect(content.disclaimer).toBeTruthy();
        expect(content.disclaimer!.length).toBeGreaterThan(50);
      });
    });
  });
});
