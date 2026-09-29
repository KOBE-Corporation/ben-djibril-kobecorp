import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { EnvelopeIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG, isEmailJSConfigured } from '../../config/emailjs'

function FooterNewsletter() {
  const { t, i18n } = useTranslation()
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isSubmitting) return

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setErrorMessage(t('footer.newsletterInvalidEmail'))
      setTimeout(() => {
        setStatus('idle')
        setErrorMessage('')
      }, 3000)
      return
    }

    setIsSubmitting(true)
    setStatus('idle')
    setErrorMessage('')

    try {
      if (isEmailJSConfigured()) {
        const locale = i18n.language?.startsWith('fr') ? 'fr-FR' : 'en-US'
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.NEWSLETTER_TEMPLATE_ID,
          {
            email: email,
            date: new Date().toLocaleDateString(locale),
            time: new Date().toLocaleTimeString(locale),
          },
          EMAILJS_CONFIG.PUBLIC_KEY
        )
        setStatus('success')
        setEmail('')
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        console.warn('EmailJS non configuré. Mode simulation activé.')
        await new Promise(resolve => setTimeout(resolve, 1000))
        setStatus('success')
        setEmail('')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Erreur lors de l\'abonnement à la newsletter:', error)
      setStatus('error')
      setErrorMessage(t('footer.newsletterError'))
      setTimeout(() => {
        setStatus('idle')
        setErrorMessage('')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-semibold text-lg mb-4 text-secondary-900 dark:text-secondary-100"
      >
        {t('footer.newsletterTitle')}
      </motion.h4>
      <p className="text-secondary-600 dark:text-secondary-300 text-sm mb-4 leading-relaxed">
        {t('footer.newsletterDesc')}
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status === 'error') {
                setStatus('idle')
                setErrorMessage('')
              }
            }}
            placeholder={t('footer.newsletterPlaceholder')}
            required
            disabled={isSubmitting}
            className={`w-full border rounded-lg pl-10 pr-4 py-2.5 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 text-sm focus:outline-none focus:ring-2 transition-all ${
              status === 'error'
                ? 'border-red-500 focus:ring-red-500'
                : status === 'success'
                ? 'border-success-500 focus:ring-success-500'
                : 'border-secondary-300 dark:border-secondary-600 focus:ring-primary-500 dark:focus:ring-primary-400'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          />
        </div>

        {status === 'error' && errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400"
          >
            <ExclamationCircleIcon className="w-4 h-4" />
            <span>{errorMessage}</span>
          </motion.div>
        )}

        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-success-600 dark:text-success-400"
          >
            <CheckCircleIcon className="w-4 h-4" />
            <span>{t('footer.newsletterThanks')}</span>
          </motion.div>
        )}

        <motion.button
          type="submit"
          disabled={isSubmitting || status === 'success'}
          whileHover={{ scale: status === 'success' ? 1 : 1.02 }}
          whileTap={{ scale: status === 'success' ? 1 : 0.98 }}
          className={`w-full text-sm font-medium py-2.5 rounded-lg transition-all ${
            status === 'success'
              ? 'bg-success-500 text-white cursor-default'
              : 'btn-primary'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              />
              {t('footer.newsletterSending')}
            </span>
          ) : status === 'success' ? (
            <span className="flex items-center justify-center gap-2">
              <CheckCircleIcon className="w-4 h-4" />
              {t('footer.newsletterSuccess')}
            </span>
          ) : (
            t('footer.newsletterSubscribe')
          )}
        </motion.button>
      </form>

      <div className="mt-6 pt-6 border-t border-secondary-200 dark:border-secondary-700">
        <ul className="space-y-2 text-sm">
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Link
              to="/legal"
              className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors inline-flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-60" />
              {t('footer.legal')}
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Link
              to="/privacy"
              className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors inline-flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-60" />
              {t('footer.privacy')}
            </Link>
          </motion.li>
        </ul>
      </div>
    </motion.div>
  )
}

export default FooterNewsletter
