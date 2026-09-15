import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/portfolio';

export default function PortfolioCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-card border border-[var(--border)] bg-[var(--card)] shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-navy-50 to-brand-blue/10 dark:from-navy-900 dark:to-navy-800">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-brand-gradient opacity-20" />
              <p className="mt-3 text-xs text-[var(--text-muted)]">Demo project image</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-navy-900 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
      <div className="p-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue dark:text-brand-cyan">
          {project.category}
        </span>
        <h3 className="mt-2 text-base font-semibold text-navy-900 dark:text-white">{project.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--border)] bg-[var(--bg-subtle)] px-2.5 py-0.5 text-xs text-[var(--text-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
