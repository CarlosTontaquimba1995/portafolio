import { BentoCard } from '../components/ui/BentoCard'
import { MaterialIcon } from '../components/ui/MaterialIcon'
import { TechChip } from '../components/ui/TechChip'
import { useLanguage } from '../i18n/useLanguage'
import type { SkillGroup } from '../data/portfolio.types'

function SkillCard({
  group,
  compact = false,
}: {
  group: SkillGroup
  compact?: boolean
}) {
  const Heading = compact ? 'h3' : 'h2'

  return (
    <BentoCard className="p-md">
      <div className="mb-sm flex items-center gap-2 text-primary">
        <MaterialIcon name={group.icon} />
        <Heading className="heading-card text-on-surface">
          {group.title}
        </Heading>
      </div>
      <div className="flex flex-wrap gap-3">
        {group.items.map((item) => (
          <TechChip highlighted={item.highlighted} key={item.label}>
            <MaterialIcon className="text-base" name={item.icon} />
            {item.label}
          </TechChip>
        ))}
      </div>
    </BentoCard>
  )
}

export function SkillsEducationPage() {
  const { copy, portfolio } = useLanguage()

  const group = (id: string) => {
    const result = portfolio.skillGroups.find((item) => item.id === id)
    if (!result) throw new Error(`Missing skill group ${id}.`)
    return result
  }

  return (
    <section
      aria-labelledby="habilidades-heading"
      className="section-anchor mx-auto w-full max-w-portfolio scroll-mt-16 px-gutter py-xl"
      id="habilidades"
    >
      <header className="reveal-item mb-xl" data-reveal>
        <h2
          className="heading-section mb-xs text-on-surface"
          id="habilidades-heading"
        >
          {copy.skills.title}
        </h2>
        <p className="heading-lead text-on-surface-variant">
          {copy.skills.lead}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
        <section
          aria-label={copy.skills.technical}
          className="flex flex-col gap-gutter md:col-span-8"
        >
          <SkillCard group={group('languages')} />
          <SkillCard group={group('backend')} />
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
            <SkillCard compact group={group('frontend')} />
            <SkillCard compact group={group('databases')} />
          </div>
          <SkillCard group={group('devops')} />
        </section>

        <aside className="flex flex-col gap-gutter md:col-span-4">
          <BentoCard className="flex h-full flex-col p-md">
            <div className="mb-md flex items-center gap-2 text-primary">
              <MaterialIcon name="school" />
              <h2 className="heading-card text-on-surface">
                {copy.skills.education}
              </h2>
            </div>
            <div className="ml-2 flex-grow space-y-6 border-l-2 border-secondary-container pl-4">
              {portfolio.education.map((education, index) => (
                <div className="relative" key={education.degree}>
                  <span
                    aria-hidden="true"
                    className={[
                      'absolute -left-[21px] top-1 h-2 w-2 rounded-full ring-4 ring-surface-container',
                      index === 0 ? 'bg-primary' : 'bg-secondary-container',
                    ].join(' ')}
                  />
                  <h3 className="heading-card text-on-surface">
                    {education.degree}
                  </h3>
                  <p className="mt-1 text-tertiary">{education.institution}</p>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="p-md">
            <div className="mb-sm flex items-center gap-2 text-primary">
              <MaterialIcon name="translate" />
              <h2 className="heading-card text-on-surface">
                {copy.skills.languages}
              </h2>
            </div>
            <ul className="space-y-2">
              {portfolio.languages.map((language, index) => (
                <li
                  className={[
                    'flex items-center justify-between pb-2',
                    index < portfolio.languages.length - 1
                      ? 'border-b border-outline-variant/50'
                      : '',
                  ].join(' ')}
                  key={language.name}
                >
                  <span className="text-on-surface">{language.name}</span>
                  <span
                    className={`font-mono text-xs ${index === 0 ? 'text-primary' : 'text-secondary'}`}
                  >
                    {language.level}
                  </span>
                </li>
              ))}
            </ul>
          </BentoCard>

          <BentoCard className="group relative h-48 overflow-hidden p-0">
            <img
              alt={copy.skills.mapAlt}
              className="h-full w-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-100"
              src="/images/quito-map.webp"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-surface-container to-transparent p-4">
              <p className="flex items-center gap-1 font-mono text-xs text-primary">
                <MaterialIcon className="text-base" name="location_on" />
                Quito, Ecuador
              </p>
            </div>
          </BentoCard>
        </aside>
      </div>
    </section>
  )
}
