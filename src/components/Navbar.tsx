import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { companyConfig } from '@/data/company';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className="fixed inset-x-3 top-3 z-50 rounded-2xl border border-white/40 bg-white/65 shadow-lg shadow-navy-900/5 backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-navy-950/65 dark:shadow-black/20 sm:inset-x-5 md:top-4"
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        <Logo />

        <div className="hidden items-center gap-6 xl:flex 2xl:gap-8">
          {companyConfig.nav.map((item) => (
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
              {companyConfig.nav.map((item) => (
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
