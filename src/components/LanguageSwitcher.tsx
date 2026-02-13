/** Language switcher button — toggles between Vietnamese and English */

import { useI18n } from '@/lib/i18n';
import { Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LanguageSwitcher() {
  const { locale, t, setLocale } = useI18n();

  const toggle = () => {
    setLocale(locale === 'vi' ? 'en' : 'vi');
  };

  return (
    <button
      onClick={toggle}
      className="relative w-9 h-9 flex items-center justify-center rounded-lg border border-border bg-background hover:bg-accent transition-colors"
      aria-label={t.lang.switchTo}
      title={t.lang.switchTo}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={locale}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.15 }}
          className="text-[10px] font-bold"
        >
          {t.lang.label}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
