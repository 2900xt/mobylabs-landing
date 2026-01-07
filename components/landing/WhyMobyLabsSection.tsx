"use client";

export function WhyMobyLabsSection() {
  return (
    < section className="py-16 bg-slate-50" id="technology" >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
            Why Moby Labs?
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-10 rounded-2xl shadow-2xl">
          <table className="w-full bg-white">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <th className="px-6 py-5 text-left font-bold text-lg">Method</th>
                <th className="px-6 py-5 text-left font-bold text-lg">Accuracy</th>
                <th className="px-6 py-5 text-left font-bold text-lg">Cost</th>
                <th className="px-6 py-5 text-left font-bold text-lg">Real-Time</th>
                <th className="px-6 py-5 text-left font-bold text-lg">Coverage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-cyan-50 border-l-4 border-blue-500">
                <td className="px-6 py-5 font-bold text-gray-900 text-lg">Moby Labs</td>
                <td className="px-6 py-5 text-gray-700 font-semibold">97.84 %</td>
                <td className="px-6 py-5 text-cyan-600 font-bold">{"< $200 (one-time)"}</td>
                <td className="px-6 py-5 text-cyan-600 font-bold">✓ Yes</td>
                <td className="px-6 py-5 text-cyan-600 font-bold">Wide</td>
              </tr>
              <tr className="border-t-2 border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-gray-900">Whale Tagging</td>
                <td className="px-6 py-4 text-gray-700">Single whale</td>
                <td className="px-6 py-4 text-blue-800 font-semibold">$2,400/whale</td>
                <td className="px-6 py-4 text-blue-600 font-semibold">Limited</td>
                <td className="px-6 py-4 text-blue-800 font-semibold">1 whale</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-gray-900">Aerial Imagery</td>
                <td className="px-6 py-4 text-gray-700">Surface only</td>
                <td className="px-6 py-4 text-blue-600 font-semibold">Moderate</td>
                <td className="px-6 py-4 text-blue-800 font-semibold">✗ No</td>
                <td className="px-6 py-4 text-blue-600 font-semibold">Limited</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-gray-900">Civilian Reports</td>
                <td className="px-6 py-4 text-gray-700">Unreliable</td>
                <td className="px-6 py-4 text-cyan-600 font-semibold">Free</td>
                <td className="px-6 py-4 text-blue-600 font-semibold">Delayed</td>
                <td className="px-6 py-4 text-blue-800 font-semibold">Sparse</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors border-t-2 border-gray-200">
                <td className="px-6 py-4 font-semibold text-gray-900">Cornell Benchmark</td>
                <td className="px-6 py-4 text-gray-700">72.14 %</td>
                <td className="px-6 py-4 text-gray-500">—</td>
                <td className="px-6 py-4 text-gray-500">—</td>
                <td className="px-6 py-4 text-gray-500">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section >
  );
}