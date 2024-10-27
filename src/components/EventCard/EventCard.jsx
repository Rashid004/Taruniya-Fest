/** @format */

import { Link } from "react-router-dom";

const EventCard = ({ title, description, link }) => (
  <div className="border border-secondary shadow-hover w-full h-auto bg-primaryDark rounded-3xl shadow-md overflow-hidden mt-8 px-6 sm:px-8 lg:px-12 py-6 sm:py-8 flex flex-col items-center gap-6 sm:gap-8 transition-transform transform hover:scale-105 duration-300 ease-linear group relative">
    <h2 className="text-[#DECBA7] text-2xl sm:text-3xl md:text-4xl font-medium tracking-widest text-center">
      {title}
    </h2>
    <p className="text-[#DECBA7] text-lg sm:text-xl font-medium text-center w-[90%] leading-[28px] sm:leading-[30px]">
      {description}
    </p>
    {link && (
      <Link to={link}>
        <button className="bg-[#8A0000] text-[#DECBA7] px-6 sm:px-8 py-3 sm:py-4 font-medium text-base sm:text-lg md:text-xl rounded-md transition-colors duration-150 hover:text-[#decba7c4] hover:bg-[#ac1212] focus:outline-none focus:border-[#decba7] focus:ring-[#decba7] focus:ring-2 ring-offset-1 ring-offset-[#ac1212]">
          View Events
        </button>
      </Link>
    )}
  </div>
);

export default EventCard;
