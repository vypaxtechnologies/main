import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { serviceDropdown } from '@/data/services';

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

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!data.name.trim()) e.name = 'Name is required';
    if (!data.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Enter a valid email';
    if (!data.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setData((d) => ({ ...d, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('idle');
    try {
      // Frontend abstraction — connect to backend/email provider here
      await new Promise((r) => setTimeout(r, 800));
      setStatus('success');
      setData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-900 dark:text-white">
            Name *
          </label>
          <input
            id="name"
            type="text"
            value={data.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="input-field"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-900 dark:text-white">
            Email *
          </label>
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="input-field"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy-900 dark:text-white">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-navy-900 dark:text-white">
            Company
          </label>
          <input
            id="company"
            type="text"
            value={data.company}
            onChange={(e) => handleChange('company', e.target.value)}
            className="input-field"
          />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-navy-900 dark:text-white">
          Service
        </label>
        <select
          id="service"
          value={data.service}
          onChange={(e) => handleChange('service', e.target.value)}
          className="input-field"
        >
          <option value="">Select a service</option>
          {serviceDropdown.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-900 dark:text-white">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          value={data.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className="input-field resize-none"
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700 dark:border-green-800 dark:bg-green-950/30 dark:text-green-400"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          Thank you! Your message has been sent. We'll get back to you soon.
        </motion.div>
      )}
      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400"
        >
          <AlertCircle className="h-5 w-5 shrink-0" />
          Something went wrong. Please try again or email us directly.
        </motion.div>
      )}

      <button type="submit" className="btn-primary w-full sm:w-auto">
        <Send className="h-4 w-4" />
        Send Message
      </button>
    </form>
  );
}
