import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/brands", label: "Brand Identities" },
  { to: "/pricing", label: "Packages" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={cn(
          "container mx-auto flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500",
          scrolled ? "glass shadow-elevated" : "bg-transparent",
        )}
      >
        <Link to="/" className="shrink-0" aria-label="Mastera home" onClick={() => setOpen(false)}>
          <img src="/assets/4x/mastera-logo-light.webp" alt="Mastera — master your market" className="h-9 w-auto md:h-10" width={900} height={252} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground bg-secondary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="energy" size="lg">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-full glass lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="container mx-auto mt-3 rounded-3xl glass p-4 shadow-elevated animate-in fade-in slide-in-from-top-2 lg:hidden">
          <nav className="flex flex-col">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "text-foreground bg-secondary" }}
              >
                {n.label}
              </Link>
            ))}
            <Button asChild variant="energy" size="lg" className="mt-3">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
