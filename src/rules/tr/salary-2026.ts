/**
 * Turkey Salary & Tax Parameters 2026 & Historical Series
 * Sources:
 * - Gelir İdaresi Başkanlığı (GİB) - 193 sayılı Gelir Vergisi Kanunu 103. Madde Vergi Tarifesi
 * - Sosyal Güvenlik Kurumu (SGK) - Prime Esas Kazanç Taban ve Tavanı
 * - Çalışma ve Sosyal Güvenlik Bakanlığı (ÇSGB) - Asgari Ücret Tespit Komisyonu Kararları
 * - Hazine ve Maliye Bakanlığı Kamu Mali Yönetim ve Dönüşüm Genel Müdürlüğü Genelgeleri (Kıdem Tazminatı Tavanı)
 * - 7349 sayılı Gelir Vergisi Kanunu ile Bazı Kanunlarda Değişiklik Yapılmasına Dair Kanun (Asgari Ücret İstisnası)
 * - 488 sayılı Damga Vergisi Kanunu
 */

export interface TaxBracket {
  limit: number; // upper limit for the bracket, Infinity for top bracket
  rate: number; // e.g. 0.15 for 15%
}

export interface AsgariUcretRecord {
  year: number;
  period: string; // e.g. '01.01.2026 - 31.12.2026'
  gross: number;
  net: number;
  source: string;
}

export interface KidemTavaniRecord {
  year: number;
  period: string; // e.g. '2026 1. Yarıyıl (Ocak - Haziran)'
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  tavan: number;
  circularNo?: string;
}

export interface TurkeySalaryRules {
  asgariUcret: {
    year: number;
    gross: number;
    net: number;
    sgkIsciRate: number; // 0.14
    issizlikIsciRate: number; // 0.01
    sgkIsci: number; // 3,640.77
    issizlikIsci: number; // 260.06
    sgkIsverenStandardRate: number; // 0.205
    sgkIsverenIncentiveRate: number; // 0.155 (5 puanlık indirim)
    issizlikIsverenRate: number; // 0.02
    sgkIsverenStandard: number;
    sgkIsverenIncentive: number;
    issizlikIsveren: number;
    totalIsverenStandard: number;
    totalIsverenIncentive: number;
    damgaVergisiIstisnasi: number; // 197.38 TL
    source: string;
  };
  pek: {
    taban: number; // 26,005.50 TL
    tavan: number; // 195,041.25 TL (7.5 x asgari ücret)
  };
  kidemTavani: {
    current: number; // 59,250.00 TL
    validFrom: string;
    validTo: string;
    source: string;
  };
  taxBrackets: TaxBracket[];
  damgaVergisiRate: number; // 0.00759
  rates: {
    sgkIsci: number;
    issizlikIsci: number;
    sgkIsverenStandard: number;
    sgkIsverenIncentive: number;
    issizlikIsveren: number;
  };
  history: {
    asgariUcret: AsgariUcretRecord[];
    kidemTavani: KidemTavaniRecord[];
  };
}

export const ASGARI_UCRET_2026 = {
  year: 2026,
  gross: 26005.50,
  net: 22104.67,
  sgkIsciRate: 0.14,
  issizlikIsciRate: 0.01,
  sgkIsci: 3640.77,
  issizlikIsci: 260.06,
  sgkIsverenStandardRate: 0.205,
  sgkIsverenIncentiveRate: 0.155,
  issizlikIsverenRate: 0.02,
  sgkIsverenStandard: 5331.13,
  sgkIsverenIncentive: 4030.85,
  issizlikIsveren: 520.11,
  totalIsverenStandard: 31856.74,
  totalIsverenIncentive: 30556.46,
  damgaVergisiIstisnasi: 197.38,
  source: 'ÇSGB Asgari Ücret Tespit Komisyonu Kararı & Resmî Gazete',
};

export const SGK_PEK_2026 = {
  taban: 26005.50,
  tavan: 195041.25, // 7.5 x 26005.50
};

export const KIDEM_TAZMINATI_TAVANI_2026_H1 = {
  current: 59250.00,
  validFrom: '2026-01-01',
  validTo: '2026-06-30',
  source: 'Hazine ve Maliye Bakanlığı Kamu Mali Yönetim ve Dönüşüm Genel Müdürlüğü Genelgesi',
};

export const INCOME_TAX_BRACKETS_2026_WAGE: TaxBracket[] = [
  { limit: 158000, rate: 0.15 },
  { limit: 330000, rate: 0.20 },
  { limit: 1200000, rate: 0.27 },
  { limit: 4300000, rate: 0.35 },
  { limit: Infinity, rate: 0.40 },
];

