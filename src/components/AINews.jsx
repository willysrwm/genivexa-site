import { useEffect, useState } from 'react'

const RSS_URL = 'https://techcrunch.com/category/artificial-intelligence/feed/'
const API_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(RSS_URL)}`

export default function AINews() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(data.contents, 'text/xml')
        const items = xmlDoc.querySelectorAll('item')

        const parsedNews = Array.from(items).slice(0, 4).map(item => {
          const title = item.querySelector('title')?.textContent || ''
          const link = item.querySelector('link')?.textContent || ''
          const pubDate = item.querySelector('pubDate')?.textContent || ''

          // Description nettoyée
          const descHtml = item.querySelector('description')?.textContent || ''
          const tmp = document.createElement('div')
          tmp.innerHTML = descHtml
          const description = tmp.textContent || tmp.innerText || ''

          // Extraction de l'image
          let thumbnail = ''
          const mediaContent = item.getElementsByTagName('media:content')[0]
          const enclosure = item.querySelector('enclosure')
          const imgInDesc = tmp.querySelector('img')

          if (mediaContent && mediaContent.getAttribute('url')) {
            thumbnail = mediaContent.getAttribute('url')
          } else if (enclosure && enclosure.getAttribute('url')) {
            thumbnail = enclosure.getAttribute('url')
          } else if (imgInDesc && imgInDesc.getAttribute('src')) {
            thumbnail = imgInDesc.getAttribute('src')
          }

          return { title, link, description, pubDate, thumbnail }
        })

        setNews(parsedNews)
        setLoading(false)
      })
      .catch(err => {
        console.error('Erreur fetch news:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold px-4 py-2 rounded-full text-sm mb-4 animate-pulse">
            📰 ACTUALITÉS IA EN DIRECT
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Chargement des dernières news...
          </h2>
          <div className="animate-pulse text-gray-400 text-2xl">⏳</div>
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
            📰 ACTUALITÉS IA — MIS À JOUR EN DIRECT
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Ce qui se passe <span className="text-blue-600">dans l'IA</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Les dernières news IA sélectionnées automatiquement depuis TechCrunch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item, index) => {
            const date = new Date(item.pubDate)
            const dayAgo = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24))
            const timeAgo = dayAgo === 0 ? "Aujourd'hui" : dayAgo === 1 ? "Hier" : `Il y a ${dayAgo} jours`

            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-400"
              >
                {item.thumbnail ? (
                  <div className="h-40 overflow-hidden bg-gray-100">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => { e.target.parentElement.style.display = 'none' }}
                    />
                  </div>
                ) : (
                  <div className="h-40 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <span className="text-5xl">🤖</span>
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      🔥 IA NEWS
                    </span>
                    <span className="text-xs text-gray-400">{timeAgo}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs line-clamp-2 mb-3">
                    {item.description.slice(0, 120)}...
                  </p>
                  <span className="text-blue-600 font-semibold text-xs">
                    Lire l'article →
                  </span>
                </div>
              </a>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            📩 Source : TechCrunch AI — Mise à jour automatique
          </p>
        </div>
      </div>
    </section>
  )
}
