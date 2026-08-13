import { BentoCard } from '../components/ui/BentoCard'
import { MaterialIcon } from '../components/ui/MaterialIcon'
import { TechChip } from '../components/ui/TechChip'
import { useLanguage } from '../i18n/useLanguage'

export function ExperiencePage() {
  const { copy, portfolio } = useLanguage()

  return (
    <section
      aria-labelledby="experiencia-heading"
      className="section-anchor mx-auto w-full max-w-portfolio scroll-mt-16 px-gutter py-xl"
      id="experiencia"
    >
      <header className="reveal-item mb-lg" data-reveal>
        <h2
          className="heading-section mb-sm text-on-surface"
          id="experiencia-heading"
        >
          {copy.experience.title}
        </h2>
        <p className="heading-lead max-w-3xl text-on-surface-variant">
          {copy.experience.lead}
        </p>
      </header>

      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-4 top-0 hidden w-0.5 bg-secondary/30 md:block"
        />
        <ol className="relative z-10 flex flex-col gap-lg">
          {portfolio.experiences.map((experience) => (
            <li className="group relative md:pl-12" key={experience.id}>
              <span
                aria-hidden="true"
                className={[
                  'absolute left-[11px] top-6 z-20 hidden h-2.5 w-2.5 rounded-full ring-4 ring-surface md:block',
                  experience.current
                    ? 'bg-primary shadow-[0_0_10px_rgba(137,206,255,0.5)]'
                    : 'bg-secondary transition-colors group-hover:bg-primary',
                ].join(' ')}
              />
              <BentoCard
                as="article"
                className="relative overflow-hidden p-md"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative z-10 mb-md flex flex-col justify-between gap-sm md:flex-row md:items-start">
                  <div>
                    <h2 className="heading-card text-on-surface">
                      {experience.role}
                    </h2>
                    <p className="heading-lead text-tertiary">
                      {experience.organization}
                    </p>
                    {experience.contract && (
                      <p className="mt-1 text-sm text-on-surface-variant">
                        {experience.contract}
                      </p>
                    )}
                  </div>
                  <p
                    className={[
                      'inline-flex h-fit items-center whitespace-nowrap rounded-full border px-3 py-1 font-mono text-xs',
                      experience.current
                        ? 'border-primary/20 bg-primary/10 text-primary'
                        : 'border-outline-variant bg-surface-bright text-on-surface-variant',
                    ].join(' ')}
                  >
                    <MaterialIcon
                      className="mr-1 text-base"
                      name={
                        experience.current
                          ? 'calendar_today'
                          : 'calendar_month'
                      }
                    />
                    {experience.period}
                  </p>
                </div>

                <ul className="relative z-10 mb-md space-y-2 text-on-surface-variant">
                  {experience.achievements.map((achievement) => (
                    <li className="flex items-start" key={achievement}>
                      <MaterialIcon
                        className="mr-2 mt-1 shrink-0 text-lg text-primary"
                        name="chevron_right"
                      />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative z-10 flex flex-wrap gap-xs">
                  {experience.technologies.map((technology) => (
                    <TechChip
                      className="px-2 py-1 text-on-surface"
                      highlighted={
                        technology === 'Java' ||
                        technology === 'Spring Boot' ||
                        technology === 'AWS Lambda'
                      }
                      key={technology}
                    >
                      {technology}
                    </TechChip>
                  ))}
                </div>
              </BentoCard>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
