import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { renderAt } from '../../test/renderApp'

describe('portfolio navigation', () => {
  it('links every navigation item to a section on the same page', () => {
    renderAt('/')

    const navigation = screen.getByRole('navigation', {
      name: 'Main navigation',
    })

    expect(within(navigation).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'href',
      '#inicio',
    )
    expect(
      within(navigation).getByRole('link', { name: 'Experience' }),
    ).toHaveAttribute('href', '#experiencia')
    expect(
      within(navigation).getByRole('link', { name: 'Skills' }),
    ).toHaveAttribute('href', '#habilidades')
    expect(
      within(navigation).getByRole('link', { name: 'Projects' }),
    ).toHaveAttribute('href', '#proyectos')
    expect(
      within(navigation).getByRole('link', { name: 'Contact' }),
    ).toHaveAttribute('href', '#contacto')
    expect(screen.getByRole('link', { name: 'CV.Dev — Home' })).toHaveAttribute(
      'href',
      '#inicio',
    )
  })

  it('prepares the target section for an arrival animation', async () => {
    const user = userEvent.setup()
    renderAt('/')
    const target = document.getElementById('experiencia')
    if (!target) throw new Error('Experience section was not found.')
    const scrollIntoView = vi.fn()
    Object.defineProperty(target, 'scrollIntoView', {
      configurable: true,
      value: scrollIntoView,
    })

    await user.click(screen.getByRole('link', { name: 'Experience' }))

    expect(target).toHaveClass('is-navigation-target')
    expect(scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    })
  })

  it('opens and closes the mobile navigation', async () => {
    const user = userEvent.setup()
    renderAt('/')

    const button = screen.getByRole('button', { name: 'Open menu' })
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByRole('navigation', { name: 'Mobile navigation' }),
    ).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(
      screen.queryByRole('navigation', { name: 'Mobile navigation' }),
    ).not.toBeInTheDocument()
  })

  it('closes the mobile navigation after choosing a section', async () => {
    const user = userEvent.setup()
    renderAt('/')

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNavigation = screen.getByRole('navigation', {
      name: 'Mobile navigation',
    })
    await user.click(
      within(mobileNavigation).getByRole('link', { name: 'Projects' }),
    )

    expect(
      screen.queryByRole('navigation', { name: 'Mobile navigation' }),
    ).not.toBeInTheDocument()
  })

  it('closes the mobile navigation when the logo is selected', async () => {
    const user = userEvent.setup()
    renderAt('/')

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('link', { name: 'CV.Dev — Home' }))

    expect(
      screen.queryByRole('navigation', { name: 'Mobile navigation' }),
    ).not.toBeInTheDocument()
  })

  it('provides a keyboard shortcut to the main content', () => {
    renderAt('/')

    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute(
      'href',
      '#main-content',
    )
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content')
  })

  it('sets a meaningful document title for the portfolio', () => {
    renderAt('/')

    expect(document.title).toBe(
      'Carlos Vicente Tontaquimba Quinchuqui | Portfolio',
    )
  })
})
