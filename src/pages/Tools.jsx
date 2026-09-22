import { useState } from 'react'
import ToolCard from '../components/ToolCard'
import { tools } from '../data/tools'

export default function Tools() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState('default')

  const categories = ['Tous', ...new Set(tools.map(tool => tool.category))]

  // Filtrer par catégorie
  let filteredTools = selectedCategory === 'Tous'
    ? tools
    : tools.filter(tool => tool.category === selectedCategory)

  // Filtrer par recherche
  if (searchQuery.trim()) {
    filteredTools = filteredTools.filter(tool =>
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  // Trier alphabétiquement
  if (sortOrder === 'az') {
    filteredTools = [...filteredTools].sort((a, b) => a.name.localeCompare(b.name))
  } else if (sortOrder === 'za') {
    filteredTools = [...filteredTools].sort((a, b) => b.name.localeCompare(a.name))
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tous les outils IA
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comparatifs détaillés, avis honnêtes et liens directs pour tester chaque outil.
          </p>
        </div>

        {/* Barre de recherche et tri */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="🔍 Rechercher un outil par nom..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 pl-12 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors text-gray-800"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
              🔍
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors bg-white font-medium"
          >
            <option value="default">Tri par défaut</option>
            <option value="az">Alphabétique (A → Z)</option>
            <option value="za">Alphabétique (Z → A)</option>
          </select>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Compteur de résultats */}
        <div className="text-center text-sm text-gray-500 mb-6">
          {filteredTools.length} outil{filteredTools.length > 1 ? 's' : ''} trouvé{filteredTools.length > 1 ? 's' : ''}
        </div>

        {/* Grille */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400 mb-2">😔</p>
            <p className="text-gray-600 font-medium">
              Aucun outil ne correspond à "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('Tous')
              }}
              className="mt-4 text-primary-600 hover:text-primary-700 font-semibold"
            >
              Réinitialiser la recherche
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
