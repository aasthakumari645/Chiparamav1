import React, { useState } from "react";

const projects = [
  { name: "AI Accelerator Chip", img: "https://via.placeholder.com/300", desc: "High-performance chip for AI workloads." },
  { name: "5G Modem", img: "https://via.placeholder.com/300", desc: "Low-power, ultra-fast 5G modem chip." },
  { name: "Automotive MCU", img: "https://via.placeholder.com/300", desc: "Reliable microcontroller for autonomous vehicles." },
];

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-16 tracking-tight">
          Our Work
          <span className="block w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></span>
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, i) => (
                <div key={i} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6 text-left">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{project.name}</h3>
                      <p className="text-gray-600 text-base leading-relaxed">{project.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 text-gray-700 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 text-gray-700 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all"
          >
            ›
          </button>
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === i ? "bg-blue-600" : "bg-gray-300"
                } transition-colors`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}