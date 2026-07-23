import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLocale } from '../hooks/useLocale'

function NotFound() {
  const { t } = useTranslation()
  const { lp } = useLocale()
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold">{t('notFound.title')}</h1>
      <p className="text-secondary-700 dark:text-secondary-300">404</p>
      <NavLink to={lp('/')} className="btn-primary inline-block">{t('notFound.back')}</NavLink>
    </div>
  )
}

export default NotFound
