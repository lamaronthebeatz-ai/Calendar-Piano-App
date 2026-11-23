import { defineConfig } from 'vitest/config'

// Unit tests of the pure logic only: no app plugins (content build, PWA), so they start in a second.
export default defineConfig({
  test: { include: ['src/**/*.test.ts'], environment: 'node', setupFiles: ['./vitest.setup.ts'],
    // solver-backed tests run ~3× slower on CI than locally (23/11: a 4 s test hit the 5 s default)
    testTimeout: 30_000 },
})
