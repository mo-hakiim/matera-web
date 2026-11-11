import { Check, Clapperboard, GraduationCap, Megaphone, PenTool, TrendingUp } from "lucide-react";
import { services } from "@/lib/content";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { cn } from "@/lib/utils";

const icons: Record<string, typeof Megaphone> = {
  social: Megaphone,
  brand: PenTool,
  studio: Clapperboard,
  growth: TrendingUp,
  training: GraduationCap,
};

export function ServiceCards({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
      {services.map((s, i) => {
        const Icon = icons[s.slug] ?? Megaphone;
        const span = i < 2 ? "lg:col-span-3" : "lg:col-span-2";
        return (
          <Reveal key={s.slug} delay={i * 80} className={cn(span, i === 4 && "md:col-span-2 lg:col-span-2")}>
            <TiltCard className="p-8">
              <div className="flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-display text-5xl font-extrabold text-foreground/10 transition-colors group-hover:text-accent/40">
                  {s.no}
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-bold">{s.title}</h3>
              <ul className={cn("mt-5 space-y-3", compact && "space-y-2")}>
                {(compact ? s.points.slice(0, 2) : s.points).map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        );
      })}
    </div>
  );
}
