import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project Pages URL: https://nopphadon-it.github.io/phoumy.github.io/
// GitHub Pages serves from /docs on the main branch.
export default defineConfig({
  plugins: [react()],
  base: '/phoumy.github.io/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
