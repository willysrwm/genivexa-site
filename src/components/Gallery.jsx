import { useEffect, useState } from 'react'

export default function Gallery() {
  const [photos, setPhotos] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    fetch('/gallery.json')
      .then(res => res.json())
      .then(data => {
        if (data.photos) setPhotos(data.photos)
      })
      .catch(err => console.error('Erreur gallery:', err))
  }, [])

  // Fermer le lightbox avec Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  if (photos.length === 0) return null

  return (
    <>
      {/* Section Galerie */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold px-4 py-2 rounded-full text-sm mb-3">
              📸 EN IMAGES
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              L'IA en <span className="text-emerald-600">action</span>
            </h2>
          </div>

          {/* Grille de miniatures */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => setSelected(photo)}
                className="group relative overflow-hidden rounded-xl aspect-square shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300"
                aria-label={`Agrandir : ${photo.title}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <span className="text-white text-xs font-bold p-2 w-full text-left">
                    {photo.title}
                  </span>
                </div>
                <div className="absolute top-2 right-2 bg-white/90 rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-emerald-600 text-xs">🔍</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelected(null)}
        >
          {/* Bouton fermer */}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl transition-colors z-10"
            aria-label="Fermer"
          >
            ✕
          </button>

          {/* Image agrandie */}
          <div
            className="max-w-5xl max-h-[90vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.src.replace('w=800', 'w=1600')}
              alt={selected.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-bold">{selected.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{selected.alt}</p>
            </div>
          </div>

          {/* Navigation hint */}
          <p className="absolute bottom-4 text-gray-400 text-xs">
            Cliquez en dehors ou appuyez sur Échap pour fermer
          </p>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </>
  )
}
