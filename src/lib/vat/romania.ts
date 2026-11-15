import {
  RomanianVatSchedule,
  getRomanianVatRates,
} from '../../rules/ro/history';
import { VatBreakdownLine } from './index';

export type RomanianVatRateTier = 'standard' | 'reduced' | 'superReduced' | 'zero' | 'custom';

export interface RomanianVatInput {
  /**
   * Amount to calculate from
   */
  amount: number;

  /**
   * 'add' for Net -> Gross; 'remove' for Gross -> Net. Defaults to 'add'.
   */
  type?: 'add' | 'remove';

  /**
   * Date of supply / invoice in YYYY-MM-DD or ISO string.
   * Defaults to '2026-11-14'.
   */
  date?: string;

  /**
   * Rate tier to apply. Defaults to 'standard'.
   */
  rateTier?: RomanianVatRateTier;

  /**
   * Specific custom rate if rateTier is 'custom'.
   */
  customRate?: number;
}

export interface RomanianVatResult {
  inputAmount: number;
  netAmount: number;
  vatAmount: number;
  grossAmount: number;
  appliedRate: number;
  rateTier: RomanianVatRateTier;
  type: 'add' | 'remove';
  date: string;
  isPostAug2025: boolean;
  schedule: RomanianVatSchedule;
  breakdown: VatBreakdownLine[];
  legalReference: string;
}

function round2(val: number): number {
  return Math.round((val + Number.EPSILON) * 100) / 100;
}

/**
 * Date-aware Romanian VAT calculator with historical statutory rate lookup.
 * Automatically switches between pre-August 2025 rules (19% standard, 9%/5% reduced)
 * and post-August 2025 rules under Law 141/2025 (21% standard, 11% unified reduced).
 */
export function calculateRomanianVat(input: RomanianVatInput): RomanianVatResult {
  const calculationType = input.type || 'add';
  const date = input.date || '2026-11-14';
  const schedule = getRomanianVatRates(date);
  const rateTier = input.rateTier || 'standard';

  let appliedRate: number;

  if (rateTier === 'custom' && input.customRate !== undefined) {
    appliedRate = Math.max(0, input.customRate);
  } else if (rateTier === 'zero') {
    appliedRate = schedule.zeroRate;
  } else if (rateTier === 'superReduced') {
    if (schedule.superReducedRate !== undefined) {
      appliedRate = schedule.superReducedRate;
    } else {
      // Under post-Aug 2025 reform, super-reduced 5% was eliminated; essential items moved to 11% unified
      appliedRate = schedule.reducedRates[0] ?? 11;
    }
  } else if (rateTier === 'reduced') {
    appliedRate = schedule.reducedRates[0] ?? 9;
  } else {
    // standard
    appliedRate = schedule.standardRate;
  }

  const safeAmount = Math.max(0, input.amount || 0);

  if (calculationType === 'add') {
    const netAmount = round2(safeAmount);
    const vatAmount = round2(netAmount * (appliedRate / 100));
    const grossAmount = round2(netAmount + vatAmount);

    const breakdown: VatBreakdownLine[] = [
      {
        labelKey: 'tool.netAmount',
        amount: netAmount,
        formula: 'Baza de impozitare (Net Consideration)',
        legalBasis: `${schedule.legalReference} - Baza de impozitare pentru TVA`,
      },
      {
        labelKey: 'tool.vatAmount',
        amount: vatAmount,
        formula: `${netAmount.toFixed(2)} × (${appliedRate}% ÷ 100)`,
        legalBasis: `${schedule.legalReference} - Cota de TVA aplicabilă (${appliedRate}%)`,
      },
      {
        labelKey: 'tool.grossAmount',
        amount: grossAmount,
        formula: `${netAmount.toFixed(2)} + ${vatAmount.toFixed(2)}`,
        legalBasis: 'Total de plată cu TVA inclus (Factură fiscală)',
      },
    ];

    return {
      inputAmount: safeAmount,
      netAmount,
      vatAmount,
      grossAmount,
      appliedRate,
      rateTier,
      type: 'add',
      date,
      isPostAug2025: schedule.isPostAug2025,
      schedule,
      breakdown,
      legalReference: schedule.legalReference,
    };
  } else {
    // 'remove': Gross -> Net
    const grossAmount = round2(safeAmount);
    const divisor = 1 + appliedRate / 100;
    const netAmount = appliedRate > 0 ? round2(grossAmount / divisor) : grossAmount;
    const vatAmount = round2(grossAmount - netAmount);

    const breakdown: VatBreakdownLine[] = [
      {
        labelKey: 'tool.grossAmount',
        amount: grossAmount,
        formula: 'Valoare totală cu TVA (Gross Price)',
        legalBasis: 'Preț total facturat către beneficiar',
      },
      {
        labelKey: 'tool.vatAmount',
        amount: vatAmount,
        formula: `${grossAmount.toFixed(2)} - (${grossAmount.toFixed(2)} ÷ ${divisor.toFixed(4)})`,
        legalBasis: `${schedule.legalReference} - TVA dedus/inclus la cota de ${appliedRate}%`,
      },
      {
        labelKey: 'tool.netAmount',
        amount: netAmount,
        formula: `${grossAmount.toFixed(2)} ÷ (1 + ${appliedRate}% ÷ 100)`,
        legalBasis: `${schedule.legalReference} - Baza netă extrasă din total`,
      },
    ];

    return {
      inputAmount: safeAmount,
      netAmount,
      vatAmount,
      grossAmount,
      appliedRate,
      rateTier,
      type: 'remove',
      date,
      isPostAug2025: schedule.isPostAug2025,
      schedule,
      breakdown,
      legalReference: schedule.legalReference,
    };
  }
}
