/** @format */
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";

const TeamMember = ({ member, index }) => (
  <motion.div
    className="bg-primaryDark rounded-2xl shadow-lg p-6 flex flex-col items-center border border-secondary-yellow"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <motion.img
      src={member.img}
      alt={member.name}
      className="w-full h-auto rounded-lg mb-4 object-cover" // Changed to h-auto to keep the aspect ratio
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    />
    <motion.h2
      className="text-2xl font-bold text-center my-2 text-secondary-yellow bg-primary px-1 rounded-sm"
      whileHover={{ scale: 1.05, color: "#4A90E2" }} // Added hover effect for the name
    >
      {member.name}
    </motion.h2>
    <motion.h3
      className="text-xl text-center text-secondary-yellow mb-4"
      whileHover={{ scale: 1.05, color: "#4A90E2" }} // Added hover effect for the position
    >
      {member.position}
    </motion.h3>
    {/* <p className="text-[#decba7db] text-center mb-4">{member.description}</p> */}
    <div className="flex justify-center space-x-4">
      <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800 transition-colors" />
      <FaTwitter className="text-2xl text-blue-400 hover:text-blue-600 transition-colors" />
      <FaEnvelope className="text-2xl text-red-500 hover:text-red-700 transition-colors" />
    </div>
  </motion.div>
);

export default TeamMember;
