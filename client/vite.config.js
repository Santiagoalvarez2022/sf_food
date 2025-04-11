import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import fs from "fs";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    https: {
     key: fs.readFileSync("C:/Users/santi/OneDrive/Escritorio/Personal/sf_food/api/certs/key.pem"),
     cert: fs.readFileSync("C:/Users/santi/OneDrive/Escritorio/Personal/sf_food/api/certs/cert.pem"),
   },
  }
})
