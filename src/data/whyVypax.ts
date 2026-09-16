import {
  Layers,
  TrendingUp,
  Cpu,
  MessageSquare,
  LifeBuoy,
  Maximize2,
  type LucideIcon,
} from 'lucide-react';

export interface WhyItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyVypax: WhyItem[] = [
  {
    title: 'Customized Solutions',
    description: 'Every business is unique. We tailor our technology and strategy to your specific goals.',
    icon: Layers,
  },
  {
    title: 'Growth Focused',
    description: 'We measure success by your growth — leads, revenue, and visibility — not just deliverables.',
    icon: TrendingUp,
  },
  {
    title: 'Technology Driven',
    description: 'Modern tools and best practices keep your business ahead of the curve.',
    icon: Cpu,
  },
  {
    title: 'Transparent Communication',
    description: 'Clear timelines, honest updates, and no surprises throughout the project.',
    icon: MessageSquare,
  },
  {
    title: 'Dedicated Support',
    description: 'We\'re with you before, during, and after launch — your success is ongoing.',
    icon: LifeBuoy,
  },
  {
    title: 'Scalable Solutions',
    description: 'Built to grow with you, so your technology never holds you back.',
    icon: Maximize2,
  },
];

export const processSteps = [
  { num: '01', title: 'Discover', description: 'Requirements, business goals, audience and technical assessment.', icon: 'search' },
  { num: '02', title: 'Strategy', description: 'Scope, architecture, timeline and success metrics.', icon: 'clipboard' },
  { num: '03', title: 'Build', description: 'UI/UX, development, integrations and testing.', icon: 'hammer' },
  { num: '04', title: 'Launch', description: 'Deployment, QA, analytics and handover.', icon: 'rocket' },
  { num: '05', title: 'Optimize', description: 'Maintenance, SEO, performance and continuous improvement.', icon: 'trending-up' },
];

export const aboutValues = [
  { title: 'Innovation', description: 'We embrace new technology and creative thinking to solve real problems.' },
  { title: 'Integrity', description: 'Honest communication and transparent processes in everything we do.' },
  { title: 'Growth', description: 'We succeed when you succeed — your growth is our benchmark.' },
  { title: 'Excellence', description: 'We hold ourselves to a high standard on every project, large or small.' },
];
