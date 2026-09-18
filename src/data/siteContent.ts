import {
  BarChart3,
  Blocks,
  Briefcase,
  Building2,
  Code2,
  Cpu,
  Database,
  Globe,
  GraduationCap,
  Handshake,
  LayoutDashboard,
  LineChart,
  Megaphone,
  MessageSquare,
  Monitor,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react';

export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  outcomes: string[];
  technologies: string[];
  industries: string[];
}

export interface IndustryItem {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
}

export interface ProjectItem {
  title: string;
  category: string;
  summary: string;
  result: string;
  impact: string;
  technologies: string[];
  accent: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface TechItem {
  name: string;
  category: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface BlogPost {
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
}

export interface PageFaq {
  question: string;
  answer: string;
}

export interface CareerItem {
  title: string;
  type: string;
  location: string;
  description: string;
}

export const heroStats = [
  { value: '01', label: 'Clear direction' },
  { value: '02', label: 'Thoughtful design' },
  { value: '03', label: 'Reliable delivery' },
  { value: '04', label: 'Long-term support' },
];

export const services: ServiceItem[] = [
  {
    slug: 'web-development',
    title: 'Website Development',
    shortTitle: 'Web Development',
    description: 'High-converting business websites, landing pages, and customer journeys built for speed, clarity, and conversions.',
    icon: Code2,
    outcomes: ['Faster user journeys', 'Higher conversion rates', 'Responsive experience across devices'],
    technologies: ['React', 'Node.js', 'Tailwind CSS', 'CMS', 'SEO-ready architecture'],
    industries: ['Professional services', 'Startups', 'Retail', 'Education'],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortTitle: 'Growth Marketing',
    description: 'Campaign strategy and execution for demand generation, paid acquisition, brand growth, and measurable lead quality.',
    icon: Megaphone,
    outcomes: ['More qualified leads', 'Stronger ad efficiency', 'Clear reporting'],
    technologies: ['Meta Ads', 'Google Ads', 'Analytics', 'CRM tracking', 'Content strategy'],
    industries: ['Healthcare', 'Real estate', 'B2B', 'eCommerce'],
  },
  {
    slug: 'seo',
    title: 'SEO & Search Visibility',
    shortTitle: 'SEO',
    description: 'Technical and content-led SEO frameworks that improve authority, discoverability, and sustainable organic traffic.',
    icon: Search,
    outcomes: ['Higher rankings', 'More qualified traffic', 'Improved trust and visibility'],
    technologies: ['Technical SEO', 'On-page optimization', 'Schema', 'Keyword strategy', 'Search Console'],
    industries: ['Local businesses', 'SaaS', 'Agencies', 'Consumer brands'],
  },
  {
    slug: 'google-business-profile',
    title: 'Google Business Profile Optimization',
    shortTitle: 'Local SEO',
    description: 'Local visibility systems that help businesses win more nearby opportunities and improve trust with searchers.',
    icon: Building2,
    outcomes: ['More local calls', 'Better map visibility', 'Greater customer trust'],
    technologies: ['GBP optimization', 'Local SEO', 'Review strategy', 'Map ranking audits'],
    industries: ['Clinics', 'Hospitality', 'Legal', 'Home services'],
  },
  {
    slug: 'data-analysis',
    title: 'Data Analysis & Data Science',
    shortTitle: 'Insights',
    description: 'Business intelligence, dashboards, and predictive thinking that turn raw data into smarter decisions and growth opportunities.',
    icon: BarChart3,
    outcomes: ['Fewer blind spots', 'Actionable insights', 'Smarter planning'],
    technologies: ['Python', 'SQL', 'Power BI', 'Pandas', 'Dashboard design'],
    industries: ['Finance', 'Logistics', 'Operations', 'Sales teams'],
  },
  {
    slug: 'custom-software',
    title: 'Custom Software Solutions',
    shortTitle: 'Software',
    description: 'Workflow automation, internal tools, dashboard products, and scalable digital systems tailored to your operations.',
    icon: Blocks,
    outcomes: ['Automated workflows', 'Lower operational friction', 'Better productivity'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Supabase', 'API integrations'],
    industries: ['Operations', 'Healthcare', 'Fintech', 'B2B SaaS'],
  },
];

export const industries: IndustryItem[] = [
  {
    title: 'Startups',
    subtitle: 'Early traction, MVP momentum',
    description: 'Launch faster with product strategy, high-converting marketing, and systems designed for growth.',
    icon: Sparkles,
  },
  {
    title: 'Healthcare',
    subtitle: 'Trust-first digital experiences',
    description: 'Create clear patient journeys, polished digital presence, and compliant communication systems.',
    icon: ShieldCheck,
  },
  {
    title: 'Professional Services',
    subtitle: 'Credibility and visibility',
    description: 'Make complex expertise easier to understand and easier to trust online.',
    icon: Briefcase,
  },
  {
    title: 'Education',
    subtitle: 'Learning journeys that convert',
    description: 'Build engaging, accessible digital experiences for students, parents, and recruiters.',
    icon: GraduationCap,
  },
  {
    title: 'Real Estate',
    subtitle: 'Property journeys that inspire action',
    description: 'Turn property discovery into lead generation through premium experiences and cleaner funnel design.',
    icon: Building2,
  },
  {
    title: 'B2B & SaaS',
    subtitle: 'Product-led growth systems',
    description: 'Translate technical value into clearer positioning, smoother onboarding, and scalable acquisition funnels.',
    icon: LayoutDashboard,
  },
];

export const whyChooseVypax: WhyChooseItem[] = [
  {
    title: 'Strategy-first thinking',
    description: 'We align design, technology, and growth goals before building anything so every decision has business context.',
    icon: Handshake,
  },
  {
    title: 'Customer-focused delivery',
    description: 'Your user experience matters as much as the final feature set, which is why we design for clarity and conversion.',
    icon: Users,
  },
  {
    title: 'Transparent communication',
    description: 'Clear milestones, realistic timelines, and regular updates keep your stakeholders aligned at every step.',
    icon: MessageSquare,
  },
  {
    title: 'Performance at the core',
    description: 'We build with speed, accessibility, and maintainability in mind so your digital asset works long-term.',
    icon: Cpu,
  },
  {
    title: 'Growth-led execution',
    description: 'From product strategy to campaign optimization, the work is designed to move your business forward and create measurable outcomes.',
    icon: TrendingUp,
  },
  {
    title: 'Technology anchored in results',
    description: 'We use the right stack for your business problem instead of forcing a trend or template into every project.',
    icon: Database,
  },
];

export const portfolioProjects = [
  {
    title: 'Digital Growth Platform',
    category: 'SaaS / Lead Generation',
    summary: 'A conversion-first growth platform for a B2B brand that needed stronger demand generation and cleaner onboarding.',
    result: '+184% qualified pipeline growth',
    impact: 'Rebuilt funnel architecture, CTA model, and lead automation flow.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Analytics'],
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Clinic Growth System',
    category: 'Healthcare',
    summary: 'A premium web presence and local SEO system for a multi-location healthcare business.',
    result: '+63% appointment requests',
    impact: 'Improved visibility, conversion paths, and appointment confidence.',
    technologies: ['SEO', 'UI Design', 'Google Business Profile', 'CRM'],
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Property Discovery Experience',
    category: 'Real Estate',
    summary: 'A polished property marketing website focused on trust, lead quality, and mobile discovery.',
    result: '+2.4x more qualified buyer enquiries',
    impact: 'Restructured the viewing journey and optimized property pages.',
    technologies: ['Next.js', 'Maps', 'Lead capture', 'Performance'],
    accent: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Ops Dashboard for Services Brand',
    category: 'Operations',
    summary: 'An internal dashboard for service operations, tracking leads, workflow efficiency, and activity insights.',
    result: '31% faster response cycle',
    impact: 'Centralized operational reporting and workflow visibility.',
    technologies: ['React', 'API Integrations', 'Charts', 'Automation'],
    accent: 'from-orange-500 to-amber-500',
  },
];

export const processSteps: ProcessStep[] = [
  { number: '01', title: 'Discover', description: 'We clarify goals, challenges, audience, and the business outcome you actually need.' },
  { number: '02', title: 'Strategy', description: 'We shape the plan, requirements, timelines, and technical approach with measurable success markers.' },
  { number: '03', title: 'Design', description: 'We build the user journey and visual system to create trust, clarity, and conversion.' },
  { number: '04', title: 'Build', description: 'We develop and test the product with performance, accessibility, and maintainability in mind.' },
  { number: '05', title: 'Grow', description: 'We optimize, support, and continuously improve once the experience is live.' },
];

export const techStack: TechItem[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'API' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'AWS', category: 'Hosting' },
  { name: 'Supabase', category: 'Data' },
  { name: 'Figma', category: 'Design' },
  { name: 'Google Analytics', category: 'Insights' },
  { name: 'SEO tooling', category: 'Growth' },
  { name: 'CRM integrations', category: 'Workflow' },
];

export const testimonials: TestimonialItem[] = [];

export const pricingPlans = [
  {
    name: 'Starter',
    price: 'From ₹18,000',
    description: 'For small businesses starting their digital momentum.',
    features: ['Business website or landing page', 'Responsive design', 'Basic SEO foundations', 'One round of revisions'],
  },
  {
    name: 'Growth',
    price: 'From ₹45,000',
    description: 'Best for businesses that need visibility and lead generation.',
    features: ['Custom web experience', 'Conversion-focused UX', 'Performance optimization', 'Google profile strategy', 'Reporting setup'],
    recommended: true,
  },
  {
    name: 'Scale',
    price: 'Custom Quote',
    description: 'For high-growth brands that need custom product and automation work.',
    features: ['Custom software systems', 'API integrations', 'Workflow automation', 'Ongoing optimization & support'],
  },
];

export const teamMembers: TeamMember[] = [
  { name: 'Ankit Sharma', role: 'Founder & Strategy Lead', bio: 'Leads company direction, client strategy, and digital growth planning.', initials: 'AS' },
  { name: 'Ritika Singh', role: 'Design Director', bio: 'Shapes the visual system, UX approach, and premium product experiences.', initials: 'RS' },
  { name: 'Aditya Verma', role: 'Engineering Lead', bio: 'Builds scalable, maintainable web solutions and system architecture.', initials: 'AV' },
  { name: 'Nisha Kapoor', role: 'Growth Strategist', bio: 'Connects channel strategy, messaging, and lead generation with measurable outcomes.', initials: 'NK' },
];

export const blogPosts: BlogPost[] = [
  { title: 'Why product strategy matters before building a website', category: 'Strategy', excerpt: 'A strong digital presence starts with the right business framing, not just a pretty homepage.', readTime: '4 min read', date: 'Aug 2026' },
  { title: 'How local SEO builds trust and enquiries for service businesses', category: 'SEO', excerpt: 'Local visibility can directly affect credibility, reach, and customer conversion in competitive markets.', readTime: '6 min read', date: 'Jul 2026' },
  { title: 'What makes a tech stack future-friendly for growing brands', category: 'Technology', excerpt: 'Choosing the right stack isn’t just about trends — it’s about maintainability and business fit.', readTime: '5 min read', date: 'Jun 2026' },
];

export const faqs: PageFaq[] = [
  { question: 'What types of businesses do you work with?', answer: 'We work with startups, professional service brands, local businesses, healthcare providers, SaaS teams, real estate businesses, and growth-focused companies that want stronger digital foundations.' },
  { question: 'Do you offer custom pricing?', answer: 'Yes. We tailor proposals to the project size, scope, and timeline. We also provide phased delivery for businesses that want a more flexible rollout.' },
  { question: 'Can you help with both design and development?', answer: 'Yes. We design and build digital experiences end-to-end, including user flow, brand alignment, engineering, optimization, and post-launch support.' },
  { question: 'How long does a typical project take?', answer: 'Timeline depends on the project complexity. A standard website typically takes 2–6 weeks; custom product or growth work can extend longer depending on requirements.' },
  { question: 'Do you support post-launch optimization?', answer: 'Absolutely. We can provide ongoing support, conversion improvements, analytics review, content updates, hosting guidance, and digital growth iteration.' },
];

export const careers: CareerItem[] = [
  { title: 'Frontend Developer', type: 'Full-time', location: 'Remote / India', description: 'Build polished user interfaces and product experiences for growth-focused digital projects.' },
  { title: 'Digital Marketing Specialist', type: 'Full-time', location: 'Remote / India', description: 'Lead campaign execution, content strategy, and analytics for client growth initiatives.' },
  { title: 'SEO Analyst', type: 'Contract', location: 'Remote / India', description: 'Support technical and content SEO improvements with a clear focus on measurable rankings and conversions.' },
];

export const adminQuickStats = [
  { label: 'Services', value: String(services.length) },
  { label: 'Projects', value: String(portfolioProjects.length) },
  { label: 'Posts', value: String(blogPosts.length) },
  { label: 'Enquiries', value: 'API' },
];

export const companyHighlights = [
  { icon: Globe, label: 'Remote-friendly delivery model' },
  { icon: Monitor, label: 'Premium design and UX systems' },
  { icon: LineChart, label: 'Growth metrics tied to execution' },
  { icon: Zap, label: 'Fast, lightweight, modern builds' },
];

export const trustPillars = [
  { icon: Star, label: 'Premium experience design' },
  { icon: ShieldCheck, label: 'Clear, transparent process' },
  { icon: TrendingUp, label: 'Performance-led decision making' },
  { icon: MessageSquare, label: 'Human, collaborative communication' },
];
