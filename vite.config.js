import fs from 'node:fs'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Fills %SITE_URL% in index.html, robots.txt and sitemap.xml with the real
// address of the site. On Vercel this is picked up automatically; to force a
// custom domain, add an environment variable named SITE_URL in Vercel
// (e.g. https://andytechsolutions.com) and redeploy.
function siteUrlPlugin() {
  const raw =
    process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL || ''
  const siteUrl = raw ? (raw.startsWith('http') ? raw : `https://${raw}`).replace(/\/+$/, '') : ''
  let outDir = 'dist'

  return {
    name: 'site-url',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => html.replaceAll('%SITE_URL%', siteUrl),
    },
    closeBundle() {
      for (const file of ['robots.txt', 'sitemap.xml']) {
        const target = path.join(outDir, file)
        if (fs.existsSync(target)) {
          fs.writeFileSync(target, fs.readFileSync(target, 'utf8').replaceAll('%SITE_URL%', siteUrl))
        }
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), siteUrlPlugin()],
})
