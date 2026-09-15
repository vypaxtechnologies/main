import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import type { FAQItem } from '@/data/faq';

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-card border border-[var(--border)] bg-[var(--card)]"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            aria-expanded={open === i}
          >
            <span className="text-sm font-semibold text-navy-900 dark:text-white sm:text-base">
              {item.q}
            </span>
            <Plus
              className={`h-5 w-5 shrink-0 text-brand-blue transition-transform duration-300 dark:text-brand-cyan ${
                open === i ? 'rotate-45' : ''
              }`}
            />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-4 text-sm leading-relaxed text-[var(--text-muted)]">
                  {item.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
