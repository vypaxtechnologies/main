import { useSEO } from '@/hooks/useSEO';
import SectionHeading from '@/components/SectionHeading';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSlider from '@/components/ReviewSlider';
export default function ReviewsPage() { useSEO({ title: 'Reviews | Vypax Technologies', description: 'Client feedback and testimonials for Vypax Technologies.' }); return <><section className="pt-32 pb-12 md:pt-40"><div className="container-x"><Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Reviews' }]} /><SectionHeading eyebrow="Client Feedback" title="What Our Clients Say" subtitle="These demo entries are clearly marked until genuine client reviews are supplied." center={false} /></div></section><section className="section-pad bg-[var(--bg-subtle)]"><div className="container-x"><ReviewSlider /></div></section></>; }
