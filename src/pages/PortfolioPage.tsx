import { useSEO } from '@/hooks/useSEO';
import SectionHeading from '@/components/SectionHeading';
import Breadcrumbs from '@/components/Breadcrumbs';
import PortfolioFilter from '@/components/PortfolioFilter';
import CTASection from '@/components/CTASection';
export default function PortfolioPage() { useSEO({ title: 'Portfolio | Vypax Technologies', description: 'Selected projects designed to create measurable business impact. Web development, digital marketing, SEO, and branding work.' }); return <><section className="pt-32 pb-12 md:pt-40"><div className="container-x"><Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Portfolio' }]} /><SectionHeading eyebrow="Selected Work" title="Our Work" subtitle="Demo projects are shown as replaceable placeholders until approved client work is supplied." center={false} /></div></section><section className="section-pad"><div className="container-x"><PortfolioFilter /></div></section><CTASection /></>; }
