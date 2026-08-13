import { describe, expect, it } from 'vitest'

import cvEn from '../../scripts/cv-en.html?raw'
import cvEs from '../../scripts/cv-es.html?raw'

const portfolioUrl = 'https://portafolio-66g7.onrender.com/'

describe('CV source documents', () => {
  it('includes a labeled portfolio link in the English CV', () => {
    expect(cvEn).toContain(`Portfolio:`)
    expect(cvEn).toContain(portfolioUrl)
  })

  it('includes a labeled portfolio link in the Spanish CV', () => {
    expect(cvEs).toContain(`Portafolio:`)
    expect(cvEs).toContain(portfolioUrl)
  })
})
