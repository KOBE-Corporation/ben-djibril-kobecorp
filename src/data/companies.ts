import uy2SoaLogo from '../assets/trust-company/uy2-soa.webp'
import gizLogo from '../assets/trust-company/giz-logo.jpg'
import kobeCorpLogo from '../assets/trust-company/kobe-corporation-full.png'

export type Company = {
  name: string
  logo?: string
  website: string
  /** object-cover by default; use contain for wide brand marks (e.g. GIZ) */
  logoFit?: 'cover' | 'contain'
  /** Force fond blanc derrière le logo (ex. GIZ) */
  logoOnWhite?: boolean
}

export const companies: Company[] = [
  {
    name: 'UY2 SOA',
    logo: uy2SoaLogo,
    website: 'https://www.univ-yaounde2.cm',
  },
  {
    name: 'GIZ',
    logo: gizLogo,
    website: 'https://www.giz.de',
    logoFit: 'contain',
    logoOnWhite: true,
  },
  {
    name: 'Kobe Corporation',
    logo: kobeCorpLogo,
    website: 'https://www.kobecorporation.com',
    logoFit: 'contain',
  },
]
