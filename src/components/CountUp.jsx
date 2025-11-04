import React from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const stats = [
  { value: 500, label: "Tapeouts" },
  { value: 1500, label: "Engineers" },
  { value: 50, label: "Customers" },
];

export default function CounterSection() {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 tracking-tight">
          Our Impact by the Numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <InView threshold={0.5} triggerOnce>
                {({ inView, ref }) => (
                  <div
                    ref={ref}
                    className="text-5xl md:text-6xl font-extrabold text-blue-400 mb-3 tracking-wide"
                  >
                    {inView ? (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.5}
                        separator=","
                        suffix="+"
                      />
                    ) : (
                      <span className="opacity-0">{stat.value}+</span>
                    )}
                  </div>
                )}
              </InView>
              <h3 className="text-lg font-semibold text-gray-300 uppercase tracking-widest">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
