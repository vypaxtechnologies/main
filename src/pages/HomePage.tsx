import { useSEO } from '@/hooks/useSEO';
import Hero from '@/sections/Hero';
import ServiceStrip from '@/sections/ServiceStrip';
import AboutPreview from '@/sections/AboutPreview';
import ServicesSection from '@/sections/ServicesSection';
import WhyVypax from '@/sections/WhyVypax';
import ProcessSection from '@/sections/ProcessSection';
import ReviewsSection from '@/sections/ReviewsSection';
import CareersSection from '@/sections/CareersSection';
import FAQSection from '@/sections/FAQSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/sections/ContactSection';

export default function HomePage() {
  useSEO({ title: 'Vypax Technologies | Your Technology & Business Growth Partner', description: 'IT services and digital growth company in Roorkee, Uttarakhand. Web development, digital marketing, SEO, data analysis, and custom software solutions. Build beyond limit.' });
  return (
    <>
      <Hero />
      <ServiceStrip />
      <AboutPreview />
      <ServicesSection />
      <WhyVypax />
      <ProcessSection />
      <ReviewsSection />
      <CareersSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
