export default function ToolCard({ tool }) {
  return (
    <div className="card group">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
          <span className="text-2xl">{tool.icon}</span>
        </div>
        <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
          {tool.category}
        </span>
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
        {tool.name}
      </h3>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {tool.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tool.features.slice(0, 3).map((feature, index) => (
          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {feature}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-sm font-semibold text-primary-600">
          {tool.pricing}
        </span>
        <a
          href={tool.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg transition-colors"
        >
          Essayer →
        </a>
      </div>
    </div>
  )
}
