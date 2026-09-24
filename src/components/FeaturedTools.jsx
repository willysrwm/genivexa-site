import { Link } from 'react-router-dom'
import { tools } from '../data/tools'

export default function FeaturedTools() {
  // IDs des outils avec liens affiliés ACTIFS
  const featuredToolIds = [37, 51, 52] // Make, Notta AI, Systeme.io

  const featuredTools = featuredToolIds
    .map(id => tools.find(t => t.id === id))
    .filter(Boolean)

  if (featuredTools.length === 0) return null

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 border-y-2 border-emerald-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre de section */}
        <div className="text-center mb-12">
          <span className="inline-block bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold px-4 py-2 rounded-full text-sm mb-4 animate-pulse">
            💎 SÉLECTION PREMIUM
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Nos outils <span className="text-emerald-600">coup de cœur</span> 2026
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Les 3 outils que nous utilisons personnellement chaque jour. Testés, approuvés, recommandés.
          </p>
        </div>

        {/* Grille des outils mis en avant */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTools.map((tool, index) => (
            <Link
              key={tool.id}
              to="/outils"
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-emerald-300 hover:border-emerald-500"
              style={{
                animation: `glow 2s ease-in-out infinite alternate`,
                animationDelay: `${index * 0.3}s`
              }}
            >
              {/* Badge animé */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                ⭐ TOP {index + 1}
              </div>

              {/* Icône */}
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">{tool.icon}</span>
              </div>

              {/* Catégorie */}
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                {tool.category}
              </span>

              {/* Nom */}
              <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2 group-hover:text-emerald-600 transition-colors">
                {tool.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {tool.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-4">
                {tool.features.slice(0, 2).map((feature, i) => (
                  <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {feature}
                  </span>
                ))}
              </div>

              {/* Prix + CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm font-semibold text-emerald-600">
                  {tool.pricing}
                </span>
                <a
                  href={tool.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold px-5 py-2 rounded-xl hover:shadow-lg transition-all transform hover:scale-105 text-sm"
                >
                  Essayer gratuitement →
                </a>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA vers tous les outils */}
        <div className="text-center mt-10">
          <Link
            to="/outils"
            className="inline-block text-emerald-600 hover:text-emerald-700 font-bold text-lg"
          >
            Voir les 50+ outils IA →
          </Link>
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes glow {
          from {
            box-shadow: 0 10px 25px rgba(16, 185, 129, 0.2);
          }
          to {
            box-shadow: 0 10px 35px rgba(16, 185, 129, 0.4);
          }
        }
      `}</style>
    </section>
  )
}
