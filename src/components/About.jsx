import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">About Us</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At <span className="font-semibold text-primary">Chiparama</span>, we specialize in semiconductor
          design and innovation. Our mission is to push the boundaries of
          technology, creating reliable and efficient chips that power the future.
        </p>
      </div>
    </section>
  );
}
