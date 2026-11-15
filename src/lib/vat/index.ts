export type VatCalculationType = 'add' | 'remove';

export interface VatCalculationInput {
  amount: number;
  rate: number;
  type: VatCalculationType;
}

export interface VatBreakdownLine {
  labelKey: string;
  amount: number;
  formula: string;
  legalBasis: string;
}

export interface VatCalculationResult {
  netAmount: number;
  vatAmount: number;
  grossAmount: number;
  vatRate: number;
  type: VatCalculationType;
  effectiveMultiplier: number;
  breakdown: VatBreakdownLine[];
}

function round2(val: number): number {
  return Math.round((val + Number.EPSILON) * 100) / 100;
}

/**
 * Pure calculation function for adding or removing VAT
 */
export function calculateVat(input: VatCalculationInput): VatCalculationResult {
  const { amount, rate, type } = input;
  const safeAmount = Math.max(0, amount || 0);
  const safeRate = Math.max(0, rate || 0);

  if (type === 'add') {
    const netAmount = round2(safeAmount);
    const vatAmount = round2(netAmount * (safeRate / 100));
    const grossAmount = round2(netAmount + vatAmount);
    const multiplier = 1 + safeRate / 100;

    return {
      netAmount,
      vatAmount,
      grossAmount,
      vatRate: safeRate,
      type: 'add',
      effectiveMultiplier: round2(multiplier),
      breakdown: [
        {
          labelKey: 'tool.netAmount',
          amount: netAmount,
          formula: 'Base Net Input',
          legalBasis: 'Invoiced Net Consideration',
        },
        {
          labelKey: 'tool.vatAmount',
          amount: vatAmount,
          formula: `${netAmount.toFixed(2)} × (${safeRate}% ÷ 100)`,
          legalBasis: 'Standard Statutory Value Added Tax',
        },
        {
          labelKey: 'tool.grossAmount',
          amount: grossAmount,
          formula: `${netAmount.toFixed(2)} + ${vatAmount.toFixed(2)}`,
          legalBasis: 'Total Gross Invoiced Amount',
        },
      ],
    };
  } else {
    // Gross to Net (Reverse / Remove VAT)
    const grossAmount = round2(safeAmount);
    const divisor = 1 + safeRate / 100;
    const netAmount = safeRate > 0 ? round2(grossAmount / divisor) : grossAmount;
    const vatAmount = round2(grossAmount - netAmount);

    return {
      netAmount,
      vatAmount,
      grossAmount,
      vatRate: safeRate,
      type: 'remove',
      effectiveMultiplier: divisor > 0 ? round2(1 / divisor) : 1,
      breakdown: [
        {
          labelKey: 'tool.grossAmount',
          amount: grossAmount,
          formula: 'Gross Invoiced Input (Incl. VAT)',
          legalBasis: 'Total Gross Price Paid',
        },
        {
          labelKey: 'tool.vatAmount',
          amount: vatAmount,
          formula: `${grossAmount.toFixed(2)} - (${grossAmount.toFixed(2)} ÷ ${divisor.toFixed(4)})`,
          legalBasis: 'Extracted Embedded VAT',
        },
        {
          labelKey: 'tool.netAmount',
          amount: netAmount,
          formula: `${grossAmount.toFixed(2)} ÷ (1 + ${safeRate}% ÷ 100)`,
          legalBasis: 'Pre-Tax Net Base Amount',
        },
      ],
    };
  }
}

export * from './tevkifat';
export * from './romania';
export * from './eu-hub';

