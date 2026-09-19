import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToast() {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const handleThemeChange = (event: Event) => {
      const nextTheme = (event as CustomEvent<'light' | 'dark'>).detail;
      setMode(nextTheme);
      setShow(true);
      window.setTimeout(() => setShow(false), 1800);
    };

    window.addEventListener('vypax-theme-change', handleThemeChange);
    return () => window.removeEventListener('vypax-theme-change', handleThemeChange);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="pointer-events-none fixed top-28 right-6 z-[80] sm:top-32"
        >
          <div className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 shadow-card">
            {mode === 'dark' ? (
              <Moon className="h-5 w-5 text-brand-cyan" />
            ) : (
              <Sun className="h-5 w-5 text-brand-blue" />
            )}
            <span className="text-sm font-semibold text-navy-900 dark:text-white">
              {mode === 'dark' ? 'Dark mode on' : 'Light mode on'}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}