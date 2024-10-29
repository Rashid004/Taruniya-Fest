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
        return (
          <div className="bg-yellow-200 w-full h-full p-4 rounded-lg">
            <VisualIdentity />
          </div>
        );
      case "vision-mission":
        return (
          <div className="bg-yellow-200 w-full h-full p-4 rounded-lg">
            <VisionMission />
          </div>
        );
      default:
        return null;
    }
  };

  // Button styles
  const buttonStyles =
    "text-secondary font-semibold tracking-[0.3em] text-2xl py-1 px-4";
  const activeStyles =
    "text-secondary-yellow border-b-2 border-secondary-yellow";

  return (
    <section>
      <div className="max-w-7xl mx-auto w-full">
        <motion.h1
          className="main-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>
        <div className="bg-primaryDark h-full md:h-[600px] w-full rounded-2xl py-6 px-6 flex flex-col gap-8">
          <div className="flex items-center justify-around space-x-4">
            <button
              onClick={() => setActiveTab("stand-for")}
              className={`${buttonStyles} ${
                activeTab === "stand-for" ? activeStyles : ""
              }`}
            >
              What we stand for
            </button>
            <button
              onClick={() => setActiveTab("visual-identity")}
              className={`${buttonStyles} ${
                activeTab === "visual-identity" ? activeStyles : ""
              }`}
            >
              Visual Identity
            </button>
            <button
              onClick={() => setActiveTab("vision-mission")}
              className={`${buttonStyles} ${
                activeTab === "vision-mission" ? activeStyles : ""
              }`}
            >
              Vision & Mission
            </button>
          </div>
          <div className="flex-grow">{renderContent()}</div>
        </div>
      </div>
    </section>
  );
}

export default About;
