import { Star } from 'lucide-react';
import { reviews } from '@/data/reviews';

export default function ReviewSlider() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review) => (
        <article key={review.id} className="flex h-full flex-col rounded-card border border-[var(--border)] bg-[var(--card)] p-6 shadow-card">
          <div className="flex items-center gap-1 text-amber-500" aria-label={`${review.rating} out of 5 stars`}>
            {Array.from({ length: 5 }, (_, index) => {
              const fillPercentage = Math.max(0, Math.min(1, review.rating - index)) * 100;
              return (
                <span key={index} className="relative h-4 w-4">
                  <Star className="absolute inset-0 h-4 w-4 fill-transparent" />
                  <span className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
                    <Star className="h-4 w-4 max-w-none fill-current" />
                  </span>
                </span>
              );
            })}
          </div>
          <p className="mt-5 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">&ldquo;{review.text}&rdquo;</p>
          <div className="mt-6 flex items-center gap-3 border-t border-[var(--border)] pt-4">
            {review.photo ? (
              <img src={review.photo} alt={review.name} className="h-10 w-10 rounded-full object-cover" />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-sm font-semibold text-white" aria-hidden="true">
                {review.name.split(' ').map((part) => part[0]).join('')}
              </div>
            )}
            <p className="text-sm font-semibold text-navy-900 dark:text-white">{review.name}</p>
          </div>
        </article>
      ))}
    </div>
  );
}