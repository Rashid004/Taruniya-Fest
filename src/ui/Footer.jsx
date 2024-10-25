/** @format */
import { FiInstagram } from "react-icons/fi";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex items-center justify-center gap-6 py-8 bg-transparent relative z-50">
      <Link
        to="https://www.instagram.com/tarunyafest/profilecard/?igsh=eWdmNDlyMGIwcWh3"
        className="hover:opacity-80 hover:scale-110 transition-all duration-150 ease-in-out"
        target="_blank"
      >
        <FiInstagram size="2em" color="#DECBA7" />
      </Link>
      <Link
        to="https://youtube.com/@tarunyafest?si=ehw27yvxBbKKKTKY"
        className="hover:opacity-80 hover:scale-110 transition-all duration-150 ease-in-out"
        target="_blank"
      >
        <FaYoutube size="2em" color="#DECBA7" />
      </Link>
      <Link
        to="https://x.com/tarunyafest?t=qgszwIblj4WjxhZ0xssERw&s=09"
        className="hover:opacity-80 hover:scale-110 transition-all duration-150 ease-in-out"
        target="_blank"
      >
        <FaTwitter size="2em" color="#DECBA7" />
      </Link>
    </div>
  );
}

export default Footer;
