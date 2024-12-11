/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
    host: "0.0.0.0",
    port: 5173,
  },
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      output: {
        manualChunks: {
          lucide: ["lucide-react"],
          framer: ["framer-motion"],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
