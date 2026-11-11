import { workflow } from "@/lib/content";
import { Reveal } from "./Reveal";

export function WorkflowSteps() {
  return (
    <ol className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {workflow.map((w, i) => (
        <Reveal as="li" key={w.title} delay={(i % 4) * 90} className={i === 6 ? "lg:col-span-1" : undefined}>
          <div className="group relative h-full overflow-hidden rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow glow-border">
            <span className="absolute -right-3 -top-6 font-display text-[7rem] font-extrabold leading-none text-foreground/5 transition-colors group-hover:text-primary-glow/15">
              {i + 1}
            </span>
            <span className="relative grid h-10 w-10 place-items-center rounded-full bg-gradient-energy font-display text-sm font-extrabold text-accent-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="relative mt-6 text-lg font-bold">{w.title}</h3>
            <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
