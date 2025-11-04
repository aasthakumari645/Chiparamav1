import React from "react";

const jobOpenings = [
  {
    title: "Senior Digital IC Design Engineer",
    location: "Bangalore, India",
    type: "Full-Time",
    description: "Lead the design and development of complex digital blocks for next-generation AI and high-performance computing chips. Requires expertise in RTL design, synthesis, and timing closure.",
    link: "#", // Placeholder for actual application link
  },
  {
    title: "Physical Design Engineer",
    location: "Smriti Nagar, India",
    type: "Full-Time",
    description: "Focus on physical implementation, including floor planning, placement, and routing for advanced process nodes (4nm/5nm). Knowledge of static timing analysis (STA) is essential.",
    link: "#",
  },
  {
    title: "Verification Engineer (UVM)",
    location: "Smriti Nagar, India",
    type: "Full-Time",
    description: "Develop and execute verification plans for complex SoC and IP designs using UVM methodology. Strong debugging skills and a solid understanding of Verilog/SystemVerilog are a must.",
    link: "#",
  },
];

export default function CareersPage() {
  return (
    <section className="bg-gray-900 text-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Careers Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-400 tracking-tight">
            Join Our Team
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Ready to shape the future of technology? At Chiparama, we're building the foundation for tomorrow's innovations. Explore our current opportunities and find your next career challenge.
          </p>
        </div>

        {/* Job Openings Section */}
        <div className="space-y-8">
          {jobOpenings.map((job, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-blue-500"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                  <p className="text-gray-400 mt-1">
                    {job.location} · {job.type}
                  </p>
                </div>
                <a
                  href={job.link}
                  className="mt-4 md:mt-0 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Apply Now
                </a>
              </div>
              <p className="text-gray-400 leading-relaxed">{job.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action for Speculative Applications */}
        <div className="mt-20 text-center bg-gray-800 p-12 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Don't See a Role for You?
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6">
            We are always looking for passionate and talented individuals to join our team. Send us your resume and tell us how you can contribute to Chiparama's mission.
          </p>
          <a
            href="#"
            className="px-8 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors duration-300 shadow-md"
          >
            Submit General Application
          </a>
        </div>
      </div>
    </section>
  );
}