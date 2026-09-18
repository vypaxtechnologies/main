import { useRef, type PointerEvent, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
  const bounds = useRef<DOMRect | null>(null);
  const rotateX = useSpring(0, { stiffness: 220, damping: 24, mass: 0.5 });
  const rotateY = useSpring(0, { stiffness: 220, damping: 24, mass: 0.5 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const shadowX = useTransform(rotateY, [-8, 8], [8, -8]);
  const shadowY = useTransform(rotateX, [-8, 8], [-8, 8]);

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') return;
    bounds.current = event.currentTarget.getBoundingClientRect();
    const { left, top, width, height } = bounds.current;
    const x = event.clientX - left;
    const y = event.clientY - top;
    rotateX.set(((y / height) - 0.5) * -8);
    rotateY.set(((x / width) - 0.5) * 8);
    glowX.set((x / width) * 100);
    glowY.set((y / height) * 100);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <motion.div
      className={`group relative [transform-style:preserve-3d] ${className}`}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{
        rotateX,
        rotateY,
        boxShadow: useTransform([shadowX, shadowY], ([x, y]) => `${x}px ${y}px 28px -14px var(--shadow-soft)`),
      }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: useTransform([glowX, glowY], ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(33, 150, 243, 0.14), transparent 34%)`) }}
      />
      {children}
    </motion.div>
  );
}
