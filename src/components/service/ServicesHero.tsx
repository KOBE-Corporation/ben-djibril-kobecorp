import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  ArrowDownIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ServerIcon,
} from '@heroicons/react/24/solid'

function ServicesHero() {
  const { t } = useTranslation()

  const scrollToServices = () => {
    const section = document.querySelector('[data-section="services"]')
    if (!section) return
    const offset = 80
    const elementPosition = section.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }

  const easeInOut = [0.4, 0, 0.2, 1] as const

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeInOut,
      },
    },
  }

  const highlights = [
    {
      icon: GlobeAltIcon,
      title: t('services.serviceWebDev.title'),
      desc: t('services.serviceWebDev.desc'),
      tone: 'primary' as const,
    },
    {
      icon: DevicePhoneMobileIcon,
      title: t('services.serviceMobile.title'),
      desc: t('services.serviceMobile.desc'),
      tone: 'accent' as const,
    },
    {
      icon: ServerIcon,
      title: t('services.serviceDevOps.title'),
      desc: t('services.serviceDevOps.desc'),
      tone: 'success' as const,
    },
  ]

  const toneClasses = {
    primary: {
      border: 'border-primary-100 dark:border-primary-700',
      bg: 'bg-primary-50/70 dark:bg-primary-900/40',
      icon: 'text-primary-600 dark:text-primary-300',
      label: 'text-primary-600 dark:text-primary-300',
    },
    accent: {
      border: 'border-accent-100 dark:border-accent-700',
      bg: 'bg-accent-50/70 dark:bg-accent-900/40',
      icon: 'text-accent-600 dark:text-accent-300',
      label: 'text-accent-600 dark:text-accent-300',
    },
    success: {
      border: 'border-emerald-100 dark:border-emerald-700',
      bg: 'bg-emerald-50/70 dark:bg-emerald-900/40',
      icon: 'text-emerald-600 dark:text-emerald-300',
      label: 'text-emerald-600 dark:text-emerald-300',
    },
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute -top-12 sm:-top-16 -right-8 sm:-right-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-primary-200 dark:bg-primary-600 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
          className="absolute -bottom-12 sm:-bottom-16 -left-8 sm:-left-10 w-56 sm:w-72 md:w-[26rem] h-56 sm:h-72 md:h-[26rem] bg-accent-200 dark:bg-accent-600 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center"
        >
          <motion.div
            variants={itemVariants}
            className="text-center lg:text-left max-w-xl mx-auto lg:mx-0 order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/40 border border-primary-200 dark:border-primary-700 mb-4 sm:mb-5 md:mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-primary-700 dark:text-primary-300 whitespace-nowrap">
                {t('services.title')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-secondary-900 dark:text-white leading-[1.1] sm:leading-tight"
            >
              {t('services.title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-secondary-600 dark:text-secondary-300 leading-relaxed mb-3 sm:mb-4 md:mb-6"
            >
              {t('services.subtitle')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-secondary-700 dark:text-secondary-200 leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {t('services.heroDescription')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6"
            >
              <button
                type="button"
                onClick={scrollToServices}
                className="w-full sm:w-auto btn-primary inline-flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base"
              >
                {t('services.heroCtaServices')}
                <ArrowDownIcon className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-[10px] xs:text-xs sm:text-sm text-secondary-600 dark:text-secondary-300"
            >
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                <span className="font-medium">{t('contact.hero.responseTime')}</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary-500 dark:bg-primary-400" />
                <span className="font-medium">{t('contact.hero.freeQuote')}</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent-500 dark:bg-accent-400" />
                <span className="font-medium">{t('contact.hero.available')}</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative max-w-md mx-auto lg:mx-0 order-1 lg:order-2"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-16 sm:w-20 h-16 sm:h-20 rounded-3xl bg-primary-500/10 dark:bg-primary-400/10 blur-2xl"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, -3, 3, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 sm:-bottom-8 -right-3 sm:-right-4 w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-accent-500/10 dark:bg-accent-400/10 blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative bg-white/80 dark:bg-secondary-900/80 backdrop-blur-sm rounded-3xl border border-secondary-100 dark:border-secondary-700 shadow-xl p-4 sm:p-5 md:p-6 lg:p-8"
            >
              <div className="flex items-center gap-2 mb-4 sm:mb-5">
                <CodeBracketIcon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <p className="text-xs sm:text-sm font-semibold text-secondary-700 dark:text-secondary-200">
                  {t('services.heroHighlightsTitle')}
                </p>
              </div>

              <div className="grid gap-3 sm:gap-4">
                {highlights.map((item, index) => {
                  const Icon = item.icon
                  const tones = toneClasses[item.tone]
                  return (
                    <motion.button
                      key={item.title}
                      type="button"
                      onClick={scrollToServices}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.35 + index * 0.08 }}
                      whileHover={{ y: -2 }}
                      className={`w-full rounded-2xl border ${tones.border} ${tones.bg} p-3 sm:p-4 text-left transition-shadow hover:shadow-md`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-white/80 dark:bg-secondary-800/80 flex items-center justify-center flex-shrink-0">
                          <Icon className={`w-5 h-5 ${tones.icon}`} />
                        </div>
                        <div className="min-w-0">
                          <p className={`text-[10px] xs:text-xs font-semibold uppercase tracking-wide ${tones.label} mb-0.5`}>
                            {item.title}
                          </p>
                          <p className="text-[11px] sm:text-sm text-secondary-700 dark:text-secondary-200 line-clamp-2">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesHero
