// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   base: '/'
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 replace 'tcp-international' with your actual repo name (check GitHub URL)
export default defineConfig({
  plugins: [react()],
  base: '/tcp-international/',
})