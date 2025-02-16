import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic", // Uses new JSX transform for React 17+
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
    modules: {
      scopeBehaviour: "local", // Ensures styles are scoped
      localsConvention: "camelCaseOnly", // Optional: Ensures camelCase class names
    },
  },
  server: {
    port: 3000, // Change to your preferred port
    open: true, // Automatically opens the app in the browser
  },
  build: {
    outDir: "dist", // Output directory
    sourcemap: true, // Helps with debugging
  },
});
