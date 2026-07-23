import { useEffect } from 'react'
import { useLocale } from './useLocale'

/**
 * Hook pour précharger agressivement les chunks JS des pages
 * Améliore significativement la vitesse de navigation
 */
export function usePreloadRoutes() {
  const { lp, barePath } = useLocale()

  useEffect(() => {
    type RouteImport = () => Promise<unknown>
    // Routes à précharger avec leurs imports correspondants (chemins nus → localisés)
    const routesToPreload: Record<string, RouteImport> = {
      [lp('/')]: () => import('../pages/Home'),
      [lp('/services')]: () => import('../pages/Services'),
      [lp('/projects')]: () => import('../pages/Projects'),
      [lp('/about')]: () => import('../pages/About'),
      [lp('/contact')]: () => import('../pages/Contact'),
    }

    const currentLocalized = lp(barePath)

    // Précharger toutes les routes sauf la route actuelle (agressif)
    Object.entries(routesToPreload).forEach(([path, importFn], index) => {
      if (path !== currentLocalized) {
        // Précharger avec un délai échelonné pour ne pas surcharger
        // Les routes les plus importantes sont préchargées en premier
        const delay = index * 50 // 0ms, 50ms, 100ms, etc.
        requestAnimationFrame(() => {
          setTimeout(() => {
            importFn().catch(() => {
              // Ignorer les erreurs silencieusement
            })
          }, delay)
        })
      }
    })
  }, [barePath, lp])
}
