import cvEn from '../assets/resume/CV_KONE_DJIBRIL_EN.pdf'
import cvFr from '../assets/resume/CV_KONE_DJIBRIL_FR.pdf'

export function getCvDownload(lang: string): { href: string; filename: string } {
  const isFr = lang.toLowerCase().startsWith('fr')
  return {
    href: isFr ? cvFr : cvEn,
    filename: isFr ? 'CV_KONE_DJIBRIL_FR.pdf' : 'CV_KONE_DJIBRIL_EN.pdf',
  }
}
