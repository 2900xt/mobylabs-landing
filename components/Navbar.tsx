"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-cyan-600 shadow-md" style={{ fontFamily: 'var(--font-ubuntu)' }}>
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <Image src="/logo.png" alt="Moby Labs Logo" width={32} height={32} />
          <span className="text-xl font-bold text-white">
            Moby Labs
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            href="/" 
            className={`font-semibold transition-all duration-300 hover:scale-105 text-sm ${
              pathname === "/" ? "text-white border-b-2 border-white" : "text-white/90 hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`font-semibold transition-all duration-300 hover:scale-105 text-sm ${
              pathname === "/about" ? "text-white border-b-2 border-white" : "text-white/90 hover:text-white"
            }`}
          >
            About Us
          </Link>
          <Link 
            href="/live-map" 
            className={`font-semibold transition-all duration-300 hover:scale-105 text-sm ${
              pathname === "/live-map" ? "text-white border-b-2 border-white" : "text-white/90 hover:text-white"
            }`}
          >
            Live Map
          </Link>
          <Link href="/contact" className="px-5 py-2 bg-white text-blue-600 font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:bg-blue-50 shadow-md text-sm">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-1.5">
          <div className="space-y-1">
            <div className="w-5 h-0.5 bg-white" />
            <div className="w-5 h-0.5 bg-white" />
            <div className="w-5 h-0.5 bg-white" />
          </div>
        </button>
      </div>
    </nav>
  );
}
