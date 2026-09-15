import { motion } from 'framer-motion';
import { Search, ClipboardList, Hammer, Rocket, TrendingUp, type LucideIcon } from 'lucide-react';
import { processSteps } from '@/data/whyVypax';

const iconMap: Record<string, LucideIcon> = {
  search: Search,
  clipboard: ClipboardList,
  hammer: Hammer,
  rocket: Rocket,
  'trending-up': TrendingUp,
};

export default function ProcessTimeline() {
  return (
    <div className="relative mt-16">
      <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan opacity-20 lg:block" />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {processSteps.map((step, i) => {
          const Icon = iconMap[step.icon] ?? Search;
          return (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] shadow-card">
                <Icon className="h-7 w-7 text-brand-blue dark:text-brand-cyan" />
              </div>
              <p className="mt-4 text-xs font-bold text-brand-blue dark:text-brand-cyan">{step.num}</p>
              <h3 className="mt-1 text-base font-semibold text-navy-900 dark:text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
