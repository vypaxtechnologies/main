import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MouseTechFollower() {
  const [enabled, setEnabled] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 180, damping: 22, mass: 0.45 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 22, mass: 0.45 });

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointerQuery = window.matchMedia('(pointer: fine)');
    const updateEnabled = () => setEnabled(pointerQuery.matches && !reduceMotion.matches);
    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    updateEnabled();
    window.addEventListener('mousemove', handleMove, { passive: true });
    pointerQuery.addEventListener('change', updateEnabled);
    reduceMotion.addEventListener('change', updateEnabled);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      pointerQuery.removeEventListener('change', updateEnabled);
      reduceMotion.removeEventListener('change', updateEnabled);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] h-16 w-16 -translate-x-1/2 -translate-y-1/2"
      style={{ x: springX, y: springY }}
    >
      <motion.span
        className="absolute inset-0 rounded-full border border-brand-blue/35"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <motion.span
        className="absolute inset-2 rounded-full border border-dashed border-brand-cyan/45"
        animate={{ rotate: -360 }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />
      <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue shadow-glow" />
      <span className="absolute left-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-brand-cyan" />
      <span className="absolute right-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-brand-cyan" />
    </motion.div>
  );
}