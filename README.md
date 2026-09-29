# Ben Djibril - Portfolio Professionnel

Portfolio professionnel moderne d'un Ingénieur DevOps spécialisé en développement backend, mobile et DevOps. Site web avec support multilingue (FR/EN), thème clair/sombre, et design responsive optimisé pour la vente de services internationaux.

## ðŸ‘¨â€ðŸ’» À propos

**Ben Djibril** (Kone Djibril Benjamin) est un développeur médior avec 5 ans d'expérience en développement backend et mobile. Spécialisé en DevOps, backend (Spring Boot) et mobile (Kotlin), il offre des services de développement web, applications mobiles, APIs et DevOps Ã  l'international.

### Spécialités
- **Backend** : Spring Boot (Java/Kotlin)
- **Mobile** : Kotlin Multiplatform
- **DevOps** : Docker, Kubernetes, Ansible
- **Frontend** : React, TypeScript
- **Cloud** : AWS, Hostinger, Vercel

### Certifications
- âœ… Docker Certified Associate (DCA)
- âœ… AWS Certified Cloud Practitioner

## ðŸš€ Technologies

### Stack Principal
- **React 19** + **TypeScript** - Framework frontend
- **Vite 7** - Build tool et bundler
- **Tailwind CSS 3** - Framework CSS utility-first
- **React Router DOM 7** - Routing multi-pages
- **i18next** + **react-i18next** - Internationalisation (FR/EN)
- **Headless UI** - Composants accessibles
- **Heroicons** + **React Icons** - Bibliothèque d'icônes
- **Framer Motion** - Animations fluides
- **EmailJS** - Service de formulaire de contact

### Technologies Maîtrisées

#### Langages de Programmation
1. Kotlin
2. Java
3. HTML/CSS
4. JavaScript
5. C/C++
6. TypeScript
7. Python

#### Frameworks
- **Backend** : Spring Boot (Java/Kotlin)
- **Frontend** : React
- **Mobile** : Kotlin Multiplatform

#### Bases de Données
- **SQL** : MySQL, PostgreSQL
- **NoSQL** : MongoDB

#### Technologies DevOps
- Docker
- Kubernetes
- Ansible

#### Hébergement
- AWS
- Hostinger
- Ngrok
- NS
- Vercel

#### Design
- Figma
- Canva

#### Versioning
- Git & GitHub

## ðŸ“‹ Pages Disponibles

- **Home** (`/`) - Page d'accueil avec Hero, À propos, Services, Certifications, Témoignages
- **Services** (`/services`) - Liste détaillée des services avec packages et pricing
- **Projects** (`/projects`) - Portfolio de projets réalisés
- **About** (`/about`) - Page détaillée Ã  propos avec stack technique complète
- **Contact** (`/contact`) - Formulaire de contact avec EmailJS

## ðŸŽ¨ Palette de Couleurs

