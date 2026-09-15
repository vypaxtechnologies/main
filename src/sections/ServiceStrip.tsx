import { Code2, Megaphone, Search, Cloud, Boxes, TrendingUp } from 'lucide-react';
import { serviceStrip } from '@/data/services';

const icons = [Code2, Megaphone, Search, Cloud, Boxes, TrendingUp];

export default function ServiceStrip() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--bg-subtle)] py-8">
      <div className="container-x">
        <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-6 md:overflow-visible md:pb-0">
          {serviceStrip.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.name}
                className="flex min-w-[180px] items-center gap-3 md:min-w-0 md:flex-col md:items-start md:gap-2"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900 dark:text-white">{item.name}</p>
                  <p className="text-xs text-[var(--text-muted)]">{item.phrase}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
