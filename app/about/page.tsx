import { Profile } from "@/components/about/Profile";
import Image from "next/image";

export default function AboutPage() {

  // When you click on my profile, redirect to my personal website

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-cyan-900">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Moby Labs
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Two dudes trying to save the whales :D
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
            <Profile name="Matthew Li" role="Co-Founder & CEO" bio="Hi! I'm Matthew, and I love using AI to solve real-world problems. I've done AI research at CMU and Princeton, but the one thing I love more than ChatGPT is whales!" imgSrc="/ML.png" skills={["AI/ML", "Computer Vision"]} website="https://www.linkedin.com/in/matthew-li-a49516258/" />

            {/* Team Member 2 */}
            <Profile name="Taha Rawjani" role="Co-Founder & CTO" bio="Hi! I'm Taha, and I LOVE WHALES!!! I've written my own OS and custom programming language, and I also love working on the embedded components of MobyGlobal." imgSrc="/TR.jpg" skills={["Research", "Embedded Systems"]} website="https://taharawjani.org" />
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-cyan-600 p-12 rounded-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Join Us in Our Mission
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're a shipping company, researcher, conservation organization, or just a whale enthusiast,
              let's work together to protect our oceans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
                Get in Touch
              </a>
              <a href="/live-map" className="px-8 py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-all duration-300 hover:scale-105 shadow-lg border-2 border-white/30">
                View Demo Map
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
