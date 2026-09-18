import { useSEO } from '@/hooks/useSEO';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { portfolioProjects } from '@/data/siteContent';

export default function ProjectsPage() {
  useSEO({
    title: 'Projects & Case Studies | Vypax Technologies',
    description: 'Explore selected Vypax Technologies projects, case studies, technologies used, and measurable business impact.',
  });

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40">
        <div className="container-x">
          <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Projects' }]} />
          <SectionHeading
            eyebrow="Case Studies"
            title="Selected work that moves businesses forward"
            subtitle="A snapshot of projects designed to improve performance, trust, and digital growth."
            center={false}
          />
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-subtle)]">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-2">
            {portfolioProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--card)] shadow-soft"
              >
                <div className={`h-40 bg-gradient-to-br ${project.accent}`} />
                <div className="p-6 md:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue dark:text-brand-cyan">{project.category}</p>
                  <h3 className="mt-4 text-2xl font-bold text-navy-900 dark:text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{project.summary}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="rounded-full border border-[var(--border)] bg-[var(--bg-subtle)] px-3 py-1 text-xs font-medium text-navy-700 dark:text-slate-300">
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">Outcome</p>
                      <p className="mt-2 text-base font-semibold text-navy-900 dark:text-white">{project.result}</p>
                    </div>
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">Impact</p>
                      <p className="mt-2 text-sm text-[var(--text-muted)]">{project.impact}</p>
                    </div>
                  </div>

                  <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-purple dark:text-brand-cyan dark:hover:text-brand-blue">
                    Discuss a similar challenge
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
