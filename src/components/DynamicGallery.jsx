import { useState, useEffect } from 'react'

export default function DynamicGallery() {
  const [images, setImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  // Récupération des images via Unsplash
  useEffect(() => {
    fetch("https://api.unsplash.com/search/photos?query=artificial-intelligence,technology,robot&per_page=8&client_id=2QIJ9l8c85933XyIakeAjUISNUIQvo3eEHxrRO9AQJY")
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

  // Défilement automatique toutes les 3 secondes
  useEffect(() => {
    if (images.length === 0) return
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images])

  // Fonctions pour les flèches
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  if (loading) return <div className="text-center py-10 text-gray-500">Loading gallery...</div>
  if (images.length === 0) return null

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

        {/* CARROUSEL */}
        <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[500px] overflow-hidden rounded-3xl shadow-xl group">
          
          {/* IMAGES */}
          {images.map((img, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <img 
                src={img.urls.regular} 
                alt={img.alt_description || "AI Image"} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute bottom-8 left-8 right-8 text-center text-white">
                <p className="text-lg font-semibold">{img.alt_description || "Explore AI"}</p>
              </div>
            </div>
          ))}

          {/* FLÈCHE GAUCHE */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-white/50 hover:bg-white/90 text-gray-800 p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          {/* FLÈCHE DROITE */}
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-white/50 hover:bg-white/90 text-gray-800 p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>

          {/* INDICATEURS (POINTS) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {images.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
