import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Chiparama delivered an exceptional SoC design that exceeded our performance targets. Their team's expertise and dedication were crucial to the success of our project.",
    author: "Dr. Elena Petrova",
    title: "Head of R&D, TechGenix Solutions",
  },
  {
    quote: "The collaboration with Chiparama was seamless. Their attention to detail in physical design helped us achieve tape-out ahead of schedule and with zero issues.",
    author: "Kenji Tanaka",
    title: "Director of Hardware Engineering, Innovate Electronics",
  },
  {
    quote: "We were looking for a partner who could handle a complex verification challenge, and Chiparama's team proved to be the best. Their UVM methodology is top-notch.",
    author: "Aisha Khan",
    title: "Senior Verification Lead, Quantum-Core",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-950 py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Client <span className="text-cyan-400">Validation</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-4">
            Hear what our partners have to say about our commitment to excellence and innovation in semiconductor design.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800 transform transition-all duration-300 cursor-pointer 
                         hover:shadow-2xl hover:shadow-cyan-900/40 hover:border-cyan-700/50"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <FaQuoteLeft className="w-8 h-8 text-cyan-500 mb-6" />
              
              <blockquote className="text-xl text-gray-300 leading-relaxed mb-8">
                {testimonial.quote}
              </blockquote>
              
              <div className="flex items-center">
                {/* Author Avatar (Futuristic Style) */}
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-gray-800 border-2 border-cyan-500 rounded-full flex items-center justify-center text-cyan-400 text-xl font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                </div>
                
                {/* Author Info */}
                <div className="ml-4 text-left">
                  <cite className="font-semibold not-italic text-white">
                    {testimonial.author}
                  </cite>
                  <p className="text-gray-500 text-sm">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}