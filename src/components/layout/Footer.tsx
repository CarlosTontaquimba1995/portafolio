import { useLanguage } from '../../i18n/useLanguage'
import { MaterialIcon } from '../ui/MaterialIcon'

export function Footer() {
  const { copy, portfolio } = useLanguage()
  const { contact } = portfolio

  return (
    <footer className="mt-auto border-t border-outline-variant bg-surface-container-lowest py-xl">
      <div className="mx-auto max-w-portfolio px-gutter">
        <div className="mb-xl grid grid-cols-1 items-start gap-lg md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="heading-brand mb-sm text-primary">
              CV.Dev
            </div>
            <p className="leading-6 text-on-surface-variant">
              {copy.footer.blurb}
            </p>
          </div>

          <div className="md:col-span-4">
            <h2 className="heading-label mb-md text-on-surface">
              {copy.footer.contact}
            </h2>
            <div className="flex flex-col gap-xs">
              <a
                className="flex items-center gap-xs text-on-surface-variant transition-colors hover:text-primary"
                href={`mailto:${contact.email}`}
              >
                <MaterialIcon className="text-lg" name="mail" />
                {contact.email}
              </a>
              <a
                className="flex items-center gap-xs text-on-surface-variant transition-colors hover:text-primary"
                href={`tel:${contact.phoneHref}`}
              >
                <MaterialIcon className="text-lg" name="phone" />
                {contact.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <h2 className="heading-label mb-md text-on-surface">
              {copy.footer.networks}
            </h2>
            <div className="flex gap-md">
              <a
                className="font-semibold text-on-surface-variant transition-colors hover:text-primary"
                href={contact.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                className="font-semibold text-on-surface-variant transition-colors hover:text-primary"
                href={contact.github}
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-md border-t border-outline-variant pt-lg md:flex-row">
          <p className="font-mono text-xs text-on-surface-variant">
            {copy.footer.copyright}
          </p>
          <div className="flex items-center gap-xs text-on-surface-variant">
            <MaterialIcon className="text-base" name="code" />
            <span className="font-mono text-xs">{copy.footer.role}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
