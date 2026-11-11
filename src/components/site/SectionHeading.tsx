import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, intro, align = "left", className }: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent",
        )}
      >
        <span className="h-px w-8 bg-gradient-energy" />
        {eyebrow}
      </p>
      <h2 className="text-balance text-4xl font-extrabold leading-[1.05] md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">{intro}</p>
      )}
    </Reveal>
  );
}
