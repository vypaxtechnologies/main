import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';
import Logo from './Logo';
import { companyConfig } from '@/data/company';
import { services } from '@/data/services';

const socialIcons = {
  x: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="container-x py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--text-muted)]">
              {companyConfig.tagline}. {companyConfig.slogan}.
            </p>
            <div className="mt-6 flex gap-3">
              {Object.entries(companyConfig.social).map(([key, url]) => {
                const Icon = socialIcons[key as keyof typeof socialIcons];
                if (!Icon) return null;
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--text-muted)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue hover:text-brand-blue dark:hover:text-brand-cyan"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-9 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold text-navy-900 dark:text-white">Navigation</h4>
              <ul className="mt-5 space-y-3.5">
                {companyConfig.nav.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="group inline-flex items-center text-sm text-[var(--text-muted)] transition-colors hover:text-brand-blue dark:hover:text-brand-cyan"
                    >
                      <span className="h-px w-0 bg-brand-blue transition-all duration-300 group-hover:w-2" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-navy-900 dark:text-white">Services</h4>
              <ul className="mt-5 space-y-3.5">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="group inline-flex items-center text-sm text-[var(--text-muted)] transition-colors hover:text-brand-blue dark:hover:text-brand-cyan"
                    >
                      <span className="h-px w-0 bg-brand-blue transition-all duration-300 group-hover:w-2" />
                      {s.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-sm font-semibold text-navy-900 dark:text-white">Contact</h4>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue dark:text-brand-cyan" />
                  <span>{companyConfig.location}</span>
                </li>
                <li>
                  <a
                    href={`tel:${companyConfig.whatsappNumber}`}
                    className="flex items-start gap-3 text-sm text-[var(--text-muted)] transition-colors hover:text-brand-blue dark:hover:text-brand-cyan"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue dark:text-brand-cyan" />
                    <span>{companyConfig.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${companyConfig.email}`}
                    className="flex items-start gap-3 text-sm text-[var(--text-muted)] transition-colors hover:text-brand-blue dark:hover:text-brand-cyan"
                  >
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue dark:text-brand-cyan" />
                    <span className="break-all">{companyConfig.email}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--border)] pt-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-xs text-[var(--text-muted)]">
              &copy; {year} {companyConfig.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <Link to="/privacy-policy" className="text-xs text-[var(--text-muted)] transition-colors hover:text-brand-blue dark:hover:text-brand-cyan">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-[var(--text-muted)] transition-colors hover:text-brand-blue dark:hover:text-brand-cyan">
                Terms &amp; Conditions
              </Link>
              <a href="#" className="text-xs text-[var(--text-muted)] transition-colors hover:text-brand-blue dark:hover:text-brand-cyan">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}