import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/solid'
import profileImage from '../../assets/bendjibril.jpg'

type ProfileImageLightboxProps = {
  open: boolean
  onClose: () => void
}

function ProfileImageLightbox({ open, onClose }: ProfileImageLightboxProps) {
  const { t } = useTranslation()
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={t('home.about.realName')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md" aria-hidden="true" />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 6 }}
            transition={{ type: 'spring', stiffness: 380, damping: 28 }}
            className="relative z-10 flex w-full max-w-lg sm:max-w-xl md:max-w-2xl max-h-[min(88vh,720px)] flex-col overflow-hidden rounded-2xl bg-secondary-950 shadow-2xl ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20">
              <button
                ref={closeBtnRef}
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white shadow-lg ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-black/75 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                aria-label={t('services.details.close')}
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-gradient-to-b from-secondary-900 to-secondary-950 p-3 sm:p-5 pt-12 sm:pt-14">
              <img
                src={profileImage}
                alt="Ben Djibril — Kone Djibril Benjamin"
                className="max-h-[min(70vh,560px)] w-auto max-w-full object-contain select-none"
                loading="eager"
                decoding="async"
                draggable={false}
              />
            </div>

            <p className="shrink-0 border-t border-white/10 px-4 py-2.5 text-center text-xs text-white/55 sm:text-sm">
              {t('ui.lightboxHint')}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProfileImageLightbox
