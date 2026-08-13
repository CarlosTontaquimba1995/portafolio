import type { Locale } from '../i18n/locale'
import type { PortfolioData } from './portfolio.types'
import { portfolioEn } from './portfolio.en'
import { portfolioEs } from './portfolio.es'

export const portfolios: Record<Locale, PortfolioData> = {
  en: portfolioEn,
  es: portfolioEs,
}
