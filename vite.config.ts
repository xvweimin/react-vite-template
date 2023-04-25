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
      '@api': path.resolve(__dirname, './src/api'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@redux': path.resolve(__dirname, './src/redux'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@src': path.resolve(__dirname, './src'),
    },
  },
  server: {
    base: './',
    host: '0.0.0.0',
  },
});
