import {
  Code2,
  Megaphone,
  Search,
  MapPin,
  BarChart3,
  Boxes,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  technologies: string[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Website Development',
    shortTitle: 'Web Development',
    description:
      'Fast, modern and scalable websites designed to convert visitors into customers.',
    icon: Code2,
    features: [
      'Responsive design for all devices',
      'Performance-optimized builds',
      'SEO-friendly structure',
      'CMS integration available',
      'E-commerce capabilities',
      'Ongoing maintenance & support',
    ],
    technologies: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    faqs: [
      { q: 'How much does a website cost?', a: 'Website pricing depends on your project requirements — number of pages, features, design complexity, and integrations. Request a free consultation and we\'ll provide a tailored quote.' },
      { q: 'How long does website development take?', a: 'A typical business website takes 2–4 weeks. Larger projects with custom features may take 6–8 weeks. We\'ll give you a clear timeline after the discovery phase.' },
      { q: 'Do you provide ongoing maintenance?', a: 'Yes. We offer maintenance plans for security updates, content changes, performance monitoring, and feature enhancements.' },
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortTitle: 'Digital Marketing',
    description:
      'Data-driven digital marketing strategies focused on reach, leads and measurable growth.',
    icon: Megaphone,
    features: [
      'Social media marketing',
      'Google Ads management',
      'Content marketing',
      'Email campaigns',
      'Lead generation funnels',
      'Performance analytics',
    ],
    technologies: ['Google Ads', 'Meta Ads', 'Google Analytics', 'Mailchimp', 'Canva'],
    faqs: [
      { q: 'Do you provide digital marketing?', a: 'Yes. We create and manage data-driven campaigns across social media, search, and email to grow your reach and generate qualified leads.' },
      { q: 'How do you measure results?', a: 'We track impressions, clicks, conversions, cost-per-lead, and ROI using analytics dashboards, with regular reporting so you always see what\'s working.' },
    ],
  },
  {
    slug: 'seo',
    title: 'SEO',
    shortTitle: 'SEO',
    description:
      'Search engine optimization that improves visibility, rankings and qualified organic traffic.',
    icon: Search,
    features: [
      'Technical SEO audit',
      'On-page optimization',
      'Keyword research',
      'Local SEO & GMB',
      'Link building strategy',
      'Monthly ranking reports',
    ],
    technologies: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Schema Markup'],
    faqs: [
      { q: 'Do you provide SEO services?', a: 'Yes. We improve your search visibility through technical audits, on-page optimization, keyword strategy, and local SEO — including Google Business Profile optimization.' },
      { q: 'How long until I see SEO results?', a: 'SEO is a long-term strategy. Most clients see meaningful improvement in 3–6 months, with compounding gains over time.' },
    ],
  },
  {
    slug: 'google-business-profile',
    title: 'Google Business Profile Optimization',
    shortTitle: 'Google Business Profile',
    description:
      'Improve local visibility, engagement and customer discovery through optimized Google Business presence.',
    icon: MapPin,
    features: [
      'Profile setup & verification',
      'Keyword-optimized descriptions',
      'Review management strategy',
      'Photo & post optimization',
      'Q&A monitoring',
      'Local ranking improvement',
    ],
    technologies: ['Google Business Profile', 'Google Maps', 'Local Schema'],
    faqs: [
      { q: 'What is Google Business Profile optimization?', a: 'We set up and optimize your Google Business listing so you appear in local search results and Google Maps, making it easier for nearby customers to find and choose you.' },
      { q: 'Do you work with businesses outside Roorkee?', a: 'Yes. While we\'re based in Roorkee, we work with clients across India and remotely.' },
    ],
  },
  {
    slug: 'data-analysis-data-science',
    title: 'Data Analysis & Data Science',
    shortTitle: 'Data Analysis & Data Science',
    description:
      'Turn business data into clear insights that reveal problems, improve decisions, and increase sales.',
    icon: BarChart3,
    features: [
      'Business performance analysis',
      'Problem and root-cause analysis',
      'Sales and customer behavior insights',
      'Dashboards and reporting',
      'Forecasting and trend analysis',
      'Data-backed growth recommendations',
    ],
    technologies: ['Python', 'SQL', 'Pandas', 'Power BI', 'Google Analytics'],
    faqs: [
      { q: 'How can data analysis help my business?', a: 'We analyze your business, customer, and sales data to identify what is working, where problems are occurring, and which changes can improve growth.' },
      { q: 'Can you help us increase sales?', a: 'Yes. We use customer behavior, funnel, and sales analysis to identify opportunities, reduce drop-offs, and recommend practical ways to increase conversions and revenue.' },
    ],
  },
  {
    slug: 'custom-software',
    title: 'Custom Software Solutions',
    shortTitle: 'Custom Software',
    description:
      'Business-focused software solutions designed to solve unique operational challenges.',
    icon: Boxes,
    features: [
      'Custom web applications',
      'Internal tool development',
      'API integration & automation',
      'Database design',
      'Cloud deployment',
      'Scalable architecture',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Supabase', 'Docker', 'AWS'],
    faqs: [
      { q: 'What kind of custom software do you build?', a: 'We build web applications, internal tools, dashboards, and automation systems tailored to your specific business workflows.' },
      { q: 'Can you integrate with our existing systems?', a: 'Yes. We work with existing APIs, databases, and third-party tools to connect your systems and automate workflows.' },
    ],
  },
];

export const serviceStrip = [
  { name: 'Web Development', phrase: 'Fast, modern, scalable' },
  { name: 'Digital Marketing', phrase: 'Reach, leads, growth' },
  { name: 'SEO', phrase: 'Rank, visibility, traffic' },
  { name: 'Cloud Solutions', phrase: 'Scalable infrastructure' },
  { name: 'Software Solutions', phrase: 'Custom-built for you' },
  { name: 'Business Growth', phrase: 'Strategy that scales' },
];

export const serviceDropdown = [
  'Website Development',
  'Digital Marketing',
  'SEO',
  'Google Business Profile Optimization',
  'Data Analysis & Data Science',
  'Custom Software',
  'Other',
];
