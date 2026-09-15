import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import PortfolioFilter from '@/components/PortfolioFilter';

export default function PortfolioSection() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Work"
          subtitle="Selected projects designed to create measurable business impact."
        />
        <div className="mt-12">
          <PortfolioFilter />
        </div>
        <div className="mt-10 text-center">
          <Link to="/portfolio" className="btn-secondary">
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
