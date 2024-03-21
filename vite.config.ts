import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import scss from 'rollup-plugin-scss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), scss()],
});
