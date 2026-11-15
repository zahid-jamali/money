/**
 * POLAND SALARY & TAX RULES (2026)
 *
 * Primary Legal Sources:
 * - Rozporządzenie Rady Ministrów w sprawie wysokości minimalnego wynagrodzenia za pracę (Dz.U. 2024 poz. 1362 / Dz.U. 2025)
 * - Ustawa z dnia 26 lipca 1991 r. o podatku dochodowym od osób fizycznych (Dz.U. 2024 poz. 226 z późn. zm. - Ustawa o PIT)
 * - Ustawa z dnia 13 października 1998 r. o systemie ubezpieczeń społecznych (Dz.U. 2024 poz. 497 - Ustawa o SUS)
 * - Ustawa z dnia 27 sierpnia 2004 r. o świadczeniach opieki zdrowotnej finansowanych ze środków publicznych (Dz.U. 2024 poz. 146)
 * - Ustawa z dnia 20 listopada 1998 r. o zryczałtowanym podatku dochodowym od niektórych przychodów osiąganych przez osoby fizyczne
 * - Ustawa z dnia 4 października 2018 r. o pracowniczych planach kapitałowych (PPK)
 */

export interface PolishSalaryRules {
  taxYear: number;
  validFrom: string;
  source: string;
  verifiedOn: string;
  
  // Minimal wage & macroeconomic indicators
  minimalWage: {
    grossMonthly: number;
    minimumHourlyRate: number;
    forecastedAverageWage: number; // Prognozowane przeciętne wynagrodzenie
    annual30xCap: number; // 30-krotność prognozowanego przeciętnego wynagrodzenia (limit emerytalno-rentowy)
  };

  // Social Security (ZUS) Rates - Employee & Employer (Umowa o Pracę)
  zusRates: {
    employee: {
      emerytalne: number; // 9.76%
      rentowe: number;    // 1.50%
      chorobowe: number;  // 2.45%
      totalSocial: number; // 13.71%
      zdrowotna: number;  // 9.00% (nieodliczalna)
    };
    employer: {
      emerytalne: number; // 9.76%
      rentowe: number;    // 6.50%
      wypadkowe: number;  // 1.67% (standardowa stopa procentowa dla firm do 9 osób)
      fp: number;         // 2.45% (Fundusz Pracy)
      fgsp: number;       // 0.10% (Fundusz Gwarantowanych Świadczeń Pracowniczych)
      totalSocial: number; // 20.48%
    };
  };

  // Personal Income Tax (PIT) Scale (Skala Podatkowa)
  pitScale: {
    threshold: number; // 120,000 PLN
    lowerRate: number; // 12%
    higherRate: number; // 32%
    kwotaWolna: number; // 30,000 PLN
    kwotaZmniejszajacaPodatekAnnual: number; // 3,600 PLN (12% of 30,000)
    pit2Monthly: {
      full: number; // 1/12 = 300 PLN
      half: number; // 1/24 = 150 PLN
      third: number; // 1/36 = 100 PLN
    };
    standardKup: number; // 250 PLN (Koszty uzyskania przychodów - standardowe)
    podwyzszoneKup: number; // 300 PLN (dojeżdżający z innej miejscowości)
    ulgaDlaMlodychCap: number; // 85,528 PLN (Zwolnienie z PIT dla osób do 26. roku życia)
    autorskieKupRate: number; // 50%
    autorskieKupCap: number; // 120,000 PLN
  };

  // Employee Capital Plans (PPK)
  ppk: {
    defaultEmployeeRate: number; // 2.0% (możliwość obniżenia do 0.5% lub podwyższenia do 4.0%)
    defaultEmployerRate: number; // 1.5% (możliwość podwyższenia do 4.0%)
  };

