import { useLanguage } from '../../i18n/useLanguage'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

export function WhatsAppFloat() {
  const { copy, portfolio } = useLanguage()

  return (
    <a
      aria-label={copy.contact.whatsapp}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      href={portfolio.contact.whatsappHref}
      rel="noreferrer"
      target="_blank"
    >
      <WhatsAppIcon />
    </a>
  )
}
