import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Проверяем переменную окружения для отключения минификации
  const disableMinify = process.env.VITE_DISABLE_MINIFY === "true";

  return {
    plugins: [react()],
    build: {
      target: "es2015",
      // Условная минификация в зависимости от переменной окружения
      minify: disableMinify ? false : "esbuild",
      minifyOptions: disableMinify
        ? undefined
        : {
            target: "es2015",
            treeShaking: true,
            drop: ["console", "debugger"],
          },
      rollupOptions: {
        output: {
          manualChunks: {
            "react-vendor": ["react", "react-dom"],
            "three-vendor": [
              "three",
              "@react-three/fiber",
              "@react-three/drei",
            ],
          },
        },
      },
      chunkSizeWarningLimit: 1000,
      emptyOutDir: true,
      assetsInlineLimit: 4096,
    },
  };
});
