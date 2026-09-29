import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  ArrowPathIcon,
  ExclamationTriangleIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'

export type ErrorFallbackVariant = 'page' | 'section' | 'inline'

export type ErrorFallbackProps = {
  title?: string
  description?: string
  error?: unknown
  onRetry?: () => void
  homeHref?: string
  variant?: ErrorFallbackVariant
  showDetails?: boolean
  className?: string
}

function getErrorMessage(error: unknown): string | null {
  if (!error) return null
  if (typeof error === 'string') return error
  if (error instanceof Error) return error.message
  try {
    return String(error)
  } catch {
    return null
  }
}

const variantStyles: Record<
  ErrorFallbackVariant,
  {
    wrapper: string
    panel: string
    iconWrap: string
    icon: string
    title: string
    description: string
  }
> = {
  page: {
    wrapper:
      'min-h-[70vh] flex items-center justify-center px-4 py-12 sm:py-16',
    panel:
      'w-full max-w-lg rounded-2xl border border-danger-200/80 dark:border-danger-800/60 bg-white/95 dark:bg-secondary-900/95 shadow-xl shadow-danger-500/5 dark:shadow-black/30 p-6 sm:p-8 text-center',
    iconWrap:
      'mx-auto mb-5 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-danger-50 dark:bg-danger-900/50 border border-danger-200 dark:border-danger-800/70',
    icon: 'h-7 w-7 sm:h-8 sm:w-8 text-danger-600 dark:text-danger-400',
    title: 'text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-2',
    description:
      'text-sm sm:text-base text-secondary-600 dark:text-secondary-300 leading-relaxed',
  },
  section: {
    wrapper: 'flex items-center justify-center px-4 py-10',
    panel:
      'w-full max-w-md rounded-xl border border-danger-200 dark:border-danger-800/60 bg-danger-50/60 dark:bg-danger-900/30 p-5 sm:p-6 text-center',
    iconWrap:
      'mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-danger-100 dark:bg-danger-900/50 border border-danger-200 dark:border-danger-800',
    icon: 'h-6 w-6 text-danger-600 dark:text-danger-400',
    title: 'text-lg font-semibold text-secondary-900 dark:text-white mb-1.5',
    description: 'text-sm text-secondary-600 dark:text-secondary-300 leading-relaxed',
  },
  inline: {
    wrapper: 'w-full',
    panel:
      'w-full rounded-lg border border-danger-200 dark:border-danger-800/70 bg-danger-50 dark:bg-danger-900/40 px-4 py-3 text-left',
    iconWrap:
      'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-danger-100 dark:bg-danger-900/60 border border-danger-200 dark:border-danger-800',
    icon: 'h-5 w-5 text-danger-600 dark:text-danger-400',
    title: 'text-sm font-semibold text-danger-800 dark:text-danger-200',
    description: 'text-xs sm:text-sm text-danger-700/90 dark:text-danger-300/90 mt-0.5',
  },
}

function ErrorFallback({
  title,
  description,
  error,
  onRetry,
  homeHref = '/',
  variant = 'page',
  showDetails = import.meta.env.DEV,
  className = '',
}: ErrorFallbackProps) {
  const { t } = useTranslation()
  const styles = variantStyles[variant]
  const errorMessage = getErrorMessage(error)

  const resolvedTitle = title ?? t('errors.title')
  const resolvedDescription = description ?? t('errors.description')

  if (variant === 'inline') {
    return (
      <div
        role="alert"
        className={`${styles.wrapper} ${className}`.trim()}
      >
        <div className={`${styles.panel} flex items-start gap-3`}>
          <div className={styles.iconWrap}>
            <ExclamationTriangleIcon className={styles.icon} aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <p className={styles.title}>{resolvedTitle}</p>
            <p className={styles.description}>{resolvedDescription}</p>
            {showDetails && errorMessage && (
              <p className="mt-2 font-mono text-[11px] text-danger-600/80 dark:text-danger-400/80 break-words">
                {errorMessage}
              </p>
            )}
            {onRetry && (
              <button
                type="button"
                onClick={onRetry}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-danger-700 dark:text-danger-300 hover:text-danger-800 dark:hover:text-danger-200 underline-offset-2 hover:underline"
              >
                <ArrowPathIcon className="h-3.5 w-3.5" />
                {t('errors.retry')}
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      role="alert"
      className={`${styles.wrapper} ${className}`.trim()}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className={styles.panel}
      >
        <div className={styles.iconWrap}>
          <ExclamationTriangleIcon className={styles.icon} aria-hidden />
        </div>

        <h1 className={styles.title}>{resolvedTitle}</h1>
        <p className={styles.description}>{resolvedDescription}</p>

        {showDetails && errorMessage && (
          <div className="mt-4 rounded-lg border border-danger-200/70 dark:border-danger-800/50 bg-danger-50 dark:bg-danger-900/40 px-3 py-2.5 text-left">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-danger-600 dark:text-danger-400 mb-1">
              {t('errors.details')}
            </p>
            <p className="font-mono text-xs text-danger-800 dark:text-danger-200 break-words">
              {errorMessage}
            </p>
          </div>
        )}

        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          {onRetry && (
            <button
              type="button"
              onClick={onRetry}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-danger-600 hover:bg-danger-500 dark:bg-danger-500 dark:hover:bg-danger-400 text-white font-semibold px-5 py-2.5 shadow-md shadow-danger-600/20 transition-colors focus:outline-none focus:ring-2 focus:ring-danger-500 focus:ring-offset-2 dark:focus:ring-offset-secondary-900"
            >
              <ArrowPathIcon className="h-5 w-5" />
              {t('errors.retry')}
            </button>
          )}
          <Link
            to={homeHref}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-secondary-200 dark:border-secondary-600 bg-white dark:bg-secondary-800 text-secondary-800 dark:text-secondary-100 hover:bg-secondary-50 dark:hover:bg-secondary-700 font-semibold px-5 py-2.5 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 dark:focus:ring-offset-secondary-900"
          >
            <HomeIcon className="h-5 w-5" />
            {t('errors.home')}
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default ErrorFallback
