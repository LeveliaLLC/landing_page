import { motion as Motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import type { ReactNode } from 'react';

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

export default function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`relative border border-slate-800 bg-slate-900/50 overflow-hidden group ${className}`}
      onMouseMove={handleMouseMove}
    >
      <Motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(250, 204, 21, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
