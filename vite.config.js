import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    visualizer({
      open: false,
      filename: "stats.html", // Name of the file to be generated
      gzipSize: true, // Shows what the size will be after server compression
      brotliSize: true, // Shows optimized size for modern browsers
    }),
  ],
  server: {
    port: 3000,
  },
  css: {
    postcss: "/postcss.config.json",
  },
  base: "/qr-code-component-fem",
});
