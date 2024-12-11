/** @format */

// src/admin/Sidebar.jsx

import {
  CalendarDays,
  Podcast,
  SquarePlus,
  Users,
  Trophy,
  LayoutDashboard,
  Contact,
} from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  {
    icon: <LayoutDashboard />,
    name: "Dashboard",
    href: "/admin-panel/dashboard",
  },
  { icon: <Users />, name: "Portal Users", href: "/admin-panel/user" },
  {
    icon: <Podcast />,
    name: "Announcement",
    href: "/admin-panel/announcement",
  },
  { icon: <CalendarDays />, name: "Events", href: "/admin-panel/events" },
  { icon: <SquarePlus />, name: "Blog", href: "/admin-panel/blog" },
  { icon: <Trophy />, name: "Leaderboard", href: "/admin-panel/leaderboard" },
  // {
  //   icon: <Contact />,
  //   name: "Contact Inquiry",
  //   href: "/admin-panel/contact-inquiry",
  // },
];

function Sidebar() {
  const location = useLocation();
  return (
    <div className="bg-white w-72 min-h-screen flex flex-col justify-between p-6 border-r-2 ">
      <Link href="/" className="flex flex-col items-center mb-6">
        <img
          src="/icons/tarunya.png"
          alt="Tarunya Logo"
          className="w-56 mb-4 transition-transform transform hover:scale-105"
        />
      </Link>
      <nav className="flex-grow mt-8">
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.href}
                className={`flex items-center gap-4 py-3 px-5 rounded-lg text-lg font-medium  transition-all duration-200 ${
                  location.pathname === link.href
                    ? "bg-blue-200 text-blue-800"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                }`}
              >
                <span
                  className={`icon transition-all duration-200 ${
                    location.pathname === link.href
                      ? "text-blue-800 fill-current"
                      : "text-gray-500 group-hover:text-blue-600"
                  }`}
                >
                  {link.icon}
                </span>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-6 p-4 text-center">
        <p className="text-sm text-gray-500">Tarunya © 2024</p>
      </div>
    </div>
  );
}

export default Sidebar;
