/** Main layout wrapper — includes header, footer, command palette, and page transitions */

import { useState, useEffect, useCallback, ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommandPalette from '@/components/CommandPalette';
import PageTransition from '@/components/PageTransition';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [cmdOpen, setCmdOpen] = useState(false);
  const router = useRouter();

  /* Global keyboard shortcut: Ctrl/Cmd + K */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setCmdOpen(false);
      }
    },
    []
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header onOpenCommandPalette={() => setCmdOpen(true)} />
      <AnimatePresence mode="wait">
        <PageTransition key={router.pathname}>
          {children}
        </PageTransition>
      </AnimatePresence>
      <Footer />
      <CommandPalette open={cmdOpen} onOpenChange={setCmdOpen} />
    </div>
  );
}
