/** @format */
import { motion } from "framer-motion";

const Committee = ({ member, index }) => (
  <motion.div
    className="flex flex-col items-center justify-center w-full h-full gap-4 p-4 "
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    {/* Image Container with Background */}
    <motion.div
      className="bg-primaryDark rounded-2xl hover:shadow-[0_20px_50px_rgba(255,191,0,0.25)] shadow-lg
 p-4 w-full max-w-xs md:max-w-sm lg:max-w-md flex flex-col items-center justify-center"
    >
      <motion.img
        src={member.img}
        alt={member.name}
        className="w-full h-[280px] md:h-[320px] lg:h-[340px] rounded-lg object-cover mb-4"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>

    {/* Text Information */}
    <div className="text-center">
      <motion.h1
        className="text-lg md:text-xl lg:text-2xl font-semibold text-amber-500 tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgba(255, 223, 0, 0.8)",
        }}
      >
        {member.name}
      </motion.h1>
      <motion.p
        className="text-base md:text-lg lg:text-xl text-gray-300 tracking-wide pt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {member.designation}
      </motion.p>
    </div>
  </motion.div>
);

export default Committee;
