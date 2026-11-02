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

  if (loading) return <div className="text-center py-10 text-gray-500">Loading news...</div>

  return (
    <section className="py-16 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TITRE */}
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-700 font-bold px-4 py-2 rounded-full text-sm mb-4 inline-block">
            📰 AI NEWS — UPDATED
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What's happening in <span className="text-blue-600">AI</span>
          </h2>
          <p className="text-gray-600">
            The latest AI news curated for you.
          </p>
        </div>

        {/* BANDEAU FLASH INFO (Style dégradé Orange/Violet) */}
        {news.length > 0 && (
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row">
            <div className="bg-yellow-500 text-white font-bold px-6 py-4 flex items-center gap-2 whitespace-nowrap z-10">
              ⚡ INFO FLASH
            </div>
            <div className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden flex items-center px-6 py-4">
              <div className="animate-marquee whitespace-nowrap text-white font-medium flex gap-12">
                <span>
                  <span className="font-bold">2026 — </span>
                  {news[0].title}
                </span>
                <span>
                  🔥 <span className="font-bold">AI Update — </span>
                  {news[1].title}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* GRILLE DES 4 CARTES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col border border-gray-100 relative"
            >
              {/* Bordure colorée en haut (comme sur l'ancienne capture) */}
              <div className={`h-2 w-full ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-purple-500' : index === 2 ? 'bg-teal-500' : 'bg-blue-400'}`}></div>
              
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                    🤖 AI NEWS
                  </span>
                  <span className="text-xs text-gray-400">
                    {Math.floor((new Date() - new Date(item.pubDate)) / (1000 * 60 * 60))}h ago
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 mb-3 line-clamp-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 flex-grow">
                  {item.description.replace(/<[^>]*>?/gm, '').substring(0, 100)}...
                </p>
                <span className="text-blue-600 font-semibold text-sm mt-4">
                  Read more →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
