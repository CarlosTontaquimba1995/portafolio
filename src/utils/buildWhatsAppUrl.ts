export interface ContactFormValues {
  name: string
  message: string
}

export function buildWhatsAppUrl({
  name,
  message,
  intro,
}: ContactFormValues & { intro: string }): string {
  const text = [
    intro.replace('{name}', name.trim()),
    '',
    message.trim(),
  ].join('\n')

  return `https://wa.me/593939618855?text=${encodeURIComponent(text)}`
}
