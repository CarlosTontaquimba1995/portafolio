import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { BentoCard } from './BentoCard'
import { MaterialIcon } from './MaterialIcon'
import { TechChip } from './TechChip'

describe('shared visual primitives', () => {
  it('keeps decorative icons out of the accessibility tree', () => {
    render(<MaterialIcon name="code" />)

    expect(screen.queryByRole('img')).not.toBeInTheDocument()
    expect(document.querySelector('.material-symbols-outlined')).toHaveAttribute(
      'aria-hidden',
      'true',
    )
  })

  it('exposes a labeled icon as an image', () => {
    render(<MaterialIcon name="location_on" label="Ubicación" />)

    expect(screen.getByRole('img', { name: 'Ubicación' })).toBeInTheDocument()
  })

  it('renders highlighted technology content', () => {
    render(<TechChip highlighted>Spring Boot</TechChip>)

    expect(screen.getByText('Spring Boot')).toHaveClass('text-primary')
  })

  it('allows a semantic element for bento cards', () => {
    render(
      <BentoCard as="article">
        <h2>Proyecto</h2>
      </BentoCard>,
    )

    expect(screen.getByRole('article')).toHaveAttribute('data-reveal')
    expect(screen.getByRole('article')).toHaveClass('reveal-item')
  })
})
