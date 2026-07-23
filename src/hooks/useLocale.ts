import { useCallback, useMemo } from 'react'
import { useNavigate, useParams, useLocation, type NavigateOptions } from 'react-router-dom'
import {
  DEFAULT_LOCALE,
  isLocale,
  localizePath,
  normalizeLocale,
  stripLocaleFromPath,
  type Locale,
} from '../i18n/routing'

export function useLocale() {
  const params = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const locale: Locale = useMemo(() => {
    if (isLocale(params.lang)) return params.lang
    const fromPath = location.pathname.split('/').filter(Boolean)[0]
    return normalizeLocale(fromPath)
  }, [params.lang, location.pathname])

  const lp = useCallback(
    (path: string) => localizePath(path, locale),
    [locale]
  )

  const navigateLocalized = useCallback(
    (path: string, options?: NavigateOptions) => {
      navigate(localizePath(path, locale), options)
    },
    [navigate, locale]
  )

  const barePath = useMemo(
    () => stripLocaleFromPath(location.pathname),
    [location.pathname]
  )

  return {
    locale,
    lp,
    navigateLocalized,
    barePath,
    defaultLocale: DEFAULT_LOCALE,
  }
}
