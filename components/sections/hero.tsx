'use client';

import { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Zap, Smartphone } from 'lucide-react';

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const scrollToTrabajos = () =>
    document.getElementById('trabajos')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-500/20 via-rose-500/10 to-transparent blur-3xl"
          style={{
            transform: `translate(calc(-50% + ${mousePos.x}px), calc(-50% + ${mousePos.y}px))`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <div
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground"
          style={{
            opacity: mounted ? 1 : 0,
            animation: 'fade-in 0.6s ease-out forwards',
          }}
        >
          <Sparkles size={14} className="text-brand" />
          Landing pages para vender mejor
        </div>

        {/* Title */}
        <h1
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl"
          style={{
            opacity: mounted ? undefined : 0,
            animation: 'fade-in 0.8s ease-out 0.15s forwards',
          }}
        >
          Una web clara,
          <br />
          <span className="gradient-text">rápida y lista</span>
          <br />
          para conseguir clientes.
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground text-balance sm:text-xl"
          style={{
            opacity: mounted ? undefined : 0,
            animation: 'fade-in 0.8s ease-out 0.3s forwards',
          }}
        >
          Diseño y desarrollo landing pages para negocios y profesionales.
          Se ven bien, cargan rápido y funcionan perfecto en celular.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{
            opacity: mounted ? undefined : 0,
            animation: 'fade-in 0.8s ease-out 0.45s forwards',
          }}
        >
          <button
            onClick={scrollToTrabajos}
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-105 active:scale-95"
          >
            Ver ejemplos
            <ArrowDown
              size={16}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </button>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById('contacto')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Contame qué necesitás
          </a>
        </div>

        {/* Feature pills */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
          style={{
            opacity: mounted ? undefined : 0,
            animation: 'fade-in 0.8s ease-out 0.6s forwards',
          }}
        >
          <span className="inline-flex items-center gap-2">
            <Zap size={15} className="text-brand" />
            Carga rápida
          </span>
          <span className="inline-flex items-center gap-2">
            <Smartphone size={15} className="text-brand" />
            100% responsive
          </span>
          <span className="inline-flex items-center gap-2">
            <Sparkles size={15} className="text-brand" />
            Diseño a medida
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-muted-foreground/30 pt-2">
          <div className="h-2 w-1 animate-bounce rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
}
