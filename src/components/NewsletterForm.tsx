import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.trim()) return;
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Your email address"
        className="input-field min-w-0 flex-1"
        aria-label="Email address"
      />
      <button type="submit" className="btn-primary shrink-0">
        Subscribe
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}