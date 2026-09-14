import { useParams, Link } from 'react-router-dom'
import { articles } from '../data/articles'

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

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
            {article.category}
          </span>
          <span className="text-xs text-gray-500">{article.date}</span>
          <span className="text-xs text-gray-500">• {article.readTime} de lecture</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
        <p className="text-lg text-gray-600">{article.excerpt}</p>
      </header>

      <div className="prose prose-lg max-w-none whitespace-pre-line text-gray-700 leading-relaxed">
        {article.content}
      </div>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="bg-primary-50 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-2">💡 Besoin d'aide pour automatiser votre business ?</h3>
          <p className="text-gray-600 mb-4">Découvrez Make, l'outil d'automatisation le plus puissant du marché.</p>
          <a
            href="https://www.make.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Essayer Make gratuitement →
          </a>
        </div>
      </footer>
    </article>
  )
}
