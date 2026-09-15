import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid } from 'lucide-react';
import { portfolio, portfolioCategories } from '@/data/portfolio';
import PortfolioCard from './PortfolioCard';

export default function PortfolioFilter() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(
    () => (active === 'All' ? portfolio : portfolio.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {portfolioCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-pill px-4 py-2 text-sm font-medium transition-all duration-200 ${
              active === cat
                ? 'bg-brand-gradient text-white shadow-glow'
                : 'border border-[var(--border)] bg-[var(--card)] text-[var(--text-muted)] hover:border-brand-blue hover:text-brand-blue dark:hover:text-brand-cyan'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-card border border-[var(--border)] bg-[var(--card)] py-16 text-center">
          <LayoutGrid className="h-12 w-12 text-[var(--text-muted)] opacity-40" />
          <p className="mt-4 text-sm text-[var(--text-muted)]">No projects in this category yet.</p>
        </div>
      ) : (
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <PortfolioCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
