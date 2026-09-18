import { FormEvent, useState } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { services } from '@/data/services';
import { blogPosts, careers, industries, portfolioProjects } from '@/data/siteContent';

const staticRoutes = [
  { terms: ['home', 'homepage'], path: '/' },
  { terms: ['about', 'company', 'team'], path: '/about' },
  { terms: ['service', 'services'], path: '/services' },
  { terms: ['solution', 'solutions', 'industry', 'industries'], path: '/solutions' },
  { terms: ['project', 'projects', 'portfolio', 'work'], path: '/projects' },
  { terms: ['training', 'development', 'learning', 'course', 'price', 'cost', 'package'], path: '/training-development' },
  { terms: ['blog', 'article', 'insight', 'resource'], path: '/blog' },
  { terms: ['career', 'careers', 'job', 'jobs', 'hiring'], path: '/careers' },
  { terms: ['contact', 'email', 'reach'], path: '/contact' },
];

function findRoute(query: string): string {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return '/services';

  const matchingService = services.find((service) =>
    [service.title, service.shortTitle, service.slug].some((value) =>
      value.toLowerCase().includes(normalizedQuery) || normalizedQuery.includes(value.toLowerCase()),
    ),
  );
  if (matchingService) return `/services/${matchingService.slug}`;

  const contentEntries = [
    ...portfolioProjects.map((item) => ({ text: `${item.title} ${item.category}`, path: '/projects' })),
    ...blogPosts.map((item) => ({ text: `${item.title} ${item.category}`, path: '/blog' })),
    ...industries.map((item) => ({ text: `${item.title} ${item.subtitle}`, path: '/solutions' })),
    ...careers.map((item) => ({ text: `${item.title} ${item.type}`, path: '/careers' })),
  ];
  const contentMatch = contentEntries.find((item) => item.text.toLowerCase().includes(normalizedQuery));
  if (contentMatch) return contentMatch.path;

  const routeMatch = staticRoutes.find((route) => route.terms.some((term) => normalizedQuery.includes(term)));
  return routeMatch?.path ?? '/services';
}

export default function SearchFloatingButton() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate(findRoute(query));
    setQuery('');
    setOpen(false);
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <form onSubmit={handleSubmit} className="flex w-[calc(100vw-3rem)] max-w-sm items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-2 shadow-card">
          <Search className="ml-2 h-4 w-4 shrink-0 text-brand-blue dark:text-brand-cyan" />
          <input
            autoFocus
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search services, projects..."
            aria-label="Search the website"
            className="min-w-0 flex-1 bg-transparent px-1 py-2 text-sm text-[var(--text)] outline-none"
          />
          <button type="submit" aria-label="Submit search" className="icon-tile h-9 w-9 shrink-0 rounded-xl">
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      )}

      <div className="group relative">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close website search' : 'Open website search'}
          className="icon-tile h-12 w-12 rounded-full shadow-soft transition-transform hover:scale-110"
        >
          {open ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
        </button>
        <span className="pointer-events-none absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-xs font-medium text-navy-900 opacity-0 shadow-card transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100 dark:text-white">
          Search website
        </span>
      </div>
    </div>
  );
}
