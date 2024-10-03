/** @format */

import { Link } from "react-router-dom";

const EventCard = ({ title, description, link }) => (
  <div className="shadows-hover w-full h-auto bg-[#000000] rounded-3xl shadow-md overflow-hidden mt-8 px-12 py-8 flex flex-col items-center gap-8 border-2 border-[#DECBA7] transition-shadow ease-linear duration-300">
    <h2 className="text-[#DECBA7] text-4xl font-medium">{title}</h2>
    <p className="text-[#DECBA7] text-xl font-medium text-center w-[90%] leading-[30px]">
      {description}
    </p>
    {link && (
      <Link to={link}>
        <button className="bg-[#8A0000] text-[#DECBA7] px-8 py-4 font-medium text-xl rounded-[4px] transition-colors ease-linear duration-150 hover:text-[#decba7c4] hover:bg-[#ac1212]  focus:outline-none focus:border-[#decba7] focus:ring-[#decba7] focus:ring-2 ring-offset-1 ring-offset-[#ac1212]">
          View Events
        </button>
      </Link>
    )}
  </div>
);

export default EventCard;
