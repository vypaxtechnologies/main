import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap/gsap-core';
import { ArrowRight, Sparkles, Cloud, BarChart3, Smartphone, Database, Zap } from 'lucide-react';

const floatingCards = [
  { icon: Cloud, label: 'Cloud', className: 'left-[-1rem] top-8', delay: 0 },
  { icon: BarChart3, label: 'Analytics', className: 'right-[-1rem] top-20', delay: 0.5 },
  { icon: Smartphone, label: 'Mobile', className: 'left-[2rem] bottom-12', delay: 1 },
  { icon: Database, label: 'Database', className: 'right-[3rem] bottom-8', delay: 1.5 },
];

export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!visualRef.current) return;

    const context = gsap.context(() => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery.matches) return;

      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
      timeline
        .from('.hero-dashboard', { opacity: 0, y: 34, rotateX: 8, duration: 1.1 })
        .from('.hero-metric', { opacity: 0, y: 14, stagger: 0.12, duration: 0.5 }, '-=0.5')
        .from('.hero-orbit', { opacity: 0, scale: 0.7, duration: 0.8 }, '-=0.55')
        .from('.hero-scanline', { scaleX: 0, transformOrigin: 'left center', duration: 0.7 }, '-=0.45');

      gsap.to('.hero-orbit', {
        rotation: 360,
        duration: 24,
        repeat: -1,
        ease: 'none',
      });

      gsap.to('.hero-scanline', {
        y: 230,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.2,
      });
    }, visualRef);

    return () => context.revert();
  }, []);

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
              className="eyebrow inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-white/60 px-3 py-2 backdrop-blur-sm dark:bg-white/5"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Strategy • Design • Growth
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-navy-900 dark:text-white sm:text-5xl md:text-6xl"
            >
              Build a stronger digital presence{' '}
              <span className="gradient-text">that actually grows your business</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 max-w-lg text-base leading-relaxed text-[var(--text-muted)] sm:text-lg"
            >
              We blend strategy, design, and engineering into clear, human-centred digital experiences that help real businesses move forward with confidence.
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
              <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)]/80 px-3 py-2 text-sm text-[var(--text-muted)] shadow-soft backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-brand-blue dark:text-brand-cyan" />
                Your trusted partner for smarter digital growth
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div ref={visualRef} className="relative mx-auto max-w-md lg:max-w-lg">
              <div className="hero-orbit pointer-events-none absolute -inset-8 rounded-[36px] border border-brand-blue/20" />
              <div className="hero-orbit pointer-events-none absolute -inset-3 rounded-[32px] border border-brand-cyan/20 [transform:rotate(18deg)]" />
              <div className="absolute inset-0 rounded-card bg-brand-gradient opacity-10 blur-2xl" />
              <div className="hero-dashboard relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-card [transform-style:preserve-3d]">
                <div className="hero-scanline pointer-events-none absolute left-6 right-6 top-16 h-px bg-brand-cyan/70 shadow-glow" />
                <div className="flex items-center gap-2 border-b border-[var(--border)] pb-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-brand-cyan" />
                    <div className="h-3 w-3 rounded-full bg-brand-blue" />
                    <div className="h-3 w-3 rounded-full bg-navy-900" />
                  </div>
                  <span className="ml-2 text-xs text-[var(--text-muted)]">vypax-dashboard</span>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="hero-metric flex items-center justify-between rounded-xl bg-[var(--bg-subtle)] p-3">
                    <div>
                      <p className="text-xs text-[var(--text-muted)]">Project signal</p>
                      <p className="text-lg font-bold text-navy-900 dark:text-white">Clear</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-brand-blue dark:text-brand-cyan" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="hero-metric rounded-xl bg-[var(--bg-subtle)] p-3">
                      <p className="text-xs text-[var(--text-muted)]">Strategy</p>
                      <p className="text-lg font-bold text-navy-900 dark:text-white">Focused</p>
                    </div>
                    <div className="hero-metric rounded-xl bg-[var(--bg-subtle)] p-3">
                      <p className="text-xs text-[var(--text-muted)]">Delivery</p>
                      <p className="text-lg font-bold text-navy-900 dark:text-white">Careful</p>
                    </div>
                  </div>
                  <div className="hero-metric rounded-xl bg-brand-gradient p-4 text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold">Build beyond limit</span>
                      <Zap className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>

              {floatingCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.label}
                    className={`absolute hidden sm:flex ${card.className} items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-2 shadow-card`}
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
