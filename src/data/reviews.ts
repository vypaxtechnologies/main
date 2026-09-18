export interface Review {
  id: string;
  name: string;
  category: string;
  text: string;
  outcome: string;
}

export const reviews: Review[] = [
  {
    id: 'professional-services-story',
    name: 'Professional services team',
    category: 'Website & positioning',
    text: 'The project helped the team turn a complex service offering into a clearer digital experience that was easier for prospects to understand.',
    outcome: 'Clearer story, smoother enquiry journey',
  },
  {
    id: 'local-business-story',
    name: 'Local business team',
    category: 'Local visibility',
    text: 'The work brought the website, local presence, and customer journey into one consistent experience instead of treating each channel separately.',
    outcome: 'More consistent presence across touchpoints',
  },
  {
    id: 'growth-team-story',
    name: 'Growth-focused team',
    category: 'Digital growth system',
    text: 'The collaboration gave the team a practical foundation for testing ideas, learning from user behaviour, and improving the experience over time.',
    outcome: 'A stronger foundation for informed decisions',
  },
];