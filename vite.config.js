import { defineConfig } from 'vite';
import path from 'path';
import postcss from './postcss.config.js'; // Ensure this path is correct

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
  base: './',
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    hmr: true,
  },
  build: {
    outDir: '../build',
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/app.min.js',
        chunkFileNames: 'assets/js/[name].js',
        assetFileNames: assetInfo => {
          const fileName = assetInfo.name;
          const extName = path.extname(fileName);

          switch (true) {
            case fileName === 'index.css':
              return 'assets/css/style.css';

            case fileName === 'sprite.svg':
              return 'assets/images/sprite.svg';

            case extName === '.webp' || extName === '.svg' || extName === '.png':
              return `assets/images/[name][extname]`;
          }
        },
      },
    },
  },
  css: {
    postcss,
  },
});
