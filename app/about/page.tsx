export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-cyan-900">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Moby Labs
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Pioneering marine conservation technology to protect endangered whales
          </p>
        </div>
      </div>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 bg-gradient-to-b from-transparent to-blue-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Team Member 1 */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mb-6 flex items-center justify-center text-6xl shadow-lg">
                  👨‍💻
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Matthew Li</h3>
                <p className="text-cyan-300 font-semibold mb-4">Co-Founder & CEO</p>
                <p className="text-white/80 leading-relaxed">
                  Passionate about leveraging AI and machine learning to solve critical environmental challenges.
                  Specializes in computer vision and marine conservation technology.
                </p>
                <div className="mt-6 flex gap-4">
                  <div className="px-4 py-2 bg-blue-500/30 rounded-lg text-sm text-white">AI/ML</div>
                  <div className="px-4 py-2 bg-cyan-500/30 rounded-lg text-sm text-white">Computer Vision</div>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full mb-6 flex items-center justify-center text-6xl shadow-lg">
                  👨‍🔬
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Taha Rawjani</h3>
                <p className="text-cyan-300 font-semibold mb-4">Co-Founder & CTO</p>
                <p className="text-white/80 leading-relaxed">
                  Dedicated to marine biology research and conservation strategy. Bridges the gap between
                  cutting-edge technology and real-world marine conservation efforts.
                </p>
                <div className="mt-6 flex gap-4">
                  <div className="px-4 py-2 bg-cyan-500/30 rounded-lg text-sm text-white">Research</div>
                  <div className="px-4 py-2 bg-blue-500/30 rounded-lg text-sm text-white">Embedded Systems</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-cyan-600 p-12 rounded-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Join Us in Our Mission
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're a shipping company, researcher, or conservation organization,
              let's work together to protect our oceans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
                Get in Touch
              </a>
              <a href="/live-map" className="px-8 py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-all duration-300 hover:scale-105 shadow-lg border-2 border-white/30">
                View Live Map
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
