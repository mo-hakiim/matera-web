import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export type LightboxItem = { src: string; alt: string; width: number; height: number; caption?: string };

type Props = {
  items: LightboxItem[];
  index: number | null;
  onIndexChange: (i: number | null) => void;
};

/** Full-screen viewer that always shows the image at its true proportions. */
export function ImageLightbox({ items, index, onIndexChange }: Props) {
  const item = index === null ? null : items[index];

  const go = useCallback(
    (d: number) => {
      if (index === null) return;
      onIndexChange((index + d + items.length) % items.length);
    },
    [index, items.length, onIndexChange],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, go]);

  return (
    <Dialog open={index !== null} onOpenChange={(o) => !o && onIndexChange(null)}>
      <DialogContent className="flex max-h-[96vh] w-auto max-w-[96vw] flex-col items-center gap-3 border-0 bg-transparent p-0 shadow-none sm:rounded-none">
        {item && (
          <>
            <DialogTitle className="sr-only">{item.alt}</DialogTitle>
            <img
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className="h-auto max-h-[84vh] w-auto max-w-[92vw] rounded-xl object-contain shadow-elevated"
              style={{ aspectRatio: `${item.width} / ${item.height}` }}
            />
            <div className="flex items-center gap-4">
              <button
                onClick={() => go(-1)}
                aria-label="Previous"
                className="grid h-11 w-11 place-items-center rounded-full glass hover:shadow-glow"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <p className="min-w-40 text-center text-sm text-muted-foreground">
                {item.caption ?? item.alt} · {index! + 1}/{items.length}
              </p>
              <button
                onClick={() => go(1)}
                aria-label="Next"
                className="grid h-11 w-11 place-items-center rounded-full glass hover:shadow-glow"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
