import { useState, useEffect } from 'react'

export default function DynamicGallery() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // On cherche des images sur le thème de l'IA
    fetch("https://api.unsplash.com/search/photos?query=artificial-intelligence,technology,robot&per_page=6&client_id=2QIJ9l8c85933XyIakeAjUISNUIQvo3eEHxrRO9AQJY")
      .then(res => res.json())
      .then(data => {
        if (data.results) {
          setImages(data.results)
        }
        setLoading(false)
      })
      .catch(err => {
        console.error("Erreur chargement galerie:", err)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="text-center py-10 text-gray-500">Loading gallery...</div>

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="bg-primary-100 text-primary-700 font-bold px-4 py-2 rounded-full text-sm mb-4 inline-block">
            📸 AI IN ACTION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            AI in images
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((img, index) => (
            <a 
              key={index} 
              href={img.links.html} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden aspect-square"
            >
              <img 
                src={img.urls.small} 
                alt={img.alt_description || "AI Image"} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xs font-semibold px-2 text-center">Voir sur Unsplash</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
