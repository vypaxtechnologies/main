import { Link } from 'react-router-dom';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" aria-label="Vypax Technologies home" className={`flex items-center ${className}`}>
      <img
        src="/Vypax%20without%20background%20logo.png"
        alt="Vypax Technologies"
        className="h-14 w-14 object-contain sm:h-16 sm:w-16"
      />
    </Link>
  );
}
