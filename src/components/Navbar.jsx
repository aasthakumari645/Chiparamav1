import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const navItems = [
  { name: "Home", id: "" },
  { name: "Services & Solutions", id: "services", dropdown: true },
  {
    name: "About Us",
    id: "company",
    dropdown: true,
    subItems: [
      { name: "About Chiparama", id: "company" },
      { name: "News & Blogs", id: "news-blogs" },
    ],  
  },
  { name: "Candidates", id: "candidates" },
  { name: "Contact / Request Quote", id: "contact" },
];

const serviceSubItems = {
  semiconductors: [
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
    "Product Solutions",
  ],
  embedded: [
    "Bare metal programming",
    "Board support package",
    "CI/CD",
    "Device drivers",
    "Diagnostics",
    "OS porting and customization",
    "Cyber security",
    "Verification and validation",
  ],
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Desktop dropdown state
  const [mobileDropdown, setMobileDropdown] = useState(null); // Mobile dropdown state
  const location = useLocation();
  let dropdownTimeout;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownHover = (id) => {
    clearTimeout(dropdownTimeout);
    setOpenDropdown(id);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 150); // delay prevents flicker
  };

  const isDropdownOpen = (id) => openDropdown === id;

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    setMobileDropdown(null); // Close any open mobile dropdowns on navigation
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-70 backdrop-blur-lg shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/chiparamalogo.webp"
            alt="Chiparama Logo"
            className="h-10 w-auto"
          />
          <span className="ml-2 font-bold text-lg text-gray-800">Chiparama</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-base font-medium">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="relative"
              onMouseEnter={() => handleDropdownHover(item.id)}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                to={`/${item.id}`}
                className={`px-3 py-2 rounded-full font-medium transition-colors duration-200 ${
                  location.pathname === `/${item.id}`
                    ? "text-green-700 font-bold bg-white glass-button"
                    : "text-gray-800 hover:text-green-700"
                }`}
                onClick={() => setOpenDropdown(null)}
              >
                {item.name}
                {item.dropdown && (
                  <FaChevronDown
                    className={`inline ml-2 -mt-1 w-3 h-3 transition-transform duration-300 ${
                      isDropdownOpen(item.id) ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Desktop Dropdown */}
              {item.dropdown && isDropdownOpen(item.id) && (
                <div
                  className={`absolute left-0 top-full bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded-xl p-6 transition-all duration-300 animate-fadeIn ${
                    item.id === "services" ? "w-[60rem] max-w-[40vw]" : "w-56"
                  }`}
                >
                  {item.id === "services" ? (
                    <div className="flex flex-wrap gap-8">
                      {Object.keys(serviceSubItems).map((category, index) => (
                        <div key={index} className="flex-1 min-w-[15rem]">
                          <h3 className="text-lg font-bold text-gray-800 mb-2 capitalize border-b-2 border-green-500 pb-1">
                            {category}
                          </h3>
                          <ul className="space-y-1">
                            {serviceSubItems[category].map(
                              (subItem, subIndex) => (
                                <li key={subIndex}>
                                  <Link
                                    to={`/services#${subItem
                                      .toLowerCase()
                                      .replace(/ /g, "-")}`}
                                    className="block px-2 py-1 text-sm text-gray-700 hover:text-green-700 transition-colors duration-200"
                                  >
                                    {subItem}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            to={`/${subItem.id}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-green-700 transition-colors duration-200 focus:outline-none"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-2 p-4 text-base font-medium">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <button
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === item.id ? null : item.id
                    )
                  }
                  className="w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-gray-800 hover:text-green-700 transition-colors duration-200"
                >
                  {item.name}
                  {item.dropdown && (
                    <FaChevronDown
                      className={`ml-2 w-3 h-3 transition-transform duration-300 ${
                        mobileDropdown === item.id ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Mobile Dropdown - FIX APPLIED HERE */}
                {item.dropdown && mobileDropdown === item.id && (
                  <div 
                    className={`pl-6 mt-1 space-y-2 ${
                      item.id === "services" ? "max-h-96 overflow-y-auto" : "" // <-- This is the key fix
                    }`}
                  >
                    {item.id === "services" ? (
                      Object.keys(serviceSubItems).map((category, index) => (
                        <div key={index}>
                          <h3 className="text-sm font-semibold text-gray-700 capitalize">
                            {category}
                          </h3>
                          <ul className="space-y-1 mt-1">
                            {serviceSubItems[category].map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  to={`/services#${subItem
                                    .toLowerCase()
                                    .replace(/ /g, "-")}`}
                                  className="block px-2 py-1 text-sm text-gray-600 hover:text-green-700 transition-colors duration-200"
                                  onClick={handleMobileMenuClose}
                                >
                                  {subItem}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))
                    ) : (
                      <ul className="space-y-1">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.id}>
                            <Link
                              to={`/${subItem.id}`}
                              className="block px-2 py-1 text-sm text-gray-600 hover:text-green-700 transition-colors duration-200"
                              onClick={handleMobileMenuClose}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Styles (Unchanged) */}
      <style>{`
        .glass-button {
          background-color: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.4);
          transition: all 0.3s ease;
        }
        .glass-button:hover {
          background-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.6);
          transform: translateY(-2px);
        }
        .glass-button:active {
          transform: translateY(0);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95) }
          to { opacity: 1; transform: scale(1) }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
