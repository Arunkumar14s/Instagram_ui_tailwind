// import { defineConfig } from 'vite'

// export default defineConfig({
//   base: "/Instagram_ui_tailwind/"
// })

import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'dark.html'),
      },
    },
  },

  base: "/Instagram_ui_tailwind/"

})