import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { articles } from '../data/articles'

// ... (garder la fonction renderInline telle quelle, ne pas y toucher) ...
function renderInline(text, keyPrefix = '') {
  // [COLLEZ ICI LA FONCTION renderInline EXACTEMENT COMME ELLE ÉTAIT]
  // (Je ne la réécris pas pour ne pas faire d'erreur, copiez-collez la vôtre)
}

export default function Article() {
  const { slug } = useParams()
  const article = articles.find(a => a.slug === slug)

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <Helmet>
          <title>Article introuvable - GeniVexa</title>
        </Helmet>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Article introuvable</h1>
        <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-semibold">
          ← Retour au blog
        </Link>
      </div>
    )
  }

  // On prépare les balises SEO
  const pageTitle = `${article.title} | GeniVexa`
  const pageDescription = article.excerpt
  const pageUrl = `https://genivexa.vercel.app/blog/${article.slug}`

  return (
    <>
      {/* --- BALISES SEO DYNAMIQUES POUR GOOGLE --- */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        
        {/* Balises Open Graph (pour Facebook, LinkedIn, WhatsApp) */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="GeniVexa" />
      </Helmet>

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
            // ... (gardez exactement votre code de rendu des lignes ici) ...
            // (H1, H2, Listes, Tableaux, etc.)
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
    </>
  )
}
