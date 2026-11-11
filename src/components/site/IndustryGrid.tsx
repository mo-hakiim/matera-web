import { useState } from "react";
import { Building2, GraduationCap, Landmark, ShoppingBag, UtensilsCrossed, ArrowUpRight } from "lucide-react";
import { industries } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const icons: Record<string, typeof Landmark> = {
  finance: Landmark,
  hospitality: UtensilsCrossed,
  retail: ShoppingBag,
  realestate: Building2,
  education: GraduationCap,
};

/** Accordion-style row on desktop: the hovered industry expands. */
export function IndustryGrid() {
  const [active, setActive] = useState(0);
  return (
    <Reveal className="flex flex-col gap-4 lg:h-[420px] lg:flex-row">
      {industries.map((ind, i) => {
        const Icon = icons[ind.slug] ?? Landmark;
        const on = active === i;
        return (
          <button
            key={ind.slug}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className={cn(
              "relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 text-left transition-all duration-700 ease-out",
              on ? "bg-gradient-primary shadow-glow lg:flex-[2.6]" : "glass lg:flex-1 hover:bg-secondary",
            )}
          >
            <div
              className={cn(
                "absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl transition-opacity duration-700",
                on ? "bg-accent/50 opacity-100" : "opacity-0",
              )}
            />
            <div className="relative flex items-center justify-between">
              <span
                className={cn(
                  "grid h-14 w-14 place-items-center rounded-2xl transition-colors",
                  on ? "bg-gold text-gold-foreground" : "bg-secondary text-accent",
                )}
              >
                <Icon className="h-6 w-6" />
              </span>
              <ArrowUpRight className={cn("h-5 w-5 transition-transform", on && "rotate-45")} />
            </div>
            <div className="relative mt-10 lg:mt-0">
              <h3 className="text-xl font-bold leading-tight lg:text-2xl">{ind.title}</h3>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed transition-all duration-500",
                  on ? "text-primary-foreground/90 lg:max-h-40 lg:opacity-100" : "text-muted-foreground lg:max-h-0 lg:overflow-hidden lg:opacity-0",
                )}
              >
                {ind.text}
              </p>
            </div>
          </button>
        );
      })}
    </Reveal>
  );
}
