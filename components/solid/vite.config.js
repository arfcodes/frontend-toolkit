import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    outDir: 'demo/dist',
  },
  resolve: {
    alias: {
      '@src': resolve('src'),
      '@components': resolve('src/components'),
      '@root': resolve('../../'),
      '@rootImages': resolve('../../assets/images'),
      '@rootData': resolve('../../assets/data'),
      '@demo': resolve('demo'),
    },
  },
});
