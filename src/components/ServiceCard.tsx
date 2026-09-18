import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/data/services';
import TiltCard from './TiltCard';

export default function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
    >
      <TiltCard className="overflow-hidden rounded-[26px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1">
        <div className="relative z-10">
        <div className="icon-tile h-12 w-12">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-5 text-lg font-semibold text-navy-900 dark:text-white">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
          {service.description}
        </p>
        <Link
          to={`/services/${service.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue transition-colors hover:gap-2 dark:text-brand-cyan"
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        </div>
      </TiltCard>
    </motion.div>
  );
}
