import React from 'react';
import { motion } from 'framer-motion';

export default function CompanyDetailsSectionFuturistic() {
  return (
    <section className="py-24 bg-gray-950 text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content Column */}
        <div className="lg:order-1 text-center lg:text-left"> 
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-10 tracking-tight">
            Our <span className="text-cyan-400">Core</span> Missions
          </h2>

          {/* Engineering Excellence */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-3">Engineering Excellence</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              We deliver end-to-end semiconductor and embedded engineering services — from 
              architecture and design to advanced verification and physical design. With deep 
              domain expertise, we ensure first-pass silicon success and build robust embedded 
              solutions for diverse applications.
            </p>
          </div>

          {/* Talent Solutions */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-3">Talent Solutions</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              We bridge critical workforce gaps by connecting businesses with highly skilled 
              semiconductor professionals. Our curated talent pool of IC designers, FPGA 
              specialists, verification experts, and firmware developers helps accelerate 
              project timelines and drive innovation.
            </p>
          </div>

          {/* Strategic Partnership */}
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-3">Strategic Partnership</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              We combine the strength of offshore expertise with U.S.-based program management 
              to provide cost-effective, scalable, and secure solutions. Our flexible engagement 
              models enable rapid team scaling, ensuring seamless collaboration, IP protection, 
              and sustained innovation.
            </p>
          </div>
        </div>

        {/* Video Column (Futuristic Panel) */}
        <motion.div 
          className="lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: "tween" }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cyan-900/40 border border-cyan-800/50">
            <video
              src="semiconvideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out saturate-[0.8]"
              style={{ aspectRatio: '19/24' }}
            />
            <div className="absolute inset-0 pointer-events-none rounded-3xl border-4 border-cyan-500/10"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
