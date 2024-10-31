/** @format */
import { motion } from "framer-motion";
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
        <h1 className="uppercase text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium tracking-widest text-amber-500 mb-4">
          Vision
        </h1>
        <ul className="list-disc pl-5 text-xs sm:text-sm md:text-base lg:text-lg tracking-wider text-gray-500 space-y-3">
          <li>To create an engaging platform where young talents thrive.</li>
          <li>Celebrate culture and showcase creativity.</li>
          <li>
            Establish <span className="italic">&apos;Tarunya&apos;</span> as the
            epitome of youth empowerment and artistic expression.
          </li>
        </ul>
      </div>

      {/* Mission Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 items-start">
        <h1 className="uppercase text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium tracking-widest text-amber-500 mb-4">
          Mission
        </h1>
        <ul className="list-disc pl-5 text-xs sm:text-sm md:text-base lg:text-lg tracking-wider text-gray-500 space-y-3">
          <li>
            Unite students and communities through diverse cultural and artistic
            events.
          </li>
          <li>
            Provide opportunities for self-expression, collaboration, and
            professional growth.
          </li>
          <li>Inspire passion and creativity among youth.</li>
          <li>
            Build partnerships with sponsors who value innovation and youth
            development.
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default VisionMission;
