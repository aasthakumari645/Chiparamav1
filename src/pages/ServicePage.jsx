import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaMicrochip, FaCogs, FaUsers } from 'react-icons/fa';

// Data for the services sections
const serviceSections = [
  {
    id: "semiconductors",
    title: "Semiconductors",
    description: "Navigating the technological horizon with precision-engineered solutions that set new standards.",
    icon: FaMicrochip,
    items: [
      "Analog and mixed signal",
      "Bench characterization",
      "Design verification",
      "Design Signoff",
      "DFT",
      "FPGA design",
      "In-house silicon validation lab",
      "Prototyping and Emulation",
      "Physical design",
      "RTL design",
      "Silicon validation",
      "Synthesis and STA",
      "Test and Product Engineering",
      "Product Solutions"
    ]
  },
  {
    id: "embedded",
    title: "Embedded Services",
    description: "Creating seamless and intelligent systems for a connected world, from bare metal to full OS.",
    icon: FaCogs,
    items: [
      "Bare metal programming",
      "Board support package",
      "CI/CD",
      "Device drivers",
      "Diagnostics",
      "OS porting and customization",
      "Cyber security",
      "Verification and validation"
    ]
  },
  {
    id: "staffing",
    title: "Staffing Solutions",
    description: "Flexible workforce models to help businesses scale efficiently while ensuring access to top talent.",
    icon: FaUsers,
    items: [
      "Build Operate and Transfer (BOT)",
      "Statement of Work (SOW)",
      "Contingent Staffing"
    ]
  }
];

export default function ServicePage() {
  const location = useLocation();

  // Smooth scroll to a section if the URL has a hash
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Our Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          We offer a comprehensive suite of services, from deep-tech semiconductor design to cutting-edge software solutions.
        </p>

        {/* CTA Button */}
        <a
          href="/contact" // Update this to your desired route
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1"
        >
          Get in Touch with Chiparam
        </a>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {serviceSections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                  <section.icon className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
              </div>

              <p className="text-gray-600 mb-6">{section.description}</p>
              
              <ul className="space-y-2">
                {section.items.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="h-2 w-2 bg-green-500 rounded-full mr-3"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
