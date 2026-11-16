import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// "base" debe coincidir con el nombre del repositorio en GitHub,
// porque tu enlace es https://usuario.github.io/genesis-web/
export default defineConfig({
  base: '/genesis-web/',
  plugins: [react()],
})
