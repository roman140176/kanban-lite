import { mergeConfig, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      include: ['tests/unit/**/*.spec.{ts,js,tsx,jsx}'],
      exclude: ['tests/e2e/**'],
      environment: 'jsdom',
    },
  }),
)
