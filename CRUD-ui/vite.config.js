import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 5174,
    host: true
  },
  preview: {
    port: 5174
  },
  define: {
    'process.env': {
      ...import.meta.env,
      VITE_APP_API_URL: 'crud-backend-fu24fjq4x-enriquemartinez26s-projects.vercel.app'
    }
  }
})