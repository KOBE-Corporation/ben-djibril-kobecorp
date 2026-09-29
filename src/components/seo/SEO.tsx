import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

type SEOProps = {
  title?: string
  description?: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  twitterCard?: 'summary' | 'summary_large_image'
  noIndex?: boolean
}

const KNOWN_ROUTES = new Set(['/', '/services', '/projects', '/about', '/contact'])
const SITE_NAME = 'Ben Djibril | Kobe Corporation'
const DEFAULT_OG_IMAGE = '/og-image.jpg'
const CONTACT_EMAIL = 'kone.djibril@kobecorporation.com'
const CONTACT_PHONE = '+237-655-938-501'

function clampDescription(text: string, max = 160) {
  const cleaned = text.replace(/\s+/g, ' ').trim()
  if (cleaned.length <= max) return cleaned
  return `${cleaned.slice(0, max - 1).trimEnd()}…`
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let script = document.getElementById(id) as HTMLScriptElement | null
  if (!script) {
    script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(data)
}

function SEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  ogUrl,
  twitterCard = 'summary_large_image',
  noIndex,
}: SEOProps) {
  const { t, i18n } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    const lang = i18n.language?.startsWith('fr') ? 'fr' : 'en'
    const baseUrl = window.location.origin
    const canonicalUrl = `${baseUrl}${location.pathname === '/' ? '/' : location.pathname}`
    const isKnownRoute = KNOWN_ROUTES.has(location.pathname)
    const shouldNoIndex = noIndex ?? !isKnownRoute

    const routeTitles: Record<string, string> = {
      '/': t('seo.home.title'),
      '/services': t('seo.services.title'),
      '/projects': t('seo.projects.title'),
      '/about': t('seo.about.title'),
      '/contact': t('seo.contact.title'),
    }
    const routeDescriptions: Record<string, string> = {
      '/': t('seo.home.description'),
      '/services': t('seo.services.description'),
      '/projects': t('seo.projects.description'),
      '/about': t('seo.about.description'),
      '/contact': t('seo.contact.description'),
    }
    const routeKeywords: Record<string, string> = {
      '/': t('seo.home.keywords'),
      '/services': t('seo.services.keywords'),
      '/projects': t('seo.projects.keywords'),
      '/about': t('seo.about.keywords'),
      '/contact': t('seo.contact.keywords'),
    }

    const pageTitle = title || routeTitles[location.pathname] || t('seo.default.title')
    document.title = pageTitle

    const metaDescription = clampDescription(
      description || routeDescriptions[location.pathname] || t('seo.default.description')
    )
    const metaKeywords =
      keywords || routeKeywords[location.pathname] || t('seo.default.keywords')

    const updateMetaTag = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attribute, name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    const updateLinkTag = (rel: string, href: string, extra: Record<string, string> = {}) => {
      const selector = Object.entries(extra).reduce(
        (acc, [key, value]) => `${acc}[${key}="${value}"]`,
        `link[rel="${rel}"]`
      )
      let link = document.querySelector(selector) as HTMLLinkElement | null
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', rel)
        Object.entries(extra).forEach(([key, value]) => link!.setAttribute(key, value))
        document.head.appendChild(link)
      }
      link.setAttribute('href', href)
    }

    updateMetaTag('description', metaDescription)
    updateMetaTag('keywords', metaKeywords)
    updateMetaTag('author', 'Kone Djibril Benjamin (Ben Djibril)')
    updateMetaTag('application-name', SITE_NAME)
    updateMetaTag('publisher', 'Kobe Corporation')
    updateMetaTag('creator', 'Kone Djibril Benjamin (Ben Djibril)')
    updateMetaTag('contact', CONTACT_EMAIL)
    updateMetaTag('reply-to', CONTACT_EMAIL)

    const robotsContent = shouldNoIndex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    updateMetaTag('robots', robotsContent)
    updateMetaTag('googlebot', robotsContent)

    const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`
    const shareTitle = ogTitle || pageTitle
    const shareDescription = clampDescription(ogDescription || metaDescription)
    const shareUrl = ogUrl || canonicalUrl

    updateMetaTag('og:title', shareTitle, 'property')
    updateMetaTag('og:description', shareDescription, 'property')
    updateMetaTag('og:image', absoluteOgImage, 'property')
    updateMetaTag('og:image:width', '1200', 'property')
    updateMetaTag('og:image:height', '630', 'property')
    updateMetaTag(
      'og:image:alt',
      t('seo.ogImageAlt'),
      'property'
    )
    updateMetaTag('og:url', shareUrl, 'property')
    updateMetaTag('og:type', location.pathname === '/about' ? 'profile' : 'website', 'property')
    updateMetaTag('og:locale', lang === 'fr' ? 'fr_FR' : 'en_US', 'property')
    updateMetaTag('og:locale:alternate', lang === 'fr' ? 'en_US' : 'fr_FR', 'property')
    updateMetaTag('og:site_name', SITE_NAME, 'property')

    updateMetaTag('twitter:card', twitterCard)
    updateMetaTag('twitter:site', '@le_bendji')
    updateMetaTag('twitter:creator', '@le_bendji')
    updateMetaTag('twitter:title', shareTitle)
    updateMetaTag('twitter:description', shareDescription)
    updateMetaTag('twitter:image', absoluteOgImage)
    updateMetaTag('twitter:image:alt', t('seo.ogImageAlt'))

    document.documentElement.setAttribute('lang', lang)
    updateLinkTag('canonical', canonicalUrl)

    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((link) => link.remove())
    const hreflangEntries =
      location.pathname === '/'
        ? [
            { code: 'x-default', href: `${baseUrl}/` },
            { code: 'fr', href: `${baseUrl}/?lang=fr` },
            { code: 'en', href: `${baseUrl}/?lang=en` },
          ]
        : [
            { code: 'x-default', href: canonicalUrl },
            { code: 'fr', href: `${canonicalUrl}?lang=fr` },
            { code: 'en', href: `${canonicalUrl}?lang=en` },
          ]
    hreflangEntries.forEach(({ code, href }) => {
      const link = document.createElement('link')
      link.setAttribute('rel', 'alternate')
      link.setAttribute('hreflang', code)
      link.setAttribute('href', href)
      document.head.appendChild(link)
    })

    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: 'Kone Djibril Benjamin',
      alternateName: ['Ben Djibril', 'Benjamin Kone Djibril', 'Djibril Benjamin', 'Kone Djibril'],
      jobTitle: 'Founder & CEO',
      description: metaDescription,
      url: `${baseUrl}/`,
      image: absoluteOgImage,
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Yaoundé',
        addressCountry: 'CM',
      },
      sameAs: [
        'https://www.facebook.com/share/1apyznqNgf/',
        'https://www.instagram.com/le_bendji',
        'https://x.com/le_bendji',
        'https://www.linkedin.com/in/Ben-Djibril',
        'https://github.com/azerty-78',
        'https://www.kobecorporation.com',
      ],
      knowsAbout: [
        'Entrepreneurship',
        'Digital Products',
        'Web Development',
        'Mobile Development',
        'E-commerce',
        'Backend Development',
        'DevOps',
        'Spring Boot',
        'Kotlin',
        'React',
      ],
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'ENS Yaoundé' },
        { '@type': 'CollegeOrUniversity', name: 'Université de Yaoundé II — SOA' },
      ],
      worksFor: { '@id': `${baseUrl}/#organization` },
    }

    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'Kobe Corporation',
      url: 'https://www.kobecorporation.com',
      logo: `${baseUrl}/favicon.png`,
      founder: { '@id': `${baseUrl}/#person` },
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      sameAs: [
        'https://www.facebook.com/share/1apyznqNgf/',
        'https://www.instagram.com/le_bendji',
        'https://x.com/le_bendji',
        'https://www.linkedin.com/in/Ben-Djibril',
        'https://github.com/azerty-78',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: CONTACT_PHONE,
        email: CONTACT_EMAIL,
        contactType: 'customer service',
        areaServed: 'Worldwide',
        availableLanguage: ['fr', 'en'],
      },
    }

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      name: SITE_NAME,
      alternateName: ['Ben Djibril Portfolio', 'Kone Djibril Benjamin Portfolio'],
      url: `${baseUrl}/`,
      description: metaDescription,
      inLanguage: ['fr', 'en'],
      publisher: { '@id': `${baseUrl}/#organization` },
      author: { '@id': `${baseUrl}/#person` },
    }

    const breadcrumbItems: Array<{
      '@type': 'ListItem'
      position: number
      name: string
      item: string
    }> = [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('nav.home'),
        item: `${baseUrl}/`,
      },
    ]
    if (location.pathname !== '/' && isKnownRoute) {
      const routeKey = location.pathname.slice(1)
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: t(`nav.${routeKey}`),
        item: canonicalUrl,
      })
    }

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems,
    }

    upsertJsonLd('ld-person', personSchema)
    upsertJsonLd('ld-organization', organizationSchema)
    upsertJsonLd('ld-website', websiteSchema)
    upsertJsonLd('ld-breadcrumb', breadcrumbSchema)

    const pageSpecific = document.getElementById('ld-page')
    if (pageSpecific) pageSpecific.remove()

    if (location.pathname === '/services') {
      upsertJsonLd('ld-page', {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: t('seo.services.schemaName'),
        description: metaDescription,
        url: canonicalUrl,
        image: absoluteOgImage,
        provider: { '@id': `${baseUrl}/#person` },
        areaServed: 'Worldwide',
        serviceType: [
          'Web Development',
          'Mobile Development',
          'E-commerce',
          'Business Software',
          'Backend Development',
          'DevOps',
        ],
      })
    } else if (location.pathname === '/contact') {
      upsertJsonLd('ld-page', {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: pageTitle,
        description: metaDescription,
        url: canonicalUrl,
        mainEntity: { '@id': `${baseUrl}/#person` },
      })
    } else if (location.pathname === '/about') {
      upsertJsonLd('ld-page', {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        name: pageTitle,
        description: metaDescription,
        url: canonicalUrl,
        mainEntity: { '@id': `${baseUrl}/#person` },
      })
    } else if (location.pathname === '/projects') {
      upsertJsonLd('ld-page', {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: pageTitle,
        description: metaDescription,
        url: canonicalUrl,
        about: { '@id': `${baseUrl}/#person` },
      })
    }
  }, [
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    twitterCard,
    noIndex,
    location.pathname,
    t,
    i18n.language,
  ])

  return null
}

export default SEO
