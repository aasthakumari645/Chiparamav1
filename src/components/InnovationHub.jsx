import React from "react";

const innovations = [
  {
    title: "AI Chips",
    desc: "Next-gen processors engineered for advanced AI applications, powering everything from data centers to edge devices.",
    icon: "🤖",
  },
  {
    title: "5G Solutions",
    desc: "Semiconductor solutions designed for ultra-fast, low-latency 5G connectivity across industries.",
    icon: "📡",
  },
  {
    title: "Quantum Design",
    desc: "Exploring the frontier of quantum hardware with experimental chip designs for future computing breakthroughs.",
    icon: "⚛️",
  },
];

export default function InnovationHub() {
  return (
    <section id="innovation-hub" className="py-24 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-blue-400">
            Innovation Hub
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            At Chiparama, innovation drives everything we do. From AI to Quantum, we push the boundaries of semiconductor design to shape tomorrow’s technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-20">
          {innovations.map((item, idx) => (
            <div key={idx} className="flex items-start md:items-center group">
              {/* Line and circle for desktop */}
              <div className="hidden md:flex flex-col items-center mr-8">
                <div className="w-px h-12 bg-blue-500/30"></div>
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white z-10">
                  <span className="text-lg">{item.icon}</span>
                </div>
                <div className="w-px h-12 bg-blue-500/30"></div>
              </div>
              
              {/* Content box */}
              <div className="flex-1 bg-gray-800 rounded-xl p-8 shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div className="mb-4 md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-md">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-3xl font-bold text-white transition-colors duration-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}