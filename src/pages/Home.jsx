import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ToolCard from '../components/ToolCard'
import { tools } from '../data/tools'
import { articles } from '../data/articles'
import FeaturedTools from '../components/FeaturedTools'
import AINews from '../components/AINews'
import Gallery from '../components/Gallery'

export default function Home() {
  const featuredTools = tools.slice(0, 6)
  const categories = [...new Set(tools.map(tool => tool.category))]
  const latestArticles = [...articles].reverse().slice(0, 3)

  return (
    <div>
      <Hero />
      
      {/* SECTION ACTUALITÉS IA */}
      <AINews />
       {/* Galerie photos */}
      <Gallery />
      {/* SECTION SÉLECTION PREMIUM */}
      <FeaturedTools />

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Explorez par catégorie
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                to="/outils"
                className="bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 font-medium px-6 py-3 rounded-full transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              🔥 Outils populaires
            </h2>
            <Link to="/outils" className="text-primary-600 hover:text-primary-700 font-semibold">
              Voir tout →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                📚 Derniers articles du blog
              </h2>
              <p className="text-gray-600">
                Guides pratiques et comparatifs pour maîtriser les outils IA
              </p>
            </div>
            <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-semibold hidden md:block">
              Tous les articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className="article-card group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="category-badge text-xs font-bold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="article-meta text-xs">⏱️ {article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="article-footer flex items-center justify-between pt-4 border-t">
                  <span className="text-xs">📅 {article.date}</span>
                  <span className="read-more font-semibold text-sm">
                    Lire →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-semibold">
              Voir tous les articles →
            </Link>
          </div>
        </div>
      </section>

            {/* CTA Newsletter — Brevo */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-emerald-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/20 backdrop-blur text-white font-bold px-4 py-2 rounded-full text-sm mb-4">
            📩 NEWSLETTER GRATUITE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Recevez votre Guide IA Gratuit
          </h2>
          <p className="text-primary-50 mb-8 text-lg max-w-xl mx-auto">
            Inscrivez-vous pour recevoir notre guide <strong>"10 Prompts ChatGPT pour Freelances"</strong> + nos meilleures astuces IA chaque semaine.
          </p>
          
          {/* Formulaire Brevo intégré */}
          <div className="bg-white rounded-2xl p-4 shadow-2xl max-w-xl mx-auto overflow-hidden">
            <iframe
              width="540"
              height="305"
              src="https://0fbf6b70.sibforms.com/v2/serve/MUIFAIuEbssuonv2HY8YTwdSnA2JkPwGvwWFVcCTkeuS7u50lOIRTPppef9KIyjcTJJuWkWraRu__LZFbr3SNIvNnj5J3ctef1VEl_Pig9rnaciXGfBg5LbQbLZkkLW_gCn7fobtOCFVvsfLISiS9sIzsOnHdGoOJS3wOtp1DQN84ScbtEohhAYB9BJ7rWy1osr4NOUmEosQBY9Rew=="
              frameBorder="0"
              scrolling="auto"
              allowFullScreen
              style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
            ></iframe>
          </div>

          <p className="text-primary-50 text-sm mt-4">
            🔒 Vos données sont sécurisées. Désabonnement en 1 clic.
          </p>
        </div>
      </section>
    </div>
  )
}
