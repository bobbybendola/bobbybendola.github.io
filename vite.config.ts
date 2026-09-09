import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-ignore - Node's built-in URL helpers are available at runtime in Vite config files.
import { fileURLToPath, URL } from "node:url";

// import.meta.url is native to ES Modules and works everywhere this
// config file runs. __dirname does NOT exist in ES Modules (it's a
// CommonJS-only global), so we don't reach for it at all here.
export default defineConfig({
  plugins: [react()],
  base: "/steven-k-CompE/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});