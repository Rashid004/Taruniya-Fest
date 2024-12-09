/** @format */

import { motion } from "framer-motion";

function Home() {
  return (
    <section className="min-h-[90vh] md:min-h-[90vh] relative overflow-hidden ">
      {/* Right Cloud */}
      <motion.div
        className="absolute top-16 md:top-24 lg:top-0 right-0  z-[100]"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 20,
          mass: 1,
          duration: 1.4,
          delay: 2.5,
        }}
      >
        <img
          src="/home/rightcloud.png"
          alt="Cloud 1"
          className="hidden lg:block w-[300px]"
        />
        <img
          src="/home/rightcloudMobile.png"
          alt="Cloud 2"
          className="block lg:hidden w-[200px]"
        />
      </motion.div>
      {/* Left Cloud Mobile */}
      <motion.div
        className="absolute top-28 md:top-16 lg:top-0 left-0  z-[100]"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 20,
          mass: 1,
          duration: 1.4,
          delay: 2.7,
        }}
      >
        <img
          src="/home/leftCloudMobile.png"
          alt="Cloud Mobile 1"
          className="block lg:hidden w-[200px]"
        />
        <img
          src="/home/leftCloudMobile.png"
          alt="Cloud 1"
          className="hidden lg:block w-[300px]"
        />
      </motion.div>
      {/* Left Cloud */}
      <motion.div
        className="absolute top-0 left-10 md:left-1/3  z-[100]"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 20,
          mass: 1,
          duration: 1.4,
          delay: 2.8,
        }}
      >
        <img
          src="/home/leftcloud1.webp"
          alt="Cloud 1"
          className="hidden lg:block"
        />
        <img
          src="/home/cloudMobile.png"
          alt="Cloud 2"
          className="block lg:hidden"
        />
      </motion.div>

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
          className="object-cover w-full h-full hidden lg:block"
        />
      </motion.div>

      {/* Second Image */}
      <motion.div
        className="absolute -bottom-3 w-full h-full flex items-center justify-center z-[20]"
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
          className="object-cover w-full h-full hidden lg:block"
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
        className="absolute top-1/4 md:top-0 left-1/2 right-1/2 flex items-center justify-center z-[999]"
      >
        <img
          src="/home/logo.webp"
          alt="Logo"
          className="w-auto max-w-[30%] lg:max-w-[55%] min-w-[200px] md:min-w-[350px] lg:min-w-[380px] xl:min-w-[420px] object-contain hidden lg:block"
        />
        <img
          src="/home/logoMobile.png"
          alt="Logo"
          className="w-auto max-w-[30%] lg:max-w-[55%] min-w-[190px] md:min-w-[300px]  object-contain block lg:hidden"
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
        className="absolute bottom-[8%] lg:bottom-[20%] right-0 flex items-center justify-center z-[99]"
      >
        <img
          src="/home/right.png"
          alt="Right Image"
          className="w-[620px] h-full hidden lg:block"
        />
        <img
          src="/home/rightMobile.png"
          alt="Right Image"
          className="w-[180px] md:w-[350px] h-full block lg:hidden"
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
        className="absolute bottom-0 left-[8%] lg:left-[12%] flex items-center justify-center z-50"
      >
        <img
          src="/home/left.png"
          alt="Left Image"
          className="w-[320px] h-full hidden lg:block"
        />
        <img
          src="/home/leftMobile.png"
          alt="Left Image"
          className="w-[160px] md:w-[260px] h-full block lg:hidden"
        />
      </motion.div>
    </section>
  );
}

export default Home;
