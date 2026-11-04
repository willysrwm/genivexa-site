import { useState, useEffect } from 'react'

const RSS_FEEDS = [
  "https://techcrunch.com/category/artificial-intelligence/feed/",
  "https://venturebeat.com/category/ai/feed/",
  "https://www.technologyreview.com/topic/artificial-intelligence/feed/",
  "https://openai.com/news/rss.xml"
]

const fetchFeed = (feedUrl) => {
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`
  return fetch(apiUrl).then(res => res.json())
}

export default function DynamicAINews() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all(RSS_FEEDS.map(url => fetchFeed(url)))
      .then(results => {
        let allNews = []
        results.forEach(data => {
          if (data && data.items && data.status === 'ok') {
            allNews = [...allNews, ...data.items.slice(0, 2)]
          }
        })
        const shuffled = allNews.sort(() => 0.5 - Math.random())
        setNews(shuffled.slice(0, 4))
        setLoading(false)
      })
      .catch(err => {
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
            The latest AI news curated from top sources.
          </p>
        </div>

        {/* BANDEAU FLASH INFO (Animé) */}
        {news.length > 0 && (
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row group cursor-default">
            <div className="bg-yellow-500 text-white font-bold px-6 py-4 flex items-center gap-2 whitespace-nowrap z-10 transition-transform group-hover:scale-105">
              <span className="animate-pulse">⚡</span> INFO FLASH
            </div>
            <div className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden flex items-center px-6 py-4">
              <div className="animate-marquee whitespace-nowrap text-white font-medium flex gap-12">
                <span>
                  <span className="font-bold">2026 — </span>
                  {news[0]?.title}
                </span>
                <span>
                  🔥 <span className="font-bold">AI Update — </span>
                  {news[1]?.title}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* GRILLE DES 4 CARTES (Animées au survol) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 relative"
            >
              <div className={`h-2 w-full ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-purple-500' : index === 2 ? 'bg-teal-500' : 'bg-blue-400'}`}></div>
              
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1 group-hover:bg-blue-100 transition-colors">
                    🤖 AI NEWS
                  </span>
                  <span className="text-xs text-gray-400">
                    {Math.floor((new Date() - new Date(item.pubDate)) / (1000 * 60 * 60))}h ago
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 mb-3 line-clamp-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 flex-grow">
                  {item.description.replace(/<[^>]*>?/gm, '').substring(0, 100)}...
                </p>
                
                <span className="text-blue-600 font-semibold text-sm mt-4 flex items-center gap-1 transform transition-transform group-hover:translate-x-1">
                  Read more <span className="text-lg">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
