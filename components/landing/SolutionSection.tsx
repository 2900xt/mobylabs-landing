import Link from 'next/link';

export function SolutionSection() {
  return (
    <section className="relative overflow-hidden" id="solution">
      {/* Animated mesh gradient background - same as Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400/40 rounded-full animate-float" />
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-float-delayed" />
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-cyan-300/50 rounded-full animate-float" />
      </div>

      {/* Top fade - transition from ProcessSection */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              Our Solution
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Two products. One for conservation, one for vessels.
          </p>
        </div>

        {/* Product Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Buoy Network */}
          <div className="group relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(6,182,212,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                FOR ORGANIZATIONS
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">MobyGlobal Network</h3>
              <p className="text-white/70 mb-6 text-lg">
                Provides whale tracking for conservation efforts and routes.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-white/80 font-medium">Low-cost comparable to expensive market buoys.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-white/80 font-medium">Durable and weather-resistant design. Solar-powered.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-white/80 font-medium">Custom real-time API with historical database access</span>
                </div>
              </div>

              <div className="text-sm text-white/50 font-semibold uppercase tracking-wider">Best For</div>
              <div className="text-white/70 font-medium mb-6">Shipping companies, coastal management, research institutions</div>

              <Link
                href="/signup?product=network"
                className="group/btn relative inline-flex w-full items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-bold rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* SUAM */}
          <div className="group relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(6,182,212,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                FOR INDIVIDUAL VESSELS
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Moby Labs SUAM</h3>
              <p className="text-white/70 mb-6 text-lg">
                Single Unit Acoustic Monitor for whale detection on your vessel.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-white/80 font-medium">Real-time readings with localized directions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-white/80 font-medium">Integrates into existing vessel navigation systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-white/80 font-medium">No pre-existing infrastructure dependency</span>
                </div>
              </div>

              <div className="text-sm text-white/50 font-semibold uppercase tracking-wider">Best For</div>
              <div className="text-white/70 font-medium mb-6">Commercial vessels, fishing boats, recreational boaters</div>

              <Link
                href="/signup?product=suam"
                className="group/btn relative inline-flex w-full items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-lg font-bold rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
