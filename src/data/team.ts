export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const team: TeamMember[] = [
  {
    id: 'vishnu',
    name: 'Vishnu Chauhan',
    role: 'Founder',
    bio: 'Leading Vypax Technologies with a vision for technology-driven business growth.',
    image: '',
    social: {},
  },
  {
    id: 'ansh',
    name: 'Ansh Kumar',
    role: 'Co-Founder',
    bio: 'Driving strategy and partnerships to help clients build beyond their limits.',
    image: '',
    social: {},
  },
  {
    id: 'harsh',
    name: 'Harsh Saini',
    role: 'Director',
    bio: 'Overseeing operations and ensuring delivery excellence across projects.',
    image: '',
    social: {},
  },
  {
    id: 'abhinav',
    name: 'Abhinav Chauhan',
    role: 'Technical Officer (TO)',
    bio: 'Architecting technical solutions and leading the development team.',
    image: '',
    social: {},
  },
];
