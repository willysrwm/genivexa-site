import { useEffect, useState } from 'react'

export default function AINews() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/ai-news.json')
      .then(res => res.json())
      .then(data => {
        if (data.articles && data.articles.length > 0) {
          setNews(data.articles)
        }
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
        <div className="text-center mb-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-400 flex flex-col"
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
                  <p className="text-gray-500 text-xs mb-4 flex-grow">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{item.source}</span>
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
    </section>
  )
}
