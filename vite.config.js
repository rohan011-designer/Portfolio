import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// For GitHub Pages: set `base` to your repo name e.g. '/portfolio/'
// For a custom domain or root deployment leave base as '/'
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
        },
      },
    },
  },
})
