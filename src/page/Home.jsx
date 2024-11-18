/** @format */

import { motion } from "framer-motion";

function Home() {
  return (
    <section className="min-h-[90vh] relative overflow-hidden">
      {/* First Image */}
      <motion.div
        className="absolute bottom-0 flex items-center justify-center z-[20] w-full"
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
          src="/home/bgCopy-1.webp"
          alt="Home Background"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Second Image */}
      <motion.div
        className="absolute bottom-0 w-full h-full flex items-center justify-center z-[20]"
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
          src="/home/bg-Copy-2.webp"
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
        className="absolute top-0 left-1/3 flex items-center justify-center z-30"
      >
        <img
          src="/home/logo.webp"
          alt="Logo"
          className="w-1/2 h-full object-contain"
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
        className="absolute bottom-[10%] right-0 flex items-center justify-center z-50"
      >
        <img
          src="/home/right.png"
          alt="Right Image"
          className="w-[620px] h-full"
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
        className="absolute bottom-0 left-[12%] flex items-center justify-center z-50"
      >
        <img
          src="/home/left.png"
          alt="Left Image"
          className="w-[320px] h-full"
        />
      </motion.div>
    </section>
  );
}

export default Home;