  // B2B Entrepreneur ZUS Contributions (Działalność Gospodarcza)
  b2bZus: {
    preferencyjnyBase: number; // 30% minimalnego wynagrodzenia
    pelnyBase: number; // 60% prognozowanego przeciętnego wynagrodzenia
    preferencyjnyMonthly: {
      emerytalne: number;
      rentowe: number;
      wypadkowe: number;
      choroboweDobrowolne: number;
      totalWithoutChorobowe: number;
      totalWithChorobowe: number;
    };
    pelnyMonthly: {
      emerytalne: number;
      rentowe: number;
      wypadkowe: number;
      fp: number;
      choroboweDobrowolne: number;
      totalWithoutChorobowe: number;
      totalWithChorobowe: number;
    };
    // Składka zdrowotna B2B
    zdrowotnaB2b: {
      skalaRate: number; // 9% dochodu (minimalna składka: 9% z płacy minimalnej)
      liniowyRate: number; // 4.9% dochodu (minimalna składka: 9% z płacy minimalnej)
      liniowyDeductionCapAnnual: number; // limit odliczenia składki zdrowotnej w liniowym
      ryczaltMonthly: {
        tier1: number; // do 60 000 zł rocznie (60% przeciętnego * 9%)
        tier2: number; // 60 000 - 300 000 zł rocznie (100% przeciętnego * 9%)
        tier3: number; // powyżej 300 000 zł rocznie (180% przeciętnego * 9%)
      };
    };
  };

  // Ryczałt tax rates
  ryczaltRates: {
    itProgramming: number; // 12%
    servicesGeneral: number; // 8.5%
    managementConsulting: number; // 15%
    healthProfessionals: number; // 14%
    constructionManufacturing: number; // 5.5%
    trade: number; // 3.0%
  };

  // Flat Tax (Podatek Liniowy)
  liniowyRate: number; // 19%
}

export const POLAND_SALARY_RULES_2026: PolishSalaryRules = {
  taxYear: 2026,
  validFrom: '2026-01-01',
  source: 'https://www.podatki.gov.pl | https://www.zus.pl | Dz.U. 2024 poz. 1362',
  verifiedOn: '2026-01-01',

  minimalWage: {
    grossMonthly: 4666.0,
    minimumHourlyRate: 30.5,
    forecastedAverageWage: 8673.0,
    annual30xCap: 260190.0, // 30 * 8,673 PLN
  },

  zusRates: {
    employee: {
      emerytalne: 0.0976,
      rentowe: 0.015,
      chorobowe: 0.0245,
      totalSocial: 0.1371,
      zdrowotna: 0.09,
    },
    employer: {
      emerytalne: 0.0976,
      rentowe: 0.065,
      wypadkowe: 0.0167,
      fp: 0.0245,
      fgsp: 0.001,
      totalSocial: 0.2048,
    },
  },

  pitScale: {
    threshold: 120000.0,
    lowerRate: 0.12,
    higherRate: 0.32,
    kwotaWolna: 30000.0,
    kwotaZmniejszajacaPodatekAnnual: 3600.0,
    pit2Monthly: {
      full: 300.0,
      half: 150.0,
      third: 100.0,
    },
    standardKup: 250.0,
    podwyzszoneKup: 300.0,
    ulgaDlaMlodychCap: 85528.0,
    autorskieKupRate: 0.5,
    autorskieKupCap: 120000.0,
  },

  ppk: {
    defaultEmployeeRate: 0.02,
    defaultEmployerRate: 0.015,
  },

  b2bZus: {
    preferencyjnyBase: 1399.8, // 30% of 4,666 PLN
    pelnyBase: 5203.8, // 60% of 8,673 PLN
    preferencyjnyMonthly: {
      emerytalne: 136.62,
      rentowe: 83.99,
      wypadkowe: 23.38,
      choroboweDobrowolne: 34.3,
      totalWithoutChorobowe: 243.99,
      totalWithChorobowe: 278.29,
    },
    pelnyMonthly: {
      emerytalne: 507.89,
      rentowe: 338.25,
      wypadkowe: 86.9,
      fp: 127.49,
      choroboweDobrowolne: 127.49,
      totalWithoutChorobowe: 1060.53,
      totalWithChorobowe: 1188.02,
    },
    zdrowotnaB2b: {
      skalaRate: 0.09,
      liniowyRate: 0.049,
      liniowyDeductionCapAnnual: 12900.0,
      ryczaltMonthly: {
        tier1: 468.34, // 60% of 8,673 * 9%
        tier2: 780.57, // 100% of 8,673 * 9%
        tier3: 1405.03, // 180% of 8,673 * 9%
      },
    },
  },

  ryczaltRates: {
    itProgramming: 0.12,
    servicesGeneral: 0.085,
    managementConsulting: 0.15,
    healthProfessionals: 0.14,
    constructionManufacturing: 0.055,
    trade: 0.03,
  },

  liniowyRate: 0.19,
};

