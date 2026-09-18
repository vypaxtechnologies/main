import { ArrowUpRight, BriefcaseBusiness, CircleDollarSign, Compass, Newspaper, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import { companyConfig } from '@/data/company';
import TiltCard from '@/components/TiltCard';

const icons = [Compass, BriefcaseBusiness, CircleDollarSign, Newspaper, Users];

export default function ExploreSection() {
  return (
    <section className="section-pad bg-[var(--bg-subtle)]">
      <div className="container-x">
        <SectionHeading
          eyebrow="Keep Exploring"
          title="More ways to work with Vypax"
          subtitle="Go deeper into our capabilities, experience, approach, and the people behind the work."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {companyConfig.exploreNav.map((item, index) => {
            const Icon = icons[index];
              return (
              <TiltCard key={item.path} className="rounded-[24px]">
              <Link
                to={item.path}
                className="group flex min-h-44 flex-col justify-between rounded-[24px] border border-[var(--border)] bg-[var(--card)] p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-brand-cyan/10 dark:text-brand-cyan">
                    <Icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-[var(--text-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-navy-900 dark:text-white">{item.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{item.description}</p>
                </div>
              </Link>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}