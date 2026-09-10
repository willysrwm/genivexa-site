import { Link } from 'react-router-dom'

const articles = [
  {
    id: 1,
    title: "Top 10 des outils IA pour automatiser votre business en 2026",
    excerpt: "Découvrez les outils d'intelligence artificielle incontournables qui vous feront gagner des heures chaque semaine.",
    category: "Guides",
    date: "15 Janvier 2026",
    readTime: "8 min"
  },
  {
    id: 2,
    title: "Jasper AI vs Copy.ai : Lequel choisir pour rédiger du contenu ?",
    excerpt: "Comparatif complet entre les deux leaders de la rédaction assistée par IA. Prix, fonctionnalités, qualité.",
    category: "Comparatifs",
    date: "12 Janvier 2026",
    readTime: "12 min"
  },
  {
    id: 3,
    title: "Comment automatiser ses tâches avec Make (ex-Integromat)",
    excerpt: "Guide pas à pas pour créer vos premières automatisations sans écrire une ligne de code.",
    category: "Tutoriels",
    date: "10 Janvier 2026",
    readTime: "15 min"
  },
  {
    id: 4,
    title: "Les meilleurs outils IA gratuits pour freelances",
    excerpt: "Sélection d'outils puissants et gratuits pour booster votre productivité sans dépenser un centime.",
    category: "Guides",
    date: "8 Janvier 2026",
    readTime: "10 min"
  }
]

export default function Blog() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Blog GeniVexa
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Guides pratiques, comparatifs et tutoriels pour maîtriser les outils IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="card group cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="text-xs text-gray-500">{article.date}</span>
                <span className="text-xs text-gray-500">• {article.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {article.excerpt}
              </p>
              <span className="text-primary-600 font-semibold text-sm">
                Lire l'article →
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
