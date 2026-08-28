'use client';

import { Reveal } from '@/components/reveal';
import { MessageCircle, Palette, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Charlamos',
    description:
      'Me contás qué ofrecés, a quién y qué querés lograr con la página.',
  },
  {
    icon: Palette,
    title: 'La diseño',
    description:
      'Ordeno el contenido y preparo una propuesta visual pensada para tu negocio.',
  },
  {
    icon: Code,
    title: 'La desarrollo',
    description:
      'Construyo la landing, la adapto a móvil y optimizo su velocidad.',
  },
  {
    icon: Rocket,
    title: 'La publicamos',
    description:
      'Revisamos los detalles y queda online, lista para recibir consultas.',
  },
];

export function Process() {
  return (
    <section id="proceso" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
            03 — Cómo es el proceso
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl">
            Simple y sin complicaciones.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 120} direction="up">
                <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                  {/* Icon circle */}
                  <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card transition-all duration-300 hover:border-brand hover:shadow-lg hover:shadow-brand/10">
                    <step.icon size={26} className="text-brand" />
                    {/* Step number */}
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="mb-2 font-display text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
