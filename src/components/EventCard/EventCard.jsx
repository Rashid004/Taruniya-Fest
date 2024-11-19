/** @format */

import { Link } from "react-router-dom";

const EventCard = ({ title, description, link }) => (
  <div className=" hover:shadow-[0_20px_50px_rgba(255,191,0,0.15)]   w-full h-auto bg-primaryDark rounded-3xl shadow-md overflow-hidden mt-8 px-6 sm:px-8 lg:px-12 py-6 sm:py-8 flex flex-col items-center gap-6 sm:gap-8 transition-transform transform hover:scale-105 duration-300 ease-linear group relative">
    <h2 className="text-amber-200 text-2xl sm:text-3xl md:text-4xl font-medium tracking-widest text-center">
      {title}
    </h2>
    <p className="text-gray-300 text-base sm:text-xl font-medium text-center w-full leading-[28px] sm:leading-[30px]">
      {description}
    </p>
    {link && (
      <Link to={link}>
        <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-6 sm:px-8 py-3 sm:py-4 font-medium text-base sm:text-lg md:text-xl   focus:outline-none rounded-lg shadow-lg hover:shadow-amber-500/20 transition duration-300">
          View Events
        </button>
      </Link>
    )}
  </div>
);

export default EventCard;
