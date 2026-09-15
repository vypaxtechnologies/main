import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Phone } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import { companyConfig } from '@/data/company';

export default function ContactSection() {
  return (
    <section className="section-pad bg-[var(--bg-subtle)]">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Great"
          subtitle="Tell us about your project and we'll get back to you within 24 hours."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900 dark:text-white">Location</h3>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{companyConfig.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900 dark:text-white">Phone</h3>
                  <a href={`tel:${companyConfig.whatsappNumber}`} className="mt-1 block text-sm text-[var(--text-muted)] transition-colors hover:text-brand-blue dark:hover:text-brand-cyan">
                    {companyConfig.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900 dark:text-white">Email</h3>
                  <a href={`mailto:${companyConfig.email}`} className="mt-1 block text-sm text-[var(--text-muted)] transition-colors hover:text-brand-blue dark:hover:text-brand-cyan">
                    {companyConfig.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900 dark:text-white">Response Time</h3>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">We reply within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-card border border-[var(--border)] bg-[var(--card)] p-6 shadow-card lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
