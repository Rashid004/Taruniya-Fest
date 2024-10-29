/** @format */

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function Home() {
  // Define animation controls
  const controls = {
    lineBg: useAnimation(),
    carRight2: useAnimation(),
    carRight1: useAnimation(),
    bus: useAnimation(),
    carLeft2: useAnimation(),
    carLeft1: useAnimation(),
    clockTower: useAnimation(),
    gateway: useAnimation(),
    cloudRight1: useAnimation(),
    cloudRight2: useAnimation(),
    cloudLeft1: useAnimation(),
    cloudLeft2: useAnimation(),
    logo: useAnimation(),
    buildingRight: useAnimation(),
    buildingLeft: useAnimation(),
  };

  useEffect(() => {
    // Start animations in sequence
    async function startAnimation() {
      await controls.lineBg.start({
        y: 0,
        transition: { type: "spring", stiffness: 60, delay: 0.9 },
      });

      await controls.clockTower.start({
        y: 0,
        transition: { type: "spring", stiffness: 60, delay: 0.5 },
      });
      await controls.gateway.start({
        y: 0,
        transition: { type: "spring", stiffness: 60, delay: 0.3 },
      });
      await controls.buildingLeft.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1.8, ease: "easeOut" },
      });
      await controls.buildingRight.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1.8, ease: "easeOut" },
      });

      await Promise.all([
        controls.carRight2.start({
          x: 0,
          transition: { duration: 1.2, ease: "easeOut" },
        }),
        controls.carRight1.start({
          x: 0,
          transition: { duration: 1.5, ease: "easeOut" },
        }),
        controls.bus.start({
          x: 0,
          transition: { duration: 1.8, ease: "easeOut" },
        }),
        controls.carLeft2.start({
          x: 0,
          transition: { duration: 2.2, ease: "easeOut" },
        }),
        controls.carLeft1.start({
          x: 0,
          transition: { duration: 2.5, ease: "easeOut" },
        }),
      ]);

      await Promise.all([
        controls.cloudRight1.start({
          x: 0,
          transition: { duration: 2.6, ease: "easeOut" },
        }),
        controls.cloudRight2.start({
          x: 0,
          transition: { duration: 2.6, ease: "easeOut" },
        }),
        controls.cloudLeft1.start({
          x: 0,
          transition: { duration: 2.6, ease: "easeOut" },
        }),
        controls.cloudLeft2.start({
          x: 0,
          transition: { duration: 2.6, ease: "easeOut" },
        }),
        controls.logo.start({
          scale: 1,
          opacity: 1,
          transition: { duration: 1.8, ease: "easeOut" },
        }),
      ]);
    }

    startAnimation();
  }, [controls]);

  return (
    // <section className="relative w-full h-[88vh] overflow-hidden">
    //   {/* Clouds Left-1 */}
    //   <motion.img
    //     initial={{ x: -500 }}
    //     animate={controls.cloudLeft1}
    //     src="/home/cloudleft-1.png"
    //     alt="Cloud Left-1"
    //     className="w-[15vw] max-w-[150px] min-w-[100px] absolute left-1/3 top-[15%] z-10"
    //   />

    //   {/* Clouds Left-2 */}
    //   <motion.img
    //     initial={{ x: -500 }}
    //     animate={controls.cloudLeft2}
    //     src="/home/cloudleft-2.png"
    //     alt="Cloud left-2"
    //     className="w-[15vw] max-w-[150px] min-w-[100px] absolute left-[10%] top-[10%] z-20"
    //   />

    //   {/* Clouds Right-1 */}
    //   <motion.div
    //     initial={{ x: 500 }}
    //     animate={controls.cloudRight1}
    //     className="absolute right-0 top-1/4 lg:right-[20%] lg:top-[20%] z-30"
    //   >
    //     <img
    //       src="/home/cloudright-1.png"
    //       alt="Cloud right-1"
    //       className="w-[30vw] max-w-[370px] min-w-[180px] object-contain"
    //     />
    //   </motion.div>

    //   {/* Clouds Right-2 */}
    //   <motion.div
    //     initial={{ x: 500 }}
    //     animate={controls.cloudRight2}
    //     className="absolute right-0 top-0 z-40"
    //   >
    //     <img
    //       src="/home/cloudright-2.png"
    //       alt="Cloud right-2"
    //       className="w-[20vw] max-w-[230px] min-w-[120px] object-contain"
    //     />
    //   </motion.div>

    //   {/* Left Building */}
    //   <motion.div
    //     initial={{ y: 500, opacity: 0.5 }}
    //     animate={controls.buildingLeft}
    //     className="absolute left-0 bottom-[20%]"
    //   >
    //     <img
    //       src="/home/leftbuilding.png"
    //       alt="left-building"
    //       className="w-full object-contain"
    //     />
    //   </motion.div>

    //   {/* Gateway of India */}
    //   <motion.div
    //     initial={{ y: -900 }}
    //     animate={controls.gateway}
    //     className="absolute left-[6%] bottom-[20%] w-[25vw]"
    //   >
    //     <img
    //       src="/home/gateway.png"
    //       alt="Gateway of India"
    //       className="w-full object-contain"
    //     />
    //   </motion.div>

    //   {/* Right Building */}
    //   <motion.div
    //     initial={{ y: 500, opacity: 0.5 }}
    //     animate={controls.buildingRight}
    //     className="absolute right-0 top-[65%]"
    //   >
    //     <img
    //       src="/home/buildingright.png"
    //       alt="building right"
    //       className="w-full object-contain"
    //     />
    //   </motion.div>

    //   {/* Clock Tower */}
    //   <motion.div
    //     initial={{ y: 800 }}
    //     animate={controls.clockTower}
    //     className="absolute right-[20%] bottom-[20%]"
    //   >
    //     <img
    //       src="/home/clocktower.png"
    //       alt="Clock Tower"
    //       className="w-full object-contain"
    //     />
    //   </motion.div>

    //   {/* Line Background */}
    //   <motion.div
    //     initial={{ y: 400 }}
    //     animate={controls.lineBg}
    //     className="absolute left-0 right-0 bottom-[20%]"
    //   >
    //     <img
    //       src="/home/linebg.png"
    //       alt="Line bg"
    //       className="w-full object-cover"
    //     />
    //   </motion.div>

    //   {/* Vehicles */}
    //   <div className="absolute bottom-0 w-full h-[20vh] overflow-hidden">
    //     <motion.img
    //       initial={{ x: -300 }}
    //       animate={controls.carLeft1}
    //       src="/home/carleft-1.png"
    //       alt="Car left 1"
    //       className="absolute -left-[10%] bottom-16 w-[20vw]"
    //     />
    //     <motion.img
    //       initial={{ x: -600 }}
    //       animate={controls.carLeft2}
    //       src="/home/carleft-2.png"
    //       alt="Car left 2"
    //       className="absolute left-0 bottom-0 w-[20vw]"
    //     />
    //     <motion.img
    //       initial={{ x: -600 }}
    //       animate={controls.bus}
    //       src="/home/bus.png"
    //       alt="Bus"
    //       className="absolute left-1/2 bottom-0 w-[40vw]"
    //     />
    //     <motion.img
    //       initial={{ x: -500 }}
    //       animate={controls.carRight1}
    //       src="/home/carright-1.png"
    //       alt="Car right 1"
    //       className="absolute right-[15%] bottom-0 w-[20vw] hidden md:block"
    //     />
    //     <motion.img
    //       initial={{ x: -500 }}
    //       animate={controls.carRight2}
    //       src="/home/carright-2.png"
    //       alt="Car right 2"
    //       className="absolute right-0 bottom-0 w-[20vw]"
    //     />
    //   </div>

    //   {/* Content Overlay */}
    //   <motion.div
    //     initial={{ scale: 0 }}
    //     animate={controls.logo}
    //     className="absolute inset-0 flex flex-col items-center justify-center text-white"
    //   >
    //     <img
    //       src="/home/logo.png"
    //       alt="Tarunya Logo"
    //       className="w-[30vw] mb-4"
    //     />
    //   </motion.div>
    // </section>
    <div>Home Section</div>
  );
}