export const DAMGA_VERGISI_RATE = 0.00759; // %0.759 / binde 7.59

export const ASGARI_UCRET_HISTORY: AsgariUcretRecord[] = [
  {
    year: 2026,
    period: '01.01.2026 - 31.12.2026',
    gross: 26005.50,
    net: 22104.67,
    source: 'Resmî Gazete / ÇSGB Asgari Ücret Tespit Komisyonu Kararı',
  },
  {
    year: 2025,
    period: '01.01.2025 - 31.12.2025',
    gross: 23000.00,
    net: 19550.00,
    source: 'Resmî Gazete / ÇSGB Asgari Ücret Tespit Komisyonu Kararı',
  },
  {
    year: 2024,
    period: '01.01.2024 - 31.12.2024',
    gross: 20002.50,
    net: 17002.12,
    source: 'Resmî Gazete No: 32415 / ÇSGB Kararı 2023/1',
  },
  {
    year: 2023,
    period: '01.07.2023 - 31.12.2023 (2. Dönem)',
    gross: 13414.50,
    net: 11402.32,
    source: 'Resmî Gazete No: 32231 / ÇSGB Kararı 2023/1',
  },
  {
    year: 2023,
    period: '01.01.2023 - 30.06.2023 (1. Dönem)',
    gross: 10008.00,
    net: 8506.80,
    source: 'Resmî Gazete No: 32058 / ÇSGB Kararı 2022/2',
  },
  {
    year: 2022,
    period: '01.07.2022 - 31.12.2022 (2. Dönem)',
    gross: 6471.00,
    net: 5500.35,
    source: 'Resmî Gazete No: 31884 / ÇSGB Kararı 2022/1',
  },
  {
    year: 2022,
    period: '01.01.2022 - 30.06.2022 (1. Dönem)',
    gross: 5004.00,
    net: 4253.40,
    source: 'Resmî Gazete No: 31692 / 7349 sayılı Kanun yürürlüğü',
  },
  {
    year: 2021,
    period: '01.01.2021 - 31.12.2021',
    gross: 3577.50,
    net: 2825.90,
    source: 'Resmî Gazete No: 31350 / ÇSGB Kararı 2020/1',
  },
  {
    year: 2020,
    period: '01.01.2020 - 31.12.2020',
    gross: 2943.00,
    net: 2324.71,
    source: 'Resmî Gazete No: 30994 / ÇSGB Kararı 2019/1',
  },
  {
    year: 2019,
    period: '01.01.2019 - 31.12.2019',
    gross: 2558.40,
    net: 2020.90,
    source: 'Resmî Gazete No: 30638 / ÇSGB Kararı 2018/1',
  },
  {
    year: 2018,
    period: '01.01.2018 - 31.12.2018',
    gross: 2029.50,
    net: 1603.12,
    source: 'Resmî Gazete No: 30286 / ÇSGB Kararı 2017/1',
  },
];

