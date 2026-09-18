import { useSEO } from '@/hooks/useSEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactSection from '@/sections/ContactSection';
export default function ContactPage() { useSEO({ title: 'Contact Vypax Technologies | Roorkee, Uttarakhand', description: 'Contact Vypax Technologies in Roorkee, Uttarakhand, India. Email us at vypaxtechnologies@gmail.com or send a message through our contact form.' }); return <><section className="pt-32 pb-4 md:pt-40"><div className="container-x"><Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Contact' }]} /></div></section><ContactSection /></>; }
