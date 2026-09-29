import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Privacy() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-4 py-16 md:py-20 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-3">
          {t('footer.privacyPage.title')}
        </h1>
        <p className="text-sm text-secondary-500 dark:text-secondary-400 mb-8">
          {t('footer.privacyPage.updated')}
        </p>
        <div className="space-y-5 text-secondary-700 dark:text-secondary-300 leading-relaxed">
          <p>{t('footer.privacyPage.intro')}</p>
          <p>{t('footer.privacyPage.usage')}</p>
          <p>{t('footer.privacyPage.retention')}</p>
          <p>{t('footer.privacyPage.rights')}</p>
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

export default Privacy
