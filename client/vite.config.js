import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/T---Shirt-Website/' : '/', // Dynamic base path
  plugins: [react()]
});
