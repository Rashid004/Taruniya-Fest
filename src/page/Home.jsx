/** @format */

import { motion } from "framer-motion";

function Home() {
  return (
    <section className="min-h-[90vh] relative overflow-hidden">
      {/* First Image */}
      <motion.div
        className="absolute bottom-0 flex items-center justify-center z-[10]"
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 20,
          mass: 1,
          duration: 1.4,
        }}
      >
        <img
          src="/home/bg-1.webp"
          alt="Home Background"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Second Image */}
      <motion.div
        className="absolute bottom-0 flex items-center justify-center"
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 20,
          mass: 1,
          duration: 1.4,
          delay: 1,
        }}
      >
        <img
          src="/home/bg-2.webp"
          alt="Overlay Background"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Logo */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 20,
          mass: 1,
          duration: 1.4,
          delay: 1.5,
        }}
        className="absolute top-0 left-1/3 flex items-center justify-center z-10"
      >
        <img
          src="/home/logo.webp"
          alt="Logo"
          className="w-full h-full max-w-[500px]"
        />
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 20,
          mass: 1,
          duration: 1.4,
          delay: 2,
        }}
        className="absolute bottom-[10%] right-0 flex items-center justify-center"
      >
        <img
          src="/home/right.webp"
          alt="Right Image"
          className="w-full h-full"
        />
      </motion.div>

      {/* Left Image */}
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 20,
          mass: 1,
          duration: 1.4,
          delay: 2.5,
        }}
        className="absolute bottom-0 left-[14%] flex items-center justify-center"
      >
        <img src="/home/left.webp" alt="Left Image" className="w-full h-full" />
      </motion.div>
    </section>
  );
}

export default Home;
