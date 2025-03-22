import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  ssr: {
    noExternal: [
      "react",
      "react-dom",
      "@react-three/fiber",
      "@react-three/drei",
    ],
  },
  build: {
    outDir: "dist/server",
    target: "node18", // Указываем целевую версию Node.js
    emptyOutDir: true, // Очищаем старые билды
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "three",
        "@react-three/fiber",
        "@react-three/drei",
        "express", // Исключаем Express, если он используется
      ],
      output: {
        format: "esm", // Указываем, что сборка должна быть в ES-модуле
      },
    },
  },
});
