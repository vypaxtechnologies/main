import SectionHeading from '@/components/SectionHeading';
import WhySlider from '@/components/WhySlider';

export default function WhyVypax() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="blob right-[-10%] top-[10%] h-80 w-80 bg-brand-purple" />
      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Vypax Technologies?"
          subtitle="Practical technology and measurable growth for every project."
        />
        <div className="mt-10">
          <WhySlider />
        </div>
      </div>
    </section>
  );
}