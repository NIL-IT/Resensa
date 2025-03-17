import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig(({ mode }) => {
  process.env.NODE_ENV = mode;
  return {
    plugins: [react()],
    ssr: {
      // Явно указываем, что react-helmet-async должен обрабатываться как ESM
      noExternal: ["react-helmet-async"],
    },
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
          // Полностью комментируем manualChunks на время отладки
          // manualChunks: {
          //   "three-vendor": ["three", "@react-three/fiber", "@react-three/drei"],
          // },
        },
      },
      chunkSizeWarningLimit: 1000,
      emptyOutDir: true,
      assetsInlineLimit: 4096,
    },
  };
});
