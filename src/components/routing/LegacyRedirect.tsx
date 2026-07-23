import { Navigate, useLocation } from 'react-router-dom'
import { DEFAULT_LOCALE, localizePath, normalizeLocale } from '../../i18n/routing'

/** Redirects legacy unprefixed URLs (/services, …) to /{locale}/… */
function LegacyRedirect() {
  const location = useLocation()
  const saved = localStorage.getItem('lang')
  const locale = normalizeLocale(saved) || DEFAULT_LOCALE
  const target = localizePath(`${location.pathname}${location.search}${location.hash}`, locale)
  return <Navigate to={target} replace />
}

export default LegacyRedirect
