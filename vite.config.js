import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' keeps asset paths relative, so the same build works on
// GitHub Pages (project sites), Vercel and Netlify without changes.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
