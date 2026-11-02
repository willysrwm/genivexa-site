import { useState, useEffect } from 'react'

export default function DynamicAINews() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // URL directe pour éviter les erreurs de variables
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

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500">
        Chargement des actualités...
      </div>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="bg-primary-100 text-primary-700 font-bold px-4 py-2 rounded-full text-sm mb-4 inline-block">
            📰 ACTUALITÉS IA — MIS À JOUR
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Ce qui se passe dans l'IA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              {item.thumbnail && (
                <img src={item.thumbnail} alt={item.title} className="w-full h-40 object-cover" />
              )}
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-xs text-primary-600 font-semibold mb-2">
                  {new Date(item.pubDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                </span>
                <h3 className="font-bold text-gray-900 mb-3 line-clamp-3 leading-tight">
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
