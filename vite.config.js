import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [],
  server: {
    port: 3000,
  },
  css: {
    postcss: "/postcss.config.json",
  },
  base: "/qr-code-component-fem",
});
