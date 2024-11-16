/** @format */
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";

const Faculty = ({ member, index }) => (
  <motion.div
    className="flex flex-col items-center justify-center w-full h-full gap-4 p-4"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    {/* Image Container with Background */}
    <div className="bg-primaryDark hover:shadow-[0_20px_50px_rgba(255,191,0,0.15)] rounded-2xl shadow-lg p-4 w-full max-w-xs md:max-w-sm lg:max-w-md flex flex-col items-center justify-center">
      <motion.img
        src={member.img}
        alt={member.name}
        className="w-full h-[280px] md:h-[320px] lg:h-[340px] rounded-lg object-cover mb-4"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>

    {/* Text Information */}
    <div className="text-center">
      <motion.h1
        className="text-lg md:text-xl lg:text-2xl font-semibold text-amber-500 tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {member.name}
      </motion.h1>
      <motion.p
        className="text-base md:text-lg lg:text-xl text-white tracking-wide pt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {member.position}
      </motion.p>
    </div>
  </motion.div>
);

export default Faculty;
