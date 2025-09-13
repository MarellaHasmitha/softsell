import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // fine for local dev
    open: true  // auto opens browser
  },
  build: {
    outDir: 'dist', // Vercel expects production build in /dist
    sourcemap: false
  },
  resolve: {
    alias: {
      '@': '/src' // allows cleaner imports like "@/components/Button"
    }
  }
})
