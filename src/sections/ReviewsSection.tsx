import SectionHeading from '@/components/SectionHeading';
import ReviewSlider from '@/components/ReviewSlider';

export default function ReviewsSection() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          subtitle="Feedback from businesses we've helped grow."
        />
        <div className="mt-12">
          <ReviewSlider />
        </div>
      </div>
    </section>
  );
}
