import { copyFileSync, existsSync } from "node:fs";
import { fileURLToPath, URL } from "node:url";

import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

function githubPagesSpaFallback(): Plugin {
  return {
    name: "github-pages-spa-fallback",
    closeBundle() {
      const index = fileURLToPath(new URL("./dist/index.html", import.meta.url));
      const notFound = fileURLToPath(new URL("./dist/404.html", import.meta.url));
      if (existsSync(index)) {
        copyFileSync(index, notFound);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), githubPagesSpaFallback()],
  base: "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});