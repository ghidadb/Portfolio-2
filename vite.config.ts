import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change base when deploying to GitHub Pages: base: '/<REPO_NAME>/'
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES ? '/react-portfolio/' : '/'
})
