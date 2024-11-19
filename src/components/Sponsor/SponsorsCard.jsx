/** @format */
import { motion } from "framer-motion";
const SponsorCard = ({ sponsor, isHovered, onHover, isFeatured = false }) => (
  <motion.div
    className={`bg-primaryDark hover:shadow-[0_20px_50px_rgba(255,191,0,0.15)] shadow-lg rounded-lg  p-6 transition-all duration-300 transform ${
      isHovered ? "scale-105" : ""
    } ${isFeatured ? "col-span-full lg:col-span-2" : ""}`}
    onMouseEnter={() => onHover(sponsor.name)}
    onMouseLeave={() => onHover(null)}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
  >
    <div
      className={`flex ${
        isFeatured ? "flex-col lg:flex-row" : "flex-col"
      } items-center`}
    >
      <motion.img
        src={sponsor.image}
        alt={sponsor.name}
        className={`${
          isFeatured
            ? "w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64"
            : "w-24 h-24 sm:w-32 sm:h-32"
        } mx-auto mb-4 object-contain`}
        whileHover={{ scale: 1.05 }}
      />
      <div
        className={`${
          isFeatured ? "lg:ml-8" : ""
        } flex-1 text-center lg:text-left`}
      >
        <motion.h2
          className={`${
            isFeatured ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
          } font-bold mb-2 text-amber-200`}
          whileHover={{ scale: 1.05, color: "#f59e0b" }}
        >
          {sponsor.name}
        </motion.h2>
        <motion.h3
          className={`${
            isFeatured ? "text-xl sm:text-2xl" : "text-lg"
          } text-gray-400 mb-4`}
          whileHover={{ scale: 1.05, color: "#6b7280" }}
        >
          {sponsor.title}
        </motion.h3>
        <p className="text-gray-300 mb-4 text-base md:text-lg">
          {sponsor.description}
        </p>
        <div className="flex justify-center lg:justify-start">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <sponsor.icon
              className={`${
                isFeatured ? "text-5xl sm:text-6xl" : "text-3xl sm:text-4xl"
              } text-amber-500 `}
            />
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default SponsorCard;
