/** @format */

import { useEffect, useRef } from "react";
import gsap from "gsap";

function Home() {
  // Refs for animated elements
  const lineBgRef = useRef(null);
  const carRight2Ref = useRef(null);
  const carRight1Ref = useRef(null);
  const busRef = useRef(null);
  const carLeft2Ref = useRef(null);
  const carLeft1Ref = useRef(null);
  const clockTowerRef = useRef(null);
  const gatewayRef = useRef(null);
  const cloudRight1Ref = useRef(null);
  const cloudRight2Ref = useRef(null);
  const cloudLeft1Ref = useRef(null);
  const cloudLeft2Ref = useRef(null);
  const logoRef = useRef(null);
  const buildingRightRef = useRef(null);
  const buildingLeftRef = useRef(null);

  useEffect(() => {
    // Animate line background
    gsap.fromTo(
      lineBgRef.current,
      { y: 400 }, // Initial off-screen position
      { y: 0, ease: "back.out", delay: 0.9 } // Smoothly back to its current position
    );

    // Animate carRight2 from the right
    gsap.fromTo(
      carRight2Ref.current,
      { x: -500 }, // Start far from the right
      { x: 0, ease: "power4.out", delay: 1.2 } // Move smoothly to its position
    );

    // // Animate carRight1 from the right
    gsap.fromTo(
      carRight1Ref.current,
      { x: -500 }, // Start far from the right
      { x: 0, ease: "power4.out", delay: 1.5 }
    );

    // // Animate bus from the left
    gsap.fromTo(
      busRef.current,
      { x: -600 }, // Start far from the left
      { x: 0, ease: "power4.out", delay: 1.8 }
    );

    // // Animate carLeft2 from the left
    gsap.fromTo(
      carLeft2Ref.current,
      { x: -600 }, // Start far from the left
      { x: 0, ease: "power4.out", delay: 2.2 }
    );

    // // Animate carLeft1 from the left
    gsap.fromTo(
      carLeft1Ref.current,
      { x: -300 }, // Start far from the left
      { x: 0, ease: "power4.out", delay: 2.5 }
    );

    // // Animate the clock tower from the bottom
    gsap.fromTo(
      clockTowerRef.current,
      { y: 800 }, // Start below the screen
      { y: 0, ease: "back.out", delay: 2.8 }
    );

    // // Animate Gateway of India from the top
    gsap.fromTo(
      gatewayRef.current,
      { y: -900 }, // Start from the top
      { y: 0, ease: "back.out", delay: 3.2 }
    );

    // // Animate right cloud-1 and cloud-2 from the right
    gsap.fromTo(
      cloudRight1Ref.current,
      { x: 500 }, // Start off-screen to the right
      { x: 0, duration: 2.6, ease: "power4.out", delay: 1.5 }
    );
    gsap.fromTo(
      cloudRight2Ref.current,
      { x: 500 }, // Start off-screen to the right
      { x: 0, duration: 2.6, ease: "power4.out", delay: 1.8 }
    );

    // // Animate left cloud-1 and cloud-2 from the left
    gsap.fromTo(
      cloudLeft1Ref.current,
      { x: -500 }, // Start off-screen to the left
      { x: 0, duration: 2.6, ease: "power4.out", delay: 1.2 }
    );
    gsap.fromTo(
      cloudLeft2Ref.current,
      { x: -500 }, // Start off-screen to the left
      { x: 0, duration: 2.6, ease: "power4.out", delay: 1.5 }
    );

    // // Animate logo with scale effect
    gsap.fromTo(
      logoRef.current,
      {}, // Start small
      { scale: 1, opacity: 1, ease: "bounce.out", delay: 1.8 } // Smoothly return to normal size
    );

    gsap.fromTo(
      buildingRightRef.current,
      { y: 500, opacity: 0.5 }, // Start off-screen to the left
      { y: 0, opacity: 1, ease: "power4.out", delay: 1.8 }
    );

    gsap.fromTo(
      buildingLeftRef.current,
      { y: 500, opacity: 0.5 }, // Start off-screen to the left
      { y: 0, opacity: 1, ease: "power4.out", delay: 1.8 }
    );
  }, []);

  return (
    <section className="relative w-full h-[88vh] overflow-hidden ">
      {/* Clouds Left-1 */}
      <img
        src="/home/cloudleft-1.png"
        alt="Cloud Left-1"
        className="w-[15vw] max-w-[150px] min-w-[100px] absolute left-1/3 top-[15%] z-10"
        ref={cloudLeft1Ref}
      />

      {/* Clouds Left-2 */}
      <img
        src="/home/cloudleft-2.png"
        alt="Cloud left-2"
        className="w-[15vw] max-w-[150px] min-w-[100px] absolute left-[10%] top-[10%] z-20"
        ref={cloudLeft2Ref}
      />

      {/* Clouds Right-1 */}
      <div
        className="absolute right-0 top-1/4 lg:right-[20%] lg:top-[20%] z-30"
        ref={cloudRight1Ref}
      >
        <img
          src="/home/cloudright-1.png"
          alt="Cloud right-1"
          className="w-[30vw] max-w-[370px] min-w-[180px] object-contain"
        />
      </div>

      {/* Clouds Right-2 */}
      <div className="absolute right-0 top-0 z-40" ref={cloudRight2Ref}>
        <img
          src="/home/cloudright-2.png"
          alt="Cloud right-2"
          className="w-[20vw] max-w-[230px] min-w-[120px] object-contain"
        />
      </div>

      {/* Left Building */}
      <div
        className="absolute left-0 bottom-[20%] 2md:bottom-1/4 transform -translate-x-6 lg:translate-x-2 w-[40vw] max-w-[300px] min-w-[220px] md:min-w-[350px] md:max-w-[500px] 2md:max-w-[600px] 2md:min-w-[300px] lg:min-w-[200px] lg:max-w-[550px]"
        ref={buildingLeftRef}
      >
        <img
          src="/home/leftbuilding.png"
          alt="left-building"
          className="w-full object-contain"
        />
      </div>

      {/* Gateway of India */}
      <div
        className="absolute left-[6%] bottom-[20%] 2md:bottom-[25%] w-[25vw] max-w-[300px] min-w-[140px] md:min-w-[250px] md:max-w-[400px]"
        ref={gatewayRef}
      >
        <img
          src="/home/gateway.png"
          alt="Gateway of India"
          className="w-full object-contain"
        />
      </div>

      {/* Right Building */}
      <div
        className="absolute right-0 top-[65%] md:top-[54%] 2md:top-[40%] lg:top-[35%] w-[45vw] max-w-[400px] min-w-[200px] md:max-w-[500px] md:min-w-[250px] 2md:max-w-[600px] 2md:min-w-[300px]"
        ref={buildingRightRef}
      >
        <img
          src="/home/buildingright.png"
          alt="building right"
          className="w-full object-contain"
        />
      </div>

      {/* Clock Tower */}
      <div
        className="absolute right-[20%] lg:right-[15%] bottom-[20%] 2md:bottom-[25%] w-[5vw] max-w-[100px] min-w-[50px] md:max-w-[150px] md:min-w-[80px] lg:max-w-[90px] lg:min-w-[45px]"
        ref={clockTowerRef}
      >
        <img
          src="/home/clocktower.png"
          alt="Clock Tower"
          className="w-full object-contain"
        />
      </div>

      {/* Line Background */}
      <div
        className="absolute left-0 right-0 bottom-[20%] 2md:bottom-1/4"
        ref={lineBgRef}
      >
        <img
          src="/home/linebg.png"
          alt="Line bg"
          className="w-full object-cover"
        />
      </div>

      {/* Vehicles */}
      <div className="absolute bottom-0 w-full h-[20vh] overflow-hidden">
        <img
          src="/home/carleft-1.png"
          alt="Car left 1"
          className="absolute -left-[10%] lg:-left-[5%] bottom-16 md:bottom-20 2md:bottom-24 w-[20vw] max-w-[150px] min-w-[100px] lg:max-w-[250px] lg:min-w-[120px] object-contain"
          ref={carLeft1Ref}
        />
        <img
          src="/home/carleft-2.png"
          alt="Car left 2"
          className="absolute left-0 md:left-12 lg:left-[15%] bottom-0 transform -translate-y-2 w-[20vw] max-w-[150px] min-w-[100px] lg:max-w-[250px] lg:min-w-[120px] object-contain"
          ref={carLeft2Ref}
        />
        {/* Bus */}
        <img
          src="/home/bus.png"
          alt="Bus"
          className="absolute left-1/2 md:left-[48%] bottom-0 transform -translate-x-1/2 w-[40vw] max-w-[400px] min-w-[200px] md:max-w-[400px] md:min-w-[200px] lg:max-w-[500px] lg:min-w-[200px] object-contain"
          ref={busRef}
        />
        <img
          src="/home/carright-1.png"
          alt="Car right 1"
          className="absolute right-[15%] md:right-[10%] lg:right-1/4 bottom-0 w-[20vw] max-w-[300px] min-w-[150px] lg:max-w-[250px] lg:min-w-[120px] object-contain hidden md:block"
          ref={carRight1Ref}
        />
        <img
          src="/home/carright-2.png"
          alt="Car right 2"
          className="absolute right-0 lg:right-[10%] bottom-0 md:bottom-16 2md:bottom-20 w-[20vw] max-w-[150px] min-w-[100px] lg:max-w-[250px] lg:min-w-[120px] object-contain"
          ref={carRight2Ref}
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 transform md:-translate-y-[20%] flex flex-col items-center justify-center text-white">
        <img
          src="/home/logo.png"
          alt="Tarunya Logo"
          className="w-[30vw] max-w-[160px] min-w-[120px] md:max-w-[350px] md:min-w-[200px] mb-4"
          ref={logoRef}
        />
      </div>
    </section>
  );
}

export default Home;
