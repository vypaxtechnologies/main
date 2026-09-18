import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { industries } from '@/data/siteContent';

export default function SolutionsPage() {
  useSEO({
    title: 'Solutions by Business Type | Vypax Technologies',
    description: 'Explore practical digital, software, and growth solutions for startups, healthcare, professional services, education, real estate, and B2B teams.',
  });

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40">
        <div className="container-x">
          <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Solutions' }]} />
          <SectionHeading
            eyebrow="Solutions"
            title="Technology shaped around the way your business works"
            subtitle="Clear digital systems, growth foundations, and software experiences for teams at different stages of their journey."
            center={false}
          />
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-subtle)]">
        <div className="container-x">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <article key={industry.title} className="group rounded-[26px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1">
                  <div className="icon-tile h-12 w-12">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue dark:text-brand-cyan">{industry.subtitle}</p>
                  <h2 className="mt-3 text-xl font-bold text-navy-900 dark:text-white">{industry.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{industry.description}</p>
                  <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue dark:text-brand-cyan">
                    Discuss your goals
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
