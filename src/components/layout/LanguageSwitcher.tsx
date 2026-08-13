import { useLanguage } from '../../i18n/useLanguage'

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { locale, setLocale, copy } = useLanguage()

  return (
    <div
      aria-label={copy.language}
      className={`flex items-center gap-1 rounded-md border border-outline-variant p-1 ${className}`}
      role="group"
    >
      {(['en', 'es'] as const).map((code) => {
        const active = locale === code
        return (
          <button
            aria-pressed={active}
            className={[
              'rounded px-2 py-1 font-mono text-xs font-semibold transition-colors',
              active
                ? 'bg-[#0ea5e9] text-[#001e2f]'
                : 'text-on-surface-variant hover:text-primary',
            ].join(' ')}
            key={code}
            onClick={() => setLocale(code)}
            type="button"
          >
            {code.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
