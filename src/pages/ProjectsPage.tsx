import { BentoCard } from '../components/ui/BentoCard'
import { MaterialIcon } from '../components/ui/MaterialIcon'
import { TechChip } from '../components/ui/TechChip'
import { useLanguage } from '../i18n/useLanguage'
import type { Project } from '../data/portfolio.types'

const layoutClass = {
  featured: 'md:col-span-8',
  compact: 'md:col-span-4',
  wide: 'md:col-span-12 md:flex-row',
} satisfies Record<Project['layout'], string>

function ProjectCard({ project }: { project: Project }) {
  const wide = project.layout === 'wide'

  return (
    <BentoCard
      as="article"
      className={`flex flex-col overflow-hidden ${layoutClass[project.layout]}`}
    >
      <div
        className={[
          'relative overflow-hidden border-outline-variant bg-surface-container-high',
          wide
            ? 'h-48 w-full border-b md:h-auto md:w-2/5 md:border-b-0 md:border-r'
            : project.layout === 'featured'
              ? 'h-48 w-full border-b md:h-64'
              : 'h-40 w-full border-b',
        ].join(' ')}
      >
        <img
          alt={project.imageAlt}
          className="h-full w-full object-cover opacity-60"
          src={project.image}
        />
      </div>

      <div
        className={`flex flex-grow flex-col p-md ${wide ? 'w-full md:w-3/5' : ''}`}
      >
        <h2 className="heading-card mb-base text-on-surface">
          {project.title}
        </h2>
        <p
          className={`mb-md text-justify leading-6 text-on-surface-variant ${wide ? '' : 'flex-grow'}`}
        >
          {project.description}
        </p>

        <div
          className={
            project.technologyGroups.length > 1
              ? 'grid grid-cols-1 gap-sm md:grid-cols-2'
              : ''
          }
        >
          {project.technologyGroups.map((group, index) => (
            <div key={group.label ?? `${project.id}-${index}`}>
              {group.label && (
                <h3 className="heading-label mb-xs text-tertiary">
                  {group.label}
                </h3>
              )}
              <div className="flex flex-wrap gap-xs">
                {group.items.map((technology) => (
                  <TechChip
                    className="px-2 py-1"
                    highlighted={group.highlighted?.includes(technology)}
                    key={technology}
                  >
                    {technology}
                  </TechChip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  )
}

export function ProjectsPage() {
  const { copy, portfolio } = useLanguage()

  return (
    <section
      aria-labelledby="proyectos-heading"
      className="section-anchor mx-auto w-full max-w-portfolio scroll-mt-16 px-gutter py-xl"
      id="proyectos"
    >
      <header className="reveal-item mb-lg max-w-3xl" data-reveal>
        <h2
          className="heading-section mb-sm text-primary-fixed"
          id="proyectos-heading"
        >
          {copy.projects.title}
        </h2>
        <p className="heading-lead text-on-surface-variant">
          {copy.projects.lead}
        </p>
        <p className="mt-sm flex items-start gap-2 text-justify text-sm leading-6 text-on-surface-variant">
          <MaterialIcon className="mt-0.5 shrink-0 text-primary" name="lock" />
          <span>{copy.projects.confidential}</span>
        </p>
      </header>

      <section
        aria-label={copy.projects.list}
        className="grid grid-cols-1 gap-gutter md:grid-cols-12"
      >
        {portfolio.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </section>
  )
}
