import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, Heart, Coffee, Zap } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { careers } from '@/data/faq';

const culture = [
  { icon: Zap, title: 'Innovation First', desc: 'Work with modern tools and technologies.' },
  { icon: Heart, title: 'Meaningful Impact', desc: 'Projects that help real businesses grow.' },
  { icon: Coffee, title: 'Flexible Culture', desc: 'Remote-friendly and results-focused.' },
];

export default function CareersSection() {
  return (
    <section className="section-pad bg-[var(--bg-subtle)]">
      <div className="container-x">
        <SectionHeading
          eyebrow="Careers"
          title="Build Your Future With Us"
          subtitle="We're building a team that loves technology, creativity and meaningful business impact."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {culture.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-card border border-[var(--border)] bg-[var(--card)] p-6 text-center shadow-card"
              >
                <div className="icon-tile mx-auto h-12 w-12">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 space-y-3">
          {careers.map((role) => (
            <div
              key={role.id}
              className="flex flex-col items-start justify-between gap-4 rounded-card border border-[var(--border)] bg-[var(--card)] p-5 shadow-card sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-subtle)]">
                  <Briefcase className="h-5 w-5 text-brand-blue dark:text-brand-cyan" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900 dark:text-white">{role.title}</h3>
                  <p className="mt-0.5 text-xs text-[var(--text-muted)]">{role.type} · {role.location}</p>
                </div>
              </div>
              <Link to="/jobs" className="btn-primary text-xs">
                Apply Now
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}