/** Build a path to a file served from `public/`, respecting Vite's configured base. */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\/+/, "")}`;
}

/** Build an absolute in-site URL, including a GitHub Pages repository base when configured. */
export function siteUrl(path: string): string {
  const base = import.meta.env.BASE_URL;
  const suffix = path.replace(/^\/+/, "");
  return suffix ? `${base}${suffix}` : base;
}
