import { useParams, Link } from 'react-router-dom'
import { articles } from '../data/articles'

// Helper : traite le Markdown inline (gras + liens)
function renderInline(text, keyPrefix = '') {
  const tokens = []
  let lastIndex = 0
  let i = 0

  // Regex globale qui détecte dans cet ordre :
  // 1. **lien**  →  capturé par groupes 1, 2, 3
  // 2. lien      →  capturé par groupes 4, 5
  // 3. **gras**  →  capturé par groupe 6
  const regex = /(\*\*\[(.+?)\]\((.+?)\)\*\*|\[(.+?)\]\((.+?)\)|\*\*(.+?)\*\*)/g

  let match
  while ((match = regex.exec(text)) !== null) {
    // Texte normal avant le match
    if (match.index > lastIndex) {
      tokens.push(
        <span key={`t-${keyPrefix}-${i++}`}>
          {text.slice(lastIndex, match.index)}
        </span>
      )
    }

    if (match[2] !== undefined && match[3] !== undefined) {
      // Cas 1 : **lien**
      tokens.push(
        <a
          key={`al-${keyPrefix}-${i++}`}
          href={match[3]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 underline font-bold hover:text-primary-700"
        >
          {match[2]}
        </a>
      )
    } else if (match[4] !== undefined && match[5] !== undefined) {
      // Cas 2 : lien normal
      tokens.push(
        <a
          key={`a-${keyPrefix}-${i++}`}
          href={match[5]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 underline font-semibold hover:text-primary-700"
        >
          {match[4]}
        </a>
      )
    } else if (match[6] !== undefined) {
      // Cas 3 : **gras**
      tokens.push(
        <strong key={`b-${keyPrefix}-${i++}`} className="font-bold text-gray-900">
          {match[6]}
        </strong>
      )
    }

    lastIndex = match.index + match[0].length
  }

  // Texte restant après le dernier match
  if (lastIndex < text.length) {
    tokens.push(
      <span key={`t-${keyPrefix}-${i++}`}>{text.slice(lastIndex)}</span>
    )
  }

  return tokens
}

export default function Article() {
  const { slug } = useParams()
  const article = articles.find(a => a.slug === slug)

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Article introuvable</h1>
        <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-semibold">
          ← Retour au blog
        </Link>
      </div>
    )
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-semibold text-sm mb-8 inline-block">
        ← Retour au blog
      </Link>

      <header className="mb-12 pb-8 border-b border-gray-200">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-xs font-bold text-white bg-primary-500 px-4 py-1.5 rounded-full uppercase tracking-wide">
            {article.category}
          </span>
          <span className="text-sm text-gray-500">📅 {article.date}</span>
          <span className="text-sm text-gray-500">⏱️ {article.readTime} de lecture</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          {article.title}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          {article.excerpt}
        </p>
      </header>

      <div className="article-content">
        {article.content.split('\n').map((line, index) => {
          // H1
          if (line.startsWith('# ')) {
            return <h1 key={index}>{line.replace('# ', '')}</h1>
          }
          // H2
          if (line.startsWith('## ')) {
            return <h2 key={index}>{line.replace('## ', '')}</h2>
          }
          // H3
          if (line.startsWith('### ')) {
            return <h3 key={index}>{line.replace('### ', '')}</h3>
          }
          // Listes à puces — AVEC Markdown inline
          if (line.startsWith('- ')) {
            return (
              <li key={index} className="ml-6 mb-2">
                {renderInline(line.replace('- ', ''), String(index))}
              </li>
            )
          }
          // Citations
          if (line.startsWith('> ')) {
            return <blockquote key={index}>{line.replace('> ', '')}</blockquote>
          }
          // Séparateurs
          if (line.trim() === '---') {
            return <hr key={index} />
          }
          // Tableaux
          if (line.startsWith('|')) {
            const cells = line.split('|').filter(c => c.trim() !== '')
            if (cells.every(c => c.match(/^[-: ]+$/))) {
              return null
            }
            const isHeader =
              line.includes('Critère') ||
              line.includes('---|') ||
              (cells[0] && cells[0].includes('**'))
            return (
              <tr key={index}>
                {cells.map((cell, i) => {
                  const content = cell.trim().replace(/\*\*/g, '')
                  return isHeader
                    ? <th key={i}>{content}</th>
                    : <td key={i}>{content}</td>
                })}
              </tr>
            )
          }
          // Lignes vides
          if (line.trim() === '') {
            return <br key={index} />
          }
          // Paragraphes — AVEC Markdown inline
          return (
            <p key={index}>
              {renderInline(line, String(index))}
            </p>
          )
        })}
      </div>

      <footer className="mt-16 pt-8 border-t-2 border-primary-100">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            💡 Prêt à passer à l'action ?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Découvrez Make, l'outil d'automatisation le plus puissant du marché. Plan gratuit inclus, sans carte bancaire.
          </p>
          <a
            href="https://www.make.com/en/register?pc=genivexa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg hover:shadow-xl"
          >
            🚀 Essayer Make gratuitement
          </a>
        </div>

        <div className="mt-8 text-center">
          <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-semibold">
            ← Voir tous les articles
          </Link>
        </div>
      </footer>
    </article>
  )
}
