// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// Never set ssr.external or resolve.external: the Worker has no runtime module resolution, so
// the build fails. Never add compression (compressPublicAssets, vite-plugin-compression):
// hosting already compresses at the edge.
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPagesBuild = process.env.GITHUB_PAGES_BUILD === "true";

const githubPagesRoutes = [
  "/",
  "/about",
  "/services",
  "/portfolio",
  "/brands",
  "/brands/heersare",
  "/brands/carwo",
  "/brands/markiz",
  "/pricing",
  "/contact",
];

export default defineConfig({
  vite: {
    // Keep Cloudflare on the domain root; GitHub Pages hosts this repository below /matera-web/.
    base: "/",
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isGitHubPagesBuild && {
      prerender: {
        enabled: true,
        autoStaticPathsDiscovery: true,
        crawlLinks: true,
        failOnError: true,
      },
      pages: githubPagesRoutes.map((path) => ({
        path,
        prerender: { enabled: true },
      })),
    }),
  },
});
