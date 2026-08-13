import { useEffect } from 'react'

import { ContactPage } from '../../pages/ContactPage'
import { ExperiencePage } from '../../pages/ExperiencePage'
import { HomePage } from '../../pages/HomePage'
import { ProjectsPage } from '../../pages/ProjectsPage'
import { SkillsEducationPage } from '../../pages/SkillsEducationPage'
import { Navbar } from './Navbar'
import { WhatsAppFloat } from './WhatsAppFloat'

export function AppLayout() {
  useEffect(() => {
    document.title = 'Carlos Vicente Tontaquimba Quinchuqui | Portfolio'

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    )
    const reduceMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

    if (reduceMotion || !('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, index) => {
            const target = entry.target as HTMLElement
            target.style.setProperty(
              '--reveal-delay',
              `${Math.min(index, 3) * 80}ms`,
            )
            target.classList.add('is-visible')
            observer.unobserve(target)
          })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HomePage />
        <ExperiencePage />
        <SkillsEducationPage />
        <ProjectsPage />
        <ContactPage />
      </main>
      <WhatsAppFloat />
    </div>
  )
}
