import { Outlet } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import Loading from '../components/ui/Loading'
import SEO from '../components/seo/SEO'
import ProfileImageLightbox from '../components/ui/ProfileImageLightbox'
import { usePrefetch } from '../hooks/usePrefetch'
import { useHoverPrefetch } from '../hooks/useHoverPrefetch'
import { usePreloadRoutes } from '../hooks/usePreloadRoutes'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useProgressiveLoading } from '../hooks/useProgressiveLoading'

function RootLayout() {
  usePrefetch()
  useHoverPrefetch()
  usePreloadRoutes()
  useScrollToTop()
  const { isLoading, progress, loadingStage } = useProgressiveLoading()
  const [isProfileImageOpen, setIsProfileImageOpen] = useState(false)

  const closeProfileImage = useCallback(() => setIsProfileImageOpen(false), [])

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      window.scrollTo(0, 0)

      requestAnimationFrame(() => {
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
        window.scrollTo(0, 0)
      })
    } else if (!isProfileImageOpen) {
      requestAnimationFrame(() => {
        document.body.style.overflow = ''
      })
    }

    return () => {
      if (!isProfileImageOpen) {
        document.body.style.overflow = ''
      }
    }
  }, [isLoading, isProfileImageOpen])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-secondary-100 dark:from-secondary-900 dark:to-secondary-800">
      <SEO />
      <Loading
        isLoading={isLoading}
        progress={progress}
        stage={loadingStage === 'idle' ? 'loading' : loadingStage}
      />
      <Navbar onProfileImageClick={() => setIsProfileImageOpen(true)} />
      <main
        className="flex-1"
        style={{
          opacity: isLoading && loadingStage !== 'rendering' && loadingStage !== 'complete' ? 0 : 1,
          pointerEvents: isLoading && loadingStage !== 'rendering' && loadingStage !== 'complete' ? 'none' : 'auto',
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        <div className="w-full">
          <Outlet />
        </div>
      </main>
      <Footer />

      <ProfileImageLightbox open={isProfileImageOpen} onClose={closeProfileImage} />
    </div>
  )
}

export default RootLayout
