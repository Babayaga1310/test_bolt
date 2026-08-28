'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  as: Tag = 'div',
}: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const directionClasses: Record<string, string> = {
    up: 'translate-y-8',
    left: '-translate-x-8',
    right: 'translate-x-8',
    scale: 'scale-95',
  };

  return (
    <Tag
      ref={ref as never}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : cn('opacity-0', directionClasses[direction]),
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