### Mode Clair
- **Primary** : Indigo (#6366f1) - Couleur principale
- **Secondary** : Slate (gris neutre) - Texte et arrière-plans
- **Accent** : Rose (#f43f5e) - Accents et highlights
- **Success** : Vert émeraude - Messages de succès
- **Warning** : Jaune ambre - Avertissements
- **Danger** : Rouge - Erreurs

### Mode Sombre
Même palette avec ajustements automatiques pour contraste optimal et lisibilité.

## ðŸ“± Responsivité

Le site est entièrement responsive et optimisé pour :
- **Mobile** (< 640px) - Smartphones
- **Tablette** (640px - 1024px) - Tablettes
- **Desktop** (> 1024px) - Ordinateurs
- **Large Desktop** (> 1280px) - Grands écrans

Breakpoints Tailwind utilisés : `sm:`, `md:`, `lg:`, `xl:`

## ðŸ› ï¸ Développement

### Prérequis
- Node.js 18+ et npm

### Installation
```bash
npm install
```

### Développement local
```bash
npm run dev
```
Le site sera accessible sur `http://localhost:5180`

### Partage avec ngrok
Pour partager votre application en développement via ngrok :
```bash
npm run ngrok
```
Voir [docs/NGROK_SETUP.md](docs/NGROK_SETUP.md) pour plus de détails.

### Build de production
```bash
npm run build
```
Les fichiers optimisés seront générés dans le dossier `dist/`

### Prévisualisation du build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## ðŸ“ Structure du Projet

```
ben-djibril/
â”œâ”€â”€ public/                 # Fichiers statiques et SEO
â”‚   â”œâ”€â”€ favicon.png        # Favicon du site
â”‚   â”œâ”€â”€ sitemap.xml        # Plan du site XML pour le référencement
â”‚   â”œâ”€â”€ robots.txt         # Instructions pour les robots d'indexation
â”‚   â”œâ”€â”€ manifest.json      # Web App Manifest (PWA)
â”‚   â”œâ”€â”€ google-site-verification.html  # Vérification Google Search Console
â”‚   â”œâ”€â”€ humans.txt         # Informations sur le site et l'équipe
â”‚   â””â”€â”€ .well-known/       # Fichiers de sécurité
â”‚       â””â”€â”€ security.txt   # Politique de sécurité
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ assets/            # Assets (images, etc.)
â”‚   â”‚   â”œâ”€â”€ ben-djibirl/   # Images de profil et portfolio
â”‚   â”‚   â””â”€â”€ trust-company/ # Logos des entreprises de confiance
â”‚   â”œâ”€â”€ components/        # Composants réutilisables
â”‚   â”‚   â”œâ”€â”€ ui/            # Composants UI de base
â”‚   â”‚   â”‚   â”œâ”€â”€ TechStack.tsx
â”‚   â”‚   â”‚   â”œâ”€â”€ CountUp.tsx
â”‚   â”‚   â”‚   â”œâ”€â”€ LazyImage.tsx
â”‚   â”‚   â”‚   â”œâ”€â”€ PackageCard.tsx
â”‚   â”‚   â”‚   â”œâ”€â”€ ProjectCard.tsx
â”‚   â”‚   â”‚   â”œâ”€â”€ TestimonialCard.tsx
â”‚   â”‚   â”‚   â”œâ”€â”€ CertificationCard.tsx
â”‚   â”‚   â”‚   â””â”€â”€ MobileMenu.tsx
â”‚   â”‚   â”œâ”€â”€ seo/           # Composants SEO
â”‚   â”‚   â”‚   â””â”€â”€ SEO.tsx    # Composant SEO avec données structurées JSON-LD
â”‚   â”‚   â””â”€â”€ sections/     # Sections de pages
â”‚   â”‚       â”œâ”€â”€ HeroSection.tsx
â”‚   â”‚       â”œâ”€â”€ AboutSection.tsx
â”‚   â”‚       â”œâ”€â”€ CertificationsSection.tsx
â”‚   â”‚       â””â”€â”€ TestimonialsSection.tsx
â”‚   â”œâ”€â”€ pages/             # Pages de l'application
â”‚   â”‚   â”œâ”€â”€ Home.tsx
â”‚   â”‚   â”œâ”€â”€ Services.tsx
â”‚   â”‚   â”œâ”€â”€ Projects.tsx
â”‚   â”‚   â”œâ”€â”€ About.tsx
â”‚   â”‚   â”œâ”€â”€ Contact.tsx
â”‚   â”‚   â””â”€â”€ NotFound.tsx
â”‚   â”œâ”€â”€ layouts/           # Layouts partagés
â”‚   â”‚   â””â”€â”€ RootLayout.tsx
â”‚   â”œâ”€â”€ shared/            # Composants partagés
â”‚   â”‚   â”œâ”€â”€ Navbar.tsx
â”‚   â”‚   â”œâ”€â”€ Footer.tsx
â”‚   â”‚   â”œâ”€â”€ ThemeToggle.tsx
â”‚   â”‚   â”œâ”€â”€ LanguageSwitcher.tsx
â”‚   â”‚   â””â”€â”€ ErrorBoundary.tsx
â”‚   â”œâ”€â”€ theme/             # Gestion du thème
â”‚   â”‚   â””â”€â”€ ThemeProvider.tsx
â”‚   â”œâ”€â”€ i18n/              # Configuration i18n
â”‚   â”‚   â””â”€â”€ index.ts       # Traductions FR/EN
â”‚   â”œâ”€â”€ hooks/             # Hooks personnalisés
â”‚   â”‚   â””â”€â”€ usePrefetch.ts # Prefetch des routes
â”‚   â”œâ”€â”€ data/              # Données statiques
â”‚   â”‚   â”œâ”€â”€ techStack.ts
â”‚   â”‚   â”œâ”€â”€ companies.ts
â”‚   â”‚   â”œâ”€â”€ certifications.ts
â”‚   â”‚   â””â”€â”€ mockData.ts
â”‚   â”œâ”€â”€ App.tsx            # Composant racine avec routes
â”‚   â”œâ”€â”€ main.tsx           # Point d'entrée
â”‚   â””â”€â”€ index.css          # Styles globaux
â”œâ”€â”€ index.html             # Template HTML
â”œâ”€â”€ tailwind.config.js     # Configuration Tailwind
â”œâ”€â”€ vite.config.ts         # Configuration Vite
â”œâ”€â”€ tsconfig.json          # Configuration TypeScript
â””â”€â”€ package.json           # Dépendances
```

## ðŸŒ Internationalisation

Le site supporte **Français** (par défaut) et **Anglais**.

### Fonctionnalités
- Détection automatique de la langue du navigateur
- Persistance de la langue choisie dans `localStorage`
- Changement de langue facile via le sélecteur dans la navbar
- Interface complètement traduite (FR/EN)

Les traductions sont dans `src/i18n/index.ts`.

## ðŸŽ¯ Fonctionnalités Principales

- âœ… **Routing multi-pages** - Navigation fluide avec React Router
- âœ… **Thème clair/sombre** - Persistance avec `localStorage`
- âœ… **Multilingue (FR/EN)** - Détection navigateur automatique
- âœ… **Design responsive** - Optimisé pour tous les écrans
- âœ… **Animations fluides** - Framer Motion pour les interactions
- âœ… **Formulaire de contact** - Intégration EmailJS
- âœ… **SEO-friendly** - Meta tags optimisés, sitemap.xml, robots.txt, données structurées JSON-LD
- âœ… **Performance optimisée** - Lazy loading, prefetch, images optimisées
- âœ… **Accessibilité** - Composants Headless UI
- âœ… **Error Boundary** - Gestion d'erreurs globale
- âœ… **Tech Stack visuel** - Affichage des technologies avec logos officiels
- âœ… **Certifications** - Section dédiée aux certifications professionnelles
- âœ… **Témoignages** - Carrousel de témoignages clients
- âœ… **Métriques animées** - Compteurs animés pour les statistiques

## ðŸ“Š Services Disponibles

1. **Développement Web** - Sites web modernes et responsives
2. **Sites Vitrines** - Sites professionnels pour entreprises
3. **Portfolio** - Portfolios personnels ou professionnels
4. **E-commerce** - Boutiques en ligne complètes
5. **Applications Web** - Solutions web personnalisées
6. **Applications Mobile** - Apps cross-platform avec Kotlin Multiplatform
7. **Applications Desktop** - Applications desktop natives
8. **API Development** - RESTful et GraphQL APIs
9. **DevOps & Cloud** - Infrastructure et déploiement
10. **Consulting** - Conseil et audits techniques

## ðŸ“ž Contact

- **Email** : kone.djibril@kobecorporation.com
- **Téléphone** : +237 655 938 501
- **Localisation** : Yaoundé, Cameroun
- **WhatsApp** : [Contacter via WhatsApp](https://wa.me/237655938501)

### Réseaux Sociaux
- **X (Twitter)** : [@le_bendji](https://x.com/le_bendji)
- **LinkedIn** : [Ben-Djibril](https://www.linkedin.com/in/Ben-Djibril)
- **GitHub** : [azerty-78](https://github.com/azerty-78)

## ðŸ¢ Clients & Partenaires

- **UY2 SOA** - Université de Yaoundé 2
- **ENS Y** - École Normale Supérieure de Yaoundé
- **Kobe Corp** - Kobe Corporation

## ðŸ“ Configuration EmailJS

Pour activer le formulaire de contact, configurez vos clés EmailJS dans `src/pages/Contact.tsx` :

```typescript
const PUBLIC_KEY = 'votre-public-key'
const SERVICE_ID = 'votre-service-id'
const TEMPLATE_ID = 'votre-template-id'
```

## ðŸš€ Déploiement

### Production
Le site est déployé sur **ben-djibril.kobecorporation.com** avec :
- âœ… HTTPS/SSL (Let's Encrypt)
- âœ… Nginx reverse proxy
- âœ… Support des fichiers SEO (sitemap.xml, robots.txt, manifest.json)
- âœ… HSTS activé
- âœ… Cache des assets statiques

### Build et déploiement
```bash
npm run build
# Les fichiers optimisés seront dans dist/
```

### Vercel (Alternative)
```bash
npm install -g vercel
vercel
```

### Netlify (Alternative)
```bash
npm run build
# Déployer le dossier dist/ sur Netlify
```

### Autres plateformes
Le build génère un dossier `dist/` statique qui peut être déployé sur n'importe quel hébergeur statique.

## ðŸ” Référencement (SEO)

Le site est optimisé pour le référencement avec :

### Fichiers SEO
- âœ… **sitemap.xml** - Plan du site XML avec toutes les pages importantes
  - Format conforme sitemap.org 0.9
  - Support multilingue (hreflang FR/EN)
  - Dates `lastmod` Ã  jour
  - Priorités et fréquences définies
  - URL : `https://ben-djibril.kobecorporation.com/sitemap.xml`

- âœ… **robots.txt** - Instructions pour les robots d'indexation
  - Autorisation de tous les robots de recherche
  - Référence au sitemap
  - Support des robots d'IA modernes (GPTBot, ChatGPT-User, etc.)
  - URL : `https://ben-djibril.kobecorporation.com/robots.txt`

- âœ… **manifest.json** - Web App Manifest (PWA)
  - Métadonnées complètes pour PWA
  - Icônes configurées (192x192, 512x512)
  - URL : `https://ben-djibril.kobecorporation.com/manifest.json`

### Composant SEO React
Le composant `SEO.tsx` est utilisé sur toutes les pages et fournit :
- Meta tags dynamiques (title, description, keywords)
- Open Graph tags (og:title, og:description, og:image, etc.)
- Twitter Card tags
- Données structurées JSON-LD :
  - `Person` (Kone Djibril Benjamin)
  - `WebSite`
  - `BreadcrumbList`
  - `ProfessionalService` (page Services)
- Canonical URLs
- Balises `hreflang` pour le multilingue
- Meta robots optimisés

### Configuration Nginx
La configuration nginx proxy inclut :
- Content-Type corrects pour sitemap.xml, robots.txt, manifest.json
- Cache configuré pour les fichiers SEO
- Logs SEO séparés
- Support des fichiers de vérification Google Search Console

### Tests de référencement
```bash
# Vérifier le sitemap
curl -I https://ben-djibril.kobecorporation.com/sitemap.xml

# Vérifier robots.txt
curl -I https://ben-djibril.kobecorporation.com/robots.txt

# Valider les données structurées
# Utiliser Google Rich Results Test : https://search.google.com/test/rich-results
```

## ðŸ“„ Licence

Propriétaire - Tous droits réservés Â© 2024-2026 Ben Djibril (Kone Djibril Benjamin)

---

**Développé avec â¤ï¸ par Ben Djibril (Kone Djibril Benjamin)**

**Site web** : https://ben-djibril.kobecorporation.com
