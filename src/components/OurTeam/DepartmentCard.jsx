/** @format */
import { motion } from "framer-motion";
import { departmentImages } from "../../constant/ourTeam";

function DepartmentCard() {
  return (
    <div className="w-full space-y-8">
      {departmentImages.map((img, index) => (
        <motion.div
          key={index}
          className="relative w-full rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <motion.img
            src={img}
            alt={`Department ${index + 1}`}
            className="object-cover w-full h-48 sm:h-64 md:h-80 lg:h-96"
          />
        </motion.div>
      ))}
    </div>
  );
}

export default DepartmentCard;
