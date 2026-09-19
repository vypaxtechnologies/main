export interface FAQItem {
  q: string;
  a: string;
}

export const generalFaqs: FAQItem[] = [
  {
    q: 'What services does Vypax Technologies provide?',
    a: 'We provide website development, digital marketing, SEO, Google Business Profile optimization, data analysis and data science, and custom software solutions — all designed to help businesses grow through technology.',
  },
  {
    q: 'How much does a website cost?',
    a: 'Website pricing depends on your project requirements — number of pages, features, design complexity, and integrations. Request a free consultation and we\'ll provide a tailored quote.',
  },
  {
    q: 'Do you provide SEO services?',
    a: 'Yes. We improve your search visibility through technical audits, on-page optimization, keyword strategy, and local SEO — including Google Business Profile optimization.',
  },
  {
    q: 'How can I start a project?',
    a: 'Use the contact form on our website, email us, or start a WhatsApp conversation. We\'ll schedule a free consultation to understand your needs and propose a plan.',
  },
  {
    q: 'Do you provide ongoing maintenance and support?',
    a: 'Yes. We offer maintenance plans for security updates, content changes, performance monitoring, and feature enhancements.',
  },
];

export const careers = [
  {
    id: 'c1',
    title: 'Business Development Executive (BDE) Intern',
    type: 'Internship',
    location: 'Remote',
    description: 'Support outreach, partnership conversations, lead research, and business growth initiatives while learning how technology services are positioned and delivered.',
    isPlaceholder: false,
  },
  {
    id: 'c2',
    title: 'Project Management Executive (PME) Intern',
    type: 'Internship',
    location: 'Remote',
    description: 'Help coordinate project timelines, requirements, team updates, documentation, and delivery follow-ups across digital and technology projects.',
    isPlaceholder: false,
  },
  {
    id: 'c3',
    title: 'SEO Executive Intern',
    type: 'Internship',
    location: 'Remote',
    description: 'Improve organic visibility through technical audits, keyword research, on-page optimization, content direction, and search performance tracking.',
    isPlaceholder: false,
  },
];
