import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, LoaderCircle, Send, Sparkles, AlertCircle } from 'lucide-react';
import { serviceDropdown } from '@/data/services';
import { apiUrl } from '@/config/api';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

type Status = 'idle' | 'success' | 'error';

export default function ContactForm() {
  const [data, setData] = useState<FormData>({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!data.name.trim()) e.name = 'Name is required';
    if (!data.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Enter a valid email';
    if (!data.phone.trim()) e.phone = 'Phone number is required';
    if (!data.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setData((d) => ({ ...d, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const [serverError, setServerError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('idle');
    setServerError('');
    setIsSubmitting(true);
    try {
      // Optional client-side FormSubmit call fired in background without blocking
      const emailPayload = new FormData();
      Object.entries(data).forEach(([key, value]) => emailPayload.append(key, value));
      emailPayload.append('_subject', `New contact form message from ${data.name}`);
      emailPayload.append('_captcha', 'false');
      emailPayload.append('_template', 'table');
      fetch('https://formsubmit.co/ajax/vypaxtechnologies@gmail.com', {
        method: 'POST',
        body: emailPayload,
      }).catch(() => {});

      const response = await fetch(apiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || 'Contact form submission failed');
      }

      setStatus('success');
      setData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unable to submit enquiry';
      setServerError(msg);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-7" noValidate>
      <div className="flex flex-col gap-3 border-b border-[var(--border)] pb-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue dark:text-brand-cyan">
            <Sparkles className="h-3.5 w-3.5" />
            Project brief
          </p>
          <h3 className="mt-2 text-2xl font-bold text-navy-900 dark:text-white">What are we building?</h3>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--text-muted)]">Share a little context and we&apos;ll come back with thoughtful next steps.</p>
        </div>
        <span className="text-xs text-[var(--text-muted)]">Takes 2 minutes</span>
      </div>

      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">Your details</p>
        <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-navy-900 dark:text-white">
            Your name <span className="text-brand-blue">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={data.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="input-field"
            placeholder="e.g. Ankit Sharma"
            aria-invalid={!!errors.name}
            autoComplete="name"
          />
          {errors.name && <p className="mt-1 text-xs text-brand-blue">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-navy-900 dark:text-white">
            Work email <span className="text-brand-blue">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="input-field"
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            autoComplete="email"
          />
          {errors.email && <p className="mt-1 text-xs text-brand-blue">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-navy-900 dark:text-white">
            Phone number <span className="text-brand-blue">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="input-field"
            placeholder="+91 00000 00000"
            autoComplete="tel"
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-semibold text-navy-900 dark:text-white">
            Company <span className="font-normal text-[var(--text-muted)]">(optional)</span>
          </label>
          <input
            id="company"
            type="text"
            value={data.company}
            onChange={(e) => handleChange('company', e.target.value)}
            className="input-field"
            placeholder="Your company name"
            autoComplete="organization"
          />
        </div>
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-semibold text-navy-900 dark:text-white">
          What can we help with?
        </label>
        <select
          id="service"
          value={data.service}
          onChange={(e) => handleChange('service', e.target.value)}
          className="input-field cursor-pointer"
          autoComplete="off"
        >
          <option value="">Select a service</option>
          {serviceDropdown.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <div className="mb-2 flex items-baseline justify-between gap-3">
          <label htmlFor="message" className="block text-sm font-semibold text-navy-900 dark:text-white">
            Tell us about the project <span className="text-brand-blue">*</span>
          </label>
          <span className="text-xs text-[var(--text-muted)]">{data.message.length}/1000</span>
        </div>
        <textarea
          id="message"
          rows={6}
          maxLength={1000}
          value={data.message}
          onChange={(e) => handleChange('message', e.target.value)}
          placeholder="What are you trying to achieve, and where are you currently stuck?"
          className="input-field resize-none"
          aria-invalid={!!errors.message}
          autoComplete="off"
        />
        {errors.message && <p className="mt-1 text-xs text-brand-blue">{errors.message}</p>}
      </div>

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-3 rounded-2xl border border-brand-blue bg-brand-blue/10 p-4 text-sm text-brand-blue dark:border-brand-cyan dark:bg-brand-cyan/10 dark:text-brand-cyan"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
          <span><strong className="font-semibold">Message received.</strong> We&apos;ll get back to you soon.</span>
        </motion.div>
      )}
      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-3 rounded-2xl border border-brand-blue bg-brand-blue/10 p-4 text-sm text-brand-blue dark:border-brand-cyan dark:bg-brand-cyan/10 dark:text-brand-cyan"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
          <span>{serverError || 'Something went wrong. Please try again or email us directly.'}</span>
        </motion.div>
      )}

      <div className="flex flex-col gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-xs leading-relaxed text-[var(--text-muted)]">By sending this form, you agree to be contacted about your enquiry.</p>
        <button type="submit" disabled={isSubmitting} className="btn-primary w-full shrink-0 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
          {isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {isSubmitting ? 'Sending...' : 'Send project brief'}
          {!isSubmitting && <ArrowUpRight className="h-4 w-4" />}
        </button>
      </div>
    </form>
  );
}
