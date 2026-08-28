'use client';

import { Reveal } from '@/components/reveal';
import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
}

function Counter({ value, suffix, label }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const start = Date.now();
          const animate = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-bold text-foreground sm:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative bg-secondary/30 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <Counter value={30} suffix="+" label="Proyectos entregados" />
            <Counter value={100} suffix="%" label="Clientes conformos" />
            <Counter value={24} suffix="h" label="Tiempo de respuesta" />
            <Counter value={98} suffix="%" label="Velocidad en Lighthouse" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
