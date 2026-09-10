import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-xl font-bold text-gray-900">GeniVexa</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Accueil
            </Link>
            <Link to="/outils" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Outils IA
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Blog
            </Link>
            <Link to="/a-propos" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              À propos
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-primary-600 font-medium" onClick={() => setIsOpen(false)}>
                Accueil
              </Link>
              <Link to="/outils" className="text-gray-600 hover:text-primary-600 font-medium" onClick={() => setIsOpen(false)}>
                Outils IA
              </Link>
              <Link to="/blog" className="text-gray-600 hover:text-primary-600 font-medium" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
              <Link to="/a-propos" className="text-gray-600 hover:text-primary-600 font-medium" onClick={() => setIsOpen(false)}>
                À propos
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}