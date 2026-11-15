export interface CountrySlugMapping {
  code: string;
  enSlug: string;
  deSlug: string;
  enName: string;
  deName: string;
}

export const IBAN_FORMAT_COUNTRIES: CountrySlugMapping[] = [
  // SEPA Countries (36)
  { code: 'DE', enSlug: 'germany', deSlug: 'deutschland', enName: 'Germany', deName: 'Deutschland' },
  { code: 'GB', enSlug: 'united-kingdom', deSlug: 'grossbritannien', enName: 'United Kingdom', deName: 'Großbritannien' },
  { code: 'FR', enSlug: 'france', deSlug: 'frankreich', enName: 'France', deName: 'Frankreich' },
  { code: 'ES', enSlug: 'spain', deSlug: 'spanien', enName: 'Spain', deName: 'Spanien' },
  { code: 'IT', enSlug: 'italy', deSlug: 'italien', enName: 'Italy', deName: 'Italien' },
  { code: 'NL', enSlug: 'netherlands', deSlug: 'niederlande', enName: 'Netherlands', deName: 'Niederlande' },
  { code: 'PL', enSlug: 'poland', deSlug: 'polen', enName: 'Poland', deName: 'Polen' },
  { code: 'RO', enSlug: 'romania', deSlug: 'rumaenien', enName: 'Romania', deName: 'Rumänien' },
  { code: 'BE', enSlug: 'belgium', deSlug: 'belgien', enName: 'Belgium', deName: 'Belgien' },
  { code: 'AT', enSlug: 'austria', deSlug: 'oesterreich', enName: 'Austria', deName: 'Österreich' },
  { code: 'CH', enSlug: 'switzerland', deSlug: 'schweiz', enName: 'Switzerland', deName: 'Schweiz' },
  { code: 'SE', enSlug: 'sweden', deSlug: 'schweden', enName: 'Sweden', deName: 'Schweden' },
  { code: 'NO', enSlug: 'norway', deSlug: 'norwegen', enName: 'Norway', deName: 'Norwegen' },
  { code: 'DK', enSlug: 'denmark', deSlug: 'daenemark', enName: 'Denmark', deName: 'Dänemark' },
  { code: 'FI', enSlug: 'finland', deSlug: 'finnland', enName: 'Finland', deName: 'Finnland' },
  { code: 'IE', enSlug: 'ireland', deSlug: 'irland', enName: 'Ireland', deName: 'Irland' },
  { code: 'PT', enSlug: 'portugal', deSlug: 'portugal', enName: 'Portugal', deName: 'Portugal' },
  { code: 'GR', enSlug: 'greece', deSlug: 'griechenland', enName: 'Greece', deName: 'Griechenland' },
  { code: 'CZ', enSlug: 'czech-republic', deSlug: 'tschechien', enName: 'Czech Republic', deName: 'Tschechien' },
  { code: 'HU', enSlug: 'hungary', deSlug: 'ungarn', enName: 'Hungary', deName: 'Ungarn' },
  { code: 'HR', enSlug: 'croatia', deSlug: 'kroatien', enName: 'Croatia', deName: 'Kroatien' },
  { code: 'BG', enSlug: 'bulgaria', deSlug: 'bulgarien', enName: 'Bulgaria', deName: 'Bulgarien' },
  { code: 'SK', enSlug: 'slovakia', deSlug: 'slowakei', enName: 'Slovakia', deName: 'Slowakei' },
  { code: 'LT', enSlug: 'lithuania', deSlug: 'litauen', enName: 'Lithuania', deName: 'Litauen' },
  { code: 'SI', enSlug: 'slovenia', deSlug: 'slowenien', enName: 'Slovenia', deName: 'Slowenien' },
  { code: 'LV', enSlug: 'latvia', deSlug: 'lettland', enName: 'Latvia', deName: 'Lettland' },
  { code: 'EE', enSlug: 'estonia', deSlug: 'estland', enName: 'Estonia', deName: 'Estland' },
  { code: 'CY', enSlug: 'cyprus', deSlug: 'zypern', enName: 'Cyprus', deName: 'Zypern' },
  { code: 'LU', enSlug: 'luxembourg', deSlug: 'luxemburg', enName: 'Luxembourg', deName: 'Luxemburg' },
  { code: 'MT', enSlug: 'malta', deSlug: 'malta', enName: 'Malta', deName: 'Malta' },
  { code: 'IS', enSlug: 'iceland', deSlug: 'island', enName: 'Iceland', deName: 'Island' },
  { code: 'LI', enSlug: 'liechtenstein', deSlug: 'liechtenstein', enName: 'Liechtenstein', deName: 'Liechtenstein' },
  { code: 'MC', enSlug: 'monaco', deSlug: 'monaco', enName: 'Monaco', deName: 'Monaco' },
  { code: 'SM', enSlug: 'san-marino', deSlug: 'san-marino', enName: 'San Marino', deName: 'San Marino' },
  { code: 'AD', enSlug: 'andorra', deSlug: 'andorra', enName: 'Andorra', deName: 'Andorra' },
  { code: 'VA', enSlug: 'vatican-city', deSlug: 'vatikanstadt', enName: 'Vatican City', deName: 'Vatikanstadt' },

  // High Transfer Demand Partners
  { code: 'TR', enSlug: 'turkey', deSlug: 'tuerkei', enName: 'Turkey', deName: 'Türkei' },
  { code: 'AE', enSlug: 'united-arab-emirates', deSlug: 'vereinigte-arabische-emirate', enName: 'United Arab Emirates', deName: 'Vereinigte Arabische Emirate' },
  { code: 'SA', enSlug: 'saudi-arabia', deSlug: 'saudi-arabien', enName: 'Saudi Arabia', deName: 'Saudi-Arabien' },
  { code: 'PK', enSlug: 'pakistan', deSlug: 'pakistan', enName: 'Pakistan', deName: 'Pakistan' },
  { code: 'EG', enSlug: 'egypt', deSlug: 'aegypten', enName: 'Egypt', deName: 'Ägypten' },
  { code: 'QA', enSlug: 'qatar', deSlug: 'katar', enName: 'Qatar', deName: 'Katar' },
  { code: 'KW', enSlug: 'kuwait', deSlug: 'kuwait', enName: 'Kuwait', deName: 'Kuwait' },
  { code: 'BH', enSlug: 'bahrain', deSlug: 'bahrain', enName: 'Bahrain', deName: 'Bahrain' },
  { code: 'JO', enSlug: 'jordan', deSlug: 'jordanien', enName: 'Jordan', deName: 'Jordanien' },
  { code: 'IL', enSlug: 'israel', deSlug: 'israel', enName: 'Israel', deName: 'Israel' },
  { code: 'BR', enSlug: 'brazil', deSlug: 'brasilien', enName: 'Brazil', deName: 'Brasilien' },
  { code: 'UA', enSlug: 'ukraine', deSlug: 'ukraine', enName: 'Ukraine', deName: 'Ukraine' },
];

export function getCountryByEnSlug(slug: string): CountrySlugMapping | undefined {
  return IBAN_FORMAT_COUNTRIES.find((c) => c.enSlug === slug.toLowerCase());
}

export function getCountryByDeSlug(slug: string): CountrySlugMapping | undefined {
  return IBAN_FORMAT_COUNTRIES.find((c) => c.deSlug === slug.toLowerCase());
}

export function getCountryByCode(code: string): CountrySlugMapping | undefined {
  return IBAN_FORMAT_COUNTRIES.find((c) => c.code === code.toUpperCase());
}
