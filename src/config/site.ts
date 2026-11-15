export type AdProvider = 'adsense' | 'none' | 'mediavine' | 'raptive';

export interface SiteConfig {
  name: string;
  url: string;
  logo: string;
  defaultLocale: string;
  locales: string[];
  adProvider: AdProvider;
  adsenseId: string;
  cfAnalyticsToken: string;
  gscVerification: string;
  parentBrand: {
    name: string;
    url: string;
    logo: string;
    taglineKey: string;
    ctaKey: string;
  };
  navigationCategories: {
    id: 'banking' | 'tax-vat' | 'salary' | 'travel' | 'home-energy';
    labelKey: string;
  }[];
  social: {
    twitter: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Zetawala Money',
  url: 'https://money.zetawala.com',
  logo: '/images/money-logo.png',
  defaultLocale: 'en',
  locales: ['en', 'de', 'pl', 'tr', 'ro', 'fr', 'es', 'it', 'nl'],
  adProvider: (process.env.NEXT_PUBLIC_AD_PROVIDER as AdProvider) || 'adsense',
  adsenseId: process.env.NEXT_PUBLIC_ADSENSE_ID || '',
  cfAnalyticsToken: process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN || '',
  gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION || '',
  parentBrand: {
    name: 'Zetawala',
    url: 'https://zetawala.com',
    logo: '/images/zetawala-logo.png',
    taglineKey: 'footer.parentNetwork',
    ctaKey: 'footer.visitParent',
  },
  navigationCategories: [
    { id: 'banking', labelKey: 'nav.banking' },
    { id: 'tax-vat', labelKey: 'nav.taxVat' },
    { id: 'salary', labelKey: 'nav.salary' },
    { id: 'travel', labelKey: 'nav.travel' },
    { id: 'home-energy', labelKey: 'nav.homeEnergy' },
  ],
  social: {
    twitter: '@zetawala',
  },
};
