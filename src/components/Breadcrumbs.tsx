import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  path?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-[var(--text-muted)]">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
            {item.path ? (
              <Link to={item.path} className="transition-colors hover:text-brand-blue dark:hover:text-brand-cyan">
                {item.label}
              </Link>
            ) : (
              <span className="text-navy-900 dark:text-white">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
