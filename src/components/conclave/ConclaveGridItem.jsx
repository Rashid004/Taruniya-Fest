/** @format */
import { motion } from "framer-motion";

const GridItem = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}) => {
  return (
    <motion.div
      className={`flex flex-col max-w-5xl mx-auto ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between relative overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="w-full md:w-1/2 py-10">
        <div className="bg-primaryDark bg-opacity-90 py-8 px-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-serif font-semibold text-secondary-yellow mb-4">
            {title}
          </h2>
          <p className=" mb-6 leading-relaxed text-secondary">{description}</p>
          <button className="text-sm py-2 px-4 bg-gray-900 text-amber-500 rounded transition duration-200 hover:bg-gray-700">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full md:w-[35%] pt-10 transform transition duration-500 hover:scale-105">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>
    </motion.div>
  );
};

export default GridItem;
