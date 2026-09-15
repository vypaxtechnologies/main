import SectionHeading from '@/components/SectionHeading';
import FAQAccordion from '@/components/FAQAccordion';
import { generalFaqs } from '@/data/faq';

export default function FAQSection() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about our services and process."
        />
        <div className="mt-12">
          <FAQAccordion items={generalFaqs} />
        </div>
      </div>
    </section>
  );
}
