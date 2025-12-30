export default function ProductCard({ product }) {
  return (
    <article className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        {product.image ? (
          <img src={product.image} alt={product.name} className="object-contain h-full" />
        ) : (
          <div className="text-gray-400">No image</div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-blue-600 font-bold text-xl mb-3">${product.price}</p>
        <p className="text-sm text-gray-600 mb-4 flex-1">{product.description}</p>
        <div className="mt-auto">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition">View / Buy</button>
        </div>
      </div>
    </article>
  )
}
