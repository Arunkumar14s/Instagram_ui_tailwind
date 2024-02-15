
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  
  build: {
    rollupOptions: {
      input: {
        main: resolve("/Instagram_ui_tailwind/", 'index.html'),
        nested: resolve("/Instagram_ui_tailwind/", 'dark.html')
      }
    }
  }
})