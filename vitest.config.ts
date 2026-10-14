import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    include: ['exercise-1/**/*.test.ts'],
  },
});