export default Home;

//  <section className="relative w-full h-[88vh] overflow-hidden ">
//    {/* Clouds Left-1 */}
//    <img
//      src="/home/cloudleft-1.png"
//      alt="Cloud Left-1"
//      className="w-[15vw] max-w-[150px] min-w-[100px] absolute left-1/3 top-[15%] z-10"
//      ref={cloudLeft1Ref}
//    />

//    {/* Clouds Left-2 */}
//    <img
//      src="/home/cloudleft-2.png"
//      alt="Cloud left-2"
//      className="w-[15vw] max-w-[150px] min-w-[100px] absolute left-[10%] top-[10%] z-20"
//      ref={cloudLeft2Ref}
//    />

//    {/* Clouds Right-1 */}
//    <div
//      className="absolute right-0 top-1/4 lg:right-[20%] lg:top-[20%] z-30"
//      ref={cloudRight1Ref}
//    >
//      <img
//        src="/home/cloudright-1.png"
//        alt="Cloud right-1"
//        className="w-[30vw] max-w-[370px] min-w-[180px] object-contain"
//      />
//    </div>

//    {/* Clouds Right-2 */}
//    <div className="absolute right-0 top-0 z-40" ref={cloudRight2Ref}>
//      <img
//        src="/home/cloudright-2.png"
//        alt="Cloud right-2"
//        className="w-[20vw] max-w-[230px] min-w-[120px] object-contain"
//      />
//    </div>

