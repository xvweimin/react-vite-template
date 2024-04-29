import path from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

/**
 * Vite 配置文件
 * @link https://cn.vitejs.dev/config/
 */
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
  server: {
    base: './',
    host: '0.0.0.0',
  },
});
