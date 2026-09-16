import { useSEO } from '@/hooks/useSEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import Breadcrumbs from '@/components/Breadcrumbs';
import { services } from '@/data/services';

export default function ServicesPage() {
  useSEO({ title: 'IT Services & Digital Solutions | Vypax Technologies', description: 'Web development, digital marketing, SEO, Google Business Profile optimization, data analysis and data science, and custom software solutions in Roorkee.' });
  return <>
    <section className="pt-32 pb-12 md:pt-40"><div className="container-x"><Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Services' }]} /><SectionHeading eyebrow="Capabilities" title="IT Services & Digital Solutions" subtitle="Technology and digital solutions designed around your business goals." center={false} /></div></section>
    <section className="section-pad bg-[var(--bg-subtle)]"><div className="container-x"><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{services.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}</div></div></section>
    <section className="py-12"><div className="container-x"><div className="flex flex-col items-start justify-between gap-6 rounded-card border border-[var(--border)] bg-[var(--card)] p-8 shadow-card sm:flex-row sm:items-center"><div><h2 className="text-2xl font-bold text-navy-900 dark:text-white">Not sure where to start?</h2><p className="mt-2 text-sm text-[var(--text-muted)]">Tell us what you want to achieve and we’ll help you find the right path.</p></div><Link to="/contact" className="btn-primary">Talk to Our Team <ArrowRight className="h-4 w-4" /></Link></div></div></section>
    <CTASection />
  </>;
}
