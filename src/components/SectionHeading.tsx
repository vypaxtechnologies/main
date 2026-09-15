import { motion } from 'framer-motion';

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, center = true }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
