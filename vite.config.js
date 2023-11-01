import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import libCss from 'vite-plugin-libcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), libCss()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/publish.js'),
      name: 'VueTagsInput',
      fileName: 'vue-tags-input',
    },
    rollupOptions: {
      external: ['vue', 'vuedraggable'],
      output: {
        globals: {
          vue: 'Vue',
          vuedraggable: 'draggable'
        },
      },
    },
  },
})
