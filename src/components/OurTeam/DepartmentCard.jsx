/** @format */
import { motion } from "framer-motion";
import { departmentImages } from "../../constant/ourTeam";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper CSS
import "swiper/css/effect-fade"; // Fade effect CSS
import "swiper/css/autoplay"; // Autoplay CSS
import { Autoplay, EffectFade } from "swiper/modules";

function DepartmentCard() {
  return (
    <div className="w-full space-y-8">
      <Swiper
        modules={[Autoplay, EffectFade]} // Load necessary Swiper modules
        effect="fade" // Use fade effect
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        fadeEffect={{ crossFade: true }} // Smooth cross-fade
        loop={true} // Enable loop for continuous play
        className="w-full h-full"
      >
        {departmentImages.map((img, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className=" w-full h-full rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.img
                src={img}
                alt={`Department ${index + 1}`}
                className="object-contain w-full h-20 sm:h-24 md:h-28 lg:h-30"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default DepartmentCard;
