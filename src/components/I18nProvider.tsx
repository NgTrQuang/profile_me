/** I18n Provider — wraps the app and persists language choice in localStorage */

import { useState, useEffect, useCallback, ReactNode } from 'react';
import { I18nContext, translations, type Locale } from '@/lib/i18n';

const STORAGE_KEY = 'preferred-locale';

interface I18nProviderProps {
  children: ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>('vi');

  /* Load saved locale on mount */
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && (saved === 'vi' || saved === 'en')) {
      setLocaleState(saved);
    }
  }, []);

  /* Update localStorage and html lang attribute when locale changes */
  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  /* Set initial html lang */
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}
