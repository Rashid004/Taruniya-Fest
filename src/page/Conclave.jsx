/** @format */

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import ConclaveGrid from "../components/conclave/ConclaveGrid";

const slideData = [
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo libero aliquam ipsa totam voluptatibus blanditiis distinctio, recusandae dolore eligendi, deleniti perspiciatis cumque saepe rem aspernatur, molestiae temporibus culpa impedit est.",
    image: "/images/conclaveslider5.webp",
  },
  {
    id: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo libero aliquam ipsa totam voluptatibus blanditiis distinctio, recusandae dolore eligendi, deleniti perspiciatis cumque saepe rem aspernatur, molestiae temporibus culpa impedit est.",
    image: "/images/conclave.webp",
  },
  {
    id: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo libero aliquam ipsa totam voluptatibus blanditiis distinctio, recusandae dolore eligendi, deleniti perspiciatis cumque saepe rem aspernatur, molestiae temporibus culpa impedit est.",
    image: "/images/conclaveslider3.webp",
  },
];

function Conclave() {
  const [swiper, setSwiper] = useState(null);

  return (
    <section className=" min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-[#DECBA7] tracking-wider mb-8">
          Conclave
        </h1>
        <div className="relative w-full bg-black rounded-3xl border-2 border-[#DECBA7] overflow-hidden">
          <Swiper
            onSwiper={setSwiper}
            modules={[Navigation, Mousewheel, Keyboard]}
            mousewheel={true}
            keyboard={true}
            rewind={true}
            navigation={{
              prevEl: ".swiper-button-prev ",
              nextEl: ".swiper-button-next",
            }}
            className="h-[600px]"
          >
            {slideData.map((slide) => (
              <SwiperSlide
                key={slide.id}
                className="flex items-center justify-center"
              >
                <div className="flex flex-col md:flex-row items-center h-full w-full">
                  <div className="w-full md:w-1/2 h-1/2 md:h-full">
                    <AnimatePresence mode="wait">
                      <motion.img
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        src={slide.image}
                        alt={`conclave-${slide.id}`}
                        className="w-full h-full object-cover"
                      />
                    </AnimatePresence>
                  </div>
                  <div className="w-full md:w-1/2 h-full flex items-center justify-center p-4 bg-black">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={slide.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-sm md:text-base lg:text-lg text-[#DECBA7] text-center px-4"
                      >
                        {slide.description}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev text-2xl !text-[#DECBA7] !left-4 py-8 px-8 bg-[#000000] border-2 border-[#DECBA7] opacity-55 hover:opacity-100 transition-opacity ease-linear duration-300 hover:bg-red-500 rounded-full"></div>
          <div className="swiper-button-next !text-[#DECBA7] !right-4 py-8 px-8 bg-[#000000] opacity-55 hover:opacity-100 transition-opacity ease-linear duration-300 hover:bg-red-500 rounded-full border-2 border-[#DECBA7] "></div>
        </div>
      </div>
      <ConclaveGrid />
    </section>
  );
}

export default Conclave;
