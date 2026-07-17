import type { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

/**
 * Shared gradient section heading. Sized to read as a bold statement
 * without dominating the whole viewport on a real desktop screen.
 */
export default function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return (
    <h2
      className={`hero-heading font-black uppercase text-center leading-none tracking-tight ${className}`}
      style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
    >
      {children}
    </h2>
  );
}
