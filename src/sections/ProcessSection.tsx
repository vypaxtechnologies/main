import SectionHeading from '@/components/SectionHeading';
import ProcessTimeline from '@/components/ProcessTimeline';

export default function ProcessSection() {
  return (
    <section className="section-pad bg-[var(--bg-subtle)]">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Process"
          title="How We Work"
          subtitle="A clear five-step process with practical deliverables at every stage."
        />
        <ProcessTimeline />
      </div>
    </section>
  );
}
