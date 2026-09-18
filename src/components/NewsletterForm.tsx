import { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, LoaderCircle } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || 'Failed to subscribe to newsletter');
      }

      setStatus('success');
      setMessage(data?.message || 'Thank you for subscribing to our newsletter!');
      setEmail('');
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Unable to subscribe. Please try again.';
      setStatus('error');
      setMessage(errorMsg);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== 'idle') setStatus('idle');
          }}
          placeholder="Enter your email address"
          required
          disabled={status === 'loading'}
          className="input-field min-w-0 flex-1"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary shrink-0 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'loading' ? (
            <LoaderCircle className="h-4 w-4 animate-spin" />
          ) : (
            <>
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      {status === 'success' && (
        <p className="mt-3 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          {message}
        </p>
      )}

      {status === 'error' && (
        <p className="mt-3 flex items-center gap-2 text-xs font-medium text-red-600 dark:text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {message}
        </p>
      )}
    </div>
  );
}