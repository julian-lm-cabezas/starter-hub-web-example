import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { configDefaults,mergeConfig, defineConfig as defineTestConfig } from 'vitest/config'
import { version } from './package.json'

// https://vitejs.dev/config/
export default  mergeConfig(
  defineConfig({
    plugins: [ vue() ],
    server:{ port: 8080 },
    define: { 'import.meta.env.VERSION': JSON.stringify(version)},
    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
    },
    css:{
      preprocessorOptions: {
        scss: { additionalData: `@import "@/assets/styles/globals.scss";` }
      }
    }
  }),
  defineTestConfig({
    test: {
      environment: 'jsdom',
      include: ['tests/**/*.test.ts'],
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
      coverage:{
        provider: 'v8',
        enabled: true,
        reporter: ['lcov'],
        reportsDirectory: 'tests/coverage'
        
      }
    }
  })
)
  
