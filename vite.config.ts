import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project Pages URL: https://nopphadon-it.github.io/phoumy.github.io/
export default defineConfig({
  plugins: [react()],
  base: '/phoumy.github.io/',
})
