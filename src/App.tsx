import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import CareersPage from '@/pages/CareersPage';
import ContactPage from '@/pages/ContactPage';
import SolutionsPage from '@/pages/SolutionsPage';
import ProjectsPage from './pages/ProjectsPage';
import TrainingDevelopmentPage from '@/pages/TrainingDevelopmentPage';
import BlogPage from './pages/BlogPage';
import AdminPage from './pages/AdminPage';
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
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/industries" element={<SolutionsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/training-development" element={<TrainingDevelopmentPage />} />
          <Route path="/pricing" element={<Navigate to="/training-development" replace />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/privacy-policy" element={<ContentPage title="Privacy Policy" eyebrow="Legal" description="Your privacy matters to us. This page is ready for your final privacy policy content." />} />
          <Route path="/terms" element={<ContentPage title="Terms & Conditions" eyebrow="Legal" description="This page is ready for your final terms and conditions content." />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
