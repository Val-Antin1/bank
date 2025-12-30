import { Link, NavLink } from "react-router-dom"
import { useState } from "react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `relative transition-all duration-300 ${
      isActive
        ? "text-blue-600 font-semibold after:w-full"
        : "text-gray-700 hover:text-blue-600"
    } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-blue-600 after:transition-all after:duration-300 ${
      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
    }`

  const mobileNavLinkClass = ({ isActive }) =>
    `block px-4 py-3 text-base font-medium transition-all duration-300 border-b border-gray-300/50 ${
      isActive
        ? "text-blue-600 bg-gray-100/50"
        : "text-gray-700 hover:text-blue-600 hover:bg-gray-100/30"
    }`

  return (
    <header className="bg-white backdrop-blur-xl border-b border-gray-300/50 sticky top-0 z-50 shadow-lg shadow-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <img src="/logo.png" alt="BANKS Logo" className="relative w-10 h-10 object-contain" />
          </div>
          <div>
            <span className="text-2xl font-extrabold text-blue-600 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-300">
              BANKS
            </span>
            <div className="text-xs text-gray-600 font-medium tracking-wider uppercase">Lock & Door Solution</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-wider font-medium">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Desktop CTA */}
        <a
          href={`https://wa.me/250786902982?text=${encodeURIComponent("Hi! I visited your HomeAccessories website and I'm interested in your products. Can you help me find what I'm looking for?")}`}
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex border-2 border-green-500 text-green-600 px-7 py-2.5 rounded-full text-sm font-bold hover:bg-green-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 hover:scale-105 group"
        >
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Us
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center bg-gray-100/50 rounded-lg border border-gray-300/50 hover:border-blue-500/50 transition-all duration-300"
        >
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-300/50">
          <nav className="px-6 py-4 space-y-1">
            <NavLink to="/" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/products" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
              Products
            </NavLink>
            <NavLink to="/about" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </NavLink>
          </nav>

          {/* Mobile CTA */}
          <div className="px-6 pb-4">
            <a
              href={`https://wa.me/250786902982?text=${encodeURIComponent("Hi! I visited your HomeAccessories website and I'm interested in your products. Can you help me find what I'm looking for?")}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-green-500 text-green-600 px-6 py-3 rounded-full text-sm font-bold hover:bg-green-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 hover:scale-105 group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
