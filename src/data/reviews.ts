export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  photo?: string;
}

export const reviews: Review[] = [
  {
    id: 'rahul-sharma',
    name: 'Rahul Sharma',
    rating: 5,
    text: 'Vypax Technologies delivered a clean, modern website for our business. Their communication was excellent, and the development process was smooth and professional.',
  },
  {
    id: 'priya-singh',
    name: 'Priya Singh',
    rating: 4.5,
    text: 'The team understood our requirements very well and helped us build a professional digital presence. Their attention to detail and support were impressive.',
  },
  {
    id: 'amit-kapoor',
    name: 'Amit Kapoor',
    rating: 4.5,
    text: 'Vypax Technologies understood our business goals and created a fast, responsive, and easy-to-use website. We were happy with the final result.',
  },
  {
    id: 'neha-mehta',
    name: 'Neha Mehta',
    rating: 4.5,
    text: 'The team helped improve our online presence with creative ideas and effective digital solutions. They were supportive throughout the project.',
  },
  {
    id: 'vikram-saini',
    name: 'Vikram Saini',
    rating: 4.5,
    text: 'A very professional team that provides practical solutions. Our website looks modern and represents our brand perfectly.',
  },
];