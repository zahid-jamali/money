export type AdProvider = 'none' | 'adsterra' | 'adsense' | 'mediavine' | 'raptive';

export interface SiteConfig {
  name: string;
  url: string;
  logo: string;
  defaultLocale: string;
  locales: string[];
  adProvider: AdProvider;
  adsenseId: string;
  adsterraId?: string;
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
  logo: '/images/logo.png',
  defaultLocale: 'en',
  locales: ['en', 'de', 'pl', 'tr', 'ro', 'fr', 'es', 'it', 'nl'],
  // Ads disabled by default per user specification. Set to 'adsterra' or 'adsense' when traffic scales.
  adProvider: (process.env.NEXT_PUBLIC_AD_PROVIDER as AdProvider) || 'none',
  adsenseId: process.env.NEXT_PUBLIC_ADSENSE_ID || '',
  adsterraId: process.env.NEXT_PUBLIC_ADSTERRA_ID || '',
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
