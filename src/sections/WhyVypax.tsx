import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { whyVypax } from '@/data/whyVypax';

export default function WhyVypax() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="blob right-[-10%] top-[10%] h-80 w-80 bg-brand-purple" />
      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Vypax Technologies?"
          subtitle="Practical technology and measurable growth for every project."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyVypax.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group rounded-card border border-[var(--border)] bg-[var(--card)] p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-2xl font-bold text-[var(--border)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
