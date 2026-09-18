import { ArrowUpRight } from 'lucide-react';
import { reviews } from '@/data/reviews';

export default function ReviewSlider() {
  return (
    <div className="group overflow-hidden">
      <div className="story-track flex w-max gap-5 py-2 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
        {[...reviews, ...reviews].map((review, index) => (
          <article
            key={`${review.id}-${index}`}
            tabIndex={0}
            className="flex w-[min(82vw,360px)] shrink-0 flex-col rounded-[26px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-soft outline-none transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1 focus:ring-2 focus:ring-brand-blue/40"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-blue dark:text-brand-cyan">{review.category}</p>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-brand-blue dark:text-brand-cyan" />
            </div>
            <p className="mt-6 flex-1 text-base leading-relaxed text-navy-800 dark:text-slate-200">&ldquo;{review.text}&rdquo;</p>
            <div className="mt-6 border-t border-[var(--border)] pt-4">
              <p className="text-sm font-semibold text-navy-900 dark:text-white">{review.name}</p>
              <p className="mt-1 text-xs text-[var(--text-muted)]">{review.outcome}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}