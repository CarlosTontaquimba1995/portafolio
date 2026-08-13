import { chromium } from '@playwright/test'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(root, '..', 'public')
const cvs = [
  { html: path.join(root, 'cv-en.html'), output: path.join(publicDir, 'cv-en.pdf') },
  { html: path.join(root, 'cv-es.html'), output: path.join(publicDir, 'cv-es.pdf') },
]

const browser = await chromium.launch()
const page = await browser.newPage()

for (const cv of cvs) {
  await page.goto(`file:///${cv.html.replaceAll('\\', '/')}`)
  await page.pdf({
    path: cv.output,
    format: 'A4',
    printBackground: true,
    margin: { top: '12mm', bottom: '12mm', left: '14mm', right: '14mm' },
  })
  console.log(`Wrote ${cv.output}`)
}

await browser.close()
