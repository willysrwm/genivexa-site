import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { articles } from '../data/articles'
import BrevoForm from '../components/BrevoForm'

function renderInline(text, keyPrefix = '') {
  const tokens = []
  let lastIndex = 0
  let i = 0
  const regex = /(\*\*\[(.+?)\]\((.+?)\)\*\*|\[(.+?)\]\((.+?)\)|\*\*(.+?)\*\*)/g
  let match

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push(<span key={`t-${keyPrefix}-${i++}`}>{text.slice(lastIndex, match.index)}</span>)
    }

    if (match[2] !== undefined && match[3] !== undefined) {
      tokens.push(
        <a key={`al-${keyPrefix}-${i++}`} href={match[3]} target="_blank" rel="noopener noreferrer" className="text-primary-600 underline font-bold hover:text-primary-700">
          {match[2]}
        </a>
      )
    } else if (match[4] !== undefined && match[5] !== undefined) {
      tokens.push(
        <a key={`a-${keyPrefix}-${i++}`} href={match[5]} target="_blank" rel="noopener noreferrer" className="text-primary-600 underline font-semibold hover:text-primary-700">
          {match[4]}
        </a>
      )
    } else if (match[6] !== undefined) {
      tokens.push(
        <strong key={`b-${keyPrefix}-${i++}`} className="font-bold text-gray-900">
          {match[6]}
        </strong>
      )
    }
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    tokens.push(<span key={`t-${keyPrefix}-${i++}`}>{text.slice(lastIndex)}</span>)
  }
  return tokens
}

export default function Article() {
  const { slug } = useParams()
  const article = articles.find(a => a.slug === slug)

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <Helmet><title>Article introuvable - GeniVexa</title></Helmet>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Article introuvable</h1>
        <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-semibold">← Retour au blog</Link>
      </div>
    )
  }

  // Balises SEO dynamiques
  const pageTitle = `${article.title} | GeniVexa`
  const pageUrl = `https://genivexa.vercel.app/blog/${article.slug}`

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={article.excerpt} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-semibold text-sm mb-8 inline-block">← Retour au blog</Link>

        <header className="mb-12 pb-8 border-b border-gray-200">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-bold text-white bg-primary-500 px-4 py-1.5 rounded-full uppercase tracking-wide">{article.category}</span>
            <span className="text-sm text-gray-500">📅 {article.date}</span>
            <span className="text-sm text-gray-500">⏱️ {article.readTime} de lecture</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">{article.title}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">{article.excerpt}</p>
        </header>

        <div className="article-content space-y-4">
          {/* C'EST ICI QUE LE TEXTE EST AFFICHÉ */}
          {article.content.split('\n').map((line, index) => {
            if (line.startsWith('# ')) return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.replace('# ', '')}</h1>
            if (line.startsWith('## ')) return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{line.replace('## ', '')}</h2>
            if (line.startsWith('### ')) return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{line.replace('### ', '')}</h3>
            if (line.startsWith('- ')) return <li key={index} className="ml-6 mb-2 list-disc">{renderInline(line.replace('- ', ''), String(index))}</li>

            // Sary (Images)
            if (line.startsWith('![')) {
              const match = line.match(/!\[(.*?)\]\((.*?)\)/);
              if (match) {
                return <img key={index} src={match[2]} alt={match[1]} className="w-full rounded-xl my-6 shadow-md" />;
              }
            }
            if (line.startsWith('> ')) return <blockquote key={index} className="border-l-4 border-primary-500 pl-4 italic text-gray-600 my-4">{line.replace('> ', '')}</blockquote>
            if (line.trim() === '---') return <hr key={index} className="my-8 border-gray-300" />
            if (line.startsWith('|')) {
              const cells = line.split('|').filter(c => c.trim() !== '')
              if (cells.every(c => c.match(/^[-: ]+$/))) return null
              const isHeader = line.includes('Critère') || line.includes('---|') || (cells[0] && cells[0].includes('**'))
              return (
                <tr key={index} className="border-b border-gray-200">
                  {cells.map((cell, i) => {
                    const content = cell.trim().replace(/\*\*/g, '')
                    return isHeader ? <th key={i} className="p-3 bg-gray-50 text-left">{content}</th> : <td key={i} className="p-3">{content}</td>
                  })}
                </tr>
              )
            }
            if (line.trim() === '') return <div key={index} className="h-4"></div>
            return <p key={index} className="mb-4 text-gray-700 leading-relaxed">{renderInline(line, String(index))}</p>
          })}
        </div>

        <footer className="mt-16 pt-8 border-t-2 border-primary-100">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 text-center">
            
            {/* LOGIQUE CONDITIONNELLE POUR LE CTA (Misy 'prospection' izao) */}
            {article.slug.includes('make') || article.slug.includes('systeme-io') || article.slug.includes('jasper') || article.slug.includes('notta') || article.slug.includes('prospection') ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  💡 Prêt à passer à l'action ?
                </h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Découvrez l'outil dont nous venons de parler. Plan gratuit inclus, sans carte bancaire.
                </p>
                <a
                  href={
                    article.slug.includes('make') ? "https://www.make.com/en/register?pc=genivexa" :
                    article.slug.includes('systeme-io') || article.slug.includes('prospection') ? "https://systeme.io/fr?sa=sa0004318256e8f4bb16df8d117c373643e20b793694" :
                    article.slug.includes('jasper') ? "https://www.jasper.ai/?fpr=genivexa" :
                    "https://ypetp.com/g/7gbdp8tygu678588d05ff50bb56640/" // Lien Notta
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg hover:shadow-xl"
                >
                  🚀 Essayer {article.slug.includes('make') ? 'Make' : article.slug.includes('systeme-io') || article.slug.includes('prospection') ? 'Systeme.io' : article.slug.includes('jasper') ? 'Jasper' : 'Notta'} gratuitement
                </a>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  📩 Recevez votre Guide IA Gratuit
                </h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Inscrivez-vous pour recevoir notre guide <strong>"10 Prompts ChatGPT pour Freelances"</strong> + nos meilleures astuces IA chaque semaine.
                </p>
                <div className="max-w-md mx-auto">
                  <BrevoForm />
                </div>
              </>
            )}
            
          </div>

          <div className="mt-8 text-center">
            <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-semibold">
              ← Voir tous les articles
            </Link>
          </div>
        </footer>
      </article>
    </>
  )
}
