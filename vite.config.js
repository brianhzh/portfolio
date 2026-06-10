import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // /mnt/c (NTFS through WSL) doesn't emit file events, so hot reload needs polling
    watch: { usePolling: true },
  },
})
