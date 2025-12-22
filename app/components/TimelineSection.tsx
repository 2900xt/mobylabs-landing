"use client";

export function TimelineSection() {
  const stats = [
    { label: "North Atlantic Right Whales", value: "370", description: "Fewer than 370 remain. Critically endangered with each one irreplaceable." },
    { label: "Breeding Population", value: "70", description: "Only 70 fertile females remain, threatening the species' future." },
    { label: "Annual Cetacean Deaths", value: "300,000+", description: "Whales, dolphins, and porpoises die each year from human activity." },
    { label: "Human-Caused Deaths", value: "67%", description: "Of whale deaths are preventable - caused by vessel strikes and entanglements." },
    { label: "AI Detection Accuracy", value: "97.84%", description: "Our real-time AI system detects whales - 25% better than alternatives." },
    { label: "Strike Mortality Reduction", value: "57%", description: "Reduction in fatal strikes when vessels slow to 10 knots with real-time detection." },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-cyan-50 overflow-hidden">
      {/* Background whale image - fixed */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2940&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-12">
          The Impact
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-2 border-blue-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-xs md:text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">
                {stat.label}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
                {stat.value}
              </div>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
