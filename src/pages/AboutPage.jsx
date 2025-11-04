import React from "react";

export default function AboutPage() {
  return (
    <section className="bg-gray-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Heading & Subtitle */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-400 tracking-tight">
            Innovating the Future of Semiconductors
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            At Chiparama, we are more than just a company; we are pioneers at the forefront of semiconductor innovation. Our mission is to engineer the core technology that powers tomorrow's world.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-16">
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl text-blue-500 mb-4">💡</div>
            <h3 className="text-2xl font-bold mb-2">Innovation</h3>
            <p className="text-gray-400">
              We push the boundaries of chip design to create groundbreaking solutions that shape the future.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl text-blue-500 mb-4">🤝</div>
            <h3 className="text-2xl font-bold mb-2">Collaboration</h3>
            <p className="text-gray-400">
              Our strength lies in our partnerships, working closely with clients to bring complex ideas to life.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl text-blue-500 mb-4">🛡️</div>
            <h3 className="text-2xl font-bold mb-2">Quality</h3>
            <p className="text-gray-400">
              We are committed to the highest standards of quality, ensuring reliable and robust performance.
            </p>
          </div>
        </div>

        {/* Mission & Vision Section with Image */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              To be the trusted partner for next-generation technology, delivering cutting-edge chip design and verification services that enable our clients to lead in their respective industries, from AI and 5G to automotive.
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-400 leading-relaxed">
              To shape a connected, intelligent, and sustainable world by pioneering the semiconductor solutions that will power the innovations of tomorrow.
            </p>
          </div>
          <div className="order-first lg:order-last">
            <img 
              src="/semiconductor-industry-conception-hightech-computer-board-chip-circuit-cpu-processor-microchip-starting-artificial-329183452.jpg" 
              alt="A high-tech semiconductor circuit board with a CPU and microchip" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}