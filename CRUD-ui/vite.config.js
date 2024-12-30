import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  define: {
    'process.env.VITE_APP_API_URL': JSON.stringify(import.meta.env.VITE_APP_API_URL)
  }
})