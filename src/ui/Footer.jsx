/** @format */
import { FiInstagram } from "react-icons/fi";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex items-center justify-center gap-6 py-8 bg-transparent relative z-50">
      <Link
        to="#"
        className="hover:opacity-80 hover:scale-110 transition-all duration-150 ease-in-out"
      >
        <FiInstagram size="2em" color="#DECBA7" />
      </Link>
      <Link
        to="#"
        className="hover:opacity-80 hover:scale-110 transition-all duration-150 ease-in-out"
      >
        <FaFacebook size="2em" color="#DECBA7" />
      </Link>
      <Link
        to="#"
        className="hover:opacity-80 hover:scale-110 transition-all duration-150 ease-in-out"
      >
        <FaTwitter size="2em" color="#DECBA7" />
      </Link>
    </div>
  );
}

export default Footer;
