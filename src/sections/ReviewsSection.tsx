import SectionHeading from '@/components/SectionHeading';
import ReviewSlider from '@/components/ReviewSlider';

export default function ReviewsSection() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Client Reviews"
          title="What Our Clients Say"
          subtitle="Feedback from clients we've helped build better digital experiences."
        />
        <div className="mt-12">
          <ReviewSlider />
        </div>
      </div>
    </section>
  );
}