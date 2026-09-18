import SectionHeading from '@/components/SectionHeading';
import ReviewSlider from '@/components/ReviewSlider';

export default function ReviewsSection() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Client Reviews"
          title="What Our Clients Say"
          subtitle="Anonymized project stories for now. Named testimonials will be added with client approval."
        />
        <div className="mt-10">
          <ReviewSlider />
        </div>
      </div>
    </section>
  );
}