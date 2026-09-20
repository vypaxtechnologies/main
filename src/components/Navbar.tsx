import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown, Briefcase, GraduationCap } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { companyConfig } from '@/data/company';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setCareersOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCareersOpen(false);
      }
    };
    if (careersOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [careersOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const mainNav = companyConfig.nav.filter((item) => item.label !== 'Careers');

  const careersDropdownItems = [
    { label: 'Jobs', path: '/jobs', icon: Briefcase },
    { label: 'Training & Development', path: '/training-development', icon: GraduationCap },
  ];

  return (
    <header
      className="fixed inset-x-3 top-3 z-50 rounded-2xl border border-white/40 bg-white/80 shadow-lg shadow-navy-900/5 dark:border-white/10 dark:bg-navy-950/80 dark:shadow-black/20 sm:inset-x-5 md:top-4"
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        <Logo />

        <div className="hidden items-center gap-6 xl:flex 2xl:gap-8">
          {mainNav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link group ${location.pathname === item.path ? 'nav-link-active' : ''}`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-brand-gradient transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setCareersOpen((v) => !v)}
              className={`nav-link group flex items-center gap-1 ${careersOpen ? 'nav-link-active' : ''}`}
            >
              Careers
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${careersOpen ? 'rotate-180' : ''}`} />
              <span
                className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-brand-gradient transition-all duration-300 ${
                  careersOpen ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>

            <AnimatePresence>
              {careersOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full z-40 mt-2 w-56 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-card"
                >
                  {careersDropdownItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.path}
                        type="button"
                        onClick={() => { setCareersOpen(false); navigate(item.path); }}
                        className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-medium text-navy-700 transition-colors hover:bg-[var(--bg-subtle)] dark:text-slate-300 dark:hover:bg-white/5"
                      >
                        <Icon className="h-4 w-4 shrink-0 text-brand-blue dark:text-brand-cyan" />
                        {item.label}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/contact" className="btn-primary hidden sm:inline-flex">
            Get a Free Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-navy-700 dark:text-slate-300 xl:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--bg)] xl:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {mainNav.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'bg-brand-blue/10 text-brand-blue'
                      : 'text-navy-700 hover:bg-[var(--bg-subtle)] dark:text-slate-300'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="px-4 py-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Careers</p>
                <div className="mt-1 flex flex-col gap-1">
                  {careersDropdownItems.map((item) => (
                    <button
                      key={item.path}
                      type="button"
                      onClick={() => { setMobileOpen(false); navigate(item.path); }}
                      className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-navy-700 transition-colors hover:bg-[var(--bg-subtle)] dark:text-slate-300 dark:hover:bg-white/5"
                    >
                      <item.icon className="h-4 w-4 shrink-0 text-brand-blue dark:text-brand-cyan" />
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="btn-primary mt-2 w-full">
                Get a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}