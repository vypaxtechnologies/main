import { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatCounter({ value, suffix = '', label }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          let current = 0;
          const step = Math.ceil(value / 40);
          const timer = window.setInterval(() => {
            current += step;
            if (current >= value) {
              setCount(value);
              window.clearInterval(timer);
              return;
            }
            setCount(current);
          }, 35);

          observer.disconnect();
          return () => window.clearInterval(timer);
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="rounded-[24px] border border-[var(--border)] bg-[var(--card)] p-6 text-center shadow-soft">
      <p className="text-3xl font-bold text-navy-900 dark:text-white">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-[var(--text-muted)]">{label}</p>
    </div>
  );
}
