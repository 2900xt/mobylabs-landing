"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
      style={{ fontFamily: 'var(--font-ubuntu)' }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <Image src="/logo.png" alt="Moby Labs Logo" width={32} height={32} />
          <span className="text-xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Moby Labs
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`font-semibold transition-all duration-300 hover:scale-105 text-sm ${
              pathname === "/"
                ? "text-cyan-300 border-b-2 border-cyan-400"
                : "text-white/70 hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`font-semibold transition-all duration-300 hover:scale-105 text-sm ${
              pathname === "/about"
                ? "text-cyan-300 border-b-2 border-cyan-400"
                : "text-white/70 hover:text-white"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/live-map"
            className={`font-semibold transition-all duration-300 hover:scale-105 text-sm ${
              pathname === "/live-map"
                ? "text-cyan-300 border-b-2 border-cyan-400"
                : "text-white/70 hover:text-white"
            }`}
          >
            Demo Map
          </Link>
          <Link
            href="/api-docs"
            className={`font-semibold transition-all duration-300 hover:scale-105 text-sm ${
              pathname === "/api-docs"
                ? "text-cyan-300 border-b-2 border-cyan-400"
                : "text-white/70 hover:text-white"
            }`}
          >
            API Docs
          </Link>
          <Link
            href="/blog"
            className={`font-semibold transition-all duration-300 hover:scale-105 text-sm ${
              pathname.startsWith("/blog")
                ? "text-cyan-300 border-b-2 border-cyan-400"
                : "text-white/70 hover:text-white"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/signup"
            className="px-5 py-2 bg-white/10 backdrop-blur-md text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white/20 border border-white/20 hover:border-white/40 text-sm"
          >
            Sign Up
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] text-sm"
          >
            Contact
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
