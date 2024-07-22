// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/FreeCodeCampCourses/', // set the base path
  // other configurations

  resolve: {
    extensions: ['.js', '.ts'],
  },
  esbuild: {
    loader: 'js', // using 'js' loader for JavaScript
    include: [
      // include all .js, .ts files
      'src/**/*.js',

      // 'src/**/*.ts',
    ],
  },
  server: {
    port: 5173,
    strictPort: true,
  },
});

