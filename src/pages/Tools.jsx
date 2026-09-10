import { useState } from 'react'
import ToolCard from '../components/ToolCard'
import { tools } from '../data/tools'

export default function Tools() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  
  const categories = ['Tous', ...new Set(tools.map(tool => tool.category))]
  
  const filteredTools = selectedCategory === 'Tous' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory)

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

        {/* Filtres */}
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

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  )
}
