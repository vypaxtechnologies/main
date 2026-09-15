import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Cloud, BarChart3, Smartphone, Database, Zap } from 'lucide-react';

const floatingCards = [
  { icon: Cloud, label: 'Cloud', className: 'left-[-1rem] top-8', delay: 0 },
  { icon: BarChart3, label: 'Analytics', className: 'right-[-1rem] top-20', delay: 0.5 },
  { icon: Smartphone, label: 'Mobile', className: 'left-[2rem] bottom-12', delay: 1 },
  { icon: Database, label: 'Database', className: 'right-[3rem] bottom-8', delay: 1.5 },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="blob left-[-10%] top-[-5%] h-96 w-96 bg-brand-blue" />
      <div className="blob right-[-5%] top-[20%] h-80 w-80 bg-brand-purple" />

      <div className="container-x relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              Innovation / Technology / Growth
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-navy-900 dark:text-white sm:text-5xl md:text-6xl"
            >
              Grow Your Business With{' '}
              <span className="gradient-text">Technology</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-2xl font-semibold text-navy-800 dark:text-slate-200"
            >
              Build <span className="gradient-text-cyan">beyond limit</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-5 max-w-lg text-base leading-relaxed text-[var(--text-muted)] sm:text-lg"
            >
              We create innovative digital solutions that empower businesses, solve real problems, and help brands achieve sustainable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Link to="/contact" className="btn-primary">
                Get a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3"
            >
              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <Sparkles className="h-4 w-4 text-brand-blue dark:text-brand-cyan" />
                Your Technology & Business Growth Partner
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              <div className="absolute inset-0 rounded-card bg-brand-gradient opacity-10 blur-2xl" />
              <div className="relative overflow-hidden rounded-card border border-[var(--border)] bg-[var(--card)] p-6 shadow-card">
                <div className="flex items-center gap-2 border-b border-[var(--border)] pb-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <span className="ml-2 text-xs text-[var(--text-muted)]">vypax-dashboard</span>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-[var(--bg-subtle)] p-3">
                    <div>
                      <p className="text-xs text-[var(--text-muted)]">Business Growth</p>
                      <p className="text-lg font-bold text-navy-900 dark:text-white">+247%</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-brand-blue dark:text-brand-cyan" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-[var(--bg-subtle)] p-3">
                      <p className="text-xs text-[var(--text-muted)]">Projects</p>
                      <p className="text-lg font-bold text-navy-900 dark:text-white">50+</p>
                    </div>
                    <div className="rounded-xl bg-[var(--bg-subtle)] p-3">
                      <p className="text-xs text-[var(--text-muted)]">Clients</p>
                      <p className="text-lg font-bold text-navy-900 dark:text-white">30+</p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-brand-gradient p-4 text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold">Build beyond limit</span>
                      <Zap className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>

              {floatingCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.label}
                    className={`absolute ${card.className} flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-2 shadow-card`}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: card.delay }}
                  >
                    <Icon className="h-4 w-4 text-brand-blue dark:text-brand-cyan" />
                    <span className="text-xs font-medium text-navy-900 dark:text-white">{card.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
