'use client';

import { Reveal } from '@/components/reveal';
import { Layout, Zap, Search, Smartphone, Mail, BarChart } from 'lucide-react';

const deliverables = [
  {
    icon: Layout,
    title: 'Una landing completa',
    description: 'Una sola página, bien estructurada y enfocada en convertir.',
  },
  {
    icon: Zap,
    title: 'Carga optimizada',
    description: 'Tiempos de carga rápidos para no perder visitas por espera.',
  },
  {
    icon: Search,
    title: 'SEO técnico',
    description: 'Base sólida para que Google entienda y posicione tu web.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-first',
    description: 'Pensada primero para celular, después para el resto.',
  },
  {
    icon: Mail,
    title: 'Conexión con contacto',
    description: 'Integración con WhatsApp, email o el canal que uses.',
  },
  {
    icon: BarChart,
    title: 'Accesibilidad',
    description: 'Navegable por cualquier persona, en cualquier dispositivo.',
  },
];

export function Deliverables() {
  return (
    <section className="relative bg-secondary/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
            04 — Qué vas a recibir
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl">
            Una landing que hace bien su trabajo.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, i) => (
            <Reveal key={item.title} delay={i * 80} direction="up">
              <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-brand/30 hover:shadow-md">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-110">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
