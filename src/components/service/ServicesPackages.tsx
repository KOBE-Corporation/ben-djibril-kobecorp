import { useRef, useState, useEffect, useCallback, lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  CloudIcon, 
  CodeBracketIcon,
  ServerIcon,
  ComputerDesktopIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/solid'
import PackageCard from '../ui/PackageCard'
import type { PlanId } from './ServiceDetailsDialog'

const ServiceDetailsDialog = lazy(() => import('./ServiceDetailsDialog'))
const FullControlComparisonTable = lazy(() => import('./FullControlComparisonTable'))

const VALID_PLANS: PlanId[] = [
  'full-ultraSpeed',
  'full-speed',
  'full-normal',
]

function ServicesPackages() {
  const { t } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedPlan, setSelectedPlan] = useState<PlanId | null>(null)
  const [showFullControlComparison, setShowFullControlComparison] = useState(false)
  const fullScrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const planParam = searchParams.get('plan')
    if (planParam && VALID_PLANS.includes(planParam as PlanId)) {
      setSelectedPlan(planParam as PlanId)
      const next = new URLSearchParams(searchParams)
      next.delete('plan')
      setSearchParams(next, { replace: true })
    }
  }, [searchParams, setSearchParams])

  const handlePlanClick = useCallback((planId: PlanId) => {
    setSelectedPlan(planId)
  }, [])

  const toggleFullControlComparison = useCallback(() => {
    setShowFullControlComparison((prev) => !prev)
  }, [])

  return (
    <section id="packages" data-section="packages" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-secondary-50 via-white to-primary-50/30 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-accent-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Full Control offers */}
        <motion.div
          id="fullControl"
          data-subsection="fullControl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent-400 rounded-full blur-xl opacity-50" />
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                  <CodeBracketIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white">
                {t('services.fullControlTitle')}
              </h2>
            </motion.div>
            <p className="text-base sm:text-lg md:text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto px-2 mb-3 sm:mb-4">
              {t('services.fullControlSubtitle')}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-4xl mx-auto mt-6 sm:mt-8"
            >
              <div className="bg-gradient-to-br from-accent-50 to-accent-100/50 dark:from-accent-950/60 dark:to-accent-900/40 dark:via-accent-900/30 rounded-2xl p-4 sm:p-6 border border-accent-200 dark:border-accent-800/80 dark:shadow-2xl dark:shadow-accent-900/20 shadow-lg">
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-accent-900 dark:text-accent-50 mb-4 sm:mb-5 text-center">
                  {t('services.fullControl.includesTitle')}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {[
                    { key: 'sourceCode', icon: CodeBracketIcon },
                    { key: 'restApi', icon: ServerIcon },
                    { key: 'frontend', icon: ComputerDesktopIcon },
                    { key: 'documentation', icon: DocumentTextIcon },
                    { key: 'vps', icon: CloudIcon },
                    { key: 'ssl', icon: ShieldCheckIcon },
                    { key: 'domain', icon: GlobeAltIcon },
                  ].map((item, index) => {
                    const IconComponent = item.icon
                    
                    return (
                      <motion.div
                        key={item.key}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                        className="flex items-center gap-3 p-3 sm:p-4 bg-white dark:bg-secondary-900/80 dark:backdrop-blur-sm rounded-xl border border-accent-200/50 dark:border-accent-700/70 dark:hover:border-accent-500/80 hover:border-accent-400 dark:hover:bg-secondary-800/90 transition-all duration-200 hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-accent-900/30 group"
                      >
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent-100 dark:bg-accent-900/60 dark:border dark:border-accent-800/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 group-hover:bg-accent-200 dark:group-hover:bg-accent-900/80">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-accent-600 dark:text-accent-300 dark:group-hover:text-accent-200" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-secondary-700 dark:text-secondary-100 leading-tight">
                          {t(`services.fullControl.includes.${item.key}`)}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="max-w-6xl mx-auto mt-6 md:mt-8">
            <div
              ref={fullScrollRef}
              className="flex gap-4 overflow-x-auto overflow-y-visible pb-4 pt-6 snap-x snap-mandatory scrollbar-hide md:pb-0 md:grid md:grid-cols-3 md:gap-8 md:pt-4 md:overflow-visible md:snap-none -mx-4 px-6 md:mx-0 md:px-0"
              style={{
                WebkitOverflowScrolling: 'touch',
                scrollBehavior: 'smooth',
                willChange: 'scroll-position',
              }}
            >
              {/* Speed – en premier sur mobile, au centre sur desktop */}
              <div 
                className="min-w-[calc(100vw-3rem)] sm:min-w-[320px] flex-shrink-0 snap-center md:min-w-0 w-full md:w-auto md:-translate-y-2 md:scale-105 md:order-2 relative"
                style={{
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <PackageCard
                  name={t('services.fullControl.speed.name')}
                  price={t('services.fullControl.speed.price')}
                  deliveryTime={t('services.fullControl.speed.deliveryTime')}
                  description={t('services.fullControl.speed.description')}
                  features={[
                    t('services.fullControl.speed.feature1'),
                    t('services.fullControl.speed.feature2'),
                    t('services.fullControl.speed.feature3'),
                    t('services.fullControl.speed.feature4'),
                    t('services.fullControl.speed.feature5'),
                    t('services.fullControl.speed.feature6'),
                    t('services.fullControl.speed.feature7'),
                    t('services.fullControl.speed.feature8'),
                  ]}
                  popular
                  popularLabel={t('services.bestValue')}
                  cta={t('services.requestQuote')}
                  onClick={() => handlePlanClick('full-speed')}
                  className="shadow-xl"
                />
              </div>

              {/* Ultra Speed */}
              <div 
                className="min-w-[calc(100vw-3rem)] sm:min-w-[320px] flex-shrink-0 snap-center md:min-w-0 w-full md:w-auto md:translate-y-2 md:order-1"
                style={{
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <PackageCard
                  name={t('services.fullControl.ultraSpeed.name')}
                  price={t('services.fullControl.ultraSpeed.price')}
                  deliveryTime={t('services.fullControl.ultraSpeed.deliveryTime')}
                  description={t('services.fullControl.ultraSpeed.description')}
                  features={[
                    t('services.fullControl.ultraSpeed.feature1'),
                    t('services.fullControl.ultraSpeed.feature2'),
                    t('services.fullControl.ultraSpeed.feature3'),
                    t('services.fullControl.ultraSpeed.feature4'),
                    t('services.fullControl.ultraSpeed.feature5'),
                    t('services.fullControl.ultraSpeed.feature6'),
                    t('services.fullControl.ultraSpeed.feature7'),
                    t('services.fullControl.ultraSpeed.feature8'),
                  ]}
                  cta={t('services.requestQuote')}
                  onClick={() => handlePlanClick('full-ultraSpeed')}
                />
              </div>

              {/* Normal */}
              <div 
                className="min-w-[calc(100vw-3rem)] sm:min-w-[320px] flex-shrink-0 snap-center md:min-w-0 w-full md:w-auto md:translate-y-2 md:order-3"
                style={{
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <PackageCard
                  name={t('services.fullControl.normal.name')}
                  price={t('services.fullControl.normal.price')}
                  deliveryTime={t('services.fullControl.normal.deliveryTime')}
                  description={t('services.fullControl.normal.description')}
                  features={[
                    t('services.fullControl.normal.feature1'),
                    t('services.fullControl.normal.feature2'),
                    t('services.fullControl.normal.feature3'),
                    t('services.fullControl.normal.feature4'),
                    t('services.fullControl.normal.feature5'),
                    t('services.fullControl.normal.feature6'),
                    t('services.fullControl.normal.feature7'),
                    t('services.fullControl.normal.feature8'),
                  ]}
                  cta={t('services.requestQuote')}
                  onClick={() => handlePlanClick('full-normal')}
                />
              </div>
            </div>
          </div>

          {/* Comparison button and table */}
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={toggleFullControlComparison}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-primary-500 dark:border-primary-400 bg-primary-50 dark:bg-primary-900/30 px-5 sm:px-6 py-3 text-sm font-semibold text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <span>
                {showFullControlComparison
                  ? t('services.fullControlComparison.hide')
                  : t('services.fullControlComparison.show')}
              </span>
              <motion.span
                animate={{ rotate: showFullControlComparison ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-primary-600 dark:text-primary-400"
              >
                ↓
              </motion.span>
            </button>
          </div>
          <Suspense fallback={
            <div className="mt-8 text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 dark:border-primary-400"></div>
            </div>
          }>
            <FullControlComparisonTable open={showFullControlComparison} />
          </Suspense>
        </motion.div>
      </div>

      <Suspense fallback={null}>
        <ServiceDetailsDialog
          open={selectedPlan !== null}
          planId={selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      </Suspense>
    </section>
  )
}

export default ServicesPackages
