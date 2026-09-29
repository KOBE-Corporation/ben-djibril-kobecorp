import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { companies } from '../../data/companies'
import profileImage from '../../assets/ben-djibirl/ben-djibril-official-no-glass-nbg.png'

function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative pt-4 sm:pt-6 md:pt-8 pb-10 md:pb-14 overflow-visible">
      <div className="relative container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero: texte à gauche, photo à droite */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start"
            >
              {/* Rôle */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="inline-flex items-center gap-2 mb-4 sm:mb-5 text-xs sm:text-sm font-medium tracking-wide text-primary-700 dark:text-primary-300"
              >
                <span className="h-px w-6 sm:w-8 bg-primary-400 dark:bg-primary-500" />
                <span>{t('home.title')}</span>
                <span className="text-secondary-300 dark:text-secondary-600">/</span>
                <span className="text-accent-600 dark:text-accent-400">{t('home.roleTag')}</span>
              </motion.div>

              {/* Marque */}
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-secondary-900 dark:text-white leading-[1.05] mb-4 sm:mb-5"
              >
                <span className="gradient-text">{t('home.brand')}</span>
              </motion.h1>

              {/* Accroche */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="text-base sm:text-lg md:text-xl text-secondary-600 dark:text-secondary-300 max-w-md mx-auto lg:mx-0 leading-relaxed mb-7 sm:mb-8"
              >
                {t('home.subtitle')}
              </motion.p>

              {/* Signaux de confiance */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.38 }}
                className="w-full max-w-md mx-auto lg:mx-0 grid grid-cols-3 gap-0 border-t border-secondary-200/80 dark:border-secondary-700/80 pt-5 sm:pt-6"
              >
                {[
                  {
                    value: t('home.trustBar.experience'),
                    label: t('home.trustBar.experienceLabel'),
                  },
                  {
                    value: t('home.trustBar.satisfaction'),
                    label: t('home.trustBar.satisfactionLabel'),
                  },
                  {
                    value: t('home.trustBar.responseTime'),
                    label: t('home.trustBar.responseTimeLabel'),
                  },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className={`px-2 sm:px-3 text-center lg:text-left ${
                      i > 0
                        ? 'border-l border-secondary-200/80 dark:border-secondary-700/80'
                        : ''
                    }`}
                  >
                    <div className="text-lg sm:text-xl font-bold text-secondary-900 dark:text-white tabular-nums">
                      {item.value}
                    </div>
                    <div className="mt-0.5 text-[10px] sm:text-xs uppercase tracking-wider text-secondary-500 dark:text-secondary-400">
                      {item.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative order-1 lg:order-2"
            >
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-4 bg-gradient-to-br from-primary-400/20 via-primary-500/20 to-accent-500/20 rounded-3xl blur-2xl"
              />
              <div className="relative w-full aspect-square max-w-sm sm:max-w-md mx-auto">
                <motion.img
                  src={profileImage}
                  alt="Ben Djibril"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-contain"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </motion.div>
          </div>

          {/* Clients logos banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-xs sm:text-sm text-secondary-500 dark:text-secondary-400 mb-6 sm:mb-8 text-center font-medium">
              {t('home.clients.title') || 'Trusted by companies worldwide'}
            </p>
            <div className="flex items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 flex-wrap">
              {companies.map((company, i) => (
                <motion.a
                  key={i}
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="group relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden transition-all duration-300"
                  title={company.name}
                >
                  {company.logo ? (
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                      loading="eager"
                      fetchPriority="high"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                      <span className="text-sm sm:text-base md:text-lg text-white font-bold">
                        {company.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
