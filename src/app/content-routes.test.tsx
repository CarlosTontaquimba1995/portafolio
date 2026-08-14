import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { renderAt } from '../test/renderApp'

describe('single-page portfolio content', () => {
  it('renders every portfolio section in the expected order', () => {
    renderAt('/')

    const main = screen.getByRole('main')
    const sections = Array.from(main.querySelectorAll(':scope > section'))

    expect(sections.map((section) => section.id)).toEqual([
      'inicio',
      'experiencia',
      'habilidades',
      'proyectos',
      'contacto',
    ])
    expect(
      screen.getAllByText('Fullstack Software Engineer').length,
    ).toBeGreaterThan(0)
    expect(
      screen.getByRole('link', { name: /Download CV/i }),
    ).toHaveAttribute('href', '/cv-en.pdf')
    expect(
      screen.getByRole('link', { name: /Download CV/i }),
    ).toHaveAttribute('download', 'Carlos-Vicente-Tontaquimba-CV-EN.pdf')
    expect(screen.getByRole('link', { name: /Download CV/i })).toHaveClass(
      'btn-primary',
    )
    expect(screen.getByText('Systems Architect')).toBeInTheDocument()
    expect(
      document.querySelector('img[src="/images/profile.webp"]'),
    ).not.toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About me' })).toBeInTheDocument()
    expect(
      document.querySelectorAll('#experiencia article'),
    ).toHaveLength(7)
    expect(
      screen.getByText('Ministry of Telecommunications (Ecuador)'),
    ).toBeInTheDocument()
    expect(screen.getByText('January 2019 – January 2022')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Backend' })).toBeInTheDocument()
    expect(screen.getByText('Laravel (v11)')).toBeInTheDocument()
    expect(
      screen.getByText('Bachelor’s Degree in Computer Systems Engineering'),
    ).toBeInTheDocument()
    expect(screen.getByText('B1 Intermediate')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Architecture in Practice.' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: "Let's connect" })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('switches the whole page between English and Spanish', async () => {
    const user = userEvent.setup()
    renderAt('/')

    expect(screen.getByRole('heading', { name: 'About me' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'ES' }))

    expect(screen.getByRole('heading', { name: 'Sobre mí' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Experiencia' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Descargar CV/i })).toHaveAttribute(
      'href',
      '/cv-es.pdf',
    )
    expect(document.documentElement.lang).toBe('es')

    await user.click(screen.getByRole('button', { name: 'EN' }))

    expect(screen.getByRole('heading', { name: 'About me' })).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('en')
  })

  it('marks content throughout the page for progressive reveal', () => {
    renderAt('/')

    expect(document.querySelectorAll('[data-reveal]').length).toBeGreaterThan(20)
  })

  it('applies the shared heading scale to every title', () => {
    renderAt('/')

    const headings = Array.from(document.querySelectorAll('h1, h2, h3'))
    const allowed = ['heading-hero', 'heading-section', 'heading-card', 'heading-label']

    expect(headings.length).toBeGreaterThan(10)
    headings.forEach((heading) => {
      expect(
        allowed.some((token) => heading.classList.contains(token)),
        `${heading.textContent} should use a shared heading class`,
      ).toBe(true)
    })
  })
})
