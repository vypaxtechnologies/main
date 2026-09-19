import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';

export default function ServiceSlider() {
  return (
    <div className="group overflow-hidden">
      <div className="service-track flex w-max gap-5 py-2 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
        {[...services, ...services].map((service, index) => {
          const Icon = service.icon;
          return (
            <article
              key={`${service.slug}-${index}`}
              tabIndex={0}
              className="flex w-[min(82vw,360px)] shrink-0 flex-col rounded-[26px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-soft outline-none transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1 focus:ring-2 focus:ring-brand-blue/40"
            >
              <div className="icon-tile h-12 w-12">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                {service.description}
              </p>
              <Link
                to={`/services/${service.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue transition-colors hover:gap-2 dark:text-brand-cyan"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}