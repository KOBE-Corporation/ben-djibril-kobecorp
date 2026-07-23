import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const HEADER_OFFSET = 80
const HASH_RETRY_MS = 150
const HASH_MAX_ATTEMPTS = 20
/** Wait for progressive loader (~1s) before first hash scroll attempt */
const HASH_INITIAL_DELAY_MS = 1100

function findHashTarget(hash: string): Element | null {
  if (!hash) return null
  const id = hash.replace('#', '')
  return (
    document.querySelector(hash) ||
    document.querySelector(`[data-section="${id}"]`) ||
    document.querySelector(`[data-subsection="${id}"]`)
  )
}

function scrollToElement(element: Element) {
  const top = element.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET
  window.scrollTo({
    top: Math.max(0, top),
    behavior: 'smooth',
  })
}

/**
 * Scrolls to top on route change, or to a hash target (#packages, #services, …)
 * after the progressive loader has finished.
 */
export function useScrollToTop() {
  const { pathname, hash } = useLocation()
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    if (hash) {
      const scrollToHash = (attempt = 0) => {
        const element = findHashTarget(hash)
        if (element) {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              scrollToElement(element)
            })
          })
          return
        }
        if (attempt < HASH_MAX_ATTEMPTS) {
          timeoutRef.current = setTimeout(() => scrollToHash(attempt + 1), HASH_RETRY_MS)
        } else {
          window.scrollTo(0, 0)
        }
      }

      timeoutRef.current = setTimeout(() => scrollToHash(0), HASH_INITIAL_DELAY_MS)
    } else {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      window.scrollTo(0, 0)
      requestAnimationFrame(() => {
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
        window.scrollTo(0, 0)
      })
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [pathname, hash])
}
