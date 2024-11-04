/** @format */

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/conclave", label: "Conclave" },
  { href: "/announcement", label: "Announcement" },
  { href: "/events", label: "Events" },
  { href: "/leaderboard", label: "Leader Board" },
  { href: "/blog", label: "Blog" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/ourteam", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="relative border-b-[1px] border-secondary">
      {/* Desktop Navigation */}
      <nav className="bg-transparent hidden xl:flex justify-center items-center px-4 xl:px-6 py-8">
        <ul className="flex items-center lg:gap-[9px] xl:gap-6 2xl:gap-14">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="text-secondary text-nowrap tracking-wider hover:text-secondary-yellow transition-colors duration-300 text-lg 2xl:text-xl font-medium uppercase"
            >
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="xl:hidden flex justify-between px-4 py-4">
        <Logo />
        <button
          className="z-50 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {!isOpen && <RxHamburgerMenu size="2em" color="#DECBA7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[9999] xl:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="absolute inset-0 z-[9999] bg-black bg-opacity-50 backdrop-blur-md"
          onClick={toggleMenu}
        ></div>
        <nav className="absolute top-0 right-0 bottom-0 w-full shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col z-[9999]">
          <div className="flex justify-between py-4 px-4">
            <Logo />
            <button onClick={toggleMenu} className="focus:outline-none">
              <IoClose size="2em" color="#DECBA7" />
            </button>
          </div>
          <div className="flex flex-col gap-4 p-4">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={`tracking-wider block py-3 text-lg text-secondary font-medium hover:text-secondary-yellow transition-colors ${
                  activeLink === item.href ? "text-secondary-yellow" : ""
                }`}
                onClick={() => {
                  toggleMenu();
                  setActiveLink(item.href);
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
