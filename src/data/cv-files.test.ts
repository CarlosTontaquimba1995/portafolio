import { describe, expect, it } from 'vitest'

import cvEn from '../../scripts/cv-en.html?raw'
import cvEs from '../../scripts/cv-es.html?raw'

const portfolioUrl = 'https://portafolio-66g7.onrender.com/'

describe('CV source documents', () => {
  it('includes the live portfolio URL in the English CV', () => {
    expect(cvEn).toContain(portfolioUrl)
  })

  it('includes the live portfolio URL in the Spanish CV', () => {
    expect(cvEs).toContain(portfolioUrl)
  })
})
