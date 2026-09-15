import SectionHeading from '@/components/SectionHeading';
import ProcessTimeline from '@/components/ProcessTimeline';

export default function ProcessSection() {
  return (
    <section className="section-pad bg-[var(--bg-subtle)]">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Process"
          title="How We Work"
          subtitle="A proven five-step process that takes you from idea to growth."
        />
        <ProcessTimeline />
      </div>
    </section>
  );
}
