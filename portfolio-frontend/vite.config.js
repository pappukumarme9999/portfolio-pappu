import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/portfolio-pappu/',

  plugins: [
    react(),
    // Add a custom plugin to copy index.html -> 404.html
    {
      name: 'copy-index-to-404',
      closeBundle: () => {
        const indexPath = path.resolve(__dirname, 'dist/index.html');
        const notFoundPath = path.resolve(__dirname, 'dist/404.html');

        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, notFoundPath);
          console.log('✅ 404.html copied from index.html');
        } else {
          console.warn(
            '⚠️ index.html not found in dist/; skipping 404.html copy.'
          );
        }
      },
    },
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables.scss" as *;`,
      },
    },
  },

  server: {
    port: 3000,
    strictPort: true,
    fs: {
      allow: ['..'],
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },

  preview: {
    port: 4173,
    strictPort: true,
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },

  optimizeDeps: {
    include: ['@mui/material', '@emotion/react', '@emotion/styled'],
  },

  define: {
    'process.env': {},
  },

  assetsInclude: ['**/*.svg'],
  publicDir: 'public',
});
