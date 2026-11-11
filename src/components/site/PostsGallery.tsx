import { useState } from "react";
import { Expand } from "lucide-react";
import { posts as allPosts, type Post } from "@/lib/content";
import { ImageLightbox } from "./ImageLightbox";
import { Reveal } from "./Reveal";

/**
 * Social posts gallery. Every frame keeps the post's native canvas:
 * 1080 × 1350 for all posts, 1080 × 1235 for the blue Creatine design.
 * Frames scale down on small screens but never crop.
 */
export function PostsGallery({ posts = allPosts }: { posts?: Post[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const items = posts.map((p) => ({
    src: p.url,
    alt: `${p.client} — ${p.title}`,
    width: p.width,
    height: p.height,
    caption: `${p.client} · ${p.width}×${p.height}`,
  }));

  return (
    <>
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
        {posts.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 90} className="break-inside-avoid">
            <button
              onClick={() => setIndex(i)}
              className="group relative block w-full overflow-hidden rounded-2xl bg-card text-left shadow-elevated transition-transform duration-500 hover:-translate-y-1.5 glow-border"
              style={{ aspectRatio: `${p.width} / ${p.height}`, maxWidth: p.width }}
              aria-label={`Open ${p.client} — ${p.title}`}
            >
              <img
                src={p.url}
                alt={`${p.client} — ${p.title}`}
                width={p.width}
                height={p.height}
                loading="lazy"
                className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-background/95 via-background/60 to-transparent p-5 pt-16 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{p.client}</p>
                <p className="mt-1 font-display text-lg font-bold">{p.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {p.width} × {p.height}px
                </p>
              </div>
              <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full glass opacity-0 transition-opacity group-hover:opacity-100">
                <Expand className="h-4 w-4" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>
      <ImageLightbox items={items} index={index} onIndexChange={setIndex} />
    </>
  );
}
