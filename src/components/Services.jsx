import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  IoHardwareChipOutline,
  IoGitBranchOutline,
  IoShieldCheckmarkOutline,
  IoShareSocialOutline,
  IoSpeedometerOutline,
  IoCarSportOutline,
  IoServerOutline,
  IoCubeOutline,
} from "react-icons/io5";

const services = [
  {
    title: "CPU and RISC-V",
    description:
      "Chiparama’s leadership team brings deep experience across ARM, RISC, and Intel architectures, enabling us to meet diverse CPU-centric design and verification requirements with precision and performance.",
    icon: <IoGitBranchOutline className="w-6 h-6" />,
  },
  {
    title: "Functional Safety",
    description:
      "Our engineers specialize in FuSA (Functional Safety) design and verification for automotive and RISC-V systems. We have hands-on expertise with ASIL certification processes and full-chip safety feature verification.",
    icon: <IoShieldCheckmarkOutline className="w-6 h-6" />,
  },
  {
    title: "Cache Coherency & Bus Fabric",
    description:
      "We develop and rigorously verify coherent interconnect fabrics supporting leading industry standards. Our proven methodologies ensure data integrity, synchronization, and high performance across multi-core systems.",
    icon: <IoShareSocialOutline className="w-6 h-6" />,
  },
  {
    title: "SoC Design and Verification",
    description:
      "Our senior SoC engineers have successfully executed multiple complex interconnect and system-level verification projects. We use C, SystemVerilog/UVM, and MATLAB-based modeling for system-level validation and cross-comparison.",
    icon: <IoHardwareChipOutline className="w-6 h-6" />,
  },
  {
    title: "High-Speed Interconnect",
    description:
      "Chiparama offers expertise across USB, PCI, CXL, and AMBA protocols, supporting high-speed data transfer and integration. Our engineers can rapidly onboard and deliver customized solutions aligned with customer specifications.",
    icon: <IoSpeedometerOutline className="w-6 h-6" />,
  },
  {
    title: "Automotive Electronics",
    description:
      "Advanced semiconductor solutions powering EVs, ADAS, infotainment, and next-generation automotive systems.",
    icon: <IoCarSportOutline className="w-6 h-6" />,
  },
  {
    title: "Server & Storage Solutions",
    description:
      "Optimized compute and storage platforms for hyperscale data centers, AI workloads, and high-speed processing.",
    icon: <IoServerOutline className="w-6 h-6" />,
  },
  {
    title: "Semiconductor Manufacturing",
    description:
      "Cutting-edge design, fabrication, and test services ensuring first-pass silicon success and scalable production.",
    icon: <IoCubeOutline className="w-6 h-6" />,
  },
];

export default function IndustrialSolutions() {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section className="bg-gray-950 py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          <span className="text-cyan-400">Chiparama</span> Capabilities
        </h2>
        <p className="mt-3 text-lg text-gray-400 max-w-4xl mx-auto">
          Empowering semiconductor innovation through deep expertise in CPU design, 
          functional safety, interconnect architecture, and system-level verification.
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-xl 
                         flex flex-col items-start text-left space-y-2 cursor-pointer"
              whileHover={{
                scale: 1.05,
                borderColor: "rgb(34 211 238)",
                boxShadow:
                  "0 10px 15px -3px rgba(6, 182, 212, 0.3), 0 4px 6px -4px rgba(6, 182, 212, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="p-2 rounded-lg bg-gray-800 border border-cyan-700/50 text-cyan-400 mb-1">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Read More / Show Less button */}
        <div className="mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg shadow-md transition-all"
          >
            {showAll ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
}
