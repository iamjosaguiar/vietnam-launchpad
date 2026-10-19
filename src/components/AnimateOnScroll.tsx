import { ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale';
  delay?: number;
  threshold?: number;
}

/**
 * Wrapper kept for call-site compatibility. Content renders fully visible on
 * first paint, with or without JavaScript; there is no scroll-triggered reveal.
 */
export default function AnimateOnScroll({ children, className = '' }: AnimateOnScrollProps) {
  return <div className={className || undefined}>{children}</div>;
}
