'use client';

import { Reveal } from '@/components/reveal';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Trabajar con Franco fue muy fácil. Entendió rápido lo que necesitaba y la web superó mis expectativas.',
    author: 'María González',
    role: 'Esteticista — Lumina',
  },
  {
    quote:
      'La landing cargó rápido y se ve increíble en el celular. Empecé a recibir consultas la primera semana.',
    author: 'Diego Martínez',
    role: 'Profesor — Studio Fit',
  },
  {
    quote:
      'Profesional de principio a fin. Me ayudó a ordenar las ideas y el resultado fue exactamente lo que necesitaba.',
    author: 'Lucía Fernández',
    role: 'Arquitecta — Nordic Studio',
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
            Lo que dicen
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl">
            Clientes conformos con los resultados.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 120} direction="up">
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-brand/30 hover:shadow-lg">
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={16}
                      className="fill-brand text-brand"
                    />
                  ))}
                </div>
                <blockquote className="flex-1 text-sm text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
