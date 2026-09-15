import { Link } from 'react-router-dom';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" aria-label="Vypax Technologies home" className={`flex items-center ${className}`}>
      <img src="/logo.svg" alt="Vypax Technologies" className="h-10 w-auto" />
    </Link>
  );
}
