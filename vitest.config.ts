import { defineConfig } from 'vitest/config'

// Unit tests of the pure logic only: no app plugins (content build, PWA), so they start in a second.
export default defineConfig({
  test: { include: ['src/**/*.test.ts'], environment: 'node' },
})
