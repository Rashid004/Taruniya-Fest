/** @format */

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";

const slideData = [
  {
    id: 1,
    description:
      "lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quolibero aliquam ipsa totam voluptatibus blanditiis distinctio,recusandae dolore eligendi, deleniti perspiciatis cumque saepe rem aspernatur, molestiae temporibus culpa impedit est. dolor sit amet",
    image:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
  },
  {
    id: 2,
    description:
      "lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quolibero aliquam ipsa totam voluptatibus blanditiis distinctio,recusandae dolore eligendi, deleniti perspiciatis cumque saepe rem aspernatur, molestiae temporibus culpa impedit est.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
  },
  {
    id: 3,
    description:
      "lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quolibero aliquam ipsa totam voluptatibus blanditiis distinctio,recusandae dolore eligendi, deleniti perspiciatis cumque saepe rem aspernatur, molestiae temporibus culpa impedit est.",
    image:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
];

function Conclave() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (swiper) swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiper) swiper.slideNext();
  };

  return (
    <section>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl font-bold text-center text-[#DECBA7] tracking-wider mt-8">
          Conclave
        </h1>
        <div className="relative w-full h-full flex items-center justify-center gap-1 mt-8 bg-black rounded-3xl border-2 border-[#DECBA7]">
          <Swiper
            onSwiper={setSwiper}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            mousewheel={true}
            keyboard={true}
            modules={[Mousewheel, Keyboard]}
            loop={true}
          >
            {slideData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="flex flex-col md:flex-row items-center h-full">
                  <div className="w-full md:w-1/2  h-full">
                    <img
                      src={slide.image}
                      alt="conclave"
                      className="w-full h-full object-cover overflow-hidden  md:rounded-l-3xl md:rounded-tr-none"
                    />
                  </div>
                  <div className="w-full md:w-1/2 h-full flex items-center justify-center p-4">
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
          <div className="flex items-center justify-between gap-2 px-4 py-2 absolute bottom-4 left-4 right-4 z-10">
            <button
              onClick={handlePrev}
              className="rounded-full bg-[#8A0000] text-[#DECBA7] px-4 py-3 font-medium text-xl transition-colors ease-linear duration-150 hover:text-[#decba7c4] hover:bg-[#ac1212] focus:outline-none focus:border-[#decba7] focus:ring-[#decba7] focus:ring-2 ring-offset-1 ring-offset-[#ac1212]"
            >
              &larr;
            </button>
            <button
              onClick={handleNext}
              className="bg-[#8A0000] text-[#DECBA7] px-4 py-3 font-medium text-xl rounded-full transition-colors ease-linear duration-150 hover:text-[#decba7c4] hover:bg-[#ac1212] focus:outline-none focus:border-[#decba7] focus:ring-[#decba7] focus:ring-2 ring-offset-1 ring-offset-[#ac1212]"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Conclave;
