import { describe, it, expect } from 'vitest';
import { buildJsonLdData } from './JsonLd';

describe('JsonLd structured data generator', () => {
  it('generates site-wide WebSite and Organization schema with parentOrganization', () => {
    const data = buildJsonLdData({ lang: 'en', siteWideOnly: true });

    expect(data['@context']).toBe('https://schema.org');
    const graph = data['@graph'];
    expect(graph).toHaveLength(2);

    const org = graph.find((item: any) => item['@type'] === 'Organization');
    expect(org).toBeDefined();
    expect(org.name).toBe('Zetawala Money');
    expect(org.url).toBe('https://money.zetawala.com');
    expect(org.parentOrganization).toEqual({
      '@type': 'Organization',
      name: 'Zetawala',
      url: 'https://zetawala.com',
      logo: 'https://money.zetawala.com/images/zetawala-logo.png',
    });

    const webSite = graph.find((item: any) => item['@type'] === 'WebSite');
    expect(webSite).toBeDefined();
    expect(webSite.url).toBe('https://money.zetawala.com');
    expect(webSite.name).toBe('Zetawala Money');
  });

  it('generates WebApplication schema for tool pages', () => {
    const data = buildJsonLdData({
      pageId: 'vat-calculator',
      lang: 'en',
      region: 'uk',
      title: 'UK VAT Calculator',
      description: 'Calculate VAT easily',
      currency: 'GBP',
    });

    const graph = data['@graph'];
    const webApp = graph.find((item: any) => item['@type'] === 'WebApplication');
    expect(webApp).toBeDefined();
    expect(webApp.applicationCategory).toBe('FinanceApplication');
    expect(webApp.operatingSystem).toBe('Any');
    expect(webApp.inLanguage).toBe('en');
    expect(webApp.offers).toEqual({
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
    });
    expect(webApp.url).toBe('https://money.zetawala.com/vat-calculator/');
  });

  it('generates BreadcrumbList and FAQPage schemas', () => {
    const faqs = [
      { q: 'What is standard VAT?', a: 'Standard VAT is 20%.' },
      { q: 'Who pays VAT?', a: 'Consumers pay VAT on taxable goods.' },
    ];

    const data = buildJsonLdData({
      pageId: 'vat-calculator',
      lang: 'en',
      faqs,
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Tax & VAT', url: '/#tax-vat' },
        { name: 'VAT Calculator', url: '/vat-calculator/' },
      ],
    });

    const graph = data['@graph'];
    const breadcrumbs = graph.find((item: any) => item['@type'] === 'BreadcrumbList');
    expect(breadcrumbs).toBeDefined();
    expect(breadcrumbs.itemListElement).toHaveLength(3);
    expect(breadcrumbs.itemListElement[0].name).toBe('Home');
    expect(breadcrumbs.itemListElement[0].item).toBe('https://money.zetawala.com/');
    expect(breadcrumbs.itemListElement[2].name).toBe('VAT Calculator');
    expect(breadcrumbs.itemListElement[2].item).toBe('https://money.zetawala.com/vat-calculator/');

    const faqPage = graph.find((item: any) => item['@type'] === 'FAQPage');
    expect(faqPage).toBeDefined();
    expect(faqPage.mainEntity).toHaveLength(2);
    expect(faqPage.mainEntity[0].name).toBe('What is standard VAT?');
    expect(faqPage.mainEntity[0].acceptedAnswer.text).toBe('Standard VAT is 20%.');
  });

  it('generates Article schema for guide pages without WebApplication schema', () => {
    const data = buildJsonLdData({
      pageId: 'guide-what-is-iban',
      lang: 'en',
      type: 'guide',
      title: 'What is an IBAN? International Bank Account Number Guide',
      description: 'Comprehensive guide to IBAN structure and SEPA transfers.',
    });

    const graph = data['@graph'];
    const article = graph.find((item: any) => item['@type'] === 'Article');
    expect(article).toBeDefined();
    expect(article.headline).toBe('What is an IBAN? International Bank Account Number Guide');
    expect(article.mainEntityOfPage).toBe('https://money.zetawala.com/guides/what-is-an-iban/');
    expect(article.publisher['@id']).toBe('https://money.zetawala.com/#organization');

    const webApp = graph.find((item: any) => item['@type'] === 'WebApplication');
    expect(webApp).toBeUndefined();
  });
});
