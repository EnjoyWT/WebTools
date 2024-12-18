import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const resolveP = (dir) => path.join(__dirname, dir)
import { resolve } from 'path'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [PrimeVueResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': resolveP('src')
    }
  },
  server: {
    host: '0.0.0.0'
  },
  build: {
    rollupOptions: {
      input: {
        // 配置所有页面路径，使得所有页面都会被打包
        main: resolve(__dirname, 'index.html')
        // status: resolve(__dirname, 'page/detail/index.html')
      }
    }
  }
})
