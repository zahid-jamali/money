import { SupportedLang } from './pages';

export interface LocalizedSitePages {
  about: string;
  methodology?: string;
  contact: string;
  privacy: string;
  cookiePolicy?: string;
  terms: string;
  disclaimer?: string;
  faq?: string;
  sitemap?: string;
  impressum?: string;
}

export const SITE_PAGES_MAP: Record<SupportedLang, LocalizedSitePages> = {
  en: {
    about: '/about/',
    methodology: '/methodology/',
    contact: '/contact/',
    privacy: '/privacy-policy/',
    cookiePolicy: '/cookie-policy/',
    terms: '/terms/',
    disclaimer: '/disclaimer/',
    faq: '/faq/',
    sitemap: '/sitemap/',
  },
  de: {
    about: '/de/ueber-uns/',
    methodology: '/de/methodik/',
    contact: '/de/kontakt/',
    privacy: '/de/datenschutz/',
    cookiePolicy: '/de/cookie-richtlinie/',
    terms: '/de/nutzungsbedingungen/',
    disclaimer: '/de/haftungsausschluss/',
    faq: '/de/faq/',
    sitemap: '/de/sitemap/',
    impressum: '/de/impressum/',
  },
  pl: {
    about: '/pl/o-nas/',
    methodology: '/pl/metodologia/',
    contact: '/pl/kontakt/',
    privacy: '/pl/polityka-prywatnosci/',
    cookiePolicy: '/pl/polityka-cookies/',
    terms: '/pl/regulamin/',
    disclaimer: '/pl/zastrzezenia-prawne/',
    faq: '/pl/faq/',
    sitemap: '/pl/mapa-strony/',
  },
  tr: {
    about: '/tr/hakkimizda/',
    methodology: '/tr/metodoloji/',
    contact: '/tr/iletisim/',
    privacy: '/tr/gizlilik-politikasi/',
    cookiePolicy: '/tr/cerez-politikasi/',
    terms: '/tr/kullanim-sartlari/',
    disclaimer: '/tr/sorumluluk-reddi/',
    faq: '/tr/sss/',
    sitemap: '/tr/site-haritasi/',
  },
  ro: {
    about: '/ro/despre-noi/',
    methodology: '/ro/metodologie/',
    contact: '/ro/contact/',
    privacy: '/ro/politica-de-confidentialitate/',
    cookiePolicy: '/ro/politica-de-cookie-uri/',
    terms: '/ro/termeni-si-conditii/',
    disclaimer: '/ro/declinarea-responsabilitatii/',
    faq: '/ro/intrebari-frecvente/',
    sitemap: '/ro/harta-site-ului/',
  },
  fr: {
    about: '/fr/a-propos/',
    contact: '/fr/contact/',
    privacy: '/fr/politique-de-confidentialite/',
    terms: '/fr/conditions-utilisation/',
  },
  es: {
    about: '/es/sobre-nosotros/',
    contact: '/es/contacto/',
    privacy: '/es/politica-de-privacidad/',
    terms: '/es/terminos-y-condiciones/',
  },
  it: {
    about: '/it/chi-siamo/',
    contact: '/it/contatti/',
    privacy: '/it/informativa-privacy/',
    terms: '/it/termini-e-condizioni/',
  },
  nl: {
    about: '/nl/over-ons/',
    contact: '/nl/contact/',
    privacy: '/nl/privacybeleid/',
    terms: '/nl/algemene-voorwaarden/',
  },
};

export function getSitePageLink(key: keyof LocalizedSitePages, lang: SupportedLang): string {
  const mapping = SITE_PAGES_MAP[lang] || SITE_PAGES_MAP.en;
  return mapping[key] || SITE_PAGES_MAP.en[key] || '/';
}
