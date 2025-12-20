"use client";

import Image from "next/image";
import Link from "next/link";

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

          {/* Map Placeholder */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center border-2 border-blue-200">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h2 className="text-2xl font-bold text-gray-700 mb-2">
                  Live Map Coming Soon
                </h2>
                <p className="text-gray-600">
                  Interactive whale detection visualization will be displayed here
                </p>
              </div>
            </div>

            {/* Map Features Info */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl mb-2">📍</div>
                <h3 className="font-bold text-gray-900 mb-1">Real-Time Locations</h3>
                <p className="text-sm text-gray-600">Track whale detections as they happen</p>
              </div>
              <div className="text-center p-6 bg-cyan-50 rounded-xl">
                <div className="text-3xl mb-2">📊</div>
                <h3 className="font-bold text-gray-900 mb-1">Detection Analytics</h3>
                <p className="text-sm text-gray-600">View trends and patterns over time</p>
              </div>
              <div className="text-center p-6 bg-indigo-50 rounded-xl">
                <div className="text-3xl mb-2">🔔</div>
                <h3 className="font-bold text-gray-900 mb-1">Alert System</h3>
                <p className="text-sm text-gray-600">Get notified of nearby whale activity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
