import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // point directly to src/
    },
  },
  build: {
    outDir: "dist", // build output folder
    emptyOutDir: true,
  },
  base: "./", // keep relative paths for hosting (Vercel, Netlify, etc.)
});
