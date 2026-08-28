'use client';

import { Reveal } from '@/components/reveal';
import { FileText, Palette, Smartphone, Gauge } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Contenido y estructura',
    description:
      'Ordeno lo que querés contar para que se entienda rápido y lleve a una consulta.',
  },
  {
    icon: Palette,
    title: 'Diseño a medida',
    description:
      'Diseño una página propia para tu negocio, sin plantillas genéricas.',
  },
  {
    icon: Smartphone,
    title: 'Desarrollo responsive',
    description:
      'La construyo para que funcione bien en celular, tablet y computadora.',
  },
  {
    icon: Gauge,
    title: 'Velocidad y SEO',
    description:
      'Optimizo carga, accesibilidad y SEO técnico para que tu web tenga una base sólida.',
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative bg-secondary/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
            02 — Qué hago
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl">
            Me ocupo de tu landing de principio a fin.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 100} direction="up">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-110">
                  <service.icon size={24} />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
                {/* Number watermark */}
                <span className="absolute right-4 top-4 font-display text-5xl font-bold text-muted/30 select-none">
                  0{i + 1}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
