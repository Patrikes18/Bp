import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv  } from 'vite'
import vue from '@vitejs/plugin-vue'// load env vars from .env
const env = loadEnv("all", process.cwd());
const BASE_URL = `${env.VITE_BASE_URL}`;

// https://vitejs.dev/config/
export default defineConfig({
  base: BASE_URL,
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
