/** @format */

import { useState } from "react";
import { motion } from "framer-motion";
import { committeeMembers, facultyMembers } from "../constant/ourTeam";
import { FaLayerGroup } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { ImTree } from "react-icons/im";
import DepartmentCard from "../components/OurTeam/DepartmentCard";
import Faculty from "../components/OurTeam/Faculty";
import Committee from "../components/OurTeam/Committee";
import { Helmet, HelmetProvider } from "react-helmet-async";

const OurTeam = () => {
  const [activeTab, setActiveTab] = useState("faculty");

  return (
    <HelmetProvider>
      <Helmet>
        <title>Our Team | Tarunya Fest</title>
        <meta
          name="description"
          content="Meet the dedicated team behind Tarunya Fest. A group of passionate organizers, coordinators, and volunteers working together to create an unforgettable experience."
        />
      </Helmet>
      <section className="min-h-screen py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8 z-[100]">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="main-heading"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Teams
          </motion.h1>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 lg:mb-12  rounded-2xl backdrop-blur-xl">
            <button
              className={`px-3 py-2 sm:px-4 sm:py-2 text-xl font-medium flex items-center gap-2 rounded-md ${
                activeTab === "faculty"
                  ? "bg-pink-800 text-amber-500  decoration-amber-500 decoration-2"
                  : "bg-pink-950 text-amber-300"
              }`}
              onClick={() => setActiveTab("faculty")}
            >
              <span>
                <FaLayerGroup />
              </span>
              Faculty
            </button>

            <button
              className={`px-3 py-2 sm:px-4 sm:py-2 text-xl font-medium flex items-center gap-2 rounded-md ${
                activeTab === "committee"
                  ? "bg-pink-800 text-amber-500  decoration-amber-500 decoration-2"
                  : "bg-pink-950 text-amber-300"
              }`}
              onClick={() => setActiveTab("committee")}
            >
              <span>
                <HiMiniUserGroup />
              </span>
              Committee
            </button>

            <button
              className={`px-3 py-2 sm:px-4 sm:py-2 text-xl font-medium flex items-center gap-2 rounded-md ${
                activeTab === "department"
                  ? "bg-pink-800 text-amber-500  decoration-amber-500 decoration-2"
                  : "bg-pink-950 text-amber-300"
              }`}
              onClick={() => setActiveTab("department")}
            >
              <span>
                <ImTree />
              </span>
              Department
            </button>
          </div>

          {activeTab === "faculty" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {facultyMembers.map((member, index) => (
                <Faculty key={member.name} member={member} index={index} />
              ))}
            </div>
          ) : activeTab === "committee" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {committeeMembers.map((member, index) => (
                <Committee key={member.name} member={member} index={index} />
              ))}
            </div>
          ) : (
            <DepartmentCard />
          )}
        </div>
      </section>
    </HelmetProvider>
  );
};

export default OurTeam;
