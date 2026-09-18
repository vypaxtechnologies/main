import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Chatbot from '@/components/Chatbot';
import FloatingContactButton from '@/components/FloatingContactButton';
import SearchFloatingButton from '@/components/SearchFloatingButton';

import { useTheme } from '@/hooks/useTheme';

export default function MainLayout() {
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const [notice, setNotice] = useState<string | null>(null);
  const clickCount = useRef(0);
  const clickTimer = useRef<number | undefined>(undefined);

  const handlePageClick = () => {
    clickCount.current += 1;
    window.clearTimeout(clickTimer.current);
    clickTimer.current = window.setTimeout(() => { clickCount.current = 0; }, 500);

    if (clickCount.current === 3) {
      clickCount.current = 0;
      const nextTheme = theme === 'light' ? 'dark' : 'light';
      toggle();
      setNotice(`Switching ${nextTheme === 'dark' ? 'Dark' : 'Light'} mode`);
      window.setTimeout(() => setNotice(null), 1500);
    }
  };

  return (
    <div className="flex min-h-screen flex-col" onClick={handlePageClick}>
      <AnimatePresence>
        {notice && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.96 }}
            className="pointer-events-none fixed left-1/2 top-24 z-[70] -translate-x-1/2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-navy-900 shadow-card dark:text-white"
          >
            {notice}
          </motion.div>
        )}
      </AnimatePresence>
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <SearchFloatingButton />
      <FloatingContactButton />
      <Chatbot />
    </div>
  );
}
