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
          description: 'Transboundary conservation alliance in the Congo Basin (Cameroon, Republic of the Congo, Gabon) — one programme, three national sites for news, protected areas and contacts.'
        },
        fr: {
          description: 'Alliance de conservation transfrontalière au cœur du bassin du Congo (Cameroun, République du Congo, Gabon) — un programme, trois sites nationaux pour actualités, aires protégées et contacts.'
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
        description: 'Bilingual FR/EN institutional multisite portal for the TRIDOM programme: programme overview, national sites, news and protected-area catalogues across three corridor countries.',
        problem: 'TRIDOM needed a shared digital presence to present the Congo Basin corridor programme — three countries, multiple entities, news, and a catalogue of about 12 protected areas covering roughly 4.4 million hectares — while keeping national sites coherent and bilingual.',
        solution: 'Designed a multisite institutional portal: a programme-wide overview plus country spaces for news, inventories and contacts, with bilingual FR/EN content, protected-area catalogues (parks, reserves, sanctuaries) and sections for vision, news and contact.',
        impact: 'Gives partners, communities and the public a clear view of the corridor (Cameroon, Congo, Gabon), strengthens visibility of biodiversity actions (anti-deforestation, monitoring, corridor restoration) and prepares a maintainable base for three national sites under one programme brand.'
      },
      fr: {
        name: 'Portail Multisite TRIDOM (Offre Technique en cours, Mars - Août 2026)',
        description: 'Portail institutionnel bilingue FR/EN multisite pour le programme TRIDOM : vue d\'ensemble, sites nationaux, actualités et catalogues d\'aires protégées sur trois pays du corridor.',
        problem: 'TRIDOM avait besoin d\'une présence digitale commune pour présenter le programme corridor du bassin du Congo — trois pays, plusieurs entités, actualités et un catalogue d\'environ 12 aires protégées (~4,4 millions d\'hectares) — tout en gardant des sites nationaux cohérents et bilingues.',
        solution: 'Conception d\'un portail institutionnel multisite : une vue programme et des espaces pays pour actualités, inventaires et contacts, contenus bilingues FR/EN, catalogues d\'aires (parcs, réserves, sanctuaires) et rubriques vision, actualités et contact.',
        impact: 'Offre aux partenaires, communautés et au public une lecture claire du corridor (Cameroun, Congo, Gabon), renforce la visibilité des actions biodiversité (déforestation, suivi écologique, restauration de corridors) et prépare une base maintenable pour trois sites nationaux sous une même identité programme.'
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
          description: 'Private client — one-month rapid delivery for digital player licences and on-field QR access control in football competitions.'
        },
        fr: {
          description: 'Client privé — offre d\'un mois, rapide et fonctionnelle, pour licences joueurs et contrôle d\'accès QR sur le terrain en compétition de football.'
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
        description: 'Platform for player identification, licence-card generation and QR access control at football competitions — from tournament setup to pitch entry.',
        problem: 'Organizers struggled to identify players reliably, produce licences and check access at the gate without paper chaos or slow manual controls.',
        solution: 'Delivered ID FOOT: create a competition (name, year, venue, cover), register clubs and players with photos, export PDF licences with a unique QR per player, then scan at the gate to validate entry in seconds.',
        impact: 'One place for competitions, clubs and licences. Already live for events such as the Inter-Village Mafa Championship in Douala (2026, 12 teams), with shareable public and admin links for organizers.'
      },
      fr: {
        name: 'ID Foot (Juin 2026 - Juillet 2027)',
        description: 'Plateforme d\'identification des joueurs, de cartes licence et de contrôle d\'accès QR en compétition — de la création du tournoi jusqu\'à l\'entrée du terrain.',
        problem: 'Les organisateurs peinaient à identifier les joueurs de façon fiable, produire les licences et contrôler l\'accès à l\'entrée sans paperasse ni contrôles manuels lents.',
        solution: 'Livraison d\'ID FOOT : créer une compétition (nom, année, lieu, couverture), inscrire clubs et joueurs avec photo, exporter des cartes licence PDF avec QR unique, puis scanner à l\'entrée pour valider l\'accès en quelques secondes.',
        impact: 'Un seul endroit pour compétitions, clubs et licences. Déjà utilisé pour des tournois comme le Championnat Inter Village Mafa à Douala (2026, 12 équipes), avec liens public et admin partageables pour les organisateurs.'
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
          description: 'Private client — one-month rapid delivery of an AI console for LinkedIn content teams (generate, review, schedule, publish).'
        },
        fr: {
          description: 'Client privé — offre d\'un mois pour une console IA destinée aux équipes contenu LinkedIn (générer, relire, planifier, publier).'
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
        description: 'Agent console that turns ideas into LinkedIn posts ready to publish — generate, review and schedule from the browser, built for content teams.',
        problem: 'Content teams juggled separate tools to draft tips, keep human review and publish or schedule to a LinkedIn profile, which slowed daily publishing.',
        solution: 'Built Revlut: a clean ops console to generate short actionable LinkedIn tips with several AI providers, edit them with an “Awaiting review” status, connect LinkedIn profiles via secure OAuth (up to 3 developer apps), then publish now or schedule (daily, weekdays or custom days) with full history.',
        impact: 'A frictionless path from draft to profile: one-click tips, controlled review, rhythm and timezone scheduling — so teams publish more consistently without leaving the browser.'
      },
      fr: {
        name: 'Revlut (Juin 2026 - Juillet 2027)',
        description: 'Console agent qui transforme des idées en posts LinkedIn prêts à publier — générer, relire et planifier depuis le navigateur, conçue pour les équipes contenu.',
        problem: 'Les équipes contenu multipliaient les outils pour rédiger des tips, garder une relecture humaine puis publier ou planifier sur le profil LinkedIn, ce qui ralentissait le rythme quotidien.',
        solution: 'Réalisation de Revlut : une console claire pour générer des tips LinkedIn courts et actionnables avec plusieurs providers IA, les modifier avec un statut « À relire », connecter le profil via OAuth sécurisé (jusqu\'à 3 apps Developers), puis publier immédiatement ou planifier (quotidien, semaine ou jours au choix) avec historique complet.',
        impact: 'Un parcours sans friction du brouillon au profil : tip en un clic, texte sous contrôle, planning avec rythme et fuseau — pour publier plus régulièrement sans quitter le navigateur.'
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
          description: 'Yaoundé-based technology partner since 2025 — custom software, hosting, consulting and training for individuals, SMEs and large enterprises.'
        },
        fr: {
          description: 'Partenaire technologique basé à Yaoundé depuis 2025 — logiciels sur mesure, hébergement, conseil et formation pour particuliers, PME et grandes entreprises.'
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
        description: 'End-to-end client delivery: turn ideas into software products, host them and support digital growth for individuals, SMEs and enterprises.',
        problem: 'Clients needed a single partner to go from idea to production — strategy, design, build, hosting and support — without fragmented vendors or unclear ownership.',
        solution: 'Accompanied projects through discovery & strategy, design & planning, agile delivery, secure deployment, then support and evolution. Scope covers custom software, hosting & infrastructure, consultation & audit, plus training programs for freelancers, students and open-source contributors.',
        impact: 'Helps organizations secure critical operations, modernize tools for teams and clients, and measure continuous improvement — with human, responsive support from briefing to live product.'
      },
      fr: {
        name: 'KOBE Corporation - Projets Clients Full-Stack (Déc 2025 - présent)',
        description: 'Livraison client de bout en bout : transformer des idées en produits logiciels, les héberger et accompagner la croissance digitale des particuliers, PME et entreprises.',
        problem: 'Les clients avaient besoin d\'un partenaire unique pour aller de l\'idée à la production — stratégie, conception, réalisation, hébergement et support — sans multiplier les prestataires ni diluer la responsabilité.',
        solution: 'Accompagnement sur tout le cycle : découverte & stratégie, conception & planification, livraisons agiles, mise en production sécurisée, puis support et évolution. Périmètre : logiciels sur mesure, hébergement & infra, conseil & audit, et programmes (freelances, étudiants, open source, networking).',
        impact: 'Aide les organisations à sécuriser leurs opérations critiques, moderniser les outils pour équipes et clients, et ancrer une culture d\'amélioration continue — avec un suivi humain et réactif du brief au produit en ligne.'
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
          description: 'Internal SaaS product focused on long-form publishing, community engagement, subscriptions and secure creator onboarding.'
        },
        fr: {
          description: 'Produit SaaS interne orienté publication longue, engagement communautaire, abonnements et onboarding sécurisé des créateurs.'
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
        description: 'SaaS platform for long-form content with community features, subscriptions and social sharing for creators and audiences.',
        problem: 'Creators and communities needed one place to publish rich long-form posts, embed media, manage audience subscriptions and onboard users securely — without juggling disconnected tools.',
        solution: 'Delivered BlogPress with a rich writing experience (editor and Markdown), media embeds, subscriptions and sharing flows, plus secure sign-in via email/social providers so creators can publish and grow an audience in one product.',
        impact: 'From September to December 2025, shipped an integrated publishing and social experience that reduces tool fragmentation for creators and lays a scalable base for community growth.'
      },
      fr: {
        name: 'BlogPress - Plateforme de Blogging & Réseau Social (Sept-Dec 2025)',
        description: 'Plateforme SaaS de contenus longs avec fonctionnalités communautaires, abonnements et partage social pour créateurs et audiences.',
        problem: 'Les créateurs et communautés avaient besoin d\'un seul endroit pour publier du contenu long riche, embarquer des médias, gérer les abonnements et onboarder les utilisateurs en sécurité — sans multiplier les outils.',
        solution: 'Livraison de BlogPress avec une expérience d\'écriture riche (éditeur et Markdown), médias embarqués, abonnements et partage, ainsi qu\'une connexion sécurisée (email / réseaux) pour publier et faire grandir une audience dans un seul produit.',
        impact: 'De septembre à décembre 2025, expérience unifiée de publication et de réseau social, moins de fragmentation d\'outils côté créateurs et base scalable pour la croissance de la communauté.'
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
        solution: 'Delivered an HR & payroll platform aligned with Cameroonian payroll rules, with analytics dashboards and PDF/Excel exports, operated on-premise with restricted access for institutional staff.',
        impact: 'Improved payroll reliability and HR visibility at institutional scale, with a secure operating model suited to on-premise university environments.'
      },
      fr: {
        name: 'RH-SYSTEM - Gestion RH & Paie Universitaire (2025 - présent)',
        description: 'Solution institutionnelle de gestion RH et d\'automatisation de la paie pour environ 1 000 agents.',
        problem: 'L\'université avait besoin d\'une solution fiable pour centraliser les processus RH et automatiser la paie, tout en respectant la réglementation locale et un cadre d\'accès restreint.',
        solution: 'Livraison d\'une plateforme RH & paie alignée sur les règles camerounaises, avec tableaux de bord analytiques et exports PDF/Excel, exploitée on-premise avec accès restreint pour le personnel institutionnel.',
        impact: 'Fiabilisation de la paie et meilleure visibilité RH à l\'échelle institutionnelle, avec un modèle d\'exploitation sécurisé adapté aux environnements universitaires on-premise.'
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
