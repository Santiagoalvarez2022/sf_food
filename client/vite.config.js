import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import fs from "fs";

const isDev = process.env.NODE_ENV === 'development' || import.meta.env.MODE === 'development'
console.log(isDev);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: isDev 
   ? {
    port: 3000,
    strictPort: true,
    host: true,
    https: {
     key: fs.readFileSync("C:/Users/santi/OneDrive/Escritorio/Personal/sf_food/api/certs/key.pem"),
     cert: fs.readFileSync("C:/Users/santi/OneDrive/Escritorio/Personal/sf_food/api/certs/cert.pem"),
   },
  }
  : {
    port: 3000,
    host: true,
    strictPort: true,
  },
})
