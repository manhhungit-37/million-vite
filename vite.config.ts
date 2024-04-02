import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import million from 'million/compiler';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({}), react(), viteTsconfigPaths()]
})
