/** @format */

import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src="/icons/tarunya.png" alt="logo" className="w-24 lg:w-44 " />
    </Link>
  );
}

export default Logo;
