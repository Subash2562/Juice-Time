import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Juice-Time/', // 👈 REQUIRED for GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
