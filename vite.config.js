import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2015",
    minify: "esbuild",
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
  // Add the following to help with SSR
  ssr: {
    // Avoid transpiling dependencies in SSR
    noExternal: ["three", "@react-three/fiber", "@react-three/drei"],
  },
});
