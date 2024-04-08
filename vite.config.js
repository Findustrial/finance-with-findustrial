import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  build: {
    outDir: 'dist',
    minify: true,
    lib: {
      entry: 'src/index.jsx',
      name: 'solid',
    },
  }
})
