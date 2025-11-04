import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMicrochip, FaCogs, FaTools, FaCodeBranch } from 'react-icons/fa';

const expertiseCategories = [
  {
    title: "Core ASIC Design",
    icon: <FaMicrochip className="w-8 h-8" />,
    items: [
      "Architectural Planning & Micro-architecture Design",
      "System-level modeling and simulation",
      "Power, performance, and area (PPA) optimization",
      "RTL Design & Development",
      "VHDL/System Verilog coding",
      "Sign off Checks/CDC/RDC/Lint",
      "Formal Verification",
      "Design Verification",
      "UVM/OVM-based verification",
      "Formal verification and equivalence checking",
      "Regression testing setups and automation",
      "Physical Design & Layout",
      "Floorplanning, placement, and routing",
      "Clock tree synthesis",
      "Signal integrity and power analysis",
      "Static Timing analysis",
      "Post-Silicon Validation and Testing",
      "Silicon bring-up and debug",
      "Performance characterization",
      "Compliance and functional testing",
    ],
  },
  {
    title: "Advanced Technology Integration",
    icon: <FaCogs className="w-8 h-8" />,
    items: [
      "Low Power Design Techniques",
      "Multi-Vt and power gating strategies",
      "Dynamic voltage and frequency scaling (DVFS)",
      "High-Speed Interface Design",
      "PCIe, USB, DDR, etc.",
    ],
  },
  {
    title: "Specialized Design Support",
    icon: <FaCodeBranch className="w-8 h-8" />,
    items: [
      "IP Integration & Management",
      "Third-party IP evaluation and selection",
      "IP customization and integration",
      "Process Migration and Technology Scaling",
      "Node transition strategies (e.g., from 12nm to 4nm)",
      "Compliance and Standards Adherence",
      "Industry Standards Compliance",
      "IEEE, IEC, etc.",
    ],
  },
  {
    title: "Software & Tools",
    icon: <FaTools className="w-8 h-8" />,
    items: [
      "EDA Tool Proficiency",
      "Mastery in tools from Cadence, Synopsys, Mentor Graphics, etc.",
      "Custom Scripting and Automation",
      "Python, Perl, and Tcl for design flow automation",
    ],
  },
];

export default function ExpertiseTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24  text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 tracking-tight">
        <span className="text-green-600">Our</span>{" "}
        <span className="text-black">Expertise</span>
      </h2>



        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Left Side: Tabs - Glassy buttons */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-4">
            {expertiseCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`
                  w-full text-left p-6 rounded-2xl transition-all duration-300 transform border-2
                  ${activeIndex === index
                    ? "bg-white/50 backdrop-blur-lg border-white shadow-xl scale-[1.03] text-gray-900"
                    : "bg-white/20 backdrop-blur-md border-gray-200 text-gray-700 hover:text-gray-900 hover:bg-white/40"
                  }
                  focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:ring-opacity-50
                `}
              >
                <div className="flex items-center space-x-4">
                  <span className="p-3 rounded-full bg-white/50 text-emerald-600 transition-colors duration-300">
                    {category.icon}
                  </span>
                  <span className="font-semibold text-xl">{category.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side: Content - Glassy panel */}
          <div className="w-full lg:w-2/3 bg-white/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <h3 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">
                {expertiseCategories[activeIndex].title}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-gray-700 list-none">
                {expertiseCategories[activeIndex].items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-emerald-600 mt-1 mr-3 flex-shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-medium text-lg leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}