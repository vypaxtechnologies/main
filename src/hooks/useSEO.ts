import { useEffect } from 'react';

interface SEOOptions {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

export function useSEO({ title, description, keywords, image, type = 'website' }: SEOOptions) {
  useEffect(() => {
    const canonicalUrl = `${window.location.origin}${window.location.pathname}`;
    const fullTitle = title.includes('Vypax Technologies') ? title : `${title} | Vypax Technologies`;
    document.title = fullTitle;

    const setMeta = (selector: string, attributes: Record<string, string>) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
    };

    const setLink = (selector: string, attributes: Record<string, string>) => {
      let element = document.head.querySelector<HTMLLinkElement>(selector);
      if (!element) {
        element = document.createElement('link');
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
    };

    const metaDescription = description || 'Vypax Technologies - IT services and digital growth company in Haridwar, Uttarakhand. Web development, digital marketing, SEO, data analysis, and custom software solutions.';
    const metaImage = image || 'https://vypaxtechnologies.com/og-image.png';

    setMeta('meta[name="description"]', { name: 'description', content: metaDescription });
    if (keywords) setMeta('meta[name="keywords"]', { name: 'keywords', content: keywords });

    // Open Graph
    setMeta('meta[property="og:type"]', { property: 'og:type', content: type });
    setMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle });
    setMeta('meta[property="og:description"]', { property: 'og:description', content: metaDescription });
    setMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    setMeta('meta[property="og:image"]', { property: 'og:image', content: metaImage });
    setMeta('meta[property="og:image:width"]', { property: 'og:image:width', content: '1200' });
    setMeta('meta[property="og:image:height"]', { property: 'og:image:height', content: '630' });
    setMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Vypax Technologies' });
    setMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_IN' });

    // Twitter Card
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: fullTitle });
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: metaDescription });
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: metaImage });
    setMeta('meta[name="twitter:site"]', { name: 'twitter:site', content: '@Vypaxtechnology' });

    // Canonical
    setLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });
  }, [title, description, keywords, image, type]);
}