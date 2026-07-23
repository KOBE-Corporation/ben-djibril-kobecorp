export type ProjectType = 
  | 'web-dev'
  | 'showcase'
  | 'portfolio'
  | 'ecommerce'
  | 'web-app'
  | 'mobile'
  | 'desktop'
  | 'api'
  | 'devops'
  | 'consulting'
  | 'inventory'
  | 'restaurant'
  | 'billing'
  | 'orders'
  | 'pos'
  | 'crm'
  | 'delivery'
  | 'booking'
  | 'pharmacy'
  | 'gym'
  | 'salon'
  | 'transport'
  | 'rental'
  | 'accounting'
  | 'payroll'
  | 'mobile-money'
  | 'market'
  | 'parking'
  | 'school'
  | 'hospital'

export type ProjectVisibility = 'public' | 'private' | 'confidential'

export interface ProjectLinks {
  official?: string
  github?: string
  demo?: string
}

export interface ProjectClient {
  name: string
  type: 'company' | 'individual' | 'startup' | 'ngo' | 'government'
  translations: {
    en: {
      description: string
    }
    fr: {
      description: string
    }
  }
}

export interface Project {
  id: string
  type: ProjectType
  visibility: ProjectVisibility
  stack: string[]
  client: ProjectClient
  links: ProjectLinks
  images: string[] // Multiple images for the project
  translations: {
    en: {
      name: string
      description: string
      problem: string
      solution: string
      impact: string
    }
    fr: {
      name: string
      description: string
      problem: string
      solution: string
      impact: string
    }
  }
}

