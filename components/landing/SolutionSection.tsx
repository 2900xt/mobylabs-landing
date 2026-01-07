import Link from 'next/link';

export function SolutionSection() {
  return (
    <section className="py-16 bg-white" id="solution">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
            Our Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two products. One for conservation, one for vessels.
          </p>
        </div>
        {/* Product Comparison */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {/* Buoy Network */}
          <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-blue-200 hover:border-blue-400 hover:-translate-y-2 hover:scale-[1.02]">
            <div className="inline-block bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              FOR ORGANIZATIONS
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-3">MobyGlobal Network</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Provides whale tracking for conservation efforts and routes.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                <span className="text-gray-800 font-medium">Low-cost comparable to expensive market buoys.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                <span className="text-gray-800 font-medium">Durable and weather-resistant design. Solar-powered.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                <span className="text-gray-800 font-medium">Custom real-time API with historical database access</span>
              </div>
            </div>

            <div className="text-sm text-gray-600 font-semibold">BEST FOR</div>
            <div className="text-gray-800 font-medium mb-6">Shipping companies, coastal management, research institutions</div>
            
            <Link 
              href="/signup?product=network" 
              className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* SUAM */}
          <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-cyan-200 hover:border-cyan-400 hover:-translate-y-2 hover:scale-[1.02]">
            <div className="inline-block bg-cyan-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              FOR INDIVIDUAL VESSELS
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-3">Moby Labs SUAM</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Singule Unit Acoustic Monitor for whale detection on your vessel.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-600 rounded-full" />
                <span className="text-gray-800 font-medium">Real-time readings with localized directions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-600 rounded-full" />
                <span className="text-gray-800 font-medium">Integrates into existing vessel navigation systems</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-600 rounded-full" />
                <span className="text-gray-800 font-medium">No pre-existing infrastructure dependency</span>
              </div>
            </div>

            <div className="text-sm text-gray-600 font-semibold">BEST FOR</div>
            <div className="text-gray-800 font-medium mb-6">Commercial vessels, fishing boats, recreational boaters</div>
            
            <Link 
              href="/signup?product=suam" 
              className="inline-block w-full text-center bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>

      </div>
    </section >
  );
}