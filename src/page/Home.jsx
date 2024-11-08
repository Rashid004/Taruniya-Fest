/** @format */

import { motion } from "framer-motion";

function Home() {
  return (
    <section className="min-h-[90vh] relative overflow-hidden ">
      {/* First Image */}
      <motion.div
        className="absolute bottom-0  flex items-center justify-center z-[10]"
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <img
          src="/home/bg-1.webp"
          alt="Home Background"
          className="object-cover w-full h-full "
        />
      </motion.div>

      {/* Second Image */}
      <motion.div
        className="absolute bottom-0 flex items-center justify-center z-[99] "
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 1 }}
      >
        <img
          src="/home/bg-2.webp"
          alt="Overlay Background"
          className="object-cover w-full h-full "
        />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 1.5 }}
        className="absolute top-0 left-1/3 flex items-center justify-center z-[99] "
      >
        <img
          src="/home/logo.webp"
          alt="Logo"
          className="w-full h-full max-w-[500px]"
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 2 }}
        className="absolute bottom-[10%] right-0 flex items-center justify-center z-[99] "
      >
        <img
          src="/home/right.webp"
          alt="Right Image"
          className="w-full h-full"
        />
      </motion.div>
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 2.5 }}
        className="absolute bottom-0 left-[14%] flex items-center justify-center z-[99] "
      >
        <img src="/home/left.webp" alt="Left Image" className="w-full h-full" />
      </motion.div>
    </section>
  );
}

export default Home;
