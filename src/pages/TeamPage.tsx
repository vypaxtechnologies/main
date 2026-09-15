import { useSEO } from '@/hooks/useSEO';
import SectionHeading from '@/components/SectionHeading';
import Breadcrumbs from '@/components/Breadcrumbs';
import TeamCard from '@/components/TeamCard';
import { team } from '@/data/team';
export default function TeamPage() { useSEO({ title: 'Team | Vypax Technologies', description: 'Meet the team behind Vypax Technologies — building beyond limits.' }); return <><section className="pt-32 pb-12 md:pt-40"><div className="container-x"><Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Team' }]} /><SectionHeading eyebrow="People" title="Meet Our Team" subtitle="The people behind Vypax Technologies — building beyond limits." center={false} /></div></section><section className="section-pad bg-[var(--bg-subtle)]"><div className="container-x"><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{team.map((member, i) => <TeamCard key={member.id} member={member} index={i} />)}</div></div></section></>; }
