"use client";

import Image from "next/image";

const awards = [
  { src: "/ISEF.png", alt: "ISEF Award" },
  { src: "/HOR.jpg", alt: "US House of Representatives" },
  { src: "/NASA.png", alt: "NASA GSFC" },
  { src: "/ACL.png", alt: "ACL" },
  { src: "/RSEF.png", alt: "RSEF" },
  { src: "/VSSEF.png", alt: "VSSEF" },
  { src: "/OSM.jpg", alt: "OSM" },
  { src: "/LOUDOUNNOW.jpg", alt: "Loudoun Now" },
  { src: "/LCPS.png", alt: "LCPS" },
  { src: "/AGU.png", alt: "AGU" },
];

export function AwardsCarousel() {
  return (
    <section className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
          Recognized by Leading Organizations
        </h3>

        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {/* Awards Images - Duplicated for seamless loop */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-8 flex-shrink-0">
                {awards.map((award, index) => (
                  <div
                    key={`${setIndex}-${index}`}
                    className="w-40 h-28 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
                  >
                    <Image
                      src={award.src}
                      alt={award.alt}
                      width={160}
                      height={112}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
