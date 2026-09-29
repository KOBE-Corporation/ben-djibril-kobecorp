import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const pagePaths = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'projects', path: '/projects' },
  { key: 'services', path: '/services' },
  { key: 'contact', path: '/contact' },
] as const

function FooterPages() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()
    navigate(path)
    window.scrollTo(0, 0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-semibold text-lg mb-4 text-secondary-900 dark:text-secondary-100"
      >
        {t('footer.pagesTitle')}
      </motion.h4>
      <ul className="space-y-2.5">
        {pagePaths.map((page, index) => (
          <motion.li
            key={page.path}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Link
              to={page.path}
              onClick={(e) => handleLinkClick(e, page.path)}
              className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors inline-flex items-center gap-2 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              {t(`nav.${page.key}`)}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default FooterPages
