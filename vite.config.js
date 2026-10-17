import { defineConfig } from 'vite';

export default defineConfig({
  // Relative base so the build works at tim-hw.github.io or any sub-path
  base: './',
  build: {
    target: 'es2020',
    sourcemap: false,
  },
});
