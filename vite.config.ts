import { defineConfig } from 'vite'
import reactSWC from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [reactSWC(), tsconfigPaths()],
})