//    {/* Left Building */}
//    <div
//      className="absolute left-0 bottom-[20%] 2md:bottom-1/4 transform -translate-x-6 lg:translate-x-2 w-[40vw] max-w-[300px] min-w-[220px] md:min-w-[350px] md:max-w-[500px] 2md:max-w-[600px] 2md:min-w-[300px] lg:min-w-[200px] lg:max-w-[550px]"
//      ref={buildingLeftRef}
//    >
//      <img
//        src="/home/leftbuilding.png"
//        alt="left-building"
//        className="w-full object-contain"
//      />
//    </div>

//    {/* Gateway of India */}
//    <div
//      className="absolute left-[6%] bottom-[20%] 2md:bottom-[25%] w-[25vw] max-w-[300px] min-w-[140px] md:min-w-[250px] md:max-w-[400px]"
//      ref={gatewayRef}
//    >
//      <img
//        src="/home/gateway.png"
//        alt="Gateway of India"
//        className="w-full object-contain"
//      />
//    </div>

//    {/* Right Building */}
//    <div
//      className="absolute right-0 top-[65%] md:top-[54%] 2md:top-[40%] lg:top-[35%] w-[45vw] max-w-[400px] min-w-[200px] md:max-w-[500px] md:min-w-[250px] 2md:max-w-[600px] 2md:min-w-[300px]"
//      ref={buildingRightRef}
//    >
//      <img
//        src="/home/buildingright.png"
//        alt="building right"
//        className="w-full object-contain"
//      />
//    </div>

//    {/* Clock Tower */}
//    <div
//      className="absolute right-[20%] lg:right-[15%] bottom-[20%] 2md:bottom-[25%] w-[5vw] max-w-[100px] min-w-[50px] md:max-w-[150px] md:min-w-[80px] lg:max-w-[90px] lg:min-w-[45px]"
//      ref={clockTowerRef}
//    >
//      <img
//        src="/home/clocktower.png"
//        alt="Clock Tower"
//        className="w-full object-contain"
//      />
//    </div>

//    {/* Line Background */}
//    <div
//      className="absolute left-0 right-0 bottom-[20%] 2md:bottom-[22%]"
//      ref={lineBgRef}
//    >
//      <img
//        src="/home/linebg.png"
//        alt="Line bg"
//        className="w-full object-cover"
//      />
//    </div>

//    {/* Vehicles */}
//    <div className="absolute bottom-0 w-full h-[20vh] overflow-hidden">
//      <img
//        src="/home/carleft-1.png"
//        alt="Car left 1"
//        className="absolute -left-[10%] lg:-left-[5%] bottom-16 md:bottom-20 2md:bottom-24 w-[20vw] max-w-[150px] min-w-[100px] lg:max-w-[250px] lg:min-w-[120px] object-contain"
//        ref={carLeft1Ref}
//      />
//      <img
//        src="/home/carleft-2.png"
//        alt="Car left 2"
//        className="absolute left-0 md:left-12 lg:left-[15%] bottom-0 transform -translate-y-2 w-[20vw] max-w-[150px] min-w-[100px] lg:max-w-[250px] lg:min-w-[120px] object-contain"
//        ref={carLeft2Ref}
//      />
//      {/* Bus */}
//      <img
//        src="/home/bus.png"
//        alt="Bus"
//        className="absolute left-1/2 md:left-[48%] bottom-0 transform -translate-x-1/2 w-[40vw] max-w-[400px] min-w-[200px] md:max-w-[400px] md:min-w-[200px] lg:max-w-[500px] lg:min-w-[200px] object-contain"
//        ref={busRef}
//      />
//      <img
//        src="/home/carright-1.png"
//        alt="Car right 1"
//        className="absolute right-[15%] md:right-[10%] lg:right-1/4 bottom-0 w-[20vw] max-w-[300px] min-w-[150px] lg:max-w-[250px] lg:min-w-[120px] object-contain hidden md:block"
//        ref={carRight1Ref}
//      />
//      <img
//        src="/home/carright-2.png"
//        alt="Car right 2"
//        className="absolute right-0 lg:right-[10%] bottom-0 md:bottom-16 2md:bottom-20 w-[20vw] max-w-[150px] min-w-[100px] lg:max-w-[250px] lg:min-w-[120px] object-contain"
//        ref={carRight2Ref}
//      />
//    </div>

//    {/* Content Overlay */}
//    <div className="absolute inset-0 transform md:-translate-y-[5%] flex flex-col items-center justify-center text-white">
//      <img
//        src="/home/logo.png"
//        alt="Tarunya Logo"
//        className="w-[30vw] max-w-[190px] min-w-[150px] md:max-w-[390px] md:min-w-[250px] mb-4"
//        ref={logoRef}
//      />
//    </div>
//  </section>;
