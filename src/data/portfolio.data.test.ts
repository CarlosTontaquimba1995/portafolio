import { describe, expect, it } from 'vitest'

import { portfolios } from './portfolio.data'

describe('portfolio data', () => {
  it('contains every professional experience in both languages', () => {
    expect(portfolios.es.experiences).toHaveLength(7)
    expect(portfolios.en.experiences).toHaveLength(7)
    expect(portfolios.es.experiences[0]?.role).toBe(
      'Analista de Sistemas de Información 2',
    )
    expect(portfolios.en.experiences[0]?.role).toBe(
      'Information Systems Analyst 2',
    )
    expect(portfolios.es.experiences.at(-1)?.organization).toBe(
      'Fundación Latitude (Ecuador)',
    )
  })

  it('preserves the contact destinations', () => {
    expect(portfolios.en.contact.email).toBe(
      'carlos.tontaquimba1995@gmail.com',
    )
    expect(portfolios.en.contact.phoneHref).toBe('+593939618855')
    expect(portfolios.en.contact.whatsappHref).toBe(
      'https://wa.me/593939618855',
    )
    expect(portfolios.en.contact.github).toBe(
      'https://github.com/CarlosTontaquimba1995',
    )
  })

  it('contains the three project titles in source order', () => {
    expect(portfolios.es.projects.map(({ title }) => title)).toEqual([
      'Sistema de Gestión Judicial',
      'Panel de Control Frontend',
      'Plataforma E-commerce de Microservicios',
    ])
    expect(portfolios.en.projects.map(({ title }) => title)).toEqual([
      'Judicial Case Management System',
      'Frontend Control Panel',
      'Microservices E-commerce Platform',
    ])
  })

  it('preserves the visible language levels from the HTML', () => {
    expect(portfolios.es.languages).toEqual([
      { name: 'Español', level: 'Nativo' },
      { name: 'Kichwa', level: 'Fluido' },
      { name: 'Inglés', level: 'B1 Intermedio' },
    ])
  })
})
