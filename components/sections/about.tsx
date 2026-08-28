'use client';

import { Reveal } from '@/components/reveal';
import { Check } from 'lucide-react';

const features = [
  'Tu web tiene que explicar qué hacés y facilitar el próximo paso.',
  'Sin vueltas ni contenido de relleno.',
  'Una página simple de entender, rápida de cargar y cómoda desde el celular.',
];

export function About() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
            Lo importante
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl">
            Tu web tiene que explicar qué hacés y{' '}
            <span className="text-muted-foreground">facilitar el próximo paso.</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 text-lg text-muted-foreground text-balance">
            Sin vueltas ni contenido de relleno. Una página simple de entender,
            rápida de cargar y cómoda de usar desde el celular.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={i} delay={300 + i * 100} direction="up">
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Check size={20} />
                </div>
                <p className="text-sm text-muted-foreground">{feature}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
