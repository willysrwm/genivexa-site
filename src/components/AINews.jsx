import { useEffect, useState } from 'react'

export default function AINews() {
  const [news, setNews] = useState([])
  const [flash, setFlash] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/ai-news.json')
      .then(res => res.json())
      .then(data => {
        if (data.articles) setNews(data.articles)
        if (data.flash) setFlash(data.flash)
        setLoading(false)
      })
      .catch(err => {
        console.error('Erreur:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold px-4 py-2 rounded-full text-sm mb-4 animate-pulse">
            📰 ACTUALITÉS IA
          </span>
          <h2 className="text-3xl font-bold text-gray-900">Chargement...</h2>
        </div>
      </section>
    )
  }

  if (news.length === 0) return null

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 border-y-2 border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-8">
          <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold px-4 py-2 rounded-full text-sm mb-4 animate-pulse">
            📰 ACTUALITÉS IA — MIS À JOUR
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Ce qui se passe <span className="text-blue-600">dans l'IA</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Les dernières actualités IA sélectionnées pour vous.
          </p>
        </div>

        {/* ⚡ BANDE INFO FLASH — ANIMÉE + VERTICALEMENT CENTRÉE */}
        {flash.length > 0 && (
          <div className="info-flash-band flex items-center rounded-xl overflow-hidden shadow-lg mb-10 min-h-[56px]">
            {/* Badge fixe */}
            <div className="flex-shrink-0 flex items-center px-3 sm:px-4 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 z-10 h-full">
              <span className="text-lg sm:text-2xl mr-1 sm:mr-2 animate-bounce">⚡</span>
              <span className="text-white font-black text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap">
                Info Flash
              </span>
            </div>

            {/* Zone défilante */}
            <div className="flex-grow overflow-hidden py-3 min-w-0 flex items-center">
              <div className="flex animate-scroll whitespace-nowrap items-center">
                {[...flash, ...flash].map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center mx-6 text-white text-xs sm:text-sm"
                  >
                    <span className="text-yellow-300 mr-2">🔥</span>
                    <span className="font-bold mr-2 text-white">{item.title}</span>
                    <span className="text-yellow-100 italic">— {item.description}</span>
                    <span className="mx-4 text-yellow-200 text-lg">•</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Grille des 4 cartes — AVEC ANIMATION DE FOND */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item, index) => {
            const date = new Date(item.date)
            const dayAgo = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24))
            const timeAgo = dayAgo === 0 ? "Aujourd'hui" : dayAgo === 1 ? "Hier" : `Il y a ${dayAgo} jours`

            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-animated group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-400 flex flex-col"
                style={{ animationDelay: `${index * 0.8}s` }}
              >
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      🔥 IA NEWS
                    </span>
                    <span className="text-xs text-gray-400">{timeAgo}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs mb-4 flex-grow">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <span className="text-xs text-gray-500 font-medium">{item.source}</span>
                    <span className="text-blue-600 font-semibold text-xs">
                      Lire →
                    </span>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>

      {/* ⚡ ANIMATIONS CSS */}
      <style>{`
        /* Défilement horizontal du flash info */
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Animation de fond de la bande Info Flash */
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .info-flash-band {
          background: linear-gradient(90deg, #f97316, #ef4444, #ec4899, #8b5cf6, #f97316);
          background-size: 300% 100%;
          animation: gradientShift 12s ease infinite;
        }

        /* Animation de fond des cartes */
        @keyframes cardColorShift {
          0%   { background-color: #ffffff; }
          25%  { background-color: #eff6ff; }
          50%  { background-color: #f5f3ff; }
          75%  { background-color: #ecfdf5; }
          100% { background-color: #ffffff; }
        }
        .card-animated {
          animation: cardColorShift 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
