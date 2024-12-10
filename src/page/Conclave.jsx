/** @format */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import ConclaveGrid from "../components/conclave/ConclaveGrid";
import ComingSoon from "../ui/ComingSoon";
const slideData = [
  {
    title: "Dr. Ryan Fernando",
    role: "Olympic Committee Anti-Doping Council Member",
    description:
      "Awarded the Best Nutritionist of the Year by an International Jury from ATP International Fitness and Sports Convention.",
    image:
      "https://images.unsplash.com/photo-1719937050679-c3a2c9c67b0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
  },
  {
    title: "Dr. Sarah Mitchell",
    role: "Tech Innovation Leader",
    description:
      "Join us for inspiring talks by industry leaders and alumni, sharing insights on the future of technology.",
    image:
      "https://images.unsplash.com/photo-1731484636246-ba9365148d60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
  },
];
function Conclave() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTrue, setIsTrue] = useState(true);
  const slideCount = slideData.length;

  const onSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return !isTrue ? (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-4 sm:py-6 md:py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="main-heading"
        >
          Conclave
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-[#371221] rounded-2xl overflow-hidden border-2 border-primaryDark shadow-lg flex pb-8 md:pb-0"
        >
          <Swiper
            modules={[Navigation, EffectFade, Autoplay]}
            effect="fade"
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onSlideChange={onSlideChange}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            className="h-[600px] md:h-[500px]"
          >
            {slideData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row h-full">
                  {/* Slide Image */}
                  <div className="w-full md:w-1/2 h-full relative overflow-hidden md:h-full">
                    <motion.img
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.7 }}
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-1/3 md:h-full object-cover aspect-square"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Slide Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center gap-4"
                  >
                    <h2 className="text-2xl md:text-4xl font-semibold text-amber-300">
                      {slideData[activeIndex].title}
                    </h2>
                    <h3 className="text-lg md:text-xl text-amber-200 line-clamp-1 md:line-clamp-none">
                      {slideData[activeIndex].role}
                    </h3>
                    <p className="text-sm md:text-base  leading-relaxed line-clamp-2 md:line-clamp-none text-gray-300">
                      {slideData[activeIndex].description}
                    </p>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
            <button className="custom-prev group flex items-center justify-center w-10 h-10 rounded-full bg-[#371221] border border-[#DECBA7] hover:bg-[#DECBA7]/20 transition-all">
              <ChevronLeft className="w-6 h-6 text-[#DECBA7]" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: slideCount }).map((_, index) => (
                <motion.span
                  key={index}
                  animate={{
                    scale: activeIndex === index ? 1.2 : 1,
                    backgroundColor:
                      activeIndex === index ? "#DECBA7" : "#BCA476",
                  }}
                  className="w-2 h-2 rounded-full"
                />
              ))}
            </div>
            <button className="custom-next group flex items-center justify-center w-10 h-10 rounded-full bg-[#371221] border border-[#DECBA7] hover:bg-[#DECBA7]/20 transition-all">
              <ChevronRight className="w-6 h-6 text-[#DECBA7]" />
            </button>
          </div>
        </motion.div>
      </div>
      <ConclaveGrid />
    </motion.section>
  ) : (
    <ComingSoon
      data1="An extraordinary conclave awaits, featuring renowned guests and enlightening discussions."
      data2="Updates will be revealed here shortly!"
    />
  );
}

export default Conclave;
