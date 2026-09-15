import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

export default function ServicesSection() {
  return (
    <section className="section-pad bg-[var(--bg-subtle)]">
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Do"
          title="What We Do"
          subtitle="Technology and digital solutions designed around your business goals."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
