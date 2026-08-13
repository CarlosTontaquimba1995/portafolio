import { chromium } from '@playwright/test'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url))
const html = path.join(root, 'cv-en.html')
const output = path.join(root, '..', 'public', 'cv-en.pdf')

const browser = await chromium.launch()
const page = await browser.newPage()
await page.goto(`file:///${html.replaceAll('\\', '/')}`)
await page.pdf({
  path: output,
  format: 'A4',
  printBackground: true,
  margin: { top: '12mm', bottom: '12mm', left: '14mm', right: '14mm' },
})
await browser.close()
console.log(`Wrote ${output}`)
