import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block bg-primary-100 text-primary-700 font-semibold px-4 py-2 rounded-full text-sm mb-6">
            🚀 +50 outils IA testés et approuvés
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Automatisez votre business avec les{' '}
            <span className="text-primary-600">meilleurs outils IA</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez, comparez et choisissez les outils d'intelligence artificielle qui transformeront votre productivité. Guides pratiques, comparatifs honnêtes, recommandations expertes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/outils" className="btn-primary">
              Explorer les outils
            </Link>
            <Link to="/blog" className="btn-secondary">
              Lire le blog
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary-600">50+</div>
              <div className="text-gray-600 text-sm">Outils référencés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">100%</div>
              <div className="text-gray-600 text-sm">Guides gratuits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">2026</div>
              <div className="text-gray-600 text-sm">Mis à jour</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}