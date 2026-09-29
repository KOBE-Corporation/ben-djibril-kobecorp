import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { fullControlTranslations } from './fullControl'
import { saasTranslations } from './saas'
import { servicesTranslations } from './services'

const savedLang = localStorage.getItem('lang')
const urlLang = new URLSearchParams(window.location.search).get('lang')
const browserLang = navigator.language?.toLowerCase() || 'fr'
const initialLang =
  urlLang === 'fr' || urlLang === 'en'
    ? urlLang
    : savedLang || (browserLang.startsWith('fr') ? 'fr' : 'en')

if (urlLang === 'fr' || urlLang === 'en') {
  localStorage.setItem('lang', urlLang)
}

export const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home', services: 'Services', projects: 'Projects', about: 'About', contact: 'Contact',
        serviceWeb: 'Web Development', serviceEcom: 'E-commerce', serviceApp: 'Web Apps', serviceConsult: 'Consulting'
      },
      ui: {
        lightboxHint: 'Press Esc or tap outside to close',
      },
      footer: {
        brand: 'Ben Djibril',
        tagline: 'Founder & CEO of Kobe Corporation — developer and computer engineer building digital products that deliver.',
        pagesTitle: 'Pages',
        servicesTitle: 'Services',
        viewAllServices: 'View all services',
        newsletterTitle: 'Newsletter',
        newsletterDesc: 'Get the latest news, tips and case studies straight to your inbox.',
        newsletterPlaceholder: 'Your email',
        newsletterSubscribe: 'Subscribe',
        newsletterSending: 'Sending...',
        newsletterSuccess: 'Subscribed!',
        newsletterThanks: 'Thanks for subscribing!',
        newsletterInvalidEmail: 'Please enter a valid email address',
        newsletterError: 'Something went wrong. Please try again later.',
        comingSoon: 'Coming soon',
        legal: 'Legal notice',
        privacy: 'Privacy policy',
        rights: 'All rights reserved.',
        copyright: '© {{year}} {{brand}}. All rights reserved.',
        motto: 'build your own legacy',
        legalPage: {
          title: 'Legal notice',
          updated: 'Last updated: September 29, 2026',
          publisher: 'This website is published by Kone Djibril Benjamin (Ben Djibril), Founder & CEO of Kobe Corporation.',
          contact: 'Contact: kone.djibril@kobecorporation.com — Yaoundé, Cameroon.',
          hosting: 'The site is hosted by the infrastructure used for kobecorporation.com.',
          ip: 'All content on this site (texts, visuals, brand) remains the property of its author unless otherwise stated.',
        },
        privacyPage: {
          title: 'Privacy policy',
          updated: 'Last updated: September 29, 2026',
          intro: 'I only collect the information you voluntarily send (contact form, newsletter).',
          usage: 'This data is used solely to answer your requests and is never sold to third parties.',
          retention: 'Messages are kept as long as needed to handle your request, then deleted or archived securely.',
          rights: 'You can ask to access, correct or delete your data by emailing kone.djibril@kobecorporation.com.',
        },
      },
      errors: {
        title: 'Something went wrong',
        description: 'An unexpected error occurred. You can try again or return to the home page.',
        retry: 'Try again',
        home: 'Back to home',
        details: 'Technical details',
      },
      home: {
        title: 'Founder & CEO',
        brand: 'Kone Djibril',
        roleTag: 'Developer & Computer Engineer',
        subtitle: 'I help businesses grow with clear digital products — websites, apps and business tools. Founder of Kobe Corporation, developer and computer engineer with 5 years of hands-on delivery.',
        trustBar: {
          experience: '5 years',
          experienceLabel: 'Experience',
          satisfaction: '100%',
          satisfactionLabel: 'Satisfaction',
          responseTime: '< 24h',
          responseTimeLabel: 'Response',
        },
        card1: { title: 'Mobile Applications', desc: 'Apps for iOS & Android that your customers actually use.' },
        card2: { title: 'Web apps', desc: 'Business tools that simplify your daily operations.' },
        card3: { title: 'E‑commerce', desc: 'Online stores built to convert and grow with you.' },
        ctaPrimary: 'Get Started', ctaSecondary: 'View Projects',
        segmentedCta: {
          business: 'I am a company / organization',
          businessSubtext: 'Custom services & offers',
          individual: 'I want to discuss a project',
          individualSubtext: 'Free quote under 24h',
        },
        videoTeaser: {
          badge: 'Profile',
          title: 'Discover how I work with my clients',
          subtitle: 'Clear communication, realistic timelines, and products built for your business goals.',
          cta: 'View my profile',
        },
        services: {
          title: 'My Services',
          subtitle: 'Complete solutions for your digital needs',
          learnMore: 'Learn more',
          viewAll: 'View all services',
          newTag: 'New',
        },
        microTestimonial: {
          quote: 'Ben quickly understood our needs and delivered a solution that exceeded our expectations. Excellent communication and on-time delivery.',
          author: 'Satisfied Client',
          role: 'E-commerce Project',
          cta: 'See all testimonials',
        },
        cta: {
          title: 'Ready to start your project?',
          description: 'Let\'s discuss your project and create something amazing together',
          contactBtn: 'Contact Me',
          projectsBtn: 'View My Work',
          responseTime: 'Response under 24h',
          freeQuote: 'Free quote',
          freeConsultation: 'Free consultation',
        },
        clients: {
          title: 'Trusted by companies worldwide',
        },
        metrics: { clients: 'Clients', projects: 'Projects', satisfaction: 'Satisfaction', delivery: 'Avg Delivery' },
        about: {
          title: 'About Me',
          subtitle: 'Founder & CEO of Kobe Corporation · Developer & Computer Engineer · 5 years of experience',
          bio: 'Hi, I\'m Kone Djibril Benjamin — also known as Ben Djibril. I am a developer and computer engineer, and the Founder & CEO of Kobe Corporation. For 5 years I have helped companies and individuals turn ideas into digital products that work: websites, mobile apps and business tools. I combine engineering rigor with a founder\'s vision to deliver results that move your business forward.',
          bioExtended: 'Beyond building products for clients, I lead Kobe Corporation as Founder & CEO. My background as a developer and computer engineer keeps me hands-on when it matters, while the founder role keeps priorities clear: realistic timelines, solutions designed for growth, and conversations focused on your business goals — not on jargon.',
          languages: 'Languages',
          languagesDesc: 'Native French speaker, intermediate English level',
          realName: 'Full Name',
          publicName: 'Public Name',
          experience: 'Experience',
          level: 'Role',
          levelValue: 'Developer · CEO',
          company: 'Company',
          companyValue: 'Kobe Corporation',
          specialties: 'Specialties',
          specialtiesDesc: 'Backend, Mobile, Web & Cloud — built for your business',
          experienceDesc: '5 years as developer & computer engineer helping companies grow',
          companyDesc: 'Founder & CEO of Kobe Corporation · Developer & Computer Engineer',
          techStack: 'Technology Stack',
          techStackDesc: 'Technologies and tools I master and use daily',
          certifications: 'Certifications',
          certificationsDesc: 'Professional certifications validating my skills in DevOps and Cloud',
          continuousLearning: 'Continuously learning to stay up to date with the latest technologies',
          contactMe: 'Interested in my profile?',
          contactDesc: 'Let\'s discuss your project and see how I can help you',
          contactBtn: 'Contact Me',
          downloadCV: 'Download my CV',
          viewFullStack: 'View full stack',
          viewFullProfile: 'View my full profile',
          clientSatisfaction: 'Client satisfaction',
          clientSatisfactionDesc: 'All my clients are satisfied with my services and recommend my work',
          responseTime: 'Response time',
          responseTimeDesc: 'I respond to all requests within 24h, often much faster',
          worldwide: 'Available worldwide',
          worldwideDesc: 'I work with clients from around the world, in French and English',
          // New sections
          story: {
            title: 'My Story',
            subtitle: 'From builder to founder — and why that matters for your project',
            content: 'I started as a developer and computer engineer building digital products for clients. Along the way I founded Kobe Corporation, which I now lead as CEO. That dual role — engineering delivery and business ownership — shapes how I work with you: clear priorities, realistic timelines, and solutions designed to grow with your company.',
            whyDevOps: 'Why Kobe Corporation?',
            whyDevOpsContent: 'Kobe Corporation exists to turn business ideas into working digital products — websites, apps and tools that teams actually use. As founder, CEO, developer and computer engineer, I stay close to delivery while keeping the conversation focused on your outcomes.',
            whyInternational: 'Why work with clients worldwide?',
            whyInternationalContent: 'Working across cultures and time zones taught me to communicate simply, document clearly, and deliver products that fit real business contexts — whether you are local or remote.'
          },
          identity: {
            role: 'Role',
            roleValue: 'Founder & CEO · Developer & Computer Engineer',
            location: 'Location',
            locationValue: 'Yaoundé, Cameroon',
            timezone: 'Timezone',
            timezoneValue: 'WAT (UTC+1)',
            availability: 'Availability',
            availabilityValue: 'Monday - Friday, 9am - 6pm',
            languageNative: 'Native',
            languageIntermediate: 'B1'
          },
          values: {
            title: 'My Values',
            subtitle: 'The principles that guide my work',
            transparency: {
              title: 'Transparency',
              desc: 'Clear and honest communication at every stage of the project'
            },
            communication: {
              title: 'Communication',
              desc: 'Regular exchanges and constructive feedback to ensure success'
            },
            pedagogy: {
              title: 'Pedagogy',
              desc: 'Knowledge sharing and training for sustainable autonomy'
            },
            rigor: {
              title: 'Rigor',
              desc: 'Clean code, comprehensive tests, and exhaustive documentation'
            },
            innovation: {
              title: 'Innovation',
              desc: 'Adoption of best practices and modern technologies'
            },
            collaboration: {
              title: 'Collaboration',
              desc: 'Teamwork and active listening for optimal solutions'
            }
          },
          workflow: {
            title: 'My Work Process',
            subtitle: 'A structured process to ensure quality',
            discovery: {
              title: 'Discovery & Analysis',
              desc: 'Deep understanding of needs and constraints'
            },
            design: {
              title: 'Design & Architecture',
              desc: 'Design of robust and scalable solutions'
            },
            development: {
              title: 'Development',
              desc: 'Implementation with best practices and standards'
            },
            testing: {
              title: 'Testing & QA',
              desc: 'Complete validation and quality assurance'
            },
            deployment: {
              title: 'Deployment',
              desc: 'Secure and automated production deployment'
            },
            support: {
              title: 'Support & Maintenance',
              desc: 'Continuous support and continuous improvement'
            }
          },
          softSkills: {
            title: 'Soft Skills',
            subtitle: 'Beyond the technical',
            communication: {
              title: 'Communication',
              desc: 'Active listening and clear expression'
            },
            rigor: {
              title: 'Rigor',
              desc: 'Precision and attention to detail'
            },
            pedagogy: {
              title: 'Pedagogy',
              desc: 'Effective knowledge transmission'
            },
            problemSolving: {
              title: 'Problem Solving',
              desc: 'Analysis and creative solutions'
            },
            timeManagement: {
              title: 'Time Management',
              desc: 'Organization and respect for deadlines'
            },
            teamwork: {
              title: 'Teamwork',
              desc: 'Collaboration and synergy'
            }
          },
          timeline: {
            title: 'Career & Education',
            subtitle: 'My professional and academic evolution',
            education: {
              title: 'Education',
              iai: {
                title: 'Computer Engineering Degree',
                subtitle: 'Software Engineering Option',
                institution: 'African Institute of Computer Science (IAI)',
                period: 'Study years',
                desc: 'Complete training in software engineering with specialization in application and computer systems development.'
              }
            },
            achievements: {
              title: 'Achievements',
              canam2023: {
                title: 'Winner - CANAM Contest 2023',
                subtitle: 'Java Programming',
                period: 'November 2023 - March 2024',
                desc: 'Winner of the inter-university contest organized by CANAM (renowned Canadian international construction firm) in the Java programming category. Distinction obtained among 492 candidates across the entire country.',
                imageAlt: 'CANAM Contest 2023 Certificate'
              }
            }
          },
          techStackFilters: {
            daily: 'Used daily',
            mastered: 'Well mastered',
            known: 'Solid knowledge',
            filterAll: 'All',
            filterDaily: 'Daily',
            filterMastered: 'Mastered',
            filterKnown: 'Known'
          },
          cta: {
            downloadCV: 'Download my CV',
            downloadCVDesc: 'FR and EN versions available',
            bookCall: 'Book a call',
            bookCallDesc: '15 minutes free, no commitment',
            viewProjects: 'View my projects',
            viewProjectsDesc: 'Discover my achievements',
            contact: 'Contact me',
            contactDesc: 'Let\'s discuss your project'
          },
          gallery: {
            title: 'In Context',
            subtitle: 'Some moments from my professional daily life',
            setup: 'Work setup',
            whiteboard: 'Architecture & Design',
            conference: 'Conference & Meetup',
            environment: 'Work environment'
          }
        }
      },
      services: {
        ...fullControlTranslations.en,
        ...saasTranslations.en,
        title: 'Services',
        subtitle: 'Tailored solutions for your digital needs',
        heroDescription: 'Websites, mobile apps, e-commerce and business tools — built to support your growth, with clear communication from day one.',
        heroCtaServices: 'Browse services',
        heroHighlightsTitle: 'What I can build for you',
        heroCtaSaas: 'View SaaS offers',
        heroCtaFull: 'View Full Control offers',
        heroCompare: {
          title: 'Which model is best for you?',
          rows: {
            ownership: {
              label: 'Code & project ownership',
              saas: 'I manage the infrastructure and code',
              full: 'You fully own the code and project'
            },
            billing: {
              label: 'Billing',
              saas: 'Monthly subscription',
              full: 'One-time project fee'
            },
            hosting: {
              label: 'Hosting & maintenance',
              saas: 'Included and fully managed',
              full: 'You choose where and how to host'
            },
            ideal: {
              label: 'Ideal for',
              saas: 'Startups & flexible budgets',
              full: 'Long-term projects & full control'
            }
          }
        },
        packagesTitle: 'Our Offers',
        packagesSubtitle: 'Two billing models adapted to how you want to manage your project',
        allServicesTitle: 'All Our Services',
        allServicesSubtitle: 'Complete solutions for all your digital needs',
        filters: {
          all: 'All',
          web: 'Websites & Showcases',
          ecommerce: 'E-commerce & POS',
          apps: 'Web & Mobile Apps',
          business: 'Business & Operations',
          vertical: 'Industry-specific'
        },
        sectors: {
          generic: 'General',
          personal: 'Personal / Portfolio',
          retail: 'Retail & Commerce',
          apps: 'Applications',
          internal: 'Internal Tools',
          backend: 'APIs & Integrations',
          infrastructure: 'Infrastructure & DevOps',
          consulting: 'Consulting',
          finance: 'Finance & Accounting',
          operations: 'Operations',
          crm: 'CRM & Clients',
          logistics: 'Logistics & Delivery',
          services: 'Services & Appointments',
          health: 'Health',
          sport: 'Sport & Fitness',
          beauty: 'Beauty & Care',
          realEstate: 'Real Estate & Rentals',
          hr: 'HR & Human Resources',
          marketplace: 'Marketplace',
          mobility: 'Mobility & Parking',
          education: 'Education'
        },
        actions: {
          more: 'Learn more',
          contact: 'Request a quote'
        },
        packageStarter: 'Starter', packagePro: 'Professional', packageEnterprise: 'Enterprise',
        features: 'Features', getStarted: 'Get Started', mostPopular: 'Most Popular', bestValue: 'Best value',
        idealForLabel: 'Ideal for',
        infoDialog: {
          aboutService: 'About this service',
          mainFeatures: 'Key features',
          mainFeaturesDesc: 'The core features included in this service',
          valueProposition: 'Project value',
          possibleFeatures: 'Features that can be developed',
          possibleFeaturesDesc: 'Full list of features available for this service',
          techStack: 'Tech stack',
          techStackDesc: 'Technologies and tools used to build this service',
          requestQuote: 'Request a quote',
          requestQuoteDesc: 'Fill out the form below to receive a personalized quote for this service',
          contactPreference: 'How would you like to contact us? *',
          whatsappFast: 'Quick contact',
          emailFormal: 'Formal contact',
          yourInfo: 'Your information',
          fullName: 'Full name *',
          fullNamePlaceholder: 'Your full name',
          email: 'Email *',
          phone: 'Phone *',
          company: 'Company',
          companyOptional: '(optional)',
          companyPlaceholder: 'Your company name (optional)',
          message: 'Message',
          messageOptional: '(optional)',
          messagePlaceholder: 'Briefly describe your needs or questions...',
          cancel: 'Cancel',
          sendVia: 'Send via {{method}}',
          waIntro: 'Hello,\n\nI would like to request a quote for the service: *{{service}}*\n\n*My details:*\n',
          waName: '- Name: {{name}}\n',
          waEmail: '- Email: {{email}}\n',
          waPhone: '- Phone: {{phone}}\n',
          waCompany: '- Company: {{company}}\n',
          waMessage: '\n*Message:*\n{{message}}\n',
          waClosing: '\nPlease get back to me to discuss this project.',
          emailIntro: 'Hello,\n\nI would like to request a quote for the service: {{service}}\n\nMy details:\n',
          emailName: '- Name: {{name}}\n',
          emailEmail: '- Email: {{email}}\n',
          emailPhone: '- Phone: {{phone}}\n',
          emailCompany: '- Company: {{company}}\n',
          emailMessage: '\nMessage:\n{{message}}\n',
          emailClosing: '\nPlease get back to me to discuss this project.',
          emailSubject: 'Quote request — {{service}}',
        },
        details: {
          saas: {
            ...saasTranslations.en.details.saas,
          },
          fullControl: {
            ...fullControlTranslations.en.details.fullControl,
          },
          helper:
            'This overview is not a legal contract, but a clear explanation of how the model works. We finalize everything together when we discuss your project.',
          close: 'Close',
          contactCta: 'Discuss this plan',
          chooseServiceCta: 'Choose a service',
          requestQuoteCta: 'Request a quote',
          overviewTitle: 'How this plan works in practice',
        },
        requestQuote: 'Request a quote',
        ctaTitle: 'Ready to start your project?',
        ctaSubtitle: "Let's discuss your needs and find the best solution together",
        ctaButton: 'Contact me now',
        ...servicesTranslations.en,
      },
      projects: {
        title: 'Projects',
        subtitle: 'Real solutions for real businesses',
        description: 'Discover the projects I\'ve built for clients, showcasing innovative solutions and measurable results.',
        viewProject: 'View Project',
        viewCode: 'View Code',
        viewDemo: 'View Demo',
        viewImages: 'View images',
        problem: 'Problem',
        solution: 'Solution',
        impact: 'Impact',
        tags: 'Technologies',
        stack: 'Technology Stack',
        ctaPrimary: 'Start Your Project',
        ctaSecondary: 'View Projects',
        stats: {
          projects: 'Projects',
          clients: 'Clients',
          satisfaction: 'Satisfaction',
          weeks: 'Weeks'
        },
        types: {
          'web-dev': 'Web Development',
          'showcase': 'Showcase Website',
          'portfolio': 'Portfolio',
          'ecommerce': 'E-commerce',
          'web-app': 'Web Application',
          'mobile': 'Mobile Application',
          'desktop': 'Desktop Application',
          'api': 'API',
          'devops': 'DevOps & Cloud',
          'consulting': 'Consulting',
          'inventory': 'Inventory Management',
          'restaurant': 'Restaurant Management',
          'billing': 'Billing Software',
          'orders': 'Order Management',
          'pos': 'POS System',
          'crm': 'CRM',
          'delivery': 'Delivery Management',
          'booking': 'Booking System',
          'pharmacy': 'Pharmacy Management',
          'gym': 'Gym Management',
          'salon': 'Salon Management',
          'transport': 'Transport Management',
          'rental': 'Rental Management',
          'accounting': 'Accounting Software',
          'payroll': 'Payroll Management',
          'mobile-money': 'Mobile Money',
          'market': 'Marketplace',
          'parking': 'Parking Management',
          'school': 'School Management',
          'hospital': 'Hospital Management'
        },
        images: 'images',
        visibility: {
          public: 'Public',
          private: 'Private',
          confidential: 'Confidential'
        },
        grid: {
          title: 'Featured Projects',
          subtitle: 'Explore my portfolio of successful projects',
          filter: 'Filter',
          filterBy: 'Filter by type',
          selectPlaceholder: 'Select project type',
          all: 'All Projects',
          showing: 'Showing',
          projects: 'projects',
          clear: 'Clear filter',
          noProjects: {
            title: 'No projects found',
            message: 'No {type} projects available at the moment. Please try another filter.',
            viewAll: 'View All Projects'
          }
        },
        clientTypes: {
          company: 'Company',
          individual: 'Individual',
          startup: 'Startup',
          ngo: 'NGO',
          government: 'Government'
        },
        cta: {
          title: 'Ready to Start Your Project?',
          subtitle: 'Let\'s work together to bring your vision to life',
          description: 'I\'m always excited to take on new challenges and create innovative solutions.',
          button: 'Get in Touch'
        },
        comingSoon: {
          title: 'Projects Under Update',
          message: 'I\'m currently updating my projects with complete details. They will be available soon!',
          working: 'Work in progress...',
          soon: 'Coming soon',
          cta: 'In the meantime, feel free to contact me to discuss your projects!',
          contactButton: 'Contact Me'
        }
      },
      contact: {
        hero: {
          title: 'Get in Touch',
          subtitle: "I'm here to help bring your digital vision to life. Let's discuss your project and create something amazing together.",
          responseTime: 'Response within 24h',
          freeQuote: 'Free quote',
          available: 'Available worldwide'
        },
        form: {
          title: 'Send me a message',
          subtitle: 'Fill out the form below and I\'ll get back to you as soon as possible.',
          name: 'Full Name',
          namePlaceholder: 'John Doe',
          email: 'Email Address',
          emailPlaceholder: 'john@example.com',
          subject: 'Subject',
          subjectPlaceholder: 'Project inquiry',
        message: 'Message',
          messagePlaceholder: 'Tell me about your project...',
          send: 'Send Message',
        sending: 'Sending...',
          success: 'Message sent successfully! I\'ll get back to you soon.',
          error: 'Error sending message. Please try again or contact me directly.',
          serviceContextTitle: 'You selected a specific service',
          serviceContextDescription: 'You are contacting me about: {{service}}. Give me a bit of context so I can answer with a precise proposal.',
          defaultSubjectPrefix: 'Request a quote for',
          defaultMessagePrefix: 'Hello, I would like to discuss a project about',
          errors: {
        required: 'This field is required',
            invalidEmail: 'Please enter a valid email address',
            messageTooShort: 'Message must be at least 10 characters',
            messageTooLong: 'Message is too long (max 2000 characters)',
            charactersMin: 'characters minimum',
            networkOffline: 'You appear to be offline. Please check your internet connection.',
            networkError: 'Network error. Please check your connection and try again.'
          },
          preferredContact: 'Preferred Contact Method',
          contactMethods: {
            email: 'Email',
            phone: 'Phone',
            whatsapp: 'WhatsApp',
            any: 'Any'
          },
          suggestions: {
            title: 'Suggested subjects',
            project: 'New Project Inquiry',
            quote: 'Request a Quote',
            support: 'Support Request',
            collaboration: 'Collaboration Opportunity',
            question: 'General Question'
          },
          keyboardShortcut: 'Press Ctrl/Cmd + Enter to submit',
          errorHelp: 'You can also contact me directly via email or phone.'
        },
        cards: {
          title: 'Other Ways to Reach Me',
          subtitle: 'Choose the method that works best for you',
          email: {
            title: 'Email',
            description: 'Send me an email and I\'ll respond within 24 hours.',
            action: 'Send Email'
          },
          phone: {
            title: 'Phone',
            description: 'Call me directly for urgent matters or quick questions.',
            action: 'Call Now'
          },
          whatsapp: {
            title: 'WhatsApp',
            description: 'Chat with me on WhatsApp for instant communication.',
            action: 'Chat on WhatsApp'
          },
          location: {
            title: 'Location',
            description: 'Based in Yaoundé, Cameroon. Available for remote work worldwide.',
            action: 'View on Map'
          },
          social: {
            title: 'Follow me on social media'
          },
          availability: {
            title: 'Availability',
            description: 'I\'m available Monday to Friday, 9 AM to 6 PM (WAT). For urgent matters, feel free to contact me anytime.'
          }
        },
        map: {
          title: 'Find Me',
          subtitle: 'Located in Yaoundé, Cameroon. Open to remote collaboration worldwide.',
          location: {
            title: 'My Location',
            address: 'Yaoundé, Cameroon',
            action: 'Open in Google Maps'
          },
          timezone: {
            label: 'Timezone',
            value: 'WAT (UTC+1)'
          },
          language: {
            label: 'Languages',
            value: 'FR / EN'
          },
          response: {
            label: 'Response Time',
            value: '< 24 hours'
          }
        },
        cta: {
          title: 'Ready to Start Your Project?',
          subtitle: 'Let\'s work together to bring your digital vision to life',
          benefits: {
            response: 'Response within 24h',
            quote: 'Free quote',
            consultation: 'Free consultation'
          },
          viewProjects: 'View My Projects',
          emailDirect: 'Email Me Directly'
        },
        stats: {
          title: 'Contact Statistics',
          subtitle: 'My commitment to excellent communication',
          responseTime: 'Average Response Time',
          satisfaction: 'Client Satisfaction',
          messages: 'Messages Handled',
          rating: 'Average Rating'
        },
        faq: {
          title: 'Frequently Asked Questions',
          subtitle: 'Find answers to common questions about working with me',
          stillHaveQuestions: 'Still have questions?',
          contactDirectly: 'Contact me directly',
          items: {
            howLong: {
              question: 'How long does it take to get a response?',
              answer: 'I typically respond to all inquiries within 24 hours, often much sooner. For urgent matters, you can reach me directly via phone or WhatsApp.'
            },
            pricing: {
              question: 'How do you price your projects?',
              answer: 'Pricing depends on the scope, complexity and timeline of your project. Every quote is personalized — contact me for a free estimate with no obligation.'
            },
            process: {
              question: 'What is your development process?',
              answer: 'My process includes: 1) Initial consultation to understand your needs, 2) Proposal and quote, 3) Project planning and design, 4) Development with regular updates, 5) Testing and deployment, 6) Ongoing support and maintenance.'
            },
            remote: {
              question: 'Do you work remotely?',
              answer: 'Yes! I work with clients worldwide remotely. I\'m based in Yaoundé, Cameroon, but I\'m available for remote collaboration across different time zones.'
            },
            languages: {
              question: 'What languages do you speak?',
              answer: 'I\'m a native French speaker and have an intermediate level in English. I can communicate effectively in both languages for project discussions and documentation.'
            },
            support: {
              question: 'Do you provide ongoing support?',
              answer: 'Yes, I offer ongoing support and maintenance packages. This includes bug fixes, updates, security patches, and feature additions. Support terms are discussed and agreed upon before project start.'
            }
          }
        },
        nextSteps: {
          title: 'What Happens Next?',
          subtitle: 'Here\'s what to expect after sending your message',
          steps: {
            confirmation: {
              title: 'Message Received',
              description: 'Your message has been successfully sent and I\'ve received it.'
            },
            response: {
              title: 'Quick Response',
              description: 'I\'ll review your message and respond within 24 hours, usually much sooner.'
            },
            discussion: {
              title: 'Let\'s Discuss',
              description: 'We\'ll discuss your project needs and find the best solution together.'
            }
          },
          contactMethods: {
            email: 'Email Me Directly',
            phone: 'Call Me Now',
            whatsapp: 'Chat on WhatsApp',
            any: 'Contact Me'
          },
          viewProjects: 'View My Projects'
        },
        availability: {
          title: 'Current Availability',
          available: 'Available Now',
          unavailable: 'Currently Offline',
          currentTime: 'Current time',
          hours: 'Available Monday to Friday, 9 AM - 6 PM (WAT). For urgent matters, feel free to contact me anytime.'
        },
        whyChoose: {
          title: 'Why Choose Me?',
          subtitle: 'What sets me apart and makes me the right choice for your project',
          features: {
            response: {
              title: 'Fast Response',
              description: 'I respond to all inquiries within 24 hours, often much sooner. Quick communication is key to project success.'
            },
            quality: {
              title: 'Quality Guaranteed',
              description: 'I deliver high-quality code, following best practices and industry standards. Your project is in safe hands.'
            },
            pricing: {
              title: 'Transparent Pricing',
              description: 'Clear, upfront pricing with no hidden fees. A personalized quote adapted to your budget and goals.'
            },
            experience: {
              title: '5 Years Experience',
              description: 'With 5 years of experience in backend, mobile, and DevOps, I bring expertise to every project.'
            },
            remote: {
              title: 'Remote Collaboration',
              description: 'Work with me from anywhere in the world. I\'m experienced in remote collaboration across time zones.'
            },
            support: {
              title: 'Ongoing Support',
              description: 'I provide continuous support and maintenance to ensure your project stays up-to-date and secure.'
            }
          }
        },
        testimonials: {
          title: 'What Clients Say About Working With Me',
          subtitle: 'Real feedback from clients who have experienced my communication and service',
          stats: {
            total: 'Testimonials',
            averageRating: 'Average rating',
            satisfaction: 'Satisfaction'
          },
          addTestimonial: 'Add a testimonial',
          addTestimonialDesc: 'Worked with me? Share your experience!',
          form: {
            title: 'Add a testimonial',
            name: 'Name *',
            namePlaceholder: 'Your full name',
            role: 'Job / Position *',
            rolePlaceholder: 'Ex: CEO, Developer, Director...',
            company: 'Company (optional)',
            companyPlaceholder: 'Your company name',
            rating: 'Rating *',
            content: 'Message *',
            contentPlaceholder: 'Your testimonial...',
            image: 'Photo (optional)',
            selectImage: 'Select an image',
            minLength: '10',
            cancel: 'Cancel',
            submit: 'Add testimonial',
            submitting: 'Adding...',
            success: 'Testimonial added successfully!',
            close: 'Close',
            removeImage: 'Remove image',
            errors: {
              nameRequired: 'Name is required',
              roleRequired: 'Job/Position is required',
              contentRequired: 'Message is required',
              contentTooShort: 'Message must contain at least 10 characters',
              ratingInvalid: 'Rating must be between 1 and 5',
              imageTooLarge: 'Image must not exceed 2MB',
              imageInvalid: 'File must be an image',
              imageError: 'Error loading image',
              submitError: 'An error occurred while adding the testimonial'
            }
          },
          items: {
            client1: {
              name: 'Sarah M.',
              role: 'CEO',
              company: 'Tech Startup',
              content: 'Ben responded to my inquiry within hours and was incredibly professional throughout the entire project. His communication was clear and he always kept me updated.'
            },
            client2: {
              name: 'Jean-Pierre K.',
              role: 'Director',
              company: 'Educational Institution',
              content: 'Working with Ben was a pleasure. He understood our needs quickly and delivered exactly what we asked for. Highly recommend his services!'
            },
            client3: {
              name: 'Marie L.',
              role: 'Founder',
              company: 'E-commerce Business',
              content: 'Ben\'s responsiveness and attention to detail made our collaboration smooth. He was always available to answer questions and provide updates.'
            }
          }
        }
      },
      seo: {
        default: {
          title: 'Kone Djibril (Ben Djibril) - Founder & CEO · Developer & Computer Engineer | Portfolio',
          description: 'Kone Djibril (Ben Djibril) — Founder & CEO of Kobe Corporation, developer and computer engineer. Websites, apps and digital tools for businesses. Free quotes.',
          keywords: 'Kone Djibril, Ben Djibril, Kobe Corporation, Founder CEO, developer, computer engineer, web development, mobile apps, e-commerce, Cameroon, portfolio'
        },
        ogImageAlt: 'Kone Djibril (Ben Djibril) — Founder & CEO, Developer & Computer Engineer',
        home: {
          title: 'Kone Djibril (Ben Djibril) - Founder & CEO · Developer & Computer Engineer | Portfolio',
          description: 'Kone Djibril (Ben Djibril) — Founder & CEO of Kobe Corporation. Developer and computer engineer with 5 years helping businesses grow with websites, apps and digital tools.',
          keywords: 'Kone Djibril, Ben Djibril, Kobe Corporation, Founder CEO, developer, computer engineer, entrepreneur, web development, mobile apps, portfolio'
        },
        services: {
          title: 'Services - Kone Djibril (Ben Djibril) | Web, Mobile & Business Tools',
          description: 'Custom websites, mobile apps, e-commerce and business software by Kone Djibril — Founder & CEO of Kobe Corporation. Free quotes available.',
          keywords: 'Ben Djibril services, Kone Djibril services, web development, mobile apps, e-commerce, business software, Kobe Corporation',
          schemaName: 'Kone Djibril — Digital product development services'
        },
        projects: {
          title: 'Projects - Kone Djibril (Ben Djibril) | Real Client Work',
          description: 'Explore projects by Kone Djibril (Ben Djibril): web apps, mobile apps, e-commerce and business tools delivered for real companies.',
          keywords: 'Ben Djibril projects, Kone Djibril portfolio, web applications, mobile apps, e-commerce, case studies'
        },
        about: {
          title: 'About - Kone Djibril (Ben Djibril) | Developer, Computer Engineer & Founder',
          description: 'Meet Kone Djibril (Ben Djibril): developer and computer engineer, Founder & CEO of Kobe Corporation. 5 years of experience, stack, certifications and approach.',
          keywords: 'about Ben Djibril, Kone Djibril Benjamin, developer, computer engineer, Founder CEO Kobe Corporation, certifications, experience'
        },
        contact: {
          title: 'Contact - Kone Djibril (Ben Djibril) | Free Quote in 24h',
          description: 'Contact Kone Djibril (Ben Djibril) for your next digital project. Free quotes, reply within 24h. Available worldwide for web, mobile and business tools.',
          keywords: 'contact Ben Djibril, contact Kone Djibril, free quote, Kobe Corporation, web mobile project'
        }
      },
      notFound: { title: 'Page not found', back: 'Back to home' },
    }
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil', services: 'Services', projects: 'Projets', about: 'À propos', contact: 'Contact',
        serviceWeb: 'Développement Web', serviceEcom: 'E-commerce', serviceApp: 'Applications Web', serviceConsult: 'Conseil'
      },
      ui: {
        lightboxHint: 'Échap ou clic à l’extérieur pour fermer',
      },
      footer: {
        brand: 'Ben Djibril',
        tagline: 'Fondateur & CEO de Kobe Corporation — développeur et ingénieur informaticien, je construis des produits digitaux concrets.',
        pagesTitle: 'Pages',
        servicesTitle: 'Services',
        viewAllServices: 'Voir tous les services',
        newsletterTitle: 'Newsletter',
        newsletterDesc: 'Recevez les dernières actualités, conseils et études de cas directement dans votre boîte mail.',
        newsletterPlaceholder: 'Votre email',
        newsletterSubscribe: "S'abonner",
        newsletterSending: 'Envoi...',
        newsletterSuccess: 'Abonné !',
        newsletterThanks: 'Merci pour votre abonnement !',
        newsletterInvalidEmail: 'Veuillez entrer une adresse email valide',
        newsletterError: 'Une erreur est survenue. Veuillez réessayer plus tard.',
        comingSoon: 'Bientôt disponible',
        legal: 'Mentions légales',
        privacy: 'Politique de confidentialité',
        rights: 'Tous droits réservés.',
        copyright: '© {{year}} {{brand}}. Tous droits réservés.',
        motto: 'build your own legacy',
        legalPage: {
          title: 'Mentions légales',
          updated: 'Dernière mise à jour : 29 septembre 2026',
          publisher: 'Ce site est édité par Kone Djibril Benjamin (Ben Djibril), Fondateur & CEO de Kobe Corporation.',
          contact: 'Contact : kone.djibril@kobecorporation.com — Yaoundé, Cameroun.',
          hosting: 'Le site est hébergé sur l’infrastructure utilisée pour kobecorporation.com.',
          ip: 'L’ensemble des contenus (textes, visuels, marque) reste la propriété de son auteur sauf mention contraire.',
        },
        privacyPage: {
          title: 'Politique de confidentialité',
          updated: 'Dernière mise à jour : 29 septembre 2026',
          intro: 'Je ne collecte que les informations que vous envoyez volontairement (formulaire de contact, newsletter).',
          usage: 'Ces données servent uniquement à répondre à vos demandes et ne sont jamais vendues à des tiers.',
          retention: 'Les messages sont conservés le temps nécessaire au traitement, puis supprimés ou archivés de façon sécurisée.',
          rights: 'Vous pouvez demander l’accès, la correction ou la suppression de vos données à kone.djibril@kobecorporation.com.',
        },
      },
      errors: {
        title: 'Une erreur est survenue',
        description: 'Une erreur inattendue s’est produite. Vous pouvez réessayer ou revenir à l’accueil.',
        retry: 'Réessayer',
        home: 'Retour à l’accueil',
        details: 'Détails techniques',
      },
      home: {
        title: 'Fondateur & CEO',
        brand: 'Kone Djibril',
        roleTag: 'Développeur & Ingénieur informaticien',
        subtitle: 'J\'aide les entreprises à grandir avec des produits digitaux clairs — sites, applications et outils métier. Fondateur de Kobe Corporation, développeur et ingénieur informaticien avec 5 ans de livraison concrète.',
        card1: { title: 'Applications Mobile', desc: 'Des apps iOS & Android que vos clients utilisent vraiment.' },
        card2: { title: 'Apps web', desc: 'Des outils métier qui simplifient votre quotidien.' },
        card3: { title: 'E‑commerce', desc: 'Des boutiques en ligne pensées pour convertir et grandir.' },
        ctaPrimary: 'Commencer', ctaSecondary: 'Voir les projets',
        segmentedCta: {
          business: 'Je suis une entreprise / organisation',
          businessSubtext: 'Services & offres sur mesure',
          individual: 'Je veux discuter d\'un projet',
          individualSubtext: 'Devis gratuit sous 24h',
        },
        trustBar: {
          experience: '5 ans',
          experienceLabel: 'Expérience',
          satisfaction: '100%',
          satisfactionLabel: 'Satisfaction',
          responseTime: '< 24h',
          responseTimeLabel: 'Réponse',
        },
        videoTeaser: {
          badge: 'Profil',
          title: 'Découvrez comment je travaille avec mes clients',
          subtitle: 'Communication claire, délais réalistes, et produits pensés pour vos objectifs business.',
          cta: 'Voir mon profil',
        },
        services: {
          title: 'Mes Services',
          subtitle: 'Solutions complètes pour vos besoins digitaux',
          learnMore: 'En savoir plus',
          viewAll: 'Voir tous les services',
          newTag: 'Nouveau',
        },
        microTestimonial: {
          quote: 'Ben a su comprendre nos besoins rapidement et livrer une solution qui dépasse nos attentes. Communication excellente et livraison dans les temps.',
          author: 'Client satisfait',
          role: 'Projet e-commerce',
          cta: 'Voir tous les témoignages',
        },
        cta: {
          title: 'Prêt à démarrer votre projet ?',
          description: 'Discutons de votre projet et créons ensemble quelque chose d\'extraordinaire',
          contactBtn: 'Me contacter',
          projectsBtn: 'Voir mes réalisations',
          responseTime: 'Réponse sous 24h',
          freeQuote: 'Devis gratuit',
          freeConsultation: 'Consultation gratuite',
        },
        clients: {
          title: 'Recommandé par des entreprises du monde entier',
        },
        metrics: { clients: 'Clients', projects: 'Projets', satisfaction: 'Satisfaction', delivery: 'Délai moyen' },
        about: {
          title: 'À propos de moi',
          subtitle: 'Fondateur & CEO de Kobe Corporation · Développeur & Ingénieur informaticien · 5 ans d\'expérience',
          bio: 'Bonjour, je suis Kone Djibril Benjamin — aussi connu sous le nom de Ben Djibril. Je suis développeur et ingénieur informaticien, et Fondateur & CEO de Kobe Corporation. Depuis 5 ans, j\'aide les entreprises et les particuliers à transformer leurs idées en produits digitaux concrets : sites web, applications mobiles et outils métier. Je combine la rigueur de l\'ingénieur et la vision du fondateur pour livrer des résultats qui font avancer votre activité.',
          bioExtended: 'Au-delà des projets clients, je dirige Kobe Corporation en tant que Fondateur & CEO. Mon parcours de développeur et d\'ingénieur informaticien me garde opérationnel quand il le faut, tandis que le rôle de fondateur clarifie les priorités : des délais réalistes, des solutions pensées pour grandir, et une conversation centrée sur vos objectifs business — pas sur le jargon.',
          languages: 'Langues',
          languagesDesc: 'Français natif, anglais niveau intermédiaire',
          realName: 'Nom complet',
          publicName: 'Nom public',
          experience: 'Expérience',
          level: 'Rôle',
          levelValue: 'Développeur · CEO',
          company: 'Entreprise',
          companyValue: 'Kobe Corporation',
          specialties: 'Spécialités',
          specialtiesDesc: 'Backend, Mobile, Web & Cloud — au service de votre business',
          experienceDesc: '5 ans comme développeur & ingénieur informaticien au service des entreprises',
          companyDesc: 'Fondateur & CEO de Kobe Corporation · Développeur & Ingénieur informaticien',
          techStack: 'Stack Technologique',
          techStackDesc: 'Technologies et outils que je maîtrise et utilise au quotidien',
          certifications: 'Certifications',
          certificationsDesc: 'Certifications professionnelles validant mes compétences en DevOps et Cloud',
          continuousLearning: 'Continuellement en formation pour rester à jour avec les dernières technologies',
          contactMe: 'Intéressé par mon profil ?',
          contactDesc: 'Discutons de votre projet et voyons comment je peux vous aider',
          contactBtn: 'Me contacter',
          downloadCV: 'Télécharger mon CV',
          viewFullStack: 'Voir le stack complet',
          viewFullProfile: 'Voir mon profil complet',
          clientSatisfaction: 'Satisfaction client',
          clientSatisfactionDesc: 'Tous mes clients sont satisfaits de mes services et recommandent mon travail',
          responseTime: 'Temps de réponse',
          responseTimeDesc: 'Je réponds à toutes les demandes sous 24h, souvent beaucoup plus rapidement',
          worldwide: 'Disponible mondialement',
          worldwideDesc: 'Je travaille avec des clients du monde entier, en français et en anglais',
          // Nouvelles sections
          story: {
            title: 'Mon Histoire',
            subtitle: 'Du bâtisseur au fondateur — et pourquoi ça compte pour votre projet',
            content: 'J\'ai commencé comme développeur et ingénieur informaticien en construisant des produits digitaux pour des clients. En chemin, j\'ai fondé Kobe Corporation, que je dirige aujourd\'hui en tant que CEO. Ce double rôle — livraison technique et vision d\'entreprise — façonne ma façon de travailler avec vous : des priorités claires, des délais réalistes, et des solutions pensées pour grandir avec votre activité.',
            whyDevOps: 'Pourquoi Kobe Corporation ?',
            whyDevOpsContent: 'Kobe Corporation existe pour transformer des idées business en produits digitaux concrets — sites, apps et outils que vos équipes utilisent vraiment. En tant que fondateur, CEO, développeur et ingénieur informaticien, je reste proche de la livraison tout en gardant la conversation centrée sur vos résultats.',
            whyInternational: 'Pourquoi travailler avec des clients du monde entier ?',
            whyInternationalContent: 'Travailler à travers les cultures et les fuseaux m\'a appris à communiquer simplement, documenter clairement, et livrer des produits adaptés à de vrais contextes business — en local comme à distance.'
          },
          identity: {
            role: 'Rôle',
            roleValue: 'Fondateur & CEO · Développeur & Ingénieur informaticien',
            location: 'Localisation',
            locationValue: 'Yaoundé, Cameroun',
            timezone: 'Fuseau horaire',
            timezoneValue: 'WAT (UTC+1)',
            availability: 'Disponibilité',
            availabilityValue: 'Lundi - Vendredi, 9h - 18h',
            languageNative: 'Natif',
            languageIntermediate: 'B1'
          },
          values: {
            title: 'Mes Valeurs',
            subtitle: 'Les principes qui guident mon travail',
            transparency: {
              title: 'Transparence',
              desc: 'Communication claire et honnête à chaque étape du projet'
            },
            communication: {
              title: 'Communication',
              desc: 'Échanges réguliers et feedback constructif pour garantir la réussite'
            },
            pedagogy: {
              title: 'Pédagogie',
              desc: 'Partage de connaissances et formation pour une autonomie durable'
            },
            rigor: {
              title: 'Rigueur',
              desc: 'Code propre, tests complets et documentation exhaustive'
            },
            innovation: {
              title: 'Innovation',
              desc: 'Adoption des meilleures pratiques et technologies modernes'
            },
            collaboration: {
              title: 'Collaboration',
              desc: 'Travail en équipe et écoute active pour des solutions optimales'
            }
          },
          workflow: {
            title: 'Ma Façon de Travailler',
            subtitle: 'Un processus structuré pour garantir la qualité',
            discovery: {
              title: 'Découverte & Analyse',
              desc: 'Compréhension approfondie des besoins et des contraintes'
            },
            design: {
              title: 'Design & Architecture',
              desc: 'Conception de solutions robustes et scalables'
            },
            development: {
              title: 'Développement',
              desc: 'Implémentation avec les meilleures pratiques et standards'
            },
            testing: {
              title: 'Tests & QA',
              desc: 'Validation complète et assurance qualité'
            },
            deployment: {
              title: 'Déploiement',
              desc: 'Mise en production sécurisée et automatisée'
            },
            support: {
              title: 'Support & Maintenance',
              desc: 'Accompagnement continu et amélioration continue'
            }
          },
          softSkills: {
            title: 'Compétences Transversales',
            subtitle: 'Au-delà de la technique',
            communication: {
              title: 'Communication',
              desc: 'Écoute active et expression claire'
            },
            rigor: {
              title: 'Rigueur',
              desc: 'Précision et attention aux détails'
            },
            pedagogy: {
              title: 'Pédagogie',
              desc: 'Transmission de connaissances efficace'
            },
            problemSolving: {
              title: 'Résolution de problèmes',
              desc: 'Analyse et solutions créatives'
            },
            timeManagement: {
              title: 'Gestion du temps',
              desc: 'Organisation et respect des délais'
            },
            teamwork: {
              title: 'Travail en équipe',
              desc: 'Collaboration et synergie'
            }
          },
          timeline: {
            title: 'Parcours & Formations',
            subtitle: 'Mon évolution professionnelle et académique',
            education: {
              title: 'Formation',
              iai: {
                title: 'Diplôme d\'Ingénieur des Travaux Informatique',
                subtitle: 'Option Génie Logiciel',
                institution: 'Institut Africain d\'Informatique (IAI)',
                period: 'Années d\'études',
                desc: 'Formation complète en génie logiciel avec spécialisation en développement d\'applications et systèmes informatiques.'
              }
            },
            achievements: {
              title: 'Réalisations',
              canam2023: {
                title: 'Lauréat - Concours CANAM 2023',
                subtitle: 'Programmation Java',
                period: 'Novembre 2023 - Mars 2024',
                desc: 'Lauréat du concours interuniversitaire organisé par CANAM (firme canadienne de construction internationale) dans la catégorie programmation en langage Java. Distinction obtenue parmi 492 candidats à travers tout le pays.',
                imageAlt: 'Certificat Concours CANAM 2023'
              }
            }
          },
          techStackFilters: {
            daily: 'Utilisé au quotidien',
            mastered: 'Bien maîtrisé',
            known: 'Connaissance solide',
            filterAll: 'Toutes',
            filterDaily: 'Quotidiennes',
            filterMastered: 'Maîtrisées',
            filterKnown: 'Connues'
          },
          cta: {
            downloadCV: 'Télécharger mon CV',
            downloadCVDesc: 'Version FR et EN disponible',
            bookCall: 'Réserver un appel',
            bookCallDesc: '15 minutes gratuites, sans engagement',
            viewProjects: 'Voir mes projets',
            viewProjectsDesc: 'Découvrez mes réalisations',
            contact: 'Me contacter',
            contactDesc: 'Discutons de votre projet'
          },
          gallery: {
            title: 'En Contexte',
            subtitle: 'Quelques moments de mon quotidien professionnel',
            setup: 'Setup de travail',
            whiteboard: 'Architecture & Design',
            conference: 'Conférence & Meetup',
            environment: 'Environnement de travail'
          }
        }
      },
      services: {
        ...fullControlTranslations.fr,
        ...saasTranslations.fr,
        title: 'Services',
        subtitle: 'Solutions sur mesure pour vos besoins digitaux',
        heroDescription: 'Sites web, applications mobiles, e-commerce et outils métier — conçus pour soutenir votre croissance, avec une communication claire dès le premier jour.',
        heroCtaServices: 'Voir les services',
        heroHighlightsTitle: 'Ce que je peux construire pour vous',
        heroCtaSaas: 'Voir les offres SaaS',
        heroCtaFull: 'Voir les offres Full Control',
        heroCompare: {
          title: 'Quel modèle est fait pour vous ?',
          rows: {
            ownership: {
              label: 'Propriété du code & du projet',
              saas: 'Je gère l’infrastructure et le code',
              full: 'Vous possédez totalement le code et le projet'
            },
            billing: {
              label: 'Facturation',
              saas: 'Abonnement mensuel',
              full: 'Paiement unique de projet'
            },
            hosting: {
              label: 'Hébergement & maintenance',
              saas: 'Inclus et entièrement géré',
              full: 'Vous choisissez où et comment héberger'
            },
            ideal: {
              label: 'Idéal pour',
              saas: 'Startups & budgets flexibles',
              full: 'Projets long terme & contrôle total'
            }
          }
        },
        packagesTitle: 'Nos Offres',
        packagesSubtitle: 'Deux modèles de facturation selon la façon dont vous voulez gérer votre projet',
        allServicesTitle: 'Tous nos Services',
        allServicesSubtitle: 'Des solutions complètes pour tous vos besoins digitaux',
        filters: {
          all: 'Tous',
          web: 'Sites & Vitrines',
          ecommerce: 'E-commerce & Caisse',
          apps: 'Apps Web & Mobile',
          business: 'Business & Gestion',
          vertical: 'Métiers spécifiques'
        },
        sectors: {
          generic: 'Général',
          personal: 'Personnel / Portfolio',
          retail: 'Retail & Commerce',
          apps: 'Applications',
          internal: 'Outils internes',
          backend: 'APIs & Intégrations',
          infrastructure: 'Infrastructure & DevOps',
          consulting: 'Conseil',
          finance: 'Finance & Comptabilité',
          operations: 'Opérations',
          crm: 'CRM & Clients',
          logistics: 'Logistique & Livraison',
          services: 'Services & Rendez-vous',
          health: 'Santé',
          sport: 'Sport & Fitness',
          beauty: 'Beauté & Bien-être',
          realEstate: 'Immobilier & Location',
          hr: 'RH & Ressources humaines',
          marketplace: 'Marketplace',
          mobility: 'Mobilité & Parking',
          education: 'Éducation'
        },
        actions: {
          more: 'En savoir plus',
          contact: 'Demander un devis'
        },
        packageStarter: 'Starter', packagePro: 'Professionnel', packageEnterprise: 'Enterprise',
        features: 'Fonctionnalités', getStarted: 'Commencer', mostPopular: 'Le plus populaire', bestValue: 'Meilleur rapport qualité / prix',
        idealForLabel: 'Idéal pour',
        infoDialog: {
          aboutService: 'À propos de ce service',
          mainFeatures: 'Fonctionnalités principales',
          mainFeaturesDesc: 'Les fonctionnalités clés incluses dans ce service',
          valueProposition: 'Plus-value du projet',
          possibleFeatures: 'Fonctionnalités pouvant être développées',
          possibleFeaturesDesc: 'Liste exhaustive des fonctionnalités disponibles pour ce service',
          techStack: 'Stack technique',
          techStackDesc: 'Technologies et outils utilisés pour développer ce service',
          requestQuote: 'Demander un devis',
          requestQuoteDesc: 'Remplissez le formulaire ci-dessous pour recevoir un devis personnalisé pour ce service',
          contactPreference: 'Comment souhaitez-vous nous contacter ? *',
          whatsappFast: 'Contact rapide',
          emailFormal: 'Contact formel',
          yourInfo: 'Vos informations',
          fullName: 'Nom complet *',
          fullNamePlaceholder: 'Votre nom complet',
          email: 'Email *',
          phone: 'Téléphone *',
          company: 'Entreprise',
          companyOptional: '(optionnel)',
          companyPlaceholder: 'Nom de votre entreprise (optionnel)',
          message: 'Message',
          messageOptional: '(optionnel)',
          messagePlaceholder: 'Décrivez brièvement vos besoins ou questions...',
          cancel: 'Annuler',
          sendVia: 'Envoyer via {{method}}',
          waIntro: 'Bonjour,\n\nJe souhaite demander un devis pour le service : *{{service}}*\n\n*Mes informations :*\n',
          waName: '- Nom : {{name}}\n',
          waEmail: '- Email : {{email}}\n',
          waPhone: '- Téléphone : {{phone}}\n',
          waCompany: '- Entreprise : {{company}}\n',
          waMessage: '\n*Message :*\n{{message}}\n',
          waClosing: '\nMerci de me recontacter pour discuter de ce projet.',
          emailIntro: 'Bonjour,\n\nJe souhaite demander un devis pour le service : {{service}}\n\nMes informations :\n',
          emailName: '- Nom : {{name}}\n',
          emailEmail: '- Email : {{email}}\n',
          emailPhone: '- Téléphone : {{phone}}\n',
          emailCompany: '- Entreprise : {{company}}\n',
          emailMessage: '\nMessage :\n{{message}}\n',
          emailClosing: '\nMerci de me recontacter pour discuter de ce projet.',
          emailSubject: 'Demande de devis — {{service}}',
        },
        details: {
          saas: {
            ...saasTranslations.fr.details.saas,
          },
          fullControl: {
            ...fullControlTranslations.fr.details.fullControl,
          },
          helper:
            "Cette fiche n'est pas un contrat juridique, mais une explication claire de la façon dont le modèle fonctionne. On finalise tout ensemble quand on discute de votre projet.",
          close: 'Fermer',
          contactCta: 'Discuter de ce forfait',
          chooseServiceCta: 'Choix du service',
          requestQuoteCta: 'Demander un devis',
          overviewTitle: 'Comment ce forfait fonctionne concrètement',
        },
        requestQuote: 'Demander un devis',
        ctaTitle: 'Prêt à démarrer votre projet ?',
        ctaSubtitle: 'Discutons de vos besoins et trouvons ensemble la meilleure solution',
        ctaButton: 'Contactez-moi maintenant',
        ...servicesTranslations.fr,
      },
      projects: {
        title: 'Projets',
        subtitle: 'De vraies solutions pour de vraies entreprises',
        description: 'Découvrez les projets que j\'ai réalisés pour mes clients, mettant en avant des solutions innovantes et des résultats mesurables.',
        viewProject: 'Voir le projet',
        viewCode: 'Voir le code',
        viewDemo: 'Voir la démo',
        viewImages: 'Voir les images',
        problem: 'Problème',
        solution: 'Solution',
        impact: 'Impact',
        tags: 'Technologies',
        stack: 'Stack Technologique',
        ctaPrimary: 'Démarrer votre projet',
        ctaSecondary: 'Voir les projets',
        stats: {
          projects: 'Projets',
          clients: 'Clients',
          satisfaction: 'Satisfaction',
          weeks: 'Semaines'
        },
        types: {
          'web-dev': 'Développement Web',
          'showcase': 'Site Vitrine',
          'portfolio': 'Portfolio',
          'ecommerce': 'E-commerce',
          'web-app': 'Application Web',
          'mobile': 'Application Mobile',
          'desktop': 'Application Desktop',
          'api': 'API',
          'devops': 'DevOps & Cloud',
          'consulting': 'Conseil',
          'inventory': 'Gestion de Stock',
          'restaurant': 'Gestion de Restaurant',
          'billing': 'Logiciel de Facturation',
          'orders': 'Gestion de Commandes',
          'pos': 'Système de Caisse',
          'crm': 'CRM',
          'delivery': 'Gestion de Livraison',
          'booking': 'Système de Réservation',
          'pharmacy': 'Gestion de Pharmacie',
          'gym': 'Gestion de Salle de Sport',
          'salon': 'Gestion de Salon',
          'transport': 'Gestion de Transport',
          'rental': 'Gestion de Location',
          'accounting': 'Logiciel Comptable',
          'payroll': 'Gestion de Paie',
          'mobile-money': 'Mobile Money',
          'market': 'Place de Marché',
          'parking': 'Gestion de Parking',
          'school': 'Gestion Scolaire',
          'hospital': 'Gestion Hospitalière'
        },
        images: 'images',
        visibility: {
          public: 'Public',
          private: 'Privé',
          confidential: 'Confidentiel'
        },
        grid: {
          title: 'Projets en vedette',
          subtitle: 'Explorez mon portfolio de projets réussis',
          filter: 'Filtrer',
          filterBy: 'Filtrer par type',
          selectPlaceholder: 'Sélectionner un type de projet',
          all: 'Tous les projets',
          showing: 'Affichage de',
          projects: 'projets',
          clear: 'Effacer le filtre',
          noProjects: {
            title: 'Aucun projet trouvé',
            message: 'Aucun projet de type {type} disponible pour le moment. Veuillez essayer un autre filtre.',
            viewAll: 'Voir tous les projets'
          }
        },
        clientTypes: {
          company: 'Entreprise',
          individual: 'Particulier',
          startup: 'Startup',
          ngo: 'ONG',
          government: 'Gouvernement'
        },
        cta: {
          title: 'Prêt à démarrer votre projet ?',
          subtitle: 'Travaillons ensemble pour donner vie à votre vision',
          description: 'Je suis toujours ravi de relever de nouveaux défis et de créer des solutions innovantes.',
          button: 'Me contacter'
        },
        comingSoon: {
          title: 'Projets en cours de mise à jour',
          message: 'Je suis en train de mettre à jour mes projets avec des détails complets. Ils seront bientôt disponibles !',
          working: 'Travail en cours...',
          soon: 'Bientôt disponible',
          cta: 'En attendant, n\'hésitez pas à me contacter pour discuter de vos projets !',
          contactButton: 'Me contacter'
        }
      },
      contact: {
        hero: {
          title: 'Contactez-moi',
          subtitle: 'Je suis là pour vous aider à donner vie à votre vision digitale. Discutons de votre projet et créons quelque chose d\'extraordinaire ensemble.',
          responseTime: 'Réponse sous 24h',
          freeQuote: 'Devis gratuit',
          available: 'Disponible dans le monde entier'
        },
        form: {
          title: 'Envoyez-moi un message',
          subtitle: 'Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.',
          name: 'Nom complet',
          namePlaceholder: 'Jean Dupont',
          email: 'Adresse email',
          emailPlaceholder: 'jean@exemple.com',
          subject: 'Sujet',
          subjectPlaceholder: 'Demande de projet',
        message: 'Message',
          messagePlaceholder: 'Parlez-moi de votre projet...',
          send: 'Envoyer le message',
        sending: 'Envoi en cours...',
          success: 'Message envoyé avec succès ! Je vous répondrai bientôt.',
          error: 'Erreur lors de l\'envoi. Veuillez réessayer ou me contacter directement.',
          serviceContextTitle: 'Service sélectionné',
          serviceContextDescription: 'Vous me contactez à propos de : {{service}}. Donnez-moi quelques détails pour que je puisse vous répondre avec une proposition adaptée.',
          defaultSubjectPrefix: 'Demande de devis pour',
          defaultMessagePrefix: 'Bonjour, je souhaite discuter d\'un projet concernant',
          errors: {
        required: 'Ce champ est requis',
            invalidEmail: 'Veuillez entrer une adresse email valide',
            messageTooShort: 'Le message doit contenir au moins 10 caractères',
            messageTooLong: 'Le message est trop long (maximum 2000 caractères)',
            charactersMin: 'caractères minimum',
            networkOffline: 'Vous semblez être hors ligne. Veuillez vérifier votre connexion internet.',
            networkError: 'Erreur réseau. Veuillez vérifier votre connexion et réessayer.'
          },
          preferredContact: 'Méthode de Contact Préférée',
          contactMethods: {
            email: 'Email',
            phone: 'Téléphone',
            whatsapp: 'WhatsApp',
            any: 'Peu importe'
          },
          suggestions: {
            title: 'Sujets suggérés',
            project: 'Demande de Nouveau Projet',
            quote: 'Demande de Devis',
            support: 'Demande de Support',
            collaboration: 'Opportunité de Collaboration',
            question: 'Question Générale'
          },
          keyboardShortcut: 'Appuyez sur Ctrl/Cmd + Entrée pour envoyer',
          errorHelp: 'Vous pouvez également me contacter directement par email ou téléphone.'
        },
        cards: {
          title: 'Autres moyens de me joindre',
          subtitle: 'Choisissez la méthode qui vous convient le mieux',
          email: {
            title: 'Email',
            description: 'Envoyez-moi un email et je répondrai sous 24 heures.',
            action: 'Envoyer un email'
          },
          phone: {
            title: 'Téléphone',
            description: 'Appelez-moi directement pour les questions urgentes ou rapides.',
            action: 'Appeler maintenant'
          },
          whatsapp: {
            title: 'WhatsApp',
            description: 'Discutez avec moi sur WhatsApp pour une communication instantanée.',
            action: 'Chatter sur WhatsApp'
          },
          location: {
            title: 'Localisation',
            description: 'Basé à Yaoundé, Cameroun. Disponible pour le travail à distance dans le monde entier.',
            action: 'Voir sur la carte'
          },
          social: {
            title: 'Suivez-moi sur les réseaux sociaux'
          },
          availability: {
            title: 'Disponibilité',
            description: 'Je suis disponible du lundi au vendredi, de 9h à 18h (WAT). Pour les urgences, n\'hésitez pas à me contacter à tout moment.'
          }
        },
        map: {
          title: 'Me trouver',
          subtitle: 'Situé à Yaoundé, Cameroun. Ouvert à la collaboration à distance dans le monde entier.',
          location: {
            title: 'Ma localisation',
            address: 'Yaoundé, Cameroun',
            action: 'Ouvrir dans Google Maps'
          },
          timezone: {
            label: 'Fuseau horaire',
            value: 'WAT (UTC+1)'
          },
          language: {
            label: 'Langues',
            value: 'FR / EN'
          },
          response: {
            label: 'Temps de réponse',
            value: '< 24 heures'
          }
        },
        cta: {
          title: 'Prêt à démarrer votre projet ?',
          subtitle: 'Travaillons ensemble pour donner vie à votre vision digitale',
          benefits: {
            response: 'Réponse sous 24h',
            quote: 'Devis gratuit',
            consultation: 'Consultation gratuite'
          },
          viewProjects: 'Voir mes réalisations',
          emailDirect: 'M\'envoyer un email'
        },
        stats: {
          title: 'Statistiques de Contact',
          subtitle: 'Mon engagement pour une communication excellente',
          responseTime: 'Temps de Réponse Moyen',
          satisfaction: 'Satisfaction Client',
          messages: 'Messages Traités',
          rating: 'Note Moyenne'
        },
        faq: {
          title: 'Questions Fréquemment Posées',
          subtitle: 'Trouvez des réponses aux questions courantes sur le travail avec moi',
          stillHaveQuestions: 'Vous avez encore des questions ?',
          contactDirectly: 'Contactez-moi directement',
          items: {
            howLong: {
              question: 'Combien de temps faut-il pour obtenir une réponse ?',
              answer: 'Je réponds généralement à toutes les demandes sous 24 heures, souvent beaucoup plus rapidement. Pour les questions urgentes, vous pouvez me joindre directement par téléphone ou WhatsApp.'
            },
            pricing: {
              question: 'Comment tarifiez-vous vos projets ?',
              answer: 'Le tarif dépend de la portée, de la complexité et du délai de votre projet. Chaque devis est personnalisé — contactez-moi pour une estimation gratuite et sans engagement.'
            },
            process: {
              question: 'Quel est votre processus de développement ?',
              answer: 'Mon processus comprend : 1) Consultation initiale pour comprendre vos besoins, 2) Proposition et devis, 3) Planification et conception du projet, 4) Développement avec mises à jour régulières, 5) Tests et déploiement, 6) Support et maintenance continus.'
            },
            remote: {
              question: 'Travaillez-vous à distance ?',
              answer: 'Oui ! Je travaille avec des clients du monde entier à distance. Je suis basé à Yaoundé, Cameroun, mais je suis disponible pour une collaboration à distance dans différents fuseaux horaires.'
            },
            languages: {
              question: 'Quelles langues parlez-vous ?',
              answer: 'Je suis francophone natif et j\'ai un niveau intermédiaire en anglais. Je peux communiquer efficacement dans les deux langues pour les discussions de projet et la documentation.'
            },
            support: {
              question: 'Fournissez-vous un support continu ?',
              answer: 'Oui, je propose des forfaits de support et de maintenance continus. Cela inclut les corrections de bugs, les mises à jour, les correctifs de sécurité et les ajouts de fonctionnalités. Les conditions de support sont discutées et convenues avant le début du projet.'
            }
          }
        },
        nextSteps: {
          title: 'Prochaines Étapes ?',
          subtitle: 'Voici ce à quoi vous pouvez vous attendre après l\'envoi de votre message',
          steps: {
            confirmation: {
              title: 'Message Reçu',
              description: 'Votre message a été envoyé avec succès et je l\'ai bien reçu.'
            },
            response: {
              title: 'Réponse Rapide',
              description: 'Je vais examiner votre message et répondre sous 24 heures, souvent beaucoup plus rapidement.'
            },
            discussion: {
              title: 'Discutons',
              description: 'Nous discuterons de vos besoins de projet et trouverons ensemble la meilleure solution.'
            }
          },
          contactMethods: {
            email: 'M\'envoyer un email',
            phone: 'M\'appeler maintenant',
            whatsapp: 'Chatter sur WhatsApp',
            any: 'Me contacter'
          },
          viewProjects: 'Voir mes réalisations'
        },
        availability: {
          title: 'Disponibilité Actuelle',
          available: 'Disponible Maintenant',
          unavailable: 'Actuellement Hors Ligne',
          currentTime: 'Heure actuelle',
          hours: 'Disponible du lundi au vendredi, 9h - 18h (WAT). Pour les urgences, n\'hésitez pas à me contacter à tout moment.'
        },
        whyChoose: {
          title: 'Pourquoi Me Choisir ?',
          subtitle: 'Ce qui me distingue et fait de moi le bon choix pour votre projet',
          features: {
            response: {
              title: 'Réponse Rapide',
              description: 'Je réponds à toutes les demandes sous 24 heures, souvent beaucoup plus rapidement. Une communication rapide est essentielle au succès du projet.'
            },
            quality: {
              title: 'Qualité Garantie',
              description: 'Je livre un code de haute qualité, en suivant les meilleures pratiques et les standards de l\'industrie. Votre projet est entre de bonnes mains.'
            },
            pricing: {
              title: 'Tarification Transparente',
              description: 'Tarification claire et transparente sans frais cachés. Un devis personnalisé adapté à votre budget et à vos objectifs.'
            },
            experience: {
              title: '5 Ans d\'Expérience',
              description: 'Avec 5 ans d\'expérience en backend, mobile et DevOps, j\'apporte de l\'expertise à chaque projet.'
            },
            remote: {
              title: 'Collaboration à Distance',
              description: 'Travaillez avec moi depuis n\'importe où dans le monde. Je suis expérimenté en collaboration à distance à travers les fuseaux horaires.'
            },
            support: {
              title: 'Support Continu',
              description: 'Je fournis un support et une maintenance continus pour garantir que votre projet reste à jour et sécurisé.'
            }
          }
        },
        testimonials: {
          title: 'Ce Que Disent les Clients de Mon Travail',
          subtitle: 'Vrais témoignages de clients qui ont expérimenté ma communication et mon service',
          stats: {
            total: 'Témoignages',
            averageRating: 'Note moyenne',
            satisfaction: 'Satisfaction'
          },
          addTestimonial: 'Ajouter un témoignage',
          addTestimonialDesc: 'Vous avez travaillé avec moi ? Partagez votre expérience !',
          form: {
            title: 'Ajouter un témoignage',
            name: 'Nom *',
            namePlaceholder: 'Votre nom complet',
            role: 'Fonction / Poste *',
            rolePlaceholder: 'Ex: CEO, Développeur, Directeur...',
            company: 'Entreprise (optionnel)',
            companyPlaceholder: 'Nom de votre entreprise',
            rating: 'Note *',
            content: 'Message *',
            contentPlaceholder: 'Votre témoignage...',
            image: 'Photo (optionnel)',
            selectImage: 'Sélectionner une image',
            minLength: '10',
            cancel: 'Annuler',
            submit: 'Ajouter le témoignage',
            submitting: 'Ajout en cours...',
            success: 'Témoignage ajouté avec succès !',
            close: 'Fermer',
            removeImage: 'Supprimer l\'image',
            errors: {
              nameRequired: 'Le nom est requis',
              roleRequired: 'La fonction est requise',
              contentRequired: 'Le message est requis',
              contentTooShort: 'Le message doit contenir au moins 10 caractères',
              contentTooLong: 'Le message ne doit pas dépasser 500 caractères',
              ratingInvalid: 'La note doit être entre 1 et 5',
              imageTooLarge: 'L\'image ne doit pas dépasser 2MB',
              imageInvalid: 'Le fichier doit être une image',
              imageError: 'Erreur lors du chargement de l\'image',
              submitError: 'Une erreur est survenue lors de l\'ajout du témoignage'
            }
          },
          items: {
            client1: {
              name: 'Sarah M.',
              role: 'PDG',
              company: 'Startup Tech',
              content: 'Ben a répondu à ma demande en quelques heures et a été incroyablement professionnel tout au long du projet. Sa communication était claire et il me tenait toujours informée.'
            },
            client2: {
              name: 'Jean-Pierre K.',
              role: 'Directeur',
              company: 'Institution Éducative',
              content: 'Travailler avec Ben a été un plaisir. Il a rapidement compris nos besoins et a livré exactement ce que nous avions demandé. Je recommande vivement ses services !'
            },
            client3: {
              name: 'Marie L.',
              role: 'Fondatrice',
              company: 'Entreprise E-commerce',
              content: 'La réactivité de Ben et son attention aux détails ont rendu notre collaboration fluide. Il était toujours disponible pour répondre aux questions et fournir des mises à jour.'
            }
          }
        }
      },
      seo: {
        default: {
          title: 'Kone Djibril (Ben Djibril) - Fondateur & CEO · Développeur & Ingénieur informaticien | Portfolio',
          description: 'Kone Djibril (Ben Djibril) — Fondateur & CEO de Kobe Corporation, développeur et ingénieur informaticien. Sites, apps et outils digitaux pour les entreprises. Devis gratuits.',
          keywords: 'Kone Djibril, Ben Djibril, Kobe Corporation, Fondateur CEO, développeur, ingénieur informaticien, développement web, apps mobiles, e-commerce, Cameroun, portfolio'
        },
        ogImageAlt: 'Kone Djibril (Ben Djibril) — Fondateur & CEO, Développeur & Ingénieur informaticien',
        home: {
          title: 'Kone Djibril (Ben Djibril) - Fondateur & CEO · Développeur & Ingénieur informaticien | Portfolio',
          description: 'Kone Djibril (Ben Djibril) — Fondateur & CEO de Kobe Corporation. Développeur et ingénieur informaticien avec 5 ans d\'expérience, j\'aide les entreprises à grandir grâce à des sites, apps et outils digitaux.',
          keywords: 'Kone Djibril, Ben Djibril, Kobe Corporation, Fondateur CEO, développeur, ingénieur informaticien, entrepreneur, développement web, apps mobiles, portfolio'
        },
        services: {
          title: 'Services - Kone Djibril (Ben Djibril) | Web, Mobile & Outils Métier',
          description: 'Sites web, apps mobiles, e-commerce et logiciels métier par Kone Djibril — Fondateur & CEO de Kobe Corporation. Devis gratuits disponibles.',
          keywords: 'services Ben Djibril, services Kone Djibril, développement web, apps mobiles, e-commerce, logiciels métier, Kobe Corporation',
          schemaName: 'Kone Djibril — Services de développement de produits digitaux'
        },
        projects: {
          title: 'Projets - Kone Djibril (Ben Djibril) | Réalisations Clients',
          description: 'Découvrez les projets de Kone Djibril (Ben Djibril) : applications web, apps mobiles, e-commerce et outils métier livrés pour de vraies entreprises.',
          keywords: 'projets Ben Djibril, portfolio Kone Djibril, applications web, apps mobiles, e-commerce, études de cas'
        },
        about: {
          title: 'À propos - Kone Djibril (Ben Djibril) | Développeur, Ingénieur informaticien & Fondateur',
          description: 'Découvrez Kone Djibril (Ben Djibril) : développeur et ingénieur informaticien, Fondateur & CEO de Kobe Corporation. 5 ans d\'expérience, stack, certifications et approche.',
          keywords: 'à propos Ben Djibril, Kone Djibril Benjamin, développeur, ingénieur informaticien, Fondateur CEO Kobe Corporation, certifications, expérience'
        },
        contact: {
          title: 'Contact - Kone Djibril (Ben Djibril) | Devis gratuit sous 24h',
          description: 'Contactez Kone Djibril (Ben Djibril) pour votre prochain projet digital. Devis gratuits, réponse sous 24h. Disponible dans le monde entier.',
          keywords: 'contacter Ben Djibril, contacter Kone Djibril, devis gratuit, Kobe Corporation, projet web mobile'
        }
      },
      notFound: { title: 'Page introuvable', back: 'Retour à l\'accueil' },
    }
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLang,
    fallbackLng: 'fr',
    interpolation: { escapeValue: false },
  })

export default i18n


