import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Loading from './components/ui/Loading'
import LegacyRedirect from './components/routing/LegacyRedirect'
import { DEFAULT_LOCALE, normalizeLocale } from './i18n/routing'

const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const Projects = lazy(() => import('./pages/Projects'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function RootRedirect() {
  const saved = typeof window !== 'undefined' ? localStorage.getItem('lang') : null
  const locale = normalizeLocale(saved) || DEFAULT_LOCALE
  return <Navigate to={`/${locale}`} replace />
}

function App() {
  return (
    <Suspense fallback={<Loading isLoading={true} />}>
      <Routes>
        <Route path="/" element={<RootRedirect />} />

        <Route path="/:lang" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Anciennes URLs sans préfixe langue */}
        <Route path="/services/*" element={<LegacyRedirect />} />
        <Route path="/projects/*" element={<LegacyRedirect />} />
        <Route path="/about/*" element={<LegacyRedirect />} />
        <Route path="/contact/*" element={<LegacyRedirect />} />
      </Routes>
    </Suspense>
  )
}

export default App
