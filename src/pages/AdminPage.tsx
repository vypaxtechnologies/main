import { useSEO } from '@/hooks/useSEO';
import { adminQuickStats } from '@/data/siteContent';

export default function AdminPage() {
  useSEO({
    title: 'Admin Dashboard | Vypax Technologies',
    description: 'Administrative overview for services, projects, blog posts, testimonials, and enquiries.',
  });

  return (
    <section className="pt-32 pb-20 md:pt-40">
      <div className="container-x">
        <div className="mb-8">
          <p className="eyebrow">Admin Dashboard</p>
          <h1 className="mt-3 text-4xl font-bold text-navy-900 dark:text-white">Content & operations overview</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {adminQuickStats.map((stat) => (
            <div key={stat.label} className="rounded-[24px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-soft">
              <p className="text-sm text-[var(--text-muted)]">{stat.label}</p>
              <p className="mt-4 text-3xl font-bold text-navy-900 dark:text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-soft">
            <h2 className="text-xl font-bold text-navy-900 dark:text-white">Manage content</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--text-muted)]">
              <li>• Services and service pages</li>
              <li>• Projects and case studies</li>
              <li>• Blog articles and resources</li>
              <li>• Testimonials and client stories</li>
              <li>• Careers and job listings</li>
            </ul>
          </div>

          <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-soft">
            <h2 className="text-xl font-bold text-navy-900 dark:text-white">Recent enquiries</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--text-muted)]">
              <li>• 3 new website project enquiries</li>
              <li>• 2 growth marketing consultations</li>
              <li>• 1 custom software discovery call</li>
              <li>• 4 newsletter sign-ups</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
