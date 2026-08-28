'use client';

import { Reveal } from '@/components/reveal';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal direction="scale">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-foreground to-foreground/90 p-12 text-center text-background sm:p-20">
            {/* Decorative blobs */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-rose-500/10 blur-3xl" />

            <div className="relative">
              <h2 className="font-display text-3xl font-bold leading-tight text-balance sm:text-4xl md:text-5xl">
                ¿Listo para tener una web
                <br />
                <span className="gradient-text">que consiga clientes?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-background/70 text-balance">
                Charlamos 15 minutos, te paso una propuesta clara y empezamos.
                Sin compromiso.
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById('contacto')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95"
              >
                Empecemos ahora
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