export const projects: Project[] = [
  {
    id: '3',
    type: 'web-dev',
    visibility: 'public',
    stack: ['Next.js 14', 'Strapi v4', 'PostgreSQL 15', 'Docker', 'Nginx', 'GitHub Actions'],
    client: {
      name: 'TRIDOM',
      type: 'ngo',
      translations: {
        en: {
          description: 'Multisite institutional portal bid response in progress (Mar - Aug 2026): bilingual FR/EN platform for multiple entities.'
        },
        fr: {
          description: 'Offre technique multisite en cours (Mars - Août 2026) : portail institutionnel bilingue FR/EN multi-entités.'
        }
      }
    },
    links: {
      official: 'https://tridom.org'
    },
    images: ['/projects/tridom-logo.jpeg'],
    translations: {
      en: {
        name: 'TRIDOM Multisite Portal (Technical Offer in Progress, Mar - Aug 2026)',
        description: 'Bid response for a bilingual FR/EN institutional multisite portal for multiple entities.',
        problem: 'The project requires a robust multisite architecture with strict quality constraints, including accessibility compliance and high performance standards across multiple environments and stakeholders.',
        solution: 'Designed a decoupled architecture using Strapi v4 as headless CMS, Next.js 14 frontend, and PostgreSQL 15. Planned multi-environment deployment workflows with Docker, Nginx, and GitHub Actions CI/CD.',
        impact: 'Provides a scalable and maintainable foundation aligned with WCAG 2.1 and Core Web Vitals requirements, reducing delivery risk for a complex institutional portal.'
      },
      fr: {
        name: 'Portail Multisite TRIDOM (Offre Technique en cours, Mars - Août 2026)',
        description: 'Réponse à appel d\'offres pour un portail institutionnel bilingue FR/EN multi-entités.',
        problem: 'Le projet nécessite une architecture multisite robuste avec des contraintes qualité élevées, notamment la conformité accessibilité et des exigences fortes de performance sur plusieurs environnements.',
        solution: 'Conception d\'une architecture découplée avec Strapi v4 (CMS headless), Next.js 14 et PostgreSQL 15. Préparation des déploiements multi-environnements avec Docker, Nginx et pipelines GitHub Actions.',
        impact: 'Mise en place d\'une base scalable et maintenable alignée avec WCAG 2.1 et Core Web Vitals, réduisant les risques de livraison pour un portail institutionnel complexe.'
      }
    }
  },
  {
    id: '5',
    type: 'web-app',
    visibility: 'public',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL 15', 'Docker', 'Nginx'],
    client: {
      name: 'Client privé',
      type: 'company',
      translations: {
        en: {
          description: 'Private client engagement delivered as a one-month rapid, production-ready offer for football player identification.'
        },
        fr: {
          description: 'Commande privée livrée en offre d\'un mois, rapide et fonctionnelle, pour l\'identification des joueurs en compétition.'
        }
      }
    },
    links: {
      official: 'https://id-foot.kobecorporation.com'
    },
    images: ['/projects/id-foot-logo.png'],
    translations: {
      en: {
        name: 'ID Foot (Jun 2026 - Jul 2027)',
        description: 'Web platform for digital player identification, licence cards and QR access control in football competitions.',
        problem: 'Football competitions needed a digital way to manage and identify players reliably before and during matches.',
        solution: 'Designed and built a web application to register clubs and players, generate licence cards with unique QR codes, and control pitch access by scanning.',
        impact: 'Centralizes competition administration, speeds up entry checks on the field, and provides traceable licences for clubs and organizers — already used for events such as the Inter-Village Mafa Championship in Douala.'
      },
      fr: {
        name: 'ID Foot (Juin 2026 - Juillet 2027)',
        description: 'Application web d\'identification des joueurs, de cartes licence et de contrôle d\'accès QR en compétition de football.',
        problem: 'Besoin d\'une gestion numérique et d\'une identification fiable des joueurs pour une compétition de football.',
        solution: 'Conception et réalisation d\'une application web de gestion de l\'identification des joueurs d\'une compétition de football.',
        impact: 'Centralise l\'administration des compétitions, accélère le contrôle à l\'entrée du terrain via QR code et fournit des licences traçables pour clubs et organisateurs — déjà utilisée pour des tournois comme le Championnat Inter Village Mafa à Douala.'
      }
    }
  },
  {
    id: '6',
    type: 'web-app',
    visibility: 'public',
    stack: ['Next.js', 'TypeScript', 'MongoDB', 'Spring AI', 'Spring Security', 'Spring Reactive Web', 'Docker', 'Nginx'],
    client: {
      name: 'Client privé',
      type: 'company',
      translations: {
        en: {
          description: 'Private client engagement delivered as a one-month rapid, production-ready offer for an AI LinkedIn publishing console.'
        },
        fr: {
          description: 'Commande privée livrée en offre d\'un mois, rapide et fonctionnelle, pour une console de publication LinkedIn assistée par IA.'
        }
      }
    },
    links: {
      official: 'https://agent-rev-front.kobecorporation.com'
    },
    images: [],
    translations: {
      en: {
        name: 'Revlut (Jun 2026 - Jul 2027)',
        description: 'AI agent console that turns ideas into LinkedIn posts ready to generate, review, schedule and publish from the browser.',
        problem: 'Content teams needed a single place to generate LinkedIn tips with AI, keep human review, and publish or schedule to personal profiles without juggling multiple tools.',
        solution: 'Built Revlut Agent Console with multi-provider AI generation (Gemini, OpenAI, Anthropic), LinkedIn OAuth (apps and accounts), editable review workflow, auto-scheduling, and publication history in one iOS-like ops console.',
        impact: 'Speeds up the path from draft to LinkedIn profile: one-click AI tips, controlled review, and scheduled publishing — so content teams ship more consistently with less friction.'
      },
      fr: {
        name: 'Revlut (Juin 2026 - Juillet 2027)',
        description: 'Console agent IA qui transforme des idées en posts LinkedIn prêts à générer, relire, planifier et publier depuis le navigateur.',
        problem: 'Les équipes contenu avaient besoin d\'un outil unique pour générer des tips LinkedIn avec l\'IA, conserver une relecture humaine, puis publier ou planifier sur le profil — sans multiplier les outils.',
        solution: 'Conception et réalisation de Revlut Agent Console : génération multi-providers (Gemini, OpenAI, Anthropic), OAuth LinkedIn (apps et comptes), workflow de relecture éditable, planification automatique et historique des publications dans une console unifiée.',
        impact: 'Accélère le passage du brouillon au profil LinkedIn : tips IA en un clic, contrôle humain avant envoi et publication planifiée — pour un rythme de contenu plus régulier et moins de friction opérationnelle.'
      }
    }
  },
  {
    id: '2',
    type: 'consulting',
    visibility: 'public',
    stack: ['React', 'Spring Boot', 'Kotlin', 'Docker', 'PostgreSQL', 'Strapi'],
    client: {
      name: 'KOBE Corporation',
      type: 'company',
      translations: {
        en: {
          description: 'Yaoundé, Cameroon - Client contracts. Custom web development, technical consulting, and integrations for SMEs and institutions.'
        },
        fr: {
          description: 'Yaoundé, Cameroun - Contrats clients. Développement web sur mesure, conseil technique et intégrations pour PME et institutions.'
        }
      }
    },
    links: {
      official: 'https://kobecorporation.com'
    },
    images: ['/projects/kobe-corporation-logo.jpeg'],
    translations: {
      en: {
        name: 'KOBE Corporation - Full-Stack Client Projects (Dec 2025 - Present)',
        description: 'Custom full-stack web development, technical consulting, and integrations for SMEs and institutions.',
        problem: 'Many local organizations needed reliable digital products and architecture guidance but lacked end-to-end delivery capabilities across product scoping, engineering, and operations.',
        solution: 'Delivered full project cycles from requirements to maintenance: specifications, development, testing, deployment, and post-delivery support. Built and shipped client-ready web applications and integrations using Next.js, Spring Boot, Kotlin, Docker, PostgreSQL, and Strapi.',
        impact: 'Enabled clients to accelerate digital transformation with production-ready platforms, clearer technical direction, and maintainable full-stack architectures aligned with business needs.'
      },
      fr: {
        name: 'KOBE Corporation - Projets Clients Full-Stack (Déc 2025 - présent)',
        description: 'Développement web full-stack sur mesure, conseil technique et intégrations pour PME et institutions.',
        problem: 'De nombreuses structures locales avaient besoin de solutions digitales fiables et d\'un accompagnement architectural, sans disposer d\'une capacité de livraison complète de bout en bout.',
        solution: 'Réalisation du cycle complet projet : cahier des charges, développement, recette, déploiement, livraison et maintenance. Conception et mise en production d\'applications web et d\'intégrations clients avec Next.js, Spring Boot, Kotlin, Docker, PostgreSQL et Strapi.',
        impact: 'Accélération de la transformation digitale des clients grâce à des plateformes prêtes pour la production, une direction technique plus claire et des architectures full-stack maintenables alignées sur les besoins métier.'
      }
    }
  },
  {
    id: '1',
    type: 'web-app',
    visibility: 'public',
    stack: ['React.js', 'Spring Boot', 'Kotlin', 'MongoDB', 'Docker', 'JWT', 'OAuth2'],
    client: {
      name: 'Kobe Corporation',
      type: 'startup',
      translations: {
        en: {
          description: 'A content publishing and social networking SaaS platform focused on long-form content and community engagement.'
        },
        fr: {
          description: 'Une plateforme SaaS de blogging et réseau social orientée publication de contenus longs et engagement communautaire.'
        }
      }
    },
    links: {
      official: 'https://blogpress-app.com'
    },
    images: [],
    translations: {
      en: {
        name: 'BlogPress - Blogging & Social Platform (Sep-Dec 2025)',
        description: 'A SaaS platform for long-form content publishing with community features, subscriptions, and social sharing.',
        problem: 'Creators and communities needed a single platform to publish rich long-form content, embed media, manage audience subscriptions, and keep secure user onboarding without juggling multiple disconnected tools.',
        solution: 'Built BlogPress with a rich-text editor, Markdown support, embedded media, subscriptions, and sharing workflows. Implemented secure JWT authentication with OAuth2 providers (Google and GitHub), based on a headless API architecture with SSR for performance and SEO.',
        impact: 'Delivered an integrated publishing and social experience from September to December 2025, reducing tooling fragmentation for creators and providing a scalable base for growth and community engagement.'
      },
      fr: {
        name: 'BlogPress - Plateforme de Blogging & Réseau Social (Sept-Dec 2025)',
        description: 'Une plateforme SaaS de publication de contenus longs avec fonctionnalités communautaires, abonnements et partage social.',
        problem: 'Les créateurs et communautés avaient besoin d\'une plateforme unique pour publier du contenu long, embarquer des médias, gérer les abonnements et sécuriser l\'onboarding utilisateur, sans multiplier les outils séparés.',
        solution: 'Développement de BlogPress avec éditeur rich-text, support Markdown, médias embarqués, système d\'abonnements et partage. Mise en place d\'une authentification sécurisée JWT + OAuth2 (Google et GitHub), avec architecture API headless et SSR pour la performance et le SEO.',
        impact: 'Projet réalisé de septembre à décembre 2025 avec une expérience unifiée de publication et de réseau social, réduisant la fragmentation des outils côté créateurs et posant une base scalable pour la croissance de la communauté.'
      }
    }
  },
  {
    id: '4',
    type: 'payroll',
    visibility: 'confidential',
    stack: ['React.js', 'TypeScript', 'Spring Boot', 'Kotlin', 'MongoDB', 'Docker', 'Ansible', 'GitHub Actions', 'Nginx'],
    client: {
      name: 'Université de Yaoundé II',
      type: 'government',
      translations: {
        en: {
          description: 'Institutional HR and payroll management system (2025 - present) for about 1,000 staff, deployed on-premise with restricted access.'
        },
        fr: {
          description: 'Solution institutionnelle RH & paie (2025 - présent) pour environ 1 000 agents, déployée on-premise avec accès restreint.'
        }
      }
    },
    links: {},
    images: [],
    translations: {
      en: {
        name: 'RH-SYSTEM - University HR & Payroll Management (2025 - Present)',
        description: 'An institutional platform for HR management and payroll automation serving around 1,000 agents.',
        problem: 'The university needed a reliable system to centralize HR operations and automate payroll while staying compliant with local regulations and ensuring controlled infrastructure access.',
        solution: 'Built a payroll calculation engine aligned with Cameroonian regulations (CNPS, IRPFbis), added an HR analytics dashboard with PDF/Excel exports, and deployed a containerized stack on VPS with Nginx reverse proxy and SSL hardening.',
        impact: 'Improved payroll reliability and processing consistency at institutional scale, while providing better HR visibility and secure operational deployment for restricted environments.'
      },
      fr: {
        name: 'RH-SYSTEM - Gestion RH & Paie Universitaire (2025 - présent)',
        description: 'Solution institutionnelle de gestion RH et d\'automatisation de la paie pour environ 1 000 agents.',
        problem: 'L\'université avait besoin d\'une solution fiable pour centraliser les processus RH et automatiser la paie, tout en respectant la réglementation locale et un cadre d\'accès restreint.',
        solution: 'Mise en place d\'un moteur de calcul de paie conforme à la législation camerounaise (CNPS, IRPFbis), d\'un tableau de bord analytique RH avec exports PDF/Excel, et d\'un déploiement containerisé sur VPS avec Nginx reverse proxy et SSL.',
        impact: 'Renforcement de la fiabilité du processus de paie et de la traçabilité RH à l\'échelle institutionnelle, avec une exploitation sécurisée adaptée aux environnements on-premise.'
      }
    }
  }
]

// Helper function to get project by language
export const getProjectByLang = (project: Project, lang: 'en' | 'fr') => {
  return {
    ...project,
    ...project.translations[lang],
    client: {
      ...project.client,
      description: project.client.translations[lang].description
    }
  }
}

// Get all unique project types
export const getProjectTypes = (): ProjectType[] => {
  return Array.from(new Set(projects.map(p => p.type))) as ProjectType[]
}
