export default function About() {
  return (
    <div className="w-full bg-white">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-full">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Our Journey</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Securing Rwanda
            </span>
            <br />
            <span className="text-gray-900">
              One Lock at a Time
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed px-4">
            Your trusted partner in professional lock and door solutions, delivering security and peace of mind since 2020
          </p>

          {/* Trust indicators */}
          <div className="mt-12 flex justify-center gap-12 flex-wrap text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
              <span className="font-semibold">Est. 2020</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></div>
              <span className="font-semibold">500+ Projects</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 rounded-full bg-blue-700 animate-pulse"></div>
              <span className="font-semibold">24/7 Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN STORY SECTION */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-10">
              
              {/* Our Story */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Founded in 2020, Banks Lock & Door Solution emerged from a critical need in Rwanda's security industry. What started as a mission to provide reliable, professional-grade security solutions has grown into a trusted name throughout Kigali and beyond.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We specialize in residential and commercial lock installations, emergency lockout services, master key systems, and comprehensive door hardware solutions. Our certified technicians bring years of expertise to every job, ensuring your property is secured to the highest standards.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Today, we serve hundreds of satisfied clients—from homeowners to large commercial properties—building lasting relationships through quality workmanship and unwavering reliability.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 flex items-center justify-center mr-4 transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-blue-500/30">
                      <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <span className="text-gray-900 font-semibold block mb-1">Certified Professionals</span>
                      <span className="text-gray-600 text-sm">Expert technicians trained in the latest security systems and techniques</span>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 flex items-center justify-center mr-4 transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-blue-500/30">
                      <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <span className="text-gray-900 font-semibold block mb-1">Premium Quality Products</span>
                      <span className="text-gray-600 text-sm">International brands and high-grade materials that stand the test of time</span>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 flex items-center justify-center mr-4 transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-blue-500/30">
                      <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <span className="text-gray-900 font-semibold block mb-1">24/7 Emergency Response</span>
                      <span className="text-gray-600 text-sm">Locked out? We're here anytime, day or night, to help you</span>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 flex items-center justify-center mr-4 transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-blue-500/30">
                      <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <span className="text-gray-900 font-semibold block mb-1">Competitive & Fair Pricing</span>
                      <span className="text-gray-600 text-sm">Transparent quotes with no hidden fees—quality security at fair rates</span>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 flex items-center justify-center mr-4 transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-blue-500/30">
                      <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <span className="text-gray-900 font-semibold block mb-1">Warranty & Support</span>
                      <span className="text-gray-600 text-sm">All installations backed by warranty and ongoing support</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10 py-8 bg-slate-50 border-t border-gray-200">
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  500+
                </div>
                <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">Installations</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  98%
                </div>
                <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">Satisfaction Rate</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  4.9★
                </div>
                <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">Customer Rating</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  24/7
                </div>
                <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES SECTION */}
      <section className="bg-slate-50 py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-full">
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">What We Offer</span>
            </div>
            <h2 className="text-5xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive security solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Residential Services</h3>
              <p className="text-gray-600 leading-relaxed">Home lock installations, upgrades, rekeying, and emergency lockout services.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Commercial Solutions</h3>
              <p className="text-gray-600 leading-relaxed">Master key systems, access control, panic bars, and high-security commercial locks.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Lock Systems</h3>
              <p className="text-gray-600 leading-relaxed">Digital locks, biometric systems, and smart home security integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl border border-gray-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide exceptional security solutions that protect what matters most to our clients. We're committed to delivering professional service, expert installations, and reliable support that gives you complete peace of mind.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl border border-gray-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be Rwanda's most trusted name in security solutions, recognized for our unwavering commitment to quality, innovation, and customer satisfaction. We envision a safer Rwanda where every property is secured with the highest standards of protection.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}