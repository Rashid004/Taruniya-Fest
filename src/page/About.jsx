/** @format */

import StandFor from "../components/About/Stand-For";
import VisualIdentity from "../components/About/Visual-Identity";
import VisionMission from "../components/About/Vision-Mission";
import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
    relative text-amber-500 font-semibold tracking-widest text-xs sm:text-sm md:text-base lg:text-lg py-1 px-3 
    transition-all duration-300 ease-in-out 
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] 
    after:bg-amber-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left z-[999]
  `;
  const activeStyles = `
    text-amber-600 after:scale-x-100 after:origin-left
  `;

  return (
    <HelmetProvider>
      <section className="min-h-screen py-6 sm:py-8 md:py-10 relative">
        <Helmet>
          <title>About | Tarunya Fest</title>
          <meta
            name="description"
            content="Discover the story behind Tarunya Fest – a celebration of creativity, innovation, and community. Learn about our mission, vision, and the amazing team that brings this fest to life."
          />
        </Helmet>
        <div className="max-w-6xl mx-auto w-full px-4 md:px-6 lg:px-8">
          <motion.h1
            className="main-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h1>

          <div className="relative mt-6">
            {/* Content Container */}
            <div className="bg-primaryDark relative z-10 rounded-xl py-5 px-4 md:px-6 lg:px-8 flex flex-col gap-5 min-h-[400px] md:min-h-[600px]">
              {/* Button Container */}
              <div className="flex justify-around items-center flex-wrap gap-3">
                {["stand-for", "visual-identity", "vision-mission"].map(
                  (tab) => (
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
                  )
                )}
              </div>

              {/* Content Section */}
              <div className="flex-grow relative">{renderContent()}</div>

              {/* Conditional Images */}
              {activeTab === "stand-for" && (
                <img
                  src="/images/about/bg-1.png"
                  className="absolute bottom-0 left-1/4 hidden md:block w-[50%] h-auto object-contain z-[-1] opacity-50 pointer-events-none"
                />
              )}
              {activeTab === "vision-mission" && (
                <img
                  src="/images/about/rocket.png"
                  className="absolute -top-10 right-0 hidden md:block w-[45vw] min-w-[310px] h-auto object-contain z-[-1] opacity-50 pointer-events-none"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
}

export default About;
