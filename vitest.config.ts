import { defineConfig } from 'vitest/config'
import path from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      '~': __dirname,
      '@': path.resolve(__dirname, './src/'),
    },
  },
  test: {
    root: '.',
    watch: false,
    environment: 'node',
    include: ['tests/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    reporters: ['default', 'html'],
    coverage: {
      provider: 'v8',
      enabled: true,
    },
    cache: {},
  },
})
