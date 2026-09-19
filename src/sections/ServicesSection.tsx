import SectionHeading from '@/components/SectionHeading';
import ServiceSlider from '@/components/ServiceSlider';

export default function ServicesSection() {
  return (
    <section className="section-pad bg-[var(--bg-subtle)]">
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Do"
          title="What We Do"
          subtitle="Technology and digital solutions designed around your business goals."
        />
        <div className="mt-10">
          <ServiceSlider />
        </div>
      </div>
    </section>
  );
}