import { BentoCard } from '../components/ui/BentoCard'
import { MaterialIcon } from '../components/ui/MaterialIcon'
import { TechChip } from '../components/ui/TechChip'
import { useLanguage } from '../i18n/useLanguage'
import { navigateToSection } from '../utils/sectionNavigation'

export function HomePage() {
  const { copy, portfolio } = useLanguage()
  const { profile } = portfolio

  return (
    <section
      aria-labelledby="inicio-heading"
      className="section-anchor mx-auto flex w-full max-w-portfolio scroll-mt-16 flex-col gap-gutter px-gutter py-xl"
      id="inicio"
    >
      <section className="grid grid-cols-1 gap-gutter md:grid-cols-12">
        <BentoCard className="flex flex-col justify-center p-md md:col-span-8">
          <h1
            className="heading-hero mb-4 text-on-background"
            id="inicio-heading"
          >
            {profile.name}
          </h1>
          <p className="heading-subtitle mb-6 text-primary">
            {profile.title}
          </p>
          <p className="heading-lead mb-8 max-w-2xl text-on-surface-variant">
            {profile.summary}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="btn-primary flex items-center gap-2 rounded-md px-6 py-3 font-semibold transition-colors"
              download={copy.home.cvFileName}
              href={copy.home.cvHref}
            >
              <MaterialIcon name="download" />
              {copy.home.downloadCv}
            </a>
            <a
              className="flex items-center gap-2 rounded-md border border-outline px-6 py-3 font-semibold text-on-surface transition-colors hover:border-primary hover:text-primary"
              href="#contacto"
              onClick={(event) => {
                event.preventDefault()
                navigateToSection('contacto')
              }}
            >
              <MaterialIcon name="mail" />
              {copy.home.contact}
            </a>
          </div>
        </BentoCard>

        <BentoCard className="relative flex min-h-[300px] items-center justify-center overflow-hidden md:col-span-4">
          <div className="absolute inset-0 bg-gradient-to-br from-surface-container-high to-surface-container-lowest opacity-50" />
          <img
            alt={copy.home.profileAlt}
            className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-overlay"
            src="/images/profile.webp"
          />
          <div className="relative z-10 flex flex-col items-center">
            <MaterialIcon
              className="mb-4 text-4xl text-primary"
              filled
              name="developer_mode"
            />
            <span className="font-mono text-xs uppercase tracking-widest text-secondary">
              {copy.home.architect}
            </span>
          </div>
        </BentoCard>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-gutter md:grid-cols-12">
        <BentoCard className="flex flex-col gap-4 p-md md:col-span-7">
          <h2 className="heading-card flex items-center gap-2 text-on-surface">
            <MaterialIcon className="text-primary" name="person" />
            {copy.home.about}
          </h2>
          <p className="text-justify leading-6 text-on-surface-variant">
            {profile.about}
          </p>
          <div className="mt-auto flex items-center gap-2 border-t border-outline-variant pt-4">
            <MaterialIcon className="shrink-0 text-primary" name="public" />
            <p className="text-on-surface">{profile.relocation}</p>
          </div>
        </BentoCard>

        <BentoCard className="flex flex-col gap-4 p-md md:col-span-5">
          <h2 className="heading-card flex items-center gap-2 text-on-surface">
            <MaterialIcon className="text-primary" name="memory" />
            {copy.home.stack}
          </h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {profile.mainStack.map((technology) => (
              <TechChip
                highlighted={technology.highlighted}
                key={technology.label}
              >
                {technology.label}
              </TechChip>
            ))}
          </div>
        </BentoCard>
      </section>
    </section>
  )
}
