import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import CountUp from '../ui/CountUp'

function HeroEngagementSection() {
  const { t } = useTranslation()

  const metrics = [
    { value: 4, label: t('home.metrics.clients'), suffix: '+' },
    { value: 5, label: t('home.metrics.projects'), suffix: '+' },
    { value: 100, label: t('home.metrics.satisfaction'), suffix: '%' },
    { value: '4-12', label: t('home.metrics.delivery'), suffix: '' },
  ]

  return (
    <section
      id="engagement"
      data-section="engagement"
      className="relative py-12 md:py-16 overflow-visible"
    >
      <div className="relative container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-14">
          {/* Segmented CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4"
          >
            <Link
              to="/services"
              className="w-full sm:w-auto sm:min-w-[280px] inline-flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 px-4 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-primary-600 hover:bg-primary-500 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <span className="text-sm sm:text-base font-semibold text-left">
                {t('home.segmentedCta.business')}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs opacity-90">
                <span>{t('home.segmentedCta.businessSubtext')}</span>
                <ArrowRightIcon className="w-4 h-4" />
              </span>
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto sm:min-w-[280px] inline-flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 px-4 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-white/90 dark:bg-secondary-900/80 border border-secondary-200 dark:border-secondary-700 text-secondary-900 dark:text-secondary-50 shadow-sm hover:shadow-md transition-all"
            >
              <span className="text-sm sm:text-base font-semibold text-left">
                {t('home.segmentedCta.individual')}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-secondary-600 dark:text-secondary-300">
                <span>{t('home.segmentedCta.individualSubtext')}</span>
              </span>
            </Link>
          </motion.div>

          {/* Profile teaser */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl mx-auto"
          >
            <Link
              to="/about"
              className="relative block overflow-hidden rounded-2xl border border-secondary-200/80 dark:border-secondary-700/80 bg-white/80 dark:bg-secondary-900/80 backdrop-blur-sm px-4 py-3 sm:px-5 sm:py-4 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-primary-500/5 via-transparent to-accent-500/5" />
              <div className="relative flex items-center gap-3 sm:gap-4">
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 uppercase tracking-wide">
                      {t('home.videoTeaser.badge')}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-secondary-900 dark:text-white mb-0.5">
                    {t('home.videoTeaser.title')}
                  </p>
                  <p className="text-[11px] sm:text-xs text-secondary-600 dark:text-secondary-300 hidden sm:block">
                    {t('home.videoTeaser.subtitle')}
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary-700 dark:text-primary-300 shrink-0">
                  {t('home.videoTeaser.cta')}
                  <ArrowRightIcon className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 + index * 0.08 }}
                className="card text-center p-4 sm:p-6"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {typeof metric.value === 'number' ? (
                    <CountUp end={metric.value} suffix={metric.suffix} duration={2} />
                  ) : (
                    <span>
                      {metric.value}
                      {metric.suffix}
                    </span>
                  )}
                </div>
                <div className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-400">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroEngagementSection
