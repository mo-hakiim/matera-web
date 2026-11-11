import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="container mx-auto px-6 py-24">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-gradient-primary px-8 py-16 shadow-glow md:px-16 md:py-20">
          <div className="absolute -right-20 -top-20 -z-10 h-80 w-80 rounded-full bg-accent/50 blur-3xl animate-pulse-glow" />
          <div className="absolute -bottom-24 left-10 -z-10 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
          <div className="absolute inset-0 -z-10 grid-lines opacity-60" />
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Let's Grow Together!</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
                Your Brand Deserves to Stand Out.
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/85">
                Partner with Mastera and take your business to the next level.
              </p>
            </div>
            <Button asChild variant="energy" size="xl">
              <Link to="/contact">
                Start your project <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
