import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/outils', label: 'Outils IA' },
    { to: '/blog', label: 'Blog' },
    { to: '/a-propos', label: 'À propos' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* LOGO + TEXTE */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="https://res.cloudinary.com/roq3tbxs/image/upload/v1789481875/Logo-Icon.png"
              alt="GeniVexa"
              className="h-16 md:h-20 w-auto transition-transform group-hover:scale-110"
            />
            <span
              className="text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent"
              style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}
            >
              GeniVexa
            </span>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  isActive(link.to)
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* BOUTON MOBILE */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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

        {/* MENU MOBILE */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg font-semibold transition-colors ${
                    isActive(link.to)
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
