import { useEffect, useMemo, useState, type ReactNode } from 'react'

import { copies } from './copy'
import { LanguageContext } from './language-context'
import {
  defaultLocale,
  isLocale,
  localeStorageKey,
  type Locale,
} from './locale'
import { portfolios } from '../data/portfolio.data'

function readStoredLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(localeStorageKey)
    return isLocale(stored) ? stored : defaultLocale
  } catch {
    return defaultLocale
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(readStoredLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem(localeStorageKey, locale)
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      copy: copies[locale],
      portfolio: portfolios[locale],
    }),
    [locale],
  )

  return <LanguageContext value={value}>{children}</LanguageContext>
}
