export interface Review {
  id: string;
  name: string;
  company: string;
  rating: number;
  text: string;
  isPlaceholder: boolean;
}

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Demo Client One',
    company: 'Demo Company',
    rating: 5,
    text: 'This is a placeholder testimonial. Replace it with a genuine client review when available.',
    isPlaceholder: true,
  },
  {
    id: 'r2',
    name: 'Demo Client Two',
    company: 'Sample Business',
    rating: 5,
    text: 'This is a placeholder testimonial. Replace it with a genuine client review when available.',
    isPlaceholder: true,
  },
  {
    id: 'r3',
    name: 'Demo Client Three',
    company: 'Example Ventures',
    rating: 5,
    text: 'This is a placeholder testimonial. Replace it with a genuine client review when available.',
    isPlaceholder: true,
  },
];
