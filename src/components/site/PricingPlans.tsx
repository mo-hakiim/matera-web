import { Link } from "@tanstack/react-router";
import { Check, Gift, Plus, X } from "lucide-react";
import { packageExclusions, packages } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function PricingPlans({ showExclusions = true }: { showExclusions?: boolean }) {
  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
        {packages.map((p, i) => (
          <Reveal key={p.id} delay={i * 110} className="h-full">
            <div
              className={cn(
                "relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-2",
                p.featured ? "bg-gradient-primary shadow-glow lg:-mt-4 lg:mb-[-1rem]" : "glass glow-border",
              )}
            >
              {p.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-foreground">
                  Most popular
                </span>
              )}
              <p className={cn("text-xs font-semibold uppercase tracking-[0.25em]", p.featured ? "text-primary-foreground/80" : "text-accent")}>
                {p.no}
              </p>
              <h3 className="mt-3 text-3xl font-extrabold">{p.name}</h3>

              <div className="mt-6 flex items-end gap-2">
                <span className="font-display text-6xl font-extrabold leading-none">{p.contentPieces}</span>
                <span className={cn("pb-1 text-sm", p.featured ? "text-primary-foreground/85" : "text-muted-foreground")}>
                  planned content
                  <br />
                  pieces / month
                </span>
              </div>
              <p className={cn("mt-3 text-sm", p.featured ? "text-primary-foreground/80" : "text-muted-foreground")}>
                Monthly plan · price on request
              </p>

              <div className="my-7 h-px bg-border" />

              <ul className="space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check className={cn("mt-0.5 h-4 w-4 shrink-0", p.featured ? "text-gold" : "text-primary-glow")} />
                    {f}
                  </li>
                ))}
                {p.extras.map((f) => (
                  <li key={f} className="flex gap-3 font-semibold">
                    <Plus className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className={cn("mt-7 rounded-2xl p-4", p.featured ? "bg-background/20" : "bg-secondary")}>
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                  <Gift className="h-4 w-4" /> Included free
                </p>
                <p className="mt-2 text-sm font-extrabold">[{p.bonuses.join(", ")}]</p>
              </div>

              <div className="mt-auto pt-8">
                <Button asChild variant={p.featured ? "energy" : "hero"} size="xl" className="w-full">
                  <Link to="/contact">Request a quote</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {showExclusions && (
        <Reveal className="mt-14 rounded-3xl border border-dashed border-border p-8">
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Package exclusions
          </h3>
          <ul className="mt-5 grid gap-4 md:grid-cols-3">
            {packageExclusions.map((e) => (
              <li key={e} className="flex items-center gap-3 rounded-2xl bg-surface p-4 text-sm">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-destructive/15 text-destructive">
                  <X className="h-4 w-4" />
                </span>
                {e}
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </div>
  );
}
