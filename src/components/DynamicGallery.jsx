import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function DynamicGallery() {
  const [images, setImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  // Récupération des images via Unsplash
  useEffect(() => {
    const randomPage = Math.floor(Math.random() * 10) + 1
    // ⚠️ REMPLACEZ VOTRE_ACCESS_KEY_UNSPLASH PAR VOTRE CLÉ
    fetch(`https://api.unsplash.com/search/photos?query=artificial-intelligence,technology,robot&per_page=8&page=${randomPage}&client_id=2QIJ9l8c85933XyIakeAjUISNUIQvo3eEHxrRO9AQJY`)
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
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
      
      {/* IMAGES EN ARRIÈRE-PLAN */}
      {images.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}
        >
          <img 
            src={img.urls.regular} 
            alt={img.alt_description || "AI Image"} 
            className="w-full h-full object-cover" 
          />
          {/* Overlay sombre pour faire ressortir le texte */}
          <div className="absolute inset-0 bg-black/50"></div> 
        </div>
      ))}

      {/* CONTENU (TITRE ET BOUTONS) */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block bg-primary-100/20 backdrop-blur text-primary-100 font-semibold px-4 py-2 rounded-full text-sm mb-6">
          🚀 +50 outils IA testés et approuvés
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Automatisez votre business avec les{' '}
          <span className="text-primary-400">meilleurs outils IA</span>
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Découvrez, comparez et choisissez les outils d'intelligence artificielle qui transformeront votre productivité.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/outils" className="btn-primary">
            Explorer les outils
          </Link>
          <Link to="/blog" className="btn-secondary">
            Lire le blog
          </Link>
        </div>
      </div>

            {/* INDICATEURS (POINTS) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  )
}
