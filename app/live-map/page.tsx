"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import the map component with no SSR to avoid window/document issues
const WorldMap = dynamic(() => import("@/components/WorldMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-blue-50 rounded-xl">
      <p className="text-gray-600">Loading map...</p>
    </div>
  ),
});

export default function LiveMapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

      {/* Main Content */}
      <div className="pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 mt-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Live Whale Detection Map
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-time monitoring of whale activity and detection events
            </p>
          </div>

          {/* Demo Notice */}
          <div className="bg-blue-600 text-white rounded-xl p-6 mb-8 text-center">
            <p className="text-lg font-semibold mb-2">
              Demo Mode - This is a demonstration with simulated data
            </p>
            <p className="text-sm mb-3">
              Interested in a real whale detection solution for your organization?
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Map Container */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative z-0">
            <div className="h-[600px] rounded-xl overflow-hidden relative border border-gray-300" style={{ zIndex: 1 }}>
              <WorldMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
