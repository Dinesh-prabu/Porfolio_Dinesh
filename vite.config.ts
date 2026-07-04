import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'
const base = isGitHubPages ? '/Porfolio_Dinesh/' : '/'

export default defineConfig({
  base,
  plugins: [react()],
})
