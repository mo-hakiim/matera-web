import { useEffect, useState } from "react";
import { BarChart3, Compass, Lightbulb, Rocket, Search } from "lucide-react";
import { approach } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons = [Search, Compass, Lightbulb, Rocket, BarChart3];

/** Interactive 5-step approach: hover/tap a step, or let it auto-cycle. */
export function ApproachSteps() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % approach.length), 3200);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* progress rail */}
      <div className="relative mb-8 hidden h-1 overflow-hidden rounded-full bg-secondary md:block">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-energy transition-all duration-700"
          style={{ width: `${((active + 1) / approach.length) * 100}%` }}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-5">
        {approach.map((s, i) => {
          const Icon = icons[i] ?? Search;
          const on = i === active;
          return (
            <button
              key={s.title}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-3xl p-6 text-left transition-all duration-500",
                on ? "bg-gradient-primary shadow-glow md:-translate-y-3" : "glass hover:bg-secondary",
              )}
            >
              <span
                className={cn(
                  "font-display text-5xl font-extrabold transition-colors",
                  on ? "text-primary-foreground/30" : "text-foreground/10",
                )}
              >
                0{i + 1}
              </span>
              <span
                className={cn(
                  "mt-4 grid h-12 w-12 place-items-center rounded-2xl transition-all duration-500",
                  on ? "bg-gold text-gold-foreground rotate-6 scale-110" : "bg-secondary text-accent",
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p
                className={cn(
                  "mt-2 text-sm leading-relaxed transition-colors",
                  on ? "text-primary-foreground/90" : "text-muted-foreground",
                )}
              >
                {s.text}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
