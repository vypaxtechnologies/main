import { useSEO } from '@/hooks/useSEO';
import { Check } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { pricingPlans } from '@/data/siteContent';

export default function PricingPage() {
  useSEO({
    title: 'Pricing & Custom Solutions | Vypax Technologies',
    description: 'Explore Vypax Technologies pricing options for website design, growth marketing, SEO, software systems, and custom digital projects.',
  });

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40">
        <div className="container-x">
          <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Pricing' }]} />
          <SectionHeading
            eyebrow="Pricing"
            title="Flexible solutions for every stage of growth"
            subtitle="Choose a package that fits your current needs or request a custom proposal for something more bespoke."
            center={false}
          />
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-subtle)]">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[28px] border p-7 shadow-soft ${
                  plan.recommended
                    ? 'border-brand-blue bg-brand-blue/5 dark:border-brand-cyan dark:bg-brand-cyan/5'
                    : 'border-[var(--border)] bg-[var(--card)]'
                }`}
              >
                {plan.recommended && (
                  <div className="mb-4 inline-flex rounded-full bg-brand-blue px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-navy-900 dark:text-white">{plan.name}</h3>
                <p className="mt-3 text-sm text-[var(--text-muted)]">{plan.description}</p>
                <p className="mt-5 text-3xl font-bold text-navy-900 dark:text-white">{plan.price}</p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                      <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue dark:bg-brand-cyan/10 dark:text-brand-cyan">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
