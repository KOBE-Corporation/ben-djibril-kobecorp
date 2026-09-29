const fs = require('fs')

const files = [
  'src/components/service/ServiceInfoDialog.tsx',
  'src/components/service/ServiceDetailsDialog.tsx',
  'src/components/contact/ContactFAQ.tsx',
  'README.md',
]

const replacements = [
  ['Ã©', 'é'],
  ['Ã¨', 'è'],
  ['Ãª', 'ê'],
  ['Ã«', 'ë'],
  ['Ã ', 'à'],
  ['Ã¢', 'â'],
  ['Ã¤', 'ä'],
  ['Ã§', 'ç'],
  ['Ã®', 'î'],
  ['Ã¯', 'ï'],
  ['Ã´', 'ô'],
  ['Ã¶', 'ö'],
  ['Ã¹', 'ù'],
  ['Ã»', 'û'],
  ['Ã¼', 'ü'],
  ['Ã€', 'À'],
  ['Ã‰', 'É'],
  ['Ãˆ', 'È'],
  ['Ã‡', 'Ç'],
  ['Å“', 'œ'],
  ['â€™', "'"],
  ['â€œ', '"'],
  ['â€', '"'],
  ['â€¢', '•'],
  ['â†’', '→'],
  ['â€”', '—'],
  ['â€“', '–'],
]

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.log('skip missing', file)
    continue
  }
  let source = fs.readFileSync(file, 'utf8')
  const beforeBad = (source.match(/Ã.|â.|Å./g) || []).length
  let next = source
  for (const [from, to] of replacements) {
    next = next.split(from).join(to)
  }
  const afterBad = (next.match(/Ã.|â.|Å./g) || []).length
  if (next !== source) {
    fs.writeFileSync(file, next, 'utf8')
    console.log('fixed', file, beforeBad, '->', afterBad)
  } else {
    console.log('unchanged', file, 'bad=', beforeBad)
  }
}
