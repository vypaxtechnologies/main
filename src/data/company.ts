export const companyConfig = {
  name: 'Vypax Technologies',
  tagline: 'Your Technology & Business Growth Partner',
  slogan: 'Build beyond limit',
  location: 'Haridwar, Uttarakhand, India',
  email: 'vypaxtechnologies@gmail.com',
  phone: '+91 75349 18828',
  whatsappNumber: '917534918828',
  website: 'https://vypaxtechnologies.com',
  foundedYear: 2024,
  social: {
    x: 'https://x.com/Vypaxtechnology',
    linkedin: 'https://www.linkedin.com/company/vypax-technologies/',
    instagram: 'https://www.instagram.com/vypaxtechnologies',
    facebook: 'https://www.facebook.com/vypaxtechnologies/',
  },
  nav: [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
  exploreNav: [

    { label: 'Training & Development', path: '/training-development', description: 'Build practical technology and digital skills.' },
    { label: 'Blog', path: '/blog', description: 'Practical ideas for digital growth.' },
    { label: 'Jobs', path: '/jobs', description: 'Join a thoughtful, growing team.' },
  ],
};

export type CompanyConfig = typeof companyConfig;