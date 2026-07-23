export const LOCALES = ['en', 'fr'] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'en'

export function isLocale(value: string | undefined | null): value is Locale {
  return value === 'en' || value === 'fr'
}

export function normalizeLocale(value: string | undefined | null): Locale {
  if (!value) return DEFAULT_LOCALE
  const short = value.toLowerCase().slice(0, 2)
  return isLocale(short) ? short : DEFAULT_LOCALE
}

/** `/services?type=web` + `en` → `/en/services?type=web` ; `/` → `/en` */
export function localizePath(path: string, locale: Locale): string {
  const hashIndex = path.indexOf('#')
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : ''
  const withoutHash = hashIndex >= 0 ? path.slice(0, hashIndex) : path

  const queryIndex = withoutHash.indexOf('?')
  const search = queryIndex >= 0 ? withoutHash.slice(queryIndex) : ''
  let pathname = queryIndex >= 0 ? withoutHash.slice(0, queryIndex) : withoutHash

  pathname = pathname.replace(/\/+$/, '') || '/'
  // Already localized?
  const parts = pathname.split('/').filter(Boolean)
  if (parts[0] && isLocale(parts[0])) {
    pathname = parts.length > 1 ? `/${parts.slice(1).join('/')}` : '/'
  }

  const bare = pathname === '/' ? '' : pathname.replace(/^\//, '')
  const base = bare ? `/${locale}/${bare}` : `/${locale}`
  return `${base}${search}${hash}`
}

/** `/en/projects` → `/projects` ; `/fr` → `/` */
export function stripLocaleFromPath(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean)
  if (parts[0] && isLocale(parts[0])) {
    const rest = parts.slice(1).join('/')
    return rest ? `/${rest}` : '/'
  }
  return pathname || '/'
}

export function getLocaleFromPath(pathname: string): Locale | null {
  const first = pathname.split('/').filter(Boolean)[0]
  return isLocale(first) ? first : null
}
