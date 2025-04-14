import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    //Whenver we call /api, it will prefix it to localhost:5000
    proxy: {
      "/api": {
        target: "http://localhost:5000"
      }
    }
  }
})
