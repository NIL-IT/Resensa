import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2015",
    minify: "esbuild",
    // Включаем source maps если установлена переменная окружения
    sourcemap: process.env.VITE_GENERATE_SOURCEMAP === "true",
    minifyOptions: {
      target: "es2015",
      treeShaking: true,
      drop: ["console", "debugger"],
    },
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "three-vendor": ["three", "@react-three/fiber", "@react-three/drei"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    emptyOutDir: true,
    assetsInlineLimit: 4096,
  },
});
