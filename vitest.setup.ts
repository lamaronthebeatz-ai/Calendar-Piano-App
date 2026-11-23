import { beforeEach } from 'vitest'

// The counterpoint solver runs synchronously for many seconds. Between tests vitest only yields microtasks, so a
// file of long tests never lets the worker read its RPC replies and CI failed with "Timeout calling onTaskUpdate"
// (23/11) although every test passed. One macrotask turn before each test lets those messages through.
beforeEach(() => new Promise<void>((resolve) => setTimeout(resolve, 0)))
