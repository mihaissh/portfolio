import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libs - needed everywhere
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          // React Router - needed for navigation
          if (id.includes('node_modules/react-router-dom')) {
            return 'router';
          }
          // Framer Motion - only for interactive pages (lazy loaded)
          if (id.includes('node_modules/framer-motion')) {
            return 'framer-motion';
          }
          // Icons - split separately
          if (id.includes('node_modules/react-icons')) {
            return 'icons';
          }
          // EmailJS - only for contact form
          if (id.includes('node_modules/@emailjs')) {
            return 'emailjs';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    // Enable minification and tree-shaking
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        pure_funcs: ['console.log', 'console.info'], // Remove specific console methods
      },
    },
  },
})
