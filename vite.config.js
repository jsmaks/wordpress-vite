import { defineConfig } from 'vite';
import path from 'path';
import nunjucks from 'vite-plugin-nunjucks';
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';
import { createHtmlPlugin } from 'vite-plugin-html';

import data from './src/json/data.json';

// other config settings: https://vitejs.dev/config/
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

            case extName === '.css':
              return `assets/css/[name][extname]`;

            case extName === '.webp' ||
              extName === '.svg' ||
              extName === '.png' ||
              extName === '.jpg' ||
              extName === '.jpeg' ||
              extName === '.gif' ||
              extName === '.ico':
              return `assets/images/[name][extname]`;

            default:
              return 'assets/[name][extname]';
          }
        },
      },
    },
  },
  plugins: [
    nunjucks({
      variables: { 'index.html' : data },
      nunjucksConfigure: { autoescape: false },
      
    }),
    ViteSvgSpriteWrapper({
      icons: 'src/assets/images/sprite/**/*.svg',
      outputDir: 'src/assets/images/',
      sprite: {
        shape: {
          transform: ['svgo'],
        },
      },
    }),
    createHtmlPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
      },
    }),
  ],
});
