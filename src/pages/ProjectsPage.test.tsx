import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { renderAt } from '../test/renderApp'

describe('ProjectsPage', () => {
  it('renders the three project case studies', () => {
    renderAt('/')

    const projects = document.getElementById('proyectos')
    expect(projects).not.toBeNull()
    expect(within(projects!).getAllByRole('article')).toHaveLength(3)
    expect(
      screen.getByRole('heading', { name: 'Judicial Case Management System' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'Frontend Control Panel',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'Microservices E-commerce Platform',
      }),
    ).toBeInTheDocument()
  })

  it('explains why source code and demos cannot be published', () => {
    renderAt('/')

    expect(
      screen.getByText(
        /cannot be published.*public-sector institutions of the national government/i,
      ),
    ).toBeInTheDocument()
    expect(screen.queryByText('Private Demo')).not.toBeInTheDocument()
  })
})
