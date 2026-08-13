import { createContext } from 'react'

import type { UiCopy } from './copy'
import type { Locale } from './locale'
import type { PortfolioData } from '../data/portfolio.types'

export interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  copy: UiCopy
  portfolio: PortfolioData
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
