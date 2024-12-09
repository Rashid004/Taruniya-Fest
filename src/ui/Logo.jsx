/** @format */

import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        src="/icons/tarunya.png"
        alt="logo"
        className="w-24 md:w-32 lg:w-52 "
      />
    </Link>
  );
}

export default Logo;
