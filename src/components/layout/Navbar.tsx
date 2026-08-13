import { useEffect, useState } from 'react'

import { useLanguage } from '../../i18n/useLanguage'
import { navigateToSection } from '../../utils/sectionNavigation'
import { MaterialIcon } from '../ui/MaterialIcon'
import { LanguageSwitcher } from './LanguageSwitcher'

const navigation = [
  { id: 'inicio' },
  { id: 'experiencia' },
  { id: 'habilidades' },
  { id: 'proyectos' },
  { id: 'contacto' },
] as const

type SectionId = (typeof navigation)[number]['id']

const sectionIds = new Set<SectionId>(navigation.map(({ id }) => id))

const linkClass = (isActive: boolean) =>
  [
    'border-b-2 pb-1 text-base transition-colors',
    isActive
      ? 'border-primary text-primary'
      : 'border-transparent text-on-surface-variant hover:text-primary',
  ].join(' ')

export function Navbar() {
  const { copy } = useLanguage()
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<SectionId>(() => {
    const hash = window.location.hash.slice(1) as SectionId
    return sectionIds.has(hash) ? hash : 'inicio'
  })

  useEffect(() => {
    if (!open) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  useEffect(() => {
    const updateFromHash = () => {
      const hash = window.location.hash.slice(1) as SectionId
      if (sectionIds.has(hash)) setActiveSection(hash)
    }

    window.addEventListener('hashchange', updateFromHash)

    if (!('IntersectionObserver' in window)) {
      return () => window.removeEventListener('hashchange', updateFromHash)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (left, right) =>
              Math.abs(left.boundingClientRect.top - 64) -
              Math.abs(right.boundingClientRect.top - 64),
          )[0]

        if (visible && sectionIds.has(visible.target.id as SectionId)) {
          setActiveSection(visible.target.id as SectionId)
        }
      },
      { rootMargin: '-64px 0px -65% 0px', threshold: 0 },
    )

    navigation.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => {
      window.removeEventListener('hashchange', updateFromHash)
      observer.disconnect()
    }
  }, [])

  const sectionLink = (item: (typeof navigation)[number], onClick?: () => void) => (
    <a
      aria-current={activeSection === item.id ? 'location' : undefined}
      className={linkClass(activeSection === item.id)}
      href={`#${item.id}`}
      key={item.id}
      onClick={(event) => {
        event.preventDefault()
        setActiveSection(item.id)
        onClick?.()
        navigateToSection(item.id)
      }}
    >
      {copy.nav[item.id]}
    </a>
  )

  return (
    <>
      <a
        className="btn-primary fixed left-4 top-4 z-[60] -translate-y-24 rounded-md px-4 py-2 font-semibold transition-transform focus:translate-y-0"
        href="#main-content"
      >
        {copy.skipToContent}
      </a>
      <header className="sticky top-0 z-50 border-b border-outline-variant bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-portfolio items-center justify-between px-gutter">
        <a
          aria-label={copy.brandHome}
          className="heading-brand text-primary"
          href="#inicio"
          onClick={(event) => {
            event.preventDefault()
            setActiveSection('inicio')
            setOpen(false)
            navigateToSection('inicio')
          }}
        >
          CV.Dev
        </a>

        <nav aria-label={copy.mainNav} className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => sectionLink(item))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={open ? copy.closeMenu : copy.openMenu}
          className="rounded p-2 text-primary md:hidden"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          <MaterialIcon name={open ? 'close' : 'menu'} />
        </button>
        </div>

        {open && (
          <nav
            aria-label={copy.mobileNav}
            className="border-t border-outline-variant bg-surface-container-low px-gutter py-4 md:hidden"
            id="mobile-navigation"
          >
            <div className="mx-auto flex max-w-portfolio flex-col gap-4">
              {navigation.map((item) =>
                sectionLink(item, () => setOpen(false)),
              )}
              <LanguageSwitcher />
            </div>
          </nav>
        )}
      </header>
    </>
  )
}
