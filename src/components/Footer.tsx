import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Linkedin, Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';
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
    <footer className="border-t border-[var(--border)] bg-[var(--bg-subtle)]">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--text-muted)]">
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
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-brand-blue hover:text-brand-blue dark:hover:text-brand-cyan"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-navy-900 dark:text-white">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {companyConfig.nav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-[var(--text-muted)] transition-colors hover:text-brand-blue dark:hover:text-brand-cyan"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-navy-900 dark:text-white">Services</h3>
            <ul className="mt-4 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm text-[var(--text-muted)] transition-colors hover:text-brand-blue dark:hover:text-brand-cyan"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-navy-900 dark:text-white">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {companyConfig.location}
              </li>
              <li>
                <a
                  href={`tel:${companyConfig.whatsappNumber}`}
                  className="flex items-start gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-brand-blue dark:hover:text-brand-cyan"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  {companyConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyConfig.email}`}
                  className="flex items-start gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-brand-blue dark:hover:text-brand-cyan"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  {companyConfig.email}
                </a>
              </li>
            </ul>
            <div className="mt-4 space-y-1">
              <a
                href={`mailto:${companyConfig.email}`}
                className="block text-xs text-[var(--text-muted)] transition-colors hover:text-brand-blue dark:hover:text-brand-cyan"
              >
                {companyConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 sm:flex-row">
          <p className="text-xs text-[var(--text-muted)]">
            &copy; {year} {companyConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
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
    </footer>
  );
}
