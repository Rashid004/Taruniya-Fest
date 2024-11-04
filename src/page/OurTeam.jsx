/** @format */

import { useState } from "react";
import { motion } from "framer-motion";
import { committeeMembers, facultyMembers } from "../constant/ourTeam";
import TeamMember from "../components/OurTeam/TeamCard";
import { FaLayerGroup } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { ImTree } from "react-icons/im";
import DepartmentCard from "../components/OurTeam/DepartmentCard";

const OurTeam = () => {
  const [activeTab, setActiveTab] = useState("faculty");

  const renderContent = () => {
    switch (activeTab) {
      case "faculty":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member, index) => (
              <TeamMember key={member.name} member={member} index={index} />
            ))}
          </div>
        );
      case "committee":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committeeMembers.map((member, index) => (
              <TeamMember key={member.name} member={member} index={index} />
            ))}
          </div>
        );
      case "department":
        return <DepartmentCard />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
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
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 lg:mb-12">
          <button
            className={`px-3 py-2 sm:px-4 sm:py-2 text-xl font-medium flex items-center gap-2 ${
              activeTab === "faculty"
                ? "bg-pink-800 text-amber-500 border border-amber-500 "
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
            className={`px-3 py-2 sm:px-4 sm:py-2 text-xl  font-medium flex items-center gap-2 ${
              activeTab === "committee"
                ? "bg-pink-800 text-amber-500 border border-amber-500"
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
            className={`px-3 py-2 sm:px-4 sm:py-2 text-xl  font-medium flex items-center gap-2 ${
              activeTab === "department"
                ? "bg-pink-800 text-amber-500 border border-amber-500"
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

        {/* Content based on activeTab */}
        {renderContent()}
      </div>
    </div>
  );
};

export default OurTeam;
