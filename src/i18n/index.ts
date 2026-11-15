import { SupportedLang } from '@/config/pages';
import { TranslationDictionary } from './types';
import { en } from './en';
import { de } from './de';
import { pl } from './pl';
import { tr } from './tr';
import { ro } from './ro';
import { fr } from './fr';
import { es } from './es';
import { it } from './it';
import { nl } from './nl';

export const dictionaries: Record<SupportedLang, TranslationDictionary> = {
  en,
  de,
  pl,
  tr,
  ro,
  fr,
  es,
  it,
  nl,
};

export function getDictionary(lang: SupportedLang): TranslationDictionary {
  return dictionaries[lang] || dictionaries.en;
}

export type { TranslationDictionary };
