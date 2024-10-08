/** @format */

import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="text-3xl font-bold text-gray-800 flex items-center gap-1 font-poppins">
      <Link to="/">
        <img
          src="/icons/truniya.png"
          alt="logo"
          className="w-14 h-14  lg:w-24 lg:h-24"
        />
      </Link>
      {/* <p className="text-xl text-[#bca476] hover:text-[#DECBA7] ">Taruniya</p> */}
    </div>
  );
}

export default Logo;
