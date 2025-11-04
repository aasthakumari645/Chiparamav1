import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBuilding, FaClipboardCheck, FaUsers, FaChevronDown,FaUserGraduate,FaGlobe } from 'react-icons/fa';
import { IoCubeOutline, IoCodeOutline, IoShieldCheckmarkOutline, IoPulseOutline, IoGitCommitOutline, IoHardwareChipOutline } from 'react-icons/io5';

// --- Data Definitions ---
const services = [
  {
    title: "ASIC/SoC Design",
    description:
      "Spec-to-GDSII silicon execution for custom ASIC/SoC programs, with expertise in IP integration, advanced nodes (3nm–7nm), and low-power mixed-signal designs.",
    icon: <IoHardwareChipOutline className="w-6 h-6" />,
  },
  {
    title: "RTL Design",
    description:
      "SystemVerilog/VHDL RTL development with parameterized IP, CDC/linting, and assertion-driven workflows ensuring correctness and reusability.",
    icon: <IoCodeOutline className="w-6 h-6" />,
  },
  {
    title: "Verification",
    description:
      "UVM/SV/ABV verification with metric-driven coverage, AI-assisted bug closure, and scalable regression on cloud-based environments.",
    icon: <IoShieldCheckmarkOutline className="w-6 h-6" />,
  },
  {
    title: "DFT & Test",
    description:
      "Comprehensive ATPG, scan/BIST, and silicon debug solutions ensuring yield improvement and ISO 26262-compliant testing.",
    icon: <IoPulseOutline className="w-6 h-6" />,
  },
  {
    title: "Physical Design",
    description:
      "Complete P&R, timing, and signoff flows using advanced EDA tools for high-performance, power-optimized physical implementations.",
    icon: <IoCubeOutline className="w-6 h-6" />,
  },
  {
    title: "Embedded Systems",
    description:
      "Firmware, drivers, and secure-boot development for edge, automotive, and IoT—supporting ARM, RISC-V, and Linux RTOS platforms.",
    icon: <IoGitCommitOutline className="w-6 h-6" />,
  },
];


const staffingSolutions = [
  {
    title: "Talent-as-a-Service",
    description:
      "On-demand, domain-vetted experts across ASIC, verification, DFT, PD, and embedded—available in FTE, contract, or hybrid models with rapid onboarding.",
    icon: <FaUsers className="w-5 h-5" />,
  },
  {
    title: "Specialized Staffing",
    description:
      "AI-driven candidate mapping and expert screening for advanced semiconductor roles in automotive, edge, and compute sectors.",
    icon: <FaClipboardCheck className="w-5 h-5" />,
  },
  {
    title: "Resource Augmentation",
    description:
      "Instant project-scale expansion for tape-outs and new product launches—fully compliant and IP-secure integration with client workflows.",
    icon: <FaBuilding className="w-5 h-5" />,
  },
  {
    title: "Candidate Experience & Development",
    description:
      "Upskilling, transparent growth, and mentorship for placed engineers—ensuring continuous delivery excellence and engagement.",
    icon: <FaUserGraduate className="w-5 h-5" />,
  },
  {
    title: "Global Reach & EDA Ecosystem",
    description:
      "A global semiconductor talent network aligned with leading EDA tools and SoC/ASIC ecosystems across India, North America, and EMEA.",
    icon: <FaGlobe className="w-5 h-5" />,
  },
];


// --- Main Component ---
export default function CombinedExpertiseFuturistic() {
  const [activeSection, setActiveSection] = useState("services");
  const servicesRef = useRef(null);
  const staffingRef = useRef(null);
  const containerRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState({});

  useEffect(() => {
    if (containerRef.current) {
      const activeRef = activeSection === "services" ? servicesRef : staffingRef;
      const activeElement = activeRef.current;
      const containerLeft = containerRef.current.getBoundingClientRect().left;
      const activeLeft = activeElement.getBoundingClientRect().left;

      setSliderStyle({
        width: activeElement.offsetWidth,
        x: activeLeft - containerLeft,
      });
    }
  }, [activeSection]);

  const data = activeSection === "services" ? services : staffingSolutions;

  return (
    <section className="py-24 px-4 font-sans bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 tracking-tight">
          <span className="text-cyan-400">The Chiparama</span>{" "}
          <span className="text-white">Engineering Ecosystem</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 font-medium text-center mb-12 max-w-2xl mx-auto">
          At Chiparama, we merge semiconductor expertise and engineering talent to create seamless, future-ready solutions.
        </p>

        {/* Section Switcher */}
        <div className="flex justify-center mb-16">
          <div
            ref={containerRef}
            className="relative p-1 rounded-full bg-gray-900 border border-cyan-800/50 shadow-xl shadow-cyan-900/20 flex space-x-1"
          >
            <motion.button
              ref={servicesRef}
              onClick={() => setActiveSection("services")}
              className={`py-2 px-5 rounded-full font-semibold transition-colors duration-300 relative z-10 text-lg ${
                activeSection === "services"
                  ? "text-gray-900"
                  : "text-gray-300"
              }`}
            >
              Engineering Solutions
            </motion.button>
            <motion.button
              ref={staffingRef}
              onClick={() => setActiveSection("staffing")}
              className={`py-2 px-5 rounded-full font-semibold transition-colors duration-300 relative z-10 text-lg ${
                activeSection === "staffing"
                  ? "text-gray-900"
                  : "text-gray-300"
              }`}
            >
              Staffing Solutions
            </motion.button>

            {/* ✅ Fixed slider bar */}
            <motion.div
              className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-lg shadow-cyan-500/40 z-0"
              initial={false}
              animate={{
                x: sliderStyle.x || 0,
                width: sliderStyle.width || 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ top: 4, bottom: 4 }}
            />
          </div>
        </div>

        {/* Tile Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {data.map((item) => (
              <motion.div
                key={item.title}
                className="bg-gray-900 border border-cyan-800/50 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-cyan-400 text-2xl">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
