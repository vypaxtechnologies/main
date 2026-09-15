import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { reviews } from '@/data/reviews';
import { companyConfig } from '@/data/company';

export default function ReviewSlider() {
  const [idx, setIdx] = useState(0);
  const current = reviews[idx];
  const next = () => setIdx((i) => (i + 1) % reviews.length);
  const prev = () => setIdx((i) => (i - 1 + reviews.length) % reviews.length);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative overflow-hidden rounded-card border border-[var(--border)] bg-[var(--card)] p-8 shadow-card md:p-12">
        <Quote className="absolute right-6 top-6 h-12 w-12 text-brand-blue/10 dark:text-brand-cyan/10" />
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {current.isPlaceholder && (
              <span className="mb-4 inline-block rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 dark:border-amber-700 dark:bg-amber-950/30 dark:text-amber-400">
                Placeholder — replace with a genuine review
              </span>
            )}
            <div className="mb-4 flex gap-1">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-lg leading-relaxed text-navy-900 dark:text-white">
              "{current.text}"
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient text-sm font-semibold text-white">
                {current.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-900 dark:text-white">{current.name}</p>
                <p className="text-xs text-[var(--text-muted)]">{current.company}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-navy-700 transition-colors hover:border-brand-blue hover:text-brand-blue dark:text-slate-300 dark:hover:text-brand-cyan"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-navy-700 transition-colors hover:border-brand-blue hover:text-brand-blue dark:text-slate-300 dark:hover:text-brand-cyan"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="flex gap-1.5">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === idx ? 'w-6 bg-brand-gradient' : 'w-2 bg-[var(--border)]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <a
          href={`https://www.google.com/search?q=${encodeURIComponent(companyConfig.name + ' reviews')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          View Our Google Reviews
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
