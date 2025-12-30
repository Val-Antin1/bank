import { useState } from "react"

export default function Products() {
  // Mock products data - Updated for lock & door solutions
  const allProducts = [
    {
      id: 1,
      name: "Face Recognition Smart Lock",
      price: 800000,
      image: "/face_lock.jpeg",
      category: "Smart Locks",
      description: "Advanced biometric door lock with face recognition and smart access control.",
      mainFeature: "Advanced biometric door lock with face recognition and smart access control.",
      keyFeatures: [
        "Face recognition + PIN + fingerprint + card + mechanical key",
        "Fast recognition speed (<1 second)",
        "Built-in camera with night vision",
        "Indoor display screen",
        "Mobile app support (Android & iOS)",
        "Anti-tamper alarm system"
      ],
      power: "Rechargeable / AA batteries with emergency USB power",
      compatibility: "Wooden & metal doors",
      bestFor: "Homes, apartments, offices, hotels",
      warranty: "1 year"
    },
    {
      id: 2,
      name: "Keypad Door Lock",
      price: 700000,
      image: "/keypad_lock.jpeg",
      category: "Digital Locks",
      description: "Digital door lock with secure keypad access.",
      mainFeature: "Digital door lock with secure keypad access.",
      keyFeatures: [
        "PIN code + card + fingerprint + mechanical key",
        "Supports multiple users",
        "Strong metal body",
        "Auto-lock function",
        "Low battery warning"
      ],
      power: "AA batteries",
      compatibility: "Wooden & metal doors",
      bestFor: "Homes, offices, rental properties",
      warranty: "1 year"
    },
    {
      id: 3,
      name: "Euro Cylinder Lock",
      price: 10000,
      image: "/euro_cyl.jpeg",
      category: "Lock Cylinders",
      description: "High-quality mechanical lock cylinder for standard doors.",
      mainFeature: "High-quality mechanical lock cylinder for standard doors.",
      keyFeatures: [
        "Strong metal construction",
        "Smooth key operation",
        "Anti-pick design",
        "Durable and long-lasting"
      ],
      sizeOptions: "60mm / 70mm / 80mm",
      keysIncluded: "3–5 keys",
      bestFor: "Wooden & metal doors",
      warranty: "6 months"
    },
    {
      id: 4,
      name: "Door Hinge",
      price: 15000,
      image: "/hinge.jpeg",
      category: "Door Hardware",
      description: "Heavy-duty metal hinge for secure door movement.",
      mainFeature: "Heavy-duty metal hinge for secure door movement.",
      keyFeatures: [
        "Strong and durable",
        "Rust-resistant coating",
        "Smooth opening and closing"
      ],
      material: "Stainless steel / iron",
      sizeOptions: "3 inch / 4 inch / 5 inch",
      bestFor: "Wooden and metal doors",
      package: "35 piece or pair"
    },
    {
      id: 5,
      name: "Pull Door Handle",
      price: 80000,
      image: "/pull_handle.jpeg",
      category: "Door Hardware",
      description: "Modern pull handle for stylish door operation.",
      mainFeature: "Modern pull handle for stylish door operation.",
      keyFeatures: [
        "Strong metal build",
        "Modern design",
        "Comfortable grip"
      ],
      material: "Aluminum / stainless steel",
      lengthOptions: "300mm / 400mm / 600mm",
      compatibility: "Wooden, glass, aluminum doors",
      included: "Screws & mounting brackets",
      bestFor: "Homes, offices, shops"
    },
    {
      id: 6,
      name: "Black Glass Pull Handle",
      price: 50000,
      image: "/black_glass_pull_handle.jpeg",
      category: "Door Hardware",
      description: "Elegant black glass pull handle for modern interiors.",
      mainFeature: "Elegant black glass pull handle for modern interiors.",
      keyFeatures: [
        "Premium glass construction",
        "Black finish",
        "Smooth operation",
        "Stylish design"
      ],
      material: "Glass with metal mounting",
      lengthOptions: "300mm / 400mm / 600mm",
      compatibility: "Glass, wooden, aluminum doors",
      included: "Mounting hardware",
      bestFor: "Modern homes, offices, showrooms"
    },
    {
      id: 7,
      name: "Stainless Steel Double Pull Handle",
      price: 1200000,
      image: "/ss_double_pull_handle.jpeg",
      category: "Door Hardware",
      description: "Heavy-duty stainless steel double pull handle for commercial doors.",
      mainFeature: "Heavy-duty stainless steel double pull handle for commercial doors.",
      keyFeatures: [
        "Stainless steel construction",
        "Double pull design",
        "High durability",
        "Corrosion resistant"
      ],
      material: "Stainless steel",
      lengthOptions: "600mm / 800mm / 1000mm",
      compatibility: "Metal, wooden, glass doors",
      included: "Mounting brackets and screws",
      bestFor: "Commercial buildings, heavy doors"
    },
    {
      id: 8,
      name: "Euro Cylinder Lock with Thumb Turn",
      price: 7000,
      image: "/euro_cylinder_lock_thumb.jpeg",
      category: "Lock Cylinders",
      description: "Euro profile cylinder lock with convenient thumb turn mechanism.",
      mainFeature: "Euro profile cylinder lock with convenient thumb turn mechanism.",
      keyFeatures: [
        "Thumb turn operation",
        "Euro profile design",
        "Anti-pick protection",
        "Multiple key options"
      ],
      sizeOptions: "60mm / 70mm / 80mm",
      keysIncluded: "3–5 keys",
      bestFor: "Interior doors, bathrooms, bedrooms",
      warranty: "1 year"
    },
    {
      id: 9,
      name: "Brushed Glass Pull Handle",
      price: 10000,
      image: "/brushed_glass_pull_handle.jpeg",
      category: "Door Hardware",
      description: "Sophisticated brushed glass pull handle for elegant door styling.",
      mainFeature: "Sophisticated brushed glass pull handle for elegant door styling.",
      keyFeatures: [
        "Brushed glass finish",
        "Elegant appearance",
        "Smooth touch",
        "Durable mounting"
      ],
      material: "Glass with brushed finish",
      lengthOptions: "300mm / 400mm / 600mm",
      compatibility: "Glass, wooden doors",
      included: "Mounting hardware",
      bestFor: "Luxury homes, hotels, restaurants"
    },
    {
      id: 10,
      name: "Hydraulic Door Closer",
      price: 80000,
      image: "/hydraulic_door_closer.jpeg",
      category: "Door Hardware",
      description: "Reliable hydraulic door closer for automatic door closing.",
      mainFeature: "Reliable hydraulic door closer for automatic door closing.",
      keyFeatures: [
        "Hydraulic mechanism",
        "Adjustable closing speed",
        "Smooth operation",
        "Weather resistant"
      ],
      material: "Aluminum body with hydraulic components",
      compatibility: "Wooden and metal doors",
      included: "Mounting hardware and instructions",
      bestFor: "Commercial buildings, offices, public spaces",
      warranty: "2 years"
    },
    {
      id: 11,
      name: "Black Stainless Steel Pull Door Handle",
      price: 10000,
      image: "/handle.jpeg",
      category: "Door Hardware",
      description: "Modern pull handle with matte black finish for stylish and durable door operation.",
      mainFeature: "Modern pull handle with matte black finish for stylish and durable door operation.",
      keyFeatures: [
        "Premium stainless steel construction",
        "Elegant matte black finish",
        "Double-sided pull handle design",
        "Rust and corrosion resistant",
        "Smooth and comfortable grip",
        "Strong and long-lasting"
      ],
      material: "Stainless Steel",
      lengthOptions: "400mm / 600mm",
      compatibility: "Wooden, glass, aluminum doors",
      included: "Mounting screws & fixing accessories",
      bestFor: "Homes, offices, shops, commercial buildings",
      warranty: "6 months"
    },
    {
      id: 12,
      name: "Double Action Spring Door Hinge",
      price: 20000,
      image: "/black_glass_pull_handle1.jpeg",
      category: "Door Hardware",
      description: "Self-closing double action hinge allowing doors to swing both inward and outward.",
      mainFeature: "Self-closing double action hinge allowing doors to swing both inward and outward.",
      keyFeatures: [
        "Opens in both directions",
        "Automatic self-centering spring mechanism",
        "Heavy-duty stainless steel body",
        "Smooth and quiet operation",
        "Suitable for high-traffic areas"
      ],
      material: "Stainless Steel",
      finish: "Satin / Brushed Silver",
      doorWeightSupport: "Medium to heavy doors",
      compatibility: "Wooden and metal swing doors",
      bestFor: "Kitchens, restaurants, offices, commercial spaces",
      warranty: "6 months"
    },
    {
      id: 13,
      name: "Stainless Steel Mortise Door Lock Handle Set",
      price: 10000,
      image: "/hydraulic_door2.jpeg",
      category: "Lock Cylinders",
      description: "Secure mortise lock with integrated lever handle and key access.",
      mainFeature: "Secure mortise lock with integrated lever handle and key access.",
      keyFeatures: [
        "Strong stainless steel lever handle",
        "Durable mortise locking mechanism",
        "Smooth handle movement",
        "Key-operated locking system",
        "Modern polished chrome finish"
      ],
      lockType: "Mortise lock with key",
      material: "Stainless Steel + steel lock body",
      compatibility: "Wooden and metal doors",
      keysIncluded: "3 keys",
      bestFor: "Homes, apartments, offices, hotels",
      warranty: "1 year"
    },
    {
      id: 14,
      name: "Adjustable Hydraulic Door Closer",
      price: 35000,
      image: "/euro.jpeg",
      category: "Door Hardware",
      description: "Automatic hydraulic door closer for smooth and controlled door closing.",
      mainFeature: "Automatic hydraulic door closer for smooth and controlled door closing.",
      keyFeatures: [
        "Hydraulic closing mechanism",
        "Adjustable closing and latching speed",
        "Prevents door slamming",
        "Quiet and smooth operation",
        "Strong aluminum alloy body"
      ],
      material: "Aluminum Alloy",
      finish: "Silver",
      doorWeightCapacity: "40–80 kg",
      compatibility: "Wooden, metal, fire-rated doors",
      bestFor: "Offices, commercial buildings, residential doors",
      warranty: "1 year"
    },
    {
      id: 15,
      name: "Digital Door Lock System",
      price: 500000,
      image: "/10.jpeg",
      category: "Digital Locks",
      description: "Advanced digital door lock with multiple access options.",
      mainFeature: "Advanced digital door lock with multiple access options.",
      keyFeatures: [
        "PIN code access",
        "RFID card support",
        "Mobile app integration",
        "Tamper alarm",
        "Backup battery power"
      ],
      power: "AA batteries",
      compatibility: "Wooden & metal doors",
      bestFor: "Homes, offices, apartments",
      warranty: "1 year"
    },
    {
      id: 16,
      name: "Heavy Duty Door Hinge Set",
      price: 18000,
      image: "/11.jpeg",
      category: "Door Hardware",
      description: "Industrial grade hinges for heavy doors and high traffic areas.",
      mainFeature: "Industrial grade hinges for heavy doors and high traffic areas.",
      keyFeatures: [
        "Heavy-duty construction",
        "Ball bearing mechanism",
        "Rust-resistant finish",
        "Self-lubricating design"
      ],
      material: "Steel with brass plating",
      sizeOptions: "4 inch / 5 inch / 6 inch",
      compatibility: "Heavy wooden and metal doors",
      bestFor: "Commercial buildings, industrial facilities",
      warranty: "2 years"
    },
    {
      id: 17,
      name: "Fingerprint Door Lock",
      price: 20000,
      image: "/12.jpeg",
      category: "Smart Locks",
      description: "Biometric fingerprint lock with advanced security features.",
      mainFeature: "Biometric fingerprint lock with advanced security features.",
      keyFeatures: [
        "Fingerprint recognition",
        "PIN code backup",
        "Touchscreen interface",
        "Anti-picking protection",
        "Remote monitoring"
      ],
      power: "Rechargeable battery",
      compatibility: "Wooden & metal doors",
      bestFor: "High-security homes, offices",
      warranty: "2 years"
    },
    {
      id: 18,
      name: "Decorative Door Handle Set",
      price: 30000,
      image: "/13.jpeg",
      category: "Door Hardware",
      description: "Elegant decorative handles for interior and exterior doors.",
      mainFeature: "Elegant decorative handles for interior and exterior doors.",
      keyFeatures: [
        "Modern design",
        "Solid brass construction",
        "Easy installation",
        "Multiple finish options"
      ],
      material: "Brass with chrome finish",
      compatibility: "Wooden doors",
      included: "Lock cylinder and keys",
      bestFor: "Residential homes, offices",
      warranty: "1 year"
    },
    {
      id: 19,
      name: "Commercial Door Closer",
      price: 50000,
      image: "/14.jpeg",
      category: "Door Hardware",
      description: "Professional grade door closer for commercial applications.",
      mainFeature: "Professional grade door closer for commercial applications.",
      keyFeatures: [
        "Adjustable closing force",
        "Backcheck feature",
        "Delayed action option",
        "Weather resistant"
      ],
      material: "Cast iron body",
      compatibility: "Commercial doors",
      bestFor: "Office buildings, public facilities",
      warranty: "3 years"
    },
    {
      id: 20,
      name: "Magnetic Door Holder",
      price: 35000,
      image: "/15.jpeg",
      category: "Door Hardware",
      description: "Magnetic door stop that holds doors open securely.",
      mainFeature: "Magnetic door stop that holds doors open securely.",
      keyFeatures: [
        "Strong magnetic hold",
        "Wall mount design",
        "Adjustable height",
        "Durable construction"
      ],
      material: "Steel with magnetic core",
      compatibility: "All door types",
      bestFor: "Homes, offices, hospitals",
      warranty: "1 year"
    },
    {
      id: 21,
      name: "Panic Exit Device",
      price: 20000,
      image: "/16.jpeg",
      category: "Door Hardware",
      description: "Emergency exit device for safe building evacuation.",
      mainFeature: "Emergency exit device for safe building evacuation.",
      keyFeatures: [
        "Push bar operation",
        "Fire-rated design",
        "Alarm integration",
        "Dogging feature"
      ],
      material: "Steel construction",
      compatibility: "Commercial exit doors",
      bestFor: "Public buildings, schools, hospitals",
      warranty: "2 years"
    },
    {
      id: 22,
      name: "Sliding Door Lock",
      price: 50000,
      image: "/17.jpeg",
      category: "Lock Cylinders",
      description: "Secure lock mechanism for sliding glass doors.",
      mainFeature: "Secure lock mechanism for sliding glass doors.",
      keyFeatures: [
        "Key-operated locking",
        "Privacy lock option",
        "Weather resistant",
        "Easy installation"
      ],
      material: "Zinc alloy",
      compatibility: "Sliding glass doors",
      keysIncluded: "2 keys",
      bestFor: "Patio doors, balconies",
      warranty: "1 year"
    },
    {
      id: 23,
      name: "Gate Lock System",
      price: 16000,
      image: "/18.jpeg",
      category: "Lock Cylinders",
      description: "Heavy-duty lock system for gates and barriers.",
      mainFeature: "Heavy-duty lock system for gates and barriers.",
      keyFeatures: [
        "Padlock compatible",
        "Weatherproof design",
        "Anti-corrosion coating",
        "Multiple locking points"
      ],
      material: "Steel with brass components",
      compatibility: "Gates and metal barriers",
      bestFor: "Property gates, industrial gates",
      warranty: "2 years"
    },
    {
      id: 24,
      name: "Cabinet Door Lock",
      price: 700000,
      image: "/19.jpeg",
      category: "Lock Cylinders",
      description: "Small lock for securing cabinets and drawers.",
      mainFeature: "Small lock for securing cabinets and drawers.",
      keyFeatures: [
        "Key locking mechanism",
        "Compact design",
        "Universal fit",
        "Durable construction"
      ],
      material: "Brass",
      compatibility: "Cabinets and drawers",
      keysIncluded: "2 keys",
      bestFor: "Home storage, office cabinets",
      warranty: "6 months"
    },
    {
      id: 25,
      name: "Window Security Lock",
      price: 300000,
      image: "/20.jpeg",
      category: "Lock Cylinders",
      description: "Security lock for windows to prevent unauthorized access.",
      mainFeature: "Security lock for windows to prevent unauthorized access.",
      keyFeatures: [
        "Key-operated",
        "Tamper resistant",
        "Easy to install",
        "Multiple size options"
      ],
      material: "Steel",
      compatibility: "Various window types",
      keysIncluded: "2 keys",
      bestFor: "Residential windows, apartments",
      warranty: "1 year"
    },
    {
      id: 26,
      name: "Rim Lock Set",
      price: 6000,
      image: "/21.jpeg",
      category: "Lock Cylinders",
      description: "Traditional rim lock for wooden doors.",
      mainFeature: "Traditional rim lock for wooden doors.",
      keyFeatures: [
        "Solid brass construction",
        "Traditional design",
        "Key locking",
        "Decorative finish"
      ],
      material: "Brass",
      compatibility: "Wooden doors",
      keysIncluded: "3 keys",
      bestFor: "Traditional homes, heritage buildings",
      warranty: "1 year"
    },
    {
      id: 27,
      name: "Deadbolt Lock",
      price: 50000,
      image: "/22.jpeg",
      category: "Lock Cylinders",
      description: "Single cylinder deadbolt for enhanced door security.",
      mainFeature: "Single cylinder deadbolt for enhanced door security.",
      keyFeatures: [
        "Deadbolt mechanism",
        "Key from outside",
        "Thumb turn inside",
        "Anti-drill protection"
      ],
      material: "Steel with brass finish",
      compatibility: "Wooden and metal doors",
      keysIncluded: "2 keys",
      bestFor: "Front doors, entry ways",
      warranty: "2 years"
    },
    {
      id: 28,
      name: "Padlock Set",
      price: 13000,
      image: "/23.jpeg",
      category: "Lock Cylinders",
      description: "Heavy-duty padlock for securing gates and storage.",
      mainFeature: "Heavy-duty padlock for securing gates and storage.",
      keyFeatures: [
        "Hardened steel shackle",
        "Weather resistant",
        "Anti-pick design",
        "Multiple key options"
      ],
      material: "Steel",
      compatibility: "Gates, lockers, storage units",
      keysIncluded: "3 keys",
      bestFor: "Outdoor security, storage",
      warranty: "1 year"
    },
    {
      id: 29,
      name: "Door Chain Lock",
      price: 20000,
      image: "/24.jpeg",
      category: "Lock Cylinders",
      description: "Door chain for additional security when answering doors.",
      mainFeature: "Door chain for additional security when answering doors.",
      keyFeatures: [
        "Easy installation",
        "Adjustable length",
        "Strong chain construction",
        "Privacy protection"
      ],
      material: "Steel chain with brass housing",
      compatibility: "Wooden doors",
      bestFor: "Apartment doors, hotels",
      warranty: "6 months"
    },
    {
      id: 30,
      name: "Mortise Lock Set",
      price: 18000,
      image: "/25.jpeg",
      category: "Lock Cylinders",
      description: "Complete mortise lock system for wooden doors.",
      mainFeature: "Complete mortise lock system for wooden doors.",
      keyFeatures: [
        "Mortise installation",
        "Latch and deadbolt",
        "Thumb turn operation",
        "High security"
      ],
      material: "Brass and steel",
      compatibility: "Wooden doors",
      keysIncluded: "5 keys",
      bestFor: "High-end homes, offices",
      warranty: "2 years"
    },
    {
      id: 31,
      name: "Biometric Safe Lock",
      price: 50000,
      image: "/26.jpeg",
      category: "Digital Locks",
      description: "Fingerprint biometric lock for safes and cabinets.",
      mainFeature: "Fingerprint biometric lock for safes and cabinets.",
      keyFeatures: [
        "Fingerprint access",
        "Backup keypad",
        "Battery powered",
        "Tamper alarm"
      ],
      power: "9V battery",
      compatibility: "Safes and secure cabinets",
      bestFor: "Home safes, gun cabinets",
      warranty: "1 year"
    },
    {
      id: 32,
      name: "Glass Door Lock",
      price: 50000,
      image: "/27.jpeg",
      category: "Door Hardware",
      description: "Specialized lock system for glass doors and partitions.",
      mainFeature: "Specialized lock system for glass doors and partitions.",
      keyFeatures: [
        "Glass door compatible",
        "Secure locking mechanism",
        "Modern design",
        "Easy operation"
      ],
      material: "Stainless steel",
      compatibility: "Glass doors and partitions",
      bestFor: "Office glass doors, showrooms",
      warranty: "1 year"
    },
    {
      id: 33,
      name: "Keyless Entry System",
      price: 80000,
      image: "/28.jpeg",
      category: "Digital Locks",
      description: "Electronic keyless entry system for modern security.",
      mainFeature: "Electronic keyless entry system for modern security.",
      keyFeatures: [
        "Keyless operation",
        "Programmable codes",
        "Remote access",
        "Access logs"
      ],
      power: "Battery operated",
      compatibility: "Various door types",
      bestFor: "Apartments, offices, condos",
      warranty: "1 year"
    },
    {
      id: 34,
      name: "Anti-Burglar Door Guard",
      price: 16000,
      image: "/29.jpeg",
      category: "Door Hardware",
      description: "Reinforced door guard to prevent forced entry.",
      mainFeature: "Reinforced door guard to prevent forced entry.",
      keyFeatures: [
        "Reinforced steel construction",
        "Multiple locking points",
        "Floor mounted",
        "High security"
      ],
      material: "Steel",
      compatibility: "Wooden doors",
      bestFor: "High-risk areas, homes",
      warranty: "2 years"
    },
    {
      id: 35,
      name: "Digital Gate Opener",
      price: 70000,
      image: "/30.jpeg",
      category: "Digital Locks",
      description: "Automated gate opening system with remote control.",
      mainFeature: "Automated gate opening system with remote control.",
      keyFeatures: [
        "Remote control operation",
        "Keypad entry",
        "Automatic closing",
        "Weather resistant"
      ],
      power: "Electric powered",
      compatibility: "Automated gates",
      bestFor: "Residential gates, parking areas",
      warranty: "2 years"
    },
    {
      id: 36,
      name: "Privacy Door Knob",
      price: 50000,
      image: "/31.jpeg",
      category: "Door Hardware",
      description: "Privacy lock knob for bathrooms and bedrooms.",
      mainFeature: "Privacy lock knob for bathrooms and bedrooms.",
      keyFeatures: [
        "Privacy locking",
        "Emergency access",
        "Easy installation",
        "Modern finish"
      ],
      material: "Brass with chrome",
      compatibility: "Interior doors",
      bestFor: "Bathrooms, bedrooms",
      warranty: "1 year"
    },
    {
      id: 37,
      name: "Master Key System",
      price: 50000,
      image: "/32.jpeg",
      category: "Lock Cylinders",
      description: "Master key system for multi-unit buildings.",
      mainFeature: "Master key system for multi-unit buildings.",
      keyFeatures: [
        "Master key access",
        "Individual keys",
        "Hierarchical access",
        "High security"
      ],
      material: "Precision engineered",
      compatibility: "Multiple door systems",
      bestFor: "Apartments, hotels, offices",
      warranty: "3 years"
    }
  ]

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProduct, setSelectedProduct] = useState(null)

  const categories = ["All", "Smart Locks", "Digital Locks", "Lock Cylinders", "Door Hardware"]

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
