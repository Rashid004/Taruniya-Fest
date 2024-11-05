/** @format */

import { motion } from "framer-motion";

function Home() {
  return (
    <section className="min-h-[90vh] relative overflow-hidden">
      {/* First Image */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-[10]"
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <img
          src="/home/bg-1.webp"
          alt="Home Background"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Second Image */}
      <motion.div
        className="absolute bottom-0 -inset-x-5 w-full flex items-center justify-center z-[99]"
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 1 }}
      >
        <img
          src="/home/bg-2.webp"
          alt="Overlay Background"
          className="object-cover w-full h-full"
        />
      </motion.div>
    </section>
  );
}

export default Home;
