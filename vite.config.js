import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    assertsDir: "",
    sourcemap: false,
    minify: true,
    rollupOptions: {
      output: {
        entryFileNames: "content.js",
        assetFileNames: "content.css",
      },
    },
  },
});
