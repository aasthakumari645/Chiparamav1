import React from "react";
import Hero from "../components/Hero";

import Contact from "../components/Contact";
import InnovationHub from "../components/InnovationHub";
import ExpertiseShowcase from "../components/ExpertiseShowcase";

import TestimonialsSection from "../components/TestimonialsSection";
import LogoBand from "../components/FlowingBand";
import CountUp from "../components/CountUp";
import WorkWithUsSection from "../components/WorkWithUsSection";
import Services from "../components/Services";
import Solutions from "../components/OurSolutions";
import IndustriesWeServe from "../components/IndustriesWeServe";
import BlogSection from "../components/Blogs";
import CompanyDetailsSection from "../components/CompanyDetails";


export default function Home() {
  return (
    <>
      <Hero />
      <CompanyDetailsSection />
     


      <Solutions />
      <Services />
      {/* <LogoBand /> */}
      {/* <TestimonialsSection /> */}
      <BlogSection />


      <Contact />

    </>
  );
}
