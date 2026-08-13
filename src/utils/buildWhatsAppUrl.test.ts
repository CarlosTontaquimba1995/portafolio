import { describe, expect, it } from 'vitest'

import { buildWhatsAppUrl } from './buildWhatsAppUrl'

describe('buildWhatsAppUrl', () => {
  it('opens an international WhatsApp chat with the form message', () => {
    expect(
      buildWhatsAppUrl({
        name: 'María Pérez',
        message: 'Hola Carlos & equipo',
        intro: 'Hi Carlos, I am {name}.',
      }),
    ).toBe(
      'https://wa.me/593939618855?text=' +
        encodeURIComponent(
          'Hi Carlos, I am María Pérez.\n\nHola Carlos & equipo',
        ),
    )
  })

  it('trims values before encoding', () => {
    const url = buildWhatsAppUrl({
      name: '  Ana  ',
      message: '  Hola  ',
      intro: 'Hi Carlos, I am {name}.',
    })

    expect(url.startsWith('https://wa.me/593939618855?text=')).toBe(true)
    expect(url).toContain(encodeURIComponent('Ana'))
    expect(url).not.toContain('  Ana  ')
  })
})
