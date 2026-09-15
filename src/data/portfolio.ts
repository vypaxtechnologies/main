export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
}

export const portfolioCategories = [
  'All',
  'Web Development',
  'Digital Marketing',
  'SEO',
  'Branding',
  'Business Solutions',
];

export const portfolio: Project[] = [
  {
    id: 'p1',
    title: 'Corporate Website Redesign',
    category: 'Web Development',
    description: 'A modern, responsive corporate website with improved navigation and lead capture.',
    tags: ['React', 'Tailwind CSS', 'SEO'],
    image: '',
  },
  {
    id: 'p2',
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'Full-featured online store with cart, checkout, and inventory management.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    image: '',
  },
  {
    id: 'p3',
    title: 'Local Business Growth Campaign',
    category: 'Digital Marketing',
    description: 'Targeted social media and Google Ads campaign for a local service business.',
    tags: ['Google Ads', 'Meta Ads', 'Analytics'],
    image: '',
  },
  {
    id: 'p4',
    title: 'SEO Optimization Project',
    category: 'SEO',
    description: 'Technical SEO overhaul resulting in improved organic search rankings.',
    tags: ['Technical SEO', 'Content', 'Schema'],
    image: '',
  },
  {
    id: 'p5',
    title: 'Brand Identity Design',
    category: 'Branding',
    description: 'Logo, color system, and brand guidelines for a technology startup.',
    tags: ['Logo', 'Brand Guide', 'Design System'],
    image: '',
  },
  {
    id: 'p6',
    title: 'Internal Operations Dashboard',
    category: 'Business Solutions',
    description: 'Custom dashboard for tracking business KPIs and operational metrics.',
    tags: ['React', 'Node.js', 'Charts'],
    image: '',
  },
];
