/** @format */

// src/admin/Sidebar.jsx

import { CalendarDays, Podcast, SquarePlus, Users, Trophy } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { icon: <Users />, name: "Portal Users", href: "/admin-panel/user" },
  {
    icon: <Podcast />,
    name: "Announcement",
    href: "/admin-panel/announcement",
  },
  { icon: <CalendarDays />, name: "Events", href: "/admin-panel/events" },
  { icon: <SquarePlus />, name: "Blog", href: "/admin-panel/blog" },

  { icon: <Trophy />, name: "Leaderboard", href: "/admin-panel/leaderboard" },
];

function Sidebar() {
  return (
    <div className="bg-white w-72 min-h-screen flex flex-col justify-between p-4 border-r-2 border-gray-200">
      <div className="flex flex-col items-center mb-4">
        <img
          src="/icons/tarunya.png"
          alt="Tarunya Logo"
          className="w-48 mb-4"
        />
      </div>
      <nav className="flex-grow mt-6">
        <ul className="space-y-5">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `text-gray-800 flex items-center gap-2 py-2 px-4 rounded-lg text-lg font-medium ${
                    isActive ? "bg-blue-200 text-blue-800" : "hover:bg-blue-200"
                  }`
                }
              >
                <span
                  className={({ isActive }) =>
                    isActive ? "text-blue-800" : "text-gray-500"
                  }
                >
                  {link.icon}
                </span>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4">
        <p className="text-sm text-gray-500">Tarunya © 2024</p>
      </div>
    </div>
  );
}

export default Sidebar;
