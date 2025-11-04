import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    image: "https://static-bestcolleges.tosshub.com/2024/News/SbcJZUmYPAs6cXJvnqD7tgFhDjtDnyXmBn5PsCbe.jpg",
    title: "Engineering Solutions",
    description: "Pioneering the future of technology with innovative engineering.",
    buttonText: "Learn More",
    buttonLink: "/services",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/042/721/583/non_2x/computer-motherboard-with-cpu-circuit-board-system-chip-with-core-processor-computer-technology-background-photo.jpeg",
    title: "Embedded Services",
    description: "Creating seamless and intelligent systems for a connected world.",
    buttonText: "Our Services",
    buttonLink: "/services",
  },
  {
    image: "https://www.shutterstock.com/image-photo/magnifying-success-powerful-red-wooden-600nw-2325646307.jpg",
    title: "Talent Solutions",
    description: "Connecting top-tier talent with groundbreaking projects.",
    buttonText: "Find Your Team",
    buttonLink: "#talent-solutions",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000); // Auto-slides every 7 seconds
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-full relative bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center text-white h-full text-center px-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                {slide.description}
              </p>
              <a
                href={slide.buttonLink}
                className="inline-block px-8 py-3 bg-blue-600 font-semibold text-base rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 p-3 bg-white/30 hover:bg-white/50 text-white rounded-full transition-colors duration-300"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 p-3 bg-white/30 hover:bg-white/50 text-white rounded-full transition-colors duration-300"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}