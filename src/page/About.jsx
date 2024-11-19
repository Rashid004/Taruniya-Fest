/** @format */

import StandFor from "../components/About/Stand-For";
import VisualIdentity from "../components/About/Visual-Identity";
import VisionMission from "../components/About/Vision-Mission";
import { useState } from "react";
import { motion } from "framer-motion";

function About() {
  const [activeTab, setActiveTab] = useState("stand-for");

  const renderContent = () => {
    switch (activeTab) {
      case "stand-for":
        return <StandFor />;
      case "visual-identity":
        return <VisualIdentity />;
      case "vision-mission":
        return <VisionMission />;
      default:
        return null;
    }
  };

  const buttonStyles = `
    relative text-amber-500 font-semibold tracking-widest text-xs sm:text-base md:text-lg lg:text-xl py-2 px-4 
    transition-all duration-300 ease-in-out 
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] 
    after:bg-amber-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left z-[999]
  `;
  const activeStyles = `
    text-amber-600 after:scale-x-100 after:origin-left
  `;

  return (
    <section className="min-h-screen py-4 sm:py-6 md:py-8">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative">
        <motion.h1
          className="main-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>
        {/* Unified Container for Buttons and Content */}
        <div className="bg-primaryDark   rounded-2xl py-6 px-4 md:px-6 lg:px-8 flex flex-col gap-6 md:gap-8 min-h-[600px]">
          {/* Button Container */}
          <div className="flex justify-center  md:justify-around items-center  ">
            {["stand-for", "visual-identity", "vision-mission"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${buttonStyles} ${
                  activeTab === tab ? activeStyles : ""
                }`}
              >
                {tab === "stand-for"
                  ? "VALUES"
                  : tab === "visual-identity"
                  ? "IDENTITY"
                  : tab === "vision-mission"
                  ? "PURPOSE"
                  : null}
              </button>
            ))}
          </div>
          {/* Content Section */}
          <div className="flex-grow relative">{renderContent()}</div>
          {activeTab === "stand-for" && (
            <img
              src="/images/about/bg-1.png"
              className="absolute bottom-0 left-1/4 hidden md:block   w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/2 h-auto object-contain z-[0] opacity-50 md:opacity-70"
            />
          )}
          {activeTab === "vision-mission" && (
            <img
              src="/images/about/rocket.png"
              className="absolute top-0 right-0 hidden md:block object-contain z-[0] opacity-50 md:opacity-70"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
