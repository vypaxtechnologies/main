import { useSEO } from '@/hooks/useSEO';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import Breadcrumbs from '@/components/Breadcrumbs';
import { aboutValues } from '@/data/whyVypax';
import { companyConfig } from '@/data/company';

export default function AboutPage() {
  useSEO({ title: 'About Vypax Technologies | Technology, Strategy & Growth', description: 'Vypax Technologies is an IT services and digital growth company in Roorkee, Uttarakhand. Technology. Strategy. Growth.' });
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40">
        <div className="container-x">
          <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'About' }]} />
          <SectionHeading
            eyebrow="About Us"
            title="About Vypax Technologies"
            subtitle="Technology. Strategy. Growth. — your trusted partner for digital transformation."
            center={false}
          />
        </div>
      </section>

      <section className="py-12">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              { icon: Target, title: 'Our Mission', text: 'To empower businesses with technology that drives real, measurable growth — from web development to digital marketing and beyond.' },
              { icon: Eye, title: 'Our Vision', text: 'To be a trusted technology partner that helps brands build beyond their limits and achieve sustainable digital success.' },
              { icon: Heart, title: 'Our Values', text: 'Innovation, integrity, growth, and excellence in everything we do — for every client, every project.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-card border border-[var(--border)] bg-[var(--card)] p-6 shadow-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-navy-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[var(--bg-subtle)]">
        <div className="container-x">
          <SectionHeading eyebrow="Our Values" title="What We Stand For" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutValues.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-card border border-[var(--border)] bg-[var(--card)] p-5 shadow-card"
              >
                <h3 className="text-base font-semibold text-navy-900 dark:text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-x">
          <div className="rounded-card border border-[var(--border)] bg-[var(--card)] p-8 shadow-card md:p-12">
            <p className="text-2xl font-bold text-navy-900 dark:text-white md:text-3xl">
              {companyConfig.slogan}
            </p>
            <p className="mt-2 text-base text-[var(--text-muted)]">{companyConfig.tagline}</p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
