import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Оптимизация сборки
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Разделение кода
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei']
        }
      }
    },
    // Уменьшение размера чанков
    chunkSizeWarningLimit: 1000,
    // Очистка выходной директории
    emptyOutDir: true,
    // Оптимизация ассетов
    assetsInlineLimit: 4096
  }
})
