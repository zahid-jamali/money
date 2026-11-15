export type TevkifatFraction =
  | '2/10'
  | '3/10'
  | '4/10'
  | '5/10'
  | '7/10'
  | '9/10'
  | '10/10';

export interface TevkifatRatioInfo {
  fraction: TevkifatFraction;
  numerator: number;
  denominator: number;
  ratio: number;
  descriptionTr: string;
  descriptionEn: string;
}

export interface TevkifatCategory {
  id: string;
  nameTr: string;
  nameEn: string;
  fraction: TevkifatFraction;
  numerator: number;
  denominator: number;
  ratio: number;
  legalReference: string;
  descriptionTr: string;
  descriptionEn: string;
}

/**
 * Standard statutory VAT withholding fractions prescribed by Gelir İdaresi Başkanlığı (GİB).
 */
export const TEVKIFAT_FRACTIONS: Record<TevkifatFraction, TevkifatRatioInfo> = {
  '2/10': {
    fraction: '2/10',
    numerator: 2,
    denominator: 10,
    ratio: 0.2,
    descriptionTr: '%20 Tevkifat (Yük taşımacılığı, servis vb.)',
    descriptionEn: '20% Withholding (Freight transport, etc.)',
  },
  '3/10': {
    fraction: '3/10',
    numerator: 3,
    denominator: 10,
    ratio: 0.3,
    descriptionTr: '%30 Tevkifat (Hurda ve atık teslimleri, diğer hizmetler)',
    descriptionEn: '30% Withholding (Scrap, waste, specific services)',
  },
  '4/10': {
    fraction: '4/10',
    numerator: 4,
    denominator: 10,
    ratio: 0.4,
    descriptionTr: '%40 Tevkifat (Yapım işleri ve mimarlık-mühendislik)',
    descriptionEn: '40% Withholding (Construction & architectural/engineering works)',
  },
  '5/10': {
    fraction: '5/10',
    numerator: 5,
    denominator: 10,
    ratio: 0.5,
    descriptionTr: '%50 Tevkifat (Servis taşımacılığı, fason tekstil vb.)',
    descriptionEn: '50% Withholding (Shuttle transportation, garment tolling, etc.)',
  },
  '7/10': {
    fraction: '7/10',
    numerator: 7,
    denominator: 10,
    ratio: 0.7,
    descriptionTr: '%70 Tevkifat (Baskı ve basım hizmetleri vb.)',
    descriptionEn: '70% Withholding (Printing and publishing services, etc.)',
  },
  '9/10': {
    fraction: '9/10',
    numerator: 9,
    denominator: 10,
    ratio: 0.9,
    descriptionTr: '%90 Tevkifat (Temizlik, güvenlik, danışmanlık, denetim)',
    descriptionEn: '90% Withholding (Cleaning, security, audit, consulting)',
  },
  '10/10': {
    fraction: '10/10',
    numerator: 10,
    denominator: 10,
    ratio: 1.0,
    descriptionTr: '%100 Tam Tevkifat (Serbest meslek, kiralama, yurt dışı)',
    descriptionEn: '100% Full Withholding (Freelance, leases, foreign cross-border)',
  },
};

/**
 * Statutory transaction categories defined in the GİB KDV Genel Uygulama Tebliği.
 */