export const KIDEM_TAZMINATI_TAVANI_HISTORY: KidemTavaniRecord[] = [
  {
    year: 2026,
    period: '2026 1. Yarıyıl (01.01.2026 - 30.06.2026)',
    startDate: '2026-01-01',
    endDate: '2026-06-30',
    tavan: 59250.00,
    circularNo: 'Hazine ve Maliye Bakanlığı Genelgesi',
  },
  {
    year: 2025,
    period: '2025 2. Yarıyıl (01.07.2025 - 31.12.2025)',
    startDate: '2025-07-01',
    endDate: '2025-12-31',
    tavan: 53119.50,
    circularNo: 'Maliye Genelgesi 2025/2',
  },
  {
    year: 2025,
    period: '2025 1. Yarıyıl (01.01.2025 - 30.06.2025)',
    startDate: '2025-01-01',
    endDate: '2025-06-30',
    tavan: 46655.43,
    circularNo: 'Maliye Genelgesi 2025/1',
  },
  {
    year: 2024,
    period: '2024 2. Yarıyıl (01.07.2024 - 31.12.2024)',
    startDate: '2024-07-01',
    endDate: '2024-12-31',
    tavan: 41828.42,
    circularNo: 'Maliye Genelgesi Sıra No: 4',
  },
  {
    year: 2024,
    period: '2024 1. Yarıyıl (01.01.2024 - 30.06.2024)',
    startDate: '2024-01-01',
    endDate: '2024-06-30',
    tavan: 35058.58,
    circularNo: 'Maliye Genelgesi Sıra No: 2',
  },
  {
    year: 2023,
    period: '2023 2. Yarıyıl (01.07.2023 - 31.12.2023)',
    startDate: '2023-07-01',
    endDate: '2023-12-31',
    tavan: 23489.83,
    circularNo: 'Maliye Genelgesi Sıra No: 5',
  },
  {
    year: 2023,
    period: '2023 1. Yarıyıl (01.01.2023 - 30.06.2023)',
    startDate: '2023-01-01',
    endDate: '2023-06-30',
    tavan: 19982.83,
    circularNo: 'Maliye Genelgesi Sıra No: 2',
  },
  {
    year: 2022,
    period: '2022 2. Yarıyıl (01.07.2022 - 31.12.2022)',
    startDate: '2022-07-01',
    endDate: '2022-12-31',
    tavan: 15371.40,
    circularNo: 'Maliye Genelgesi Sıra No: 6',
  },
  {
    year: 2022,
    period: '2022 1. Yarıyıl (01.01.2022 - 30.06.2022)',
    startDate: '2022-01-01',
    endDate: '2022-06-30',
    tavan: 10848.59,
    circularNo: 'Maliye Genelgesi Sıra No: 2',
  },
  {
    year: 2021,
    period: '2021 2. Yarıyıl (01.07.2021 - 31.12.2021)',
    startDate: '2021-07-01',
    endDate: '2021-12-31',
    tavan: 8284.51,
    circularNo: 'Maliye Genelgesi Sıra No: 4',
  },
  {
    year: 2021,
    period: '2021 1. Yarıyıl (01.01.2021 - 30.06.2021)',
    startDate: '2021-01-01',
    endDate: '2021-06-30',
    tavan: 7638.96,
    circularNo: 'Maliye Genelgesi Sıra No: 2',
  },
  {
    year: 2020,
    period: '2020 2. Yarıyıl (01.07.2020 - 31.12.2020)',
    startDate: '2020-07-01',
    endDate: '2020-12-31',
    tavan: 7117.17,
    circularNo: 'Maliye Genelgesi Sıra No: 4',
  },
  {
    year: 2020,
    period: '2020 1. Yarıyıl (01.01.2020 - 30.06.2020)',
    startDate: '2020-01-01',
    endDate: '2020-06-30',
    tavan: 6730.15,
    circularNo: 'Maliye Genelgesi Sıra No: 2',
  },
  {
    year: 2019,
    period: '2019 2. Yarıyıl (01.07.2019 - 31.12.2019)',
    startDate: '2019-07-01',
    endDate: '2019-12-31',
    tavan: 6379.86,
    circularNo: 'Maliye Genelgesi Sıra No: 4',
  },
  {
    year: 2019,
    period: '2019 1. Yarıyıl (01.01.2019 - 30.06.2019)',
    startDate: '2019-01-01',
    endDate: '2019-06-30',
    tavan: 6017.60,
    circularNo: 'Maliye Genelgesi Sıra No: 2',
  },
  {
    year: 2018,
    period: '2018 2. Yarıyıl (01.07.2018 - 31.12.2018)',
    startDate: '2018-07-01',
    endDate: '2018-12-31',
    tavan: 5434.42,
    circularNo: 'Maliye Genelgesi Sıra No: 4',
  },
  {
    year: 2018,
    period: '2018 1. Yarıyıl (01.01.2018 - 30.06.2018)',
    startDate: '2018-01-01',
    endDate: '2018-06-30',
    tavan: 5001.76,
    circularNo: 'Maliye Genelgesi Sıra No: 2',
  },
];

export function getKidemTavaniForDate(dateStr: string): number {
  const match = KIDEM_TAZMINATI_TAVANI_HISTORY.find(
    (item) => item.startDate <= dateStr && item.endDate >= dateStr,
  );
  if (match) return match.tavan;
  return KIDEM_TAZMINATI_TAVANI_2026_H1.current;
}

export function getTurkeySalaryRules(): TurkeySalaryRules {
  return {
    asgariUcret: ASGARI_UCRET_2026,
    pek: SGK_PEK_2026,
    kidemTavani: KIDEM_TAZMINATI_TAVANI_2026_H1,
    taxBrackets: INCOME_TAX_BRACKETS_2026_WAGE,
    damgaVergisiRate: DAMGA_VERGISI_RATE,
    rates: {
      sgkIsci: 0.14,
      issizlikIsci: 0.01,
      sgkIsverenStandard: 0.205,
      sgkIsverenIncentive: 0.155,
      issizlikIsveren: 0.02,
    },
    history: {
      asgariUcret: ASGARI_UCRET_HISTORY,
      kidemTavani: KIDEM_TAZMINATI_TAVANI_HISTORY,
    },
  };
}
