import { AppLayout } from '../components/layout/AppLayout'
import { LanguageProvider } from '../i18n/LanguageProvider'

export function App() {
  return (
    <LanguageProvider>
      <AppLayout />
    </LanguageProvider>
  )
}
