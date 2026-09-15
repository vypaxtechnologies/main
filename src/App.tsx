import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import PortfolioPage from '@/pages/PortfolioPage';
import TeamPage from '@/pages/TeamPage';
import ReviewsPage from '@/pages/ReviewsPage';
import CareersPage from '@/pages/CareersPage';
import ContactPage from '@/pages/ContactPage';
import ContentPage from '@/pages/ContentPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<ContentPage title="Blog / Resources" eyebrow="Resources" description="Insights and practical ideas for building better digital experiences and stronger businesses." />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<ContentPage title="Privacy Policy" eyebrow="Legal" description="Your privacy matters to us. This page is ready for your final privacy policy content." />} />
          <Route path="/terms" element={<ContentPage title="Terms & Conditions" eyebrow="Legal" description="This page is ready for your final terms and conditions content." />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
