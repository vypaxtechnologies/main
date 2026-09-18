import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Eye, Heart } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { aboutValues } from '@/data/whyVypax';

export default function AboutPreview() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="Who We Are"
              subtitle="Vypax Technologies is a technology and digital growth company helping businesses build better digital products, improve their online presence, and create scalable technology systems."
              center={false}
            />

            <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue dark:text-brand-cyan">What We Believe</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                Technology should solve a business problem, not simply exist for the sake of technology.
              </p>
            </div>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="icon-tile h-10 w-10 shrink-0">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900 dark:text-white">Our Mission</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">
                    To empower businesses with technology that drives real, measurable growth.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="icon-tile h-10 w-10 shrink-0">
                  <Eye className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900 dark:text-white">Our Vision</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">
                    To be a trusted technology partner that helps brands build beyond their limits.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="icon-tile h-10 w-10 shrink-0">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900 dark:text-white">Our Values</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {aboutValues.map((v) => (
                      <span key={v.title} className="rounded-full border border-[var(--border)] bg-[var(--bg-subtle)] px-3 py-1 text-xs font-medium text-navy-700 dark:text-slate-300">
                        {v.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link to="/about" className="btn-secondary mt-8">
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-card bg-brand-gradient opacity-10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-8 shadow-card">
              <div className="grid grid-cols-2 gap-4">
                {aboutValues.map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)] p-4"
                  >
                    <p className="text-sm font-semibold text-navy-900 dark:text-white">{v.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">{v.description}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-brand-gradient p-5 text-white">
                <p className="text-lg font-bold">Build beyond limit</p>
                <p className="mt-1 text-sm text-slate-200">Your Technology & Business Growth Partner</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
