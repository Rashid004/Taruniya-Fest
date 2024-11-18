/** @format */
import { motion } from "framer-motion";
function StandFor() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 bg-primaryDark rounded-lg "
    >
      <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6 md:gap-8 ">
        {/* First Section */}
        <div className="w-full md:w-1/2 ">
          <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-secondary-yellow font-medium mb-2 tracking-widest">
            Tarunya
          </h1>
          <h6 className="text-amber-400 text-sm sm:text-base md:text-lg font-normal tracking-widest">
            comes from the Sanskrit word
          </h6>
          <h3 className="flex items-center gap-2 text-amber-200 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium my-2">
            <blockquote className="tracking-widest">“Taruna”</blockquote>
            <span className="text-amber-200 font-semibold">(तरुण)</span>
          </h3>
          <h6 className="text-secondary-yellow text-sm sm:text-base md:text-lg font-normal tracking-widest">
            meaning youth⌝ vigor⌝ and vitality.
          </h6>
          <p className="text-amber-400 text-sm sm:text-base md:text-lg leading-snug mt-4 tracking-wide">
            It symbolizes the zest and potential inherent in young individuals.
            “Tarunya” represents the boundless energy, creativity, and drive
            that define the youth, celebrating the fusion of passion and
            innovative ideas. This fest is where youthful dreams take flight,
            unlocking new opportunities and pushing the boundaries of
            imagination.
          </p>
        </div>

        {/* Second Section */}
        <div className="w-full md:w-1/2 mt-4 md:mt-0 ">
          <h1 className="uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl text-secondary-yellow font-medium mb-2 sm:mb-4 tracking-widest leading-snug">
            Where Passion Meets Youth
          </h1>
          <h6 className="text-amber-400 text-sm sm:text-base md:text-lg font-normal tracking-wider">
            The tagline reflects
          </h6>
          <h3 className="text-amber-200 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-widest mb-2 lowercase">
            The powerful union of raw passion
          </h3>
          <p className="text-amber-400 text-sm sm:text-base md:text-lg leading-snug mb-2">
            with the energy of youth. It signifies that passion seeks the vigor
            of youth to come alive and reach its full potential. At “Tarunya,”
            this fusion happens
          </p>
          <p className="text-amber-400 text-base sm:text-lg md:text-xl leading-relaxed font-semibold tracking-widest">
            where creativity, ambition, and youthful energy combine to turn
            dreams into reality.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default StandFor;
