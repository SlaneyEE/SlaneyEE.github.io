import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type ViteDevServer } from 'vite'
import { resolve } from 'node:path'
import { readFileSync, existsSync } from 'node:fs'
import type { IncomingMessage, ServerResponse } from 'node:http'

// Plugin to serve static assets from root img/ directory during dev
function serveStaticAssets() {
  return {
    name: 'serve-static-assets',
    configureServer(server: ViteDevServer) {
      server.middlewares.use((req: IncomingMessage, res: ServerResponse, next: () => void) => {
        if (req.url?.startsWith('/img/')) {
          const filePath = resolve(__dirname, req.url.slice(1))
          if (existsSync(filePath)) {
            const ext = filePath.split('.').pop() || ''
            const mimeTypes: Record<string, string> = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', gif: 'image/gif', svg: 'image/svg+xml', webp: 'image/webp' }
            res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream')
            res.end(readFileSync(filePath))
            return
          }
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  root: 'src',
  publicDir: false,
  plugins: [react(), tailwindcss(), serveStaticAssets()],
  build: {
    outDir: resolve(__dirname, '.'),
    emptyOutDir: false,
    copyPublicDir: false,
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
})