export const TEVKIFAT_CATEGORIES: Record<string, TevkifatCategory> = {
  cleaning: {
    id: 'cleaning',
    nameTr: 'Temizlik, Çevre ve Bahçe Bakım Hizmetleri',
    nameEn: 'Cleaning, Environmental and Garden Maintenance Services',
    fraction: '9/10',
    numerator: 9,
    denominator: 10,
    ratio: 0.9,
    legalReference: 'KDV Genel Uygulama Tebliği (I/C-2.1.3.2.10)',
    descriptionTr: 'Bina içi, cam, çevre temizliği ve haşere ilaçlama hizmetlerinde alıcı tarafından 9/10 oranında KDV tevkifatı yapılır.',
    descriptionEn: '9/10 VAT withholding applies to commercial cleaning, janitorial and garden care services.',
  },
  security: {
    id: 'security',
    nameTr: 'Özel Güvenlik ve Koruma Hizmetleri',
    nameEn: 'Private Security and Protective Services',
    fraction: '9/10',
    numerator: 9,
    denominator: 10,
    ratio: 0.9,
    legalReference: 'KDV Genel Uygulama Tebliği (I/C-2.1.3.2.5)',
    descriptionTr: '5188 sayılı Kanun kapsamında sağlanan özel güvenlik ve koruma hizmetlerinde 9/10 tevkifat uygulanır.',
    descriptionEn: '9/10 VAT withholding is applied to licensed private security, guarding and surveillance operations.',
  },
  transportation_shuttle: {
    id: 'transportation_shuttle',
    nameTr: 'Servis Taşımacılığı Hizmeti',
    nameEn: 'Personnel & Student Shuttle Transportation Services',
    fraction: '5/10',
    numerator: 5,
    denominator: 10,
    ratio: 0.5,
    legalReference: 'KDV Genel Uygulama Tebliği (I/C-2.1.3.2.11)',
    descriptionTr: 'Personel ve öğrenci servis taşımacılığı hizmetlerinde 5/10 oranında KDV tevkifatı uygulanır.',
    descriptionEn: '5/10 VAT withholding applies to designated route passenger and school/staff shuttle services.',
  },
  transportation_freight: {
    id: 'transportation_freight',
    nameTr: 'Karayolu Yük Taşımacılığı Hizmeti',
    nameEn: 'Road Freight Transportation Services',
    fraction: '2/10',
    numerator: 2,
    denominator: 10,
    ratio: 0.2,
    legalReference: 'KDV Genel Uygulama Tebliği (I/C-2.1.3.2.11)',
    descriptionTr: 'Karayoluyla kargo, nakliye ve yük taşımacılığı hizmetlerinde 2/10 oranında tevkifat uygulanır.',
    descriptionEn: '2/10 VAT withholding applies to domestic road freight and cargo logistics services.',
  },
  construction: {
    id: 'construction',
    nameTr: 'Yapım İşleri ile Mühendislik-Mimarlık ve Etüt-Proje Hizmetleri',
    nameEn: 'Construction Works & Associated Architectural/Engineering Services',
    fraction: '4/10',
    numerator: 4,
    denominator: 10,
    ratio: 0.4,
    legalReference: 'KDV Genel Uygulama Tebliği (I/C-2.1.3.2.1)',
    descriptionTr: 'Belirlenmiş alıcılara karşı ifa edilen inşaat, taahhüt ve mimarlık-mühendislik işlerinde 4/10 oranında tevkifat yapılır.',
    descriptionEn: '4/10 VAT withholding applies to construction, renovation, contracting and engineering projects.',
  },
  audit: {
    id: 'audit',
    nameTr: 'Denetim ve Yeminli Mali Müşavirlik Hizmetleri',
    nameEn: 'Audit and Independent Accounting Inspection Services',
    fraction: '9/10',
    numerator: 9,
    denominator: 10,
    ratio: 0.9,
    legalReference: 'KDV Genel Uygulama Tebliği (I/C-2.1.3.2.2)',
    descriptionTr: 'Bağımsız denetim, YMM tasdik ve iç denetim hizmetlerinde 9/10 tevkifat zorunludur.',
    descriptionEn: '9/10 VAT withholding applies to external audit, financial due diligence and fiscal certification.',
  },
  consulting: {
    id: 'consulting',
    nameTr: 'Danışmanlık, Müşavirlik ve Etüt-Proje Hizmetleri',
    nameEn: 'Consulting, Advisory and Feasibility Study Services',
    fraction: '9/10',
    numerator: 9,
    denominator: 10,
    ratio: 0.9,
    legalReference: 'KDV Genel Uygulama Tebliği (I/C-2.1.3.2.2)',
    descriptionTr: 'Yönetim danışmanlığı, teknik müşavirlik, yazılım ve fizibilite hizmetlerinde 9/10 tevkifat uygulanır.',
    descriptionEn: '9/10 VAT withholding applies to corporate consulting, management advisory and technical planning.',
  },
  full_withholding: {
    id: 'full_withholding',
    nameTr: 'Tam Tevkifat (Kiralama, Serbest Meslek vb.)',
    nameEn: 'Full VAT Withholding (Leases, Foreign Supplies, Freelance)',
    fraction: '10/10',
    numerator: 10,
    denominator: 10,
    ratio: 1.0,
    legalReference: '3065 Sayılı KDV Kanunu Madde 9 / KDV Genel Uygulama Tebliği (I/C-2.1.1)',
    descriptionTr: 'KDV mükellefi olmayanlardan yapılan kiralamalar ve yurt dışı hizmet alımlarında KDV-2 ile 10/10 oranında tam tevkifat yapılır.',
    descriptionEn: '100% full VAT withholding where the entire tax is declared and remitted directly by the recipient under KDV-2 return.',
  },
};

/**
 * Parses a tevkifat fraction string (e.g. '5/10', '9/10', '4/10', or '10/10')
 * into its numerator, denominator, and decimal ratio.
 */
export function parseTevkifatFraction(fractionStr: string): {
  fraction: TevkifatFraction;
  numerator: number;
  denominator: number;
  ratio: number;
} {
  const cleaned = fractionStr.trim().replace(/\s+/g, '');
  if (cleaned in TEVKIFAT_FRACTIONS) {
    const key = cleaned as TevkifatFraction;
    return TEVKIFAT_FRACTIONS[key];
  }

  // Parse custom fraction if matching X/Y pattern
  const parts = cleaned.split('/');
  if (parts.length === 2) {
    const num = parseInt(parts[0], 10);
    const den = parseInt(parts[1], 10);
    if (!isNaN(num) && !isNaN(den) && den > 0) {
      const normalizedRatio = Math.min(1, Math.max(0, num / den));
      const key = `${num}/${den}` as TevkifatFraction;
      if (key in TEVKIFAT_FRACTIONS) {
        return TEVKIFAT_FRACTIONS[key];
      }
      return {
        fraction: key,
        numerator: num,
        denominator: den,
        ratio: normalizedRatio,
      };
    }
  }

  // Fallback to 5/10 as a safe standard
  return TEVKIFAT_FRACTIONS['5/10'];
}

/**
 * Helper to retrieve category by id or common aliases
 */
export function getTevkifatCategory(categoryId: string): TevkifatCategory | undefined {
  if (!categoryId) return undefined;
  const key = categoryId.toLowerCase().trim();

  if (key in TEVKIFAT_CATEGORIES) {
    return TEVKIFAT_CATEGORIES[key];
  }

  if (key === 'transportation' || key === 'transport') {
    return TEVKIFAT_CATEGORIES.transportation_shuttle;
  }
  if (key === 'freight') {
    return TEVKIFAT_CATEGORIES.transportation_freight;
  }
  if (key === 'full' || key === 'tam') {
    return TEVKIFAT_CATEGORIES.full_withholding;
  }

  return undefined;
}
