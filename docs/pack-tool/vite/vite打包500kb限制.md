# vite打包500kb限制

vite打包报错：块的大小超过限制，Some chunks are larger than 500kb after minification
如下图：

[!foo](/vite/vite-500kb.jpg)

## 解决方法


```ts
//vite.config.ts

import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [UnoCSS()],
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

```
