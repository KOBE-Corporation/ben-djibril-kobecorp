import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Legal() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-4 py-16 md:py-20 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-3">
          {t('footer.legalPage.title')}
        </h1>
        <p className="text-sm text-secondary-500 dark:text-secondary-400 mb-8">
          {t('footer.legalPage.updated')}
        </p>
        <div className="space-y-5 text-secondary-700 dark:text-secondary-300 leading-relaxed">
          <p>{t('footer.legalPage.publisher')}</p>
          <p>{t('footer.legalPage.contact')}</p>
          <p>{t('footer.legalPage.hosting')}</p>
          <p>{t('footer.legalPage.ip')}</p>
        </div>
        <Link
          to="/"
          className="inline-flex mt-10 text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
        >
          ← {t('nav.home')}
        </Link>
      </div>
    </div>
  )
}

export default Legal
