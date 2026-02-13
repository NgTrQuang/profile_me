/** Command palette (⌘K) for quick navigation */

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Command } from 'cmdk';
import { Home, User, FolderOpen, BookOpen, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  /* Close on route change */
  useEffect(() => {
    const handleRouteChange = () => onOpenChange(false);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router, onOpenChange]);

  const navigate = (href: string) => {
    router.push(href);
    onOpenChange(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[101] flex items-start justify-center pt-[20vh]"
          >
            <Command
              className="w-full max-w-lg rounded-xl border border-border bg-background shadow-2xl overflow-hidden"
              label="Command palette"
            >
              <Command.Input
                placeholder="Type a command or search..."
                className="w-full px-4 py-3 text-sm bg-transparent border-b border-border outline-none placeholder:text-muted-foreground"
              />
              <Command.List className="max-h-72 overflow-y-auto p-2">
                <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                  No results found.
                </Command.Empty>

                <Command.Group heading="Navigation" className="text-xs text-muted-foreground px-2 py-1.5">
                  <Command.Item
                    onSelect={() => navigate('/')}
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer hover:bg-accent data-[selected=true]:bg-accent"
                  >
                    <Home className="w-4 h-4" /> Home
                  </Command.Item>
                  <Command.Item
                    onSelect={() => navigate('/about/')}
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer hover:bg-accent data-[selected=true]:bg-accent"
                  >
                    <User className="w-4 h-4" /> About
                  </Command.Item>
                  <Command.Item
                    onSelect={() => navigate('/projects/')}
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer hover:bg-accent data-[selected=true]:bg-accent"
                  >
                    <FolderOpen className="w-4 h-4" /> Projects
                  </Command.Item>
                  <Command.Item
                    onSelect={() => navigate('/blog/')}
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer hover:bg-accent data-[selected=true]:bg-accent"
                  >
                    <BookOpen className="w-4 h-4" /> Blog
                  </Command.Item>
                  <Command.Item
                    onSelect={() => navigate('/contact/')}
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer hover:bg-accent data-[selected=true]:bg-accent"
                  >
                    <Mail className="w-4 h-4" /> Contact
                  </Command.Item>
                </Command.Group>

                <Command.Separator className="my-1 h-px bg-border" />

                <Command.Group heading="Theme" className="text-xs text-muted-foreground px-2 py-1.5">
                  <Command.Item
                    onSelect={() => { setTheme('light'); onOpenChange(false); }}
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer hover:bg-accent data-[selected=true]:bg-accent"
                  >
                    <Sun className="w-4 h-4" /> Light Mode
                  </Command.Item>
                  <Command.Item
                    onSelect={() => { setTheme('dark'); onOpenChange(false); }}
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer hover:bg-accent data-[selected=true]:bg-accent"
                  >
                    <Moon className="w-4 h-4" /> Dark Mode
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
