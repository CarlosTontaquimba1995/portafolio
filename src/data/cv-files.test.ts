import { readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

const portfolioUrl = 'https://portafolio-66g7.onrender.com/'

describe('CV source documents', () => {
  it('includes the live portfolio URL in the English CV', () => {
    const html = readFileSync(path.resolve('scripts/cv-en.html'), 'utf8')
    expect(html).toContain(portfolioUrl)
  })

  it('includes the live portfolio URL in the Spanish CV', () => {
    const html = readFileSync(path.resolve('scripts/cv-es.html'), 'utf8')
    expect(html).toContain(portfolioUrl)
  })
})