/**
 * Historical Minimal Wage in Poland (2015-2026)
 * Source: Dziennik Ustaw RP / Rozporządzenia RM
 */
export interface MinimalWageHistoryPl {
  period: string;
  grossAmount: number;
  netApprox: number;
  hourlyGross: number;
  legalAct: string;
}

export const POLAND_MINIMAL_WAGE_HISTORY: MinimalWageHistoryPl[] = [
  { period: '2026', grossAmount: 4666.0, netApprox: 3510.92, hourlyGross: 30.5, legalAct: 'Dz.U. 2024 poz. 1362' },
  { period: '2025', grossAmount: 4626.0, netApprox: 3483.51, hourlyGross: 30.2, legalAct: 'Dz.U. 2024 poz. 1362' },
  { period: '2024 (od 01.07)', grossAmount: 4300.0, netApprox: 3261.53, hourlyGross: 28.1, legalAct: 'Dz.U. 2023 poz. 1893' },
  { period: '2024 (do 30.06)', grossAmount: 4242.0, netApprox: 3221.98, hourlyGross: 27.7, legalAct: 'Dz.U. 2023 poz. 1893' },
  { period: '2023 (od 01.07)', grossAmount: 3600.0, netApprox: 2783.86, hourlyGross: 23.5, legalAct: 'Dz.U. 2022 poz. 1952' },
  { period: '2023 (do 30.06)', grossAmount: 3490.0, netApprox: 2709.48, hourlyGross: 22.8, legalAct: 'Dz.U. 2022 poz. 1952' },
  { period: '2022', grossAmount: 3010.0, netApprox: 2363.56, hourlyGross: 19.7, legalAct: 'Dz.U. 2021 poz. 1690' },
  { period: '2021', grossAmount: 2800.0, netApprox: 2061.67, hourlyGross: 18.3, legalAct: 'Dz.U. 2020 poz. 1596' },
  { period: '2020', grossAmount: 2600.0, netApprox: 1920.62, hourlyGross: 17.0, legalAct: 'Dz.U. 2019 poz. 1778' },
  { period: '2019', grossAmount: 2250.0, netApprox: 1633.78, hourlyGross: 14.7, legalAct: 'Dz.U. 2018 poz. 1794' },
  { period: '2018', grossAmount: 2100.0, netApprox: 1530.0, hourlyGross: 13.7, legalAct: 'Dz.U. 2017 poz. 1747' },
  { period: '2017', grossAmount: 2000.0, netApprox: 1459.48, hourlyGross: 13.0, legalAct: 'Dz.U. 2016 poz. 1456' },
  { period: '2016', grossAmount: 1850.0, netApprox: 1355.69, hourlyGross: 12.0, legalAct: 'Dz.U. 2015 poz. 1385' },
  { period: '2015', grossAmount: 1750.0, netApprox: 1286.16, hourlyGross: 11.0, legalAct: 'Dz.U. 2014 poz. 1222' },
];

/**
 * Programmatic salary amounts for Poland (4,666 PLN minimum wage + 5,000 to 30,000 in steps of 500)
 */
export const POLAND_PROGRAMMATIC_SALARY_AMOUNTS: number[] = [
  4666,
  ...Array.from({ length: (30000 - 5000) / 500 + 1 }, (_, i) => 5000 + i * 500),
];

