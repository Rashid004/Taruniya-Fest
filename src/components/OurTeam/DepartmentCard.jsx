/** @format */

import { motion } from "framer-motion";
import { departmentImages } from "../../constant/ourTeam";

const DepartmentCard = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      rotateY: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="space-y-8 p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {departmentImages.map((img, index) => (
        <motion.div
          key={index}
          className="relative group"
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-primaryDark rounded-2xl shadow-lg p-4 transform transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,191,0,0.15)]">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Image Container */}
              <motion.div
                className="relative w-full md:w-2/3 overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={img}
                  alt={`Department ${index + 1}`}
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-lg transform transition-transform duration-500"
                  initial={{ scale: 1.1 }}
                  whileHover={{
                    scale: 1.15,
                    transition: { duration: 0.5 },
                  }}
                />

                {/* Image Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primaryDark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>

              {/* Content Container */}
              <motion.div
                className="w-full md:w-1/3 md:flex flex-col justify-center space-y-4 p-4 hidden"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-2xl font-bold text-amber-500"
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  Department {index + 1}
                </motion.h3>

                <motion.p
                  className="text-white/80 text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Explore our department's innovative projects and achievements
                </motion.p>

                <motion.div
                  className="mt-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* <button
                    className="px-6 py-2 bg-amber-500 text-primaryDark rounded-lg font-semibold 
                    transform transition-all duration-300 hover:bg-amber-400 hover:shadow-lg
                    hover:shadow-amber-500/30"
                  >
                    Learn More
                  </button> */}
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -z-10 inset-0 bg-amber-500/20 rounded-2xl blur-2xl"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DepartmentCard;
