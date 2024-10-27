/** @format */

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper as SwiperInstance } from "swiper";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import ConclaveGrid from "../components/conclave/ConclaveGrid";

const slideData = [
  {
    id: 1,
    name: "Dr. Ryan Fernando",
    description:
      "Awarded the Best Nutritionist of the Year by an International Jury from ATP International Fitness and Sports Convention, Member, Olympic Committee Anti-Doping Council of India",
    image:
      "https://imgs.search.brave.com/gHbnZ4kPd5nW5eKm1QAbWq9RPyPkJt2NOGK2LUF9SGU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tdWxn/cmF2ZXByaXZhdGUu/Y29tLmF1L2ltYWdl/ci91cGxvYWRzL211/bGdyYXZlcHJpdmF0/ZS5jb20uYXUvNDU1/Ni9kcklhbk1hdHRo/ZXdzXzFlODU5ZDc5/OWYzMGVhY2E3ZDRm/MThhYWVlYzY1NWQ0/LmpwZw",
  },
  {
    id: 2,
    name: "Dr. Random",

    description:
      "Join us for inspiring talks by industry leaders and alumni, sharing insights on the future of technology and career opportunities in the digital age.",
    image: "/images/conclave.webp",
  },
  {
    id: 3,
    name: "Dr. Random dummy",

    description:
      "Participate in exciting hackathons and coding competitions, putting your skills to the test and collaborating with peers to solve real-world challenges.",
    image: "/images/conclaveslider3.webp",
  },
];

function Conclave() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideCount = slideData.length;

  const onSlideChange = (SwiperInstance) => {
    setActiveIndex(SwiperInstance.realIndex); // Update activeIndex when slide changes
  };
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="main-heading">Conclave</h1>
        <div className="z-[99]  border border-secondary-yellow relative bg-primaryDark  opacity-100 shadow-2xl shadow-red-500/60 overflow-hidden mb-16 rounded-2xl">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation]}
            rewind={true}
            onSlideChange={onSlideChange} // Call this function when the slide changes
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
          >
            {slideData.map((slide) => (
              <SwiperSlide
                key={slide.id}
                className="flex items-center justify-center"
              >
                <div className="flex items-center justify-center w-full h-[300px] md:h-[400px] lg:h-[500px]">
                  <div className="w-full md:w-1/2 h-full">
                    <img
                      src={slide.image}
                      alt={slide.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center p-4 md:p-8">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#DECBA7] mb-4">
                      {slide.name}
                    </h2>
                    <p className="text-xs md:text-base text-[#DECBA7]">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-between">
            <button className="custom-prev z-[999] absolute left-2 bottom-0 transform -translate-y-1/2 bg-[#000000] bg-opacity-50 p-2 rounded-full md:left-4  md:w-8 md:h-8 lg:left-6 lg:w-10 lg:h-10 flex justify-center items-center border-2 border-[#DECBA7] ">
              <FiChevronLeft size={24} color="white" />
            </button>
            <button className="custom-next z-[999] absolute right-2 bottom-0 transform -translate-y-1/2 bg-[#000000] bg-opacity-50  p-2 rounded-full md:right-4   md:w-6 md:h-6 lg:right-6 lg:w-10 lg:h-10 flex justify-center items-center border-2 border-[#DECBA7]">
              <FiChevronRight size={24} color="white" />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center z-[999] gap-2">
            {Array.from({ length: slideCount }).map((_, index) => (
              <span
                key={index}
                className={` mb-4 w-3 h-3 rounded-full ${
                  activeIndex === index
                    ? "bg-[#DECBA7] transition-colors duration-300 ease-in-out"
                    : "bg-[#D1D5DB]"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <ConclaveGrid />
    </section>
  );
}

export default Conclave;
