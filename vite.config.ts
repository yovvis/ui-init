import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.log(command, '---command')
  console.log(mode, '---mode')
  return {
    server: {
      port: parseInt(env.VITE_APP_PORT),
      host: '0.0.0.0',
      open: true,
      hmr: true,
    },
    plugins: [vue(), Inspect()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          javascriptEnabled: true,
          additionalData: `@use "@/assets/styles/variables.scss" as *;`,
        },
      },
    },
  }
})
