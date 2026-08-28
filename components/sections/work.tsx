'use client';

import { useState } from 'react';
import { Reveal } from '@/components/reveal';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 'studio-fit',
    category: 'Fitness & bienestar',
    title: 'Studio Fit',
    description:
      'Concepto de landing para presentar clases, generar confianza y convertir visitas en nuevas inscripciones.',
    image:
      'https://images.pexels.com/photos/38641885/pexels-photo-38641885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Conversión', 'Clases', 'Inscripciones'],
  },
  {
    id: 'lumina',
    category: 'Estética & salud',
    title: 'Lumina',
    description:
      'Experiencia conceptual enfocada en explicar tratamientos y facilitar la reserva de un primer turno.',
    image:
      'https://images.pexels.com/photos/7446659/pexels-photo-7446659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Reservas', 'Tratamientos', 'Confianza'],
  },
  {
    id: 'nordic-studio',
    category: 'Arquitectura & interiorismo',
    title: 'Nordic Studio',
    description:
      'Portfolio conceptual donde los proyectos toman protagonismo y cada recorrido termina en una consulta.',
    image:
      'https://images.pexels.com/photos/38563922/pexels-photo-38563922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Portfolio', 'Proyectos', 'Consulta'],
  },
  {
    id: 'atelier',
    category: 'Moda & producto',
    title: 'Atelier',
    description:
      'Dirección digital conceptual para una marca de autor, diseñada para transmitir valor desde el primer vistazo.',
    image:
      'https://images.pexels.com/photos/8386651/pexels-photo-8386651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Marca', 'Producto', 'Valor'],
  },
];

export function Work() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="trabajos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
            01 — Trabajos conceptuales
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl">
            Ejemplos de lo que podemos hacer.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Propuestas de diseño para distintos tipos de negocio. Son conceptos,
            no trabajos hechos para clientes reales.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 120} direction="up">
              <article
                className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/5"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      transform:
                        hoveredId === project.id ? 'scale(1.08)' : 'scale(1)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover arrow */}
                  <div
                    className={cn(
                      'absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-foreground transition-all duration-300',
                      hoveredId === project.id
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-2'
                    )}
                  >
                    <ArrowUpRight size={18} />
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
