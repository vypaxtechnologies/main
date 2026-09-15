import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import TeamCard from '@/components/TeamCard';
import { team } from '@/data/team';

export default function TeamSection() {
  return (
    <section className="section-pad bg-[var(--bg-subtle)]">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Team"
          title="Meet Our Team"
          subtitle="The people behind Vypax Technologies — building beyond limits."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/team" className="btn-secondary">
            Meet the Full Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
