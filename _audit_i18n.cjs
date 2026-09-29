const fs = require('fs')
const path = 'src/i18n/index.ts'
let s = fs.readFileSync(path, 'utf8')

const replacements = [
  // EN home hero
  ["title: 'DevOps Engineer',\n        brand: 'Kone Djibril',\n        roleTag: 'Entrepreneur',\n        subtitle: 'I design digital products that scale — for startups and established teams.',",
   "title: 'Founder & CEO',\n        brand: 'Kone Djibril',\n        roleTag: 'Kobe Corporation',\n        subtitle: 'I help businesses grow with clear digital products — websites, apps and business tools that deliver results.',"],
  ["card1: { title: 'Mobile Applications', desc: 'Cross-platform apps with Kotlin Multiplatform.' },\n        card2: { title: 'Web apps', desc: 'Scalable, secure, business‑oriented.' },\n        card3: { title: 'E‑commerce', desc: 'Conversion, performance, internationalization.' },",
   "card1: { title: 'Mobile Applications', desc: 'Apps for iOS & Android that your customers actually use.' },\n        card2: { title: 'Web apps', desc: 'Business tools that simplify your daily operations.' },\n        card3: { title: 'E‑commerce', desc: 'Online stores built to convert and grow with you.' },"],
  ["subtitle: 'Medior Developer | 5 Years of Experience | DevOps Engineer',\n          bio: 'Hi, I\\'m Kone Djibril Benjamin, but you can call me Ben Djibril. I\\'m a Medior Developer with 5 years of experience, specializing in backend development with Spring Boot and mobile development with Kotlin (not just native). I\\'m passionate about creating robust, scalable digital solutions that help businesses thrive in the digital age.',\n          bioExtended: 'As a DevOps Engineer, I excel in backend and mobile development, with solid frontend skills that make me a complete full-stack developer. My expertise spans from building RESTful APIs with Spring Boot to crafting cross-platform mobile applications with Kotlin Multiplatform. I also integrate AI into products and automate workflows to improve reliability, speed, and delivery quality. I work extensively with modern cloud technologies, containerization, and CI/CD pipelines to deliver high-quality solutions.',",
   "subtitle: 'Founder & CEO of Kobe Corporation · Entrepreneur · 5 years of experience',\n          bio: 'Hi, I\\'m Kone Djibril Benjamin — also known as Ben Djibril. I am an entrepreneur, Founder and CEO of Kobe Corporation. For 5 years I have helped companies and individuals turn ideas into digital products that work: websites, mobile apps and business tools. I combine a builder mindset with a founder\\'s vision to deliver results that move your business forward.',\n          bioExtended: 'Beyond building products for clients, I lead Kobe Corporation as Founder & CEO. That entrepreneurial experience shapes how I work: clear priorities, realistic timelines, and solutions designed for growth — not just for launch day. I stay hands-on on delivery when needed, while keeping the conversation focused on your business goals, not on jargon.',"],
  ["level: 'Level',",
   "level: 'Role',\n          levelValue: 'CEO',\n          company: 'Company',\n          companyValue: 'Kobe Corporation',"],
  ["roleValue: 'DevOps Engineer / Full-Stack Developer',",
   "roleValue: 'Founder & CEO — Kobe Corporation',"],
  ["heroDescription: 'Web, mobile, e-commerce, APIs and DevOps — tailored solutions to ship products that scale.',",
   "heroDescription: 'Websites, mobile apps, e-commerce and business tools — built to support your growth, with clear communication from day one.',"],
  ["answer: 'Pricing depends on the scope, complexity, and timeline of your project. I offer both SaaS (subscription-based) and Full Control (one-time payment) models. Contact me for a free, personalized quote.'",
   "answer: 'Pricing depends on the scope, complexity and timeline of your project. Every quote is personalized — contact me for a free estimate with no obligation.'"],
  ["description: 'Clear, upfront pricing with no hidden fees. Choose between SaaS or Full Control models that fit your budget.'",
   "description: 'Clear, upfront pricing with no hidden fees. A personalized quote adapted to your budget and goals.'"],
  ["description: 'Ben Djibril (Kone Djibril Benjamin) - Professional development services: Web applications, Mobile apps, E-commerce, APIs, DevOps & Cloud. SaaS and Full Control billing models. Free quotes available.',",
   "description: 'Kone Djibril (Ben Djibril) — Founder & CEO of Kobe Corporation. Websites, mobile apps, e-commerce and business tools for companies. Free quotes available.',"],

  // FR home hero
  ["title: 'Ingénieur DevOps',\n        brand: 'Kone Djibril',\n        roleTag: 'Entrepreneur',\n        subtitle: 'Je conçois des produits digitaux qui scalent — pour startups et équipes établies.',",
   "title: 'Fondateur & CEO',\n        brand: 'Kone Djibril',\n        roleTag: 'Kobe Corporation',\n        subtitle: 'J\\'aide les entreprises à grandir avec des produits digitaux clairs — sites, applications et outils métier qui apportent des résultats.',"],
  ["card1: { title: 'Applications Mobile', desc: 'Applications cross-platform avec Kotlin Multiplatform.' },\n        card2: { title: 'Apps web', desc: 'Scalables, sécurisées, orientées business.' },\n        card3: { title: 'E‑commerce', desc: 'Conversion, performance, internationalisation.' },",
   "card1: { title: 'Applications Mobile', desc: 'Des apps iOS & Android que vos clients utilisent vraiment.' },\n        card2: { title: 'Apps web', desc: 'Des outils métier qui simplifient votre quotidien.' },\n        card3: { title: 'E‑commerce', desc: 'Des boutiques en ligne pensées pour convertir et grandir.' },"],
]

// FR about - need to find exact strings
const frAboutOld = `subtitle: 'Développeur Médior | 5 ans d\\'expérience | Ingénieur DevOps',
          bio: 'Bonjour, je suis Kone Djibril Benjamin, mais vous pouvez m\\'appeler Ben Djibril. Je suis un développeur Médior avec 5 ans d\\'expérience, spécialisé en développement backend avec Spring Boot et en développement mobile avec Kotlin (pas que du natif). Je suis passionné par la création de solutions digitales robustes et scalables qui aident les entreprises à prospérer à l\\'ère du numérique.',`

// Read file and find FR bioExtended similarly after running first replacements

for (const [a, b] of replacements) {
  if (!s.includes(a)) {
    console.log('MISSING:', a.slice(0, 80))
  } else {
    s = s.replace(a, b)
    console.log('OK:', a.slice(0, 50))
  }
}

fs.writeFileSync(path, s)
console.log('done pass1')
