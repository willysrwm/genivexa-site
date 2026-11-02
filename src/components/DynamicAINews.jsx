import { useState, useEffect } from 'react'

export default function DynamicAINews() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechcrunch.com%2Fcategory%2Fartificial-intelligence%2Ffeed%2F")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.items) {
          setNews(data.items.slice(0, 4))
        }
        setLoading(false)
      })
      .catch((err) => {
        console.error("Erreur chargement news:", err)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="text-center py-10 text-gray-500">Chargement des actualités...</div>

  // On récupère les 2 premières news pour le bandeau défilant
  const flashNews = news.slice(0, 2)

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BANDEAU FLASH INFO DÉFILANT */}
        {flashNews.length > 0 && (
          <div className="mb-12 bg-gradient-to-r from-primary-600 to-emerald-500 rounded-2xl p-4 flex items-center overflow-hidden shadow-lg">
            <div className="bg-white text-primary-600 font-bold px-4 py-2 rounded-lg whitespace-nowrap mr-4 z-10 flex items-center gap-2">
              ⚡ FLASH INFO
            </div>
            <div className="flex-1 overflow-hidden relative h-6">
              <div className="animate-marquee whitespace-nowrap absolute text-white font-medium flex gap-8">
                {flashNews.map((item, i) => (
                  <span key={i}>
                    <span className="font-bold">2026 — </span>
                    {item.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TITRE DE LA SECTION */}
        <div className="text-center mb-12">
          <span className="bg-primary-100 text-primary-700 font-bold px-4 py-2 rounded-full text-sm mb-4 inline-block">
            📰 ACTUALITÉS IA — MIS À JOUR
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Ce qui se passe dans l'IA
          </h2>
        </div>

        {/* GRILLE DES 4 CARTES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col border border-gray-100"
            >
              <div className="p-5 flex flex-col flex-grow relative pt-8">
                
                {/* Badge IA NEWS */}
                <div className="absolute top-4 left-5 flex items-center gap-2">
                  <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                    🤖 IA NEWS
                  </span>
                  <span className="text-xs text-gray-400">
                    Il y a {Math.floor((new Date() - new Date(item.pubDate)) / (1000 * 60 * 60))} heures
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 mb-3 line-clamp-3 leading-tight mt-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 flex-grow">
                  {item.description.replace(/<[^>]*>?/gm, '').substring(0, 100)}...
                </p>
                <span className="text-primary-600 font-semibold text-sm mt-4">
                  Lire la suite →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
