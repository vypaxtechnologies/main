export const companyConfig = {
  name: 'Vypax Technologies',
  tagline: 'Your Technology & Business Growth Partner',
  slogan: 'Build beyond limit',
  location: 'Haridwar, Uttarakhand, India',
  email: 'vypaxtechnologies@gmail.com',
  phone: '+91 75349 18828',
  teamEmails: {},
  whatsappNumber: '917534918828',
  website: 'https://vypaxtechnologies.com',
  foundedYear: 2024,
  social: {
    linkedin: 'https://www.linkedin.com/company/vypax-technologies',
    instagram: 'https://www.instagram.com/vypaxtechnologies',
    twitter: 'https://twitter.com/vypaxtech',
    facebook: 'https://www.facebook.com/vypaxtechnologies',
    github: 'https://github.com/vypaxtechnologies',
  },
  nav: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Team', path: '/team' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ],
};

export type CompanyConfig = typeof companyConfig;
