import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

// Unit tests of the pure logic only: no app plugins (content build, PWA), so they start in a second.
export default defineConfig({
  // the content build is not run here: the library index comes straight from the content modules (real articles)
  resolve: { alias: { 'virtual:theory-index': fileURLToPath(new URL('./src/umk/testing/theoryIndex.node.ts', import.meta.url)) } },
  test: { include: ['src/**/*.test.ts'], environment: 'node', setupFiles: ['./vitest.setup.ts'],
    // solver-backed tests run ~3× slower on CI than locally (23/11: a 4 s test hit the 5 s default)
    testTimeout: 30_000 },
})
