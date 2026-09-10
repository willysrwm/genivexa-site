import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold">GeniVexa</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Découvrez les meilleurs outils IA et solutions d'automatisation pour booster votre productivité et développer votre business.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">Accueil</Link></li>
              <li><Link to="/outils" className="text-gray-400 hover:text-primary-400 transition-colors">Outils IA</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-primary-400 transition-colors">Blog</Link></li>
              <li><Link to="/a-propos" className="text-gray-400 hover:text-primary-400 transition-colors">À propos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Mentions légales</span></li>
              <li><span className="text-gray-400">Politique de confidentialité</span></li>
              <li><span className="text-gray-400">Affiliation</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GeniVexa. Tous droits réservés.</p>
          <p className="text-sm mt-2">
            Certains liens sur ce site sont des liens d'affiliation. Nous pouvons percevoir une commission sans frais supplémentaires pour vous.
          </p>
        </div>
      </div>
    </footer>
  )
}