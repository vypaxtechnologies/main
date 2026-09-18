import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
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
        <div className="mt-12 grid gap-6 lg:grid-cols-5 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="relative h-full overflow-hidden rounded-[28px] bg-navy-900 p-7 text-white shadow-card sm:p-9">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-blue/30 blur-3xl" />
              <div className="relative flex h-full flex-col">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">Let&apos;s talk</p>
                <h3 className="mt-4 max-w-sm text-3xl font-bold leading-tight sm:text-4xl">Good work starts with a good conversation.</h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">Bring us the rough idea, the stuck workflow, or the ambitious next step. We&apos;ll help make the path clearer.</p>

                <div className="mt-9 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-cyan">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Location</h3>
                  <p className="mt-1 text-sm text-slate-300">{companyConfig.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-cyan">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Phone</h3>
                  <a href={`tel:${companyConfig.whatsappNumber}`} className="mt-1 block text-sm text-slate-300 transition-colors hover:text-white">
                    {companyConfig.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-cyan">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Email</h3>
                  <a href={`mailto:${companyConfig.email}`} className="mt-1 block break-all text-sm text-slate-300 transition-colors hover:text-white">
                    {companyConfig.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-cyan">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Response time</h3>
                  <p className="mt-1 text-sm text-slate-300">We reply within 24 hours</p>
                </div>
              </div>
                </div>
                <a href={`mailto:${companyConfig.email}`} className="mt-auto flex items-center gap-2 pt-10 text-sm font-semibold text-brand-cyan transition-colors hover:text-white">
                  Email us directly <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-card sm:p-8 lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
