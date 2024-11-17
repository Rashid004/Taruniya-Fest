/** @format */

import { motion } from "framer-motion";

const GridItem = ({ title, description, imageSrc, imageAlt, reverse }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-8 mb-20 items-center`}
    >
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="w-full md:w-1/2"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="w-full md:w-1/2 space-y-4"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-amber-200">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:shadow-amber-500/20 transition duration-300"
        >
          Learn More
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default GridItem;
