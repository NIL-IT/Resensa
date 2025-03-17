import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    ssr: true,
    outDir: "dist/server",
    emptyOutDir: false,
    rollupOptions: {
      input: "src/entry-server.jsx",
      // Добавляем react-router-dom в external
      external: [
        "react",
        "react-dom",
        "react-redux",
        "react-router-dom",
        "react-helmet-async",
      ],
    },
  },
  ssr: {
    // Указываем, что react-helmet-async должен обрабатываться как ESM
    noExternal: ["react-helmet-async"],
  },
});
