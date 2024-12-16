/** @format */
import { motion } from "framer-motion";

const missionItems = [
  {
    title: "सृजन (Srijan - Creation):",
    description:
      "Provide a platform for students to showcase their talents and explore their artistic potential.",
  },
  {
    title: "संवाद (Samvaad - Dialogue):",
    description:
      "Encourage cross-cultural exchange and meaningful interactions through diverse cultural activities.",
  },
  {
    title: "संयोग (Sanyog - Togetherness):",
    description:
      "Encourage unity and teamwork among participants from various institutions, fostering a spirit of camaraderie.",
  },
  {
    title: "संरक्षणम् (Sanrakshanam - Preservation):",
    description:
      "Honor and preserve the rich cultural heritage while embracing modern expressions of art and creativity.",
  },
];

function VisionMission() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col md:flex-row gap-6 md:gap-12 px-5 py-6 items-start"
    >
      {/* Vision Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 items-start">
        <h1 className="uppercase text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium tracking-widest text-amber-200 mb-4">
          Vision
        </h1>
        <ul className="  text-xs sm:text-sm md:text-base lg:text-lg tracking-wider text-amber-500 space-y-3">
          <li>
            To celebrate youth and passion through a vibrant festival that
            fosters creativity, connection, and unforgettable experiences,
            shifting the focus from competition to collaboration, so that life
            itself becomes a celebration.
          </li>
        </ul>
      </div>

      {/* Mission Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 items-start">
        <h1 className="uppercase text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium tracking-widest text-amber-200 mb-4">
          Mission
        </h1>
        <ul className="  text-xs sm:text-sm md:text-base lg:text-lg tracking-wider text-amber-500 space-y-3">
          {missionItems.map((item, index) => (
            <li key={index}>
              <span className="text-amber-300 text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
                {item.title}
              </span>
              <br />
              {item.description}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default VisionMission;
