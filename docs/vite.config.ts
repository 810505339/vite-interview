import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [UnoCSS()],

  optimizeDeps: {
    exclude: [
      'date-fns'
    ]
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'docs')
    }
  },
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {

            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
})
