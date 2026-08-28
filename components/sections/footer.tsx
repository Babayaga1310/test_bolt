export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-display text-lg font-bold tracking-tight">
            Franco<span className="text-brand">.</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 Franco Bramagli. Diseño y desarrollo web.
        </p>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="transition-colors hover:text-foreground">
            WhatsApp
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Email
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
