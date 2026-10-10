import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Lanyard.tsx is lazy-loaded (React.lazy) and pulls in three.js, which is
    // inherently large but never blocks the initial page load.
    chunkSizeWarningLimit: 600,
  },
})
