import { useRef, useState } from 'react'

import { Footer } from '../components/layout/Footer'
import { MaterialIcon } from '../components/ui/MaterialIcon'
import { useLanguage } from '../i18n/useLanguage'
import {
  buildWhatsAppUrl,
  type ContactFormValues,
} from '../utils/buildWhatsAppUrl'

type FormErrors = Partial<Record<keyof ContactFormValues, string>>

const initialValues: ContactFormValues = {
  name: '',
  message: '',
}

interface ContactFormProps {
  openWhatsApp?: (url: string) => void
}

export function ContactForm({
  openWhatsApp = (url) => window.open(url, '_blank', 'noopener,noreferrer'),
}: ContactFormProps) {
  const { copy } = useLanguage()
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const nameRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const update =
    (field: keyof ContactFormValues) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
      setErrors((current) => ({ ...current, [field]: undefined }))
    }

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: FormErrors = {}
    if (!values.name.trim()) nextErrors.name = copy.contact.nameError
    if (!values.message.trim()) nextErrors.message = copy.contact.messageError
    setErrors(nextErrors)

    const firstInvalid = (
      [
        ['name', nameRef],
        ['message', messageRef],
      ] as const
    ).find(([field]) => nextErrors[field])

    if (firstInvalid) {
      firstInvalid[1].current?.focus()
      return
    }

    openWhatsApp(
      buildWhatsAppUrl({
        ...values,
        intro: copy.whatsappIntro,
      }),
    )
  }

  const fieldClass =
    'rounded-md border border-outline-variant bg-surface-container-high px-sm py-sm text-on-surface outline-none transition-all placeholder:text-on-surface-variant/60 focus:border-primary focus:ring-1 focus:ring-primary'

  return (
    <form className="relative z-10 space-y-md" noValidate onSubmit={submit}>
      <div className="flex flex-col gap-base">
        <label className="font-mono text-xs text-on-surface-variant" htmlFor="name">
          {copy.contact.name}
        </label>
        <input
          aria-describedby={errors.name ? 'name-error' : undefined}
          aria-invalid={Boolean(errors.name)}
          autoComplete="name"
          className={fieldClass}
          id="name"
          onChange={update('name')}
          placeholder="John Doe"
          ref={nameRef}
          type="text"
          value={values.name}
        />
        {errors.name && (
          <p className="text-sm text-red-300" id="name-error">
            {errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-base">
        <label className="font-mono text-xs text-on-surface-variant" htmlFor="message">
          {copy.contact.message}
        </label>
        <textarea
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-invalid={Boolean(errors.message)}
          className={`${fieldClass} resize-none`}
          id="message"
          onChange={update('message')}
          placeholder="How can I help you?"
          ref={messageRef}
          rows={5}
          value={values.message}
        />
        {errors.message && (
          <p className="text-sm text-red-300" id="message-error">
            {errors.message}
          </p>
        )}
      </div>

      <button
        className="btn-primary mt-sm inline-flex items-center gap-xs rounded-md px-lg py-sm font-semibold transition-colors"
        type="submit"
      >
        {copy.contact.send}
        <MaterialIcon className="text-xl" name="send" />
      </button>
    </form>
  )
}

export function ContactPage() {
  const { copy, portfolio } = useLanguage()
  const { contact } = portfolio

  const details = [
    { label: copy.contact.location, value: contact.location, icon: 'location_on' },
    {
      label: copy.contact.phone,
      value: contact.phoneDisplay,
      icon: 'phone',
      href: `tel:${contact.phoneHref}`,
    },
    {
      label: copy.contact.email,
      value: contact.email,
      icon: 'mail',
      href: `mailto:${contact.email}`,
    },
  ]

  return (
    <section
      aria-labelledby="contacto-heading"
      className="section-anchor scroll-mt-16"
      id="contacto"
    >
      <div className="mx-auto w-full max-w-portfolio px-gutter py-xl">
      <header className="reveal-item mb-xl" data-reveal>
        <h2
          className="heading-section mb-sm text-on-surface"
          id="contacto-heading"
        >
          {copy.contact.title}
        </h2>
        <p className="heading-lead max-w-2xl text-on-surface-variant">
          {copy.contact.lead}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
        <section className="reveal-item group relative rounded-xl border border-outline-variant bg-surface-container-low p-lg md:col-span-8" data-reveal>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-xl bg-primary/0 transition-colors duration-300 group-hover:bg-primary/5"
          />
          <h2 className="heading-card relative z-10 mb-md text-on-surface">
            {copy.contact.formTitle}
          </h2>
          <ContactForm />
        </section>

        <aside className="reveal-item flex flex-col gap-md rounded-xl border border-outline-variant bg-surface-container-low p-lg md:col-span-4" data-reveal>
          <h2 className="heading-card mb-xs text-on-surface">
            {copy.contact.details}
          </h2>
          <div className="flex flex-col gap-sm">
            {details.map((detail) => (
              <div className="group flex items-start gap-sm" key={detail.label}>
                <div className="rounded-md bg-surface-container-highest p-xs text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                  <MaterialIcon name={detail.icon} />
                </div>
                <div>
                  <p className="mb-base font-mono text-xs text-on-surface-variant">
                    {detail.label}
                  </p>
                  {detail.href ? (
                    <a
                      className="break-all text-on-surface transition-colors hover:text-primary"
                      href={detail.href}
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-on-surface">{detail.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <hr className="my-sm border-outline-variant" />

          <div>
            <p className="mb-sm font-mono text-xs text-on-surface-variant">
              {copy.contact.networks}
            </p>
            <div className="flex gap-sm">
              <a
                className="flex flex-1 items-center justify-center rounded-md bg-surface-container-highest p-sm font-semibold text-on-surface transition-colors hover:bg-surface-bright hover:text-primary"
                href={contact.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                className="flex flex-1 items-center justify-center rounded-md bg-surface-container-highest p-sm font-semibold text-on-surface transition-colors hover:bg-surface-bright hover:text-primary"
                href={contact.github}
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </aside>
      </div>
      </div>
      <Footer />
    </section>
  )
}
