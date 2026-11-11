import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = { eyebrow: string; title: ReactNode; intro?: ReactNode; children?: ReactNode };

/** Compact glowing banner used at the top of inner pages. */
export function PageHero({ eyebrow, title, intro, children }: Props) {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-40 md:pb-24 md:pt-48">
      <div className="absolute inset-0 -z-10 bg-hero" />
      <div className="absolute inset-0 -z-10 grid-lines" />
      <div className="absolute -right-32 top-20 -z-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" />
      <div className="container mx-auto px-6">
        <Reveal className="max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-3 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {eyebrow}
          </p>
          <h1 className="text-balance text-5xl font-extrabold leading-[1.02] md:text-7xl">{title}</h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              {intro}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
