import { NavLink } from 'react-router-dom'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { useLocale } from '../../hooks/useLocale'

type MobileMenuProps = {
  onNavigate?: () => void
}

function MobileMenu({ onNavigate }: MobileMenuProps) {
  const { t } = useTranslation()
  const { lp } = useLocale()
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

  const linkBase = 'px-3 py-2.5 rounded-lg font-medium transition-colors'
  const linkClass = (isActive: boolean) =>
    `${linkBase} ${isActive ? 'bg-primary-600 text-white' : 'text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-700'}`

  const handleNavLinkClick = () => {
    setIsSubMenuOpen(false)
    onNavigate?.()
  }

  const serviceLinks = [
    {
      to: lp('/services#packages'),
      label: t('nav.servicesOffers'),
    },
    {
      to: lp('/services#services'),
      label: t('nav.servicesCatalog'),
    },
  ]

  return (
    <nav className="grid gap-2 text-sm">
      <NavLink
        to={lp('/')}
        end
        className={({ isActive }) => linkClass(isActive)}
        onClick={handleNavLinkClick}
      >
        {t('nav.home')}
      </NavLink>

      <div>
        <button
          type="button"
          onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
          className={`${linkBase} flex items-center justify-between text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-700 font-medium w-full`}
        >
          <span>{t('nav.services')}</span>
          <ChevronDownIcon
            className={`w-4 h-4 transition-transform duration-300 ease-in-out ${isSubMenuOpen ? 'rotate-180' : ''} text-secondary-600 dark:text-secondary-400`}
          />
        </button>
        <AnimatePresence>
          {isSubMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] as const }}
              className="overflow-hidden"
            >
              <div className="pl-4 space-y-1.5 mt-2 border-l-2 border-secondary-200 dark:border-secondary-700">
                {serviceLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={`${linkBase} text-sm w-full text-left bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-secondary-50 dark:hover:bg-secondary-700 hover:text-primary-600 dark:hover:text-primary-400 block`}
                    onClick={handleNavLinkClick}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <NavLink
        to={lp('/projects')}
        className={({ isActive }) => linkClass(isActive)}
        onClick={handleNavLinkClick}
      >
        {t('nav.projects')}
      </NavLink>
      <NavLink
        to={lp('/about')}
        className={({ isActive }) => linkClass(isActive)}
        onClick={handleNavLinkClick}
      >
        {t('nav.about')}
      </NavLink>
      <NavLink
        to={lp('/contact')}
        className={({ isActive }) => linkClass(isActive)}
        onClick={handleNavLinkClick}
      >
        {t('nav.contact')}
      </NavLink>
      <NavLink
        to={lp('/contact')}
        className="btn-primary w-full text-center mt-3 py-2.5"
        onClick={handleNavLinkClick}
      >
        {t('nav.requestQuote')}
      </NavLink>
    </nav>
  )
}

export default MobileMenu
