'use client';

import { useState } from 'react';
import { Reveal } from '@/components/reveal';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: '¿Qué incluye el trabajo?',
    answer:
      'Estructura, diseño, desarrollo responsive, optimización de velocidad, SEO técnico y conexión con tus canales de contacto.',
  },
  {
    question: '¿Cuánto tarda?',
    answer:
      'Depende del contenido y del alcance. Después de hablar te paso una propuesta con una fecha de entrega concreta.',
  },
  {
    question: '¿Necesito tener el contenido listo?',
    answer:
      'No. Si ya tenés textos e imágenes, los usamos. Si no, te ayudo a ordenar qué decir y qué material necesitamos.',
  },
  {
    question: '¿Puedo pedir cambios?',
    answer:
      'Sí. El trabajo incluye instancias de revisión antes de publicar.',
  },
  {
    question: '¿La web se ve bien en celular?',
    answer:
      'Sí. La diseño primero para móvil y después la adapto al resto de las pantallas.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
            05 — Preguntas frecuentes
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl">
            Lo básico antes de empezar.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 80} direction="up">
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display text-base font-semibold sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={cn(
                      'shrink-0 text-muted-foreground transition-transform duration-300',
                      openIndex === i && 'rotate-180 text-brand'
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    openIndex === i
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
