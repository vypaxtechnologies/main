import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Chatbot from '@/components/Chatbot';
import FloatingContactButton from '@/components/FloatingContactButton';
import SearchFloatingButton from '@/components/SearchFloatingButton';
import ThemeToast from '@/components/ThemeToast';

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <ThemeToast />
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