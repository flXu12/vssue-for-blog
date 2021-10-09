import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',  // 打包路径
  resolve: {
    alias: {
      '@': resolve('./src')  // 路径别名
    }
  }
})
