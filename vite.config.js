import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Set base to root, ensuring proper resource loading
  build: {
    outDir: 'dist', // Output directory
    emptyOutDir: true, // Clean the output directory before building
    assetsInlineLimit: 0, // Ensure all assets are bundled properly
  },
})



