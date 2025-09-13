import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // ensures all asset URLs are correct on Vercel
  build: {
    outDir: 'dist', // production build output folder
    sourcemap: false
  },
  resolve: {
    alias: {
      '@': '/src' // optional: allows clean imports like "@/components/Navbar"
    }
  }
})
