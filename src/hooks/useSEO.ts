import { useEffect } from 'react';

interface SEOOptions {
  title: string;
  description?: string;
}

export function useSEO({ title, description }: SEOOptions) {
  useEffect(() => {
    document.title = title;
    if (description) {
      const existing = document.querySelector('meta[name="description"]');
      if (existing) {
        existing.setAttribute('content', description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.head.appendChild(meta);
      }
    }
  }, [title, description]);
}
