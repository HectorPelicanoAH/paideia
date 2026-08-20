import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: '/paideia/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        proyecto: resolve(import.meta.dirname, 'proyecto/index.html'),
        territorio: resolve(import.meta.dirname, 'territorio/index.html'),
        comoEmpezar: resolve(import.meta.dirname, 'como-empezar/index.html'),
        origen: resolve(import.meta.dirname, 'origen/index.html'),
        participa: resolve(import.meta.dirname, 'participa/index.html'),
      },
    },
  },
})
