import { RegionCode, RegionRules, RuleValue } from './types';
import { rulesUK2026 } from './uk/2026';
import { rulesDE2026 } from './de/2026';
import { rulesPL2026 } from './pl/2026';
import { rulesTR2026 } from './tr/2026';
import { rulesRO2026 } from './ro/2026';
import { rulesAU2026 } from './au/2026';
import { rulesCA2026 } from './ca/2026';
import { rulesEU2026 } from './eu/2026';

const rulesByRegion: Record<RegionCode, Record<number, RegionRules>> = {
  uk: { 2026: rulesUK2026 },
  de: { 2026: rulesDE2026 },
  pl: { 2026: rulesPL2026 },
  tr: { 2026: rulesTR2026 },
  ro: { 2026: rulesRO2026 },
  au: { 2026: rulesAU2026 },
  ca: { 2026: rulesCA2026 },
  eu: { 2026: rulesEU2026 },
};

export function isRuleValidOnDate<T>(rule: RuleValue<T>, checkDate: string): boolean {
  if (rule.validFrom > checkDate) return false;
  if (rule.validTo && rule.validTo < checkDate) return false;
  return true;
}

export function getRules(region: RegionCode, dateStr?: string): RegionRules {
  const date = dateStr || '2026-11-14';
  const year = parseInt(date.slice(0, 4), 10);
  const regionTable = rulesByRegion[region] || rulesByRegion.eu;
  const rules = regionTable[year] || regionTable[2026];

  return rules;
}

export * from './types';
export * from './fuel/prices';
