/** @format */

import { motion } from "framer-motion";

function App() {
  return (
    <section className="relative min-h-[90svh] w-full  overflow-hidden">
      {/* Right Cloud */}
      <motion.div
        className="absolute top-[8vh] md:top-[10vh] lg:top-[8vh] right-0 z-[100] w-[35vw] max-w-[300px] min-w-[180px]"
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
          src="/home/rightcloud.webp"
          alt="Cloud 1"
          className="hidden lg:block w-full"
          // style={{ mixBlendMode: "multiply", opacity: 1 }}
        />
        <img
          src="/home/rightcloudMobile.png"
          alt="Cloud 2"
          className="block lg:hidden w-full"
        />
      </motion.div>

      {/* Left Cloud Mobile */}
      <motion.div
        className="absolute top-[12vh] md:top-[8vh] lg:top-[2vh] left-0 z-[20] w-[35vw] max-w-[300px] min-w-[180px]"
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
          className="block lg:hidden w-full"
        />
        <img
          src="/home/leftcloud.webp"
          alt="Cloud 1"
          className="hidden lg:block w-full"
        />
      </motion.div>

      {/* Center Cloud */}
      <motion.div
        className="absolute top-0 left-[5vw] md:left-1/2 md:-translate-x-1/2 w-[45vw] max-w-[400px] min-w-[250px]"
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
        <img src="/home/maincloud.svg" alt="Cloud 1" className=" w-full" />
        {/* <img
          src="/home/cloudleft.svg"
          alt="Cloud 2"
          className="block lg:hidden w-full"
        /> */}
      </motion.div>

      {/* Background  */}
      <motion.div
        className="absolute bottom-0 w-full"
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
          src="/home/bg-1.svg"
          alt="Overlay Background 1"
          className="w-full object-cover h-64  md:h-auto"
          style={{
            mixBlendMode: "multiply",
            opacity: 0.4,
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-0 w-full"
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
          src="/home/bg-2.svg"
          alt="Overlay Background 2"
          className="w-full object-cover h-[295px]  md:h-auto"
          style={{ mixBlendMode: "multiply", opacity: 0.4 }}
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
        className=""
      >
        <img
          src="/home/logo-v1.svg"
          alt="Logo"
          className="absolute top-[12vh] md:top-[8vh] lg:top-0 left-1/2 -translate-x-1/2  z-20 w-[22vw] min-w-[250px] object-cover "
        />
      </motion.div>

      {/* Right Character */}
      <motion.img
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
        src="/home/right.svg"
        alt="Right Image"
        className="absolute bottom-[8vh] lg:bottom-[15vh] right-0 z-[99] w-[34vw]  min-w-[290px] hidden lg:block"
      />
      <motion.img
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
        src="/home/right.svg"
        alt="Right Image"
        className="absolute bottom-[6vh] right-0 z-[99] w-[20vw] min-w-[170px] md:min-w block lg:hidden"
      />

      {/* Left Character */}

      <motion.img
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
        src="/home/left.svg"
        alt="Left Image"
        className=" absolute bottom-0 left-[8vw] lg:left-[8vw] z-50 w-[18vw]  min-w-[170px] hidden lg:block"
      />
      <motion.img
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
        src="/home/left.svg"
        alt="Left Image"
        className="absolute bottom-0 left-[8vw]  z-50 w-[15vw]  min-w-[110px] md:min-w-[170px] block lg:hidden"
      />
    </section>
  );
}

export default App;
