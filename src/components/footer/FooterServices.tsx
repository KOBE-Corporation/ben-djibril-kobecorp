import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const popularServices = [
  { type: 'ecommerce', link: '/services?type=ecommerce' },
  { type: 'inventory', link: '/services?type=inventory' },
  { type: 'restaurant', link: '/services?type=restaurant' },
  { type: 'billing', link: '/services?type=billing' },
  { type: 'pos', link: '/services?type=pos' },
  { type: 'crm', link: '/services?type=crm' },
  { type: 'mobile', link: '/services?type=mobile' },
  { type: 'web-app', link: '/services?type=web-app' },
] as const

function FooterServices() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()
    navigate(path)
    window.scrollTo(0, 0)
  }

  const handleViewAllServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    navigate('/services')
    window.scrollTo(0, 0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-semibold text-lg mb-4 text-secondary-900 dark:text-secondary-100"
      >
        {t('footer.servicesTitle')}
      </motion.h4>
      <ul className="space-y-2.5">
        {popularServices.map((service, index) => (
          <motion.li
            key={service.type}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Link
              to={service.link}
              onClick={(e) => handleLinkClick(e, service.link)}
              className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors inline-flex items-center gap-2 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              {t(`projects.types.${service.type}`)}
            </Link>
          </motion.li>
        ))}
        <motion.li
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="pt-2"
        >
          <Link
            to="/services"
            onClick={handleViewAllServices}
            className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium inline-flex items-center gap-1 group"
          >
            {t('footer.viewAllServices')}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.li>
      </ul>
    </motion.div>
  )
}

export default FooterServices
