import {
  TevkifatCategory,
  TevkifatFraction,
  getTevkifatCategory,
  parseTevkifatFraction,
} from '../../rules/tr/tevkifat';

export interface TevkifatCalculationInput {
  /**
   * Pre-tax base net consideration (Matrah)
   */
  netAmount: number;

  /**
   * Statutory KDV rate percentage (e.g. 20 for standard 20%, 10 for reduced).
   * Defaults to 20%.
   */
  vatRate?: number;

  /**
   * Withholding fraction, e.g. '5/10', '9/10', '4/10', '2/10', '7/10', '10/10'.
   */
  fraction: TevkifatFraction | string;

  /**
   * Optional transaction category key (e.g. 'cleaning', 'security', 'construction', etc.)
   */
  category?: string;
}

export interface TevkifatBreakdownLine {
  labelKey: string;
  titleTr: string;
  titleEn: string;
  amount: number;
  formula: string;
  legalBasis: string;
}

export interface TevkifatCalculationResult {
  netAmount: number;
  vatRate: number;
  fraction: string;
  fractionRatio: number;
  totalVat: number;
  withheldVat: number;
  invoicedVat: number;
  payableAmount: number;
  grossAmount: number;
  buyerLiability: number;
  sellerReceivable: number;
  category?: TevkifatCategory;
  breakdown: TevkifatBreakdownLine[];
  legalReference: string;
}

function round2(val: number): number {
  return Math.round((val + Number.EPSILON) * 100) / 100;
}

/**
 * Pure calculation engine for Turkish KDV Tevkifat (VAT Withholding)
 * strictly implementing the Gelir İdaresi Başkanlığı (GİB) rules and KDV Genel Uygulama Tebliği.
 */
export function calculateTevkifat(input: TevkifatCalculationInput): TevkifatCalculationResult {
  const netAmount = round2(Math.max(0, input.netAmount || 0));
  const vatRate = input.vatRate !== undefined ? Math.max(0, input.vatRate) : 20;

  // Resolve category if provided
  const category = input.category ? getTevkifatCategory(input.category) : undefined;

  // Determine fraction
  const fractionStr = category ? category.fraction : input.fraction || '5/10';
  const parsed = parseTevkifatFraction(fractionStr);
  const ratio = parsed.ratio;

  // 1. Calculate Total KDV (Hesaplanan KDV)
  const totalVat = round2(netAmount * (vatRate / 100));

  // 2. Calculate Withheld KDV (Tevkif Edilen KDV)
  const withheldVat = round2(totalVat * ratio);

  // 3. Calculate Invoiced KDV (Tahsil Edilecek KDV)
  // Enforce zero discrepancy: withheldVat + invoicedVat === totalVat
  const invoicedVat = round2(totalVat - withheldVat);

  // 4. Calculate Total Payable / Invoiced Amount (Ödenecek Tutar / Fatura Toplamı)
  const payableAmount = round2(netAmount + invoicedVat);

  // 5. Total Gross Consideration (KDV Dahil Toplam Tutar)
  const grossAmount = round2(netAmount + totalVat);

  const legalRef =
    category?.legalReference ||
    `KDV Genel Uygulama Tebliği (I/C-2.1) & 3065 Sayılı KDV Kanunu Madde 9 [Tevkifat Oranı: ${parsed.fraction}]`;

  const breakdown: TevkifatBreakdownLine[] = [
    {
      labelKey: 'tevkifat.netAmount',
      titleTr: 'KDV Matrahı (Net Tutar)',
      titleEn: 'VAT Base Net Amount',
      amount: netAmount,
      formula: 'Net Base Input',
      legalBasis: '3065 sayılı KDV Kanunu Madde 20 (Teslim ve Hizmet Bedeli)',
    },
    {
      labelKey: 'tevkifat.totalVat',
      titleTr: `Hesaplanan KDV (%${vatRate})`,
      titleEn: `Calculated VAT (${vatRate}%)`,
      amount: totalVat,
      formula: `${netAmount.toFixed(2)} × (${vatRate}% ÷ 100)`,
      legalBasis: '3065 sayılı KDV Kanunu Madde 28 & 29',
    },
    {
      labelKey: 'tevkifat.withheldVat',
      titleTr: `Tevkif Edilen KDV (${parsed.fraction})`,
      titleEn: `Withheld VAT (${parsed.fraction})`,
      amount: withheldVat,
      formula: `${totalVat.toFixed(2)} × (${parsed.numerator} ÷ ${parsed.denominator})`,
      legalBasis: `${legalRef} - Alıcı tarafından 2 No.lu KDV Beyannamesi ile vergi dairesine ödenir`,
    },
    {
      labelKey: 'tevkifat.invoicedVat',
      titleTr: `Tahsil Edilecek KDV`,
      titleEn: 'Invoiced / Collectible VAT',
      amount: invoicedVat,
      formula: `${totalVat.toFixed(2)} - ${withheldVat.toFixed(2)}`,
      legalBasis: 'Satıcı tarafından 1 No.lu KDV Beyannamesinde beyan edilir ve faturada tahsil edilir',
    },
    {
      labelKey: 'tevkifat.payableAmount',
      titleTr: 'Ödenecek Tutar (Fatura Genel Toplamı)',
      titleEn: 'Total Payable Invoiced Amount',
      amount: payableAmount,
      formula: `${netAmount.toFixed(2)} + ${invoicedVat.toFixed(2)}`,
      legalBasis: 'Alıcının satıcıya doğrudan ödemekle yükümlü olduğu toplam tutar',
    },
    {
      labelKey: 'tevkifat.grossAmount',
      titleTr: 'KDV Dahil Toplam İşlem Tutarı',
      titleEn: 'Total Gross Transaction Value',
      amount: grossAmount,
      formula: `${netAmount.toFixed(2)} + ${totalVat.toFixed(2)}`,
      legalBasis: 'İşlemin KDV dahil toplam yasal ekonomik büyüklüğü',
    },
  ];

  return {
    netAmount,
    vatRate,
    fraction: parsed.fraction,
    fractionRatio: ratio,
    totalVat,
    withheldVat,
    invoicedVat,
    payableAmount,
    grossAmount,
    buyerLiability: withheldVat,
    sellerReceivable: payableAmount,
    category,
    breakdown,
    legalReference: legalRef,
  };
}

/**
 * Calculates net, total KDV, and withholding breakdown from a known Gross amount (KDV dahil tutar).
 */
export function calculateTevkifatFromGross(
  grossAmount: number,
  fraction: TevkifatFraction | string = '5/10',
  vatRate = 20,
): TevkifatCalculationResult {
  const safeGross = Math.max(0, grossAmount || 0);
  const divisor = 1 + vatRate / 100;
  const netAmount = vatRate > 0 ? round2(safeGross / divisor) : round2(safeGross);

  return calculateTevkifat({
    netAmount,
    vatRate,
    fraction,
  });
}
