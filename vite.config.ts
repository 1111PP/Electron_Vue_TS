import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//引入自定义的插件
//1.开发时启动electron插件
import { electronDevPlugin } from './plugins/vite.electron.dev'
//2.electron打包插件
import { ElectronBuildPlugin } from './plugins/vite.electron.build.js'

// https://vitejs.dev/config/
export default defineConfig({
  //注册自定义插件
  plugins: [vue(), electronDevPlugin(), , ElectronBuildPlugin()],
  //🟥默认是绝对路径，要改为相对路径,不然会白屏
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
