/** @format */
import { motion } from "framer-motion";
import { departmentImages } from "../../constant/ourTeam";

function DepartmentCard() {
  return (
    <div>
      {departmentImages.map((img, index) => (
        <motion.img
          initial={{ opacity: 0, y: 50, scale: 1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          src={img}
          alt="department"
          className="w-full  max-h-[500px] object-cover"
          key={index}
        />
      ))}
    </div>
  );
}

export default DepartmentCard;
