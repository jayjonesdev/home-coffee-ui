import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const viteConfig = defineViteConfig({
  plugins: [react()],
})

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: "setup.ts",
     coverage: {
      thresholds: {
        lines: 60,
        branches: 60,
        functions: 60,
        statements: 60
      },
      // you can include other reporters, but 'json-summary' is required, json is recommended
      reporter: ['text', 'json-summary', 'json'],
      // If you want a coverage reports even if your tests are failing, include the reportOnFailure option
      reportOnFailure: true,
    }
  }
});

export default mergeConfig(viteConfig, vitestConfig);