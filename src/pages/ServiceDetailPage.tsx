import { useSEO } from '@/hooks/useSEO';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import ProcessTimeline from '@/components/ProcessTimeline';
import CTASection from '@/components/CTASection';
import { services } from '@/data/services';
import { generalFaqs } from '@/data/faq';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  useSEO({
    title: service ? `${service.title} | Vypax Technologies` : 'Services | Vypax Technologies',
    description: service ? service.description : 'Explore Vypax Technologies services and digital solutions.',
  });

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return <>
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40"><div className="blob right-0 top-20 h-72 w-72 bg-brand-blue" /><div className="container-x relative z-10"><Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }, { label: service.shortTitle }]} /><div className="grid items-center gap-10 lg:grid-cols-2"><div><div className="icon-tile h-14 w-14 rounded-2xl"><Icon className="h-7 w-7" /></div><p className="eyebrow mt-6">{service.shortTitle}</p><h1 className="mt-3 text-4xl font-bold text-navy-900 dark:text-white md:text-5xl">{service.title}</h1><p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{service.description}</p><Link to="/contact" className="btn-primary mt-8">Start a Conversation <ArrowRight className="h-4 w-4" /></Link></div><div className="rounded-card border border-[var(--border)] bg-[var(--card)] p-6 shadow-card"><p className="text-sm font-semibold text-navy-900 dark:text-white">What we can help with</p><ul className="mt-5 space-y-3">{service.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm text-[var(--text-muted)]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue dark:text-brand-cyan" />{feature}</li>)}</ul></div></div></div></section>
    <section className="section-pad bg-[var(--bg-subtle)]"><div className="container-x"><SectionHeading eyebrow="Our Approach" title="A practical path from challenge to outcome" subtitle="We keep the process clear, collaborative, and focused on what your business needs next." /><ProcessTimeline /></div></section>
    <section className="section-pad"><div className="container-x"><div className="grid gap-12 lg:grid-cols-2"><div><SectionHeading eyebrow="Tools & Technologies" title="Built with the right tools" subtitle="We select technology based on your goals, timeline, and long-term needs." center={false} /></div><div className="flex flex-wrap content-start gap-3">{service.technologies.map((tech) => <span key={tech} className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm text-navy-700 shadow-soft dark:text-slate-300">{tech}</span>)}</div></div></div></section>
    <section className="section-pad bg-[var(--bg-subtle)]"><div className="container-x"><SectionHeading eyebrow="FAQ" title="Questions about this service" /><div className="mt-10"><FAQAccordion items={[...service.faqs, ...generalFaqs.slice(0, 2)]} /></div></div></section>
    <CTASection />
  </>;
}
