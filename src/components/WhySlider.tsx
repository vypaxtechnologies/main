import { whyVypax } from '@/data/whyVypax';

export default function WhySlider() {
  return (
    <div className="group overflow-hidden">
      <div className="why-track flex w-max gap-5 py-2 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
        {[...whyVypax, ...whyVypax].map((item, index) => {
          const Icon = item.icon;
          return (
            <article
              key={`${item.title}-${index}`}
              tabIndex={0}
              className="flex w-[min(82vw,360px)] shrink-0 flex-col rounded-[26px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-soft outline-none transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1 focus:ring-2 focus:ring-brand-blue/40"
            >
              <div className="flex items-center gap-3">
                <div className="icon-tile h-11 w-11">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-2xl font-bold text-[var(--border)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-navy-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}