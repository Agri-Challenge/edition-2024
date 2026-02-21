'use client';

import { useEffect, useRef, ReactNode, ElementType } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
  as?: ElementType;
}

export default function AnimatedSection({
  children,
  className = '',
  stagger = false,
  delay = 0,
  as: Tag = 'div',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => el.classList.add('visible'), delay);
          } else {
            el.classList.add('visible');
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const baseClass = stagger ? 'reveal-stagger' : 'reveal';

  return (
    <Tag ref={ref} className={`${baseClass} ${className}`}>
      {children}
    </Tag>
  );
}
