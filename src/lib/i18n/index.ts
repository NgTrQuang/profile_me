/** i18n context — provides language switching across the entire app */

import { createContext, useContext } from 'react';
import vi, { type Translations } from './vi';
import en from './en';

export type Locale = 'vi' | 'en';

export const translations: Record<Locale, Translations> = { vi, en };

export interface I18nContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

export const I18nContext = createContext<I18nContextType>({
  locale: 'vi',
  t: vi,
  setLocale: () => {},
});

/** Hook to access translations and locale switching */
export function useI18n(): I18nContextType {
  return useContext(I18nContext);
}

export { vi, en };
export type { Translations };
