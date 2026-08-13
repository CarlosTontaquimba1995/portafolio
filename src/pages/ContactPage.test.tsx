import type { ReactElement } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { LanguageProvider } from '../i18n/LanguageProvider'
import { renderAt } from '../test/renderApp'
import { ContactForm } from './ContactPage'

function renderForm(ui: ReactElement) {
  return render(<LanguageProvider>{ui}</LanguageProvider>)
}

describe('ContactForm', () => {
  it('shows actionable errors and focuses the first invalid field', async () => {
    const user = userEvent.setup()
    renderForm(<ContactForm openWhatsApp={() => undefined} />)

    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByLabelText('Name')).toHaveFocus()
    expect(screen.getByText('Enter your name.')).toBeInTheDocument()
    expect(screen.queryByLabelText('Email')).not.toBeInTheDocument()
    expect(screen.getByText('Write a message.')).toBeInTheDocument()
  })

  it('opens WhatsApp with the composed message for valid values', async () => {
    const user = userEvent.setup()
    const openWhatsApp = vi.fn()
    renderForm(<ContactForm openWhatsApp={openWhatsApp} />)

    await user.type(screen.getByLabelText('Name'), 'Ana')
    await user.type(screen.getByLabelText('Message'), 'Hola')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(openWhatsApp).toHaveBeenCalledOnce()
    expect(openWhatsApp).toHaveBeenCalledWith(
      expect.stringMatching(/^https:\/\/wa\.me\/593939618855\?text=/),
    )
    expect(openWhatsApp.mock.calls[0]?.[0]).toContain(encodeURIComponent('Ana'))
  })
})

describe('ContactPage', () => {
  it('keeps a floating WhatsApp control visible from any section', () => {
    renderAt('/')

    const whatsapp = screen.getByRole('link', {
      name: 'Chat on WhatsApp',
    })
    expect(whatsapp).toHaveAttribute('href', 'https://wa.me/593939618855')
    expect(whatsapp).toHaveAttribute('target', '_blank')
    expect(whatsapp).toHaveClass('fixed')
  })

  it('renders contact destinations and the shared footer', () => {
    renderAt('/')

    expect(screen.getByRole('heading', { name: 'Send a Message' })).toBeInTheDocument()
    expect(
      screen
        .getAllByRole('link', {
          name: /carlos\.tontaquimba1995@gmail\.com/i,
        })
        .some(
          (link) =>
            link.getAttribute('href') ===
            'mailto:carlos.tontaquimba1995@gmail.com',
        ),
    ).toBe(true)
    expect(screen.getByText('Contact Details')).toBeInTheDocument()
    expect(screen.getByText(/Built with precision/)).toBeInTheDocument()
  })
})
