import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) return "vendor-framer";
            if (id.includes("lucide-react")) return "vendor-icons";
            if (id.includes("@radix-ui")) return "vendor-ui";
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router") ||
              id.includes("scheduler") ||
              id.includes("next-themes") ||
              id.includes("sonner") ||
              id.includes("vaul") ||
              id.includes("cmdk") ||
              id.includes("input-otp") ||
              id.includes("@hookform") ||
              id.includes("@tanstack/react-query") ||
              id.includes("embla-carousel-react") ||
              id.includes("react-day-picker") ||
              id.includes("react-hook-form") ||
              id.includes("react-resizable-panels") ||
              id.includes("recharts")
            ) return "vendor-react";
            return "vendor";
          }
        },
      },
    },
  },
}));
