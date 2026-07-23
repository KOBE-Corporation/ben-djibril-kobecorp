import { useEffect, useCallback } from 'react'
import { useLocale } from './useLocale'

// Définir les routes disponibles pour le préchargement (chemins nus)
const BARE_ROUTES = ['/', '/services', '/projects', '/about', '/contact']

// Set pour éviter les doublons de prefetch
const prefetchedRoutes = new Set<string>()

/**
 * Hook optimisé pour précharger les routes et ressources
 * Précharge les pages les plus visitées et évite les doublons
 */
export function usePrefetch() {
  const { lp, barePath } = useLocale()

  // Fonction pour précharger une route spécifique (chemin déjà localisé)
  const prefetchRoute = useCallback((path: string) => {
    const currentLocalized = lp(barePath)
    // Ne pas précharger la route actuelle ou si déjà préchargée
    if (path === currentLocalized || prefetchedRoutes.has(path)) {
      return
    }

    // Marquer comme préchargée
    prefetchedRoutes.add(path)

    // Précharger la route avec React Router prefetch (si disponible)
    // Pour Vite, on précharge le chunk JS correspondant
    try {
      const prefetchLink = document.createElement('link')
      prefetchLink.rel = 'prefetch'
      prefetchLink.as = 'document'
      prefetchLink.href = path
      
      // Précharger seulement si le lien n'existe pas déjà
      if (!document.querySelector(`link[href="${path}"]`)) {
        document.head.appendChild(prefetchLink)
      }
    } catch (error) {
      // Ignorer les erreurs silencieusement
      console.debug('Prefetch failed for:', path, error)
    }
  }, [lp, barePath])

  useEffect(() => {
    // Précharger les liens HTML présents sur la page
    const links = document.querySelectorAll('a[href^="/"]') as NodeListOf<HTMLAnchorElement>
    
    links.forEach((link) => {
      const href = link.getAttribute('href')
      if (!href || href === lp(barePath)) return

      // Utiliser la fonction de préchargement optimisée
      prefetchRoute(href)
    })

    // Précharger intelligemment les routes adjacentes (routes les plus probables)
    // Basé sur la route actuelle, précharger les routes liées
    const currentRouteIndex = BARE_ROUTES.indexOf(barePath)
    if (currentRouteIndex !== -1) {
      // Précharger la route suivante et précédente
      const adjacentRoutes = [
        BARE_ROUTES[currentRouteIndex + 1],
        BARE_ROUTES[currentRouteIndex - 1],
      ].filter(Boolean) as string[]

      // Précharger immédiatement les routes adjacentes (plus agressif)
      requestAnimationFrame(() => {
        adjacentRoutes.forEach(route => prefetchRoute(lp(route)))
      })
    }

    // Précharger les routes les plus visitées en arrière-plan (plus rapide)
    // (Home, Services, Contact sont les plus courantes)
    const homePath = lp('/')
    const servicesPath = lp('/services')
    const contactPath = lp('/contact')

    if (!prefetchedRoutes.has(homePath) && barePath !== '/') {
      requestAnimationFrame(() => {
        setTimeout(() => prefetchRoute(homePath), 500)
      })
    }
    if (!prefetchedRoutes.has(servicesPath) && barePath !== '/services') {
      requestAnimationFrame(() => {
        setTimeout(() => prefetchRoute(servicesPath), 700)
      })
    }
    if (!prefetchedRoutes.has(contactPath) && barePath !== '/contact') {
      requestAnimationFrame(() => {
        setTimeout(() => prefetchRoute(contactPath), 900)
      })
    }
  }, [barePath, lp, prefetchRoute])
}
