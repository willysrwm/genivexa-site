import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ToolCard from '../components/ToolCard'
import { tools } from '../data/tools'

export default function Home() {
  const featuredTools = tools.slice(0, 6)
  const categories = [...new Set(tools.map(tool => tool.category))]

  return (
    <div>
      <Hero />

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
              Outils populaires
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

      {/* CTA */}
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
