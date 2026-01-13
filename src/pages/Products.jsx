import { useState, useEffect, useCallback } from "react"

export default function Products() {
  const [allProducts, setAllProducts] = useState([])

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3002';

  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/products`)
      if (response.ok) {
        const data = await response.json()
        // Only admin-uploaded products
        const adminProducts = data.map(product => ({
          id: product._id,
          name: product.name,
          price: product.price || 0,
          image: product.image.startsWith('http') ? product.image : `${API_BASE_URL}${product.image}`,
          category: product.category || "General",
          description: product.description,
          mainFeature: product.description,
          keyFeatures: Array.isArray(product.keyFeatures) ? product.keyFeatures : [product.description],
          material: product.material,
          compatibility: product.compatibility,
          bestFor: product.bestFor,
          warranty: product.warranty,
          isAdminProduct: true
        }))

        setAllProducts(adminProducts)
      } else {
        setAllProducts([])
      }
    } catch (err) {
      console.error('Error fetching products:', err)
      setAllProducts([])
    }
  }, [API_BASE_URL])

  // No static products - only admin-uploaded products will be shown

  useEffect(() => {
    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProduct, setSelectedProduct] = useState(null)

  const categories = ["All", "Smart Locks", "Digital Locks", "Lock Cylinders", "Door Hardware", "General"]

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-full">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Security Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Our Products
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto px-4">
            Professional locks and door hardware for residential and commercial security
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-100/50 border border-gray-300 rounded-2xl px-6 py-4 pl-14 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-gray-100/50 text-gray-700 border border-gray-300 hover:border-blue-500/50 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Counter */}
          <div className="text-center text-gray-600 text-sm">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map(product => (
              <div key={product.id} className="group relative bg-gray-100/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-300/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white text-xs font-bold shadow-lg">
                    {product.category}
                  </div>
                  
                  {/* View Details Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-end">
                    <button className="w-11 h-11 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 group/btn">
                      <svg className="w-5 h-5 text-black group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6 border border-gray-300">
              <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("All")
              }}
              className="text-blue-600 hover:text-blue-500 font-semibold"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        {filteredProducts.length > 0 && (
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-gray-100 to-white rounded-2xl p-12 border border-gray-300/50">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                Contact us for specialized locks, master key systems, or commercial security installations
              </p>
              <a
                href={`https://wa.me/250786902982?text=${encodeURIComponent("Hi! I visited your HomeAccessories website and I'm interested in your products. Can you help me find what I'm looking for?")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contact Us on WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* Product Details Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-100 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-300">
              <div className="flex flex-col lg:flex-row">
                {/* Product Image - Left Side */}
                <div className="relative lg:w-1/2">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-64 lg:h-full object-contain rounded-t-2xl lg:rounded-l-2xl lg:rounded-t-none"
                  />
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white text-xs font-bold">
                      {selectedProduct.category}
                    </span>
                  </div>
                </div>

                {/* Product Description - Right Side */}
                <div className="lg:w-1/2 p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProduct.name}</h2>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">{selectedProduct.mainFeature}</p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Key Features:</h3>
                    <ul className="text-gray-700 space-y-1">
                      {selectedProduct.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {selectedProduct.power && (
                      <div>
                        <span className="text-blue-600 font-semibold">Power:</span>
                        <span className="text-gray-700 ml-2">{selectedProduct.power}</span>
                      </div>
                    )}
                    {selectedProduct.compatibility && (
                      <div>
                        <span className="text-blue-600 font-semibold">Compatibility:</span>
                        <span className="text-gray-700 ml-2">{selectedProduct.compatibility}</span>
                      </div>
                    )}
                    {selectedProduct.bestFor && (
                      <div>
                        <span className="text-blue-600 font-semibold">Best For:</span>
                        <span className="text-gray-700 ml-2">{selectedProduct.bestFor}</span>
                      </div>
                    )}
                    {selectedProduct.warranty && (
                      <div>
                        <span className="text-blue-600 font-semibold">Warranty:</span>
                        <span className="text-gray-700 ml-2">{selectedProduct.warranty}</span>
                      </div>
                    )}
                    {selectedProduct.material && (
                      <div>
                        <span className="text-blue-600 font-semibold">Material:</span>
                        <span className="text-gray-700 ml-2">{selectedProduct.material}</span>
                      </div>
                    )}
                    {selectedProduct.sizeOptions && (
                      <div>
                        <span className="text-blue-600 font-semibold">Size Options:</span>
                        <span className="text-gray-700 ml-2">{selectedProduct.sizeOptions}</span>
                      </div>
                    )}
                    {selectedProduct.lengthOptions && (
                      <div>
                        <span className="text-blue-600 font-semibold">Length Options:</span>
                        <span className="text-gray-700 ml-2">{selectedProduct.lengthOptions}</span>
                      </div>
                    )}
                    {selectedProduct.keysIncluded && (
                      <div>
                        <span className="text-blue-600 font-semibold">Keys Included:</span>
                        <span className="text-gray-700 ml-2">{selectedProduct.keysIncluded}</span>
                      </div>
                    )}
                    {selectedProduct.included && (
                      <div>
                        <span className="text-blue-600 font-semibold">Included:</span>
                        <span className="text-gray-700 ml-2">{selectedProduct.included}</span>
                      </div>
                    )}
                    {selectedProduct.package && (
                      <div>
                        <span className="text-blue-600 font-semibold">Package:</span>
                        <span className="text-gray-700 ml-2">{selectedProduct.package}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                    <span className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                      {selectedProduct.price.toLocaleString()} RWF
                    </span>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={`https://wa.me/250786902982?text=${encodeURIComponent(`Hi! I'm interested in the ${selectedProduct.name}. Can you provide more details about this product? Price: ${selectedProduct.price.toLocaleString()} RWF`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 border-2 border-green-500 text-green-600 px-6 py-4 rounded-full font-bold hover:bg-green-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 hover:scale-105 text-center text-lg group"
                    >
                      <svg className="w-5 h-5 inline mr-2 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
