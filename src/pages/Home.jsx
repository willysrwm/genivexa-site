import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ToolCard from '../components/ToolCard'
import { tools } from '../data/tools'
import { articles } from '../data/articles'
import FeaturedTools from '../components/FeaturedTools'

export default function Home() {
  const featuredTools = tools.slice(0, 6)
  const categories = [...new Set(tools.map(tool => tool.category))]
  const latestArticles = [...articles].reverse().slice(0, 3)

  return (
    <div>
            <Hero />
      
      {/* SECTION SÉLECTION PREMIUM */}
      <FeaturedTools />
      
      {/* Categories */}
         <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Explorez par catégorie
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                to="/outils"
                className="bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 font-medium px-6 py-3 rounded-full transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              🔥 Outils populaires
            </h2>
            <Link to="/outils" className="text-primary-600 hover:text-primary-700 font-semibold">
              Voir tout →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Blog */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                📚 Derniers articles du blog
              </h2>
              <p className="text-gray-600">
                Guides pratiques et comparatifs pour maîtriser les outils IA
              </p>
            </div>
            <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-semibold hidden md:block">
              Tous les articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className="article-card group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="category-badge text-xs font-bold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="article-meta text-xs">⏱️ {article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="article-footer flex items-center justify-between pt-4 border-t">
                  <span className="text-xs">📅 {article.date}</span>
                  <span className="read-more font-semibold text-sm">
                    Lire →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-semibold">
              Voir tous les articles →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Newsletter */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à transformer votre productivité ?
          </h2>
          <p className="text-primary-100 mb-8 text-lg">
            Recevez nos meilleurs conseils et découvertes d'outils IA directement dans votre boîte mail.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              S'inscrire
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
