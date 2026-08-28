'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useActiveSection } from '@/hooks/use-active-section';

const navItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'trabajos', label: 'Trabajos' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'proceso', label: 'Proceso' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contacto', label: 'Contacto' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(navItems.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'glass border-b border-border/50 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <button
            onClick={() => scrollTo('inicio')}
            className="font-display text-lg font-bold tracking-tight"
          >
            <span className="text-foreground">Franco</span>
            <span className="text-brand">.</span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    'relative rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                    activeSection === item.id
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollTo('contacto')}
            className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-105 active:scale-95 md:block"
          >
            Empecemos
          </button>

          <button
            className="rounded-lg p-2 text-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 transform bg-background/95 backdrop-blur-lg transition-transform duration-300 md:hidden',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6 pt-16">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                'font-display text-2xl font-semibold transition-colors',
                activeSection === item.id ? 'text-brand' : 'text-foreground'
              )}
              style={{
                animation: mobileOpen
                  ? `fade-in 0.4s ease-out ${i * 0.05}s forwards`
                  : undefined,
                opacity: mobileOpen ? undefined : 0,
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contacto')}
            className="mt-4 rounded-full bg-brand px-8 py-3 text-base font-semibold text-white"
          >
            Empecemos
          </button>
        </div>
      </div>
    </>
  );
}
