import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  const queryClient = new QueryClient();
  const basepath = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

  return createRouter({
    routeTree,
    basepath,
    context: { queryClient },
    scrollRestoration: true,
  });
}
