export default function About() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          À propos de GeniVexa
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 text-lg mb-6">
            <strong>GeniVexa</strong> est votre guide de confiance pour naviguer dans l'univers des outils d'intelligence artificielle et de l'automatisation.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Notre mission</h2>
          <p className="text-gray-600 mb-6">
            Nous testons, analysons et comparons les meilleurs outils IA du marché pour vous aider à faire le bon choix. Notre objectif : vous faire gagner du temps et de l'argent en vous orientant vers les solutions qui correspondent réellement à vos besoins.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Notre approche</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Tests approfondis de chaque outil avant recommandation</li>
            <li>Comparatifs honnêtes et transparents</li>
            <li>Guides pratiques adaptés aux débutants comme aux experts</li>
            <li>Mises à jour régulières pour refléter les évolutions du marché</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Transparence sur l'affiliation</h2>
          <p className="text-gray-600 mb-6">
            Certains liens présents sur GeniVexa sont des liens d'affiliation. Cela signifie que si vous souscrivez à un outil via ces liens, nous pouvons percevoir une commission. <strong>Cela ne change rien au prix que vous payez</strong> et nous permet de continuer à produire du contenu gratuit et de qualité.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 mt-8">
            <h3 className="font-bold text-gray-900 mb-2">💡 Une question ?</h3>
            <p className="text-gray-600">
              N'hésitez pas à nous contacter pour toute suggestion ou question.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
