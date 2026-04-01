/** Site header with navigation, theme toggle, language switcher, and command palette trigger */

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useMemo } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  onOpenCommandPalette: () => void;
}

export default function Header({ onOpenCommandPalette }: HeaderProps) {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useI18n();

  /** Build nav links from translations */
  const navLinks = useMemo(() => [
    { href: '/', label: t.nav.home },
    { href: '/about/', label: t.nav.about },
    { href: '/projects/', label: t.nav.projects },
    { href: '/blog/', label: t.nav.blog },
    { href: '/contact/', label: t.nav.contact },
  ], [t]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="group flex items-center select-none" aria-label="NTQ Home">
          <span className="font-semibold tracking-[0.15em] text-xl leading-none text-foreground transition-opacity group-hover:opacity-80">
            NT
            <span className="relative inline-block">
              Q
              {/* Cyan tail — replicates the slash extending outside bottom-right of Q */}
              <span
                className="absolute"
                style={{
                  bottom: '-0.04em',
                  right: '-0.04em',
                  width: '0.4em',
                  height: '0.12em',
                  background: 'linear-gradient(to right, #00D4FF, #00BFFF)',
                  borderRadius: '0',
                  transform: 'rotate(-128deg) skewX(-38deg)',
                  transformOrigin: 'top left',
                  boxShadow: '0 0 8px 3px #00D4FFaa, 0 0 16px 6px #00D4FF44',
                }}
              />
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              router.pathname === link.href ||
              (link.href !== '/' && router.pathname.startsWith(link.href.replace(/\/$/, '')));
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  prefetch={link.href === '/blog/'}
                  className={`relative px-3 py-2 text-sm rounded-lg transition-colors ${
                    isActive
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-accent -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-border"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => {
                const isActive =
                  router.pathname === link.href ||
                  (link.href !== '/' && router.pathname.startsWith(link.href.replace(/\/$/, '')));
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                        isActive
                          ? 'text-foreground bg-accent'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
