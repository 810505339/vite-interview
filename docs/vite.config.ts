import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [UnoCSS()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'docs')
    }
  }
})
