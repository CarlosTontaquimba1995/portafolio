function revealItems(section: HTMLElement) {
  section.querySelectorAll<HTMLElement>('[data-reveal]').forEach((item, index) => {
    item.style.setProperty('--reveal-delay', `${Math.min(index, 4) * 70}ms`)
    item.classList.add('is-visible')
  })
}

export function navigateToSection(sectionId: string) {
  const section = document.getElementById(sectionId)
  if (!section) return

  const reduceMotion =
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

  window.history.pushState(null, '', `#${sectionId}`)

  if (reduceMotion) {
    section.classList.add('is-visible')
    revealItems(section)
    section.scrollIntoView({ behavior: 'auto', block: 'start' })
    return
  }

  section.classList.remove('is-arriving')
  section.classList.add('is-navigation-target')
  section.scrollIntoView({ behavior: 'smooth', block: 'start' })

  let completed = false
  let fallback = 0
  const reveal = () => {
    if (completed) return
    completed = true
    window.clearTimeout(fallback)
    window.removeEventListener('scrollend', reveal)
    section.classList.remove('is-navigation-target')
    section.classList.add('is-visible', 'is-arriving')
    revealItems(section)
    section.addEventListener(
      'animationend',
      () => section.classList.remove('is-arriving'),
      { once: true },
    )
  }

  window.addEventListener('scrollend', reveal, { once: true })
  fallback = window.setTimeout(reveal, 1200)
}
