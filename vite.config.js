import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        test: resolve(__dirname, 'src/components.html'),
      },
    },
  },
  server: {
    port: 8080
  }
}