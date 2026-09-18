import { Link } from 'react-router-dom'
import { articles } from '../data/articles'

export default function Blog() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Blog GeniVexa
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Guides pratiques, comparatifs et tutoriels pour maîtriser les outils IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.slug}`}
              className="card-blog group cursor-pointer block"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="text-xs text-gray-500">{article.date}</span>
                <span className="text-xs text-gray-500">• {article.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {article.excerpt}
              </p>
              <span className="text-primary-600 font-semibold text-sm">
                Lire l'article →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
