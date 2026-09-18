import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { companyConfig } from '@/data/company';

export default function FloatingContactButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const waLink = `https://wa.me/${companyConfig.whatsappNumber}`;

  return (
    <div className="pointer-events-none fixed bottom-6 right-[5.5rem] z-40 flex items-end">
      <div className="pointer-events-auto relative">
        <button
          onClick={() => window.open(waLink, '_blank', 'noopener,noreferrer')}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label="Chat with us on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg transition-transform hover:scale-110 animate-pulse-soft"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-xs font-medium text-navy-900 shadow-card dark:text-white"
            >
              Chat with us
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
