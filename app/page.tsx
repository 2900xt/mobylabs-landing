"use client";

import { HeroSection } from "./components/HeroSection";
import { TimelineSection } from "./components/TimelineSection";
import { AwardsCarousel } from "./components/AwardsCarousel";
import { ScrollPrompt } from "./components/ScrollPrompt";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-cyan-50">
      <HeroSection />
      <AwardsCarousel /> 
      <TimelineSection />
      <ScrollPrompt />


      {/* The Solution Section */}
      <section className="py-16 bg-white" id="solution">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
              Our Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two products. One mission: Real-time whale detection to save lives.
            </p>
          </div>
          {/* Product Comparison */}
          <div className="grid lg:grid-cols-2 gap-6 mb-10">
            {/* Buoy Network */}
            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-blue-200 hover:border-blue-400 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="inline-block bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                FOR ORGANIZATIONS
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-3">Buoy Network</h3>
              <p className="text-gray-700 mb-6 text-lg">
                3D-printed acoustic buoys covering your shipping routes.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-gray-800 font-medium">ESP32, solar panels, hydrophone</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-gray-800 font-medium">0.9784 AUROC performance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-gray-800 font-medium">Network coverage for shipping routes</span>
                </div>
              </div>

              <div className="text-sm text-gray-600 font-semibold">BEST FOR</div>
              <div className="text-gray-800 font-medium">Shipping companies, coastal management, research institutions</div>
            </div>

            {/* SUAM */}
            <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-cyan-200 hover:border-cyan-400 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="inline-block bg-cyan-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                FOR INDIVIDUAL VESSELS
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-3">SUAM System</h3>
              <p className="text-gray-700 mb-6 text-lg">
                Standalone monitoring system for individual boats and ships.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full" />
                  <span className="text-gray-800 font-medium">Two-Branch Ensemble AI Model</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full" />
                  <span className="text-gray-800 font-medium">Metamaterial sound localization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full" />
                  <span className="text-gray-800 font-medium">No infrastructure dependency</span>
                </div>
              </div>

              <div className="text-sm text-gray-600 font-semibold">BEST FOR</div>
              <div className="text-gray-800 font-medium">Commercial vessels, fishing boats, recreational boaters</div>
            </div>
          </div>

        </div>
      </section >

      {/* Why Moby Labs Wins Section */}
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

          {/* Key Advantages */}

        </div>
      </section >
    </div >
  );
}
