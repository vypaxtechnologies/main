import { useSEO } from '@/hooks/useSEO';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { blogPosts } from '@/data/siteContent';

export default function BlogPage() {
  useSEO({
    title: 'Insights & Resources | Vypax Technologies',
    description: 'Read practical insights on digital strategy, website growth, SEO, and technology choices for business growth.',
  });

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40">
        <div className="container-x">
          <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Blog' }]} />
          <SectionHeading
            eyebrow="Insights"
            title="Fresh perspectives on digital growth and web strategy"
            subtitle="Practical ideas for founders, teams, and businesses building better digital experiences."
            center={false}
          />
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-subtle)]">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue dark:text-brand-cyan">{post.category}</p>
                <h3 className="mt-4 text-xl font-bold text-navy-900 dark:text-white">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-[var(--text-muted)]">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue dark:text-brand-cyan">
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
