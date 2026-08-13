export const locales = ['en', 'es'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export const localeStorageKey = 'portfolio-locale'

export function isLocale(value: string | null): value is Locale {
  return value === 'en' || value === 'es'
}
