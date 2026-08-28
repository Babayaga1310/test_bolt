'use client';

import { useState } from 'react';
import { Reveal } from '@/components/reveal';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    negocio: '',
    mensaje: '',
  });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'Decime tu nombre';
    if (!formData.email.trim()) {
      newErrors.email = 'Necesito un email para responderte';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no parece válido';
    }
    if (!formData.mensaje.trim() || formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'Contame un poco más (al menos 10 caracteres)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState('submitting');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormState('success');
      setFormData({ nombre: '', email: '', negocio: '', mensaje: '' });
      setTimeout(() => setFormState('idle'), 5000);
    } catch {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const inputClasses = (field: string) =>
    cn(
      'w-full rounded-xl border bg-background px-4 py-3 text-sm transition-colors placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-brand/20',
      errors[field]
        ? 'border-destructive focus:border-destructive'
        : 'border-border focus:border-brand'
    );

  return (
    <section id="contacto" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid md:grid-cols-2">
            {/* Left panel */}
            <div className="relative flex flex-col justify-between bg-gradient-to-br from-foreground to-foreground/80 p-8 text-background sm:p-10">
              <div>
                <Reveal>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
                    ¿Necesitás una landing?
                  </p>
                </Reveal>
                <Reveal delay={100}>
                  <h2 className="font-display text-3xl font-bold leading-tight text-balance sm:text-4xl">
                    Contame qué necesitás.
                  </h2>
                </Reveal>
                <Reveal delay={200}>
                  <p className="mt-4 text-background/70">
                    Respondé en menos de 24 horas. Sin compromiso.
                  </p>
                </Reveal>
              </div>

              <Reveal delay={300}>
                <div className="mt-12 space-y-3">
                  <a
                    href="https://wa.me/5491100000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-background/80 transition-colors hover:text-background"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-background/10">
                      WhatsApp
                    </span>
                    Escribime por WhatsApp
                  </a>
                  <a
                    href="mailto:hola@francobramagli.com"
                    className="flex items-center gap-3 text-sm text-background/80 transition-colors hover:text-background"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-background/10">
                      @
                    </span>
                    hola@francobramagli.com
                  </a>
                  <a
                    href="https://instagram.com/francobramagli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-background/80 transition-colors hover:text-background"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-background/10">
                      IG
                    </span>
                    @francobramagli
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right panel - form */}
            <div className="p-8 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => handleChange('nombre', e.target.value)}
                    placeholder="¿Cómo te llamás?"
                    className={inputClasses('nombre')}
                  />
                  {errors.nombre && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-destructive">
                      <AlertCircle size={12} />
                      {errors.nombre}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="tu@email.com"
                    className={inputClasses('email')}
                  />
                  {errors.email && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-destructive">
                      <AlertCircle size={12} />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    Negocio
                  </label>
                  <input
                    type="text"
                    value={formData.negocio}
                    onChange={(e) => handleChange('negocio', e.target.value)}
                    placeholder="¿De qué es tu negocio?"
                    className={inputClasses('negocio')}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    Contame *
                  </label>
                  <textarea
                    value={formData.mensaje}
                    onChange={(e) => handleChange('mensaje', e.target.value)}
                    placeholder="¿Qué necesitás? ¿Para quién es? ¿Qué querés lograr?"
                    rows={4}
                    className={cn(inputClasses('mensaje'), 'resize-none')}
                  />
                  {errors.mensaje && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-destructive">
                      <AlertCircle size={12} />
                      {errors.mensaje}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={formState === 'submitting' || formState === 'success'}
                  className={cn(
                    'flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all',
                    formState === 'success'
                      ? 'bg-success text-white'
                      : formState === 'error'
                        ? 'bg-destructive text-white'
                        : 'bg-brand text-white hover:bg-brand-dark hover:scale-[1.02] active:scale-[0.98]',
                    (formState === 'submitting' || formState === 'success') &&
                      'cursor-not-allowed'
                  )}
                >
                  {formState === 'submitting' && (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Enviando...
                    </>
                  )}
                  {formState === 'success' && (
                    <>
                      <CheckCircle2 size={18} />
                      ¡Mensaje enviado!
                    </>
                  )}
                  {formState === 'error' && (
                    <>
                      <AlertCircle size={18} />
                      Algo salió mal. Reintentá.
                    </>
                  )}
                  {formState === 'idle' && (
                    <>
                      <Send size={16} />
                      Enviar mensaje
                    </>
                  )}
                </button>

                {formState === 'success' && (
                  <p className="text-center text-sm text-success">
                    Gracias. Te respondo en menos de 24 horas.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
